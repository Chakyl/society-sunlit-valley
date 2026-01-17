// console.info("[SOCIETY] cobblemonRadar.js loaded");

// const rarities = ["common", "uncommon", "rare", "ultra-rare"];
// const $CobblemonWorldSpawnerManager =  Java.loadClass("com.cobblemon.mod.common.api.spawning.CobblemonWorldSpawnerManager");
// const $SpawningArea = Java.loadClass(
//   "com.cobblemon.mod.common.api.spawning.spawner.SpawningArea",
// );
// const $SpawnBucket = Java.loadClass(
//   "com.cobblemon.mod.common.api.spawning.SpawnBucket",
// );
// const $SpawnCause = Java.loadClass(
//   "com.cobblemon.mod.common.api.spawning.SpawnCause",
// );
// ItemEvents.rightClicked("sunlit_cobblemon:poke_radar", (e) => {
//   const { level, player, item, server } = e;
//   let rarity = item.getNbt() || { rarity: "common" };
//   server.runCommand(`execute as ${player.username} run say yeet`);
//   const configWorldSliceDiameter = 8;
//   const configWorldSliceHeight = 16;
//   let spawnManager = $CobblemonWorldSpawnerManager.spawnersForPlayers[player.getUuid().toString()] 
//   let bucket = new $SpawnBucket("common", 1.0);
//   let cause = new $SpawnCause(undefined, bucket, player);

//   let spawnArea = new $SpawningArea(
//     cause,
//     server,
//     Math.ceil(player.x - configWorldSliceDiameter / 2.0),
//     Math.ceil(player.y - configWorldSliceHeight / 2.0),
//     Math.ceil(player.z - configWorldSliceDiameter / 2.0),
//     configWorldSliceDiameter,
//     configWorldSliceHeight,
//     configWorldSliceDiameter,
//   );
//   console.log(spawnArea);
//   global.addItemCooldown(player, item, 20);
// });
// ItemEvents.firstLeftClicked("sunlit_cobblemon:poke_radar", (e) => {
//   const { item, server, player } = e;
//   server.runCommandSilent(
//     `playsound refurbished_furniture:ui.paddle_ball.retro_click block @a ${player.x} ${player.y} ${player.z}`,
//   );
//   let newNbt = item.getNbt() || { rarity: "common" };
//   const rarityIndex = rarities.indexOf(newNbt.rarity);
//   const selectedRarity = rarities[rarityIndex === 3 ? 0 : rarityIndex + 1];
//   newNbt.rarity = selectedRarity;
//   item.nbt = newNbt;
//   const raritySelectedText = Text.translatable(
//     "sunlit_cobblemon.poke_radar.rarity_selected",
//     Text.translatable(
//       `sunlit_cobblemon.poke_radar.rarity.${selectedRarity}`,
//     ).green(),
//   );

//   global.renderUiText(
//     player,
//     server,
//     {
//       pokeRadar: {
//         type: "text",
//         x: 0,
//         y: -90,
//         text: `${raritySelectedText.toJson()}`,
//         color: "#AAAAAA",
//         alignX: "center",
//         alignY: "bottom",
//       },
//       pokeRadarShadow: {
//         type: "text",
//         x: 1,
//         z: -1,
//         y: -89,
//         text: raritySelectedText.getString(),
//         color: "#000000",
//         alignX: "center",
//         alignY: "bottom",
//       },
//     },
//     ["pokeRadar"],
//   );
//   global.addItemCooldown(player, item, 10);
// });
