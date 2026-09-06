// priority: -20
global.CROP_DEFINITIONS = [
    // Vegetables
    { item: "veggiesdelight:turnip", storageBlock: "veggiesdelight:turnip_crate", dropCount: 1, growDays: 4, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:turnip_crop" },
    { item: "veggiesdelight:cauliflower", storageBlock: "veggiesdelight:cauliflower_crate", dropCount: 1, growDays: 10, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:cauliflower_crop" },
    { item: "minecraft:potato", storageBlock: "farmersdelight:potato_crate", dropCount: [3, 6], growDays: 7, seasons: ["spring"], products: ["preserves", "pickle", "wine"], wine: "kaleidoscope_tavern:vodka", classifications: ["vegetable"], cropBlock: "minecraft:potatoes" },
    { item: "farmersdelight:onion", storageBlock: "farmersdelight:onion_crate", dropCount: [1, 4], growDays: 8, seasons: ["spring"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "farmersdelight:onions" },
    { item: "veggiesdelight:garlic", storageBlock: "veggiesdelight:garlic_crate", dropCount: 1, growDays: 5, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:garlic_crop" },
    { item: "vintagedelight:cucumber", storageBlock: "vintagedelight:cucumber_crate", dropCount: 1, growDays: 10, regrowDays: 3, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:cucumber_crop" },
    { item: "farmersdelight:cabbage", storageBlock: "farmersdelight:cabbage_crate", dropCount: 1, growDays: 8, seasons: ["spring"], products: [], classifications: ["vegetable"], cropBlock: "farmersdelight:cabbages" },

    { item: "farmersdelight:tomato", storageBlock: "farmersdelight:tomato_crate", dropCount: [2, 3], growDays: 6, regrowDays: 3, seasons: ["spring", "summer"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "farmersdelight:tomatoes" },

    { item: "veggiesdelight:bellpepper", storageBlock: "veggiesdelight:bellpepper_crate", dropCount: 1, growDays: 7, regrowDays: 3, seasons: ["summer"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:bellpepper_crop" },
    { item: "vintagedelight:ghost_pepper", storageBlock: "vintagedelight:ghost_pepper_crate", dropCount: [1, 3], growDays: 7, regrowDays: 3, seasons: ["summer"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "vintagedelight:ghost_pepper_crop" },
    { item: "minecraft:carrot", storageBlock: "farmersdelight:carrot_crate", dropCount: [1, 2], growDays: 7, seasons: ["summer"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "minecraft:carrots" },
    { item: "veggiesdelight:zucchini", storageBlock: "veggiesdelight:zucchini_crate", dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:zucchini_crop" },

    { item: "culturaldelights:corn_cob", storageBlock: "culturaldelights:corn_cob_crate", dropCount: 1, growDays: 12, regrowDays: 4, seasons: ["summer", "autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "culturaldelights:corn" },

    { item: "minecraft:beetroot", storageBlock: "farmersdelight:beetroot_crate", dropCount: 1, growDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "minecraft:beetroots" },
    { item: "veggiesdelight:sweet_potato", storageBlock: "veggiesdelight:sweet_potato_crate", dropCount: [2, 4], growDays: 12, seasons: ["autumn"], yearTwo: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:sweet_potato_crop" },
    { item: "minecraft:pumpkin", brokenblock: "farmersdelight:pumpkin_slice", dropCount: 1, growDays: 7, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "minecraft:pumpkin_stem" },
    { item: "culturaldelights:eggplant", storageBlock: "culturaldelights:eggplant_crate", dropCount: 1, growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "culturaldelights:eggplants" },
    { item: "veggiesdelight:broccoli", storageBlock: "veggiesdelight:broccoli_crate", dropCount: [1, 2], growDays: 5, seasons: ["autumn"], lootOnly: true, products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "veggiesdelight:broccoli_crop" },
    { item: "vintagedelight:peanut", storageBlock: "vintagedelight:peanut_crate", dropCount: [1, 3], growDays: 7, seasons: ["autumn"], yearTwo: true, products: ["preserves"], classifications: ["nut"], cropBlock: "vintagedelight:peanut_crop" },

    { item: "windswept:ginger_root", storageBlock: "windswept:ginger_root_crate", dropCount: 1, growDays: 7, seasons: ["winter"], products: ["preserves", "pickle"], classifications: ["vegetable"], cropBlock: "windswept:ginger" },

    // Fruit
    { item: "society:strawberry", storageBlock: "society:strawberry_crate", dropCount: [1, 2], growDays: 8, regrowDays: 4, seasons: ["spring"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"] },
    { item: "society:sparkpod", storageBlock: "society:sparkpod_crate", dropCount: 1, growDays: 8, seasons: ["spring"], customMult: 1.5, products: ["preserves", "wine", "dried"], classifications: ["fruit"], cropBlock: "society:sparkpod" },
    { item: "minecraft:sweet_berries", storageBlock: "quark:berry_sack", dropCount: [2, 3], growDays: 3, regrowDays: 1, seasons: ["spring"], reeseedable: true, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:sweet_berry_wine", classifications: ["fruit", "berry"], cropBlock: "minecraft:sweet_berry_bush" },

    { item: "minecraft:melon", brokenblock: "minecraft:melon_slice", dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:watermelon_juice", classifications: ["fruit"], cropBlock: "minecraft:melon_stem" },
    { item: "society:blueberry", storageBlock: "society:blueberry_crate", dropCount: [3, 4], growDays: 13, regrowDays: 4, seasons: ["summer"], products: ["preserves", "wine", "dried"], classifications: ["fruit"], cropBlock: "society:blueberry" },

    { item: "society:cranberry", storageBlock: "society:cranberry_crate", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:carignan", classifications: ["fruit", "berry"], cropBlock: "society:cranberry" },
    { item: "vintagedelight:gearo_berry", storageBlock: "vintagedelight:gearo_berry_bag", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"], cropBlock: "vintagedelight:gearo_berry_bush" },

    { item: "windswept:wild_berries", storageBlock: "windswept:wild_berry_basket", dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["winter"], products: ["preserves", "wine", "dried"], classifications: ["fruit", "berry"], cropBlock: "windswept:wild_berry_bush" },

    { item: "society:ancient_fruit", storageBlock: "society:ancient_fruit_crate", dropCount: 1, growDays: 30, regrowDays: 7, seasons: ["spring", "summer", "autumn"], customMult: 2, products: ["preserves", "wine", "dried"], classifications: ["fruit"], cropBlock: "society:ancient_fruit" },

    { item: "minecraft:cocoa_beans", storageBlock: "quark:cocoa_beans_sack", dropCount: 1, growDays: 7, seasons: ["summer"], products: [], classifications: ["fruit"], cropBlock: "" },
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

    { item: "minecraft:wheat", storageBlock: "minecraft:hay_block", dropCount: 1, growDays: 5, seasons: ["summer", "autumn"], products: ["wine"], wine: "kaleidoscope_tavern:whiskey", classifications: ["grain"], cropBlock: "minecraft:wheat" },
    { item: "farmersdelight:rice", storageBlock: "farmersdelight:rice_bag", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer", "autumn"], reeseedable: true, products: [], classifications: ["grain"], cropBlock: "farmersdelight:rice" },

    { item: "society:hops", storageBlock: "", dropCount: 3, growDays: 10, regrowDays: 1, seasons: ["summer", "autumn"], reeseedable: true, products: ["wine"], classifications: ["industrial"], cropBlock: "society:hops" },
    { item: "society:tubabacco_leaf", storageBlock: "society:tubabacco_leaf_block", dropCount: 1, growDays: 15, regrowDays: 5, seasons: ["spring", "winter"], yearTwo: true, products: [], classifications: ["industrial"], cropBlock: "society:tubabacco_leaf" },
    { item: "herbalbrews:rooibos_leaf", storageBlock: "herbalbrews:rooibos_leaf_block", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"], cropBlock: "herbalbrews:rooibos_plant" },
    { item: "herbalbrews:coffee_beans", storageBlock: "herbalbrews:coffee_beans_sack", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["spring"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"], cropBlock: "herbalbrews:coffee_plant" },
    { item: "herbalbrews:yerba_mate_leaf", storageBlock: "herbalbrews:yerba_mate_leaf_block", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["autumn"], reeseedable: true, lootOnly: true, products: [], classifications: ["industrial"], cropBlock: "herbalbrews:yerba_mate_plant" },
    { item: "herbalbrews:green_tea_leaf", storageBlock: "herbalbrews:green_tea_leaf_block", dropCount: 1, growDays: 6, seasons: ["spring", "summer", "autumn"], lootOnly: true, products: [], classifications: ["industrial"], cropBlock: "herbalbrews:tea_plant" },
]
global.FORAGE_CROPS = [
    { item: "society:salmonberry", value: 16, storageBlock: "society:_crate", products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:boysenberry", value: 12, products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:crystalberry", value: 20, products: ["preserves", "wine", "dried"], classifications: ["forage_crop", "fruit", "berry"] },
    { item: "society:mossberry", value: 96, products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:riesling_dry_white", classifications: ["forage_crop", "fruit", "berry"] },
    { item: "minecraft:glow_berries", value: 24, storageBlock: "quark:glowberry_sack", products: ["preserves", "wine", "dried"], wine: "kaleidoscope_tavern:glowflower_brew", classifications: ["forage_crop", "fruit", "berry"] },
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
global.EGGS = [
    // Eggs
    { item: "minecraft:egg", value: 4 },
    { item: "minecraft:brown_egg", value: 4 },
    { item: "minecraft:blue_egg", value: 4 },
    { item: "untitledduckmod:duck_egg", value: 8 },
    { item: "untitledduckmod:goose_egg", value: 16 },
    // { item: "autumnity:turkey_egg", value: 32 },
    { item: "minecraft:turtle_egg", value: 64 },
    { item: "minecraft:sniffer_egg", value: 192 },
    // { item: "species:petrified_egg", value: 256 },
    { item: "society:large_egg", value: 32 },
    { item: "society:large_duck_egg", value: 48 },
    { item: "society:large_goose_egg", value: 64 },
    { item: "society:large_turkey_egg", value: 96 },
    // { item: "species:birt_egg", value: 12 },
    // { item: "species:wraptor_egg", value: 40 },
    // { item: "species:springling_egg", value: 128 },
    { item: "society:penguin_egg", value: 128 },
    { item: "society:flamingo_egg", value: 256 },
]
global.MILK = [
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

]
global.MEAT = [
    { item: "minecraft:beef", value: 16 },
    { item: "minecraft:porkchop", value: 32 },
    { item: "snowpig:frozen_porkchop", value: 64 },
    { item: "minecraft:mutton", value: 16 },
    { item: "minecraft:chicken", value: 8 },
    { item: "untitledduckmod:raw_duck", value: 16 },
    { item: "quark:crab_leg", value: 24 },
    { item: "quark:crab_shell", value: 40 },
    { item: "meadow:raw_buffalo_meat", value: 32 },
    { item: "farmersdelight:ham", value: 64 },
    { item: "minecraft:rabbit", value: 64 },
    { item: "untitledduckmod:raw_goose", value: 16 },
    // { item: "autumnity:turkey", value: 32 },
    { item: "windswept:goat", value: 40 },
    { item: "atmospheric:carmine_husk", value: 10 },
    // { item: "crabbersdelight:raw_squid_tentacles", value: 16 },
    // { item: "crabbersdelight:squid_barrel", value: 144 },
    // { item: "crabbersdelight:raw_glow_squid_tentacles", value: 32 },
    // { item: "crabbersdelight:glow_squid_barrel", value: 288 },
    // { item: "crabbersdelight:raw_frog_leg", value: 40 },
    // { item: "crabbersdelight:frog_leg_barrel", value: 360 },
    { item: "wildernature:cassowary_meat", value: 90 },
    { item: "wildernature:venison", value: 48 },
    { item: "wildernature:bison_meat", value: 64 },
    { item: "wildernature:pelican_meat", value: 32 },
    { item: "snowpig:frozen_ham", value: 128 },
    { item: "buzzier_bees:glazed_porkchop", value: 144 },
]
global.MISC_ANIMAL_PRODUCTS = [
    { item: "minecraft:honey_bottle", value: 8 },
    { item: "minecraft:honey_block", value: 24 },
    { item: "minecraft:honeycomb", value: 4 },
    { item: "minecraft:honeycomb_block", value: 16 },
    { item: "golemoverhaul:honey_blob", value: 72 },
    { item: "buzzier_bees:bee_bottle", value: 16 },
    { item: "etcetera:cotton_flower", value: 24 },
    { item: "society:butterfly_amber", value: 64 },
    { item: "society:moth_pollen", value: 128 }, 
    { item: "society:caterpillar_eggs", value: 132 },
    { item: "minecraft:leather", value: 8 },
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
    { item: "snuffles:frosty_fluff", value: 64 }
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
 * @property {"base" | "frozen" | "magma" } geodeType - What type of geode it came from. All will be added to omni geode
 * @property {boolean} disableItemGeneration - Does what it says. Mainly for mineral blocks
 * @property {number} value - Sell value
 * 
 */
global.MINERALS = [
    // Base
    { item: "society:allanite", geodeType: "base", value: 128 },
    { item: "society:calcite_gem", geodeType: "base", value: 64 },
    { item: "society:celestine", geodeType: "base", value: 112 },
    { item: "society:earth_crystal", disableItemGeneration: true, geodeType: "base", value: 48 },
    { item: "society:granite_slate", geodeType: "base", value: 256 },
    { item: "society:jagoite", geodeType: "base", value: 272 },
    { item: "society:jamborite", geodeType: "base", value: 128 },
    { item: "society:limestone_pebble", geodeType: "base", value: 15 },
    { item: "society:malachite", geodeType: "base", value: 256 },
    { item: "society:mudstone", geodeType: "base", value: 24 },
    { item: "society:nekoite", geodeType: "base", value: 80 },
    { item: "society:orpiment", geodeType: "base", value: 80 },
    { item: "society:petrified_slime", geodeType: "base", value: 128 },
    { item: "society:sandstone_slate", geodeType: "base", value: 64 },
    { item: "society:slate", geodeType: "base", value: 80 },
    { item: "society:thunder_egg", geodeType: "base", value: 256 },
    // Frozen
    { item: "society:aerinite", geodeType: "frozen", value: 128 },
    { item: "society:esperite", geodeType: "frozen", value: 96 },
    { item: "society:fairy_stone", geodeType: "frozen", value: 256 },
    { item: "society:fluorapatite", geodeType: "frozen", value: 200 },
    { item: "society:geminite", geodeType: "frozen", value: 120 },
    { item: "society:ghost_crystal", geodeType: "frozen", value: 200 },
    { item: "society:hematite", geodeType: "frozen", value: 120 },
    { item: "society:kyanite", geodeType: "frozen", value: 256 },
    { item: "society:lunarite", geodeType: "frozen", value: 200 },
    { item: "society:marble", geodeType: "frozen", value: 112 },
    { item: "society:ocean_stone", geodeType: "frozen", value: 224 },
    { item: "society:opal", geodeType: "frozen", value: 120 },
    { item: "society:pyrite", geodeType: "frozen", value: 128 },
    { item: "society:soapstone", geodeType: "frozen", value: 128 },
    { item: "society:frozen_tear", geodeType: "frozen", value: 64 },
    // Magma
    { item: "society:baryte", geodeType: "magma", value: 48 },
    { item: "society:basalt_shard", geodeType: "magma", value: 176 },
    { item: "society:bixbyite", geodeType: "magma", value: 304 },
    { item: "society:dolomite", geodeType: "magma", value: 304 },
    { item: "society:fire_opal", geodeType: "magma", value: 352 },
    { item: "society:fire_quartz", geodeType: "magma", disableItemGeneration: true, value: 96 },
    { item: "society:helvite", geodeType: "magma", value: 512 },
    { item: "society:jasper", geodeType: "magma", value: 144 },
    { item: "society:lemon_stone", geodeType: "magma", value: 192 },
    { item: "society:neptunite", geodeType: "magma", value: 400 },
    { item: "society:pure_obsidian", geodeType: "magma", value: 192 },
    { item: "society:star_shards", geodeType: "magma", value: 512 },
    { item: "society:tigerseye", geodeType: "magma", value: 272 },
]
/**
 *   Gems
 * 
 * Used for: Pristine item generation, tagging
 * 
 * Valid Properties:
 * @property {string} item - Item ID
 * @property {string} storageBlock - Storage block ID. Assumes 9x of the ingredient used for crafting
 * @property {string} storageBlockMult - Override for storageBlock
 * @property {boolean} generateItem - If an item should be generated based on id
 * @property {number} value - Sell value
 * 
 */
global.GEMS = [
    { item: "minecraft:diamond", storageBlock: "minecraft:diamond_block", value: 256 },
    { item: "minecraft:lapis_lazuli", storageBlock: "minecraft:lapis_block", value: 6 },
    { item: "minecraft:emerald", storageBlock: "minecraft:emerald_block", value: 32 },
    { item: "minecraft:amethyst_shard", storageBlock: "minecraft:amethyst_block", storageBlockMult: 4, value: 6 },
    { item: "minecraft:quartz", storageBlock: "minecraft:quartz_block", storageBlockMult: 4, value: 8 },
    { item: "minecraft:prismarine_crystals", value: 20 },
    { item: "society:aquamarine", generateItem: true, value: 184 },
    { item: "society:ruby", generateItem: true, value: 256 },
    { item: "society:amethyst_chunk", generateItem: true, value: 112 },
    { item: "society:topaz", generateItem: true, value: 192 },
    { item: "society:jade", generateItem: true, value: 512 },
    { item: "society:spinel", generateItem: true, value: 1024 },
    { item: "society:prismatic_shard", storageBlock: "society:prismatic_shard_block", generateItem: true, value: 2048 },
]

/**
 *   Artifacts
 * 
 *  Used for: Item generation
 * 
 * Valid Properties:
 * @property {string} item - Item ID
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

global.getSaleData = (value, processors) => {
    return {
        "base_value": value,
        "processors": [
            {
                "type": "selling_bin:quality_foods_processor",
                "quality_type": {
                    "quality_food:diamond": 2.0,
                    "quality_food:gold": 1.5,
                    "quality_food:iron": 1.25
                }
            }
        ]
    }
}