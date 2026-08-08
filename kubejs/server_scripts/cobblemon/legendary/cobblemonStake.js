console.info("[SOCIETY-S-COBBLEMON] cobblemonStake.js loaded");

const stakeLegendaries = new Map([
    ["sunlit_cobblemon:blazing_calamity", "chiyu"],
    ["sunlit_cobblemon:frozen_calamity", "chienpao"],
]);

BlockEvents.rightClicked("sunlit_cobblemon:ominous_black_stake", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    let legendaryToSummon = stakeLegendaries.get(`${item.id}`);
    let spawnBlock = level.getBlock(block.getPos().offset(0, 1, 0));
    if (legendaryToSummon) {
        if (level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
            return;
        } else if (!spawnBlock.id.equals("minecraft:air")) {
            player.tell(Text.translatable("sunlit_cobblemon.spawning.no_room").red());
            return;
        }
    }
    if (legendaryToSummon) {
        summonRaidLegendary(level, server, player, item, block, legendaryToSummon, 100)
        return;
    }
});
