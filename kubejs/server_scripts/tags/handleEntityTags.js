// priority: 0
console.info("[SOCIETY] handleEntityTags.js loaded");

ServerEvents.tags("entity_type", (e) => {
  global.husbandryAnimals.forEach((animal) => {
    e.add("society:husbandry_animal", animal);
  });

  global.milkableAnimals.forEach((animal) => {
    e.add("society:milkable_animal", animal);
  });
  
  global.coopMasterAnimals.forEach((animal) => {
    e.add("society:coopmaster_bird", animal);
  });
  
  const petAnimals = [
    "buzzier_bees:grizzly_bear",
    "minecraft:wolf",
    "minecraft:cat",
    "quark:foxhound",
    "quark:shiba",
    "minecraft:allay",
    "minecraft:horse",
    "minecraft:polar_bear",
    "hamsters:hamster",
    "wildernature:red_wolf",
    "wildernature:owl",
    "wildernature:dog",
    "minecraft:axolotl",
    "wildernature:hedgehog",
    "crittersandcompanions:ferret",
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
