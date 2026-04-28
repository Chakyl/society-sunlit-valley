// const runBossDatagen = false;

// if (runBossDatagen) {
//   ["leon", "aiden", "ace", "caroline", "haruna", "maria", "karma", "king", "kingkarma"].forEach((boss) => {
//     for (let index = 1; index < 10; index++) {
//       JsonIO.write(`kubejs/data/rctmod/loot_tables/trainers/single/league_${boss}${index}.json`, {
//         "pools": [
//           {
//             "rolls": {
//               "min": 1,
//               "max": 1
//             },
//             "entries": [
//               {
//                 "type": "minecraft:loot_table",
//                 "name": "rctmod:trainers/groups/league_boss"
//               }
//             ]
//           }
//         ],
//         "random_sequence": `rctmod:trainers/single/league_${boss}${index}`
//       });

//     }
//   })
// }
