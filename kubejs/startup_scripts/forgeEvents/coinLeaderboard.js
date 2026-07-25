ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", e => {
    const {entity} = e;
    if (!(entity.isPlayer())) return;
    const slot = e.getIdentifier();
    if (slot !== 'card') return;
    let bankAccountId = global.getCardCurio(entity);
    const server = entity.getServer();
    let cardsList = server.persistentData.cardsList ?? {};
    let playerList = server.persistentData.playerList;
    if (bankAccountId == null | playerList[entity.uuid]) {
        cardsList[entity.uuid] = null;
    } else {
        cardsList[entity.uuid] = String(bankAccountId);
    };
    server.persistentData.cardsList = cardsList;
});