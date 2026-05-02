console.info("[SOCIETY-S-COBBLEMON] trainerPodium.js loaded");

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
    if (
      forceRemoval ||
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
  let nbt = block.getEntityData();
  let { owner, trainers } = nbt.data;
  let nearbyPlayers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(10))
    .filter((scanEntity) => scanEntity.isPlayer());

  let ownerPlayer;
  nearbyPlayers.forEach((player) => {
    if (player.getUuid().toString() === owner) ownerPlayer = player;
  });

  let spawnTrainer = global.removeNearbyTrainers(level, block);
  if (ownerPlayer) {
    if (spawnTrainer && !block.level.hasNeighborSignal(block.pos)) {
      let levelAverage = Math.min(100, global.getPartyLevel(ownerPlayer));
      let levelTier = global.getPlayerPodiumLevelTier(ownerPlayer, levelAverage);
      if (levelTier == undefined) return;
      let newTrainer
      if (trainers == null) {
        nbt.merge({ data: { trainers: {} } });
        global.setBlockEntityData(block, nbt);
        trainers = block.getEntityData().trainers;
        newTrainer = "";
      } else {
        newTrainer = trainers.get(`${levelTier}`);
      }
      // ownerPlayer.persistentData.winStreak = 200
      if (ownerPlayer.persistentData.winStreak == 0 || !newTrainer || newTrainer === "") {
        if (ownerPlayer.persistentData.winStreak > 14 && ownerPlayer.persistentData.winStreak % 15 === 0) {
          newTrainer = global.getLeagueBoss(Math.min(100, levelTier))
        } else {
          newTrainer = global.getRandomTrainer(Math.min(130, levelTier));
        }
        let newTrainersArray = trainers;
        newTrainersArray.putString(`${levelTier}`, newTrainer)
        nbt.merge({ data: { trainers: newTrainersArray } });
        global.setBlockEntityData(block, nbt);
      }
      if (newTrainer === "lass_anne_00041") newTrainer = "lass_anne_0004"
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
    .box(1, 0, 1, 15, 2, 15)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.trainer_podium.description").gray());
      item.modelJson({
        parent: "sunlit_cobblemon:block/trainer_podium",
      });
    })
    .model("sunlit_cobblemon:block/trainer_podium")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ owner: "-1", trainers: {} });
      blockInfo.serverTick(300, 0, (entity) => {
        global.runTrainerPodium(entity);
      });
    });
});
