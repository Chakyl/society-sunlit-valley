const $FinishChopEvent = Java.loadClass("ht.treechop.api.ChopEvent$FinishChopEvent");

let seasonChances = {
  spring: 0.005,
  summer: 0.0025,
  autumn: 0.01,
  winter: 0.0025,
}
NativeEvents.onEvent($FinishChopEvent, (e) => {
  const { player, level } = e;
  if (!player.stages.has('foraging_lvl_3')) return;
  const blockState = e.getChoppedBlockState()
  const blockPos = e.getChoppedBlockPos();
  const block = level.getBlock(blockPos);
  if (blockState.getBlock().getId() !== "treechop:chopped_log") return;
  let mult = player.stages.has("dendrologist") ? 2 : 1
  if (Math.random() <= (0.005 * mult) && !player.stages.has("wuthering_logs")) {
    block.popItem("society:wuthering_logs");
  }
  if (Math.random() <= (0.15 * mult) && player.stages.has("foraging_lvl_3")) {
    block.popItem("meadow:firewood");
  }
  if (Math.random() <= (0.33 * mult) && player.stages.has("lumberjack")) {
    block.popItem("society:sap");
  }
  if (Math.random() <= (0.05 * mult) && player.stages.has("lumberjack")) {
    block.popItem("society:hardwood");
  }
  const season = global.getSeasonFromLevel(level);
  const hasAlias = player.stages.has("alias_moss");
  if (
    Math.random() <= (0.005 * mult) &&
    season === "autumn" &&
    !hasAlias
  ) {
    block.popItem("society:alias_moss");
  }
  if (
    (hasAlias || season !== "winter") &&
    Math.random() <= seasonChances[season] * ((hasAlias ? 2 : 1) * mult)
  ) {
    block.popItem("society:mossberry");
  }
});