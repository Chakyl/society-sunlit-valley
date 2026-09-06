// Server Scripts
// Editing misc tags

ServerEvents.tags('item', (e) => {
    e.add('oreganized:stone_types/glance', 'oreganized:glance')
    e.add("society:prismatic_shard", "society:prismatic_shard")
})

ServerEvents.tags('block', (e) => {
    e.add('c:end_stones', 'society:skull_end_stone')
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
})
