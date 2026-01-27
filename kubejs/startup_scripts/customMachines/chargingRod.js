//priority: 100
console.info("[SOCIETY] chargingRod.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:charging_rod", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .soundType("copper")
    .box(4, 0, 4, 12, 16, 12)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.charging_rod.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/charging_rod_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level, server } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      const season = global.getSeasonFromLevel(level);

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:frosted_tip") {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "farmersdelight:star",
            true,
            block.x,
            block.y + 1,
            block.z,
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            3,
            0.01
          );
          block.set(block.id, {
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
          });
        }
      }
      if (block.properties.get("mature").toLowerCase() === "true") {
        block.popItemFromFace(
          Item.of(`${upgraded && season === "winter" ? 3 : 1}x society:battery`),
          "up"
        );
        server.runCommandSilent(
          `playsound stardew_fishing:dwop block @a ${player.x} ${player.y} ${player.z}`
        );
        global.giveExperience(server, player, "farming", 40);
        block.set(block.id, {
          working: false,
          mature: false,
          upgraded: upgraded,
        });
      }
    })
    .randomTick((tick) => {
      const { block, level } = tick;
      const { x, y, z } = block;
      const upgraded = block.properties.get("upgraded") == "true";

      if (
        block.properties.get("working").toLowerCase() === "false" &&
        block.properties.get("mature").toLowerCase() === "false"
      ) {
        const season = global.getSeasonFromLevel(level);
        if ((!upgraded && season === "winter") || !level.raining || !block.canSeeSky) return;
        if (season !== "winter" && !level.thundering) return;
        level.spawnParticles(
          "minecraft:campfire_cosy_smoke",
          true,
          x + 0.5,
          y + 1,
          z + 0.5,
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          rnd(1, 4),
          0.1
        );
        Utils.server.runCommandSilent(
          `execute in ${level.dimension} run summon lightning_bolt ${block.x} ${block.y} ${block.z}`
        );
        let nbt = block.getEntityData();
        nbt.merge({ data: { stage: 0 } });
        block.setEntityData(nbt);
        block.set(block.id, {
          working: true,
          mature: false,
          upgraded: upgraded,
        });
      }
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, null, 5);
      });
    }).blockstateJson = {
    multipart: [
      { apply: { model: "society:block/kubejs/charging_rod_particle" } },
      {
        when: { working: false, upgraded: false, mature: false },
        apply: { model: "society:block/kubejs/charging_rod_off" },
      },
      {
        when: { working: true, upgraded: false, mature: false },
        apply: { model: "society:block/kubejs/charging_rod" },
      },
      {
        when: { working: false, upgraded: false, mature: true },
        apply: { model: "society:block/kubejs/charging_rod_done" },
      },
      {
        when: { working: false, upgraded: true, mature: false },
        apply: { model: "society:block/kubejs/charging_rod_upgraded_off" },
      },
      {
        when: { working: true, upgraded: true, mature: false },
        apply: { model: "society:block/kubejs/charging_rod_upgraded" },
      },
      {
        when: { working: false, upgraded: true, mature: true },
        apply: { model: "society:block/kubejs/charging_rod_upgraded_done" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/kubejs/machine_done" },
      },
    ],
  };
});
