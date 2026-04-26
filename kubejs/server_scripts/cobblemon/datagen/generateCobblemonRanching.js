
const runRanchingDataGen = false;

if (runRanchingDataGen) {
    let cobbleSheepMilk = { sm: "society:sheep_milk", lg: "society:large_sheep_milk" };

    let ranchingDef = [
        {
            pokemon: "pidgey",
            forages: [
                {
                    item: "farmersdelight:straw",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "pidgeotto",
            forages: [
                {
                    item: "minecraft:brown_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "farmersdelight:straw",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "pidgeot",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:swift_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "spearow",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: 'unimplemented_items:dry_root',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "fearow",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "windswept:elder_feather",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: 'unimplemented_items:dry_root',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "hoothoot",
            forages: [
                {
                    item: "minecraft:egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "farmersdelight:straw",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "noctowl",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:clever_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                },
                {
                    item: 'vintagedelight:overnight_oats',
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "taillow",
            forages: [
                {
                    item: "minecraft:blue_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "farmersdelight:straw",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "swellow",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:health_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "wingull",
            forages: [
                {
                    item: 'minecraft:cod',
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "pelipper",
            forages: [
                {
                    item: 'minecraft:cod',
                    count: 8,
                    has_quality: true,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:resist_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "starly",
            forages: [
                {
                    item: "minecraft:egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "staravia",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "staraptor",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "windswept:elder_feather",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "pidove",
            forages: [
                {
                    item: "minecraft:wheat",
                    count: 1,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: 'society:mossberry',
                    count: 1,
                    chance: 0.3,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "tranquill",
            forages: [
                {
                    item: "minecraft:wheat",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
            ],
        },
        {
            pokemon: "unfezant",
            forages: [
                {
                    item: "minecraft:wheat",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:genius_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "fletchling",
            forages: [
                {
                    item: "minecraft:chicken",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "fletchinder",
            forages: [
                {
                    item: "minecraft:chicken",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "talonflame",
            forages: [
                {
                    item: "minecraft:chicken",
                    count: 6,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "species:wraptor_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:swift_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "pikipek",
            forages: [
                {
                    item: 'farmersdelight:tree_bark',
                    count: 8,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'society:sap',
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "trumbeak",
            forages: [
                {
                    item: "minecraft:brown_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: 'farmersdelight:tree_bark',
                    count: 8,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'society:sap',
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "toucannon",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:muscle_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                },
                {
                    item: "supplementaries:cannonball",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "rookidee",
            forages: [
                {
                    item: 'twigs:twig',
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "corvisquire",
            forages: [
                {
                    item: "minecraft:blue_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "corviknight",
            forages: [
                {
                    item: "oreganized:lead_sheet",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:resist_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "wattrel",
            forages: [
                {
                    item: 'unusualfishmod:cooked_unusual_fillet',
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "kilowattrel",
            forages: [
                {
                    item: 'unusualfishmod:cooked_unusual_fillet',
                    count: 3,
                    has_quality: true,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:genius_feather",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "morelull",
            forages: [
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.3,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 6
                }
            ]
        },
        {
            pokemon: "shiinotic",
            forages: [
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.6,
                    min_hearts: 4
                },
                {
                    item: "society:cordycep",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }

            ]
        },
        {
            pokemon: "paras",
            forages: [
                {
                    item: 'sunlit_cobblemon:paras_mushroom',
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:big_root",
                    count: 1,
                    chance: 0.65,
                    min_hearts: 8
                }

            ]
        },
        {
            pokemon: "parasect",
            forages: [
                {
                    item: 'sunlit_cobblemon:paras_mushroom',
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }

            ]
        },
        {
            pokemon: "ekans",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }
            ]
        },
        {
            pokemon: "arbok",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 2,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }
            ]
        },
        {
            pokemon: "skorupi",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }

            ]
        },
        {
            pokemon: "drapion",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 2,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }
            ]
        },
        {
            pokemon: "ekans",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "arbok",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "skorupi",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "drapion",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "nihilego",
            forages: [
                {
                    item: 'society:spinel',
                    count: 1,
                    chance: 0.46,
                    min_hearts: 6
                },
                {
                    item: 'minecraft:echo_shard',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 7
                }
            ]
        },
        {
            pokemon: "nihilego",
            milk: { sm: "sunlit_cobblemon:poison_drop", lg: "sunlit_cobblemon:venomshine" },
        },
        {
            pokemon: "poipole",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.76,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.76,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.76,
                    has_quality: true,
                    min_hearts: 8
                }
            ]
        },
        {
            pokemon: "poipole",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "naganadel",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 12,
                    chance: 0.66,
                    has_quality: true,
                    min_hearts: 6
                }
            ]
        },
        {
            pokemon: "naganadel",
            milk: { sm: "sunlit_cobblemon:venomshine" },
        },
        {
            pokemon: "nidoranf",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.46,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:berry_capsule',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 7
                }
            ]
        },
        {
            pokemon: "nidoranm",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.41,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:berry_capsule',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 7
                }
            ]
        },
        {
            pokemon: "varoom",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.11,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: 'society:rubber',
                    count: 2,
                    chance: 1,
                    min_hearts: 2
                }
            ]
        },
        {
            pokemon: "varoom",
            milk: { sm: "society:oil" },
        },
        {
            pokemon: "revavroom",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.21,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: 'society:rubber',
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: 'society:wheel_of_adaptation',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ]
        },
        {
            pokemon: "revavroom",
            milk: { sm: "society:oil" },
        },
        {
            pokemon: "nidorina",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }
            ]
        },
        {
            pokemon: "nidoqueen",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 2,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: 'society:earth_crystal',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ]
        },
        {
            pokemon: "nidorino",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 1,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                }
            ]
        },
        {
            pokemon: "nidoking",
            forages: [
                {
                    item: 'sunlit_cobblemon:poison_drop',
                    count: 2,
                    chance: 0.6,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: 'cobblemon:poison_gem',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ]
        },
        {
            pokemon: "smeargle",
            forages: [
                {
                    item: "minecraft:painting",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:red_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 1
                },
                {
                    item: "society:orange_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 2
                },
                {
                    item: "society:yellow_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "society:lime_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4
                },
                {
                    item: "society:green_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4
                },
                {
                    item: "society:blue_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                },
                {
                    item: "society:cyan_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 6
                },
                {
                    item: "society:light_blue_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 6
                },
                {
                    item: "society:pink_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 7
                },
                {
                    item: "society:magenta_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 7
                },
                {
                    item: "society:purple_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 8
                },
                {
                    item: "society:white_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 8
                },
                {
                    item: "society:light_gray_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 9
                },
                {
                    item: "society:gray_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 9
                },
                {
                    item: "society:black_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                },
                {
                    item: "society:brown_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "corsola",
            forages: [
                {
                    item: "crabbersdelight:coral_fragments",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "diglett",
            forages: [
                {
                    item: "society:geode",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 2
                },
                {
                    item: "minecraft:raw_copper",
                    count: 1,
                    chance: 0.75,
                    min_hearts: 4
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "dugtrio",
            forages: [
                {
                    item: "society:geode",
                    count: 3,
                    chance: 0.35,
                    min_hearts: 4
                },
                {
                    item: "minecraft:raw_copper",
                    count: 3,
                    chance: 0.75,
                    min_hearts: 4
                },
                {
                    item: "society:earth_crystal",
                    count: 3,
                    chance: 0.25,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "diglett",
            form: "alolan",
            forages: [
                {
                    item: "society:magma_geode",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 2
                },
                {
                    item: "minecraft:quartz",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 4
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "dugtrio",
            form: "alolan",
            forages: [
                {
                    item: "society:magma_geode",
                    count: 3,
                    chance: 0.35,
                    min_hearts: 4
                },
                {
                    item: "minecraft:quartz",
                    count: 12,
                    chance: 0.75,
                    min_hearts: 4
                },
                {
                    item: "society:earth_crystal",
                    count: 3,
                    chance: 0.25,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "ferroseed",
            forages: [
                {
                    item: "minecraft:moss_block",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:moss_block",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "minecraft:moss_block",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "create:crushed_raw_iron",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:mossberry',
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "ferrothorn",
            forages: [
                {
                    item: "minecraft:moss_block",
                    count: 3,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:moss_block",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "minecraft:moss_block",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "create:crushed_raw_iron",
                    count: 4,
                    chance: 0.8,
                    min_hearts: 6
                },
                {
                    item: 'society:mossberry',
                    count: 3,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "geodude",
            forages: [
                {
                    item: "society:geode",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:geode",
                    count: 2,
                    chance: 0.3,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "graveler",
            forages: [
                {
                    item: "society:geode",
                    count: 2,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:geode",
                    count: 4,
                    chance: 0.45,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "golem",
            forages: [
                {
                    item: "society:geode",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:omni_geode",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "komala",
            forages: [
                {
                    item: "society:tanuki_leaf",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "torkoal",
            forages: [
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'minecraft:turtle_egg',
                    count: 2,
                    chance: 0.3,
                    min_hearts: 5
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "society:nether_jelly",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "turtonator",
            forages: [
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'minecraft:turtle_egg',
                    count: 2,
                    chance: 0.3,
                    min_hearts: 5
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'society:starshell_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'society:smoked_magmacubefish',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "tirtouga",
            forages: [
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'minecraft:scute',
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "carracosta",
            forages: [
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'minecraft:turtle_egg',
                    count: 2,
                    chance: 0.3,
                    min_hearts: 5
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'crittersandcompanions:clam',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "chewtle",
            forages: [
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'minecraft:scute',
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "drednaw",
            forages: [
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'minecraft:turtle_egg',
                    count: 2,
                    chance: 0.3,
                    min_hearts: 5
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:arrau_turtle_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "unusualfishmod:ripper_tooth",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "goldeen",
            forages: [
                {
                    item: 'society:goldfish_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:goldfish_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:goldfish_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:goldfish_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "seaking",
            forages: [
                {
                    item: 'society:goldfish_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:goldfish_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:goldfish_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:goldfish_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'cobblemon:water_gem',
                    count: 4,
                    chance: 0.67,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "corphish",
            forages: [
                {
                    item: 'society:clawster_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:clawster_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:clawster_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:clawster_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "crawdaunt",
            forages: [
                {
                    item: 'society:clawster_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:clawster_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:clawster_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:clawster_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "relicanth",
            forages: [
                {
                    item: 'society:soulsucker_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:soulsucker_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:soulsucker_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:soulsucker_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "finneon",
            forages: [
                {
                    item: 'society:eyelash_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:eyelash_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:eyelash_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:eyelash_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "lumineon",
            forages: [
                {
                    item: 'society:eyelash_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: 'society:eyelash_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'society:eyelash_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: 'society:eyelash_roe',
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "basculin",
            forages: [
                {
                    item: 'society:smallmouth_bass_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "basculegion",
            forages: [
                {
                    item: 'society:smallmouth_bass_roe',
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'betterarcheology:soul_totem',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "luvdisc",
            forages: [
                {
                    item: 'society:spindlefish_roe',
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:spindlefish_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:spindlefish_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:spindlefish_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "alomomola",
            forages: [
                {
                    item: 'society:spindlefish_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:spindlefish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:spindlefish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:spindlefish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "feebas",
            forages: [
                {
                    item: 'society:smallmouth_bass_roe',
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:smallmouth_bass_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "milotic",
            forages: [
                {
                    item: 'cobblemon:prism_scale',
                    count: 1,
                    chance: 0.52,
                    min_hearts: 1
                },
                {
                    item: "society:sunlit_crystal",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "mimikyu",
            forages: [
                {
                    item: 'society:plushie_capsule',
                    count: 1,
                    chance: 0.7,
                    min_hearts: 1
                },
                {
                    item: 'botania:manaweave_cloth',
                    count: 1,
                    chance: 0.27,
                    min_hearts: 8
                },
                {
                    item: "society:sunlit_crystal",
                    count: 1,
                    chance: 0.02,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "qwilfish",
            forages: [
                {
                    item: "society:pufferfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:pufferfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:pufferfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:pufferfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "qwilfish",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "magikarp",
            forages: [
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:carp_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "magikarp",
            milk: { sm: "herbalbrews:water_cup" },
        },
        {
            pokemon: "carvanha",
            forages: [
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:piranha_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cubone",
            forages: [
                {
                    item: "minecraft:bone",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                },
                {
                    item: "betterarcheology:artifact_shards",
                    count: 3,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "cubone",
            form: "alolabias",
            forages: [
                {
                    item: "minecraft:bone",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                },
                {
                    item: "betterarcheology:artifact_shards",
                    count: 3,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "marowak",
            forages: [
                {
                    item: "betterarcheology:artifact_shards",
                    count: 3,
                    chance: 0.45,
                    min_hearts: 5
                },
                {
                    item: "minecraft:skeleton_skull",
                    count: 1,
                    chance: 0.08,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "marowak",
            form: "alolan",
            forages: [
                {
                    item: "betterarcheology:artifact_shards",
                    count: 3,
                    chance: 0.45,
                    min_hearts: 5
                },
                {
                    item: "minecraft:wither_skeleton_skull",
                    count: 1,
                    chance: 0.08,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "trevenant",
            forages: [
                {
                    item: "society:pine_tar",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "mysticaloaktree:wise_oak",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "nacli",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "naclstack",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 8,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "garganacl",
            forages: [
                {
                    item: "meadow:alpine_salt",
                    count: 16,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "vintagedelight:salt_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "dachsbun",
            forages: [
                {
                    item: "bakery:bun",
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "bakery:bundt_cake",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "bakery:jam_roll",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "eiscue",
            forages: [
                {
                    item: "society:penguin_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 0.05,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cryogonal",
            forages: [
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "sandygast",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "palossand",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:sand",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "delibird",
            forages: [
                {
                    item: "society:furniture_box",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:coal",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "ironbundle",
            forages: [
                {
                    item: "society:furniture_box",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "silicobra",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "sandaconda",
            forages: [
                {
                    item: "minecraft:sand",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:sandstone_slate",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "bergmite",
            forages: [
                {
                    item: "minecraft:ice",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "avalugg",
            forages: [
                {
                    item: "minecraft:ice",
                    count: 64,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "avalugg",
            form: "hisuian",
            forages: [
                {
                    item: "minecraft:ice",
                    count: 16,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:gravel",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "cacnea",
            forages: [
                {
                    item: "atmospheric:barrel_cactus",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "cacturne",
            forages: [
                {
                    item: "atmospheric:barrel_cactus",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "moreminecarts:glass_spines",
                    count: 8,
                    chance: 0.25,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "aron",
            forages: [
                {
                    item: "minecraft:iron_ingot",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "lairon",
            forages: [
                {
                    item: "minecraft:iron_ingot",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "aggron",
            forages: [
                {
                    item: "minecraft:iron_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "aron",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "lairon",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "aggron",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "kabuto",
            forages: [
                {
                    item: 'minecraft:armadillo_scute',
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: 'herbalbrews:coffee_beans',
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: 'pamhc2trees:cinnamonitem',
                    count: 1,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "kabutops",
            forages: [
                {
                    item: 'minecraft:armadillo_scute',
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: 'herbalbrews:ground_coffee',
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: 'society:ground_cinnamon',
                    count: 4,
                    chance: 0.73,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "aerodactyl",
            forages: [
                {
                    item: 'cobblemon:hard_stone',
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: 'society:thunder_egg',
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "omanyte",
            forages: [
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "garbodor",
            forages: [
                {
                    item: "furniture:trash_bag",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:scavenged_food_bag",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "omastar",
            forages: [
                {
                    item: "crabbersdelight:raw_squid_tentacles",
                    count: 4,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
            ],
        },
        {
            pokemon: "litwick",
            forages: [
                {
                    item: "species:wicked_wax",
                    count: 1,
                    chance: 0.66,
                    min_hearts: 5
                },
                {
                    item: "quark:soul_bead",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 5
                },
                {
                    item: "species:wicked_candle",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "lampent",
            forages: [
                {
                    item: "society:oil",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "quark:soul_bead",
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "species:broken_links",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "chandelure",
            forages: [
                {
                    item: "society:truffle_oil",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "quark:soul_bead",
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "species:broken_links",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "roggenrola",
            forages: [
                {
                    item: "society:geode",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 1
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 5
                },
                {
                    item: "botania:livingrock",
                    count: 1,
                    chance: 1,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "boldore",
            forages: [
                {
                    item: "society:geode",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 1
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 5
                },
                {
                    item: "botania:livingrock",
                    count: 2,
                    chance: 1,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "gigalith",
            forages: [
                {
                    item: "society:magma_geode",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 1
                },
                {
                    item: "society:fire_quartz",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 5
                },
                {
                    item: "botania:livingrock",
                    count: 4,
                    chance: 1,
                    min_hearts: 7
                },
                {
                    item: "cobblemon:kings_rock",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "carbink",
            forages: [
                {
                    item: "minecraft:diamond",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "quark:diamond_heart",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "sableye",
            forages: [
                {
                    item: "minecraft:diamond",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4
                },
                {
                    item: "society:aquamarine",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4
                },
                {
                    item: "society:ruby",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 8
                },
                {
                    item: "society:jade",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "glimmet",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.05,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:amethyst_shard",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:amethyst_chunk",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "glimmora",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:amethyst_shard",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:amethyst_chunk",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "slugma",
            forages: [
                {
                    item: "autumnity:snail_goo",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "slugma",
            milk: { sm: "minecraft:magma_cream", lg: "society:nether_jelly" },
        },
        {
            pokemon: "magcargo",
            forages: [
                {
                    item: "autumnity:snail_goo",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 4
                },
                {
                    item: "autumnity:snail_shell_block",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "magcargo",
            milk: { sm: "minecraft:magma_cream", lg: "society:nether_jelly" },
        },
        {
            pokemon: "vulpix",
            forages: [
                {
                    item: "minecraft:sweet_berries",
                    count: 6,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:fire_quartz",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "ninetales",
            forages: [
                {
                    item: "minecraft:sweet_berries",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:fire_gem",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "vulpix",
            form: "alolan",
            forages: [
                {
                    item: 'windswept:wild_berries',
                    count: 6,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:frozen_tear",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "ninetales",
            form: "alolan",
            forages: [
                {
                    item: 'windswept:wild_berries',
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:ice_gem",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "bounsweet",
            forages: [
                {
                    item: "vintagedelight:gearo_berry",
                    count: 8,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "vintagedelight:gearo_berry_mason_jar",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "exeggutor",
            forages: [
                {
                    item: "beachparty:coconut",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:star_coquito",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "exeggutor",
            form: "alolan",
            forages: [
                {
                    item: "beachparty:coconut",
                    count: 3,
                    chance: 0.9,
                    min_hearts: 3
                },
                {
                    item: "beachparty:coconut",
                    count: 3,
                    chance: 0.9,
                    min_hearts: 6
                },
                {
                    item: "society:star_coquito",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "stantler",
            forages: [
                {
                    item: 'society:dried_foul_berries',
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'society:black_opal',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "wyrdeer",
            forages: [
                {
                    item: 'society:dried_glow_berries',
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                },
                {
                    item: 'society:black_opal',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "deerling",
            forages: [
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "sawsbuck",
            forages: [
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:salmonberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
                {
                    item: 'sunlit_cobblemon:mystica_branch',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "deerling",
            form: "summer",
            forages: [
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "sawsbuck",
            form: "summer",
            forages: [
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:boysenberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
                {
                    item: 'atmospheric:yucca_branch',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "deerling",
            form: "autumn",
            forages: [
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "sawsbuck",
            form: "autumn",
            forages: [
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:cranberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
                {
                    item: 'society:mossberry',
                    count: 4,
                    chance: 0.35,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "deerling",
            form: "winter",
            forages: [
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "sawsbuck",
            form: "winter",
            forages: [
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: 'society:crystalberry',
                    count: 4,
                    chance: 1,
                    min_hearts: 9,
                    has_quality: true
                },
                {
                    item: 'windswept:frozen_branch',
                    count: 1,
                    chance: 0.17,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "wiglett",
            forages: [
                {
                    item: 'beachparty:seashell',
                    count: 3,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'aquaculture:box',
                    count: 1,
                    chance: 0.83,
                    min_hearts: 6
                },
                {
                    item: 'aquaculture:lockbox',
                    count: 1,
                    chance: 0.23,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "wugtrio",
            forages: [
                {
                    item: 'beachparty:seashell',
                    count: 1,
                    chance: 1,
                    min_hearts: 3,
                    has_quality: true
                },
                {
                    item: 'aquaculture:lockbox',
                    count: 1,
                    chance: 0.83,
                    min_hearts: 6
                },
                {
                    item: 'aquaculture:treasure_chest',
                    count: 1,
                    chance: 0.13,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "dhelmise",
            forages: [
                {
                    item: 'betterarcheology:rotten_log',
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'whimsy_deco:ship_helm',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 6,
                },
                {
                    item: 'aquaculture:treasure_chest',
                    count: 1,
                    chance: 0.23,
                    min_hearts: 6,
                },
                {
                    item: 'society:treasure_totem',
                    count: 1,
                    chance: 0.13,
                    min_hearts: 10,
                },
            ],
        },
        {
            pokemon: "lechonk",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "oinkologne",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "spoink",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "grumpig",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "swinub",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 3,
                    has_quality: true
                },
            ],
        },
        {
            pokemon: "piloswine",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 4,
                    has_quality: true
                },
                {
                    item: "species:frozen_hair",
                    count: 4,
                    chance: 0.35,
                    min_hearts: 7,
                }
            ],
        },
        {
            pokemon: "mamoswine",
            forages: [
                {
                    item: "society:truffle",
                    count: 1,
                    chance: 1,
                    min_hearts: 6,
                    has_quality: true
                },
                {
                    item: "species:frozen_hair",
                    count: 4,
                    chance: 0.45,
                    min_hearts: 7,
                }
            ],
        },
        {
            pokemon: "bramblin",
            forages: [
                {
                    item: 'atmospheric:yucca_fruit',
                    count: 3,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: 'botania:livingwood_twig',
                    count: 1,
                    chance: 0.35,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "brambleghast",
            forages: [
                {
                    item: 'atmospheric:yucca_fruit',
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 7
                },
                {
                    item: 'botania:livingwood_log',
                    count: 4,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "ducklett",
            forages: [
                {
                    item: "untitledduckmod:duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:large_duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "swanna",
            forages: [
                {
                    item: "untitledduckmod:goose_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "society:large_goose_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "psyduck",
            forages: [
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "untitledduckmod:duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "golduck",
            forages: [
                {
                    item: "untitledduckmod:duck_feather",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:large_duck_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "shellder",
            forages: [
                {
                    item: "twigs:roseate_seashell",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 3
                },
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cloyster",
            forages: [
                {
                    item: "twigs:roseate_seashell",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 3
                },
                {
                    item: "minecraft:nautilus_shell",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 8
                },
                {
                    item: "crabbersdelight:pearl",
                    count: 1,
                    chance: 1,
                    min_hearts: 9
                },
            ],
        },
        {
            pokemon: "clamperl",
            forages: [
                {
                    item: "crabbersdelight:pearl",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:sunlit_pearl",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dwebble",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:bug_gem",
                    count: 1,
                    chance: 0.7,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:crab_claw',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "crustle",
            forages: [
                {
                    item: "atmospheric:crustose",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:bug_gem",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:crab_claw',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "crabrawler",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:crab_trap_bait',
                    count: 4,
                    chance: 0.93,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "crabominable",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:deluxe_crab_trap_bait',
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "klawf",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:crab_claw',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "klawf",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: 'crabbersdelight:crab_claw',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "krabby",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "quark:crab_leg",
                    count: 1,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "kingler",
            forages: [
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "quark:crab_leg",
                    count: 1,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:crab_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:crab_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "quark:crab_shell",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 8
                },
                {
                    item: "society:crab_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "voltorb",
            forages: [
                {
                    item: "minecraft:gunpowder",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'cobblemon:poke_ball',
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "electrode",
            forages: [
                {
                    item: "minecraft:tnt",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'cobblemon:poke_ball',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "voltorb",
            form: "hisuian",
            forages: [
                {
                    item: "minecraft:gunpowder",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'cobblemon:ancient_poke_ball',
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "electrode",
            form: "hisuian",
            forages: [
                {
                    item: "minecraft:tnt",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: 'cobblemon:ancient_poke_ball',
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "sewaddle",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 0.90,
                    min_hearts: 4
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "swadloon",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 0.50,
                    min_hearts: 4
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "leavanny",
            forages: [
                {
                    item: "society:canvas",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:canvas",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:canvas",
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "farmersdelight:cabbage_leaf",
                    count: 4,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "hoppip",
            forages: [
                {
                    item: "herbalbrews:rooibos_leaf",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:tanuki_leaf",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "skiploom",
            forages: [
                {
                    item: 'atmospheric:yellow_blossoms',
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'buzzier_bees:four_leaf_clover',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "jumpluff",
            forages: [
                {
                    item: "etcetera:cotton_flower",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: 'sunlit_cobblemon:strange_spore',
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "yanma",
            forages: [
                {
                    item: "verdantvibes:cattails",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "crittersandcompanions:dragonfly_wing",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "yanmega",
            forages: [
                {
                    item: "verdantvibes:cattails",
                    count: 3,
                    chance: 0.45,
                    min_hearts: 3
                },
                {
                    item: "crittersandcompanions:dragonfly_wing",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6
                },
                {
                    item: "botania:lens_normal",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "trapinch",
            forages: [
                {
                    item: 'society:sandstone_slate',
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "unusualfishmod:ripper_tooth",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "vibrava",
            forages: [
                {
                    item: 'society:pristine_sandstone_slate',
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "crittersandcompanions:dragonfly_wing",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "flygon",
            forages: [
                {
                    item: 'society:pristine_sandstone_slate',
                    count: 1,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "crittersandcompanions:dragonfly_wing",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6
                },
                {
                    item: 'unimplemented_items:dry_root',
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "foongus",
            forages: [
                {
                    item: "cluttered:fly_agaric",
                    count: 4,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "happiny",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "spiritomb",
            forages: [
                {
                    item: "paraglider:spirit_orb",
                    count: 3,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: "society:glitched_vhs",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "duskull",
            forages: [
                {
                    item: "minecraft:bone",
                    count: 3,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: "quark:soul_bead",
                    count: 3,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: "minecraft:skeleton_skull",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "dusclops",
            forages: [
                {
                    item: "minecraft:bone",
                    count: 6,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: "quark:soul_bead",
                    count: 3,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: 'society:ghost_crystal',
                    count: 1,
                    chance: 0.45,
                    min_hearts: 7
                },
                {
                    item: "society:mini_oni_eye",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "dusknoir",
            forages: [
                {
                    item: "minecraft:bone",
                    count: 9,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: "quark:soul_bead",
                    count: 3,
                    chance: 0.85,
                    min_hearts: 3
                },
                {
                    item: 'cobblemon:ghost_gem',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "mimejr",
            forages: [
                {
                    item: "splendid_slimes:corral_block",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: 'society:tiny_gnome',
                    count: 1,
                    chance: 0.07,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "mimejr",
            form: "galarbias",
            forages: [
                {
                    item: "splendid_slimes:corral_block",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: 'society:tiny_gnome',
                    count: 1,
                    chance: 0.07,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "mrmime",
            forages: [
                {
                    item: "splendid_slimes:corral_block",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:gnome",
                    count: 1,
                    chance: 0.14,
                    min_hearts: 6
                },
                {
                    item: 'society:tiny_gnome',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "chansey",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:medicinal_brew",
                    count: 1,
                    chance: 1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "blissey",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:medicinal_brew",
                    count: 2,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "society:supreme_mayonnaise",
                    count: 1,
                    chance: 0.05,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "cleffa",
            forages: [
                {
                    item: "botania:pixie_dust",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 4
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "clefairy",
            forages: [
                {
                    item: "botania:pixie_dust",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.08,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "clefable",
            forages: [
                {
                    item: "botania:black_lotus",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 8
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "solrock",
            forages: [
                {
                    item: "cobblemon:sun_stone",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 1
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                },
                {
                    item: 'sunlit_cobblemon:sun_drops',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "lunatone",
            forages: [
                {
                    item: "society:lunarite",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 1
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.8,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "teddiursa",
            forages: [
                {
                    item: "golemoverhaul:honey_blob",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "ursaring",
            forages: [
                {
                    item: "golemoverhaul:honey_blob",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 6
                },
                {
                    item: "minecraft:bee_nest",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "ursaluna",
            forages: [
                {
                    item: "golemoverhaul:honey_blob",
                    count: 18,
                    chance: 0.2,
                    min_hearts: 6
                },
                {
                    item: "minecraft:bee_nest",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 5
                },
                {
                    item: "unusualfishmod:ripper_tooth",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "cresselia",
            forages: [
                {
                    item: 'cobblemon:moon_stone',
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: 'sunlit_cobblemon:moondust',
                    count: 1,
                    chance: 0.4,
                    min_hearts: 3
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "starmie",
            forages: [
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "abra",
            forages: [
                {
                    item: 'simplerecall:recall_potion',
                    count: 1,
                    chance: 0.3,
                    min_hearts: 6
                },
                {
                    item: 'cobblemon:twisted_spoon',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "kadabra",
            forages: [
                {
                    item: 'simplerecall:recall_potion',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 6
                },
                {
                    item: 'cobblemon:twisted_spoon',
                    count: 1,
                    chance: 0.02,
                    min_hearts: 7
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.2,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "alakazam",
            forages: [
                {
                    item: 'simplerecall:recall_potion',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 6
                },
                {
                    item: 'cobblemon:twisted_spoon',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 7
                },
                {
                    item: 'sunlit_cobblemon:resonance_gem',
                    count: 1,
                    chance: 0.3,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "minior",
            forages: [
                {
                    item: "society:lunarite",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "society:prismatic_shard",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "togepi",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 1,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "togetic",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "togekiss",
            forages: [
                {
                    item: "society:thunder_egg",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "vintagedelight:golden_egg",
                    count: 1,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "skarmory",
            forages: [
                {
                    item: "society:large_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "etcetera:bismuth_ingot",
                    count: 1,
                    chance: 1,
                    min_hearts: 7
                },
                {
                    item: "cobblemon:steel_gem",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "exeggcute",
            forages: [
                {
                    item: "society:cracked_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "exeggcute",
            fomr: "hisuibias",
            forages: [
                {
                    item: "society:cracked_egg",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "doduo",
            forages: [
                {
                    item: "society:large_egg",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "dodrio",
            forages: [
                {
                    item: "society:large_egg",
                    count: 3,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "capsakid",
            forages: [
                {
                    item: "veggiesdelight:bellpepper",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "scovillain",
            forages: [
                {
                    item: "vintagedelight:ghost_pepper",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "klink",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "klang",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "create:andesite_alloy",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "klinklang",
            forages: [
                {
                    item: "create:andesite_alloy",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "create:brass_ingot",
                    count: 2,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "porygon",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "porygon2",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.35,
                    min_hearts: 6
                },
                {
                    item: "sunlit_cobblemon:greater_tm_pack",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "porygonz",
            forages: [
                {
                    item: "sunlit_cobblemon:tm_pack",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "sunlit_cobblemon:greater_tm_pack",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "tinkatink",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "tinkatuff",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                },
                {
                    item: "create:large_cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 5
                },
                {
                    item: "create:gearbox",
                    count: 2,
                    chance: 0.75,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "tinkaton",
            forages: [
                {
                    item: "create:cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 3
                },
                {
                    item: "create:large_cogwheel",
                    count: 4,
                    chance: 0.75,
                    min_hearts: 5
                },
                {
                    item: "create:gearbox",
                    count: 2,
                    chance: 0.75,
                    min_hearts: 7
                },
                {
                    item: "create:precision_mechanism",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "wishiwashi",
            forages: [
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:minnow_roe",
                    count: 32,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "society:minnow_roe",
                    count: 32,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "bruxish",
            forages: [
                {
                    item: "society:amber_goby_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:amber_goby_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:amber_goby_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:amber_goby_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "unusualfishmod:ripper_tooth",
                    count: 1,
                    chance: 0.22,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "remoraid",
            forages: [
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:minnow_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "octillery",
            forages: [
                {
                    item: "crabbersdelight:raw_squid_tentacles",
                    count: 4,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:legendary_ink",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "shuckle",
            forages: [
                {
                    item: 'autumnity:snail_shell_piece',
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "shuckle",
            milk: { sm: "cobblemon:berry_juice" },
        },
        {
            pokemon: "inkay",
            forages: [
                {
                    item: "crabbersdelight:raw_glow_squid_tentacles",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "society:legendary_ink",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "malamar",
            forages: [
                {
                    item: "crabbersdelight:raw_glow_squid_tentacles",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: 'supplementaries:antique_ink',
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "shroomish",
            forages: [
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "toedscool",
            forages: [
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "toedscruel",
            forages: [
                {
                    item: "sunlit_cobblemon:strange_spore",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 3
                },
                {
                    item: "species:alphacene_mushroom_block",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "species:alphacene_mushroom_growth",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "budew",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "roselia",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "windswept:red_rose",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "windswept:blue_rose",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "roserade",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 3,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 7
                },
                {
                    item: "windswept:red_rose",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "windswept:blue_rose",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "windswept:white_rose",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "toxapex",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "comfey",
            forages: [
                {
                    item: 'society:bouquet_bag',
                    count: 1,
                    chance: 0.92,
                    min_hearts: 4
                },
                {
                    item: 'windswept:holly_wreath',
                    count: 1,
                    chance: 0.5,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "flabebe",
            forages: [
                {
                    item: 'society:bouquet_bag',
                    count: 4,
                    chance: 0.92,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "floette",
            forages: [
                {
                    item: 'society:bouquet_bag',
                    count: 2,
                    chance: 0.52,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:captivating_pofflet',
                    count: 1,
                    chance: 0.92,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "florges",
            forages: [
                {
                    item: 'society:bouquet_bag',
                    count: 1,
                    chance: 0.32,
                    min_hearts: 6
                },
                {
                    item: 'sunlit_cobblemon:fairy_heart',
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "bellsprout",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.12,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "minecraft:pitcher_pod",
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "weepinbell",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "minecraft:pitcher_pod",
                    count: 4,
                    chance: 0.55,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "victreebel",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.65,
                    has_quality: true,
                    min_hearts: 7
                },
                {
                    item: 'vintagedelight:pickled_pitcher_pod',
                    count: 4,
                    chance: 0.65,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "grimer",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "muk",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 4,
                    chance: 0.45,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "brewery:whiskey_jojannik",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 6
                },
                {
                    item: "sunlit_cobblemon:mukbeth",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "murkrow",
            forages: [
                {
                    item: "society:tubasmoke_stick",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 8
                },
                {
                    item: "cobblemon:dark_gem",
                    count: 1,
                    chance: 0.7,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "honchkrow",
            forages: [
                {
                    item: 'society:tubasmoke_carton',
                    count: 1,
                    chance: 0.83,
                    has_quality: true,
                    min_hearts: 8
                },
                {
                    item: "brewery:dark_brew",
                    count: 1,
                    chance: 0.3,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "tentacool",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "tentacruel",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 2,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "society:ocean_jelly",
                    count: 1,
                    chance: 0.09,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "frillish",
            forages: [
                {
                    item: "society:petrified_slime",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "jellicent",
            forages: [
                {
                    item: "society:petrified_slime",
                    count: 2,
                    chance: 0.35,
                    min_hearts: 6
                },
                {
                    item: "society:ocean_jelly",
                    count: 1,
                    chance: 0.09,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "sliggoo",
            milk: { sm: "minecraft:slime_ball" },
        },
        {
            pokemon: "goodra",
            milk: { sm: "minecraft:slime_block" },
        },
        {
            pokemon: "sliggoo",
            form: "hisuian",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "goodra",
            form: "hisuian",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "goodra",
            form: "hisuian",
            forages: [
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 5
                },
                {
                    item: 'sunlit_cobblemon:draco_meteorite',
                    count: 1,
                    chance: 0.9,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "tropius",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 5,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "society:banana_karenina",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "shroodle",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "grafaiai",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "mankey",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slakoth",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 8,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "vigoroth",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 16,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slaking",
            forages: [
                {
                    item: "pamhc2trees:bananaitem",
                    count: 64,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "stonjourner",
            forages: [
                {
                    item: 'cobblemon:everstone',
                    count: 1,
                    chance: 0.09,
                    min_hearts: 1
                },
                {
                    item: 'society:limestone_pebble',
                    count: 1,
                    chance: 0.09,
                    min_hearts: 2
                },
                {
                    item: 'society:soapstone',
                    count: 1,
                    chance: 0.09,
                    min_hearts: 3
                },
                {
                    item: 'cobblemon:fossilized_bird',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                },
                {
                    item: 'cobblemon:fossilized_fish',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 8
                },
                {
                    item: 'cobblemon:fossilized_drake',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 9
                },
                {
                    item: 'cobblemon:fossilized_dino',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "sandshrew",
            forages: [
                {
                    item: "minecraft:sandstone",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:old_amber_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                },
                {
                    item: "cobblemon:helix_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "bronzor",
            forages: [
                {
                    item: "minecraft:oxidized_copper",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:skull_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                },
            ],
        },
        {
            pokemon: "drilbur",
            forages: [
                {
                    item: "twigs:pebble",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "betterarcheology:fossiliferous_dirt",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:cover_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "excadrill",
            forages: [
                {
                    item: "twigs:pebble",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "atmospheric:arid_sand",
                    count: 16,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "atmospheric:red_arid_sand",
                    count: 16,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:plume_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                },
            ],
        },
        {
            pokemon: "bronzong",
            forages: [
                {
                    item: "minecraft:oxidized_copper",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:armor_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "sandslash",
            forages: [
                {
                    item: "minecraft:sandstone",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:dome_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                },
            ],
        },
        {
            pokemon: "wooper",
            forages: [
                {
                    item: "minecraft:clay_ball",
                    count: 8,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:mud",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:mudstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "quagsire",
            forages: [
                {
                    item: "minecraft:clay_ball",
                    count: 16,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "minecraft:mud",
                    count: 8,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:mudstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "wooper",
            form: "paldean",
            forages: [
                {
                    item: "minecraft:mud",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:mudstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "clodsire",
            forages: [
                {
                    item: "minecraft:mud",
                    count: 8,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:mudstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "wooper",
            form: "paldean",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "clodsire",
            milk: { sm: "sunlit_cobblemon:poison_drop" },
        },
        {
            pokemon: "sigilyph",
            forages: [
                {
                    item: 'windswept:elder_feather',
                    count: 1,
                    chance: 0.3,
                    min_hearts: 2
                },
                {
                    item: "windswept:hoot_pottery_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 3
                },
                {
                    item: "windswept:offshoot_pottery_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 4
                },
                {
                    item: "windswept:plumage_pottery_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 5
                },
                {
                    item: "windswept:flake_pottery_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                },
                {
                    item: "windswept:drupes_pottery_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 7
                },
                {
                    item: "cobblemon:psychic_gem",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "baltoy",
            forages: [
                {
                    item: "minecraft:clay_ball",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:dome_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:helix_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:nostalgic_sherd",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:root_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "claydol",
            forages: [

                {
                    item: "minecraft:clay",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:suspicious_sherd",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:capture_sherd",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:claw_fossil",
                    count: 1,
                    chance: 0.06,
                    min_hearts: 7
                }
            ],
        },
        {
            pokemon: "durant",
            forages: [
                {
                    item: "create:raw_zinc",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:dried_shimmering_mushrooms",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 3
                },
                {
                    item: "society:dried_shimmering_mushrooms",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "society:dried_shimmering_mushrooms",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "heatmor",
            forages: [
                {
                    item: "create:zinc_ingot",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "society:ember_crystal_cluster",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "minecraft:blaze_powder",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "timburr",
            forages: [
                {
                    item: "meadow:fire_log",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 4
                }
            ],
        },
        {
            pokemon: "conkeldurr",
            forages: [
                {
                    item: "society:earth_crystal",
                    count: 4,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:jade",
                    count: 4,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "sandyshocks",
            forages: [
                {
                    item: "oreganized:lead_ingot",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "minecraft:ancient_debris",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "klefki",
            forages: [
                {
                    item: 'supplementaries:key',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 1
                },
                {
                    item: 'trials:trial_key',
                    count: 1,
                    chance: 0.06,
                    min_hearts: 3
                },
                {
                    item: 'cluttered:brass_key',
                    count: 1,
                    chance: 0.1,
                    min_hearts: 3
                },
                {
                    item: 'trials:trial_key_ominous',
                    count: 1,
                    chance: 0.03,
                    min_hearts: 9
                },
                {
                    item: 'society:car_key',
                    count: 1,
                    chance: 0.01,
                    min_hearts: 9
                },

            ],
        },
        {
            pokemon: "magneton",
            forages: [
                {
                    item: "oreganized:lead_nugget",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "oreganized:silver_nugget",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "magnezone",
            forages: [
                {
                    item: "oreganized:lead_ingot",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "oreganized:silver_ingot",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 5
                },
                {
                    item: "oreganized:electrum_nugget",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "butterfree",
            forages: [
                {
                    item: "society:butterfly_amber",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:butterfly_amber",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:butterfly_amber",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "vivillon",
            forages: [
                {
                    item: "society:butterfly_amber",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:butterfly_amber",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:butterfly_amber",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "venonat",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 0
                }
            ]
        },
        {
            pokemon: "venomoth",
            forages: [
                {
                    item: "sunlit_cobblemon:poison_drop",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 1
                },
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "frosmoth",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                },
                {
                    item: "windswept:frozen_branch",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "surskit",
            forages: [
                {
                    item: "minecraft:honey_bottle",
                    count: 1,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "society:oil",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "masquerain",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "volcarona",
            forages: [
                {
                    item: "minecraft:blaze_powder",
                    count: 1,
                    chance: 0.4,
                    min_hearts: 0

                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 8,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "slitherwing",
            forages: [
                {
                    item: "society:moth_pollen",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 5,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 9,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "ironmoth",
            forages: [
                {
                    item: "minecraft:blaze_powder",
                    count: 4,
                    chance: 0.4,
                    min_hearts: 0

                },
                {
                    item: "society:moth_pollen",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:moth_pollen",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:moth_pollen",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "steelix",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "orthworm",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "copperajah",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "lapras",
            forages: [
                {
                    item: "sunlit_cobblemon:permafrost_drop",
                    count: 1,
                    chance: 0.5,
                    use_quality: true,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "tatsugiri",
            forages: [
                {
                    item: "cobblemon:dragon_scale",
                    count: 1,
                    chance: 0.05,
                    use_quality: true,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "tatsugiri",
            form: "stretchy",
            forages: [
                {
                    item: "cobblemon:dragon_scale",
                    count: 1,
                    chance: 0.05,
                    use_quality: true,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "tatsugiri",
            form: "droopy",
            forages: [
                {
                    item: "cobblemon:dragon_scale",
                    count: 1,
                    chance: 0.05,
                    use_quality: true,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "dewpider",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_nugget",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dewpider",
            milk: { sm: "sunlit_cobblemon:spider_milk" },
        },
        {
            pokemon: "araquanid",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 5
                },
                {
                    item: "aquaculture:neptunium_ingot",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "araquanid",
            milk: { sm: "sunlit_cobblemon:spider_milk" },
        },
        {
            pokemon: "tarountula",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "zorua",
            forages: [
                {
                    item: "species:werefang",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 4
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "zoroark",
            forages: [
                {
                    item: "species:werefang",
                    count: 2,
                    chance: 0.25,
                    min_hearts: 4
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "zorua",
            form: "hisuian",
            forages: [
                {
                    item: "quark:soul_bead",
                    count: 4,
                    chance: 0.3,
                    min_hearts: 4
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "zoroark",
            form: "hisuian",
            forages: [
                {
                    item: "quark:soul_bead",
                    count: 4,
                    chance: 0.3,
                    min_hearts: 4
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "kecleon",
            forages: [
                {
                    item: "society:legendary_ink",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:prism_scale",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 6
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "spidops",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.9,
                    min_hearts: 5
                },
                {
                    item: "species:wicked_mask",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "spidops",
            milk: { sm: "sunlit_cobblemon:spider_milk" },
        },
        {
            pokemon: "joltik",
            forages: [
                {
                    item: 'society:limestone_pebble',
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "galvantula",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "crittersandcompanions:silk_cocoon",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "galvantula",
            milk: { sm: "sunlit_cobblemon:spider_milk" },
        },
        {
            pokemon: "spinarak",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 5
                },
            ],
        },
        {
            pokemon: "ariados",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 3,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:spider_silk",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 5
                },
                {
                    item: "crittersandcompanions:silk_cocoon",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "ariados",
            milk: { sm: "sunlit_cobblemon:spider_milk" },
        },
        {
            pokemon: "scatterbug",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "weedle",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "rattata",
            forages: [
                {
                    item: "vintagedelight:peanut",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "raticate",
            forages: [
                {
                    item: "vintagedelight:peanut",
                    count: 3,
                    chance: 0.3,
                    min_hearts: 6,
                    has_quality: true,
                },
                {
                    item: "vintagedelight:magic_peanut",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "sentret",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 6,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "furret",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 6,
                    has_quality: true,
                },
                {
                    item: "society:aquamarine",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 9,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "zigzagoon",
            forages: [
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                },
            ],
        },
        {
            pokemon: "linoone",
            forages: [
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "minecraft:diamond",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                },
            ],
        },
        {
            pokemon: "obstagoon",
            forages: [
                {
                    item: "society:earth_crystal",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                },
                {
                    item: "minecraft:diamond",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                },
                {
                    item: 'species:ghoul_tongue',
                    count: 1,
                    chance: 0.15,
                    min_hearts: 8
                },
            ],
        },
        {
            pokemon: "poochyena",
            forages: [
                {
                    item: "society:scavenged_food_bag",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 6,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "mightyena",
            forages: [
                {
                    item: "society:scavenged_food_bag",
                    count: 1,
                    chance: 0.45,
                    min_hearts: 6,
                    has_quality: true,
                },
                {
                    item: "species:werefang",
                    count: 1,
                    chance: 0.15,
                    min_hearts: 9
                },
            ],
        },
        {
            pokemon: "barboach",
            forages: [
                {
                    item: "society:catfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:catfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:catfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:catfish_roe",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "whiscash",
            forages: [
                {
                    item: "society:mudstone",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 0
                },
                {
                    item: "society:catfish_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:catfish_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "society:catfish_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "society:catfish_roe",
                    count: 3,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "bidoof",
            forages: [
                {
                    item: "meadow:fire_log",
                    count: 1,
                    chance: 1,
                    min_hearts: 1
                },
            ],
        },
        {
            pokemon: "bibarel",
            forages: [
                {
                    item: "meadow:fire_log",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: 'pamhc2trees:cinnamonitem',
                    count: 1,
                    chance: 0.65,
                    has_quality: true,
                    min_hearts: 4
                },
                {
                    item: "unusualfishmod:raw_bark_angelfish",
                    count: 1,
                    chance: 0.35,
                    has_quality: true,
                    min_hearts: 9
                },
            ],
        },
        {
            pokemon: "patrat",
            forages: [
                {
                    item: 'minecraft:glow_berries',
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
            ],
        },
        {
            pokemon: "watchog",
            forages: [
                {
                    item: 'minecraft:glow_berries',
                    count: 6,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: 'vintagedelight:glow_berry_mason_jar',
                    count: 1,
                    chance: 0.5,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "lillipup",
            forages: [
                {
                    item: 'minecraft:bone',
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
            ],
        },
        {
            pokemon: "herdier",
            forages: [
                {
                    item: 'minecraft:bone',
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "stoutland",
            forages: [
                {
                    item: 'minecraft:bone',
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "bunnelby",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.24,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "cobblemon:sail_fossil",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "diggersby",
            forages: [
                {
                    item: "minecraft:mud",
                    count: 8,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.4,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.24,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "society:froggy_helm",
                    count: 1,
                    chance: 0.12,
                    min_hearts: 7
                },
                {
                    item: "society:ribbit_drum",
                    count: 1,
                    chance: 0.08,
                    min_hearts: 8
                },
                {
                    item: "society:ribbit_gadget",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 9
                },
                {
                    item: "cobblemon:jaw_fossil",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "skwovet",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 3,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "greedent",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 3,
                    has_quality: true,
                },
                {
                    item: "society:scavenged_food_bag",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 7,
                },
            ],
        },
        {
            pokemon: "pachirisu",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 6,
                    has_quality: true,
                },
                {
                    item: "cobblemon:sitrus_berry",
                    count: 1,
                    chance: 1,
                    min_hearts: 7,
                    has_quality: true,
                },
                {
                    item: "cobblemon:dragon_gem",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                },
            ],
        },
        {
            pokemon: "emolga",
            forages: [
                {
                    item: "pamhc2trees:hazelnutitem",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 6,
                    has_quality: true,
                },
                {
                    item: "society:sparkpod",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 10,
                    has_quality: true,
                },
            ],
        },
        {
            pokemon: "caterpie",
            forages: [
                {
                    item: "crittersandcompanions:silk",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "sunkern",
            forages: [
                {
                    item: "minecraft:sunflower",
                    count: 2,
                    chance: 1,
                    min_hearts: 0
                }
            ],
        },
        {
            pokemon: "sunflora",
            forages: [
                {
                    item: "minecraft:sunflower",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "sunlit_cobblemon:sun_drops",
                    count: 1,
                    chance: 0.03,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "applin",
            forages: [
                {
                    item: "minecraft:apple",
                    count: 2,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "appletun",
            forages: [
                {
                    item: "farmersdelight:apple_pie",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:syrupy_apple",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "flapple",
            forages: [
                {
                    item: "society:aged_apple_wine",
                    count: 1,
                    chance: 0.8,
                    min_hearts: 1
                },
                {
                    item: "cobblemon:syrupy_apple",
                    count: 1,
                    chance: 0.04,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dipplin",
            forages: [
                {
                    item: "buzzier_bees:honey_apple",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "society:maple_syrup",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "buneary",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 4,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.15,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "lopunny",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 4,
                    chance: 0.2,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "minecraft:rabbit_foot",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "sinistea",
            forages: [
                {
                    item: "herbalbrews:black_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "polteageist",
            forages: [
                {
                    item: "herbalbrews:black_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 6
                },
                {
                    item: "herbalbrews:oolong_tea",
                    count: 1,
                    chance: 0.2,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "poltchageist",
            forages: [
                {
                    item: "herbalbrews:green_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "sinistcha",
            forages: [
                {
                    item: "herbalbrews:green_tea",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "herbalbrews:oolong_tea",
                    count: 1,
                    chance: 0.2,
                    has_quality: true,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "rellor",
            forages: [
                {
                    item: "farm_and_charm:fertilizer",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "swirlix",
            forages: [
                {
                    item: "minecraft:sugar",
                    count: 4,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "slurpuff",
            forages: [
                {
                    item: "minecraft:sugar",
                    count: 8,
                    chance: 0.75,
                    has_quality: true,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:whipped_dream",
                    count: 1,
                    chance: 0.13,
                    has_quality: true,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "milcery",
            milk: { sm: "society:large_milk" },
        },
        {
            pokemon: "alcremie",
            milk: { sm: "society:large_warped_milk" },
        },
        {
            pokemon: "combee",
            forages: [
                {
                    item: "minecraft:honeycomb",
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                }
            ],
        },
        {
            pokemon: "vespiquen",
            forages: [
                {
                    item: "minecraft:honeycomb",
                    count: 16,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "golemoverhaul:honey_blob",
                    count: 3,
                    chance: 0.5,
                    min_hearts: 6
                },
                {
                    item: "society:beemonican_seal",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "beedrill",
            forages: [
                {
                    item: "minecraft:honey_block",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "golemoverhaul:honey_blob",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "forretress",
            forages: [
                {
                    item: "railways:riveted_locometal",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "railways:riveted_locometal",
                    count: 32,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:metal_coat",
                    count: 1,
                    chance: 0.02,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "forretress",
            milk: { sm: "sunlit_cobblemon:quicksilver" },
        },
        {
            pokemon: "pineco",
            forages: [
                {
                    item: "windswept:pinecone",
                    count: 4,
                    chance: 1,
                    min_hearts: 1
                },
                {
                    item: "windswept:pinecone_block",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "swablu",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 4,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "altaria",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 8,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "cottonee",
            forages: [
                {
                    item: "etcetera:cotton_flower",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "whimsicott",
            forages: [
                {
                    item: "etcetera:cotton_flower",
                    count: 16,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "pumpkaboo",
            forages: [
                {
                    item: "autumnity:pumpkin_bread",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "gourgeist",
            forages: [
                {
                    item: "minecraft:pumpkin",
                    count: 4,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "gimmighoul",
            forages: [
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 1,
                    chance: 1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "gholdengo",
            forages: [
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 4
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 6
                },
                {
                    item: "cobblemon:relic_coin",
                    count: 2,
                    chance: 1,
                    min_hearts: 8
                },
                {
                    item: "cobblemon:relic_coin_sack",
                    count: 10,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "cosmog",
            forages: [
                {
                    item: "sunlit_cobblemon:cosmic_dust",
                    count: 1,
                    chance: 0.2,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "petilil",
            forages: [
                {
                    item: "farm_and_charm:onion",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:remedy",
                    count: 2,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "petilil",
            form: "hisuibias",
            forages: [
                {
                    item: "farm_and_charm:onion",
                    count: 4,
                    chance: 1,
                    min_hearts: 0
                },
                {
                    item: "cobblemon:remedy",
                    count: 2,
                    chance: 1,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "lilligant",
            forages: [
                {
                    item: 'veggiesdelight:cauliflower',
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:fine_remedy",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "lilligant",
            form: "hisuian",
            forages: [
                {
                    item: 'veggiesdelight:turnip',
                    count: 4,
                    chance: 1,
                    min_hearts: 2
                },
                {
                    item: "cobblemon:fine_remedy",
                    count: 2,
                    chance: 1,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "sandile",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.2,
                    min_hearts: 3
                }
            ],
        },
        {
            pokemon: "krokorok",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.2,
                    min_hearts: 3
                },
                {
                    item: "numismatics:sun",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 6
                },
                {
                    item: "numismatics:neptunium_coin",
                    count: 1,
                    chance: 0.002,
                    min_hearts: 9
                }
            ],
        },
        {
            pokemon: "krookodile",
            forages: [
                {
                    item: "numismatics:crown",
                    count: 3,
                    chance: 0.4,
                    min_hearts: 3
                },
                {
                    item: "numismatics:sun",
                    count: 1,
                    chance: 0.25,
                    min_hearts: 6
                },
                {
                    item: "numismatics:neptunium_coin",
                    count: 1,
                    chance: 0.02,
                    min_hearts: 9
                },
                {
                    item: "numismatics:ancient_coin",
                    count: 1,
                    chance: 0.0001,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "minccino",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.25,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "society:white_sheet",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "cinccino",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.5,
                    has_quality: true,
                    min_hearts: 2
                },
                {
                    item: "society:white_sheet",
                    count: 1,
                    chance: 1,
                    min_hearts: 6
                }
            ],
        },
        {
            pokemon: "miltank",
            milk: { sm: "sunlit_cobblemon:moomoo_milk", lg: "sunlit_cobblemon:large_moomoo_milk" },
        },
        {
            pokemon: "skiddo",
            milk: { sm: "society:goat_milk", lg: "society:large_goat_milk" },
        },
        {
            pokemon: "gogoat",
            milk: { sm: "society:goat_milk", lg: "society:large_goat_milk" },
        },
        {
            pokemon: "gogoat",
            forages: [
                {
                    item: "minecraft:goat_horn",
                    count: 1,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "bouffalant",
            milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
        },
        {
            pokemon: "tauros",
            milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
        },
        {
            pokemon: "wooloo",
            milk: cobbleSheepMilk,
        },
        {
            pokemon: "wooloo",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 1
                }
            ],
        },
        {
            pokemon: "dubwool",
            milk: cobbleSheepMilk,
        },
        {
            pokemon: "dubwool",
            forages: [
                {
                    item: "society:fine_wool",
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 1
                },
                {
                    item: "minecraft:goat_horn",
                    count: 1,
                    chance: 0.1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "mareep",
            milk: cobbleSheepMilk,
        },
        {
            pokemon: "mareep",
            forages: [
                {
                    item: "sunlit_cobblemon:electro_wool",
                    count: 2,
                    chance: 1,
                    has_quality: true,
                    min_hearts: 5
                }
            ],
        },
        {
            pokemon: "flaaffy",
            milk: cobbleSheepMilk,
        },
        {
            pokemon: "flaaffy",
            forages: [
                {
                    item: "sunlit_cobblemon:electro_wool",
                    count: 1,
                    chance: 0.8,
                    has_quality: true,
                    min_hearts: 5
                },
                {
                    item: "society:sparkstone_dust",
                    count: 4,
                    chance: 0.5,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "ampharos",
            milk: cobbleSheepMilk,
        },
        {
            pokemon: "ampharos",
            forages: [
                {
                    item: "society:sparkstone_dust",
                    count: 4,
                    chance: 1,
                    min_hearts: 5
                },
                {
                    item: "society:sparkstone",
                    count: 4,
                    chance: 1,
                    min_hearts: 8
                }
            ],
        },
        {
            pokemon: "cyndaquil",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:fire_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:fire_pledge",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "quilava",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:fire_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:fire_pledge",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "typhlosion",
            form: "hisuian",
            forages: [
                {
                    item: "cobblemon:fire_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:fire_pledge",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "rowlet",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:leaf_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:grass_pledge",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dartrix",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:leaf_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:grass_pledge",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "decidueye",
            form: "hisuian",
            forages: [
                {
                    item: "cobblemon:leaf_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:grass_pledge",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "oshawott",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:water_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:water_pledge",
                    count: 1,
                    chance: 0.01,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "dewott",
            form: "hisuibias",
            forages: [
                {
                    item: "cobblemon:water_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:water_pledge",
                    count: 1,
                    chance: 0.5,
                    min_hearts: 10
                }
            ],
        },
        {
            pokemon: "samurott",
            form: "hisuian",
            forages: [
                {
                    item: "cobblemon:water_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:water_pledge",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 10
                }
            ],
        }
    ]
    let getPledgeChance = (index) => {
        let indexPercent = index / 9;
        if (indexPercent >= 2) return 0.1;
        if (indexPercent >= 1) return 0.05;
        return 0.01;
    }
    ["charmander", "cyndaquil", "torchic", "chimchar", "tepig", "fennekin", "litten", "scorbunny", "fuecoco", "charmeleon", "quilava", "combusken", "monferno", "pignite", "braixen", "torracat", "raboot", "crocalor", "charizard", "typhlosion", "blaziken", "infernape", "emboar", "delphox", "incineroar", "cinderace", "skeledirge"].forEach((poke, index) => {
        ranchingDef.push({
            pokemon: poke,
            forages: [
                {
                    item: "cobblemon:fire_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:fire_pledge",
                    count: 1,
                    chance: getPledgeChance(index),
                    min_hearts: 10
                }
            ],
        })
    });
    ["bulbasaur", "chikorita", "treecko", "turtwig", "snivy", "chespin", "rowlet", "grookey", "sprigatito", "ivysaur", "bayleef", "grovyle", "grotle", "servine", "quilladin", "dartrix", "thwackey", "floragato", "venusaur", "meganium", "sceptile", "torterra", "serperior", "chesnaught", "decidueye", "rillaboom", "meowscarada"].forEach((poke, index) => {
        ranchingDef.push({
            pokemon: poke,
            forages: [
                {
                    item: "cobblemon:leaf_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:grass_pledge",
                    count: 1,
                    chance: getPledgeChance(index),
                    min_hearts: 10
                }
            ],
        })
    });
    ["squirtle", "totodile", "mudkip", "piplup", "oshawott", "froakie", "popplio", "sobble", "quaxly", "wartortle", "croconaw", "marshtomp", "prinplup", "dewott", "frogadier", "brionne", "drizzile", "quaxwell", "blastoise", "feraligatr", "swampert", "empoleon", "samurott", "greninja", "primarina", "inteleon", "quaquaval"].forEach((poke, index) => {
        ranchingDef.push({
            pokemon: poke,
            forages: [
                {
                    item: "cobblemon:water_stone",
                    count: 1,
                    chance: 0.1,
                    min_hearts: 5
                },
                {
                    item: "sunlit_cobblemon:water_pledge",
                    count: 1,
                    chance: getPledgeChance(index),
                    min_hearts: 10
                }
            ],
        })
    });

    ["dragonite", "salamence", "garchomp", "hydreigon", "goodra", "kommoo", "dragapult", "baxcalibur"].forEach((poke, index) => {
        ranchingDef.push({
            pokemon: poke,
            forages: [
                {
                    item: "botania:dragonstone",
                    count: 1,
                    chance: 0.05,
                    min_hearts: 5
                },
                {
                    item: 'sunlit_cobblemon:draco_meteorite',
                    count: 1,
                    chance: 0.9,
                    min_hearts: 10
                }
            ],
        })
        ranchingDef.push({
            pokemon: poke,
            milk: { sm: "minecraft:dragon_breath" },
        })
    });
    let recipe
    ranchingDef.forEach((def) => {
        recipe = {
            type: `cobblemon_farmers:ranching_station/${def.milk ? "milk" : "forage"}`,
            pokemon: def.pokemon,
        }
        if (def.form) {
            recipe.form = def.form
        }
        if (def.milk) {
            recipe.consume_bucket = false;
            recipe.milk = {}
            if (def.milk.sm) {
                recipe.milk.sm = { item: def.milk.sm, count: 1 }
            }
            if (def.milk.lg) {
                recipe.milk.lg = { item: def.milk.lg, count: 1 }
            }
        } else {
            recipe.forages = def.forages
        }
        JsonIO.write(`kubejs/data/cobblemon_farmers/recipes/ranching_station/${def.milk ? "milk" : "forage"}/${def.pokemon}${def.form ? `_${def.form}` : ""}.json`, recipe);
    });

    ItemEvents.rightClicked('fightorflight:oran_lucky_egg', (e) => {
        const { player } = e;
        ranchingDef.forEach((def) => {
            if (def.forages) {
                def.forages.forEach((forage) => {
                    if (Item.of(forage.item).id === "minecraft:air") player.tell(forage.item);
                });
            }
        });
        player.tell(ranchingDef.length + " ranching defs validated!")
    });
}
