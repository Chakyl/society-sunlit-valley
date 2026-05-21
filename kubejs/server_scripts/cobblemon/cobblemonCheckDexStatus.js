console.info("[SOCIETY] dayCounterTick.js loaded");

const $GeneralUtils = Java.loadClass("io.github.chakyl.sunlitcobblemon.util.GeneralUtils");

PlayerEvents.tick((e) => {
    const { player, level, server } = e;
    let achievableDex = 950; // This is a rough estimate of implemented pokemon

    if (player.age % 600 == 0) { 
        let dexPercent = $GeneralUtils.getDexCount(player) / achievableDex;
        let questIds = ["5D2FB5338784FD0B", "37D5C48E1F91D032", "5955FF0072B773DA", "44178BB1F85EFAD4", "5A947F33B5B3E07F", "3826487E2543A33B", "3004C2F56F50709E", "1920C4E333D8453E", "6356A478D02B423D", "7EC15D896B795460"];
        for (let i = 1; i <= 10; i++) {
            if (dexPercent >= 10 * i) {
                server.runCommandSilent(`ftbquests change_progress ${player.username} complete ${questIds[i - 1]}`)
            }
        }
    }
});
