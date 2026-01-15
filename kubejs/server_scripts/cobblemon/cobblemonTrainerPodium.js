console.info("[SOCIETY-S-COBBLEMON] cobblemonTrainerPodium.js.js loaded");

BlockEvents.placed("sunlit_cobblemon:trainer_podium", (e) => {
  const playerUUID = e.player.getUuid().toString();
  let nbt = e.block.entityData;
  nbt.merge({ data: { owner: playerUUID } });
  e.block.setEntityData(nbt);
});

BlockEvents.broken("sunlit_cobblemon:trainer_podium", (e) => {
  global.removeNearbyTrainers(e.level, e.block, true);
});

BlockEvents.rightClicked("sunlit_cobblemon:trainer_podium", (e) => {
  const { hand, player, block, level } = e;
  if (hand == "OFF_HAND") return;
  let podiumPlayer;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      podiumPlayer = p;
    }
  });
  if (podiumPlayer) {
    let levelAverage = global.getPartyLevel(podiumPlayer);
    if (!podiumPlayer.persistentData.winStreak)
      podiumPlayer.persistentData.winStreak = 0;
    player.tell(`§6${podiumPlayer.username}'s§7 Trainer Podium`);
    player.tell(
      `§7Current Win Streak: §6${podiumPlayer.persistentData.winStreak}`
    );
    player.tell(
      `§7Trainer Level Tier: §6${
        levelAverage > 100
          ? "Not League legal!"
          : global.getPlayerPodiumLevelTier(podiumPlayer, levelAverage)
      }`
    );
  } else {
    player.tell(
      Text.gray(
        "This is a stranger's Trainer Podium. They aren't online to draw stats from..."
      )
    );
  }
});

const getNearbyPodium = (level, target) => {
  return level.getBlock(target.onPos.above()).id == "sunlit_cobblemon:trainer_podium";
};

ItemEvents.entityInteracted((e) => {
  const { hand, player, item, target, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "rctmod:trainer") return;
  if (level.getBlock(target.onPos.above()).id != "sunlit_cobblemon:trainer_podium") {
      target.setRemoved("unloaded_to_chunk");
      level.spawnParticles(
        "species:ascending_dust",
        true,
        target.x,
        target.y + 0.5,
        target.z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        10,
        0.1
      );
    e.cancel();
  }
  let levelAverage = global.getPartyLevel(player);
  if (levelAverage > 100) {
    server.runCommandSilent(
      `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 120 Using a legendary or mythical Pokémon isn't allowed by the League...`
    );
    e.cancel();
    return;
  }
  let currentLevel = global.getPlayerPodiumLevelTier(player, levelAverage);
  let trainerLevel = global.getTrainerLevelTier(
    target.getNbt().TrainerId.toString()
  );
  if (trainerLevel !== currentLevel) {
    let tooHigh = currentLevel < trainerLevel;
    server.runCommandSilent(
      `emberstextapi sendcustom ${player.username} ${
        global.animalMessageSettings
      } 120 This trainer's level is too ${
        tooHigh ? "high" : "low"
      } for your team! You need an average level of ${trainerLevel + 5}.`
    );
    e.cancel();
  }
});
