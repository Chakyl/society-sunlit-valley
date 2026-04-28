// console.info("[SOCIETY] cobblemonWikiScripts.js loaded");

// const generateWikiGachaTables = (spawnMap) => {
//   let output = "";
//   for (const [category, spawns] of spawnMap) {
//     output += `=== ${global.formatName(category)} ===\n`;
//     output += `{| class="wikitable sortable"\n`;
//     output += `! Pokémon\n! Variant\n! Weight\n! Level Range\n`;

//     spawns.forEach(entry => {
//       const variant = entry.variant ? entry.variant.join(", ") : "—";
//       const levels = entry.lvlRange ? `${entry.lvlRange[0]}-${entry.lvlRange[1]}` : "—";

//       output += `|-\n`;
//       output += `| ${global.formatName(entry.pokemon)}\n`;
//       output += `| ${variant || "-"}\n`;
//       output += `| ${entry.weight}\n`;
//       output += `| ${levels}\n`;
//     });
//     output += `|}\n\n`;
//   }

//   return output;
// }

// ItemEvents.rightClicked("unimplemented_items:potion", (e) => {
//   console.log(generateWikiGachaTables(specialGachaSpawns.set("base", baseGachaSpawns)));
// });

// const bobberMap = {
//   'common': 'Poke Bobber',
//   'uncommon': 'Great Poke Bobber',
//   'rare': 'Ultra Poke Bobber',
//   'epic': 'Master Poke Bobber',
//   'legendary': 'Master Poke Bobber'
// };

// const generateNetherFishingWikiTable = (pool) => {
//   let wiki = `{| class="wikitable sortable"\n`;
//   wiki += `! Pokémon !! Variant !! Weight !! Levels !! Bobbers\n`;

//   pool.forEach(p => {
//     const variant = p.variant ? p.variant.join(", ") : "—";
//     const levels = `${p.lvlRange[0]}-${p.lvlRange[1]}`;

//     const bobberList = p.tiers
//       .map(tier => bobberMap[tier.toLowerCase()] || tier)
//       .join(", ");

//     wiki += `|-\n`;
//     wiki += `| ${global.formatName(p.pokemon)} || ${variant} || ${p.weight} || ${levels} || ${bobberList}\n`;
//   });

//   wiki += `|}`;
//   return wiki;
// }

// const generateOverworldFishingWikiTables = (pool) => {
//   let seasonsSeen = {};
//   let uniqueSeasons = [];

//   for (let i = 0; i < pool.length; i++) {
//     let item = pool[i];
//     for (let j = 0; j < item.seasons.length; j++) {
//       let s = item.seasons[j].split(',');
//       for (let k = 0; k < s.length; k++) {
//         let seasonName = s[k].trim().toLowerCase();
//         if (!seasonsSeen[seasonName]) {
//           seasonsSeen[seasonName] = true;
//           uniqueSeasons.push(seasonName);
//         }
//       }
//     }
//   }
//   uniqueSeasons.sort();
//   let output = "";
//   for (let sIndex = 0; sIndex < uniqueSeasons.length; sIndex++) {
//     let currentSeason = uniqueSeasons[sIndex];
//     output += "=== " + global.formatName(currentSeason) + " ===\n";
//     output += "{| class=\"wikitable sortable\"\n";
//     output += "! Pokémon !! Variant !! Weight !! Levels !! Bobbers !! Water Types\n";

//     for (let pIndex = 0; pIndex < pool.length; pIndex++) {
//       let p = pool[pIndex];

//       let inSeason = false;
//       for (let sj = 0; sj < p.seasons.length; sj++) {
//         let subSeasons = p.seasons[sj].split(',');
//         for (let sk = 0; sk < subSeasons.length; sk++) {
//           if (subSeasons[sk].trim().toLowerCase() === currentSeason) {
//             inSeason = true;
//             break;
//           }
//         }
//         if (inSeason) break;
//       }

//       if (inSeason) {
//         let variant = p.variant ? p.variant.join(", ") : "—";
//         let levels = p.lvlRange[0] + "-" + p.lvlRange[1];

//         let bobberList = [];
//         for (let t = 0; t < p.tiers.length; t++) {
//           let tierKey = p.tiers[t].toLowerCase();
//           bobberList.push(bobberMap[tierKey] || p.tiers[t]);
//         }

//         let water = p.waterTypes.join(", ");

//         output += "|-\n";
//         output += `| ${global.formatName(p.pokemon)} || ${variant} || ${p.weight} || ${levels} || ${bobberList.join(", ")} || ${water}\n`;
//       }
//     }

//     output += "|}\n\n";
//   }

//   return output;
// }


// ItemEvents.rightClicked("unimplemented_items:hyper_potion", (e) => {
//   // console.log(generateOverworldFishingWikiTables(global.cobblemonFishPool));
//   console.log(generateNetherFishingWikiTable(global.cobblemonNetherFishPool))
// });

