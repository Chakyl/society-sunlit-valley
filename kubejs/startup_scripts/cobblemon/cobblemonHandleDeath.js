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
      reward += Math.max(Math.round(loserLevel * 4 * getTrainerLevel(winningPlayer) * variance), 16);
    });
    if (losingPlayer && losingPlayer.type == "rctmod:trainer") {
      let winStreak = winningPlayer.persistentData.winStreak;
      winningPlayer.persistentData.winStreak = winStreak || 0;
      winningPlayer.persistentData.winStreak++;
      winStreak++;
      if (winStreak % 10 == 0) {
        winningPlayer.tell(
          Text.translatable("sunlit_cobblemon.trainer_podium.win_streak_upgraded", `${Number(winningPlayer.persistentData.winStreak)}`, `${Number((winningPlayer.persistentData.winStreak / 10) * 1.25)}`).green()
        );
      } else {
        winningPlayer.tell(
          Text.translatable("sunlit_cobblemon.trainer_podium.win_streak", `${Number(winningPlayer.persistentData.winStreak)}`).gold()
        );
      }
      if (winStreak > 10) {
        reward *= Math.floor(winStreak / 10) * 1.25;
      }
      if (winningPlayer && winningPlayer.stages.has("the_art_of_battle")) {
        reward *= 1.25
      } else if (winningPlayer && Math.random() < 0.01) {
        winningPlayer.give(Item.of("sunlit_cobblemon:the_art_of_battle"))
      }
    }
    let account = global.GLOBAL_BANK.getAccount(winningPlayer.getUuid());
    if (account && account.getBalance() + reward < 2147483000) {
      reward = Math.round(reward);
      account.deposit(reward);
      winningPlayer.getServer().runCommandSilent(
        global.getEmbersTextAPICommand(
          winningPlayer.username,
          `{anchor:"TOP_LEFT",background:1,color:"#FFFFFF",size:1,offsetY:68,offsetX:6,typewriter:1,align:"TOP_LEFT"}`,
          160,
          Text.translatable(
            "sunlit_cobblemon.win_reward",
            global.formatPrice(reward),
          ).toJson()
        )
      );
    }
  } else if (
    !winningPlayer.isPlayer() &&
    winningPlayer.type == "rctmod:trainer"
  ) {
    global.handleLeagueFee(losingPlayer.getServer(), losingPlayer, "loss")

    if (losingPlayer.persistentData.winStreak > 1) {
      losingPlayer.tell(
        Text.translatable("sunlit_cobblemon.trainer_podium.win_streak_lost", `${Number(losingPlayer.persistentData.winStreak)}`).red()
      );
      losingPlayer.persistentData.winStreak = 0;
    }
  }
};

StartupEvents.postInit((init) => {
  let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

  $CobblemonEvents.BATTLE_VICTORY.subscribe("normal", (e) => {
    global.handleCobblemonDefeat(e);
  });
});
