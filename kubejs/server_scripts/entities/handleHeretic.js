EntityEvents.death((e) => {
  const { source, level, entity } = e;
  if (
    source.player &&
    source.player.getType() === "minecraft:player" &&
    global.checkEntityTag(entity, "society:husbandry_animal") &&
    source.player.stages.has("heretic")
  ) {
    let affection = entity.persistentData.getInt("affection");
    if (affection <= 700) return;
    level.spawnParticles(
      "supplementaries:green_flame",
      true,
      entity.x,
      entity.y + 1.5,
      entity.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      5,
      0.01
    );
  }
});
