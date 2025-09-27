console.info("[SOCIETY] ribbitHut.js loaded");

const Block = Java.loadClass("net.minecraft.world.level.block.Block");

global.handleRibbitHarvest = (tickEvent, pos, player, delay) => {
  const { level, block, inventory } = tickEvent;
  const { x, y, z } = pos;
  const server = level.server;
  let blockState;
  let scannedMCBlock;
  let drops;
  let quality;
  let scannedBlock = level.getBlock(pos);
  server.scheduleInTicks(delay, () => {
    if (scannedBlock.hasTag("minecraft:crops")) {
      blockState = level.getBlockState(pos);
      scannedMCBlock = blockState.block;
      if (scannedMCBlock.isMaxAge(blockState)) {
        drops = Block.getDrops(blockState, level, pos, null, player, Item.of("minecraft:hoe"));
        drops.forEach((drop) => {
          quality = global.getCropQuality(scannedBlock);
          // 4.0 TODO: remove effects:[] from this data
          if (quality > 0) {
            drop.nbt = `{quality_food:{effects:[],quality:${quality}}}`;
          }
          if (global.inventoryHasRoom(block, drop)) {
            global.insertInto(block, drop);
            scannedBlock.set(scannedBlock.id, { age: "0" });
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
          }
        });
      }
    }
  });
};
global.runRibbitHut = (tickEvent) => {
  const { level, block } = tickEvent;
  let centerBlock = global.getOpposite(block.getProperties().get("facing"), block.getPos());
  const { x, y, z } = centerBlock;
  let scannedBlocks = 0;
  let attachedPlayer;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  const goldenClockProgTime = 2000;
  if (
    morningModulo >= goldenClockProgTime &&
    morningModulo < goldenClockProgTime + artMachineTickRate
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
      for (let pos of BlockPos.betweenClosed(new BlockPos(x - 6, y - 1, z - 6), [
        x + 6,
        y + 1,
        z + 6,
      ])) {
        global.handleRibbitHarvest(tickEvent, pos.immutable(), attachedPlayer, scannedBlocks * 2);
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
      item.tooltip(Text.gray("Creates a hut in a 3x3x3 space centered around it."));
      item.tooltip(Text.gray("Ribbits will collect crops at 8am every morning."));
      item.tooltip(Text.gray("Uses the skills of player that places it."));
      item.tooltip(Text.green(`Area: 13x3x13`));
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
    .model("society:block/ribbit_hut/bottom_front_center")
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
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
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
