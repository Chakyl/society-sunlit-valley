console.info("[SOCIETY] autoWormFarm.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:auto_worm_farm")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.auto_worm_farm.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.can_use_hopper").green());
      item.modelJson({
        parent: "society:block/kubejs/auto_worm_farm",
      });
    })
    .model("society:block/kubejs/auto_worm_farm")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(1200, 0, (entity) => {
        const { x, y, z } = entity.block;
        if (entity.tick < 20) return;
        entity.inventory.insertItem("aquaculture:worm", false);
        entity.level.server.runCommandSilent(
          `playsound minecraft:block.composter.fill block @a ${x} ${y} ${z}`
        );
        entity.level.spawnParticles(
          "atmospheric:orange_vapor",
          true,
          x,
          y + 0.5,
          z,
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          5,
          0.01
        );
      }),
        blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
      );
    });
});
