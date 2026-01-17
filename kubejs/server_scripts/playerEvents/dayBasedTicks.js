console.info("[SOCIETY] skullCavernTick.js loaded");
const playerTickRate = 200;

const playerProgTime = 20;
const seasonDays = 30;
const dayTickDuration = 24000;
PlayerEvents.tick((e) => {
  const { level, player } = e;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % dayTickDuration;
  if (
    player.age % playerTickRate == 0 &&
    morningModulo >= playerProgTime &&
    morningModulo < playerProgTime + playerTickRate
  ) {
    // Sleeping cuts the amount of possible days by half
    const yearCount =
      player.stats.playTime / dayTickDuration / ((seasonDays * 4) / 2);
    player.tell(yearCount);
    player.tell(player.stages.has("master_cultivator_unlocked"));
    if (
      !player.stages.has("master_cultivator_unlocked") &&
      yearCount > 1 &&
      ["spring", "summer"].includes(global.getSeasonFromLevel(level))
    ) {
      player.stages.add("master_cultivator_unlocked");
    }
  }
});
