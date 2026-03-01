
global.handleRaidPokemonBattle = (e) => {
    const battle = e.battle;
    console.log(battle)
    console.log("starting battle")
    battle.getActors().forEach((actor) => {
        actor.getPokemonList().forEach((battlePokemon) => {
            if (battlePokemon.entity && battlePokemon.entity.persistentData && battlePokemon.entity.persistentData.raidMon) {
                battle.getPlayers().forEach(player => {
                    player.tell(Text.red(`${battlePokemon.getName()} is radiating a powerful aura!`));
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
