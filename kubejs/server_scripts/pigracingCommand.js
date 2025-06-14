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
    const server = player.server
    const raceData = player.server.persistentData
    const options = ["red", "blue", "yellow", "green"];
    const coins = [
      "numismatics:crown",
      "numismatics:sun",
      "numismatics:neptunium_coin",
      "numismatics:ancient_coin",
      "numismatics:prismatic_coin",
    ];
    const bet = player.offHandItem;
    const betPigName = String(pig.toLowerCase()).charAt(0).toUpperCase() + String(pig.toLowerCase()).slice(1);
    let betValue
    if (!raceData.pigraceInProgress) {
      player.tell(
        Text.red(
          "No Pigracing in progress! Purchase a Multiplayer ticket from a Banker!"
        )
      );
      return -1;
    }
    if (!options.includes(pig.toLowerCase())) {
      player.tell(
        Text.red(
          "You can only bet on these colors: red, blue, yellow, or green"
        )
      );
      return -1
    }
    if (!coins.includes(bet.id)) {
      player.tell(
        Text.red(
          "Place Gold Coins or higher in your offhand to bet"
        )
      );
      return -1;
    }
    betValue = betValue = global.calculateCoinValue(bet)
    if (betValue < raceData.bets[0].bet) {
      player.tell(
        Text.red(
          `You must bet at least §6${raceData.bets[0].bet} :coin:`
        )
      );
      return -1;
    }
    for (let index = 0; index < raceData.bets.length; index++) {
      if (String(player.username) === String(raceData.bets[index].player)) {
        player.tell(
          Text.red(
            `You've already placed a bet!`
          )
        );
        return -1;
      }
    }
    player.offHandItem = "minecraft:air";
    server.tell(Text.gray(`§6${player.username}§r joined the pig race with §6${global.formatPrice(betValue)}§r :coin: on §${global.getPigColor(betPigName)}${betPigName}§r!`))
    
    raceData.bets.push({ player: player.username, bet: betValue, betPig: betPigName });
    return 1;
  };
});
