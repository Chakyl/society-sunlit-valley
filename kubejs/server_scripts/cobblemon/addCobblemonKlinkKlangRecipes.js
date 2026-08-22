console.info("[SOCIETY-S-COBBLEMON] addCobblemonKlinkKlangRecipes.js loaded");

ServerEvents.recipes((e) => {
    [
        { ball: "sword", colors: ["blue", "blue", "yellow"], extraItem: "minecraft:obsidian" },
        { ball: "shield", colors: ["red", "yellow", "yellow"], extraItem: "minecraft:shield" },
        { ball: "skull", colors: ["black", "black", "white"], extraItem: "society:omni_geode" },
        { ball: "mana", colors: ["blue", "yellow", "blue"], extraItem: "society:mana_fruit" },
        { ball: "prismatic", colors: ["red", "green", "blue"], extraItem: "society:prismatic_shard" }
    ].forEach((definition) => {
        let { ball, colors, extraItem } = definition;
        e.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "item": "oreganized:silver_sheet"
                },
                {
                    "item": `cobblemon:${ball}_ball`
                }
            ],
            "results": [
                {
                    "item": `sunlit_cobblemon:${ball}_ball_stencil`
                }
            ]
        })
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": "create_klinks_n_klangs:blank_ball"
                },
                {
                    "item": `sunlit_cobblemon:${ball}_ball_stencil`
                }
            ],
            "keepHeldItem": true,
            "results": [
                {
                    "item": `sunlit_cobblemon:unpainted_${ball}_ball`
                }
            ]
        })
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": `sunlit_cobblemon:unpainted_${ball}_ball`
            },
            "transitionalItem": {
                "item": `sunlit_cobblemon:unfinished_${ball}_ball`
            },
            "sequence": [
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        },
                        {
                            "amount": 250,
                            "fluid": `create_klinks_n_klangs:${colors[0]}_paint`,
                            "nbt": {}
                        }
                    ],
                    "results": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        },
                        {
                            "amount": 250,
                            "fluid": `create_klinks_n_klangs:${colors[1]}_paint`,
                            "nbt": {}
                        }
                    ],
                    "results": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        },
                        {
                            "amount": 250,
                            "fluid": `create_klinks_n_klangs:${colors[2]}_paint`,
                            "nbt": {}
                        }
                    ],
                    "results": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        },
                        {
                            "item": extraItem
                        }
                    ],
                    "results": [
                        {
                            "item": `sunlit_cobblemon:unfinished_${ball}_ball`
                        }
                    ]
                }
            ],
            "results": [
                {
                    "item": `cobblemon:${ball}_ball`
                }
            ],
            "loops": 1
        })
    });
});
