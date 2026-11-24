console.info("[SOCIETY] handleSeasonTags.js loaded");

// Remove tags
const stripSeasons = (e, item) => {
  e.remove("sereneseasons:spring_crops", item);
  e.remove("sereneseasons:summer_crops", item);
  e.remove("sereneseasons:autumn_crops", item);
  e.remove("sereneseasons:winter_crops", item);
};
ServerEvents.tags("item", (e) => {
  global.CROP_DEFINITIONS.forEach((cropDef) => {
    stripSeasons(e, cropDef.item);
    if (cropDef.seasons) {
      cropDef.seasons.forEach((season) => {
        e.add(`sereneseasons:${season}_crops`, cropDef.item);
      })
    }
  })
});

ServerEvents.tags("block", (e) => {
  global.CROP_DEFINITIONS.forEach((cropDef) => {
    stripSeasons(e, cropDef.item);
    if (cropDef.seasons && cropDef.cropBlock) {
      cropDef.seasons.forEach((season) => {
        e.add(`sereneseasons:${season}_crops`, cropDef.cropBlock);
      })
    }
  })
  // Extras
  e.add("sereneseasons:spring_crops", "farmersdelight:budding_tomatoes")
});
