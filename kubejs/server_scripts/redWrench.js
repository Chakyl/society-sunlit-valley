console.info("[SOCIETY] redWrench.js loaded");

CommonAddedEvents.playerRespawn((e) => {
  if (Math.random() <= 0.01)
    e.player.give("society:red_wrench");
});