console.info("[SOCIETY] eyeOfEnderMessage.js loaded");

const eyeThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

ItemEvents.rightClicked("minecraft:ender_eye", (e) => {
  if (eyeThrottle(e.player, 400, "eye_throttle")) return;
  e.player.tell(Text.translatable("society.ender_eye.no_end").red());
});
