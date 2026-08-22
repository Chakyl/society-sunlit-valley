console.info("[SOCIETY] skullCavernTick.js loaded");

PlayerEvents.tick((e) => {
  const player = e.player;
  if (player.age % 200 == 0 && player.level.dimension === "society:skull_cavern") {
    let timeModulo = player.level.dayTime() % 24000;
    let server = player.getServer();
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
      // [Sunlit Cobblemon] Start
      if (player.getHeldItem("off_hand") == 'sunlit_cobblemon:corrupted_clock' || player.getHeldItem("main_hand") == 'sunlit_cobblemon:corrupted_clock') {
        player.teleportTo("sunlit_cobblemon:moontear", player.getX(), 128, player.getZ(), 0, 0);
        let playerLevel = player.getLevel()
        let radius = 5
        if (playerLevel.dimension === "sunlit_cobblemon:moontear") {
          for (let pos of BlockPos.betweenClosed(
            new BlockPos(player.getX() - radius, 126, player.getZ() - radius),
            [player.getX() + radius, 126, player.getZ() + radius]
          )) {
            if (!playerLevel.isLoaded(pos)) continue;
            playerLevel.getBlock(pos).set("botania:bifrost_perm");
          }
        } else {
          server.scheduleInTicks(10, () => {
            for (let pos of BlockPos.betweenClosed(
              new BlockPos(player.getX() - radius, 126, player.getZ() - radius),
              [player.getX() + radius, 126, player.getZ() + radius]
            )) {
              if (!playerLevel.isLoaded(pos)) continue;
              playerLevel.getBlock(pos).set("botania:bifrost_perm");
            }
          });
        }
        player.persistentData.skullCavernEnterDay = -1;
        return;
      }
      // [Sunlit Cobblemon] End
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
      // [Sunlit Cobblemon] Start
      if (!player.persistentData.skullCavernFainted) player.persistentData.skullCavernFainted = 1;
      else player.persistentData.skullCavernFainted = player.persistentData.skullCavernFainted + 1;
      if (player.persistentData.skullCavernFainted >= 5 && player.stages.has("mastery_unlocked")) {
        player.potionEffects.add("sunlit_cobblemon:nightmare", 24000, 0, true, false);
      }
      // [Sunlit Cobblemon] End
      if (global.enableDeathDebt && !player.stages.has("debt_caverns")) {
        global.handleFee(server, player, "skull_cavern");
        if (Math.random() <= 0.02) player.give("society:debt_caverns");
      }
    }
  }
});
