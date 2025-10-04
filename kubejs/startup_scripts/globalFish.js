// Priority: 1000
// Spring Fish
global.springOcean = [
  { fish: "aquaculture:atlantic_herring", weight: 16 },
  { fish: "aquaculture:atlantic_herring", weight: 16, night: true },
  {
    fish: "minecraft:pufferfish",
    weight: 9,
    night: true,
    requiresClear: true,
  },
  { fish: "aquaculture:jellyfish", weight: 9, night: true },
  { fish: "minecraft:tropical_fish", weight: 8 },
  { fish: "minecraft:tropical_fish", weight: 8, night: true },
  { fish: "unusualfishmod:raw_drooping_gourami", weight: 6 },
  { fish: "aquaculture:atlantic_halibut", weight: 4, requiresRain: true },
  { fish: "unusualfishmod:raw_spindlefish", weight: 3, night: true },
];
global.springRiver = [
  { fish: "aquaculture:minnow", weight: 11 },
  { fish: "aquaculture:bluegill", weight: 11, night: true },
  { fish: "aquaculture:smallmouth_bass", weight: 9 },
  { fish: "aquaculture:smallmouth_bass", weight: 9, night: true },
  { fish: "minecraft:cod", weight: 10 },
  { fish: "minecraft:cod", weight: 10, night: true },
  { fish: "aquaculture:pink_salmon", weight: 9, night: true },
  { fish: "aquaculture:catfish", weight: 8, night: true, requiresRain: true },
  { fish: "aquaculture:bayad", weight: 5, night: true, requiresRain: true },
  { fish: "unusualfishmod:raw_blind_sailfin", weight: 3 },
];
global.springFresh = [
  { fish: "aquaculture:minnow", weight: 11 },
  { fish: "aquaculture:bluegill", weight: 11, night: true },
  { fish: "aquaculture:perch", weight: 9 },
  { fish: "aquaculture:carp", weight: 9, requiresRain: true },
  { fish: "unusualfishmod:raw_beaked_herring", weight: 8 },
  { fish: "unusualfishmod:raw_hatchetfish", night: true, weight: 5 },
  {
    fish: "unusualfishmod:raw_eyelash",
    weight: 3,
    night: true,
    requiresClear: true,
  },
];

// Summer fish
global.summerOcean = [
  { fish: "unusualfishmod:raw_sneep_snorp", weight: 32 },
  {
    fish: "minecraft:pufferfish",
    weight: 30,
    night: true,
    requiresClear: true,
  },
  { fish: "aquaculture:jellyfish", weight: 24, night: true },
  { fish: "minecraft:tropical_fish", weight: 22 },
  { fish: "minecraft:tropical_fish", weight: 22, night: true },
  { fish: "aquaculture:red_grouper", weight: 19, night: true },
  { fish: "aquaculture:tuna", weight: 15 },
  { fish: "aquaculture:capitaine", weight: 10 },
  { fish: "aquaculture:goldfish", weight: 4, requiresClear: true },
];
global.summerRiver = [
  { fish: "aquaculture:minnow", weight: 28 },
  { fish: "aquaculture:bluegill", weight: 28, night: true },
  { fish: "minecraft:salmon", weight: 25 },
  { fish: "aquaculture:leech", weight: 23, night: true },
  { fish: "aquaculture:smallmouth_bass", weight: 22 },
  { fish: "aquaculture:smallmouth_bass", weight: 22, night: true },
  { fish: "aquaculture:synodontis", weight: 18, requiresClear: true },
  { fish: "aquaculture:tambaqui", weight: 18, night: true },
  {
    fish: "aquaculture:box_turtle",
    weight: 5,
    night: true,
    requiresRain: true,
  },
];
global.summerFresh = [
  { fish: "aquaculture:minnow", weight: 11 },
  { fish: "aquaculture:bluegill", weight: 11, night: true },
  { fish: "aquaculture:carp", weight: 9 },
  { fish: "aquaculture:leech", weight: 9, night: true },
  { fish: "aquaculture:piranha", weight: 9, night: true, requiresRain: true },
  { fish: "aquaculture:boulti", weight: 5, night: true },
  { fish: "crittersandcompanions:koi_fish", weight: 3, requiresClear: true },
  { fish: "aquaculture:arapaima", weight: 3, requiresRain: true },
  { fish: "unusualfishmod:raw_circus_fish", weight: 2 },
];

// Autumn Fish
global.autumnOcean = [
  { fish: "aquaculture:blackfish", weight: 22, night: true },
  { fish: "aquaculture:blackfish", weight: 22 },
  {
    fish: "minecraft:pufferfish",
    weight: 22,
    night: true,
    requiresClear: true,
  },
  {
    fish: "unusualfishmod:raw_picklefish",
    weight: 22,
    night: true,
    requiresRain: true,
  },
  { fish: "unusualfishmod:raw_forkfish", weight: 20 },
  { fish: "unusualfishmod:raw_forkfish", weight: 20, night: true },
  { fish: "unusualfishmod:raw_sailor_barb", weight: 18 },
  { fish: "unusualfishmod:raw_demon_herring", weight: 16, night: true },
  {
    fish: "unusualfishmod:raw_copperflame_anthias",
    weight: 11,
    night: true,
    requiresClear: true,
  },
  { fish: "aquaculture:red_shrooma", weight: 8, requiresRain: true },
];
global.autumnRiver = [
  { fish: "aquaculture:minnow", weight: 27 },
  { fish: "aquaculture:bluegill", weight: 27, night: true },
  { fish: "minecraft:salmon", weight: 26 },
  { fish: "aquaculture:brown_trout", weight: 26 },
  { fish: "aquaculture:smallmouth_bass", weight: 24 },
  { fish: "aquaculture:muskellunge", weight: 18, night: true },
  {
    fish: "aquaculture:arrau_turtle",
    weight: 8,
    night: true,
    requiresRain: true,
  },
];
global.autumnFresh = [
  { fish: "aquaculture:minnow", weight: 11 },
  { fish: "aquaculture:bluegill", weight: 11, night: true },
  { fish: "aquaculture:perch", weight: 9 },
  { fish: "aquaculture:carp", weight: 10 },
  { fish: "aquaculture:gar", weight: 5, requiresRain: true },
  { fish: "unusualfishmod:raw_bark_angelfish", weight: 2 },
  {
    fish: "unusualfishmod:raw_amber_goby",
    weight: 1,
    night: true,
    requiresClear: true,
  },
];

// Winter Fish
global.winterOcean = [
  { fish: "aquaculture:atlantic_herring", weight: 27 },
  { fish: "aquaculture:atlantic_herring", weight: 27, night: true },
  { fish: "aquaculture:blackfish", night: true, weight: 26 },
  { fish: "aquaculture:blackfish", weight: 26 },
  { fish: "aquaculture:pollock", weight: 25, requiresRain: true },
  { fish: "aquaculture:atlantic_cod", weight: 22 },
  { fish: "unusualfishmod:raw_triple_twirl_pleco", night: true, weight: 20 },
  {
    fish: "unusualfishmod:raw_copperflame_anthias",
    weight: 15,
    night: true,
    requiresClear: true,
  },
  { fish: "aquaculture:pacific_halibut", weight: 10 },
  { fish: "aquaculture:brown_shrooma", weight: 8, requiresRain: true },
];
global.winterRiver = [
  { fish: "aquaculture:minnow", weight: 28 },
  { fish: "aquaculture:bluegill", weight: 28, night: true },
  { fish: "minecraft:cod", weight: 27 },
  { fish: "minecraft:cod", weight: 27, night: true },
  { fish: "aquaculture:brown_trout", weight: 25 },
  { fish: "aquaculture:pink_salmon", weight: 22 },
  {
    fish: "unusualfishmod:raw_duality_damselfish",
    weight: 16,
    night: true,
    requiresClear: true,
  },
  { fish: "aquaculture:rainbow_trout", weight: 10, requiresRain: true },
  {
    fish: "aquaculture:starshell_turtle",
    weight: 8,
    night: true,
    requiresRain: true,
  },
];
global.winterFresh = [
  { fish: "aquaculture:minnow", weight: 11 },
  { fish: "aquaculture:bluegill", weight: 11, night: true },
  { fish: "aquaculture:perch", weight: 9, night: true },
  { fish: "aquaculture:carp", weight: 8, night: true },
  { fish: "unusualfishmod:raw_snowflake", weight: 8, requiresRain: true },
  {
    fish: "unusualfishmod:raw_snowflake",
    weight: 8,
    night: true,
    requiresRain: true,
  },
  { fish: "unusualfishmod:raw_aero_mono", weight: 4 },
  { fish: "unusualfishmod:raw_hatchetfish", night: true, weight: 2 },
];

global.getRoe = (fish) => {
  let fishId = fish.split(":")[1];
  if (fishId.includes("raw_")) {
    if (fishId === "raw_snowflake") fishId = "frosty_fin";
    else fishId = fishId.substring(4, fishId.length);
  }
  return `society:${fishId}_roe`;
};

global.getPondProperties = (block) => {
  const properties = block.getProperties();
  return {
    facing: properties.get("facing"),
    valid: properties.get("valid"),
    mature: properties.get("mature").toLowerCase(),
    upgraded: properties.get("upgraded").toLowerCase(),
    quest: properties.get("quest").toLowerCase(),
    quest_id: properties.get("quest_id").toLowerCase(),
    type: properties.get("type").toLowerCase(),
    population: properties.get("population").toLowerCase(),
    max_population: properties.get("max_population").toLowerCase(),
  };
};

global.handleFishHarvest = (fish, block, player, server, basket) => {
  const { facing, valid, upgraded, quest, quest_id, type, population, max_population } =
    global.getPondProperties(block);
  let additionalMaxRoe = 0;
  let harvestOutputs = [];
  if (Math.random() < 0.01 && !player.stages.has("bullfish_jobs")) {
    harvestOutputs.push("society:bullfish_jobs");
  }
  if (player.stages.has("caper_catcher")) additionalMaxRoe += 5;
  if (player.stages.has("caviar_catcher")) additionalMaxRoe += 5;
  const fishRoe = global.getRoe(fish.item);
  const calculateRoe = rnd(
    Math.floor(population / 4),
    Math.floor(population / 2) + additionalMaxRoe
  );
  const roeCount = calculateRoe > 1 ? calculateRoe : 1;
  harvestOutputs.push(`${roeCount}x ${fishRoe}`);
  if (fish.additionalRewards) {
    let fishPondRoll = 0;
    fish.additionalRewards.forEach((reward) => {
      fishPondRoll = Math.random();
      let rewardChance = reward.chance;
      if (upgraded == "true") rewardChance *= 2;
      if (player.stages.has("scum_collector")) rewardChance *= 2;
      if (population >= reward.minPopulation && fishPondRoll <= rewardChance) {
        // Rewards scale to amount of fish population relative to when reward starts spawning
        let calculateCount = Math.floor(
          reward.count * ((population - reward.minPopulation) / (10 - reward.minPopulation))
        );
        if (population == 10) calculateCount = reward.count;
        harvestOutputs.push(`${calculateCount > 1 ? calculateCount : 1}x ${reward.item}`);
      }
    });
  }
  server.runCommandSilent(
    `playsound stardew_fishing:dwop block @a ${block.x} ${block.y} ${block.z}`
  );
  if (!basket) {
    global.giveExperience(server, player, "fishing", roeCount * 4);
  }
  block.set(block.id, {
    facing: facing,
    valid: valid,
    mature: false,
    upgraded: upgraded,
    quest: quest,
    quest_id: quest_id,
    population: population,
    max_population: max_population,
    type: type,
  });
  if (basket) return harvestOutputs;
  harvestOutputs.forEach((item) => {
    block.popItemFromFace(item, facing);
  });
};

global.handleFishExtraction = (block, player, server, item) => {
  const { facing, valid, mature, upgraded, quest, quest_id, type, population, max_population } =
    global.getPondProperties(block);
  let result;
  let resultCount = player.stages.has("mitosis") ? 2 : 1;
  let quality = 0;
  if (player.stages.has("bullfish_jobs") && Number(population) > 3) {
    quality = Math.floor((Number(population) - 3) / 2);
  }
  if (player.stages.has("hot_hands")) {
    server.runCommandSilent(
      `playsound minecraft:block.lava.extinguish block @a ${block.x} ${block.y} ${block.z}`
    );
    let smokedFishId = item.split(":")[1];
    if (smokedFishId.includes("raw_")) {
      if (smokedFishId === "raw_snowflake") smokedFishId = "frosty_fin";
      else smokedFishId = smokedFishId.substring(4, smokedFishId.length);
    }
    result = Item.of(
      `${resultCount}x ${rnd25() ? "minecraft:coal" : `society:smoked_${smokedFishId}`}`,
      quality > 0 ? `{quality_food:{quality:${quality}}}` : null
    );
  } else {
    result = Item.of(
      `${resultCount}x ${item}`,
      quality > 0 ? `{quality_food:{quality:${quality}}}` : null
    );
  }
  if (result) {
    block.set(block.id, {
      facing: facing,
      valid: valid,
      mature: mature,
      upgraded: upgraded,
      quest: quest,
      quest_id: quest_id,
      population: decreaseStage(population),
      max_population: max_population,
      type: type,
    });
  }
  return result;
};

global.validatePond = (block, level, lavaFish) => {
  const { x, y, z } = block;
  const facing = block.properties.get("facing");
  const pondWaterCheckMap = {
    north: {
      startX: 1,
      startZ: 4,
      endX: -1,
      endZ: 1,
    },
    south: {
      startX: -1,
      startZ: -4,
      endX: 1,
      endZ: -1,
    },
    east: {
      startX: -1,
      startZ: 1,
      endX: -4,
      endZ: -1,
    },
    west: {
      startX: 1,
      startZ: -1,
      endX: 4,
      endZ: 1,
    },
  };
  const pondCheckMap = {
    north: {
      xOffset: 0,
      zOffset: 5,
    },
    south: {
      xOffset: 0,
      zOffset: -5,
    },
    east: {
      xOffset: -5,
      zOffset: 0,
    },
    west: {
      xOffset: 5,
      zOffset: 0,
    },
  };
  const adjacentPondMap = {
    north: {
      xOffset: 1,
      zOffset: 0,
    },
    south: {
      xOffset: 1,
      zOffset: 0,
    },
    east: {
      xOffset: 0,
      zOffset: 1,
    },
    west: {
      xOffset: 0,
      zOffset: 1,
    },
  };
  const { startX, startZ, endX, endZ } = pondWaterCheckMap[facing];
  const { xOffset, zOffset } = pondCheckMap[facing];
  const blockAcross = new BlockPos(x + xOffset, y, z + zOffset);
  const conflictingPonds =
    level.getBlock(blockAcross).id === "society:fish_pond" ||
    level.getBlock(
      new BlockPos(x + adjacentPondMap[facing].xOffset, y, z + adjacentPondMap[facing].zOffset)
    ).id === "society:fish_pond" ||
    level.getBlock(
      new BlockPos(x - adjacentPondMap[facing].xOffset, y, z - adjacentPondMap[facing].zOffset)
    ).id === "society:fish_pond";
  let waterAmount = 0;
  let scannedId = "";
  let scannedBlockProperties;

  for (let pos of BlockPos.betweenClosed(new BlockPos(x + startX, y, z + startZ), [
    x + endX,
    y,
    z + endZ,
  ])) {
    scannedBlockProperties = level.getBlock(pos).properties;
    scannedId = level.getBlock(pos).id;
    if (lavaFish && scannedId === "minecraft:lava") {
      waterAmount += 1;
    } else if (!lavaFish && (scannedId === "minecraft:water" || scannedId === "minecraft:ice")) {
      waterAmount += 1;
    } else if (
      !lavaFish &&
      scannedBlockProperties &&
      scannedBlockProperties.get("waterlogged") == "true"
    ) {
      waterAmount += 1;
    }
  }
  if (waterAmount !== 12 || conflictingPonds) return false;
  return true;
};

const fishPondTickRate = 100;

const fishPondProgTime = 40;

global.handleFishPondTick = (tickEvent) => {
  const { block, level } = tickEvent;
  const { x, y, z } = block;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  let blockProperties = level.getBlock(block.pos).getProperties();

  if (blockProperties.get("mature") === "true") return;
  const { facing, valid, mature, upgraded, quest, quest_id, type, population, max_population } =
    global.getPondProperties(level.getBlock(block.pos));
  if (type !== "0" && tickEvent.tick % 20 === 0) {
    global.fishPondDefinitions.forEach((fish, index) => {
      if (type == `${index + 1}`) {
        block.set(block.id, {
          facing: facing,
          valid: global.validatePond(block, level, fish.lava),
          mature: mature,
          upgraded: upgraded,
          quest: quest,
          quest_id: quest_id,
          population: population,
          max_population: max_population,
          type: type,
        });
      }
    });
  }
  if (morningModulo >= fishPondProgTime && morningModulo < fishPondProgTime + fishPondTickRate) {
    if (type !== "0" && valid === "true") {
      let nbt = block.getEntityData();
      nbt.merge({
        data: {
          type: type,
          quest_id: quest_id,
          population: population,
          max_population: max_population,
        },
      });
      block.setEntityData(nbt);
      if (Number(population) > 1) {
        level.spawnParticles(
          "supplementaries:suds",
          true,
          x + 0.5,
          y + 1,
          z + 0.5,
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          rnd(2, 6),
          0.001
        );
        block.set(block.id, {
          facing: facing,
          valid: valid,
          mature: true,
          upgraded: upgraded,
          quest: quest,
          quest_id: quest_id,
          population: population,
          max_population: max_population,
          type: type,
        });
      }
      if (max_population !== "10" && quest !== "true" && rnd75() && population == max_population) {
        block.set(block.id, {
          facing: facing,
          valid: valid,
          mature: false,
          upgraded: upgraded,
          quest: true,
          quest_id: `${rnd(
            0,
            getRequestedItems(global.fishPondDefinitions[type - 1], max_population).length - 1
          )}`,
          population: population,
          max_population: max_population,
          type: type,
        });
      } else if (population !== max_population) {
        successParticles(level, block);
        level.server.runCommandSilent(
          `playsound supplementaries:item.bubble_blower block @a ${block.x} ${block.y} ${block.z}`
        );
        block.set(block.id, {
          facing: facing,
          valid: valid,
          mature: true,
          upgraded: upgraded,
          quest: quest,
          quest_id: quest_id,
          population: increaseStage(population),
          max_population: max_population,
          type: type,
        });
      }
    }
  }
};
