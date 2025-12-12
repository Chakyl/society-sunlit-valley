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
  const { player, item, block, server } = e;
  if (
    player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    player.getHeldItem("main_hand").count--;
    let crop = block.level.createEntity("minecraft:item");
    crop.x = block.x + rnd(0, 0.5);
    crop.y = block.y + 0.5;
    crop.z = block.z + rnd(0, 0.5);
    crop.item = Item.of(block.id);
    crop.spawn();
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
    server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${e.player.x} ${e.player.y} ${e.player.z}`
    );
    global.addItemCooldown(player, item, 1);
  }
});

const cropGrowth = ["minecraft:cave_vines", "minecraft:cave_vines_plant"];
BlockEvents.rightClicked(cropGrowth, (e) => {
  const { player, item, block, hand, server } = e;
  if (hand == "OFF_HAND") return;
  if (
    player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    player.getHeldItem("main_hand").count--;
    server.scheduleInTicks(1, () => {
      block.set(block.id, { berries: "true" });
    });
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
    server.runCommandSilent(
      `playsound minecraft:item.bone_meal.use block @a ${e.player.x} ${e.player.y} ${e.player.z}`
    );
    global.addItemCooldown(player, item, 1);
  }
});

BlockEvents.rightClicked("vinery:apple_leaves", (e) => {
  const { block, player, item } = e;
  const season = global.getSeasonFromLevel(player.level);
  let modifiedProperties = block.properties;
  if (
    block.properties.get("can_grow_apples").toString() == "true" &&
    block.properties.get("has_apples").toString() == "true" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    if (
      season == "autumn" ||
      hasGreenhouseGlass(player.level, block.getPos())
    ) {
      modifiedProperties.can_grow_apples = false;
      modifiedProperties.has_apples = false;
      modifiedProperties.age = "0";
      e.server.scheduleInTicks(5, () => {
        block.set(block.id, modifiedProperties);
      });
    } else {
      player.tell(
        Text.translatable(
          "item.society.enriched_bone_meal.tree_fruit_season", 
          Text.translatable("desc.sereneseasons.autumn").gold()
        )
      );
      e.cancel();
    }
  } else if (
    player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    player.getHeldItem("main_hand").count--;
    modifiedProperties.can_grow_apples = true;
    modifiedProperties.has_apples = true;
    modifiedProperties.age = "3";
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
    global.addItemCooldown(player, item, 1);
  }
});

BlockEvents.rightClicked("vinery:dark_cherry_leaves", (e) => {
  const { block, player, item } = e;
  let modifiedProperties = block.properties;
  const season = global.getSeasonFromLevel(player.level);
  if (
    block.properties.get("can_grow_cherries").toString() == "true" &&
    block.properties.get("has_cherries").toString() == "true" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    if (
      season == "spring" ||
      hasGreenhouseGlass(player.level, block.getPos())
    ) {
      modifiedProperties.can_grow_cherries = false;
      modifiedProperties.has_cherries = false;
      modifiedProperties.age = "0";
      e.server.scheduleInTicks(5, () => {
        block.set(block.id, modifiedProperties);
      });
    } else {
      e.player.tell(
        Text.translatable(
          "item.society.enriched_bone_meal.tree_fruit_season", 
          Text.translatable("desc.sereneseasons.spring").green()
        )
      );
      e.cancel();
    }
  } else if (
    player.getHeldItem("main_hand") == "society:enriched_bone_meal" &&
    !player.cooldowns.isOnCooldown(item)
  ) {
    player.getHeldItem("main_hand").count--;
    modifiedProperties.can_grow_cherries = true;
    modifiedProperties.has_cherries = true;
    modifiedProperties.age = "3";
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
    global.addItemCooldown(player, item, 1);
  }
});
