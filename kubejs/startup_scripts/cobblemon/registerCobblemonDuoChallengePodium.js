console.info("[SOCIETY-S-COBBLEMON] registerCobblemonDuoChallengePodium.js loaded");

StartupEvents.registry("block", (event) => {
    event
        .create("sunlit_cobblemon:duo_challenge_podium", "cardinal")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:mineable/axe")
        .tagBlock("minecraft:needs_stone_tool")
        .waterlogged()
        .box(1, 0, 1, 15, 2, 15)
        .defaultCutout()
        .item((item) => {
            item.tooltip(Text.translatable("block.sunlit_cobblemon.duo_challenge_podium.description").gray());
            item.modelJson({
                parent: "sunlit_cobblemon:block/kubejs/duo_challenge_podium",
            });
        })
        .model("sunlit_cobblemon:block/kubejs/duo_challenge_podium")
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.initialData({ dayLastTriggered: -1, triggerCount: 0, randomMode: false });
        })
});
