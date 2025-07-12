console.info("[SOCIETY] bankerBroken.js loaded");

BlockEvents.broken("numismatics:blaze_banker", (e) => {
  e.level.destroyBlock(e.block.pos, true);
});
