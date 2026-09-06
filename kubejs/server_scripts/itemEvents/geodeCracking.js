console.info("[SOCIETY] geodeCracking.js loaded");

ItemEvents.rightClicked("society:geode_buster", e => {
  const { player, server, item } = e
  
  const geodeTypes = [
    "society:geode",
    "society:frozen_geode",
    "society:magma_geode",
    "society:omni_geode",
  ];
  const geode = player.getHeldItem("off_hand").getId();
  if (!geodeTypes.includes(geode)) return;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const bonusOdds = geode === "society:omni_geode" ? 0.4 : 0.3;
  const treasureOdds = geode === "society:omni_geode" ? 0.6 : 0.2;
  const geodeJunk = Ingredient.of("#society:geode_junk").itemIds;
  const geodeBonus = Ingredient.of(`#${geode}_bonus`).itemIds;
  const geodeTreasure = Ingredient.of(`#${geode}_treasure`).itemIds;
  let givenItem = false;

  item.count--;
  player.getHeldItem("off_hand").count--;
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  
  const roll = Math.random();

  if (roll <= 0.9) {
    reward.item = geodeJunk[Math.floor(Math.random() * geodeJunk.length)];
    if (geode === "society:omni_geode" && roll <= 0.03) reward.item = "society:prismatic_shard"
    givenItem = true;
  }
  if (roll <= bonusOdds) {
    reward.item = geodeBonus[Math.floor(Math.random() * geodeBonus.length)];
    givenItem = true;
  }
  if (roll <= treasureOdds || !player.stages.has("first_geode")) {
    reward.item =  geodeTreasure[Math.floor(Math.random() * geodeTreasure.length)];
    givenItem = true;
    player.stages.add('first_geode')
  }
  if (!givenItem) {
    server.runCommandSilent(
      `playsound stardew_fishing:fish_escape block @a ${player.x} ${player.y} ${player.z}`
    );
  } else {   
    reward.spawn();
    server.runCommandSilent(
      `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
    );
  }
  global.addItemCooldown(player, "society:geode_buster", 2);
});
