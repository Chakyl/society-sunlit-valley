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
  if (ownerPlayer) {
    let winStreak = ownerPlayer.persistentData.winStreak
    let nearbyTrainers = level
      .getEntitiesWithin(AABB.ofBlock(block).inflate(16))
      .filter((entityType) => entityType.type === "rctmod:trainer");
    if (nearbyTrainers.length == 0) {
      spawnTrainer = true;
      nbt.merge({
        data: {
          winStreak: 0,
        },
      });
    }
    if (spawnTrainer) {
      let levelTier = global.getPlayerPodiumLevelTier(ownerPlayer);
      let trainer = global.getRandomTrainer(Math.min(100, levelTier));
      level
        .getServer()
        .runCommandSilent(
          `rctmod trainer summon ${trainer} ${block.x} ${block.y + 1} ${block.z}`
        );
      ownerPlayer.tell("A trainer arrived at your Podium!");
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
      item.modelJson({
        parent: "sunlit_cobblemon:block/trainer_podium",
      });
    })
    .model("sunlit_cobblemon:block/trainer_podium")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ owner: "-1", winStreak: 0 });
      blockInfo.serverTick(20, 0, (entity) => {
        global.runTrainerPodium(entity);
      });
    });
});
