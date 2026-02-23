console.info("[SOCIETY] addMixerRecipes.js loaded");

ServerEvents.recipes((e) => {
  const createMixerRecipe = (inputs, output, count) => {
    e.custom({
      type: "create:mixing",
      results: [
        {
          item: output,
          count: count,
        },
      ],
      ingredients: inputs,
    });
  };

  const recipes = [
    {
      output: "candlelight:mozzarella",
      inputs: [
        {
          amount: 250,
          fluid: "minecraft:water",
        },
        {
          amount: 250,
          fluid: "society:milk",
        },
      ],
    },
    {
      output: "farm_and_charm:butter",
      inputs: [
        {
          amount: 250,
          fluid: "society:milk",
        },
      ],
    },
    {
      output: "candlelight:tomato_mozzarella_salad",
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          tag: "forge:cheeses",
        },
        {
          item: "farmersdelight:tomato",
        },
      ],
    },
    {
      output: "candlelight:salad",
      count: 4,
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          tag: "forge:vegetables/cabbage",
        },
        {
          tag: "forge:cheeses",
        },
        {
          item: "farmersdelight:tomato",
        },
      ],
    },
    {
      output: "candlelight:fresh_garden_salad",
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          tag: "forge:vegetables/cabbage",
        },
        {
          item: "minecraft:carrot",
        },
        {
          item: "farmersdelight:tomato",
        },
      ],
    },
    {
      output: "candlelight:beef_tartare",
      count: 2,
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          item: "farm_and_charm:onion",
        },
        {
          item: "farm_and_charm:minced_beef",
        },
      ],
    },
    {
      output: "candlelight:harvest_plate",
      count: 3,
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          item: "farmersdelight:tomato",
        },
        {
          item: "minecraft:carrot",
        },
        {
          item: "minecraft:potato",
        },
      ],
    },
    {
      output: "candlelight:beetroot_salad",
      count: 2,
      inputs: [
        {
          item: "minecraft:bowl",
        },
        {
          tag: "forge:cheeses",
        },
        {
          item: "minecraft:beetroot",
        },
      ],
    },
    {
      output: "farm_and_charm:farmer_salad",
      count: 2,
      inputs: [
        {
          tag: "forge:vegetables/cabbage",
        },
        {
          item: "farmersdelight:tomato",
        },
        {
          item: "farm_and_charm:strawberry",
        },
        {
          item: "farm_and_charm:onion",
        },
      ],
    },
    {
      output: "brewery:potato_salad",
      count: 2,
      inputs: [
        {
          item: "minecraft:beetroot",
        },
        {
          tag: "forge:vegetables/cabbage",
        },
        {
          item: "farmersdelight:tomato",
        },
        {
          item: "minecraft:baked_potato",
        },
      ],
    },
    {
      output: "farm_and_charm:oatmeal_with_strawberries",
      count: 2,
      inputs: [
        {
          amount: 1000,
          fluid: "society:milk",
        },
        {
          item: "farm_and_charm:oat",
        },
        {
          item: "farm_and_charm:strawberry",
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    createMixerRecipe(recipe.inputs, recipe.output, recipe.count || 1);
  });
  // Additional recipes that don't fit the simple format
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:lapis_lazuli",
      },
      {
        fluid: "society:ancient_fruit_juice",
        amount: 100,
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 100,
      },
    ],
    results: [
      {
        fluid: "create_enchantment_industry:hyper_experience",
        amount: 20,
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "society:pristine_star_shards",
      },
      {
        fluid: "society:starfruit_juice",
        amount: 100,
      },
    ],
    results: [
      {
        fluid: "create_enchantment_industry:experience",
        amount: 20,
      },
      {
        item: "society:pristine_star_shards",
      },
    ],
    heatRequirement: "heated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "society:prismatic_shard",
      },
      {
        fluid: "create_enchantment_industry:hyper_experience",
        amount: 20,
      },
    ],
    results: [
      {
        fluid: "relics:relic_experience",
        amount: 20,
      },
      {
        item: "society:prismatic_shard",
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:glowstone_dust",
      },
      {
        fluid: "society:ancient_fruit_juice",
        amount: 250,
      },
    ],
    results: [
      {
        fluid: "supplementaries:lumisene",
        amount: 250,
      },
    ],
    heatRequirement: "heated",
  });

  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "society:ancient_fruit",
      },
      {
        fluid: "society:oak_resin",
        amount: 50,
      },
      {
        fluid: "society:vinegar",
        amount: 500,
      },
    ],
    results: [
      {
        fluid: "society:alchemical_varnish",
        amount: 500,
      },
    ],
    heatRequirement: "heated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "oreganized:lead_ingot",
      },
      {
        item: "create:powdered_obsidian",
      },
    ],
    results: [
      {
        fluid: "oreganized:molten_lead",
        amount: 200,
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:netherite_upgrade_smithing_template",
      },
      {
        item: "create:powdered_obsidian",
      },
    ],
    results: [
      {
        item: "oreganized:electrum_upgrade_smithing_template",
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "society:sun_candy",
      },
      {
        fluid: "create_central_kitchen:aloe_gel",
        amount: 50,
      },
      {
        fluid: "society:mystic_syrup",
        amount: 250,
      }
    ],
    results: [
      {
        fluid: "society:mystic_jelly",
        amount: 250,
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:turtle_egg"
      },
      {
        item: "society:ocean_stone",
      },
      {
        item: "gag:sacred_salt",
      },
      {
        item: "minecraft:tube_coral_block",
      },
      {
        fluid: "minecraft:water",
        amount: 500,
      },
      {
        fluid: "society:mystic_jelly",
        amount: 500,
      }
    ],
    results: [
      {
        item: "society:ocean_jelly",
      },
    ],
    heatRequirement: "superheated",
  });
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "species:cracked_wraptor_egg",
      },
      {
        item: "society:dried_crimson_fungus",
      },
      {
        item: "society:dried_warped_fungus",
      },
      {
        item: "netherdepthsupgrade:eyeball"
      },
      {
        fluid: "minecraft:lava",
        amount: 500,
      },
      {
        fluid: "society:mystic_jelly",
        amount: 500,
      }
    ],
    results: [
      {
        item: "society:nether_jelly",
      },
    ],
    heatRequirement: "superheated",
  });
});
