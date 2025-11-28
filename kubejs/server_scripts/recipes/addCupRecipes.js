console.info("[SOCIETY] addCupRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shapeless("8x herbalbrews:water_cup", ["minecraft:water_bucket"]);
  e.shapeless("herbalbrews:milk_coffee", ["herbalbrews:coffee", "#society:small_milk"]);
  e.shapeless("society:chai_blend", [
    "herbalbrews:dried_black_tea",
    "minecraft:sugar",
    "society:ground_cinnamon",
  ]);
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
