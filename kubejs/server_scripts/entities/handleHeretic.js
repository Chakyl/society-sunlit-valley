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
    let sparkstone = level.createEntity("minecraft:item");
    sparkstone.x = entity.x;
    sparkstone.y = entity.y;
    sparkstone.z = entity.z;
    sparkstone.item = Item.of(
      `${
        Math.floor((affection > 1000 ? 1000 : affection) / 100) * 2
      }x society:sparkstone`
    );

    sparkstone.spawn();
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
