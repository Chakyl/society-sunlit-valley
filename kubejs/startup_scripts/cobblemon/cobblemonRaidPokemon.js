console.info("[SOCIETY] cobblemonRaidPokemon.js loaded");

global.handleRaidPokemonBattle = (e) => {
    const battle = e.battle;
    battle.getActors().forEach((actor) => {
        actor.getPokemonList().forEach((battlePokemon) => {
            if (battlePokemon.entity && battlePokemon.entity.persistentData && battlePokemon.entity.persistentData.raidMon) {
                battle.getPlayers().forEach(player => {
                    if (battlePokemon.entity.persistentData.moonMon) {
                        player.tell(Text.translatable("sunlit_cobblemon.moon_raid.battle_start", battlePokemon.getName().getString()).darkPurple())
                    } else {
                        player.tell(Text.translatable("sunlit_cobblemon.sun_raid.battle_start", battlePokemon.getName().getString()).gold())
                    }
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

const mysticaChances = [0, 0.1, 0.25, 0.45]

const expTables = [
    { lvl: 19, xp: ['cobblemon:exp_candy_xs', 'cobblemon:exp_candy_s'] },
    { lvl: 35, xp: ['3x cobblemon:exp_candy_s'] },
    { lvl: 45, xp: ['cobblemon:exp_candy_s', '2x cobblemon:exp_candy_m'] },
    { lvl: 75, xp: ['2x cobblemon:exp_candy_m', 'cobblemon:exp_candy_l'] },
    { lvl: 90, xp: ['cobblemon:exp_candy_l', 'cobblemon:exp_candy_xl'] },
    { lvl: 100, xp: ['4x cobblemon:exp_candy_l', 'cobblemon:exp_candy_xl'] },
]
const dropRaidItems = (entityMon, raidLevel, tier) => {
    let sunDrops = entityMon.level.createEntity("minecraft:item");
    sunDrops.x = entityMon.x;
    sunDrops.y = entityMon.y;
    sunDrops.z = entityMon.z;
    sunDrops.item = Item.of(`${Math.max(1, rnd(tier + 1, (tier + 1) * tier))}x sunlit_cobblemon:sun_drops`);
    sunDrops.spawn();

    if (tier > 0 && Math.random() < mysticaChances[tier]) {
        let mystica = entityMon.level.createEntity("minecraft:item");
        mystica.x = entityMon.x;
        mystica.y = entityMon.y;
        mystica.z = entityMon.z;
        mystica.item = Item.of("1x sunlit_cobblemon:mystica_branch");
        mystica.spawn();
    }
    let experienceDrops = expTables[0];
    for (let i = 0; i < expTables.length; i++) {
        if (raidLevel >= expTables[i].lvl) experienceDrops = expTables[i];
    }

    let xpDrop
    let dropItem
    experienceDrops.xp.forEach((drop) => {
        xpDrop = entityMon.level.createEntity("minecraft:item");
        xpDrop.x = entityMon.x;
        xpDrop.y = entityMon.y;
        xpDrop.z = entityMon.z;
        dropItem = Item.of(drop);
        dropItem.count = Math.max(1, dropItem.count + Number(tier - 2))
        xpDrop.item = dropItem
        xpDrop.spawn();
    })
}

global.handleRaidDefeat = (e) => {
    let entityMon = e.killed.entity
    if (entityMon && entityMon.persistentData && entityMon.persistentData.raidMon) {
        let pokemon = entityMon.pokemon;
        let player = e.battle.players.get(0);
        let raidMonStats = entityMon.persistentData.raidMonStats;
        let server = entityMon.getServer()
        let level = player.getLevel()
        let raidLevel = pokemon.getLevel()
        let commandStr = `execute in ${level.dimension} run pokespawnat ${entityMon.x} ${entityMon.y} ${entityMon.z} ${pokemon.getSpecies()} ability=${pokemon.getAbility().name} ${raidMonStats.variant && raidMonStats.variant.equals("") ? "" : raidMonStats.variant} level=${Number(raidMonStats.spawnedLevel)}`;
        let tier = Math.max(0, Number(raidMonStats.tier))
        if (pokemon.getSpecies() === "lunala") { 
            commandStr = `execute in ${level.dimension} run pokespawnat ${entityMon.x} ${entityMon.y} ${entityMon.z} cosmog ${raidMonStats.isShiny ? "shiny " : ""} ${raidMonStats.hasHiddenAbility ? "hiddenability " : ""} level=1`;
        }
        server.scheduleInTicks(0, () => {
            server.scheduleInTicks(60, () => {
                dropRaidItems(entityMon, raidLevel, tier)
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

    $CobblemonEvents.BATTLE_FAINTED.subscribe("normal", (e) => {
        global.handleRaidDefeat(e);
    });
});
