console.info("[SOCIETY-S-COBBLEMON] cobblemonGemBoxjs loaded");

const regimap = new Map([
    // Price
    ["aqtrjs", "regirock"],
    // Rainbow
    ["rtjqas", "regice"],
    // Size
    ["asjrtq", "registeel"],
    // Letter Count 
    ["rjtsqa", "regieleki"],
    ["jrtsqa", "regieleki"],
    // Alphabetical
    ["aqjrst", "regidrago"],
]);
const gemCodeMap = new Map([
    ["society:amethyst_chunk", "a"],
    ["society:spinel", "s"],
    ["society:jade", "j"],
    ["society:ruby", "r"],
    ["society:topaz", "t"],
    ["society:aquamarine", "q"],
]);
const regiEffects = (server, level, delay, count, x, y, z) => {
    for (let i = 0; i < count; i++) {
        server.scheduleInTicks(delay * i * (i / 1.5), () => {
            server.runCommandSilent(`playsound species:item.crankbow.shoot block @a ${x} ${y} ${z} 3 1.3`);
            level.spawnParticles(
                "species:ascending_dust",
                true,
                x,
                y + 1.5,
                z,
                0.5 * rnd(0, 2),
                0.5 * rnd(0, 2),
                0.5 * rnd(0, 2),
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

const summonRaidRegi = (level, server, player, item, block, legendaryToSummon, raidLevel) => {
    const { x, y, z } = block;
    let delay = 2;
    let count = 7;
    server.runCommandSilent(`playsound species:item.ricoshield.attack @a ${x} ${y} ${z} 3 0.3`);
    let idUsed = item.id
    item.shrink(1)
    regiEffects(server, level, delay, count, x, y, z);
    global.addItemCooldown(player, item, (delay * count * (count / 1.5)) + 20);
    server.scheduleInTicks(delay * count * (count / 2), () => {
        let spawnedAny = global.summonRaidPokemon(server, level, block, legendaryToSummon, "", Math.max(80, raidLevel), 45, false, false, 0);
        if (spawnedAny) {
            server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
            level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
            global.addItemCooldown(player, item, 1200);
        } else {
            player.tell(Text.translatable("sunlit_cobblemon.regi.no_space").red());
            player.give(idUsed);
        }
    })
}

BlockEvents.rightClicked("sunlit_cobblemon:gem_box", (e) => {
    const { block, hand, player, level, item, server } = e;
    const { x, y, z } = block;
    if (hand !== "MAIN_HAND") return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    let nbt = block.getEntityData();
    if (!nbt) return;
    let wipCode = nbt.data && nbt.data.passcode ? nbt.data.passcode : ""
    if (item.hasTag("sunlit_cobblemon:gem_box_gem")) {
        if (wipCode.length >= 6) return;
        let newEntry = gemCodeMap.get(`${item.id}`);
        if (wipCode.includes(newEntry)) return;
        if (newEntry) {
            nbt.merge({
                data: {
                    passcode: `${wipCode}${newEntry}`
                }
            });
            level.spawnParticles("supplementaries:air_burst", true, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0, 0.01, 1);
            level.spawnParticles("minecraft:glow_squid_ink", true, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0, 0.01, 2);
            server.runCommandSilent(`playsound minecraft:block.amethyst_block.place block @a ${x} ${y} ${z} 2`);
            global.setBlockEntityData(block, nbt);
            global.addItemCooldown(player, item, 40);
        }
    } else if (item.id === "sunlit_cobblemon:tabula_rasa" && wipCode.length >= 6) {
        if (level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(2)).filter((e) => e.type.equals("cobblemon:pokemon")).length !== 0) {
            player.tell(Text.translatable("sunlit_cobblemon.sun_raid.clear_area").red());
            return;
        }
        let regiFound = regimap.get(`${wipCode}`)
        nbt.merge({
            data: {
                passcode: ""
            }
        });
        global.setBlockEntityData(block, nbt);
        if (regiFound) {
            summonRaidRegi(level, server, player, item, block, global.hasPartyPokemon(player, ["registeel", "regirock", "regice", "regidrago", "regieleki"], 5) ? "regigigas" : regiFound, 100)
        } else {
            server.runCommandSilent(`playsound stardew_fishing:fish_escape block @a ${x} ${y} ${z} 2`);
            player.tell(Text.translatable("sunlit_cobblemon.regi.fail").red());
            global.addItemCooldown(player, item, 100);
        }
    }
});
