// let pattern = [7, 14, 2, 4, 16, 9, 11, 8, 13, 6, 15, 1, 3, 12, 5, 10]

// for (let index = 1; index <= 16; index++) {
//     let blockName = `mural_stone_${index}`;
//     let modelData = {
//         parent: "minecraft:block/cube",
//         textures: {
//             particle: "minecraft:block/basalt_side",
//             down: "minecraft:block/basalt_top",
//             up: "minecraft:block/basalt_top",
//             north: `sunlit_cobblemon:block/mew/mew_statue${pattern[index - 1]}`,
//             south: "minecraft:block/basalt_side",
//             west: "minecraft:block/basalt_side",
//             east: "minecraft:block/basalt_side"
//         }
//     };
//     JsonIO.write(`kubejs/${blockName}.json`, modelData);
// }
