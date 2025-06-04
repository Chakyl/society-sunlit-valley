console.info("[SOCIETY] addSpawnEggRecipes.js loaded");

ServerEvents.recipes((e) => {
  const recipes = [
    { egg: "minecraft:wolf_spawn_egg", mineral: "society:thunder_egg", coin: "crown" },
    { egg: "untitledduckmod:duck_spawn_egg", mineral: "society:slate", coin: "crown" },
    { egg: "minecraft:camel_spawn_egg", mineral: "society:orpiment", coin: "crown" },
    { egg: "minecraft:bee_spawn_egg", mineral: "society:petrified_slime", coin: "crown" },
    { egg: "quark:crab_spawn_egg", mineral: "society:sandstone_slate", coin: "crown" },
    { egg: "minecraft:cat_spawn_egg", mineral: "society:nekoite", coin: "crown" },
    { egg: "minecraft:squid_spawn_egg", mineral: "society:allanite", coin: "crown" },
    { egg: "minecraft:cow_spawn_egg", mineral: "society:calcite_gem", coin: "cog" },
    { egg: "minecraft:allay_spawn_egg", mineral: "society:celestine", coin: "crown" },
    { egg: "vinery:mule_spawn_egg", mineral: "society:granite_slate", coin: "crown" },
    { egg: "minecraft:horse_spawn_egg", mineral: "society:jagoite", coin: "crown" },
    { egg: "minecraft:llama_spawn_egg", mineral: "society:jamborite", coin: "crown" },
    { egg: "minecraft:chicken_spawn_egg", mineral: "society:limestone_pebble", coin: "bevel" },
    { egg: "minecraft:sheep_spawn_egg", mineral: "society:malachite", coin: "cog" },
    { egg: "minecraft:pig_spawn_egg", mineral: "society:mudstone", coin: "crown" },
    { egg: "minecraft:donkey_spawn_egg", mineral: "society:aerinite", coin: "crown" },
    { egg: "minecraft:panda_spawn_egg", mineral: "society:lunarite", coin: "crown" },
    { egg: "minecraft:dolphin_spawn_egg", mineral: "society:ocean_stone", coin: "crown" },
    { egg: "minecraft:polar_bear_spawn_egg", mineral: "society:opal", coin: "crown" },
    { egg: "minecraft:ocelot_spawn_egg", mineral: "society:pyrite", coin: "crown" },
    { egg: "untitledduckmod:goose_spawn_egg", mineral: "society:soapstone", coin: "crown" },
    { egg: "meadow:wooly_cow_spawn_egg", mineral: "society:esperite", coin: "crown" },
    { egg: "minecraft:glow_squid_spawn_egg", mineral: "society:fluorapatite", coin: "crown" },
    { egg: "crabbersdelight:crab_spawn_egg", mineral: "society:fairy_stone", coin: "crown" },
    { egg: "minecraft:frog_spawn_egg", mineral: "society:geminite", coin: "crown" },
    { egg: "minecraft:skeleton_horse_spawn_egg", mineral: "society:ghost_crystal", coin: "crown" },
    { egg: "quark:shiba_spawn_egg", mineral: "society:hematite", coin: "crown" },
    { egg: "minecraft:fox_spawn_egg", mineral: "society:kyanite", coin: "crown" },
    { egg: "minecraft:rabbit_spawn_egg", mineral: "society:topaz", coin: "crown" },
    { egg: "minecraft:axolotl_spawn_egg", mineral: "society:pure_obsidian", coin: "crown" },
    { egg: "minecraft:turtle_spawn_egg", mineral: "society:star_shards", coin: "crown" },
    { egg: "quark:foxhound_spawn_egg", mineral: "society:tigerseye", coin: "crown" },
    { egg: "meadow:water_buffalo_spawn_egg", mineral: "society:neptunite", coin: "crown" },
    { egg: "minecraft:piglin_spawn_egg", mineral: "society:ruby", coin: "crown" },
    { egg: "minecraft:zombie_horse_spawn_egg", mineral: "society:baryte", coin: "crown" },
    { egg: "minecraft:strider_spawn_egg", mineral: "society:basalt_shard", coin: "crown" },
    { egg: "minecraft:goat_spawn_egg", mineral: "society:bixbyite", coin: "crown" },
    { egg: "minecraft:bat_spawn_egg", mineral: "society:dolomite", coin: "crown" },
    { egg: "quark:wraith_spawn_egg", mineral: "society:fire_opal", coin: "crown" },
    { egg: "quark:stoneling_spawn_egg", mineral: "society:helvite", coin: "crown" },
    { egg: "minecraft:parrot_spawn_egg", mineral: "society:marble", coin: "crown" },
    { egg: "autumnity:turkey_spawn_egg", mineral: "society:jasper", coin: "sun" },
    { egg: "autumnity:snail_spawn_egg", mineral: "society:amethyst_chunk", coin: "crown" },
    { egg: "buzzier_bees:grizzly_bear_spawn_egg", mineral: "society:beemonican_seal", coin: "ancient_coin" },
    { egg: "snowpig:snow_pig_spawn_egg", mineral: "society:frozen_tear", coin: "crown"},
    { egg: "snuffles:snuffle_spawn_egg", mineral: "society:lemon_stone", coin: "crown" },
  ];

  recipes.forEach((recipe) => {
    const { egg, mineral, coin } = recipe;
    e.shaped(egg, ["gmg", "beb", "gbg"], {
      e: "#bakery:eggs",
      b: "minecraft:bone_block",
      g: `numismatics:${coin}`,
      m: mineral,
    });
  });
});
