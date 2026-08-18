console.info("[SOCIETY] equipBankCard.js loaded");

ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", (e) => {
    const { entity } = e;
    if (!(entity.isPlayer())) return;
    const slot = e.getIdentifier();
    if (slot !== 'card') return;
    let bankAccountId = global.getCardCurio(entity);
    const server = entity.getServer();
    const uuid = String(entity.uuid);
    let cardsList = server.persistentData.cardsList ?? {};
    let playerList = server.persistentData.playerList ?? {};
    let prevAccId = cardsList[uuid];
    if (!playerList[prevAccId] && prevAccId && cardsList[prevAccId]) {
        cardsList[prevAccId].filter(iUUID => iUUID !== uuid);
    };
    if (bankAccountId == null || playerList[bankAccountId]) {
        delete cardsList[uuid];
    } else {
        cardsList[uuid] = String(bankAccountId);
        cardsList[String(bankAccountId)] = cardsList[String(bankAccountId)] ?? [];
        cardsList[String(bankAccountId)].push(uuid);
    };
    server.persistentData.cardsList = cardsList;
});