


// if (true) {
//     let translationKeys = {};
//     [
//         { title: "workstation_evs_ivs", content: "The IVs and EVs of a Pokémon affect its performance in a workstation." },
//         { title: "pokemon_friendship_0", content: "Bake Pofflets to increase your Pokémon's friendship!" },
//         { title: "pokemon_friendship_1", content: "Battle with you Pokémon to increase its friendship." },
//         { title: "pokemon_friendship_2", content: "Letting a Pokémon walk around outside of its ball slowly increases its friendship." },
//         { title: "sun_raid_statue_pool", content: "Sun Raid Statues draw from the current spawn pool of a location." },
//         { title: "sun_raid_statue_shiny", content: "Sun Raid Statues have a higher chance of spawning Shiny Pokémon." },
//         { title: "mystica_cookie", content: "Mystica Cookies can be used to look for specific Pokémon in a biome's pool." },
//         { title: "quest_catching", content: "Evolving a Pokémon also counts as catch in the trainer rank quests." },
//         { title: "quest_hatching", content: "Hatching a Pokémon also counts as catch in the trainer rank quests." },
//         { title: "breeding_shiny", content: "Breeding a Pokémon with a ditto from another trainer increases its chance of laying a shiny egg." },
//         { title: "surprise_crops", content: "Certain types of Pokémon will pop out from harvesting certain types of crops." },
//         { title: "surprise_ore", content: "Certain types of Pokémon will pop out from mining certain ore." },
//         { title: "slugma", content: "What's Slugma?" },
//         { title: "magikarp_taiyaki", content: "Nobody has figured out how Magikarp makes its famous Taiyaki." },
//         { title: "trainer_podium_average", content: "The trainers that come to your gym are based on your team's average level." },
//         { title: "trainer_podium_too_high", content: "Having an overleveled Pokémon compared to your team makes gym trainers harder." },
//         { title: "ranching_drops", content: "Ranching Stations can be used to farm a Pokémon's drops using Magic Shears or Fairy Types." },
//     ].forEach((tip) => {
//         translationKeys[`sunlit_cobblemon_tips.tip.${tip.title}`] = tip.content;
//         JsonIO.write(`kubejs/assets/sunlit_cobblemon/tips/${tip.title}.json`, {
//             "tip": {
//                 "translate": `sunlit_cobblemon_tips.tip.${tip.title}`
//             }
//         });
//     })

//     JsonIO.write(`kubejs/assets/sunlit_cobblemon_tips/lang/en_us.json`, translationKeys);
// }