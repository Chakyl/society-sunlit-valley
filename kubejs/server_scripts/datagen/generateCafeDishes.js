
// const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
// let wikiTable = []
// const blacklist = ['herbalbrews:dried_green_tea', 'unusualfishmod:raw_aero_mono_stick', 'herbalbrews:dried_black_tea', 'herbalbrews:dried_oolong_tea', 'brewery:dried_wheat', 'brewery:dried_barley', 'brewery:dried_corn', 'brewery:dried_oat']
// const dessertBlacklist = ['veggiesdelight:sweet_potato_pancakes', 'farm_and_charm:oat_pancake', 'autumnity:cooked_turkey_piece', 'candlelight:beef_tartare', 'farmersdelight:shepherds_pie_block', 'farmersdelight:honey_glazed_ham', 'farmersdelight:honey_glazed_ham_block', 'farmersdelight:shepherds_pie', 'crabbersdelight:crab_cakes']
// let dishGenerator = (dish, productType, categoryOverride) => {
//     if (blacklist.includes(dish.item)) return;
//     let category = "main";
//     if (!dessertBlacklist.includes(dish.item)) {
//         [ 'misslilitu_biscuit', 'icecream', "popsicle", "jam", "tart", "sorbet", "muffin", "candy", "candied", "pie", "cake", "Slice of", "cookie", "pudding", "jam", "jelly", "sweet", "tart", "chocolate", "snow", "gateau", "custard", "honey"].forEach((keyword) => {
//             if (dish.item.path.includes(keyword)) category = "dessert"
//         });
//     }
//     ["bottle", "drink", "cocktail", "eggnog", "coffee", "latte", "shake", "_tea", "water", "juice", "cider", "hot_cocoa"].forEach((keyword) => {
//         if (dish.item.path.includes(keyword)) category = "drink"
//     });


//     let bottleDrink = ['create:builders_tea', 'crabbersdelight:kelp_shake', 'snowyspirit:eggnog', "herbalbrews:green_tea", "herbalbrews:black_tea", "herbalbrews:hibiscus_tea", "herbalbrews:lavender_tea", "herbalbrews:coffee", "herbalbrews:milk_coffee", "herbalbrews:rooibos_tea", "herbalbrews:oolong_tea", "herbalbrews:yerba_mate_tea", "herbalbrews:cinnamon_coffee", "herbalbrews:hazelnut_coffee", "herbalbrews:chai_tea"];
//     let bowlFood = ["candlelight:beef_wellington", "candlelight:lasagne", "candlelight:chicken_with_vegetables", "candlelight:chicken_alfredo", "candlelight:salmon_on_white_wine", "candlelight:fillet_steak", "candlelight:tropical_fish_supreme", "candlelight:roasted_lamb_with_lettuce", "candlelight:roastbeef_with_glazed_carrots", "candlelight:khinkali", "candlelight:pork_ribs", "candlelight:tomato_mozzarella_salad", "candlelight:beef_with_mushroom_in_wine_and_potatoes", "candlelight:harvest_plate", "candlelight:fresh_garden_salad", "candlelight:omelet", "candlelight:pasta_with_lettuce", "candlelight:pasta_with_bolognese", "candlelight:beef_tartare", "candlelight:chocolate_mousse", "candlelight:salad", "candlelight:chicken_teriyaki", "candlelight:bolognese", "candlelight:pasta_with_mozzarella", "candlelight:beetroot_salad", "candlelight:mushroom_soup", "candlelight:tomato_soup", "farm_and_charm:simple_tomato_soup", "farm_and_charm:onion_soup", "farm_and_charm:potato_soup", "farm_and_charm:goulash", "farm_and_charm:corn_grits", "farm_and_charm:barley_patties_with_potatoes", "farm_and_charm:beef_patty_with_vegetables", "farm_and_charm:sausage_with_oat_patty", "farm_and_charm:cooked_salmon", "farm_and_charm:chicken_wrapped_in_bacon", "farm_and_charm:lamb_with_corn", "farm_and_charm:bacon_with_eggs", "farm_and_charm:oat_pancake", "farm_and_charm:farmers_breakfast"];
//     let mugDrinks = ["brewery:beer_wheat", "brewery:beer_barley", "brewery:beer_hops", "brewery:beer_nettle", "brewery:beer_oat", "brewery:beer_haley", "brewery:whiskey_jojannik", "brewery:whiskey_lilitusinglemalt", "brewery:whiskey_cristelwalker", "brewery:whiskey_maggoallan", "brewery:whiskey_carrasconlabel", "brewery:whiskey_ak", "brewery:whiskey_highland_hearth", "brewery:whiskey_smokey_reverie", "brewery:whiskey_jamesons_malt"];
//     let modid = dish.item.split(':')[0];
//     let finalizedPrice = Math.round(dish.value * 1.5);
//     let menuJson = {};
//     if (false) {
//         // Cozy Cafe prices
//         finalizedPrice = Math.max(1, Math.min(64, Math.round(dish.value / 8)))
//         menuJson.conditions = [
//             {
//                 "type": "forge:mod_loaded",
//                 "modid": modid
//             }
//         ]
//     }

//     menuJson.item = dish.item;
//     menuJson.category = categoryOverride || category;
//     menuJson.price = finalizedPrice;
//     menuJson.product_type = productType;
//     menuJson.flavors = [];
//     menuJson.themes = [];
//     if (bottleDrink.includes(dish.item)) menuJson.bottle_drink = true;
//     if (bowlFood.includes(dish.item)) menuJson.bowl_food = true;
//     if (Item.of(dish.item).hasTag('society:wine')) {
//         menuJson.bottle_drink = true;
//         menuJson.bottle = 'vinery:wine_bottle'
//     } else if (mugDrinks.includes(dish.item)) {
//         menuJson.bottle_drink = true;
//         menuJson.bottle = "brewery:beer_mug"
//     }
//     try {
//         JsonIO.write(`kubejs/data/cozycafe/menu/${modid}/${dish.item.split(":")[1]}.json`, menuJson);
//     } catch (err) {
//         console.error(`Failed to write JSON for ${modid}: ${err}`);
//     }
//     wikiTable.push({ name: formatItemName(dish.item), price: finalizedPrice, category: categoryOverride || category, productType: productType })
// }
// global.cooking.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:crop_sell_multiplier")
// });

// global.wines.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:wood_sell_multiplier", "drink")
// });

// global.brews.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:wood_sell_multiplier", "drink")
// });

// global.cocktails.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:crop_sell_multiplier")
// });

// global.herbalBrews.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:crop_sell_multiplier", "drink")
// });

// global.smokedFish.forEach((dish) => {
//     dishGenerator(dish, "shippingbin:crop_sell_multiplier", "main")
// });
// const categoryOrder = {
//     'drink': 1,
//     'main': 2,
//     'dessert': 3
// };

// const sortedData = wikiTable.slice().sort((a, b) => {
//     let weightA = categoryOrder[a.category.toLowerCase()] || 99;
//     let weightB = categoryOrder[b.category.toLowerCase()] || 99;

//     if (weightA !== weightB) {
//         return weightA - weightB;
//     }
//     return Number(a.price) - Number(b.price);
// });

// function arrayToWikimediaTable(data) {
//     if (!data || data.length === 0) return '';

//     const headers = Object.keys(data[0]);
//     let table = '{| class="wikitable sortable"\n';

//     headers.forEach(header => {
//         let formattedHeader = header === 'productType'
//             ? 'Product Type'
//             : header.charAt(0).toUpperCase() + header.slice(1);

//         table += `! ${formattedHeader}\n`;
//     });

//     data.forEach(item => {
//         table += '|-\n';
//         headers.forEach(header => {
//             let value = item[header];

//             if (header === 'price') {
//                 value = global.formatPrice(Number(value));
//             } else {
//                 value = String(value)
//                 value = value.charAt(0).toUpperCase() + value.slice(1)
//             }
//             table += `| ${value}\n`;
//         });
//     });

//     table += '|}';
//     return table;
// }

// console.log(arrayToWikimediaTable(sortedData));