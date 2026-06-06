console.info("[SOCIETY-S-COBBLEMON] cobblemonRaidStatue.js loaded");

global.runRaidStatue = (tickEvent) => {
    const { level, block } = tickEvent;
    let nbt = block.getEntityData();
    if (!nbt) return;
    let day = global.getDay(level);
    const canSpawnToday = !nbt.data || !nbt.data.dayLastRaided || global.compareDay(day, nbt.data.dayLastRaided, 1)
    if (canSpawnToday) {
        level.spawnParticles(
            "atmospheric:aloe_blossom",
            true,
            block.x + 0.5,
            block.y + 0.5,
            block.z + 0.5,
            0.1 * rnd(1, 3),
            0.1 * rnd(1, 3),
            0.1 * rnd(1, 3),
            3,
            0.01
        );
        level.spawnParticles(
            "legendarycreatures:wisp_particle",
            true,
            block.x + 0.5,
            block.y + 0.5,
            block.z + 0.5,
            0.1 * rnd(1, 3),
            0.1 * rnd(1, 3),
            0.1 * rnd(1, 3),
            3,
            0.01
        );
    }
};

StartupEvents.registry("block", (e) => {
    e.create("sunlit_cobblemon:sun_raid_statue", "cardinal")
        .defaultCutout()
        .box(0, 0, 0, 16, 4, 16)
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.initialData({ tier: "-1", type: "", variant: "", level: -1, dayLastRaided: -1 });
            blockInfo.serverTick(100, 0, (entity) => {
                global.runRaidStatue(entity);
            })
        })
        .model("sunlit_cobblemon:block/raid_statue")
        .item((item) => {
            item.tooltip(Text.translatable("block.sunlit_cobblemon.sun_raid_statue.description").gray());
            item.modelJson({
                parent: "sunlit_cobblemon:block/raid_statue",
            });
        })
        .hardness(1.0)
        .lightLevel(1)
});
