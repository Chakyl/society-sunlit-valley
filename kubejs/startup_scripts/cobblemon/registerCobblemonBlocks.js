console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBlocks.js loaded");



StartupEvents.registry("block", (e) => {
  const cobblemonStone = (stone, lightLevel) => {
    if (lightLevel && lightLevel > 0) {
      e.create(`cobblemon:${stone}_stone_block`)
        .soundType("amethyst")
        .hardness(2)
        .lightLevel(lightLevel)
        .resistance(1.0)
        .textureAll(`cobblemon:block/evolution/${stone}_stone_block`);
    } else {

      e.create(`cobblemon:${stone}_stone_block`)
        .soundType("amethyst")
        .hardness(2)
        .resistance(1.0)
        .textureAll(`cobblemon:block/evolution/${stone}_stone_block`);
    }
  }
  cobblemonStone("fire", 0.9);
  cobblemonStone("water");
  cobblemonStone("thunder", 0.5);
  cobblemonStone("leaf");
  cobblemonStone("ice");
  cobblemonStone("sun", 0.3);
  cobblemonStone("moon");
  cobblemonStone("shiny", 1);
  cobblemonStone("dawn", 1);
  cobblemonStone("dusk");

  e.create("sunlit_cobblemon:ominous_black_stake")
    .box(6, 0, 6, 10, 12, 10)
    .defaultCutout()
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .model("sunlit_cobblemon:block/kubejs/ominous_black_stake");

  e.create("sunlit_cobblemon:gem_box")
    .box(3, 0, 3, 13, 10, 13)
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ passcode: "" });
    })
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .model("sunlit_cobblemon:block/kubejs/gem_box");

  e.create("sunlit_cobblemon:time_frame")
    .soundType("stone")
    .hardness(5)
    .resistance(4.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.time_frame.description").gray());
      item.modelJson({
        parent: "sunlit_cobblemon:block/kubejs/time_frame",
      });
    })
    .property(BlockProperties.AXIS)
    .placementState((e) => e.set(BlockProperties.AXIS, e.clickedFace.axis)).blockstateJson = {
    variants: {
      "axis=x": {
        model: "sunlit_cobblemon:block/kubejs/time_frame_horizontal",
        x: 90,
        y: 90,
      },
      "axis=y": {
        model: "sunlit_cobblemon:block/kubejs/time_frame",
      },
      "axis=z": {
        model: "sunlit_cobblemon:block/kubejs/time_frame_horizontal",
        x: 90,
      },
    },
  };
  e.create("sunlit_cobblemon:meteor_chunk")
    .soundType("stone")
    .hardness(2.5)
    .resistance(8)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .textureAll("sunlit_cobblemon:block/meteor_chunk")
  for (let index = 1; index <= 16; index++) {
    e.create(`sunlit_cobblemon:mural_stone_${index}`, "cardinal")
      .model(`sunlit_cobblemon:block/kubejs/mew/mural_stone_${index}`)
      .displayName("Mural Stone")
      .mapColor("stone")
      .soundType("stone")
      .tagBlock("minecraft:mineable/pickaxe")
      .hardness(5.0)
      .resistance(5.0)
      .requiresTool(false)
      .texture("particle", "minecraft:block/basalt_side");
  }
});
