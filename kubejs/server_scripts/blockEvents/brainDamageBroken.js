console.info("[SOCIETY] brainDamageBroken.js loaded");

BlockEvents.broken(["oreganized:lead_ore", "oreganized:deepslate_lead_ore"], (e) => {
  const { level, server, player } = e;
  if (player.stages.has("intro_to_algorithms"))
  server.scheduleInTicks(2, () => {
    const entities = level
      .getEntitiesWithin(player.boundingBox.inflate(1.1))
      .filter((f) => f.type == "minecraft:area_effect_cloud");
    entities.forEach((entity) => {
      entity.setRemoved("unloaded_to_chunk");
    });
  });
});
