console.info("[SOCIETY] moonStatueDamage.js loaded");

EntityEvents.hurt((e) => {
  const { server, level, entity, source } = e;
  // Fix windswept bug

  if (level.dimension !== "society:skull_cavern") return;
  if (
    source.player &&
    source.player.getType() === "minecraft:player" &&
    source.player.stages.has("moon_damage") &&
    Math.random() < 0.05
  ) {
    entity.attack(100);
    level.spawnParticles(
      "species:spectre_pop",
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
    server.runCommandSilent(
      `playsound create:peculiar_bell_use block @a ${entity.x} ${entity.y} ${entity.z}`
    );
  }
});
