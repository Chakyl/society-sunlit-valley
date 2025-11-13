// priority: -21
console.info("[SOCIETY-S-COBBLEMON] cobbleWorkersRecipes.js loaded");

ServerEvents.recipes((e) => {
  const createCobbleWorkerRecipe = (
    input,
    output,
    elementalType,
    craftingTime,
    speedStat,
    multStat
  ) => {
    let recipe = {
      type: "cobble_workers:craft_station",
      elemental_type: elementalType,
      crafting_time: craftingTime,
      speed_stat: speedStat,
      ingredient: input,
      result: output,
    };
    if (multStat) {
      recipe.mult_stat = multStat;
    }
    e.custom(recipe);
  };

  let outputItem;
  Array.from(global.recyclingMachineRecipes.keys()).forEach((key) => {
    if (key.includes("raw") || key.includes("tin_can")) {
      outputItem = Item.of(global.recyclingMachineRecipes.get(key).output[0]);
      createCobbleWorkerRecipe(
        {
          item: key,
        },
        { item: outputItem.id, count: 2 },
        "steel",
        3000,
        "SPEED",
        "ATTACK"
      );
    }
  });
  Array.from(global.fishSmokerRecipes.keys()).forEach((key) => {
    outputItem = Item.of(global.fishSmokerRecipes.get(key).output[0]);
    createCobbleWorkerRecipe(
      {
        item: key,
      },
      { item: outputItem.id, count: 1 },
      "fire",
      24000,
      "SPECIAL_ATTACK"
    );
  });
  e.forEachRecipe({ type: "minecraft:smelting" }, (r) => {
    if (r !== null && r.originalRecipeIngredients !== null && r.originalRecipeIngredients[0]) {
      r.originalRecipeIngredients[0].getItemIds().forEach((ingredient) => {
        if (
          !(
            Item.of(ingredient).hasTag("minecraft:fishes") ||
            ingredient.id == "minecraft:salmon" ||
            global.removedItems.includes(Item.of(ingredient).id) ||
            global.removedItems.includes(Item.of(r.originalRecipeResult).id)
          )
        ) {
          createCobbleWorkerRecipe(
            { item: Item.of(ingredient).id },
            r.originalRecipeResult,
            "fire",
            Math.round(JSON.parse(r.json.toString()).cookingtime / 2),
            "SPECIAL_ATTACK"
          );
        }
      });
    }
  });
  createCobbleWorkerRecipe(
    { item: "society:sap" },
    { item: "society:rubber" },
    "fire",
    100,
    "SPECIAL_ATTACK"
  );
  createCobbleWorkerRecipe(
    { item: "create:crushed_raw_bismuth" },
    { item: "etcetera:bismuth_ingot" },
    "fire",
    100,
    "SPECIAL_ATTACK"
  );

  [
    { sapling: "minecraft:oak_sapling", log: "minecraft:oak_log" },
    { sapling: "minecraft:birch_sapling", log: "minecraft:birch_log" },
    { sapling: "minecraft:spruce_sapling", log: "minecraft:spruce_log" },
    { sapling: "minecraft:jungle_sapling", log: "minecraft:jungle_log" },
    { sapling: "minecraft:acacia_sapling", log: "minecraft:acacia_log" },
    { sapling: "windswept:flowering_acacia_sapling", log: "minecraft:acacia_log" },
    { sapling: "minecraft:dark_oak_sapling", log: "minecraft:dark_oak_log" },
    { sapling: "vanillabackport:pale_oak_sapling", log: "vanillabackport:pale_oak_log" },
    { sapling: "minecraft:cherry_sapling", log: "minecraft:cherry_log" },
    { sapling: "minecraft:mangrove_propagule", log: "minecraft:mangrove_log" },
    { sapling: "windswept:chestnut_sapling", log: "windswept:chestnut_log" },
    { sapling: "windswept:pine_sapling", log: "windswept:pine_log" },
    { sapling: "quark:ancient_sapling", log: "quark:ancient_log" },
    { sapling: "quark:blue_blossom_sapling", log: "quark:blossom_log" },
    { sapling: "quark:red_blossom_sapling", log: "quark:blossom_log" },
    { sapling: "quark:yellow_blossom_sapling", log: "quark:blossom_log" },
    { sapling: "quark:orange_blossom_sapling", log: "quark:blossom_log" },
    { sapling: "quark:lavender_blossom_sapling", log: "quark:blossom_log" },
    { sapling: "atmospheric:rosewood_sapling", log: "atmospheric:rosewood_log" },
    { sapling: "atmospheric:morado_sapling", log: "atmospheric:morado_log" },
    { sapling: "atmospheric:yucca_sapling", log: "atmospheric:yucca_log" },
    { sapling: "atmospheric:grimwood_sapling", log: "atmospheric:grimwood_log" },
    { sapling: "windswept:holly_sapling", log: "windswept:holly_log" },
    { sapling: "atmospheric:aspen_sapling", log: "atmospheric:aspen_log" },
    { sapling: "atmospheric:green_aspen_sapling", log: "atmospheric:aspen_log" },
    { sapling: "autumnity:orange_maple_sapling", log: "autumnity:maple_log" },
    { sapling: "autumnity:red_maple_sapling", log: "autumnity:maple_log" },
    { sapling: "autumnity:yellow_maple_sapling", log: "autumnity:maple_log" },
    { sapling: "autumnity:maple_sapling", log: "autumnity:maple_log" },
    { sapling: "minecraft:azalea", log: "quark:azalea_log" },
    { sapling: "minecraft:flowering_azalea", log: "quark:azalea_log" },
    { sapling: "vinery:apple_tree_sapling", log: "minecraft:oak_log" },
    { sapling: "vinery:dark_cherry_sapling", log: "vinery:dark_cherry_log" },
    { sapling: "beachparty:palm_sapling", log: "beachparty:palm_log" },
    { sapling: "meadow:pine_sapling", log: "meadow:pine_log" },
    { sapling: "cobblemon:red_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:green_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:yellow_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:white_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:black_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:blue_apricorn_seed", log: "cobblemon:apricorn_log" },
    { sapling: "cobblemon:pink_apricorn_seed", log: "cobblemon:apricorn_log" },
  ].forEach((recipe) => {
    createCobbleWorkerRecipe(
      {
        item: recipe.sapling,
      },
      { item: recipe.log, count: 4 },
      "fighting",
      240,
      "ATTACK",
      "SPECIAL_DEFENCE"
    );
  });
  [
    { item: "minecraft:honey_bottle", potion: "cobblemon:potion" },
    { item: "society:sap", potion: "cobblemon:super_potion" },
    { item: "society:maple_syrup", potion: "cobblemon:hyper_potion" },
    { item: "society:ancient_juice", potion: "cobblemon:max_potion" },
    { item: "society:starfruit_juice", potion: "cobblemon:full_restore" },
  ].forEach((recipe) => {
    createCobbleWorkerRecipe(
      {
        item: recipe.item,
      },
      { item: recipe.potion, count: 1 },
      "bug",
      1200,
      "DEFENCE"
    );
  });
  createCobbleWorkerRecipe(
    {
      item: "sunlit_cobblemon:uncharged_battery",
    },
    { item: "society:battery", count: 1 },
    "electric",
    48000,
    "SPECIAL_ATTACK"
  );
  createCobbleWorkerRecipe(
    {
      item: "society:friendship_necklace",
    },
    { item: "sunlit_cobblemon:fairy_heart", count: 1 },
    "fairy",
    72000,
    "SPECIAL_DEFENCE"
  );
    createCobbleWorkerRecipe(
    {
      item: "society:prismatic_shard",
    },
    { item: "sunlit_cobblemon:prismatic_ice", count: 1 },
    "ice",
    72000,
    "DEFENCE"
  );
  createCobbleWorkerRecipe(
    {
      item: "society:aged_ancient_cider",
    },
    { item: "sunlit_cobblemon:poke_genes", count: 1 },
    "psychic",
    72000,
    "HP"
  );
  [
    { item: "vintagedelight:ghost_pepper", pickle: "vintagedelight:pickled_pepper" },
    { item: "vintagedelight:cucumber", pickle: "vintagedelight:pickle" },
    { item: "minecraft:pitcher_pod", pickle: "vintagedelight:pickled_pitcher_pod" },
    { item: "minecraft:beetroot", pickle: "vintagedelight:pickled_beetroot" },
    { item: "farm_and_charm:onion", pickle: "vintagedelight:pickled_onion" },
    { item: "farmersdelight:cabbage_leaf", pickle: "vintagedelight:kimchi" },
  ].forEach((pickle) => {
    createCobbleWorkerRecipe(
      {
        item: pickle.item,
      },
      { item: pickle.pickle, count: 1 },
      "poison",
      1000,
      "HP"
    );
  });
  global.picklableVegetables.forEach((pickle) => {
    createCobbleWorkerRecipe(
      {
        item: pickle.item,
      },
      { item: `society:pickled_${pickle.item.split(":")[1]}`, count: 1 },
      "poison",
      1000,
      "HP"
    );
  });
  Ingredient.of("#forge:eggs").itemIds.forEach((item) => {
    createCobbleWorkerRecipe(
      {
        item: item,
      },
      { item: "vintagedelight:pickled_egg", count: 1 },
      "poison",
      1000,
      "HP"
    );
  });
});
