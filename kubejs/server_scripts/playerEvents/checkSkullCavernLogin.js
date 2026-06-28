console.info("[SOCIETY] checkSkullCavernLogin.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player, level, server } = e;
  if (level.dimension === "society:skull_cavern") {
    const chunkDay =
      level.persistentData.chunkParityMap[level.getChunkAt(player.getPos()).pos.toString()].day;

    if (Number(chunkDay) > Number(player.persistentData.skullCavernEnterDay)) {
      player.persistentData.skullCavernEnterDay = -1;
      global.teleportHome(player, server, player.level);
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username,
          `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#AAAAAA",offsetY:-60}`,
          200,
          Text.translatable("society.skull_cavern.fainted").toJson()
        )
      );
      player.potionEffects.add("minecraft:slowness", 310, 3, true, false);
      player.potionEffects.add("minecraft:darkness", 310, 0, true, false);
    }
  }
});
