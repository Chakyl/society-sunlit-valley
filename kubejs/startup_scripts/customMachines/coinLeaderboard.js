console.info("[SOCIETY] coinLeaderboard.js loaded");

global.updateLeaderboard = (block, level) => {
  let calcY = block.y + 3.25;
  let leaderboardMap = global.leaderboard || [];
  if (!leaderboardMap) return;
  if (global.susFunctionLogging) console.log("[SOCIETY-SUSFN] coinLeaderboard.js");
  global.clearOldTextDisplay(block, level, "leaderboard");
  global.spawnTextDisplay(block, calcY, "leaderboard", Text.translatable("block.society.coin_leaderboard.title"));
  leaderboardMap.forEach((playerName) => {
    const balanceStr = playerName.toString().split(`,`);
    const lbName = balanceStr[0]
    if (lbName.length <= 1) return;
    calcY -= 0.3;
    global.spawnTextDisplay(block, calcY, "leaderboard", Text.of(`§6${lbName} §7- §f● §6${global.formatPrice(balanceStr[1])}`));
  });
};

StartupEvents.registry("block", (e) => {
  e.create("society:coin_leaderboard", "cardinal")
    .box(2, 0, 2, 14, 2, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .model("society:block/kubejs/coin_leaderboard")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.coin_leaderboard.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/coin_leaderboard",
      });
    })
    .blockEntity((be) => {
      be.serverTick(600, 0, (tick) => {
        global.updateLeaderboard(tick.block, tick.level);
      });
    });
});
