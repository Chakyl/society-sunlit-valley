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
          global.getNotePaperItem(
            Text.translatable("society.starting_item_sharestone.author").getString(),
            Text.translatable("society.starting_item_sharestone.text").getString(),
            Text.translatable("society.starting_item_sharestone.title").getString(),         
          )
        )
      );
    }
  }
});
