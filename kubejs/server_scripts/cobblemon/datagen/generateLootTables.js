
// // // let previousTierName = null;

// // // [
// // //     { tier: 20, items: ['sunlit_cobblemon:sun_drops', 'cobblemon:relic_coin', 'cobblemon:exp_candy_s'], scale: 4 },
// // //     { tier: 40, items: ['cobblemon:exp_candy_m', 'cobblemon:genius_mochi', 'cobblemon:clever_mochi', 'cobblemon:health_mochi', 'cobblemon:swift_mochi', 'cobblemon:resist_mochi', 'cobblemon:muscle_mochi'], scale: 3 },
// // //     { tier: 80, items: ['cobblemon:exp_candy_m', 'cobblemon:relic_coin_pouch', 'sunlit_cobblemon:mystica_cookie'], scale: 2 },
// // //     { tier: 160, items: ['cobblemon:exp_candy_l', 'cobblemon:exp_candy_xl', 'sunlit_cobblemon:mystica_branch'], scale: 2 },
// // //     { tier: 320, items: ['society:prismatic_shard', 'cobblemon:rare_candy'], scale: 1 },
// // //     { tier: 640, items: ['sunlit_cobblemon:mystica_branch', 'cobblemon:rare_candy'], scale: 4 },
// // //     { tier: 1000, items: ['sunlit_cobblemon:sun_drops'], scale: 16 }
// // // ].forEach((tierConfig, index) => {
// // //     let pools = [];

// // //     let currentTierEntries = tierConfig.items.map((itemId) => {
// // //         let entry = {
// // //             type: "minecraft:item",
// // //             weight: Math.floor(index / 2) + 1,
// // //             name: itemId
// // //         };

// // //         if (tierConfig.scale > 1) {
// // //             entry.functions = [
// // //                 {
// // //                     function: "minecraft:set_count",
// // //                     count: {
// // //                         type: "minecraft:uniform",
// // //                         min: 1,
// // //                         max: tierConfig.scale
// // //                     }
// // //                 }
// // //             ];
// // //         }
// // //         return entry;
// // //     });

// // //     pools.push({
// // //         rolls: 1,
// // //         entries: currentTierEntries
// // //     });

// // //     if (previousTierName !== null) {
// // //         pools.push({
// // //             rolls: {
// // //                 type: "minecraft:uniform",
// // //                 min: 1,
// // //                 max: 1
// // //             },
// // //             weight: Math.floor(index / 2) + 1,
// // //             bonus_rolls: 0,
// // //             entries: [
// // //                 {
// // //                     type: "minecraft:loot_table",
// // //                     name: "sunlit_cobblemon:trainer_podium_streak/" + previousTierName
// // //                 }
// // //             ]
// // //         });
// // //     }

// // //     var lootTable = {
// // //         type: "minecraft:chest",
// // //         pools: pools
// // //     };

// // //     let fileName = `${tierConfig.tier}_plus_common`;

// // //     JsonIO.write(`kubejs/data/sunlit_cobblemon/loot_tables/trainer_podium_streak/${fileName}.json`, lootTable);
// // //     previousTierName = fileName;
// // // });
// let getDropRewards = (type) =>
//     [
//         { items: ['sunlit_cobblemon:sun_drops', 'cobblemon:relic_coin', 'cobblemon:exp_candy_s'], scale: 4 },
//         { items: [`sunlit_cobblemon:pristine_${type}_gem`], scale: 1 },
//         { items: ['sunlit_cobblemon:mystica_branch', 'cobblemon:rare_candy'], scale: 1 },
//         { items: [`simpletms:type_${type}_tm`], scale: 1 },
//     ]

// global.POKEMON_TYPES.forEach((type) => {
//     let pools = [];
//     let currentTierEntries = []
//     getDropRewards(type.type).map((drop, index) => {
//         return drop.items.map((itemId) => {

//             let entry = {
//                 type: itemId.includes("simpletms") ? "minecraft:tag" : "minecraft:item",
//                 weight: index == 1 ? 6 : (index >= 2 ? 2 : 4),
//                 name: itemId
//             };
//             if (itemId.includes("simpletms")) {
//                 entry.expand = true;
//             }

//             if (drop.scale > 1) {
//                 entry.functions = [
//                     {
//                         function: "minecraft:set_count",
//                         count: {
//                             type: "minecraft:uniform",
//                             min: 1,
//                             max: drop.scale
//                         }
//                     }
//                 ];
//             }
//             currentTierEntries.push(entry);
//         })
//     });

//     pools.push({
//         rolls: 1,
//         entries: currentTierEntries
//     });

//     var lootTable = {
//         type: "minecraft:chest",
//         pools: pools
//     };

//     JsonIO.write(`kubejs/data/sunlit_cobblemon/loot_tables/badge_reward/${type.type}_type_gym.json`, lootTable);
// });


// let getDropRewards = (type) =>
//     [
//         { items: [ 'cobblemon:courage_candy', 'cobblemon:health_candy', 'cobblemon:mighty_candy', 'cobblemon:quick_candy', 'cobblemon:tough_candy', 'cobblemon:smart_candy'], scale: 1 },
//         { items: ['sunlit_cobblemon:prismatic_tm_pack', 'sunlit_cobblemon:sun_raid_statue', 'sunlit_cobblemon:sun_mirror'], scale: 1 },
//         { items: ['sunlit_cobblemon:sunlit_league_medallion', 'cobblemon_farmers:worker_permit', 'cobblemon:ancient_origin_ball', 'cobblemon:master_ball', 'cobblemon:blossom_ball'], scale: 1 },
//     ]

// global.POKEMON_TYPES.forEach((type) => {
//     let pools = [];
//     let currentTierEntries = []
//     getDropRewards(type.type).map((drop, index) => {
//         return drop.items.map((itemId) => {

//             let entry = {
//                 type: "minecraft:item",
//                 weight: Math.floor(64 / ((index + 1) * 2))  / (index + 1),
//                 name: itemId
//             };

//             if (drop.scale > 1) {
//                 entry.functions = [
//                     {
//                         function: "minecraft:set_count",
//                         count: {
//                             type: "minecraft:uniform",
//                             min: 1,
//                             max: drop.scale
//                         }
//                     }
//                 ];
//             }
//             currentTierEntries.push(entry);
//         })
//     });

//     pools.push({
//         rolls: 1,
//         entries: currentTierEntries
//     });

//     var lootTable = {
//         type: "minecraft:chest",
//         pools: pools
//     };

//     JsonIO.write(`kubejs/data/sunlit_cobblemon/loot_tables/trainer_podium_reward/100_wins.json`, lootTable);
// });
