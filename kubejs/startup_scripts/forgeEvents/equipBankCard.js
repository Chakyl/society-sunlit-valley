console.info("[SOCIETY] equipBankCard.js loaded");

ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", (e) => {
  const { entity } = e;
  if (!(entity.isPlayer())) return;
  const slot = e.getIdentifier();
  if (slot !== 'card') return;
  let bankAccountId = global.getCardCurio(entity);
  const server = entity.getServer();
  let playerUUID = String(entity.uuid);
  let cardsList = server.persistentData.cardsList ?? {};
  let playerList = server.persistentData.playerList ?? {};
  let prevAccId = cardsList[playerUUID];
  if (prevAccId) {
    if (prevAccId == bankAccountId) return;
    if (!playerList[prevAccId] && cardsList[prevAccId]) {
      cardsList[prevAccId] = cardsList[prevAccId].filter(iUUID => iUUID !== playerUUID);
      if (!cardsList[prevAccId].length) delete cardsList[prevAccId];
    };
  };
  if (bankAccountId == null || playerList[bankAccountId]) {
    delete cardsList[playerUUID];
  } else {
    let accountUUID = String(bankAccountId);
    cardsList[playerUUID] = accountUUID;
    cardsList[accountUUID] = cardsList[accountUUID] ?? [];
    if (cardsList[accountUUID].indexOf(playerUUID) === -1) cardsList[accountUUID].push(playerUUID);
  };
  server.persistentData.cardsList = cardsList;
});