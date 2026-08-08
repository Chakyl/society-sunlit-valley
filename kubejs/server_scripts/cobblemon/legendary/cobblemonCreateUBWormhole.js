console.info("[SOCIETY-S-COBBLEMON] cobblemonCreateUBWormhole.js loaded");

const particleRing = (server, level, delay, gap, count, x, y, z, particleId) => {
    let resolvedY = y + (gap * count)
    for (let i = 0; i < count; i++) {
        let offset = gap * i
        server.scheduleInTicks(delay * i, () => {
            server.runCommandSilent(
                `playsound species:entity.quake.death block @a ${x} ${resolvedY} ${z} 3 0.3`
            );
            level.spawnParticles(
                particleId,
                true,
                x,
                resolvedY - offset,
                z,
                0,
                0,
                0,
                1,
                0.1
            );
        });
    }

}

const getUBFromBiome = (level, player) => {
    let biomeTags = level.getBiome(player.pos).tags().toList().toString();
    if (biomeTags.includes("minecraft:is_ocean") || biomeTags.includes("minecraft:is_beach")) {
        return 'nihilego';
    } else if (biomeTags.includes("minecraft:is_jungle")) {
        return 'buzzwole';
    } else if (biomeTags.includes("cobblemon:is_swamp")) {
        return "poipole";
    } else if (biomeTags.includes("minecraft:is_forest")) {
        return "kartana";
    } else if (biomeTags.includes("minecraft:is_mountain")) {
        return "guzzlord"
    } else if (biomeTags.includes("minecraft:is_badlands")) {
        return "celesteela"
    } else if (biomeTags.includes("minecraft:is_nether")) {
        return "blacephalon"
    }
    return "xurkitree";
}

ItemEvents.rightClicked('sunlit_cobblemon:wormhole_generator', e => {
    const { player, server, level, item } = e;
    if (player.cooldowns.isOnCooldown(item)) return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    let pokemonType = getUBFromBiome(level, player);
    let offhandItem = player.getHeldItem("off_hand");
    if (offhandItem && offhandItem.id.equals("sunlit_cobblemon:cosmic_dust")) {
        let newNbt = item.getNbt() || { dust: 0 };
        newNbt.dust += offhandItem.count
        item.nbt = newNbt
        player.offHandItem = "minecraft:air";
        server.runCommandSilent(
            `playsound cobblemon:fossil_machine.finished block @a ${player.x} ${player.y} ${player.z}`,
        );
    }
    if (player.isCrouching()) {
        if (!item.nbt || !item.nbt.dust || item.nbt.dust <= 0) {
            server.runCommandSilent(
                global.getEmbersTextAPICommand(
                    player.username,
                    `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#A33EA1",offsetY:-80}`,
                    80,
                    Text.translatable("sunlit_cobblemon.wormhole_generator.dust").toJson()
                )
            );
            global.addItemCooldown(player, item, 100);
            return;
        }
        server.runCommandSilent(
            `playsound refurbished_furniture:ui.paddle_ball.retro_fail block @a ${player.x} ${player.y} ${player.z}`,
        );
        let { x, y, z } = global.getFacingPlusOffset(player.facing, player.getOnPos().offset(0, 5, 0), 15)
        let spawnBlock = level.getBlock(new BlockPos(x, y + 10, z));
        if (!spawnBlock.id.equals("minecraft:air")) {
            global.getEmbersTextAPICommand(
                player.username,
                `{anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#A33EA1",offsetY:-80}`,
                100,
                Text.translatable(`sunlit_cobblemon.wormhole_generator.no_room`).toJson()
            )
            return;
        }
        let UBSpawnHeight = y + 10;
        let delay = 2;
        let count = 20;

        let raidLevel = Math.min(100, global.getPartyLevel(player) + 20)

        particleRing(server, level, delay, 1, count, x, UBSpawnHeight, z, 'species:small_kinetic_energy');
        particleRing(server, level, delay, 1, count, x, UBSpawnHeight - 0.5, z, 'species:spectralibur_released');
        global.addItemCooldown(player, item, (delay * count) + 20);
        server.scheduleInTicks(delay * count, () => {
            let spawnedAny = global.summonRaidPokemon(server, level, spawnBlock, pokemonType, "", raidLevel, 45, false, false, 0);
            if (spawnedAny) {
                let newNbt = item.getNbt();
                newNbt.dust -= 1
                item.nbt = newNbt
                server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${spawnBlock.x} ${spawnBlock.y} ${spawnBlock.z} 2`);
                server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${spawnBlock.x} ${spawnBlock.y} ${spawnBlock.z} 2`);
                server.runCommandSilent(`playsound species:entity.wraptor.death block @a ${spawnBlock.x} ${spawnBlock.y} ${spawnBlock.z} 2`);
                global.addItemCooldown(player, item, 1200);
            }
        });
    } else {
        server.runCommandSilent(
            global.getEmbersTextAPICommand(
                player.username,
                `{anchor:"BOTTOM_CENTER",charShakeRandom:0.2,background:1,align:"BOTTOM_CENTER",color:"#A33EA1",offsetY:-80}`,
                100,
                Text.translatable(`sunlit_cobblemon.wormhole_generator.hint.${pokemonType}`).toJson()
            )
        );
        server.runCommandSilent(
            `playsound refurbished_furniture:ui.paddle_ball.retro_fail block @a ${player.x} ${player.y} ${player.z}`,
        );
        global.addItemCooldown(player, item, 120);
    }

})
