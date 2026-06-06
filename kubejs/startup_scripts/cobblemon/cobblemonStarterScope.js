console.info("[SOCIETY-S-COBBLEMON] cobblemonStarterScope.js loaded");
global.giveScope = (e) => { 
    console.log(e)
    e.player.give("sunlit_cobblemon:silph_scope")
}

StartupEvents.postInit((init) => {
    let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents");

    $CobblemonEvents.STARTER_CHOSEN.subscribe("normal", (e) => {
        global.giveScope(e);
    });
});
