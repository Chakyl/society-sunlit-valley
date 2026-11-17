console.info("[SOCIETY] addToolRecipes.js loaded");

ServerEvents.recipes((e) => {
    [
        { item: "society:ocean_stone", time: 3 },
        { item: "society:opal", time: 3 },
        { item: "society:pyrite", time: 3 },
        { item: "society:soapstone", time: 3 },
        { item: "society:frozen_tear", time: 1 },
        { item: "society:baryte", time: 3 },
        { item: "society:basalt_shard", time: 3 },
        { item: "society:bixbyite", time: 3 },
        { item: "society:dolomite", time: 3 },
        { item: "society:fire_quartz", time: 2 },
        { item: "society:earth_crystal", time: 1 },
        { item: "society:allanite", time: 3 },
        { item: "society:calcite_gem", time: 3 },
        { item: "society:celestine", time: 3 },
        { item: "society:granite_slate", time: 3 },
        { item: "society:jagoite", time: 3 },
        { item: "society:jamborite", time: 3 },
        { item: "society:slate", time: 3 },
        { item: "society:limestone_pebble", time: 3 },
        { item: "society:malachite", time: 3 },
        { item: "society:mudstone", time: 3 },
        { item: "society:nekoite", time: 3 },
        { item: "society:orpiment", time: 3 },
        { item: "society:petrified_slime", time: 3 },
        { item: "society:sandstone_slate", time: 3 },
        { item: "society:thunder_egg", time: 3 },
        { item: "society:aerinite", time: 3 },
        { item: "society:esperite", time: 3 },
        { item: "society:fairy_stone", time: 3 },
        { item: "society:fluorapatite", time: 3 },
        { item: "society:geminite", time: 3 },
        { item: "society:ghost_crystal", time: 3 },
        { item: "society:hematite", time: 3 },
        { item: "society:kyanite", time: 3 },
        { item: "society:lunarite", time: 3 },
        { item: "society:marble", time: 3 },
        { item: "society:fire_opal", time: 3 },
        { item: "society:helvite", time: 4 },
        { item: "society:jasper", time: 3 },
        { item: "society:lemon_stone", time: 3 },
        { item: "society:neptunite", time: 4 },
        { item: "society:pure_obsidian", time: 3 },
        { item: "society:star_shards", time: 4 },
        { item: "society:tigerseye", time: 3 },
        { item: "society:aquamarine", time: 1 },
        { item: "society:ruby", time: 2 },
        { item: "society:amethyst_chunk", time: 1 },
        { item: "society:topaz", time: 2 },
        { item: "society:jade", time: 5 },
        { item: "minecraft:emerald", time: 2 },
        { item: "minecraft:lapis_lazuli", time: 1 },
        { item: "minecraft:diamond", time: 4 },
        { item: "minecraft:amethyst_shard", time: 1 },
        { item: "minecraft:prismarine_crystals", time: 1 },
        { item: "minecraft:quartz", time: 1 },
        { item: "society:spinel", time: 6 },
    ].forEach((crystal) => {
        e.custom({
            type: "artisan_machines:crystalarium",
            rank: 0,
            required_upgrades: [],
            chanced_results: [
                { chance: 1.0, stack: { identifier: crystal.item, count: 2 } }
            ],
            ingredients: [{ item: crystal.item }],
            processing_hours: crystal.time * 24
        })
        e.custom({
            type: "artisan_machines:crystalarium",
            rank: 1,
            required_upgrades: [
                {
                item: "artisan_machines:black_opal"
            }
        ],
            chanced_results: [
                { chance: 0.1, stack: { identifier: `society:pristine_${crystal.item.split(":")[1]}`, count: 1 } },
                { chance: 1.0, stack: { identifier: crystal.item, count: 2 } }
            ],
            ingredients: [{ item: crystal.item }],
            processing_hours: crystal.time * 24
        })
    });

});
