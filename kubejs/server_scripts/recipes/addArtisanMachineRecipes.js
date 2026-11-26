console.info("[SOCIETY] addToolRecipes.js loaded");

let basicArtisanMachineRecipe = (e, type, input, output, hours) => {
    let inputs = []
    for (let index = 0; index < input.count; index++) {
        inputs.push({ item: input.id });

    }
    e.custom({
        type: type,
        rank: 0,
        required_upgrades: [],
        chanced_results: [
            {
                chance: 1.0,
                stack: output
            }
        ],
        ingredients: inputs,
        processing_hours: hours
    })
}
let wineKegRecipe = (e, input) => {
    let inputs = []
    for (let index = 0; index < 3; index++) {
        inputs.push({ item: input.item });

    }
    e.custom({
        type: "artisan_machines:wine_keg",
        rank: 0,
        required_upgrades: [],
        chanced_results: [
            {
                chance: 1.0,
                stack: {
                    identifier: input.wine,
                    data_components_patch: {
                        "kaleidoscope_tavern:brew_level": 3
                    },
                    count: 1
                }
            }
        ],
        ingredients: inputs,
        processing_hours: 144
    })
}
let fishSmokerRecipe = (e, input, output) => {
    let inputs = [{ item: input }];

    e.custom({
        type: "artisan_machines:fish_smoker",
        rank: 0,
        required_upgrades: [],
        chanced_results: [
            {
                chance: 1.0,
                stack: {
                    identifier: output,
                    count: 1
                }
            }
        ],
        ingredients: inputs,
        processing_hours: 4
    })
    e.custom({
        type: "artisan_machines:fish_smoker",
        rank: 1,
        required_upgrades: [
            {
                item: "artisan_machines:ancient_roe"
            }
        ],
        chanced_results: [
            {
                chance: 1.0,
                stack: {
                    identifier: output,
                    count: 2
                }
            }
        ],
        ingredients: inputs,
        processing_hours: 4
    })
}

let preservesJarRecipe = (e, input) => {
    let output = [{ chance: 1.0, stack: { identifier: `society:${input.item.path}_preserves`, count: 1 } }];
    let inputs = []
    inputs.push({ item: input.item });
    e.custom({
        type: "artisan_machines:preserves_jar",
        rank: 1,
        required_upgrades: [
            {
                item: "artisan_machines:stone_hand"
            }
        ],
        chanced_results: output,
        ingredients: inputs,
        processing_hours: 72
    })
    inputs.push({ item: input.item });
    e.custom({
        type: "artisan_machines:preserves_jar",
        rank: 0,
        required_upgrades: [],
        chanced_results: output,
        ingredients: inputs,
        processing_hours: 72
    })
}
const artisanBulkGenerators = (e, crop) => {
    if (!crop.blocked) {
        if (crop.products.includes("preserves")) {
            preservesJarRecipe(e, crop)
        }
        if (crop.products.includes("wine") && crop.wine) {
            wineKegRecipe(e, crop)
        }
        if (crop.products.includes("dried")) {
            basicArtisanMachineRecipe(e, "artisan_machines:dehydrator", { id: crop.item, count: 5 }, { identifier: `society:dried_${crop.item.path}`, count: 1 }, 144)
        }
        // if (crop.products.includes("pickle")) data.values[crop.pickle ? crop.pickle : `society:pickled_${crop.item.path}`] = global.getSaleData(calculatePickleValue(baseCropValue), [])
        // if (crop.products.includes("dried")) data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = global.getSaleData(calculateDriedValue(baseCropValue), [])
    }
}
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

    [
        "kaleidoscope_tavern:wine",
        "kaleidoscope_tavern:vodka",
        "kaleidoscope_tavern:brandy",
        "kaleidoscope_tavern:carignan",
        "kaleidoscope_tavern:sakura_wine",
        "kaleidoscope_tavern:plum_wine",
        "kaleidoscope_tavern:whiskey",
        "kaleidoscope_tavern:ice_wine",
        "kaleidoscope_tavern:polaris_sweet_white",
        "kaleidoscope_tavern:honey_wine",
        "kaleidoscope_tavern:red_queen",
        "kaleidoscope_tavern:rum",
        "kaleidoscope_tavern:riesling_dry_white",
        "kaleidoscope_tavern:sunset_glow",
        "kaleidoscope_tavern:madame_shexiang",
        "kaleidoscope_tavern:sweet_berry_wine",
        "kaleidoscope_tavern:sherry",
        "kaleidoscope_tavern:luminous_bride",
        "kaleidoscope_tavern:glowflower_brew",
        "kaleidoscope_tavern:sauvignon_blanc_dry_white",
        "kaleidoscope_tavern:watermelon_juice",
        "kaleidoscope_tavern:vinegar"
    ].forEach((ingredient) => {
        e.custom({
            type: "artisan_machines:aging_cask",
            rank: 0,
            required_upgrades: [],
            chanced_results: [
                {
                    chance: 1.0,
                    stack: {
                        identifier: ingredient,
                        data_components_patch: {
                            "kaleidoscope_tavern:brew_level": 6
                        },
                        count: 1
                    }
                }
            ],
            ingredients: [
                {
                    item: ingredient
                }
            ],
            processing_hours: 240
        })
    });
    [
        // { input: "aquaculture:tin_can", output: ["3x numismatics:cog"] },
        // { input: "aquaculture:driftwood", output: ["1x meadow:fire_log"] },
        { input: "furniture:trash_bag", output: ["4x society:bouquet_bag"] },
        { input: "society:fire_quartz", output: ["16x minecraft:quartz"] },
        { input: 'starcatcher:oculi', output: ["8x minecraft:quartz"] },
        { input: 'starcatcher:mossy_boot', output: ["8x starcatcher:lush_bait"] },
        { input: 'starcatcher:boot', output: ["4x minecraft:leather"] },
        { input: 'starcatcher:fish_bones', output: ["sunrisegardening:strong_fertilizer"] },
        { input: 'plentifulponds:pond_scum', output: ["sunrisegardening:high_quality_fertilizer"] },
        { input: "atmospheric:carmine_husk", output: ["2x ribbits:toadstool"] },
        { input: "society:legendary_ink", output: ["4x supplementaries:antique_ink"] },
        { input: "hooked:redstone_hook", output: ["hooked:diamond_hook", "society:prismatic_shard"], multExempt: true },
        { input: "atmospheric:grimwood_leaves", output: ["4x atmospheric:grimwood_sapling"] },
        { input: "society:butterfly_amber", output: ["4x society:sparkstone"] },
        { input: "society:moth_pollen", output: ["2x vintagedelight:organic_mash"] },
        { input: "society:maple_syrup", output: ["4x vintagedelight:organic_mash"] },
        { input: "society:ruby", output: ["4x quark:red_corundum"] },
        { input: "society:topaz", output: ["4x quark:orange_corundum"] },
        { input: "society:fluorapatite", output: ["4x quark:violet_corundum"] },
        { input: "society:geminite", output: ["4x quark:green_corundum"] },
        { input: "society:kyanite", output: ["4x quark:indigo_corundum"] },
        { input: "society:opal", output: ["4x quark:white_corundum"] },
        { input: "society:lemon_stone", output: ["4x quark:yellow_corundum"] },
        { input: "society:ghost_crystal", output: ["4x quark:blue_corundum"] },
        { input: "society:bixbyite", output: ["4x quark:black_corundum"] },
        { input: "society:enriched_bone_meal", output: ["1x vintagedelight:organic_mash"] }, ,
        { input: "minecraft:raw_iron", output: ["2x create:crushed_raw_iron"] },
        { input: "minecraft:raw_copper", output: ["2x create:crushed_raw_copper"] },
        { input: "minecraft:raw_gold", output: ["2x create:crushed_raw_gold"] },
        { input: "create:raw_zinc", output: ["2x create:crushed_raw_zinc"] },
        { input: "oreganized:raw_lead", output: ["2x create:crushed_raw_lead"] },
        { input: "oreganized:raw_silver", output: ["2x create:crushed_raw_silver"] },
        { input: "etcetera:raw_bismuth", output: ["2x create:crushed_raw_bismuth"] },
        { input: "society:sparkpod", output: ["6x society:sparkstone"] },
    ].forEach((recipe) => {
        let outputs = []
        let doubledOutputs = []
        recipe.output.forEach((out) => {
            let itemStack = Item.of(out);
            outputs.push({ chance: 1, stack: { identifier: itemStack.id, count: itemStack.count } })
            doubledOutputs.push({ chance: 1, stack: { identifier: itemStack.id, count: itemStack.count * (recipe.multExempt ? 1 : 2) } })
        })
        e.custom({
            type: "artisan_machines:recycling_machine",
            rank: 0,
            required_upgrades: [],
            chanced_results: outputs,
            ingredients: [{ item: recipe.input }],
            processing_hours: 24
        })
        e.custom({
            type: "artisan_machines:recycling_machine",
            rank: 1,
            required_upgrades: [
                {
                    item: "artisan_machines:recycled_core"
                }
            ],
            chanced_results: doubledOutputs,
            ingredients: [{ item: recipe.input }],
            processing_hours: 24
        })
    });

    global.CROP_DEFINITIONS.forEach((crop) => artisanBulkGenerators(e, crop));
    global.FORAGE_CROPS.forEach((crop) => artisanBulkGenerators(e, crop));
    global.MUSHROOMS.forEach((crop) => {
        basicArtisanMachineRecipe(e, "artisan_machines:dehydrator", { id: crop.item, count: 5 }, { identifier: `society:dried_${crop.item == "nomansland:shelf_mushroom" ? "saddle_mushroom" : crop.item.path}`, count: 1 }, 144)
    });
    global.FISH.forEach((fish) => {
        fishSmokerRecipe(e, fish.item, `society:smoked_${global.getFishMappedItemName(fish.item)}`)
    });
});
