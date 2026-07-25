console.info("[SOCIETY] coinLeaderboard.js loaded");

const updateLeaderboardMap = (server) => {
  if (global.coinLBCooldown && global.coinLBCooldown > server.getTickCount()) {
    return global.lastCoinLB;
  }
  global.coinLBCooldown = server.getTickCount() + 590;
  let playerList = server.persistentData.playerList;
  let cardsList = server.persistentData.cardsList;
  let overflowList = server.persistentData.overflowList;
  if (!playerList) return undefined;
  if (!cardsList) {
    server.persistentData.cardsList = {};
    cardsList = server.persistentData.cardsList;
  }
  let leaderboardMap = new Map();
  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    let accUUID = playerList[playerUUID];
    let cBankId = cardsList[playerUUID];
    let bankBalance = bankAccount.getBalance();

    if (!accUUID) { // blaze banker
      accUUID = String(bankAccount.id);
    } else if (cBankId != null && cBankId != playerUUID) {
      bankAccount = global.GLOBAL_BANK.getAccount(cBankId);
      accUUID = String(bankAccount.id);
    }

    if (overflowList != null && overflowList[playerUUID] != null) {
      bankBalance += overflowList[playerUUID] * 1006632960;
    }

    if (leaderboardMap.has(accUUID)) {
      leaderboardMap.set(accUUID, leaderboardMap.get(accUUID) + bankBalance);
    } else {
      leaderboardMap.set(accUUID, bankBalance);
    };
  });
  global.lastCoinLB = Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  return global.lastCoinLB;
};

global.updateLeaderboard = (block, level, server) => {
  let calcY = block.y + 3.25;
  let leaderboardMap = updateLeaderboardMap(server);
  let playerList = server.persistentData.playerList;
  if (!leaderboardMap) return;
  if (global.susFunctionLogging)
    console.log("[SOCIETY-SUSFN] coinLeaderboard.js");
  global.clearOldTextDisplay(block, level, "leaderboard");

  const displayText = Text.translatable("block.society.coin_leaderboard.title")
  global.spawnTextDisplay(block, calcY, "leaderboard", displayText);
  global.spawnTextDisplay(block, calcY, "leaderboard", displayText, 180);
  leaderboardMap.forEach((playerName) => {
    const balanceStr = playerName.toString().split(`,`);
    const uuid = balanceStr[0]
    if (uuid.length <= 1) return;
    let accountName = uuid;
    let bankAccount = global.GLOBAL_BANK.getAccount(uuid);
    if (bankAccount) {
      //accountName = bankAccount.label
      //if (accountName == "Blaze Banker") { // default name
        accountName = "";
        for (const [uuid, name] of Object.entries(playerList)) {
          if (bankAccount.isAuthorized(uuid)) {
            accountName = `${name}'s Team`;
            break;
          };
        };
      //}
    }
    calcY -= 0.3;
    const displayText = Text.of(`§6${accountName} §7- §f● §6${global.formatPrice(balanceStr[1])}`);
    global.spawnTextDisplay(block, calcY, "leaderboard", displayText);
    global.spawnTextDisplay(block, calcY, "leaderboard", displayText, 180);
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
