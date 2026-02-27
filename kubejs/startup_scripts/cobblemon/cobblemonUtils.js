// priority: -21
console.info("[SOCIETY-S-COBBLEMON] cobblemonUtils.js loaded");
const $CobblemonAPI = Java.loadClass("com.cobblemon.mod.common.Cobblemon").INSTANCE;

global.getPlayerParty = (player) => $CobblemonAPI.getStorage().getParty(player.uuid);

global.getPartyLevel = (player) => {
  if (player == undefined) return 0;
  const party = global.getPlayerParty(player);
  if (party == undefined) return 0;
  let partyCount = 0;
  let levelSum = 0;
  let levelHighest = 0;
  party.forEach((pokemon) => {
    if (pokemon.isLegendary() || pokemon.isMythical()) levelSum += 99999;
    levelSum += pokemon.level;
    if (levelHighest < pokemon.level) levelHighest = pokemon.level;
    partyCount++;
  });
  let levelAverage = Math.round(levelSum / partyCount);
  if (Math.round(levelAverage * 1.5) < levelHighest) return levelHighest;
  return levelAverage;
};

global.getTrainerLevelTier = (trainerID) => {
  let foundLevel = -1;
  Array.from(trainerBuckets.keys()).forEach((bucket) => {
    let foundIndex = trainerBuckets
      .get(bucket)
      .findIndex((bucketTrainerID) => bucketTrainerID === trainerID);
    if (foundIndex !== -1) foundLevel = bucket;
  });
  return foundLevel;
};

global.hasScope = (entity) => entity.nbt.ForgeCaps["curios:inventory"].toString().includes("sunlit_cobblemon:silph_scope");

global.rollPokeWeightedTable = (table) => {
  let roll = 0;
  const totalWeight = table.reduce((acc, current) => acc + current.weight, 0);
  let currentWeight = 0;
  if (totalWeight > 1) {
    roll = rnd(0, totalWeight);
    for (let index = 0; index < table.length; index++) {
      currentWeight += table[index].weight;
      if (currentWeight >= roll) {
        return table[index];
      }
    }
  }
  return;
};

global.getPokemonLevel = (lvlRange) => {
  if (!lvlRange || lvlRange.length < 2) return 1;
  return (
    Math.floor(Math.random() * (lvlRange[1] - lvlRange[0] + 1)) + lvlRange[0]
  );
};
const $CobblemonWorldSpawnerManager = Java.loadClass("com.cobblemon.mod.common.api.spawning.CobblemonWorldSpawnerManager");
const $SpawningArea = Java.loadClass("com.cobblemon.mod.common.api.spawning.spawner.SpawningArea");
const $SpawnBucket = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnBucket");
const $SpawnCause = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnCause");

global.getCurrentSpawnDetails = (level, player, rarity) => {
  const configWorldSliceDiameter = 8;
  const configWorldSliceHeight = 16;
  const spawner = $CobblemonWorldSpawnerManager.INSTANCE.getSpawnersForPlayers().get(player.getUuid());
  let cause = new $SpawnCause(spawner, new $SpawnBucket(rarity, 1.0), player);

  let spawnArea = new $SpawningArea(
    cause,
    level,
    Math.ceil(player.x - configWorldSliceDiameter / 2.0),
    Math.ceil(player.y - configWorldSliceHeight / 2.0),
    Math.ceil(player.z - configWorldSliceDiameter / 2.0),
    configWorldSliceDiameter,
    configWorldSliceHeight,
    configWorldSliceDiameter,
  );
  let slice = spawner.prospector.prospect(spawner, spawnArea)
  let contexts = spawner.resolver.resolve(spawner, spawner.contextCalculators, slice)
  return spawner.getSpawningSelector().getProbabilities(spawner, contexts)
}