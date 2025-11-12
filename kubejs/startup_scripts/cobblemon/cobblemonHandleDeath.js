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
  let losingPlayer;
  let loserLevels = [];
  e.winners.forEach((element) => {
    winningPlayer = element.entity;
  });
  e.losers.forEach((element) => {
    losingPlayer = element.entity;
    element.pokemonList.forEach((element) => {
      loserLevels.push(element.originalPokemon.getLevel());
    });
  });
  if (winningPlayer && winningPlayer.isPlayer()) {
    let reward = 0;
    loserLevels.forEach((loserLevel) => {
      let variance = Math.random() * (1.5 - 0.5) + 0.5;
      reward += Math.round(loserLevel * 4 * getTrainerLevel(winningPlayer) * variance);
    });
    if (losingPlayer.type == "rctmod:trainer") {
      let winStreak = winningPlayer.persistentData.winStreak;
      winningPlayer.persistentData.winStreak = winStreak || 0;
      winningPlayer.persistentData.winStreak++;
      winStreak++;
      if (winStreak % 10 == 0) {
        winningPlayer.tell(
          Text.green(
            `Your Gym win streak is now ${
              winningPlayer.persistentData.winStreak
            }! Trainer reward money increased by x${
              winningPlayer.persistentData.winStreak * 1.25
            } and difficulty increased!`
          )
        );
      } else {
        winningPlayer.tell(
          Text.gold(`Your Gym win streak is now ${winningPlayer.persistentData.winStreak}`)
        );
      }
      if (winStreak > 10) {
        reward *= Math.floor(winStreak / 10) * 1.25;
      }
    }
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
  } else if (
    !winningPlayer.isPlayer() &&
    winningPlayer.type == "rctmod:trainer" &&
    losingPlayer.persistentData.winStreak > 1
  ) {
    losingPlayer.tell(
      Text.red(`You lost your §6${losingPlayer.persistentData.winStreak} §cwinning streak...`)
    );
    losingPlayer.persistentData.winStreak = 0;
  }
};

StartupEvents.postInit((init) => {
  let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

  $CobblemonEvents.BATTLE_VICTORY.subscribe("normal", (e) => {
    global.handleCobblemonDefeat(e);
  });
});
