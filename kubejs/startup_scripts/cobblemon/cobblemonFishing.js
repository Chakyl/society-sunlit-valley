console.info("[SOCIETY-S-COBBLEMON] cobblemonFishing.js loaded");

const Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");

const getCobbleFishPool = (tier, season, waterType, mukbeth) => {
  let resolvedPool = global.cobblemonFishPool
    .filter((entry) => entry.tiers.includes(tier))
    .filter((entry) => entry.seasons.includes(season))
    .filter((entry) => entry.waterTypes.includes(waterType));

  if (mukbeth) {
    resolvedPool = resolvedPool.filter((entry) => !['grimer', 'muk', 'trubbish', 'garbodor'].includes(entry.pokemon));
  }

  return resolvedPool
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
      `execute in minecraft:the_nether run pokespawnat ${hook.x} ${hook.y} ${hook.z
      } ${caughtMon.pokemon} level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""
      }`
    );
  } else {
    if (caughtMon.variant && String(caughtMon.variant).includes("magikarp_jump")) player.tell(Text.translatable("sunlit_cobblemon.special_magikarp").gold());
    if (Math.random() < 0.04 && global.getHasCurio(player, 'sunlit_cobblemon:swampy_mystica_branch')) {
      let lakeLegendaries = ["mesprit", "azelf", "uxie"]
      if (global.hasPartyPokemon(player, lakeLegendaries, 3)) {
        let blockToSet = level.getBlock(level.getBlock(hook.getPos()).getPos().above());
        blockToSet.set("cobblemon:moon_stone_block")
        let spawnedAny = global.summonRaidPokemon(server, level, blockToSet, "cresselia", "", 100, 75, false, false, 0, true);
        if (spawnedAny) {
          let { x, y, z } = blockToSet;
          server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
          server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
          server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
          level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
          server.runCommandSilent(`playsound unusualfishmod:deep_water block @a ${x} ${y} ${z} 2`);
          server.runCommandSilent(`playsound unusualfishmod:deep_water block @a ${x} ${y} ${z} 2`);
          return;
        }
      } else {
        server.runCommandSilent(
          `execute in ${level.dimension} run pokespawnat ${hook.x} ${hook.y + 2} ${hook.z} ${lakeLegendaries[Math.floor(Math.random() * lakeLegendaries.length)]} level=80`
        );

      }
    } else {
      server.runCommandSilent(
        `execute in ${level.dimension} run pokespawnat ${hook.x} ${hook.y + 2} ${hook.z} ${caughtMon.pokemon
        } level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""}`
      );
    }
  }

  // TODO: Pokemon get kinda stuck in the lava
  let caughtPokemon = level
    .getEntitiesWithin(
      AABB.ofBlock(level.getBlock(hook.getPos())).inflate(nether ? 3 : 2)
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
        getWaterType(biome),
        player.stages.has("mukbeth")
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
