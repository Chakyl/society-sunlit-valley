console.info("[WHIMSY_DECO] registerWhimsyBlocks.js loaded");

StartupEvents.registry("block", (e) => {
  e.create("whimsy_deco:statue_endless_fortune", "animatable")
    .box(1, 0, 1, 15, 18, 15, true)
    .displayName("Statue of Endless Fortune")
    .animatableBlockEntity((info) => {
      info.addAnimation((state) =>
        state.setAndContinue(RawAnimation.begin().thenLoop("rotating"))
      );
      info.serverTick(artMachineTickRate, 0, (entity) => {
        const { level, block } = entity;
        const { x, y, z } = block;
        let dayTime = level.dayTime();
        let morningModulo = dayTime % 24000;
        if (
          morningModulo >= artMachineProgTime &&
          morningModulo < artMachineProgTime + artMachineTickRate
        ) {
          level.server.runCommandSilent(
            `playsound tanukidecor:block.cash_register.ring block @a ${x} ${y} ${z}`
          );
          block.set(block.id, {
            facing: block.properties.get("facing"),
            mature: true,
          });
        }
      });
    })
    .defaultGeoModel()
    .property(BlockProperties.HORIZONTAL_FACING)
    .property(booleanProperty.create("mature"))
    .placementState((state) => {
      state
        .set(
          BlockProperties.HORIZONTAL_FACING,
          String(state.getHorizontalDirection().getOpposite())
        )
        .set(booleanProperty.create("mature"), false);
    })
    .rightClick((click) => {
      const { block, level, hand } = click;
      const { x, y, z } = block;
      const mature = String(block.properties.get("mature")) === "true";
      const facing = block.properties.get("facing");

      if (click.player.isFake()) return;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (mature) {
          const possibleDrops = [
            "society:pristine_diamond",
            "minecraft:netherite_ingot",
            "society:omni_geode",
            "oreganized:electrum_ingot",
          ];
          block.popItemFromFace(
            possibleDrops[Math.floor(Math.random() * possibleDrops.length)],
            facing
          );
          level.server.runCommandSilent(
            `playsound tanukidecor:block.cash_register.ring block @a ${x} ${y} ${z}`
          );
          block.set(block.id, {
            facing: facing,
            mature: false,
          });
        }
      }
    });

  e.create("whimsy_deco:sunlit_singing_frog", "animatable")
    .animatableBlockEntity((info) => {
      info.addAnimation((state) =>
        state.setAndContinue(RawAnimation.begin().thenLoop("sing"))
      );
    })
    .box(1, 0, 1, 15, 18, 15, true)
    .defaultGeoModel()
    .property(BlockProperties.HORIZONTAL_FACING)
    .property(integerProperty.create("type", 0, global.plushieTraits.length))
    .placementState((state) => {
      state
        .set(
          BlockProperties.HORIZONTAL_FACING,
          String(state.getHorizontalDirection().getOpposite())
        )
        .set(integerProperty.create("type", 0, global.plushieTraits.length), 0);
    })
    .defaultState((state) => {
      state.set(
        integerProperty.create("type", 0, global.plushieTraits.length),
        0
      );
    })
    .rightClick((click) => {
      const { block, server } = click;
      const { x, y, z } = block;
      let nbt = block.getEntityData();
      block.set("whimsy_deco:adv_singing_frog_plushie", block.properties);
      block.setEntityData(nbt);
      server.runCommandSilent(
        `execute positioned ${x} ${y} ${z} run stopsound @e[type=player,distance=..4] block`
      );
    });
});

// StartupEvents.registry("item", (e) => {
//   e.create("whimsy_deco:paw_carpet")
//     .tooltip(Text.gray("Sneak while standing on it to remove"))
//     .modelJson({
//       texture_size: [128, 128],
//       textures: {
//         0: "whimsy_deco:block/paw_carpet",
//         particle: "whimsy_deco:block/paw_carpet",
//       },
//       elements: [
//         {
//           from: [-16, 0, 0],
//           to: [32, 1, 32],
//           faces: {
//             north: { uv: [0, 0, 6, 0.125], texture: "#0" },
//             east: { uv: [0.125, 0, 4.125, 0.125], texture: "#0" },
//             south: { uv: [0, 0, 6, 0.125], texture: "#0" },
//             west: { uv: [0.5, 0, 4.5, 0.125], texture: "#0" },
//             up: { uv: [12, 8, 0, 0], texture: "#0" },
//             down: { uv: [12, 0, 0, 8], texture: "#0" },
//           },
//         },
//       ],
//       display: {
//         thirdperson_righthand: {
//           rotation: [75, 45, 0],
//           translation: [0, 2.5, 0],
//           scale: [0.375, 0.375, 0.375],
//         },
//         thirdperson_lefthand: {
//           rotation: [75, 45, 0],
//           translation: [0, 2.5, 0],
//           scale: [0.375, 0.375, 0.375],
//         },
//         firstperson_righthand: {
//           rotation: [0, 45, 0],
//           scale: [0.4, 0.4, 0.4],
//         },
//         firstperson_lefthand: {
//           rotation: [0, -135, 0],
//           scale: [0.4, 0.4, 0.4],
//         },
//         ground: {
//           translation: [0, 3, 0],
//           scale: [0.25, 0.25, 0.25],
//         },
//         gui: {
//           rotation: [30, -135, 0],
//           translation: [1.5, 0, 0],
//           scale: [0.29, 0.29, 0.29],
//         },
//         fixed: {
//           rotation: [-90, 0, 0],
//           translation: [0, -2.75, -1.75],
//           scale: [0.38, 0.38, 0.38],
//         },
//       },
//     });
// });
