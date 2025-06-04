// priority: 0
console.info("[SOCIETY] handleItemBlockFluidTags.js loaded");

ServerEvents.tags("item", (e) => {
  const stripTags = [
    "sewingkit:bone_sewing_needle",
    "sewingkit:diamond_sewing_needle",
    "sewingkit:netherite_sewing_needle",
    "sewingkit:wood_sewing_needle",
    "sewingkit:gold_sewing_needle",
    "refurbished_furniture:knife",
    "vintagedelight:cheese_wheel",
    "vintagedelight:oat_dough",
    "vintagedelight:oat_seeds",
    "vintagedelight:raw_oats",
    "vintagedelight:salt_dust",
    "vintagedelight:cheese_curds",
    "vintagedelight:cheese_slice",
    "vintagedelight:wild_oats",
    "vintagedelight:oat",
    "vintagedelight:oat_bag",
    "farm_and_charm:chicken_parts",
    "farmersdelight:carrot_crate",
    "farmersdelight:rich_soil",
    "farm_and_charm:bacon",
    "farmersdelight:onion",
    "farm_and_charm:tomato_seeds",
    "farm_and_charm:rotten_tomato",
    "farm_and_charm:tomato",
    "farmersdelight:organic_compost",
    "farmersdelight:wild_cabbages",
    "farmersdelight:wild_beetroots",
    "farmersdelight:rich_soil_farmland",
    "farmersdelight:wild_onions",
    "farmersdelight:tomato_seeds",
    "farmersdelight:raw_pasta",
    "farmersdelight:wild_rice",
    "farmersdelight:bacon_and_eggs",
    "farmersdelight:wild_carrots",
    "farmersdelight:dog_food",
    "farmersdelight:horse_feed",
    "farmersdelight:wild_potatoes",
    "farmersdelight:cabbage_crate",
    "farmersdelight:tomato_crate",
    "farmersdelight:beetroot_crate",
    "farmersdelight:onion_crate",
    "farmersdelight:potato_crate",
    "farmersdelight:wheat_dough",
    "create:dough",
    "autumnity:syrup_bottle",
    "candlelight:mozzarella",
    "quark:rope",
    "brewery:hops_seeds",
    "farm_and_charm:strawberry_seed",
    "pamhc2trees:orangeitem",
    "veggiesdelight:dandelion_leaf",
    "pamhc2trees:gooseberry_sapling",
    "pamhc2trees:chestnut_sapling",
    "pamhc2trees:avocado_sapling",
    "pamhc2trees:candlenut_sapling",
    "pamhc2trees:acorn_sapling",
    "pamhc2trees:soursop_sapling",
    "pamhc2trees:spiderweb_sapling",
    "pamhc2trees:walnut_sapling",
    "pamhc2trees:pear_sapling",
    "pamhc2trees:nutmeg_sapling",
    "pamhc2trees:grapefruit_sapling",
    "pamhc2trees:pomegranate_sapling",
    "pamhc2trees:guava_sapling",
    "pamhc2trees:jackfruit_sapling",
    "pamhc2trees:tamarind_sapling",
    "pamhc2trees:maple_sapling",
    "pamhc2trees:pinenut_sapling",
    "pamhc2trees:rambutan_sapling",
    "pamhc2trees:olive_sapling",
    "pamhc2trees:papaya_sapling",
    "pamhc2trees:paperbark_sapling",
    "pamhc2trees:pecan_sapling",
    "pamhc2trees:peppercorn_sapling",
    "pamhc2trees:persimmon_sapling",
    "pamhc2trees:pistachio_sapling",
    "pamhc2trees:breadfruit_sapling",
    "pamhc2trees:vanillabean_sapling",
    "pamhc2trees:almond_sapling",
    "pamhc2trees:apricot_sapling",
    "pamhc2trees:cashew_sapling",
    "pamhc2trees:coconut_sapling",
    "pamhc2trees:date_sapling",
    "pamhc2trees:durian_sapling",
    "pamhc2trees:fig_sapling",
    "pamhc2trees:lime_sapling",
    "pamhc2trees:rambutanitem",
    "pamhc2trees:tamarinditem",
    "pamhc2trees:passionfruititem",
    "pamhc2trees:papayaitem",
    "pamhc2trees:guavaitem",
    "pamhc2trees:pecanitem",
    "pamhc2trees:durianitem",
    "pamhc2trees:dateitem",
    "pamhc2trees:breadfruititem",
    "pamhc2trees:coconutitem",
    "pamhc2trees:pistachioitem",
    "pamhc2trees:jackfruititem",
    "pamhc2trees:persimmonitem",
    "pamhc2trees:walnutitem",
    "pamhc2trees:avocadoitem",
    "pamhc2trees:gooseberryitem",
    "pamhc2trees:figitem",
    "pamhc2trees:vanillabeanitem",
    "pamhc2trees:almonditem",
    "pamhc2trees:acornitem",
    "pamhc2trees:pinenut_sapling",
    "pamhc2trees:candlenutitem",
    "pamhc2trees:nutmegitem",
    "pamhc2trees:cashewitem",
    "pamhc2trees:pomegranateitem",
    "pamhc2trees:peppercornitem",
    "pamhc2trees:limeitem",
    "pamhc2trees:oliveitem",
    "pamhc2trees:soursopitem",
    "pamhc2trees:cherryitem",
    "pamhc2trees:apricotitem",
    "pamhc2trees:pearitem",
    "pamhc2trees:maplesyrupitem",
    "pamhc2trees:roastedpecanitem",
    "pamhc2trees:pinenutitem",
    "pamhc2trees:roastedchestnutitem",
    "pamhc2trees:roastedwalnutitem",
    "pamhc2trees:roastedalmonditem",
    "pamhc2trees:roastedcashewitem",
    "pamhc2trees:roastedpistachioitem",
    "pamhc2trees:roastedpinenutitem",
    "pamhc2trees:roastedacornitem",
    "pamhc2trees:pamrambutan",
    "pamhc2trees:pamtamarind",
    "pamhc2trees:pampinenut",
    "pamhc2trees:pammaple",
    "pamhc2trees:grapefruititem",
    "pamhc2trees:pampistachio",
    "pamhc2trees:pamchestnut",
    "pamhc2trees:chestnutitem",
    "pamhc2trees:pamacorn",
    "pamhc2trees:pamspiderweb",
    "pamhc2trees:pamnutmeg",
    "pamhc2trees:pamcoconut",
    "pamhc2trees:pampear",
    "pamhc2trees:pamolive",
    "pamhc2trees:pamgrapefruit",
    "pamhc2trees:pampomegranate",
    "pamhc2trees:pamvanillabean",
    "pamhc2trees:pamcandlenut",
    "pamhc2trees:pamcashew",
    "pamhc2trees:pampapaya",
    "pamhc2trees:pampeppercorn",
    "pamhc2trees:pampersimmon",
    "pamhc2trees:pamsoursop",
    "pamhc2trees:pamjackfruit",
    "pamhc2trees:pampecan",
    "pamhc2trees:pamfig",
    "pamhc2trees:pamdurian",
    "pamhc2trees:pambreadfruit",
    "pamhc2trees:pamguava",
    "pamhc2trees:pamgooseberry",
    "pamhc2trees:pamlime",
    "pamhc2trees:pamdate",
    "pamhc2trees:pamwalnut",
    "pamhc2trees:pamalmond",
    "pamhc2trees:pamapricot",
    "pamhc2trees:pampaperbark",
    "pamhc2trees:pamavocado",
    "atmospheric:dragon_fruit",
  ];
  stripTags.forEach((item) => {
    e.removeAllTagsFrom(item);
  });
  global.removedItems.forEach((item) => {
    e.removeAllTagsFrom(item);
    e.add("furniture:trash_bag_blacklist", item);
  });
});
const rawLogs = [
  "quark:blossom_log",
  "quark:ancient_log",
  "quark:azalea_log",
  "minecraft:dark_oak_log",
  "minecraft:mangrove_log",
  "minecraft:spruce_log",
  "minecraft:acacia_log",
  "meadow:pine_log",
  "minecraft:oak_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:cherry_log",
  "betterarcheology:rotten_log",
  "vinery:dark_cherry_log",
  "beachparty:palm_log",
  "vinery:apple_log",
  "autumnity:maple_log",
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
];
ServerEvents.tags("item", (e) => {
  // Misc tags
  e.add("forge:plates/lead", "oreganized:lead_sheet");
  e.add("forge:plates", "oreganized:lead_sheet");
  e.add("forge:plates/silver", "oreganized:silver_sheet");
  e.add("forge:plates", "oreganized:silver_sheet");
  e.add("forge:crops", "society:ancient_fruit");
  e.add("forge:salt", "meadow:alpine_salt");
  e.add("forge:crops", "society:tubabbaco");
  e.add("forge:crops", "society:blueberry");
  e.add("forge:berries", "society:blueberry");
  e.add("forge:grapes", "nethervinery:warped_grape");
  e.add("forge:grapes", "nethervinery:crimson_grape");
  e.add("forge:crops", "society:eggplant");
  e.add("forge:crops/cabbage", "farm_and_charm:lettuce");
  e.add("forge:vegetables/eggplant", "society:eggplant");
  e.add("forge:vegetables", "society:eggplant");
  e.add("meadow:water_bottles", "herbalbrews:water_cup");
  e.add("farm_and_charm:water_bottles", "herbalbrews:water_cup");
  e.add("forge:water_bottles", "herbalbrews:water_cup");
  e.add("forge:food/raw_pasta", "farm_and_charm:raw_pasta");
  e.add("forge:salad_ingredients", "farm_and_charm:lettuce");
  e.add("forge:grain/corn", "farm_and_charm:corn");
  e.add("candlelight:butter", "farm_and_charm:butter");
  e.add("netherdepthsupgrade:lava_fishing_rod", "forge:tools/fishing_rods");
  e.add("forge:rope", "brewery:rope");
  e.remove("candlelight:red_effect", "minecraft:potion");
  e.remove("candlelight:white_effect", "minecraft:potion");
  e.remove("candlelight:all_effects", "minecraft:potion");
  // Vinery leaf fix
  e.add("minecraft:mineable/hoe", "vinery:apple_leaves");
  e.add("minecraft:mineable/hoe", "vinery:dark_cherry_leaves");
  // Tag tags
  e.add("forge:food/cheese", "#forge:foods/cheese");
  e.add("forge:food/pastas", "#forge:foods/pastas");
  e.add("letsdo_addon_compat:tools/knives", "#forge:tools/knives");
  // Milk
  const bakeryMilks = [
    "minecraft:milk_bucket",
    "meadow:wooden_milk_bucket",
    "meadow:wooden_grain_milk_bucket",
  ];
  bakeryMilks.forEach((milk) => {
    e.add("bakery:milk", milk);
  });
  [
    "minecraft:potato",
    "minecraft:carrot",
    "farm_and_charm:onion",
    "veggiesdelight:sweet_potato",
    "vintagedelight:peanut",
  ].forEach((crop) => {
    e.add("society:need_seeds", crop);
    e.remove("minecraft:villager_plantable_seeds", crop);
    e.remove("quark:seed_pouch_holdable", crop);
  });
  [
    "minecraft:apple",
    "minecraft:sweet_berries",
    "minecraft:melon_slice",
    "autumnity:foul_berries",
    "minecraft:chorus_fruit",
    "minecraft:glow_berries",
  ].forEach((fruit) => {
    e.add("forge:fruits", fruit);
  });
  [
    "minecraft:porkchop",
    "minecraft:beef",
    "autumnity:turkey",
    "minecraft:mutton",
    "minecraft:chicken",
    "autumnity:turkey_piece",
    "minecraft:rabbit",
    "meadow:raw_buffalo_meat",
    "untitledduckmod:raw_duck",
    "untitledduckmod:raw_goose",
  ].forEach((meat) => {
    e.add("forge:raw_meat", meat);
  });
  [
    "minecraft:cooked_rabbit",
    "autumnity:cooked_turkey_piece",
    "autumnity:cooked_turkey",
    "minecraft:cooked_mutton",
    "minecraft:cooked_porkchop",
    "minecraft:cooked_chicken",
    "minecraft:cooked_beef",
    "meadow:cooked_buffalo_meat",
    "untitledduckmod:cooked_goose",
    "untitledduckmod:cooked_duck",
  ].forEach((meat) => {
    e.add("forge:cooked_meat", meat);
  });
  e.add("forge:milks", "meadow:wooden_grain_milk_bucket");
  e.add("farm_and_charm:milk", "meadow:wooden_grain_milk_bucket");

  e.add("forge:shears", "society:magic_shears");
  // Bulk
  global.preserves.forEach((preserve) => {
    e.add("society:preserves", preserve.item);
  });
  global.lootFurniture.forEach((item) => {
    e.add("society:loot_furniture", item);
  });
  global.dehydratorRecipes.forEach((dehydratee) => {
    e.add("society:dehydrated", dehydratee.output[0].substring(2, dehydratee.output[0].length));
  });
  global.fish.forEach((fish) => {
    const splitFish = fish.item.split(":");
    let fishId = splitFish[1];
    if (["barrel", "roe", "meat"].some((denied) => splitFish[1].includes(denied))) return;
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }

    e.add(`crabbersdelight:jei_display_results/society/${fishId}_bait`, fish.item);
  });
  global.agedRoe.forEach((preserve) => {
    e.add("society:aged_roe", preserve.item);
  });
  global.pristine.forEach((mineral) => {
    e.add("society:pristine_mineral", mineral.item);
  });
  e.add("forge:eggs", "society:cracked_egg");
  [
    "society:large_egg",
    "society:large_duck_egg",
    "society:large_goose_egg",
    "society:large_turkey_egg",
  ].forEach((egg) => {
    e.add("society:large_eggs", egg);
  });
  rawLogs.forEach((log) => {
    e.add("society:raw_logs", log);
  });
  // Furniture
  global.lootFurniture.forEach((furniture) => {
    e.add("society:loot_furniture", furniture);
  });
  [
    "furniture:cherry_mirror",
    "furniture:mangrove_mirror",
    "furniture:dark_oak_mirror",
    "furniture:acacia_mirror",
    "furniture:spruce_mirror",
    "furniture:jungle_mirror",
    "furniture:oak_mirror",
    "furniture:birch_mirror",
  ].forEach((mirror) => {
    e.add("society:mirrors", mirror);
  });
  ["society:oak_resin", "society:maple_syrup", "society:pine_tar"].forEach((bottle) => {
    e.add("create:upright_on_belt", bottle);
  });
  // Geodes
  const geodeJunk = [
    "minecraft:granite",
    "minecraft:diorite",
    "minecraft:andesite",
    "minecraft:clay_ball",
    "aquaculture:tin_can",
  ];
  geodeJunk.forEach((geodeItem) => {
    e.add("society:geode_junk", geodeItem);
  });
  const geodeBonus = ["minecraft:raw_iron", "minecraft:raw_copper", "minecraft:coal"];
  geodeBonus.forEach((geodeItem) => {
    e.add("society:geode_bonus", geodeItem);
  });
  global.geodeList.forEach((geodeItem) => {
    e.add("society:geode_treasure", geodeItem.item);
    e.add("society:omni_geode_treasure", geodeItem.item);
  });
  e.add("splendid_slimes:slime_vac_fireable", "#society:omni_geode_treasure");
  e.add("splendid_slimes:slime_vac_fireable", "#society:preserves");
  e.add("splendid_slimes:slime_vac_fireable", "minecraft:bone");
  const geodeRelic = ["relics:horse_flute", "relics:hunter_belt"];
  geodeRelic.forEach((geodeItem) => {
    e.add("society:geode_relic", geodeItem);
  });
  // Frozen Geode
  const frozenGeodeBonus = [
    "minecraft:raw_iron",
    "minecraft:raw_copper",
    "minecraft:ice",
    "minecraft:raw_zinc",
    "minecraft:coal",
  ];
  frozenGeodeBonus.forEach((geodeItem) => {
    e.add("society:frozen_geode_bonus", geodeItem);
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    e.add("society:frozen_geode_treasure", geodeItem.item);
    e.add("society:omni_geode_treasure", geodeItem.item);
  });
  const frozenGeodeRelic = ["relics:wool_mitten", "relics:ice_skates"];
  frozenGeodeRelic.forEach((geodeItem) => {
    e.add("society:frozen_geode_relic", geodeItem);
  });
  // Magma Geode
  const magmaGeodeBonus = [
    "minecraft:raw_iron",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "minecraft:raw_zinc",
    "minecraft:clay_ball",
    "minecraft:coal",
  ];
  magmaGeodeBonus.forEach((geodeItem) => {
    e.add("society:magma_geode_bonus", geodeItem);
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    e.add("society:magma_geode_treasure", geodeItem.item);
    e.add("society:omni_geode_treasure", geodeItem.item);
  });
  const magmaGeodeRelic = ["relics:bastion_ring", "relics:magma_walker"];
  magmaGeodeRelic.forEach((geodeItem) => {
    e.add("society:magma_geode_relic", geodeItem);
  });
  // Omni Geode
  const omniGeodeBonus = [
    "minecraft:raw_iron",
    "minecraft:raw_gold",
    "minecraft:raw_zinc",
    "minecraft:netherite_scrap",
  ];
  omniGeodeBonus.forEach((geodeItem) => {
    e.add("society:omni_geode_bonus", geodeItem);
  });
  e.add("society:omni_geode_special", "society:prismatic_shard");

  global.cooking.forEach((meal) => {
    e.add("society:dish", meal.item);
  });
  // Relics
  const relics = [
    "relics:aqua_walker",
    "relics:amphibian_boot",
    "relics:arrow_quiver",
    "relics:bastion_ring",
    "relics:rage_glove",
    "relics:chorus_inhibitor",
    "relics:drowned_belt",
    "relics:elytra_booster",
    "relics:enders_hand",
    "relics:holy_locket",
    "relics:horse_flute",
    "relics:hunter_belt",
    "relics:ice_breaker",
    "relics:ice_skates",
    "relics:infinity_ham",
    "relics:jellyfish_necklace",
    "relics:leather_belt",
    "relics:magma_walker",
    "relics:midnight_robe",
    "relics:reflection_necklace",
    "relics:roller_skates",
    "relics:shadow_glaive",
    "relics:space_dissector",
    "relics:spatial_sign",
    "relics:spore_sack",
    "relics:wool_mitten",
    "relics:blazing_flask",
  ];
  relics.forEach((relic) => e.add("society:relics", relic));

  Color.DYE.forEach((color) => {
    e.add("society:botania_seeds", `botania_seeds:${color}_mystical_flower_seed`);
  });

  ["aquaculture:jellyfish", "aquaculture:goldfish", "aquaculture:leech", "society:neptuna"].forEach(
    (fish) => e.add("minecraft:fishes", fish)
  );
  // Artifacts
  global.artifacts.forEach((artifact) => {
    e.add("society:artifacts", artifact.item);
  });
  // Furniture Workbench tags
  global.lootFurniture.forEach((item) => {
    if (item.includes("tanukidecor")) e.add("refurbished_furniture:outdoors", item);
    else e.add("refurbished_furniture:kitchen", item);
  });
  const fantasyCategories = ["nordic", "dunmer", "venthyr", "bone", "royal", "necrolord"];
  Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
    if (item.toString().includes("furniture_station")) return;
    e.add("refurbished_furniture:bathroom", item.id);
    let type = /:(.*)\//g.exec(item.id);
    if (type && type[1]) {
      type = type[1];
      if (type.includes("bone")) type = "bone";
      if (type.includes("decorations")) {
        fantasyCategories.forEach((category) => {
          if (item.id.includes(category)) type = category;
        });
      }
      e.add(`society:${type}_fantasy_furniture`, item.id);
    }
  });
  const skillBooks = [
    "society:wet_weekly",
    "society:mining_monthly",
    "society:husbandry_hourly",
    "society:yard_work_yearly",
    "society:combat_quarterly",
  ];
  skillBooks.forEach((item) => {
    e.add("society:skill_book", item);
  });
  const smallMilks = [
    "society:milk",
    "society:goat_milk",
    "society:sheep_milk",
    "society:buffalo_milk",
    "society:warped_milk",
  ];
  smallMilks.forEach((item) => {
    e.add("society:small_milk", item);
  });
  e.add("splendid_slimes:slime_vac_fireable", "#society:small_milk");
  const largeMilks = [
    "society:large_milk",
    "society:large_goat_milk",
    "society:large_buffalo_milk",
    "society:large_sheep_milk",
    "society:large_warped_milk",
  ];
  largeMilks.forEach((item) => {
    e.add("society:large_milk", item);
  });
  e.add("splendid_slimes:slime_vac_fireable", "#society:large_milk");
  [
    "snowpig:snow_pig_spawn_egg",
    "untitledduckmod:duck_spawn_egg",
    "untitledduckmod:goose_spawn_egg",
  ].forEach((item) => {
    e.add("splendid_slimes:animal_spawn_eggs", item);
  });
});

ServerEvents.tags("block", (e) => {
  e.add("minecraft:crops", "farmersdelight:tomatoes");
  const buildingGadgetsDeny = [
    "society:aging_cask",
    "society:ancient_cask",
    "society:charging_rod",
    "society:coin_leaderboard",
    "society:deluxe_worm_farm",
    "society:fish_pond",
    "society:loom",
    "society:crystalarium",
    "society:espresso_machine",
    "society:fish_smoker",
    "society:mayonnaise_machine",
    "society:preserves_jar",
    "society:prize_machine",
    "society:seed_maker",
    "society:dehydrator",
  ];
  buildingGadgetsDeny.forEach((block) => {
    e.add("buildinggadgets2:deny", block);
  });
  e.remove("minecraft:dirt", "farmersdelight:rich_soil");
  rawLogs.forEach((log) => {
    e.add("society:raw_logs", log);
  });
  [
    "fantasyfurniture:necrolord/carpet",
    "fantasyfurniture:nordic/carpet",
    "fantasyfurniture:dunmer/carpet",
    "fantasyfurniture:venthyr/carpet",
    "fantasyfurniture:bone/skeleton/carpet",
    "fantasyfurniture:bone/wither/carpet",
    "fantasyfurniture:royal/carpet",
    "fantasyfurniture:necrolord/wool",
    "fantasyfurniture:royal/wool",
    "fantasyfurniture:bone/wither/wool",
    "fantasyfurniture:venthyr/wool",
    "fantasyfurniture:bone/skeleton/wool",
    "fantasyfurniture:dunmer/wool",
    "fantasyfurniture:nordic/wool",
  ].forEach((wool) => {
    e.add("minecraft:mineable/axe", wool);
  });
  [
    "minecraft:dark_oak_log",
    "meadow:pine_log",
    "minecraft:spruce_log",
    "autumnity:maple_log",
    "minecraft:acacia_log",
    "minecraft:oak_log",
  ].forEach((block) => {
    e.add("society:tappable_blocks", block);
  });
  const flowersMissingBlockTags = [
    "meadow:eriophorum_tall",
    "meadow:alpine_poppy",
    "meadow:delphinium",
    "meadow:saxifrage",
    "meadow:enzian",
    "meadow:fire_lily",
    "meadow:eriophorum",
    "meadow:small_fir",
  ];

  flowersMissingBlockTags.forEach((flower) => {
    e.add("minecraft:flowers", flower);
    e.add(
      flower !== "meadow:eriophorum_tall" ? "minecraft:small_flowers" : "minecraft:tall_flowers",
      flower
    );
  });
  // Sails
  e.remove("create:windmill_sails", "#minecraft:wool");
  const tickArtisanMachines = [
    "society:loom",
    "society:mayonnaise_machine",
    "society:preserves_jar",
    "society:crystalarium",
    "society:aging_cask",
    "society:ancient_cask",
    "society:dehydrator",
    "society:deluxe_worm_farm",
    "society:seed_maker",
    "society:fish_smoker",
    "society:bait_maker",
    "society:recycling_machine",
    "society:tapper",
  ];
  tickArtisanMachines.forEach((log) => {
    e.add("society:artisan_machine", log);
    e.add("society:golden_clock_advanced", log);
  });
  const randomTickMachines = ["society:charging_rod", "society:espresso_machine"];
  randomTickMachines.forEach((log) => {
    e.add("society:artisan_machine", log);
  });
  e.remove("minecraft:leaves", "beachparty:palm_leaves");
  e.add("society:palm_leaves", "beachparty:palm_leaves");
  const ftbChunksWhitelist = [
    "minecraft:crafting_table",
    "numismatics:andesite_depositor",
    "numismatics:brass_depositor",
    "numismatics:vendor",
    "numismatics:bank_terminal",
    "refurbished_furniture:post_box",
    "bountiful:bountyboard",
    "tanukidecor:slot_machine",
  ];
  ftbChunksWhitelist.forEach((item) => {
    e.add("ftbchunks:interact_whitelist", item);
  });
});

ServerEvents.tags("fluid", (e) => {
  e.removeAllTagsFrom("minecraft:milk");
  e.remove("forge:milk", "minecraft:milk");
  e.remove("minecraft:milk", "minecraft:milk");
});
