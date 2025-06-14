console.info("[SOCIETY] addMiscRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("atmospheric:blood_orange", ["mmm", "mom", "mmm"], {
    o: "atmospheric:orange",
    m: "farm_and_charm:minced_beef",
  });
  e.smelting("society:rubber", "society:sap");
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
  e.shapeless("3x society:prismatic_shard", ["society:token_of_unity", "society:prismatic_shard"]);
  e.shapeless("3x quark:soul_bead", ["netherdepthsupgrade:soulsucker"]);
  e.shapeless("society:book_of_stars", ["3x #society:skill_book"]);
  e.shapeless("4x minecraft:quartz", ["minecraft:quartz_block"]);
  e.shapeless("4x society:cracked_egg", ["#society:large_eggs"]);
  e.shapeless("1x society:cracked_egg", ["#forge:eggs"]);
  e.shapeless("1x society:fish_pond", ["society:fish_pond"]);
  e.shaped("minecraft:bundle", [" s ", " l "], {
    s: "minecraft:string",
    l: "minecraft:leather",
  });
  e.shaped("32x society:enriched_bone_meal", ["bbb", "bfb", "bbb"], {
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
  // Earth Crystal
  e.shapeless("society:tapper", ["treetap:tap"]);
  e.shaped("society:tapper", [" C ", "lwl", " e "], {
    w: "meadow:wooden_bucket",
    l: "meadow:fire_log",
    e: "society:earth_crystal",
    C: "minecraft:copper_block",
  });
  e.shaped("society:mayonnaise_machine", [" C ", "pcp", " e "], {
    c: "minecraft:composter",
    C: "numismatics:crown",
    e: "society:earth_crystal",
    p: "society:pine_tar",
  });
  e.shaped("meadow:cheese_form", [" C ", "pcp", " e "], {
    c: "meadow:cheese_rack",
    C: "numismatics:crown",
    e: "society:earth_crystal",
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
  e.shaped("farm_and_charm:roaster", [" C ", "ece", " e "], {
    C: "numismatics:crown",
    e: "society:earth_crystal",
    c: "farmersdelight:cooking_pot",
  });
  e.shaped("herbalbrews:tea_kettle", [" C ", "ici", "eie"], {
    C: "numismatics:crown",
    c: "minecraft:cauldron",
    e: "society:earth_crystal",
    i: "minecraft:iron_ingot",
  });
  e.shaped("herbalbrews:copper_tea_kettle", [" C ", "ici", "eie"], {
    C: "numismatics:crown",
    c: "minecraft:cauldron",
    e: "society:earth_crystal",
    i: "minecraft:copper_ingot",
  });
  e.shaped("4x farm_and_charm:silo_wood", ["lCl", "rbr", "lel"], {
    C: "numismatics:crown",
    b: "minecraft:barrel",
    l: "meadow:fire_log",
    r: "society:oak_resin",
    e: "society:earth_crystal",
  });
  e.shaped("bakery:baker_station", ["rCr", "ppp", "pep"], {
    C: "numismatics:crown",
    p: "#minecraft:planks",
    e: "society:earth_crystal",
    r: "society:oak_resin",
  });
  e.shaped("farm_and_charm:crafting_bowl", [" C ", "zbz", "eze"], {
    C: "numismatics:crown",
    b: "minecraft:bowl",
    e: "society:earth_crystal",
    z: "create:zinc_ingot",
  });
  // Fire Quartz
  e.shaped("society:seed_maker", [" C ", "pcp", " f "], {
    c: "minecraft:composter",
    C: "numismatics:sun",
    f: "society:earth_crystal",
    p: "society:pine_tar",
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
    S: "numismatics:sun",
    f: "society:fire_quartz",
    z: "create:zinc_ingot",
  });
  e.shaped("farm_and_charm:mincer", ["iCi", "ici", "ifi"], {
    c: "minecraft:iron_block",
    C: "numismatics:crown",
    f: "society:fire_quartz",
    i: "minecraft:iron_ingot",
  });
  e.shaped("vinery:apple_press", ["CfC", "tbt", "tft"], {
    b: "minecraft:barrel",
    C: "numismatics:crown",
    f: "society:fire_quartz",
    t: "society:treated_log",
  });
  e.shaped("vinery:fermentation_barrel", [" C ", "pbp", "fpf"], {
    b: "minecraft:barrel",
    C: "numismatics:sun",
    f: "society:fire_quartz",
    p: "society:pine_tar",
  });
  e.shaped("herbalbrews:cauldron", [" C ", "fcf", " f "], {
    c: "minecraft:cauldron",
    C: "numismatics:crown",
    f: "society:fire_quartz",
  });
  e.shaped("society:preserves_jar", ["LLL", "pbp", "CiC"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    C: "#forge:storage_blocks/coal",
    i: "minecraft:iron_block",
    p: "society:pine_tar",
  });
  e.shaped("society:dehydrator", ["LGL", "pbp", "LfL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    G: "society:raisins",
    f: "society:fire_quartz",
    p: "society:pine_tar",
  });
  e.shaped("society:recycling_machine", ["LGL", "fbf", "LIL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    G: "numismatics:crown",
    f: "society:fire_quartz",
    I: "minecraft:iron_block",
  });
  // Battery
  e.shaped("society:crystalarium", ["SiS", "iDi", "SbS"], {
    D: "minecraft:diamond_block",
    S: "numismatics:sun",
    b: "society:battery",
    i: "create:industrial_iron_block",
  });
  e.shaped("society:espresso_machine", ["iii", "ltl", "bib"], {
    t: "herbalbrews:tea_kettle",
    l: "minecraft:lime_dye",
    b: "society:battery",
    i: "create:zinc_ingot",
  });
  e.shaped("beachparty:mini_fridge", ["zlz", "ziz", "zbz"], {
    l: "minecraft:lime_dye",
    i: "minecraft:ice",
    b: "society:battery",
    z: "create:zinc_ingot",
  });
  e.shaped("shippingbin:smart_shipping_bin", ["SSS", "SsS", "SbS"], {
    s: "shippingbin:basic_shipping_bin",
    S: "numismatics:sun",
    b: "society:battery",
  });
  // Prismatic
  e.shaped("society:car_key", [" p ", " f ", " t "], {
    f: "relics:horse_flute",
    t: "numismatics:sun",
    p: "society:prismatic_shard",
  });
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
    m: "#society:mirrors",
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
  e.shapeless("rehooked:red_hook", ["rehooked:diamond_hook", "society:prismatic_shard"]);
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
  e.shaped("society:fish_pond_basket", ["NaN", "bhb", "nsn"], {
    a: "farmersdelight:safety_net",
    n: "minecraft:netherite_ingot",
    h: "minecraft:hopper",
    b: "society:battery",
    s: "society:sparkstone",
    N: "aquaculture:neptunium_ingot",
  });
  // Fish
  e.shaped("society:fish_pond", ["PwP", "rNr"], {
    N: "aquaculture:neptunium_ingot",
    P: "crabbersdelight:pearl",
    r: "society:oak_resin",
    w: "meadow:wooden_water_bucket",
  });
  e.shaped("society:fish_smoker", ["lNl", "asa", "lCl"], {
    s: "minecraft:smoker",
    N: "aquaculture:neptunium_ingot",
    a: "society:aquamarine",
    C: "numismatics:sun",
    l: "meadow:fire_log",
  });
  e.shaped("society:bait_maker", ["lNl", "asa", "lCl"], {
    s: "society:seed_maker",
    N: "aquaculture:neptunium_ingot",
    a: "crabbersdelight:pearl_block",
    C: "numismatics:sun",
    l: "create:zinc_ingot",
  });
  e.shaped("society:auto_worm_farm", ["lpl", "asa", "lCl"], {
    s: "farmersdelight:rich_soil",
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

  // Jade
  e.shaped("society:aging_cask", ["SjS", "pbp", "SSS"], {
    b: "vinery:fermentation_barrel",
    S: "numismatics:sun",
    j: "society:jade",
    p: "society:pine_tar",
  });

  // Other
  e.shaped("society:charging_rod", ["CZC", "zlz", "ZbZ"], {
    Z: "create:zinc_block",
    z: "create:zinc_ingot",
    C: "numismatics:sun",
    l: "minecraft:lightning_rod",
    b: "quark:blaze_lantern",
  });
  e.shaped("society:auto_tapper", ["fFf", "bTb", "fPf"], {
    f: "meadow:fire_log",
    F: "create:fluid_tank",
    T: "society:tapper",
    b: "society:battery",
    P: "create:precision_mechanism",
  });
  e.shapeless("society:furniture_box", ["4x #society:loot_furniture"]);
  e.smoking("pamhc2trees:roastedhazelnutitem", "pamhc2trees:hazelnutitem").xp(0.35);
  // Crab trap bait
  e.shapeless("crabbersdelight:crab_trap_bait", ["aquaculture:worm"]);
  e.shapeless("4x crabbersdelight:crab_trap_bait", ["aquaculture:minnow"]);
  e.shapeless("16x crabbersdelight:crab_trap_bait", ["aquaculture:leech"]);
  // Dramatic Doors
  e.shapeless("dramaticdoors:short_silver_door", [
    "dramaticdoors:short_iron_door",
    "oreganized:silver_ingot",
  ]);
  e.shapeless("dramaticdoors:tall_silver_door", [
    "dramaticdoors:tall_iron_door",
    "oreganized:silver_ingot",
  ]);
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
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.split(":")[1]}`]);
  });
  global.frozenGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_drum") return;
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.split(":")[1]}`]);
  });
  global.magmaGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_gadget") return;
    e.shapeless(`3x ${geode.item}`, [`society:pristine_${geode.item.split(":")[1]}`]);
  });
  global.gems.forEach((gem) => {
    e.shapeless(`3x ${gem.item}`, [`society:pristine_${gem.item.split(":")[1]}`]);
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
    e.shapeless(`3x ${gem}`, [`society:pristine_${gem.split(":")[1]}`]);
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
    e.shapeless(fish, [`society:smoked_${fish.split(":")[1]}`, "1x minecraft:blue_ice"]);
  });
  // Sprinklers
  e.shaped("society:iron_sprinkler", [" C ", "IlI", " l "], {
    I: "minecraft:iron_block",
    C: "minecraft:copper_block",
    l: "#society:raw_logs",
  });
  e.shaped("society:gold_sprinkler", ["fef", "GlG", " l "], {
    l: "#society:raw_logs",
    G: "minecraft:gold_block",
    f: "society:fire_quartz",
    e: "society:earth_crystal",
  });
  e.shaped("society:diamond_sprinkler", ["nDn", "blb", " l "], {
    l: "#society:raw_logs",
    D: "minecraft:diamond_block",
    b: "society:battery",
    n: "aquaculture:neptunium_nugget",
  });
  e.shaped("society:netherite_sprinkler", ["nNn", "jlj", " l "], {
    l: "#society:raw_logs",
    j: "society:jade",
    N: "minecraft:netherite_ingot",
    n: "aquaculture:neptunium_ingot",
  });

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
});
