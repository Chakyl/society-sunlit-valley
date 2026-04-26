console.info("[SOCIETY] cobblemonCharmBait.js loaded");

let spawnSkyLegendary = (server, level, player, birds, variant, sound, message) => {
    if (player.getOnPos().y < 60) return;
    let spawnPos = player.getOnPos().offset(-24, 94, 24);
    let { x, y, z } = spawnPos;
    server.runCommandSilent(`playsound ${sound} block @a ${player.x} ${player.y} ${player.z} 0.1 0.3`);
    let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(spawnPos), birds[Math.floor(Math.random() * birds.length)], variant, 100, 75, false, false, 0);
    if (spawnedAny) {
        player.tell(Text.translatable(message).gold())
        level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
        return;
    }

}
PlayerEvents.tick((e) => {
    const { player, server, level } = e;

    if (player.age % 18000 == 0 && global.getHasCurio(player, "sunlit_cobblemon:mystica_nectar") && Math.random() < 0.2) {
        spawnSkyLegendary(server, level, player, ["zapdos", "articuno", "moltres"], Math.random() < 0.25 ? "galarian" : "", "wildernature:cassowary_ambient", "sunlit_cobblemon.legendary_bird")
    }
    if (player.age % 18000 == 0 && global.getHasCurio(player, 'sunlit_cobblemon:rainbow_steam') && Math.random() < 0.2) {
        spawnSkyLegendary(server, level, player, ["landorus", "thundurus", "tornadus"], "", "minecraft:item.trident.thunder", "sunlit_cobblemon.legendary_genie")

    }
});