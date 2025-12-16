// console.info("[SOCIETY] animalSpecial.js loaded");

// const handleSpecialItem = (data, chance, hungry, minHearts, mult, item, hasQuality, e) => {
//   const { player, target, level, server } = e;
//   const affection = data.getInt("affection") || 0;
//   let hearts = Math.floor((affection > 1000 ? 1000 : affection) / 100);
//   const bedless = global.animalHasNoBed(data);
//   if (bedless) hearts = 3;
//   let quality = 0;

//   if (!hungry && hearts >= minHearts && Math.random() <= chance) {
//     data.affection = affection + (player.stages.has("animal_whisperer") ? 20 : 10);
//     let specialItem = level.createEntity("minecraft:item");
//     if (hasQuality && hearts > 0) {
//       quality = Math.floor((hearts % 11) / 2 - 2);
//     }
//     specialItem.x = player.x;
//     specialItem.y = player.y;
//     specialItem.z = player.z;
//     specialItem.item = Item.of(
//       `${mult}x ${item}`,
//       quality > 0 ? `{quality_food:{effects:[],quality:${quality}}}` : null
//     );
//     specialItem.spawn();
//     server.runCommandSilent(
//       `playsound stardew_fishing:dwop block @a ${player.x} ${player.y} ${player.z}`
//     );
//     global.giveExperience(server, player, "husbandry", 60);
//     level.spawnParticles(
//       "farmersdelight:star",
//       true,
//       target.x,
//       target.y + 1,
//       target.z,
//       0.2 * rnd(1, 4),
//       0.2 * rnd(1, 4),
//       0.2 * rnd(1, 4),
//       3,
//       0.01
//     );
//   }
// };

// ItemEvents.entityInteracted((e) => {
//   const { hand, level, target, player, server } = e;
//   if (hand == "OFF_HAND") return;
//   if (item !== "society:magic_shears") 
//   if (!global.checkEntityTag(target, "society:husbandry_animal")) return;
//   if (hand == "MAIN_HAND") {
//     global.handleSpecialHarvest(
//       level,
//       target,
//       player,
//       server,
//       undefined,
//       undefined,
//       handleSpecialItem
//     );
//   }
// });
