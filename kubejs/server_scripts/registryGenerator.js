

const CROP_VALUE_PER_DAY = 12;

const calculatePrice = (cropDefinition) => {
    const { dropCount, growDays, regrowDays, seasons, yearTwo, lootOnly, reeseedable, customMult, broken_block } = cropDefinition;
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
    if (seasons.length && seasons.length > 1) {
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
    if (broken_block) value = Math.floor(value / 9) * 9;
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
console.log("======================================== [ CROP CALCULAITON ] ========================================")
console.log(`${"Crop".padEnd(27)} | ${"Grow/Regrow".padEnd(12)} | ${"Drop".padEnd(7)} | ${"Value".padEnd(5)} | ${`Pres. (2x)`.padEnd(10)} | ${`Wine (3x)`.padEnd(10)} | ${`Pickle (1x)`.padEnd(10)} | ${`Dried (5x)`.padEnd(10)}`);

console.log("------------------------------------------------------------------------------------------------------")
global.CROP_DEFINITIONS.forEach((crop) => {
    let value = calculatePrice(crop);
    if (!crop.blocked) {
        console.log(` ${`${mapSeasonsToIcons(crop.seasons)} - ${formatItemName(crop.item)}`.padEnd(26)} | ${`${crop.growDays} / ${crop.regrowDays ? crop.regrowDays : "-"}`.padEnd(12)} | ${`${crop.dropCount.toString()}`.padEnd(7)} | ${`${value}`.padEnd(5)} | ${`${crop.products.includes("preserves") ? calculatePreservesValue(value) : "_"}`.padEnd(10)} | ${`${crop.products.includes("wine") ? calculateWineValue(value) : "-"}`.padEnd(10)} | ${`${crop.products.includes("pickle") ? calculatePickleValue(value) : "-"}`.padEnd(10)} | ${`${crop.products.includes("dried") ? calculateDriedValue(value) : "-"}`.padEnd(10)} `);
    }
})
const dishes = [
    // Bell Pepper
    { dish: "veggiesdelight:smoked_bellpepper", ingredients: ["veggiesdelight:bellpepper"], cookedCount: 1, type: "smoker" },
    { dish: "veggiesdelight:cacciatore", ingredients: ["veggiesdelight:bellpepper", "farmersdelight:tomato", 'minecraft:rabbit'], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:stuffed_bellpeppers_block", ingredients: ["veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "#c:raw_meat"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:stuffed_bellpepper", ingredients: ["veggiesdelight:stuffed_bellpeppers_block"], dropCount: 3, type: "feast" },
    { dish: 'veggiesdelight:shakshouka', ingredients: ["veggiesdelight:bellpepper", "farmersdelight:tomato", "#c:eggs"], cookedCount: 1, type: "cooking_pot" },
    // Broccoli
    { dish: "veggiesdelight:steak_and_broccoli", ingredients: ["veggiesdelight:broccoli", "minecraft:beef", "farmersdelight:rice"], cookedCount: 1, type: "oven" },
    { dish: "veggiesdelight:broccoli_soup", ingredients: ["veggiesdelight:broccoli", "veggiesdelight:broccoli", "#society:large_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:pasta_with_broccoli", ingredients: ["veggiesdelight:broccoli", "#c:foods/pasta", "#society:small_milk"], cookedCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:broccoli_salad", ingredients: ["veggiesdelight:broccoli", "farmersdelight:tomato", "farmersdelight:onion"], cookedCount: 1, type: "bowl" },

]

const getSaleData = (value, processors) => {
    return {
        "base_value": value,
        "processors": [
            {
                "type": "selling_bin:quality_foods_processor",
                "quality_type": {
                    "quality_food:diamond": 2.0,
                    "quality_food:gold": 1.5,
                    "quality_food:iron": 1.25
                }
            }
        ]
    }
}

ServerEvents.generateData('after_mods', (e) => {
    let data = { values: {} }
    let baseCropValue;
    global.CROP_DEFINITIONS.forEach((crop) => {
        if (!crop.blocked) {
            baseCropValue = calculatePrice(crop)
            data.values[crop.item] = getSaleData(baseCropValue, [])
            if (crop.storage_block) data.values[crop.storage_block] = getSaleData(baseCropValue * 9, [])
            if (crop.broken_block) data.values[crop.broken_block] = getSaleData(Math.round(baseCropValue / 9), [])
            if (crop.products.includes("preserves")) data.values[`society:${crop.item.path}_preserves`] = getSaleData(calculatePreservesValue(baseCropValue), [])
            if (crop.products.includes("wine") && crop.wine) data.values[crop.wine] = getSaleData(calculateWineValue(baseCropValue), [])
            if (crop.products.includes("pickle")) data.values[crop.pickle ? crop.pickle : `society:pickled_${crop.item.path}`] = getSaleData(calculatePickleValue(baseCropValue), [])
            if (crop.products.includes("dried")) data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = getSaleData(calculateDriedValue(baseCropValue), [])
        }
    })
    global.FORAGE_CROPS.forEach((crop) => {
        if (!crop.blocked) {
            data.values[crop.item] = getSaleData(crop.value, [])
            if (crop.storage_block) data.values[crop.storage_block] = getSaleData(crop.value * 9, [])
            if (crop.broken_block) data.values[crop.broken_block] = getSaleData(Math.round(crop.value / 9), [])
            if (crop.products.includes("preserves")) data.values[`society:${crop.item.path}_preserves`] = getSaleData(calculatePreservesValue(crop.value), [])
            if (crop.products.includes("wine") && crop.wine) data.values[crop.wine] = getSaleData(calculateWineValue(crop.value), [])
            if (crop.products.includes("pickle")) data.values[crop.pickle ? crop.pickle : `society:pickled_${crop.item.path}`] = getSaleData(calculatePickleValue(crop.value), [])
            if (crop.products.includes("dried")) data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = getSaleData(calculateDriedValue(crop.value), [])
        }
    })
    global.MUSHROOMS.forEach((crop) => {
        if (!crop.blocked) {
            data.values[crop.item] = getSaleData(crop.value, [])
            data.values[crop.dried ? crop.dried : `society:dried_${crop.item.path}`] = getSaleData(calculateDriedValue(crop.value), [])
        }
    })
    global.LOGS.forEach((log) => {
        data.values[log.item] = getSaleData(log.value, [])
        if (!log.no_stripped) data.values[`${log.item.namespace}:stripped_${log.item.path}`] = getSaleData(log.value, [])
    })
    global.MINERALS.forEach((mineral) => {
        data.values[mineral.item] = getSaleData(mineral.value, [])
        if (mineral.storage_block) data.values[mineral.storage_block] = getSaleData(mineral.value * 9, [])
        data.values[`society:pristine_${mineral.item.path}`] = getSaleData(calculatePristineValue(mineral.value), [])
    })
    global.GEMS.forEach((mineral) => {
        data.values[mineral.item] = getSaleData(mineral.value, [])
        if (mineral.storage_block) data.values[mineral.storage_block] = getSaleData(mineral.value * 9, [])
        data.values[`society:pristine_${mineral.item.path}`] = getSaleData(calculatePristineValue(mineral.value), [])
    })
    global.ARTIFACTS.forEach((mineral) => {
        data.values[mineral.item] = getSaleData(mineral.value, [])
    })
    e.json('selling_bin:data_maps/item/selling_bin_value.json', data)
})