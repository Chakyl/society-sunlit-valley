// priority: 0
global.showPonderLayer = (scene, speed, height, exclude) => {
  for (let x = 0; x <= 5; x++) {
    for (let z = 0; z <= 5; z++) {
      if (!exclude || !(x == exclude.x && z == exclude.z))
        scene.world.showSection([x, height, z], Facing.DOWN);
    }
    if (speed > 0) scene.idle(speed);
  }
};

global.coinMap = [
  { coin: "numismatics:prismatic_coin", value: 16252928 },
  { coin: "numismatics:ancient_coin", value: 253952 },
  { coin: "numismatics:sun", value: 4096 },
  { coin: "numismatics:crown", value: 512 },
  { coin: "numismatics:cog", value: 64 },
  { coin: "numismatics:sprocket", value: 16 },
  { coin: "numismatics:bevel", value: 8 },
  { coin: "numismatics:spur", value: 1 },
];

// For cases where prices are auto-generated, round
const roundPrice = (price) => {
  for (let i = 0; i < global.coinMap.length; i++) {
    let { value } = global.coinMap[i];

    if (price % value === 0) {
      for (let k = 0; k < global.coinMap.length; k++) {
        if (price / global.coinMap[i - k].value <= 64) {
          return (
            global.coinMap[i - k].value *
            Math.round(price / global.coinMap[i - k].value)
          );
        }
      }
    }
  }
  return price;
};
// Pristine Crystalarium items
global.pristine = [];

// Ores
global.ore = [
  { item: "minecraft:raw_copper", value: 2 },
  { item: "minecraft:raw_copper_block", value: 18 },
  { item: "minecraft:raw_iron", value: 4 },
  { item: "minecraft:raw_iron_block", value: 36 },
  { item: "minecraft:coal", value: 4 },
  { item: "minecraft:coal_block", value: 36 },
  { item: "minecraft:raw_gold", value: 8 },
  { item: "minecraft:raw_gold_block", value: 72 },
  { item: "create:raw_zinc", value: 4 },
  { item: "create:raw_zinc_block", value: 36 },
  { item: "minecraft:redstone", value: 4 },
  { item: "minecraft:redstone_block", value: 36 },
  { item: "minecraft:lapis_lazuli", value: 3 },
  { item: "minecraft:lapis_block", value: 27 },
  { item: "minecraft:emerald", value: 16 },
  { item: "minecraft:emerald_block", value: 144 },
  { item: "minecraft:amethyst_shard", value: 4 },
  { item: "minecraft:amethyst_block", value: 16 },
  { item: "minecraft:quartz", value: 4 },
  { item: "minecraft:quartz_block", value: 16 },
  { item: "minecraft:diamond", value: 256 },
  { item: "minecraft:diamond_block", value: 2304 },
  { item: "minecraft:ancient_debris", value: 1024 },
  { item: "aquaculture:neptunium_ingot", value: 2560 },
  { item: "aquaculture:neptunium_block", value: 23040 },
  { item: "etcetera:raw_bismuth", value: 16 },
  { item: "etcetera:raw_bismuth_block", value: 144 },
];
[
  { item: "minecraft:emerald", value: 16 },
  { item: "minecraft:diamond", value: 256 },
  { item: "minecraft:lapis_lazuli", value: 3 },
  { item: "minecraft:quartz", value: 4 },
  { item: "minecraft:amethyst_shard", value: 4 },
  { item: "minecraft:prismarine_crystals", value: 20 },
].forEach((mineral) => {
  global.pristine.push({
    item: `society:pristine_${mineral.item.split(":")[1]}`,
    value: mineral.value * 4,
  });
});

// Geodes
// Geode
global.geodeList = [
  { item: "society:allanite", value: 128 },
  { item: "society:calcite_gem", value: 64 },
  { item: "society:celestine", value: 112 },
  { item: "society:froggy_helm", value: 256 },
  { item: "society:earth_crystal", value: 48 },
  { item: "society:granite_slate", value: 256 },
  { item: "society:jagoite", value: 272 },
  { item: "society:jamborite", value: 128 },
  { item: "society:limestone_pebble", value: 15 },
  { item: "society:malachite", value: 256 },
  { item: "society:mudstone", value: 24 },
  { item: "society:nekoite", value: 80 },
  { item: "society:orpiment", value: 80 },
  { item: "society:petrified_slime", value: 128 },
  { item: "society:sandstone_slate", value: 64 },
  { item: "society:slate", value: 80 },
  { item: "society:thunder_egg", value: 256 },
];
global.geodeList.forEach((mineral) => {
  if (mineral.item !== "society:froggy_helm")
    global.pristine.push({
      item: `society:pristine_${mineral.item.split(":")[1]}`,
      value: mineral.value * 6,
    });
});

// Frozen Geode
global.frozenGeodeList = [
  { item: "society:aerinite", value: 128 },
  { item: "society:ribbit_drum", value: 96 },
  { item: "society:esperite", value: 96 },
  { item: "society:fairy_stone", value: 256 },
  { item: "society:fluorapatite", value: 200 },
  { item: "society:geminite", value: 120 },
  { item: "society:ghost_crystal", value: 200 },
  { item: "society:hematite", value: 120 },
  { item: "society:kyanite", value: 256 },
  { item: "society:lunarite", value: 200 },
  { item: "society:marble", value: 112 },
  { item: "society:ocean_stone", value: 224 },
  { item: "society:opal", value: 120 },
  { item: "society:pyrite", value: 128 },
  { item: "society:soapstone", value: 128 },
  { item: "society:frozen_tear", value: 64 },
];
global.frozenGeodeList.forEach((mineral) => {
  if (mineral.item !== "society:ribbit_drum")
    global.pristine.push({
      item: `society:pristine_${mineral.item.split(":")[1]}`,
      value: mineral.value * 6,
    });
});

// Magma Geode
global.magmaGeodeList = [
  { item: "society:baryte", value: 48 },
  { item: "society:basalt_shard", value: 176 },
  { item: "society:bixbyite", value: 304 },
  { item: "society:dolomite", value: 304 },
  { item: "society:ribbit_gadget", value: 192 },
  { item: "society:fire_opal", value: 352 },
  { item: "society:fire_quartz", value: 96 },
  { item: "society:helvite", value: 512 },
  { item: "society:jasper", value: 144 },
  { item: "society:lemon_stone", value: 192 },
  { item: "society:neptunite", value: 400 },
  { item: "society:pure_obsidian", value: 192 },
  { item: "society:star_shards", value: 512 },
  { item: "society:tigerseye", value: 272 },
];
global.magmaGeodeList.forEach((mineral) => {
  if (mineral.item !== "society:ribbit_gadget")
    global.pristine.push({
      item: `society:pristine_${mineral.item.split(":")[1]}`,
      value: mineral.value * 6,
    });
});

global.gems = [
  { item: "society:aquamarine", value: 184 },
  { item: "society:ruby", value: 256 },
  { item: "society:amethyst_chunk", value: 112 },
  { item: "society:topaz", value: 192 },
  { item: "society:jade", value: 512 },
];
global.gems.forEach((mineral) => {
  global.pristine.push({
    item: `society:pristine_${mineral.item.split(":")[1]}`,
    value: mineral.value * 6,
  });
});

// Mining misc
global.miscGeologist = [
  { item: "society:geode", value: 16 },
  { item: "society:frozen_geode", value: 32 },
  { item: "society:magma_geode", value: 48 },
  { item: "society:prismatic_shard", value: 2048 },
  { item: "quark:diamond_heart", value: 752 },
  { item: "quark:red_corundum", value: 32 },
  { item: "quark:red_corundum_cluster", value: 16 },
  { item: "quark:orange_corundum", value: 32 },
  { item: "quark:orange_corundum_cluster", value: 16 },
  { item: "quark:yellow_corundum", value: 32 },
  { item: "quark:yellow_corundum_cluster", value: 16 },
  { item: "quark:green_corundum", value: 32 },
  { item: "quark:green_corundum_cluster", value: 16 },
  { item: "quark:blue_corundum", value: 16 },
  { item: "quark:blue_corundum_cluster", value: 8 },
  { item: "quark:indigo_corundum", value: 32 },
  { item: "quark:indigo_corundum_cluster", value: 16 },
  { item: "quark:violet_corundum", value: 32 },
  { item: "quark:violet_corundum_cluster", value: 16 },
  { item: "quark:white_corundum", value: 32 },
  { item: "quark:white_corundum_cluster", value: 16 },
  { item: "minecraft:golden_apple", value: 128 },
];

// Artifacts
global.artifacts = [
  { item: "society:legendary_ink", value: 144 },
  { item: "society:holy_symbol", value: 160 },
  { item: "society:ember_crystal_cluster", value: 176 },
  { item: "society:living_flesh", value: 192 },
  { item: "society:source_gem", value: 208 },
  { item: "society:spider_silk", value: 320 },
  { item: "society:aquamagical_dust", value: 512 },
  { item: "society:wheel_of_adaptation", value: 576 },
  { item: "society:mini_oni_eye", value: 704 },
  { item: "society:production_science_pack", value: 1024 },
  { item: "society:steamy_gadget", value: 649 },
  { item: "society:beemonican_seal", value: 2560 },
  { item: "society:princess_hairbrush", value: 3584 },
  { item: "society:heart_of_neptunium", value: 4096 },
];

// Relics
global.relics = [
  { item: "relics:relic_experience_bottle", value: 80 },
  { item: "relics:horse_flute", value: 288 },
  { item: "relics:hunter_belt", value: 288 },
  { item: "relics:ice_skates", value: 304 },
  { item: "relics:spatial_sign", value: 304 },
  { item: "relics:wool_mitten", value: 304 },
  { item: "relics:magma_walker", value: 1024 },
  { item: "relics:bastion_ring", value: 1024 },
  { item: "relics:reflection_necklace", value: 320 },
  { item: "relics:jellyfish_necklace", value: 320 },
  { item: "relics:ice_breaker", value: 320 },
  { item: "relics:amphibian_boot", value: 320 },
  { item: "relics:aqua_walker", value: 320 },
  { item: "relics:roller_skates", value: 512 },
  { item: "relics:leather_belt", value: 512 },
  { item: "relics:drowned_belt", value: 1024 },
  { item: "relics:shadow_glaive", value: 1024 },
  { item: "relics:elytra_booster", value: 1536 },
  { item: "relics:enders_hand", value: 1536 },
  { item: "relics:holy_locket", value: 4096 },
  { item: "relics:arrow_quiver", value: 4096 },
  { item: "relics:chorus_inhibitor", value: 3072 },
  { item: "relics:midnight_robe", value: 3072 },
  { item: "relics:infinity_ham", value: 8192 },
  { item: "relics:space_dissector", value: 16384 },
  { item: "relics:spore_sack", value: 2560 },
  { item: "relics:rage_glove", value: 2560 },
];

// Crops
/*
  Farmland crop calc: (6 * stages + (2 * (4 - fertile seasons))) / count - (if reseedable, - 8)
  Master Cult: * 1.5
*/
global.crops = [
  { item: "vinery:white_grape", value: 4 },
  { item: "vinery:white_grape_bag", value: 36 },
  { item: "vinery:red_grape", value: 4 },
  { item: "vinery:red_grape_bag", value: 36 },
  { item: "minecraft:sweet_berries", value: 2 },
  { item: "quark:berry_sack", value: 18 },
  { item: "vinery:savanna_grapes_white", value: 4 },
  { item: "vinery:taiga_grapes_red", value: 4 },
  { item: "vinery:taiga_grapes_white", value: 4 },
  { item: "vinery:jungle_grapes_white", value: 4 },
  { item: "vinery:jungle_grapes_red", value: 4 },
  { item: "vinery:savanna_grapes_red", value: 4 },
  { item: "nethervinery:crimson_grape", value: 8 },
  { item: "nethervinery:crimson_grape_crate", value: 72 },
  { item: "nethervinery:warped_grape", value: 8 },
  { item: "nethervinery:warped_grape_crate", value: 72 },
  { item: "autumnity:foul_berries", value: 4 },
  { item: "herbalbrews:rooibos_leaf", value: 10 },
  { item: "herbalbrews:rooibos_leaf_block", value: 90 },
  { item: "herbalbrews:green_tea_leaf", value: 20 },
  { item: "herbalbrews:green_tea_leaf_block", value: 180 },
  { item: "herbalbrews:yerba_mate_leaf", value: 6 },
  { item: "herbalbrews:yerba_mate_leaf_block", value: 54 },
  { item: "herbalbrews:coffee_beans", value: 8 },
  { item: "herbalbrews:ground_coffee", value: 12 },
  { item: "herbalbrews:coffee_beans_sack", value: 216 },
  { item: "farm_and_charm:barley", value: 11 },
  { item: "farm_and_charm:barley_ball", value: 99 },
  { item: "minecraft:melon_slice", value: 9 },
  { item: "minecraft:melon", value: 81 },
  { item: "minecraft:cocoa_beans", value: 4 },
  { item: "quark:cocoa_beans_sack", value: 36 },
  { item: "farm_and_charm:onion", value: 12 },
  { item: "farm_and_charm:onion_bag", value: 108 },
  { item: "farmersdelight:tomato", value: 26 },
  { item: "farmersdelight:rotten_tomato", value: 1 },
  { item: "farmersdelight:tomato_crate", value: 234 },
  { item: "minecraft:nether_wart", value: 6 },
  { item: "quark:nether_wart_sack", value: 54 },
  { item: "minecraft:carrot", value: 23 },
  { item: "farm_and_charm:carrot_bag", value: 207 },
  { item: "farm_and_charm:corn", value: 28 },
  { item: "farm_and_charm:corn_bag", value: 252 },
  { item: "atmospheric:yucca_fruit", value: 8 },
  { item: "atmospheric:yucca_bundle", value: 72 },
  { item: "atmospheric:yucca_cask", value: 72 },
  { item: "atmospheric:currant", value: 8 },
  { item: "atmospheric:currant_crate", value: 144 },
  { item: "vintagedelight:peanut", value: 24 },
  { item: "vintagedelight:peanut_crate", value: 216 },
  { item: "vintagedelight:gearo_berry", value: 24 },
  { item: "vintagedelight:gearo_berry_bag", value: 216 },
  { item: "minecraft:potato", value: 24 },
  { item: "farm_and_charm:potato_bag", value: 216 },
  { item: "minecraft:poisonous_potato", value: 4 },
  { item: "society:eggplant", value: 42 },
  { item: "society:eggplant_crate", value: 378 },
  { item: "veggiesdelight:cauliflower", value: 48 },
  { item: "veggiesdelight:cauliflower_crate", value: 432 },
  { item: "veggiesdelight:garlic", value: 27 },
  { item: "veggiesdelight:garlic_crate", value: 243 },
  { item: "veggiesdelight:sweet_potato", value: 20 },
  { item: "veggiesdelight:sweet_potato_crate", value: 180 },
  { item: "veggiesdelight:bellpepper", value: 32 },
  { item: "veggiesdelight:bellpepper_crate", value: 288 },
  { item: "farm_and_charm:oat", value: 36 },
  { item: "farm_and_charm:oat_ball", value: 324 },
  { item: "snowyspirit:ginger", value: 24 },
  { item: "snowyspirit:ginger_crate", value: 216 },
  { item: "farm_and_charm:lettuce", value: 24 },
  { item: "farm_and_charm:lettuce_bag", value: 216 },
  { item: "minecraft:beetroot", value: 24 },
  { item: "farm_and_charm:beetroot_bag", value: 216 },
  { item: "beachparty:coconut", value: 8 },
  { item: "minecraft:apple", value: 8 },
  { item: "vinery:apple_bag", value: 72 },
  { item: "botania:white_mushroom", value: 12 },
  { item: "botania:orange_mushroom", value: 12 },
  { item: "botania:magenta_mushroom", value: 12 },
  { item: "botania:light_blue_mushroom", value: 12 },
  { item: "botania:yellow_mushroom", value: 12 },
  { item: "botania:lime_mushroom", value: 12 },
  { item: "botania:pink_mushroom", value: 12 },
  { item: "botania:black_mushroom", value: 12 },
  { item: "botania:red_mushroom", value: 12 },
  { item: "botania:green_mushroom", value: 12 },
  { item: "botania:brown_mushroom", value: 12 },
  { item: "botania:blue_mushroom", value: 12 },
  { item: "botania:purple_mushroom", value: 12 },
  { item: "botania:cyan_mushroom", value: 12 },
  { item: "botania:light_gray_mushroom", value: 12 },
  { item: "botania:gray_mushroom", value: 12 },
  { item: "minecraft:red_mushroom", value: 8 },
  { item: "farmersdelight:red_mushroom_colony", value: 48 },
  { item: "minecraft:brown_mushroom", value: 8 },
  { item: "farmersdelight:brown_mushroom_colony", value: 48 },
  { item: "minecraft:crimson_fungus", value: 16 },
  { item: "mynethersdelight:crimson_fungus_colony", value: 96 },
  { item: "minecraft:warped_fungus", value: 16 },
  { item: "mynethersdelight:warped_fungus_colony", value: 96 },
  { item: "verdantvibes:bracket_mushroom", value: 32 },
  { item: "species:alphacene_mushroom", value: 32 },
  { item: "minecraft:bamboo_block", value: 9 },
  { item: "minecraft:cactus", value: 12 },
  { item: "quark:cactus_block", value: 108 },
  { item: "vinery:cherry", value: 12 },
  { item: "vinery:rotten_cherry", value: 1 },
  { item: "vinery:cherry_bag", value: 108 },
  { item: "farm_and_charm:strawberry", value: 18 },
  { item: "farm_and_charm:strawberry_bag", value: 162 },
  { item: "society:blueberry", value: 24 },
  { item: "society:blueberry_crate", value: 216 },
  { item: "farmersdelight:cabbage", value: 70 },
  { item: "farmersdelight:cabbage_crate", value: 630 },
  { item: "minecraft:wheat", value: 46 },
  { item: "minecraft:hay_block", value: 414 },
  { item: "minecraft:sugar_cane", value: 12 },
  { item: "quark:sugar_cane_block", value: 108 },
  { item: "brewery:hops", value: 21 },
  { item: "quark:glow_shroom", value: 24 },
  { item: "farmersdelight:rice", value: 16 },
  { item: "farmersdelight:rice_bag", value: 144 },
  { item: "minecraft:pumpkin", value: 80 },
  { item: "farmersdelight:pumpkin_slice", value: 20 },
  { item: "supplementaries:flax", value: 68 },
  { item: "supplementaries:flax_block", value: 612 },
  { item: "quark:ancient_fruit", value: 16 },
  { item: "minecraft:chorus_fruit", value: 16 },
  { item: "quark:chorus_fruit_block", value: 144 },
  { item: "farm_and_charm:wild_ribwort", value: 24 },
  { item: "farm_and_charm:wild_nettle", value: 24 },
  { item: "minecraft:glow_berries", value: 24 },
  { item: "quark:glowberry_sack", value: 216 },
  { item: "moreminecarts:glass_cactus", value: 20 },
  { item: "vintagedelight:ghost_pepper", value: 36 },
  { item: "vintagedelight:ghost_pepper_crate", value: 324 },
  { item: "vintagedelight:cucumber", value: 36 },
  { item: "vintagedelight:cucumber_crate", value: 324 },
  { item: "society:tubabacco_leaf", value: 87 },
  { item: "society:tubabacco_leaf_block", value: 783 },
  { item: "minecraft:torchflower", value: 128 },
  { item: "minecraft:pitcher_plant", value: 64 },
  { item: "society:ancient_fruit", value: 96 },
  { item: "society:ancient_fruit_crate", value: 864 },
  { item: "atmospheric:aloe_leaves", value: 16 },
  { item: "atmospheric:aloe_bundle", value: 144 },
  // Tree fruits
  { item: "pamhc2trees:bananaitem", value: 16 },
  { item: "pamhc2trees:lycheeitem", value: 16 },
  { item: "pamhc2trees:hazelnutitem", value: 32 },
  { item: "pamhc2trees:mangoitem", value: 64 },
  { item: "pamhc2trees:peachitem", value: 64 },
  { item: "pamhc2trees:pawpawitem", value: 80 },
  { item: "pamhc2trees:plumitem", value: 96 },
  { item: "atmospheric:orange", value: 96 },
  { item: "pamhc2trees:orangeitem", value: 96 },
  { item: "atmospheric:orange_crate", value: 864 },
  { item: "atmospheric:blood_orange", value: 112 },
  { item: "atmospheric:blood_orange_crate", value: 1008 },
  { item: "pamhc2trees:lemonitem", value: 160 },
  { item: "pamhc2trees:dragonfruititem", value: 128 },
  { item: "atmospheric:passion_fruit", value: 128 },
  { item: "atmospheric:passion_fruit_crate", value: 1152 },
  { item: "atmospheric:shimmering_passion_fruit", value: 160 },
  { item: "atmospheric:shimmering_passion_fruit_crate", value: 1440 },
  { item: "pamhc2trees:cinnamonitem", value: 160 },
  { item: "society:ground_cinnamon", value: 80 },
  { item: "pamhc2trees:starfruititem", value: 200 },
];
// Animal Products
global.animalProducts = [
  // Eggs
  { item: "minecraft:egg", value: 4 },
  { item: "untitledduckmod:duck_egg", value: 8 },
  { item: "untitledduckmod:goose_egg", value: 16 },
  { item: "autumnity:turkey_egg", value: 32 },
  { item: "species:birt_egg", value: 40 },
  { item: "minecraft:turtle_egg", value: 64 },
  { item: "minecraft:sniffer_egg", value: 192 },
  { item: "society:large_egg", value: 16 },
  { item: "society:large_duck_egg", value: 32 },
  { item: "society:large_goose_egg", value: 64 },
  { item: "society:large_turkey_egg", value: 128 },
  // Milk
  { item: "society:sheep_milk", value: 8 },
  { item: "society:milk", value: 16 },
  { item: "society:buffalo_milk", value: 64 },
  { item: "society:goat_milk", value: 96 },
  { item: "society:warped_milk", value: 96 },
  { item: "society:large_sheep_milk", value: 32 },
  { item: "society:large_milk", value: 64 },
  { item: "society:large_buffalo_milk", value: 256 },
  { item: "society:large_goat_milk", value: 384 },
  { item: "society:large_warped_milk", value: 384 },
  // Basic Raw
  { item: "minecraft:beef", value: 16 },
  { item: "minecraft:porkchop", value: 32 },
  { item: "snowpig:frozen_porkchop", value: 64 },
  { item: "minecraft:mutton", value: 16 },
  { item: "minecraft:chicken", value: 8 },
  { item: "aquaculture:fish_fillet_raw", value: 8 },
  { item: "untitledduckmod:raw_duck", value: 16 },
  // Advanced Raw
  { item: "quark:crab_leg", value: 24 },
  { item: "quark:crab_shell", value: 40 },
  { item: "meadow:raw_buffalo_meat", value: 32 },
  { item: "farmersdelight:ham", value: 64 },
  { item: "minecraft:rabbit", value: 64 },
  { item: "beachparty:raw_mussel_meat", value: 16 },
  { item: "untitledduckmod:raw_goose", value: 16 },
  { item: "autumnity:turkey", value: 32 },
  { item: "crabbersdelight:raw_squid_tentacles", value: 16 },
  { item: "crabbersdelight:squid_barrel", value: 144 },
  { item: "crabbersdelight:raw_glow_squid_tentacles", value: 32 },
  { item: "crabbersdelight:glow_squid_barrel", value: 288 },
  { item: "crabbersdelight:raw_frog_leg", value: 40 },
  { item: "crabbersdelight:frog_leg_barrel", value: 360 },
  // Advanced Cooked
  { item: "snowpig:frozen_ham", value: 128 },
  { item: "buzzier_bees:glazed_porkchop", value: 144 },
  // Bee
  { item: "minecraft:honey_bottle", value: 8 },
  { item: "minecraft:honey_block", value: 24 },
  { item: "minecraft:honeycomb", value: 4 },
  { item: "minecraft:honeycomb_block", value: 16 },
  { item: "buzzier_bees:bee_bottle", value: 16 },
  { item: "etcetera:cotton_flower", value: 24 },
  // Misc
  { item: "minecraft:leather", value: 8 },
  { item: "netherdepthsupgrade:soul_sucker_leather", value: 16 },
  { item: "quark:bonded_leather", value: 72 },
  { item: "minecraft:rabbit_hide", value: 12 },
  { item: "quark:bonded_rabbit_hide", value: 108 },
  { item: "minecraft:rabbit_foot", value: 1024 },
  { item: "society:truffle", value: 512 },
  { item: "species:ichor_bottle", value: 256 },
  { item: "society:fine_wool", value: 256 },
  { item: "minecraft:feather", value: 16 },
  { item: "untitledduckmod:duck_feather", value: 64 },
  { item: "untitledduckmod:goose_foot", value: 96 },
];

/**
 * Preserves
 * Formula: Ingredient * 20
 */
global.fruits = [
  {
    item: "minecraft:sweet_berries",
    altPreserveOutput: "vintagedelight:sweet_berry_mason_jar",
    value: 2,
  },
  { item: "autumnity:foul_berries", value: 4 },
  { item: "atmospheric:currant", value: 8 },
  {
    item: "atmospheric:yucca_fruit",
    altPreserveOutput: "society:yucca_preserves",
    value: 8,
  },
  {
    item: "minecraft:apple",
    altPreserveOutput: "vintagedelight:apple_sauce_mason_jar",
    value: 8,
  },
  {
    item: "minecraft:melon_slice",
    altPreserveOutput: "society:melon_preserves",
    value: 9,
  },
  {
    item: "vintagedelight:gearo_berry",
    altPreserveOutput: "vintagedelight:gearo_berry_mason_jar",
    value: 24,
  },
  { item: "minecraft:chorus_fruit", value: 16 },
  { item: "pamhc2trees:lycheeitem", value: 16 },
  { item: "pamhc2trees:bananaitem", value: 16 },
  { item: "farm_and_charm:strawberry", value: 18 },
  {
    item: "minecraft:glow_berries",
    altPreserveOutput: "vintagedelight:glow_berry_mason_jar",
    value: 24,
  },
  { item: "vinery:cherry", value: 24 },
  { item: "society:blueberry", value: 24 },
  { item: "pamhc2trees:mangoitem", value: 64 },
  { item: "pamhc2trees:peachitem", value: 64 },
  { item: "pamhc2trees:pawpawitem", value: 80 },
  { item: "pamhc2trees:plumitem", value: 96 },
  { item: "society:ancient_fruit", value: 96 },
  { item: "atmospheric:orange", value: 96 },
  { item: "pamhc2trees:dragonfruititem", value: 128 },
  { item: "atmospheric:passion_fruit", value: 128 },
  { item: "pamhc2trees:lemonitem", value: 160 },
  { item: "pamhc2trees:starfruititem", value: 200 },
];
global.preserves = [
  { item: "society:red_grape_preserves", value: 124 },
  { item: "society:white_grape_preserves", value: 123 },
  { item: "society:onion_preserves", value: 244 },
  { item: "society:aloe_preserves", value: 304 },
  { item: "society:pumpkin_preserves", value: 364 },
  { item: "society:sweet_potato_preserves", value: 364 },
  { item: "society:carrot_preserves", value: 409 },
  { item: "vintagedelight:nut_mash_mason_jar", value: 424 },
  { item: "society:potato_preserves", value: 424 },
  { item: "society:beetroot_preserves", value: 424 },
  { item: "society:ginger_preserves", value: 424 },
  { item: "society:tomato_preserves", value: 454 },
  { item: "society:garlic_preserves", value: 469 },
  { item: "society:corn_preserves", value: 484 },
  { item: "society:hazelnut_mash", value: 544 },
  { item: "society:bell_pepper_preserves", value: 544 },
  { item: "vintagedelight:relish_mason_jar", value: 604 },
  { item: "vintagedelight:pepper_jam_mason_jar", value: 604 },
  { item: "society:eggplant_preserves", value: 694 },
  { item: "society:cauliflower_preserves", value: 784 },
];
global.dehydrated = [
  { item: "society:raisins", value: 96 },
  { item: "society:nether_raisins", value: 128 },
];
global.fruits.forEach((fruit) => {
  let itemId = fruit.item.split(":")[1];
  if (itemId.includes("item")) itemId = itemId.substring(0, itemId.length - 4);
  global.preserves.push({
    item: fruit.altPreserveOutput
      ? fruit.altPreserveOutput
      : `society:${itemId}_preserves`,
    value: fruit.value * 15 + 64,
  });
  global.dehydrated.push({
    item: `society:dried_${itemId}`,
    value: fruit.value * 12 + 32,
  });
});
global.mushrooms = [
  { item: "minecraft:brown_mushroom", value: 8 },
  { item: "minecraft:red_mushroom", value: 8 },
  { item: "minecraft:crimson_fungus", value: 16 },
  { item: "minecraft:warped_fungus", value: 16 },
  { item: "verdantvibes:bracket_mushroom", value: 32 },
  { item: "species:alphacene_mushroom", value: 32 },
  { item: "quark:glow_shroom", value: 24 },
  // Tag equivalent
  { item: "botania:shimmering_mushrooms", value: 16 },
];
global.mushrooms.forEach((shroom) => {
  let itemId = shroom.item.split(":")[1];
  global.dehydrated.push({
    item: `society:dried_${itemId}`,
    value: shroom.value * 12 + 32,
  });
});
/**
 * Aging Cask
 * Formula: input * 4
 *
 * Ancient Cask
 * Formula: aging cask input * 16
 *
 * Mayo: (egg with floor of 8)  * 8
 */
global.artisanGoods = [
  { item: "society:battery", value: 400 },
  { item: "society:canvas", value: 80 },
  { item: "society:merino_wool", value: 4096 },
  { item: "botania:mana_string", value: 384 },
  { item: "botania:manaweave_cloth", value: 6144 },
  { item: "society:mayonnaise", value: 32 },
  { item: "society:duck_mayonnaise", value: 64 },
  { item: "society:goose_mayonnaise", value: 128 },
  { item: "society:turkey_mayonnaise", value: 256 },
  { item: "society:parrot_mayonnaise", value: 512 },
  { item: "society:turtle_mayonnaise", value: 1024 },
  { item: "society:sniffer_mayonnaise", value: 1536 },
  { item: "society:golden_mayonnaise", value: 12288 },
  { item: "society:dragon_mayonnaise", value: 12288 },
  { item: "society:large_mayonnaise", value: 128 },
  { item: "society:large_duck_mayonnaise", value: 256 },
  { item: "society:large_goose_mayonnaise", value: 512 },
  { item: "society:large_turkey_mayonnaise", value: 1024 },
  { item: "society:birt_mayonnaise", value: 320 },
  { item: "society:wraptor_mayonnaise", value: 320 },
  { item: "society:springling_mayonnaise", value: 512 },
  { item: "society:petrified_mayonnaise", value: 2048 },
  { item: "society:cruncher_mayonnaise", value: 4096 },
  { item: "society:oak_resin", value: 48 },
  { item: "society:maple_syrup", value: 64 },
  { item: "society:pine_tar", value: 48 },
  { item: "society:aged_cheese_block", value: 768 },
  { item: "society:aged_goat_cheese_block", value: 4608 },
  { item: "society:aged_warped_cheese_block", value: 4608 },
  { item: "society:aged_buffalo_cheese_block", value: 3072 },
  { item: "society:aged_sheep_cheese_block", value: 384 },
  { item: "society:aged_grain_cheese_block", value: 1056 },
  { item: "society:aged_amethyst_cheese_block", value: 1152 },
  { item: "society:double_aged_cheese_block", value: 3072 },
  { item: "society:double_aged_goat_cheese_block", value: 18432 },
  { item: "society:double_aged_warped_cheese_block", value: 18432 },
  { item: "society:double_aged_buffalo_cheese_block", value: 12288 },
  { item: "society:double_aged_sheep_cheese_block", value: 1536 },
  { item: "society:double_aged_grain_cheese_block", value: 4224 },
  { item: "society:double_aged_amethyst_cheese_block", value: 4708 },
];

// Ice value = 8
// Snow value = 2
global.cocktails = [
  { item: "beachparty:coconut_cocktail", value: 32 },
  { item: "beachparty:refreshing_drink", value: 256 },
  { item: "beachparty:cocoa_cocktail", value: 28 },
  { item: "beachparty:sweetberries_cocktail", value: 48 },
  { item: "beachparty:pumpkin_cocktail", value: 132 },
  { item: "beachparty:honey_cocktail", value: 416 },
  { item: "beachparty:melon_cocktail", value: 28 },
  { item: "beachparty:sweetberry_icecream", value: 32 },
  { item: "beachparty:coconut_icecream", value: 20 },
  { item: "beachparty:chocolate_icecream", value: 12 },
  { item: "beachparty:icecream_cactus", value: 40 },
  { item: "beachparty:icecream_melon", value: 28 },
  { item: "beachparty:icecream_coconut", value: 20 },
  { item: "beachparty:icecream_chocolate", value: 12 },
  { item: "beachparty:icecream_sweetberries", value: 20 },
  { item: "beachparty:sweetberry_milkshake", value: 144 },
  { item: "beachparty:coconut_milkshake", value: 112 },
  { item: "beachparty:chocolate_milkshake", value: 80 },
];
// Steamed milk = 32
global.herbalBrews = [
  { item: "herbalbrews:coffee", value: 32 },
  { item: "herbalbrews:hazelnut_coffee", value: 90 },
  { item: "herbalbrews:cinnamon_coffee", value: 138 },
  { item: "herbalbrews:milk_coffee", value: 96 },
  { item: "herbalbrews:yerba_mate_tea", value: 12 },
  { item: "herbalbrews:hibiscus_tea", value: 16 },
  { item: "herbalbrews:rooibos_tea", value: 20 },
  { item: "herbalbrews:lavender_tea", value: 16 },
  { item: "herbalbrews:green_tea", value: 16 },
  { item: "herbalbrews:black_tea", value: 128 },
  { item: "herbalbrews:chai_tea", value: 328 },
  { item: "herbalbrews:oolong_tea", value: 512 },
  { item: "herbalbrews:dried_green_tea", value: 8 },
  { item: "herbalbrews:dried_black_tea", value: 64 },
  { item: "herbalbrews:dried_oolong_tea", value: 256 },
  { item: "society:espresso", value: 128 },
  { item: "society:latte", value: 576 },
  { item: "society:mocha", value: 512 },
  { item: "society:dirty_chai", value: 976 },
  { item: "society:bowl_of_soul", value: 240 },
  { item: "society:truffle_tea", value: 2048 },
];
// Logs
global.logs = [
  { item: "minecraft:oak_log", value: 2 },
  { item: "minecraft:spruce_log", value: 2 },
  { item: "minecraft:birch_log", value: 2 },
  { item: "minecraft:jungle_log", value: 2 },
  { item: "minecraft:dark_oak_log", value: 2 },
  { item: "quark:blossom_log", value: 2 },
  { item: "beachparty:palm_log", value: 4 },
  { item: "meadow:pine_log", value: 3 },
  { item: "atmospheric:aspen_log", value: 3 },
  { item: "atmospheric:watchful_aspen_log", value: 6 },
  { item: "atmospheric:crustose_log", value: 4 },
  { item: "autumnity:maple_log", value: 2 },
  { item: "atmospheric:kousa_log", value: 3 },
  { item: "atmospheric:laurel_log", value: 3 },
  { item: "atmospheric:yucca_log", value: 3 },
  { item: "atmospheric:morado_log", value: 3 },
  { item: "atmospheric:rosewood_log", value: 3 },
  { item: "atmospheric:grimwood_log", value: 7 },
  { item: "botania:dreamwood_log", value: 32 },
  { item: "botania:livingwood_log", value: 16 },
  { item: "vinery:dark_cherry_log", value: 3 },
  { item: "vinery:apple_log", value: 3 },
  { item: "minecraft:acacia_log", value: 3 },
  { item: "minecraft:mangrove_log", value: 4 },
  { item: "minecraft:cherry_log", value: 4 },
  { item: "quark:azalea_log", value: 4 },
  { item: "quark:ancient_log", value: 8 },
  { item: "betterarcheology:rotten_log", value: 12 },
  { item: "minecraft:warped_stem", value: 16 },
  { item: "minecraft:crimson_stem", value: 16 },
  { item: "vintagedelight:magic_vine", value: 16 },
];

/**
 * Wine
 * Formula: ((Juice(grape * 3) * 2) + sum ingredient val) * 3
 */
global.wines = [
  { item: "society:forks_of_blue", value: 252 },
  { item: "vinery:jo_special_mixture", value: 208 },
  { item: "vinery:cristel_wine", value: 168 },
  { item: "vinery:creepers_crush", value: 84 },
  { item: "vinery:villagers_fright", value: 96 },
  { item: "vinery:glowing_wine", value: 400 },
  { item: "vinery:mead", value: 32 },
  { item: "vinery:bottle_mojang_noir", value: 168 },
  { item: "vinery:eiswein", value: 384 },
  { item: "nethervinery:blazewine_pinot", value: 80 },
  { item: "nethervinery:netherite_nectar", value: 3072 },
  { item: "nethervinery:ghastly_grenache", value: 128 },
  { item: "nethervinery:lava_fizz", value: 384 },
  { item: "nethervinery:nether_fizz", value: 360 },
  { item: "nethervinery:improved_lava_fizz", value: 432 },
  { item: "nethervinery:improved_nether_fizz", value: 408 },
  { item: "vinery:chorus_wine", value: 80 },
  { item: "vinery:cherry_wine", value: 72 },
  { item: "vinery:magnetic_wine", value: 140 },
  { item: "vinery:noir_wine", value: 180 },
  { item: "vinery:lilitu_wine", value: 480 },
  { item: "vinery:mellohi_wine", value: 3072 },
  { item: "vinery:stal_wine", value: 68 },
  { item: "vinery:strad_wine", value: 68 },
  { item: "vinery:solaris_wine", value: 152 },
  { item: "vinery:bolvar_wine", value: 96 },
  { item: "vinery:aegis_wine", value: 240 },
  { item: "vinery:clark_wine", value: 128 },
  { item: "vinery:chenet_wine", value: 264 },
  { item: "vinery:kelp_cider", value: 287 },
  { item: "vinery:apple_wine", value: 96 },
  { item: "vinery:apple_cider", value: 80 },
  { item: "vinery:red_wine", value: 44 },
  { item: "society:good_catawba", value: 198 },
  { item: "vinery:jellie_wine", value: 1024 },
  { item: "society:ancient_vespertine", value: 1152 },
  { item: "society:dewy_star", value: 800 },
  { item: "society:ancient_cider", value: 2048 },
  { item: "society:star_coquito", value: 3072 },
  { item: "society:nutty_basil", value: 300 },
];

global.wines.forEach((wine) => {
  global.artisanGoods.push({
    item: `society:aged_${wine.item.split(":")[1]}`,
    value: wine.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${wine.item.split(":")[1]}`,
    value: wine.value * 16,
  });
});

// Brewery
const brewingStationRecipes = [
  { item: "brewery:beer_nettle", value: 49 },
  { item: "brewery:beer_hops", value: 46 },
  { item: "brewery:beer_wheat", value: 94 },
  { item: "brewery:beer_barley", value: 42 },
  { item: "brewery:beer_oat", value: 76 },
  { item: "brewery:beer_haley", value: 49 },
  { item: "society:beer_london", value: 300 },
  { item: "brewery:whiskey_carrasconlabel", value: 115 },
  { item: "brewery:whiskey_maggoallan", value: 142 },
  { item: "brewery:whiskey_jamesons_malt", value: 72 },
  { item: "brewery:whiskey_smokey_reverie", value: 106 },
  { item: "brewery:whiskey_highland_hearth", value: 124 },
  { item: "brewery:whiskey_ak", value: 97 },
  { item: "brewery:whiskey_cristelwalker", value: 88 },
  { item: "brewery:whiskey_lilitusinglemalt", value: 90 },
  { item: "brewery:whiskey_jojannik", value: 38 },
  { item: "brewery:dark_brew", value: 810 },
  { item: "society:starcardi", value: 228 },
];
global.brews = [];
brewingStationRecipes.forEach((recipe) => {
  global.brews.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

global.brews.forEach((brew) => {
  global.artisanGoods.push({
    item: `society:aged_${brew.item.split(":")[1]}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${brew.item.split(":")[1]}`,
    value: brew.value * 16,
  });
});
const miscAged = [
  { item: "vintagedelight:century_egg", value: 192 * 3 },
  { item: "iwannaskate:energy_drink", value: 566 },
  { item: "society:espresso", value: 128 },
];

miscAged.forEach((brew) => {
  global.artisanGoods.push({
    item: `society:aged_${brew.item.split(":")[1]}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${brew.item.split(":")[1]}`,
    value: brew.value * 16,
  });
});

/*
 * Cooking
 * Egg = 4
 * Butter = 32
 * Grain = 28
 * Cheese slice = 48
 * Dough/pasta = 16
 * P. Noodle = 16
 * Bread = 16
 * Sweet dough = 8
 * Cake dough = 16
 * Yeast = 4
 * Milk = 64
 * Fish = 64
 * Sugar = 3
 * Salt = 2
 * Berry = 8
 * Pie crust = 230
 * Wine = 88 (Adds * 2 to overall price)
 * Beer = 128 (Adds * 2 to overall price)
 * Complexity: 4+ unique ingr. OR nested cooking ingr. = * 1.5 Mult
 */
global.cooking = [];
// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const craftingTableRecipes = [
  { item: "autumnity:foul_soup", value: 12 },
  { item: "aquaculture:turtle_soup", value: 280 },
  { item: "aquaculture:sushi", value: 12 },
  { item: "bakery:bread_crate", value: 64 },
  { item: "bakery:sandwich", value: 56 },
  { item: "bakery:chocolate_box", value: 72 },
  { item: "bakery:bread_with_jam", value: 32 },
  { item: "bakery:vegetable_sandwich", value: 42 },
  { item: "brewery:mashed_potatoes", value: 30 },
  { item: "brewery:half_chicken", value: 12 },
  { item: "buzzier_bees:honey_apple", value: 152 },
  { item: "buzzier_bees:honey_bread", value: 24 },
  { item: "crabbersdelight:coral_crunch", value: 48 },
  { item: "crabbersdelight:fish_stick", value: 128 },
  { item: "crabbersdelight:surf_and_turf", value: 72 },
  { item: "crabbersdelight:shrimp_skewer", value: 38 },
  { item: "crabbersdelight:squid_kebob", value: 82 },
  { item: "crabbersdelight:frog_leg_kebob", value: 149 },
  { item: "crabbersdelight:kelp_shake", value: 8 },
  { item: "crabbersdelight:sea_pickle_juice", value: 8 },
  { item: "create:chocolate_glazed_berries", value: 34 },
  { item: "create:sweet_roll", value: 64 },
  { item: "create:builders_tea", value: 352 },
  { item: "create:honeyed_apple", value: 32 },
  { item: "farm_and_charm:farmers_breakfast", value: 390 },
  { item: "farmersdelight:grilled_salmon", value: 111 },
  { item: "farmersdelight:roasted_mutton_chops", value: 134 },
  { item: "farmersdelight:sweet_berry_cheesecake", value: 454 },
  { item: "farmersdelight:nether_salad", value: 288 },
  { item: "farmersdelight:melon_popsicle", value: 52 },
  { item: "farmersdelight:salmon_roll", value: 36 },
  { item: "farmersdelight:cod_roll", value: 56 },
  { item: "farmersdelight:fruit_salad", value: 164 },
  { item: "farmersdelight:mixed_salad", value: 74 },
  { item: "farmersdelight:kelp_roll", value: 73 },
  { item: "farmersdelight:kelp_roll_slice", value: 26 },
  { item: "farmersdelight:cabbage_rolls", value: 102 },
  { item: "farmersdelight:hamburger", value: 153 },
  { item: "farmersdelight:chicken_sandwich", value: 114 },
  { item: "farmersdelight:bacon_sandwich", value: 171 },
  { item: "farmersdelight:mutton_wrap", value: 114 },
  { item: "farmersdelight:stuffed_potato", value: 92 },
  { item: "farmersdelight:barbecue_stick", value: 58 },
  { item: "farmersdelight:egg_sandwich", value: 28 },
  { item: "farmersdelight:steak_and_potatoes", value: 144 },
  { item: "farmersdelight:chocolate_pie", value: 660 },
  { item: "farmersdelight:honey_glazed_ham_block", value: 240 },
  { item: "farmersdelight:shepherds_pie_block", value: 261 },
  { item: "farmersdelight:rice_roll_medley_block", value: 290 },
  { item: "farmersdelight:apple_pie", value: 597 },
  { item: "farmersdelight:melon_juice", value: 213 },
  { item: "farmersdelight:roast_chicken_block", value: 243 },
  { item: "meadow:roasted_ham", value: 108 },
  { item: "meadow:cheese_stick", value: 40 },
  { item: "meadow:cheesecake", value: 35 },
  { item: "meadow:cheese_tart", value: 49 },
  { item: "meadow:cheese_sandwich", value: 13 },
  { item: "meadow:cheese_roll", value: 14 },
  { item: "minecraft:cookie", value: 12 },
  { item: "minecraft:bread", value: 16 },
  { item: "minecraft:pumpkin_pie", value: 87 },
  { item: "minecraft:mushroom_stew", value: 8 },
  { item: "minecraft:cake", value: 318 },
  { item: "minecraft:rabbit_stew", value: 239 },
  { item: "netherdepthsupgrade:lava_pufferfish_roll", value: 96 },
  { item: "netherdepthsupgrade:obsidianfish_roll", value: 144 },
  { item: "netherdepthsupgrade:searing_cod_roll", value: 97 },
  { item: "netherdepthsupgrade:blazefish_roll", value: 249 },
  { item: "netherdepthsupgrade:magmacubefish_roll", value: 176 },
  { item: "netherdepthsupgrade:glowdine_roll", value: 80 },
  { item: "netherdepthsupgrade:soulsucker_roll", value: 144 },
  { item: "netherdepthsupgrade:warped_kelp_roll", value: 96 },
  { item: "netherdepthsupgrade:warped_kelp_roll_slice", value: 32 },
  { item: "netherdepthsupgrade:nether_rice_roll_medley_block", value: 2048 },
  { item: "refurbished_furniture:bread_slice", value: 5 },
  { item: "refurbished_furniture:glow_berry_jam_toast", value: 49 },
  { item: "refurbished_furniture:sweet_berry_jam_toast", value: 16 },
  { item: "refurbished_furniture:cheese_toastie", value: 15 },
  { item: "snowyspirit:gingerbread_cookie", value: 8 },
  { item: "snowyspirit:candy_cane", value: 4 },
  { item: "snowyspirit:eggnog", value: 44 },
  { item: "supplementaries:candy", value: 24 },
  { item: "vintagedelight:salted_cod", value: 18 },
  { item: "vintagedelight:salted_salmon", value: 26 },
  { item: "vintagedelight:honey_roasted_peanut", value: 40 },
  { item: "vintagedelight:magic_peanut", value: 1000 },
  { item: "society:tubasmoke_stick", value: 197 },
  { item: "vintagedelight:fruity_granola_bar", value: 24 },
  { item: "vintagedelight:deluxe_granola_bar", value: 42 },
  { item: "vintagedelight:chocolate_nut_granola_bar", value: 41 },
  { item: "vintagedelight:stuffed_burrito", value: 273 },
  { item: "vintagedelight:deluxe_burger", value: 321 },
  { item: "vintagedelight:cheese_burger", value: 237 },
  { item: "vintagedelight:pb_j", value: 208 },
  { item: "vintagedelight:cucumber_salad", value: 270 },
  { item: "vintagedelight:oatmeal_cookie", value: 10 },
  { item: "iwannaskate:energy_drink", value: 277 },
  { item: "unusualfishmod:odd_fishsticks", value: 96 },
  { item: "unusualfishmod:weird_goldfish", value: 64 },
  { item: "unusualfishmod:pickledish", value: 128 },
  { item: "unusualfishmod:strange_broth", value: 120 },
  { item: "unusualfishmod:unusual_sandwich", value: 132 },
  { item: "unusualfishmod:raw_aero_mono_stick", value: 128 },
  { item: "atmospheric:candied_orange_slices", value: 99 },
  { item: "atmospheric:orange_sorbet", value: 107 },
  { item: "atmospheric:currant_muffin", value: 32 },
  { item: "atmospheric:aloe_gel_bottle", value: 128 },
  { item: "atmospheric:yucca_gateau", value: 369 },
  { item: "atmospheric:aloe_gel_block", value: 512 },
  { item: "atmospheric:passion_fruit_sorbet", value: 139 },
  { item: "atmospheric:passion_fruit_tart", value: 128 },
  { item: "veggiesdelight:beetroot_brownie_tray", value: 141 },
  { item: "veggiesdelight:sweet_potato_cupcake", value: 26 },
  { item: "veggiesdelight:carrot_cake", value: 256 },
  { item: "veggiesdelight:sweet_potato_pie", value: 489 },
  { item: "veggiesdelight:cesar_salad", value: 168 },
  { item: "veggiesdelight:dandelion_and_eggs", value: 58 },
  { item: "veggiesdelight:chicken_fajitas_wrap", value: 90 },
  { item: "veggiesdelight:cauliflower_burger", value: 162 },
];
craftingTableRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.floor(recipe.value * 1.2),
  });
});

const cheeses = [
  // Values shouldn't be multiplied for balance
  { item: "vintagedelight:honey_mason_jar", value: 48 },
  { item: "meadow:sheep_cheese_block", value: 96 },
  { item: "meadow:cheese_block", value: 192 },
  { item: "meadow:amethyst_cheese_block", value: 288 },
  { item: "meadow:grain_cheese_block", value: 264 },
  { item: "meadow:buffalo_cheese_block", value: 768 },
  { item: "meadow:goat_cheese_block", value: 1152 },
  { item: "meadow:warped_cheese_block", value: 1152 },
  { item: "meadow:sausage_with_cheese", value: 336 },
];
cheeses.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const fermentingRecipes = [
  { item: "vintagedelight:pickled_onion", value: 14 },
  { item: "vintagedelight:pickle", value: 38 },
  { item: "vintagedelight:century_egg", value: 136 },
  { item: "vintagedelight:surstromming", value: 48 },
  { item: "vintagedelight:pickled_pepper", value: 38 },
  { item: "society:truffle_oil", value: 2752 },
  { item: "vintagedelight:overnight_oats", value: 120 },
  { item: "vintagedelight:pickled_beetroot", value: 26 },
  { item: "vintagedelight:pickled_egg", value: 16 },
  { item: "vintagedelight:vinegar_mason_jar", value: 170 },
  { item: "vintagedelight:pickled_pitcher_pod", value: 64 },
  { item: "vintagedelight:kimchi", value: 71 },
  { item: "veggiesdelight:fermented_garlic_honey", value: 156 },
  { item: "supplementaries:lumisene_bottle", value: 24 },
];
fermentingRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const furnaceRecipes = [
  { item: "unusualfishmod:cooked_unusual_fillet", value: 64 },
  { item: "vintagedelight:ghost_charcoal", value: 36 },
  { item: "pamhc2trees:roastedhazelnutitem", value: 32 },
  { item: "vintagedelight:roasted_peanut", value: 24 },
  { item: "atmospheric:roasted_yucca_fruit", value: 8 },
  { item: "atmospheric:roasted_yucca_bundle", value: 72 },
  { item: "atmospheric:roasted_yucca_cask", value: 72 },
  { item: "minecraft:cooked_beef", value: 16 },
  { item: "minecraft:baked_potato", value: 24 },
  { item: "minecraft:cooked_porkchop", value: 32 },
  { item: "minecraft:cooked_rabbit", value: 64 },
  { item: "minecraft:cooked_mutton", value: 16 },
  { item: "minecraft:cooked_chicken", value: 8 },
  { item: "crabbersdelight:cooked_clam_meat", value: 8 },
  { item: "crabbersdelight:cooked_frog_leg", value: 40 },
  { item: "crabbersdelight:cooked_tropical_fish", value: 72 },
  { item: "crabbersdelight:cooked_squid_tentacles", value: 16 },
  { item: "crabbersdelight:cooked_glow_squid_tentacles", value: 32 },
  { item: "minecraft:cooked_salmon", value: 24 },
  { item: "quark:cooked_crab_leg", value: 24 },
  { item: "untitledduckmod:cooked_duck", value: 16 },
  { item: "untitledduckmod:cooked_goose", value: 16 },
  { item: "autumnity:cooked_turkey", value: 32 },
  { item: "minecraft:cooked_cod", value: 16 },
  { item: "unusualfishmod:cooked_aero_mono_stick", value: 192 },
  { item: "aquaculture:fish_fillet_cooked", value: 8 },
  { item: "meadow:cooked_buffalo_meat", value: 32 },
  { item: "beachparty:cooked_mussel_meat", value: 16 },
  { item: "farmersdelight:smoked_ham", value: 64 },
  { item: "minecraft:popped_chorus_fruit", value: 16 },
  { item: "vintagedelight:meat_pizza", value: 522 },
  { item: "refurbished_furniture:toast", value: 5 },
  { item: "refurbished_furniture:cooked_vegetable_pizza", value: 414 },
  { item: "veggiesdelight:roasted_garlic_clove", value: 14 },
  { item: "veggiesdelight:smoked_bellpepper", value: 32 },
  { item: "veggiesdelight:baked_sweet_potato", value: 20 },
  { item: "veggiesdelight:mhadjeb", value: 93 },
  { item: "veggiesdelight:garlic_baked_cod", value: 57 },
];
furnaceRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 1.5),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const dryingRecipes = [
  { item: "society:dried_tubabacco_leaf", value: 87 },
  { item: "brewery:dried_wheat", value: 46 },
  { item: "brewery:dried_barley", value: 11 },
  { item: "brewery:dried_corn", value: 28 },
  { item: "brewery:dried_oat", value: 34 },
];
dryingRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 1.5),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
// Note: Raw value not divided by output count due to effort. Cookies multiplied by 1.5
const cakingStationRecipes = [
  { item: "bakery:apple_cupcake", value: 32 },
  { item: "bakery:strawberry_cake", value: 48 },
  { item: "bakery:strawberry_cupcake", value: 48 },
  { item: "bakery:sweetberry_cupcake", value: 24 },
  { item: "bakery:sweetberry_cake", value: 24 },
  { item: "bakery:chocolate_glazed_cookie", value: 213 },
  { item: "bakery:strawberry_glazed_cookie", value: 64 },
  { item: "bakery:sweetberry_glazed_cookie", value: 40 },
  { item: "bakery:chocolate_cake", value: 142 },
  { item: "bakery:chocolate_gateau", value: 25 },
];
cakingStationRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 4,
  });
});
const cookingPotRecipes = [
  { item: "minecraft:beetroot_soup", value: 72 },
  { item: "farm_and_charm:strawberry_tea", value: 40 },
  { item: "farm_and_charm:nettle_tea", value: 52 },
  { item: "vintagedelight:cheese_pasta", value: 112 },
  { item: "farm_and_charm:onion_soup", value: 32 },
  { item: "bakery:strawberry_jam", value: 21 },
  { item: "farmersdelight:hot_cocoa", value: 27 },
  { item: "crabbersdelight:seafood_gumbo", value: 120 },
  { item: "candlelight:pasta_with_mozzarella", value: 96 },
  { item: "vintagedelight:pickle_soup", value: 286 },
  { item: "candlelight:tomato_soup", value: 70 },
  { item: "farmersdelight:apple_cider", value: 179 },
  { item: "candlelight:chocolate_mousse", value: 13 },
  { item: "farmersdelight:pasta_with_meatballs", value: 84 },
  { item: "farmersdelight:mushroom_rice", value: 72 },
  { item: "candlelight:salmon_on_white_wine", value: 144 },
  { item: "farmersdelight:squid_ink_pasta", value: 165 },
  { item: "bakery:chocolate_truffle", value: 6 },
  { item: "farmersdelight:beef_stew", value: 64 },
  { item: "crabbersdelight:crab_cakes", value: 123 },
  { item: "farmersdelight:chicken_soup", value: 120 },
  { item: "farmersdelight:baked_cod_stew", value: 255 },
  { item: "crabbersdelight:clam_chowder", value: 168 },
  { item: "crabbersdelight:jar_of_pickles", value: 4 },
  { item: "atmospheric:orange_pudding", value: 164 },
  { item: "farmersdelight:glow_berry_custard", value: 215 },
  { item: "farmersdelight:ratatouille", value: 129 },
  { item: "vintagedelight:nut_milk_bottle", value: 51 },
  { item: "netherdepthsupgrade:baked_soulsucker_stew", value: 249 },
  { item: "netherdepthsupgrade:baked_glowdine_stew", value: 153 },
  { item: "netherdepthsupgrade:baked_magmacubefish_stew", value: 291 },
  { item: "netherdepthsupgrade:baked_blazefish_stew", value: 393 },
  { item: "netherdepthsupgrade:baked_searing_cod_stew", value: 177 },
  { item: "netherdepthsupgrade:baked_obsidianfish_stew", value: 249 },
  { item: "netherdepthsupgrade:baked_lava_pufferfish_stew", value: 177 },
  { item: "bakery:pudding", value: 100 },
  { item: "brewery:dumplings", value: 60 },
  { item: "bakery:hazelnut_ella", value: 1000 },
  { item: "bakery:chocolate_jam", value: 84 },
  { item: "candlelight:lasagne", value: 111 },
  { item: "farmersdelight:cooked_rice", value: 16 },
  { item: "crabbersdelight:shrimp_fried_rice", value: 95 },
  { item: "candlelight:khinkali", value: 8 },
  { item: "farmersdelight:vegetable_soup", value: 144 },
  { item: "crabbersdelight:stuffed_nautilus_shell", value: 192 },
  { item: "farm_and_charm:ribwort_tea", value: 52 },
  { item: "candlelight:mushroom_soup", value: 564 },
  { item: "farmersdelight:fried_rice", value: 84 },
  { item: "farm_and_charm:barley_soup", value: 19 },
  { item: "brewery:sausage", value: 56 },
  { item: "farm_and_charm:sausage_with_oat_patty", value: 108 },
  { item: "farmersdelight:noodle_soup", value: 87 },
  { item: "vintagedelight:ghostly_chili", value: 204 },
  { item: "bakery:glowberry_jam", value: 27 },
  { item: "farm_and_charm:simple_tomato_soup", value: 55 },
  { item: "bakery:sweetberry_jam", value: 5 },
  { item: "bakery:chocolate_donut", value: 3144 },
  { item: "farmersdelight:vegetable_noodles", value: 136 },
  { item: "vintagedelight:pad_thai", value: 372 },
  { item: "farm_and_charm:potato_soup", value: 36 },
  { item: "bakery:apple_jam", value: 11 },
  { item: "farm_and_charm:corn_grits", value: 72 },
  { item: "farmersdelight:fish_stew", value: 154 },
  { item: "farmersdelight:pasta_with_mutton_chop", value: 110 },
  { item: "candlelight:chicken_teriyaki", value: 32 },
  { item: "crabbersdelight:bisque", value: 188 },
  { item: "farm_and_charm:goulash", value: 309 },
  { item: "crabbersdelight:cooked_shrimp", value: 4 },
  { item: "crabbersdelight:cooked_clawster", value: 16 },
  { item: "crabbersdelight:cooked_crab", value: 8 },
  { item: "crabbersdelight:clam_bake", value: 116 },
  { item: "farmersdelight:pumpkin_soup", value: 140 },
  { item: "farmersdelight:stuffed_pumpkin_block", value: 300 },
  { item: "farmersdelight:dumplings", value: 102 },
  { item: "veggiesdelight:cauliflower_soup", value: 132 },
  { item: "veggiesdelight:mashed_potatoes", value: 112 },
  { item: "veggiesdelight:potato_noodles", value: 44 },
  { item: "veggiesdelight:shakshouka", value: 165 },
  { item: "veggiesdelight:roasted_vegetables", value: 240 },
  { item: "veggiesdelight:stuffed_bellpeppers", value: 146 },
  { item: "veggiesdelight:sweet_potato_mochi", value: 104 },
  { item: "veggiesdelight:garlic_rice_with_cauliflower", value: 148 },
  { item: "veggiesdelight:garlic_stuffed_mushrooms", value: 100 },
  { item: "veggiesdelight:fish_and_chips", value: 92 },
  { item: "veggiesdelight:carrot_juice", value: 42 },
  { item: "veggiesdelight:cacciatore", value: 105 },
];
cookingPotRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 1.5),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const stoveRecipes = [
  { item: "candlelight:tropical_fish_supreme", value: 368 },
  { item: "bakery:waffle", value: 18 },
  { item: "farm_and_charm:baked_lamb_ham", value: 40 },
  { item: "bakery:bread", value: 8 },
  { item: "bakery:bun", value: 5 },
  { item: "farm_and_charm:stuffed_rabbit", value: 99 },
  { item: "farm_and_charm:roasted_chicken", value: 47 },
  { item: "candlelight:chicken_with_vegetables", value: 144 },
  { item: "bakery:baguette", value: 9 },
  { item: "bakery:croissant", value: 2 },
  { item: "bakery:glowberry_tart", value: 35 },
  { item: "bakery:grilled_bacon_sandwich", value: 56 },
  { item: "brewery:pork_knuckle", value: 160 },
  { item: "candlelight:roastbeef_with_glazed_carrots", value: 72 },
  { item: "bakery:cornet", value: 20 },
  { item: "farmersdelight:honey_cookie", value: 64 },
  { item: "bakery:misslilitu_biscuit", value: 4 },
  { item: "brewery:gingerbread", value: 52 },
  { item: "farm_and_charm:stuffed_chicken", value: 43 },
  { item: "bakery:grilled_salmon_sandwich", value: 32 },
  { item: "candlelight:beef_wellington", value: 1308 },
  { item: "farm_and_charm:potato_with_roast_meat", value: 24 },
  { item: "farm_and_charm:pasta_with_onion_sauce", value: 10 },
  { item: "bakery:toast", value: 16 },
  { item: "bakery:chocolate_tart", value: 32 },
  { item: "farm_and_charm:grandmothers_strawberry_cake", value: 18 },
  { item: "bakery:braided_bread", value: 6 },
  { item: "farm_and_charm:roasted_corn", value: 88 },
  { item: "candlelight:chicken_alfredo", value: 112 },
  { item: "farm_and_charm:farmers_bread", value: 7 },
  { item: "bakery:crusty_bread", value: 8 },
  { item: "bakery:bundt_cake", value: 104 },
  { item: "candlelight:pork_ribs", value: 64 },
  { item: "bakery:apple_pie", value: 88 },
  { item: "farmersdelight:sweet_berry_cookie", value: 8 },
  { item: "bakery:linzer_tart", value: 1035 },
  { item: "brewery:pretzel", value: 13 },
  { item: "bakery:jam_roll", value: 750 },
  { item: "autumnity:pumpkin_bread", value: 95 },
  { item: "veggiesdelight:whole_roasted_cauliflower", value: 80 },
  { item: "veggiesdelight:garlic_bread", value: 32 },
  { item: "veggiesdelight:cauliflower_bread", value: 76 },
];
stoveRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 2,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const roasterRecipes = [
  { item: "farm_and_charm:lamb_with_corn", value: 148 },
  { item: "candlelight:bolognese", value: 190 },
  { item: "farm_and_charm:cooked_cod", value: 143 },
  { item: "candlelight:pasta_with_bolognese", value: 254 },
  { item: "candlelight:roasted_lamb_with_lettuce", value: 128 },
  { item: "farm_and_charm:oat_pancake", value: 84 },
  { item: "candlelight:pasta_with_lettuce", value: 88 },
  { item: "farm_and_charm:beef_patty_with_vegetables", value: 108 },
  { item: "candlelight:fillet_steak", value: 272 },
  { item: "farm_and_charm:barley_patties_with_potatoes", value: 80 },
  { item: "farm_and_charm:cooked_salmon", value: 162 },
  { item: "farm_and_charm:chicken_wrapped_in_bacon", value: 132 },
  { item: "candlelight:beef_with_mushroom_in_wine_and_potatoes", value: 528 },
  { item: "candlelight:omelet", value: 22 },
  { item: "brewery:fried_chicken", value: 76 },
  { item: "farm_and_charm:bacon_with_eggs", value: 34 },
];
roasterRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 2,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const mixingBowlRecipes = [
  { item: "brewery:potato_salad", value: 82 },
  { item: "farm_and_charm:oatmeal_with_strawberries", value: 58 },
  { item: "farm_and_charm:farmer_salad", value: 60 },
  { item: "candlelight:mozzarella", value: 12 },
  { item: "candlelight:beetroot_salad", value: 36 },
  { item: "candlelight:harvest_plate", value: 24 },
  { item: "farm_and_charm:butter", value: 16 },
  { item: "candlelight:beef_tartare", value: 14 },
  { item: "candlelight:salad", value: 25 },
  { item: "candlelight:fresh_garden_salad", value: 37 },
  { item: "candlelight:tomato_mozzarella_salad", value: 46 },
];
mixingBowlRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 2,
  });
});

global.fish = [
  { item: "aquaculture:atlantic_herring", value: 16 },
  { item: "minecraft:pufferfish", value: 16 },
  { item: "crabbersdelight:pufferfish_barrel", value: 144 },
  { item: "aquaculture:minnow", value: 16 },
  { item: "aquaculture:bluegill", value: 16 },
  { item: "aquaculture:perch", value: 16 },
  { item: "unusualfishmod:raw_sneep_snorp", value: 16 },
  { item: "minecraft:salmon", value: 24 },
  { item: "crabbersdelight:salmon_barrel", value: 216 },
  { item: "aquaculture:blackfish", value: 24 },
  { item: "unusualfishmod:raw_beaked_herring", value: 32 },
  { item: "aquaculture:brown_trout", value: 40 },
  { item: "aquaculture:carp", value: 40 },
  { item: "aquaculture:piranha", value: 48 },
  { item: "aquaculture:smallmouth_bass", value: 40 },
  { item: "minecraft:cod", value: 16 },
  { item: "unusualfishmod:raw_picklefish", value: 48 },
  { item: "crabbersdelight:cod_barrel", value: 432 },
  { item: "aquaculture:pollock", value: 56 },
  { item: "aquaculture:jellyfish", value: 56 },
  { item: "aquaculture:rainbow_trout", value: 64 },
  { item: "aquaculture:pink_salmon", value: 64 },
  { item: "minecraft:tropical_fish", value: 72 },
  { item: "crabbersdelight:tropical_fish_barrel", value: 648 },
  { item: "aquaculture:red_grouper", value: 80 },
  { item: "aquaculture:gar", value: 88 },
  { item: "aquaculture:muskellunge", value: 96 },
  { item: "unusualfishmod:raw_forkfish", value: 96 },
  { item: "unusualfishmod:raw_snowflake", value: 96 },
  { item: "aquaculture:synodontis", value: 112 },
  { item: "aquaculture:tambaqui", value: 112 },
  { item: "unusualfishmod:raw_sailor_barb", value: 112 },
  { item: "aquaculture:atlantic_cod", value: 120 },
  { item: "aquaculture:boulti", value: 128 },
  { item: "unusualfishmod:raw_aero_mono", value: 128 },
  { item: "aquaculture:leech", value: 136 },
  { item: "aquaculture:catfish", value: 144 },
  { item: "unusualfishmod:raw_bark_angelfish", value: 144 },
  { item: "unusualfishmod:raw_drooping_gourami", value: 176 },
  { item: "unusualfishmod:raw_demon_herring", value: 192 },
  { item: "aquaculture:tuna", value: 192 },
  { item: "unusualfishmod:raw_triple_twirl_pleco", value: 208 },
  { item: "aquaculture:bayad", value: 208 },
  { item: "aquaculture:arapaima", value: 224 },
  { item: "unusualfishmod:raw_blind_sailfin", value: 224 },
  { item: "aquaculture:atlantic_halibut", value: 232 },
  { item: "aquaculture:starshell_turtle", value: 240 },
  { item: "aquaculture:brown_shrooma", value: 264 },
  { item: "aquaculture:red_shrooma", value: 264 },
  { item: "aquaculture:arrau_turtle", value: 280 },
  { item: "unusualfishmod:raw_amber_goby", value: 288 },
  { item: "aquaculture:capitaine", value: 288 },
  { item: "aquaculture:box_turtle", value: 320 },
  { item: "unusualfishmod:raw_copperflame_anthias", value: 320 },
  { item: "unusualfishmod:raw_circus_fish", value: 320 },
  { item: "unusualfishmod:raw_hatchetfish", value: 352 },
  { item: "unusualfishmod:raw_spindlefish", value: 368 },
  { item: "society:neptuna", value: 384 },
  { item: "aquaculture:pacific_halibut", value: 400 },
  { item: "unusualfishmod:raw_eyelash", value: 480 },
  { item: "unusualfishmod:raw_duality_damselfish", value: 448 },
  { item: "aquaculture:goldfish", value: 512 },
  // Crab Trap
  { item: "crabbersdelight:shrimp", value: 4 },
  { item: "crabbersdelight:shrimp_barrel", value: 36 },
  { item: "crabbersdelight:clawster", value: 16 },
  { item: "crabbersdelight:clawster_barrel", value: 144 },
  { item: "crabbersdelight:crab", value: 8 },
  { item: "crabbersdelight:crab_barrel", value: 72 },
  { item: "crabbersdelight:clam", value: 4 },
  { item: "crabbersdelight:clam_barrel", value: 36 },
  { item: "crabbersdelight:raw_clam_meat", value: 8 },
  // Nether
  { item: "netherdepthsupgrade:searing_cod", value: 64 },
  { item: "netherdepthsupgrade:blazefish", value: 208 },
  { item: "netherdepthsupgrade:lava_pufferfish", value: 64 },
  { item: "netherdepthsupgrade:obsidianfish", value: 112 },
  { item: "netherdepthsupgrade:bonefish", value: 64 },
  { item: "netherdepthsupgrade:wither_bonefish", value: 112 },
  { item: "netherdepthsupgrade:magmacubefish", value: 140 },
  { item: "netherdepthsupgrade:glowdine", value: 48 },
  { item: "netherdepthsupgrade:soulsucker", value: 112 },
  { item: "netherdepthsupgrade:fortress_grouper", value: 232 },
  { item: "netherdepthsupgrade:eyeball_fish", value: 208 },
];
// 54
global.smokedFish = [];
global.agedRoe = [];
global.fish.forEach((fish) => {
  const splitFish = fish.item.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "roe", "meat"].some((denied) => fishId.includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.smokedFish.push({
      item: `society:smoked_${fishId}`,
      value: roundPrice(fish.value * 4),
    });
    global.agedRoe.push({
      item: `society:aged_${fishId}_roe`,
      value: roundPrice((Math.floor(fish.value / 3) + 16) * 15),
    });
  }
});

global.fish.forEach((fish) => {
  const splitFish = fish.item.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "meat"].some((denied) => fish.item.includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.fish.push({
      item: `society:${fishId}_roe`,
      value: roundPrice(Math.floor(fish.value / 3) + 16),
    });
  }
});

global.miscAdventurer = [
  { item: "create:experience_nugget", value: 2 },
  { item: "create:experience_block", value: 18 },
  { item: "minecraft:experience_bottle", value: 8 },
  { item: "create_enchantment_industry:hyper_experience_bottle", value: 550 },
  { item: "twigs:opaline_seashell", value: 16 },
  { item: "twigs:roseate_seashell", value: 20 },
  { item: "twigs:bronzed_seashell", value: 32 },
  { item: "twigs:tangerine_seashell", value: 24 },
  { item: "aquaculture:tin_can", value: 1 },
  { item: "minecraft:nautilus_shell", value: 64 },
  { item: "crabbersdelight:nautilus_shell_block", value: 640 },
  { item: "minecraft:echo_shard", value: 192 },
  { item: "minecraft:heart_of_the_sea", value: 256 },
  { item: "minecraft:nether_star", value: 2048 },
  { item: "betterarcheology:unidentified_artifact", value: 384 },
  { item: "betterarcheology:sheep_fossil_head", value: 192 },
  { item: "betterarcheology:villager_fossil_head", value: 192 },
  { item: "betterarcheology:creeper_fossil_head", value: 192 },
  { item: "betterarcheology:ocelot_fossil_head", value: 192 },
  { item: "betterarcheology:wolf_fossil_head", value: 192 },
  { item: "betterarcheology:chicken_fossil_head", value: 192 },
  { item: "betterarcheology:guardian_fossil_head", value: 192 },
  { item: "betterarcheology:villager_fossil_body", value: 256 },
  { item: "betterarcheology:creeper_fossil_body", value: 256 },
  { item: "betterarcheology:ocelot_fossil_body", value: 256 },
  { item: "betterarcheology:wolf_fossil_body", value: 256 },
  { item: "betterarcheology:chicken_fossil_body", value: 256 },
  { item: "betterarcheology:guardian_fossil_body", value: 256 },
  { item: "betterarcheology:sheep_fossil_body", value: 256 },
  { item: "supplementaries:antique_ink", value: 32 },
  { item: "paraglider:spirit_orb", value: 64 },
  { item: "minecraft:dragon_egg", value: 3072 },
  { item: "society:furniture_box", value: 64 },
  { item: "crabbersdelight:pearl", value: 64 },
  { item: "crabbersdelight:pearl_block", value: 512 },
  { item: "trials:ominous_bottle", value: 64 },
  { item: "trials:trial_key", value: 112 },
  { item: "betterarcheology:vase_green", value: 112 },
  { item: "betterarcheology:vase", value: 128 },
  { item: "betterarcheology:vase_creeper", value: 144 },
  { item: "trials:trial_key_ominous", value: 224 },
  { item: "trials:heavy_core", value: 6144 },
  { item: "trials:guster_pottery_sherd", value: 160 },
  { item: "trials:flow_pottery_sherd", value: 160 },
  { item: "trials:scrape_pottery_sherd", value: 160 },
  { item: "minecraft:angler_pottery_sherd", value: 192 },
  { item: "minecraft:snort_pottery_sherd", value: 192 },
  { item: "minecraft:shelter_pottery_sherd", value: 192 },
  { item: "minecraft:archer_pottery_sherd", value: 80 },
  { item: "minecraft:skull_pottery_sherd", value: 80 },
  { item: "minecraft:miner_pottery_sherd", value: 80 },
  { item: "minecraft:prize_pottery_sherd", value: 80 },
  { item: "minecraft:brewer_pottery_sherd", value: 128 },
  { item: "minecraft:arms_up_pottery_sherd", value: 128 },
  { item: "minecraft:explorer_pottery_sherd", value: 192 },
  { item: "minecraft:blade_pottery_sherd", value: 192 },
  { item: "minecraft:mourner_pottery_sherd", value: 192 },
  { item: "minecraft:plenty_pottery_sherd", value: 192 },
  { item: "minecraft:sheaf_pottery_sherd", value: 80 },
  { item: "minecraft:burn_pottery_sherd", value: 80 },
  { item: "minecraft:danger_pottery_sherd", value: 80 },
  { item: "minecraft:friend_pottery_sherd", value: 80 },
  { item: "minecraft:heart_pottery_sherd", value: 80 },
  { item: "minecraft:heartbreak_pottery_sherd", value: 80 },
  { item: "minecraft:howl_pottery_sherd", value: 80 },
  { item: "minecraft:totem_of_undying", value: 448 },
  { item: "minecraft:dragon_head", value: 4608 },
  { item: "quark:forgotten_hat", value: 112 },
  { item: "aquaculture:box", value: 32 },
  { item: "aquaculture:lockbox", value: 128 },
  { item: "aquaculture:treasure_chest", value: 512 },
  { item: "mysticaloaktree:wise_oak", value: 1024 },
  { item: "minecraft:enchanted_golden_apple", value: 4096 },
  { item: "minecraft:goat_horn", value: 512 },
  { item: "botania:life_essence", value: 9999 },
  { item: "botania:manasteel_ingot", value: 32 },
  { item: "botania:manasteel_block", value: 288 },
  { item: "botania:mana_pearl", value: 96 },
  { item: "botania:mana_diamond", value: 1128 },
  { item: "botania:mana_diamond_block", value: 10152 },
  { item: "botania:elementium_ingot", value: 96 },
  { item: "botania:elementium_block", value: 864 },
  { item: "botania:pixie_dust", value: 120 },
  { item: "botania:dragonstone", value: 1400 },
  { item: "botania:dragonstone_block", value: 12600 },
  { item: "botania:terrasteel_ingot", value: 44096 },
  { item: "botania:terrasteel_block", value: 396864 },
];

global.lootFurniture = [
  "tanukidecor:antique_bookcase",
  "tanukidecor:wooden_block_stool",
  "tanukidecor:ship_in_a_bottle",
  "tanukidecor:red_mushroom_bed",
  "tanukidecor:blue_lamp",
  "tanukidecor:antique_bureau",
  "tanukidecor:rococo_clock",
  "tanukidecor:gorgeous_stool",
  "tanukidecor:green_science_pod",
  "tanukidecor:egyptian_table",
  "tanukidecor:recognizable_clock",
  "tanukidecor:purple_rocket_lamp",
  "tanukidecor:metronome",
  "tanukidecor:slate_clock",
  "tanukidecor:blue_table",
  "tanukidecor:antique_bed",
  "tanukidecor:gorgeous_table",
  "tanukidecor:phonograph",
  "tanukidecor:station_clock",
  "tanukidecor:egyptian_lamp",
  "tanukidecor:sweets_sofa",
  "tanukidecor:minimalist_couch",
  "tanukidecor:developer_mini_figure",
  "tanukidecor:narrow_string_lights",
  "tanukidecor:wide_blue_streamer",
  "tanukidecor:egyptian_crest",
  "tanukidecor:small_striped_vase",
  "tanukidecor:minimalist_mirror",
  "tanukidecor:antique_wall_oil_lamp",
  "tanukidecor:green_wardrobe",
  "tanukidecor:snowglobe",
  "tanukidecor:yellow_rocket_lamp",
  "tanukidecor:newtons_cradle",
  "tanukidecor:green_mini_drawer",
  "tanukidecor:minimalist_chair",
  "tanukidecor:cabana_vanity",
  "tanukidecor:minimalist_bed",
  "tanukidecor:small_clock_tower_dial",
  "tanukidecor:wooden_block_bed",
  "tanukidecor:large_fireplace",
  "tanukidecor:regal_wall_lamp",
  "tanukidecor:log_bench",
  "tanukidecor:gorgeous_chest",
  "tanukidecor:green_bed",
  "tanukidecor:neon_diamond_sign",
  "tanukidecor:foliot_clock",
  "tanukidecor:blue_wardrobe",
  "tanukidecor:blue_bed",
  "tanukidecor:narrow_red_streamer",
  "tanukidecor:minimalist_table",
  "tanukidecor:regal_armoire",
  "tanukidecor:long_display_case",
  "tanukidecor:sweets_wall_lamp",
  "tanukidecor:antique_small_table_with_doily",
  "tanukidecor:gingerbread_clock",
  "tanukidecor:display_watch",
  "tanukidecor:gorgeous_mini_drawer",
  "tanukidecor:pink_rocket_lamp",
  "tanukidecor:green_lamp",
  "tanukidecor:regal_sofa",
  "tanukidecor:birdcage",
  "tanukidecor:antique_chair",
  "tanukidecor:neon_spade_sign",
  "tanukidecor:antique_clock",
  "tanukidecor:emblem_clock",
  "tanukidecor:blue_science_pod",
  "tanukidecor:small_fireplace",
  "tanukidecor:cabana_table",
  "tanukidecor:regal_bookshelf",
  "tanukidecor:green_counter",
  "tanukidecor:gorgeous_lamp",
  "tanukidecor:piano",
  "tanukidecor:narrow_green_streamer",
  "tanukidecor:gorgeous_bed",
  "tanukidecor:neon_club_sign",
  "tanukidecor:library_clock",
  "tanukidecor:blue_wall_tarp",
  "tanukidecor:slot_machine",
  "tanukidecor:wooden_block_drawers",
  "tanukidecor:blue_stall_tarp",
  "tanukidecor:green_pantry",
  "tanukidecor:brown_mushroom_stool",
  "tanukidecor:minimalist_small_table",
  "tanukidecor:train_set",
  "tanukidecor:narrow_yellow_streamer",
  "tanukidecor:sweets_closet",
  "tanukidecor:gorgeous_clock",
  "tanukidecor:regal_chair",
  "tanukidecor:gumball_machine",
  "tanukidecor:firewood",
  "tanukidecor:wide_green_streamer",
  "tanukidecor:cuckoo_clock",
  "tanukidecor:blue_bookshelf",
  "tanukidecor:alarm_clock",
  "tanukidecor:wooden_block_table",
  "tanukidecor:blue_bench",
  "tanukidecor:mantle_clock",
  "tanukidecor:cabana_bed",
  "tanukidecor:green_clock",
  "tanukidecor:regal_dresser",
  "tanukidecor:brown_mushroom_table",
  "tanukidecor:antique_radio",
  "tanukidecor:regal_clock",
  "tanukidecor:sweets_bookcase",
  "tanukidecor:lantern_clock",
  "tanukidecor:crystal_clock",
  "tanukidecor:antique_mirror",
  "tanukidecor:antique_wall_shelf",
  "tanukidecor:sweets_mini_table",
  "tanukidecor:minimalist_lamp",
  "tanukidecor:yellow_wall_tarp",
  "tanukidecor:blue_chair",
  "tanukidecor:blue_cabinet",
  "tanukidecor:wooden_block_toys",
  "tanukidecor:large_fancy_vase",
  "tanukidecor:regal_bed",
  "tanukidecor:wide_red_streamer",
  "tanukidecor:wooden_block_chair",
  "tanukidecor:red_mushroom_table",
  "tanukidecor:antique_small_table",
  "tanukidecor:owl_clock",
  "tanukidecor:cash_register",
  "tanukidecor:classic_vase",
  "tanukidecor:reed_clock",
  "tanukidecor:green_chair",
  "tanukidecor:wide_yellow_streamer",
  "tanukidecor:antique_sofa",
  "tanukidecor:wooden_block_bench",
  "tanukidecor:yellow_stall_tarp",
  "tanukidecor:blue_rocket_lamp",
  "tanukidecor:sweets_chair",
  "tanukidecor:red_mushroom_stool",
  "tanukidecor:log_stool",
  "tanukidecor:carriage_clock",
  "tanukidecor:green_bench",
  "tanukidecor:blue_clock",
  "tanukidecor:cabana_screen",
  "tanukidecor:green_wall_tarp",
  "tanukidecor:hourglass",
  "tanukidecor:globe",
  "tanukidecor:red_mushroom_lamp",
  "tanukidecor:gorgeous_seat",
  "tanukidecor:red_wall_tarp",
  "tanukidecor:red_clock",
  "tanukidecor:elegant_birdcage",
  "tanukidecor:minimalist_wardrobe",
  "tanukidecor:banjo_clock",
  "tanukidecor:antique_phone",
  "tanukidecor:red_rocket_lamp",
  "tanukidecor:narrow_blue_streamer",
  "tanukidecor:regal_small_table",
  "tanukidecor:large_clock_tower_dial",
  "tanukidecor:cabana_lamp",
  "tanukidecor:orange_science_pod",
  "tanukidecor:minimalist_stool",
  "tanukidecor:green_dresser",
  "tanukidecor:red_stall_tarp",
  "tanukidecor:egyptian_chair",
  "tanukidecor:green_desk",
  "tanukidecor:holiday_tree",
  "tanukidecor:turquoise_rocket_lamp",
  "tanukidecor:cabana_armchair",
  "tanukidecor:gorgeous_closet",
  "tanukidecor:green_rocket_lamp",
  "tanukidecor:fancy_vase",
  "tanukidecor:anniversary_clock",
  "tanukidecor:regal_vanity",
  "tanukidecor:blue_dresser",
  "tanukidecor:regal_lamp",
  "tanukidecor:minimalist_clock",
  "tanukidecor:mayoral_mini_figure",
  "tanukidecor:antique_cabinet",
  "tanukidecor:egyptian_bed",
  "tanukidecor:red_science_pod",
  "tanukidecor:minimalist_dresser",
  "tanukidecor:wide_string_lights",
  "tanukidecor:antique_table",
  "tanukidecor:glowing_moss_jar",
  "tanukidecor:gorgeous_sofa",
  "tanukidecor:display_case",
  "tanukidecor:blue_bureau",
  "tanukidecor:grandfather_clock",
  "tanukidecor:cabana_bookcase",
  "tanukidecor:cabana_chair",
  "tanukidecor:wooden_block_bookshelf",
  "tanukidecor:rough_log_bench",
  "tanukidecor:green_stall_tarp",
  "tanukidecor:sweets_table",
  "tanukidecor:regal_table",
  "tanukidecor:gorgeous_desk",
  "tanukidecor:neon_heart_sign",
  "tanukidecor:antique_desk",
  "tanukidecor:sweets_bed",
  "tanukidecor:cabana_dresser",
  "tanukidecor:brown_mushroom_lamp",
  "tanukidecor:sweets_mini_lamp",
  "tanukidecor:large_striped_vase",
  "tanukidecor:antique_wardrobe",
  "tanukidecor:sweets_dresser",
  "tanukidecor:green_table",
  "tanukidecor:plasma_ball",
  "tanukidecor:brown_mushroom_log_stool",
  "tanukidecor:small_fancy_vase",
  "tanukidecor:wooden_block_clock",
  "tanukidecor:handcart",
  "tanukidecor:gorgeous_counter",
  "tanukidecor:dessert_case",
  "tanukidecor:cabana_wardrobe",
  "tanukidecor:red_mushroom_log_stool",
  "tanukidecor:brown_mushroom_bed",
  "furniture:spruce_clock",
  "furniture:oak_clock",
  "furniture:mangrove_clock",
  "furniture:cherry_clock",
  "furniture:dark_oak_clock",
  "furniture:acacia_clock",
  "furniture:jungle_clock",
  "furniture:birch_clock",
  "furniture:birch_mirror",
  "furniture:jungle_mirror",
  "furniture:spruce_mirror",
  "furniture:cherry_mirror",
  "furniture:dark_oak_mirror",
  "furniture:acacia_mirror",
  "furniture:oak_mirror",
  "furniture:mangrove_mirror",
  "furniture:cash_register",
  "furniture:iron_fish_tank",
  "furniture:tool_box",
  "furniture:sewing_kit",
  "furniture:explorers_box",
  "furniture:pells",
  "furniture:display",
  "furniture:blueprints",
  "furniture:canvas",
  "furniture:gramophone",
  "furniture:telescope",
  "furniture:boat_in_a_jar",
  "furniture:copper_fish_tank",
  "furniture:terrarium",
  "supplementaries:clock_block",
  "minecraft:painting",
  "candlelight:typewriter_copper",
  "create:cuckoo_clock",
  "beachparty:chair",
  "beachparty:beach_chair",
  "meadow:camera",
  "beachparty:table",
  "meadow:wheelbarrow",
  "beachparty:deck_chair",
  "beachparty:hammock",
  "candlelight:typewriter_iron",
  "beachparty:radio",
  "brewery:barrel_main",
  "beachparty:lounge_chair",
  "beachparty:tiki_chair",
  "waterframes:projector",
  "waterframes:big_tv",
  "waterframes:tv_box",
  "beautify:warped_picture_frame",
  "beautify:birch_picture_frame",
  "beautify:jungle_picture_frame",
  "beautify:quartz_picture_frame",
  "beautify:acacia_picture_frame",
  "beautify:spruce_picture_frame",
  "beautify:dark_oak_picture_frame",
  "beautify:oak_picture_frame",
  "beautify:bookstack",
  "beautify:crimson_picture_frame",
  "beautify:lamp_bamboo",
  "beautify:lamp_jar",
  "beautify:lamp_light_bulb",
  "beautify:mangrove_picture_frame",
  "chimes:bamboo_chimes",
  "chimes:carved_bamboo_chimes",
  "chimes:iron_chimes",
  "chimes:copper_chimes",
  "chimes:amethyst_chimes",
  "chimes:glass_bells",
  "snowyspirit:snow_globe",
  "supplementaries:cannon",
  "supplementaries:lunch_basket",
  "candlelight:sofa",
  "candlelight:table",
  "candlelight:dinner_bell",
  "candlelight:hearth",
  "candlelight:painting",
  "candlelight:jewelry_box",
  "candlelight:chair",
  "candlelight:lamp",
  "minecraft:bell",
  "furniture:coffer",
];

global.trades = new Map();
global.ore.forEach((oreItem) => {
  const { item, value } = oreItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.pristine.forEach((pristineItem) => {
  const { item, value } = pristineItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.crops.forEach((crop) => {
  const { item, value } = crop;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.animalProducts.forEach((meat) => {
  const { item, value } = meat;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.cooking.forEach((dish) => {
  const { item, value } = dish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.wines.forEach((wine) => {
  const { item, value } = wine;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.brews.forEach((brew) => {
  const { item, value } = brew;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.geodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier:
      item === "society:froggy_helm"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.frozenGeodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier:
      item === "society:ribbit_drum"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.magmaGeodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier:
      item === "society:ribbit_gadget"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.gems.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.miscGeologist.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.artifacts.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.relics.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.preserves.forEach((jar) => {
  const { item, value } = jar;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.dehydrated.forEach((dehydratee) => {
  const { item, value } = dehydratee;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.artisanGoods.forEach((good) => {
  const { item, value } = good;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.fish.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.smokedFish.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.agedRoe.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.cocktails.forEach((cocktail) => {
  const { item, value } = cocktail;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.herbalBrews.forEach((brew) => {
  const { item, value } = brew;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.logs.forEach((log) => {
  const { item, value } = log;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.miscAdventurer.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
