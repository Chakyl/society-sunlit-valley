console.info("[SOCIETY-S-COBBLEMON] cobblemonBiodome.js loaded");

const getRitualArid = (level, player, centerPos, radius) => {
    const { x, y, z } = centerPos;
    let scanBlock;
    let ritualCanRun = true
    let naturalBlocks = 0;
    let buildingBlocks = 0;
    let hotBlocks = 0;

    for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - radius, y - radius, z - radius),
        [x + radius, y + radius, z + radius]
    )) {
        if (!level.isLoaded(pos)) continue;
        scanBlock = level.getBlock(pos);

        if (scanBlock.hasTag("society:biodome_fire_hot_blocks") ||  scanBlock.id === "minecraft:lava") {
            hotBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_fire_natural_blocks")) {
            naturalBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_fire_nether_blocks")) {
            buildingBlocks++;
        }
    }
    if (buildingBlocks < 125) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.red.building").red())
        ritualCanRun = false;
    }
    if (hotBlocks < 50) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.red.heat").red())
        ritualCanRun = false;
    }
    if (naturalBlocks < 75) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.red.nature").red())
        ritualCanRun = false;
    }
    return ritualCanRun;
}

const getRitualHumidity = (level, player, centerPos, radius) => {
    const { x, y, z } = centerPos;
    let scanBlock;
    let aquaticMobs = 0;
    let buildingBlocks = 0;
    let glassBlocks = 0;
    let waterBlocks = 0;
    let seaPlants = 0;
    let ritualCanRun = true
    for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - radius, y - radius, z - radius),
        [x + radius, y + radius, z + radius]
    )) {
        if (!level.isLoaded(pos)) continue;
        scanBlock = level.getBlock(pos);
        if (scanBlock.hasTag("society:biodome_water_glass_blocks")) {
            glassBlocks++;
        }
        if (scanBlock.id === "minecraft:water") {
            waterBlocks++;
        }
        if (scanBlock.hasTag("society:biodome_water_sea_plants")) {
            seaPlants++;
        }
        if (scanBlock.hasTag("society:biodome_water_aquatic_blocks")) {
            buildingBlocks++;
        }
    }
    aquaticMobs = level.getEntitiesWithin(AABB.ofBlock(level.getBlock(centerPos)).inflate(10)).filter((e) => global.checkEntityTag(e, "society:biodome_water_wildlife")).length;
    if (buildingBlocks < 125) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.blue.building").red())
        ritualCanRun = false;
    }
    if (waterBlocks < 200) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.blue.water").red())
        ritualCanRun = false;
    }
    if (seaPlants < 50) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.blue.nature").red())
        ritualCanRun = false;
    }
    if (glassBlocks < 50) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.blue.glass").red())
        ritualCanRun = false;
    }
    if (aquaticMobs < 5) {
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.blue.wildlife").red())
        ritualCanRun = false;
    }

    return ritualCanRun;
}

const biodomeEffects = (server, level, particle, delay, count, x, y, z) => {
    for (let i = 0; i < count; i++) {
        server.scheduleInTicks(delay * i * (i / 2), () => {
            server.runCommandSilent(`playsound botania:starcaller block @a ${x} ${y} ${z} 3 0.3`);
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${x} ${y} ${z}`);
            level.spawnParticles(
                particle,
                true,
                x,
                y + 1.5,
                z,
                0.5 * rnd(0, 10),
                0.5 * rnd(0, 10),
                0.5 * rnd(0, 10),
                20,
                0.01
            );
            level.spawnParticles(
                "species:hanger_crit",
                true,
                x,
                y + 1.5,
                z,
                0,
                0.5 * rnd(0, 1),
                0,
                1,
                0.01
            );
        });
    }
}

const biodomeLegendary = (level, server, player, item, block, particle, legendaryToSummon, isPrimal) => {
    const { x, y, z } = block;
    let delay = 2;
    let count = 16;
    server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 3 0.3`);
    biodomeEffects(server, level, particle, delay, count, x, y, z);
    let idUsed = item.id;
    global.addItemCooldown(player, item, (delay * count * (count / 2)) + 20);
    server.scheduleInTicks(delay * count * (count / 2), () => {
        let spawnedAny = global.summonRaidPokemon(server, level, block, legendaryToSummon, isPrimal ? "primal" : "", Math.max(80, 100), 45, false, false, 0);
        if (spawnedAny) {
            server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
            level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
            global.addItemCooldown(player, item, 1200);
            if (level.getBlock(block.getPos()).id == "sunlit_cobblemon:biodome_altar") {
                block.set(block.id, {
                    type: "0",
                });
            }
        } else {
            player.give(idUsed);
        }
    })
}

BlockEvents.rightClicked("sunlit_cobblemon:biodome_altar", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (!['sunlit_cobblemon:blue_orb', 'sunlit_cobblemon:red_orb'].includes(item.id)) return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake()) return;
    if (block.properties.get("type") != "0") return;
    let ritualCanRun = false;
    let isPrimal = false;
    let ritualPokemon = "";
    let radius = 16
    if (item.id == 'sunlit_cobblemon:red_orb') {
        ritualCanRun = getRitualArid(level, player, block.getPos(), radius);
        ritualPokemon = "groudon";
        if (global.hasPartyPokemon(player, ["kyogre", "rayquaza"], 2) && Math.random() < 0.1) isPrimal = true;
    } else {
        ritualCanRun = getRitualHumidity(level, player, block.getPos(), radius);
        ritualPokemon = "kyogre";
        if (global.hasPartyPokemon(player, ["groudon", "rayquaza"], 2) && Math.random() < 0.1) isPrimal = true;
    }
    if (ritualCanRun == true) {
        player.swing();
        server.runCommandSilent(`playsound supplementaries:block.jar.place block @a ${block.x} ${block.y} ${block.z} 2`);
        server.runCommandSilent(`playsound minecraft:item.bottle.fill_dragonbreath block @a ${block.x} ${block.y} ${block.z} 1`);
        let spawnBlock = level.getBlock(block.getPos().offset(0, 1, 0));
        if (level.getEntitiesWithin(AABB.ofBlock(level.getBlock(spawnBlock)).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
            return;
        } else if (!spawnBlock.id.equals("minecraft:air") && !spawnBlock.id.equals("minecraft:water")) {
            player.tell(Text.translatable("sunlit_cobblemon.spawning.no_room").red());
            return;
        }
        player.tell(Text.translatable("sunlit_cobblemon.biodome_altar.success"));
        global.addItemCooldown(player, item, 600);
        if (ritualPokemon == "kyogre") {
            server.runCommandSilent("weather rain");
            block.set(block.id, {
                type: "2",
            });
        } else {
            server.runCommandSilent("weather clear");
            block.set(block.id, {
                type: "1",
            });
        }
        item.shrink(1)
        server.scheduleInTicks(100, () => {
            biodomeLegendary(level, server, player, item, block, ritualPokemon == "groudon" ? "minecraft:flame" : "species:ascending_spectre_smoke", ritualPokemon, isPrimal)
        });
    } else {
        global.addItemCooldown(player, item, 20);
    }
});

