console.info("[SOCIETY] snowMelter.js loaded");

global.handleSnowMelter = (entity) => {
  const { block, level } = entity;
  if (block.level.hasNeighborSignal(block.pos)) return;
  const { x, y, z } = block;
  const radius = 10;
  const verticalRadius = 2;
  let scanBlock;
  if (global.susFunctionLogging) console.log('[SOCIETY-SUSFN] snowMelter.js')
  for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - verticalRadius, z - radius), [
    x + radius,
    y + verticalRadius,
    z + radius,
  ])) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.id === "minecraft:snow") {
      scanBlock.set("minecraft:air");
    }
    if (scanBlock.id === "snowrealmagic:snow") {
      scanBlock.set(scanBlock.getEntityData().Block);
    }
    if (scanBlock.id === "minecraft:ice") {
      scanBlock.set("minecraft:water");
    }
  }
};

StartupEvents.registry("block", (e) => {
  e.create("society:snow_melter", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.snow_melter.description").gray());
      item.tooltip(Text.translatable("tooltip.society.area", `19x5x19`).green());
      item.modelJson({
        parent: "society:block/kubejs/snow_melter",
      });
    })
    .model("society:block/kubejs/snow_melter")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(600, 0, (entity) => {
        global.handleSnowMelter(entity);
      });
    });
});
