// Server Scripts
// Various methods of easily removing recipes

ServerEvents.recipes((event) => {

  const removedTypes = [
    'autowork:enriching'
  ];

  const removedIDs = [
    'passablefoliage:enchanted_book',
    'autowork:crushing/migrated/recipe_7',
    'autowork:crushing/migrated/recipe_8',
    'autowork:bulk_smelting/log_to_coal',
    "farmersdelight:golden_knife",
    "farmersdelight:iron_knife",
    "farmersdelight:diamond_knife",
    "farmersdelight:netherite_knife_smithing",
    "minecraft:stone_sword",
    "minecraft:iron_sword",
    "minecraft:golden_sword",
    "minecraft:diamond_sword",
    "minecraft:iron_hoe",
    "minecraft:iron_axe",
    "minecraft:iron_pickaxe",
    "minecraft:iron_shovel",
    "minecraft:golden_hoe",
    "minecraft:golden_axe",
    "minecraft:golden_shovel",
    "minecraft:golden_pickaxe",
    "minecraft:stone_hoe",
    "minecraft:stone_axe",
    "minecraft:stone_pickaxe",
    "minecraft:stone_shovel",
    "minecraft:diamond_hoe",
    "minecraft:diamond_axe",
    "minecraft:diamond_pickaxe",
    "minecraft:diamond_shovel",
    "minecraft:netherite_hoe_smithing",
    "minecraft:netherite_axe_smithing",
    "minecraft:netherite_pickaxe_smithing",
    "minecraft:netherite_shovel_smithing",
    "minecraft:netherite_sword_smithing",
    "minecraft:diamond_boots",
    "minecraft:iron_boots",
    "minecraft:golden_boots",
    "minecraft:chainmail_boots",
    "minecraft:netherite_boots_smithing",
    "minecraft:netherite_helmet_smithing",
    "minecraft:chainmail_helmet",
    "minecraft:chainmail_chestplate",
    "minecraft:iron_chestplate",
    "minecraft:golden_chestplate",
    "minecraft:diamond_chestplate",
    "minecraft:netherite_chestplate_smithing",
    "minecraft:diamond_leggings",
    "minecraft:netherite_leggings_smithing",
    "minecraft:diamond_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_leggings",
    "minecraft:chainmail_leggings",
    "quark:tools/crafting/pickarang_heart",
    "minecraft:iron_leggings",
    "minecraft:golden_helmet",
    "betterarcheology:iron_brush",
    "betterarcheology:diamond_brush",
    "minecraft:netherite_brush_smithing",
    "aquaculture:neptunium_sword",
    "aquaculture:neptunium_pickaxe",
    "aquaculture:neptunium_fishing_rod",
    "aquaculture:neptunium_axe",
    "aquaculture:neptunium_shovel",
    "aquaculture:neptunium_hoe",
    "aquaculture:neptunium_fillet_knife",
    "aquaculture:stone_fillet_knife",
    "aquaculture:neptunium_helmet",
    "aquaculture:neptunium_leggings",
    "aquaculture:neptunium_boots",
    "aquaculture:iron_fillet_knife",
    "aquaculture:gold_fillet_knife",
    "aquaculture:diamond_fillet_knife",
    "aquaculture:neptunium_chestplate",
    "aquaculture:neptunium_bow",
    "sophisticatedbackpacks:backpack",
    "sophisticatedbackpacks:iron_backpack",
  ];

  const removedInputs = [];

  const removedOutputs = [
    '@sophisticatedbackpacks',
    '/^sophisticatedstorage:.*upgrade.*/',
    '/^sophisticatedstorage:.*downgrade.*/'
  ];

  const removedMods = []

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
  removedMods.forEach((mod) => event.remove({ mod: mod }));
});
