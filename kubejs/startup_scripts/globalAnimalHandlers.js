// Why are entity type tags so weird
global.checkEntityTag = (entity, checkedTag) => {
  if (!entity || !entity.entityType || !entity.entityType.tags) return false;
  return entity.entityType.tags.anyMatch((tag) => tag.location() == checkedTag);
};

global.isFresh = (day, actionAge) => {
  return day < actionAge;
};

global.getAnimalIsNotCramped = (target) => {
  const level = target.getLevel();
  const entities = level
    .getEntitiesWithin(target.boundingBox.inflate(1.1))
    .filter((e) => global.checkEntityTag(e, "society:husbandry_animal"));

  return entities.length <= 6;
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

const resolveMilk = (hearts, target, type) => {
  const large = hearts > 5;
  let milk;
  const warped = global.isWarpedCow(target);
  global.husbandryMilkingDefinitions.forEach((definition) => {
    if (!milk && definition.animal.equals(type.toString())) {
      if (warped && definition.warped) milk = large ? definition.milk.lg : definition.milk.sm;
      if (!warped) milk = large ? definition.milk.lg : definition.milk.sm;
    }
  });
  return milk;
};

global.getMilk = (target, data, player, day, raiseEffection) => {
  const ageLastMilked = data.getInt("ageLastMilked");
  const hungry = day - data.getInt("ageLastFed") > 1;
  const affection = data.getInt("affection");
  let hearts = Math.floor(affection / 100);
  const freshAnimal = global.isFresh(day, ageLastMilked);
  let affectionIncrease = 0;
  if (player) affectionIncrease = player.stages.has("animal_whisperer") || data.bribed ? 10 : 5;
  let quality = 0;
  if (
    !target.isBaby() &&
    !hungry &&
    (freshAnimal || day > ageLastMilked + global.getMilkingTimeMult(target, target.type) - 1)
  ) {
    if (raiseEffection) data.affection = affection + affectionIncrease;
    data.ageLastMilked = day;
    if (hearts >= 10 || (hearts > 0 && hearts % 5 === 0)) {
      quality = 3;
    } else {
      quality = (hearts % 5) - 2;
    }
    let milkId = resolveMilk(hearts, target, target.type);
    if (milkId == "species:ichor_bottle" && hearts >= 5) quality = 3;
    return Item.of(
      `${player && player.stages.has("shepherd") ? 2 : 1}x ${milkId}`,
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
  harvestFunction
) => {
  const day = Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());
  const data = target.persistentData;
  const ageLastFed = data.getInt("ageLastFed");
  const ageLastDroppedSpecial = data.getInt("ageLastDroppedSpecial") || 0;
  const type = target.type;
  const freshAnimal = global.isFresh(day, ageLastDroppedSpecial);
  const hungry = day - ageLastFed > 1;
  const affection = data.getInt("affection") || 0;
  const hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  const heartBonus = hearts === 10 ? 2 : 1;
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
            resolvedItem = forage.itemPool[Math.floor(Math.random() * forage.itemPool.length)];
          } else {
            resolvedItem = forage.item;
          }
          harvestFunction(
            data,
            forage.chance,
            hungry,
            forage.minHearts,
            heartBonus * resolvedCount,
            resolvedItem,
            forage.hasQuality,
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
      global.checkEntityTag(target, "society:coopmaster_bird")
    ) {
      harvestFunction(data, 0.02, hungry, 1, 1, "vintagedelight:golden_egg", true, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
        inventory: inventory,
      });
    }
    if (data.bff && player.stages.has("bff")) {
      harvestFunction(data, 0.1, hungry, 10, 1, "society:prismatic_shard", false, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
        inventory: inventory,
      });
    }
    if (!player.isFake() && !player.stages.has("animal_fancy")) {
      harvestFunction(data, 0.05, hungry, 4, 1, "society:animal_fancy", false, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
        inventory: inventory,
      });
    }
    if (player.stages.has("reaping_scythe")) {
      harvestFunction(data, 0.1, hungry, 1, 1, "quark:diamond_heart", false, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
        inventory: inventory,
      });
    }
    data.ageLastDroppedSpecial = day;
  }
};

global.getMagicShearsOutput = (level, target, player, server) => {
  const day = Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());
  const data = target.persistentData;
  const ageLastMagicHarvested = data.getInt("ageLastMagicHarvested");
  const freshAnimal = global.isFresh(day, ageLastMagicHarvested);
  const affection = data.getInt("affection");
  const hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  const targetId =
    target.type === "meadow:wooly_cow" ? ["minecraft", "cow"] : target.type.split(":");
  const droppedLoot = Utils.rollChestLoot(`${targetId[0]}:entities/${targetId[1]}`).toArray();
  let newLoot = [];
  if (hearts >= 5 && (freshAnimal || day > ageLastMagicHarvested)) {
    data.ageLastMagicHarvested = day;
    data.affection = affection - 7;
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
