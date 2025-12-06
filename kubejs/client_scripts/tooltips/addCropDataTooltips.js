const $BLOCK = Java.loadClass('net.minecraft.world.level.block.Block');

function getSeasonColor(season, useColor) {
    useColor = useColor ?? true;
    if (!useColor) return (text) => Text.translate(text);
    switch (season) {
        case "spring": return text => Text.translate(text).green();
        case "summer": return text => Text.translate(text).yellow();
        case "autumn": return text => Text.translate(text).gold();
        case "winter": return text => Text.translate(text).aqua();
        case "year-round": return text => Text.translate(text);
        default: return text => Text.translate(text);
    }
}

function getSeasonIcon(season) {
    switch (season) {
        case "spring": return "🌼";
        case "summer": return "🔥";
        case "autumn": return "🍂";
        case "winter": return "❆";
        case "year-round": return "🌐";
        default: return "";
    }
}

const cropBlockData = {
    "atmospheric:aloe_vera": "atmospheric:aloe_leaves",
    "society:blueberry": "society:blueberry",
    "society:ancient_fruit": "society:ancient_fruit",
    "minecraft:wheat": "minecraft:wheat",
    "vinery:red_grape": "vinery:red_grape_bush",
    "farm_and_charm:barley": "farm_and_charm:barley_crop",
    "minecraft:beetroot": "minecraft:beetroots",
    "veggiesdelight:bellpepper": "veggiesdelight:bellpepper_crop",
    "veggiesdelight:broccoli": "veggiesdelight:broccoli_crop",
    "farmersdelight:cabbage": "farmersdelight:cabbages",
    "minecraft:carrot": "society:carrot",
    "veggiesdelight:cauliflower": "veggiesdelight:cauliflower_crop",
    "herbalbrews:coffee_beans": "herbalbrews:coffee_plant",
    "farm_and_charm:corn": "farm_and_charm:corn_crop",
    "etcetera:cotton_flower": "etcetera:cotton",
    "vintagedelight:cucumber": "vintagedelight:cucumber_crop",
    "society:eggplant": "society:eggplant",
    "supplementaries:flax": "supplementaries:flax",
    "autumnity:foul_berries": "autumnity:foul_berry_bush",
    "veggiesdelight:garlic": "veggiesdelight:garlic_crop",
    "vintagedelight:gearo_berry": "vintagedelight:gearo_berry_bush",
    "vintagedelight:ghost_pepper": "vintagedelight:ghost_pepper_crop",
    "snowyspirit:ginger": "snowyspirit:ginger",
    // "herbalbrews:green_tea_leaf": null,
    "brewery:hops": "brewery:hop_trellis",
    "farm_and_charm:lettuce": "farm_and_charm:lettuce_crop",
    // "nethervinery:warped_grape": null,
    "farm_and_charm:oat": "farm_and_charm:oat_crop",
    "farm_and_charm:onion": "society:onion",
    "vintagedelight:peanut": "society:peanut",
    "minecraft:pitcher_plant": "minecraft:pitcher_crop",
    "minecraft:potato": "society:potato",
    "farmersdelight:rice": "farmersdelight:rice",
    "herbalbrews:rooibos_leaf": "herbalbrews:rooibos_plant",
    "farm_and_charm:strawberry": "farm_and_charm:strawberry_crop",
    "minecraft:sweet_berries": "minecraft:sweet_berry_bush",
    "veggiesdelight:sweet_potato": "society:sweet_potato",
    "farmersdelight:tomato": "farmersdelight:tomatoes",
    "minecraft:torchflower": "miencraft:torchflower_crop",
    "society:tubabacco_leaf": "society:tubabacco_leaf",
    "veggiesdelight:turnip": "veggiesdelight:turnip_crop",
    "windswept:wild_berries": "windswept:wild_berry_bush",
    "herbalbrews:yerba_mate_leaf": "herbalbrews:yerba_mate_plant",
    "veggiesdelight:zucchini": "veggiesdelight:zucchini_crop",
    "minecraft:apple": "vinery:apple_leaves",
    "pamhc2trees:bananaitem": "pamhc2trees:banana",
    "vinery:cherry": "vinery:cherry_leaves",
    "pamhc2trees:cinnamonitem": "pamhc2trees:cinnamon",
    "pamhc2trees:dragonfruititem": "pamhc2trees:dragonfruit",
    "pamhc2trees:hazelnutitem": "pamhc2trees:hazelnut",
    "pamhc2trees:lemonitem": "pamhc2trees:lemon",
    "pamhc2trees:lycheeitem": "pamhc2trees:lychee",
    "pamhc2trees:mangoitem": "pamhc2trees:mango",
    "pamhc2trees:orange": "pamhc2trees:orange",
    "pamhc2trees:passion_fruit": "pamhc2trees:pampassionfruit",
    "pamhc2trees:pawpawitem": "pamhc2trees:pampawpaw",
    "pamhc2trees:peachitem": "pamhc2trees:pampeach",
    "pamhc2trees:plumitem": "pamhc2trees:pamplum",
    "pamhc2trees:starfruititem": "pamhc2trees:pamstarfruit",
}


const cropData = {
    "atmospheric:aloe_leaves": {
        seasons: ["summer"],
        yield: ["1-2"],
        growTime: ["5-8"],
    },
    "society:blueberry": {
        seasons: ["summer"],
        yield: ["3-4"],
        growTime: ["7"]
    },
    "society:ancient_fruit": {
        seasons: ["spring", "summer", "autumn"],
        yield: ["1", "1", "1"],
        growTime: ["10", "10", "10"],
    },
    "minecraft:wheat": {
        seasons: ["summer", "autumn"],
        yield: ["1", "1"],
        growTime: ["7", "7"]
    },
    "vinery:red_grape": {
        seasons: ["year-round"],
    },
    "farm_and_charm:barley": {
        seasons: ["autumn", "winter"],
        yield: ["2", "2"],
        growTime: ["4", "4"]
    },
    "minecraft:beetroot": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["3"]
    },
    "veggiesdelight:bellpepper": {
        seasons: ["summer"],
        yield: ["1-3"],
        growTime: ["7"]
    },
    "veggiesdelight:broccoli": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["5"]
    },
    "farmersdelight:cabbage": {
        seasons: ["autumn", "winter"],
        yield: ["1", "1"],
        growTime: ["7", "7"],
    },
    "minecraft:carrot": {
        seasons: ["spring", "autumn"],
        yield: ["1-3", "1-3"],
        growTime: ["7", "7"]
    },
    "veggiesdelight:cauliflower": {
        seasons: ["spring"],
        yield: ["2"],
        growTime: ["7"]
    },
    "herbalbrews:coffee_beans": {
        seasons: ["spring"],
        yield: ["1-2"],
        growTime: ["3"],
    },
    "farm_and_charm:corn": {
        seasons: ["summer", "autumn"],
        yield: ["1", "1"],
        growTime: ["4", "4"]
    },
    "etcetera:cotton_flower": {
        seasons: ["summer"],
        yield: ["2"],
        growTime: ["3"],
    },
    "vintagedelight:cucumber": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["7"],
    },
    "society:eggplant": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["6"]
    },
    "supplementaries:flax": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["7"]
    },
    "autumnity:foul_berries": {
        seasons: ["autumn"],
        yield: ["2/4"],
        growTime: ["4/5"],
        regrowTime: ["1/2"],
    },
    "veggiesdelight:garlic": {
        seasons: ["spring"],
        yield: ["1-3"],
        growTime: ["5"],
    },
    "vintagedelight:gearo_berry": {
        seasons: ["spring"],
        yield: ["1-2"],
        growTime: [4],
        regrowTime: ["2"],
    },
    "vintagedelight:ghost_pepper": {
        seasons: ["summer"],
        yield: ["2-3"],
        growTime: ["7"],
    },
    "snowyspirit:ginger": {
        seasons: ["winter"],
        yield: ["1"],
        growTime: ["7"]
    },
    "herbalbrews:green_tea_leaf": {
        seasons: ["spring", "summer", "autumn"],
        yield: ["1", "1", "1"],
        growTime: ["3", "3", "3"],
    },
    "brewery:hops": {
        seasons: ["summer"],
        yield: ["2"],
        growTime: ["6"],
    },
    "farm_and_charm:lettuce": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["3"]
    },
    "nethervinery:warped_grape": {
        seasons: ["year-round"],
    },
    "farm_and_charm:oat": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: ["5"]
    },
    "farm_and_charm:onion": {
        seasons: ["spring"],
        yield: ["1-4"],
        growTime: [4]
    },
    "vintagedelight:peanut": {
        seasons: ["autumn"],
        yield: ["1-3"],
        growTime: ["7"],
    },
    "minecraft:pitcher_plant": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: [4],
    },
    "minecraft:potato": {
        seasons: ["spring"],
        yield: ["1-2"],
        growTime: ["7"],
    },
    "farmersdelight:rice": {
        seasons: ["summer", "autumn"],
        yield: ["1", "1"],
        growTime: ["6", "6"],
        regrowTime: ["3", "3"],
    },
    "herbalbrews:rooibos_leaf": {
        seasons: ["summer"],
        yield: ["2"],
        growTime: ["3"],
    },
    "farm_and_charm:strawberry": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["5"]
    },
    "minecraft:sweet_berries": {
        seasons: ["spring", "winter"],
        yield: ["1-2", "2-3"],
        growTime: ["2", "3"],
        regrowTime: ["1", "2"],
    },
    "veggiesdelight:sweet_potato": {
        seasons: ["autumn"],
        yield: ["1-4"],
        growTime: ["5"],
    },
    "farmersdelight:tomato": {
        seasons: ["spring", "summer", "autumn"],
        yield: ["1", "1", "1"],
        growTime: ["4", "4", "4"],
        regrowTime: ["3", "3", "3"],
    },
    "minecraft:torchflower": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: [4],
    },
    "society:tubabacco_leaf": {
        seasons: ["spring", "winter"],
        yield: ["1", "1"],
        growTime: ["9", "9"],
    },
    "veggiesdelight:turnip": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["5"]
    },
    "windswept:wild_berries": {
        seasons: ["winter"],
        yield: ["1-2"],
        growTime: ["2/3"],
        regrowTime: ["1/2"],
    },
    "herbalbrews:yerba_mate_leaf": {
        seasons: ["spring", "summer", "autumn"],
        yield: ["1-4", "1-4", "1-4"],
        growTime: ["3", "3", "3"],
    },
    "veggiesdelight:zucchini": {
        seasons: ["summer"],
        yield: ["1-2"],
        growTime: ["7"]
    },
    // Tree crops
    "minecraft:apple": {
        seasons: ["autumn"],
        yield: ["4"],
        growTime: ["8"]
    },
    "pamhc2trees:bananaitem": {
        seasons: ["summer"],
        yield: ["3"],
        growTime: ["8"]
    },
    "vinery:cherry": {
        seasons: ["spring"],
        yield: ["4"],
        growTime: ["8"]
    },
    "pamhc2trees:cinnamonitem": {
        seasons: ["autumn", "winter"],
        yield: ["1", "1"],
        growTime: ["8", "8"]
    },
    "pamhc2trees:dragonfruititem": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["8"]
    },
    "pamhc2trees:hazelnutitem": {
        seasons: ["autumn"],
        yield: ["3"],
        growTime: ["8"]
    },
    "pamhc2trees:lemonitem": {
        seasons: ["spring", "summer"],
        yield: ["1", "1"],
        growTime: ["8", "8"]
    },
    "pamhc2trees:lycheeitem": {
        seasons: ["year-round"],
        yield: ["3"],
        growTime: ["8"]
    },
    "pamhc2trees:mangoitem": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: ["8"]
    },
    "atmospheric:orange": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: ["8"]
    },
    "atmospheric:passion_fruit": {
        seasons: ["spring"],
        yield: ["1"],
        growTime: ["8"]
    },
    "pamhc2trees:pawpawitem": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["8"]
    },
    "pamhc2trees:peachitem": {
        seasons: ["summer"],
        yield: ["1"],
        growTime: ["8"]
    },
    "pamhc2trees:plumitem": {
        seasons: ["autumn"],
        yield: ["1"],
        growTime: ["8"]
    },
    "pamhc2trees:starfruititem": {
        seasons: ["year-round"],
        yield: ["1"],
        growTime: ["8"]
    }
};

const cropDisplayText = {}

const allValuesSame = (arr) => {
    if (!arr || arr.length <= 1) return true;
    const first = arr[0];
    return arr.every(val => val === first);
};

function getYieldDisplayText(cropId) {
    if (!crop.yield || crop.yield.length === 0) return [];
    let yieldDisplayText = [];
    yieldDisplayText.push(Text.translate("society.tooltip.yield"));
    if (seasons.length === 1) {
        yieldDisplayText.push(seasonColor(icon + " "));
        yieldDisplayText.push(seasonColor(crop.yield[0]));
    }
    return yieldDisplayText;
}

Object.keys(cropData).forEach(cropId => {
    const crop = cropData[cropId];
    const seasons = crop.seasons || ["year-round"];
    let season = seasons[0];
    const seasonColor = getSeasonColor(season);
    const icon = getSeasonIcon(season);
    cropDisplayText[cropId] = [];

    if (crop.yield && crop.yield.length > 0) {
        let yieldDisplayText = [];
        let yieldsSame = allValuesSame(crop.yield);
        yieldDisplayText.push(Text.translate("society.tooltip.yield"));

        if (seasons.length === 1) {
            // Single season, show with icon and color
            yieldDisplayText.push(seasonColor(icon + " "));
            yieldDisplayText.push(seasonColor(crop.yield[0]));
        } else if (yieldsSame) {
            // Multiple seasons but all same, show once with gray text
            yieldDisplayText.push(Text.translate(crop.yield[0]));
        } else {
            // Yields differ, show each season with icon and color
            seasons.forEach((season, index) => {
                if (crop.yield[index] !== undefined) {
                    const seasonColor = getSeasonColor(season);
                    const icon = getSeasonIcon(season);
                    if (index > 0) yieldDisplayText.push(Text.translate(" "));
                    yieldDisplayText.push(seasonColor(icon + " "));
                    yieldDisplayText.push(seasonColor(crop.yield[index]));
                }
            });
        }
        cropDisplayText[cropId].push(yieldDisplayText);
    }

    // Display grow time for each season
    if (crop.growTime) {
        let growTimeDisplayText = [];
        let growTimesSame = allValuesSame(crop.growTime);

        growTimeDisplayText.push(Text.translate("society.tooltip.grow_time"));

        let timeValue = crop.growTime[0];

        if (seasons.length === 1 || growTimesSame) {
            // Single season, show with icon and color  

            growTimeDisplayText.push(seasonColor(icon + " "));
            growTimeDisplayText.push(seasonColor(timeValue));
        } else {
            // Multiple seasons, show each season with icon and color
            seasons.forEach((season, index) => {
                if (crop.growTime[index] !== undefined) {
                    let seasonColor = getSeasonColor(season);
                    const icon = getSeasonIcon(season);

                    if (index > 0) growTimeDisplayText.push(Text.of(" "));
                    growTimeDisplayText.push(seasonColor(icon + " "));
                    growTimeDisplayText.push(seasonColor(timeValue));
                }
            });
        }
        cropDisplayText[cropId].push(growTimeDisplayText);

    }


    if (crop.regrowTime && crop.regrowTime.length > 0) {
        let regrowTimeDisplayText = [];
        regrowTimeDisplayText.push(Text.translate("society.tooltip.regrow_time"));

        if (seasons.length === 1) {
            // Single season, show with icon and color
            let season = seasons[0];
            let seasonColor = getSeasonColor(season);
            let timeValue = typeof crop.regrowTime[0] === 'number'
                ? `${crop.regrowTime[0]}`
                : `${crop.regrowTime[0]}`;
            regrowTimeDisplayText.push(seasonColor(icon + " "));
            regrowTimeDisplayText.push(seasonColor(timeValue));
        } else {
            seasons.forEach((season, index) => {
                if (crop.regrowTime[index] !== undefined) {
                    let seasonColor = getSeasonColor(season);
                    let icon = getSeasonIcon(season);
                    let timeValue = typeof crop.regrowTime[index] === 'number'
                        ? `${crop.regrowTime[index]}`
                        : `${crop.regrowTime[index]}`;
                    if (index > 0) regrowTimeDisplayText.push(Text.of(" "));
                    regrowTimeDisplayText.push(seasonColor(icon + " "));
                    regrowTimeDisplayText.push(seasonColor(timeValue));
                }
            });
        }
        cropDisplayText[cropId].push(regrowTimeDisplayText);
    }

})

ItemEvents.tooltip(event => {
    Object.keys(cropData).forEach(cropId => {
        event.addAdvanced(cropId, (_item, _advanced, text) => {
            cropDisplayText[cropId].forEach(t => {
                text.add(t);
            });
        });
    });
});


global["JadeCropBlocksClientCallback"] = (tooltip, accessor) => {
    const block = accessor.getBlock();
    const seedId = cropBlockData[block.getId().toString()]
    const blockId = block.getId().toString();

    if (!seedId) {
        // for debugging
        // tooltip.add(Text.red("No crop data found for block: "));
        // tooltip.add(Text.red(blockId));
        return;
    }

    if (cropDisplayText[seedId]) {
        // tooltip.add(Text.red(seedId));
        cropDisplayText[seedId].forEach(text => {
            tooltip.add(text);
        });
        return;
    } else {
        tooltip.add(Text.red(blockId));
    }
};

JadeEvents.onClientRegistration((event) => {
    console.log("onClientRegistration");
    event.block('slv:crop_block', $BLOCK)
        .tooltip((tooltip, accessor, pluginConfig) => {
            global["JadeCropBlocksClientCallback"](tooltip, accessor, pluginConfig);
        });
});
