// const fantasySortOrder = [
//     "decorations",
//     "dunmer",
//     "necrolord",
//     "venthyr",
//     "nordic",
//     "bone/skeleton",
//     "bone/wither",
//     "royal"
// ];

// const fantasyCompariator = (id) => {
//     for (let i = 0; i < fantasySortOrder.length; i++) {
//         let keyword = fantasySortOrder[i];
//         if (keyword.includes('/')) {
//             if (keyword.split('/').some(part => id.includes(part))) return i;
//         } else if (id.includes(keyword)) {
//             return i;
//         }
//     }
//     return fantasySortOrder.length;
// };

// const createTrade = (id, catalog, price) => {
//     const finalPrice = id.toLowerCase().includes("royal") ? price * 3 : price;
//     return {
//         offer: {
//             item: id,
//             count: 1
//         },
//         request: {
//             item: "numismatics:crown",
//             count: finalPrice
//         },
//         numismatics_cost: finalPrice * 512,
//         trade_id: `${catalog}_purchasing_${id.replace(":", "_")}`
//     };
// };


// const catalogGenerationFunction = (catalog, price) => {
//     let shopJson = {};
//     let shopTrades = [];

//     if (catalog === "fantasy") {
//         Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
//             shopTrades.push(createTrade(item.id, catalog, price));
//         });
//         shopTrades.sort((a, b) => fantasyCompariator(a.offer.item) - fantasyCompariator(b.offer.item));
//     } else {
//         global.lootFurniture.forEach((item) => {
//             let isTanuki = item.includes("tanukidecor") || item.includes("whimsy_deco");
//             if ((catalog == "tanuki" && isTanuki) || (catalog != "tanuki" && !isTanuki)) {
//                 shopTrades.push(createTrade(item, catalog, price));
//             }
//         });
//     }

//     shopJson = {
//         shop_id: `${catalog}_catalog`,
//         name: `shop.society_trading.${catalog}_catalog`,
//         hidden_from_selector: true,
//         display_type: "thin",
//         texture: "",
//         jei_catalyst: {
//             item: `society:${catalog}_catalog`
//         },
//         block_tag: `society:opens_${catalog}_catalog`,
//         trades: shopTrades
//     };

//     JsonIO.write(
//         `kubejs/data/society_trading/shops/${catalog}_catalog.json`, shopJson
//     );
// }

// if (true) {
//     catalogGenerationFunction("tanuki", 4);
//     catalogGenerationFunction("fantasy", 6);
//     catalogGenerationFunction("modern", 8);
// }
