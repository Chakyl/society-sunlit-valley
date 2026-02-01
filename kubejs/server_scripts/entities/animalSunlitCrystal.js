console.info("[SOCIETY] animalSunlitCrystal.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, level, target, item, player, server } = e;
  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:husbandry_animal")) return;
  if (hand == "MAIN_HAND" && item === "society:sunlit_crystal") {
    const animalData = target.persistentData;
    const animalNbt = target.getNbt();
    const plushie = player.getHeldItem("off_hand");
    let plushieNbt = plushie.getNbt();
    let errorString = "";
    if (Number(animalData.getInt("affection") || 0) < 1000) {
      errorString =
        "society.husbandry.sunlit_crystal.not_enough_animal_affection";
    }
    if (!plushie.hasTag("society:plushies")) {
      errorString = "society.husbandry.sunlit_crystal.not_plushie";
    } else if (Number(plushieNbt.get("affection")) < 4) {
      errorString =
        "society.husbandry.sunlit_crystal.not_enough_plushie_affection";
    } else if (plushieNbt.get("animal_type")) {
      errorString = "society.husbandry.sunlit_crystal.has_animal";
    }
    if (errorString) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(
          player.username,
          `{anchor:"BOTTOM_CENTER",background:1,wrap:220,align:"BOTTOM_CENTER",color:"#55FF55",offsetY:90}`,
          80,
          Text.translatable(errorString).toJson()
        )
      );
      return;
    } else {
      if (!player.isCreative()) item.shrink(1);
      player.give(
        Item.of(
          plushie.id,
          global.getPlushieItemNbt(
            plushieNbt,
            target.type,
            target.customName,
            animalData,
            animalNbt
          )
        )
      );
      plushie.shrink(1);
      server.runCommandSilent(
        `playsound relics:table_upgrade block @a ${player.x} ${player.y} ${player.z}`
      );
      server.runCommandSilent(
        `playsound chimes:block.amethyst.shimmer block @a ${player.x} ${player.y} ${player.z}`
      );

      level.spawnParticles(
        "snowyspirit:glow_light",
        true,
        target.x,
        target.y + 1,
        target.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        15,
        0.01
      );
      level.spawnParticles(
        "species:wicked_flame",
        true,
        target.x,
        target.y + 1,
        target.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        15,
        0.01
      );

      target.setRemoved("unloaded_to_chunk");
    }
  }
});
