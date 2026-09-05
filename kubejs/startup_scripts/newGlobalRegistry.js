// priority: -20
global.CROP_DEFINITIONS = [
    // Vegetables
    { item: "veggiesdelight:turnip", storage_block: "veggiesdelight:turnip_crate", dropCount: 1, growDays: 4, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "veggiesdelight:cauliflower", storage_block: "veggiesdelight:garlic_crate", dropCount: 1, growDays: 10, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "minecraft:potato", storage_block: "farmersdelight:potato_crate", dropCount: [3, 6], growDays: 7, seasons: ["spring"], products: ["preserves", "pickle", "wine"], wine: "kaleidoscope_tavern:vodka", classifications: ["vegetable"] },
    { item: "farmersdelight:onion", storage_block: "farmersdelight:onion_crate", dropCount: [1, 4], growDays: 8, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "veggiesdelight:garlic", storage_block: "veggiesdelight:garlic_crate", dropCount: 1, growDays: 5, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "vintagedelight:cucumber", storage_block: "vintagedelight:cucumber_crate", dropCount: 1, growDays: 10, regrowDays: 3, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "farmersdelight:cabbage", storage_block: "farmersdelight:cabbage_crate", dropCount: 1, growDays: 8, seasons: ["spring"], products: [], classifications: ["vegetable"] },

    { item: "farmersdelight:tomato", storage_block: "farmersdelight:tomato_crate", dropCount: [2, 3], growDays: 6, regrowDays: 3, seasons: ["spring", "summer"], products: ["preserves", "pickle"], classifications: ["vegetable"] },

    { item: "veggiesdelight:bellpepper", storage_block: "veggiesdelight:bellpepper_crate", dropCount: 1, growDays: 7, regrowDays: 3, seasons: ["summer"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "vintagedelight:ghost_pepper", storage_block: "vintagedelight:ghost_pepper_crate", dropCount: [1, 3], growDays: 7, regrowDays: 3, seasons: ["summer"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "minecraft:carrot", storage_block: "farmersdelight:carrot_crate", dropCount: [1, 2], growDays: 7, seasons: ["summer"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "veggiesdelight:zucchini", storage_block: "veggiesdelight:zucchini_crate", dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },

    { item: "culturaldelights:corn_cob", storage_block: "culturaldelights:corn_cob_crate", dropCount: 1, growDays: 12, regrowDays: 4, seasons: ["summer", "autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"] },

    { item: "minecraft:beetroot", storage_block: "farmersdelight:beetroot_crate", dropCount: 1, growDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "veggiesdelight:sweet_potato", storage_block: "veggiesdelight:sweet_potato_crate", dropCount: [2, 4], growDays: 12, seasons: ["autumn"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "minecraft:pumpkin", broken_block: "farmersdelight:pumpkin_slice", dropCount: 1, growDays: 7, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "culturaldelights:eggplant", storage_block: "culturaldelights:eggplant_crate", dropCount: 1, growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "veggiesdelight:broccoli", storage_block: "veggiesdelight:broccoli_crate", dropCount: [1, 2], growDays: 5, seasons: ["autumn"], lootOnly: true, products: ["preserves", "pickle"], classifications: ["vegetable"] },
    { item: "vintagedelight:peanut", storage_block: "vintagedelight:peanut_crate", dropCount: [1, 3], growDays: 7, seasons: ["autumn"], yearTwo: true, products: ["preserves"], classifications: ["nut"] },

    { item: "windswept:ginger_root", storage_block: "windswept:ginger_root_crate", dropCount: 1, growDays: 7, seasons: ["winter"], products: ["preserves", "pickle"], classifications: ["vegetable"] },

    // Fruit
    { item: "society:strawberry", storage_block: "society:strawberry_crate", dropCount: [1, 2], growDays: 8, regrowDays: 4, seasons: ["spring"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"] },
    { item: "society:sparkpod", storage_block: "society:sparkpod_crate", dropCount: 1, growDays: 8, seasons: ["spring"], customMult: 1.5, products: ["preserves", "wine", "dried"], classifications: ["fruit"] },
    { item: "minecraft:sweet_berries", storage_block: "quark:berry_sack", dropCount: [2, 3], growDays: 3, regrowDays: 1, seasons: ["spring"], reeseedable: true, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:sweet_berry_wine", classifications: ["fruit", "berry"] },

    { item: "minecraft:melon", broken_block: "minecraft:melon_slice", dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:watermelon_juice", classifications: ["fruit"] },
    { item: "society:blueberry", storage_block: "society:blueberry_crate", dropCount: [3, 4], growDays: 13, regrowDays: 4, seasons: ["summer"], products: ["preserves", "wine", "dried"], classifications: ["fruit"] },

    { item: "society:cranberry", storage_block: "society:cranberry_crate", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:carignan", classifications: ["fruit", "berry"] },
    { item: "vintagedelight:gearo_berry", storage_block: "vintagedelight:gearo_berry_bag", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"] },

    { item: "windswept:wild_berries", storage_block: "windswept:wild_berry_basket", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["winter"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"] },

    { item: "society:ancient_fruit", storage_block: "society:ancient_fruit_crate", dropCount: 1, growDays: 30, regrowDays: 7, seasons: ["spring", "summer", "autumn"], customMult: 2, products: ["preserves", "wine", "dried"], classifications: ["fruit"] },

    { item: "minecraft:cocoa_beans", storage_block: "quark:cocoa_beans_sack", dropCount: 1, growDays: 7, seasons: ["summer"], products: [], classifications: ["fruit"] },
    { item: "kaleidoscope_tavern:grape", dropCount: 1, growDays: 7, regrowDays: 5, products: ["preserves", "wine", "dried"], seasons: ["autumn"], wine: "kaleidoscope_tavern:wine", classifications: ["fruit", "grape"] },
    { item: "kaleidoscope_tavern:green_grape", dropCount: 1, growDays: 7, regrowDays: 5, products: ["preserves", "wine", "dried"], seasons: ["autumn"], wine: "kaleidoscope_tavern:sauvignon_blanc_dry_white", classifications: ["fruit", "grape"] },
    { item: "kaleidoscope_tavern:gold_grape", dropCount: 1, growDays: 7, regrowDays: 5, products: ["preserves", "wine", "dried"], seasons: ["summer"], wine: "kaleidoscope_tavern:honey_wine", classifications: ["fruit", "grape"] },
    { item: "kaleidoscope_tavern:ice_grape", dropCount: 1, growDays: 7, regrowDays: 5, products: ["preserves", "wine", "dried"], seasons: ["winter"], wine: "kaleidoscope_tavern:sherry", classifications: ["fruit", "grape"] },

    // Tree fruit
    { item: "minecraft:apple", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["autumn"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:brandy", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:cherry", dropCount: [1, 4], growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:sakura_wine", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:lemon", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:madame_shexiang", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:orange", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:sunset_glow", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:peach", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:luminous_bride", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:plum", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:plum_wine", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:hazelnut", dropCount: [1, 2], growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves"], classifications: ["nut", "tree_crop"] },
    { blocked: true, item: "fruittreemod:pawpaw", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:ice_wine", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:cinnamon", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: [], classifications: ["industrial", "tree_crop"] },
    { blocked: true, item: "fruittreemod:mango", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:rum", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:starfruit", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "society:dewy_star", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:lychee", dropCount: [1, 2], growDays: 7, regrowDays: 0, seasons: ["spring"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:red_queen", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:banana", dropCount: [1, 2], growDays: 7, regrowDays: 0, seasons: ["summer"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:champagne", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:dragon_fruit", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["winter"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:mother_snow", classifications: ["fruit", "tree_crop"] },
    { blocked: true, item: "fruittreemod:passion_fruit", dropCount: 1, growDays: 7, regrowDays: 0, seasons: ["summer"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:miners_star", classifications: ["fruit", "tree_crop"] },
    // Grain/Industrial

    { item: "minecraft:wheat", storage_block: "minecraft:hay_block", dropCount: 1, growDays: 5, seasons: ["summer", "autumn"], products: ["wine"], wine: "kaleidoscope_tavern:whiskey", classifications: ["grain"] },
    { item: "farmersdelight:rice", storage_block: "farmersdelight:rice_bag", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer", "autumn"], reeseedable: true, products: [], classifications: ["grain"] },

    { item: "society:hops", storage_block: "", dropCount: 3, growDays: 10, regrowDays: 1, seasons: ["summer", "autumn"], reeseedable: true, products: ["wine"], classifications: ["industrial"] },
    { item: "society:tubabacco_leaf", storage_block: "", dropCount: 1, growDays: 15, regrowDays: 5, seasons: ["spring", "winter"], yearTwo: true, products: [], classifications: ["industrial"] },
    { item: "herbalbrews:rooibos_leaf", storage_block: "", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"] },
    { item: "herbalbrews:coffee_beans", storage_block: "", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["spring"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"] },
    { item: "herbalbrews:yerba_mate_leaf", storage_block: "", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["autumn"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"] },
    { item: "herbalbrews:green_tea_leaf", storage_block: "herbalbrews:green_tea_leaf_block", dropCount: 1, growDays: 6, seasons: ["spring", "summer", "autumn"], lootOnly: true, products: [], classifications: ["industrial"] },
]
global.FORAGE_CROPS = [
    { item: "society:salmonberry", value: 16, storage_block: "society:_crate", products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:boysenberry", value: 12, products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:crystalberry", value: 20, products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:mossberry", value: 96, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:riesling_dry_white", classifications: ["forage_crop", "fruit", "berry"] },
    { item: "minecraft:glow_berries", value: 24, storage_block: "quark:glowberry_sack", products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:glowflower_brew", classifications: ["forage_crop", "fruit", "berry"] },
    { item: "minecraft:chorus_fruit", value: 16, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:polaris_sweet_white", classifications: ["forage_crop", "fruit", "berry"] },
    { item: "atmospheric:yucca_fruit", value: 8, products: ["preserves", "wine"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "atmospheric:currant", value: 8, products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "atmospheric:aloe_leaves", value: 16, products: ["preserves"], classifications: ["forage_crop", "industrial"] },
]
global.MUSHROOMS = [
    { item: "minecraft:brown_mushroom", value: 8 },
    { item: "minecraft:red_mushroom", value: 8 },
    { item: "ribbits:toadstool", value: 20 },
    { item: "nomansland:field_mushroom", value: 12 },
    { item: "nomansland:shelf_mushroom", value: 32 },
    { item: "minecraft:crimson_fungus", value: 16 },
    { item: "minecraft:warped_fungus", value: 16 },
    { item: "darkerdepths:glowshroom", value: 24 },
    { item: "cluttered:blue_roundhead", value: 140 },
    { item: "cluttered:fly_agaric", value: 140 },
]
/**
 *  Logs
 * 
 * Used for: Selling base and stripped variants, as well as tagging
 * 
 * Valid Properties:
 * @property {string} item - Item ID
 * @property {number} no_stripped - Log doesn"t have a stripped variant
 * @property {boolean} value - Sell value
 * 
 */
global.LOGS = [
    { item: "minecraft:oak_log", value: 2 },
    { item: "minecraft:spruce_log", value: 2 },
    { item: "minecraft:birch_log", value: 2 },
    { item: "minecraft:jungle_log", value: 2 },
    { item: "minecraft:dark_oak_log", value: 2 },
    { item: "quark:blossom_log", value: 2 },
    { item: "meadow:pine_log", value: 3 },
    { item: "atmospheric:aspen_log", value: 3 },
    { item: "atmospheric:watchful_aspen_log", value: 6 },
    { item: "atmospheric:crustose_log", value: 4 },
    { item: "atmospheric:kousa_log", value: 3 },
    { item: "atmospheric:laurel_log", value: 3 },
    { item: "atmospheric:yucca_log", value: 3 },
    { item: "atmospheric:morado_log", value: 3 },
    { item: "atmospheric:rosewood_log", value: 3 },
    { item: "atmospheric:grimwood_log", value: 7 },
    // { item: "botania:dreamwood_log", value: 32 },
    // { item: "botania:livingwood_log", value: 16 },
    { item: "minecraft:acacia_log", value: 3 },
    { item: "minecraft:mangrove_log", value: 4 },
    { item: "minecraft:cherry_log", value: 4 },
    { item: "quark:azalea_log", value: 4 },
    { item: "quark:ancient_log", value: 8 },
    { item: "minecraft:warped_stem", value: 16 },
    { item: "minecraft:crimson_stem", value: 16 },
    { item: "vintagedelight:magic_vine", value: 32 },
    { item: "minecraft:pale_oak_log", value: 8 },
    { item: "windswept:holly_log", value: 3 },
    { item: "windswept:chestnut_log", value: 3 },
    { item: "windswept:pine_log", value: 3 },
    { item: "meadow:alpine_birch_log", no_stripped: true, value: 4 },
    { item: "nomansland:pine_log", value: 3 },
    { item: "nomansland:maple_log", value: 3 },
    { item: "nomansland:walnut_log", value: 3 },
    { item: "nomansland:willow_log", value: 3 },
    { item: "cluttered:willow_log", value: 100 },
    { item: "cluttered:poplar_log", value: 8 },
    { item: "cluttered:flowering_poplar_log", value: 12 },
    { item: "cluttered:crabapple_log", value: 8 },
    { item: "cluttered:flowering_crabapple_log", value: 12 },
    { item: "cluttered:sycamore_log", value: 8 },
    { item: "cluttered:fluorescent_maple_log", value: 10 },
]
/**
 *   Minerals
 * 
 *  Used for: Item generation, tagging
 * 
 * Valid Properties:
 * @property {string} item - Item ID
 * @property {"base" | "frozen" | "magma" } geode_type - What type of geode it came from. All will be added to omni geode
 * @property {boolean} disable_item_generation - Does what it says. Mainly for mineral blocks
 * @property {number} value - Sell value
 * 
 */
global.MINERALS = [
    // Base
    { item: "society:allanite", geode_type: "base", value: 128 },
    { item: "society:calcite_gem", geode_type: "base", value: 64 },
    { item: "society:celestine", geode_type: "base", value: 112 },
    { item: "society:earth_crystal", disable_item_generation: true, geode_type: "base", value: 48 },
    { item: "society:granite_slate", geode_type: "base", value: 256 },
    { item: "society:jagoite", geode_type: "base", value: 272 },
    { item: "society:jamborite", geode_type: "base", value: 128 },
    { item: "society:limestone_pebble", geode_type: "base", value: 15 },
    { item: "society:malachite", geode_type: "base", value: 256 },
    { item: "society:mudstone", geode_type: "base", value: 24 },
    { item: "society:nekoite", geode_type: "base", value: 80 },
    { item: "society:orpiment", geode_type: "base", value: 80 },
    { item: "society:petrified_slime", geode_type: "base", value: 128 },
    { item: "society:sandstone_slate", geode_type: "base", value: 64 },
    { item: "society:slate", geode_type: "base", value: 80 },
    { item: "society:thunder_egg", geode_type: "base", value: 256 },
    // Frozen
    { item: "society:aerinite", geode_type: "frozen", value: 128 },
    { item: "society:esperite", geode_type: "frozen", value: 96 },
    { item: "society:fairy_stone", geode_type: "frozen", value: 256 },
    { item: "society:fluorapatite", geode_type: "frozen", value: 200 },
    { item: "society:geminite", geode_type: "frozen", value: 120 },
    { item: "society:ghost_crystal", geode_type: "frozen", value: 200 },
    { item: "society:hematite", geode_type: "frozen", value: 120 },
    { item: "society:kyanite", geode_type: "frozen", value: 256 },
    { item: "society:lunarite", geode_type: "frozen", value: 200 },
    { item: "society:marble", geode_type: "frozen", value: 112 },
    { item: "society:ocean_stone", geode_type: "frozen", value: 224 },
    { item: "society:opal", geode_type: "frozen", value: 120 },
    { item: "society:pyrite", geode_type: "frozen", value: 128 },
    { item: "society:soapstone", geode_type: "frozen", value: 128 },
    { item: "society:frozen_tear", geode_type: "frozen", value: 64 },
    // Magma
    { item: "society:baryte", geode_type: "magma", value: 48 },
    { item: "society:basalt_shard", geode_type: "magma", value: 176 },
    { item: "society:bixbyite", geode_type: "magma", value: 304 },
    { item: "society:dolomite", geode_type: "magma", value: 304 },
    { item: "society:fire_opal", geode_type: "magma", value: 352 },
    { item: "society:fire_quartz", geode_type: "magma", disable_item_generation: true, value: 96 },
    { item: "society:helvite", geode_type: "magma", value: 512 },
    { item: "society:jasper", geode_type: "magma", value: 144 },
    { item: "society:lemon_stone", geode_type: "magma", value: 192 },
    { item: "society:neptunite", geode_type: "magma", value: 400 },
    { item: "society:pure_obsidian", geode_type: "magma", value: 192 },
    { item: "society:star_shards", geode_type: "magma", value: 512 },
    { item: "society:tigerseye", geode_type: "magma", value: 272 },
]
/**
 *   Gems
 * 
 * Used for: Pristine item generation, tagging
 * 
 * Valid Properties:
 * @property {string} item - Item ID
 * @property {string} storage_block - Storage block ID. Assumes 9x of the ingredient used for crafting
 * @property {string} storage_block_mult - Override for storage_block
 * @property {boolean} generate_item - If an item should be generated based on id
 * @property {number} value - Sell value
 * 
 */
global.GEMS = [
    { item: "minecraft:diamond", storage_block: "minecraft:diamond_block", value: 256 },
    { item: "minecraft:lapis_lazuli", storage_block: "minecraft:lapis_block", value: 6 },
    { item: "minecraft:emerald", storage_block: "minecraft:emerald_block", value: 32 },
    { item: "minecraft:amethyst_shard", storage_block: "minecraft:amethyst_block", storage_block_mult: 4, value: 6 },
    { item: "minecraft:quartz", storage_block: "minecraft:quartz_block", storage_block_mult: 4, value: 8 },
    { item: "minecraft:prismarine_crystals", value: 20 },
    { item: "society:aquamarine", generate_item: true, value: 184 },
    { item: "society:ruby", generate_item: true, value: 256 },
    { item: "society:amethyst_chunk", generate_item: true, value: 112 },
    { item: "society:topaz", generate_item: true, value: 192 },
    { item: "society:jade", generate_item: true, value: 512 },
    { item: "society:spinel", generate_item: true, value: 1024 },
    { item: "society:prismatic_shard", storage_block: "society:prismatic_shard_block", generate_item: true, value: 2048 },
]

/**
 *   Artifacts
 * 
 *  Used for: Item generation, tagging
 * 
 * Valid Properties:
 * @property {string} item - Item ID
 * @property {"base" | "frozen" | "magma" } geode_type - What type of geode it came from. All will be added to omni geode
 * @property {number} value - Sell value
 * 
 */
global.ARTIFACTS = [
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
    { item: "society:green_tea_honeycomb", value: 329 },
    { item: "society:toy_train", value: 430 },
    { item: "society:aquamagical_dust", value: 512 },
    { item: "society:wheel_of_adaptation", value: 576 },
    { item: "society:ancient_builders_tool", value: 612 },
    { item: "society:perfect_cherry", value: 777 },
    { item: "society:mini_oni_eye", value: 704 },
    { item: "society:production_science_pack", value: 1024 },
    { item: "society:steamy_gadget", value: 649 },
    { item: "society:giant_bandolier_belt", value: 892 },
    { item: "society:amulet_of_light", value: 1282 },
    { item: "society:beemonican_seal", value: 2560 },
    { item: "society:princess_hairbrush", value: 3584 },
    { item: "society:heart_of_neptunium", value: 4096 },
    { item: "society:token_of_unity", value: 3 },
    { item: "society:red_wrench", value: 233 },
];