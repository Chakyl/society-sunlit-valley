console.info("[SOCIETY-S-COBBLEMON] registerCobblemonTrainerPodium.js loaded");

global.removeNearbyTrainers = (level, block, forceRemoval) => {
  let noTrainers = false;
  let nearbyTrainers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(4))
    .filter((entityType) => entityType.type === "rctmod:trainer");
  if (nearbyTrainers.length == 0) {
    noTrainers = true;
  } else {
    let foundTrainer = nearbyTrainers[0];
    let foundTrainerNBT = foundTrainer.getNbt();
    let isBugged = false;
    if (foundTrainerNBT.TrainerId == undefined || foundTrainerNBT.TrainerId == "" || foundTrainerNBT.TrainerId == "dev.latvian.mods.rhino.Undefined@0") {
      isBugged = true;
    }
    if (
      forceRemoval || isBugged ||
      foundTrainerNBT.Defeats > 0 ||
      foundTrainerNBT.Wins > 0
    ) {
      if (!forceRemoval && foundTrainer.persistentData.levelTier != null) {
        let nbt = block.getEntityData();
        let newTrainersArray = nbt.data.trainers;
        if (newTrainersArray != null) {
          newTrainersArray.putString(`${foundTrainer.persistentData.levelTier}`, "")
          nbt.merge({ data: { trainers: newTrainersArray } });
          global.setBlockEntityData(block, nbt);
        }
      }
      noTrainers = true;
      foundTrainer.setRemoved("unloaded_to_chunk");
      level.spawnParticles(
        "species:ascending_dust",
        true,
        foundTrainer.x,
        foundTrainer.y + 0.5,
        foundTrainer.z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        10,
        0.1
      );
    }
  }
  return noTrainers;
};

global.runTrainerPodium = (entity) => {
  const { level, block } = entity;
  let selene = false;
  if (level.dimension === "sunlit_cobblemon:moontear") {
    selene = true;
  }
  let nbt = block.getEntityData();
  let { owner, trainers, upgraded } = nbt.data;
  let nearbyPlayers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(10))
    .filter((scanEntity) => scanEntity.isPlayer());

  let ownerPlayer;
  nearbyPlayers.forEach((player) => {
    if (player.getUuid().toString() === owner || selene) ownerPlayer = player;
  });

  let spawnTrainer = global.removeNearbyTrainers(level, block);
  if (ownerPlayer) {
    if (spawnTrainer && !block.level.hasNeighborSignal(block.pos)) {
      let newTrainer;
      let levelTier = 100;
      if (selene) {
        newTrainer = Math.random() <= 0.5 ? "goddess_timeless" : "goddess_spacial";

        if (global.hasPartyPokemon(ownerPlayer, ["palkia", "dialga"], 2)) newTrainer = "goddess_void";
      } else {
        let levelAverage = Math.min(100, global.getPartyLevel(ownerPlayer));
        if (levelAverage == undefined) return;
        levelTier = global.getPlayerPodiumLevelTier(levelAverage);
        if (levelTier == undefined) return;
        let newTrainersArray;
        if (upgraded) {
          levelTier = "elite"
        }
        if (trainers == null) {
          nbt.merge({ data: { trainers: {} } });
          global.setBlockEntityData(block, nbt);
          trainers = block.getEntityData().trainers;
          newTrainer = "";
        } else {
          newTrainer = trainers.get(`${levelTier}`);
        }
        // ownerPlayer.persistentData.wins = 20
        if (ownerPlayer.persistentData.wins == 0 || !newTrainer || newTrainer === "") {
          if (ownerPlayer.persistentData.wins > 14 && ownerPlayer.persistentData.wins % 15 === 0 && Number(block.getEntityData().data.lastBossSpawn) != Number(ownerPlayer.persistentData.wins)) {
            newTrainer = global.getLeagueBoss(Math.min(95, levelTier), upgraded)
            nbt.merge({ data: { lastBossSpawn: ownerPlayer.persistentData.wins } });
          } else {
            newTrainer = global.getRandomTrainer(Math.min(95, levelTier), upgraded);
          }
          newTrainersArray = trainers;
          newTrainersArray.putString(`${levelTier}`, newTrainer)
          nbt.merge({ data: { trainers: newTrainersArray } });
          global.setBlockEntityData(block, nbt);
        }
        if (newTrainer == undefined || newTrainer == "dev.latvian.mods.rhino.Undefined@0") {
          global.removeNearbyTrainers(level, block, true);
          ownerPlayer.tell("[ERROR] Failed to spawn trainer at tier " + levelTier + " winstreak " + ownerPlayer.persistentData.wins + " for " + ownerPlayer.username + ". Tell Chakyl!");
          newTrainersArray = trainers;
          newTrainersArray.putString(`${levelTier}`, "")
          nbt.merge({ data: { trainers: newTrainersArray } });
          global.setBlockEntityData(block, nbt);
          return;
        }
      }
      // console.log("Spawning trainer " + newTrainer + " at tier " + levelTier + " for " + ownerPlayer.username);
      let freshTrainer = level.createEntity("rctmod:trainer");
      let trainerNBT = freshTrainer.getNbt();
      trainerNBT.TrainerId = newTrainer;
      trainerNBT.NoAI = true;
      trainerNBT.Pos = [
        Number(block.x) + 0.5,
        Number(block.y),
        Number(block.z) + 0.5,
      ];
      trainerNBT.Rotation = [
        NBT.f(global.rotationFromFacing(block.properties.get("facing"))),
        NBT.f(0),
      ];
      freshTrainer.setNbt(trainerNBT);
      freshTrainer.persistentData.levelTier = levelTier
      freshTrainer.persistentData.gymLeader = owner
      let badge = global.getGymBadgeType(ownerPlayer);
      if (badge !== "none") {
        freshTrainer.persistentData.badgeType = badge;
      }
      freshTrainer.spawn();
      level.spawnParticles(
        "species:ascending_dust",
        true,
        freshTrainer.x,
        freshTrainer.y + 0.5,
        freshTrainer.z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        10,
        0.1
      );
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("sunlit_cobblemon:trainer_podium", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .waterlogged()
    .property(booleanProperty.create("upgraded"))
    .defaultState((state) => {
      state
        .set(booleanProperty.create("upgraded"), false)
        .set(BlockProperties.WATERLOGGED, false);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("upgraded"), false)
        .set(BlockProperties.WATERLOGGED, false);
    })
    .box(1, 0, 1, 15, 2, 15)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.trainer_podium.description").gray());
      item.modelJson({
        parent: "sunlit_cobblemon:block/kubejs/trainer_podium",
      });
    })
    .model("sunlit_cobblemon:block/kubejs/trainer_podium")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ owner: "-1", trainers: {}, lastBossSpawn: -1 });
      blockInfo.serverTick(200, 0, (entity) => {
        global.runTrainerPodium(entity);
      });
    }).blockstateJson = {
    multipart: [
      {
        when: { upgraded: "false" },
        apply: { model: "sunlit_cobblemon:block/kubejs/trainer_podium" },
      },
      {
        when: { upgraded: "true" },
        apply: { model: "sunlit_cobblemon:block/kubejs/trainer_podium_upgraded" },
      },
    ],
  };
});
