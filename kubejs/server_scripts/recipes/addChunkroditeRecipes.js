console.info("[SOCIETY] addChunkroditeRecipes.js loaded");

ServerEvents.recipes((e) => {
  const addCrushingRecipes = (item, value) => {
    e.custom({
      type: "create:milling",
      ingredients: [
        {
          item: item,
        },
      ],
      processingTime: value,
      results: [
        {
          count: Math.round(value / 32) * 2,
          item: "moreminecarts:chunkrodite",
        },
      ],
    });
    e.custom({
      type: "farm_and_charm:mincer",
      ingredient: {
        item: item,
      },
      recipe_type: "STONE",
      result: {
        count: Math.round(value / 32) * 2,
        item: "moreminecarts:chunkrodite",
      },
    });
  };
  global.geodeList.forEach((mineral) => {
    const { item, value } = mineral;
    addCrushingRecipes(item, value);
  });
  global.frozenGeodeList.forEach((mineral) => {
    const { item, value } = mineral;
    addCrushingRecipes(item, value);
  });
  global.magmaGeodeList.forEach((mineral) => {
    const { item, value } = mineral;
    addCrushingRecipes(item, value);
  });
  global.gems.forEach((gem) => {
    const { item, value } = gem;
    addCrushingRecipes(item, value);
  });
  e.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "society:espresso",
      },
    ],
    processingTime: 64,
    results: [
      {
        count: 8,
        item: "moreminecarts:chunkrodite",
      },
    ],
  });
  e.custom({
    type: "farm_and_charm:mincer",
    ingredient: {
      item: "society:espresso",
    },
    recipe_type: "STONE",
    result: {
      count: 8,
      item: "moreminecarts:chunkrodite",
    },
  });
  e.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "aquaculture:neptunium_ingot",
      },
    ],
    processingTime: 1024,
    results: [
      {
        count: 8,
        item: "moreminecarts:chunkrodite_block",
      },
    ],
  });
  e.custom({
    type: "farm_and_charm:mincer",
    ingredient: {
      item: "aquaculture:neptunium_ingot",
    },
    recipe_type: "STONE",
    result: {
      count: 24,
      item: "moreminecarts:chunkrodite_block",
    },
  });
  e.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "society:prismatic_shard",
      },
    ],
    processingTime: 20000,
    results: [
      {
        count: 32,
        item: "moreminecarts:chunkrodite_block",
      },
    ],
  });
  e.custom({
    type: "farm_and_charm:mincer",
    ingredient: {
      item: "society:prismatic_shard",
    },
    recipe_type: "STONE",
    result: {
      count: 32,
      item: "moreminecarts:chunkrodite_block",
    },
  });
});
