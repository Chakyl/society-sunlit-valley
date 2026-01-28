console.info("[SOCIETY] pigRacing.js loaded");

const debugSpeeds = false;

const pigColors = ["Red", "Blue", "Yellow", "Green"];

const stashyHashy = (input) => {
  let hash = 5;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 9) ^ input.codePointAt(i);
  }
  return Math.abs(Math.round(hash / 512));
};

const adjustment = (enabled) => (enabled ? 0.05 : 0);

const getSpeeds = (seed, level) => {
  let speeds = [];
  let hashNumber;
  let boostFirstSprint = false;
  let sleepyFirstSprint = false;
  let boostSecondSprint = false;
  let sleepySecondSprint = false;
  pigColors.forEach((pig) => {
    hashNumber = Math.abs(stashyHashy(global.getSeasonFromLevel(level) + pig) + seed);
    boostFirstSprint = hashNumber % 3 === 0;
    sleepyFirstSprint = hashNumber % 4 === 0;
    boostSecondSprint = hashNumber % 5 === 0;
    sleepySecondSprint = hashNumber % 6 === 0;
    if (debugSpeeds) {
      console.log(`${pig}: Boost: ${boostFirstSprint} - ${boostSecondSprint}`);
      console.log(`${pig}: Sleepy: ${sleepyFirstSprint} - ${sleepySecondSprint}`);
    }
    speeds.push([
      Math.random() * (1.2 + adjustment(boostFirstSprint) - (0.7 - adjustment(sleepyFirstSprint))) +
        1,
      Math.random() *
        (1.2 + adjustment(boostSecondSprint) - (0.7 - adjustment(sleepySecondSprint))) +
        1,
    ]);
  });
  return speeds;
};

const clearPigPaint = (player) => {
  const pigElements = ["", "Change", "Trophy"];
  let removedElements = {};
  let id = "";
  // Spawn and clear instance of paint element to prevent warnings that they don't exist
  pigColors.forEach((pig) => {
    pigElements.forEach((element) => {
      id = `pig${pig}${element}`;
      removedElements[id] = { type: "text" };
    });
  });
  player.paint(removedElements);
  pigColors.forEach((pig) => {
    pigElements.forEach((element) => {
      id = `pig${pig}${element}`;
      removedElements[id] = { remove: true };
    });
  });
  player.paint(removedElements);
};

const initialPaint = (player, bet, pig) => {
  player.paint({
    screen: {
      type: "rectangle",
      y: -50,
      w: 268,
      h: 256,
      alignX: "center",
      alignY: "bottom",
      texture: "society:textures/gui/pig_racing/horse_racing_screen.png",
    },
    pigRed: {
      type: "rectangle",
      x: -110,
      y: -170,
      z: 20,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: "society:textures/gui/pig_racing/pig_red.png",
    },
    pigBlue: {
      type: "rectangle",
      x: -110,
      y: -132,
      z: 20,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: "society:textures/gui/pig_racing/pig_blue.png",
    },
    pigYellow: {
      type: "rectangle",
      x: -110,
      y: -94,
      z: 20,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: "society:textures/gui/pig_racing/pig_yellow.png",
    },
    pigGreen: {
      type: "rectangle",
      x: -110,
      y: -54,
      z: 20,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: "society:textures/gui/pig_racing/pig_green.png",
    },
    betCoin: {
      type: "item",
      item: bet.id,
      x: -100,
      y: -197,
      h: 32,
      w: 32,
      alignX: "center",
      alignY: "bottom",
    },
    betCount: {
      type: "text",
      text: `x${bet.count}`,
      scale: 3,
      color: "#000000",
      x: -70,
      y: -207,
      alignX: "center",
      alignY: "bottom",
    },
    betPig: {
      type: "rectangle",
      y: -212,
      x: 112,
      z: 20,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: `society:textures/gui/pig_racing/pig_${pig.toLowerCase()}.png`,
    },
  });
};

const getCountDownPaint = (count) => {
  return {
    type: "rectangle",
    y: -70,
    z: 10,
    w: 128,
    h: 128,
    alignX: "center",
    alignY: "bottom",
    texture: `society:textures/gui/pig_racing/${count}.png`,
  };
};

const countDown = (player, server) => {
  const delayFactor = 7;
  player.paint({
    number: getCountDownPaint("3"),
  });
  server.scheduleInTicks(delayFactor, () => {
    player.paint({
      number: getCountDownPaint("2"),
    });
  });
  server.scheduleInTicks(delayFactor * 2, () => {
    player.paint({
      number: getCountDownPaint("1"),
    });
  });
  server.scheduleInTicks(delayFactor * 3, () => {
    player.paint({
      number: {
        type: "rectangle",
        y: -70,
        z: 10,
        w: 128,
        h: 128,
        alignX: "center",
        alignY: "bottom",
        texture: `society:textures/gui/pig_racing/go.png`,
      },
    });
  });
  server.scheduleInTicks(delayFactor * 4, () => {
    player.paint({
      number: { remove: true },
    });
  });
};

const paintPig = (player, server, xOffset, speeds, halfwayPoint, ranking) => {
  const yOffsets = [-170, -132, -94, -54];
  let pigElement = {};
  const finishLine = 214;
  let id = "";
  let halfWay = 0;
  let secondWindCalc = 0;
  let secondWindChange = false;
  let calculatedOffset = 0;
  let raceCompleted = false;

  pigColors.forEach((color, index) => {
    id = `pig${color}`;
    halfWay = speeds[index][0] * halfwayPoint;
    secondWindCalc = halfWay + speeds[index][1] * (xOffset - halfwayPoint) + 1;
    raceCompleted = secondWindCalc >= finishLine;
    calculatedOffset =
      speeds[index][0] * xOffset >= halfWay
        ? raceCompleted
          ? finishLine
          : secondWindCalc
        : speeds[index][0] * xOffset;
    if (
      Math.floor(speeds[index][0] * xOffset) === Math.floor(halfWay) &&
      Math.abs(speeds[index][1] - speeds[index][0]) >= 0.1
    ) {
      secondWindChange = speeds[index][1] > speeds[index][0];
      server.runCommandSilent(
        `playsound ${secondWindChange ? "trials:breeze_idle" : "trials:spawner_summon"} player @a ${
          player.x
        } ${player.y} ${player.z}`
      );
      pigElement[`${id}Change`] = {
        type: "rectangle",
        color: "#FFFFFF",
        z: 12,
        x: -110 + halfWay,
        y: yOffsets[index] - 8,
        alignX: "center",
        alignY: "bottom",
        texture: `society:textures/gui/pig_racing/${secondWindChange ? "boost" : "sleepy"}.png`,
      };
    }
    pigElement[id] = { remove: true };
    player.paint(pigElement);
    pigElement[id] = {
      type: "rectangle",
      x: -110 + calculatedOffset,
      y: yOffsets[index],
      z: 11,
      w: 32,
      h: 32,
      alignX: "center",
      alignY: "bottom",
      texture: `society:textures/gui/pig_racing/pig_${color.toLowerCase()}.png`,
    };
    if (raceCompleted) {
      !ranking.includes(color) && ranking.push(color);
      pigElement[`${id}Trophy`] = {
        type: "rectangle",
        y: yOffsets[index],
        x: finishLine - 130 - 16,
        z: 10,
        w: 32,
        h: 32,
        alignX: "center",
        alignY: "bottom",
        texture: `society:textures/gui/pig_racing/trophy_${ranking.indexOf(color) + 1}.png`,
      };
    }
    player.paint(pigElement);
  });
};

const handleSPResults = (player, server, betPig, betItem, ranking) => {
  let newItem = betItem;
  newItem.count = betItem.count * 2;
  const wonRace = ranking[0] === betPig;
  if (wonRace) {
    player.give(Item.of(newItem));
    server.runCommandSilent(
      `playsound advancementplaques:ui.toast.goal_complete player @a ${player.x} ${player.y} ${player.z}`
    );
  } else {
    server.runCommandSilent(
      `playsound stardew_fishing:fish_escape player @a ${player.x} ${player.y} ${player.z}`
    );
  }
  player.paint({
    result: {
      type: "rectangle",
      y: -70,
      z: 20,
      w: 128,
      h: 128,
      alignX: "center",
      alignY: "bottom",
      texture: `society:textures/gui/pig_racing/${wonRace ? "win" : "lost"}.png`,
    },
  });
};

const handleMPResults = (player, server, betPig, betValue, poolValue, ranking) => {
  const wonRace = ranking[0] === betPig;
  let prizePoolCoins = 0;
  ranking.forEach((rank, index) => {
    if (rank === betPig) {
      if (index === 0) {
        prizePoolCoins = global.calculateCoinsFromValue(Math.min(poolValue, betValue * 2), []);
        prizePoolCoins.forEach((coin) => {
          player.give(Item.of(`${coin.count}x ${coin.id}`));
        });
        server.tell(
          Text.translatable(
            "society.pig_race.multiplay.result", 
            ":first_place_medal:", 
            Text.gold(player.username),
            Text.gold(global.formatPrice(Math.min(poolValue, betValue * 2))),
            global.getPigColoredName(betPig)
          ).gray()
        );
      }
      if (index === 1) {
        prizePoolCoins = global.calculateCoinsFromValue(betValue, []);
        prizePoolCoins.forEach((coin) => {
          player.give(Item.of(`${Math.floor(coin.count)}x ${coin.id}`));
        });
        server.tell(
          Text.translatable(
            "society.pig_race.multiplay.result", 
            ":second_place_medal:", 
            Text.gold(player.username),
            Text.gold(global.formatPrice(Math.min(poolValue, betValue))),
            global.getPigColoredName(betPig)
          ).gray()
        );
      }
      if (index === 2) {
        prizePoolCoins = global.calculateCoinsFromValue(betValue / 2, []);
        prizePoolCoins.forEach((coin) => {
          player.give(Item.of(`${Math.floor(coin.count)}x ${coin.id}`));
        });
        server.tell(
          Text.translatable(
            "society.pig_race.multiplay.result", 
            ":third_place_medal:", 
            Text.gold(player.username),
            Text.gold(global.formatPrice(Math.min(poolValue, betValue / 2))),
            global.getPigColoredName(betPig)
          ).gray()
        );
      }
    }
  });
  if (wonRace) {
    server.runCommandSilent(
      `playsound advancementplaques:ui.toast.goal_complete player @a ${player.x} ${player.y} ${player.z}`
    );
  } else {
    server.runCommandSilent(
      `playsound stardew_fishing:fish_escape player @a ${player.x} ${player.y} ${player.z}`
    );
  }
  player.paint({
    result: {
      type: "rectangle",
      y: -70,
      z: 20,
      w: 128,
      h: 128,
      alignX: "center",
      alignY: "bottom",
      texture: `society:textures/gui/pig_racing/${wonRace ? "win" : "lost"}.png`,
    },
  });
};
const resetMP = (server) => {
  server.persistentData.bets = [];
  server.persistentData.pigraceInProgress = false;
};
const runPigRace = (player, server, bet, betPig, ranking, pigSpeeds) => {
  global.addItemCooldown(player, "society:pig_race_ticket", 350);
  server.scheduleInTicks(0, () => {
    server.runCommandSilent(`stopsound ${player.username}`);
    server.runCommandSilent(
      `playsound society:blazing_drift_fever_ex music ${player.username} ${player.x} ${player.y} ${player.z}`
    );
    initialPaint(player, bet, betPig);

    countDown(player, server);
    server.scheduleInTicks(25, () => {
      const halfwayPoint = Math.floor(rnd(40, 120));
      let i = 0;
      let k = 0;
      do {
        player.server.scheduleInTicks(i, () => {
          paintPig(player, server, k, pigSpeeds, halfwayPoint, ranking);
          k++;
        });
        i++;
      } while (i < 220);
    });

    server.scheduleInTicks(300 + 20, () => {
      server.runCommandSilent(`stopsound ${player.username}`);
      clearPigPaint(player);
      player.paint({
        screen: { remove: true },
        betCoin: { remove: true },
        betCount: { remove: true },
        betPig: { remove: true },
        result: { remove: true },
      });
    });
  });
};

const validTicket = (e, bet) => {
  const { player, server, item } = e;
  const coins = [
    "numismatics:crown",
    "numismatics:sun",
    "numismatics:neptunium_coin",
    "numismatics:ancient_coin",
    "numismatics:prismatic_coin",
  ];

  if (!coins.includes(bet.id)) {
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username,
        `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#FFFFFFF",offsetY:-60}`,
        80, 
        Text.translatable("society.pig_race.need_coin").toJson()
      )
    );
    return false;
  }
  if (!item.nbt) {
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username, 
        `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#FFFFFFF",offsetY:-60}`, 
        80, 
        Text.translatable("society.pig_race.need_to_select_pig").toJson()
      )
    );
    return false;
  }
  return true;
};

ItemEvents.rightClicked("society:pig_race_ticket", (e) => {
  const { player, server, item, level } = e;
  const pigSpeeds = getSpeeds(server.worldData.worldGenOptions().seed(), level);
  const bet = player.offHandItem;
  let betPig;
  let ranking = [];

  if (!validTicket(e, bet)) return;
  item.count--;
  player.offHandItem = "minecraft:air";
  betPig = item.nbt.bet;

  runPigRace(player, server, bet, betPig, ranking, pigSpeeds);

  server.scheduleInTicks(210 + 40, () => {
    handleSPResults(player, server, betPig, bet, ranking);
  });
});

ItemEvents.rightClicked("society:multiplayer_pig_race_ticket", (e) => {
  const { player, server, item, level } = e;
  const pigSpeeds = getSpeeds(server.worldData.worldGenOptions().seed(), level);
  const bettingPeriod = 20 * 60 * 2;
  const bet = player.offHandItem;
  let raceData = server.persistentData;
  let betValue;
  let betPig;
  let ranking = [];
  let players = [];
  let prizePool = 0;

  if (raceData.pigraceInProgress) {
    server.runCommandSilent(
      global.getEmbersTextAPICommand(
        player.username, 
        `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#FFFFFFF",offsetY:-60}`, 
        80, 
        Text.translatable("society.pig_race.multiplay.in_progress").toJson()
      )
    );
    return;
  }
  if (!validTicket(e, bet)) return;
  resetMP(server);
  item.count--;
  player.offHandItem = "minecraft:air";
  betValue = betValue = global.calculateCoinValue(bet);
  betPig = item.nbt.bet;
  server.tell(
    Text.translatable(
      "society.pig_race.multiplay.start",
      Text.gold(player.username),
      Text.gold(global.formatPrice(betValue)),
      global.getPigColoredName(betPig)
    )
  );
  raceData.pigraceInProgress = true;
  raceData.ageRaceStarted = server.getTickCount();
  raceData.bets = [];
  raceData.bets.push({
    player: player.username,
    bet: betValue,
    betPig: betPig,
  });

  server.scheduleInTicks(0, () => {
    server.scheduleInTicks(bettingPeriod / 2, () => {
      server.tell(
        Text.translatable(
          "society.pig_race.multiplay.start_in_minute", 
          `${bettingPeriod / (2 * 20 * 60)}`
        ).gray()
      );
    });
    server.scheduleInTicks(bettingPeriod - 10 * 20, () => {
      server.tell(Text.translatable("society.pig_race.multiplay.start_in_10").gray());
    });
    server.scheduleInTicks(bettingPeriod, () => {
      raceData = server.persistentData;
      if (raceData.bets.length > 1) {
        raceData.pigraceInProgress = false;
        for (let index = 0; index < raceData.bets.length; index++) {
          prizePool += raceData.bets[index].bet;
        }
        level.getServer().players.forEach((p) => {
          for (let index = 0; index < raceData.bets.length; index++) {
            if (String(p.username) === String(raceData.bets[index].player)) {
              players.push(p);
              runPigRace(
                p,
                server,
                global.calculateCoinsFromValue(prizePool, [])[0],
                String(raceData.bets[index].betPig),
                ranking,
                pigSpeeds
              );
            }
          }
        });
        server.tell(
          Text.translatable(
            "society.pig_race.multiplay.started", 
            `${global.formatPrice(prizePool)}`
          ).gray()
        );
      } else {
        player.give(bet);
        player.give(Item.of("society:multiplayer_pig_race_ticket"));
        server.tell(Text.translatable("society.pig_race.multiplay.cancelled").gray());
        clearPigPaint(player);
        resetMP(server);
      }
    });

    server.scheduleInTicks(210 + 40 + bettingPeriod, () => {
      level.getServer().players.forEach((p) => {
        for (let index = 0; index < raceData.bets.length; index++) {
          if (String(p.username) === String(raceData.bets[index].player)) {
            handleMPResults(
              p,
              server,
              String(raceData.bets[index].betPig),
              Number(raceData.bets[index].bet),
              prizePool,
              ranking
            );
            clearPigPaint(player);
          }
        }
      });
      resetMP(server);
    });
  });
});

ItemEvents.firstLeftClicked(
  ["society:pig_race_ticket", "society:multiplayer_pig_race_ticket"],
  (e) => {
    const { item, server, player } = e;
    server.runCommandSilent(
      `playsound refurbished_furniture:ui.paddle_ball.retro_click block @a ${player.x} ${player.y} ${player.z}`
    );
    let newNbt = item.getNbt() || { bet: 0 };
    const betIndex = pigColors.indexOf(newNbt.bet);
    const betPig = pigColors[betIndex === 3 ? 0 : betIndex + 1];
    newNbt.bet = betPig;
    item.nbt = newNbt;
    const pigSelectedText = Text.translatable("society.pig_race.pig_selected", global.getPigColoredName(betPig));
    const pigSelectedTextShadow = Text.translatable("society.pig_race.pig_selected", betPig).noColor();
    global.renderUiText(
      player,
      server,
      {
        pigBet: {
          type: "text",
          x: 0,
          y: -90,
          text: `${pigSelectedText.toJson()}`,
          color: "#AAAAAA",
          alignX: "center",
          alignY: "bottom",
        },
        pigBetShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: `${pigSelectedTextShadow.toJson()}`,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      ["pigBet"]
    );
    global.addItemCooldown(player, item, 10);
  }
);
