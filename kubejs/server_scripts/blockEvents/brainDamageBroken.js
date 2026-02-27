console.info("[SOCIETY] brainDamageBroken.js loaded");

BlockEvents.broken(
  ["oreganized:lead_ore", "oreganized:deepslate_lead_ore", "oreganized:raw_lead_block"],
  (e) => {
    const { level, server, block, player } = e;
    if (player.stages.has("intro_to_algorithms"))
      server.scheduleInTicks(2, () => {
        const entities = level
          .getEntitiesWithin(AABB.ofBlock(block).inflate(2))
          .filter((f) => f.type == "minecraft:area_effect_cloud");
        entities.forEach((entity) => {
          entity.setRemoved("unloaded_to_chunk");
        });
      });
  }
);
