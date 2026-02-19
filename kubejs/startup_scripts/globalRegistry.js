// priority: -20
const NUMISMATICS = Java.loadClass("dev.ithundxr.createnumismatics.Numismatics");
global.GLOBAL_BANK = NUMISMATICS.BANK;

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
  { coin: "numismatics:prismatic_coin", value: 16777216 },
  { coin: "numismatics:ancient_coin", value: 262144 },
  { coin: "numismatics:neptunium_coin", value: 32768 },
  { coin: "numismatics:sun", value: 4096 },
  { coin: "numismatics:crown", value: 512 },
  { coin: "numismatics:cog", value: 64 },
  { coin: "numismatics:sprocket", value: 16 },
  { coin: "numismatics:bevel", value: 8 },
  { coin: "numismatics:spur", value: 1 },
];

global.formatPrice = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

global.formatName = (name) => {
  if (name.length === 0) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
};

// For cases where prices are auto-generated, round
const roundPrice = (price) => {
  for (let i = 0; i < global.coinMap.length; i++) {
    let { value } = global.coinMap[i];

    if (price % value === 0) {
      for (let k = 0; k < global.coinMap.length; k++) {
        if (price / global.coinMap[i - k].value <= 64) {
          return global.coinMap[i - k].value * Math.round(price / global.coinMap[i - k].value);
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
  { item: "minecraft:raw_copper", value: 4 },
  { item: "minecraft:raw_copper_block", value: 36 },
  { item: "minecraft:raw_iron", value: 8 },
  { item: "minecraft:raw_iron_block", value: 72 },
  { item: "minecraft:coal", value: 8 },
  { item: "minecraft:coal_block", value: 72 },
  { item: "minecraft:raw_gold", value: 16 },
  { item: "minecraft:raw_gold_block", value: 144 },
  { item: "create:raw_zinc", value: 8 },
  { item: "create:raw_zinc_block", value: 72 },
  { item: "minecraft:redstone", value: 8 },
  { item: "minecraft:redstone_block", value: 72 },
  { item: "minecraft:lapis_lazuli", value: 6 },
  { item: "minecraft:lapis_block", value: 64 },
  { item: "minecraft:emerald", value: 32 },
  { item: "minecraft:emerald_block", value: 288 },
  { item: "minecraft:amethyst_shard", value: 8 },
  { item: "minecraft:amethyst_block", value: 32 },
  { item: "minecraft:quartz", value: 8 },
  { item: "minecraft:quartz_block", value: 32 },
  { item: "etcetera:raw_bismuth", value: 32 },
  { item: "etcetera:raw_bismuth_block", value: 288 },
  { item: "oreganized:raw_lead", value: 48 },
  { item: "oreganized:raw_lead_block", value: 432 },
  { item: "society:sparkstone", value: 16 },
  { item: "society:sparkstone_block", value: 144 },
  { item: "oreganized:raw_silver", value: 64 },
  { item: "oreganized:raw_silver_block", value: 576 },
  { item: "minecraft:diamond", value: 256 },
  { item: "minecraft:diamond_block", value: 2304 },
  { item: "minecraft:netherite_scrap", value: 1024 },
  { item: "aquaculture:neptunium_ingot", value: 2560 },
  { item: "aquaculture:neptunium_block", value: 23040 },
];
[
  { item: "minecraft:emerald", value: 32 },
  { item: "minecraft:diamond", value: 256 },
  { item: "minecraft:lapis_lazuli", value: 6 },
  { item: "minecraft:quartz", value: 8 },
  { item: "minecraft:amethyst_shard", value: 8 },
  { item: "minecraft:prismarine_crystals", value: 20 },
].forEach((mineral) => {
  global.pristine.push({
    item: `society:pristine_${mineral.item.path}`,
    value: mineral.value * 4,
  });
});

// Geodes
// Geode
global.geodeList = [
  { item: "society:allanite", value: 128 },
  { item: "society:calcite_gem", value: 64 },
  { item: "society:celestine", value: 112 },
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
  global.pristine.push({
    item: `society:pristine_${mineral.item.path}`,
    value: mineral.value * 6,
  });
});

// Frozen Geode
global.frozenGeodeList = [
  { item: "society:aerinite", value: 128 },
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
  global.pristine.push({
    item: `society:pristine_${mineral.item.path}`,
    value: mineral.value * 6,
  });
});

// Magma Geode
global.magmaGeodeList = [
  { item: "society:baryte", value: 48 },
  { item: "society:basalt_shard", value: 176 },
  { item: "society:bixbyite", value: 304 },
  { item: "society:dolomite", value: 304 },
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
  global.pristine.push({
    item: `society:pristine_${mineral.item.path}`,
    value: mineral.value * 6,
  });
});

global.gems = [
  { item: "society:aquamarine", value: 184 },
  { item: "society:ruby", value: 256 },
  { item: "society:amethyst_chunk", value: 112 },
  { item: "society:topaz", value: 192 },
  { item: "society:jade", value: 512 },
  { item: "society:spinel", value: 1024 },
];
global.gems.forEach((mineral) => {
  global.pristine.push({
    item: `society:pristine_${mineral.item.path}`,
    value: mineral.value * 6,
  });
});

// Mining misc
global.miscGeologist = [
  { item: "society:geode", value: 16 },
  { item: "society:frozen_geode", value: 32 },
  { item: "society:magma_geode", value: 48 },
  { item: "society:omni_geode", value: 128 },
  { item: "society:prismatic_shard", value: 2048 },
  { item: "society:prismatic_shard_block", value: 18432 },
  { item: "quark:diamond_heart", value: 752 },
  { item: "quark:red_corundum", value: 32 },
  { item: "quark:red_corundum_cluster", value: 16 },
  { item: "quark:orange_corundum", value: 32 },
  { item: "quark:orange_corundum_cluster", value: 16 },
  { item: "quark:yellow_corundum", value: 32 },
  { item: "quark:yellow_corundum_cluster", value: 16 },
  { item: "quark:green_corundum", value: 32 },
  { item: "quark:green_corundum_cluster", value: 16 },
  { item: "quark:blue_corundum", value: 32 },
  { item: "quark:blue_corundum_cluster", value: 16 },
  { item: "quark:indigo_corundum", value: 32 },
  { item: "quark:indigo_corundum_cluster", value: 16 },
  { item: "quark:violet_corundum", value: 32 },
  { item: "quark:violet_corundum_cluster", value: 16 },
  { item: "quark:white_corundum", value: 32 },
  { item: "quark:white_corundum_cluster", value: 16 },
  { item: "quark:black_corundum", value: 32 },
  { item: "quark:black_corundum_cluster", value: 16 },
  { item: "minecraft:golden_apple", value: 128 },
];

// Artifacts
global.artifacts = [
  { item: "society:froggy_helm", value: 256 },
  { item: "society:ribbit_drum", value: 96 },
  { item: "society:ribbit_gadget", value: 192 },
  { item: "society:legendary_ink", value: 144 },
  { item: "society:holy_symbol", value: 160 },
  { item: "society:ember_crystal_cluster", value: 176 },
  { item: "society:living_flesh", value: 192 },
  { item: "society:source_gem", value: 208 },
  { item: "society:glitched_vhs", value: 256 },
  { item: "society:spider_silk", value: 320 },
  { item: "society:toy_train", value: 430 },
  { item: "society:aquamagical_dust", value: 512 },
  { item: "society:wheel_of_adaptation", value: 576 },
  { item: "society:perfect_cherry", value: 777 },
  { item: "society:mini_oni_eye", value: 704 },
  { item: "society:production_science_pack", value: 1024 },
  { item: "society:steamy_gadget", value: 649 },
  { item: "society:amulet_of_light", value: 1282 },
  { item: "society:beemonican_seal", value: 2560 },
  { item: "society:princess_hairbrush", value: 3584 },
  { item: "society:heart_of_neptunium", value: 4096 },
  { item: "society:token_of_unity", value: 3 },
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
  { item: "vinery:white_grape", value: 20 },
  { item: "vinery:white_grape_bag", value: 180 },
  { item: "vinery:red_grape", value: 20 },
  { item: "vinery:red_grape_bag", value: 180 },
  { item: "minecraft:sweet_berries", value: 4 },
  { item: "quark:berry_sack", value: 36 },
  { item: "windswept:wild_berries", value: 8 },
  { item: "windswept:wild_berry_basket", value: 72 },
  { item: "vinery:savanna_grapes_white", value: 20 },
  { item: "vinery:taiga_grapes_red", value: 20 },
  { item: "vinery:taiga_grapes_white", value: 20 },
  { item: "vinery:jungle_grapes_white", value: 20 },
  { item: "vinery:jungle_grapes_red", value: 20 },
  { item: "vinery:savanna_grapes_red", value: 20 },
  { item: "nethervinery:crimson_grape", value: 24 },
  { item: "nethervinery:crimson_grape_crate", value: 216 },
  { item: "nethervinery:warped_grape", value: 24 },
  { item: "nethervinery:warped_grape_crate", value: 216 },
  { item: "autumnity:foul_berries", value: 4 },
  { item: "herbalbrews:rooibos_leaf", value: 8 },
  { item: "herbalbrews:rooibos_leaf_block", value: 72 },
  { item: "herbalbrews:green_tea_leaf", value: 20 },
  { item: "herbalbrews:green_tea_leaf_block", value: 180 },
  { item: "herbalbrews:yerba_mate_leaf", value: 6 },
  { item: "herbalbrews:yerba_mate_leaf_block", value: 54 },
  { item: "herbalbrews:coffee_beans", value: 8 },
  { item: "herbalbrews:ground_coffee", value: 12 },
  { item: "herbalbrews:coffee_beans_sack", value: 72 },
  { item: "farm_and_charm:barley", value: 11 },
  { item: "farm_and_charm:barley_ball", value: 99 },
  { item: "minecraft:melon_slice", value: 9 },
  { item: "minecraft:melon", value: 81 },
  { item: "minecraft:cocoa_beans", value: 4 },
  { item: "quark:cocoa_beans_sack", value: 36 },
  { item: "farm_and_charm:onion", value: 12 },
  { item: "farm_and_charm:onion_bag", value: 108 },
  { item: "farmersdelight:tomato", value: 24 },
  { item: "farmersdelight:rotten_tomato", value: 1 },
  { item: "farmersdelight:tomato_crate", value: 216 },
  { item: "minecraft:nether_wart", value: 6 },
  { item: "quark:nether_wart_sack", value: 54 },
  { item: "minecraft:carrot", value: 23 },
  { item: "minecraft:golden_carrot", value: 150 },
  { item: "quark:golden_carrot_crate", value: 1350 },
  { item: "farm_and_charm:carrot_bag", value: 207 },
  { item: "farm_and_charm:corn", value: 28 },
  { item: "farm_and_charm:corn_bag", value: 252 },
  { item: "atmospheric:yucca_fruit", value: 8 },
  { item: "atmospheric:yucca_bundle", value: 72 },
  { item: "atmospheric:yucca_cask", value: 72 },
  { item: "atmospheric:currant", value: 8 },
  { item: "atmospheric:currant_crate", value: 72 },
  { item: "vintagedelight:peanut", value: 24 },
  { item: "vintagedelight:peanut_crate", value: 216 },
  { item: "vintagedelight:gearo_berry", value: 24 },
  { item: "vintagedelight:gearo_berry_bag", value: 216 },
  { item: "minecraft:potato", value: 24 },
  { item: "farm_and_charm:potato_bag", value: 216 },
  { item: "minecraft:poisonous_potato", value: 4 },
  { item: "society:eggplant", value: 42 },
  { item: "society:eggplant_crate", value: 378 },
  { item: "veggiesdelight:turnip", value: 36 },
  { item: "veggiesdelight:turnip_crate", value: 324 },
  { item: "veggiesdelight:broccoli", value: 54 },
  { item: "veggiesdelight:broccoli_crate", value: 486 },
  { item: "veggiesdelight:zucchini", value: 72 },
  { item: "veggiesdelight:zucchini_crate", value: 648 },
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
  { item: "botania:white_mushroom", value: 24 },
  { item: "botania:orange_mushroom", value: 24 },
  { item: "botania:magenta_mushroom", value: 24 },
  { item: "botania:light_blue_mushroom", value: 24 },
  { item: "botania:yellow_mushroom", value: 24 },
  { item: "botania:lime_mushroom", value: 24 },
  { item: "botania:pink_mushroom", value: 24 },
  { item: "botania:black_mushroom", value: 24 },
  { item: "botania:red_mushroom", value: 24 },
  { item: "botania:green_mushroom", value: 24 },
  { item: "botania:brown_mushroom", value: 24 },
  { item: "botania:blue_mushroom", value: 24 },
  { item: "botania:purple_mushroom", value: 24 },
  { item: "botania:cyan_mushroom", value: 24 },
  { item: "botania:light_gray_mushroom", value: 24 },
  { item: "botania:gray_mushroom", value: 24 },
  { item: "minecraft:red_mushroom", value: 8 },
  { item: "farmersdelight:red_mushroom_colony", value: 48 },
  { item: "minecraft:brown_mushroom", value: 8 },
  { item: "farmersdelight:brown_mushroom_colony", value: 48 },
  { item: "minecraft:crimson_fungus", value: 16 },
  { item: "mynethersdelight:crimson_fungus_colony", value: 96 },
  { item: "minecraft:warped_fungus", value: 16 },
  { item: "mynethersdelight:warped_fungus_colony", value: 96 },
  { item: "verdantvibes:bracket_mushroom", value: 32 },
  { item: "cluttered:blue_roundhead", value: 140 },
  { item: "cluttered:fly_agaric", value: 140 },
  { item: "species:alphacene_mushroom", value: 32 },
  { item: "minecraft:bamboo_block", value: 9 },
  { item: "society:sturdy_bamboo_block", value: 81 },
  { item: "twigs:bamboo_thatch", value: 3 },
  { item: "minecraft:cactus", value: 12 },
  { item: "quark:cactus_block", value: 108 },
  { item: "moreminecarts:glass_spines", value: 16 },
  { item: "vinery:cherry", value: 12 },
  { item: "vinery:rotten_cherry", value: 1 },
  { item: "vinery:cherry_bag", value: 108 },
  { item: "farm_and_charm:strawberry", value: 18 },
  { item: "farm_and_charm:strawberry_bag", value: 162 },
  { item: "society:salmonberry", value: 20 },
  { item: "society:salmonberry_crate", value: 180 },
  { item: "society:boysenberry", value: 16 },
  { item: "society:boysenberry_crate", value: 144 },
  { item: "society:cranberry", value: 18 },
  { item: "society:cranberry_crate", value: 162 },
  { item: "society:crystalberry", value: 22 },
  { item: "society:crystalberry_crate", value: 198 },
  { item: "society:blueberry", value: 24 },
  { item: "society:blueberry_crate", value: 216 },
  { item: "society:mossberry", value: 96 },
  { item: "farmersdelight:cabbage", value: 70 },
  { item: "farmersdelight:cabbage_crate", value: 630 },
  { item: "minecraft:wheat", value: 46 },
  { item: "minecraft:hay_block", value: 414 },
  { item: "minecraft:sugar_cane", value: 12 },
  { item: "quark:sugar_cane_block", value: 108 },
  { item: "brewery:hops", value: 21 },
  { item: "ribbits:toadstool", value: 20 },
  { item: "quark:glow_shroom", value: 24 },
  { item: "farmersdelight:rice", value: 16 },
  { item: "farmersdelight:rice_bag", value: 144 },
  { item: "minecraft:pumpkin", value: 80 },
  { item: "autumnity:large_pumpkin_slice", value: 80 },
  { item: "farmersdelight:pumpkin_slice", value: 20 },
  { item: "supplementaries:flax", value: 68 },
  { item: "supplementaries:flax_block", value: 612 },
  { item: "quark:ancient_fruit", value: 16 },
  { item: "minecraft:chorus_fruit", value: 16 },
  { item: "quark:chorus_fruit_block", value: 144 },
  { item: "farm_and_charm:wild_ribwort", value: 24 },
  { item: "farm_and_charm:wild_nettle", value: 24 },
  { item: "species:ancient_pinecone", value: 32 },
  { item: "windswept:chestnuts", value: 2 },
  { item: "windswept:chestnut_crate", value: 18 },
  { item: "windswept:holly_berries", value: 3 },
  { item: "windswept:holly_berry_basket", value: 27 },
  { item: "minecraft:glow_berries", value: 24 },
  { item: "quark:glowberry_sack", value: 216 },
  { item: "moreminecarts:glass_cactus", value: 20 },
  { item: "vintagedelight:ghost_pepper", value: 36 },
  { item: "vintagedelight:ghost_pepper_crate", value: 324 },
  { item: "vintagedelight:cucumber", value: 72 },
  { item: "vintagedelight:cucumber_crate", value: 648 },
  { item: "society:tubabacco_leaf", value: 87 },
  { item: "society:tubabacco_leaf_block", value: 783 },
  { item: "minecraft:torchflower", value: 128 },
  { item: "minecraft:pitcher_plant", value: 64 },
  { item: "society:ancient_fruit", value: 128 },
  { item: "society:ancient_fruit_crate", value: 1152 },
  { item: "society:sparkpod", value: 100 },
  { item: "society:sparkpod_crate", value: 900 },
  { item: "society:mana_fruit", value: 256 },
  { item: "society:mana_fruit_crate", value: 1024 },
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
  { item: "minecraft:turtle_egg", value: 64 },
  { item: "minecraft:sniffer_egg", value: 192 },
  { item: "species:petrified_egg", value: 256 },
  { item: "society:large_egg", value: 32 },
  { item: "society:large_duck_egg", value: 48 },
  { item: "society:large_goose_egg", value: 64 },
  { item: "society:large_turkey_egg", value: 96 },
  { item: "farmlife:galliraptor_egg", value: 200 },
  { item: "society:large_galliraptor_egg", value: 600 },
  { item: "species:birt_egg", value: 12 },
  { item: "species:wraptor_egg", value: 40 },
  { item: "species:springling_egg", value: 128 },
  { item: "society:penguin_egg", value: 128 },
  { item: "society:flamingo_egg", value: 256 },
  // Milk
  { item: "society:sheep_milk", value: 8 },
  { item: "society:milk", value: 16 },
  { item: "society:grain_milk", value: 22 },
  { item: "society:buffalo_milk", value: 64 },
  { item: "society:goat_milk", value: 96 },
  { item: "society:warped_milk", value: 96 },
  { item: "society:amethyst_milk", value: 80 },
  { item: "society:tri_bull_milk", value: 192 },
  { item: "society:large_sheep_milk", value: 32 },
  { item: "society:large_milk", value: 64 },
  { item: "society:large_grain_milk", value: 88 },
  { item: "society:large_buffalo_milk", value: 256 },
  { item: "society:large_goat_milk", value: 384 },
  { item: "society:large_warped_milk", value: 384 },
  { item: "society:large_amethyst_milk", value: 320 },
  { item: "society:large_tri_bull_milk", value: 768 },
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
  { item: "atmospheric:carmine_husk", value: 10 },
  { item: "crabbersdelight:raw_squid_tentacles", value: 16 },
  { item: "crabbersdelight:squid_barrel", value: 144 },
  { item: "crabbersdelight:raw_glow_squid_tentacles", value: 32 },
  { item: "crabbersdelight:glow_squid_barrel", value: 288 },
  { item: "crabbersdelight:raw_frog_leg", value: 40 },
  { item: "windswept:goat", value: 40 },
  { item: "crabbersdelight:frog_leg_barrel", value: 360 },
  { item: "farmlife:galliraptor", value: 900 },
  { item: "farmlife:tribull_shank", value: 1800 },
  { item: "wildernature:cassowary_meat", value: 90 },
  { item: "wildernature:venison", value: 48 },
  { item: "wildernature:bison_meat", value: 64 },
  { item: "wildernature:pelican_meat", value: 32 },
  // Advanced Cooked
  { item: "snowpig:frozen_ham", value: 128 },
  { item: "buzzier_bees:glazed_porkchop", value: 144 },
  // Bee
  { item: "minecraft:honey_bottle", value: 8 },
  { item: "minecraft:honey_block", value: 24 },
  { item: "minecraft:honeycomb", value: 4 },
  { item: "minecraft:honeycomb_block", value: 16 },
  { item: "golemoverhaul:honey_blob", value: 72 },
  { item: "buzzier_bees:bee_bottle", value: 16 },
  { item: "etcetera:cotton_flower", value: 24 },
  { item: "society:butterfly_amber", value: 64 },
  { item: "society:moth_pollen", value: 128 },
  // Misc
  { item: "minecraft:leather", value: 8 },
  { item: "netherdepthsupgrade:soul_sucker_leather", value: 16 },
  { item: "netherdepthsupgrade:fortress_grouper_plate", value: 16 },
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
  { item: "snuffles:snuffle_fluff", value: 16 },
  { item: "snuffles:frosty_fluff", value: 64 },
];

/**
 * Preserves
 * Formula: Ingredient * 20
 */
global.fruits = [
  {
    item: "minecraft:sweet_berries",
    altPreserveOutput: "vintagedelight:sweet_berry_mason_jar",
    value: 4,
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
  { item: "society:ancient_fruit", value: 128 },
  { item: "society:mana_fruit", value: 256 },
  { item: "society:sparkpod", value: 100 },
  { item: "atmospheric:orange", value: 96 },
  { item: "pamhc2trees:dragonfruititem", value: 128 },
  { item: "atmospheric:passion_fruit", value: 128 },
  { item: "pamhc2trees:lemonitem", value: 160 },
  { item: "pamhc2trees:starfruititem", value: 200 },
  { item: "society:salmonberry", value: 20 },
  { item: "society:boysenberry", value: 16 },
  { item: "society:cranberry", value: 18 },
  { item: "society:crystalberry", value: 22 },
  { item: "windswept:wild_berries", value: 8 },
  { item: "society:mossberry", value: 96 },
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
  { item: "vintagedelight:relish_mason_jar", value: 1440 },
  { item: "vintagedelight:pepper_jam_mason_jar", value: 604 },
  { item: "society:cauliflower_preserves", value: 784 },
  { item: "society:eggplant_preserves", value: 694 },
  { item: "society:turnip_preserves", value: 784 },
  { item: "society:zucchini_preserves", value: 1440 },
  { item: "society:broccoli_preserves", value: 1080 },
];
global.dehydrated = [
  { item: "society:raisins", value: 360 },
  { item: "society:nether_raisins", value: 400 },
];
global.fruits.forEach((fruit) => {
  let itemId = fruit.item.path;
  if (itemId.includes("item")) itemId = itemId.substring(0, itemId.length - 4);
  global.preserves.push({
    item: fruit.altPreserveOutput ? fruit.altPreserveOutput : `society:${itemId}_preserves`,
    value: fruit.value * 15 + 64,
  });
  global.dehydrated.push({
    item: `society:dried_${itemId}`,
    value: fruit.value * 14 + 64,
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
  { item: "ribbits:toadstool", value: 20 },
  { item: "cluttered:blue_roundhead", value: 140 },
  { item: "cluttered:fly_agaric", value: 140 },
  // Tag equivalent
  { item: "botania:shimmering_mushrooms", value: 24 },
];
global.mushrooms.forEach((shroom) => {
  let itemId = shroom.item.path;
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
 * Mayo: (egg with floor of 8)  * 2
 */
global.artisanGoods = [
  { item: "society:battery", value: 400 },
  { item: "society:canvas", value: 80 },
  { item: "society:merino_wool", value: 4096 },
  { item: "botania:mana_string", value: 384 },
  { item: "botania:manaweave_cloth", value: 6144 },
  { item: "society:mayonnaise", value: 16 },
  { item: "society:duck_mayonnaise", value: 16 },
  { item: "society:goose_mayonnaise", value: 32 },
  { item: "society:turkey_mayonnaise", value: 64 },
  { item: "society:galliraptor_mayonnaise", value: 400 },
  { item: "society:parrot_mayonnaise", value: 128 },
  { item: "society:turtle_mayonnaise", value: 256 },
  { item: "society:sniffer_mayonnaise", value: 384 },
  { item: "society:petrified_mayonnaise", value: 512 },
  { item: "society:supreme_mayonnaise", value: 9999 },
  { item: "society:golden_mayonnaise", value: 6144 },
  { item: "society:dragon_mayonnaise", value: 6144 },
  { item: "society:large_mayonnaise", value: 64 },
  { item: "society:large_duck_mayonnaise", value: 96 },
  { item: "society:large_goose_mayonnaise", value: 128 },
  { item: "society:large_turkey_mayonnaise", value: 192 },
  { item: "society:large_galliraptor_mayonnaise", value: 1200 },
  { item: "society:birt_mayonnaise", value: 24 },
  { item: "society:wraptor_mayonnaise", value: 80 },
  { item: "society:springling_mayonnaise", value: 256 },
  { item: "society:penguin_mayonnaise", value: 384 },
  { item: "society:flamingo_mayonnaise", value: 600 },
  { item: "society:cruncher_mayonnaise", value: 1024 },
  { item: "society:oak_resin", value: 128 },
  { item: "society:maple_syrup", value: 192 },
  { item: "society:mystic_syrup", value: 1000 },
  { item: "society:pine_tar", value: 128 },
  { item: "society:sap", value: 4 },
  { item: "society:rubber", value: 30 },
  { item: "society:aged_cheese_block", value: 288 },
  { item: "society:aged_goat_cheese_block", value: 1728 },
  { item: "society:aged_warped_cheese_block", value: 1728 },
  { item: "society:aged_buffalo_cheese_block", value: 1152 },
  { item: "society:aged_sheep_cheese_block", value: 144 },
  { item: "society:aged_grain_cheese_block", value: 396 },
  { item: "society:aged_amethyst_cheese_block", value: 1920 },
  { item: "society:aged_tribull_cheese_wheel", value: 3456 },
  { item: "society:double_aged_cheese_block", value: 864 },
  { item: "society:double_aged_goat_cheese_block", value: 5184 },
  { item: "society:double_aged_warped_cheese_block", value: 5184 },
  { item: "society:double_aged_buffalo_cheese_block", value: 3456 },
  { item: "society:double_aged_sheep_cheese_block", value: 432 },
  { item: "society:double_aged_grain_cheese_block", value: 1188 },
  { item: "society:double_aged_amethyst_cheese_block", value: 5760 },
  { item: "society:double_aged_tribull_cheese_wheel", value: 10368 },
  { item: "society:truffle_oil", value: 1536 },
  { item: "society:oil", value: 112 },
  { item: "society:coconut_oil", value: 64 },
];

// Formula: milk x 2
const cheeses = [
  // Values shouldn't be multiplied for balance
  { item: "meadow:piece_of_sheep_cheese", value: 12 },
  { item: "meadow:sheep_cheese_block", value: 48 },
  { item: "meadow:piece_of_cheese", value: 24 },
  { item: "meadow:cheese_block", value: 96 },
  { item: "meadow:piece_of_grain_cheese", value: 33 },
  { item: "meadow:grain_cheese_block", value: 132 },
  { item: "meadow:piece_of_buffalo_cheese", value: 96 },
  { item: "meadow:buffalo_cheese_block", value: 384 },
  { item: "meadow:piece_of_goat_cheese", value: 144 },
  { item: "meadow:goat_cheese_block", value: 576 },
  { item: "meadow:piece_of_warped_cheese", value: 144 },
  { item: "meadow:warped_cheese_block", value: 576 },
  { item: "meadow:piece_of_amethyst_cheese", value: 160 },
  { item: "meadow:amethyst_cheese_block", value: 640 },
  { item: "farmlife:tribull_cheese_wedge", value: 288 },
  { item: "farmlife:tribull_cheese_wheel", value: 1152 },
];
cheeses.forEach((recipe) => {
  global.artisanGoods.push({
    item: recipe.item,
    value: recipe.value,
  });
});
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
  { item: "beachparty:sweetberry_icecream", value: 36 },
  { item: "beachparty:coconut_icecream", value: 20 },
  { item: "beachparty:chocolate_icecream", value: 12 },
  { item: "society:blueberry_icecream", value: 64 },
  { item: "beachparty:icecream_cactus", value: 40 },
  { item: "beachparty:icecream_melon", value: 28 },
  { item: "beachparty:icecream_coconut", value: 20 },
  { item: "beachparty:icecream_chocolate", value: 12 },
  { item: "beachparty:icecream_sweetberries", value: 24 },
  { item: "beachparty:sweetberry_milkshake", value: 144 },
  { item: "beachparty:coconut_milkshake", value: 112 },
  { item: "beachparty:chocolate_milkshake", value: 80 },
];
// Steamed milk = 32
global.herbalBrews = [
  { item: "herbalbrews:coffee", value: 48 },
  { item: "herbalbrews:hazelnut_coffee", value: 90 },
  { item: "herbalbrews:cinnamon_coffee", value: 138 },
  { item: "herbalbrews:milk_coffee", value: 112 },
  { item: "herbalbrews:yerba_mate_tea", value: 12 },
  { item: "herbalbrews:hibiscus_tea", value: 16 },
  { item: "herbalbrews:rooibos_tea", value: 20 },
  { item: "herbalbrews:lavender_tea", value: 16 },
  { item: "windswept:lavender_tea", value: 80 },
  { item: "windswept:ginger_tea", value: 128 },
  { item: "herbalbrews:green_tea", value: 144 },
  { item: "herbalbrews:black_tea", value: 1296 },
  { item: "herbalbrews:chai_tea", value: 2643 },
  { item: "herbalbrews:oolong_tea", value: 3840 },
  { item: "herbalbrews:dried_green_tea", value: 120 },
  { item: "herbalbrews:dried_black_tea", value: 1080 },
  { item: "herbalbrews:dried_oolong_tea", value: 3200 },
  { item: "society:espresso", value: 128 },
  { item: "society:latte", value: 576 },
  { item: "society:mocha", value: 512 },
  { item: "society:dirty_chai", value: 5574 },
  { item: "society:bowl_of_soul", value: 240 },
  { item: "society:truffle_tea", value: 2061 },
];
// Logs
global.logs = [
  { item: "minecraft:oak_log", value: 2 },
  { item: "minecraft:stripped_oak_log", value: 2 },
  { item: "minecraft:spruce_log", value: 2 },
  { item: "minecraft:stripped_spruce_log", value: 2 },
  { item: "minecraft:birch_log", value: 2 },
  { item: "minecraft:stripped_birch_log", value: 2 },
  { item: "minecraft:jungle_log", value: 2 },
  { item: "minecraft:stripped_jungle_log", value: 2 },
  { item: "minecraft:dark_oak_log", value: 2 },
  { item: "minecraft:stripped_dark_oak_log", value: 2 },
  { item: "quark:blossom_log", value: 2 },
  { item: "quark:stripped_blossom_log", value: 2 },
  { item: "beachparty:palm_log", value: 4 },
  { item: "beachparty:stripped_palm_log", value: 4 },
  { item: "meadow:pine_log", value: 3 },
  { item: "meadow:stripped_pine_log", value: 3 },
  { item: "atmospheric:aspen_log", value: 3 },
  { item: "atmospheric:stripped_aspen_log", value: 3 },
  { item: "atmospheric:watchful_aspen_log", value: 6 },
  { item: "atmospheric:crustose_log", value: 4 },
  { item: "atmospheric:stripped_crustose_log", value: 4 },
  { item: "autumnity:maple_log", value: 2 },
  { item: "autumnity:stripped_maple_log", value: 2 },
  { item: "atmospheric:kousa_log", value: 3 },
  { item: "atmospheric:stripped_kousa_log", value: 3 },
  { item: "atmospheric:laurel_log", value: 3 },
  { item: "atmospheric:stripped_laurel_log", value: 3 },
  { item: "atmospheric:yucca_log", value: 3 },
  { item: "atmospheric:stripped_yucca_log", value: 3 },
  { item: "atmospheric:morado_log", value: 3 },
  { item: "atmospheric:stripped_morado_log", value: 3 },
  { item: "atmospheric:rosewood_log", value: 3 },
  { item: "atmospheric:stripped_rosewood_log", value: 3 },
  { item: "atmospheric:grimwood_log", value: 7 },
  { item: "atmospheric:stripped_grimwood_log", value: 7 },
  { item: "botania:dreamwood_log", value: 32 },
  { item: "botania:stripped_dreamwood_log", value: 32 },
  { item: "botania:livingwood_log", value: 16 },
  { item: "botania:stripped_livingwood_log", value: 16 },
  { item: "vinery:dark_cherry_log", value: 3 },
  { item: "vinery:stripped_dark_cherry_log", value: 3 },
  { item: "vinery:apple_log", value: 3 },
  { item: "minecraft:acacia_log", value: 3 },
  { item: "minecraft:stripped_acacia_log", value: 3 },
  { item: "minecraft:mangrove_log", value: 4 },
  { item: "minecraft:stripped_mangrove_log", value: 4 },
  { item: "minecraft:cherry_log", value: 4 },
  { item: "minecraft:stripped_cherry_log", value: 4 },
  { item: "quark:azalea_log", value: 4 },
  { item: "quark:stripped_azalea_log", value: 4 },
  { item: "quark:ancient_log", value: 8 },
  { item: "quark:stripped_ancient_log", value: 8 },
  { item: "betterarcheology:rotten_log", value: 12 },
  { item: "minecraft:warped_stem", value: 16 },
  { item: "minecraft:stripped_warped_stem", value: 16 },
  { item: "minecraft:crimson_stem", value: 16 },
  { item: "minecraft:stripped_crimson_stem", value: 16 },
  { item: "vintagedelight:magic_vine", value: 32 },
  { item: "vintagedelight:stripped_magic_vine", value: 32 },
  { item: "vanillabackport:pale_oak_log", value: 8 },
  { item: "vanillabackport:stripped_pale_oak_log", value: 8 },
  { item: "farmersdelight:straw", value: 3 },
  { item: "farmersdelight:straw_bale", value: 27 },
  { item: "farmersdelight:canvas", value: 12 },
  { item: "windswept:stripped_holly_log", value: 3 },
  { item: "windswept:holly_log", value: 3 },
  { item: "windswept:chestnut_log", value: 3 },
  { item: "windswept:stripped_chestnut_log", value: 3 },
  { item: "windswept:pine_log", value: 3 },
  { item: "windswept:stripped_pine_log", value: 3 },
  { item: "windswept:weathered_pine_log", value: 6 },
];

/**
 * Wine
 * Formula: (72 + sum ingredient val) * 4
 */
global.wines = [
  { item: "society:forks_of_blue", value: 576 },
  { item: "vinery:jo_special_mixture", value: 1632 },
  { item: "vinery:cristel_wine", value: 576 },
  { item: "vinery:creepers_crush", value: 336 },
  { item: "vinery:villagers_fright", value: 384 },
  { item: "vinery:glowing_wine", value: 1440 },
  { item: "vinery:mead", value: 576 },
  { item: "vinery:bottle_mojang_noir", value: 480 },
  { item: "vinery:eiswein", value: 1824 },
  { item: "nethervinery:blazewine_pinot", value: 2208 },
  { item: "nethervinery:netherite_nectar", value: 4384 },
  { item: "nethervinery:ghastly_grenache", value: 480 },
  { item: "nethervinery:lava_fizz", value: 720 },
  { item: "nethervinery:nether_fizz", value: 1248 },
  { item: "nethervinery:improved_lava_fizz", value: 800 },
  { item: "nethervinery:improved_nether_fizz", value: 1400 },
  { item: "vinery:chorus_wine", value: 480 },
  { item: "vinery:cherry_wine", value: 432 },
  { item: "vinery:magnetic_wine", value: 384 },
  { item: "vinery:noir_wine", value: 1440 },
  { item: "vinery:lilitu_wine", value: 1824 },
  { item: "vinery:mellohi_wine", value: 4384 },
  { item: "vinery:stal_wine", value: 600 },
  { item: "vinery:strad_wine", value: 336 },
  { item: "vinery:solaris_wine", value: 576 },
  { item: "vinery:bolvar_wine", value: 504 },
  { item: "vinery:aegis_wine", value: 1056 },
  { item: "vinery:clark_wine", value: 480 },
  { item: "vinery:chenet_wine", value: 1056 },
  { item: "vinery:kelp_cider", value: 1260 },
  { item: "vinery:apple_wine", value: 384 },
  { item: "vinery:apple_cider", value: 2592 },
  { item: "vinery:red_wine", value: 336 },
  { item: "society:good_catawba", value: 504 },
  { item: "vinery:jellie_wine", value: 6048 },
  { item: "society:ancient_vespertine", value: 1824 },
  { item: "society:dewy_star", value: 2688 },
  { item: "society:ancient_cider", value: 3424 },
  { item: "society:star_coquito", value: 6000 },
  { item: "society:nutty_basil", value: 624 },
  { item: 'society:violet_moon', value: 1488 },
  { item: 'society:laputa_franc', value: 3648 },
  { item: 'society:sparkling_le_roy', value: 2872 },
  { item: 'society:mana_king', value: 3296 },
];

global.wines.forEach((wine) => {
  global.artisanGoods.push({
    item: `society:aged_${wine.item.path}`,
    value: wine.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${wine.item.path}`,
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
  { item: "society:beer_attunecore", value: 106 },
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
    item: `society:aged_${brew.item.path}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${brew.item.path}`,
    value: brew.value * 16,
  });
});
const miscAged = [
  { item: "vintagedelight:century_egg", value: 192 * 3 },
  { item: "society:energy_drink", value: 566 },
  { item: "society:espresso", value: 128 },
];

miscAged.forEach((brew) => {
  global.artisanGoods.push({
    item: `society:aged_${brew.item.path}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `society:double_aged_${brew.item.path}`,
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
 * Vegetable tag = 20
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
  { item: "veggiesdelight:turnip_mutton_skewer", value: 60 },
  { item: "veggiesdelight:vegetables_wrap", value: 195 },
  { item: "veggiesdelight:vegetarian_burger", value: 188 },
  { item: "veggiesdelight:zucchini_quiche", value: 939 },
  { item: "veggiesdelight:stuffed_zucchini_boat", value: 270 },
  { item: "veggiesdelight:steak_and_broccoli", value: 165 },
  { item: "vintagedelight:honey_mason_jar", value: 24 },
  { item: "veggiesdelight:zucchini_sandwich", value: 134 },
  { item: "veggiesdelight:turnip_salad", value: 60 },
  { item: "veggiesdelight:broccoli_salad", value: 92 },
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
  { item: "create:bar_of_chocolate", value: 30 },
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
  { item: "minecraft:mushroom_stew", value: 16 },
  { item: "minecraft:cake", value: 318 },
  { item: "species:birtday_cake", value: 1572 },
  { item: "minecraft:rabbit_stew", value: 239 },
  { item: "netherdepthsupgrade:lava_pufferfish_roll", value: 552 },
  { item: "netherdepthsupgrade:obsidianfish_roll", value: 1048 },
  { item: "netherdepthsupgrade:searing_cod_roll", value: 552 },
  { item: "netherdepthsupgrade:blazefish_roll", value: 840 },
  { item: "netherdepthsupgrade:magmacubefish_roll", value: 1264 },
  { item: "netherdepthsupgrade:glowdine_roll", value: 920 },
  { item: "netherdepthsupgrade:soulsucker_roll", value: 648 },
  { item: "netherdepthsupgrade:warped_kelp_roll", value: 96 },
  { item: "netherdepthsupgrade:warped_kelp_roll_slice", value: 32 },
  { item: "netherdepthsupgrade:nether_rice_roll_medley_block", value: 7252 },
  { item: "refurbished_furniture:bread_slice", value: 5 },
  { item: "refurbished_furniture:glow_berry_jam_toast", value: 49 },
  { item: "refurbished_furniture:sweet_berry_jam_toast", value: 20 },
  { item: "refurbished_furniture:cheese_toastie", value: 15 },
  { item: "snowyspirit:gingerbread_cookie", value: 8 },
  { item: "snowyspirit:candy_cane", value: 4 },
  { item: "windswept:candy_cane_block", value: 36 },
  { item: "snowyspirit:eggnog", value: 44 },
  { item: "supplementaries:candy", value: 24 },
  { item: "vintagedelight:salted_cod", value: 18 },
  { item: "vintagedelight:salted_salmon", value: 26 },
  { item: "vintagedelight:honey_roasted_peanut", value: 40 },
  { item: "vintagedelight:magic_peanut", value: 1000 },
  { item: "society:tubasmoke_stick", value: 197 },
  { item: "society:tubasmoke_carton", value: 1773 },
  { item: "vintagedelight:fruity_granola_bar", value: 24 },
  { item: "vintagedelight:deluxe_granola_bar", value: 42 },
  { item: "vintagedelight:chocolate_nut_granola_bar", value: 41 },
  { item: "vintagedelight:stuffed_burrito", value: 273 },
  { item: "vintagedelight:deluxe_burger", value: 321 },
  { item: "vintagedelight:cheese_burger", value: 237 },
  { item: "vintagedelight:pb_j", value: 208 },
  { item: "vintagedelight:cucumber_salad", value: 324 },
  { item: "vintagedelight:oatmeal_cookie", value: 10 },
  { item: "society:energy_drink", value: 277 },
  { item: "society:death_liquid", value: 930 },
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
  { item: "windswept:spicy_snow_cone", value: 64 },
  { item: "windswept:sweet_snow_cone", value: 34 },
  { item: "windswept:mutton_pie", value: 116 },
  { item: "windswept:minty_snow_cone", value: 27 },
];
craftingTableRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.floor(recipe.value * 1.4),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
let fermentingRecipes = [
  { item: "windswept:pinecone_jam_bottle", value: 212 },
  { item: "vintagedelight:pickled_onion", value: 14 },
  { item: "vintagedelight:pickle", value: 72 },
  { item: "vintagedelight:century_egg", value: 136 },
  { item: "vintagedelight:surstromming", value: 48 },
  { item: "vintagedelight:pickled_pepper", value: 38 },
  { item: "vintagedelight:overnight_oats", value: 120 },
  { item: "vintagedelight:pickled_beetroot", value: 26 },
  { item: "vintagedelight:pickled_egg", value: 16 },
  { item: "vintagedelight:vinegar_mason_jar", value: 170 },
  { item: "vintagedelight:pickled_pitcher_pod", value: 64 },
  { item: "vintagedelight:kimchi", value: 71 },
  { item: "veggiesdelight:fermented_garlic_honey", value: 156 },
  { item: "supplementaries:lumisene_bottle", value: 24 },
];
global.picklableVegetables = [
  { item: "farmersdelight:pumpkin_slice", value: 20 },
  { item: "farm_and_charm:lettuce", value: 24 },
  { item: "minecraft:potato", value: 24 },
  { item: "minecraft:carrot", value: 23 },
  { item: "minecraft:golden_carrot", value: 150 },
  { item: "snowyspirit:ginger", value: 24 },
  { item: "veggiesdelight:garlic", value: 27 },
  { item: "veggiesdelight:bellpepper", value: 32 },
  { item: "society:eggplant", value: 42 },
  { item: "veggiesdelight:cauliflower", value: 48 },
  { item: "veggiesdelight:zucchini", value: 72 },
  { item: "veggiesdelight:turnip", value: 48 },
  { item: "veggiesdelight:broccoli", value: 48 },
];
global.picklableVegetables.forEach((recipe) =>
  fermentingRecipes.push({
    item: `society:pickled_${recipe.item.path}`,
    value: recipe.value,
  })
);

fermentingRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const furnaceRecipes = [
  { item: "veggiesdelight:roasted_zucchini", value: 72 },
  { item: "buzzier_bees:crystallized_honey_block", value: 24 },
  { item: "unusualfishmod:cooked_unusual_fillet", value: 64 },
  { item: "vintagedelight:ghost_charcoal", value: 36 },
  { item: "pamhc2trees:roastedhazelnutitem", value: 32 },
  { item: "vintagedelight:roasted_peanut", value: 24 },
  { item: "atmospheric:roasted_yucca_fruit", value: 8 },
  { item: "atmospheric:roasted_yucca_bundle", value: 72 },
  { item: "atmospheric:roasted_yucca_cask", value: 72 },
  { item: "windswept:roasted_chestnuts", value: 2 },
  { item: "windswept:roasted_chestnut_crate", value: 18 },
  { item: "minecraft:cooked_beef", value: 16 },
  { item: "minecraft:baked_potato", value: 24 },
  { item: "minecraft:cooked_porkchop", value: 32 },
  { item: "minecraft:cooked_rabbit", value: 64 },
  { item: "minecraft:cooked_mutton", value: 16 },
  { item: "minecraft:cooked_chicken", value: 8 },
  { item: "crabbersdelight:cooked_clam_meat", value: 8 },
  { item: "crabbersdelight:cooked_frog_leg", value: 40 },
  { item: "windswept:cooked_goat", value: 40 },
  { item: "crabbersdelight:cooked_tropical_fish", value: 72 },
  { item: "crabbersdelight:cooked_squid_tentacles", value: 16 },
  { item: "crabbersdelight:cooked_glow_squid_tentacles", value: 32 },
  { item: "farmlife:cooked_galliraptor", value: 900 },
  { item: "farmlife:cooked_tribull_shank", value: 1800 },
  { item: "wildernature:cooked_bison_meat", value: 64 },
  { item: "wildernature:cooked_pelican_meat", value: 32 },
  { item: "wildernature:cooked_venison", value: 48 },
  { item: "wildernature:cooked_cassowary_meat", value: 90 },
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
  { item: "bakery:apple_cupcake", value: 8 },
  { item: "bakery:strawberry_cake", value: 48 },
  { item: "bakery:strawberry_cupcake", value: 12 },
  { item: "bakery:sweetberry_cupcake", value: 7 },
  { item: "bakery:sweetberry_cake", value: 28 },
  { item: "bakery:chocolate_glazed_cookie", value: 54 },
  { item: "bakery:strawberry_glazed_cookie", value: 16 },
  { item: "bakery:sweetberry_glazed_cookie", value: 12 },
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
  { item: "veggiesdelight:rice_and_vegetables", value: 221 },
  { item: "veggiesdelight:sweet_potato_pancakes", value: 336 },
  { item: "society:mossberry_stew", value: 288 },
  { item: "windswept:goat_stew", value: 190 },
  { item: "windswept:chestnut_soup", value: 80 },
  { item: "windswept:christmas_pudding", value: 160 },
  { item: "veggiesdelight:garlic_chicken_stew", value: 137 },
  { item: "society:chicken_tortilla_soup", value: 279 },
  { item: "society:mexican_street_corn", value: 162 },
  { item: "farmersdelight:tomato_sauce", value: 52 },
  { item: "minecraft:beetroot_soup", value: 72 },
  { item: "farm_and_charm:strawberry_tea", value: 40 },
  { item: "farm_and_charm:nettle_tea", value: 52 },
  { item: "vintagedelight:cheese_pasta", value: 112 },
  { item: "farm_and_charm:onion_soup", value: 32 },
  { item: "bakery:strawberry_jam", value: 21 },
  { item: "farmersdelight:hot_cocoa", value: 27 },
  { item: "crabbersdelight:seafood_gumbo", value: 120 },
  { item: "candlelight:pasta_with_mozzarella", value: 96 },
  { item: "vintagedelight:pickle_soup", value: 466 },
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
  { item: "netherdepthsupgrade:baked_soulsucker_stew", value: 1224 },
  { item: "netherdepthsupgrade:baked_glowdine_stew", value: 1632 },
  { item: "netherdepthsupgrade:baked_magmacubefish_stew", value: 2148 },
  { item: "netherdepthsupgrade:baked_blazefish_stew", value: 1512 },
  { item: "netherdepthsupgrade:baked_searing_cod_stew", value: 1080 },
  { item: "netherdepthsupgrade:baked_obsidianfish_stew", value: 1824 },
  { item: "netherdepthsupgrade:baked_lava_pufferfish_stew", value: 1080 },
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
  { item: "bakery:sweetberry_jam", value: 7 },
  { item: "bakery:chocolate_donut", value: 427 },
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
  { item: "veggiesdelight:cauliflower_soup", value: 84 },
  { item: "veggiesdelight:mashed_potatoes", value: 112 },
  { item: "veggiesdelight:potato_noodles", value: 44 },
  { item: "veggiesdelight:shakshouka", value: 165 },
  { item: "veggiesdelight:roasted_vegetables", value: 240 },
  { item: "veggiesdelight:stuffed_bellpeppers_block", value: 146 },
  { item: "veggiesdelight:garlic_rice_with_cauliflower", value: 148 },
  { item: "veggiesdelight:garlic_stuffed_mushrooms", value: 100 },
  { item: "veggiesdelight:fish_and_chips", value: 92 },
  { item: "veggiesdelight:carrot_juice", value: 42 },
  { item: "veggiesdelight:cacciatore", value: 105 },
  { item: "meadow:sausage_with_cheese", value: 168 },
  { item: "veggiesdelight:cauliflower_kuku", value: 174 },
  { item: "veggiesdelight:broccoli_soup", value: 148 },
  { item: "veggiesdelight:stuffed_zucchinis", value: 186 },
  { item: "veggiesdelight:turnip_water", value: 76 },
  { item: "veggiesdelight:turnip_beef_stew", value: 75 },
  { item: "veggiesdelight:pasta_with_broccoli", value: 148 },
];

cookingPotRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 2),
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
  { item: "farm_and_charm:farmers_bread", value: 12 },
  { item: "bakery:crusty_bread", value: 8 },
  { item: "bakery:bundt_cake", value: 104 },
  { item: "candlelight:pork_ribs", value: 64 },
  { item: "bakery:apple_pie", value: 88 },
  { item: "farmersdelight:sweet_berry_cookie", value: 8 },
  { item: "society:ancient_cookie", value: 728 },
  { item: "bakery:linzer_tart", value: 1035 },
  { item: "brewery:pretzel", value: 13 },
  { item: "bakery:jam_roll", value: 750 },
  { item: "autumnity:pumpkin_bread", value: 95 },
  { item: "veggiesdelight:garlic_bread", value: 32 },
  { item: "veggiesdelight:cauliflower_bread", value: 76 },
  { item: "veggiesdelight:turnip_cake", value: 60 },
];
stoveRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
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
    value: recipe.value * 3,
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
    value: recipe.value * 3,
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
  { item: "crittersandcompanions:koi_fish", value: 340 },
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
  { item: "netherdepthsupgrade:searing_cod", value: 264 },
  { item: "netherdepthsupgrade:blazefish", value: 408 },
  { item: "netherdepthsupgrade:lava_pufferfish", value: 264 },
  { item: "netherdepthsupgrade:obsidianfish", value: 512 },
  { item: "netherdepthsupgrade:bonefish", value: 364 },
  { item: "netherdepthsupgrade:wither_bonefish", value: 412 },
  { item: "netherdepthsupgrade:magmacubefish", value: 620 },
  { item: "netherdepthsupgrade:glowdine", value: 448 },
  { item: "netherdepthsupgrade:soulsucker", value: 312 },
  { item: "netherdepthsupgrade:fortress_grouper", value: 666 },
  { item: "netherdepthsupgrade:eyeball_fish", value: 408 },
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
  { item: "society:sunlit_pearl", value: 1920 },
  { item: "crittersandcompanions:clam", value: 512 },
  { item: "windswept:elder_feather", value: 128 },
  { item: "windswept:frozen_branch", value: 200 },
  { item: "crittersandcompanions:silk", value: 128 },
  { item: "crittersandcompanions:dragonfly_wing", value: 3300 },
  { item: "quark:dragon_scale", value: 330 },
  { item: "society:river_jelly", value: 128 },
  { item: "society:ocean_jelly", value: 256 },
  { item: "society:nether_jelly", value: 512 },
  { item: "botania:black_lotus", value: 128 },
  { item: "automobility:dash_panel", value: 60 },
  { item: "create:experience_nugget", value: 2 },
  { item: "create:experience_block", value: 18 },
  { item: "society:gnome", value: 360 },
  { item: "minecraft:experience_bottle", value: 8 },
  { item: "create_enchantment_industry:hyper_experience_bottle", value: 550 },
  { item: "twigs:opaline_seashell", value: 16 },
  { item: "twigs:roseate_seashell", value: 20 },
  { item: "twigs:bronzed_seashell", value: 32 },
  { item: "twigs:tangerine_seashell", value: 24 },
  { item: "furniture:trash_bag", value: 1 },
  { item: "aquaculture:tin_can", value: 1 },
  { item: "simplehats:hatbag_common", value: 1 },
  { item: "simplehats:hatbag_uncommon", value: 1 },
  { item: "simplehats:hatbag_rare", value: 1 },
  { item: "simplehats:hatbag_epic", value: 1 },
  { item: "simplehats:hatbag_easter", value: 1 },
  { item: "simplehats:hatbag_summer", value: 1 },
  { item: "simplehats:hatbag_halloween", value: 1 },
  { item: "simplehats:hatbag_festive", value: 1 },
  { item: "minecraft:nautilus_shell", value: 64 },
  { item: "crabbersdelight:nautilus_shell_block", value: 640 },
  { item: "minecraft:echo_shard", value: 192 },
  { item: "minecraft:heart_of_the_sea", value: 256 },
  { item: "minecraft:nether_star", value: 2048 },
  { item: "betterarcheology:artifact_shards", value: 64 },
  { item: "betterarcheology:unidentified_artifact", value: 576 },
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
  { item: "betterarcheology:creeper_fossil", value: 896 },
  { item: "betterarcheology:villager_fossil", value: 896 },
  { item: "betterarcheology:chicken_fossil", value: 896 },
  { item: "betterarcheology:ocelot_fossil", value: 896 },
  { item: "betterarcheology:wolf_fossil", value: 896 },
  { item: "betterarcheology:sheep_fossil", value: 896 },
  { item: "betterarcheology:guardian_fossil", value: 896 },
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
  { item: "windswept:hoot_pottery_sherd", value: 182 },
  { item: "windswept:plumage_pottery_sherd", value: 182 },
  { item: "windswept:offshoot_pottery_sherd", value: 256 },
  { item: "windswept:flake_pottery_sherd", value: 256 },
  { item: "windswept:drupes_pottery_sherd", value: 256 },
  { item: "atmospheric:scythe_pottery_sherd", value: 512 },
  { item: "atmospheric:succulent_pottery_sherd", value: 512 },
  { item: "atmospheric:sun_pottery_sherd", value: 512 },
  { item: "trials:guster_pottery_sherd", value: 160 },
  { item: "trials:flow_pottery_sherd", value: 160 },
  { item: "trials:scrape_pottery_sherd", value: 160 },
  { item: "atmospheric:scythe_pottery_sherd", value: 512 },
  { item: "atmospheric:succulent_pottery_sherd", value: 512 },
  { item: "atmospheric:sun_pottery_sherd", value: 512 },
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
  { item: "rottencreatures:treasure_chest", value: 4096 },
  { item: "mysticaloaktree:wise_oak", value: 1024 },
  { item: "minecraft:enchanted_golden_apple", value: 4096 },
  { item: "minecraft:goat_horn", value: 512 },
  { item: "wildernature:bison_horn", value: 3300 },
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
  { item: "gamediscs:game_disc_flappy_bird", value: 490 },
  { item: "gamediscs:game_disc_slime", value: 999 },
  { item: "gamediscs:game_disc_rabbit", value: 4096 },
  { item: "gamediscs:game_disc_blocktris", value: 10000 },
  { item: "gamediscs:game_disc_tnt_sweeper", value: 2048 },
  { item: "gamediscs:game_disc_pong", value: 4900 },
  { item: "gamediscs:game_disc_froggie", value: 3200 },
];

global.plorts = [
  { type: "splendid_slimes:slimy", value: 64 },
  { type: "splendid_slimes:dusty", value: 64 },
  { type: "splendid_slimes:bony", value: 72 },
  { type: "splendid_slimes:rotting", value: 72 },
  { type: "splendid_slimes:mechanic", value: 148 },
  { type: "splendid_slimes:webby", value: 128 },
  { type: "splendid_slimes:luminous", value: 132 },
  { type: "splendid_slimes:juicy", value: 90 },
  { type: "splendid_slimes:puddle", value: 224 },
  { type: "splendid_slimes:boomcat", value: 200 },
  { type: "splendid_slimes:bear", value: 256 },
  { type: "splendid_slimes:all_seeing", value: 256 },
  { type: "splendid_slimes:bitwise", value: 288 },
  { type: "splendid_slimes:blazing", value: 256 },
  { type: "splendid_slimes:weeping", value: 320 },
  { type: "splendid_slimes:prisma", value: 400 },
  { type: "splendid_slimes:phantom", value: 512 },
  { type: "splendid_slimes:sweet", value: 256 },
  { type: "splendid_slimes:shulking", value: 512 },
  { type: "splendid_slimes:ender", value: 148 },
  { type: "splendid_slimes:orby", value: 480 },
  { type: "splendid_slimes:minty", value: 332 },
  { type: "splendid_slimes:sparkcat", value: 1400 },
  { type: "splendid_slimes:gold", value: 2048 },
];

global.slimeHearts = [];
global.plorts.forEach((plort) => {
  global.slimeHearts.push({
    type: plort.type,
    value: Math.floor(plort.value * 16),
  });
});

global.trades = new Map();

global.getConfiguredValue = (value, mult) => {
  let multedValue = value;
  switch (mult) {
    case "gem":
      multedValue = value * global.miningProductMult;
      break;
    case "wood":
      multedValue = value * global.artisanProductMult;
      break;
    case "meat":
      multedValue = value * global.adventurerProductMult;
      break;
    default:
    case "crop":
      multedValue = value * global.farmerProductMult;
      break;
  }
  return Math.round(multedValue)
}
const registerTrades = (tradeArray, mult, keyPrefix) => {
  let resolvedValue;
  tradeArray.forEach((trade) => {
    resolvedValue = global.getConfiguredValue(trade.value, mult)
    global.trades.set(`${keyPrefix ? keyPrefix : ""}${keyPrefix ? trade.type : trade.item}`, {
      value: resolvedValue,
      multiplier: `shippingbin:${mult}_sell_multiplier`,
    });
  });
}
registerTrades(global.ore, "gem");
registerTrades(global.pristine, "gem");
registerTrades(global.crops, "crop");
registerTrades(global.animalProducts, "crop");
registerTrades(global.cooking, "crop");
registerTrades(global.wines, "wood");
registerTrades(global.brews, "wood");
registerTrades(global.geodeList, "gem");
registerTrades(global.frozenGeodeList, "gem");
registerTrades(global.magmaGeodeList, "gem");
registerTrades(global.gems, "gem");
registerTrades(global.miscGeologist, "gem");
registerTrades(global.artifacts, "meat");
registerTrades(global.relics, "meat");
registerTrades(global.preserves, "wood");
registerTrades(global.dehydrated, "wood");
registerTrades(global.artisanGoods, "wood");
registerTrades(global.fish, "crop");
registerTrades(global.smokedFish, "wood");
registerTrades(global.agedRoe, "wood");
registerTrades(global.cocktails, "crop");
registerTrades(global.herbalBrews, "crop");
registerTrades(global.logs, "crop");
registerTrades(global.miscAdventurer, "meat");
registerTrades(global.plorts, "crop", "splendid_slimes:plort/");
registerTrades(global.slimeHearts, "crop", "splendid_slimes:slime_heart/");