// Server Scripts
// Editing misc tags
const rawLogs = [
    "minecraft:oak_log",
    "minecraft:dark_oak_log",
    "minecraft:mangrove_log",
    "minecraft:spruce_log",
    "minecraft:acacia_log",
    "minecraft:birch_log",
    "minecraft:jungle_log",
    "minecraft:cherry_log",
    "minecraft:poplar_log",
    "windswept:chestnut_log",
    "windswept:holly_log",
    "windswept:pine_log",
    "windswept:weathered_pine_log",
    "quark:blossom_log",
    "quark:ancient_log",
    "quark:azalea_log",
    "meadow:pine_log",
    "atmospheric:rosewood_log",
    "atmospheric:morado_log",
    "atmospheric:yucca_log",
    "atmospheric:laurel_log",
    "atmospheric:aspen_log",
    "atmospheric:watchful_aspen_log",
    "atmospheric:kousa_log",
    "atmospheric:crustose_log",
    "atmospheric:grimwood_log",
    "vintagedelight:magic_vine",
    "minecraft:pale_oak_log",
    "cluttered:willow_log",
    "cluttered:flowering_willow_log",
    "cluttered:poplar_log",
    "cluttered:flowering_poplar_log",
    "cluttered:crabapple_log",
    "cluttered:flowering_crabapple_log",
    "cluttered:sycamore_log",
    "cluttered:fluorescent_maple_log",
    "cluttered:blue_mushroom_log",
    "cluttered:red_mushroom_log",
    "minecraft:warped_stem",
    "minecraft:crimson_stem",
    'nomansland:pine_log', 
    'nomansland:maple_log', 
    'nomansland:walnut_log', 
    'nomansland:willow_log'
];
ServerEvents.tags('item', (e) => {
    e.add("oreganized:stone_types/glance", "oreganized:glance");
    e.add("society:prismatic_shard", "society:prismatic_shard");
    [
        "etcetera:cotton",
        "society:carrot_seeds",
        "society:garlic_seeds",
        "society:ginger_seeds",
        "society:onion_seeds",
        "society:peanut_seeds",
        "society:potato_seeds",
        "society:sweet_potato_seeds",
        "culturaldelights:eggplant_seeds"
    ].forEach((item) => {
        e.add("c:seeds", item);
    });
    [
        "society:yard_work_yearly",
        "society:husbandry_hourly",
        "society:mining_monthly",
        "society:foraging_fortnightly",
        "society:wet_weekly",
        "society:combat_quarterly",
    ].forEach((item) => {
        e.add("society:skill_xp_book", item);
    });
    [
        "society:large_egg",
        "society:large_duck_egg",
        "society:large_goose_egg",
        "society:large_turkey_egg",
        "society:penguin_egg",
        "society:flamingo_egg"
    ].forEach((egg) => {
        e.add("society:large_eggs", egg);
    });
    rawLogs.forEach((log) => {
        e.add("society:raw_logs", log);
    });
    [
        "kaleidoscope_tavern:wine",
        "kaleidoscope_tavern:vodka",
        "kaleidoscope_tavern:brandy",
        "kaleidoscope_tavern:carignan",
        "kaleidoscope_tavern:sakura_wine",
        "kaleidoscope_tavern:plum_wine",
        "kaleidoscope_tavern:whiskey",
        "kaleidoscope_tavern:ice_wine",
        "kaleidoscope_tavern:polaris_sweet_white",
        "kaleidoscope_tavern:honey_wine",
        "kaleidoscope_tavern:red_queen",
        "kaleidoscope_tavern:rum",
        "kaleidoscope_tavern:riesling_dry_white",
        "kaleidoscope_tavern:sunset_glow",
        "kaleidoscope_tavern:madame_shexiang",
        "kaleidoscope_tavern:sweet_berry_wine",
        "kaleidoscope_tavern:sherry",
        "kaleidoscope_tavern:luminous_bride",
        "kaleidoscope_tavern:glowflower_brew",
        "kaleidoscope_tavern:sauvignon_blanc_dry_white",
        "kaleidoscope_tavern:watermelon_juice",
        "kaleidoscope_tavern:vinegar"
    ].forEach((ingredient) => {
        e.add("society:keg_product", ingredient)
    });
    e.add('species:fossil_stand', 'species:fossil_stand');
})

ServerEvents.tags('block', (e) => {
    e.add("c:end_stones", "society:skull_end_stone");
    e.add("society:opens_tanuki_catalog", "society:tanuki_catalog");
    e.add("society:opens_fantasy_catalog", "society:fantasy_catalog");
    e.add("society:opens_modern_catalog", "society:modern_catalog");
    [
        "whimsy_deco:phone",
        "whimsy_deco:red_phone",
        "whimsy_deco:black_phone",
        "whimsy_deco:blue_phone",
        "tanukidecor:antique_phone"
    ].forEach((item) => {
        e.add("society_trading:opens_shop_selector", item);
    });

    [
        "minecraft:crafting_table",
        "numismatics:andesite_depositor",
        "numismatics:brass_depositor",
        "numismatics:vendor",
        "numismatics:creative_vendor",
        "numismatics:bank_terminal",
        "refurbished_furniture:post_box",
        "bountiful:bountyboard",
        "tanukidecor:slot_machine",
        "whimsy_deco:gatcha_machine",
        "whimsy_deco:black_atm",
        "whimsy_deco:blue_atm",
        "whimsy_deco:red_atm",
        "whimsy_deco:yellow_atm",
        "whimsy_deco:green_atm",
        "whimsy_deco:blue_phone",
        "whimsy_deco:black_phone",
        "whimsy_deco:red_phone",
        "tanukidecor:antique_phone",
        "lootr:lootr_chest",
        "lootr:lootr_barrel",
        "lootr:lootr_trapped_chest"
    ].forEach((item) => {
        e.add("ftbchunks:interact_whitelist", item);
    });
    [
        "darkerdepths:petrified_fence_gate",
        "meadow:pine_fence_gate",
        "quark:ancient_fence_gate",
        "quark:azalea_fence_gate",
        "quark:nether_brick_fence_gate",
        "cluttered:chalcedony_picket_fence_gate",
        "cluttered:deep_chalcedony_picket_fence_gate",
        "cluttered:marble_picket_fence_gate",
        "cluttered:wooden_picket_fence_gate"
    ].forEach((gate) => {
        e.add("minecraft:fence_gates", gate);
    });
    rawLogs.forEach((log) => {
        e.add("society:raw_logs", log);
    });
    // [
    // ].forEach((gate) => {
    //     e.add("minecraft:fences", gate);
    // });
})
