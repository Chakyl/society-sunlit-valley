console.info("[SOCIETY-S-COBBLEMON] summonCobblemonLegnadaries.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, item, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (item.id === "sunlit_cobblemon:star_pixie") {
    if (!global.hasScope(player)) {
      player.tell(Text.red("You can't see Pokemon!"));
      return;
    }
    let legendaryData;
    let foundLegendary;
    global.cobblemonLegendaryMap
      .get(`${item.nbt.getString("type")}`)
      .legendaries.forEach((legendary) => {
        if (!foundLegendary) {
          if (target.type == legendary.entity) foundLegendary = legendary;
        }
      });
    if (!foundLegendary) {
      player.tell(Text.red("Not the right creature..."));
      return;
    }
    let data = target.persistentData;
    let requiresAffection =
      global.checkEntityTag(target, "society:husbandry_animal") ||
      global.checkEntityTag(target, "society:pet_animal");
    if ((requiresAffection && data.affection >= 1000) || !requiresAffection) {
      server.runCommandSilent(
        `playsound ${foundLegendary.sound} block @a ${target.x} ${target.y} ${target.z}`
      );
      player.potionEffects.add("minecraft:darkness", 60, 0, true, false);
      target.potionEffects.add("minecraft:invisibility", 1200, 0, true, false);
      server.runCommandSilent(
        `pokespawnat ${target.x} ${target.y} ${target.z} ${foundLegendary.pokemonId} level=75`
      );
      level.spawnParticles(
        "species:spectralibur_released",
        true,
        target.x,
        target.y,
        target.z,
        0.5,
        0.5,
        0.5,
        1,
        0.5
      );
      item.shrink(1);
    } else {
      player.tell(
        Text.red("It doesn't trust you enough to share its secrets...")
      );
    }
  }
});
