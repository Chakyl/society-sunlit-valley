console.info("[SOCIETY] handleDebt.js loaded");

CommonAddedEvents.playerRespawn((e) => {
  const { player, server } = e;
  if (global.enableDeathDebt) {
    if (!player.stages.has("first_death")) {
      player.stages.add("first_death");
      player.give(
        Item.of(
          "candlelight:note_paper_written",
          `{author:"Sunlit Valley Hospital",text:["  Sunlit Valley Hospital

Welcome to Sunlit Valley! Someone brought you in, looks like you got knocked out! Normally we charge a small fee for treatment, but since it\'s your first time we\'ve treated you free of charge.

Take care next time!"],title:"Hospital Note"}`
        )
      );
    } else {
      global.handleFee(server, player, "death");
    }
    player.potionEffects.add("minecraft:slowness", 1200, 0, false, true);
  }
});
