console.info("[SOCIETY-S-COBBLEMON] cobblemonMoonRitual.js loaded");

let pedestalRitual = (level, server, block, player, item, pedestalItem) => {
    const { x, y, z } = block;
    const pedestalA = level.getBlock(x - 3, y - 1, z)
    const pedestalB = level.getBlock(x + 3, y - 1, z)
    const pedestalC = level.getBlock(x - 0, y - 1, z - 3)
    const pedestalD = level.getBlock(x - 0, y - 1, z + 3)

    if (pedestalA === 'supplementaries:pedestal' && pedestalB === 'supplementaries:pedestal' && pedestalC === 'supplementaries:pedestal' && pedestalD === 'supplementaries:pedestal') {
        if (pedestalA.entityData.Items[0] && pedestalA.entityData.Items[0].id == pedestalItem && pedestalB.entityData.Items[0] && pedestalB.entityData.Items[0].id == pedestalItem && pedestalC.entityData.Items[0] && pedestalC.entityData.Items[0].id == pedestalItem && pedestalD.entityData.Items[0] && pedestalD.entityData.Items[0].id == pedestalItem) {
            pedestalA.set("cobblemon:moon_stone_ore")
            pedestalB.set("cobblemon:moon_stone_ore")
            pedestalC.set("cobblemon:moon_stone_ore")
            pedestalD.set("cobblemon:moon_stone_ore")
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${pedestalA.x} ${pedestalA.y} ${pedestalA.z}`);
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${pedestalB.x} ${pedestalB.y} ${pedestalB.z}`);
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${pedestalC.x} ${pedestalC.y} ${pedestalC.z}`);
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${pedestalD.x} ${pedestalD.y} ${pedestalD.z}`);
            summonRaidLegendary(level, server, player, item, block, "lunala", 100)

        } else {
            server.runCommandSilent(`playsound stardew_fishing:fish_escape block @a ${x} ${y} ${z} 2`);
        }
    } else {
        server.runCommandSilent(`playsound stardew_fishing:fish_escape block @a ${x} ${y} ${z} 2`);
    }
}
BlockEvents.rightClicked("society:moon_statue", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (item.id !== 'sunlit_cobblemon:moongeist_crystal') return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake() || !player.stages.has("mining_mastery")) {
        player.tell(Text.translatable("block.society.moon_statue.no_mastery").red());
        return;
    }
    let spawnBlock = level.getBlock(block.getPos().offset(0, 1, 0));
    if (level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
        player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
        return;
    } else if (!spawnBlock.id.equals("minecraft:air")) {
        player.tell(Text.translatable("sunlit_cobblemon.spawning.no_room").red());
        return;
    }
    pedestalRitual(level, server, block, player, item, 'sunlit_cobblemon:moondust')
});
