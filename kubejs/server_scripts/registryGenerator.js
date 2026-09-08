const debug = false;
const CROP_VALUE_PER_DAY = 12;

// IMPORTANT: If a recipes output is used an ingredient of another recipe, it must be defined before its usage!
const dishes = [
    // Base Ingredients
    { dish: "minecraft:bread", ingredients: ['#c:foods/dough'], cookedCount: 1, type: "smoker" },
    { dish: "create:wheat_flour", ingredients: ["minecraft:wheat"], cookedCount: 4, notDish: true, type: "milling" },
    { dish: 'farmersdelight:pie_crust', ingredients: ["create:wheat_flour", "#society:small_milk"], cookedCount: 1, notDish: true, type: "crafting_shapeless" },
    { dish: "farmersdelight:cabbage_leaf", ingredients: ["farmersdelight:cabbage"], cookedCount: 2, notDish: true, type: "chopping" },
    // Bell Pepper
    { dish: "veggiesdelight:smoked_bellpepper", ingredients: ["veggiesdelight:bellpepper"], cookedCount: 1, type: "smoker" },
    { dish: "veggiesdelight:cacciatore", ingredients: ["veggiesdelight:bellpepper", "farmersdelight:tomato", 'minecraft:rabbit'], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:stuffed_bellpeppers_block", ingredients: ["veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "#c:raw_meat"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:stuffed_bellpepper", ingredients: ["veggiesdelight:stuffed_bellpeppers_block"], cookedCount: 3, type: "feast" },
    { dish: 'veggiesdelight:shakshouka', ingredients: ["veggiesdelight:bellpepper", "farmersdelight:tomato", "#c:eggs"], cookedCount: 1, type: "cooking_pot" },
    // Broccoli
    { dish: "veggiesdelight:steak_and_broccoli", ingredients: ["veggiesdelight:broccoli", "minecraft:beef", "farmersdelight:rice"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:broccoli_soup", ingredients: ["veggiesdelight:broccoli", "veggiesdelight:broccoli", "#society:large_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:pasta_with_broccoli", ingredients: ["veggiesdelight:broccoli", "#c:foods/pasta", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:broccoli_salad", ingredients: ["veggiesdelight:broccoli", "farmersdelight:tomato", "farmersdelight:onion"], cookedCount: 1, type: "bowl" },
    // Zucchini
    { dish: "veggiesdelight:roasted_zucchini", ingredients: ["veggiesdelight:zucchini"], cookedCount: 1, type: "smoker" },
    { dish: "veggiesdelight:zucchini_sandwich", ingredients: ["minecraft:bread", "veggiesdelight:zucchini", 'farmersdelight:cabbage_leaf', "farmersdelight:tomato"], cookedCount: 1, type: "smoker" },
    { dish: "veggiesdelight:zucchini_quiche", ingredients: ["minecraft:air", "veggiesdelight:zucchini", "minecraft:air", "minecraft:air", "#c:cheese", "minecraft:air", "minecraft:air", "farmersdelight:pie_crust", "minecraft:air"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:zucchini_quiche_slice", ingredients: ["veggiesdelight:zucchini_quiche"], cookedCount: 4, type: "chopping" },
    { dish: "veggiesdelight:stuffed_zucchinis", ingredients: ["veggiesdelight:zucchini", "veggiesdelight:zucchini", "#c:raw_meat"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:stuffed_zucchini_boat", ingredients: ["#society:small_milk", "veggiesdelight:zucchini", "#c:raw_meat"], cookedCount: 1, type: "oven" },
    // Turnip
    { dish: "veggiesdelight:turnip_water", ingredients: ["veggiesdelight:turnip", "veggiesdelight:turnip", 'minecraft:sugar'], cookedCount: 1, type: "crafting_shapeless" },
    // TODO: stick?
    { dish: "veggiesdelight:turnip_mutton_skewer", ingredients: ["veggiesdelight:turnip", 'minecraft:mutton'], cookedCount: 1, type: "smoker" },
    { dish: "veggiesdelight:turnip_salad", ingredients: ["veggiesdelight:turnip", "farmersdelight:cabbage_leaf", "farmersdelight:cabbage_leaf"], cookedCount: 1, type: "bowl" },
    { dish: "veggiesdelight:turnip_cake", ingredients: ["veggiesdelight:turnip", "farmersdelight:rice", 'culturaldelights:corn_cob', '#c:foods/dough'], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:turnip_beef_stew", ingredients: ["veggiesdelight:turnip", "minecraft:carrot", 'minecraft:beef'], cookedCount: 1, type: "cooking_pot" },
    // Cauliflower
    { dish: "veggiesdelight:cauliflower_kuku", ingredients: ["veggiesdelight:cauliflower", "farmersdelight:onion", "veggiesdelight:garlic", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:cauliflower_soup", ingredients: ["veggiesdelight:cauliflower", "veggiesdelight:cauliflower", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:garlic_rice_with_cauliflower", ingredients: ["veggiesdelight:cauliflower", "veggiesdelight:garlic", "farmersdelight:cooked_rice", "#c:eggs" ], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:cauliflower_bread", ingredients: ["veggiesdelight:cauliflower", "veggiesdelight:cauliflower", "minecraft:wheat"], cookedCount: 1, type: "oven" },
    // // Beetroot
    { dish: "minecraft:beetroot_soup", ingredients: ["minecraft:beetroot", "minecraft:beetroot", "minecraft:beetroot"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:beetroot_brownie_tray", ingredients: ["minecraft:beetroot", "minecraft:beetroot", "minecraft:beetroot", "minecraft:cocoa_beans", "minecraft:sugar", "minecraft:cocoa_beans", "#c:eggs", "minecraft:sugar", "#c:eggs"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:beetroot_brownie", ingredients: ["veggiesdelight:beetroot_brownie_tray"], cookedCount: 4, type: "chopping" },
    { dish: "veggiesdelight:vegetables_wrap", ingredients: ["minecraft:beetroot", "#c:foods:dough", "farmersdelight:cooked_rice","farmersdelight:onion", "#c:foods/leafy_green", "#c:mushrooms"], cookedCount: 1, type: "crafting_shapeless" },
    // // Garlic
    { dish: "veggiesdelight:garlic_chicken_stew", ingredients: ["veggiesdelight:garlic", "#c:foods/cooked_chicken", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:garlic_baked_cod", ingredients: ["veggiesdelight:garlic", "farmersdelight:cod_slice", "fruittreemod:lemon"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:garlic_stuffed_mushrooms", ingredients: ["veggiesdelight:garlic", "#c:foods/cabbage", "#c:mushrooms", "#c:mushrooms"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:garlic_bread", ingredients: ["minecraft:bread", "veggiesdelight:garlic"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:garlic_bread", ingredients: ["minecraft:bread", "veggiesdelight:garlic", "#c:cheese"], cookedCount: 1, type: "oven" },
    // // Pumpkin
    { dish: "minecraft:pumpkin_pie", ingredients: ["minecraft:pumpkin", "minecraft:sugar", "#c:eggs"], cookedCount: 1, type: "crafting_shapeless" },
    { dish: "minecraft:pumpkin_pie", ingredients: ["farmersdelight:pumpkin_slice", "#c:eggs", "farmersdelight:pumpkin_slice", "farmersdelight:pumpkin_slice", "minecraft:sugar", "farmersdelight:pumpkin_slice", "minecraft:air", "farmersdelight:pie_crust", "minecraft:air" ], cookedCount: 2, type: "oven" },
    { dish: "farmersdelight:pumpkin_soup", ingredients: ["farmersdelight:pumpkin_slice", "#c:foods/leafy_green", "#c:foods/raw_pork", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "farmersdelight:stuffed_pumpkin_block", ingredients: ["farmersdelight:rice", "farmersdelight:onion", "minecraft:brown_mushroom", "#c:crops/potato", "#c:foods/berry", "#c:foods/vegetable"], cookedCount: 1, type: "oven" },
    { dish: "farmersdelight:stuffed_pumpkin", ingredients: ["farmersdelight:stuffed_pumpkin_block"], cookedCount: 3, type: "feast" },
    { dish: "starcatcher_delight:pumpkin_taiyaki", ingredients: ["farmersdelight:pumpkin_slice", "#c:foods/dough", "starcatcher:starcaught_fishable_fish"], cookedCount: 4, type: "cooking_pot" },
    // Enable when Art. { dish: "society:pumpking_chai_latte", ingredients: ["farmersdelight:pumpkin_slice", "society:chai_blend", "#society:small_milk", "society:maple_syrup"], cookedCount: 1, type: "crafting_shapeless" },
    // // Ginger
    { dish: "windswept:gingerbread_cookie", ingredients: ["windswept:ginger", "minecraft:sugar", "minecraft:wheat"], cookedCount: 8, type: "crafting_shapeless" },
    { dish: "windswept:christmas_pudding", ingredients: ["windswept:ginger", "windswept:holly_berries", "windswept:roasted_chestnuts", "minecraft:sugar", "#c:eggs", "minecraft:wheat"], cookedCount: 1, type: "oven" },
    { dish: "windswept_delights:christmas_pudding_slice", ingredients: ["windswept:christmas_pudding"], cookedCount: 4, type: "feast" },
    { dish: "windswept:ginger_tea", ingredients: ["windswept:ginger", "windswept:ginger", "minecraft:sugar"], cookedCount: 1, type: "cooking_pot" },
    // // Carrots
    { dish: "veggiesdelight:carrot_cake", ingredients: ["society:small_milk", "society:small_milk", "society:small_milk", "minecraft:sugar:", "#c:eggs", "minecraft:wheat", "minecraft:carrot", "minecraft:carrot", "minecraft:carrot"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:carrot_cake_slice", ingredients: ["veggiesdelight:carrot_cake"], cookedCount: 7, type: "feast" },
    { dish: "minecraft:golden_carrot", ingredients: ["minecraft:gold_nugget","minecraft:gold_nugget", "minecraft:gold_nugget", "minecraft:gold_nugget","minecraft:carrot", "minecraft:gold_nugget", "minecraft:gold_nugget", "minecraft:gold_nugget","minecraft:gold_nugget"], cookedCount: 1, type: "crafting_shaped" },
    { dish: "farmersdelight:vegetable_noodles", ingredients: ["minecraft:carrot", "#c:mushrooms", "#c:foods/pasta", "#c:foods/leafy_green", "#c:foods/vegetable"], cookedCount: 1, type: "cooking_pot" },
    { dish: "farmersdelight:vegetable_soup", ingredients: ["minecraft:carrot", "minecraft:potato", "#c:foods/vegetable", "#c:foods/leafy_green"], cookedCount: 1, type: "cooking_pot" },
    // // Potato
    { dish: "farmersdelight:stuffed_potato", ingredients: ["minecraft:baked_potato", "#c:foods/cooked_beef", "society:small_milk"], cookedCount: 1, type: "crafting_shapeless" },
    { dish: "veggiesdelight:potato_noodle", ingredients: ["minecraft:potato", "minecraft:potato", "minecraft:potato"], cookedCount: 3, type: "cooking_pot" },
    { dish: "farmersdelight:steak_and_potatoes", ingredients: ["minecraft:baked_potato", "minecraft:cooked_beef", "minecraft:bowl", "farmersdelight:onion", "farmersdelight:cooked_rice"], cookedCount: 1, type: "shapeless_crafting" },
    { dish: "minecraft:baked_potato", ingredients: ["minecraft:potato"], cookedCount: 1, type: "smoker" },
    { dish: "nomansland:mashed_potatoes_with_mushrooms", ingredients: ["#c:mushrooms", "#c:mushrooms", "#c:mushrooms", "minecraft:potato", "minecraft:potato"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:potato_noodles", ingredients: ["veggiesdelight:potato_noodle", "veggiesdelight:potato_noodle", "farmersdelight:onion"], cookedCount: 1, type: "cooking_pot" },
    // // Sweet Potatoes
    // { dish: "veggiesdelight:baked_sweet_potato", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // { dish: "veggiesdelight:sweet_potato_pie", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // { dish: "veggiesdelight:sweet_potato_pie_slice", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // { dish: "veggiesdelight:mashed_potatoes", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // { dish: "veggiesdelight:sweet_potato_pancakes", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // { dish: "veggiesdelight:sweet_potato_cupcake", ingredients: ["veggiesdelight:sweet_potato"], cookedCount: 1, type: "smoker" },
    // // Cucumber
    // { dish: "vintagedelight:cucumber_salad", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:cucumber_noodles", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "unusualfishmod:pickledish", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:pickle_soup", ingredients: [""], cookedCount: 1, type: "smoker" },
    // // Eggplant
    // { dish: "culturaldelights:smoked_eggplant", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:poached_eggplants", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:eggplant_burger", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:eggplant_parmesan_block", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:eggplant_parmesan", ingredients: [""], cookedCount: 1, type: "smoker" },
    // // Corn
    // { dish: "culturaldelights:popcorn", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:creamed_corn", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:elote", ingredients: [""], cookedCount: 1, type: "smoker" },
    // // Ghost Pepper
    // { dish: "vintagedelight:ghost_charcoal", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:ghostly_chili", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "culturaldelights:spicy_curry", ingredients: [""], cookedCount: 1, type: "smoker" },
    // // Peanut
    // { dish: "vintagedelight:pad_thai", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:honey_roasted_peanut", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:roasted_peanut", ingredients: [""], cookedCount: 1, type: "smoker" },
    // { dish: "vintagedelight:pb_j", ingredients: [""], cookedCount: 1, type: "smoker" },
    // // Onion

]
// TODO: Balance last
const tagFoodValues = {
    '#c:foods/dough': 16,
    "#c:foods/pasta": 16,
    "#c:eggs": 16,
    "#c:raw_meat": 32,
    "#c:cheese": 64,
    "#society:small_milk": 16,
    "#society:large_milk": 64
}
const cookingStationMultipliers = {
    smoker: 1.25,
    cooking_pot: 2,
    oven: 2.5,
    bowl: 3,
    feast: 1.1,
    chopping: 1,
    milling: 1,
    crafting_shapeless: 1.15
};
const getCookingStationMult = (type) => cookingStationMultipliers[type] ?? 1;

const calculateDishValue = (ingredients, cookedCount, type) => {
    if (debug) {
        console.log("incredients: " + ingredients)
        ingredients.forEach((ingredient) => {
            console.log((ingredient.includes("#") ? tagFoodValues[ingredient] : foodMap.get(ingredient)))
        })
    }
    let sum = ingredients.reduce((acc, ingredient) => acc + (ingredient.includes("#") ? tagFoodValues[ingredient] : foodMap.get(ingredient)), 0);
    if (debug) console.log(`Sum: ${sum} | After Mult: ${((sum *= getCookingStationMult(type)) / cookedCount)}`)
    return Math.floor(((sum *= getCookingStationMult(type)) / cookedCount));
}
const calculatePrice = (cropDefinition) => {
    const { dropCount, growDays, regrowDays, seasons, yearTwo, lootOnly, reeseedable, customMult, brokenblock } = cropDefinition;
    let singleHarvest = regrowDays == undefined;
    let value = 0;
    if (singleHarvest) {
        value = CROP_VALUE_PER_DAY * growDays * 1.25;
    } else {
        value = (CROP_VALUE_PER_DAY * regrowDays) + ((CROP_VALUE_PER_DAY * (growDays - regrowDays)) / 2)
    }
    if (Array.isArray(dropCount)) {
        value /= ((dropCount[0] + dropCount[1]) / 3.25);
    } else if (dropCount > 1) {
        value /= (dropCount / 1.25);
    }
    if (seasons && seasons.length && seasons.length > 1) {
        value -= (4 * (seasons.length - 1))
    }
    if (seasons.includes("summer")) value /= 1.05
    if (reeseedable) value /= 1.35
    if (singleHarvest) value *= 1.5;
    if (growDays >= 5) {
        if (singleHarvest) value *= 1.2;
        else value *= 1.05;
    }
    if (growDays > 7) {
        if (singleHarvest) value *= 1.3;
        else value *= 1.2;
    }
    if (yearTwo) value *= 1.2;
    if (lootOnly) value *= 1.3;
    if (customMult) value *= customMult;
    if (brokenblock) value = Math.floor(value / 9) * 9;
    return Math.round(value);
}

const mapSeasonsToIcons = (seasons) => {
    const seasonIcons = {
        spring: "Sp",
        summer: "Su",
        autumn: "Au",
        winter: "Wi"
    };

    return seasons
        .map((season) => seasonIcons[season.toLowerCase()] || "-")
        .join("/");
};

let calculateWineValue = (cropValue) => 3 * (cropValue * 3);
let calculatePreservesValue = (cropValue) => (2 * (cropValue * 2)) + 64;
let calculatePickleValue = (cropValue) => cropValue * 3;
let calculateDriedValue = (cropValue) => (cropValue * 5 * 2) + 64;
let calculatePristineValue = (baseValue) => (baseValue * 6) + 48;

const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
if (debug) {
    console.log("======================================== [ CROP CALCULAITON ] ========================================")
    console.log(`${"Crop".padEnd(27)} | ${"Grow/Regrow".padEnd(12)} | ${"Drop".padEnd(7)} | ${"Value".padEnd(5)} | ${`Pres. (2x)`.padEnd(10)} | ${`Wine (3x)`.padEnd(10)} | ${`Pickle (1x)`.padEnd(10)} | ${`Dried (5x)`.padEnd(10)}`);

    console.log("------------------------------------------------------------------------------------------------------")
    global.CROP_DEFINITIONS.forEach((crop) => {
        let value = calculatePrice(crop);
        if (!crop.blocked) {
            console.log(` ${`${mapSeasonsToIcons(crop.seasons)} - ${formatItemName(crop.item)}`.padEnd(26)} | ${`${crop.growDays} / ${crop.regrowDays ? crop.regrowDays : "-"}`.padEnd(12)} | ${`${crop.dropCount.toString()}`.padEnd(7)} | ${`${value}`.padEnd(5)} | ${`${crop.products.includes("preserves") ? calculatePreservesValue(value) : "_"}`.padEnd(10)} | ${`${crop.products.includes("wine") ? calculateWineValue(value) : "-"}`.padEnd(10)} | ${`${crop.products.includes("pickle") ? calculatePickleValue(value) : "-"}`.padEnd(10)} | ${`${crop.products.includes("dried") ? calculateDriedValue(value) : "-"}`.padEnd(10)} `);
        }
    })
}

const foodMap = new Map();
foodMap.set("minecraft:air", 0)
global.MILK.forEach((x) => foodMap.set(x.item, x.value))
global.MEAT.forEach((x) => foodMap.set(x.item, x.value))
global.MISC_FOOD.forEach((x) => foodMap.set(x.item, x.value))
global.MISC_ANIMAL_PRODUCTS.forEach((x) => foodMap.set(x.item, x.value))

ServerEvents.generateData('after_mods', (e) => {
    let data = { values: {} }
    let baseCropValue;
    global.CROP_DEFINITIONS.forEach((crop) => {
        if (!crop.blocked) {
            baseCropValue = calculatePrice(crop)
            data.values[crop.item] = global.getSaleData(baseCropValue, [])
            foodMap.set(crop.item, baseCropValue);
            if (crop.storageblock) data.values[crop.storageblock] = global.getSaleData(baseCropValue * 9, [])
            if (crop.brokenblock) data.values[crop.brokenblock] = global.getSaleData(Math.round(baseCropValue / 9), [])
            if (crop.products.includes("preserves")) data.values[`society:${crop.item.path}_preserves`] = global.getSaleData(calculatePreservesValue(baseCropValue), [])
            if (crop.products.includes("wine") && crop.wine) data.values[crop.wine] = global.getSaleData(calculateWineValue(baseCropValue), [])
            if (crop.products.includes("pickle")) data.values[crop.pickle ? crop.pickle : `society:pickled_${crop.item.path}`] = global.getSaleData(calculatePickleValue(baseCropValue), [])
            if (crop.products.includes("dried")) data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = global.getSaleData(calculateDriedValue(baseCropValue), [])
        }
    })
    global.FORAGE_CROPS.forEach((crop) => {
        if (!crop.blocked) {
            data.values[crop.item] = global.getSaleData(crop.value, [])
            foodMap.set(crop.item, crop.value);
            if (crop.storageblock) data.values[crop.storageblock] = global.getSaleData(crop.value * 9, [])
            if (crop.brokenblock) data.values[crop.brokenblock] = global.getSaleData(Math.round(crop.value / 9), [])
            if (crop.products.includes("preserves")) data.values[`society:${crop.item.path}_preserves`] = global.getSaleData(calculatePreservesValue(crop.value), [])
            if (crop.products.includes("wine") && crop.wine) data.values[crop.wine] = global.getSaleData(calculateWineValue(crop.value), [])
            if (crop.products.includes("pickle")) data.values[crop.pickle ? crop.pickle : `society:pickled_${crop.item.path}`] = global.getSaleData(calculatePickleValue(crop.value), [])
            if (crop.products.includes("dried")) data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = global.getSaleData(calculateDriedValue(crop.value), [])
        }
    })
    global.MUSHROOMS.forEach((crop) => {
        if (!crop.blocked) {
            data.values[crop.item] = global.getSaleData(crop.value, [])
            data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = global.getSaleData(calculateDriedValue(crop.value), [])
            foodMap.set(crop.item, crop.value);
        }
    })
    global.LOGS.forEach((log) => {
        data.values[log.item] = global.getSaleData(log.value, [])
        if (!log.no_stripped) data.values[`${log.item.namespace}:stripped_${log.item.path}`] = global.getSaleData(log.value, [])
    })
    global.MINERALS.forEach((mineral) => {
        data.values[mineral.item] = global.getSaleData(mineral.value, [])
        if (mineral.storageblock) data.values[mineral.storageblock] = global.getSaleData(mineral.value * 9, [])
        data.values[`society:pristine_${mineral.item.path}`] = global.getSaleData(calculatePristineValue(mineral.value), [])
    })
    global.GEMS.forEach((mineral) => {
        data.values[mineral.item] = global.getSaleData(mineral.value, [])
        if (mineral.storageblock) data.values[mineral.storageblock] = global.getSaleData(mineral.value * 9, [])
        data.values[`society:pristine_${mineral.item.path}`] = global.getSaleData(calculatePristineValue(mineral.value), [])
    })
    global.ARTIFACTS.forEach((mineral) => {
        data.values[mineral.item] = global.getSaleData(mineral.value, [])
    })
    // Dish Calculation very last probably idk
    for (const { dish, ingredients, cookedCount, type } of dishes) {
        let value = calculateDishValue(ingredients, cookedCount, type);
        if (isNaN(value)) console.log(`[SELLING BIN CALC ERROR]: NAN found for cooked dish ${dish}`)
        else data.values[dish] = global.getSaleData(value, []);
        foodMap.set(dish, value);
        console.log(`Setting: ${dish} to ${value}`)
        console.log(foodMap.get(dish))
    }

    console.log(data)
    e.json('selling_bin:data_maps/item/selling_bin_value.json', data)
})


ServerEvents.recipes((e) => {
    for (const { dish, ingredients, cookedCount, container, time, type } of dishes) {
        e.remove({ output: dish });
        if (type == "cooking_pot") {
            cookingPotRecipeHelper(e, { id: dish, count: cookedCount }, ingredients.filter((x) => x !== "minecraft:air"), time);
        }
    }
});

ServerEvents.tags('item', (e) => {
    dishes.forEach((dish) => !dish.notDish && e.add('society:dish', dish.dish))
})