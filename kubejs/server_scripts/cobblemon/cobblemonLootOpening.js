console.info("[SOCIETY] cobblemonLootOpening.js loaded");

ItemEvents.rightClicked("sunlit_cobblemon:tm_pack", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const tms = Ingredient.of("#sunlit_cobblemon:tm").itemIds;
  const trs = Ingredient.of("#sunlit_cobblemon:tr").itemIds;

  if (!player.isCreative()) item.count--;
  let reward;
  for (let index = 0; index < 3; index++) {
    reward = player.level.createEntity("minecraft:item");
    reward.x = player.x;
    reward.y = player.y;
    reward.z = player.z;
    if (Math.random() < 0.12) {
      reward.item = tms[Math.floor(Math.random() * tms.length)];
    } else {
      reward.item = trs[Math.floor(Math.random() * trs.length)];
    }
    reward.spawn();
  }

  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "sunlit_cobblemon:tm_pack", 2);
});

ItemEvents.rightClicked("sunlit_cobblemon:greater_tm_pack", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const tms = Ingredient.of("#sunlit_cobblemon:tm").itemIds;
  const trs = Ingredient.of("#sunlit_cobblemon:tr").itemIds;

  if (!player.isCreative()) item.count--;
  let reward;
  for (let index = 0; index < 3; index++) {
    reward = player.level.createEntity("minecraft:item");
    reward.x = player.x;
    reward.y = player.y;
    reward.z = player.z;
    if (Math.random() < 0.2 || index == 2) {
      reward.item = tms[Math.floor(Math.random() * tms.length)];
    } else {
      reward.item = trs[Math.floor(Math.random() * trs.length)];
    }
    reward.spawn();
  }

  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "sunlit_cobblemon:greater_tm_pack", 2);
});

ItemEvents.rightClicked("sunlit_cobblemon:prismatic_tm_pack", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const tms = Ingredient.of("#sunlit_cobblemon:tm").itemIds;

  if (!player.isCreative()) item.count--;
  let reward;
  for (let index = 0; index < 3; index++) {
    reward = player.level.createEntity("minecraft:item");
    reward.x = player.x;
    reward.y = player.y;
    reward.z = player.z;
    reward.item = tms[Math.floor(Math.random() * tms.length)];
    reward.spawn();
  }

  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "sunlit_cobblemon:prismatic_tm_pack", 2);
});


ItemEvents.rightClicked("sunlit_cobblemon:berry_capsule", (e) => {
  const { server, player, item } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  const furniture = Ingredient.of("#cobble_workers:common_berries").itemIds;

  if (!player.isCreative()) item.count--;
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;

  reward.item = Item.of(`1x ${furniture[Math.floor(Math.random() * furniture.length)]}`);

  reward.spawn();
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "sunlit_cobblemon:berry_capsule", 2);
});
