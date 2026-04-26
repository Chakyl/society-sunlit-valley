// priority: -25
console.info("[SOCIETY-S-COBBLEMON] cobblemonArtisanRecipes.js loaded");

[
  {
    input: "cobblemon:red_apricorn",
    output: ["6x cobblemon:red_apricorn_seed"],
  },
  {
    input: "cobblemon:yellow_apricorn",
    output: ["6x cobblemon:yellow_apricorn_seed"],
  },
  {
    input: "cobblemon:green_apricorn",
    output: ["6x cobblemon:green_apricorn_seed"],
  },
  {
    input: "cobblemon:blue_apricorn",
    output: ["6x cobblemon:blue_apricorn_seed"],
  },
  {
    input: "cobblemon:pink_apricorn",
    output: ["6x cobblemon:pink_apricorn_seed"],
  },
  {
    input: "cobblemon:black_apricorn",
    output: ["6x cobblemon:black_apricorn_seed"],
  },
  {
    input: "cobblemon:white_apricorn",
    output: ["6x cobblemon:white_apricorn_seed"],
  },
  { input: "cobblemon:red_mint_leaf", output: ["6x cobblemon:red_mint_seeds"] },
  {
    input: "cobblemon:blue_mint_leaf",
    output: ["6x cobblemon:blue_mint_seeds"],
  },
  {
    input: "cobblemon:cyan_mint_leaf",
    output: ["6x cobblemon:cyan_mint_seeds"],
  },
  {
    input: "cobblemon:pink_mint_leaf",
    output: ["6x cobblemon:pink_mint_seeds"],
  },
  {
    input: "cobblemon:green_mint_leaf",
    output: ["6x cobblemon:green_mint_seeds"],
  },
  {
    input: "cobblemon:white_mint_leaf",
    output: ["6x cobblemon:white_mint_seeds"],
  },
  { input: "cobblemon:vivichoke", output: ["6x cobblemon:vivichoke_seeds"] },
].forEach((recipe) => {
  global.seedMakerRecipes.set(recipe.input, { output: recipe.output });
});

[
  {
    input: "cobblemon:medicinal_leek",
    output: ["sunlit_cobblemon:leek_preserves"],
  },
  {
    input: "cobblemon:vivichoke",
    output: ["sunlit_cobblemon:vivichoke_preserves"],
  },
  {
    input: "#cobblemon_farmers:common_berries",
    output: ["sunlit_cobblemon:common_cobbleberry_preserves"],
  },
  {
    input: "#cobblemon_farmers:uncommon_berries",
    output: ["sunlit_cobblemon:uncommon_cobbleberry_preserves"],
  },
  {
    input: "#cobblemon_farmers:rare_berries",
    output: ["sunlit_cobblemon:rare_cobbleberry_preserves"],
  },
  {
    input: "#cobblemon_farmers:legendary_berries",
    output: ["sunlit_cobblemon:legendary_cobbleberry_preserves"],
  },
].forEach((recipe) => {
  global.preservesJarRecipes.set(recipe.input, { output: recipe.output });
});

[
  {
    input: "windswept:lavender_crown",
    output: ["cobblemon:galarica_cuff"],
  },
  {
    input: "windswept:holly_wreath",
    output: ["cobblemon:galarica_wreath"],
  },
  {
    input: "society:steamy_gadget",
    output: ["cobblemon:upgrade"],
  },
  {
    input: "gamediscs:game_disc_slime",
    output: ["cobblemon:dubious_disc"],
  },
  {
    input: "society:aged_apple_wine",
    output: ["cobblemon:sweet_apple"],
  },
  {
    input: "society:aged_apple_cider",
    output: ["cobblemon:tart_apple"],
  },
  {
    input: "society:aged_mana_king",
    output: ["cobblemon:syrupy_apple"],
  },
  {
    input: "farmersdelight:sweet_berry_cheesecake",
    output: ["cobblemon:whipped_dream"],
  },
  {
    input: "sunlit_cobblemon:poison_drop",
    output: ["society:spark_gro"],
  },
  {
    input: "sunlit_cobblemon:strange_spore",
    output: ["4x society:enriched_bone_meal"],
  },
  {
    input: "cobblemon:metal_coat",
    output: ["1x oreganized:silver_ingot"],
  },
  {
    input: "sunlit_cobblemon:permafrost_drop",
    output: ["4x society:frozen_tear"],
  },
  {
    input: "sunlit_cobblemon:quicksilver",
    output: ["3x cobblemon:silver_powder"],
  },
  { 
    input: "sunlit_cobblemon:draco_meteorite", 
    output: ["12x society:sparkstone"] 
  }
].forEach((recipe) => {
  global.recyclingMachineRecipes.set(recipe.input, { output: recipe.output });
});

[
  {
    input: "#cobblemon_farmers:common_berries",
    output: ["sunlit_cobblemon:dried_common_cobbleberry"],
  },
  {
    input: "#cobblemon_farmers:uncommon_berries",
    output: ["sunlit_cobblemon:dried_uncommon_cobbleberry"],
  },
  {
    input: "#cobblemon_farmers:rare_berries",
    output: ["sunlit_cobblemon:dried_rare_cobbleberry"],
  },
  {
    input: "#cobblemon_farmers:legendary_berries",
    output: ["sunlit_cobblemon:dried_legendary_cobbleberry"],
  },
  {
    input: "sunlit_cobblemon:paras_mushroom",
    output: ["sunlit_cobblemon:dried_paras_mushroom"],
  },
].forEach((recipe) => {
  global.dehydratorRecipes.set(recipe.input, { output: recipe.output });
});

global.cobbleTypeGems.forEach((gem) => {
  global.crystalariumCrystals.set(gem.item, {
    output: [`2x ${gem.item}`],
    time: 5,
  });
});

global.mushroomLogRecipes.set("cobblemon:apricorn_log", { output: ["1x cobblemon:big_root"] });

global.loomRecipes.set("sunlit_cobblemon:electro_wool", { output: ["sunlit_cobblemon:electric_canvas"] });

global.oilMakerRecipes.set("sunlit_cobblemon:poison_drop", { output: ["sunlit_cobblemon:venomshine"] });

global.cheesePressRecipes.set("sunlit_cobblemon:moomoo_milk", { output: ["sunlit_cobblemon:moomoo_cheese"] });
global.cheesePressRecipes.set("sunlit_cobblemon:large_moomoo_milk", { output: ["4x sunlit_cobblemon:moomoo_cheese"] });
global.cheesePressRecipes.set("sunlit_cobblemon:spider_milk", { output: ["sunlit_cobblemon:spider_milk"] })
global.agingCaskRecipes.set("sunlit_cobblemon:moomoo_cheese", { output: ["1x sunlit_cobblemon:aged_moomoo_cheese"], time: 3 });
global.ancientCaskRecipes.set("sunlit_cobblemon:aged_moomoo_cheese", { output: ["1x sunlit_cobblemon:double_aged_moomoo_cheese"], time: 13 });