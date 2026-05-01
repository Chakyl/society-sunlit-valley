console.info("[SOCIETY-S-COBBLEMON] cobblemonRaid.js loaded");

const getPoolWeightTotal = (spawnDetails) => {
    let totalWeight = 0;
    spawnDetails.forEach((entry) => {
        totalWeight += Math.max(entry.weight, 1);
    });
    return totalWeight
}

const getTierStats = (tier) => {
    switch (tier) {
        case 3:
            return { bucket: Math.random() < 0.25 ? "ultra-rare" : "rare", shinyChance: 1 / 2048, hiddenAbilityChance: 1 / 4 }
        case 2:
            return { bucket: Math.random() < 0.75 ? "rare" : "uncommon", shinyChance: 1 / 3072, hiddenAbilityChance: 1 / 8 }
        case 1:
            return { bucket: Math.random() < 0.25 ? "rare" : "uncommon", shinyChance: 1 / 3584, hiddenAbilityChance: 1 / 16 }
        case 0:
        default:
            return { bucket: Math.random() < 0.5 ? "uncommon" : "uncommon", shinyChance: 1 / 4000, hiddenAbilityChance: 1 / 16 }
    }
}

const rollDenPokemon = (level, player, pool) => {
    let spawnDetails = global.getCurrentSpawnDetails(level, player, pool);
    let roll = Math.random() * getPoolWeightTotal(spawnDetails);
    let rolledEntry

    spawnDetails.forEach((entry) => {
        roll -= Math.max(entry.weight, 1)
        if (rolledEntry == undefined && roll <= 0) {
            rolledEntry = entry;
        }
    });
    return rolledEntry || -1;
}

const displayStats = (player, raidLevel, nbt) => {
    let tierStats = getTierStats(nbt.data.tier)
    player.tell(Text.translatable("sunlit_cobblemon.raid_statue.summary", `${Number(nbt.data.tier)}`, nbt.data.type.equals("") ? "Unknown" : Text.translate(`cobblemon.species.${nbt.data.type}.name`).getString(), `${Number(raidLevel)}`, `${Number(nbt.data.level)}`, `${Number(tierStats.shinyChance * 100).toFixed(2)}%`, `${Number(tierStats.hiddenAbilityChance * 100).toFixed(2)}%`));
}

const initializeSunRaid = (level, block, player) => {
    let nbt = block.getEntityData();
    let foundTier = Number(nbt.data.tier)
    let tier = foundTier !== -1 ? foundTier : Math.floor(Math.random() * 4)
    let mon = rollDenPokemon(level, player, getTierStats(tier).bucket)
    if (mon == -1) {
        player.tell(Text.translatable("sunlit_cobblemon.sun_raid.checkspawns.nothing").red())
        return;
    }
    nbt.merge({
        data: {
            type: mon.pokemon.species,
            variant: global.getImportantAspect(mon.pokemon.aspects) || "",
            level: Math.min(mon.levelRange.first + 10, 100),
            tier: tier
        },
    });
    global.setBlockEntityData(block, nbt);
}

const legendaryEffects = (server, level, delay, count, x, y, z) => {
    for (let i = 0; i < count; i++) {
        server.scheduleInTicks(delay * i * (i / 2), () => {
            server.runCommandSilent(`playsound botania:starcaller block @a ${x} ${y} ${z} 3 0.3`);
            server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${x} ${y} ${z}`);
            level.spawnParticles(
                "species:ascending_spectre_smoke",
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
const summonRaidLegendary = (level, server, player, item, block, legendaryToSummon, raidLevel) => {
    const { x, y, z } = block;
    let delay = 2;
    let count = 16;
    server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 3 0.3`);
    legendaryEffects(server, level, delay, count, x, y, z);
    let idUsed = item.id
    item.shrink(1)
    global.addItemCooldown(player, item, (delay * count * (count / 2)) + 20);
    server.scheduleInTicks(delay * count * (count / 2), () => {
        let spawnedAny = global.summonRaidPokemon(server, level, block, legendaryToSummon, "", Math.max(80, raidLevel), 45, false, false, 0);
        if (spawnedAny) {
            server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
            level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
            global.addItemCooldown(player, item, 1200);
        } else {
            player.give(idUsed);
        }
    })
}

const playRaidSounds = (server, block) => {
    server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${block.x} ${block.y} ${block.z}`);
    server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${block.x} ${block.y} ${block.z}`);
    server.runCommandSilent(`playsound species:effect.gut_feeling.roar block @a ${block.x} ${block.y} ${block.z}`);
}

const sumMPRaidLevel = (nearbyPlayers, raidTier) => {
    let levelSum = 0;
    for (let playerI = 0; playerI < nearbyPlayers.length; playerI++) {
        levelSum += Math.min(100, global.getPartyLevel(nearbyPlayers[playerI]) + (5 * (Number(raidTier) + 1)));
    }
    return Math.round(levelSum / Math.min(4, nearbyPlayers.length));
}

const sunLegendaries = new Map([
    ["sunlit_cobblemon:blooming_ring", "xerneas"],
    ["sunlit_cobblemon:cornucopia_of_greed", "yveltal"],
]);

BlockEvents.rightClicked("sunlit_cobblemon:sun_raid_statue", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (!global.hasScope(player)) {
        if (player.isCrouching()) {
            server.runCommandSilent(`openshop ${player.username} sun_offering`)
        } else {
            player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());

        }
        return;
    }
    let nbt = block.getEntityData();
    if (!nbt) return;
    if (!nbt.data.type || nbt.data.type.equals("")) {
        initializeSunRaid(level, block, player);
        nbt = block.getEntityData();
    }
    if (item.id.equals("sunlit_cobblemon:mystica_cookie")) {
        let replacedSpecies = nbt.data.type;
        initializeSunRaid(level, block, player);
        nbt = block.getEntityData();
        if (replacedSpecies === nbt.data.type) {
            return;
        }
        displayStats(player, Math.min(100, global.getPartyLevel(player) + (5 * (Number(nbt.data.tier) + 1))), nbt);
        server.runCommandSilent(`playsound botania:babylon_spawn block @a ${block.x} ${block.y} ${block.z}`);
        if (!player.isCreative()) item.shrink(1);
        global.addItemCooldown(player, item, 4);
        return;
    } else if (item.id.equals("sunlit_cobblemon:sun_essence")) {
        let currentTier = Number(nbt.data.tier);
        if (currentTier < 3) {
            nbt.merge({
                data: {
                    tier: Number(nbt.data.tier) + 1
                },
            });
            global.setBlockEntityData(block, nbt);
            displayStats(player, Math.min(100, global.getPartyLevel(player) + (5 * (Number(nbt.data.tier) + 1))), nbt);
            server.runCommandSilent(`playsound botania:babylon_spawn block @a ${block.x} ${block.y} ${block.z}`);
            if (!player.isCreative()) item.shrink(1);
            global.addItemCooldown(player, item, 4);
        } else {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.highest_tier").red())
        }
        return;
    } else if (item.id.equals("sunlit_cobblemon:sun_mirror")) {
        let extracted = false;
        if (nbt.data.type === "") {
            player.tell(Text.translatable("sunlit_cobblemon.sun_mirror.no_mon").red())
            return;
        }
        if (item.nbt && item.nbt.monData == null) {
            item.nbt.monData = nbt;
            extracted = true;
        } else if (item.nbt && item.nbt.monData !== null) {
            nbt.merge({
                data: {
                    tier: 0,
                    type: item.nbt.monData.type,
                    variant: item.nbt.monData.variant,
                    level: item.nbt.monData.level
                },
            });
            server.runCommandSilent(`playsound botania:spreader_fire block @a ${block.x} ${block.y} ${block.z}`);
            global.setBlockEntityData(block, nbt);

            level.spawnParticles(
                "atmospheric:orange_vapor",
                true,
                block.x,
                block.y + 0.5,
                block.z,
                0.2 * rnd(0, 2),
                0.2 * rnd(0, 2),
                0.2 * rnd(0, 2),
                10,
                0.01
            );
            if (!player.isCreative()) item.shrink(1);
            return;
        } else {
            item.nbt = {}
            item.nbt.monData = { type: nbt.data.type, variant: nbt.data.variant, level: nbt.data.level };
            extracted = true;
        }
        if (extracted) {
            nbt.merge({
                data: {
                    tier: -1,
                    type: "",
                    variant: "",
                    level: -1
                },
            });
            level.spawnParticles(
                "species:youth_potion",
                true,
                block.x,
                block.y + 0.5,
                block.z,
                0.2 * rnd(0, 2),
                0.2 * rnd(0, 2),
                0.2 * rnd(0, 2),
                10,
                0.01
            );
            global.setBlockEntityData(block, nbt);
            server.runCommandSilent(`playsound botania:virus_infect block @a ${block.x} ${block.y} ${block.z}`);
        }
        global.addItemCooldown(player, item, 100);
        return;
    }
    let day = global.getDay(level);
    let spawnBlock = level.getBlock(block.getPos().offset(0, 1, 0));
    let raidLevel = Math.min(100, global.getPartyLevel(player) + (5 * (Number(nbt.data.tier) + 1)))
    let legendaryToSummon = sunLegendaries.get(`${item.id}`);
    const canSpawnToday = !nbt.data || !nbt.data.dayLastRaided || global.compareDay(day, nbt.data.dayLastRaided, 1)
    // let raidLevel = 1;
    if (canSpawnToday || legendaryToSummon) {
        if (player.isCrouching() && level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
            return;
        } else if (!["society:cavern_air", "minecraft:air"].includes(spawnBlock.id)) {
            player.tell(Text.translatable("sunlit_cobblemon.spawning.no_room").red());
            return;
        }
    }
    if (!raidLevel || raidLevel < 10) {
        player.tell(Text.translatable("sunlit_cobblemon.sun_raid.under_leveled").red());
        return;
    }
    if (legendaryToSummon) {
        summonRaidLegendary(level, server, player, item, block, legendaryToSummon, raidLevel)
        return;
    }
    if (player.isCrouching() && canSpawnToday) {
        let tierStats = getTierStats(nbt.data.tier)
        let hiddenAbility = Math.random() < tierStats.hiddenAbilityChance;
        let shiny = Math.random() < tierStats.shinyChance;
        let nearbyPlayers = level.getEntitiesWithin(AABB.ofBlock(block).inflate(10)).filter((scanEntity) => scanEntity.isPlayer());
        let spawnedAny
        if (nearbyPlayers.length > 1) {
            let groupRaidLevel = Math.min(100, sumMPRaidLevel(nearbyPlayers, nbt.data.tier));
            spawnedAny = global.summonRaidPokemon(server, level, block, nbt.data.type, nbt.data.variant, groupRaidLevel, nbt.data.level, shiny, hiddenAbility, nbt.data.tier, true);
            for (let playerI = 1; playerI < nearbyPlayers.length; playerI++) {
                server.scheduleInTicks(20 * playerI, () => {
                    spawnedAny = global.summonRaidPokemon(server, level, block, nbt.data.type, nbt.data.variant, groupRaidLevel, nbt.data.level, shiny, hiddenAbility, nbt.data.tier, true);
                });
            }
        } else {
            spawnedAny = global.summonRaidPokemon(server, level, block, nbt.data.type, nbt.data.variant, raidLevel, nbt.data.level, shiny, hiddenAbility, nbt.data.tier, true);
        }
        if (spawnedAny) {
            if (player.stages.has("savage_sun") && Math.random() < 0.15) {
                server.runCommandSilent(`playsound stardew_fishing:complete block @a ${block.x} ${block.y} ${block.z}`);
                level.spawnParticles(
                    "species:ascending_dust",
                    true,
                    block.x,
                    block.y + 0.5,
                    block.z,
                    0.5 * rnd(0, 2),
                    0.5 * rnd(0, 2),
                    0.5 * rnd(0, 2),
                    20,
                    0.01
                );
                level.spawnParticles(
                    "amendments:fireball_trail",
                    true,
                    block.x,
                    block.y + 0.5,
                    block.z,
                    0.2 * rnd(0, 2),
                    0.2 * rnd(0, 2),
                    0.2 * rnd(0, 2),
                    20,
                    0.01
                );
            } else {
                nbt.merge({
                    data: {
                        dayLastRaided: day
                    }
                });
            }
            global.setBlockEntityData(block, nbt);
            playRaidSounds(server, block);
        }
    } else if (player.isCrouching() && !canSpawnToday) {
        server.runCommandSilent(`openshop ${player.username} sun_offering`)
    } else {
        displayStats(player, raidLevel, nbt)
    }
});
