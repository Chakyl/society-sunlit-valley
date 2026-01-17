console.info("[SOCIETY] multiBlockHandlers.js loaded");

BlockEvents.placed("society:growth_obelisk", (e) => {
  const { block, level } = e;
  const above = level.getBlock(block.pos.above());
  if (above == "minecraft:air") above.set("society:growth_obelisk_upper", block.getProperties());
});

BlockEvents.broken("society:growth_obelisk", (e) => {
  const { block, level } = e;
  level.destroyBlock(block.pos.above(), true);
});
BlockEvents.broken("society:growth_obelisk_upper", (e) => {
  const { block, level } = e;
  level.destroyBlock(block.pos.below(), true);
});
