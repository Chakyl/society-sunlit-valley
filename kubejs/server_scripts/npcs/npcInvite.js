console.info("[SOCIETY] npcInvite.js loaded");

ItemEvents.rightClicked("society:invitation", (e) => {
  const { server, player, item } = e;
  if (player.isFake()) e.cancel();
  const inviteNbt = player.getHeldItem("main_hand").getNbt();

  if (inviteNbt) {
    let id = inviteNbt.get("type").id
    let baseId = id.substring(8, id.length);
    server.scheduleInTicks(0, () => {
      server.scheduleInTicks(1, () => {
        player.give(Item.of("society:villager_home", `{type:"${baseId}"}`))
      });
    });
    if (!player.stages.has(`invited_${baseId}`)) {
      player.stages.add(`invited_${baseId}`)
      player.tell(Text.translatable("society.invitation.place_home").green());
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
