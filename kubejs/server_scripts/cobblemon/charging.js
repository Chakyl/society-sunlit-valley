BlockEvents.rightClicked("sunlit_cobblemon:sun_raid_statue", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
        if (item.getId() === "cobblemon:sun_stone") {
            level.spawnParticles(
                "atmospheric:orange_vapor",
                true,
                block.x,
                block.y + 1,
                block.z,
                0.2 * rnd(1, 4),
                0.2 * rnd(1, 4),
                0.2 * rnd(1, 4),
                25,
                0.01);
            let day = global.getDay(level);
            let nbt = block.getEntityData();
            const canSpawnToday = !nbt.data || !nbt.data.dayLastRaided || global.compareDay(day, nbt.data.dayLastRaided, 1)
            nbt.merge({
                data: {
                    dayLastRaided: -1
                }
            });
            if (!player.isCreative() && Math.random() < 0.1) item.count--;
            player.swing()
            server.runCommandSilent(
                `playsound minecraft:entity.player.hurt_freeze block @a ${player.x} ${player.y} ${player.z}`)
            global.setBlockEntityData(block, nbt);
        };
    }
}); 