console.info("[SOCIETY] animalTweaks.js loaded");

ItemEvents.entityInteracted((e) => {
  const { item, target } = e;
  if (target.type === "minecraft:mooshroom" && item.id === "minecraft:bowl") {
    target.attack(2);
  }
});

ItemEvents.entityInteracted((e) => {
  const { target } = e;
  if (target.type === "minecraft:wolf") {
    let nbt = target.getNbt();
    nbt.IsBewereager = 0;
    target.setNbt(nbt)
  }
});

EntityEvents.spawned((e) => {
  if (e.entity.type == "minecraft:skeleton_horse" && e.entity.getNbt().SkeletonTrap !== 0.0) {
    e.cancel();
  }
});
