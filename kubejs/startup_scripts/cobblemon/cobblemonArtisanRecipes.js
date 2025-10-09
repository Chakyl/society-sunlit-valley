[
  { input: "cobblemon:red_apricorn", output: ["6x cobblemon:red_apricorn_seed"] },
  { input: "cobblemon:yellow_apricorn", output: ["6x cobblemon:yellow_apricorn_seed"] },
  { input: "cobblemon:green_apricorn", output: ["6x cobblemon:green_apricorn_seed"] },
  { input: "cobblemon:blue_apricorn", output: ["6x cobblemon:blue_apricorn_seed"] },
  { input: "cobblemon:pink_apricorn", output: ["6x cobblemon:pink_apricorn_seed"] },
  { input: "cobblemon:black_apricorn", output: ["6x cobblemon:black_apricorn_seed"] },
  { input: "cobblemon:white_apricorn", output: ["6x cobblemon:white_apricorn_seed"] },
  { input: "cobblemon:red_mint_leaf", output: ["6x cobblemon:red_mint_seeds"] },
  { input: "cobblemon:blue_mint_leaf", output: ["6x cobblemon:blue_mint_seeds"] },
  { input: "cobblemon:cyan_mint_leaf", output: ["6x cobblemon:cyan_mint_seeds"] },
  { input: "cobblemon:pink_mint_leaf", output: ["6x cobblemon:pink_mint_seeds"] },
  { input: "cobblemon:green_mint_leaf", output: ["6x cobblemon:green_mint_seeds"] },
  { input: "cobblemon:white_mint_leaf", output: ["6x cobblemon:white_mint_seeds"] },
  { input: "cobblemon:vivichoke", output: ["6x cobblemon:vivichoke_seeds"] },
].forEach((recipe) => {
  global.seedMakerRecipes.set(recipe.input, { output: recipe.output });
});

[
  { input: "cobblemon:medicinal_leek", output: ["sunlit_cobblemon:leek_preserves"] },
  { input: "cobblemon:vivichoke", output: ["sunlit_cobblemon:vivichoke_preserves"] },
  {
    input: "#sunlit_cobblemon:common_cobblemon_berries",
    output: ["sunlit_cobblemon:common_cobbleberry_preserves"],
  },
  {
    input: "#sunlit_cobblemon:uncommon_cobblemon_berries",
    output: ["sunlit_cobblemon:uncommon_cobbleberry_preserves"],
  },
  {
    input: "#sunlit_cobblemon:rare_cobblemon_berries",
    output: ["sunlit_cobblemon:rare_cobbleberry_preserves"],
  },
  {
    input: "#sunlit_cobblemon:legendary_cobblemon_berries",
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
    input: "farmersdelight:sweet_berry_cheesecake",
    output: ["cobblemon:whipped_dream"],
  },
].forEach((recipe) => {
  global.recyclingMachineRecipes.set(recipe.input, { output: recipe.output });
});
