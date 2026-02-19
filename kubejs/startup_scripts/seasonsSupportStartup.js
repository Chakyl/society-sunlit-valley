const SeasonHelper = Java.loadClass("sereneseasons.api.season.SeasonHelper")
const Season = Java.loadClass("sereneseasons.api.season.Season")

const seasonName = (seasonObj) => {
  if (seasonObj == Season.SPRING) {
    return 'spring'
  } else if (seasonObj == Season.SUMMER) {
    return 'summer'
  } else if (seasonObj == Season.AUTUMN) {
    return 'autumn'
  } else {
    return 'winter'
  }
}
global.getSeasonFromLevel = (level) => {
  return seasonName(SeasonHelper.getSeasonState(level).getSeason())
}

global.getSeasonFromBiome = (level, pos) => {
  const biome = level.getBiome(pos);
  const biomeTags = biome.tags().map((tagkey) => tagkey.location()).toList();
  if (
    biomeTags.toString().includes("sereneseasons:tropical_biomes")
  ) {
    return "summer"
  }
  if (
    Number(biome.get().getTemperature(pos)) < 0.15
  ) {
    return "winter"
  }
  return global.getSeasonFromLevel(level);
}
