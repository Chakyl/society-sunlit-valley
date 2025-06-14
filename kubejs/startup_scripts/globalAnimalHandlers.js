// Why are entity type tags so weird
global.checkEntityTag = (entity, checkedTag) => {
  if (!entity || !entity.entityType || !entity.entityType.tags) return false;
  return entity.entityType.tags.anyMatch((tag) => tag.location() == checkedTag);
};

global.isFresh = (age, actionAge, interactionCooldown) => {
  if (actionAge < interactionCooldown) return false;
  return age < actionAge;
};

global.getAnimalIsNotCramped = (target) => {
  const level = target.getLevel();
  const entities = level.getEntitiesWithin(target.boundingBox.inflate(1)).length;

  return entities <= 6
};

global.getMilkingTimeMult = (type) => {
  if (type === "minecraft:goat" || type === "species:mammutilation") return 2;
  else if (type === "minecraft:sheep") return 1.5;
  return 1;
};

const resolveMilk = (hearts, type, warped) => {
  let size = "";
  let resolvedType = "";
  if (hearts > 5) {
    size = "large_";
  }
  if (type === "mammutilation") return "species:ichor_bottle";
  if (type === "goat") resolvedType = type;
  if (type.includes("sheep")) resolvedType = "sheep";
  if (warped) resolvedType = "warped";
  if (type === "water buffalo") resolvedType = "buffalo";
  return `${size}${resolvedType}${resolvedType === "" ? "" : "_"}milk`;
};

global.getMilk = (level, target, data, player, interactionCooldown, raiseEffection) => {
  const ageLastMilked = data.getInt("ageLastMilked");
  const hungry =
    level.time - data.getInt("ageLastFed") > interactionCooldown * 2;
  const nonIdType = String(target.type.split(":")[1]).replace(/_/g, " ");
  const affection = data.getInt("affection");
  let hearts = Math.floor(affection / 100);
  const freshAnimal = global.isFresh(
    level.time,
    ageLastMilked,
    interactionCooldown
  );
  let affectionIncrease = 0;
  if (player)
    affectionIncrease =
      player.stages.has("animal_whisperer") || data.bribed ? 20 : 10;
  let warped = false;
  let quality = 0;

  if (nonIdType === "wooly cow" && Number(target.getNbt().Variant) === 2) {
    warped = true;
  }
  if (
    !target.isBaby() &&
    !hungry &&
    (freshAnimal || level.time - ageLastMilked > interactionCooldown)
  ) {
    if (raiseEffection) data.affection = affection + affectionIncrease;
    data.ageLastMilked = level.time;
    if (hearts >= 10 || (hearts > 0 && hearts % 5 === 0)) {
      quality = 3;
    } else {
      quality = (hearts % 5) - 2;
    }
    let milkId = resolveMilk(hearts, nonIdType, warped);
    if (milkId == "species:ichor_bottle" && hearts >= 5) quality = 3; 
    return Item.of(
      `${player && player.stages.has("shepherd") ? 2 : 1}x ${
        milkId.includes(":") ? milkId : `society:${milkId}`
      }`,
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
  const interactionCooldown = global.animalInteractionCooldown;
  const data = target.persistentData;
  const ageLastFed = data.getInt("ageLastFed");
  const ageLastDroppedSpecial = data.getInt("ageLastDroppedSpecial") || 0;
  const type = target.type;
  const freshAnimal = global.isFresh(
    level.time,
    ageLastDroppedSpecial,
    interactionCooldown
  );
  const hungry = level.time - ageLastFed > interactionCooldown * 2;
  const affection = data.getInt("affection") || 0;
  const hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  const heartBonus = hearts === 10 ? 2 : 1;
  if (freshAnimal || level.time - ageLastDroppedSpecial > interactionCooldown) {
    if (
      ["minecraft:pig", "snowpig:snow_pig", "minecraft:mooshroom"].includes(
        type
      )
    )
      harvestFunction(
        data,
        0.3,
        hungry,
        4,
        heartBonus * player.stages.has("triple_truffle") ? 3 : 1,
        "society:truffle",
        true,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
    if (type === "minecraft:rabbit") {
      harvestFunction(
        data,
        0.33,
        hungry,
        3,
        player.stages.has("coopmaster") ? 2 : 1,
        "society:fine_wool",
        true,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
      harvestFunction(
        data,
        0.16,
        hungry,
        5,
        heartBonus * player.stages.has("coopmaster") ? 2 : 1,
        "minecraft:rabbit_foot",
        true,
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
      ["minecraft:sheep", "meadow:wooly_sheep", "snuffles:snuffle"].includes(
        type
      )
    ) {
      harvestFunction(
        data,
        0.5,
        hungry,
        4,
        heartBonus,
        "society:fine_wool",
        true,
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
    if (type === "buzzier_bees:moobloom") {
      harvestFunction(
        data,
        0.01,
        hungry,
        10,
        1,
        "betterarcheology:growth_totem",
        false,
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
    if (type === "autumnity:snail") {
      harvestFunction(
        data,
        1,
        hungry,
        3,
        heartBonus * 2,
        "autumnity:snail_shell_piece",
        false,
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
    if (type === "minecraft:sniffer") {
      harvestFunction(
        data,
        1,
        hungry,
        5,
        heartBonus,
        "betterarcheology:artifact_shards",
        false,
        {
          level: level,
          target: target,
          player: player,
          server: server,
          block: block,
          inventory: inventory,
        }
      );
      harvestFunction(data, 0.25, hungry, 5, 1, "minecraft:sniffer_egg", true, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
          inventory: inventory,
      });
    }
    if (type === "species:goober") {
      harvestFunction(data, 0.25, hungry, 5, 1, "species:petrified_egg", true, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
          inventory: inventory,
      });
    }
    if (type === "minecraft:panda") {
      const pandaFruits = [
        "pamhc2trees:mangoitem",
        "atmospheric:orange",
        "pamhc2trees:peachitem",
        "pamhc2trees:pawpawitem",
        "pamhc2trees:bananaitem",
      ];
      harvestFunction(
        data,
        0.75,
        hungry,
        2,
        heartBonus,
        pandaFruits[Math.floor(Math.random() * pandaFruits.length)],
        true,
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
    if (global.checkEntityTag(target, "society:large_egg_animal")) {
      let eggType = String(type).split(":")[1];
      harvestFunction(
        data,
        1,
        hungry,
        4,
        1,
        `society:large${eggType === "chicken" ? "" : `_${eggType}`}_egg`,
        true,
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
      player.stages.has("coopmaster") &&
      [
        "minecraft:chicken",
        "untitledduckmod:duck",
        "untitledduckmod:goose",
        "etcetera:chapple",
        "autumnity:turkey",
      ].includes(type)
    ) {
      harvestFunction(
        data,
        0.02,
        hungry,
        1,
        1,
        "vintagedelight:golden_egg",
        false,
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
    if (data.bff) {
      harvestFunction(
        data,
        0.1,
        hungry,
        10,
        1,
        "society:prismatic_shard",
        false,
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
      harvestFunction(data, 0.2, hungry, 1, 1, "quark:diamond_heart", false, {
        level: level,
        target: target,
        player: player,
        server: server,
        block: block,
          inventory: inventory,
      });
    }
    data.ageLastDroppedSpecial = level.time;
  }
};
