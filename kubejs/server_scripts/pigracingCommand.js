ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("pigrace").then(
      Commands.argument("pig", Arguments.STRING.create(event)).executes((c) =>
        bet(c.source.player, Arguments.STRING.getResult(c, "pig"))
      )
    )
  );

  let bet = (player, pig) => {
    const server = player.server;
    const raceData = player.server.persistentData;
    const options = ["red", "blue", "yellow", "green"];
    const coins = [
      "numismatics:crown",
      "numismatics:sun",
      "numismatics:neptunium_coin",
      "numismatics:ancient_coin",
      "numismatics:prismatic_coin",
    ];
    const bet = player.offHandItem;
    const betPigName = global.formatName(String(pig.toLowerCase()));
    let betValue;
    if (!raceData.pigraceInProgress) {
      player.tell(Text.translatable("command.society.pig_race.no_active").red());
      return -1;
    }
    if (!options.includes(pig.toLowerCase())) {
      player.tell(Text.translatable("command.society.pig_race.invalid_pig").red());
      return -1;
    }
    if (!coins.includes(bet.id)) {
      player.tell(Text.translatable("command.society.pig_race.no_bet").red());
      return -1;
    }
    betValue = betValue = global.calculateCoinValue(bet);
    if (betValue < raceData.bets[0].bet) {
      player.tell(Text.translatable("command.society.pig_race.insufficient_bet", `${raceData.bets[0].bet}`).red());
      return -1;
    }
    for (let index = 0; index < raceData.bets.length; index++) {
      if (String(player.username).equals(String(raceData.bets[index].player))) {
        player.tell(Text.translatable("command.society.pig_race.already_bet").red());
        return -1;
      }
    }
    player.offHandItem = "minecraft:air";
    server.tell(
      Text.translatable(
        "command.society.pig_race.success",
        Text.gold(`${player.username}`), 
        Text.gold(`${global.formatPrice(betValue)}`), 
        global.getPigColoredName(betPigName)
      ).gray()
    );

    raceData.bets.push({ player: player.username, bet: betValue, betPig: betPigName });
    return 1;
  };
});
