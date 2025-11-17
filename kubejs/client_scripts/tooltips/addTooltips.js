const formatNumber = (number, quality) => {
  let value;
  if (quality) {
    if (quality == 1.0) value = Math.round(number * 1.25);
    if (quality == 2.0) value = Math.round(number * 1.5);
    if (quality == 3.0) value = Math.round(number * 2);
  } else {
    value = number;
  }
  return global.formatPrice(value);
};

const getAttributeStr = (attribute) => {
  switch (attribute) {
    case "crop":
      return "🔱 §6Farmer product";
    case "wood":
      return "✎ §6Artisan product";
    case "gem":
      return "🎣 §6Geologist product";
    case "meat":
      return "🗡 §6Adventurer product";
    default:
      console.log(`Invalid attribute`);
  }
};
global.addPriceTooltip = (tooltip, sellable, attribute) => {
  let value = sellable.value;
  tooltip.addAdvanced(sellable.item, (item, advanced, text) => {
    let quality;
    if (item.nbt && item.nbt.quality_food) {
      quality = item.nbt.quality_food.quality;
    }
    if (tooltip.shift) {
      text.add(1, [
        Text.white(`● ${formatNumber(value * item.count, quality)}`),
        Text.gray(" Stack value"),
      ]);
      text.add(2, [getAttributeStr(attribute)]);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(value, quality)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });
};

ItemEvents.tooltip((tooltip) => {
  const calculateCost = (coin, count, stackSize) => {
    let value = 0;
    switch (coin) {
      case "spur":
        value = 1;
        break;
      case "bevel":
        value = 8;
        break;
      case "sprocket":
        value = 16;
        break;
      case "cog":
        value = 64;
        break;
      case "crown":
        value = 512;
        break;
      case "sun":
        value = 4096;
        break;
      case "neptunium_coin":
        value = 32768;
        break;
      case "ancient_coin":
        value = 262144;
        break;
      case "prismatic_coin":
        value = 16777216;
        break;
      default:
        console.log(`Invalid coin`);
    }
    return formatNumber(value * count * (stackSize || 1));
  };
  const coinTooltips = [
    "numismatics:spur",
    "numismatics:bevel",
    "numismatics:sprocket",
    "numismatics:cog",
    "numismatics:crown",
    "numismatics:sun",
    "numismatics:neptunium_coin",
    "numismatics:ancient_coin",
    "numismatics:prismatic_coin",
  ];
  coinTooltips.forEach((coin) => {
    tooltip.addAdvanced(coin, (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [
          Text.white(`● ${calculateCost(coin.path, 1, item.count)}`),
          Text.gray(" Stack value"),
        ]);
      } else {
        text.add(1, [
          Text.white(`● ${calculateCost(coin.path, 1, 1)}`),
          Text.darkGray(" Hold ["),
          Text.gray("Shift"),
          Text.darkGray("]"),
        ]);
      }
    });
  });

  global.plushies.forEach((plush) => {
    tooltip.addAdvanced(plush, (item, advanced, text) => {
      if (item.nbt) {
        if (item.nbt.getCompound("quality_food"))
          text.add(1, [
            "§6★ §7Rarity: ",
            Text.gold("★".repeat(item.nbt.getCompound("quality_food").getInt("quality") + 1)),
            Text.gray("☆".repeat(3 - item.nbt.getCompound("quality_food").getInt("quality"))),
          ]);
        else text.add(1, [Text.gray("☆".repeat(4))]);
        let type = global.plushieTraits[Number(item.nbt.getInt("type"))];
        text.add(2, ["§b♫ §7Trait: ", `§${type.color}${global.formatName(type.trait)}`]);
        let affection = item.nbt.getInt("affection");
        text.add(3, [
          "§c❤ §7Affection: ",
          `§c${affection > 0 ? `❤`.repeat(affection) : ""}§7${
            affection < 4 ? `❤`.repeat(4 - affection) : ""
          }`,
        ]);
        text.add(4, ["♢ §6Plushie"]);
      } else {
        text.add(1, ["♢ §6Plushie"]);
      }
    });
  });

  const artifactTooltips = [
    {
      item: "society:froggy_helm",
      tooltip: "There's a large tongue nestled inside",
    },
    {
      item: "society:ribbit_drum",
      tooltip: "Nitwit Ribbits love to bang on this",
    },
    { item: "society:ribbit_gadget", tooltip: "Some sort of wetware circuit" },
    { item: "society:legendary_ink", tooltip: "We love casting spells" },
    { item: "society:holy_symbol", tooltip: "A tribute from a higher power" },
    {
      item: "society:ember_crystal_cluster",
      tooltip: "Feels hot to the touch",
    },
    { item: "society:living_flesh", tooltip: "Writhing and unnatural" },
    { item: "society:source_gem", tooltip: "Derived from a Gold Sea Coin" },
    {
      item: "society:spider_silk",
      tooltip: "Meticulously textured by a Nerdy Spider",
    },
    {
      item: "society:wheel_of_adaptation",
      tooltip: "Was once used to summon a beast",
    },
    { item: "society:toy_train", tooltip: "« Limited to 2 passengers : ants »" },
    {
      item: "society:perfect_cherry",
      tooltip: "It wants you to eat it",
    },
    {
      item: "society:mini_oni_eye",
      tooltip: "Fits nicely on a banana",
    },
    { item: "society:glitched_vhs", tooltip: '"Whispers: Don\'t rewind..."' },
    {
      item: "society:production_science_pack",
      tooltip: "What was it used to research?",
    },
    {
      item: "society:beemonican_seal",
      tooltip: "From the lost city of Beemonica",
    },
    {
      item: "society:steamy_gadget",
      tooltip:
        "An ancient handheld computer powered by steam. The word 'Uni' is ingraved on the back",
    },
    {
      item: "society:amulet_of_light",
      tooltip: "A very normal and holy pendant",
    },
    {
      item: "society:aquamagical_dust",
      tooltip: "Feels mystical and oceanic...",
    },
    {
      item: "society:princess_hairbrush",
      tooltip: "Scuffed from being used to hit someone",
    },
    {
      item: "society:heart_of_neptunium",
      tooltip: "It hums aquamagically",
    },
  ];
  artifactTooltips.forEach((artifact) => {
    tooltip.add(artifact.item, Text.darkPurple(artifact.tooltip));
    tooltip.add(artifact.item, Text.gray("🪣 Artifact"));
  });
  [
    {
      item: "society:animal_fancy",
      description: "Increases affection gained from petting farm animals.",
    },
    { item: "society:banana_karenina", description: "Doubles Banana Tree output." },
    { item: "society:brine_and_punishment", description: "Pickled items are worth 100% more." },
    { item: "society:bluegill_meridian", description: "Bluegill are now worth 666 §f●." },
    { item: "society:hitting_hard_and_soft", description: "Melee attacks do an extra 4 damage." },
    {
      item: "society:canadian_and_famous",
      description: "Tappers output double. Doesn't affect Auto-Tappers.",
    },
    { item: "society:first_aid_guide", description: "Halves the maximum fee and debt from death." },
    {
      item: "society:intro_to_algorithms",
      description: "Mining Lead ore no longer causes Brain Damage clouds.",
    },
    {
      item: "society:no_name_for_the_sheep",
      description: "Naming animals grants an additional heart of affection.",
    },
    { item: "society:paradise_crop", description: "1 additional crop drop per harvest." },
    {
      item: "society:slime_contain_protect",
      description: "Incubating a Slime Heart has a chance to give you a Slime Ticket.",
    },
    {
      item: "society:slouching_towards_artistry",
      description:
        "Artisan Hoppers have a chance to not consume Sparkstone when harvesting. The chance increases the longer the product took to make.",
    },
    {
      item: "society:debt_caverns",
      description: "Fainting in the Skull Cavern no longer costs a fee or adds to debt.",
    },
    {
      item: "society:phenomenology_of_treasure",
      description: "Artifacts and Relics are worth 200% more",
    },
    { item: "society:frogs_bounty_bazaar", description: "Prize Tickets give double the prizes." },
    {
      item: "society:bullfish_jobs",
      description: "The quality of fish taken out of Fish Ponds scales with population.",
    },
    {
      item: "society:wuthering_logs",
      description: "Trees have a 15% chance to drop Fire Logs when chopped.",
    },
    {
      item: "society:the_spark_also_rises",
      description: "Minining any ore drops Sparkstone.",
    },
    {
      item: "society:universal_methods_of_farming",
      description: "The Market sells all basic seeds in every season.",
    },
  ].forEach((book) => {
    tooltip.add(book.item, Text.gray(book.description));
    tooltip.add(book.item, Text.green("Right click to learn this skill!"));
  });
  tooltip.addAdvanced("society:fish_pond", (item, advanced, text) => {
    if (item.nbt) {
      text.add(1, Text.aqua(`Fish: ${Item.of(item.nbt.get("type")).id}`));
      text.add(
        2,
        Text.aqua(
          `Population: ${item.nbt.get("population")}/${item.nbt.get("max_population")} :fish:`
        )
      );
    } else {
      text.add(1, Text.gray("Cultivates fish, roe, and various items"));
      text.add(2, Text.gray("Right Click with a fish to add it to the pond"));
      text.add(3, Text.gray("Shift + Right Click with an empty hand to take one out"));
      text.add(4, Text.darkAqua("Needs a 3x4 of water behind pond"));
    }
  });
  tooltip.add("simplerecall:recall_potion", Text.gray("Teleports you to your spawn location"));
  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.gray("Can call all unlocked villagers to trade with them.")
  );

  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.green("Has some unique villager shops")
  );
  // Furniture
  tooltip.add("tanukidecor:diy_workbench", Text.gray("Crafts any Catalog item for cheap"));
  tooltip.add("society:tanuki_catalog", [
    Text.gray("Right click with 2 §6Gold Coins"),
    Text.gray("to purchase a §aTanuki Leaf§r."),
    Text.gray("Shift + Right click to bulk purchase"),
  ]);
  tooltip.add("society:modern_catalog", [
    Text.gray("Right click with 6 §6Gold Coins§r"),
    Text.gray("to purchase an §fArchitect's Digest§r."),
    Text.gray("Shift + Right click to bulk purchase"),
  ]);
  tooltip.add("society:fantasy_catalog", [
    Text.gray("Right click with 4 §6Gold Coins"),
    Text.gray("to purchase §eFantasy Dust§r."),
    Text.gray("Shift + Right click to bulk purchase"),
  ]);
  global.lootFurniture.forEach((item) => {
    tooltip.add(item, "♢ §6Rare furniture drop");
    if (!item.includes("tanuki") && !item.includes("whimsy_deco")) {
      tooltip.add(item, Text.white("♧ Modern collection"));
    } else {
      tooltip.add(item, "♤ §aTanuki collection");
    }
  });
  tooltip.add("society:architects_digest", Text.gray("Used to craft ♧ §fModern§r furniture"));
  tooltip.add("society:tanuki_leaf", Text.gray("Used to craft ♤ §aTanuki§r furniture"));
  tooltip.add(/fantasyfurniture/, "♡ §eFantasy collection");
  tooltip.add("society:fantasy_dust", Text.gray("Used to craft ♡ §eFantasy§r furniture"));
  // Hammers
  tooltip.add("justhammers:small_core", Text.gray("Crafts hammers that mine a 3x3x1 area"));
  tooltip.add("justhammers:impact_core", Text.gray("Crafts hammers that mine a 3x3x3 area"));
  // Upgrades:
  tooltip.add(
    "society:ancient_cog",
    Text.green("Use on a §2Seed Maker§a to give it a 5% chance of producing an Ancient Fruit Seed")
  );
  tooltip.add(
    "society:pink_matter",
    Text.green("Use on an §2Artisan Cheese Press§a to make it auto-age Cheese Wheels.")
  );
  tooltip.add("society:pink_matter", Text.red("Does not carry over Milk Quality"));
  tooltip.add(
    "society:stone_hand",
    Text.green("Use on a §2Preserves Jar§a to decrease input amount by 2")
  );
  tooltip.add(
    "society:broken_clock",
    Text.green("Use on an §2Aging Cask§a to decrease aging time by half")
  );
  tooltip.add(
    "society:sea_biscut",
    Text.green("Use on a §2Fish Pond§a to double chance of non-Roe items")
  );
  tooltip.add(
    "society:black_opal",
    Text.green("Use on a §2Crystalarium§a to give it a 10% chance of producing pristine items")
  );
  tooltip.add(
    "society:enkephalin",
    Text.green(
      "Use on a §2Mayonnaise Machine§a to give it a 5% chance of producing Supreme Mayonnaise"
    )
  );
  tooltip.add(
    "society:tiny_gnome",
    Text.green("Use on a §2Loom§a to give it a 25% chance of producing rare furniture")
  );
  tooltip.add("society:ancient_roe", Text.green("Use on a §2Fish Smoker§a to double output"));
  tooltip.add(
    "society:frosted_tip",
    Text.green("Use on a §2Charging Rod§a to work and triple output in winter")
  );
  tooltip.add(
    "society:infinity_worm",
    Text.green("Use on a §2Deluxe Worm Farm§a to let it work without inputs")
  );
  tooltip.add(
    "society:inserter",
    Text.green("Use on an §2Ancient Cask§a to let it process 4 items at a time")
  );
  tooltip.add("society:cordycep", Text.green("Use on a §2Dehydrator§a to double mushroom output"));
  tooltip.add(
    ["vintagedelight:gearo_berry", "minecraft:sweet_berries"],
    Text.gray("Will only grow when planted on farmland")
  );
  // Misc
  tooltip.add(
    [
      "botania:agricarnation",
      "botania:agricarnation_chibi",
      "botania:floating_agricarnation",
      "botania:floating_agricarnation_chibi",
    ],
    Text.darkRed("Does not work on farmland crops")
  );
  tooltip.add(
    "numismatics_utils:bank_meter",
    Text.gray("Shows balance in Bank Terminal when worn in curio slot")
  );
  tooltip.add(
    "society:fish_radar",
    Text.gray("Shows catchable fish at the current time and location")
  );
  tooltip.add(
    "tradingpost:trading_post",
    Text.gray("Trade with all nearby villagers in one place")
  );
  tooltip.add("society:magic_rope", Text.gray("Teleports you down a level in the Skull Cavern"));
  tooltip.add(
    "society:magic_rope",
    Text.red("Make sure you're carrying an Escape Rope in case you get stuck...")
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.gray(
      "Teleports you to the nearest cave in the direction of the block you've clicked in the Skull Cavern"
    )
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.red("Make sure you're carrying an Escape Rope in case you get stuck...")
  );
  // Fertilizers
  tooltip.add(
    "dew_drop_farmland_growth:weak_fertilizer",
    Text.green("Decreases time it takes for crop to mature by 1 day")
  );
  tooltip.add(
    "dew_drop_farmland_growth:strong_fertilizer",
    Text.green("Decreases time it takes for crop to mature by 2 days")
  );
  tooltip.add(
    "dew_drop_farmland_growth:hyper_fertilizer",
    Text.green("Decreases time it takes for crop to mature by 3 days")
  );
  tooltip.add(
    "dew_drop_farmland_growth:hydrating_fertilizer",
    Text.green("Keeps farmland watered until crop is half grown (rounded down)")
  );
  tooltip.add(
    "dew_drop_farmland_growth:deluxe_hydrating_fertilizer",
    Text.green("Never dries out")
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.green("Crops have a 25% chance to drop 1 extra when harvested")
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.red("Crops can no longer have quality")
  );
  tooltip.add(
    "dew_drop_farmland_growth:low_quality_fertilizer",
    Text.green("Increases the chance of quality crops on harvest")
  );
  tooltip.add(
    "dew_drop_farmland_growth:high_quality_fertilizer",
    Text.green("Greatly increases the chance of quality crops on harvest")
  );
  tooltip.add(
    "dew_drop_farmland_growth:pristine_quality_fertilizer",
    Text.green("Supremely increases the chance of quality crops on harvest")
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.gray("Grow crops indoors during any season. Cannot be watered with Sprinklers")
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.green("Can be upgraded with Deluxe Hydrating Fertilizer and hung from chains and ropes")
  );
  tooltip.add("minecraft:fishing_rod", Text.gray("Remove attached bobbers before upgrading"));
  tooltip.add("etcetera:handbell", Text.gray("Calls non-sitting pets and allays to you when rung"));
  tooltip.add("farm_and_charm:pitchfork", Text.gray("Turns Fertilized Farmland into Dirt"));
  tooltip.add("farm_and_charm:pitchfork", Text.green("50% chance to recover Fertilizer"));
  tooltip.add("farm_and_charm:pitchfork", Text.red("Does not work on Hydrating Farmland"));
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.gray("Dries grains placed inside")
  );
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.green("Can be expanded to a max of 3x9x3")
  );
  tooltip.add("farmersdelight:cooking_pot", Text.green("Automatable using cooking guide"));
  tooltip.add("meadow:cooking_cauldron", Text.gray("Decorative, has no recipes"));
  tooltip.add("candlelight:cooking_pot", Text.gray("Only a villager workstation, has no recipes"));
  tooltip.add(
    [
      "candlelight:red_nether_bricks_stove",
      "candlelight:quartz_stove",
      "candlelight:mud_stove",
      "candlelight:cobblestone_stove",
      "farm_and_charm:stove",
      "candlelight:stone_bricks_stove",
      "candlelight:bamboo_stove",
      "candlelight:basalt_stove",
      "candlelight:end_stove",
      "candlelight:sandstone_stove",
      "candlelight:deepslate_stove",
      "candlelight:granite_stove",
    ],
    Text.green("Has built-in oven")
  );

  tooltip.add(
    [
      "oreganized:silver_ore",
      "oreganized:deepslate_silver_ore",
      "oreganized:lead_ore",
      "oreganized:deepslate_lead_ore",
      "minecraft:ancient_debris",
    ],
    Text.gold("Spawns exclusively in the Skull Cavern")
  );
  tooltip.add(
    [
      "society:bait_maker",
      "society:aging_cask",
      "society:ancient_cask",
      "society:charging_rod",
      "society:crystalarium",
      "society:deluxe_worm_farm",
      "society:dehydrator",
      "society:espresso_machine",
      "society:fish_pond",
      "society:fish_smoker",
      "society:loom",
      "society:mayonnaise_machine",
      "society:preserves_jar",
      "society:seed_maker",
      "society:tapper",
      "society:recycling_machine",
      "society:cheese_press",
    ],
    "✉ §6Artisan Machine"
  );
  tooltip.add(
    [
      "minecraft:milk_bucket",
      "meadow:wooden_milk_bucket",
      "meadow:wooden_sheep_milk_bucket",
      "meadow:wooden_warped_milk_bucket",
      "meadow:wooden_buffalo_milk_bucket",
      "meadow:wooden_goat_milk_bucket",
    ],
    Text.red("Unobtainable, use a milking pail")
  );
  ["society:large_warped_milk", "society:warped_milk"].forEach((milk) => {
    tooltip.add(milk, Text.aqua("Milked from Wooly Cows that spawn in Warped Forests"));
  });
  tooltip.add("society:fine_wool", Text.gray("Collected from happy Sheep and Rabbits"));
  tooltip.add("society:truffle", Text.gray("Foraged by certain farm animals such as pigs"));
  tooltip.add("society:milk_pail", Text.gray("Milks farm animals"));
  tooltip.add("society:tubasmoke_stick", Text.gray("Right click to smoke"));
  tooltip.add("society:tubasmoke_stick", Text.red("Must be 18+ years old"));
  tooltip.add("society:cornucopia", Text.gray("Harvest fruits from nearby trees"));
  tooltip.add(
    "society:animal_feed",
    Text.gray("Feeds farm animals manually or using Feeding Troughs")
  );
  tooltip.add(
    "society:candied_animal_feed",
    Text.gray("Feeds farm animals manually or using Feeding Troughs")
  );
  tooltip.add("society:candied_animal_feed", Text.green("Increases affection by a full heart"));
  tooltip.add(
    "society:mana_feed",
    Text.gray("Feeds farm animals manually or using Feeding Troughs")
  );
  tooltip.add("society:mana_feed", Text.green("Increases affection more than basic Animal Feed"));
  tooltip.add(
    "society:animal_feed_sack",
    Text.red("Too large to feed farm animals manually or using Feeding Troughs")
  );
  tooltip.add("society:magic_shears", Text.gray("Harvests drops from farm animals"));
  tooltip.add("vintagedelight:deluxe_burger", Text.gray("Burger? I hardly..."));
  tooltip.add("society:magic_shears", Text.gray("with only a little discomfort!"));
  tooltip.add("society:magic_shears", Text.red("Requires animals to trust you"));
  tooltip.add("society:miracle_potion", Text.gray("Used to breed farm animals"));
  tooltip.add("meadow:cheese_stick", Text.gray("Made in Fondue with cheese and bread"));
  tooltip.add("meadow:cheese_form", Text.gray("Turns Large Milks into Cheese Wheels using Rennet"));
  tooltip.add("meadow:cheese_form", Text.green("Automatable using hoppers"));
  tooltip.add(
    "society:friendship_necklace",
    Text.gray('Used with the "Best Friends Forever" Husbandry skill')
  );
  tooltip.add("society:frozen_tear", Text.gray("Found in Slush. Chance increased with fortune"));
  tooltip.add("liltractor:liltractor", Text.gray("Shift + Right Click to view inventory"));
  tooltip.add("liltractor:liltractor", Text.gray("Space while riding to change modes"));
  tooltip.add(
    ["displaydelight:food_plate", "displaydelight:small_food_plate"],
    Text.gray("Displays certain Farmer's Delight foods as blocks")
  );
  tooltip.add("liltractor:liltractor", Text.gray("Dyeable"));
  tooltip.add("society:prize_ticket", Text.gray("Use on an a Prize Machine for something good!"));
  tooltip.add(
    "splendid_slimes:slime_ticket",
    Text.gray("Use on an a Splendid Slime to learn their primary breed's favorite food.")
  );
  tooltip.add(
    "splendid_slimes:slime_candy",
    Text.gray("Feed to a Splendid Slime to greatly increase their happiness.")
  );
  tooltip.add(
    "splendid_slimes:slime_feeder",
    Text.gray(
      "Feeds nearby Splendid Slimes automatically. Handles tricky traits such as 'Picky' when applicable."
    )
  );
  tooltip.add("splendid_slimes:slime_feeder", Text.green(`Area: 13x13x13`));
  tooltip.add("create:creative_blaze_cake", Text.gray("It's smoking..."));
  tooltip.add("tanukidecor:slot_machine", Text.gray("Right click with any legal tender"));
  tooltip.add("whimsy_deco:statue_endless_fortune", Text.gray("Gives a valuable item once a day"));
  tooltip.add("whimsy_deco:statue_endless_fortune", Text.red("Definitely not overpriced."));
  tooltip.add(
    "whimsy_deco:gatcha_machine",
    Text.gray("Right click with an Iridium Coin to purchase a Plushie Capsule")
  );
  tooltip.add("society:relic_trove", Text.gray("Can be opened using an Extractinator"));
  tooltip.add("society:artifact_trove", Text.gray("Can be opened using an Extractinator"));
  tooltip.add("society:geode_buster", Text.gray("Right click with geode in offhand"));
  tooltip.add(
    "society:dragontooth_axe",
    Text.red("Will break if wielded by one without the Dragonslayer skill")
  );
  tooltip.add("botania:apothecary_default", "🏹 §6Abandoned Farm reward");
  "society:kinetic_blueprint",
    Text.gray("Given for free for completing the Boiler Room chapter in the questbook.");
  tooltip.add("society:kinetic_blueprint", Text.green("Not consumed in crafting"));
  tooltip.add("society:kinetic_blueprint", "🏹 §6Boiler Room reward");
  tooltip.add("society:skull_cavern_teleporter", "🏹 §6Vault reward");
  tooltip.add("relics:magic_mirror", "🏹 §6Crafts Room reward");

  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.gray("Grows the first crop underneath in any season")
  );
  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.green("Range: 16 blocks")
  );

  tooltip.add("vinery:apple_tree_sapling", "Fruit Season:");
  tooltip.add("vinery:apple_tree_sapling", Text.gold(" Autumn"));

  tooltip.add("vinery:dark_cherry_sapling", "Fruit Season:");
  tooltip.add("vinery:dark_cherry_sapling", Text.green(" Spring"));
  tooltip.add("society:plushie_capsule", Text.gray("Right click to open"));
  tooltip.add("society:furniture_box", Text.gray("Right click to open"));
  tooltip.add("furniture:bin", Text.red("Deletes any items you click into it"));
  tooltip.add("furniture:bin", Text.green("Creates Trash Bags"));
  tooltip.add("furniture:trash_bag", Text.gray("Created from trashing items in a Bin"));
  tooltip.add("society:bouquet_bag", Text.green("Contains random flowers"));
  tooltip.add("society:bouquet_bag", Text.gray("Right click to open"));
  tooltip.add("society:scavenged_food_bag", Text.gray("Right click to open"));
  tooltip.add(
    "gag:time_sand_pouch",
    Text.red("REMOVED!! CORRUPTS WORLD WHEN USED ON ARTISAN MACHINES")
  );
  tooltip.add("extractinator:extractinator", Text.gray("Right click with a geode to process"));
  tooltip.add("extractinator:extractinator", Text.gray("Shift + Right click to process stack"));
  tooltip.add(
    "pipez:item_pipe",
    Text.gray("Can be configured to extract using the Create mod Wrench")
  );
  tooltip.add("moreminecarts:chunk_loader", Text.red("Removed! Craft into money for your refund."));
  tooltip.add("vintagedelight:evaporator", Text.gray("Place next to water to make salt"));
  tooltip.add("farmersdelight:rich_soil", Text.gray("Grows colonies from red and"));
  tooltip.add("farmersdelight:rich_soil", Text.gray("brown mushrooms planted on it"));
  tooltip.addAdvanced("farmersdelight:tomato_seeds", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(1, [
        Text.white("Fertile Seasons:"),
        Text.green(" Spring,"),
        Text.yellow(" Summer,"),
        Text.gold(" Autumn"),
      ]);
      text.add(1, []);
    } else {
      text.add(1, [Text.darkGray("Hold ["), Text.gray("Shift"), Text.darkGray("]")]);
    }
  });
  tooltip.addAdvanced("farm_and_charm:strawberry_seed", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(1, [Text.white("Fertile Seasons:"), Text.green(" Spring")]);
      text.add(1, []);
    } else {
      text.add(1, [Text.darkGray("Hold ["), Text.gray("Shift"), Text.darkGray("]")]);
    }
  });
  tooltip.add("relics:jellyfish_necklace", Text.red("Hurts nearby animals when worn!"));

  tooltip.add("society:river_jelly", Text.blue("Fished up in River biomes"));
  tooltip.add("society:ocean_jelly", Text.aqua("Fished up in Ocean & Beach biomes"));
  tooltip.add("society:nether_jelly", Text.gold("Fished up in Nether biomes"));
  const craftingMaterials = [
    "society:fire_quartz",
    "society:earth_crystal",
    "society:oak_resin",
    "society:pine_tar",
    "society:aquamarine",
    "society:jade",
    "society:river_jelly",
    "society:nether_jelly",
    "society:ocean_jelly",
  ];
  craftingMaterials.forEach((item) => {
    tooltip.add(item, Text.gray("Crafting material"));
  });
  // Prize Machine
  tooltip.add(
    [
      "minecraft:eye_armor_trim_smithing_template",
      "pamhc2trees:hazelnut_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:passionfruit_sapling",
      "etcetera:eggple",
      "etcetera:golden_eggple",
    ],
    "🍖 §6Prize Machine reward"
  );
  const workstation = [
    { villager: "Bard", block: "minecraft:note_block" },
    { villager: "Storagesmith", block: "minecraft:grindstone" },
    { villager: "Fisher", block: "minecraft:barrel" },
    { villager: "Shepherd", block: "minecraft:loom" },
    { villager: "Leatherworker", block: "minecraft:cauldron" },
    { villager: "Blacksmith", block: "minecraft:smithing_table" },
    { villager: "Librarian", block: "minecraft:lectern" },
    { villager: "Cleric", block: "minecraft:brewing_stand" },
    { villager: "Farmer", block: "minecraft:composter" },
    { villager: "Banker", block: "minecraft:cartography_table" },
    { villager: "Master Cultivator", block: "candlelight:cooking_pot" },
    { villager: "Barkeeper", block: "beachparty:tiki_bar" },
    { villager: "Exotic Trader", block: "minecraft:fletching_table" },
    { villager: "Mystical Botanist", block: "beautify:botanist_workbench" },
  ];
  workstation.forEach((station) => {
    const { villager, block } = station;
    tooltip.add(block, `✂ §6${villager} workstation`);
  });
  Item.of("farm_and_charm:barley", "{quality_food:{quality:3}}");
  // Prices

  tooltip.addAdvanced("splendid_slimes:plort", (item, advanced, text) => {
    let plortType;
    let price;
    if (item.nbt && item.nbt.plort) {
      plortType = item.nbt.plort.id;
    }
    global.plorts.forEach((plort) => {
      if (plort.type == plortType) price = plort.value;
    });
    if (tooltip.shift) {
      text.add(1, [
        Text.white(`● ${formatNumber(price * item.count, 0)}`),
        Text.gray(" Stack value"),
      ]);
      text.add(2, [getAttributeStr("meat")]);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });

  tooltip.addAdvanced("splendid_slimes:slime_heart", (item, advanced, text) => {
    let heartType;
    let price;
    if (item.nbt && item.nbt.slime) {
      heartType = item.nbt.slime.id;
    }
    global.slimeHearts.forEach((heart) => {
      if (heart.type == heartType) price = heart.value;
    });
    if (tooltip.shift) {
      text.add(1, [
        Text.white(`● ${formatNumber(price * item.count, 0)}`),
        Text.gray(" Stack value"),
      ]);
      text.add(2, [getAttributeStr("meat")]);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });

  // Ore
  global.ore.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  // Pristine
  global.pristine.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  // Geodes
  global.geodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:froggy_helm") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_drum") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_gadget") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  // Gem
  global.gems.forEach((gem) => {
    global.addPriceTooltip(tooltip, gem, "gem");
    tooltip.add(gem.item, "🎣 §7Gem");
  });
  [
    "society:sparkstone",
    "minecraft:emerald",
    "minecraft:diamond",
    "minecraft:amethyst_shard",
    "minecraft:quartz",
    "society:prismatic_shard",
    "minecraft:prismarine_crystals",
  ].forEach((gem) => {
    tooltip.add(gem, "🎣 §7Gem");
  });
  global.miscGeologist.forEach((gem) => {
    global.addPriceTooltip(tooltip, gem, "gem");
  });
  // Artifact
  global.artifacts.forEach((artifact) => {
    global.addPriceTooltip(tooltip, artifact, "meat");
  });
  global.relics.forEach((artifact) => {
    global.addPriceTooltip(tooltip, artifact, "meat");
  });
  // Crops
  global.crops.forEach((crop) => {
    global.addPriceTooltip(tooltip, crop, "crop");
  });
  // Meat
  global.animalProducts.forEach((meat) => {
    global.addPriceTooltip(tooltip, meat, "crop");
  });
  // Wines
  global.wines.forEach((wine) => {
    global.addPriceTooltip(tooltip, wine, "wood");
  });
  // Brews
  global.brews.forEach((brew) => {
    global.addPriceTooltip(tooltip, brew, "wood");
  });
  // Preserves
  global.preserves.forEach((jar) => {
    global.addPriceTooltip(tooltip, jar, "wood");
  });
  // Dehydrated
  global.dehydrated.forEach((jar) => {
    global.addPriceTooltip(tooltip, jar, "wood");
  });
  // Artisan goods
  global.artisanGoods.forEach((good) => {
    global.addPriceTooltip(tooltip, good, "wood");
  });
  // Fish
  global.fish.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "crop");
  });
  global.smokedFish.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "wood");
  });
  global.agedRoe.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "wood");
  });
  // Cocktails
  global.cocktails.forEach((cocktail) => {
    global.addPriceTooltip(tooltip, cocktail, "crop");
  });
  // herbalbrews
  global.herbalBrews.forEach((brew) => {
    global.addPriceTooltip(tooltip, brew, "crop");
  });
  // Logs
  global.logs.forEach((log) => {
    global.addPriceTooltip(tooltip, log, "crop");
  });
  // Cooking
  global.cooking.forEach((dish) => {
    global.addPriceTooltip(tooltip, dish, "crop");
  });
  // Misc
  global.miscAdventurer.forEach((miscItem) => {
    global.addPriceTooltip(tooltip, miscItem, "meat");
  });
  const geodes = [
    "society:geode",
    "society:frozen_geode",
    "society:magma_geode",
    "society:omni_geode",
  ];
  geodes.forEach((geode) => {
    tooltip.add(geode, Text.gray("Something's inside! A Blacksmith can help break it open."));
  });
  tooltip.addAdvanced("society:car_key", (item, advanced, text) => {
    text.add(1, [Text.gray("Right click on an Automobile to park inside the key")]);
    if (item.nbt) {
      text.add(2, [Text.green("Car parked")]);
    } else {
      text.add(2, [Text.red("No car parked")]);
    }
  });
  const getPigColor = (pig) => {
    switch (pig) {
      case "Red":
        return "c";
      case "Blue":
        return "b";
      case "Yellow":
        return "e";
      case "Green":
        return "a";
      default:
        console.log(`Invalid pig color`);
    }
    return;
  };
  tooltip.addAdvanced(
    ["society:pig_race_ticket", "society:multiplayer_pig_race_ticket"],
    (item, advanced, text) => {
      text.add(1, [Text.gold("Left click "), Text.gray("to select pig to bet on")]);
      text.add(2, [Text.gold("Right click "), Text.gray("with bet in offhand to start")]);
      if (item.nbt) {
        text.add(3, [Text.gray(`Betting on §${getPigColor(item.nbt.bet)}${item.nbt.bet} pig§r!`)]);
      } else {
        text.add(3, [Text.gray("No Pig selected")]);
      }
    }
  );
  // Translocators
  tooltip.addAdvanced(
    ["translocators:item_translocator", "translocators:fluid_translocator"],
    (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [
          Text.red("Redstone Dust"),
          Text.darkGray(" - Allows toggling input/output with redstone signal"),
        ]);
        text.add(2, [
          Text.yellow("Glowstone Dust"),
          Text.darkGray(" - Transfers stacks/buckets at a time"),
        ]);
        text.add(3, [
          Text.gray("Iron Ingot"),
          Text.darkGray(" - will emit redstone signal depending on the container status"),
        ]);
        text.add(4, [
          Text.gold("Precision Mechanism"),
          Text.darkGray(" - Maintain amount of items set in the filter"),
        ]);
        text.add(5, [Text.green("Right click with item to upgrade")]);
      } else {
        text.add(1, [
          Text.darkGray("Hold ["),
          Text.gray("Shift"),
          Text.darkGray("] to view upgrades"),
        ]);
      }
    }
  );
  // Beds
  global.animalBeds.forEach((bed) => {
    tooltip.addAdvanced(`society:${bed}_bed`, (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, Text.green("Supports these animals:"));
        global.bedDefinitions.get(bed).forEach((animal, index) => {
          text.add(
            index + 2,
            Text.gold(global.formatName(String(animal.path).replace(/_/g, " ")))
          );
        });
      } else {
        text.add(
          1,
          Text.gray("Houses a farm animal, allowing it to have a higher maximum affection")
        );
        text.add(2, Text.gold("Only certain animals like this bed!"));
        text.add(3, [
          Text.darkGray("Hold ["),
          Text.gray("Shift"),
          Text.darkGray("] to view animals"),
        ]);
      }
    });
  });

  // Magnifying
  const magnifyingBlocks = [
    "Auto-Grabber",
    "Artisan Hoppers",
    "Chicken Nest",
    "Feeding Trough",
    "Slime Feeder",
    "Snow Melter",
    "Fish Pond Basket",
    "Golden Clock",
    "Mana Clock",
    "Mana Milker",
    "All Sprinklers",
    "Growth Obelisk",
    "Ribbit Hut",
  ];
  tooltip.addAdvanced("society:magnifying_glass", (item, advanced, text) => {
    if (tooltip.shift) {
      magnifyingBlocks.forEach((block, index) => {
        text.add(index + 1, Text.gold(block));
      });
    } else {
      text.add(1, Text.green("Displays working area of some machines"));
      text.add(2, [Text.darkGray("Hold ["), Text.gray("Shift"), Text.darkGray("] to view blocks")]);
    }
  });
  tooltip.add("trials:ominous_bottle", Text.blue("Bad Omen (10:00)"));
  tooltip.add("society:overflow_token", Text.gray("Permanantly adds ● 1,006,632,960"));
  tooltip.add("society:overflow_token", Text.gray("to your coin leaderboard score,"));
  tooltip.add("society:overflow_token", Text.gray("bypassing the bank account's cap."));
  tooltip.add("society:overflow_token", Text.red("Overflow tokens cannot be recovered"));
  // Sprinklers
  const generateSprinklerTooltip = (tooltip, tier, radius) => {
    const tooltipRadius = 1 + radius * 2;
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.gray("Waters crops before they dry out at 6am")
    );
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.gray("Can be given a stick for decoration")
    );
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.green(`Area: ${tooltipRadius}x${tooltipRadius}`)
    );
  };
  generateSprinklerTooltip(tooltip, "iron", 1);
  generateSprinklerTooltip(tooltip, "gold", 2);
  generateSprinklerTooltip(tooltip, "diamond", 3);
  generateSprinklerTooltip(tooltip, "netherite", 4);
  // Books
  tooltip.add("society:yard_work_yearly", Text.green("Right click to gain Farming experience"));
  tooltip.add("society:husbandry_hourly", Text.green("Right click to gain Husbandry experience"));
  tooltip.add("society:mining_monthly", Text.green("Right click to gain Mining experience"));
  tooltip.add("society:combat_quarterly", Text.green("Right click to gain Adventuring experience"));
  tooltip.add("society:wet_weekly", Text.green("Right click to gain Fishing experience"));
  tooltip.add("society:book_of_stars", Text.green("Right click to gain experience in all skills"));
  tooltip.add(
    [
      "society:starcardi",
      "society:star_coquito",
      "society:good_catawba",
      "society:nutty_basil",
      "society:forks_of_blue",
      "society:ancient_cider",
      "society:ancient_vespertine",
      "society:dewy_star",
    ],
    Text.red("Not placeable in Wine Racks")
  );
  tooltip.add(
    [
      "fantasyfurniture:nordic/bed_single",
      "fantasyfurniture:nordic/bed_double",
      "fantasyfurniture:dunmer/bed_single",
      "fantasyfurniture:dunmer/bed_double",
      "fantasyfurniture:venthyr/bed_single",
      "fantasyfurniture:venthyr/bed_double",
      "fantasyfurniture:bone/skeleton/bed_single",
      "fantasyfurniture:bone/skeleton/bed_double",
      "fantasyfurniture:bone/wither/bed_single",
      "fantasyfurniture:bone/wither/bed_double",
      "fantasyfurniture:royal/bed_single",
      "fantasyfurniture:royal/bed_double",
      "fantasyfurniture:necrolord/bed_single",
      "fantasyfurniture:necrolord/bed_double",
    ],
    Text.red("Does not work with Magic Mirror!")
  );
  // Refined
  tooltip.add("refinedstorage:4k_storage_block", Text.green("Stores 4,000 items digitally"));
  tooltip.add("refinedstorage:64k_storage_block", Text.green("Stores 64,000 items digitally"));
  global.removedItems.forEach((item) => {
    tooltip.add(item, Text.red("REMOVED! You shouldn't have this..."));
  });
});
