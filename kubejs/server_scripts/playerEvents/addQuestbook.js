console.info("[SOCIETY] addQuestbook.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (player.stages.has("starting_items")) {
    player.give("society:universal_methods_of_farming");
    player.stages.add("starting_items_up");
    player.stages.remove("starting_items");
  }
  if (!player.stages.has("starting_items_up")) {
    player.stages.add("starting_items_up");
    player.give("ftbquests:book");
    if (global.multiplayerSharestones) {
      player.give("waystones:white_sharestone");
      player.give(
        Item.of(
          "candlelight:note_paper_written",
          `{author:"Society",text:["Welcome!

Thanks for taking part in a Sunlit Valley Multiplayer Server! You've been given a White Sharestone to make traveling to other bases easier. Please be sure to claim your base before placing it!"],title:"Server Welcome"}`
        )
      );
    }
  }
});
