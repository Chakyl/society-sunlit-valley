// const runTmDatagen = false;

// if (runTmDatagen) {
//   let tmObj = { values: [] };
//   let trObj = { values: [] };
//   let itemId;
//   Ingredient.of("@simpletms")
//     .getStacks()
//     .forEach((item) => {
//       itemId = item.id;
//       if (itemId.substring(10, 12).equals("tr")) {
//         trObj.values.push(itemId);
//       } else {
//         tmObj.values.push(itemId);
//       }
//     });
//   JsonIO.write(`kubejs/data/sunlit_cobblemon/tags/items/tr.json`, trObj);
//   JsonIO.write(`kubejs/data/sunlit_cobblemon/tags/items/tm.json`, tmObj);
// }


// const runTmDatagen = true;

// if (runTmDatagen) {
//     let trades = []
//     let itemId;
//     Ingredient.of("#sunlit_cobblemon:tr")
//         .getStacks()
//         .forEach((item) => {
//             itemId = item.id;
//             trades.push({
//                 "offer": { "item": itemId, "count": 1 },
//                 "request": {
//                     "item": "numismatics:sun",
//                     "count": 4
//                 },
//                 "numismatics_cost": 2048,
//                 "limit": 4,
//                 "trade_id": `ball_botique_random_tm_${itemId}`
//             },)
//         });
//     JsonIO.write(`kubejs/data/society_trading/random_tms.json`, {
//         "random_style": "per_day",
//         "rolled_count": 2, trades: trades
//     });
// }
