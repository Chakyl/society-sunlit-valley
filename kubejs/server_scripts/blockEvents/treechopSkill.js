console.info("[SOCIETY] treechopSkill.js loaded");

BlockEvents.broken("treechop:chopped_log", (e) => {
  const { player, block, level } = e;
  if (Math.random() <= 0.005 && !player.stages.has("wuthering_logs")) {
    block.popItem("society:wuthering_logs");
  }
  if (
    Math.random() <= 0.15 &&
    player.stages.has("wuthering_logs") &&
    block.id === "treechop:chopped_log"
  ) {
    block.popItem("meadow:fire_log");
  }

  const season = global.getSeasonFromLevel(level);
  if (
    Math.random() <= 0.005 &&
    season === "autumn" &&
    !player.stages.has("alias_moss")
  ) {
    block.popItem("society:alias_moss");
  }
  if (
    Math.random() <= 0.08 &&
    (player.stages.has("alias_moss") || season === "autumn") &&
    block.id === "treechop:chopped_log"
  ) {
    block.popItem("society:mossberry");
  }
});
