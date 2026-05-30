const ModConfig = Java.loadClass("sereneseasons.init.ModConfig")
const data = { subSeasonDuration: 10 }

ServerEvents.loaded(event => {
    data.subSeasonDuration = ModConfig.seasons.subSeasonDuration;
});

PlayerEvents.loggedIn(event => {
    event.player.sendData('society.synchronize_season_duration', data);
});