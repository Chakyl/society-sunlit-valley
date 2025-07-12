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
  ].forEach((animal) => {
    e.add("society:milkable_animal", animal);
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
  ];
  petAnimals.forEach((animal) => {
    e.add("society:pet_animal", animal);
  });
});
