EntityEvents.death((e) => {
  const { source, level, server, entity } = e;
  if (
    source.player &&
    source.player.getType() === "minecraft:player" &&
    ["minecraft:sheep", "wildernature:minisheep", "meadow:wooly_sheep"].includes(entity.type) &&
    source.player.stages.has("sacrificial_lamb")
  ) {
    let sacrificeAffection = entity.persistentData.getInt("affection");
    if (sacrificeAffection < 200) return;
    let witnesses = level
      .getEntitiesWithin(source.player.boundingBox.inflate(8))
      .filter((entity) => global.checkEntityTag(entity, "society:husbandry_animal"));
    server.runCommandSilent(
      `playsound legendarycreatures:corpse_eater_death block @a ${source.player.x} ${source.player.y} ${source.player.z}`
    );
    witnesses.forEach((animal) => {
      if (Math.random() < 0.5) {
        let data = animal.persistentData;
        data.affection =
          data.getInt("affection") + Math.round(sacrificeAffection / 2);

        level.spawnParticles(
          "minecraft:sculk_soul",
          true,
          animal.x,
          animal.y + 1.5,
          animal.z,
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          5,
          0.01
        );
      }
    });
  }
});
