console.info("[SOCIETY] extractinatorFix.js loaded");

BlockEvents.rightClicked("extractinator:extractinator", (e) => {
  const { level, block, hand } = e;
  if (hand == "OFF_HAND") return;
  if (level.getBlock(block.pos.offset(0, 1, 0)) != "minecraft:air") {
    level.destroyBlock(block.pos.offset(0, 1, 0), true);
  }
});
