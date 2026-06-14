BlockEvents.rightClicked("minecraft:cobblestone", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:fire_stone") {
      level.spawnParticles(
        "minecraft:large_smoke",
        true,
        block.x,
        block.y + 1,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        25,
        0.01); {
          block.set("minecraft:stone")
        if (Math.random() < 0.1) item.count--;
      };
      (server.runCommandSilent(
        `playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`))
    }
  }
}),
  BlockEvents.rightClicked("minecraft:sand", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:fire_stone") {
        level.spawnParticles(
          "minecraft:large_smoke",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("minecraft:glass")
          if (Math.random() < 0.1) item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("minecraft:clay", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:fire_stone") {
        level.spawnParticles(
          "minecraft:large_smoke",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("minecraft:terracotta")
          if (Math.random() < 0.1) item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("minecraft:dirt", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:leaf_stone") {
        level.spawnParticles(
          "minecraft:happy_villager",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("minecraft:grass_block")
          if (Math.random() < 0.1) item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("vinery:dirt_slab", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:leaf_stone") {
        level.spawnParticles(
          "minecraft:happy_villager",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("vinery:grass_slab")
          if (Math.random() < 0.1) item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("meadow:fire_log", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:fire_stone") {
        level.spawnParticles(
          "minecraft:large_smoke",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("quark:charcoal_block")
          if (Math.random() < 0.1) item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("minecraft:farmland", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:water_stone") {
        level.spawnParticles(
          "minecraft:happy_villager",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          25,
          0.01); {
            block.set("dew_drop_farmland_growth:deluxe_hydrating_farmland")
          item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  }),
  BlockEvents.rightClicked("minecraft:amethyst_block", (e) => {
    const { item, player, hand, block, level, server } = e;
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "cobblemon:shiny_stone") {
        level.spawnParticles(
          "minecraft:dragon_breath",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          10,
          0.01); {
            block.set("minecraft:budding_amethyst")
          item.count--;
        };
        (server.runCommandSilent(
          `playsound minecraft:block.large_amethyst_bud.place block @a ${player.x} ${player.y} ${player.z}`))
      }
    }
  })