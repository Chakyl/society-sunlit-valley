//priority: 100
console.info("[SOCIETY] fishPondQuestManager.js loaded");


global.handleManagerQuestSubmission = (entity, fishPondPos, attachedPlayer, delay) => {
  const { level, block, inventory } = entity;
  const server = level.server;

  //console.info(`[QUEST_MANAGER] handleManagerQuestSubmission called | delay: ${delay} | player: ${attachedPlayer?.getUuid()}`);

  server.scheduleInTicks(delay, () => {
    const fishPond = level.getBlock(fishPondPos);
    const {x, y, z} = fishPond;
    const nbt = fishPond.getEntityData();

    if (!nbt || !nbt.data) {
      console.warn(`[QUEST_MANAGER] No NBT data found for fish pond at (${x}, ${y}, ${z})`);
      return;
    }

    const {type, max_population, quest_id } = nbt.data;
    const { facing, valid, mature, upgraded, quest } =
      global.getPondProperties(fishPond);

    console.info(`[QUEST_MANAGER] Pond at (${x}, ${y}, ${z}) | type: ${type} | max_pop: ${max_population} | quest_id: ${quest_id} | quest: ${quest}`);

    if (quest === "true" && global.fishPondDefinitions.get(`${type}`)){
      const questContent = getRequestedItems(type, Number(max_population))[quest_id];

      if (!questContent) {
        console.warn(`[QUEST_MANAGER] No quest content found for type: ${type}, max_population: ${max_population}, quest_id: ${quest_id}`);
        return;
      }

      console.info(`[QUEST_MANAGER] Quest content | item: ${questContent.item} | base count: ${questContent.count}`);

      let checkedCount = attachedPlayer.stages.has("pond_house_five") ?
        Math.round(questContent.count / 2) :
        questContent.count;

      console.info(`[QUEST_MANAGER] Required count: ${checkedCount} | pond_house_five stage: ${attachedPlayer.stages.has("pond_house_five")}`);

      if (global.hasInventoryItems(inventory, questContent.item, checkedCount)) {
        console.info(`[QUEST_MANAGER] Quest fulfilled! Consuming ${checkedCount}x ${questContent.item} and upgrading pond at (${x}, ${y}, ${z})`);

        successParticles(level, fishPond);
        fishPond.set(fishPond.id, {
          facing: facing,
          valid: valid,
          mature: mature,
          upgraded: upgraded,
          quest: false,
        });

        const newMaxPop = increaseStage(max_population, Number(max_population) === 7 ? 3 : 2);
        console.info(`[QUEST_MANAGER] Increasing max_population from ${max_population} to ${newMaxPop}`);

        nbt.merge({
          data: {
            quest_id: 0,
            max_population: newMaxPop,
          },
        });
        fishPond.setEntityData(nbt);
        global.inventoryUseItems(inventory, questContent.item, checkedCount);

        level.spawnParticles(
          "species:ascending_dust",
          true,
          x,
          y + 1,
          z,
          0.2 * rnd(1, 1.5),
          0.2 * rnd(1, 1.5),
          0.2 * rnd(1, 1.5),
          3,
          0.01
        );
      } else {
        console.info(`[QUEST_MANAGER] Insufficient items | need ${checkedCount}x ${questContent.item}`);
      }
    } else {
      console.info(`[QUEST_MANAGER] Pond at (${x}, ${y}, ${z}) skipped | quest: ${quest} | definition exists: ${!!global.fishPondDefinitions.get(`${type}`)}`);
    }
  });
}

global.runFishPondQuestManager = (entity) => {
  const { block, level } = entity;
  const { x, y, z } = block;
  let attachedPlayer;

  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner){
      attachedPlayer = p;
    }
  });

  if (attachedPlayer) {
    let radius = 10;
    let scanBlock;
    let dayTime = level.dayTime();
    let morningModulo = dayTime % 24000;
    let questManagerProgTime = 1000;
    let scannedBlocks = 0;

    console.info(`[QUEST_MANAGER] runFishPondQuestManager | manager pos: (${x}, ${y}, ${z}) | owner: ${attachedPlayer.getUuid()} | dayTime: ${dayTime} | modulo: ${morningModulo}`);

    if (morningModulo >= questManagerProgTime &&
      morningModulo < questManagerProgTime + artMachineTickRate) {

      console.info(`[QUEST_MANAGER] Scanning for fish ponds in ${radius * 2 + 1}x${radius * 2 + 1}x${radius * 2 + 1} area around (${x}, ${y}, ${z})`);

      for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius),
        [x + radius, y + radius, z + radius])) {
        scanBlock = level.getBlock(pos);
        if (scanBlock.id === "society:fish_pond") {
          console.info(`[QUEST_MANAGER] Fish pond found at (${pos.x}, ${pos.y}, ${pos.z}) | scheduling submission with delay: ${scannedBlocks * 5}`);
          global.handleManagerQuestSubmission(
            entity,
            pos.immutable(),
            attachedPlayer,
            scannedBlocks * 5);
          scannedBlocks++;
        }
      }

      console.info(`[QUEST_MANAGER] Scan complete | total fish ponds found: ${scannedBlocks}`);

      level.server.runCommandSilent(
        `playsound botania:spreader_fire block @a ${x} ${y} ${z}`
      )
    }
  } else {
    console.warn(`[QUEST_MANAGER] No attached player found for manager at (${x}, ${y}, ${z}) | owner UUID: ${block.getEntityData()?.data?.owner}`);
  }
}


StartupEvents.registry("block", (event) => {
  event
    .create("society:fish_pond_quest_manager", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.fish_pond_quest_manager.tooltip").gray());
      item.tooltip(Text.translatable("society.working_block_entity.apply_player_skill").gray());
      item.tooltip(Text.translatable("tooltip.society.area", `21x21x21`).green());
      item.modelJson({
        parent: "society:block/kubejs/fish_pond_quest_manager",
      });
    })
    .soundType("copper")
    .model("society:block/kubejs/fish_pond_quest_manager")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runFishPondQuestManager(entity);
      });
      blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) =>
            blockEntity.inventory.getSlotLimit(slot)
          )
          .getSlots((blockEntity) =>
            blockEntity.inventory.slots
          )
          .getStackInSlot((blockEntity, slot) =>
            blockEntity.inventory.getStackInSlot(slot)
          )
      );
    });
});