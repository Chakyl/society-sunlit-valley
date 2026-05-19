// const baseboardTypes = ["", "birch", "dark_oak", "jungle", "oak", "spruce"];

// if (false) {
//   let woodPath;
//   let blockstateJson = {
//     variants: {},
//   };
//   ["bee", "hive", "bunny", "cloud", "pink_flower"].forEach((wallpaperType) => {
//     if (wallpaperType !== "bee") {
//       baseboardTypes.forEach((woodType, index) => {
//         woodPath = woodType !== "" ? `${woodType}_` : "";
//         JsonIO.write(
//           `kubejs/assets/society/models/block/wallpaper/${wallpaperType}_${woodPath}baseboard.json`,
//           {
//             parent: "minecraft:block/cube_bottom_top",
//             textures: {
//               bottom:
//                 woodType === ""
//                   ? `society:block/wallpaper/${wallpaperType}/bottom`
//                   : `society:block/baseboard/${woodPath}bottom`,
//               side: `society:block/wallpaper/${wallpaperType}/${woodPath}side`,
//               top: `society:block/wallpaper/${wallpaperType}/top`,
//             },
//           }
//         );
//         blockstateJson.variants[`type=${index}`] = {
//           model: `society:block/wallpaper/${wallpaperType}_${woodPath}baseboard`,
//         };
//       });
//       JsonIO.write(
//         `kubejs/assets/society/blockstates/${wallpaperType}_baseboard.json`,
//         blockstateJson
//       );
//     }
//     JsonIO.write(`kubejs/assets/society/models/block/wallpaper/${wallpaperType}_wallpaper.json`, {
//       parent: "minecraft:block/cube_column",
//       textures: {
//         end: `society:block/wallpaper/${wallpaperType}/top`,
//         side: `society:block/wallpaper/${wallpaperType}/base`,
//       },
//     });
//   });
// }
