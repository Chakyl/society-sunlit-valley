ItemEvents.tooltip((tooltip) => {
  const formatNumber = (number, quality) => {
    let value;
    if (quality) {
      if (quality == 1.0) value = Math.round(number * 1.25);
      if (quality == 2.0) value = Math.round(number * 1.5);
      if (quality == 3.0) value = Math.round(number * 2);
    } else {
      value = number;
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
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
        value = 16252928;
        break;
      default:
        console.log(`Invalid coin`);
    }
    return formatNumber(value * count * (stackSize || 1));
  };
  const getAttributeStr = (attribute) => {
    switch (attribute) {
      case "crop":
        return ":corn: Farmer product";
      case "wood":
        return ":art: Artisan product";
      case "gem":
        return ":gem: Geologist product";
      case "meat":
        return ":crossed_swords: Adventurer product";
      default:
        console.log(`Invalid attribute`);
    }
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
          Text.white(`${calculateCost(coin.split(":")[1], 1, item.count)} :coin:`),
          Text.gray(" Stack value"),
        ]);
      } else {
        text.add(1, [
          Text.white(`${calculateCost(coin.split(":")[1], 1, 1)} :coin:`),
          Text.darkGray(" Hold ["),
          Text.gray("Shift"),
          Text.darkGray("]"),
        ]);
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
    {
      item: "society:token_of_unity",
      tooltip: "I love making mazes! I'm going to design the biggest maze ever!",
    },
    {
      item: "society:mini_oni_eye",
      tooltip: "Fits nicely on a banana",
    },
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
    tooltip.add(artifact.item, Text.gray(":funeral_urn: Artifact"));
  });
  tooltip.addAdvanced("society:fish_pond", (item, advanced, text) => {
    if (item.nbt) {
      text.add(1, Text.aqua(`Fish: ${global.fishPondDefinitions[item.nbt.get("type")].item}`));
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
    tooltip.add(item, Text.gold(":chair: Rare furniture drop"));
    if (!item.includes("tanuki")) {
      tooltip.add(item, Text.white(":house: Modern collection"));
    } else {
      tooltip.add(item, Text.green(":leaves: Tanuki collection"));
    }
  });
  tooltip.add("society:architects_digest", Text.gray("Used to craft :house: §fModern§r furniture"));
  tooltip.add("society:tanuki_leaf", Text.gray("Used to craft :leaves: §aTanuki§r furniture"));
  tooltip.add(/fantasyfurniture/, Text.yellow(":crystal_ball: Fantasy collection"));
  tooltip.add("society:fantasy_dust", Text.gray("Used to craft :leaves: §eFantasy§r furniture"));
  // Hammers
  tooltip.add("justhammers:small_core", Text.gray("Crafts hammers that mine a 3x3x1 area"));
  tooltip.add("justhammers:impact_core", Text.gray("Crafts hammers that mine a 3x3x3 area"));
  // Upgrades:
  tooltip.add(
    "society:ancient_cog",
    Text.green("Use on §2Seed Maker§a to give it a 5% chance of producing an Ancient Fruit Seed")
  );
  tooltip.add(
    "society:stone_hand",
    Text.green("Use on §2Preserves Jar§a to decrease input amount by 2")
  );
  tooltip.add(
    "society:broken_clock",
    Text.green("Use on §2Aging Cask§a to decrease aging time by half")
  );
  tooltip.add(
    "society:sea_biscut",
    Text.green("Use on §2Fish Pond§a to double chance of non-Roe items")
  );
  tooltip.add(
    "society:black_opal",
    Text.green("Use on §2Crystalarium§a to give it a 10% chance of producing pristine items")
  );
  tooltip.add(
    "society:tiny_gnome",
    Text.green("Use on §2Loom§a to give it a 25% chance of producing rare furniture")
  );
  tooltip.add("society:ancient_roe", Text.green("Use on §2Fish Smoker§a to double output"));
  tooltip.add(
    "society:frosted_tip",
    Text.green("Use on §2Charging Rod§a to work and triple output in winter")
  );
  tooltip.add(
    "society:infinity_worm",
    Text.green("Use on §2Deluxe Worm Farm§a to let it work without inputs")
  );
  tooltip.add(
    "society:inserter",
    Text.green("Use on §2Ancient Cask§a to let it process 4 items at a time")
  );
  tooltip.add("society:cordycep", Text.green("Use on §2Dehydrator§a to double mushroom output"));
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
    "society:bank_meter",
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
  tooltip.add("trading_floor:trading_depot", Text.red("Causes crashes with Simple Storage Networks!"))
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
    ],
    Text.gold(":gear: Artisan Machine")
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
    tooltip.add(
      milk,
      Text.aqua(
        "Milked from Wooly Cows that come through portals in Warped Forests. They take a while to spawn on the Nether side!"
      )
    );
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
    "society:animal_feed_sack",
    Text.red("Too large to feed farm animals manually or using Feeding Troughs")
  );
  tooltip.add("society:magic_shears", Text.gray("Harvests drops from farm animals"));
  tooltip.add("vintagedelight:deluxe_burger", Text.gray("Burger? I hardly..."));
  tooltip.add("society:magic_shears", Text.gray("with only a little discomfort!"));
  tooltip.add("society:magic_shears", Text.red("Requires animals to trust you"));
  tooltip.add("society:miracle_potion", Text.gray("Used to breed farm animals"));
  tooltip.add("meadow:cheese_stick", Text.gray("Made in Fondue with cheese and bread"));
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
  tooltip.add("society:prize_ticket", Text.gray("Use on a Prize Machine for something good!"));
  tooltip.add("create:creative_blaze_cake", Text.gray("It's smoking..."));
  tooltip.add("tanukidecor:slot_machine", Text.gray("Right click with any legal tender"));
  tooltip.add("society:relic_trove", Text.gray("Can be opened using an Extractinator"));
  tooltip.add("society:artifact_trove", Text.gray("Can be opened using an Extractinator"));
  tooltip.add("society:geode_buster", Text.gray("Right click with geode in offhand"));
  tooltip.add(
    "society:dragontooth_axe",
    Text.red("Will break if wielded by one without the Dragonslayer skill")
  );
  tooltip.add("society:kinetic_blueprint", Text.gray("Not consumed in crafting"));
  tooltip.add("society:kinetic_blueprint", Text.gold(":classical_building: Boiler Room reward"));
  tooltip.add(
    "botania:apothecary_default",
    Text.gold(":classical_building: Abandoned Farm reward")
  );
  "society:kinetic_blueprint",
    Text.gray("Given for free for completing the Boiler Room chapter in the questbook.");
  tooltip.add("society:kinetic_blueprint", Text.green("Not consumed in crafting"));
  tooltip.add("society:kinetic_blueprint", Text.gold(":classical_building: Boiler Room reward"));
  tooltip.add("society:skull_cavern_teleporter", Text.gold(":classical_building: Vault reward"));
  tooltip.add("relics:magic_mirror", Text.gold(":classical_building: Crafts Room reward"));
  tooltip.add(
    "moreminecarts:chiseled_organic_glass",
    Text.gray("Crops underneath grow in any season")
  );
  tooltip.add("society:furniture_box", Text.gray("Right click to open"));
  tooltip.add("society:bouquet_bag", Text.gray("Right click to open"));
  tooltip.add(
    "gag:time_sand_pouch",
    Text.red("REMOVED!! CORRUPTS WORLD WHEN USED ON ARTISAN MACHINES")
  );
  tooltip.add("extractinator:extractinator", Text.gray("Right click with a geode to process"));
  tooltip.add(
    ["moreminecarts:chunkrodite_block", "moreminecarts:chunkrodite"],
    Text.gray("Adds time to Fueled Chunk Loader")
  );
  tooltip.add(
    "moreminecarts:chunk_loader",
    Text.green("Loads a 3x3 chunk area using Chunkroderite and other items")
  );
  tooltip.add("moreminecarts:chunk_loader", Text.red("Must be restarted when server restarts"));
  tooltip.add("vintagedelight:evaporator", Text.gray("Place next to water to make salt"));
  tooltip.add("farmersdelight:rich_soil", Text.gray("Grows colonies from red and"));
  tooltip.add("farmersdelight:rich_soil", Text.gray("brown mushrooms planted on it"));
  tooltip.add("farmersdelight:tomato_seeds", Text.red("Quality of seed has no effect"));
  tooltip.add("relics:jellyfish_necklace", Text.red("Hurts nearby animals when worn!"));

  const craftingMaterials = [
    "society:fire_quartz",
    "society:earth_crystal",
    "society:oak_resin",
    "society:pine_tar",
    "society:aquamarine",
    "society:jade",
  ];
  craftingMaterials.forEach((item) => {
    tooltip.add(item, Text.gray("Crafting material"));
  });
  // Prize Machine
  tooltip.add(
    [
      "pamhc2trees:hazelnut_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:passionfruit_sapling",
      "etcetera:eggple",
      "etcetera:golden_eggple",
    ],
    Text.gold(":ticket: Prize Machine exclusive")
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
    tooltip.add(block, Text.gold(`:moneybag: ${villager} workstation`));
  });
  Item.of("farm_and_charm:barley", "{quality_food:{quality:3}}");
  // Prices
  const addPriceTooltip = (sellable, attribute) => {
    let value = sellable.value;
    tooltip.addAdvanced(sellable.item, (item, advanced, text) => {
      let quality;
      if (item.nbt && item.nbt.quality_food) {
        quality = item.nbt.quality_food.quality;
      }
      if (tooltip.shift) {
        text.add(1, [
          Text.white(`${formatNumber(value * item.count, quality)} :coin:`),
          Text.gray(" Stack value"),
        ]);
        text.add(2, [Text.gold(getAttributeStr(attribute))]);
      } else {
        text.add(1, [
          Text.white(`${formatNumber(value, quality)} :coin:`),
          Text.darkGray(" Hold ["),
          Text.gray("Shift"),
          Text.darkGray("]"),
        ]);
      }
    });
  };

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
        Text.white(`${formatNumber(price * item.count, 0)} :coin:`),
        Text.gray(" Stack value"),
      ]);
      text.add(2, [Text.gold(getAttributeStr("meat"))]);
    } else {
      text.add(1, [
        Text.white(`${formatNumber(price, 0)} :coin:`),
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
        Text.white(`${formatNumber(price * item.count, 0)} :coin:`),
        Text.gray(" Stack value"),
      ]);
      text.add(2, [Text.gold(getAttributeStr("meat"))]);
    } else {
      text.add(1, [
        Text.white(`${formatNumber(price, 0)} :coin:`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });

  Item.of("splendid_slimes:plort", '{plort:{id:"splendid_slimes:slimy"}}');
  // Ore
  global.ore.forEach((item) => {
    addPriceTooltip(item, "gem");
  });
  // Pristine
  global.pristine.forEach((item) => {
    addPriceTooltip(item, "gem");
  });
  // Geodes
  global.geodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:froggy_helm") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.gray(":rock: Mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_drum") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.gray(":rock: Mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_gadget") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.gray(":rock: Mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  // Gem
  global.gems.forEach((gem) => {
    addPriceTooltip(gem, "gem");
    tooltip.add(gem.item, Text.gray(":gem: Gem"));
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
    tooltip.add(gem, Text.gray(":gem: Gem"));
  });
  global.miscGeologist.forEach((gem) => {
    addPriceTooltip(gem, "gem");
  });
  // Artifact
  global.artifacts.forEach((artifact) => {
    addPriceTooltip(artifact, "meat");
  });
  global.relics.forEach((artifact) => {
    addPriceTooltip(artifact, "meat");
  });
  // Crops
  global.crops.forEach((crop) => {
    addPriceTooltip(crop, "crop");
  });
  // Meat
  global.animalProducts.forEach((meat) => {
    addPriceTooltip(meat, "crop");
  });
  // Wines
  global.wines.forEach((wine) => {
    addPriceTooltip(wine, "wood");
  });
  // Brews
  global.brews.forEach((brew) => {
    addPriceTooltip(brew, "wood");
  });
  // Preserves
  global.preserves.forEach((jar) => {
    addPriceTooltip(jar, "wood");
  });
  // Dehydrated
  global.dehydrated.forEach((jar) => {
    addPriceTooltip(jar, "wood");
  });
  // Artisan goods
  global.artisanGoods.forEach((good) => {
    addPriceTooltip(good, "wood");
  });
  // Fish
  global.fish.forEach((fish) => {
    addPriceTooltip(fish, "crop");
  });
  global.smokedFish.forEach((fish) => {
    addPriceTooltip(fish, "wood");
  });
  global.agedRoe.forEach((fish) => {
    addPriceTooltip(fish, "wood");
  });
  // Cocktails
  global.cocktails.forEach((cocktail) => {
    addPriceTooltip(cocktail, "crop");
  });
  // herbalbrews
  global.herbalBrews.forEach((brew) => {
    addPriceTooltip(brew, "crop");
  });
  // Logs
  global.logs.forEach((log) => {
    addPriceTooltip(log, "crop");
  });
  // Cooking
  global.cooking.forEach((dish) => {
    addPriceTooltip(dish, "crop");
  });
  // Misc
  global.miscAdventurer.forEach((miscItem) => {
    addPriceTooltip(miscItem, "meat");
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
  const magnifyingBlocks = [
    "Auto-Grabber",
    "Artisan Hopper",
    "Feeding Trough",
    "Fish Pond Basket",
    "Golden Clock",
    "Mana Milker",
    "All Sprinklers",
  ];
  // Translocators
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
  global.removedItems.forEach((item) => {
    tooltip.add(item, Text.red("REMOVED! You shouldn't have this..."));
  });
});
