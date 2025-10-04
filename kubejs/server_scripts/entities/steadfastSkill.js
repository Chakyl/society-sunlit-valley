console.info("[SOCIETY] steadFastSkill.js loaded");

const steadfastThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

EntityEvents.hurt((e) => {
  const { server, level, entity } = e;
  // Fix windswept bug
  if (entity.isPlayer() && entity.getTicksFrozen() > 140) entity.setTicksFrozen(140);
  if (!entity.isPlayer() || steadfastThrottle(entity, 20, "steadfast_throttle")) return;
  if (entity.isPlayer() && Math.random() < 0.2 && entity.stages.has("steadfast")) {
    entity.heal(2);
    level.spawnParticles(
      "minecraft:heart",
      true,
      entity.x,
      entity.y + 1.5,
      entity.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      5,
      0.01
    );
    server.runCommandSilent(
      `playsound species:item.wicked_treat.apply block @a ${entity.x} ${entity.y} ${entity.z}`
    );
  }
});
