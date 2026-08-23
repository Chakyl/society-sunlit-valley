console.info("[SOCIETY] updateCoinLeaderboard.js loaded");

global.visibleRankings = global.visibleRankings ?? new Set();
let players;

const trim = (str) => {
  return String(str).replace(/^"|"$/g, '');
};

const getTeamName = (server, uuid) => {
  let playerList = server.persistentData.playerList ?? {};
  if (playerList[uuid]) return playerList[uuid];
  let cardsList = server.persistentData.cardsList ?? {};
  return playerList[cardsList[uuid][0]] + "'s Team";
};

const handleAccount = (leaderboard, cardID, overflowTokens, accountUUID, bankAccount) => {
  let bankBalance = bankAccount.getBalance();
  if (cardID != null) {
    bankAccount = global.GLOBAL_BANK.getAccount(cardID);
    if (bankAccount != null) {
      accountUUID = String(bankAccount.id);
      if (!leaderboard.has(accountUUID)) bankBalance += bankAccount.getBalance();
    };
  };

  if (overflowTokens != null) bankBalance += overflowTokens * 1006632960;

  if (leaderboard.has(accountUUID)) {
    leaderboard.set(accountUUID, leaderboard.get(accountUUID) + bankBalance);
  } else {
    leaderboard.set(accountUUID, bankBalance);
  };
};

const getLeaderboardRanking = (server) => {
  players = new Set();
  server.players.forEach(player => players.add(String(player.uuid)));
  let playerList = server.persistentData.playerList;
  let cardsList = server.persistentData.cardsList;
  let overflowList = server.persistentData.overflowList || [];
  if (!playerList) return [];
  if (!cardsList) {
    server.persistentData.cardsList = {};
    cardsList = server.persistentData.cardsList;
  };
  let leaderboardMap = new Map();
  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    if (!playerList[playerUUID]) return; // blaze banker, ignore
    let accountUUID = String(playerUUID);
    let cardID = cardsList[accountUUID];
    handleAccount(leaderboardMap, cardID, overflowList[playerUUID], accountUUID, bankAccount);
  });
  let sortedRankings = Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1]);
  let i = 0;
  for (let entryData of sortedRankings) {
    let accountUUID = entryData[0];
    if (players.has(accountUUID)) continue;
    if (Array.isArray(cardsList[accountUUID]) && cardsList[accountUUID].some(player => players.has(trim(player)))) continue;
    if (i++ >= 30) break;
    global.visibleRankings.add(accountUUID);
  };
  let rankingUnamed = sortedRankings.slice(0, 10);
  let ranking = new Array();
  for (let entryData of rankingUnamed) {
    ranking.push([getTeamName(server, entryData[0]), entryData[1]]);
    global.visibleRankings.add(entryData[0]);
  };
  return ranking;
};

const updateLeaderboardRanking = (server) => {
  if (!server.persistentData.playerList) return [];
  let playerList = server.persistentData.playerList;
  let prevPlayers = players;
  players = new Set();
  server.players.forEach(player => players.add(String(player.uuid)));
  let cardsList = server.persistentData.cardsList;
  let overflowList = server.persistentData.overflowList || {};
  let leaderboardMap = new Map();
  let iteratedPlayers = new Set();
  for (let accountUUID of global.visibleRankings) { // add top 10 & teams that were on it
    let accounts = [accountUUID];
    let cardID = cardsList[accountUUID];
    if (cardID) {
      if (Array.isArray(cardID)) { accounts = cardID; cardID = accountUUID; } else accounts = cardsList[cardID];
      let sharedBank = global.GLOBAL_BANK.getAccount(cardID);
      if (!sharedBank) { delete cardsList[accountUUID]; continue; }; // banker was broken
    } else if (!playerList[accountUUID]) continue;
    for (let accountUUID of accounts) {
      let trimmedAccountUUID = trim(accountUUID);
      if (iteratedPlayers.has(trimmedAccountUUID)) continue;
      let bankAccount = global.GLOBAL_BANK.getAccount(trimmedAccountUUID);
      handleAccount(leaderboardMap, cardID, overflowList[trimmedAccountUUID], accountUUID, bankAccount);
      iteratedPlayers.add(trimmedAccountUUID);
    };
  };
  prevPlayers.forEach(accountUUID => {
    if (iteratedPlayers.has(accountUUID)) return;
    let cardID = cardsList[accountUUID];
    let bankAccount = global.GLOBAL_BANK.getAccount(accountUUID);
    handleAccount(leaderboardMap, cardID, overflowList[accountUUID], accountUUID, bankAccount);
  });
  let rankingUnamed = Array.from(leaderboardMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  let ranking = new Array();
  for (let entryData  of rankingUnamed) {
    ranking.push([getTeamName(server, entryData[0]), entryData[1]]);
    global.visibleRankings.add(entryData[0]);
  };
  return ranking;
};

if (global.lbServer) global.leaderboard = getLeaderboardRanking(global.lbServer);
ServerEvents.loaded(e => { global.leaderboard = getLeaderboardRanking(e.server); global.lbServer = e.server; });
ServerEvents.tick((e) => {
  if (e.server.getTickCount() % 50) return;
  global.leaderboard = updateLeaderboardRanking(e.server);
});