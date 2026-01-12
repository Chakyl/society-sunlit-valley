console.info("[SOCIETY] addCrushingRecipes.js loaded");

ServerEvents.recipes((e) => {
  const crushedRecipes = (input, output, outputCount, ignoreMincer) => {
    if (!ignoreMincer) {
      e.custom({
        type: "farm_and_charm:mincer",
        ingredient: {
          item: input,
        },
        recipe_type: "MEAT",
        result: {
          count: outputCount,
          item: output,
        },
      });
    }
    e.custom({
      type: "create:milling",
      ingredients: [
        {
          item: input,
        },
      ],
      processingTime: 40,
      results: [
        {
          count: outputCount,
          item: output,
        },
      ],
    });
  };
  crushedRecipes("society:neptuna", "aquaculture:neptunium_nugget", 2);
  crushedRecipes("aquaculture:worm", "crabbersdelight:crab_trap_bait", 2);
  crushedRecipes("aquaculture:minnow", "crabbersdelight:crab_trap_bait", 16);
  crushedRecipes("aquaculture:leech", "crabbersdelight:crab_trap_bait", 32);

  crushedRecipes("pamhc2trees:cinnamonitem", "society:ground_cinnamon", 4);
  crushedRecipes("herbalbrews:coffee_beans", "herbalbrews:ground_coffee", 1);
  crushedRecipes("minecraft:beef", "farm_and_charm:minced_beef", 1, true);
  crushedRecipes("minecraft:mutton", "farm_and_charm:lamb_ham", 1, true);
  crushedRecipes("minecraft:baked_potato", "brewery:mashed_potatoes", 2, true);
  crushedRecipes("society:sparkpod", "society:sparkstone", 3);
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        tag: "forge:dough",
      },
    ],
    result: [
      {
        item: "farm_and_charm:raw_pasta",
      },
    ],
    tool: {
      tag: "forge:tools/knives",
    },
  });
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:cooked_chicken",
      },
    ],
    result: [
      {
        item: "brewery:half_chicken",
      },
    ],
    tool: {
      tag: "forge:tools/knives",
    },
  });
  const spoutingRecipes = [
    { input: "create:crushed_raw_iron", output: ["minecraft:raw_iron"] },
    { input: "minecraft:raw_copper", output: ["create:crushed_raw_copper"] },
    { input: "minecraft:raw_gold", output: ["create:crushed_raw_gold"] },
    { input: "create:raw_zinc", output: ["create:crushed_raw_zinc"] },
    { input: "oreganized:raw_lead", output: ["oreganized:raw_lead"] },
    { input: "oreganized:raw_silver", output: ["create:crushed_raw_silver"] },
    { input: "etcetera:raw_bismuth", output: ["create:crushed_raw_bismuth"] },
  ];
});
