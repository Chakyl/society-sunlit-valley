console.info("[SOCIETY] berryBushBroken.js loaded");

BlockEvents.leftClicked("society:berry_bush", (e) => {
  global.updateBerryBush(e.level, e.block);
});
