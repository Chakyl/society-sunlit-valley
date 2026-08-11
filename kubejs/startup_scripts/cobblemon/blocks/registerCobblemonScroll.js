console.info("[SOCIETY-S-COBBLEMON] registerCobblemonScroll.js loaded");

global.runBearScroll = (entity) => {
    const { level, block } = entity;
    let dayTime = level.dayTime();
    let morningModulo = dayTime % 24000;
    if (
        morningModulo >= artMachineProgTime &&
        morningModulo < artMachineProgTime + artMachineTickRate
    ) {
        if (Math.random() <= 0.01) {
            let server = level.getServer();
            let { x, y, z } = block;
            server.runCommandSilent(`playsound etcetera:block.drum.dholak.high block @a ${x} ${y} ${z} 3 1`);
            let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(block.getPos().above()), "kubfu", "", 95, 75, false, false, 0);
            if (spawnedAny) {
                server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
                level.spawnParticles(
                    "atmospheric:blood_orange_vapor",
                    true,
                    x,
                    y + 1.5,
                    z,
                    0.1 * rnd(1, 4),
                    0.1 * rnd(1, 4),
                    0.1 * rnd(1, 4),
                    20,
                    0.01
                );
            }
        }
    }
};

StartupEvents.registry("block", (event) => {
    event
        .create("sunlit_cobblemon:bear_scroll", "cardinal")
        .tagBlock("minecraft:mineable/axe")
        .soundType("wood")
        .box(1, 0, 1, 15, 2, 15)
        .defaultCutout()
        .item((item) => {
            item.tooltip(Text.translatable("block.sunlit_cobblemon.bear_scroll.description").gray());
            item.modelJson({
                parent: "sunlit_cobblemon:block/kubejs/bear_scroll",
            });
        })
        .model("sunlit_cobblemon:block/kubejs/bear_scroll")
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
                global.runBearScroll(entity);
            });
        });

});
