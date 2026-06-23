BlockEvents.rightClicked((e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:fire_stone") {
      let hasTriggered = false;
      if (block.id === "minecraft:clay") {
        hasTriggered = true;
        block.set("minecraft:bricks")
      } else {
        server.recipeManager.getAllRecipesFor("minecraft:smelting").forEach((recipe) => {
          for (let ingredient of recipe.getIngredients()[0].getItemIds()) {
            if (block.id === ingredient) {
              let resultItem = recipe.getResultItem(level.registryAccess());
              if (resultItem.block) {
                hasTriggered = true;
                block.set(resultItem.id)
                break;
              }
            }
          }
        });
      }
      if (hasTriggered) {
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
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
          0.01);
        player.swing()
        server.runCommandSilent(`playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`);
      }
    }
  }
});

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
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

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
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

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
        if (!player.isCreative()) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:item.bone_meal.use block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

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
        if (!player.isCreative()) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:block.large_amethyst_bud.place block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

BlockEvents.rightClicked("society:charging_rod", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND")
    if (block.properties.get("working") == "false") {
      if (item.getId() === "cobblemon:thunder_stone") {
        const upgraded = block.properties.get("upgraded") == "true";
        Utils.server.runCommandSilent(
          `execute in ${level.dimension} run summon lightning_bolt ${block.x} ${block.y} ${block.z}`
        )
        let nbt = block.getEntityData();
        nbt.merge({ data: { stage: 0 } });
        global.setBlockEntityData(block, nbt)
        block.set(block.id, {
          working: true,
          mature: false,
          upgraded: upgraded,
        });
        if (!player.isCreative()) item.count--;
        player.swing()
      }
    }
});

BlockEvents.rightClicked("minecraft:snow_block", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:ice_stone") {
      level.spawnParticles(
        "minecraft:snowflake",
        true,
        block.x,
        block.y + 1,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        25,
        0.01); {
        block.set("minecraft:ice")
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:entity.player.hurt_freeze block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

BlockEvents.rightClicked("minecraft:ice", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:ice_stone") {
      level.spawnParticles(
        "minecraft:snowflake",
        true,
        block.x,
        block.y + 1,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        25,
        0.01); {
        block.set("minecraft:packed_ice")
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:entity.player.hurt_freeze block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

BlockEvents.rightClicked("minecraft:packed_ice", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:ice_stone") {
      level.spawnParticles(
        "minecraft:snowflake",
        true,
        block.x,
        block.y + 1,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        25,
        0.01); {
        block.set("minecraft:blue_ice")
        if (!player.isCreative() && Math.random() < 0.1) item.count--;
        player.swing()
      };
      server.runCommandSilent(
        `playsound minecraft:entity.player.hurt_freeze block @a ${player.x} ${player.y} ${player.z}`)
    }
  }
});

BlockEvents.rightClicked("sunlit_cobblemon:sun_raid_statue", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.getId() === "cobblemon:sun_stone") {
      let day = global.getDay(level);
      let nbt = block.getEntityData();
      const canSpawnToday = !nbt.data || !nbt.data.dayLastRaided || global.compareDay(day, nbt.data.dayLastRaided, 1)
      if (canSpawnToday) return;
      level.spawnParticles(
        "atmospheric:orange_vapor",
        true,
        block.x,
        block.y + 1,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        25,
        0.01);
      nbt.merge({
        data: {
          dayLastRaided: -1
        }
      });
      if (!player.isCreative()) item.count--;
      player.swing()
      server.runCommandSilent( `playsound minecraft:block.respawn_anchor.charge block @a ${player.x} ${player.y} ${player.z}`)
      global.setBlockEntityData(block, nbt);
    };
  }
});