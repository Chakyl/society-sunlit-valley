ServerEvents.generateData('after_mods', (e) => {
    let cropGrowTimes = { values: {} }
    let multiHarvestCrops = { values: {} }
    global.CROP_DEFINITIONS.forEach((crop) => {
        if (!crop.blocked && crop.cropBlock) {
            if (crop.growDays) cropGrowTimes.values[crop.cropBlock] = Number(crop.growDays)
            if (crop.regrowDays) multiHarvestCrops.values[crop.cropBlock] = Number(crop.regrowDays)
        }
    })
    e.json('sunrisegardening:data_maps/block/crop_grow_times.json', cropGrowTimes)
    e.json('sunrisegardening:data_maps/block/multi_harvest_crops.json', multiHarvestCrops)
})
const handleSeasons = (e, id, seasons) => {
    ["spring", "summer", "autumn", "winter"].forEach((season) => {
        if (seasons.includes(season)) {
            e.add(`sereneseasons:${season}_crops`, id);
        } else {
            e.remove(`sereneseasons:${season}_crops`, id);

        }
    })
};

ServerEvents.tags('block', (e) => {
    global.CROP_DEFINITIONS.forEach((crop) => {
        if (!crop.blocked && crop.cropBlock) {
            if (!crop.regrowDays) e.add("sunrisegardening:single_harvest_crop", crop.cropBlock)
            if (crop.seasons) handleSeasons(e, crop.cropBlock, crop.seasons)
        }
    })
})

ServerEvents.tags('item', (e) => {
    global.CROP_DEFINITIONS.forEach((crop) => {
        if (!crop.blocked) {
            if (!crop.regrowDays) e.add("sunrisegardening:single_harvest_crop", crop.item)
            if (crop.seasons) handleSeasons(e, crop.item, crop.seasons)
        }
    })
})
