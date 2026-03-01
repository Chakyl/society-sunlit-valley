console.info("[SOCIETY-S-COBBLEMON] cobblemonDen.js loaded");

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
        if (roll <= 0) {
            rolledEntry = entry
        }
    });
    return rolledEntry || -1;
}

const initializeRaidDen = (level, block, player) => {
    let nbt = block.getEntityData();
    let foundTier = Number(nbt.data.tier)
    let tier = foundTier !== -1 ? foundTier : Math.floor(Math.random() * 3)
    let mon = rollDenPokemon(level, player, getTierStats(tier).bucket)
    if (mon == -1) {
        player.tell(Text.translatable("cobblemon.command.checkspawns.nothing").red())
        return;
    }
    nbt.merge({
        data: {
            type: mon.pokemon.species,
            variant: mon.pokemon.variant,
            level: Math.min(mon.levelRange.last + 10, 100),
            tier: tier
        },
    });
    block.setEntityData(nbt);
    block.getEntity().setChanged();
}

BlockEvents.rightClicked("sunlit_cobblemon:raid_den", (e) => {
    const { block, hand, player, level, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (!global.hasScope(player)) {
        player.tell(
            Text.translatable("sunlit_cobblemon.need_scope").red(),
        );
        return;
    }
    let nbt = block.getEntityData();
    if (!nbt) return;
    if (!nbt.data.type || nbt.data.type.equals("")) {
        initializeRaidDen(level, block, player);
        nbt = block.getEntityData();
    }
    let day = global.getDay(level);
    if (player.isCrouching() && (!nbt.data || !nbt.data.dayLastRaided || day > nbt.data.dayLastRaided || nbt.data.dayLastRaided - day > 1)) {
        let tierStats = getTierStats(nbt.data.tier)
        let hiddenAbility = Math.random() < tierStats.hiddenAbilityChance;
        let shiny = Math.random() < tierStats.shinyChance;
        let spawnedAny = false;
        server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${block.x} ${block.y + 1} ${block.z} ${nbt.data.type} ${shiny ? "shiny " : ""}${hiddenAbility ? "hiddenability " : ""}${nbt.data.variant && nbt.data.variant.equals("") ? "" : nbt.data.variant} level=${nbt.data.level} hp_ev=252 speed_ev=252`);
        let spawnedPokemon = level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(0.2)).filter((e) => e.type.equals("cobblemon:pokemon"));
        if (spawnedPokemon && spawnedPokemon.length > 0) {
            spawnedAny = true;
            spawnedPokemon = spawnedPokemon[0];
            spawnedPokemon.setDeltaMovement(new Vec3d(0, 1.2, 0));
            spawnedPokemon.persistentData.raidMon = true;
            spawnedPokemon.potionEffects.add("minecraft:glowing", 400, 0, false, false);
        }
        if (spawnedAny) {
            nbt.merge({
                data: {
                    dayLastRaided: day
                },
            });
            block.setEntityData(nbt);
            block.getEntity().setChanged();
            server.runCommandSilent(
                `playsound shippingbin:block.shippingbin.open block @a ${player.x} ${player.y} ${player.z}`
            );
        }
    } else {
        let tierStats = getTierStats(nbt.data.tier)
        player.tell(`Tier: ${nbt.data.tier} | Pokemon: ${nbt.data.type.equals("") ? "Unknown" : Text.translate(`cobblemon.species.${nbt.data.type}.name`).getString()} | Level: ${nbt.data.level} | Shiny Chance: ${Number(tierStats.shinyChance * 100).toFixed(2)}% | Hidden Ability Chance: ${Number(tierStats.hiddenAbilityChance * 100).toFixed(2)}%`)
    }
});
