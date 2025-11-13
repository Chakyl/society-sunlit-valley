console.info("[SOCIETY-S-COBBLEMON] summonCobblemonLegnadaries.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, item, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (item.id === "sunlit_cobblemon:pixie_ice") {
    if (!global.hasScope(player)) {
      player.tell(Text.red("You can't see Pokemon!"));
      return;

    }
    if (target.type !== "species:mammutilation") {
      player.tell(Text.red("Not the right animal..."));
      return;
    }
    let data = target.persistentData;

    if (data.affection >= 1000) {
      server.runCommandSilent(
        `playsound species:entity.mammutilation.mammutiful_howl block @a ${target.x} ${target.y} ${target.z}`
      );
      player.potionEffects.add("minecraft:darkness", 60, 0, true, false);
      target.potionEffects.add("minecraft:invisibility", 600, 0, true, false);
      server.runCommandSilent(`pokespawnat ${target.x} ${target.y} ${target.z} chienpao level=75`);
      level.spawnParticles(
        "windswept:will_o_the_wisp",
        true,
        target.x,
        target.y + 1.5,
        target.z,
        0.5 * rnd(0, 3),
        0.5 * rnd(0, 3),
        0.5 * rnd(0, 3),
        400,
        0.5
      );
      item.shrink(1);
    } else {
      player.tell(Text.red("It doesn't trust you enough to share its secrets..."));
    }
  }
});
