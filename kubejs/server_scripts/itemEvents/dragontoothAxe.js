console.info("[SOCIETY] dragontoothAxe.js loaded");

const Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");

const breakAxe = (item, server, player) => {
  if (!player.stages.has("dragonslayer")) {
    item.count--;
    server.runCommandSilent(
      `playsound minecraft:entity.warden.sonic_boom block @a ${player.x} ${player.y} ${player.z}`
    );
    server.runCommandSilent(
      global.getEmbersTextAPICommand(player.username, `{anchor:"BOTTOM_CENTER",background:1,wrap:220,align:"BOTTOM_CENTER",color:"#FF5555",offsetY:-60}`, 240, Text.translatable("item.society.dragontooth_axe.no_skill_broken").toJson())
    );
  }
};

const galaxySmashRadius = 3;
ItemEvents.firstLeftClicked((e) => {
  const { hand, item, player, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item.id === "society:dragontooth_axe") {
    breakAxe(item, server, player);
    if (player.cooldowns.isOnCooldown(item) || !player.stages.has("galaxy_smash") || !player.isCrouching()) return;
    for (let pos of BlockPos.betweenClosed(
      new BlockPos(player.x - galaxySmashRadius, player.y - 1, player.z - galaxySmashRadius),
      [player.x + galaxySmashRadius, player.y + 1, player.z + galaxySmashRadius]
    )) {
      if (pos.y === Math.round(player.y)) {
        level.spawnParticles(
          "supplementaries:bomb_smoke",
          true,
          pos.x,
          pos.y + 0.5,
          pos.z,
          0.5 * rnd(0, 2),
          0.1 * rnd(-1.25, 1),
          0.5 * rnd(0, 2),
          4,
          0.01
        );
      }
    }
    let damageableMobs = level
      .getEntitiesWithin(player.boundingBox.inflate(galaxySmashRadius + 0.5))
      .filter((entity) => entity.isMonster());
    let hammerDamage = player.potionEffects.isActive("minecraft:strength") ? 20 : 15;
    
    damageableMobs.forEach((target) => {
      target.isAttackable() && target.attack(hammerDamage);
      level.spawnParticles(
        "species:ichor",
        true,
        target.x,
        target.y + 1.5,
        target.z,
        0.2 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.2 * rnd(1, 4),
        5,
        0.3
      );
    });
    server.runCommandSilent(
      `playsound quark:entity.toretoise.angry block @a ${player.x} ${player.y} ${player.z}`
    );
    server.runCommandSilent(
      `playsound minecraft:entity.ender_dragon.hurt block @a ${player.x} ${player.y} ${player.z}`
    );
    global.addItemCooldown(player, item, 200);
  }
});

ItemEvents.rightClicked((e) => {
  const { hand, item, player, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item.id === "society:dragontooth_axe") {
    breakAxe(item, server, player);
    if (player.cooldowns.isOnCooldown(item) || !player.stages.has("handleshot") || !player.isCrouching()) return;
    let arrow = level
      .getBlock(player.x, player.y + 1, player.z)
      .createEntity("minecraft:arrow");
    arrow.y = arrow.y + 1;
    let speed = 5.0;
    let motionX = player.lookAngle.x() * speed;
    let motionY = player.lookAngle.y() * speed;
    let motionZ = player.lookAngle.z() * speed;
    arrow.setDeltaMovement(new Vec3(motionX, motionY, motionZ));
    arrow.spawn();
    level.spawnParticles(
      "supplementaries:bomb_smoke",
      true,
      player.x,
      player.y + 0.5,
      player.z,
      0.9 * rnd(0, 3),
      0.1 * rnd(-1.25, 1),
      0.9 * rnd(0, 3),
      20,
      0.01
    );
    server.runCommandSilent(
      `playsound minecraft:entity.ghast.shoot block @a ${player.x} ${player.y} ${player.z}`
    );
    server.runCommandSilent(
      `playsound minecraft:entity.ender_dragon.hurt block @a ${player.x} ${player.y} ${player.z}`
    );
    global.addItemCooldown(player, item, 80);
  }
});

BlockEvents.leftClicked((e) => {
  const { hand, item, player, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item.id === "society:dragontooth_axe")
    breakAxe(item, server, player);
});
