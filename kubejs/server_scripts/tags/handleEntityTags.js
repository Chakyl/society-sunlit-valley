// priority: 0
console.info("[SOCIETY] handleEntityTags.js loaded");

ServerEvents.tags("entity_type", (e) => {
  global.husbandryAnimals.forEach((animal) => {
    e.add("society:husbandry_animal", animal);
  });

  [
    "minecraft:cow",
    "minecraft:goat",
    "minecraft:sheep",
    "meadow:wooly_sheep",
    "meadow:wooly_cow",
    "meadow:water_buffalo",
    "minecraft:mooshroom",
    "buzzier_bees:moobloom",
    "species:mammutilation",
    "farmlife:domestic_tribull",
    "wildernature:minisheep",
    "wildernature:bison",
    "minecraft:squid",
    "minecraft:glow_squid",
    "windswept:frostbiter",
  ].forEach((animal) => {
    e.add("society:milkable_animal", animal);
  });
  [
    "minecraft:cow",
    "minecraft:sheep",
    "snowpig:snow_pig",
    "meadow:wooly_sheep",
    "snuffles:snuffle",
    "wildernature:deer",
    "atmospheric:cochineal",
  ].forEach((animal) => {
    e.add("society:barn_bed", animal);
  });
  [
    "minecraft:pig",
    "meadow:wooly_cow",
    "wildernature:bison",
    "wildernature:raccoon",
    "crittersandcompanions:red_panda",
    "wildernature:minisheep",
    "minecraft:panda",
    "minecraft:mooshroom",
    "meadow:water_buffalo",
  ].forEach((animal) => {
    e.add("society:deluxe_barn_bed", animal);
  });

  [
    "minecraft:goat",
    "buzzier_bees:moobloom",
    "species:mammutilation",
    "species:goober",
    "farmlife:domestic_tribull",
    "windswept:frostbiter",
  ].forEach((animal) => {
    e.add("society:luxury_barn_bed", animal);
  });
  
  [
    "minecraft:chicken",
    "untitledduckmod:duck",
    "untitledduckmod:goose",
    "etcetera:chapple",
    "autumnity:turkey",
    "species:wraptor",
    "wildernature:flamingo",
    "wildernature:penguin",
    "farmlife:galliraptor",
  ].forEach((animal) => {
    e.add("society:coopmaster_bird", animal);
  });

  [
    "minecraft:chicken",
    "untitledduckmod:duck",
    "minecraft:frog",
    "minecraft:squid",
    "minecraft:glow_squid",
    "autumnity:snail",
  ].forEach((animal) => {
    e.add("society:coop_bed", animal);
  });
  [
    "untitledduckmod:goose",
    "minecraft:rabbit",
    "wildernature:squirrel",
    "autumnity:turkey",
  ].forEach((animal) => {
    e.add("society:deluxe_coop_bed", animal);
  });
  [
    "species:wraptor",
    "etcetera:chapple",
    "wildernature:flamingo",
    "wildernature:penguin",
    "farmlife:galliraptor",
  ].forEach((animal) => {
    e.add("society:luxury_coop_bed", animal);
  });

  const petAnimals = [
    "buzzier_bees:grizzly_bear",
    "minecraft:wolf",
    "minecraft:cat",
    "quark:foxhound",
    "quark:shiba",
    "minecraft:allay",
    "legendarycreatures:ender_wisp",
    "minecraft:horse",
    "minecraft:polar_bear",
    "hamsters:hamster",
    "wildernature:red_wolf",
    "wildernature:owl",
    "wildernature:dog",
    "minecraft:axolotl",
    "wildernature:hedgehog",
    "crittersandcompanions:ferret",
    "crittersandcompanions:shima_enaga",
  ];
  petAnimals.forEach((animal) => {
    e.add("society:pet_animal", animal);
  });
  ["wildernature:flamingo", "farmlife:galliraptor", "farmlife:domestic_tribull"].forEach(
    (animal) => {
      e.add("society:infertile", animal);
    }
  );
  ["longwings:moth", "longwings:butterfly"].forEach((animal) => {
    e.add("society:longwing", animal);
  });
});
