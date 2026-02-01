console.info("[SOCIETY] overflowToken.js loaded");

ItemEvents.rightClicked("society:overflow_token", (e) => {
  const { item, server, hand, player } = e;

  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    let overflowList = server.persistentData.overflowList;
    let playerUUID = player.getUuid();
    if (overflowList == null) {
      overflowList = {};
    }
    if (overflowList[playerUUID] == null) {
      overflowList[playerUUID] = 1;
    } else {
      overflowList[playerUUID] += 1;
    }
    server.persistentData.overflowList = overflowList;
    if (!player.isCreative()) item.shrink(1);
    server.runCommandSilent(
      `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
    );
  }
});
