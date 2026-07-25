console.info("[SOCIETY] coinLeaderboard.js loaded");

const updateLeaderboardMap = (server) => {
  let playerList = server.persistentData.playerList;
  let cardsList = server.persistentData.cardsList;
  let overflowList = server.persistentData.overflowList;
  if (!playerList) return undefined;
  let leaderboardMap = new Map();
  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    let accountName = playerList[playerUUID];
    let cBankId = cardsList[playerUUID];
    let bankBalance = bankAccount.getBalance();

    if (!accountName) { // blaze banker
      accountName = bankAccount.id;
    } else if (cBankId != null & cBankId != playerUUID) {
      bankAccount = global.GLOBAL_BANK.getAccount(cBankId);
      accountName = bankAccount.id;
    }

    if (overflowList != null && overflowList[playerUUID] != null) {
      bankBalance += overflowList[playerUUID] * 1006632960;
    }

    if (leaderboardMap.has(String(accountName))) {
      leaderboardMap.set(String(accountName), leaderboardMap.get(String(accountName)) + bankBalance);
    } else {
      leaderboardMap.set(String(accountName), bankBalance);
    };
  });
  return Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
};

global.updateLeaderboard = (block, level, server) => {
  let calcY = block.y + 3;
  let leaderboardMap = updateLeaderboardMap(server);
  let playerList = server.persistentData.playerList;
  if (!leaderboardMap) return;
  if (global.susFunctionLogging)
    console.log("[SOCIETY-SUSFN] coinLeaderboard.js");
  global.clearOldTextDisplay(block, level, "leaderboard");

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
    let accountName = balanceStr[0]
    let bankAccount = global.GLOBAL_BANK.getAccount(accountName)
    if (bankAccount) {
      accountName = bankAccount.label
      if (accountName == "Blaze Banker") { // default name
        accountName = "";
        Object.keys(server.persistentData.playerList).forEach((playerUUID) => {
          if (bankAccount.isAuthorized(playerUUID)) {
            if (accountName !== "") accountName += " & "
            accountName += playerList[playerUUID];
          }
        })
        accountName += "'s Team"
      }
    }
    calcY -= 0.3;
    global.spawnTextDisplay(
      block,
      calcY,
      "leaderboard",
      Text.of(`§6${accountName} §7- §f● §6${balanceStr[1].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
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
      be.serverTick(600, 0, (tick) => {
        global.updateLeaderboard(tick.block, tick.level, tick.level.server);
      });
    });
});
