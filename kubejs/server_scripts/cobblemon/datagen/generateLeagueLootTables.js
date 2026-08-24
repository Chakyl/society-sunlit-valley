
// // ["leon", "aiden", "ace", "caroline", "haruna", "maria", "carlos", "evelyne", "veronica", "karma", "king", "kingkarma"].forEach((boss) => {
// //     for (let index = 1; index < 10; index++) {
// //         JsonIO.write(`kubejs/data/rctmod/loot_tables/trainers/single/league_${boss}${index}.json`, {
// //             "pools": [
// //                 {
// //                     "rolls": {
// //                         "min": 1,
// //                         "max": 1
// //                     },
// //                     "entries": [
// //                         {
// //                             "type": "minecraft:loot_table",
// //                             "name": "rctmod:trainers/groups/league_boss"
// //                         }
// //                     ]
// //                 }
// //             ],
// //             "random_sequence": `rctmod:trainers/single/league_${boss}${index}`
// //         });

// //     }
// // })


// [
//     "bear",
//     "boom",
//     "dust",
//     "hospitality",
//     "rain",
//     "sing",
//     "soar",
//     "spook",
//     "surge",
//     "water"
// ].forEach((boss) => {
//     for (let index = 1; index < 10; index++) {
//         JsonIO.write(`kubejs/data/rctmod/loot_tables/trainers/single/team_eon_${boss}.json`, {
//             "pools": [
//                 {
//                     "rolls": {
//                         "min": 1,
//                         "max": 1
//                     },
//                     "entries": [
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "sunlit_cobblemon:sun_drops",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 4,
//                                         "max": 16
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "cobblemon:relic_coin_pouch",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 1,
//                                         "max": 2
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "sunlit_cobblemon:mystica_branch",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 2,
//                                         "max": 4
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "random_sequence": `rctmod:trainers/single/team_eon_${boss}`
//         });
//         JsonIO.write(`kubejs/data/rctmod/loot_tables/trainers/single/eon_soul_${boss}.json`, {
//             "pools": [
//                 {
//                     "rolls": {
//                         "min": 1,
//                         "max": 1
//                     },
//                     "entries": [
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "sunlit_cobblemon:sun_drops",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 8,
//                                         "max": 16
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "cobblemon:relic_coin_pouch",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 2,
//                                         "max": 3
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "type": "minecraft:item",
//                             "weight": 4,
//                             "name": "sunlit_cobblemon:mystica_branch",
//                             "functions": [
//                                 {
//                                     "function": "minecraft:set_count",
//                                     "count": {
//                                         "type": "minecraft:uniform",
//                                         "min": 4,
//                                         "max": 6
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "random_sequence": `rctmod:trainers/single/eon_soul_${boss}`
//         });
//     }
// })
