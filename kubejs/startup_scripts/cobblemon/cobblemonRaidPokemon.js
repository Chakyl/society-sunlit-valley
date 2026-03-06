
global.handleRaidPokemonBattle = (e) => {
    const battle = e.battle;
    battle.getActors().forEach((actor) => {
        actor.getPokemonList().forEach((battlePokemon) => {
            console.log(battlePokemon)
            if (battlePokemon.entity && battlePokemon.entity.persistentData && battlePokemon.entity.persistentData.raidMon) {
                battle.getPlayers().forEach(player => {
                    player.tell(Text.translatable("sunlit_cobblemon.sun_raid.battle_start", battlePokemon.getName().getString()).gold())
                });
            }

        });
    });
};

StartupEvents.postInit((init) => {
    let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

    $CobblemonEvents.BATTLE_STARTED_POST.subscribe("normal", (e) => {
        global.handleRaidPokemonBattle(e);
    });
});


global.handleRaidDefeat = (e) => {
    const pokemon = e.pokemon;
    if (pokemon.entity && pokemon.entity.persistentData && pokemon.entity.persistentData.raidMon) {
        let entityMon = pokemon.entity
        let raidMondStats = entityMon.persistentData.raidMonStats;
        let server = pokemon.entity.getServer()
        let level = pokemon.entity.getLevel()
        let commandStr = `execute in ${level.dimension} run pokespawnat ${entityMon.x} ${entityMon.y} ${entityMon.z} ${pokemon.getSpecies()} ${raidMondStats.isShiny ? "shiny " : ""} ${raidMondStats.hasHiddenAbility ? "hiddenability " : ""}${raidMondStats.variant && raidMondStats.variant.equals("") ? "" : raidMondStats.variant} level=${Number(raidMondStats.spawnedLevel)}`;
        let tier = Math.max(0, Number(raidMondStats.tier))

        server.scheduleInTicks(0, () => {
            server.scheduleInTicks(60, () => {
                let sunDrops = entityMon.level.createEntity("minecraft:item");
                sunDrops.x = entityMon.x;
                sunDrops.y = entityMon.y;
                sunDrops.z = entityMon.z;
                sunDrops.item = Item.of(`${Math.max(1, rnd(tier + 1, (tier + 1) * tier))}x sunlit_cobblemon:sun_drops`);
                sunDrops.spawn();

                let mysticaChances = [0, 0.1, 0.25, 0.45]
                if (tier > 0 && Math.random() < mysticaChances[tier]) {
                    let mystica = entityMon.level.createEntity("minecraft:item");
                    mystica.x = entityMon.x;
                    mystica.y = entityMon.y;
                    mystica.z = entityMon.z;
                    mystica.item = Item.of("1x sunlit_cobblemon:mystica_branch");
                    mystica.spawn();
                }
                server.runCommandSilent(`playsound cobblemon:poke_ball.recall block @a ${entityMon.x} ${entityMon.y} ${entityMon.z}`);
                server.runCommandSilent(`playsound species:block.spectralibur.can_be_pulled3 block @a ${entityMon.x} ${entityMon.y} ${entityMon.z}`);
                server.runCommandSilent(`playsound stardew_fishing:complete block @a ${entityMon.x} ${entityMon.y} ${entityMon.z}`);
                level.spawnParticles("species:ghoul_searching2", true, entityMon.x + 0.5, entityMon.y, entityMon.z + 0.5, 0, 0, 0, 1, 2);
                server.runCommandSilent(commandStr);
            });
        });
    }
};

StartupEvents.postInit((init) => {
    let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

    $CobblemonEvents.POKEMON_FAINTED.subscribe("normal", (e) => {
        global.handleRaidDefeat(e);
    });
});
