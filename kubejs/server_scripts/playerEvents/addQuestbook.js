console.info("[SOCIETY] addQuestbook.js loaded");

PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (player.stages.has("starting_items_up")) {
    player.tell(Text.gray("===[ Welcome to Society: Sunlit Valley 4.0! ]==="));
    player.tell(Text.white("This is a major pack update that changes many core mechanics!"));
    player.tell(Text.white("Artisan Machines like Preserves Jars have had a major performance rework. They may output the wrong thing the first time they're used after updating."));
    player.tell(Text.white("Please see the changelog in the main menu if you have any questions."));
    player.tell(Text.green("Thank you for playing!"));
    player.stages.add("starting_items_4_0");
    player.stages.remove("starting_items_up");
  }
  if (!player.stages.has("starting_items_4_0")) {
    player.stages.add("starting_items_4_0");
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
