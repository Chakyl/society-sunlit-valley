const UNIVERSAL_HATED = [
    "crabbersdelight:jar_of_pickles",
    "windswept:holly_berries",
    "crabbersdelight:sea_pickle_juice",
    "netherdepthsupgrade:lava_pufferfish",
    "netherdepthsupgrade:eyeball_fish",
    "minecraft:pufferfish",
    "autumnity:foul_berries",
    "society:supreme_mayonnaise",
    "society:wraptor_mayonnaise",
    "society:large_duck_mayonnaise",
    "society:turtle_mayonnaise",
    "society:large_mayonnaise",
    "society:mayonnaise",
    "society:penguin_mayonnaise",
    "society:birt_mayonnaise",
    "society:cruncher_mayonnaise",
    "society:parrot_mayonnaise",
    "society:turkey_mayonnaise",
    "minecraft:warped_fungus",
    "society:coconut_oil",
    "farmersdelight:rotten_tomato",
    "minecraft:poisonous_potato",
    "aquaculture:tin_can",
    "society:dried_tubabacco_leaf",
    "minecraft:nether_star",
    "society:tubabacco_leaf",
    "society:large_turkey_mayonnaise",
    "society:petrified_mayonnaise",
    "society:flamingo_mayonnaise",
    "society:duck_mayonnaise",
    "society:goose_mayonnaise",
    "society:large_goose_mayonnaise",
    "society:golden_mayonnaise",
    "society:dragon_mayonnaise",
    "society:sniffer_mayonnaise",
    "society:springling_mayonnaise",
    "farmersdelight:straw",
    "trials:ominous_bottle",
    "minecraft:echo_shard",
    "society:living_flesh",
    "minecraft:popped_chorus_fruit",
    "society:large_galliraptor_mayonnaise",
    "society:galliraptor_mayonnaise",
    "minecraft:dragon_head",
    "minecraft:dragon_egg",
    "vinery:rotten_cherry",
    "minecraft:crimson_fungus",
    "quark:dragon_scale",
    "society:mini_oni_eye",
    "society:rubber",
    "society:sap"
]
const UNIVERSAL_DISLIKED = [
    "#society:raw_logs",
    "create:experience_block",
    "create:experience_nugget",
    "snowpig:frozen_ham",
    "society:oil",
    "snowpig:frozen_porkchop",
    "twigs:bamboo_thatch",
    "automobility:dash_panel",
    "netherdepthsupgrade:bonefish",
    "netherdepthsupgrade:wither_bonefish",
    "society:magma_geode",
    "society:omni_geode",
    "society:frozen_geode",
    "society:battery",
    "society:oak_resin",
    "society:pine_tar",
    "beachparty:palm_log",
    "atmospheric:carmine_husk",
    "untitledduckmod:goose_foot",
    "society:geode",
    "aquaculture:box",
    "vintagedelight:ghost_charcoal",
    "trials:trial_key_ominous",
    "trials:trial_key",
    "farmersdelight:nether_salad",
    "vintagedelight:century_egg",
    "crabbersdelight:kelp_shake",
    "society:sturdy_bamboo_block"
]
const UNIVERSAL_LIKED = [
    "#etcetera:sweaters",
    "#etcetera:hats",
    "#society:mineral",
    "#forge:gems",
    "#society:pristine_mineral",
    "minecraft:totem_of_undying",
    "atmospheric:candied_orange_slices",
    "quark:diamond_heart",
    "society:mossberry",
    "society:mossberry_stew",
    "crabbersdelight:pearl",
    "society:furniture_box",
    "society:ancient_cookie"
]
const UNIVERSAL_LOVED = [
    "society:prismatic_shard",
    "minecraft:rabbit_foot",
    "herbalbrews:oolong_tea",
    "society:sunlit_pearl",
    "vinery:jellie_wine",
    "society:gnome",
    "society:bowl_of_soul",
    "crabbersdelight:pearl_block"
]

const villagerSpecificGifts = new Map([
    ["shepherd", {
        loved: ["society:mossberry", "society:spider_silk", "society:mocha", "society:dirty_chai", "society:merino_wool"],
        liked: ["herbalbrews:cinnamon_coffee", "society:cranberry", "society:boysenberry", "society:crystalberry", "society:salmonberry"],
        neutral: [],
        disliked: ["#society:mineral"],
        hated: ["#minecraft:flowers", "#forge:raw_meat", "#minecraft:fishes"],
    }],
    ["banker", {
        loved: ["society:legendary_ink", "wildernature:bison_horn", "candlelight:beef_wellington", "society:aged_goat_cheese_block", "meadow:goat_cheese_block"],
        liked: ["society:truffle_oil", "meadow:piece_of_goat_cheese", "society:mystic_syrup", "windswept:goat_stew", "society:ancient_vespertine"],
        neutral: [],
        disliked: ["#society:farmer_product"],
        hated: ["society:energy_drink", "supplementaries:candy"],
    }],
    ["blacksmith", {
        loved: ["society:ember_crystal_cluster", "crittersandcompanions:dragonfly_wing", "windswept:lavender", "herbalbrews:hazelnut_coffee", "bakery:hazelnut_ella"],
        liked: ["#minecraft:flowers", "#forge:raw_materials", "pamhc2trees:hazelnutitem", "pamhc2trees:roastedhazelnutitem"],
        neutral: [],
        disliked: [],
        hated: [],
    }],
    ["carpenter", {
        loved: ["#gamediscs:game_discs", "society:steamy_gadget", "society:mossberry_stew", "trials:heavy_core", "vintagedelight:deluxe_granola_bar"],
        liked: ["vintagedelight:chocolate_nut_granola_bar", "vintagedelight:fruity_granola_bar", "vinery:straw_hat", "society:mossberry", "create:honeyed_apple"],
        neutral: ["#society:raw_logs"],
        disliked: [],
        hated: [],
    }],
    ["fisher", {
        loved: ["unusualfishmod:cooked_aero_mono_stick", "society:princess_hairbrush", "vintagedelight:century_egg", "society:aquamagical_dust", "society:heart_of_neptunium", "minecraft:heart_of_the_sea"],
        liked: ["#minecraft:fishes", "minecraft:nautilus_shell", "minecraft:echo_shard", "crittersandcompanions:clam", "botania:black_lotus", "#minecraft:decorated_pot_sherds"],
        neutral: [],
        disliked: [],
        hated: [],
    }],
    ["market", {
        loved: ["#vinery:red_wine","society:glitched_vhs", "windswept:elder_feather", "society:latte", "society:tubasmoke_carton", "society:ancient_vespertine"],
        liked: ["society:tubasmoke_stick", "society:energy_drink", "supplementaries:antique_ink", "herbalbrews:coffee", "untitledduckmod:duck_feather"],
        neutral: [],
        disliked: [],
        hated: ["herbalbrews:milk_coffee", "society:death_liquid"],
    }]
]);

const includesItemOrHasTag = (array, item) => {
    if (array.length === 0) return false;
    let result = false;
    array.forEach((element) => {
        if (!result) {
            if (element.includes("#")) {
                result = Item.of(item).hasTag(element.slice(1))
            } else {
                result = element.equals(item)
            }
        }
    });
    return result;
}

global.getVillagerGiftResult = (npcId, gift) => {
    const giftDefs = villagerSpecificGifts.get(npcId)
    if (giftDefs) {
        if (includesItemOrHasTag(giftDefs.hated, gift)) return "hated";
        if (includesItemOrHasTag(giftDefs.disliked, gift)) return "disliked";
        if (includesItemOrHasTag(giftDefs.neutral, gift)) return "neutral";
        if (includesItemOrHasTag(giftDefs.liked, gift)) return "liked";
        if (includesItemOrHasTag(giftDefs.loved, gift)) return "loved";
    }
    if (includesItemOrHasTag(UNIVERSAL_HATED, gift)) return "hated";
    if (includesItemOrHasTag(UNIVERSAL_DISLIKED, gift)) return "disliked";
    if (includesItemOrHasTag(UNIVERSAL_LIKED, gift)) return "liked";
    if (includesItemOrHasTag(UNIVERSAL_LOVED, gift)) return "loved";
    return "neutral"
}