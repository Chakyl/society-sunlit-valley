console.info("[SOCIETY] dayCounterTick.js loaded");
const statueBuffs = [
  "moon_extra_ore",
  "moon_geode_roll",
  "moon_rope_reveal",
  "moon_remains",
  "moon_damage",
];
PlayerEvents.tick((e) => {
  const { player, level } = e;

  if (
    player.age % 400 == 0 &&
    player.stages.has("mining_mastery") &&
    player.persistentData.days &&
    player.persistentData.days.moonStatueDay
  ) {
    let dayData = player.persistentData.days.moonStatueDay;
    if (dayData != -1 && global.getDay(level) != dayData) {
      statueBuffs.forEach((buff) => {
        player.stages.remove(buff);
      });
      player.persistentData.days.moonStatueDay = -1;
    }
  }
});
