StartupEvents.registry("block", (e) => {
  e.create("society:statue_endless_fortune", "animatable")
    .box(1, 0, 1, 15, 18, 15, true)
    .animatableBlockEntity((info) => {
      info.addAnimation((state) => state.setAndContinue(RawAnimation.begin().thenLoop("rotating")));
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
      const { block, hand } = click;
      const mature = String(block.properties.get("mature")) === "true";
      const facing = block.properties.get("facing");

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
          block.set(block.id, {
            facing: facing,
            mature: false,
          });
        } else {
          block.set(block.id, {
            facing: facing,
            mature: true,
          });
        }
      }
    });
});
