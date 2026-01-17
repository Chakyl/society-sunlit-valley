console.info("[SOCIETY] growthObelisk.js loaded");

const RandomSource = Java.loadClass("net.minecraft.util.RandomSource");

global.runGrowthObelisk = (tickEvent) => {
  const { level, block, inventory } = tickEvent;
  const { x, y, z } = block;
  const server = level.server;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  const goldenClockProgTime = 1000;
  level.spawnParticles("snowyspirit:glow_light", true, x + 0.5, y + 2.2, z + 0.5, 0, 0, 0, 2, 2);
  if (
    morningModulo >= goldenClockProgTime &&
    morningModulo < goldenClockProgTime + artMachineTickRate
  ) {
    if (global.hasInventoryItems(inventory, "society:spark_gro", 1)) {
      global.useInventoryItems(inventory, "society:spark_gro", 1);
      level.spawnParticles("species:ghoul_searching", true, x + 0.5, y, z + 0.5, 0, 0, 0, 1, 2);
      server.runCommandSilent(`playsound ribbits:entity.ribbit.magic block @a ${x} ${y} ${z} 1`);
      server.scheduleInTicks(4, () => {
        CropGrowthUtils.growCropsInRadius(level, block.getPos(), RandomSource.create(), 4);
      });
    }
  }
};

StartupEvents.registry("block", (e) => {
  e
    .create("society:growth_obelisk", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.growth_obelisk.description").gray());
      item.tooltip(Text.translatable("tooltip.society.area", `7x1x7`).green());
      item.tooltip(Text.translatable("block.society.growth_obelisk.description.fuel").lightPurple());
      item.modelJson({
        parent: "society:block/kubejs/growth_obelisk/display",
      });
    })
    .soundType("stone")
    .model("society:block/kubejs/growth_obelisk/lower")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runGrowthObelisk(entity, 4);
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
  e
    .create("society:growth_obelisk_upper", "cardinal")
    .box(4, 0, 4, 12, 9, 12)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .soundType("stone")
    .model("society:block/kubejs/growth_obelisk/upper");
});
