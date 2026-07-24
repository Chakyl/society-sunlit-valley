console.info("[SOCIETY] checkArtisanMachines.js loaded");


BlockEvents.rightClicked(
    [
        "society:bait_maker",
        "society:aging_cask",
        "society:ancient_cask",
        "society:charging_rod",
        "society:crystalarium",
        "society:wine_keg",
        "society:deluxe_worm_farm",
        "society:dehydrator",
        "society:espresso_machine",
        "society:fish_smoker",
        "society:loom",
        "society:mayonnaise_machine",
        "society:preserves_jar",
        "society:seed_maker",
        "society:tapper",
        "society:recycling_machine",
        "society:cheese_press",
        "society:oil_maker",
        "society:mushroom_log",
    ],
    (e) => {
        const { player, block, hand, item, server, level } = e;
        if (hand == "OFF_HAND" || item !== "society:fairy_dust") return;
        if (block.properties.get("working").toLowerCase() === "true" && block.properties.get("mature").toLowerCase() === "false") {
            const { x, y, z } = block;
            global.handleProgress(level, block);
            server.runCommandSilent(`playsound legendarycreatures:wisp_idle block @a ${x} ${y} ${z} 0.2 1`);
            level.spawnParticles(
              "snowyspirit:glow_light",
              true,
              x,
              y + 0.5,
              z,
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              5,
              2
            );
            if (!player.isCreative()) item.shrink(1);
        }
    }
);
