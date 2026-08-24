console.info("[SOCIETY-S-COBBLEMON] cobblemonTimePortal.js loaded");

const summonParadoxPokemon = (level, server, player, item, block, legendaryToSummon, raidLevel, consumeItem) => {
    const { x, y, z } = block;
    let delay = 2;
    let count = 16;
    let visited = new Set();
    let queue = [block.pos]
    let matchingBlocks = []
    server.runCommandSilent(`playsound tanukidecor:block.grandfather_clock.chime block @a ${x} ${y} ${z} 2 0.7`);
    server.runCommandSilent(`playsound tanukidecor:block.grandfather_clock.chime block @a ${x} ${y} ${z} 2 1.2`);
    server.runCommandSilent(`playsound tanukidecor:block.grandfather_clock.chime block @a ${x} ${y} ${z} 1.5 0.3`);
    server.runCommandSilent(`playsound species:entity.quake.death block @a ${x} ${y} ${z} 3 0.2`);
    while (queue.length > 0 && matchingBlocks.length < 64) {
        let currentPos = queue.shift()
        let posKey = `${currentPos.x},${currentPos.y},${currentPos.z}`
        if (visited.has(posKey) || !level.isLoaded(currentPos)) continue
        visited.add(posKey)

        if (level.getBlock(currentPos).id === block.id) {
            matchingBlocks.push(currentPos)
            let neighbors = [currentPos.above(), currentPos.below(), currentPos.north(), currentPos.south(), currentPos.east(), currentPos.west()]
            neighbors.forEach(neighborPos => {
                let neighborKey = `${neighborPos.x},${neighborPos.y},${neighborPos.z}`
                if (!visited.has(neighborKey)) {
                    queue.push(neighborPos)
                    level.spawnParticles(
                        'minecraft:sonic_boom',
                        true,
                        neighborPos.x,
                        neighborPos.y,
                        neighborPos.z,
                        0,
                        0,
                        0,
                        1,
                        0.1
                    );
                }
            })
        }
    }
    if (consumeItem) item.shrink(1)
    global.addItemCooldown(player, item, (delay * count * (count / 2)) + 20);
    let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(x, y + 3.5, z), legendaryToSummon, "", Math.max(80, raidLevel), 45, false, false, 0, { x: (Math.random() < 0.5 ? 1 : -1) * 0.55, y: 0, z: (Math.random() < 0.5 ? 1 : -1) * 0.55 });
    if (spawnedAny) {
        server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
        level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
        global.addItemCooldown(player, item, 1200);
    }
}

let pastParadoxPool = [
    { pokemon: "screamtail", weight: 10, lvlRange: [50, 100] },
    { pokemon: "fluttermane", weight: 6, lvlRange: [50, 100] },
    { pokemon: "slitherwing", weight: 10, lvlRange: [50, 100] },
    { pokemon: "sandyshocks", weight: 10, lvlRange: [50, 100] },
    { pokemon: "roaringmoon", weight: 10, lvlRange: [50, 100] },
    { pokemon: "walkingwake", weight: 4, lvlRange: [50, 100] },
    { pokemon: "gougingfire", weight: 4, lvlRange: [50, 100] },
    { pokemon: "ragingbolt", weight: 4, lvlRange: [50, 100] },
];

let futureParadoxPool = [
    { pokemon: "ironthorns", weight: 10, lvlRange: [50, 100] },
    { pokemon: "ironmoth", weight: 10, lvlRange: [50, 100] },
    { pokemon: "ironbundle", weight: 10, lvlRange: [50, 100] },
    { pokemon: "ironvaliant", weight: 10, lvlRange: [50, 100] },
    { pokemon: "ironleaves", weight: 4, lvlRange: [50, 100] },
];


BlockEvents.rightClicked(["minecraft:reinforced_deepslate", "sunlit_cobblemon:time_frame"], (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (item.id !== 'cobblemon:booster_energy') return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake()) return;
    const { x, y, z } = block;
    let isBottomLayer = level.getBlock(x, y + 7, z) === block.id && level.getBlock(x, y + 3, z) !== block.id;

    if (!isBottomLayer) {
        player.tell();
        player.tell(Text.translatable("block.sunlit_cobblemon.time_frame.bottom").red());
        return;
    }
    global.addItemCooldown(player, item, 120);
    server.runCommandSilent(`playsound tanukidecor:block.grandfather_clock.chime block @a ${x} ${y} ${z} 2 1`);
    let chosenPool = Math.random() < 0.5 ? pastParadoxPool : futureParadoxPool;
    server.scheduleInTicks(80, () => {
        for (let i = 0; i < 3; i++) {
            server.scheduleInTicks(60 * i, () => {
                summonParadoxPokemon(level, server, player, item, block, global.rollPokeWeightedTable(chosenPool).pokemon, rnd(50, 70), i == 2);
            });
        }
    })
})