console.info("[SOCIETY] addPressingRecipes.js loaded");

ServerEvents.recipes((e) => {
  const createPressingRecipe = (input, output, compacting) => {
    e.custom({
      type: compacting ? "create:compacting" : "create:pressing",
      ingredients: [input],
      results: [
        {
          item: output,
        },
      ],
    });
  };
  const recipes = [
    {
      input: {
        item: "oreganized:lead_ingot",
      },
      output: "oreganized:lead_sheet",
    },
    {
      input: {
        item: "oreganized:silver_ingot",
      },
      output: "oreganized:silver_sheet",
    },
    {
      input: {
        amount: 250,
        fluid: "create_central_kitchen:sap",
      },
      output: "society:sap",
      compacting: true,
    },
  ];
  recipes.forEach((recipe) => {
    createPressingRecipe(recipe.input, recipe.output, recipe.compacting);
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "netherdepthsupgrade:lava_pufferfish",
      },
    ],
    results: [
      {
        item: "netherdepthsupgrade:lava_pufferfish",
      },
      {
        amount: 10,
        fluid: "minecraft:lava",
      },
    ],
  });
});
