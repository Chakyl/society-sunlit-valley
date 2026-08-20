console.info("[SOCIETY] updateCoinLeaderboard.js loaded");

const getTeamName = (server, uuid) => {
  let cardsList = server.persistentData.cardsList ?? {};
  let playerList = server.persistentData.playerList ?? {};
  if (playerList[uuid]) return playerList[uuid];
  return playerList[cardsList[uuid][0]] + "'s Team";
}

const getLeaderboardRanking = (server) => {
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
    let accountUUID = String(playerUUID);
    let cardID = cardsList[accountUUID];
    let bankBalance = bankAccount.getBalance();

    if (!playerList[playerUUID]) { // blaze banker, ignore
      return;
    } else if (cardID != null && cardID != playerUUID) {
      bankAccount = global.GLOBAL_BANK.getAccount(cardID);
      accountUUID = String(bankAccount.id);
      if (!leaderboardMap.has(accountUUID)) bankBalance += bankAccount.getBalance();
    }
    if (overflowList != null && overflowList[playerUUID] != null) {
      bankBalance += overflowList[playerUUID] * 1006632960;
    }
    if (leaderboardMap.has(accountUUID)) {
      leaderboardMap.set(accountUUID, leaderboardMap.get(accountUUID) + bankBalance);
    } else {
      leaderboardMap.set(accountUUID, bankBalance);
    };
  });
  let rankingUnammed = Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  let ranking = new Array()
  for (let entry of rankingUnammed) {
    let entryData = entry.toString().split(",");
    ranking.push([getTeamName(server, entryData[0]), entryData[1]])
  };
  return ranking;
};

ServerEvents.tick((e) => {
  if (e.server.getTickCount() % 600) return;
  global.leaderboard = getLeaderboardRanking(e.server);
})