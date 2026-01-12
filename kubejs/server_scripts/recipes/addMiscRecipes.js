console.info("[SOCIETY] addMiscRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("atmospheric:blood_orange", ["mmm", "mom", "mmm"], {
    o: "atmospheric:orange",
    m: "farm_and_charm:minced_beef",
  });
  e.smelting("society:rubber", "society:sap").xp(0.35);
  e.smelting("etcetera:bismuth_ingot", "create:crushed_raw_bismuth").xp(0.7);
  e.blasting("etcetera:bismuth_ingot", "create:crushed_raw_bismuth").xp(0.7);
  e.smelting("quark:charcoal_block", "meadow:fire_log").xp(4.0);
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "herbalbrews:lavender" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "herbalbrews:lavender_blossom", count: 2 }],
  });
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "twigs:silt" }],
    tool: { tag: "forge:tools/shovels" },
    result: [{ item: "twigs:silt_ball", count: 4 }],
  });
  e.custom({
    type: "farmersdelight:cooking",
    cookingtime: 200,
    experience: 3.0,
    container: {
      item: "minecraft:bowl",
    },
    ingredients: [
      {
        tag: "forge:raw_chicken",
      },
      {
        item: "farm_and_charm:onion",
      },
      {
        item: "farm_and_charm:corn",
      },
      {
        item: "meadow:piece_of_cheese",
      },
      { item: "farmersdelight:tomato_sauce" },
    ],
    result: {
      item: "society:chicken_tortilla_soup",
    },
  });
  e.custom({
    type: "farmersdelight:cooking",
    cookingtime: 200,
    experience: 3.0,
    ingredients: [
      {
        item: "farm_and_charm:corn",
      },
      {
        item: "meadow:piece_of_cheese",
      },
      { item: "society:mayonnaise" },
    ],
    result: {
      item: "society:mexican_street_corn",
    },
  });
  e.shapeless("quark:slime_in_a_bucket", [
    "society:petrified_slime",
    "species:youth_potion",
    "minecraft:bucket",
  ]);
  e.shapeless("minecraft:magenta_dye", ["windswept:lavender"]);
  e.shapeless("create:tree_fertilizer", [
    "4x farmersdelight:straw",
    "4x society:sap",
    "twigs:pebble",
  ]);
  e.shapeless("3x society:prismatic_shard", [
    "society:token_of_unity",
    "society:prismatic_shard",
  ]);
  e.shapeless("3x quark:soul_bead", ["netherdepthsupgrade:soulsucker"]);
  e.shapeless("society:book_of_stars", ["3x #society:skill_book"]);
  e.shapeless("4x minecraft:quartz", ["minecraft:quartz_block"]);
  e.shapeless("4x society:cracked_egg", ["#society:large_eggs"]);
  e.shapeless("1x society:cracked_egg", ["#forge:eggs"]);
  e.shapeless("3x minecraft:glass_bottle", ["vintagedelight:mason_jar"]);
  e.shapeless("society:magic_tunnel", ["society:magic_rope"]);
  e.shapeless("society:magic_rope", ["society:magic_tunnel"]);
  e.shapeless("refinedstorage:network_transmitter", [
    "refinedstorage:network_receiver",
  ]);
  e.shapeless("refinedstorage:network_receiver", [
    "refinedstorage:network_transmitter",
  ]);
  e.shaped("meadow:cobbled_limestone", ["cs ", "sc "], {
    c: "minecraft:cobblestone",
    s: "meadow:alpine_salt",
  });
  e.shaped("minecraft:bundle", [" s ", " l "], {
    s: "minecraft:string",
    l: "minecraft:leather",
  });
  e.shaped("16x society:enriched_bone_meal", ["bbb", "bfb", "bbb"], {
    f: "farm_and_charm:fertilizer",
    b: "minecraft:bone_block",
  });
  e.shaped("society:magnifying_glass", [" g", "c "], {
    g: "minecraft:glass",
    c: "minecraft:copper_ingot",
  });

  // Greenhouse glass
  e.shaped("moreminecarts:chiseled_organic_glass", [" C ", "ege", " C "], {
    C: "numismatics:crown",
    e: "society:earth_crystal",
    g: "moreminecarts:organic_glass",
  });
  e.shaped("2x moreminecarts:chiseled_organic_glass", [" C ", "fgf", " C "], {
    C: "numismatics:crown",
    f: "society:fire_quartz",
    g: "moreminecarts:organic_glass",
  });
  e.shaped("3x moreminecarts:chiseled_organic_glass", [" C ", "fgf", " C "], {
    C: "numismatics:crown",
    f: "society:jade",
    g: "moreminecarts:organic_glass",
  });
  e.stonecutting(
    "moreminecarts:greenhouse_glass_stairs",
    "moreminecarts:chiseled_organic_glass"
  );
  e.stonecutting(
    "moreminecarts:chiseled_organic_glass",
    "moreminecarts:greenhouse_glass_stairs"
  );
  e.stonecutting(
    "moreminecarts:greenhouse_glass_slab",
    "moreminecarts:chiseled_organic_glass"
  );
  e.stonecutting(
    "moreminecarts:chiseled_organic_glass",
    "moreminecarts:greenhouse_glass_slab"
  );
  // Mastery
  e.shaped("society:treasure_totem", ["fmf", "fsf", "fmf"], {
    s: "society:mystic_syrup",
    m: "#society:mineral",
    f: "meadow:fire_log",
  });
  e.shaped("society:bubble_totem", ["fjf", "fsf", "fSf"], {
    s: "society:mystic_syrup",
    j: "society:ocean_jelly",
    S: "unusualfishmod:raw_sneep_snorp",
    f: "meadow:fire_log",
  });
  // Earth Crystal
  e.shaped("society:tapper", [" C ", "lwl", " e "], {
    w: "meadow:wooden_bucket",
    l: "meadow:fire_log",
    e: "society:earth_crystal",
    C: "minecraft:copper_block",
  });
  e.shaped("society:mayonnaise_machine", [" p ", "fcf", "CeC"], {
    c: "minecraft:composter",
    C: "minecraft:copper_block",
    e: "society:earth_crystal",
    p: "society:pine_tar",
    f: "meadow:fire_log",
  });
  e.shaped("society:cheese_press", [" p ", "fef", "fff"], {
    f: "meadow:fire_log",
    e: "society:earth_crystal",
    p: "society:pine_tar",
  });
  e.shaped("meadow:cheese_form", [" C ", "pcp", " b "], {
    c: "society:cheese_press",
    C: "minecraft:netherite_ingot",
    b: "society:battery",
    p: "society:pine_tar",
  });
  e.shaped("brewery:wooden_brewingstation", ["eee", "lll", "fcc"], {
    l: "#society:raw_logs",
    e: "society:earth_crystal",
    f: "minecraft:furnace",
    c: "minecraft:cauldron",
  });
  e.shaped("farmersdelight:rich_soil", ["ses", "ofo", "sos"], {
    f: "minecraft:dirt",
    o: "vintagedelight:organic_mash",
    e: "society:earth_crystal",
    s: "meadow:alpine_salt",
  });
  e.shaped("society:loom", ["l  ", "l  ", "ltl"], {
    l: "meadow:fire_log",
    t: "society:treated_log",
  });
  e.shaped("minecraft:beehive", ["ppp", "hhh", "pop"], {
    h: "minecraft:iron_ingot",
    p: "#minecraft:planks",
    o: "society:maple_syrup",
  });
  e.shaped("farm_and_charm:roaster", ["CCC", "ece", "CCC"], {
    C: "minecraft:iron_ingot",
    e: "society:earth_crystal",
    c: "farmersdelight:cooking_pot",
  });
  e.shaped("herbalbrews:tea_kettle", [" i ", "ici", "eie"], {
    c: "minecraft:cauldron",
    e: "society:earth_crystal",
    i: "minecraft:iron_ingot",
  });
  e.shaped("herbalbrews:copper_tea_kettle", [" i ", "ici", "eie"], {
    c: "minecraft:cauldron",
    e: "society:earth_crystal",
    i: "minecraft:copper_ingot",
  });
  e.shaped("4x farm_and_charm:silo_wood", ["lll", "rbr", "lel"], {
    b: "minecraft:barrel",
    l: "meadow:fire_log",
    r: "society:oak_resin",
    e: "society:earth_crystal",
  });
  e.shaped("bakery:baker_station", ["ppp", "rpr", "pep"], {
    p: "#minecraft:planks",
    e: "society:earth_crystal",
    r: "society:oak_resin",
  });
  e.shaped("farm_and_charm:crafting_bowl", ["zzz", "zbz", "eze"], {
    b: "minecraft:bowl",
    e: "society:earth_crystal",
    z: "create:zinc_ingot",
  });
  // Fire Quartz
  e.shaped("society:seed_maker", [" f ", "pcp", "FgF"], {
    g: "minecraft:gold_block",
    c: "minecraft:composter",
    f: "society:earth_crystal",
    p: "society:pine_tar",
    F: "meadow:fire_log",
  });
  e.shaped("brewery:copper_brewingstation", ["tct", "cbc", "fcf"], {
    t: "society:pine_tar",
    f: "society:fire_quartz",
    b: "brewery:wooden_brewingstation",
    c: "minecraft:copper_block",
  });
  e.shaped("brewery:netherite_brewingstation", [" n ", "nbn", "pjp"], {
    j: "society:jade",
    p: "society:pine_tar",
    b: "brewery:copper_brewingstation",
    n: "minecraft:netherite_scrap",
  });
  e.shaped("beachparty:tiki_bar", [" f ", "lll", "plp"], {
    p: "beachparty:palm_sapling",
    l: "beachparty:palm_log",
    f: "society:fire_quartz",
  });
  e.shaped("torchmaster:dreadlamp", [" C ", "fgf", " C "], {
    g: "minecraft:glowstone",
    C: "numismatics:crown",
    f: "society:fire_quartz",
  });
  e.shaped("society:quality_washer", [" S ", "zcz", "fzf"], {
    c: "minecraft:cauldron",
    S: "dew_drop_farmland_growth:high_quality_fertilizer",
    f: "society:fire_quartz",
    z: "create:zinc_ingot",
  });
  e.shaped("farm_and_charm:mincer", ["iCi", "ici", "ifi"], {
    c: "minecraft:iron_block",
    C: "quark:sturdy_stone",
    f: "society:fire_quartz",
    i: "minecraft:iron_ingot",
  });
  e.shaped("vinery:apple_press", [" f ", "tbt", "tft"], {
    b: "minecraft:barrel",
    f: "society:fire_quartz",
    t: "society:treated_log",
  });
  e.shaped("vinery:fermentation_barrel", ["FoF", "IbI", "FfF"], {
    b: "society:wine_keg",
    I: "minecraft:gold_block",
    f: "society:battery",
    o: "minecraft:netherite_ingot",
    F: "meadow:fire_log",
  });
  e.shaped("herbalbrews:cauldron", [" C ", "fcf", " f "], {
    c: "minecraft:cauldron",
    C: "society:jade",
    f: "society:fire_quartz",
  });
  e.shaped("society:oil_maker", ["ccj", "ccs", "fgf"], {
    c: "minecraft:copper_block",
    g: "minecraft:gold_block",
    j: "society:jade",
    s: "supplementaries:jar",
    f: "meadow:fire_log",
  });
  e.shaped("society:preserves_jar", ["LLL", "LbL", "CiC"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    C: "#forge:storage_blocks/coal",
    i: "minecraft:copper_block",
  });
  e.shaped("society:dehydrator", ["LGL", "pbp", "LfL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    G: "society:raisins",
    f: "society:battery",
    p: "society:pine_tar",
  });
  e.shaped("society:snow_melter", [" f ", "fbf", " B "], {
    b: "minecraft:blast_furnace",
    B: "society:battery",
    f: "society:fire_quartz",
  });
  e.shaped("society:recycling_machine", ["LIL", "fbf", "LIL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    f: "society:fire_quartz",
    I: "minecraft:iron_block",
  });
  e.shaped("society:mushroom_log", ["LLL", "LML", "mPm"], {
    L: "meadow:fire_log",
    P: "society:mossberry_preserves",
    m: "society:mossberry",
    M: "farmersdelight:rich_soil",
  });
  // Battery
  e.shaped("society:crystalarium", ["III", "SDS", "ibi"], {
    D: "minecraft:diamond_block",
    S: "minecraft:netherite_ingot",
    b: "society:battery",
    I: "oreganized:lead_ingot",
    i: "oreganized:lead_block",
  });
  e.shaped("society:espresso_machine", ["iii", "ltl", "bib"], {
    t: "herbalbrews:tea_kettle",
    l: "minecraft:lime_dye",
    b: "society:battery",
    i: "create:zinc_ingot",
  });
  e.shaped("society:pickling_can", ["zbz", "scs", "zlz"], {
    l: "vintagedelight:salt_lamp_green",
    c: "minecraft:cactus",
    s: "oreganized:silver_ingot",
    b: "society:battery",
    z: "create:zinc_block",
  });
  e.shaped("beachparty:mini_fridge", ["zlz", "ziz", "zbz"], {
    l: "minecraft:lime_dye",
    i: "minecraft:ice",
    b: "society:battery",
    z: "create:zinc_ingot",
  });
  e.shaped("shippingbin:smart_shipping_bin", ["SSS", "SsS", "SbS"], {
    s: "shippingbin:basic_shipping_bin",
    S: "create:zinc_ingot",
    b: "society:battery",
  });
  // Prismatic
  e.shapeless("society:car_key", [
    "relics:horse_flute",
    "society:prismatic_shard",
  ]);
  e.shaped("society:prize_machine", ["ttt", "tbt", "ttt"], {
    b: "bountiful:bountyboard",
    t: "society:prize_ticket",
  });
  e.shaped("torchmaster:megatorch", [" p ", "sts", " s "], {
    t: "minecraft:torch",
    s: "numismatics:sun",
    p: "society:prismatic_shard",
  });
  e.shaped("torchmaster:feral_flare_lantern", [" p ", "sls", " s "], {
    l: "minecraft:lantern",
    s: "numismatics:sun",
    p: "society:prismatic_shard",
  });
  e.shaped("candlelight:cooking_pot", ["SpS", "scs", "sCs"], {
    c: "farmersdelight:cooking_pot",
    s: "numismatics:sun",
    p: "society:prismatic_shard",
    S: "society:seed_maker",
    C: "minecraft:copper_block",
  });
  e.shaped("minecraft:elytra", ["p p", "wew", "p p"], {
    w: "society:elytra_wing",
    e: "minecraft:dragon_egg",
    p: "society:prismatic_shard",
  });
  e.shaped("relics:blazing_flask", ["fhf", "pep", "fbf"], {
    h: "rehooked:blaze_hook",
    e: "society:production_science_pack",
    f: "netherdepthsupgrade:blazefish",
    p: "nethervinery:blazewine_pinot",
    b: "create:blaze_burner",
  });
  e.shaped("relics:magic_mirror", ["ppp", "pmp", "ppp"], {
    m: "oreganized:silver_mirror",
    p: "society:prismatic_shard",
  });
  e.shaped("relics:spore_sack", [" p ", " m ", " s "], {
    s: "supplementaries:sack",
    m: "farmersdelight:red_mushroom_colony",
    p: "society:prismatic_shard",
  });
  e.shaped("relics:rage_glove", ["   ", "lll", "lpl"], {
    l: "minecraft:leather",
    p: "society:prismatic_shard",
  });
  e.shapeless("society:ancient_goddess_statue", [
    "paraglider:goddess_statue",
    "society:prismatic_shard",
  ]);
  e.shapeless("rehooked:red_hook", [
    "rehooked:diamond_hook",
    "society:prismatic_shard",
  ]);
  e.shaped("society:ancient_cask", [" p ", "vav", " p "], {
    a: "society:aging_cask",
    p: "society:prismatic_shard",
    v: "society:aged_ancient_vespertine",
  });
  e.shaped("4x waystones:waystone", ["ara", "bPg", "apa"], {
    r: "waystones:red_sharestone",
    b: "waystones:blue_sharestone",
    g: "waystones:green_sharestone",
    p: "waystones:purple_sharestone",
    P: "society:prismatic_shard",
    a: "numismatics:ancient_coin",
  });
  e.shaped("create:mechanical_saw", ["oco", "nnn", "AaA"], {
    a: "create:andesite_casing",
    o: "create:powdered_obsidian",
    A: "minecraft:netherite_upgrade_smithing_template",
    c: "numismatics:ancient_coin",
    n: "minecraft:netherite_ingot",
  });
  e.shaped("2x create:mechanical_saw", ["chc"], {
    h: "create:mechanical_saw",
    c: "minecraft:netherite_upgrade_smithing_template",
  });
  e.shaped("create:mechanical_harvester", ["pcp", "hhh", "oao"], {
    o: "create:powdered_obsidian",
    a: "create:andesite_casing",
    h: "minecraft:netherite_ingot",
    c: "numismatics:ancient_coin",
    p: "society:prismatic_shard",
  });
  e.shaped("2x create:mechanical_harvester", ["shs"], {
    h: "create:mechanical_harvester",
    s: "minecraft:netherite_upgrade_smithing_template",
  });
  e.shaped("create:mechanical_drill", ["cPo", "PpP", "oPa"], {
    o: "create:powdered_obsidian",
    a: "create:andesite_casing",
    P: "minecraft:netherite_ingot",
    c: "numismatics:ancient_coin",
    p: "society:prismatic_shard",
  });
  e.shaped("2x create:mechanical_drill", ["chc"], {
    h: "create:mechanical_drill",
    c: "minecraft:netherite_upgrade_smithing_template",
  });
  // Sparkstone
  e.shaped("society:auto_grabber", ["lal", "bfb", "nsn"], {
    f: "society:animal_feed",
    a: "numismatics:ancient_coin",
    n: "minecraft:netherite_ingot",
    b: "society:battery",
    s: "society:sparkstone",
    l: "meadow:fire_log",
  });
  e.shaped("society:artisan_hopper", ["zaz", "bhb", "nsn"], {
    a: "numismatics:ancient_coin",
    n: "minecraft:netherite_ingot",
    h: "minecraft:hopper",
    b: "society:battery",
    s: "society:sparkstone",
    z: "create:zinc_ingot",
  });
  e.shapeless("society:artisan_hopper", ["4x society:mini_artisan_hopper"]);
  e.shapeless("4x society:mini_artisan_hopper", ["society:artisan_hopper"]);
  e.shaped("society:mini_artisan_hopper", ["zsz", "nhn", "aba"], {
    a: "numismatics:neptunium_coin",
    n: "minecraft:netherite_scrap",
    h: "minecraft:hopper",
    b: "society:battery",
    s: "society:sparkstone",
    z: "create:zinc_ingot",
  });
  e.shaped("society:fish_pond_basket", ["NaN", "bhb", "nsn"], {
    a: "farmersdelight:safety_net",
    n: "minecraft:netherite_ingot",
    h: "minecraft:hopper",
    b: "society:battery",
    s: "society:sparkstone",
    N: "aquaculture:neptunium_ingot",
  });
  // Fish
  e.shaped("society:fish_pond", [" j ", "PwP", "rNr"], {
    j: "society:river_jelly",
    N: "aquaculture:neptunium_ingot",
    P: "crabbersdelight:pearl",
    r: "society:oak_resin",
    w: "meadow:wooden_bucket",
  });
  e.shaped("society:sunlit_pearl", [" n ", " p ", "r o"], {
    n: "society:nether_jelly",
    p: "crabbersdelight:pearl",
    r: "society:river_jelly",
    o: "society:ocean_jelly",
  });
  e.shaped("society:fish_smoker", ["lCl", "asa", "lNl"], {
    s: "minecraft:smoker",
    N: "aquaculture:neptunium_ingot",
    a: "society:aquamarine",
    C: "society:sunlit_pearl",
    l: "meadow:fire_log",
  });
  e.shaped("society:bait_maker", [" S ", "asa", "lll"], {
    s: "society:seed_maker",
    a: "aquaculture:neptunium_ingot",
    S: "society:sunlit_pearl",
    l: "create:zinc_ingot",
  });
  e.shaped("society:auto_worm_farm", ["lpl", "asa", "CSC"], {
    s: "farmersdelight:rich_soil",
    S: "society:sunlit_pearl",
    p: "create:precision_mechanism",
    a: "aquaculture:worm_farm",
    C: "society:battery",
    l: "minecraft:iron_ingot",
  });
  e.shaped("society:deluxe_worm_farm", ["zNz", "pwp", "zaz"], {
    w: "aquaculture:worm_farm",
    N: "aquaculture:neptunium_ingot",
    a: "society:aquamarine",
    p: "crabbersdelight:pearl_block",
    z: "create:zinc_block",
  });
  e.shaped("crabbersdelight:crab_trap", ["nsn", "s s", "wpw"], {
    s: "create:zinc_ingot",
    n: "farmersdelight:safety_net",
    p: "crabbersdelight:pearl",
    w: "#minecraft:wooden_slabs",
  });
  e.shaped("society:wine_keg", ["FoF", "IbI", "FfF"], {
    b: "minecraft:barrel",
    I: "minecraft:iron_block",
    I: "minecraft:iron_block",
    f: "minecraft:quartz_block",
    o: "society:oak_resin",
    F: "meadow:fire_log",
  });

  // Jade
  e.shaped("society:aging_cask", [" j ", "pbp", "SpS"], {
    b: "society:wine_keg",
    S: "oreganized:lead_block",
    j: "society:jade",
    p: "society:pine_tar",
  });

  // Other
  e.shaped("society:charging_rod", [" f ", "zlz", "ZbZ"], {
    Z: "create:zinc_block",
    z: "etcetera:bismuth_ingot",
    l: "minecraft:lightning_rod",
    f: "society:fire_quartz",
    b: "quark:blaze_lantern",
  });
  e.shaped("society:auto_tapper", ["fFf", "bTb", "fPf"], {
    f: "meadow:fire_log",
    F: "create:fluid_tank",
    T: "society:tapper",
    b: "society:battery",
    P: "create:precision_mechanism",
  });
  e.shaped("society:juice_inserter", ["fff", "rFb", "fff"], {
    f: "meadow:fire_log",
    F: "create:fluid_tank",
    b: "minecraft:bamboo_block",
    r: "society:rubber",
  });
  e.shapeless("society:furniture_box", ["4x #society:loot_furniture"]);
  e.shapeless("society:plushie_capsule", ["4x #society:plushies"]);
  e.smoking("pamhc2trees:roastedhazelnutitem", "pamhc2trees:hazelnutitem").xp(
    0.35
  );
  // Crab trap bait
  e.shapeless("crabbersdelight:crab_trap_bait", ["aquaculture:worm"]);
  e.shapeless("4x crabbersdelight:crab_trap_bait", ["aquaculture:minnow"]);
  e.shapeless("16x crabbersdelight:crab_trap_bait", ["aquaculture:leech"]);

  // Neptuna
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "society:neptuna" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "aquaculture:neptunium_nugget", count: 3 }],
  });
  // Catalog Dupes
  e.shaped("2x society:tanuki_catalog", ["CCC", "CcC", "CCC"], {
    c: "society:tanuki_catalog",
    C: "numismatics:crown",
  });
  e.shaped("2x society:modern_catalog", ["CCC", "CcC", "CCC"], {
    c: "society:modern_catalog",
    C: "numismatics:crown",
  });
  e.shaped("2x society:fantasy_catalog", ["CCC", "CcC", "CCC"], {
    c: "society:fantasy_catalog",
    C: "numismatics:crown",
  });
  e.shaped("2x tanukidecor:diy_workbench", ["CCC", "CcC", "CCC"], {
    c: "tanukidecor:diy_workbench",
    C: "numismatics:sun",
  });
  // Pristine uncrafting
  global.geodeList.forEach((geode) => {
    if (geode.item === "society:froggy_helm") return;
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.path}`]);
  });
  global.frozenGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_drum") return;
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.path}`]);
  });
  global.magmaGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_gadget") return;
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.path}`]);
  });
  global.gems.forEach((gem) => {
    e.shapeless(`3x ${gem.item}`, [`society:pristine_${gem.item.path}`]);
  });
  const vanillaPristine = [
    "minecraft:emerald",
    "minecraft:lapis_lazuli",
    "minecraft:diamond",
    "minecraft:amethyst_shard",
    "minecraft:prismarine_crystals",
    "minecraft:quartz",
  ];
  vanillaPristine.forEach((gem) => {
    e.shapeless(`3x ${gem}`, [`society:pristine_${gem.path}`]);
  });
  e.custom({
    type: "vintagedelight:fermenting",
    processingTime: 10000,
    container: {
      item: "minecraft:glass_bottle",
    },
    ingredients: [
      {
        item: "minecraft:glow_berries",
      },
    ],
    output: {
      count: 1,
      item: "supplementaries:lumisene_bottle",
    },
  });
  e.custom({
    type: "vintagedelight:fermenting",
    processingTime: 36000,
    container: {
      item: "minecraft:bucket",
    },
    ingredients: [
      { item: "minecraft:glow_berries" },
      { item: "minecraft:glow_berries" },
      { item: "minecraft:glow_berries" },
      { item: "minecraft:glow_berries" },
      { item: "minecraft:glow_berries" },
      { item: "minecraft:glow_berries" },
    ],
    output: {
      count: 1,
      item: "supplementaries:lumisene_bucket",
    },
  });
  e.shaped("8x minecraft:gunpowder", ["ggg", "gcg", "ggg"], {
    g: "minecraft:glowstone_dust",
    c: "vintagedelight:ghost_charcoal",
  });

  e.shapeless("society:energy_drink", [
    "society:ancient_juice",
    "pamhc2trees:pawpawitem",
    "minecraft:sugar",
  ]);
  e.shapeless("society:death_liquid", [
    "minecraft:skeleton_skull",
    "society:battery",
    [
      "society:salmonberry",
      "society:boysenberry",
      "society:cranberry",
      "society:crystalberry",
    ],
  ]);
  e.shapeless("4x farmersdelight:canvas", ["society:canvas"]);
  e.shapeless("1x society:tubasmoke_stick", [
    "society:dried_tubabacco_leaf",
    "vintagedelight:ghost_charcoal",
    "minecraft:paper",
  ]);
  [
    "aquaculture:atlantic_herring",
    "minecraft:pufferfish",
    "aquaculture:minnow",
    "aquaculture:bluegill",
    "aquaculture:perch",
    "minecraft:salmon",
    "aquaculture:blackfish",
    "aquaculture:brown_trout",
    "aquaculture:carp",
    "aquaculture:piranha",
    "aquaculture:smallmouth_bass",
    "minecraft:cod",
    "aquaculture:pollock",
    "aquaculture:jellyfish",
    "aquaculture:rainbow_trout",
    "aquaculture:pink_salmon",
    "minecraft:tropical_fish",
    "aquaculture:red_grouper",
    "aquaculture:gar",
    "aquaculture:muskellunge",
    "aquaculture:synodontis",
    "aquaculture:tambaqui",
    "aquaculture:atlantic_cod",
    "aquaculture:boulti",
    "aquaculture:leech",
    "aquaculture:catfish",
    "aquaculture:tuna",
    "aquaculture:bayad",
    "aquaculture:arapaima",
    "aquaculture:atlantic_halibut",
    "aquaculture:starshell_turtle",
    "aquaculture:brown_shrooma",
    "aquaculture:red_shrooma",
    "aquaculture:arrau_turtle",
    "aquaculture:capitaine",
    "aquaculture:box_turtle",
    "aquaculture:pacific_halibut",
    "aquaculture:goldfish",
    "crabbersdelight:shrimp",
    "crabbersdelight:clawster",
    "crabbersdelight:crab",
    "crabbersdelight:clam",
    "netherdepthsupgrade:searing_cod",
    "netherdepthsupgrade:blazefish",
    "netherdepthsupgrade:lava_pufferfish",
    "netherdepthsupgrade:obsidianfish",
    "netherdepthsupgrade:bonefish",
    "netherdepthsupgrade:wither_bonefish",
    "netherdepthsupgrade:magmacubefish",
    "netherdepthsupgrade:glowdine",
    "netherdepthsupgrade:soulsucker",
    "netherdepthsupgrade:fortress_grouper",
    "netherdepthsupgrade:eyeball_fish",
    "society:neptuna",
  ].forEach((fish) => {
    e.shapeless(fish, [`society:smoked_${fish.path}`, "1x minecraft:blue_ice"]);
  });
  // Sprinklers
  e.shaped("dew_drop_farmland_growth:iron_sprinkler", [" C ", "IlI", " l "], {
    I: "minecraft:iron_block",
    C: "minecraft:copper_block",
    l: "#society:raw_logs",
  });
  e.shaped("dew_drop_farmland_growth:gold_sprinkler", ["fef", " s ", " G "], {
    G: "minecraft:gold_block",
    s: "dew_drop_farmland_growth:iron_sprinkler",
    f: "society:fire_quartz",
    e: "society:earth_crystal",
  });
  e.shaped("dew_drop_farmland_growth:gold_sprinkler", ["fef", "GlG", " l "], {
    l: "#society:raw_logs",
    G: "minecraft:gold_block",
    f: "society:fire_quartz",
    e: "society:earth_crystal",
  });
  e.shaped(
    "dew_drop_farmland_growth:diamond_sprinkler",
    ["nDn", " s ", " b "],
    {
      s: "dew_drop_farmland_growth:gold_sprinkler",
      D: "minecraft:diamond_block",
      b: "society:battery",
      n: "aquaculture:neptunium_nugget",
    }
  );
  e.shaped(
    "dew_drop_farmland_growth:diamond_sprinkler",
    ["nDn", "blb", " l "],
    {
      l: "#society:raw_logs",
      D: "minecraft:diamond_block",
      b: "society:battery",
      n: "aquaculture:neptunium_nugget",
    }
  );
  e.shaped(
    "dew_drop_farmland_growth:netherite_sprinkler",
    ["nNn", " s ", " j "],
    {
      s: "dew_drop_farmland_growth:diamond_sprinkler",
      j: "society:jade",
      N: "minecraft:netherite_ingot",
      n: "aquaculture:neptunium_ingot",
    }
  );
  e.shaped(
    "dew_drop_farmland_growth:netherite_sprinkler",
    ["nNn", "jlj", " l "],
    {
      l: "#society:raw_logs",
      j: "society:jade",
      N: "minecraft:netherite_ingot",
      n: "aquaculture:neptunium_ingot",
    }
  );

  // Botania
  e.shaped("society:botanical_tribute", ["CCC", "CMC", "CCC"], {
    M: "botania:manasteel_ingot",
    C: "numismatics:sun",
  });

  e.shaped("unusualfishmod:fluvial_shell", [" r ", "nhn", " d "], {
    r: "botania:rune_summer",
    h: "botania:horn_grass",
    d: "minecraft:nautilus_shell",
    n: "aquaculture:neptunium_ingot",
  });

  e.shaped("unusualfishmod:clement_shell", [" r ", " h ", " g "], {
    r: "botania:rune_envy",
    h: "unusualfishmod:fluvial_shell",
    g: "vinery:glowing_wine",
  });

  e.shaped("unusualfishmod:thunderous_shell", [" r ", "chc", " c "], {
    r: "botania:rune_wrath",
    h: "unusualfishmod:fluvial_shell",
    c: "society:charging_rod",
  });

  e.shaped("society:gnome", [" h ", "iti", " s "], {
    t: "society:tiny_gnome",
    i: "species:ichor_bottle",
    h: "simplehats:gnome",
    s: "paraglider:spirit_orb",
  });

  e.shaped("society:cornucopia", [" p ", "php", " p "], {
    p: "botania:pixie_dust",
    h: "botania:horn_grass",
  });
  e.shaped("society:cornucopia", [" c ", "shs", " s "], {
    c: "numismatics:neptunium_coin",
    s: "society:sparkstone_block",
    h: "minecraft:goat_horn",
  });

  e.shaped("society:mana_milker", ["rtr", "nMn", "lTl"], {
    r: "botania:rune_earth",
    t: "society:botanical_tribute",
    n: "botania:terrasteel_nugget",
    M: "society:milk_pail",
    l: "botania:livingwood_log",
    T: "botania:mana_tablet",
  });
  e.shaped("society:mana_clock", ["mrm", "ncn", "mTm"], {
    r: "botania:rune_sloth",
    T: "botania:terrasteel_ingot",
    m: "botania:manasteel_block",
    c: "minecraft:clock",
    n: "minecraft:netherite_ingot",
  });

  e.shaped("society:sparkstone_recycler", ["mrm", "ncn", "mTm"], {
    r: "botania:rune_greed",
    T: "botania:mana_pylon",
    m: "society:botanical_tribute",
    c: "botania:life_essence",
    n: "botania:dragonstone",
  });

  e.shaped("society:spark_gro", ["oso", "sps", "oso"], {
    o: "vintagedelight:organic_mash",
    s: "society:sparkstone_dust",
    p: "farm_and_charm:fertilizer",
  });

  e.shaped("4x society:spark_gro", ["oso", "sps", "oso"], {
    o: "vintagedelight:organic_mash",
    s: "society:sparkstone_dust",
    p: "society:moth_pollen",
  });
  e.shaped("society:growth_obelisk", ["sis", "sjs", "sbs"], {
    s: "minecraft:stone_bricks",
    i: "minecraft:netherite_ingot",
    j: "society:jade",
    b: "society:magic_bulb",
  });
  e.shaped("society:magic_bulb", ["dgf", "sbs", "SSS"], {
    d: "society:ribbit_drum",
    g: "society:ribbit_gadget",
    f: "society:froggy_helm",
    s: "society:sparkstone",
    S: "oreganized:silver_block",
    b: "etcetera:light_bulb",
  });
  [
    { input: "meadow:flecked_wool", output: "minecraft:brown_wool" },
    { input: "meadow:highland_wool", output: "minecraft:brown_wool" },
    { input: "meadow:patched_wool", output: "minecraft:blue_wool" },
    { input: "meadow:rocky_wool", output: "minecraft:light_gray_wool" },
    { input: "meadow:umbra_wool", output: "minecraft:light_blue_wool" },
    { input: "meadow:inky_wool", output: "minecraft:black_wool" },
    { input: "meadow:warped_wool", output: "minecraft:cyan_wool" },
  ].forEach((recipe) => {
    e.shapeless(recipe.output, [recipe.input]);
  });
  // Wallpapers
  const wallpaperPattern = ["ppp", "pfp", "ppp"];
  const baseboardPattern = ["ppp", "pfp", "bbb"];

  e.shaped("8x society:pink_flower_wallpaper", wallpaperPattern, {
    f: "minecraft:pink_tulip",
    p: "minecraft:paper",
  });
  e.shaped("8x society:pink_flower_baseboard", baseboardPattern, {
    f: "minecraft:pink_tulip",
    p: "minecraft:paper",
    b: "#minecraft:planks",
  });

  e.shaped("8x society:hive_wallpaper", wallpaperPattern, {
    f: "minecraft:honeycomb",
    p: "minecraft:paper",
  });
  e.shaped("8x society:bee_wallpaper", wallpaperPattern, {
    f: "minecraft:honey_bottle",
    p: "minecraft:paper",
  });
  e.shaped("8x society:hive_baseboard", baseboardPattern, {
    f: "minecraft:honeycomb",
    p: "minecraft:paper",
    b: "#minecraft:planks",
  });

  e.shaped("8x society:cloud_wallpaper", wallpaperPattern, {
    f: "etcetera:cotton_flower",
    p: "minecraft:paper",
  });
  e.shaped("8x society:cloud_baseboard", baseboardPattern, {
    f: "etcetera:cotton_flower",
    p: "minecraft:paper",
    b: "#minecraft:planks",
  });

  e.shaped("8x society:bunny_wallpaper", wallpaperPattern, {
    f: "society:fine_wool",
    p: "minecraft:paper",
  });
  e.shaped("8x society:bunny_baseboard", baseboardPattern, {
    f: "society:fine_wool",
    p: "minecraft:paper",
    b: "#minecraft:planks",
  });
});
