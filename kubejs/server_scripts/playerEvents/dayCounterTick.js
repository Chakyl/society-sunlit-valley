console.info("[SOCIETY] dayCounterTick.js loaded");

const playerTickRate = 200;

const playerProgTime = 20;
const seasonDays = 30;
const dayTickDuration = 24000;

const statueBuffs = [
  "moon_extra_ore",
  "moon_geode_roll",
  "moon_rope_reveal",
  "moon_remains",
  "moon_damage",
];

const mastery = new Map([
  [
    "farming",
    ["farmers_blessing", "crop_collector", "artful_tycoon", "ancient_aging"],
  ],
  [
    "mining",
    ["prismatic_prospector", "high_roller", "gem_tycoon", "star_blessing"],
  ],
  [
    "husbandry",
    ["clockwork", "bff", "triple_truffle", "heretic"],
  ],
  [
    "adventuring",
    ["fence_2", "looting_tycoon", "prismatic_realm", "stuffed"],
  ],
  [
    "fishing",
    ["school_fisher", "prismatic_bounty", "scum_collector", "mitosis"],
  ],
]);

PlayerEvents.tick((e) => {
  const { player, level, server } = e;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % dayTickDuration;
  if (
    player.age % playerTickRate == 0 &&
    morningModulo >= playerProgTime &&
    morningModulo < playerProgTime + playerTickRate
  ) {
    // Sleeping cuts the amount of possible days by half
    let yearCount =
      player.stats.playTime / dayTickDuration / ((seasonDays * 4) / 2);
    if (
      !player.stages.has("master_cultivator_unlocked") &&
      yearCount > 1 &&
      ["spring", "summer"].includes(global.getSeasonFromLevel(level))
    ) {
      player.stages.add("master_cultivator_unlocked");
    }
    if (!player.stages.has("mastery_unlocked")) {
      let addMastery = true;
      let skillTree;
      let hasSkill;
      Array.from(mastery.keys()).forEach((masteryID) => {
        if (addMastery) {
          skillTree = mastery.get(masteryID);
          hasSkill = false;
          skillTree.forEach((skill) => {
            if (player.stages.has(skill)) hasSkill = true;
          })
          if (!hasSkill) addMastery = false;
        }
      });
      if (addMastery) {
        player.stages.add("mastery_unlocked")
        server.runCommandSilent(`puffish_skills category unlock ${player.username} society:mastery`);
        // TODO: dialog
      }
    }
  }
  if (player.age % 400 == 0) {
    if (
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
  }
});
