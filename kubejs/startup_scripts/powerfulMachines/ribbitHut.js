console.info("[SOCIETY] ribbitHut.js loaded");

const Block = Java.loadClass("net.minecraft.world.level.block.Block");
const getDrops = (block, blockState, level, pos, player) => {
  if (block.id.includes("vinery")) {
    let grape = block.getProperties().get("grape").split("_");
    if (grape.length == 1) {
      return [
        Item.of(
          `4x ${["crimson", "warped"].includes(grape[0]) ? "nethervinery" : "vinery"
          }:${grape[0]}_grape`
        ),
      ];
    }
    return [Item.of(`4x vinery:${grape[0]}_grapes_${grape[1]}`)];
  }
  if (block.id.equals("windswept:wild_berry_bush")) {
    return [Item.of(`2x windswept:wild_berries`)];
  }
  if (block.id.equals("autumnity:tall_foul_berry_bush")) {
    return [Item.of(`2x autumnity:foul_berries`)];
  }
  return Block.getDrops(
    blockState,
    level,
    pos,
    null,
    player,
    Item.of("minecraft:hoe")
  );
};
const getPlantData = (block, mcBlock, blockState) => {
  let properties = block.getProperties();
  if (
    !properties ||
    !properties.get("age") ||
    ["minecraft:torchflower", "minecraft:pitcher_crop"].includes(block.id)
  ) {
    return {
      maxAge: true,
    };
  }
  if (
    [
      "windswept:wild_berry_bush",
      "minecraft:sweet_berry_bush",
      "autumnity:tall_foul_berry_bush",
    ].includes(block.id)
  ) {
    return {
      maxAge: properties.get("age").equals("3"),
      newAge:
        "minecraft:sweet_berry_bush".equals(block.id) ||
          "autumnity:tall_foul_berry_bush".equals(block.id)
          ? "1"
          : "2",
    };
  }
  if ("society:mana_fruit_crop".equals(block.id))
    return { maxAge: properties.get("age").equals("7"), newAge: "0" };
  if ("vintagedelight:gearo_berry_bush".equals(block.id))
    return { maxAge: properties.get("age").equals("4"), newAge: "2" };
  if ("minecraft:cocoa".equals(block.id))
    return { maxAge: properties.get("age").equals("2"), newAge: "0" };
  if ("minecraft:nether_wart".equals(block.id))
    return { maxAge: properties.get("age").equals("3"), newAge: "0" };
  if (block.id.includes("vinery")) {
    return {
      maxAge: properties.get("age").equals("4"),
      newAge: block.id.includes("lattice") ? "1" : "2",
    };
  }
  if (["minecraft:melon_stem", "minecraft:pumpkin_stem"].includes(block.id)) {
    return {
      maxAge: false,
      newAge: "0",
    };
  }
  return { maxAge: mcBlock.isMaxAge(blockState), newAge: "0" };
};
const setHarvested = (level, pos, server, block, age) => {
  let newProperties = block.getProperties();
  if (age) {
    newProperties.age = `${age}`;
    block.set(block.id, newProperties);
  } else {
    block.set("minecraft:air");
  }
  const { x, y, z } = pos;
  server.runCommandSilent(
    `playsound minecraft:block.grass.break block @a ${x} ${y} ${z} 0.5`
  );
  level.spawnParticles(
    "ribbits:spell",
    true,
    x + 0.5,
    y + 0.5,
    z + 0.5,
    0,
    0.1,
    0,
    1,
    0.0001
  );
};
global.handleRibbitHarvest = (tickEvent, pos, player, delay) => {
  const { level, block } = tickEvent;
  const server = level.server;
  let blockState;
  let drops;
  let quality;
  let scannedBlock;
  let inserted = false;
  let valid = true;
  let plantData;
  if (global.susFunctionLogging) console.log("[SOCIETY-SUSFN] ribbitHut.js");
  server.scheduleInTicks(delay, () => {
    scannedBlock = level.getBlock(pos);
    if (scannedBlock && scannedBlock.hasTag("society:ribbit_hut_harvests")) {
      blockState = level.getBlockState(pos);
      plantData = getPlantData(scannedBlock, blockState.block, blockState);
      if (
        scannedBlock.id === "supplementaries:flax" &&
        scannedBlock.getProperties().get("half") == "lower"
      ) {
        valid = false;
      }
      if (valid && plantData.maxAge) {
        drops = getDrops(scannedBlock, blockState, level, pos, player);
        drops.forEach((drop) => {
          quality = global.getCropQuality(scannedBlock);
          // 4.0 TODO: remove effects:[] from this data
          if (quality > 0) {
            drop.nbt = `{quality_food:{effects:[],quality:${quality}}}`;
          }
          if (scannedBlock.id == "society:mana_fruit_crop") {
            if (player.stages.has("paradise_crop")) drop.count += 1;
            if (player.stages.has("crop_collector")) drop.count *= 2;
          }
          if (global.inventoryHasRoom(block, drop)) {
            global.insertInto(block, drop);
            inserted = true;
          }
        });
      }
      if (inserted) {
        inserted = false;
        if (scannedBlock.id === "supplementaries:flax") {
          scannedBlock.set("minecraft:air");
          level
            .getBlock(pos.below())
            .set("supplementaries:flax", { age: "0", half: "lower" });
        } else {
          setHarvested(level, pos, server, scannedBlock, plantData.newAge);
        }
      }
    }
  });
};
global.runRibbitHut = (tickEvent) => {
  const { level, block } = tickEvent;
  let centerBlock = global.getOpposite(
    block.getProperties().get("facing"),
    block.getPos()
  );
  const { x, y, z } = centerBlock;
  let scannedBlocks = 0;
  let attachedPlayer;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  const ribbitHutProgTime = 1000;
  if (
    morningModulo >= ribbitHutProgTime &&
    morningModulo < ribbitHutProgTime + artMachineTickRate
  ) {
    level.getServer().players.forEach((p) => {
      if (p.getUuid().toString() === block.getEntityData().data.owner) {
        attachedPlayer = p;
      }
    });
    if (attachedPlayer) {
      level.server.runCommandSilent(
        `playsound ribbits:entity.ribbit.ambient block @a ${x} ${y} ${z}`
      );
      for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - 7, y - 1, z - 7),
        [x + 7, y + 1, z + 7]
      )) {
        global.handleRibbitHarvest(
          tickEvent,
          pos.immutable(),
          attachedPlayer,
          scannedBlocks
        );
        scannedBlocks++;
      }
    }
  }
};

StartupEvents.registry("block", (e) => {
  e.create("society:ribbit_hut", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .soundType("shroomlight")
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.ribbit_hut.description").gray()
      );
      item.tooltip(
        Text.translatable(
          "society.working_block_entity.apply_player_skill"
        ).gray()
      );
      item.tooltip(
        Text.translatable("tooltip.society.area", `15x3x15`).green()
      );
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/ribbit_hut_item",
        },
      });
    })
    .lightLevel(1)
    .property(booleanProperty.create("upgraded"))
    .defaultState((state) => {
      state.set(booleanProperty.create("upgraded"), false);
    })
    .placementState((state) => {
      state.set(booleanProperty.create("upgraded"), false);
    })
    .soundType("stone")
    .model("society:block/kubejs/ribbit_hut/bottom_front_center")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 3);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runRibbitHut(entity);
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
    });
  e.create("society:ribbit_hut_block", "cardinal")
    .property(integerProperty.create("layer", 0, 2))
    .property(integerProperty.create("depth", 0, 2))
    .property(integerProperty.create("side", 0, 2))
    .defaultState((state) => {
      state.set(integerProperty.create("layer", 0, 2), 0);
      state.set(integerProperty.create("depth", 0, 2), 0);
      state.set(integerProperty.create("side", 0, 2), 1);
    })
    .placementState((state) => {
      state.set(integerProperty.create("layer", 0, 2), 0);
      state.set(integerProperty.create("depth", 0, 2), 0);
      state.set(integerProperty.create("side", 0, 2), 1);
    })
    .resistance(3600000)
    .unbreakable()
    .item((item) => {
      item.modelJson({
        parent: "ribbits:item/toadstool",
      });
    })
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .soundType("stone");
});
