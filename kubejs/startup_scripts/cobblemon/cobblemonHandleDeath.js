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
  if (winningPlayer.isPlayer() && (losingPlayer && losingPlayer.isPlayer())) return;
  if (winningPlayer && winningPlayer.isPlayer()) {
    let reward = 0;
    loserLevels.forEach((loserLevel) => {
      let variance = Math.random() * (1.5 - 0.5) + 0.5;
      reward += Math.min(2000, Math.max(Math.round(loserLevel * 4 * getTrainerLevel(winningPlayer) * variance), 16));
    });
    if (losingPlayer && losingPlayer.type == "rctmod:trainer") {
      let wins = winningPlayer.persistentData.wins;
      winningPlayer.persistentData.wins = wins || 0;
      winningPlayer.persistentData.wins++;
      winningPlayer.persistentData.bagItemsUsed = 0;
      wins++;
      winningPlayer.tell(Text.translatable("sunlit_cobblemon.trainer_podium.win_streak", `${Number(winningPlayer.persistentData.wins)}`).gold());
      reward = Math.min(5000, reward)
      let badge = losingPlayer.persistentData.badgeType;
      if (badge != "none") {
        reward *= 2;
        global.getTypeRewards(winningPlayer, losingPlayer.getOnPos(), badge);
      }
      if (losingPlayer.persistentData.levelTier == "elite") {
        reward *= 2;
        if (wins % 20 == 0) {
          let reward = winningPlayer.level.createEntity("minecraft:item");
          reward.x = winningPlayer.getOnPos().x + 0.5;
          reward.y = winningPlayer.getOnPos().y + 0.4;
          reward.z = winningPlayer.getOnPos().z + 0.5;
          reward.item = "sunlit_cobblemon:sunlit_league_medallion";
          reward.spawn();
        }
      }
      if (winningPlayer && winningPlayer.stages.has("the_art_of_battle")) {
        reward *= 1.25
      } else if (winningPlayer && Math.random() < 0.01) {
        winningPlayer.give(Item.of("sunlit_cobblemon:the_art_of_battle"))
      }
    }
    reward = Math.round(reward);
    global.depositIntoPersonalOrCurio(winningPlayer.level, winningPlayer, reward);
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
  } else if (
    !winningPlayer.isPlayer() &&
    winningPlayer.type == "rctmod:trainer"
  ) {
    losingPlayer.persistentData.bagItemsUsed = 0;
    global.handleLeagueFee(losingPlayer.getServer(), losingPlayer, "loss")
  }
};

StartupEvents.postInit((init) => {
  let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

  $CobblemonEvents.BATTLE_VICTORY.subscribe("normal", (e) => {
    global.handleCobblemonDefeat(e);
  });
});
