console.info("[SOCIETY] dayCounterTick.js loaded");
const pylonBuffs = [
  "pylon_extra_ore",
  "pylon_geode_roll",
  "pylon_rope_reveal",
  "pylon_remains",
  "pylon_damage",
];
PlayerEvents.tick((e) => {
  const { player, level } = e;
  
  if (player.age % 400 == 0 && player.stages.has("mining_mastery")) {
    let dayData = player.persistentData.days.manaPylonDay;
    if (dayData != -1 && global.getDay(level) != dayData) {
      pylonBuffs.forEach((buff) => {
        player.stages.remove(buff);
      });
      player.persistentData.days.manaPylonDay = -1;
    }
  }
});
