console.info("[SOCIETY] animalMoodScanner.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, level, target, item, player, server } = e;
  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:husbandry_animal")) return;
  if (hand == "MAIN_HAND" && item === "society:mood_scanner") {
    if (player.cooldowns.isOnCooldown(item)) return;
    const day = global.getDay(level);
    let name = target.customName ? target.customName : global.getTranslatedEntityName(String(target.type));
    const moodMeterHeaderText = Text.empty()
      .gray()
      .append(Text.of(`==[ `))
      .append(
        Text.translatable("society.husbandry.mood.meter_header", name).gold(),
      )
      .append(Text.of(` ]==`));
    player.tell(moodMeterHeaderText);
    global.getOrFetchMood(level, target, day, player, true);
    server.runCommandSilent(
      `playsound refurbished_furniture:ui.paddle_ball.retro_win block @a ${target.x} ${target.y} ${target.z}`,
    );
    global.addItemCooldown(player, item, 10);
  }
});
