console.info("[SOCIETY] enrichedBonemeal.js loaded");

const hasGreenhouseGlass = (level, cropPos) => {
  let scannedBlock;
  for (let i = 0; i < 16; i++) {
    scannedBlock = level.getBlock(cropPos.offset(0, i + 1, 0));
    if (scannedBlock.hasTag("sereneseasons:greenhouse_glass")) {
      return true;
    }
  }
  return false;
};

const enrichedBonemealThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const cropDrop = [
  "herbalbrews:lavender",
  "herbalbrews:hibiscus",
  "farm_and_charm:wild_ribwort",
  "farm_and_charm:wild_nettle",
];
BlockEvents.rightClicked(cropDrop, (e) => {
  if (
    e.player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    enrichedBonemealThrottle(e.player, 1, "enriched_bonemeal_throttle_crop_drop")
  ) {
    e.player.getHeldItem("main_hand").count--;
    let crop = e.block.level.createEntity("minecraft:item");
    crop.x = e.block.x + rnd(0, 0.5);
    crop.y = e.block.y + 0.5;
    crop.z = e.block.z + rnd(0, 0.5);
    crop.item = Item.of(e.block.id);
    crop.spawn();
    e.block.level.spawnParticles(
      "minecraft:happy_villager",
      true,
      e.block.x + 0.5,
      e.block.y + 0.1,
      e.block.z + 0.5,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      10,
      0.1
    );
    e.server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${e.player.x} ${e.player.y} ${e.player.z}`
    );
  }
});

const cropGrowth = ["minecraft:cave_vines", "minecraft:cave_vines_plant"];
BlockEvents.rightClicked(cropGrowth, (e) => {
  if (
    e.player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    enrichedBonemealThrottle(e.player, 1, "enriched_bonemeal_throttle_crop_growth")
  ) {
    e.player.getHeldItem("main_hand").count--;
    e.block.set(e.block.id, { berries: "true" });
    e.block.level.spawnParticles(
      "minecraft:happy_villager",
      true,
      e.block.x + 0.5,
      e.block.y + 0.1,
      e.block.z + 0.5,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      10,
      0.1
    );
    e.server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${e.player.x} ${e.player.y} ${e.player.z}`
    );
  }
});

BlockEvents.rightClicked("vinery:apple_leaves", (e) => {
  const { block, player } = e;
  const season = global.getSeasonFromLevel(player.level);
  let modifiedProperties = block.properties;
  let throttle = enrichedBonemealThrottle(player, 1, "enriched_bonemeal_throttle_apple_leaves");
  if (
    block.properties.get("can_have_apples").toString() == "true" &&
    block.properties.get("has_apples").toString() == "true"
  ) {
    if (season == "autumn" || hasGreenhouseGlass(player.level, block.getPos())) {
      modifiedProperties.can_have_apples = false;
      modifiedProperties.has_apples = false;
      e.server.scheduleInTicks(5, () => {
        block.set(block.id, modifiedProperties);
      });
    } else {
      player.tell("This tree only bears fruit in §6Autumn§r!");
      e.cancel();
    }
  } else if (player.getHeldItem("main_hand") == "society:enriched_bone_meal" && throttle) {
    player.getHeldItem("main_hand").count--;
    modifiedProperties.can_have_apples = true;
    modifiedProperties.has_apples = true;
    block.set(block.id, modifiedProperties);
    block.level.spawnParticles(
      "minecraft:happy_villager",
      true,
      block.x + 0.5,
      block.y + 0.1,
      block.z + 0.5,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      10,
      0.1
    );
    e.server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`
    );
  }
});

BlockEvents.rightClicked("vinery:dark_cherry_leaves", (e) => {
  const { block, player } = e;
  let modifiedProperties = block.properties;
  const season = global.getSeasonFromLevel(player.level);
  let throttle = enrichedBonemealThrottle(
    player,
    1,
    "enriched_bonemeal_throttle_dark_cherry_leaves"
  );
  if (
    block.properties.get("can_have_cherries").toString() == "true" &&
    block.properties.get("has_cherries").toString() == "true"
  ) {
    if (season == "spring" || hasGreenhouseGlass(player.level, block.getPos())) {
      modifiedProperties.can_have_cherries = false;
      modifiedProperties.has_cherries = false;
      e.server.scheduleInTicks(5, () => {
        block.set(block.id, modifiedProperties);
      });
    } else {
      e.player.tell("This tree only bears fruit in §aSpring§r!");
      e.cancel();
    }
  } else if (player.getHeldItem("main_hand") == "society:enriched_bone_meal" && throttle) {
    player.getHeldItem("main_hand").count--;
    modifiedProperties.can_have_cherries = true;
    modifiedProperties.has_cherries = true;
    block.set(block.id, modifiedProperties);
    block.level.spawnParticles(
      "minecraft:happy_villager",
      true,
      block.x + 0.5,
      block.y + 0.1,
      block.z + 0.5,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      10,
      0.1
    );
    e.server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`
    );
  }
});
