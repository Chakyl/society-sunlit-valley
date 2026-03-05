console.info("[SOCIETY] villagerHome.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:villager_home")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(1, 0, 1, 15, 2, 15)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.gray("Brings the invited villager to its housing and sets its home point."));
      item.modelJson({
        parent: "society:block/kubejs/villager_home",
      });
    })
    .model("society:block/kubejs/villager_home")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ placer: "-1", type: "", spawned: false });
    });
});
