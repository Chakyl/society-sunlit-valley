console.info("[SOCIETY-S-COBBLEMON] addCobblemonCookingRecipes.js loaded");

ServerEvents.recipes((e) => {
    const mochiBase = (vitamin, mochi) => {
        e.custom({
            type: "farmersdelight:cooking",
            cookingtime: 2000,
            experience: 3.0,
            ingredients: [
                {
                    item: "farmersdelight:cooked_rice",
                },
                {
                    item: "golemoverhaul:honey_blob",
                },
                {
                    item: `cobblemon:${vitamin}`,
                }
            ],
            result: {
                item: `cobblemon:${mochi}_mochi`,
                count: 4
            },
        });
    }

    mochiBase("hp_up", "health");
    mochiBase("iron", "resist");
    mochiBase("protein", "muscle");
    mochiBase("carbos", "swift");
    mochiBase("calcium", "genius");
    mochiBase("zinc", "clever");

    e.custom({
        type: "farmersdelight:cooking",
        cookingtime: 2000,
        experience: 3.0,
        ingredients: [
            {
                item: "farmersdelight:cooked_rice",
            },
            {
                item: "golemoverhaul:honey_blob",
            },
            {
                item: `sunlit_cobblemon:venomshine`,
            }
        ],
        result: {
            item: `cobblemon:fresh_start_mochi`,
        },
    });


    const hyperCandyBase = (candy, mochi, increase) => {
        e.custom({
            type: "farmersdelight:cooking",
            cookingtime: 2000,
            experience: 3.0,
            ingredients: [
                {
                    item: `cobblemon:${mochi}_mochi`,
                },
                {
                    item: "cobblemon:enigma_berry",
                },
                {
                    item: "sunlit_cobblemon:mystica_branch",
                },
                {
                    item: "cobblemon:exp_candy_l",
                },
                {
                    item: "cobblemon:exp_candy_l",
                },
                {
                    item: increase ? "society:mystic_syrup" : `sunlit_cobblemon:venomshine`,
                }
            ],
            result: {
                item: `cobblemon:${candy}_candy`,
                count: increase ? 2 : 4
            },
        });
    }


    hyperCandyBase("health", "health", true);
    hyperCandyBase("tough", "resist", true);
    hyperCandyBase("mighty", "muscle", true);
    hyperCandyBase("quick", "swift", true);
    hyperCandyBase("smart", "genius", true);
    hyperCandyBase("courage", "clever", true);

    hyperCandyBase("sickly", "health");
    hyperCandyBase("brittle", "resist");
    hyperCandyBase("weak", "muscle");
    hyperCandyBase("slow", "swift");
    hyperCandyBase("numb", "genius");
    hyperCandyBase("coward", "clever");

    const poffletBase = (pofflet, catalyst, count) => {
        e.custom({
            type: "farm_and_charm:stove",
            experience: 1.2,
            ingredients: [
                {
                    "item": "bakery:sweet_dough"
                },
                {
                    item: catalyst,
                },
                {
                    item: "sunlit_cobblemon:sun_drops",
                }
            ],
            item: `sunlit_cobblemon:${pofflet}_pofflet`,
            count: count
        });
    }

    poffletBase("plain", "sunlit_cobblemon:moomoo_cheese", 1);
    poffletBase("mossy", "sunlit_cobblemon:strange_spore", 1);
    poffletBase("frosty", "society:frozen_tear", 1);
    poffletBase("deadly", "sunlit_cobblemon:venomshine", 2);
    poffletBase("deadly", "sunlit_cobblemon:spider_milk", 1);
    poffletBase("spicy", "vintagedelight:pepper_jam_mason_jar", 2);
    poffletBase("captivating", "sunlit_cobblemon:mystica_branch", 2);
    poffletBase("crystalline", "society:amethyst_chunk", 2);
    poffletBase("mana", "society:mana_fruit", 1);
})