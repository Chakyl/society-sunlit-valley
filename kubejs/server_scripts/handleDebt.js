console.info("[SOCIETY] handleDebt.js loaded");

CommonAddedEvents.playerRespawn((e) => {
  const { player, server } = e;
  if (global.enableDeathDebt) {
    if (!player.stages.has("first_death")) {
      player.stages.add("first_death");
      let _title = Text.translatable("society.hospital_receipt.first_death.title").getString();
      let _author = Text.translatable("society.hospital_receipt.author").getString();
      let _text = Text.translatable("society.hospital_receipt.first_death").toJson();
      player.give(
        global.getNotePaperItem(_author, _text, _title)
      );
    } else {
      global.handleFee(server, player, "death");
      if (!player.stages.has("first_aid_guide") && Math.random() <= 0.01)
        player.give("society:first_aid_guide");
    }
    player.potionEffects.add("minecraft:slowness", 1200, 0, false, true);
  }
});
