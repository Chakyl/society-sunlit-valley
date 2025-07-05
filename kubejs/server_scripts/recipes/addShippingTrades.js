// console.info("[SOCIETY] addShippingTrades.js loaded");

// const calculateCoins = (price) => {
//   // Finds highest possible amount of coins
//   for (let i = 0; i < global.coinMap.length; i++) {
//     let { coin, value } = global.coinMap[i];
//     if (price % value === 0) return { coin: coin, count: price / value };
//   }
// };

// ServerEvents.highPriorityData((e) => {
//   const generateShippingTrade = (item, price, attribute) => {
//     const { coin, count } = calculateCoins(price);
//     // if (count >= 70)
//     //   console.warn(
//     //     `[SOCIETY] WARNING: Shipping trade resulting in high coin count: ${item} with value ${coin}x${count}.`
//     //   );
//     e.addJson(
//       `shippingbin:trades/${item.split(":")[0]}/${item.split(":")[1]}.json`,
//       {
//         attribute: attribute,
//         input: {
//           count: 1,
//           ingredient: {
//             item: item,
//           },
//         },
//         output: {
//           item: coin,
//           count: count,
//         },
//       }
//     );
//   };
//   global.ore.forEach((oreItem) => {
//     const { item, value } = oreItem;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.pristine.forEach((pristineItem) => {
//     const { item, value } = pristineItem;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.crops.forEach((crop) => {
//     const { item, value } = crop;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.animalProducts.forEach((meat) => {
//     const { item, value } = meat;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.cooking.forEach((dish) => {
//     const { item, value } = dish;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.wines.forEach((wine) => {
//     const { item, value } = wine;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.brews.forEach((brew) => {
//     const { item, value } = brew;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.geodeList.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.frozenGeodeList.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.magmaGeodeList.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.gems.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.miscGeologist.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:gem_sell_multiplier");
//   });
//   global.artifacts.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:meat_sell_multiplier");
//   });
//   global.relics.forEach((treasure) => {
//     const { item, value } = treasure;
//     generateShippingTrade(item, value, "shippingbin:meat_sell_multiplier");
//   });
//   global.preserves.forEach((jar) => {
//     const { item, value } = jar;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.artisanGoods.forEach((good) => {
//     const { item, value } = good;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.fish.forEach((fish) => {
//     const { item, value } = fish;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.smokedFish.forEach((fish) => {
//     const { item, value } = fish;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.agedRoe.forEach((fish) => {
//     const { item, value } = fish;
//     generateShippingTrade(item, value, "shippingbin:wood_sell_multiplier");
//   });
//   global.cocktails.forEach((cocktail) => {
//     const { item, value } = cocktail;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.herbalBrews.forEach((brew) => {
//     const { item, value } = brew;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.logs.forEach((log) => {
//     const { item, value } = log;
//     generateShippingTrade(item, value, "shippingbin:crop_sell_multiplier");
//   });
//   global.miscAdventurer.forEach((miscItem) => {
//     const { item, value } = miscItem;
//     generateShippingTrade(item, value, "shippingbin:meat_sell_multiplier");
//   });
// });
