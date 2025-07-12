console.info("[SOCIETY] animalBreeding.js loaded");

const breedingItems = [
  "minecraft:carrot",
  "minecraft:wheat",
  "minecraft:beetroot",
  "minecraft:potato",
  "farmersdelight:cabbage_seeds",
  "vintagedelight:ghost_pepper_seeds",
  "vintagedelight:cucumber_seeds",
  "supplementaries:flax_seeds",
  "minecraft:beetroot_seeds",
  "minecraft:wheat_seeds",
  "minecraft:pumpkin_seeds",
  "minecraft:torchflower_seeds",
  "farmersdelight:tomato_seeds",
  "society:tubabacco_seed",
  "society:ancient_fruit_seed",
  "society:blueberry_seed",
  "minecraft:dandelion",
  "minecraft:golden_carrot",
];

ItemEvents.entityInteracted((e) => {
  const { hand, player, item, target, level, server } = e;
  if (player.cooldowns.isOnCooldown(item)) return;
  if (!global.checkEntityTag(target, "society:husbandry_animal") || target.isBaby()) return;
  if (breedingItems.includes(item.id)) {
    server.runCommandSilent(
      `immersivemessages sendcustom ${player.username} ${global.animalMessageSettings} 8 This animal can only be bred with a Miracle Potion!`
    );
    e.cancel();
  }

  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item === "society:miracle_potion") {
    let animalNbt = target.getNbt();
    let ageLastBred = target.persistentData.ageLastBred || 0;
    if (global.isFresh(day, ageLastBred)) ageLastBred = 0;
    if (Number(animalNbt.InLove) === 0 && day > ageLastBred) {
      if (target.type === "minecraft:panda" && Math.random() > 0.2) {
        item.count--;
        target.persistentData.ageLastBred = day;
        server.runCommandSilent(
          `immersivemessages sendcustom ${player.username} ${global.animalMessageSettings} 5 The Miracle Potion failed...`
        );
      } else {
        animalNbt.InLove = 2000;
        target.setNbt(animalNbt);
        item.count--;
        level.spawnParticles(
          "minecraft:heart",
          true,
          target.x,
          target.y + 1.5,
          target.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          12,
          0.01
        );
        target.persistentData.ageLastBred = day;
        player.swing();
        player.addItemCooldown(item, 10);
      }
    } else if (day > ageLastBred) {
      player.addItemCooldown("society:miracle_potion", 40);
      server.runCommandSilent(
        `immersivemessages sendcustom ${player.username} ${global.animalMessageSettings} 4 This animal needs time to rest after taking a Miracle Potion...`
      );
    }
  }
});
