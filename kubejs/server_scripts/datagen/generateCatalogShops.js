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
//     const itemName = id.includes(':') ? id.split(':')[1] : id;
//     const parts = itemName.split('_');
//     const lastWord = parts[parts.length - 1].toLowerCase();

//     for (let i = 0; i < fantasySortOrder.length; i++) {
//         let keyword = fantasySortOrder[i];
//         if (keyword.includes('/')) {
//             if (keyword.split('/').some(part => lastWord.includes(part))) return i;
//         } else if (lastWord.includes(keyword)) {
//             return i;
//         }
//     }
//     return fantasySortOrder.length;
// };

// const priceKeywordTable = [
//     { keyword: "froggy_chair", price: 8 },
//     { keyword: "gorgeous", price: 12 },
//     { keyword: "slot_machine", price: 64 },
//     { keyword: "gatcha_machine", price: 64 },
//     { keyword: "emblem_clock", price: 16 },
//     { keyword: "station_clock", price: 16 },
//     { keyword: "neon", price: 5 },
//     { keyword: "plasma", price: 16 },
//     { keyword: "lucky", price: 16 },
//     { keyword: "rocket", price: 24 },
//     { keyword: "science_pod", price: 48 },
//     { keyword: "tower", price: 16 },
//     { keyword: "rattan", price: 6 },
//     { keyword: "vintage", price: 24 },
//     { keyword: "antique", price: 6 },
//     { keyword: "display_case", price: 6 },
//     { keyword: "chair", price: 1 },
//     { keyword: "stool", price: 1 },
//     { keyword: "/wool", price: 1 },
//     { keyword: "royal/wool", price: 2 },
//     { keyword: "streamer", price: 1 },
//     { keyword: "garland", price: 1 },
//     { keyword: "tarp", price: 2 },
//     { keyword: "table", price: 3 },
//     { keyword: "bed", price: 4 },
//     { keyword: "bookcase", price: 5 },
//     { keyword: "bookshelf", price: 5 },
//     { keyword: "wardrobe", price: 6 },
//     { keyword: "atm", price: 12 },
//     { keyword: "toaster", price: 14 },
//     { keyword: "bench", price: 3 },
//     { keyword: "vase", price: 6 },
//     { keyword: "jars", price: 6 },
//     { keyword: "mirror", price: 9 },
//     { keyword: "picture_frame", price: 1 },
//     { keyword: "painting", price: 2 },
//     { keyword: "lamp", price: 2 },
//     { keyword: "sofa", price: 5 },
//     { keyword: "clock", price: 10 },
//     { keyword: "royal", price: 18 },
// ];
// const createTrade = (id, catalog, defaultPrice) => {
//     let finalPrice = defaultPrice;

//     for (let i = 0; i < priceKeywordTable.length; i++) {
//         if (id.includes(priceKeywordTable[i].keyword)) {
//             finalPrice = priceKeywordTable[i].price;
//             break;
//         }
//     }
//     return {
//         offer: {
//             item: id,
//             count: id.includes("/wool") ? 8 : 1
//         },
//         request: {
//             item: "numismatics:crown",
//             count: finalPrice
//         },
//         numismatics_cost: finalPrice * 512,
//         trade_id: `${catalog}_purchasing_${id.replace(":", "_")}`
//     };
// };

// const getSortKeys = (id) => {
//     const itemName = id.includes(':') ? id.split(':')[1] : id;
//     const parts = itemName.split('_');
//     let remainder = parts.slice(0, -1).join('_').toLowerCase();

//     for (const color of ['white', 'orange', 'magenta', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'light_blue', 'turquoise', 'brown', 'green', 'red', 'black']) {
//         if (remainder.startsWith(color + '_')) {
//             remainder = remainder.replace(color + '_', '');
//             break;
//         }
//     }

//     return {
//         lastWord: parts[parts.length - 1].toLowerCase(),
//         remainder: remainder,
//         fullName: itemName.toLowerCase()
//     };
// };

// const catalogGenerationFunction = (catalog, defaultPrice) => {
//     let shopJson = {};
//     let shopTrades = [];

//     if (catalog === "fantasy") {
//         Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
//             shopTrades.push(createTrade(item.id, catalog, defaultPrice));
//         });
//         shopTrades.sort((a, b) => fantasyCompariator(a.offer.item) - fantasyCompariator(b.offer.item));
//     } else {
//         global.lootFurniture.forEach((item) => {
//             if ((catalog == "tanuki" && (item.includes("tanukidecor") || item.includes("whimsy_deco"))) ||
//                 (catalog != "tanuki" && !(item.includes("tanukidecor") || item.includes("whimsy_deco")))) {
//                 shopTrades.push(createTrade(item, catalog, defaultPrice));
//             }
//         });

//         shopTrades.sort((a, b) => {
//             const keysA = getSortKeys(a.offer.item);
//             const keysB = getSortKeys(b.offer.item);
//             return keysA.lastWord.localeCompare(keysB.lastWord) ||
//                 keysA.remainder.localeCompare(keysB.remainder) ||
//                 keysA.fullName.localeCompare(keysB.fullName);
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