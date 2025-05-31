ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.player.PlayerSleepInBedEvent",
  (e) => {
    global.handleThunder(e);
  }
);
global.handleThunder = (e) => {
  const { entity } = e;
  if (!entity.isPlayer()) return;
  const level = entity.level;
  if (level.isNight()) {
    Utils.server.scheduleInTicks(0, () => {
      Utils.server.scheduleInTicks(140, () => {
        if (!level.isNight()) {
          const season = global.getSeasonFromLevel(level);
          const roll = Math.random();
          let setThunder = false;
          switch (season) {
            case "spring":
              setThunder = roll <= 0.06;
              break;
            case "summer":
              setThunder = roll <= 0.1                                 ;
              break;
            case "autumn":
              setThunder = roll <= 0.03;
              break;
            default:
              break;
          }
          if (setThunder) {
            Utils.server.runCommandSilent("weather thunder");
          }
        }
      });
    });
  }
};
