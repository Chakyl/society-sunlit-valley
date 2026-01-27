CommonAddedEvents.playerChangeDimension((e) => {
    if (e.level.dimension == "minecraft:the_nether") {
      const player = e.getEntity();
      if (!player.isPlayer()) return;
      if (!player.stages.has("entered_nether")) {
        player.stages.add("entered_nether");
      }
    }
});