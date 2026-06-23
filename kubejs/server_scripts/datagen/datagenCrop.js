const crops = [
    { crop: "veggiesdelight:turnip", storage_block: "veggiesdelight:turnip_crate", dropCount: 1, growDays: 5, seasons: ["spring"] },
    { crop: "farmersdelight:tomato", storage_block: "", dropCount: [2, 3], growDays: 6, regrowDays: 3, seasons: ["spring", "summer", "autumn"] },
    { crop: "veggiesdelight:cauliflower", storage_block: "", dropCount: 1, growDays: 7, seasons: ["spring"] },
    { crop: "veggiesdelight:bellpepper", storage_block: "", dropCount: [1, 3], growDays: 7, seasons: ["summer"] },
    { crop: "minecraft:beetroot", storage_block: "", dropCount: 1, growDays: 3, seasons: ["autumn"] },
    { crop: "minecraft:potato", storage_block: "", dropCount: [1, 2], growDays: 7, seasons: ["spring"] },
    { crop: "minecraft:carrot", storage_block: "", dropCount: [1, 2], growDays: 7, seasons: ["autumn", "spring"] },
    { crop: "minecraft:wheat", storage_block: "", dropCount: 1, growDays: 7, seasons: ["summer", "autumn"] },
    { crop: "minecraft:sweet_berries", storage_block: "", dropCount: [2, 3], growDays: 3, regrowDays: 2, seasons: ["spring", "autumn"], reeseedable: true },
    { crop: "farmersdelight:rice", storage_block: "", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer", "autumn"], reeseedable: true },
    { crop: "farmersdelight:cabbage", storage_block: "", dropCount: 1, growDays: 7, seasons: ["spring"] },
    { crop: "veggiesdelight:garlic", storage_block: "", dropCount: [1, 3], growDays: 7, seasons: ["spring"], yearTwo: true },
    { crop: "veggiesdelight:zucchini", storage_block: "", dropCount: 1, growDays: 7, seasons: ["autumn"], lootOnly: true },
    { crop: "veggiesdelight:sweet_potato", storage_block: "", dropCount: [1, 4], growDays: 5, seasons: ["autumn"], yearTwo: true },
    { crop: "veggiesdelight:broccoli", storage_block: "", dropCount: [1, 2], growDays: 5, seasons: ["autumn"], lootOnly: true },
    { crop: "minecraft:melon", broken_block: "minecraft:melon_slice", dropCount: 1, growDays: 7, regrowDays: 7, seasons: ["summer"], lootOnly: true },
    { crop: "minecraft:cocoa_beans", storage_block: "", dropCount: 1, growDays: 7, seasons: ["summer"] },
    { crop: "minecraft:pumpkin", broken_block: "farmersdelight:pumpkin_slice", dropCount: 1, growDays: 7, regrowDays: 7, seasons: ["autumn"] },
    { crop: "snowyspirit:ginger", storage_block: "", dropCount: 1, growDays: 7, seasons: ["winter"] },
    { crop: "culturaldelights:cucumber", storage_block: "", dropCount: 1, growDays: 7, seasons: ["spring"], yearTwo: true },
    { crop: "culturaldelights:eggplant", storage_block: "", dropCount: 1, growDays: 7, seasons: ["autumn"] },
    { crop: "culturaldelights:corn_cob", storage_block: "", dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer", "autumn"] },
    { crop: "society:blueberry", storage_block: 'society:blueberry_crate', dropCount: [3, 4], growDays: 13, regrowDays: 4, seasons: ["summer"] },
    { crop: "society:cranberry", storage_block: 'society:cranberry_crate', dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"] },
    { crop: "society:sparkpod", storage_block: "society:sparkpod_crate", dropCount: 1, growDays: 8, seasons: ["spring"], customMult: 1.5 },
    { crop: "society:ancient_fruit", storage_block: "society:ancient_fruit_crate", dropCount: 1, growDays: 28, regrowDays: 7, seasons: ["spring", "summer", "autumn"], customMult: 2 }
]

const CROP_VALUE_PER_DAY = 12;

const calculatePrice = (cropDefinition) => {
    const { dropCount, growDays, regrowDays, seasons, yearTwo, lootOnly, reeseedable, customMult } = cropDefinition;
    let singleHarvest = regrowDays == undefined;
    let value = 0;
    if (singleHarvest) {
        value = CROP_VALUE_PER_DAY * growDays;
    } else {
        value = (CROP_VALUE_PER_DAY * regrowDays) + ((CROP_VALUE_PER_DAY * (growDays - regrowDays)) / 2)
    }
    if (Array.isArray(dropCount)) {
        value /= ((dropCount[0] + dropCount[1]) / 3.25);
    } else if (dropCount > 1) {
        value /= (dropCount / 1.25);
    }
    if (seasons.length > 1) {
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
    return Math.round(value);
}
console.log("================== [ CROP CALCULAITON ] ==================")
crops.forEach((crop) => {
    let value = calculatePrice(crop);
    console.log(`${crop.crop} | Value: ${value} | Preserves: ${(2 * value) + 64} | Wine: ${(3 * value)}`);
})
const dishes = [
    // Bell Pepper
    { dish: "veggiesdelight:cacciatore", ingredients: ["veggiesdelight:bellpepper"], dropCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:smoked_bellpepper", ingredients: ["veggiesdelight:bellpepper"], dropCount: 1, type: "smoker" },
    { dish: "veggiesdelight:stuffed_bellpeppers_block", ingredients: ["veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "veggiesdelight:bellpepper", "farmersdelight:tomato", "#c:raw_meat"], dropCount: 1, type: "cooking_pot" },
    { dish: "veggiesdelight:stuffed_bellpepper", ingredients: ["veggiesdelight:stuffed_bellpeppers_block"], dropCount: 3, type: "feast" },
    { dish: "culturaldelights:empanada", ingredients: ["veggiesdelight:bellpepper"], dropCount: 1, type: "cooking_pot" },
]
