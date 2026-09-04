const crops = [
    // Vegetables
    { crop: "veggiesdelight:turnip", storage_block: "veggiesdelight:turnip_crate", dropCount: 1, growDays: 4, seasons: ["spring"], products: ["preserves", "pickle"] },
    { crop: "veggiesdelight:cauliflower", storage_block: 'veggiesdelight:garlic_crate', dropCount: 1, growDays: 10, seasons: ["spring"], products: ["preserves", "pickle"] },
    { crop: "minecraft:potato", storage_block: 'farmersdelight:potato_crate', dropCount: [3, 6], growDays: 7, seasons: ["spring"], products: ["preserves", "pickle", "wine"], wine: 'kaleidoscope_tavern:vodka' },
    { crop: 'farmersdelight:onion', storage_block: 'farmersdelight:onion_crate', dropCount: [1, 4], growDays: 8, seasons: ["spring"], products: ["preserves", "pickle"] },
    { crop: "veggiesdelight:garlic", storage_block: 'veggiesdelight:garlic_crate', dropCount: 1, growDays: 5, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"] },
    { crop: 'vintagedelight:cucumber', storage_block: 'vintagedelight:cucumber_crate', dropCount: 1, growDays: 10, regrowDays: 3, seasons: ["spring"], yearTwo: true, products: ["preserves", "pickle"] },

    { crop: "farmersdelight:tomato", storage_block: 'farmersdelight:tomato_crate', dropCount: [2, 3], growDays: 6, regrowDays: 3, seasons: ["spring", "summer"], products: ["preserves", "pickle"] },

    { crop: "veggiesdelight:bellpepper", storage_block: 'veggiesdelight:bellpepper_crate', dropCount: 1, growDays: 7, regrowDays: 3, seasons: ["summer"], products: ["preserves", "pickle"] },
    { crop: 'vintagedelight:ghost_pepper', storage_block: 'vintagedelight:ghost_pepper_crate', dropCount: [1, 3], growDays: 7, regrowDays: 3, seasons: ["summer"], yearTwo: true, products: ["preserves", "pickle"] },
    { crop: "minecraft:carrot", storage_block: 'farmersdelight:carrot_crate', dropCount: [1, 2], growDays: 7, seasons: ["summer"], products: ["preserves", "pickle"] },
    { crop: "veggiesdelight:zucchini", storage_block: 'veggiesdelight:zucchini_crate', dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "pickle"] },

    { crop: "culturaldelights:corn_cob", storage_block: 'culturaldelights:corn_cob_crate', dropCount: 1, growDays: 12, regrowDays: 4, seasons: ["summer", "autumn"], products: ["preserves", "pickle"] },

    { crop: "minecraft:beetroot", storage_block: 'farmersdelight:beetroot_crate', dropCount: 1, growDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"] },
    { crop: "veggiesdelight:sweet_potato", storage_block: 'veggiesdelight:sweet_potato_crate', dropCount: [2, 4], growDays: 12, seasons: ["autumn"], yearTwo: true, products: ["preserves", "pickle"] },
    { crop: "minecraft:pumpkin", broken_block: "farmersdelight:pumpkin_slice", dropCount: 1, growDays: 7, seasons: ["autumn"], products: ["preserves", "pickle"] },
    { crop: "culturaldelights:eggplant", storage_block: 'culturaldelights:eggplant_crate', dropCount: 1, growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "pickle"] },
    { crop: "veggiesdelight:broccoli", storage_block: 'veggiesdelight:broccoli_crate', dropCount: [1, 2], growDays: 5, seasons: ["autumn"], lootOnly: true, products: ["preserves", "pickle"] },
    { crop: 'vintagedelight:peanut', storage_block: 'vintagedelight:peanut_crate', dropCount: [1, 3], growDays: 7, seasons: ["autumn"], yearTwo: true, products: ["preserves", "pickle"] },


    { crop: "windswept:ginger_root", storage_block: "windswept:ginger_root_crate", dropCount: 1, growDays: 7, seasons: ["winter"], products: ["preserves", "pickle"] },

    // Fruit
    { crop: "society:strawberry", storage_block: 'society:strawberry_crate', dropCount: [1, 2], growDays: 8, regrowDays: 4, seasons: ["spring"], products: ["preserves", "wine", "dried"] },
    { crop: "society:sparkpod", storage_block: "society:sparkpod_crate", dropCount: 1, growDays: 8, seasons: ["spring"], customMult: 1.5, products: ["preserves", "wine", "dried"] },
    { crop: "minecraft:sweet_berries", storage_block: 'quark:berry_sack', dropCount: [2, 3], growDays: 3, regrowDays: 1, seasons: ["spring"], reeseedable: true, products: ["preserves", "wine", "dried"], wine: 'kaleidoscope_tavern:sweet_berry_wine' },

    { crop: "minecraft:melon", broken_block: "minecraft:melon_slice", dropCount: 1, growDays: 7, seasons: ["summer"], lootOnly: true, products: ["preserves", "wine", "dried"], wine: 'kaleidoscope_tavern:watermelon_juice' },
    { crop: "society:blueberry", storage_block: 'society:blueberry_crate', dropCount: [3, 4], growDays: 13, regrowDays: 4, seasons: ["summer"], products: ["preserves", "wine", "dried"] },

    { crop: "society:cranberry", storage_block: 'society:cranberry_crate', dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"], wine: 'kaleidoscope_tavern:carignan' },
    { crop: 'vintagedelight:gearo_berry', storage_block: 'vintagedelight:gearo_berry_bag', dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["autumn"], products: ["preserves", "wine", "dried"] },

    { crop: "windswept:wild_berries", storage_block: 'windswept:wild_berry_basket', dropCount: [2, 3], growDays: 7, regrowDays: 5, seasons: ["winter"], products: ["preserves", "wine", "dried"] },

    { crop: "society:ancient_fruit", storage_block: "society:ancient_fruit_crate", dropCount: 1, growDays: 30, regrowDays: 7, seasons: ["spring", "summer", "autumn"], customMult: 2, products: ["preserves", "wine", "dried"] },
    // Misc
    { crop: "minecraft:cocoa_beans", storage_block: 'quark:cocoa_beans_sack', dropCount: 1, growDays: 7, seasons: ["summer"], products: [] },


    // Grain
    { crop: "farmersdelight:cabbage", storage_block: 'farmersdelight:cabbage_crate', dropCount: 1, growDays: 8, seasons: ["spring"], products: [] },

    { crop: "minecraft:wheat", storage_block: 'minecraft:hay_block', dropCount: 1, growDays: 5, seasons: ["summer", "autumn"], products: ["wine"], wine: 'kaleidoscope_tavern:whiskey' },
    { crop: "farmersdelight:rice", storage_block: 'farmersdelight:rice_bag', dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer", "autumn"], reeseedable: true, products: [] },

    { crop: 'society:hops', storage_block: '', dropCount: 3, growDays: 10, regrowDays: 1, seasons: ["summer", "autumn"], reeseedable: true, products: ["wine"] },
    { crop: 'society:tubabacco_leaf', storage_block: '', dropCount: 1, growDays: 15, regrowDays: 5, seasons: ["spring", "winter"], yearTwo: true, products: [] },
    { crop: 'herbalbrews:rooibos_leaf', storage_block: '', dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["summer"], reeseedable: true, lootOnly: true, products: [] },
    { crop: 'herbalbrews:coffee_beans', storage_block: '', dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["spring"], reeseedable: true, lootOnly: true, products: [] },
    { crop: 'herbalbrews:yerba_mate_leaf', storage_block: '', dropCount: 1, growDays: 6, regrowDays: 3, seasons: ["autumn"], reeseedable: true, lootOnly: true, products: [] },
    { crop: 'herbalbrews:green_tea_leaf', storage_block: 'herbalbrews:green_tea_leaf_block', dropCount: 1, growDays: 6, seasons: ["spring", "summer", "autumn"], lootOnly: true, products: [] },
]

const CROP_VALUE_PER_DAY = 12;

const calculatePrice = (cropDefinition) => {
    const { dropCount, growDays, regrowDays, seasons, yearTwo, lootOnly, reeseedable, customMult } = cropDefinition;
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
const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')
console.log("======================================== [ CROP CALCULAITON ] ========================================")
console.log(`${"Crop".padEnd(27)} | ${"Grow/Regrow".padEnd(12)} | ${"Drop".padEnd(7)} | ${"Value".padEnd(5)} | ${`Pres. (2x)`.padEnd(10)} | ${`Wine (3x)`.padEnd(10)} | ${`Pickle (1x)`.padEnd(10)} | ${`Dried (5x)`.padEnd(10)}`);

console.log("------------------------------------------------------------------------------------------------------")
crops.forEach((crop) => {
    let value = calculatePrice(crop);
    console.log(` ${`${mapSeasonsToIcons(crop.seasons)} - ${formatItemName(crop.crop)}`.padEnd(26)} | ${`${crop.growDays} / ${crop.regrowDays ? crop.regrowDays : "-"}`.padEnd(12)} | ${`${crop.dropCount.toString()}`.padEnd(7)} | ${`${value}`.padEnd(5)} | ${`${crop.products.includes("preserves") ? (2 * (value * 2)) + 64 : "_"}`.padEnd(10)} | ${`${crop.products.includes("wine") ? (3 * (value * 3)) : "-"}`.padEnd(10)} | ${`${crop.products.includes("pickle") ? value * 3 : "-"}`.padEnd(10)} | ${`${crop.products.includes("dried") ? (value * 5 * 2) + 64 : "-"}`.padEnd(10)} `);

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
