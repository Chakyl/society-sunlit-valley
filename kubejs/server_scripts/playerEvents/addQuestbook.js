console.info("[SOCIETY] addQuestbook.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (player.stages.has("starting_items_4_0")) {
    player.tell(Text.translatable("society.login_update.title").gray());
    player.tell(Text.translatable("society.login_update.desc_0").white());
    player.tell(Text.translatable("society.login_update.desc_1").white());
    player.give("furniture:blueprints");
    player.stages.add("starting_items_4_1");
    player.stages.remove("starting_items_4_0");
  }
  if (!player.stages.has("starting_items_4_1")) {
    player.stages.add("starting_items_4_1");
    player.give("ftbquests:book");
    if (global.multiplayerSharestones) {
      player.give("waystones:white_sharestone");
      player.give(
        Item.of(
          global.getNotePaperItem(
            global.translatableWithFallback("society.starting_item_sharestone.author", "Society").getString(),
            Text.translatable("society.starting_item_sharestone.text").toJson(),
            global.translatableWithFallback("society.starting_item_sharestone.title", "Server Welcome").getString(),
          )
        )
      );
    }
  }
});
