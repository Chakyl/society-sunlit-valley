console.info("[SOCIETY] cancelDragonRoots.js loaded");

BlockEvents.leftClicked("atmospheric:dragon_roots", (e) => {
  e.cancel();
});
