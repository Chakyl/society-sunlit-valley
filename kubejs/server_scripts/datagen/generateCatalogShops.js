// const catalogGenerationFunction = (catalog, price) => {
//   let shopJson = {};
//   let shopTrades;

//   shopTrades = []
//   if (catalog === "fantasy") {
//     Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
//         shopTrades.push({
//           offer: {
//             item: item.id,
//             count: 1
//           },
//           request: {
//             item: "numismatics:crown",
//             count: price
//           },
//           numismatics_cost: price * 512,
//           trade_id: `${catalog}_purchasing_${item.getItem().id.replace(":", "_")}`
//         });
//     })
//   } else {
//     global.lootFurniture.forEach((item) => {
//       let isTanuki = item.includes("tanukidecor") || item.includes("whimsy_deco");
//       if ((catalog == "tanuki" && isTanuki) || catalog != "tanuki" && !isTanuki) {
//         shopTrades.push({
//           offer: {
//             item: item,
//             count: 1
//           },
//           request: {
//             item: "numismatics:crown",
//             count: price
//           },
//           numismatics_cost: price * 512,
//           trade_id: `${catalog}_purchasing_${item.replace(":", "_")}`
//         });
//       }
//     })
//   }
//   shopJson = {
//     shop_id: `${catalog}_catalog`,
//     name: `shop.society_trading.catalog.${catalog}`,
//     hidden_from_selector: true,
//     display_type: "thin",
//     texture: "",
//     jei_catalyst: {
//       item: `society:${catalog}_catalog`
//     },
//     block_tag: `society:opens_${catalog}_catalog`,
//     trades: shopTrades
//   };
//   JsonIO.write(
//     `kubejs/data/society_trading/shops/${catalog}_catalog.json`, shopJson
//   );
// }
// if (true) {
//   catalogGenerationFunction("tanuki", 4);
//   catalogGenerationFunction("fantasy", 6);
//   catalogGenerationFunction("modern", 8);
// }
