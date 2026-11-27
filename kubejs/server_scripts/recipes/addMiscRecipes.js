ServerEvents.recipes((e) => {
  e.shapeless('society:invitation[society:npc_id="society:carpenter"]', ['minecraft:crafting_table', "minecraft:wooden_axe", "minecraft:cobblestone"])
  // e.shapeless(Item.of('minecraft:sugar', 8, '{quality_food:{quality:3}}'), ["society:maple_syrup"])
  // e.shapeless(Item.of('minecraft:sugar', 3, '{quality_food:{quality:2}}'), ["minecraft:honey_bottle"])
  // e.shapeless(Item.of('minecraft:sugar', 1, '{quality_food:{quality:1}}'), ["minecraft:sugar_cane"])
  e.shapeless('farmersdelight:raw_pasta', ['veggiesdelight:potato_noodle', 'veggiesdelight:potato_noodle', 'veggiesdelight:potato_noodle'])
  e.shapeless("minecraft:feather", ['untitledduckmod:duck_feather'])
  // e.shaped("atmospheric:blood_orange", ["mmm", "mom", "mmm"], {
  //   o: "atmospheric:orange",
  //   m: "farm_and_charm:minced_beef",
  // });
  e.smelting("etcetera:rubber", "society:sap").xp(0.35);
  e.smelting("etcetera:bismuth_ingot", "create:crushed_raw_bismuth").xp(0.7);
  e.blasting("etcetera:bismuth_ingot", "create:crushed_raw_bismuth").xp(0.7);
  e.smelting("quark:charcoal_block", "meadow:fire_log").xp(4.0);
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "herbalbrews:lavender" }],
    tool: [
      {
        type: "farmersdelight:item_ability",
        action: "knife_dig"
      },
      {
        tag: "c:tools/knife"
      }
    ],
    result: [{ item: { id: "herbalbrews:lavender_blossom", count: 2 } }],
  });
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "twigs:silt" }],
    tool: [
      {
        type: "farmersdelight:item_ability",
        action: "shovel_dig"
      },
      {
        tag: "minecraft:shovels"
      }
    ],
    result: [{ item: { id: "twigs:silt_ball", count: 4 } }],
  });
  e.shapeless("quark:slime_in_a_bucket", [
    "society:petrified_slime",
    // "species:youth_potion",
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
  e.shapeless("society:book_of_stars", ["3x #society:skill_xp_book"]);
  e.shapeless("4x minecraft:quartz", ["minecraft:quartz_block"]);
  e.shapeless("4x society:cracked_egg", ["#society:large_eggs"]);
  e.shapeless("1x society:cracked_egg", ["#c:eggs"]);
  e.shapeless("3x minecraft:glass_bottle", ["vintagedelight:mason_jar"]);
  e.shapeless("society:magic_tunnel", ["society:magic_rope"]);
  e.shapeless("society:magic_rope", ["society:magic_tunnel"]);
  // e.shapeless("refinedstorage:network_transmitter", [
  //   "refinedstorage:network_receiver",
  // ]);
  // e.shapeless("refinedstorage:network_receiver", [
  //   "refinedstorage:network_transmitter",
  // ]);
  e.shaped("meadow:cobbled_limestone", ["cs ", "sc "], {
    c: "minecraft:cobblestone",
    s: "meadow:alpine_salt",
  });
  // e.shaped("16x society:enriched_bone_meal", ["bbb", "bfb", "bbb"], {
  //   f: "farm_and_charm:fertilizer",
  //   b: "minecraft:bone_block",
  // });
  e.shaped("society:magnifying_glass", [" g", "c "], {
    g: "minecraft:glass",
    c: "minecraft:copper_ingot",
  });

  // Mastery
  e.shaped("society:treasure_totem", ["fmf", "fsf", "fdf"], {
    s: "society:mystic_syrup",
    m: "#society:mineral",
    d: "society:dried_mossberry",
    f: "society:hardwood",
  });
  e.shaped("society:bubble_totem", ["fjf", "fsf", "fSf"], {
    s: "society:mystic_syrup",
    j: "society:ocean_jelly",
    S: "unusualfishmod:raw_sneep_snorp",
    f: "society:hardwood",
  });
  e.shaped("society:dry_totem", ["ppp", "ptp", "fff"], {
    p: "society:fire_quartz",
    t: "society:truffle_oil",
    f: "society:hardwood",
  });
  e.shaped("society:rain_totem", ["ppp", "ptp", "fff"], {
    p: "society:pine_tar",
    t: "society:truffle_oil",
    f: "society:hardwood",
  });
  e.shaped("society:thunder_totem", ["ppp", "tat", "fff"], {
    p: "society:oak_resin",
    t: "society:truffle_oil",
    a: "society:amulet_of_light",
    f: "society:hardwood",
  });
  // Earth Crystal
  // e.shaped("artisan_machines:tapper", [" C ", "lwl", " e "], {
  //   w: "meadow:wooden_bucket",
  //   l: "meadow:fire_log",
  //   e: "society:earth_crystal",
  //   C: "minecraft:copper_block",
  // });
  e.shaped("artisan_machines:mayonnaise_machine", [" e ", "fcf", "fCf"], {
    c: "minecraft:composter",
    C: "minecraft:copper_block",
    e: "society:earth_crystal",
    f: "meadow:fire_log",
  });
  e.shaped("artisan_machines:cheese_press", [" c ", "hch", "fff"], {
    h: "society:hardwood",
    f: "meadow:fire_log",
    c: "minecraft:copper_block"
  });
  e.shaped("meadow:cheese_form", [" C ", "pcp", " b "], {
    c: "artisan_machines:cheese_press",
    C: "minecraft:netherite_ingot",
    b: "society:battery",
    p: "society:pine_tar",
  });

  e.shaped("farmersdelight:rich_soil", ["ses", "ofo", "sos"], {
    f: "minecraft:dirt",
    o: "vintagedelight:organic_mash",
    e: "society:earth_crystal",
    s: "meadow:alpine_salt",
  });
  e.shaped("artisan_machines:loom", ["l  ", "l  ", "ltl"], {
    l: "meadow:fire_log",
    t: "society:treated_log",
  });
  e.shaped("minecraft:beehive", ["ppp", "hhh", "pop"], {
    h: "minecraft:iron_ingot",
    p: "#minecraft:planks",
    o: "society:maple_syrup",
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
  // Fire Quartz
  e.shaped("artisan_machines:seed_maker", [" f ", "pcp", "FgF"], {
    g: "minecraft:gold_block",
    c: "minecraft:composter",
    f: "society:earth_crystal",
    p: "society:pine_tar",
    F: "meadow:fire_log",
  });

  e.shaped("torchmaster:dreadlamp", [" C ", "fgf", " C "], {
    g: "minecraft:glowstone",
    C: "numismatics:crown",
    f: "society:fire_quartz",
  });
  // e.shaped("society:quality_washer", [" S ", "zcz", "fzf"], {
  //   c: "minecraft:cauldron",
  //   S: "sunrisegardening:high_quality_fertilizer",
  //   f: "society:fire_quartz",
  //   z: "create:zinc_ingot",
  // });
  e.shaped("herbalbrews:cauldron", [" C ", "fcf", " f "], {
    c: "minecraft:cauldron",
    C: "society:jade",
    f: "society:fire_quartz",
  });
  e.shaped("artisan_machines:oil_maker", ["ccg", "ccs", "fff"], {
    c: "minecraft:copper_block",
    g: "minecraft:gold_block",
    s: "supplementaries:jar",
    f: "society:hardwood",
  });
  e.shaped("artisan_machines:preserves_jar", ["LLL", "LbL", "CiC"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    C: "#c:storage_blocks/coal",
    i: "minecraft:copper_block",
  });
  e.shaped("artisan_machines:dehydrator", ["LGL", "pbp", "LfL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    G: "society:dried_grape",
    f: "society:battery",
    p: "society:pine_tar",
  });
  // e.shaped("society:snow_melter", [" f ", "fbf", " B "], {
  //   b: "minecraft:blast_furnace",
  //   B: "society:battery",
  //   f: "society:fire_quartz",
  // });
  e.shaped("artisan_machines:recycling_machine", ["LIL", "IbI", "LfL"], {
    b: "minecraft:barrel",
    L: "meadow:fire_log",
    f: "society:small_gizmo",
    I: "minecraft:iron_block",
  });
  // e.shaped("artisan_machines:mushroom_log", ["LLL", "LML", "mPm"], {
  //   L: "meadow:fire_log",
  //   P: "society:mossberry_preserves",
  //   m: "society:mossberry",
  //   M: "farmersdelight:rich_soil",
  // });
  // Battery
  e.shaped("artisan_machines:crystalarium", ["IaI", "SDS", "IbI"], {
    D: "minecraft:diamond_block",
    S: "minecraft:netherite_ingot",
    b: "society:battery",
    a: "society:ancient_parts",
    I: "oreganized:lead_block",
  });
  // e.shaped("artisan_machines:espresso_machine", ["iii", "ltl", "bib"], {
  //   t: "herbalbrews:tea_kettle",
  //   l: "minecraft:lime_dye",
  //   b: "society:battery",
  //   i: "create:zinc_ingot",
  // });
  // e.shaped("society:pickling_can", ["zbz", "scs", "zlz"], {
  //   l: "vintagedelight:salt_lamp_green",
  //   c: "minecraft:cactus",
  //   s: "oreganized:silver_ingot",
  //   b: "society:battery",
  //   z: "create:zinc_block",
  // });
  // e.shaped("shippingbin:smart_shipping_bin", ["SSS", "SsS", "SbS"], {
  //   s: "shippingbin:basic_shipping_bin",
  //   S: "create:zinc_ingot",
  //   b: "society:battery",
  // });
  // Prismatic
  // e.shaped("society:prize_machine", ["ttt", "tbt", "ttt"], {
  //   b: "bountiful:bountyboard",
  //   t: "society:prize_ticket",
  // });
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
  e.shaped("minecraft:elytra", ["p p", "wew", "p p"], {
    w: "society:elytra_wing",
    e: "minecraft:dragon_egg",
    p: "society:prismatic_shard",
  });

  e.shapeless("hooked:redstone_hook", [
    "hooked:diamond_hook",
    "society:prismatic_shard",
  ]);
  // e.shaped("artisan_machines:ancient_cask", [" p ", "vav", " p "], {
  //   a: "artisan_machines:aging_cask",
  //   p: "society:prismatic_shard",
  //   v: "society:aged_ancient_vespertine",
  // });
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
  // e.shaped("society:auto_grabber", ["lal", "bfb", "nsn"], {
  //   f: "society:animal_feed",
  //   a: "numismatics:ancient_coin",
  //   n: "minecraft:netherite_ingot",
  //   b: "society:battery",
  //   s: "society:sparkstone",
  //   l: "meadow:fire_log",
  // });
  // e.shaped("artisan_machines:artisan_hopper", ["zaz", "bhb", "nsn"], {
  //   a: "numismatics:ancient_coin",
  //   n: "minecraft:netherite_ingot",
  //   h: "minecraft:hopper",
  //   b: "society:battery",
  //   s: "society:sparkstone",
  //   z: "create:zinc_ingot",
  // });
  // e.shapeless("artisan_machines:artisan_hopper", ["4x artisan_machines:mini_artisan_hopper"]);
  // e.shapeless("4x artisan_machines:mini_artisan_hopper", ["artisan_machines:artisan_hopper"]);
  // e.shaped("artisan_machines:mini_artisan_hopper", ["zsz", "nhn", "aba"], {
  //   a: "numismatics:neptunium_coin",
  //   n: "minecraft:netherite_scrap",
  //   h: "minecraft:hopper",
  //   b: "society:battery",
  //   s: "society:sparkstone",
  //   z: "create:zinc_ingot",
  // });
  // e.shaped("society:fish_pond_basket", ["NaN", "bhb", "nsn"], {
  //   a: "farmersdelight:safety_net",
  //   n: "minecraft:netherite_ingot",
  //   h: "minecraft:hopper",
  //   b: "society:battery",
  //   s: "society:sparkstone",
  //   N: "plentifulponds:oceanite_cluster",
  // });
  // e.shaped("society:fish_pond_hatchery", ["NSN", "sbs", "sss"], {
  //   S: "society:sunlit_pearl",
  //   b: "society:fish_pond_basket",
  //   s: "oreganized:silver_ingot",
  //   N: "aquaculture:algae",
  // });
  // e.shaped("society:fish_pond_manager", ["NCN", "ScS", "NbN"], {
  //   c: "cozycafe:cafe_manager",
  //   C: "minecraft:conduit",
  //   b: "society:magic_bulb",
  //   S: "society:sunlit_pearl",
  //   N: "plentifulponds:oceanite_cluster",
  // });
  // Fish
  e.shaped("plentifulponds:fish_pond", [" j ", "PwP", "rNr"], {
    j: "society:river_jelly",
    N: "plentifulponds:oceanite_cluster",
    P: "starcatcher:pearl",
    r: "society:oak_resin",
    w: "meadow:wooden_bucket",
  });
  e.shaped("society:sunlit_pearl", [" n ", " p ", "r o"], {
    n: "society:lava_jelly",
    p: "starcatcher:pearl",
    r: "society:river_jelly",
    o: "society:ocean_jelly",
  });
  e.shaped("artisan_machines:fish_smoker", ["lCl", "asa", "lNl"], {
    s: "minecraft:smoker",
    N: "plentifulponds:oceanite_cluster",
    a: "society:aquamarine",
    C: "society:sunlit_pearl",
    l: "meadow:fire_log",
  });
  e.shaped("artisan_machines:bait_maker", [" S ", "asa", "lll"], {
    s: "artisan_machines:seed_maker",
    a: "plentifulponds:oceanite_cluster",
    S: "society:sunlit_pearl",
    l: "create:zinc_ingot",
  });
  // e.shaped("society:auto_worm_farm", ["lpl", "asa", "CSC"], {
  //   s: "farmersdelight:rich_soil",
  //   S: "society:sunlit_pearl",
  //   p: "create:precision_mechanism",
  //   a: "aquaculture:worm_farm",
  //   C: "society:battery",
  //   l: "minecraft:iron_ingot",
  // });
  e.shaped("artisan_machines:deluxe_worm_farm", ["zNz", "pwp", "zaz"], {
    w: "minecraft:composter",
    N: "plentifulponds:oceanite_cluster",
    a: "society:aquamarine",
    p: 'starcatcher:pearl',
    z: "create:zinc_block",
  });
  // e.shaped("crabbersdelight:crab_trap", ["nsn", "s s", "wpw"], {
  //   s: "create:zinc_ingot",
  //   n: "farmersdelight:safety_net",
  //   p: "starcatcher:pearl",
  //   w: "#minecraft:wooden_slabs",
  // });
  e.shaped("artisan_machines:wine_keg", ["FoF", "IbI", "FfF"], {
    b: "minecraft:barrel",
    I: "minecraft:iron_block",
    I: "minecraft:iron_block",
    f: "minecraft:quartz_block",
    o: "society:oak_resin",
    F: "meadow:fire_log",
  });

  // Jade
  e.shaped("artisan_machines:aging_cask", ["jjj", "pbp", "SpS"], {
    b: "artisan_machines:wine_keg",
    S: "oreganized:lead_block",
    j: "society:hardwood",
    p: "society:pine_tar",
  });

  // Other
  e.shaped("artisan_machines:charging_rod", [" f ", "zlz", "ZbZ"], {
    Z: "create:zinc_block",
    z: "etcetera:bismuth_ingot",
    l: "minecraft:lightning_rod",
    f: "society:fire_quartz",
    b: "quark:blaze_lantern",
  });
  // e.shaped("society:auto_tapper", [" F ", "bTb", "fPf"], {
  //   f: "create_factory_logistics:fluid_mechanism",
  //   F: "create:fluid_tank",
  //   T: "society:tapper",
  //   b: "society:battery",
  //   P: "create:precision_mechanism",
  // });
  e.shapeless("society:furniture_box", ["4x #society:loot_furniture"]);
  // e.shapeless("society:plushie_capsule", ["4x #society:plushies"]);

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
  e.shaped("8x minecraft:gunpowder", ["ggg", "gcg", "ggg"], {
    g: "minecraft:glowstone_dust",
    c: "vintagedelight:ghost_charcoal",
  });

  e.shapeless("society:energy_drink", [
    "society:ancient_juice",
    "orchard:pawpaw",
    "minecraft:sugar",
  ]);
  // e.shapeless("society:pink_energy_drink", [
  //   "society:sparkpod_juice",
  //   "orchard:peach",
  //   "minecraft:sugar",
  // ]);
  // e.shapeless("society:white_energy_drink", [
  //   "society:starfruit_juice",
  //   "orchard:dragonfruit",
  //   "minecraft:sugar",
  // ]);
  // e.shapeless("society:mana_energy_drink", [
  //   "society:mana_fruit_juice",
  //   "orchard:lemon",
  //   "minecraft:sugar",
  // ]);
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
  // e.shapeless('society:suspicious_milk_tea', [
  //   'society:warped_milk',
  //   'herbalbrews:black_tea',
  //   'atmospheric:aloe_gel_bottle'
  // ]);
  e.shapeless("4x farmersdelight:canvas", ["society:canvas"]);
  e.shapeless("1x society:tubasmoke_stick", [
    "society:dried_tubabacco_leaf",
    "vintagedelight:ghost_charcoal",
    "minecraft:paper",
  ]);
  // [
  // ].forEach((fish) => {
  //   e.shapeless(fish, [`society:smoked_${fish.path}`, "1x minecraft:blue_ice"]);
  // });
  // Sprinklers
  e.shaped("sunrisegardening:iron_sprinkler", [" C ", "IlI", " l "], {
    I: "minecraft:iron_block",
    C: "minecraft:copper_block",
    l: "#society:raw_logs",
  });
  e.shaped("sunrisegardening:gold_sprinkler", ["fef", " s ", " G "], {
    G: "minecraft:gold_block",
    s: "sunrisegardening:iron_sprinkler",
    f: "society:fire_quartz",
    e: "society:earth_crystal",
  });
  e.shaped("sunrisegardening:gold_sprinkler", ["fef", "GlG", " l "], {
    l: "#society:raw_logs",
    G: "minecraft:gold_block",
    f: "society:fire_quartz",
    e: "society:earth_crystal",
  });
  // e.shaped(
  //   "society:caterpillar_box",
  //   ["isi", "abm", "iBi"],
  //   {
  //     s: "#minecraft:saplings",
  //     i: "minecraft:iron_block",
  //     b: "minecraft:barrel",
  //     B: "society:battery",
  //     a: "society:butterfly_amber",
  //     m: "society:moth_pollen",
  //   }
  // );
  e.shaped(
    "sunrisegardening:diamond_sprinkler",
    ["nDn", " s ", " b "],
    {
      s: "sunrisegardening:gold_sprinkler",
      D: "minecraft:diamond_block",
      b: "society:battery",
      n: "plentifulponds:oceanite",
    }
  );
  e.shaped(
    "sunrisegardening:diamond_sprinkler",
    ["nDn", "blb", " l "],
    {
      l: "#society:raw_logs",
      D: "minecraft:diamond_block",
      b: "society:battery",
      n: "plentifulponds:oceanite",
    }
  );
  e.shaped(
    "sunrisegardening:netherite_sprinkler",
    ["nNn", " s ", " j "],
    {
      s: "sunrisegardening:diamond_sprinkler",
      j: "society:jade",
      N: "minecraft:netherite_ingot",
      n: "plentifulponds:oceanite_cluster",
    }
  );
  e.shaped(
    "sunrisegardening:netherite_sprinkler",
    ["nNn", "jlj", " l "],
    {
      l: "#society:raw_logs",
      j: "society:jade",
      N: "minecraft:netherite_ingot",
      n: "plentifulponds:oceanite_cluster",
    }
  );

  // Botania

  // e.shaped("unusualfishmod:fluvial_shell", [" r ", "nhn", " d "], {
  //   r: "botania:rune_summer",
  //   h: "botania:horn_grass",
  //   d: "minecraft:nautilus_shell",
  //   n: "plentifulponds:oceanite_cluster",
  // });

  // e.shaped("unusualfishmod:clement_shell", [" r ", " h ", " g "], {
  //   r: "botania:rune_envy",
  //   h: "unusualfishmod:fluvial_shell",
  //   g: "vinery:glowing_wine",
  // });

  // e.shaped("unusualfishmod:thunderous_shell", [" r ", "chc", " c "], {
  //   r: "botania:rune_wrath",
  //   h: "unusualfishmod:fluvial_shell",
  //   c: "society:charging_rod",
  // });

  // e.shaped("society:gnome", [" h ", "iti", " s "], {
  //   t: "artisan_machines:tiny_gnome",
  //   i: "species:ichor_bottle",
  //   h: "simplehats:gnome",
  //   s: "paraglider:spirit_orb",
  // });

  e.shaped("society:cornucopia", [" c ", "shs", " s "], {
    c: "numismatics:neptunium_coin",
    s: "society:sparkstone_block",
    h: "minecraft:goat_horn",
  });
  // e.shaped("society:drum_cornucopia", ["LLL", "lcl", "lbl"], {
  //   L: "minecraft:leather",
  //   c: "society:cornucopia",
  //   b: "society:magic_bulb",
  //   l: "meadow:fire_log"
  // });

  // e.shaped("society:mana_sprinkler", ["lil", "iSi", "lPl"], {
  //   i: "botania:manasteel_ingot",
  //   S: "sunrisegardening:gold_sprinkler",
  //   l: "botania:livingwood_log",
  //   P: "botania:pump",
  // });
  // e.shaped("society:mana_clock", ["mrm", "ncn", "mTm"], {
  //   r: "botania:rune_sloth",
  //   T: "botania:terrasteel_ingot",
  //   m: "botania:manasteel_block",
  //   c: "minecraft:clock",
  //   n: "minecraft:netherite_ingot",
  // });

  // e.shaped("society:sparkstone_recycler", ["mrm", "ncn", "mTm"], {
  //   r: "botania:rune_greed",
  //   T: "botania:mana_pylon",
  //   m: "society:botanical_tribute",
  //   c: "botania:life_essence",
  //   n: "botania:dragonstone",
  // });

  // e.shaped("society:spark_gro", ["oso", "sps", "oso"], {
  //   o: "vintagedelight:organic_mash",
  //   s: "society:sparkstone_dust",
  //   p: "farm_and_charm:fertilizer",
  // });

  e.shaped("4x society:spark_gro", ["oso", "sps", "oso"], {
    o: "vintagedelight:organic_mash",
    s: "society:sparkstone_dust",
    p: "society:moth_pollen",
  });
  // e.shaped("society:growth_obelisk", ["sis", "sjs", "sbs"], {
  //   s: "minecraft:stone_bricks",
  //   i: "minecraft:netherite_ingot",
  //   j: "society:jade",
  //   b: "society:magic_bulb",
  // });
  e.shaped("society:magic_bulb", ["dgf", "sbs", "SSS"], {
    d: "society:ribbit_drum",
    g: "society:ribbit_gadget",
    f: "society:froggy_helm",
    s: "society:sparkstone",
    S: "oreganized:silver_block",
    b: "etcetera:light_bulb",
  });
  [
    { input: "meadow:rustic_wool", output: "minecraft:brown_wool" },
    { input: "meadow:jacquard_wool", output: "minecraft:blue_wool" },
    { input: "meadow:plaid_wool", output: "minecraft:light_gray_wool" },
    { input: "meadow:chambray_wool", output: "minecraft:light_blue_wool" },
    { input: "meadow:tweed_wool", output: "minecraft:black_wool" },
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

  // e.shapeless("society:sun_candy", ['pamhc2trees:lemonitem', 'atmospheric:blood_orange', 'pamhc2trees:mangoitem', 'atmospheric:passion_fruit', Item.of('splendid_slimes:plort', '{plort:{id:"splendid_slimes:sweet"}}').strongNBT(), 'pamhc2trees:dragonfruititem', 'pamhc2trees:starfruititem', 'pamhc2trees:plumitem', 'pamhc2trees:peachitem'])
  // Sophisticated
  e.shapeless("sophisticatedbackpacks:stack_upgrade_tier_1", ["2x sophisticatedbackpacks:stack_upgrade_starter_tier"]);
  e.shapeless("sophisticatedbackpacks:stack_upgrade_tier_2", ["2x sophisticatedbackpacks:stack_upgrade_tier_1"]);
  e.shapeless("sophisticatedbackpacks:stack_upgrade_tier_3", ["2x sophisticatedbackpacks:stack_upgrade_tier_2"]);
  e.shapeless("sophisticatedbackpacks:stack_upgrade_tier_4", ["2x sophisticatedbackpacks:stack_upgrade_tier_3"]);


  e.shapeless("3x sophisticatedstorage:stack_upgrade_tier_2", ["4x sophisticatedstorage:stack_upgrade_tier_1_plus"]);
  e.shapeless("sophisticatedstorage:stack_upgrade_tier_2", ["2x sophisticatedstorage:stack_upgrade_tier_1"]);
  e.shapeless("sophisticatedstorage:stack_upgrade_tier_3", ["2x sophisticatedstorage:stack_upgrade_tier_2"]);
  e.shapeless("sophisticatedstorage:stack_upgrade_tier_4", ["2x sophisticatedstorage:stack_upgrade_tier_3"]);
  e.shapeless("sophisticatedstorage:stack_upgrade_tier_5", ["2x sophisticatedstorage:stack_upgrade_tier_4"]);
  e.shapeless("sophisticatedstorage:stack_upgrade_omega_tier", ["4x sophisticatedstorage:stack_upgrade_tier_5"]);

  e.shapeless("sophisticatedstorage:basic_to_netherite_tier_upgrade", ["sophisticatedstorage:basic_to_copper_tier_upgrade", "sophisticatedstorage:copper_to_iron_tier_upgrade", "sophisticatedstorage:iron_to_gold_tier_upgrade", "sophisticatedstorage:gold_to_diamond_tier_upgrade", "sophisticatedstorage:diamond_to_netherite_tier_upgrade"])
  e.shapeless("sophisticatedstorage:basic_to_diamond_tier_upgrade", ["sophisticatedstorage:basic_to_copper_tier_upgrade", "sophisticatedstorage:copper_to_iron_tier_upgrade", "sophisticatedstorage:iron_to_gold_tier_upgrade", "sophisticatedstorage:gold_to_diamond_tier_upgrade"])
  e.shapeless("sophisticatedstorage:basic_to_gold_tier_upgrade", ["sophisticatedstorage:basic_to_copper_tier_upgrade", "sophisticatedstorage:copper_to_iron_tier_upgrade", "sophisticatedstorage:iron_to_gold_tier_upgrade"])
  e.shapeless("sophisticatedstorage:basic_to_iron_tier_upgrade", ["sophisticatedstorage:basic_to_copper_tier_upgrade", "sophisticatedstorage:copper_to_iron_tier_upgrade"])
  e.shapeless("sophisticatedstorage:basic_to_copper_tier_upgrade", ["sophisticatedstorage:basic_to_copper_tier_upgrade"])

  e.shapeless("sunrisegardening:hyper_fertilized_sand", ["minecraft:sand", "sunrisegardening:hyper_fertilizer"])
  e.shapeless("sunrisegardening:weak_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:weak_fertilizer"])
  e.shapeless("sunrisegardening:strong_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:strong_fertilizer"])
  e.shapeless("sunrisegardening:hyper_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:hyper_fertilizer"])
  e.shapeless("sunrisegardening:bountiful_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:bountiful_fertilizer"])
  e.shapeless("sunrisegardening:hydrating_farmland", ["minecraft:dirt", "sunrisegardening:hydrating_fertilizer"])
  e.shapeless("sunrisegardening:deluxe_hydrating_farmland", ["minecraft:dirt", "sunrisegardening:deluxe_hydrating_fertilizer"])
  e.shapeless("sunrisegardening:low_quality_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:low_quality_fertilizer"])
  e.shapeless("sunrisegardening:high_quality_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:high_quality_fertilizer"])
  e.shapeless("sunrisegardening:pristine_quality_fertilized_farmland", ["minecraft:dirt", "sunrisegardening:pristine_quality_fertilizer"])

  e.custom({
    type: "create:filling",
    ingredients: [
      { "item": "vintagedelight:roasted_peanut" },
      { "type": "neoforge:tag", "amount": 125, "tag": "c:honey" }
    ],
    "results": [{ "id": "vintagedelight:honey_roasted_peanut" }]
  });
});
