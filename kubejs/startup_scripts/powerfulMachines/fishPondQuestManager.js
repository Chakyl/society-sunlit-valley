//priority: 100
console.info("[SOCIETY] fishPondQuestManager.js loaded");


global.handleManagerQuestSubmission = (entity, fishPondPos, attachedPlayer, delay) => {
  const { level, block, inventory } = entity;
  const server = level.server;

  server.scheduleInTicks(delay, () => {
    const fishPond = level.getBlock(fishPondPos);
    const {x, y, z} = fishPond;
    const nbt = fishPond.getEntityData();

    if (!nbt || !nbt.data) {
      return;
    }

    const { type: fishType, max_population, quest_id } = nbt.data;
    const { facing, valid, mature, upgraded, quest } =
      global.getPondProperties(fishPond);


    if (quest === "true" && global.fishPondDefinitions.get(`${fishType}`)){
      const questContent = getRequestedItems(fishType, Number(max_population))[quest_id];

      if (!questContent) {
        return;
      }

      let checkedCount = attachedPlayer.stages.has("pond_house_five") ?
        Math.round(questContent.count / 2) :
        questContent.count;

      if (global.hasInventoryItems(inventory, questContent.item, checkedCount)) {

        successParticles(level, fishPond);
        fishPond.set(fishPond.id, {
          facing: facing,
          valid: valid,
          mature: mature,
          upgraded: upgraded,
          quest: false,
        });

        const newMaxPop = increaseStage(max_population, Number(max_population) === 7 ? 3 : 2);

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
      }
    }
  });
}

global.getQuestItems = (block, level) => {
  let requestedItems = [];
  const { x, y, z } = block;
  let attachedPlayer;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner){
      attachedPlayer = p;
    }
  });

  if (attachedPlayer){
    let radius = 10;
    let scanBlock;
    for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius),
      [x + radius, y + radius, z + radius])) {
      scanBlock = level.getBlock(pos);
      if (scanBlock.id === "society:fish_pond"){
        let fishPond = level.getBlock(pos);
        let nbt = fishPond.getEntityData();

        if(!nbt || !nbt.data) continue;

        let { type: fishType, max_population, quest_id } = nbt.data;
        let { quest } = global.getPondProperties(fishPond);

        if (quest === "true" && global.fishPondDefinitions.get(`${fishType}`)){
          let questContent = getRequestedItems(fishType, Number(max_population))[quest_id];
          if (!questContent) {
            continue;
          }
          let checkedCount = attachedPlayer.stages.has("pond_house_five") ?
            Math.round(questContent.count / 2) :
            questContent.count;
          let requestedItem = questContent.item;
          requestedItems.push({ item : requestedItem, count : checkedCount});
        }
      }
    }
  }

  const grouped = Object.values(
    requestedItems.reduce((acc, entry) => {
      const item = entry.item;
      const count = entry.count;
      if (acc[item]) {
        acc[item].count += count;
      } else {
        acc[item] = { item: item, count: count };
      }
      return acc;
    }, {})
  );

  const entries = grouped.map((entry) => {
    const displayName = Item.of(entry.item).displayName.string;
    return {Checked: "0b",
    Text: `{"text":"${entry.count} x ${displayName}"}`,}
  });

  const pageSize = 6;
  let pages = [];
  for (let i = 0; i < entries.length; i += pageSize) {
    pages.push({ Entries: entries.slice(i, i + pageSize) });
  }

  return pages;
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
    let cDayTime = level.dayTime();
    let currentMorningModulo = cDayTime % 24000;
    let questManagerProgTime = 1000;
    let scannedBlocks = 0;

    if (currentMorningModulo >= questManagerProgTime &&
      currentMorningModulo < questManagerProgTime + artMachineTickRate) {


      for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius),
        [x + radius, y + radius, z + radius])) {
        scanBlock = level.getBlock(pos);
        if (scanBlock.id === "society:fish_pond") {
          global.handleManagerQuestSubmission(
            entity,
            pos.immutable(),
            attachedPlayer,
            scannedBlocks * 5);
          scannedBlocks++;
        }
      }

      level.server.runCommandSilent(
        `playsound botania:spreader_fire block @a ${x} ${y} ${z}`
      )
    }
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