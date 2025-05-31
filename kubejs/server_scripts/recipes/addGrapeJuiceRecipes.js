console.info("[SOCIETY] addGrapeJuiceRecipes.js loaded");

const grapeJuices = [
  "red",
  "red_savanna",
  "red_jungle",
  "red_taiga",
  "white",
  "white_savanna",
  "white_jungle",
  "white_taiga",
  "crimson",
  "warped",
];
const grapes = [
  "red_grape",
  "savanna_grapes_red",
  "jungle_grapes_red",
  "taiga_grapes_red",
  "white_grape",
  "savanna_grapes_white",
  "jungle_grapes_white",
  "taiga_grapes_white",
  "crimson_grape",
  "warped_grape",
];
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

  grapeJuices.forEach((juice, index) => {
    juiceFromPress(juice, grapes[index]);
    spoutBottling(juice, grapes[index]);
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
});
