console.info("[SOCIETY] cornucopia.js loaded");


ItemEvents.rightClicked("society:cornucopia", (e) => {
  const { server, player, level, item, hand } = e;

  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  global.addItemCooldown(player, item, 40);

  let experienceMult = global.handleCornucopia(server, level, player.getOnPos().above(), player, true);

  global.giveExperience(server, player, "farming", experienceMult * 30);
});
