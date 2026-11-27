const getLootPools = (entry) =>
    entry.pools.map((poolArrays) => ({
        rolls: {
            type: "minecraft:uniform",
            min: poolArrays.rolls[0],
            max: poolArrays.rolls[1]
        },
        entries: poolArrays.entries.map((itemDef) => {
            const entryFunction = Array.isArray(itemDef.count)
                ? {
                    function: "minecraft:set_count",
                    count: {
                        type: "minecraft:uniform",
                        min: itemDef.count[0],
                        max: itemDef.count[1]
                    }
                }
                : {
                    function: "minecraft:set_count",
                    count: itemDef.count
                };

            return {
                type: "minecraft:item",
                name: itemDef.item,
                weight: itemDef.weight,
                functions: [entryFunction]
            };
        })
    }));

const blockLootTables = [
    {
        block: 'society:wooden_fishing_crate',
        pools: [
            {
                rolls: [1, 3],
                entries:
                    [
                        { item: "minecraft:slime_ball", weight: 8, count: [1, 2] },
                        { item: "minecraft:stick", weight: 14, count: [1, 2] },
                        { item: "starcatcher:boot", weight: 10, count: 1 },
                        { item: "minecraft:bone", weight: 12, count: 1 },
                        { item: "starcatcher:fish_bones", weight: 10, count: 1 },
                        { item: "minecraft:rotten_flesh", weight: 14, count: [1, 2] },
                        { item: "minecraft:leather", weight: 14, count: [1, 2] },
                        { item: "meadow:firewood", weight: 12, count: [1, 2] },
                        { item: "furniture:trash_bag", weight: 10, count: [1, 2] },
                        { item: "society:crabapple", weight: 10, count: [2, 4] },
                        { item: "starcatcher_delight:suspicious_taiyaki", weight: 4, count: [1, 2] },
                        { item: "starcatcher:lush_bait", weight: 10, count: [4, 8] },
                        { item: "starcatcher:cherry_bait", weight: 12, count: [4, 8] },
                        { item: "starcatcher:almighty_worm", weight: 5, count: [2, 4] },
                        { item: "society:legendary_ink", weight: 4, count: 1 },
                        { item: "society:ribbit_drum", weight: 2, count: 1 }
                    ]
            },
            {
                rolls: [0, 1],
                entries: [
                    { item: "meadow:firewood", weight: 18, count: [1, 2] },
                    { item: "atmospheric:dry_laurel_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:aspen_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:green_aspen_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:kousa_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:rosewood_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:morado_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:yucca_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:laurel_sapling", weight: 10, count: [1, 4] },
                    { item: "atmospheric:grimwood_sapling", weight: 6, count: [4, 8] }
                ]
            }
        ]
    },
    {
        block: 'society:mossy_fishing_crate',
        pools: [
            {
                rolls: [1, 3],
                entries: [
                    { item: "starcatcher:mossy_boot", weight: 15, count: 1 },
                    { item: "starcatcher:oculi", weight: 15, count: 1 },
                    { item: "minecraft:moss_block", weight: 13, count: [1, 5] },
                    { item: "starcatcher:fish_bones", weight: 14, count: 1 },
                    { item: "society:hardwood", weight: 12, count: [1, 2] },
                    { item: "society:furniture_box", weight: 12, count: [1, 2] },
                    { item: "starcatcher:lush_bait", weight: 10, count: [8, 16] },
                    { item: "starcatcher:almighty_worm", weight: 5, count: [2, 4] },
                    { item: "etcetera:cotton_seeds", weight: 3, count: [1, 2] },
                    { item: "herbalbrews:tea_blossom", weight: 3, count: [1, 2] },
                    { item: "starcatcher_delight:honey_taiyaki", weight: 2, count: [1, 2] },
                    { item: "society:aquamarine", weight: 2, count: [1, 2] }
                ]
            },
            {
                rolls: [0, 1],
                entries: [
                    { item: "numismatics:crown", weight: 12, count: [1, 3] },
                    { item: "minecraft:golden_apple", weight: 10, count: 1 },
                    { item: "society:froggy_helm", weight: 6, count: 1 },
                    { item: "society:mossberry", weight: 6, count: [1, 4] },
                    { item: "society:wet_weekly", weight: 4, count: 1 },
                    { item: "starcatcher:pearl", weight: 4, count: [1, 2] },
                    { item: "unusualfishmod:mossthorn_bucket", weight: 1, count: 1 },
                    { item: "starcatcher:mossy_hook", weight: 1, count: 1 }
                ]
            }
        ]
    }
]
for (const entry of blockLootTables) {
    let [namespace, path] = entry.block.split(':');
    JsonIO.write(`kubejs/data/${namespace}/loot_table/blocks/${path}.json`, {
        type: "minecraft:block",
        pools: getLootPools(entry),
    });
}

const generalLootTables = [
    {
        type: "minecraft:fishing",
        namespace: 'society',
        path: "gameplay/fishing/common_fishing",
        pools: [
            {
                rolls: [1, 1],
                entries:
                    [
                        { item: "society:furniture_box", weight: 4, count: [1, 2] },
                        { item: "society:wooden_fishing_crate", weight: 6, count: 1 },
                        { item: 'minecraft:nautilus_shell', weight: 4, count: [1, 2] },
                        { item: "society:aquamarine", weight: 2, count: 1 },
                    ]
            }
        ]
    },
    {
        type: "minecraft:fishing",
        namespace: 'society',
        path: "gameplay/fishing/uncommon_fishing",
        pools: [
            {
                rolls: [1, 1],
                entries:
                    [
                        { item: "society:furniture_box", weight: 4, count: [1, 2] },
                        { item: "society:mossy_fishing_crate", weight: 7, count: 1 },
                        { item: "society:wooden_fishing_crate", weight: 3, count: 1 },
                        { item: 'minecraft:nautilus_shell', weight: 4, count: [1, 2] },
                        { item: "society:aquamarine", weight: 2, count: 1 },
                    ]
            }
        ]
    }
]
for (const entry of generalLootTables) {
    JsonIO.write(`kubejs/data/${entry.namespace}/loot_table/${entry.path}.json`, {
        type: entry.type,
        pools: getLootPools(entry)
    });
}
