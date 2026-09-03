console.info("[SOCIETY-S-COBBLEMON] cobblemonGachaPools.js loaded");

let flowerSpawns = [
    { pokemon: "comfey", weight: 5, lvlRange: [32, 49] },
    { pokemon: "lilligant", weight: 2, lvlRange: [32, 49], variant: ["hisuian"] },
    { pokemon: "lilligant", weight: 6, lvlRange: [32, 49] },
    { pokemon: "flabebe", weight: 14, lvlRange: [9, 35] },
    { pokemon: "floette", weight: 14, lvlRange: [9, 35] },
    { pokemon: "florges", weight: 12, lvlRange: [32, 49] },
    { pokemon: "skiploom", weight: 3, lvlRange: [20, 35] },
    { pokemon: "roserade", weight: 2, lvlRange: [30, 55] },
    { pokemon: "roselia", weight: 4, lvlRange: [30, 55] },
    { pokemon: "sunkern", weight: 10, lvlRange: [8, 33] },
    { pokemon: "sunflora", weight: 10, lvlRange: [44, 48] }
];

const spawnRandomFlowerMon = (level, server, pos) => {
    let caughtMon = global.rollPokeWeightedTable(flowerSpawns);
    let shinyChance = 0.05;
    let isShiny = false;
    if (!caughtMon) return;
    let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
    if (pokeLevel == 1) {
        console.log(`[WARNING] gracidae returned invalid pokelevel:`);
        console.log(caughtMon);
    }
    if (Math.random() < shinyChance) {
        isShiny = true;
    }
    server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${pos.x} ${pos.y + 2} ${pos.z} ${caughtMon.pokemon} level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""} ${isShiny ? "shiny" : ""}`);
    level.spawnParticles(
        "species:poof",
        true,
        pos.x,
        pos.y + 0.4,
        pos.z,
        0.5,
        0.5,
        0.5,
        1,
        0.5,
    );
};
const handleGracRun = (event, pos, delay, centerPos) => {
    const { level, server } = event;
    let scannedBlock;
    let hasSummoned = false;
    server.scheduleInTicks(delay, () => {
        scannedBlock = level.getBlock(pos);
        if (scannedBlock.id == "minecraft:air" && Math.random() < 0.42) {
            level.spawnParticles(
                Math.random() < 0.25 ? "windswept:frost_leaf" : "minecraft:cherry_leaves",
                true,
                pos.x,
                pos.y + 0.4,
                pos.z,
                0.5,
                0.5,
                0.5,
                1,
                0.15,
            );
        } else if (scannedBlock.hasTag("minecraft:flowers")) {
            if (Math.random() < 0.12) {
                spawnRandomFlowerMon(level, server, pos)
            }
        }
        if (delay == 38.1) {
            hasSummoned = global.summonRaidPokemon(server, level, level.getBlock(centerPos), "shaymin", "", 95, 35, false, false, 0);
        }
    });
};
ItemEvents.rightClicked('sunlit_cobblemon:gracidea_flower', (e) => {
    const { server, player, level, item } = e;
    if (!global.hasScope(player)) {
        player.tell(
            Text.translatable("sunlit_cobblemon.need_scope").red(),
        );
        return;
    }
    if (!level.getBiome(player.getOnPos()).toString().includes("minecraft:meadow")) {
        player.tell(Text.translatable("sunlit_cobblemon.gracidea.not_meadow").red())
        return;
    }

    let centerPos = player.getOnPos().above();
    const { x, y, z } = centerPos;
    server.runCommandSilent(
        `playsound trials:breeze_idle block @a ${x} ${y} ${z}`
    );
    const radius = 16;
    let scannedBlocks = 0;
    for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - 2, z - radius), [
        x + radius,
        y + 5,
        z + radius,
    ])) {
        handleGracRun(
            e,
            pos.immutable(),
            scannedBlocks / 200,
            centerPos
        );
        scannedBlocks++;
    }
    if (!player.isCreative()) item.shrink(1)
});