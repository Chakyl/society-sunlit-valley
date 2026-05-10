global.handleShinyState = (entity, item) => {
  const { level } = entity;
  const { x, y, z } = entity;
  if (level.server) {
    let pokemon = entity.getPokemon();
    if (pokemon.isWild() && pokemon.getShiny()) {
      if (!pokemon.getEntity().isBattling()) {
        level.server.runCommandSilent(
          `playsound legendarycreatures:wisp_idle block @a ${x} ${y} ${z} 1.5 ${Math.random() * (1 - 0.7) + 0.7}`
        );
      }
      level.spawnParticles(
        "snowyspirit:glow_light",
        true,
        x,
        y + 0.5,
        z,
        0.2 * rnd(1, 3),
        0.2 * rnd(1, 3),
        0.2 * rnd(1, 3),
        8,
        2
      );
    }
  }
};

EntityJSEvents.modifyEntity((event) => {
  event.modify("cobblemon:pokemon", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 40 === 0) {
        global.handleShinyState(entity);
      }
    });
  });
});
