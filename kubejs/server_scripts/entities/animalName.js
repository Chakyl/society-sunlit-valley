console.info("[SOCIETY] animalName.js loaded");

// This is done seperately and not in animalBase.js because of scheduling
ItemEvents.entityInteracted((e) => {
  const { hand, player, item, target, level, server } = e;

  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:husbandry_animal") && !global.checkEntityTag(target, "society:pet_animal")) return;
  if (hand == "MAIN_HAND") {
    const data = target.persistentData;
    if (item === "minecraft:name_tag" && item.nbt?.display && !target.customName) {
      data.affection = (data.affection || 0) + (player.stages.has("no_name_for_the_sheep") ? 200 : 100);
      server.runCommandSilent(
        `playsound minecraft:entity.allay.item_given block @a ${player.x} ${player.y} ${player.z}`
      );
      level.spawnParticles(
        "minecraft:heart",
        true,
        target.x,
        target.y + 1.5,
        target.z,
        0.2 * rnd(0, 3),
        0.2 * rnd(0, 3),
        0.2 * rnd(0, 3),
        10,
        0.01
      );
    }
  }
});
