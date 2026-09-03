console.info("[SOCIETY] registerItems.js loaded");

StartupEvents.registry("item", (e) => {
    /**
     *  Skill Books
     */
    [
        "book_of_stars",
        "yard_work_yearly",
        "husbandry_hourly",
        "mining_monthly",
        "wet_weekly",
        "combat_quarterly",
        "alias_moss",
        "animal_fancy",
        "banana_karenina",
        "brine_and_punishment",
        "bluegill_meridian",
        "bullfish_jobs",
        "canadian_and_famous",
        "first_aid_guide",
        "hitting_hard_and_soft",
        "intro_to_algorithms",
        "no_name_for_the_sheep",
        "paradise_crop",
        "pond_house_five",
        "the_quality_of_the_earth",
        "the_red_and_the_black",
        "slime_contain_protect",
        "slouching_towards_artistry",
        "the_spark_also_rises",
        "universal_methods_of_farming",
        "wuthering_logs",
        "women_who_run_with_the_plushies",
        "the_metamorphosize",
    ].forEach((item) => {
        e.create(`society:${item}`).texture(`society:item/books/${item}`).rarity("rare");
    });
    e.create("society:debt_caverns").displayName("Debt: The First 5000 Caverns").texture("society:item/books/debt_caverns").rarity("rare");
    e.create("society:frogs_bounty_bazaar").displayName("Frog's Bounty Bazaar").texture("society:item/books/frogs_bounty_bazaar").rarity("rare");
    e.create("society:phenomenology_of_treasure").displayName("The Phenomenology of Treasure").texture("society:item/books/phenomenology_of_treasure").rarity("rare");

    /**
     *  Artifacts
     */

    global.artifacts.forEach((artifact) => {
        const { item } = artifact;
        if (
            item !== "society:princess_hairbrush" &&
            item !== "society:perfect_cherry"
        ) {
            e.create(item).texture(`society:item/artifacts/${item.path}`).rarity("uncommon");
        }
    });
    e.create("society:perfect_cherry").texture("society:item/artifacts/perfect_cherry")
        .food((food) => {
            food.nutrition(1);
            food.saturation(1);
            food.eaten((e) => {
                const { player, server, level } = e;
                if (!level.isClientSide()) {
                    if (Math.random() < 0.2) {
                        server.runCommandSilent(
                            `execute in ${level.dimension} run summon lightning_bolt ${player.x} ${player.y} ${player.z}`
                        );
                    }
                    if (Math.random() < 0.2) {
                        server.runCommandSilent(
                            `effect give ${player.username} minecraft:poison 100 1`
                        );
                    }
                    if (Math.random() < 0.2) {
                        server.runCommandSilent(
                            `effect give ${player.username} minecraft:wither 100 1`
                        );
                    }
                    if (Math.random() < 0.2) {
                        server.runCommandSilent(
                            `effect give ${player.username} legendarycreatures:convulsion 100 1`
                        );
                    }
                    if (Math.random() < 0.2) {
                        server.runCommandSilent(
                            `effect give ${player.username} minecraft:bad_omen 100 1`
                        );
                    }

                    if (Math.random() < 0.4) {
                        player.attack(10);
                        player.give("society:perfect_cherry");
                    }
                }
            });
        }).rarity("uncommon");
});
