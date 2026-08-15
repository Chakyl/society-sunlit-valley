const getRitualHumidity = (level, centerPos, radius) => {
    const { x, y, z } = centerPos;
    let scanBlock;
    let aquaticMobs = 0;
    let buildingBlocks = 0;
    let glassBlocks = 0;
    let seaPlants = 0;

    for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - radius, y - radius, z - radius),
        [x + 10, y + 10, z + 10]
    )) {
        if (!level.isLoaded(pos)) continue;
        scanBlock = level.getBlock(pos);

        if (scanBlock.hasTag("society:biodome_water_glass_blocks")) {
            glassBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_water_sea_plants")) {
            seaPlants++;
        }
        if (scanBlock.hasTag("society:biodome_water_building_blocks")) {
            buildingBlocks++;
        }
    }
    aquaticMobs = level.getEntitiesWithin(AABB.ofBlock(level.getBlock(centerPos)).inflate(10)).filter((e) => global.checkEntityTag(e, "society:biodome_water_animals")).length;
    return { buildingBlocks: buildingBlocks, glassBlocks: glassBlocks, seaPlants: (seaPlants * 2), aquaticMobs: (aquaticMobs * 3) };
}

BlockEvents.rightClicked("sunlit_cobblemon:biodome_altar", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (item.id !== 'sunlit_cobblemon:blue_orb') return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake()) return;
    let radius = 10
    let ritualPower = getRitualHumidity(level, block.getPos(), radius);
    let { buildingBlocks, glassBlocks, seaPlants, aquaticMobs } = getRitualHumidity(level, block.getPos(), radius);
    let ritualCanRun = true

    if (buildingBlocks < 125 ) {
      player.tell(Text.translatable("There needs to be more Structure here...").red())
      ritualCanRun = false;
    }
    if (seaPlants < 100 ) {
      player.tell(Text.translatable("There needs to be more Nature here...").red())
      ritualCanRun = false;
    }
    if (glassBlocks < 50 ) {
      player.tell(Text.translatable("There needs to be more Glass here...").red())
      ritualCanRun = false;
    }
    if (aquaticMobs < 15 ) {
      player.tell(Text.translatable("There needs to be more Wildlife here...").red())
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
                    humidRitualLegendary(level, server, player, item, block, "kyogre", 100)
                });
    }
});