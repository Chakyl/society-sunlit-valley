console.info("[SOCIETY] pawpawRoad.js loaded");

const pawpawThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

ItemEvents.rightClicked("pamhc2trees:pawpawitem", (e) => {
  if (pawpawThrottle(e.player, 1000, "pawpaw_throttle")) return;
  if (Math.random() < 0.05) {
    e.player.tell(Text.translatable("society.pawpaw_road.1").gold());

    e.server.scheduleInTicks(60, () => {
      e.player.tell(Text.translatable("society.pawpaw_road.2").gold());
    });
    e.server.scheduleInTicks(120, () => {
      e.player.tell(Text.translatable("society.pawpaw_road.3").gold());
    });
    e.server.scheduleInTicks(180, () => {
      e.player.tell(Text.translatable("society.pawpaw_road.4").gold());
    });
    e.server.scheduleInTicks(240, () => {
      e.player.tell(Text.translatable("society.pawpaw_road.5").gold().bold());
    });
    e.server.scheduleInTicks(300, () => {
      e.player.tell(Text.translatable("society.pawpaw_road.6").gold().bold());
    });
  }
});
