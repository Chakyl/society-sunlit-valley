console.info("[SOCIETY] addQuestbook.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (!player.stages.has("starting_items")) {
    player.stages.add("starting_items");
    player.stages.add("invited_blacksmith");
    player.stages.add("invited_carpenter");
    player.stages.add("invited_market");
    player.stages.add("invited_banker");
    player.stages.add("invited_fisher");
    player.give("ftbquests:book");
    player.give("whimsy_deco:phone");
    player.give('selling_bin:selling_bin');
    player.tell("Welcome to the super secret dev build. You can't really do anything here, questbook is broken. Invitations don't work, don't bother!")
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
