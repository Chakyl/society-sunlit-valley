console.info("[SOCIETY] coinLeaderboard.js loaded");

const updateLeaderboardMap = (server) => {
  let playerName;
  let playerList = server.persistentData.playerList;
  let overflowList = server.persistentData.overflowList;
  if (!playerList) return undefined;
  let leaderboardMap = new Map();
  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    playerName = playerList[playerUUID];
    if (overflowList != null && overflowList[playerUUID] != null) {
      leaderboardMap.set(
        playerName,
        bankAccount.getBalance() + overflowList[playerUUID] * 1006632960
      );
    } else {
      leaderboardMap.set(playerName, bankAccount.getBalance());
    }
  });
  return Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
};

global.updateLeaderboard = (block, server) => {
  let calcY = block.y + 3;
  let leaderboardMap = updateLeaderboardMap(server);
  if (!leaderboardMap) return;
  if (global.susFunctionLogging)
    console.log("[SOCIETY-SUSFN] coinLeaderboard.js");
  global.clearOldTextDisplay(block, "leaderboard");

  // Display leaderboard name
  global.spawnTextDisplay(
    block,
    calcY,
    "leaderboard",
    Text.translatable("block.society.coin_leaderboard.title")
  );
  // Display leaderboard accounts
  leaderboardMap.forEach((playerName) => {
    const balanceStr = playerName.toString().split(`,`);
    if (balanceStr[0].length <= 1) return;
    calcY -= 0.3;
    global.spawnTextDisplay(
      block,
      calcY,
      "leaderboard",
      Text.of(`§6${balanceStr[0]} §7- §f● §6${balanceStr[1].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    );
  });
};

StartupEvents.registry("block", (e) => {
  e.create("society:coin_leaderboard", "cardinal")
    .box(2, 0, 2, 14, 2, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .model("society:block/kubejs/coin_leaderboard")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.coin_leaderboard.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/coin_leaderboard",
      });
    })
    .blockEntity((be) => {
      be.serverTick(200, 0, (tick) => {
        global.updateLeaderboard(tick.block, tick.level.server);
      });
    });
});
