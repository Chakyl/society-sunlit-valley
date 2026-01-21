console.info("[SOCIETY] npcInvite.js loaded");

ItemEvents.rightClicked("society:villager_invitation", (e) => {
  const { level, player, item } = e;
  const villagerType = "market"

  if (player.isFake()) e.cancel();
  const inviteNbt = player.getHeldItem("main_hand").getNbt();

  if (inviteNbt) {
    player.give(Item.of("society:villager_home", `{type:"${inviteNbt.getString("type")}"}`))
  } else {
    player.tell("Something went wrong! Tell Chakyl")
  }
  global.addItemCooldown(player, item, 4);
});
