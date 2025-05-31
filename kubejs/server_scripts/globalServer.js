console.info("[SOCIETY] globalServer.js loaded");
global.mainUiElementIds = [
  "animalName",
  "animalNameIcons",
  "affection",
  "artisanMessage",
  "artisanItemMessage",
  "artisanProgress",
  "pondHeader",
  "fishIcon",
  "fishName",
  "population",
  "tapperMessage"
];
const clearUiPaint = (player, ids) => {
  let removedText = {};
  let removedShadow = {};
  // Spawn and clear instance of paint element to prevent warnings that they don't exist
  ids.forEach((id) => {
    removedText[id] = { type: "text" };
    removedShadow[`${id}Shadow`] = { type: "text" };
  });
  player.paint(removedText);
  player.paint(removedShadow);
  ids.forEach((id) => {
    removedText[id] = { remove: true };
    removedShadow[`${id}Shadow`] = { remove: true };
  });
  player.paint(removedText);
  player.paint(removedShadow);
};

global.renderUiText = (player, server, messages, clearedMessages) => {
  server.scheduleInTicks(0, () => {
    clearUiPaint(player, clearedMessages);
    player.paint(messages);
    player.persistentData.ageLastShownMessage = player.age;
    server.scheduleInTicks(80, () => {
      if (player.age - player.persistentData.get("ageLastShownMessage") >= 80)
        clearUiPaint(player, clearedMessages);
    });
  });
};

global.clearUiItemPaint = (player, ids) => {
  let removedItem = {};
  // Spawn and clear instance of paint element to prevent warnings that they don't exist
  ids.forEach((id) => {
    removedItem[id] = { type: "item" };
  });
  player.paint(removedItem);
  ids.forEach((id) => {
    removedItem[id] = { remove: true };
  });
  player.paint(removedItem);
};

global.renderUiItemText = (player, items, ids) => {
  global.clearUiItemPaint(player, ids);
  player.paint(items);
};

global.formatPrice = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

global.calculateCoinValue = (coin) => {
  let value = 0;
  switch (coin.id.split(":")[1]) {
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
    case "iridium_coin":
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
  return value * coin.count;
};

global.getPigColor = (pig) => {
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

global.calculateCoinsFromValue = (price, output) => {
  for (let i = 0; i < global.coinMap.length; i++) {
    let { coin, value } = global.coinMap[i];
    if (value <= price) {
      if (price % value === 0) {
        output.push({ id: coin, count: price / value });
        return output;
      } else {
        output.push({ id: coin, count: Math.floor(price / value) });
        global.calculateCoinsFromValue(price % value, output);
      }
      return output;
    }
  }
};

const validateEntry = (entry, isDay, level, fishArray) => {
  if (entry.requiresRain && !level.raining) return;
  if (entry.requiresClear && (level.raining || level.thundering)) return;
  if (isDay && entry.night) return;
  if (!isDay && entry.night == undefined) return;
  fishArray.push(entry.fish);
};

global.overworldRadar = (e, fish, printFunction, extraOutput) => {
  let local = fish;
  const { level, player } = e;
  const season = global.getSeasonFromLevel(level);
  const biomeTags = level.getBiome(player.pos).tags().toList().toString();
  const isDay = level.getDayTime() % 24000 < 12999;
  let weather = level.raining
    ? `:cloud: ${extraOutput ? "§9Rain§r" : ""}`
    : `:sunny:${extraOutput ? "§eClear§r" : ""}`;
  let time = isDay
    ? `:sunrise: ${extraOutput ? "§6Day§r" : ""}`
    : `:moon: ${extraOutput ? "§8Night§r" : ""}`;
  if (biomeTags.includes("minecraft:is_ocean") || biomeTags.includes("minecraft:is_beach")) {
    printFunction(`    :ocean: ${extraOutput ? "§3Ocean§r" : ""}${weather} ${time}`);
    switch (season) {
      case "spring":
        global.springOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  } else if (biomeTags.includes("minecraft:is_river")) {
    printFunction(`    :droplet: ${extraOutput ? "§9River§r" : ""}${weather} ${time}`);
    switch (season) {
      case "spring":
        global.springRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  } else {
    printFunction(`:bubbles: ${extraOutput ? "§bFresh§r" : ""}${weather} ${time}`);
    switch (season) {
      case "spring":
        global.springFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  }
  return local;
};

global.netherRadar = (e, local, printFunction) => {
  let defaultFish = [
    "netherdepthsupgrade:searing_cod",
    "netherdepthsupgrade:lava_pufferfish",
    "netherdepthsupgrade:blazefish",
    "netherdepthsupgrade:fortress_grouper",
  ];
  let netherFish = local.concat(defaultFish);
  const { level, player } = e;
  let biome = level.getBiome(player.pos).toString();

  if (biome.includes("minecraft:nether_wastes")) {
    printFunction(`            §4Nether Wastes`);
    netherFish.push("netherdepthsupgrade:bonefish");
  } else if (biome.includes("minecraft:soul_sand_valley")) {
    printFunction(`          §4Soul Sand Valley`);
    netherFish.push("netherdepthsupgrade:wither_bonefish");
    netherFish.push("netherdepthsupgrade:soulsucker");
  } else if (biome.includes("minecraft:basalt_deltas")) {
    printFunction(`            §4Basalt Deltas`);
    netherFish.push("netherdepthsupgrade:magmacubefish");
    netherFish.push("netherdepthsupgrade:obsidianfish");
  } else if (biome.includes("minecraft:crimson_forest")) {
    printFunction(`            §4Crimson Forest`);
    netherFish.push("netherdepthsupgrade:eyeball_fish");
  } else if (biome.includes("minecraft:warped_forest")) {
    printFunction(`            §4Warped Forest`);
    netherFish.push("netherdepthsupgrade:glowdine");
  } else {
    printFunction(`            §4The Nether`);
  }
  return netherFish;
};

global.artisanMachineDefinitions = [
  {
    id: "society:loom",
    recipes: global.loomRecipes,
    stageCount: 1,
    maxInput: 5,
    upgrade: "society:tiny_gnome",
  },
  {
    id: "society:aging_cask",
    recipes: global.agingCaskRecipes,
    stageCount: 10,
    maxInput: 1,
    upgrade: "society:broken_clock",
  },
  {
    id: "society:ancient_cask",
    recipes: global.ancientCaskRecipes,
    stageCount: 20,
    maxInput: 1,
    upgrade: "society:inserter",
  },
  {
    id: "society:crystalarium",
    recipes: global.crystalariumCrystals,
    stageCount: 5,
    maxInput: 1,
    upgrade: "society:black_opal",
  },
  {
    id: "society:deluxe_worm_farm",
    recipes: global.deluxeWormFarmRecipes,
    stageCount: 2,
    maxInput: 4,
    upgrade: "society:infinity_worm",
  },
  {
    id: "society:fish_smoker",
    recipes: global.fishSmokerRecipes,
    stageCount: 2,
    maxInput: 1,
    upgrade: "society:ancient_roe",
  },
  {
    id: "society:bait_maker",
    recipes: global.baitMakerRecipes,
    stageCount: 1,
    maxInput: 1,
  },
  {
    id: "society:dehydrator",
    recipes: global.dehydratorRecipes,
    stageCount: 1,
    maxInput: 8,
    upgrade: "society:cordycep",
  },
  {
    id: "society:mayonnaise_machine",
    recipes: global.mayonnaiseMachineRecipes,
    stageCount: 1,
    maxInput: 1,
  },
  {
    id: "society:preserves_jar",
    recipes: global.preservesJarRecipes,
    stageCount: 3,
    maxInput: 5,
    upgrade: "society:stone_hand",
  },
  {
    id: "society:seed_maker",
    recipes: global.seedMakerRecipes,
    stageCount: 1,
    maxInput: 3,
    upgrade: "society:ancient_cog",
  },
  {
    id: "society:charging_rod",
    recipes: "society:battery",
    stageCount: 5,
    maxInput: 1,
  },
  {
    id: "society:espresso_machine",
    recipes: global.espressoMachineRecipes,
    stageCount: 1,
    maxInput: 4,
  },
  {
    id: "society:tapper",
    recipes: global.tapperRecipes,
    stageCount: 7,
    maxInput: 1,
  },
  {
    id: "society:recycling_machine",
    recipes: global.recyclingMachineRecipes,
    stageCount: 1,
    maxInput: 1,
  },
];

global.artisanMachineIds = global.artisanMachineDefinitions.map((x) => x.id);
