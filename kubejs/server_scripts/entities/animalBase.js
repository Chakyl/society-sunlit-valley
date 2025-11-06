console.info("[SOCIETY] animalBase.js loaded");

const debug = true;

const debugData = (player, level, data, hearts) => {
  player.tell(`:heart: ${data.getInt("affection")}-${hearts} hearts`);
  player.tell(`Day: ${Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed())}`);
  player.tell(`Pet: ${data.getInt("ageLastPet")}`);
  player.tell(`Fed: ${data.getInt("ageLastFed")}`);
  player.tell(`Dropped Special: ${data.getInt("ageLastDroppedSpecial")}`);
  player.tell(`Milked: ${data.getInt("ageLastMilked")}`);
  player.tell(`Magic Harvested: ${data.getInt("ageLastMagicHarvested")}`);
  player.tell(`Bed bound: ${data.get("boundBed")}`);
};

const initializeFarmAnimal = (day, target, level) => {
  const data = target.persistentData;
  if (!data.getInt("affection")) {
    data.affection = 1;
    level.spawnParticles(
      "minecraft:heart",
      true,
      target.x,
      target.y + 1.5,
      target.z,
      0,
      0.1,
      0,
      1,
      0.01
    );
  }
  const newBaseDay = day - 1;
  if (!data.getInt("ageLastPet")) data.ageLastPet = newBaseDay;
  if (!data.getInt("ageLastFed")) data.ageLastFed = newBaseDay;
  if (!data.getInt("ageLastDroppedSpecial")) data.ageLastDroppedSpecial = newBaseDay;
  if (!data.getInt("ageLastMagicHarvested")) data.ageLastMagicHarvested = newBaseDay;
  if (!data.getInt("ageLastBred")) data.ageLastBred = newBaseDay;
  if (!data.getInt("ageLastMilked") && global.checkEntityTag(target, "society:milkable_animal"))
    data.ageLastMilked = newBaseDay;
};

// Anti-frustration feature to be forgiving when re-logging
const handleFarmAnimalBackwardsCompat = (target, day) => {
  const data = target.persistentData;
  if (day < data.getInt("ageLastPet") || data.getInt("ageLastPet") - day > 5000) {
    let newDay = day - 1;
    data.ageLastPet = newDay;
    data.ageLastMagicHarvested = newDay;
    data.ageLastMilked = newDay;
    data.ageLastDroppedSpecial = newDay;
    data.ageLastBred = newDay;
    data.ageLastFed = newDay;
  }
};

const handlePet = (name, data, day, peckish, hungry, e) => {
  const { player, item, target, level, server } = e;
  const ageLastPet = data.getInt("ageLastPet");
  const affection = data.getInt("affection");
  const bedless = data.get("boundBed") == null;
  const heartsToDisplay = bedless ? 3 : 10;
  let hearts = Math.floor(affection / 100);
  let nameColor = "#55FF55";
  if (peckish) {
    nameColor = "#FFAA00";
  }
  if (hungry) {
    nameColor = "#FF5555";
  }
  if (hearts > 10) hearts = 10;
  else if (hearts < 0) hearts = 0;
  let affectionIncreaseMult = player.stages.has("animal_whisperer") || data.bribed ? 2 : 1;
  if (player.stages.has("animal_fancy")) affectionIncreaseMult += 0.5;
  let affectionIncrease = 10 * affectionIncreaseMult;

  if (target.isBaby()) {
    affectionIncrease = affectionIncrease * (player.stages.has("fostering") ? 10 : 2);
  }
  let errorText = "";

  if (day > ageLastPet) {
    const livableArea = global.getAnimalIsNotCramped(target);
    if (!player.isFake()) {
      debug && player.tell(`Increased Affection by: ${affectionIncrease} from petting`);
      data.affection = affection + affectionIncrease;
    }
    if (hungry || (!data.clockwork && player.isFake()) || !livableArea) {
      data.affection = affection - (hungry ? 15 : 25);
    }
    data.ageLastPet = day;
    level.spawnParticles(
      (!data.clockwork && player.isFake()) || hungry
        ? "minecraft:angry_villager"
        : "minecraft:heart",
      true,
      target.x,
      target.y + 1.5,
      target.z,
      0,
      0.1,
      0,
      1,
      0.01
    );
    global.giveExperience(server, player, "husbandry", 10);
    if (!livableArea && !data.clockwork) {
      errorText = `${name} feels crowded and unhappy...`;
    }
    if (hearts > 3 && bedless) {
      player.tell(
        Text.gold(`${name} needs a ${global.getAnimalBedType(target.type)} Bed from the Shepherd!`)
      );
    }
    if (!hungry && peckish && !player.isFake() && !item.hasTag("society:animal_feed")) {
      server.runCommandSilent(
        `emberstextapi sendcustom ${player.username} {anchor:"BOTTOM_CENTER",background:1,wrap:220,align:"BOTTOM_CENTER",color:"#FFAA00",offsetY:-100} 40 ${name} could use something to eat...`
      );
    }
    if (hungry) {
      errorText = `${name} went too long without food...`;
    }
    if (errorText && !player.isFake()) {
      server.runCommandSilent(
        `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 40 ${errorText}`
      );
    }
  } else if (item === "minecraft:air") {
    global.renderUiText(
      player,
      server,
      {
        animalNameIcons: {
          type: "text",
          x: 0,
          y: -88,
          text: `${data.clockwork ? "⚙" : ""}${data.bff ? "❤" : ""}${
            data.bribed && data.clockwork ? " " : ""
          }${data.bribed ? "💰" : ""}`,
          color: nameColor,
          alignX: "center",
          alignY: "bottom",
        },
        animalName: {
          type: "text",
          x: 0,
          y: -78,
          text: `${name}`,
          color: nameColor,
          alignX: "center",
          alignY: "bottom",
        },
        animalNameShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -77,
          text: name,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
        affection: {
          type: "text",
          x: 0,
          y: -66,
          text: `§c${hearts > 0 ? `❤`.repeat(Math.min(hearts, heartsToDisplay)) : ""}§0${
            hearts < heartsToDisplay ? `❤`.repeat(heartsToDisplay - hearts) : ""
          }`,
          color: "#FFAA00",
          alignX: "center",
          alignY: "bottom",
        },
        affectionShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -65,
          text: `❤`.repeat(heartsToDisplay),
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
    debug && debugData(player, level, data, hearts);
  }
  // Raise Max health
  const affectionHealth = hearts * 4;
  if (target.maxHealth < affectionHealth) {
    target.setMaxHealth(affectionHealth);
    target.setHealth(affectionHealth);
  }
};

const handleMilk = (name, data, day, hungry, e) => {
  const { player, item, target, level, server } = e;
  if (player.cooldowns.isOnCooldown(item)) return;
  if (player.isFake() && data.getInt("affection") < 100) return;
  let errorText;
  let milkItem = global.getMilk(target, data, player, day, true);

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
    level.spawnParticles(
      "minecraft:note",
      true,
      target.x,
      target.y + 1.5,
      target.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      3,
      0.01
    );
  } else if (target.isBaby()) {
    errorText = `${name} is too young to produce milk!`;
  } else if (hungry) {
    errorText = `${name} is too hungry to produce milk!`;
  } else {
    errorText = `${name} needs rest ...`;
  }
  if (errorText && !player.isFake()) {
    server.runCommandSilent(
      `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 20 ${errorText}`
    );
  }
};

const handleFeed = (data, day, e) => {
  const { player, item, target, level, server } = e;
  if (player.cooldowns.isOnCooldown(item)) return;
  const ageLastFed = data.getInt("ageLastFed");
  const affection = data.getInt("affection");
  const affectionIncrease = {
    "society:animal_feed": 10,
    "society:candied_animal_feed": 100,
    "society:mana_feed": 30,
  }[item.id];
  let affectionIncreaseMult = player.stages.has("animal_whisperer") || data.bribed ? 2 : 1;
  if (player.stages.has("animal_fancy")) affectionIncreaseMult += 0.5;
  // Cap affection increase at 100
  const totalNewAffection = Math.min(affectionIncrease * affectionIncreaseMult, 100);
  if (day > ageLastFed) {
    server.runCommandSilent(
      `playsound minecraft:entity.generic.eat block @a ${player.x} ${player.y} ${player.z}`
    );
    target.heal(4);
    global.giveExperience(server, player, "husbandry", 20);
    data.affection = affection + totalNewAffection;
    debug && player.tell(`Increased Affection by: ${totalNewAffection} from feeding`);
    data.ageLastFed = day;
    level.spawnParticles(
      "legendarycreatures:wisp_particle",
      true,
      target.x,
      target.y + 1.5,
      target.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      5,
      0.01
    );
    item.count--;
    global.addItemCooldown(player, item, 10);
  }
};
const handleSheepMagicShears = (e) => {
  const { target, level, server } = e;
  if (target.readyForShearing()) {
    target.setSheared(true);
    let woolItem = Item.of(target.getColor().getName() + "_wool");
    let i = Math.ceil(Math.random() * 4);
    for (let j = 0; j < i; j++) {
      let wool = level.createEntity("minecraft:item");

      wool.x = target.x + rnd(0, 0.5);
      wool.y = target.y + 0.5;
      wool.z = target.z + rnd(0, 0.5);
      wool.item = Item.of(woolItem);
      wool.spawn();
      wool.setDeltaMovement(
        wool
          .getDeltaMovement()
          .add(
            (Math.random() - Math.random()) * 0.1,
            Math.random() * 0.05,
            (Math.random() - Math.random()) * 0.1
          )
      );
    }

    server.runCommandSilent(
      `playsound minecraft:entity.sheep.shear block @a ${target.x} ${target.y} ${target.z}`
    );
  }
};
const handleMagicHarvest = (name, data, e) => {
  const { player, level, target, item, server } = e;
  if (player.cooldowns.isOnCooldown(item)) return;
  if (target.type == "minecraft:sheep") handleSheepMagicShears(e);
  const affection = data.getInt("affection");
  const hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
  let errorText = "";
  const droppedLoot = global.getMagicShearsOutput(level, target, player, server);
  if (droppedLoot !== -1) {
    server.runCommandSilent(
      `playsound minecraft:entity.sheep.shear block @a ${player.x} ${player.y} ${player.z}`
    );
    global.giveExperience(server, player, "husbandry", 15);
    for (let i = 0; i < droppedLoot.length; i++) {
      let specialItem = level.createEntity("minecraft:item");
      let dropItem = droppedLoot[i];
      specialItem.x = player.x;
      specialItem.y = player.y;
      specialItem.z = player.z;
      specialItem.item = dropItem;
      specialItem.spawn();
    }
    global.addItemCooldown(player, item, 1);
  } else {
    errorText = `${name} needs some time to rest`;
    if (hearts < 5) {
      errorText = `${name} doesn't trust you enough...`;
    }
    if (!player.isFake())
      server.runCommandSilent(
        `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 40 ${errorText}`
      );
    global.addItemCooldown(player, item, 10);
  }
};
global.handleHusbandryBase = (hand, player, item, target, level, server) => {
  const pet = global.checkEntityTag(target, "society:pet_animal");
  const eventData = {
    player: player,
    item: item,
    target: target,
    level: level,
    server: server,
  };
  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:husbandry_animal") && !pet) return;
  server.scheduleInTicks(1, () => {
    if (hand == "MAIN_HAND") {
      const day = Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());
      handleFarmAnimalBackwardsCompat(target, day);
      initializeFarmAnimal(day, target, level);
      const data = target.persistentData;
      const nonIdType = String(target.type.split(":")[1]).replace(/_/g, " ");
      let name = target.customName ? target.customName.getString() : undefined;
      if (!name) {
        name = global.formatName(nonIdType);
        if (name.equals("Domestic tribull")) name = "Domestic tri-bull";
      }
      const ageLastFed = data.getInt("ageLastFed");
      const peckish = !pet && day - ageLastFed == 1;
      const hungry = !pet && day - ageLastFed > 1;
      const affection = data.getInt("affection");
      const hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
      player.swing();

      handlePet(name, data, day, peckish, hungry, eventData);
      if (pet) return;
      if (item.hasTag("society:animal_feed") && !pet) handleFeed(data, day, eventData);
      if (
        item === "society:milk_pail" &&
        global.checkEntityTag(target, "society:milkable_animal")
      ) {
        handleMilk(name, data, day, hungry, eventData);
      }
      if (
        player.stages.has("biomancer") &&
        [
          "bakery:bread_knife",
          "farmersdelight:iron_knife",
          "farmersdelight:diamond_knife",
          "farmersdelight:netherite_knife",
          "farmersdelight:golden_knife",
          "aquaculture:wooden_fillet_knife",
          "aquaculture:stone_fillet_knife",
          "aquaculture:iron_fillet_knife",
          "aquaculture:gold_fillet_knife",
          "farmersdelight:flint_knife",
          "aquaculture:neptunium_fillet_knife",
          "aquaculture:diamond_fillet_knife",
          "refurbished_furniture:knife",
        ].includes(item.id)
      ) {
        if (player.cooldowns.isOnCooldown(item)) return;
        if (hearts < 5) {
          server.runCommandSilent(
            `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 40 ${name} doesn't trust you enough...`
          );
        } else {
          let heart = level.createEntity("minecraft:item");
          heart.x = player.x;
          heart.y = player.y;
          heart.z = player.z;
          heart.item = Item.of("quark:diamond_heart");
          heart.spawn();
          server.runCommandSilent(
            `playsound minecraft:entity.sheep.shear block @a ${player.x} ${player.y} ${player.z}`
          );
          server.runCommandSilent(
            `playsound legendarycreatures:mojo_hurt block @a ${player.x} ${player.y} ${player.z} 0.1`
          );
          level.spawnParticles(
            "minecraft:angry_villager",
            true,
            target.x,
            target.y + 1.5,
            target.z,
            0.2 * rnd(1, 4),
            0.2 * rnd(1, 4),
            0.2 * rnd(1, 4),
            5,
            0.01
          );
          data.affection = affection - 100;
          global.addItemCooldown(player, item, 5);
        }
      }
      if (player.stages.has("bribery") && item === "numismatics:crown" && !data.bribed) {
        if (player.cooldowns.isOnCooldown(item)) return;
        data.bribed = true;
        data.affection = affection + 100;
        item.count--;
        server.runCommandSilent(
          `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
        );
        level.spawnParticles(
          "legendarycreatures:desert_mojo_particle",
          true,
          target.x,
          target.y + 1.5,
          target.z,
          0.2 * rnd(0, 1),
          0.2 * rnd(0, 1),
          0.2 * rnd(0, 1),
          5,
          0.01
        );
        global.addItemCooldown(player, item, 10);
      }
      if (
        player.stages.has("clockwork") &&
        item === "create:precision_mechanism" &&
        !data.clockwork
      ) {
        data.clockwork = true;
        item.count--;
        server.runCommandSilent(
          `playsound trials:vault_activate block @a ${player.x} ${player.y} ${player.z}`
        );
        level.spawnParticles(
          "supplementaries:bomb_explosion",
          true,
          target.x,
          target.y + 1.5,
          target.z,
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          3,
          0.01
        );
        if (data.bff) {
          data.bff = false;
          server.runCommandSilent(
            `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 80 Its mind was corrupted and no longer gifts Prismatic Shards...`
          );
        }
      }
      if (player.stages.has("bff") && item === "society:friendship_necklace" && !data.bff) {
        data.bff = true;
        if (!player.isCreative()) item.count--;
        server.runCommandSilent(
          `playsound legendarycreatures:wisp_idle block @a ${player.x} ${player.y} ${player.z}`
        );
        level.spawnParticles(
          "buzzier_bees:buttercup_bloom",
          true,
          target.x,
          target.y + 1.5,
          target.z,
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          10,
          0.01
        );
        if (data.clockwork) {
          data.clockwork = false;
          server.runCommandSilent(
            `emberstextapi sendcustom ${player.username} {anchor:"BOTTOM_CENTER",background:220,wrap:1,align:"BOTTOM_CENTER",color:"#55FF55",offsetY:-100} 80 Its mind was healed from being a souless machine!`
          );
        }
      }
      if (player.stages.has("transplanting") && item === "quark:diamond_heart" && hearts < 10) {
        if (player.cooldowns.isOnCooldown(item)) return;
        data.affection = affection + 100;
        if (!player.isCreative()) item.count--;
        server.runCommandSilent(
          `playsound aquaculture:fish_flop block @a ${player.x} ${player.y} ${player.z}`
        );
        level.spawnParticles(
          "minecraft:heart",
          true,
          target.x,
          target.y + 1.5,
          target.z,
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          0.2 * rnd(0, 2),
          5,
          0.01
        );
        global.addItemCooldown(player, item, 4);
      }
      if (item === "society:magic_shears") {
        handleMagicHarvest(name, data, eventData);
      }
      if (affection > 1075) {
        // Cap affection at 1075
        data.affection = 1075;
      }
      if (affection < 0) data.affection = 0;
    }
  });
};
ItemEvents.entityInteracted((e) => {
  const { hand, player, item, target, level, server } = e;
  global.handleHusbandryBase(hand, player, item, target, level, server);
});
