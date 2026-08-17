console.info("[SOCIETY] updateCoinLeaderboard.js loaded");

const getTeamName = (server, uuid) => {
  let cardsList = server.persistentData.cardsList ?? {};
  let playerList = server.persistentData.playerList ?? {};
  if (playerList[uuid]) return playerList[uuid];
  // let bankAccount = global.GLOBAL_BANK.getAccount(String(uuid));
  // if (bankAccount && bankAccount.label !== "Blaze Banker") return bankAccount.label;
  return playerList[cardsList[uuid][0]] + "'s Team";
}

const getTop10Coins = (server) => {
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
    let accUUID = String(playerUUID);
    let cBankId = cardsList[accUUID];
    let bankBalance = bankAccount.getBalance();

    if (!playerList[playerUUID]) { // blaze banker, ignore
      return;
    } else if (cBankId != null && cBankId != playerUUID) {
      bankAccount = global.GLOBAL_BANK.getAccount(cBankId);
      accUUID = String(bankAccount.id);
      if (!leaderboardMap.has(accUUID)) bankBalance += bankAccount.getBalance();
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
  let top10Unammed = Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  let top10 = new Array()
  for (let lbEntry of top10Unammed) {
    let lbData = lbEntry.toString().split(`,`);
    top10.push([getTeamName(server, lbData[0]), lbData[1]])
  };
  return top10;
};

let tick = 0;
ServerEvents.tick(event => {
  tick++
  if (tick < 600) return;
  tick = 0;
  global.leaderboard = getTop10Coins(event.server);
})