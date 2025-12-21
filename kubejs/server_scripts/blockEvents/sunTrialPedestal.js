console.info("[SOCIETY] sunTrialPedestal.js loaded");

const spawnParticleBurst = (level, pos, particleId, count, speed) => {
  level.spawnParticles(
    particleId,
    true,
    pos.x + 0.5,
    pos.y + 0.5,
    pos.z + 0.5,
    0,
    0,
    0,
    count,
    speed
  );
};

const particleBridge = (level, fromPos, toEntity, particleId) => {
  const { x: startX, y: startY, z: startZ } = fromPos;
  const { x: endX, y: endY, z: endZ } = toEntity;
  const dist = fromPos.distToCenterSqr(endX, toEntity.y, endZ);

  for (let i = 0; i < dist; i += 1) {
    let t = i / dist;
    let x = startX + (endX - startX) * t;
    let y = startY + (endY - startY) * t;
    let z = startZ + (endZ - startZ) * t;

    level.spawnParticles(particleId, true, x, y + 0.5, z, 0, 0, 0, 1, 0);
  }
};

BlockEvents.rightClicked("society:sun_trial_pedestal", (e) => {
  const { player, server, block, hand, level } = e;
  if (!player.isCreative() && player.abilities.mayfly) {
    player.tell(
      Text.translatable("block.society.sun_trial_pedestal.flying").red()
    );
    e.cancel();
    return;
  }
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && player.isCrouching()) {
    let day = Number(
      (Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed()
    );
    let blockNbt = block.getEntityData();
    if (blockNbt.data.dayLastTriggered < day) {
      let { x, y, z } = block;
      let inventory = block.inventory;
      let lassoItem;
      let lassoNbt;
      let newMob;
      let newMobNbt;
      let mobHealth;
      blockNbt.merge({
        data: {
          dayLastTriggered: day,
        },
      });
      block.setEntityData(blockNbt);
      server.runCommandSilent(
        `playsound trials:spawner_detect_player block @a ${x} ${y} ${z}`
      );
      for (let i = 1; i < 3; i++) {
        server.scheduleInTicks(20 * i, () => {
          server.runCommandSilent(
            `playsound etcetera:block.drum.djembe.low block @a ${x} ${y} ${z}`
          );
          spawnParticleBurst(level, block.getPos(), "soul_fire_flame", 20, 0.2);
        });
      }
      server.scheduleInTicks(60, () => {
        server.runCommandSilent(
          `playsound trials:spawner_summon block @a ${x} ${y} ${z}`
        );
        server.runCommandSilent(
          `playsound etcetera:block.drum.djembe.low block @a ${x} ${y} ${z}`
        );
        spawnParticleBurst(
          level,
          block.getPos(),
          "fantasyfurniture:necrolord_flame",
          30,
          0.3
        );
        for (let j = 0; j < inventory.slots; j++) {
          lassoItem = block.inventory.getStackInSlot(j);
          lassoNbt = lassoItem.getNbt();
          if (
            lassoItem.id == "moblassos:hostile_lasso" &&
            !lassoNbt.isEmpty()
          ) {
            newMob = level.createEntity(lassoNbt.StoredEntity.id);
            newMob.setPos(
              x - 3 + Math.random() * 10,
              y + Math.random() * 1,
              z - 3 + Math.random() * 10
            );
            newMob.spawn();

            newMobNbt = newMob.getNbt();
            newMobNbt.HandItems = lassoNbt.StoredEntity.HandItems;
            newMob.setNbt(newMobNbt);
            mobHealth = Math.max(
              40,
              lassoNbt.StoredEntity.maxHealth
                ? lassoNbt.StoredEntity.maxHealth * 6
                : newMob.maxHealth * 6
            );

            newMob.setMaxHealth(mobHealth);
            newMob.setHealth(mobHealth);
            if (newMob && newMob.potionEffects) {
              newMob.potionEffects.add(
                "minecraft:fire_resistance",
                -1,
                0,
                true,
                false
              );
            }
            newMob.persistentData.sunTrial = true;
            particleBridge(level, block.getPos(), newMob, "end_rod");
          }
        }
      });
    } else {
      player.tell("You've already done today's Sun Trial...");
    }
    e.cancel();
  }
});

EntityEvents.death((e) => {
  const { source, level, entity } = e;
  if (!entity.persistentData.sunTrial) return;
  if (
    (source.player &&
      source.player.getType() === "minecraft:player" &&
      !source.player.abilities.mayfly) ||
    (source.actual && source.actual.getNbt() && source.actual.getNbt().Owner)
  ) {
    if (source.player.abilities.mayfly) {
    }
    let droppedLoot;
    if (entity.maxHealth > 120) {
      if (Math.random() < 0.1 && entity.maxHealth > 240) {
        droppedLoot = Utils.rollChestLoot(
          "society:util/sun_trial_legendary"
        ).toArray();
      } else {
        droppedLoot = Utils.rollChestLoot(
          "society:util/sun_trial_rare"
        ).toArray();
      }
    } else {
      droppedLoot = Utils.rollChestLoot(
        "society:util/sun_trial_common"
      ).toArray();
    }
    for (let i = 0; i < droppedLoot.length; i++) {
      let specialItem = level.createEntity("minecraft:item");
      let dropItem = droppedLoot[i];
      specialItem.x = entity.x;
      specialItem.y = entity.y;
      specialItem.z = entity.z;
      specialItem.item = dropItem;
      specialItem.spawn();
    }
  }
});
EntityEvents.hurt((e) => {
  const { server, level, source, entity } = e;
  if (
    entity.isPlayer() &&
    source.actual &&
    source.actual.persistentData.sunTrial
  ) {
    entity.attack(10);
    level.spawnParticles(
      "fantasyfurniture:necrolord_flame",
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
      `playsound etcetera:block.drum.djembe.low block @a ${entity.x} ${entity.y} ${entity.z}`
    );
  }
});
