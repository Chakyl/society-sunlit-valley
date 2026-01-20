console.info("[SOCIETY] npcInvite.js loaded");

ItemEvents.rightClicked("society:villager_invitation", (e) => {
  const { level, player, item } = e;
  const villagerType = "market"
  player.give(Item.of("society:villager_home", `{type:"${villagerType}"}`))

  global.addItemCooldown(player, item, 4);
});
