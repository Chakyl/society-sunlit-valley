// Why are entity type tags so weird
global.checkEntityTag = (entity, checkedTag) => {
  if (!entity || !entity.entityType || !entity.entityType.tags) return false;
  return entity.entityType.tags.anyMatch((tag) => tag.location() == checkedTag);
};

global.isFresh = (day, actionAge) => {
  return day < actionAge;
};

global.getAnimalIsNotCramped = (target, scale) => {
  const level = target.getLevel();
  const entities = level
    .getEntitiesWithin(target.boundingBox.inflate(scale))
    .filter((e) => global.checkEntityTag(e, "society:husbandry_animal"));

  return entities.length < 6;
};

global.isWarpedCow = (target) =>
  target.type === "meadow:wooly_cow" && Number(target.getNbt().Variant) === 2;

global.getMilkingTimeMult = (target, type) => {
  const warped = global.isWarpedCow(target);
  let mult;
  global.husbandryMilkingDefinitions.forEach((definition) => {
    if (!mult && definition.animal.equals(type.toString())) {
      if (warped && definition.warped) mult = definition.cooldown;
      if (!warped) mult = definition.cooldown;
    }
  });
  return mult;
};

global.getHusbandryQuality = (hearts, mood, milk) => {
  let heartQuality = 0;
  let moodQuality = 0;
  if (hearts > 0) {
    if (milk) {
      if (hearts >= 10 || (hearts > 0 && hearts % 5 === 0)) {
        heartQuality = 3;
      } else {
        heartQuality = Math.floor((hearts % 11) / 2 - 2);
      }
    } else {
      heartQuality = Math.floor((hearts % 11) / 2 - 2);
    }
  }
  if (mood > 224) moodQuality = 3;
  else if (mood > 192) moodQuality = 2;
  else if (mood > 160) moodQuality = 1;
  return Math.min(moodQuality, heartQuality);
};

const resolveMilk = (hearts, mood, target, type) => {
  let large = hearts > 5 && Math.random() < (mood + hearts * 10) / 256;
  let milk;
  const warped = global.isWarpedCow(target);
  global.husbandryMilkingDefinitions.forEach((definition) => {
    if (!milk && definition.animal.equals(type.toString())) {
      if (warped && definition.warped)
        milk = large ? definition.milk.lg : definition.milk.sm;
      if (!warped) milk = large ? definition.milk.lg : definition.milk.sm;
    }
  });
  return milk;
};

const canMilk = (data, target, day, plushieModifiers) => {
  const ageLastMilked = data.getInt("ageLastMilked");
  const dayHasPassed =
    day > ageLastMilked + global.getMilkingTimeMult(target, target.type) - 1;
  if (plushieModifiers) return dayHasPassed;
  const hungry = day - data.getInt("ageLastFed") > 1;
  const freshAnimal = global.isFresh(day, ageLastMilked);
  return !target.isBaby() && !hungry && (freshAnimal || dayHasPassed);
};

global.getMilk = (
  level,
  target,
  data,
  player,
  day,
  raiseEffection,
  plushieModifiers
) => {
  const crackerBonus = data.animalCracker ? 2 : 1;
  let affection;
  let mood;
  let affectionIncrease = 0;
  if (plushieModifiers) {
    affection = 1000;
    mood = 256;
  } else {
    affection = data.getInt("affection") || 0;
    mood = global.getOrFetchMood(level, target, day, player);
    if (player) {
      affectionIncrease =
        player.stages.has("animal_whisperer") || data.bribed ? 10 : 5;
    }
  }
  let hearts = Math.floor(affection / 100);

  let quality = 0;
  if (canMilk(data, target, day, plushieModifiers)) {
    const plushieDoubleDrops = plushieModifiers && plushieModifiers.doubleDrops;
    const plushieProcessItems =
      plushieModifiers && plushieModifiers.processItems;
    if (raiseEffection) data.affection = affection + affectionIncrease;
    if (!plushieModifiers) data.ageLastMilked = day;
    if (mood >= 160) {
      quality = global.getHusbandryQuality(hearts, mood, true);
    }
    let milkId = resolveMilk(hearts, mood, target, target.type);
    if (milkId == "species:ichor_bottle" && hearts >= 5) quality = 3;
    if (plushieProcessItems) {
      let cheesePressOutput = global.cheesePressRecipes.get(milkId);
      if (cheesePressOutput) {
        milkId = Item.of(cheesePressOutput.output[0]).id;
      }
    }
    return Item.of(
      `${
        (player && player.stages.has("shepherd") ? 2 : 1) *
        crackerBonus *
        (plushieDoubleDrops ? 2 : 1)
      }x ${milkId}`,
      quality > 0 ? `{quality_food:{effects:[],quality:${quality}}}` : null
    );
  }
  return -1;
};

global.handleSpecialHarvest = (
  level,
  target,
  player,
  server,
  block,
  inventory,
  plushieModifiers,
  harvestFunction
) => {
  const day = global.getDay(level);
  const data = plushieModifiers ? target : target.persistentData;
  const ageLastFed = plushieModifiers ? -1 : data.getInt("ageLastFed");
  const ageLastDroppedSpecial = data.getInt("ageLastDroppedSpecial") || 0;
  const type = target.type;
  const freshAnimal = plushieModifiers
    ? false
    : global.isFresh(day, ageLastDroppedSpecial);
  const hungry = day - ageLastFed > 1;
  const crackerBonus = data.animalCracker ? 2 : 1;
  if (freshAnimal || day > ageLastDroppedSpecial) {
    let resolvedCount;
    let resolvedItem;
    global.husbandryForagingDefinitions.forEach((definition) => {
      if (definition.animal.equals(type)) {
        definition.forages.forEach((forage) => {
          resolvedCount = forage.countMult;
          if (forage.stage && player.stages.has(forage.stage.name)) {
            resolvedCount = forage.stage.newCountMult;
          }
          if (forage.itemPool) {
            resolvedItem =
              forage.itemPool[
                Math.floor(Math.random() * forage.itemPool.length)
              ];
          } else {
            resolvedItem = forage.item;
          }
          harvestFunction(
            data,
            day,
            forage.chance,
            hungry,
            forage.minHearts,
            resolvedCount * crackerBonus,
            resolvedItem,
            forage.hasQuality,
            plushieModifiers,
            {
              level: level,
              target: target,
              player: player,
              server: server,
              block: block,
              inventory: inventory,
            }
          );
        });
      }
    });
    if (
      player.stages.has("coopmaster") &&
      (plushieModifiers
        ? global.coopMasterAnimals.includes(animal.type)
        : global.checkEntityTag(animal, "society:coopmaster_bird"))
    ) {
      harvestFunction(
        data,
        day,
        0.02,
        hungry,
        1,
        1 * crackerBonus,
        "vintagedelight:golden_egg",
        true,
        plushieModifiers,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
    }
    if (data.bff && player.stages.has("bff")) {
      harvestFunction(
        data,
        day,
        0.1,
        hungry,
        10,
        1 * crackerBonus,
        "society:prismatic_shard",
        false,
        plushieModifiers,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
    }
    if (!player.isFake() && !player.stages.has("animal_fancy")) {
      harvestFunction(
        data,
        day,
        0.05,
        hungry,
        4,
        1,
        "society:animal_fancy",
        false,
        plushieModifiers,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
    }
    if (player.stages.has("reaping_scythe")) {
      harvestFunction(
        data,
        day,
        0.1,
        hungry,
        1,
        1 * crackerBonus,
        "quark:diamond_heart",
        false,
        plushieModifiers,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
    }
    if (
      plushieModifiers &&
      plushieModifiers.newDrops &&
      plushieModifiers.newDrops.length > 0
    ) {
      plushieModifiers.newDrops.forEach((drop) => {
        harvestFunction(
          data,
          day,
          1,
          hungry,
          1,
          drop.count * crackerBonus,
          drop.id,
          false,
          plushieModifiers,
          {
            level: level,
            target: target,
            player: player,
            server: server,
            block: block,
            inventory: inventory,
          }
        );
      });
    }
    if (!plushieModifiers) data.ageLastDroppedSpecial = day;
  }
};

global.getMagicShearsOutput = (level, target, player, plushieModifiers) => {
  const day = global.getDay(level);
  const data = plushieModifiers ? target : target.persistentData;
  const ageLastMagicHarvested = data.getInt("ageLastMagicHarvested");
  const freshAnimal = plushieModifiers
    ? false
    : global.isFresh(day, ageLastMagicHarvested);
  let affection;
  let mood;
  if (plushieModifiers) {
    affection = 1000;
    mood = 256;
  } else {
    affection = data.getInt("affection") || 0;
    mood = global.getOrFetchMood(level, target, day, player);
  }

  let hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  const targetId =
    target.type === "meadow:wooly_cow"
      ? ["minecraft", "cow"]
      : target.type.split(":");
  const droppedLoot = Utils.rollChestLoot(
    `${targetId[0]}:entities/${targetId[1]}`
  ).toArray();
  let newLoot = [];
  if (hearts >= 5 && (freshAnimal || day > ageLastMagicHarvested)) {
    data.ageLastMagicHarvested = day;
    data.affection = affection - 7;
    if (!plushieModifiers) {
      level.spawnParticles(
        "snowyspirit:glow_light",
        true,
        target.x,
        target.y + 1.5,
        target.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        20,
        2
      );
    }
    if (mood >= 160) {
      let quality = global.getHusbandryQuality(hearts, mood);
      for (let i = 0; i < droppedLoot.length; i++) {
        droppedLoot[i] = Item.of(
          droppedLoot[i].id,
          `{quality_food:{effects:[],quality:${quality}}}`
        );
      }
    }
    if (player.stages.has("mana_hand")) {
      let dropItem;
      for (let i = 0; i < droppedLoot.length; i++) {
        dropItem = droppedLoot[i];
        if (dropItem.maxStackSize < dropItem.count * 2) {
          newLoot.push(dropItem);
          newLoot.push(dropItem);
        } else {
          dropItem.count = dropItem.count * 2;
          newLoot.push(dropItem);
        }
      }
      return newLoot;
    }
    for (let i = 0; i < droppedLoot.length; i++) {
      newLoot.push(droppedLoot[i]);
    }
    if (player.stages.has("heretic")) {
      newLoot.push(Item.of("3x society:sparkstone"));
      target.attack(2);
      data.affection = affection - 20;
    }
    return newLoot;
  } else return -1;
};

const getMoodImpactModifier = (target) => {
  if (global.tierTwoHusbandryAnimals.includes(target.type)) return 1.5;
  if (global.tierThreeHusbandryAnimals.includes(target.type)) return 2;
  return 1;
};

const getNearbyBlocks = (level, target, radius, tag) => {
  const { x, y, z } = target;
  let blockCount = 0;
  let scanBlock;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag(tag)) {
      blockCount++;
    }
  }
  return blockCount;
};

let debugMood = false;

global.getOrFetchMood = (level, target, day, player) => {
  const data = target.persistentData;
  let moodDebuffs = 0;
  let moodImpactModifier = getMoodImpactModifier(target);
  if (day - data.getInt("ageLastPet") > 1) {
    moodDebuffs += 64;
    if (debugMood) player.tell("Too long since last pet");
  }
  if (day - data.getInt("ageLastFed") > 1) {
    moodDebuffs += 128;
    if (debugMood) player.tell("Too long since last fed");
  }
  let requiredBlocks = 0;
  if (global.coldMobs.includes(target.type)) {
    requiredBlocks = getNearbyBlocks(level, target, 5, "society:cold_blocks");
    if (requiredBlocks < 5) {
      moodDebuffs += 32 - requiredBlocks / (5 * 32);
      if (debugMood) player.tell("Not enough cold blocks ");
    }
  } else {
    if (global.getSeasonFromLevel(level) === "winter" && target.canSeeSky) {
      moodDebuffs += 32;
      if (debugMood) player.tell("Left outside during winter");
    }
  }
  if (!global.getAnimalIsNotCramped(target, 3)) {
    moodDebuffs += 96;
    if (debugMood) player.tell("Cramped conditions");
  }
  if (level.raining && target.canSeeSky) {
    moodDebuffs += 32;
    if (debugMood) player.tell("Left outside in rain");
  }
  if (level.getBlock(target.getPos()).hasTag("create:seats")) {
    moodDebuffs += 48;
    if (debugMood) player.tell("Sitting on seat");
  }
  if (debugMood) player.tell(`Mood debuffs before modifiers: ${moodDebuffs}`);
  moodDebuffs = moodDebuffs *= moodImpactModifier;
  if (day - data.getInt("ageLastBoosted") == 1) {
    moodDebuffs += 24;
    if (debugMood) player.tell("Boosted from food");
  }
  if (data.clockwork) {
    moodDebuffs += 64;
    if (debugMood) player.tell("Boosted from clockwork");
  }
  if (debugMood) {
    player.tell(`Mood debuffs after modifiers: ${moodDebuffs}`);
    player.tell(`Final mood: ${256 - moodDebuffs}`);
  }
  if (day > data.getInt("ageLastPet")) {
    data.lastMood = Math.max(0, 256 - moodDebuffs);
    if (256 - moodDebuffs < 8) data.affection = data.affection - 20;
  }
  return data.lastMood;
};
/**
 * Plushie Trait related drops and mechanics
 */
global.getPlushieModifiers = (level, data, plushieBlock) => {
  let newDrops = [];
  let doubleDrops = false;
  let resetDay = false;
  let qualityMult = data.quality + 1;
  let probabilityIncrease = 0;
  let processItems = false;
  const roll = Math.random();
  switch (data.type) {
    case 0:
      // Aquatic
      if (roll < 0.05 * qualityMult) {
        newDrops.push(
          Item.of(rnd50() ? "society:river_jelly" : "society:ocean_jelly")
        );
      }
      break;
    case 1:
      // Woodsy
      let nearbyLogs = global.getTaggedBlocksInRadius(
        level,
        "society:raw_logs",
        plushieBlock,
        7,
        true
      );
      newDrops.push(
        Item.of(
          `${qualityMult * 8}x ${
            nearbyLogs[Math.floor(Math.random() * nearbyLogs.length)]
          }`
        )
      );
      break;
    case 2:
      // Eldritch
      newDrops.push(Item.of(`${qualityMult}x oreganized:raw_silver`));
      break;
    case 3:
      // Wrathful
      newDrops.push(Item.of(`${qualityMult * 3}x oreganized:raw_lead`));
      break;
    case 4:
      // Sommelier
      if (roll < 0.25 * qualityMult) processItems = true;
      break;
    case 5:
      // Sunlit
      if (roll < (0.05 * qualityMult)) {
        newDrops.push(Item.of("society:sunlit_crystal"));
      }
      break;
    case 6:
      // Hungry
      if (roll < 0.7 * qualityMult) resetDay = true;
      break;
    case 7:
      // Anxious
      probabilityIncrease = 0.25 * qualityMult;
      break;
    case 8:
      // Shy
      if (
        global.getTaggedBlocksInRadius(
          level,
          "society:plushies",
          plushieBlock,
          5 - qualityMult
        ) == 1
      ) {
        doubleDrops = true;
      }
      break;
    case 9:
      // Cheerful;
      if (
        global.getTaggedBlocksInRadius(
          level,
          "society:plushies",
          plushieBlock,
          5
        ) >
        28 - 4 * qualityMult
      ) {
        doubleDrops = true;
      }
      break;
    case 10:
      // Chill
      newDrops.push(Item.of(`${qualityMult}x society:pristine_diamond`));
      break;
    case 11:
      // Machiavellian
      newDrops.push(Item.of(`${qualityMult}x minecraft:netherite_scrap`));
      break;
    case 12:
      // Cutesy
      newDrops.push(Item.of(`${qualityMult}x society:furniture_box`));
      break;
    case 13:
      // Fashionista
      if (
        global.getTaggedBlocksInRadius(
          level,
          "society:loot_furniture",
          plushieBlock,
          5
        ) >=
        28 - 4 * qualityMult
      ) {
        doubleDrops = true;
      }
      break;
    default:
    case 14:
      // Neutral
      if (roll < 0.1 * qualityMult) doubleDrops = true;
      break;
  }
  return {
    newDrops: newDrops,
    doubleDrops: doubleDrops,
    resetDay: resetDay,
    probabilityIncrease: probabilityIncrease,
    processItems: processItems,
  };
};
// const { newDrops, doubleDrops, resetDay, probabilityIncrease, processItems } =
//   global.getPlushieDrops(plushieNbt, plushie);

global.executePlushieHusbandry = (
  level,
  server,
  player,
  item,
  block,
  specialHarvestFunction
) => {
  let nbt = block.getEntityData();
  const { animal } = nbt.data;
  if (!animal) return;
  const day = global.getDay(level);
  const plushieMods = global.getPlushieModifiers(level, nbt.data, block);
  if (
    item === "society:milk_pail" &&
    global.milkableAnimals.includes(animal.type)
  ) {
    let milkItem = global.getMilk(
      level,
      animal,
      animal,
      player,
      day,
      false,
      plushieMods
    );
    if (milkItem !== -1) {
      let milk = level.createEntity("minecraft:item");
      milk.x = player.x;
      milk.y = player.y;
      milk.z = player.z;
      milk.item = milkItem;
      milk.spawn();
      server.runCommandSilent(
        `playsound minecraft:entity.cow.milk block @a ${player.x} ${player.y} ${player.z}`
      );
      global.giveExperience(server, player, "husbandry", 30);
      nbt.merge({
        data: {
          animal: {
            ageLastMilked: day,
          },
        },
      });
      level.spawnParticles(
        "minecraft:note",
        true,
        block.x,
        block.y + 1.5,
        block.z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        3,
        0.01
      );
    }
  }
  global.handleSpecialHarvest(
    level,
    animal,
    player,
    server,
    block,
    undefined,
    plushieMods,
    specialHarvestFunction
  );
  nbt.merge({
    data: {
      animal: {
        ageLastDroppedSpecial: day,
      },
    },
  });
  if (item === "society:magic_shears") {
    const droppedLoot = global.getMagicShearsOutput(
      level,
      animal,
      player,
      plushieMods
    );
    if (droppedLoot !== -1) {
      server.runCommandSilent(
        `playsound minecraft:entity.sheep.shear block @a ${player.x} ${player.y} ${player.z}`
      );
      for (let i = 0; i < droppedLoot.length; i++) {
        let specialItem = level.createEntity("minecraft:item");
        let dropItem = droppedLoot[i];
        specialItem.x = player.x;
        specialItem.y = player.y;
        specialItem.z = player.z;
        specialItem.item = dropItem;
        specialItem.spawn();
      }
      level.spawnParticles(
        "snowyspirit:glow_light",
        true,
        block.x,
        block.y + 0.5,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        20,
        2
      );
      global.addItemCooldown(player, item, 1);
    }
  }
  block.setEntityData(nbt);
  if (plushieMods.resetDay) {
    let changed = false;
    if (item === "society:milk_pail" && Number(animal.ageLastMilked) < day) {
      changed = true;
      nbt.merge({
        data: {
          animal: {
            ageLastMilked: day - 1,
          },
        },
      });
    }
    if (
      item === "society:magic_shears" &&
      Number(animal.ageLastMagicHarvested) < day
    ) {
      changed = true;
      nbt.merge({
        data: {
          animal: {
            ageLastMagicHarvested: day - 1,
          },
        },
      });
    }
    if (Number(animal.ageLastDroppedSpecial) < day) {
      changed = true;
      nbt.merge({
        data: {
          animal: {
            ageLastDroppedSpecial: day - 1,
          },
        },
      });
    }
    if (changed) {
      block.setEntityData(nbt);
      server.runCommandSilent(
        `playsound legendarycreatures:corpse_eater_death block @a ${block.x} ${block.y} ${block.z}`
      );
      level.spawnParticles(
        "species:spectre_smoke",
        true,
        block.x,
        block.y,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        3,
        0.01
      );
    }
  }
};
