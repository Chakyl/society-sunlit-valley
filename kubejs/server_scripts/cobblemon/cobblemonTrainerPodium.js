console.info("[SOCIETY-S-COBBLEMON] cobblemonTrainerPodium.js loaded");

BlockEvents.placed("sunlit_cobblemon:trainer_podium", (e) => {
  let item = e.player.getHeldItem("main_hand");
  let podiumNbt;
  if (item.id !== "sunlit_cobblemon:trainer_podium") item = e.player.getHeldItem("off_hand");
  if (item.id !== "sunlit_cobblemon:trainer_podium") return;
  podiumNbt = item.getNbt();
  let nbt = e.block.getEntityData();
  if (podiumNbt && !podiumNbt.isEmpty()) {
    nbt.merge({
      data: {
        trainers: podiumNbt.get("trainers")
      },
    });
  }
  const playerUUID = e.player.getUuid().toString();
  nbt.merge({ data: { owner: playerUUID } });
  global.setBlockEntityData(e.block, nbt);
});

BlockEvents.broken("sunlit_cobblemon:trainer_podium", (e) => {
  const { block, level, player, server } = e;
  let nearbyTrainers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(2))
    .filter((entityType) => entityType.type === "rctmod:trainer");
  if (nearbyTrainers.length >= 1) {
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username,
        global.animalMessageSettings,
        80,
        Text.translatable("sunlit_cobblemon.trainer_podium.need_to_defeat_before_moving").toJson()
      )
    );
    e.cancel();
  }
  const nbt = block.getEntityData();
  block.popItem(Item.of("sunlit_cobblemon:trainer_podium", `{trainers:${nbt.data.trainers}}`));
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

    player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.label", podiumPlayer.username).gold());
    player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.streak", `${Number(podiumPlayer.persistentData.winStreak)}`).gold());
    player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.tier", levelAverage > 100
      ? Text.translatable("Not League legal!")
      : `${Number(global.getPlayerPodiumLevelTier(podiumPlayer, levelAverage))}`).gold());
  } else {
    player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.stranger").gray());
  }
});

const getNearbyPodium = (level, target) => {
  return level.getBlock(target.onPos.above()).id == "sunlit_cobblemon:trainer_podium";
};

ItemEvents.entityInteracted((e) => {
  const { hand, player, target, level, server } = e;
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
      global.getEmbersTextAPICommand(
        player.username,
        global.animalMessageSettings,
        80,
        Text.translatable("sunlit_cobblemon.trainer_podium.banned_mon").toJson()
      )
    );
    e.cancel();
    return;
  }
  let currentLevel = global.getPlayerPodiumLevelTier(player, levelAverage);
  let trainerLevel = Number(target.persistentData.levelTier)
  if (trainerLevel !== currentLevel) {
    let tooHigh = currentLevel < trainerLevel;
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username,
        global.animalMessageSettings,
        80,
        Text.translatable(`sunlit_cobblemon.trainer_podium.too_${tooHigh ? "high" : "low"}`, `${trainerLevel + 5}`).toJson()
      )
    );
    global.removeNearbyTrainers(level, level.getBlock(target.onPos.above()), true);
    e.cancel();
  }
});

EntityEvents.death((e) => {
  const { source, server, entity } = e;
  if (
    source.player &&
    source.player.getType() === "minecraft:player" &&
    entity.type == "rctmod:trainer"
  ) {
    server.runCommandSilent(`playsound refurbished_furniture:ui.paddle_ball.retro_lose block @a ${source.player.x} ${source.player.y} ${source.player.z}`);
    global.handleLeagueFee(server, source.player, "murder")
  }
});
