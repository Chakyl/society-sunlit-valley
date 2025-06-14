console.info("[SOCIETY] coinLeaderboard.js loaded");

const updateLeaderboardMap = (server) => {
  let playerName;
  let playerList = server.persistentData.playerList;
  if (!playerList) return undefined
  let leaderboardMap = new Map();
  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    playerName = playerList[playerUUID];
    leaderboardMap.set(playerName, bankAccount.getBalance());
  });
  return Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
};

const clearOldLeaderboard = (block) => {
  const { x, y, z } = block;
  Utils.server
    .getLevel("minecraft:overworld")
    .getEntities()
    .forEach((entity) => {
      entity.getTags().forEach((tag) => {
        if (tag === `leaderboard-${x}-${y}-${z}`) {
          entity.getHandSlots().forEach((entry) => {
            block.popItemFromFace(entry, "up");
          })
          entity.getArmorSlots().forEach((entry) => {
            block.popItemFromFace(entry, "up");
          })
          entity.kill();
        }
      });
    });
};

global.updateLeaderboard = (block, server) => {
  const { x, y, z } = block;
  let entity;
  let calcY = y + 1;
  let leaderboardMap = updateLeaderboardMap(server);
  if (!leaderboardMap) return;
  clearOldLeaderboard(block);

  // Display leaderboard name
  entity = block.createEntity("minecraft:armor_stand");
  entity.setCustomName(`:coin: Leaderboard`);
  entity.setCustomNameVisible(true);
  entity.setX(x + 0.5);
  entity.setY(calcY);
  entity.setZ(z + 0.5);
  entity.setInvisible(true);
  entity.setNoGravity(true);
  entity.addTag(`leaderboard-${x}-${y}-${z}`);
  entity.spawn();

  // Display leaderboard accounts
  leaderboardMap.forEach((playerName) => {
    const balanceStr = playerName.toString().split(`,`);
    if (balanceStr[0].length <= 1) return;
    calcY -= 0.3;
    entity = block.createEntity("minecraft:armor_stand");
    entity.setCustomName(
      `§6${balanceStr[0]} §7- §6${balanceStr[1].replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      )} :coin:`
    );
    entity.setCustomNameVisible(true);
    entity.setInvisible(true);
    entity.setNoGravity(true);
    entity.setX(x + 0.5);
    entity.setY(calcY);
    entity.setZ(z + 0.5);
    entity.addTag(`leaderboard-${x}-${y}-${z}`);
    entity.spawn();
  });
};
StartupEvents.registry("block", (e) => {
  e.create("society:coin_leaderboard", "cardinal")
    .box(2, 0, 2, 14, 2, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Displays top 10 richest players on the server"));
      item.modelJson({
        parent: "society:block/coin_leaderboard",
      });
    })
    .blockEntity((be) => {
      be.serverTick(200, 0, (tick) => {
        global.updateLeaderboard(tick.block, tick.level.server);
      });
    });
});