console.info("[SOCIETY] addCupRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shapeless("8x herbalbrews:water_cup", ["minecraft:water_bucket"]);
  e.shapeless("herbalbrews:milk_coffee", ["herbalbrews:coffee", "#society:small_milk"]);
  e.custom({
    type: "herbalbrews:kettle_brewing",
    experience: 0.8,
    fluid: [
      {
        amount: 40,
      },
    ],
    heat_needed: [
      {
        amount: 40,
      },
    ],
    ingredients: [
      {
        item: "herbalbrews:dried_black_tea",
      },
      {
        tag: "society:small_milk",
      },
      {
        item: "minecraft:sugar",
      },
      {
        item: "society:ground_cinnamon",
      },
      {
        item: "minecraft:glass_bottle",
      },
    ],
    result: {
      item: "herbalbrews:chai_tea",
    },
  });
  e.custom({
    type: "herbalbrews:kettle_brewing",
    experience: 0.8,
    fluid: [
      {
        amount: 20,
      },
    ],
    heat_needed: [
      {
        amount: 90,
      },
    ],
    ingredients: [
      {
        item: "herbalbrews:ground_coffee",
      },
      {
        item: "pamhc2trees:roastedhazelnutitem",
      },
      {
        item: "minecraft:glass_bottle",
      },
    ],
    result: {
      item: "herbalbrews:hazelnut_coffee",
    },
  });
  e.custom({
    type: "herbalbrews:kettle_brewing",
    experience: 0.8,
    fluid: [
      {
        amount: 20,
      },
    ],
    heat_needed: [
      {
        amount: 50,
      },
    ],
    ingredients: [
      {
        item: "herbalbrews:ground_coffee",
      },
      {
        item: "society:ground_cinnamon",
      },
      {
        item: "minecraft:glass_bottle",
      },
    ],
    result: {
      item: "herbalbrews:cinnamon_coffee",
    },
  });

  e.shapeless("society:latte", ["society:espresso", "society:espresso", "society:steamed_milk"]);
  e.shapeless("society:mocha", [
    "society:espresso",
    "bakery:chocolate_jam",
    "society:steamed_milk",
    "minecraft:sugar",
  ]);
  e.shapeless("society:dirty_chai", [
    "society:espresso",
    "herbalbrews:chai_tea",
    "society:steamed_milk",
  ]);
  e.shapeless("society:bowl_of_soul", [
    "herbalbrews:rooibos_tea",
    "society:ground_cinnamon",
    "society:steamed_milk",
  ]);
  e.shapeless("society:truffle_tea", [
    "herbalbrews:yerba_mate_tea",
    "society:truffle",
    "society:dried_tubabacco_leaf",
    "society:steamed_milk",
  ]);
});
