console.info("[SOCIETY] disableHoeRichSoil.js loaded");

BlockEvents.rightClicked("vintagedelight:salt", (e) => {
  if (e.player.isCrouching()) e.cancel();
});
