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
  e
) => {
  const { player, target, level, server, block, inventory } = e;
  const affection = data.getInt("affection") || 0;
  const mood = global.getOrFetchMood(level, target, day, player);
  let hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  let quality = 0;

  if (!hungry && hearts >= minHearts && Math.random() <= chance) {
    if (item.includes("large") && Math.random() > (mood + hearts * 10) / 256) {
      return;
    }
    if (hasQuality && mood >= 160) {
      quality = global.getHusbandryQuality(hearts, mood);
    }
    let specialItem = Item.of(
      `${mult}x ${item}`,
      quality > 0 ? `{quality_food:{effects:[],quality:${quality}}}` : null
    );
    let specialItemResultCode = global.insertBelow(level, block, specialItem);
    if (specialItemResultCode == 1) {
      if (global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
        console.error("Sparkstone not consumed when it should have been!");
      server.runCommandSilent(
        `playsound stardew_fishing:dwop block @a ${target.x} ${target.y} ${target.z}`
      );
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
};

global.autoGrabAnimal = (entity, player, animal) => {
  const { inventory, block, level } = entity;
  let data = animal.persistentData;
  const day = Number(
    (Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed()
  );
  const mood = global.getOrFetchMood(level, target, day, player);
  const hungry = day - data.getInt("ageLastFed") > 1;
  if (mood < 64 && Math.random() < mood / 64) return;
  if (!hungry) {
    if (
      global.checkEntityTag(animal, "society:milkable_animal") &&
      global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1
    ) {
      let milkItem = global.getMilk(level, animal, data, player, day);
      if (milkItem !== -1) {
        let insertedMilk = global.insertBelow(level, block, milkItem) == 1;
        if (insertedMilk) {
          if (global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
            console.error("Sparkstone not consumed when it should have been!");
          if (!global.getAnimalIsNotCramped(animal, 1.1))
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
        }
      }
    }
    if (global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1) {
      global.handleSpecialHarvest(
        level,
        animal,
        player,
        player.server,
        block,
        inventory,
        handleAutoGrabSpecialItem
      );
    }
    if (
      level.getBlock(block.pos).getProperties().get("upgraded") === "true" &&
      global.inventoryHasItems(inventory, "society:sparkstone", 1) == 1
    ) {
      let droppedLoot = global.getMagicShearsOutput(
        level,
        animal,
        player,
        level.server
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
          if (global.useInventoryItems(inventory, "society:sparkstone", 1) != 1)
            console.error("Sparkstone not consumed when it should have been!");
          if (!global.getAnimalIsNotCramped(animal, 1.1))
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
      if (scanBlock.hasTag("society:animal_bed")) {
        let nbt = scanBlock.getEntityData();
        let animal = undefined;
        let { boundToAnimal, animalInside, entityID } = nbt.data;
        if (boundToAnimal && animalInside) {
          animal = level.createEntity(entityID.toString());
          animal.nbt = nbt.data.entity;
          global.autoGrabAnimal(entity, attachedPlayer, animal);
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
      item.tooltip(Text.translatable("block.society.auto_grabber.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.apply_player_skill").gray());
      item.tooltip(Text.translatable("block.society.auto_grabber.description.upgrade").gold());
      item.tooltip(Text.translatable("tooltip.society.area", `11x11x11`).green());
      item.tooltip(Text.translatable("block.society.auto_grabber.description.fuel").lightPurple());
      item.modelJson({
        parent: "society:block/auto_grabber",
      });
    })
    .model("society:block/auto_grabber")
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
