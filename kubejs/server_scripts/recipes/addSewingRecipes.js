console.info("[SOCIETY] addSewingRecipes.js loaded");

ServerEvents.recipes((e) => {
  const createSewingRecipe = (material, result, additionalItem, resultCount) => {
    let sewingInputs = [
      {
        count: 1,
        ingredient: {
          item: "society:canvas",
        },
      },
      {
        count: 1,
        ingredient: {
          item: material,
        },
      },
    ];
    additionalItem && sewingInputs.push(additionalItem);

    e.custom({
      type: "sewingkit:sewing",
      materials: sewingInputs,
      result: {
        count: resultCount || 1,
        item: result,
      },
      tool: {
        type: "sewingkit:tool_ingredient",
        tool_type: "sewingkit_sew",
      },
    });
  };

  const colorItems = new Map([
    ["green", "society:malachite"],
    ["cyan", "society:ghost_crystal"],
    ["light_blue", "society:blueberry_preserves"],
    ["blue", "society:ancient_fruit"],
    ["purple", "society:amethyst_chunk"],
    ["magenta", "pamhc2trees:plumitem"],
    ["pink", "brewery:whiskey_lilitusinglemalt"],
    ["white", "beachparty:coconut_milkshake"],
    ["light_gray", "supplementaries:ash_brick"],
    ["gray", "society:truffle"],
    ["black", "society:smoked_wither_bonefish"],
    ["brown", "pamhc2trees:cinnamonitem"],
    ["red", "pamhc2trees:lycheeitem"],
    ["orange", "atmospheric:orange"],
    ["yellow", "pamhc2trees:bananaitem"],
    ["lime", "society:jamborite"],
  ]);
  [
    "etcetera:green_sweater",
    "etcetera:cyan_sweater",
    "etcetera:light_blue_sweater",
    "etcetera:blue_sweater",
    "etcetera:purple_sweater",
    "etcetera:magenta_sweater",
    "etcetera:pink_sweater",
    "etcetera:white_sweater",
    "etcetera:light_gray_sweater",
    "etcetera:gray_sweater",
    "etcetera:black_sweater",
    "etcetera:brown_sweater",
    "etcetera:red_sweater",
    "etcetera:orange_sweater",
    "etcetera:yellow_sweater",
    "etcetera:lime_sweater",
    "etcetera:white_hat",
    "etcetera:light_gray_hat",
    "etcetera:gray_hat",
    "etcetera:brown_hat",
    "etcetera:red_hat",
    "etcetera:orange_hat",
    "etcetera:yellow_hat",
    "etcetera:lime_hat",
    "etcetera:green_hat",
    "etcetera:cyan_hat",
    "etcetera:light_blue_hat",
    "etcetera:blue_hat",
    "etcetera:purple_hat",
    "etcetera:magenta_hat",
    "etcetera:pink_hat",
  ].forEach((item) => {
    createSewingRecipe(
      colorItems.get(item.substring(item.indexOf(":") + 1, item.lastIndexOf("_"))),
      item,
      { count: 16, ingredient: { item: "etcetera:cotton_flower" } }
    );
  });
  colorItems.forEach((value, key) => {
    createSewingRecipe(value, `society:${key}_sheet`, undefined, 4);
  });
  createSewingRecipe("supplementaries:globe", "etcetera:trader_hood");
  createSewingRecipe("supplementaries:globe", "etcetera:trader_robe");

  createSewingRecipe("beachparty:honey_cocktail", "beachparty:beach_hat");
  createSewingRecipe("herbalbrews:oolong_tea", "herbalbrews:top_hat");
  createSewingRecipe("society:holy_symbol", "herbalbrews:witch_hat");

  ["meadow:fur_boots", "meadow:fur_leggings", "meadow:fur_chestplate", "meadow:fur_helmet"].forEach(
    (item) => {
      createSewingRecipe("society:aged_buffalo_cheese_block", item);
    }
  );
  [
    "vinery:winemaker_apron",
    "vinery:winemaker_boots",
    "vinery:winemaker_leggings",
    "vinery:straw_hat",
  ].forEach((item) => {
    createSewingRecipe("vinery:jellie_wine", item);
  });
  [
    "brewery:brewfest_shoes",
    "brewery:brewfest_dress",
    "brewery:brewfest_blouse",
    "brewery:brewfest_hat_red",
    "brewery:brewfest_hat",
    "brewery:brewfest_boots",
    "brewery:brewfest_trousers",
    "brewery:brewfest_regalia",
  ].forEach((item) => {
    createSewingRecipe("brewery:dark_brew", item);
  });
  [
    "candlelight:dress",
    "candlelight:flower_crown",
    "candlelight:shirt",
    "candlelight:trousers_and_vest",
    "candlelight:necktie",
  ].forEach((item) => {
    createSewingRecipe("candlelight:lasagne", item);
  });
  [
    "candlelight:chefs_boots",
    "candlelight:chefs_pants",
    "candlelight:chefs_jacket",
    "candlelight:cooking_hat",
  ].forEach((item) => {
    createSewingRecipe("farmersdelight:cooking_pot", item);
  });
  const createHatSewingRecipe = (index, materials, coinCount, result) => {
    e.custom({
      type: "sewingkit:sewing",
      materials: [
        {
          count: 1,
          ingredient: {
            item: "society:canvas",
          },
        },
        {
          count: coinCount,
          ingredient: {
            item: "numismatics:sun",
          },
        },
        {
          count: 1,
          ingredient: {
            item:
              index >= materials.length
                ? materials[index % materials.length].item
                : materials[index].item,
          },
        },
      ],
      result: {
        item: `simplehats:${result}`,
      },
      tool: {
        type: "sewingkit:tool_ingredient",
        tool_type: "sewingkit_sew",
      },
    });
  };
  [
    "acornhat",
    "alien_antennae",
    "astronaut",
    "bandana",
    "baseballhat",
    "beanie",
    "bicorne",
    "bigbrain",
    "bigeyes",
    "binky",
    "bowler",
    "brownbrick",
    "burgerhat",
    "bucket",
    "caddycap",
    "cardboard_box",
    "cartoonegg",
    "chalk_stick",
    "cheeseslice",
    "chefshat",
    "chickenhead",
    "circular_glasses",
    "cowboy",
    "crown",
    "cucumbereyemask",
    "cyclopseye",
    "dairyqueen",
    "dangereqsue",
    "doubletake",
    "elfhat",
    "explorerhat",
    "eyepatch",
    "fez",
    "fro",
    "gnome",
    "goggles",
    "grandmadisguise",
    "halo",
    "headshot",
    "horsemask",
    "largehorns",
    "lilbow",
    "mohawk",
    "paperbag",
    "partyhat",
    "pighead",
    "pog",
    "policebucket",
    "poofballhat",
    "popehat",
    "ranahat",
    "right_hand_hat",
    "round_purple_wig",
    "round_red_wig",
    "rubbernipple",
    "sausage",
    "scouter",
    "sheep",
    "sleepeyemask",
    "sombrero",
    "sprout",
    "stuck_lollipop",
    "swimmer",
    "tick_on_head",
    "toast",
    "tophat",
    "triangleshades",
    "tricorne",
    "udder_hat",
    "ushanka",
    "villagernose",
    "worm_hat",
  ].forEach((hat, index) => {
    createHatSewingRecipe(index, global.fish, 1, hat);
  });
  const geodeMinerals = [];
  Array.prototype.push.apply(geodeMinerals, global.geodeList);
  Array.prototype.push.apply(geodeMinerals, global.frozenGeodeList);
  Array.prototype.push.apply(geodeMinerals, global.magmaGeodeList);

  [
    "angrymask",
    "antlers",
    "apple",
    "beetle_on_head",
    "beret_ribbon",
    "bigcrown",
    "bigribbon",
    "bigstevehead",
    "breadhat",
    "camerabeard",
    "carrotonstick",
    "cat_hat",
    "chickenonhead",
    "cuphead",
    "dimmahat",
    "disguise",
    "doctorhat",
    "dorkglassesandteeth",
    "dragonhead",
    "dragonskull",
    "drinkinhat",
    "dumhat",
    "dwarfminerbeard",
    "easterhead",
    "eyeholder_dark",
    "eyeholder_evil",
    "finnhood",
    "flies",
    "frozenhead",
    "fullironhelm",
    "gnome_clover_wig",
    "greaser",
    "headbolts",
    "icedragonskull",
    "jesterhat",
    "ladybug_on_head",
    "megamanhat",
    "mimic_head",
    "monkeyking",
    "monocle",
    "moreeyes",
    "orange_hat",
    "penguinhat",
    "questbook",
    "redstache",
    "rock",
    "shakehat",
    "shrekears",
    "shroomcap",
    "springer",
    "sport_sunglasses",
    "spyzombie",
    "strawberry_hat",
    "tanuki_leaf",
    "tinkerhat",
    "toptophathat",
    "toy_story_alien",
    "unicornhorn",
    "worms_mine",
  ].forEach((hat, index) => {
    createHatSewingRecipe(index, geodeMinerals, 2, hat);
  });

  [
    "aegishat",
    "alienphil",
    "azumanga_hat",
    "baby_crewmate",
    "bee_on_head",
    "bluefireeye",
    "camera",
    "candleonhead",
    "cat_on_head",
    "caterpillar_on_head",
    "chocolate_sauced",
    "clockface",
    "dejiko",
    "demoneyes",
    "demonhorns",
    "digger",
    "dragonskullender",
    "eyeholder_warm",
    "fakefire",
    "fishonhead",
    "floatinghearts",
    "floatingstar",
    "flowercrown",
    "floweronhead",
    "foxhat",
    "hat_of_discipline",
    "holyhead",
    "hosthat",
    "lightning_eyes",
    "lil_bows",
    "madscientist",
    "medusa",
    "milady_doll",
    "mimic_head_dark",
    "mindflayer",
    "paypay",
    "penguinbaby",
    "peppino",
    "policesiren",
    "propelhat",
    "puchiko",
    "rabi_en_rose",
    "rabbitonhead",
    "redeyes",
    "simsgem",
    "slime_head",
    "smokingpipe",
    "snowmanbaby",
    "spadesoldier",
    "stress",
    "sunglasses",
    "sunglassesbig",
    "supersandhat",
    "the_noise",
    "topcathat",
    "toilet",
    "traffic_cone",
    "vikinghatbeard",
    "winghat",
  ].forEach((hat, index) => {
    createHatSewingRecipe(index, global.miscAdventurer, 4, hat);
  });

  [
    "amalgalichhat",
    "angel_and_devil",
    "artsy",
    "artsy_doll",
    "babyturtle",
    "babydolphin",
    "bandanargb",
    "baseballhatrgb",
    "beaniergb",
    "beehat",
    "burning_m_bison",
    "cowboyrgb",
    "crabonhead",
    "crystal_horns",
    "discoball",
    "druid_antlers_rare",
    "eyeholder_beeholder",
    "eyeholder_xanath",
    "fakeblight",
    "fishing_hat",
    "greenbirb",
    "headphonesblue",
    "kirbymouthful",
    "lil_termagant",
    "magikarp",
    "mimic_head_gold",
    "mindflayer_alhoon",
    "nyan_doll",
    "octodad",
    "pohatoe",
    "poofballrgb",
    "potionhead",
    "rainboworbiters",
    "raincloud",
    "rgbbigribbon",
    "rgbbowler",
    "rgbdragonskull",
    "rgbdrinkinhat",
    "rgbeasterhead",
    "rgbfullhelm",
    "rgbpartyhat",
    "rgbsmallbowler",
    "rgbsunglasses",
    "rgbtoptophathat",
    "rgbushanka",
    "slime_cube_dnd",
    "stinkycheeseman",
    "the_noisier",
    "thumbnail",
    "tomato_splats",
    "tvhead",
    "twilight_doll",
  ].forEach((hat, index) => {
    createHatSewingRecipe(
      index,
      [
        { item: "society:prismatic_shard" },
        { item: "quark:diamond_heart" },
        { item: "society:jade" },
      ],
      8,
      hat
    );
  });
});
