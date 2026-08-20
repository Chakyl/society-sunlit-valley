console.info("[SOCIETY-S-COBBLEMON] registerCobblemonDuoChallengePodium.js loaded");

let challenges = [
    "bear",
    "boom",
    "dust",
    "hospitality",
    "rain",
    "sing",
    "soar",
    "spook",
    "surge",
    "water"
]
global.runDuoChallengePodium = (entity) => {
    const { level, block } = entity;
    let nbt = block.getEntityData();
    let { dayLastTriggered, triggerCount } = nbt.data;
    if (global.compareDay(global.getDay(level), dayLastTriggered, 1)) {
        let nearbyPlayers = level.getEntitiesWithin(AABB.ofBlock(block).inflate(4)).filter((scanEntity) => scanEntity.isPlayer());

        let triggerPlayer;
        if (nearbyPlayers && nearbyPlayers.length >= 1) {
            triggerPlayer = nearbyPlayers[0]
        }
        if (triggerPlayer) {
            let trainer;
            if (triggerCount < 11) {
                trainer = `team_eon_${challenges[triggerCount]}`
            } else if (triggerCount == 11) {
                trainer = "team_eon_challengers"
            } else {
                trainer = `eon_soul_${challenges[triggerCount]}`

            }
            level.getServer().runCommandSilent(`trainers makebattle Chakyl team_eon_${trainer} Chakyl`)
        }
    }
};

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
            blockInfo.serverTick(20, 0, (entity) => {
                global.runDuoChallengePodium(entity);
            });
        })
});
