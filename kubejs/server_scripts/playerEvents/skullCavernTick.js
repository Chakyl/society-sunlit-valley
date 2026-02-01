console.info("[SOCIETY] skullCavernTick.js loaded");

PlayerEvents.tick((e) => {
  const player = e.player;
  if (player.age % 200 == 0 && player.level.dimension === "society:skull_cavern") {
    const timeModulo = player.level.dayTime() % 24000;
    const server = player.getServer();
    // 11 PM
    if (timeModulo >= 17000) {
      if (timeModulo <= 17200) {
        server.runCommandSilent(
          `playsound minecraft:ambient.cave block @a ${e.player.x} ${e.player.y} ${e.player.z}`
        );
        server.runCommandSilent(
          global.getEmbersTextAPICommand(player.username,
            `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#AAAAAA",offsetY:-40}`,
            200,
            Text.translatable("society.skull_cavern.late").toJson()
          )
        );
      }
      player.potionEffects.add("minecraft:slowness", 210, 0, true, false);
    }
    // 2 AM
    if (timeModulo >= 20000) {
      if (timeModulo <= 20200) {
        server.runCommandSilent(
          global.getEmbersTextAPICommand(player.username,
            `{anchor:"BOTTOM_CENTER",charShakeRandom:0.2,background:1,align:"BOTTOM_CENTER",color:"#AAAAAA",offsetY:-40}`,
            200,
            Text.translatable("society.skull_cavern.concern").toJson()
          )
        );
      }
      server.runCommandSilent(
        `playsound minecraft:entity.warden.heartbeat block @a ${e.player.x} ${e.player.y} ${e.player.z}`
      );
    }
    // 6AM
    if (timeModulo >= 23800) {
      player.persistentData.skullCavernEnterDay = -1;
      global.teleportHome(player, server, player.level);
      server.runCommandSilent(
        global.getEmbersTextAPICommand(
          player.username,
          `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#AAAAAA",offsetY:-40}`,
          200,
          Text.translatable("society.skull_cavern.fainted").toJson()
        )
      );
      player.potionEffects.add("minecraft:slowness", 310, 3, true, false);
      player.potionEffects.add("minecraft:darkness", 310, 0, true, false);
      if (global.enableDeathDebt && !player.stages.has("debt_caverns")) {
        global.handleFee(server, player, "skull_cavern");
        if (Math.random() <= 0.02) player.give("society:debt_caverns");
      }
    }
  }
});
