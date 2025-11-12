console.info("[SOCIETY-S-COBBLEMON] cobblemonTrainerPodium.js.js loaded");

BlockEvents.placed(["sunlit_cobblemon:trainer_podium"], (e) => {
  const playerUUID = e.player.getUuid().toString();
  let nbt = e.block.entityData;
  nbt.merge({ data: { owner: playerUUID } });
  e.block.setEntityData(nbt);
});

BlockEvents.rightClicked(["sunlit_cobblemon:trainer_podium"], (e) => {
  const { hand, player, block, level } = e;
  if (hand == "OFF_HAND") return;
  let podiumPlayer;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      podiumPlayer = p;
    }
  });
  if (podiumPlayer) {
    if (!podiumPlayer.persistentData.winStreak) podiumPlayer.persistentData.winStreak = 0;
    player.tell(`§6${podiumPlayer.username}'s§7 Trainer Podium`);
    player.tell(`§7Current Win Streak: §6${podiumPlayer.persistentData.winStreak}`);
    player.tell(`§7Trainer Level Tier: §6${global.getPlayerPodiumLevelTier(podiumPlayer)}`);
  } else {
    player.tell(
      Text.gray("This is a stranger's Trainer Podium. They aren't online to draw stats from...")
    );
  }
});

ItemEvents.entityInteracted((e) => {
  const { hand, player, item, target, level, server } = e;
  if (!target.type === "rctmod:trainer") return;

  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    let currentLevel = global.getPlayerPodiumLevelTier(player);
    let trainerLevel = global.getTrainerLevelTier(target.getNbt().TrainerId.toString());
    if (trainerLevel !== currentLevel) {
    let tooHigh = currentLevel < trainerLevel;
      server.runCommandSilent(
        `emberstextapi sendcustom ${player.username} ${
          global.animalMessageSettings
        } 120 This trainer's level is too ${
          tooHigh ? "high" : "low"
        } for your team! You need an average level of ${trainerLevel}.`
      );
      e.cancel();
    }
  }
});
