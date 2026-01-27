console.info("[SOCIETY] addGrapeJuiceRecipes.js loaded");

const netherGrapeJuices = ["crimson", "warped"];
const nethergrapes = ["crimson_grape", "warped_grape"];
const nether = ["crimson", "warped"];

ServerEvents.recipes((e) => {
  const juiceFromPress = (juice, grape) => {
    e.custom({
      type: "create:compacting",
      ingredients: [
        {
          item: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${grape}`,
        },
      ],
      results: [
        {
          amount: 50,
          fluid: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
        },
      ],
    });
  };
  const spoutBottling = (juice) => {
    e.custom({
      type: "create:filling",
      ingredients: [
        {
          item: "vinery:wine_bottle",
        },
        {
          amount: 250,
          fluidTag: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
        },
      ],
      results: [
        {
          item: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grapejuice`,
        },
      ],
    });
    e.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grapejuice`,
        },
      ],
      results: [
        {
          item: "vinery:wine_bottle",
        },
        {
          amount: 250,
          fluid: `${
            nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
        },
      ],
    });
  };
  const spoutBasicBottling = (juice, color) => {
    e.custom({
      type: "create:filling",
      ingredients: [
        {
          item: "vinery:wine_bottle",
        },
        {
          amount: 250,
          fluidTag: `vinery:${juice}_grape_juice`,
        },
      ],
      results: [
        {
          item: `vinery:${color}_grapejuice`,
        },
      ],
    });
  };
  netherGrapeJuices.forEach((juice, index) => {
    juiceFromPress(juice, nethergrapes[index]);
    spoutBottling(juice, nethergrapes[index]);
  });

  e.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: `vinery:white_grapejuice`,
      },
    ],
    results: [
      {
        item: "vinery:wine_bottle",
      },
      {
        amount: 250,
        fluid: `vinery:white_grape_juice`,
      },
    ],
  });

  e.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: `vinery:red_grapejuice`,
      },
    ],
    results: [
      {
        item: "vinery:wine_bottle",
      },
      {
        amount: 250,
        fluid: `vinery:red_grape_juice`,
      },
    ],
  });
  ["red", "red_savanna", "red_jungle", "red_taiga"].forEach((juice, index) => {
    spoutBasicBottling(juice, "red");
  });
  ["white", "white_savanna", "white_jungle", "white_taiga"].forEach(
    (juice, index) => {
      spoutBasicBottling(juice, "white");
    }
  );
  e.custom({
    type: "create:compacting",
    ingredients: [
      [
        { item: "vinery:red_grape" },
        { item: "vinery:savanna_grapes_red" },
        { item: "vinery:jungle_grapes_red" },
        { item: "vinery:taiga_grapes_red" },
      ],
    ],
    results: [
      {
        amount: 50,
        fluid: `vinery:red_grape_juice`,
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      [
        { item: "vinery:white_grape" },
        { item: "vinery:savanna_grapes_white" },
        { item: "vinery:jungle_grapes_white" },
        { item: "vinery:taiga_grapes_white" },
      ],
    ],
    results: [
      {
        amount: 50,
        fluid: `vinery:white_grape_juice`,
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "minecraft:apple",
      },
    ],
    results: [
      {
        item: "vinery:apple_mash",
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "vinery:apple_mash",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "vinery:apple_juice",
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "society:ancient_fruit",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "society:ancient_fruit_juice",
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "pamhc2trees:starfruititem",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "society:starfruit_juice",
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "society:sparkpod",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "society:sparkpod_juice",
      },
    ],
  });
  e.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "society:mana_fruit",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "society:mana_fruit_juice",
      },
    ],
  });
});
