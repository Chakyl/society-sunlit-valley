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

  if (player.isCreative()) {
    global.removeNearbyTrainers(level, block, true);
  } else if (nearbyTrainers.length >= 1) {
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

  if (block.getProperties().get("upgraded").toLowerCase() == "true") {
    block.popItem(Item.of(`sunlit_cobblemon:elite_stone`));
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
    if (!podiumPlayer.persistentData.wins)
      podiumPlayer.persistentData.wins = 0;
    let upgraded = block.getProperties().get("upgraded").toLowerCase() == "true";
    if (upgraded) {
      player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.label.elite", podiumPlayer.username).red());
    } else {
      player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.label", podiumPlayer.username).gold());
    }
    player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.wins", `${Number(podiumPlayer.persistentData.wins)}`).gold());

    if (upgraded) {
      player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.tier", Text.translatable("sunlit_cobblemon.trainer_podium.elite").darkRed()));
    } else {
      player.tell(Text.translatable("sunlit_cobblemon.trainer_podium.tier", levelAverage > 100 ? Text.translatable("sunlit_cobblemon.trainer_podium.not_league_legal") : `${Number(global.getPlayerPodiumLevelTier(levelAverage))}`).gold());
    }
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
  let block = level.getBlock(target.onPos.above());
  if (block.id !== "sunlit_cobblemon:trainer_podium") {
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
  if (target.persistentData.gymLeader !== player.getUuid().toString()) {
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username,
        global.animalMessageSettings,
        80,
        Text.translatable("sunlit_cobblemon.trainer_podium.not_your_gym").toJson()
      )
    );
    e.cancel();
    return;
  }
  let levelAverage = global.getPartyLevel(player);
  let upgraded = block.getProperties().get("upgraded").toLowerCase() == "true";

  if (!upgraded && levelAverage > 100) {
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
  } else if (upgraded && !target.persistentData.eliteMode) {
    global.removeNearbyTrainers(level, block, true);
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username,
        global.animalMessageSettings,
        80,
        Text.translatable("sunlit_cobblemon.trainer_podium.trainer_left").toJson()
      )
    );
  }
  let badge = global.getGymBadgeType(player);
  if (badge != null && badge != "none") {
    if (!global.partyIsMonotype(player, badge)) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(
          player.username,
          global.animalMessageSettings,
          80,
          Text.translatable("sunlit_cobblemon.trainer_podium.badge_restricts").toJson()
        )
      );
      e.cancel();
    }
    // TODO: This was meant to be an anticheese for changing gym badges but since the trainer podium caches trainers it doesn't work. Oh well    
    // else if (target.persistentData.badge != badge) {
    //   global.removeNearbyTrainers(level, block, true);
    //   server.runCommandSilent(
    //     global.getEmbersTextAPICommand(
    //       player.username,
    //       global.animalMessageSettings,
    //       80,
    //       Text.translatable("sunlit_cobblemon.trainer_podium.trainer_left").toJson()
    //     )
    //   );
    // }
  }
  let currentLevel = global.getPlayerPodiumLevelTier(levelAverage);
  let trainerLevel = Number(target.persistentData.levelTier)
  if (!upgraded && trainerLevel !== currentLevel) {
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

BlockEvents.rightClicked("sunlit_cobblemon:trainer_podium", (e) => {
  const { player, item, block, hand, level } = e;
  const upgraded = block.getProperties().get("upgraded").toLowerCase() == "true";
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && !upgraded && item == 'sunlit_cobblemon:elite_stone') {
    if (!player.isCreative()) item.count--;
    block.getEntity().setChanged();
    let nbt = block.getEntityData();
    nbt.merge({ data: { upgraded: true } });
    global.setBlockEntityData(block, nbt);
    level.spawnParticles(
      "farmersdelight:star",
      true,
      block.x,
      block.y + 1,
      block.z,
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      3,
      0.01
    );
    block.set(block.id, {
      upgraded: true,
      facing: block.properties.get("facing"),
    });
    e.cancel();
  }
});
