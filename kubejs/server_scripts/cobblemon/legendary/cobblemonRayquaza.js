console.info("[SOCIETY] cobblemonCharmBait.js loaded");

PlayerEvents.tick((e) => {
    const { player, server, level } = e;
    if (player.age % 100 == 0) {
        if (player.getOnPos().y < 150) return;
        let delta = player.getDeltaMovement()
        let speed = Math.sqrt((delta.x() * delta.x()) + (delta.y() * delta.y()) + (delta.z() * delta.z()));
        if (speed >= 2.0 && global.hasPartyPokemon(player, ["kyogre", "groudon"], 2)) {
            if (!global.hasScope(player)) return;
            let day = global.getDay(level);
            if (player.persistentData.rayquaza && !global.compareDay(day, player.persistentData.rayquaza, 15)) return
            let spawnPos = player.getOnPos().offset(4, 0, 4);
            let { x, y, z } = spawnPos;
            server.runCommandSilent(`playsound wildernature:cassowary_ambient block @a ${player.x} ${player.y} ${player.z} 0.1 0.3`);
            let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(spawnPos), "rayquaza", "", 100, 75, false, false, 0);
            if (spawnedAny) {
                server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
                server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
                server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
                player.potionEffects.add("minecraft:levitation", 20, 5, true, false);
                player.potionEffects.add("minecraft:slow_falling", 5000, 1, true, false);
                player.potionEffects.add("minecraft:darkness", 1200, 0, true, false);
                server.runCommandSilent(`execute in ${level.dimension} run summon lightning_bolt ${player.x} ${player.y} ${player.z}`);
                player.tell(Text.translatable("sunlit_cobblemon.rayquaza").gold())
                player.persistentData.rayquaza = day;
                level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
                let radius = 14
                for (let pos of BlockPos.betweenClosed(
                    new BlockPos(player.getX() - radius, Math.min(384, player.getY() - 8), player.getZ() - radius),
                    [player.getX() + radius, Math.min(384, player.getY() - 8), player.getZ() + radius]
                )) {
                    if (!level.isLoaded(pos)) continue;
                    level.getBlock(pos).set("quark:white_corundum");
                }
                return;
            }
        }
    }
});