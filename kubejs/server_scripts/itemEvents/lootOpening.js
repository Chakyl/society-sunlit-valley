console.info("[SOCIETY] lootOpening.js loaded");

ItemEvents.rightClicked("society:furniture_box", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const furniture = Ingredient.of("#society:loot_furniture").itemIds;

  if (!player.isCreative()) item.count--;
  let reward = player.level.createEntity("minecraft:item");
  const rewardCount = player.stages.has("the_red_and_the_black") ? 2 : 1;
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = Item.of(
    `${rewardCount}x ${furniture[Math.floor(Math.random() * furniture.length)]}`
  );
  reward.spawn();
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "society:furniture_box", 2);
});

const fantasyBoxes = [
  "nordic",
  "dunmer",
  "venthyr",
  "bone",
  "royal",
  "necrolord",
];
fantasyBoxes.forEach((theme) => {
  ItemEvents.rightClicked(`society:fantasy_box_${theme}`, (e) => {
    const { server, player, item } = e;
    server.runCommandSilent(
      `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
    );

    let furniture = Ingredient.of(
      `#society:${theme}_fantasy_furniture`
    ).itemIds;
    furniture = furniture.concat(
      Ingredient.of(`#society:decorations_fantasy_furniture`).itemIds
    );
    if (!player.isCreative()) item.count--;
    let reward = player.level.createEntity("minecraft:item");
    const rewardCount = player.stages.has("the_red_and_the_black") ? 2 : 1;
    reward.x = player.x;
    reward.y = player.y;
    reward.z = player.z;
    reward.item = Item.of(
      `${rewardCount}x ${
        furniture[Math.floor(Math.random() * furniture.length)]
      }`
    );
    const itemId = reward.item.id;
    if (itemId.includes("wool") || itemId.includes("carpet"))
      reward.item = Item.of(`16x ${itemId}`);
    if (itemId.includes("double")) reward.item = Item.of(`2x ${itemId}`);
    reward.spawn();
    server.runCommandSilent(
      `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
    );
    global.addItemCooldown(player, `society:fantasy_box_${theme}`, 2);
  });
});

ItemEvents.rightClicked("society:bouquet_bag", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const furniture = Ingredient.of("#society:bouquet_bag_flowers").itemIds;

  if (!player.isCreative()) item.count--;
  let reward = player.level.createEntity("minecraft:item");
  const rewardCount = player.stages.has("the_red_and_the_black") ? 5 : 4;
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = Item.of(
    `${rewardCount}x ${furniture[Math.floor(Math.random() * furniture.length)]}`
  );
  reward.spawn();
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "society:bouquet_bag", 2);
});

ItemEvents.rightClicked("society:scavenged_food_bag", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const furniture = Ingredient.of("#society:dish").itemIds;

  if (!player.isCreative()) item.count--;
  let reward = player.level.createEntity("minecraft:item");
  const rewardCount = player.stages.has("the_red_and_the_black") ? 2 : 1;
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;

  reward.item = Item.of(
    `${rewardCount}x ${furniture[Math.floor(Math.random() * furniture.length)]}`
  );
  reward.spawn();
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "society:scavenged_food_bag", 2);
});
