console.info("[SOCIETY] registerCoinLeaderboardPlayers.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player, server } = e;
  let playerList = server.persistentData.playerList ?? {};
  playerList[player.uuid] = player.name.string;
  server.persistentData.playerList = playerList;
});

ItemEvents.rightClicked(e => {
    const { player, server, item } = e;
    let playerList = server.persistentData.playerList;

    if (item.id === 'numismatics_utils:portable_bank_terminal') {
      let bankAccountId = global.getCardCurio(player);
      let cardsList = server.persistentData.cardsList ?? {};
      if (bankAccountId == null | playerList[bankAccountId.id]) {
        cardsList[player.uuid] = null;
      } else {
        cardsList[player.uuid] = String(bankAccountId);
      }
      server.persistentData.cardsList = cardsList;
    };
});
