console.info("[SOCIETY] handleDebt.js loaded");

CommonAddedEvents.playerRespawn((e) => {
  const { player, server } = e;
  if (global.enableDeathDebt) {
    if (!player.stages.has("first_death")) {
      player.stages.add("first_death");
      let noteTitle = global.translatableWithFallback("society.hospital_receipt.first_death.title", "Hospital Note").getString();
      let noteAuthor = global.translatableWithFallback("society.hospital_receipt.author", "Sunlit Valley Hospital").getString();
      let noteText = Text.translatable("society.hospital_receipt.first_death").toJson();
      player.give(
        global.getNotePaperItem(noteAuthor, noteText, noteTitle)
      );
    } else {
      global.handleFee(server, player, "death");
      if (!player.stages.has("first_aid_guide") && Math.random() <= 0.01)
        player.give("society:first_aid_guide");
    }
    player.potionEffects.add("minecraft:slowness", 1200, 0, false, true);
  }
});
