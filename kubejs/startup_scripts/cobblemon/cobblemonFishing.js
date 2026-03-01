console.info("[SOCIETY-S-COBBLEMON] cobblemonFishing.js loaded");

const Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");

const getCobbleFishPool = (tier, season, waterType) => {
  return global.cobblemonFishPool
    .filter((entry) => entry.tiers.includes(tier))
    .filter((entry) => entry.seasons.includes(season))
    .filter((entry) => entry.waterTypes.includes(waterType));
};

const getCobbleNetherFishPool = (tier) => {
  return global.cobblemonNetherFishPool.filter((entry) =>
    entry.tiers.includes(tier)
  );
};

const getWaterType = (biome) => {
  const biomeTags = biome
    .tags()
    .map((tagkey) => tagkey.location())
    .toList()
    .toString();
  if (
    biomeTags.includes("minecraft:is_ocean") ||
    biomeTags.includes("minecraft:is_beach")
  ) {
    return "ocean";
  }
  if (biomeTags.includes("minecraft:is_river")) {
    return "river";
  }
  return "fresh";
};

const getBobberTier = (item) => {
  let stringNbt = item.nbt.toString();
  if (stringNbt.includes("sunlit_cobblemon:poke_bobber")) return "common";
  if (stringNbt.includes("sunlit_cobblemon:great_poke_bobber"))
    return "uncommon";
  if (stringNbt.includes("sunlit_cobblemon:ultra_poke_bobber")) return "rare";
  if (stringNbt.includes("sunlit_cobblemon:master_poke_bobber")) return "epic";
  return undefined;
};

const catchPokemon = (caughtMon, level, hook, server, player, nether) => {
  if (!caughtMon) return;
  let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
  if (pokeLevel == 1) {
    console.log(`[WARNING] PokeFishing returned invalid level:`);
    console.log(caughtMon);
  }
  if (nether) {
    server.runCommandSilent(
      `execute in minecraft:the_nether run pokespawnat ${hook.x} ${hook.y} ${
        hook.z
      } ${caughtMon.pokemon} level=${pokeLevel} ${
        caughtMon.variant ? caughtMon.variant : ""
      }`
    );
  } else {
    server.runCommandSilent(
      `pokespawnat ${hook.x} ${hook.y + 2} ${hook.z} ${
        caughtMon.pokemon
      } level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""}`
    );
  }

  // TODO: Pokemon get kinda stuck in the lava
  let caughtPokemon = level
    .getEntitiesWithin(
      AABB.ofBlock(level.getBlock(hook.getPos())).inflate(nether ? 3 : 1)
    )
    .filter((e) => e.type.equals("cobblemon:pokemon"));
  if (caughtPokemon && caughtPokemon.length > 0) {
    caughtPokemon = caughtPokemon[0];
    caughtPokemon.setDeltaMovement(new Vec3d(0, 1.5, 0));
    server.scheduleInTicks(20, () => {
      caughtPokemon.setDeltaMovement(
        player
          .position()
          .subtract(caughtPokemon)
          .scale(nether ? 0.3 : 0.1)
      );
    });
  }
};
global.handleCobblemonFish = (e) => {
  const player = e.getEntity();
  const hook = e.getHookEntity();
  const server = player.getServer();
  const level = player.getLevel();
  const bobberTier = getBobberTier(player.getHeldItem("main_hand"));
  if (!bobberTier || !global.hasScope(player)) return;
  if (player.isFake()) player.getHeldItem("main_hand").count--;

  if (level.dimension === "minecraft:the_nether") {
    let caughtMon = global.rollPokeWeightedTable(
      getCobbleNetherFishPool(bobberTier)
    );
    catchPokemon(caughtMon, level, hook, server, player, true);
  } else {
    let biome = level.getBiome(hook.getPos());
    let caughtMon = global.rollPokeWeightedTable(
      getCobbleFishPool(
        bobberTier,
        global.getSeasonFromLevel(level),
        getWaterType(biome)
      )
    );
    catchPokemon(caughtMon, level, hook, server, player);
  }
};

ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.player.ItemFishedEvent",
  (e) => {
    global.handleCobblemonFish(e);
  }
);
