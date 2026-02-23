console.info("[SOCIETY] autoGrabber.js loaded");

const handleAutoGrabSpecialItem = (
  data,
  day,
  chance,
  hungry,
  minHearts,
  mult,
  item,
  hasQuality,
  plushieModifiers,
  e
) => {
  const { player, target, level, server, block, inventory } = e;
  let affection;
  let mood;
  let recycleSparkstone;
  let resolvedItem = item;
  let resolvedChance = chance;
  let resolvedHasQuality = hasQuality
  let dropAmount =
    mult * (plushieModifiers && plushieModifiers.doubleDrops ? 2 : 1);
  if (plushieModifiers) {
    affection = 1000;
    mood = 256;
    resolvedChance = chance + plushieModifiers.probabilityIncrease;
    if (plushieModifiers.processItems) {
      let processOutput = global.getProcessedItem(item, dropAmount);
      resolvedItem = processOutput.item;
      dropAmount = Math.round(dropAmount / processOutput.divisor);
      resolvedHasQuality = processOutput.preserveQuality
    }
  } else {
    affection = data.getInt("affection") || 0;
    mood = global.getOrFetchMood(level, target, day, player);
  }
  let hearts = Math.floor(affection / 100);

  let quality = 0;

  if (
    (!hungry || plushieModifiers) &&
    hearts >= minHearts &&
    Math.random() <= resolvedChance
  ) {
    if (item.includes("large") && Math.random() > (mood + hearts * 10) / 256) {
      return;
    }
    if (resolvedHasQuality && mood >= 160) {
      quality = global.getHusbandryQuality(hearts, mood);
    }
    let specialItem = Item.of(
      `${dropAmount}x ${resolvedItem}`,
      quality > 0 ? `{quality_food:{effects:[],quality:${quality}}}` : null
    );
    let specialItemResultCode = global.insertBelow(level, block, specialItem);
    if (specialItemResultCode == 1) {
      recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
      if (!recycleSparkstone && global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
        console.error("Sparkstone not consumed when it should have been!");
      server.runCommandSilent(
        `playsound stardew_fishing:dwop block @a ${block.x} ${block.y} ${block.z}`
      );
      if (target.x) {
        level.spawnParticles(
          "farmersdelight:star",
          true,
          target.x,
          target.y + 1,
          target.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          3,
          0.01
        );
      }
    }
  }
};

global.autoGrabAnimal = (entity, player, animal, plushieModifiers) => {
  const { inventory, block, level } = entity;
  let recycleSparkstone;
  let data;
  let nbt;
  if (plushieModifiers) {
    nbt = animal.getEntityData();
    data = nbt.data.animal;
  } else {
    data = animal.persistentData;
  }
  const day = global.getDay(level);
  let mood;
  let hungry;
  if (plushieModifiers) {
    hungry = false;
    mood = 256;
  } else {
    hungry = day - data.getInt("ageLastFed") > 1;
    mood = global.getOrFetchMood(level, animal, day, player);
  }
  if (mood < 64 && Math.random() < mood / 64) return;
  if (!hungry) {
    if (
      (plushieModifiers
        ? global.milkableAnimals.includes(data.type)
        : global.checkEntityTag(animal, "society:milkable_animal")) &&
      global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1
    ) {
      let milkItem = global.getMilk(
        level,
        plushieModifiers ? data : animal,
        data,
        player,
        day,
        false,
        plushieModifiers
      );
      if (milkItem !== -1) {
        let insertedMilk = global.insertBelow(level, block, milkItem) == 1;
        if (insertedMilk) {
          recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
          if (!recycleSparkstone && global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
            console.error("Sparkstone not consumed when it should have been!");
          if (!plushieModifiers && !global.getAnimalIsNotCramped(animal, 1.1))
            data.affection = data.getInt("affection") - 50;
          level.server.runCommandSilent(
            `playsound minecraft:entity.cow.milk block @a ${animal.x} ${animal.y} ${animal.z}`
          );
          level.spawnParticles(
            "atmospheric:aloe_blossom",
            true,
            animal.x,
            animal.y + 1.5,
            animal.z,
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            5,
            0.01
          );
          if (plushieModifiers) {
            nbt.merge({
              data: {
                animal: {
                  ageLastMilked: day,
                },
              },
            });
            animal.setEntityData(nbt);
          }
        }
      }
    }
    if (global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1) {
      global.handleSpecialHarvest(
        level,
        plushieModifiers ? data : animal,
        player,
        player.server,
        block,
        inventory,
        plushieModifiers,
        handleAutoGrabSpecialItem
      );
      if (plushieModifiers) {
        nbt.merge({
          data: {
            animal: {
              ageLastDroppedSpecial: day,
            },
          },
        });
        animal.setEntityData(nbt);
      }
    }
    if (
      level.getBlock(block.pos).getProperties().get("upgraded") === "true" &&
      global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1
    ) {
      let droppedLoot = global.getMagicShearsOutput(
        level,
        plushieModifiers ? data : animal,
        player,
        plushieModifiers
      );
      if (droppedLoot !== -1) {
        level.server.runCommandSilent(
          `playsound minecraft:entity.sheep.shear block @a ${block.x} ${block.y} ${block.z}`
        );
        let insertedMagicDrops = false;
        for (let i = 0; i < droppedLoot.length; i++) {
          insertedMagicDrops =
            global.insertBelow(level, block, droppedLoot[i]) == 1;
        }
        if (insertedMagicDrops) {
          recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
          if (!recycleSparkstone && global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
            console.error("Sparkstone not consumed when it should have been!");
          if (!plushieModifiers && !global.getAnimalIsNotCramped(animal, 1.1))
            data.affection = data.getInt("affection") - 50;
        }
      }
    }
  }
};

global.runAutoGrabber = (entity) => {
  const { block, level } = entity;
  let radius = 5;
  let attachedPlayer;
  let nearbyFarmAnimals;
  nearbyFarmAnimals = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(radius))
    .filter((entity) =>
      global.checkEntityTag(entity, "society:husbandry_animal")
    );
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      attachedPlayer = p;
    }
  });
  if (attachedPlayer) {
    nearbyFarmAnimals.forEach((animal) => {
      global.autoGrabAnimal(entity, attachedPlayer, animal);
    });
    let { x, y, z } = block;
    let scanBlock;
    for (let pos of BlockPos.betweenClosed(
      new BlockPos(x - radius, y - radius, z - radius),
      [x + radius, y + radius, z + radius]
    )) {
      scanBlock = level.getBlock(pos);
      if (scanBlock.hasTag("society:plushies")) {
        let nbt = scanBlock.getEntityData();
        if (nbt.data.animal) {
          global.autoGrabAnimal(
            entity,
            attachedPlayer,
            scanBlock,
            global.getPlushieModifiers(level, nbt.data, scanBlock)
          );
        }
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:auto_grabber", "cardinal")
    .displayName("Auto-Grabber")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 30, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.auto_grabber.description").gray()
      );
      item.tooltip(
        Text.translatable(
          "society.working_block_entity.apply_player_skill"
        ).gray()
      );
      item.tooltip(
        Text.translatable(
          "block.society.auto_grabber.description.upgrade"
        ).gold()
      );
      item.tooltip(
        Text.translatable("tooltip.society.area", `11x11x11`).green()
      );
      item.tooltip(
        Text.translatable(
          "block.society.auto_grabber.description.fuel"
        ).lightPurple()
      );
      item.modelJson({
        parent: "society:block/kubejs/auto_grabber",
      });
    })
    .model("society:block/kubejs/auto_grabber")
    .property(booleanProperty.create("upgraded"))
    .defaultState((state) => {
      state.set(booleanProperty.create("upgraded"), false);
    })
    .placementState((state) => {
      state.set(booleanProperty.create("upgraded"), false);
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(600, 0, (entity) => {
        global.runAutoGrabber(entity);
      }),
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
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) =>
            blockEntity.inventory.getStackInSlot(slot)
          )
      );
    }).blockstateJson = {
    multipart: []
      .concat(getCardinalMultipartJsonBasicUpgradable("auto_grabber", "false"))
      .concat(
        getCardinalMultipartJsonBasicUpgradable("auto_grabber_upgraded", "true")
      ),
  };
});
