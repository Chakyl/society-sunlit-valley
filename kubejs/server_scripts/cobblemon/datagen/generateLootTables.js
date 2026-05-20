
// let previousTierName = null;

// [
//     { tier: 20, items: ['sunlit_cobblemon:sun_drops', 'cobblemon:relic_coin', 'cobblemon:exp_candy_s'], scale: 4 },
//     { tier: 40, items: ['cobblemon:exp_candy_m', 'cobblemon:genius_mochi', 'cobblemon:clever_mochi', 'cobblemon:health_mochi', 'cobblemon:swift_mochi', 'cobblemon:resist_mochi', 'cobblemon:muscle_mochi'], scale: 3 },
//     { tier: 80, items: ['cobblemon:exp_candy_m', 'cobblemon:relic_coin_pouch', 'sunlit_cobblemon:mystica_cookie'], scale: 2 },
//     { tier: 160, items: ['cobblemon:exp_candy_l', 'cobblemon:exp_candy_xl', 'sunlit_cobblemon:mystica_branch'], scale: 2 },
//     { tier: 320, items: ['society:prismatic_shard', 'cobblemon:rare_candy'], scale: 1 },
//     { tier: 640, items: ['sunlit_cobblemon:mystica_branch', 'cobblemon:rare_candy'], scale: 4 },
//     { tier: 1000, items: ['sunlit_cobblemon:sun_drops'], scale: 16 }
// ].forEach((tierConfig, index) => {
//     let pools = [];

//     let currentTierEntries = tierConfig.items.map((itemId) => {
//         let entry = {
//             type: "minecraft:item",
//             weight: Math.floor(index / 2) + 1,
//             name: itemId
//         };

//         if (tierConfig.scale > 1) {
//             entry.functions = [
//                 {
//                     function: "minecraft:set_count",
//                     count: {
//                         type: "minecraft:uniform",
//                         min: 1,
//                         max: tierConfig.scale
//                     }
//                 }
//             ];
//         }
//         return entry;
//     });

//     pools.push({
//         rolls: 1,
//         entries: currentTierEntries
//     });

//     if (previousTierName !== null) {
//         pools.push({
//             rolls: {
//                 type: "minecraft:uniform",
//                 min: 1,
//                 max: 1
//             },
//             weight: Math.floor(index / 2) + 1,
//             bonus_rolls: 0,
//             entries: [
//                 {
//                     type: "minecraft:loot_table",
//                     name: "sunlit_cobblemon:trainer_podium_streak/" + previousTierName
//                 }
//             ]
//         });
//     }

//     var lootTable = {
//         type: "minecraft:chest",
//         pools: pools
//     };

//     let fileName = `${tierConfig.tier}_plus_common`;

//     JsonIO.write(`kubejs/data/sunlit_cobblemon/loot_tables/trainer_podium_streak/${fileName}.json`, lootTable);
//     previousTierName = fileName;
// });


// let previousTierName = null;

// [
//     { tier: 20, items: ['cobblemon:iron', 'cobblemon:calcium', 'cobblemon:protein', 'cobblemon:hp_up', 'cobblemon:carbos', 'cobblemon:pp_up', 'cobblemon:zinc', 'sunlit_cobblemon:tm_pack', 'sunlit_cobblemon:pofflet_box'], scale: 1 },
//     { tier: 40, items: ['sunlit_cobblemon:sun_essence', 'society:candied_animal_feed', 'cobblemon:pp_max', 'sunlit_cobblemon:cosmic_dust', 'unimplemented_items:dry_root', 'society:prize_ticket'], scale: 1 },
//     { tier: 80, items: ['sunlit_cobblemon:greater_tm_pack', 'society:cordycep', 'society:sea_biscut', 'society:infinity_worm', 'society:ancient_cog', 'society:stone_hand', 'society:gray_anatomy', 'society:frosted_tip', 'society:tiny_gnome'], scale: 1 },
//     { tier: 160, items: [ 'cobblemon:masterpiece_teacup'], scale: 1 },
//     { tier: 320, items: ['society:artifact_trove', 'cobblemon:mighty_candy', 'cobblemon:quick_candy', 'cobblemon:smart_candy', 'cobblemon:tough_candy', 'cobblemon:health_candy', 'cobblemon:courage_candy', 'cobblemon:prism_scale'], scale: 2 },
//     { tier: 640, items: ['sunlit_cobblemon:sun_raid_statue', 'cobblemon:beast_ball', 'society:relic_trove', 'unimplemented_items:bottle_cap_sa', 'unimplemented_items:bottle_cap_atk', 'unimplemented_items:bottle_cap_def', 'unimplemented_items:bottle_cap_sd', 'unimplemented_items:bottle_cap_spd', 'unimplemented_items:bottle_cap_hp', 'cobblemon:ability_capsule'], scale: 1 },
//     { tier: 1000, items: ['sunlit_cobblemon:prismatic_tm_pack', 'cobblemon:ability_patch', 'sunlit_cobblemon:mystery_gift', 'society:broken_clock', 'society:pink_matter', 'society:black_opal', 'society:ancient_roe', 'society:enkephalin', 'society:inserter', 'cobblemon:cherish_ball', 'cobblemon:master_ball', 'sunlit_cobblemon:sun_mirror', 'cobblemon_farmers:worker_permit'], scale: 1 }
// ].forEach((tierConfig, index) => {
//     let pools = [];

//     let currentTierEntries = tierConfig.items.map((itemId) => {
//         let entry = {
//             type: "minecraft:item",
//             weight: 10,
//             name: itemId
//         };

//         if (tierConfig.scale > 1) {
//             entry.functions = [
//                 {
//                     function: "minecraft:set_count",
//                     count: {
//                         type: "minecraft:uniform",
//                         min: 1,
//                         max: tierConfig.scale
//                     }
//                 }
//             ];
//         }
//         return entry;
//     });

//     pools.push({
//         rolls: 1,
//         entries: currentTierEntries
//     });

//     if (previousTierName !== null) {
//         pools.push({
//             rolls: {
//                 type: "minecraft:uniform",
//                 min: 1,
//                 max: 1
//             },
//             weight: 10,
//             bonus_rolls: 0,
//             entries: [
//                 {
//                     type: "minecraft:loot_table",
//                     name: "sunlit_cobblemon:trainer_podium_streak/" + previousTierName
//                 }
//             ]
//         });
//     }

//     var lootTable = {
//         type: "minecraft:chest",
//         pools: pools
//     };

//     let fileName = `${tierConfig.tier}_plus_rare`;

//     JsonIO.write(`kubejs/data/sunlit_cobblemon/loot_tables/trainer_podium_streak/${fileName}.json`, lootTable);
//     previousTierName = fileName;
// });
