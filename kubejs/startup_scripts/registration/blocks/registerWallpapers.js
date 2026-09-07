StartupEvents.registry("block", (e) => {
  const baseboardTypes = [
    "minecraft:birch_planks",
    "minecraft:dark_oak_planks",
    "minecraft:jungle_planks",
    "minecraft:oak_planks",
    "minecraft:spruce_planks",
  ];

  const BASEBOARD_TYPE = $IntegerProperty.create("type", 0, baseboardTypes.length);

  ["bee", "hive", "bunny", "cloud", "pink_flower"].forEach((wallpaperType) => {
    e.create(`society:${wallpaperType}_wallpaper`)
      .parentModel(`society:block/kubejs/wallpaper/${wallpaperType}_wallpaper`)
      .soundType("wool")
      .hardness(1.0)
      .resistance(1.0)
      .tagBlock("minecraft:mineable/axe")
      .requiresTool(true);
    if (wallpaperType !== "bee") {
      e.create(`society:${wallpaperType}_baseboard`)
        .parentModel(`society:block/kubejs/wallpaper/${wallpaperType}_baseboard`)
        .item((item) => {
          item.tooltip(Text.translatable("society.wallpaper.description").gray());
          item.tooltip(Text.translatable("society.wallpaper.description.tip").green());
        })
        .soundType("wood")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("minecraft:mineable/axe")
        .requiresTool(true)
        .property(BASEBOARD_TYPE)
        .defaultState((state) => {
          state.set(BASEBOARD_TYPE, 0);
        })
        .placementState((state) => {
          state.set(BASEBOARD_TYPE, 0);
        })
        .rightClick((click) => {
          const { block, item, hand, player, server } = click;
          if (hand == "OFF_HAND") return;
          if (hand == "MAIN_HAND") {
            if (baseboardTypes.includes(item.id)) {
              server.runCommandSilent(
                `playsound minecraft:block.wood.place block @a ${block.x} ${block.y} ${block.z}`
              );
              block.set(block.id, {
                type: String(baseboardTypes.indexOf(item.id) + 1),
              });
            } else if (player.isCrouching()) {
              block.set(block.id, {
                type: "0",
              });
            }
          }
        });
    }
  });
});
