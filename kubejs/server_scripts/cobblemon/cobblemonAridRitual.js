const getRitualArid = (level, centerPos, radius) => {
    const { x, y, z } = centerPos;
    let scanBlock;
    let naturalBlocks = 0;
    let buildingBlocks = 0;
    let hotBlocks = 0;

    for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - radius, y - radius, z - radius),
        [x + 10, y + 10, z + 10]
    )) {
        if (!level.isLoaded(pos)) continue;
        scanBlock = level.getBlock(pos);

        if (scanBlock.hasTag("society:biodome_fire_hot_blocks")) {
            hotBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_fire_natural_blocks")) {
            naturalBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_fire_building_blocks")) {
            buildingBlocks++;
        }
    }
    return { buildingBlocks: buildingBlocks, hotBlocks: hotBlocks, naturalBlocks: naturalBlocks };
}

BlockEvents.rightClicked("minecraft:obsidian", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (item.id !== 'society:prismatic_shard') return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake()) return;
    let radius = 10
    let { buildingBlocks, hotBlocks, naturalBlocks } = getRitualArid(level, block.getPos(), radius);
    let ritualCanRun = true


    if (buildingBlocks < 75 ) {
      player.tell(Text.translatable("There needs to be more Structure here...").red())
      ritualCanRun = false;
    }
    if (hotBlocks < 75 ) {
      player.tell(Text.translatable("There needs to be more Heat here...").red())
      ritualCanRun = false;
    }
    if (naturalBlocks < 75 ) {
      player.tell(Text.translatable("There needs to be more Natural Blocks here...").red())
      ritualCanRun = false;
    }

    
    if (ritualCanRun == true) {
        let spawnBlock = level.getBlock(block.getPos().offset(0, 1, 0));
        if (level.getEntitiesWithin(AABB.ofBlock(level.getBlock(spawnBlock)).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
            return;
        } else if (!spawnBlock.id.equals("minecraft:air")) {
            player.tell(Text.translatable("sunlit_cobblemon.spawning.no_room").red());
            return;
        }
        player.tell("Something is coming...")
        server.scheduleInTicks(100, () => {
                    summonRaidLegendary(level, server, player, item, block, "groudon", 100)
                });
    }
});