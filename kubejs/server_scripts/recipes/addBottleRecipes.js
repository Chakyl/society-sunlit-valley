console.info("[SOCIETY] addBottleRecipes.js loaded");

ServerEvents.recipes((e) => {
  const bottleRecipes = (item, fluid, amount, container) => {
    e.custom({
      type: "create:filling",
      ingredients: [
        {
          item: container,
        },
        {
          amount: amount,
          fluid: fluid,
        },
      ],
      results: [
        {
          item: item,
        },
      ],
    });
    e.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: item,
        },
      ],
      results: [
        {
          item: container,
        },
        {
          amount: amount,
          fluid: fluid,
        },
      ],
    });
  };

  const recipes = [
    {
      item: "vinery:apple_juice",
      fluid: "vinery:apple_juice",
      amount: 250,
      container: "vinery:wine_bottle",
    },
    {
      item: "society:ancient_juice",
      fluid: "society:ancient_fruit_juice",
      amount: 250,
      container: "vinery:wine_bottle",
    },
    {
      item: "society:starfruit_juice",
      fluid: "society:starfruit_juice",
      amount: 250,
      container: "vinery:wine_bottle",
    },
    {
      item: "society:mana_fruit_juice",
      fluid: "society:mana_fruit_juice",
      amount: 250,
      container: "vinery:wine_bottle",
    },
    {
      item: "society:sparkpod_juice",
      fluid: "society:sparkpod_juice",
      amount: 250,
      container: "vinery:wine_bottle",
    },
    {
      item: "relics:relic_experience_bottle",
      fluid: "relics:relic_experience",
      amount: 50,
      container: "minecraft:glass_bottle",
    },
    {
      item: "society:pine_tar",
      fluid: "society:pine_tar",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "society:oak_resin",
      fluid: "society:oak_resin",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "society:mystic_syrup",
      fluid: "society:mystic_syrup",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "society:maple_syrup",
      fluid: "society:maple_syrup",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "society:aloe_preserves",
      fluid: "create_central_kitchen:aloe_gel",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "vintagedelight:vinegar_bottle",
      fluid: "society:vinegar",
      amount: 250,
      container: "minecraft:glass_bottle",
    },
    {
      item: "vintagedelight:vinegar_mason_jar",
      fluid: "society:vinegar",
      amount: 750,
      container: "bakery:jar",
    },
  ];
  recipes.forEach((recipe) => {
    bottleRecipes(recipe.item, recipe.fluid, recipe.amount, recipe.container);
  });
  e.custom({
    type: "create:filling",
    ingredients: [
      {
        tag: "society:raw_logs",
      },
      {
        amount: 50,
        fluid: "society:oak_resin",
      },
    ],
    results: [
      {
        item: "society:treated_log",
      },
    ],
  });
});
