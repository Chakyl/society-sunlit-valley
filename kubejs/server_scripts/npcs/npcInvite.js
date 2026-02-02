console.info("[SOCIETY] npcInvite.js loaded");

ItemEvents.rightClicked("society:invitation", (e) => {
  const { server, player, item } = e;
  if (player.isFake()) e.cancel();
  const inviteNbt = player.getHeldItem("main_hand").getNbt();

  if (inviteNbt) {
    const id = inviteNbt.get("type").id
    const baseId = id.substring(8, id.length);
    player.give(Item.of("society:villager_home", `{type:"${baseId}"}`))
    if (!player.stages.has(`invited_${baseId}`)) {
      player.stages.add(`invited_${baseId}`)
    }
    if (!player.isCreative()) item.count--;
    server.runCommandSilent(
      `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
    );
  } else {
    player.tell("Something went wrong! Tell Chakyl")
  }
  global.addItemCooldown(player, item, 4);
});
