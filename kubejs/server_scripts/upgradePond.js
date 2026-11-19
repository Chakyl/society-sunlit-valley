// BlockEvents.rightClicked("society:fish_pond",
//     (e) => {
//         const { item, block, player } = e;
//         if (item.id == "unusualfishmod:depth_scythe") {
//             let nbt = block.getEntityData();
//             nbt.merge({
//                 data: {
//                     population: 10,
//                     max_population: 10,
//                 },
//             });
//             global.setBlockEntityData(block, nbt);
//         }
//     }
// );
