const ModConfig = Java.loadClass("sereneseasons.init.ModConfig")

NetworkEvents.dataReceived('society.synchronize_season_duration', (event) => {
    if(!event.getData()) return;
    const subSeasonDuration = event.getData().subSeasonDuration;
    if(subSeasonDuration !== ModConfig.seasons.subSeasonDuration) {
        ModConfig.seasons.subSeasonDuration = subSeasonDuration;
    }
});