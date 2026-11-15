// Server Scripts
// Editing misc tags

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
    [
        "everycomp:bd/nomansland/willow_blinds",
        "everycomp:bd/darkerdepths/petrified_blinds",
        "everycomp:bd/minecraft/poplar_blinds",
        "everycomp:bd/nomansland/walnut_blinds",
        "everycomp:bd/nomansland/pine_blinds",
        "everycomp:bd/nomansland/maple_blinds"
    ].forEach((blind) => {
        e.add("beautify:blinds", blind);
    });
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
    // [
    // ].forEach((gate) => {
    //     e.add("minecraft:fences", gate);
    // });
})
