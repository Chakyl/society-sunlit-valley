console.info("[SOCIETY] cobblemonHandleDeath.js loaded");

const getTrainerLevel = (player) => {
  let trainerLevel = 0;
  for (let index = 1; index <= 10; index++) {
    if (player.stages.has(`trainer_lvl_${index}`)) trainerLevel++;
    else break;
  }
  return trainerLevel;
};

global.handleCobblemonDefeat = (e) => {
  let winningPlayer;
  let loserLevel;
  e.winners.forEach((element) => {
    winningPlayer = element.entity;
  });
  e.losers.forEach((element) => {
    element.pokemonList.forEach((element) => {
      loserLevel = element.originalPokemon.getLevel();
    });
  });
  if (winningPlayer && winningPlayer.isPlayer()) {
    let variance = Math.random() * (1.5 - 0.5) + 0.5;
    let reward = Math.round(loserLevel * 4 * getTrainerLevel(winningPlayer) * variance);
    let account = global.GLOBAL_BANK.getAccount(winningPlayer.getUuid());
    if (account && account.getBalance() + reward < 2147483000) {
      account.deposit(reward);
      winningPlayer
        .getServer()
        .runCommandSilent(
          `emberstextapi sendcustom ${
            winningPlayer.username
          } {anchor:"TOP_LEFT",background:1,color:"#FFFFFF",size:1,offsetY:68,offsetX:6,typewriter:1,align:"TOP_LEFT"} 160 ● §6${global.formatPrice(
            reward
          )} §7rewarded by the League`
        );
    }
  }
};

StartupEvents.postInit((init) => {
  let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

  $CobblemonEvents.BATTLE_VICTORY.subscribe("normal", (e) => {
    global.handleCobblemonDefeat(e);
  });
});
