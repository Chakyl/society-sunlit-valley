console.info("[SOCIETY-S-COBBLEMON] trainerPodium.js loaded");

global.runTrainerPodium = (entity) => {
  const { level, block } = entity;
  let nbt = block.getEntityData();
  const { owner } = nbt.data;
  let nearbyPlayers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(10))
    .filter((scanEntity) => scanEntity.isPlayer());

  let ownerPlayer;
  let spawnTrainer = false;
  nearbyPlayers.forEach((player) => {
    if (player.getUuid().toString() === owner) ownerPlayer = player;
  });
  let nearbyTrainers = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(4))
    .filter((entityType) => entityType.type === "rctmod:trainer");
  if (nearbyTrainers.length == 0) {
    spawnTrainer = true;
  } else {
    let foundTrainer = nearbyTrainers[0];
    let foundTrainerNBT = foundTrainer.getNbt();
    if (foundTrainerNBT.Defeats > 0 || foundTrainerNBT.Wins > 0) {
      spawnTrainer = true;
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
  if (ownerPlayer) {
    if (spawnTrainer) {
      let levelTier = global.getPlayerPodiumLevelTier(ownerPlayer);
      let trainer = global.getRandomTrainer(Math.min(100, levelTier));
      let freshTrainer = level.createEntity("rctmod:trainer");
      let trainerNBT = freshTrainer.getNbt();
      trainerNBT.TrainerId = trainer;
      trainerNBT.NoAI = true;
      trainerNBT.Pos = [Number(block.x) + 0.5, Number(block.y), Number(block.z) + 0.5];
      freshTrainer.setNbt(trainerNBT);
      freshTrainer.spawn();
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
};

StartupEvents.registry("block", (event) => {
  event
    .create("sunlit_cobblemon:trainer_podium")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 18, 2, 18)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.gray("Invites Trainers to your Gym. Their levels"));
      item.tooltip(Text.gray("will match the average of your party"));
      item.modelJson({
        parent: "sunlit_cobblemon:block/trainer_podium",
      });
    })
    .model("sunlit_cobblemon:block/trainer_podium")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(600, 0, (entity) => {
        global.runTrainerPodium(entity);
      });
    });
});
