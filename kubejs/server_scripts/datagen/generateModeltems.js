
// let remapper = new Map([
//     ["cluttered:willow_sapling", "mystic_willow_sapling"],
//     ["meadow:pine_sapling", "alpine_sapling"],
//     ["nomansland:pine_sapling", "white_pine_sapling"],
//     ["minecraft:cherry_sapling", "cherry_blossom_sapling"]
// ]);
// [
//     "minecraft:oak_sapling",
//     "nomansland:autumnal_oak_sapling",
//     "minecraft:spruce_sapling",
//     "nomansland:pine_sapling",
//     "minecraft:birch_sapling",
//     "nomansland:yellow_birch_sapling",
//     "minecraft:jungle_sapling",
//     "minecraft:acacia_sapling",
//     "nomansland:maple_sapling",
//     "nomansland:red_maple_sapling",
//     "minecraft:dark_oak_sapling",
//     "nomansland:walnut_sapling",
//     "nomansland:willow_sapling",
//     "minecraft:cherry_sapling",
//     "nomansland:pale_cherry_sapling",
//     "minecraft:pale_oak_sapling",
//     "atmospheric:rosewood_sapling",
//     "atmospheric:morado_sapling",
//     "atmospheric:yucca_sapling",
//     "atmospheric:laurel_sapling",
//     "atmospheric:dry_laurel_sapling",
//     "atmospheric:aspen_sapling",
//     "atmospheric:green_aspen_sapling",
//     "atmospheric:kousa_sapling",
//     "atmospheric:grimwood_sapling",
//     "windswept:holly_sapling",
//     "windswept:chestnut_sapling",
//     "windswept:pine_sapling",
//     "quark:ancient_sapling",
//     "quark:blue_blossom_sapling",
//     "quark:lavender_blossom_sapling",
//     "quark:orange_blossom_sapling",
//     "quark:yellow_blossom_sapling",
//     "quark:red_blossom_sapling",
//     "culturaldelights:avocado_sapling",
//     "cluttered:willow_sapling",
//     "cluttered:poplar_sapling",
//     "windswept:flowering_acacia_sapling",
//     "minecraft:mangrove_propagule",
//     "meadow:pine_sapling",
//     "meadow:yellow_pine_sapling",
//     "meadow:alpine_birch_sapling",
//     "cluttered:crabapple_sapling",
//     "cluttered:sycamore_sapling",
//     "cluttered:fluorescent_maple_sapling"
// ].forEach(id => {
//     let namespace = id.split(":")[0]
//     let path = id.split(":")[1]

//     let mappedImg = remapper.get(`${id}`)
//     JsonIO.write(`kubejs/assets/${namespace}/models/item/${path}.json`, {
//         parent: "minecraft:item/generated",
//         textures: {
//             layer0: `society:item/sapling/${mappedImg ? mappedImg : path}`
//         }
//     })
// });
// [
//     "nomansland:shelf_mushroom",
//     "nomansland:field_mushroom",
//     "minecraft:red_mushroom",
//     "minecraft:brown_mushroom",
//     "darkerdepths:glowshroom",
//     "cluttered:blue_roundhead",
//     "cluttered:fly_agaric",
//     "ribbits:toadstool",
//     "nomansland:field_mushroom_colony",
//     "farmersdelight:brown_mushroom_colony",
//     "farmersdelight:red_mushroom_colony",
//     "minecraft:warped_fungus",
//     "minecraft:crimson_fungus"
// ].forEach(id => {
//     let namespace = id.split(":")[0]
//     let path = id.split(":")[1]

//     let mappedImg = remapper.get(`${id}`)
//     JsonIO.write(`kubejs/assets/${namespace}/models/item/${path}.json`, {
//         parent: "minecraft:item/generated",
//         textures: {
//             layer0: `society:item/shroom/${mappedImg ? mappedImg : path}`
//         }
//     })
// })
