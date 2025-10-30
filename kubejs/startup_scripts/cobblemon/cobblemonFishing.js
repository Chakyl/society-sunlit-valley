console.info("[SOCIETY] cobblemonFishing.js loaded");

const Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");

const getCobbleFishPool = (tier, season, waterType) => {
  return global.cobblemonfishPool
    .filter((entry) => entry.tiers.includes(tier))
    .filter((entry) => entry.seasons.includes(season))
    .filter((entry) => entry.waterTypes.includes(waterType));
};

const getWaterType = (biome) => {
  const biomeTags = biome
    .tags()
    .map((tagkey) => tagkey.location())
    .toList()
    .toString();
  if (biomeTags.includes("#minecraft:is_ocean", "#minecraft:is_beach")) {
    return "ocean";
  }
  if (biomeTags.includes("minecraft:is_rive")) {
    return "river";
  }
  return "fresh";
};
const getBobberTier = (item) => {
  let stringNbt = item.nbt.toString();
  if (stringNbt.includes("sunlit_cobblemon:poke_bobber")) return "common";
  if (stringNbt.includes("sunlit_cobblemon:great_poke_bobber")) return "uncommon";
  if (stringNbt.includes("sunlit_cobblemon:ultra_poke_bobber")) return "rare";
  if (stringNbt.includes("sunlit_cobblemon:master_poke_bobber")) return "epic";
  return undefined;
};

const rollPokeFishingTable = (table) => {
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

const getPokemonLevel = (lvlRange) => {
  if (!lvlRange || lvlRange.length < 2) return 1;
  return Math.floor(Math.random() * (lvlRange[1] - lvlRange[0] + 1)) + lvlRange[0];
};

global.handleCobblemonFish = (e) => {
  const player = e.getEntity();
  const hook = e.getHookEntity();
  const server = player.getServer();
  const level = player.getLevel();
  const bobberTier = getBobberTier(player.getHeldItem("main_hand"));
  if (!bobberTier) return;
  if (player.isFake()) player.getHeldItem("main_hand").count--;

  if (level.dimension === "minecraft:the_nether") {
    console.log("fusghihng!@!!");
  } else {
    let biome = level.getBiome(hook.getPos());
    let caughtMon = rollPokeFishingTable(
      getCobbleFishPool(bobberTier, global.getSeasonFromLevel(level), getWaterType(biome))
    );
    if (!caughtMon) return;
    let pokeLevel = getPokemonLevel(caughtMon.lvlRange);
    if (pokeLevel == 1) {
      console.log(`[WARNING] PokeFishing returned invalid level:`);
      console.log(caughtMon);
    }
    server.runCommandSilent(
      `pokespawnat ${hook.x} ${hook.y} ${hook.z} ${caughtMon.pokemon} level=${pokeLevel} ${
        caughtMon.variant ? caughtMon.variant : ""
      }`
    );

    let caughtPokemon = level
      .getEntitiesWithin(AABB.ofBlock(level.getBlock(hook.getPos())).inflate(1))
      .filter((e) => e.type.equals("cobblemon:pokemon"));
    if (caughtPokemon && caughtPokemon.length > 0) {
      caughtPokemon = caughtPokemon[0];
      caughtPokemon.setDeltaMovement(new Vec3d(0, 1.5, 0));
      server.scheduleInTicks(20, () => {
        caughtPokemon.setDeltaMovement(player.position().subtract(caughtPokemon).scale(0.1));
      });
    }
  }
};

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemFishedEvent", (e) => {
  global.handleCobblemonFish(e);
});
