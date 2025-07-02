console.info("[SOCIETY] chargingRod.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:charging_rod", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 5))
    .soundType("copper")
    .box(4, 0, 4, 12, 16, 12)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Makes batteries from lightning storms. Doesn't protect area"));
      item.modelJson({
        parent: "society:block/charging_rod_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 5), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 5), 0);
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
            stage: block.properties.get("stage"),
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
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:farming 15`
        );
        block.set(block.id, {
          working: false,
          mature: false,
          upgraded: upgraded,
          stage: "0",
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
        block.set(block.id, {
          working: true,
          mature: false,
          upgraded: upgraded,
          stage: "0",
        });
      }
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, null, 5);
      });
    })
    .blockstateJson = MultipartBuilder("society:block/charging_rod")
      .particle()
      .doneMark()
      .complex(
        MultipartModifiers.upgradable(),
        MultipartModifiers.machineStateful(),
      )
      .build();
});
