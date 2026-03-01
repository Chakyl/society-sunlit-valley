console.info("[SOCIETY-S-COBBLEMON] cobbelmonLootBall.js loaded");

global.cobblemonLootBallTypes = ["poke", "great", "ultra", "beast"];


global.cobblemonLootBallTypes.forEach((tier) => {
  StartupEvents.registry("block", (e) => {
    e.create(`sunlit_cobblemon:${tier}_loot_ball`, "cardinal")
      .defaultCutout()
      .box(4, 0, 4, 11, 8.5, 11)
      .model(`sunlit_cobblemon:block/${tier}_loot_ball`)
      .blockEntity((blockInfo) => {
        blockInfo.enableSync();
        blockInfo.initialData({
          playersLooted: []
        });
      });
  });
});