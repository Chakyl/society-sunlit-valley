console.info("[SOCIETY] recyclingMachine.js loaded");

global.recyclingMachineRecipes = [
  { input: "aquaculture:tin_can", output: ["3x numismatics:cog"] },
  { input: "aquaculture:driftwood", output: ["1x meadow:fire_log"] },
  { input: "furniture:trash_bag", output: ["4x society:bouquet_bag"] },
  { input: "society:fire_quartz", output: ["24x minecraft:quartz"] },
  {
    input: "betterarcheology:artifact_shards",
    output: ["6x society:sparkstone"],
  },
  { input: "zetter:canvas", output: ["4x society:canvas"] },
  { input: "aquaculture:fish_bones", output: ["dew_drop_farmland_growth:strong_fertilizer"] },
  { input: "aquaculture:algae", output: ["dew_drop_farmland_growth:high_quality_fertilizer"] },
  { input: "simplehats:hatbag_common", output: ["1x society:canvas"] },
  { input: "simplehats:hatbag_uncommon", output: ["2x society:canvas"] },
  { input: "simplehats:hatbag_rare", output: ["3x society:canvas"] },
  { input: "simplehats:hatbag_epic", output: ["4x society:canvas"] },
  { input: "simplehats:hatbag_easter", output: ["5x society:canvas"] },
  { input: "simplehats:hatbag_summer", output: ["5x society:canvas"] },
  { input: "simplehats:hatbag_halloween", output: ["5x society:canvas"] },
  { input: "simplehats:hatbag_festive", output: ["5x society:canvas"] },
];

StartupEvents.registry("block", (event) => {
  event
    .create("society:recycling_machine", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 1))
    .property(integerProperty.create("type", 0, global.recyclingMachineRecipes.length))
    .box(1, 0, 3, 15, 16, 13)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Turns junk into usable resources"));
      item.modelJson({
        parent: "society:block/recycling_machine_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 1), 0)
        .set(integerProperty.create("type", 0, global.recyclingMachineRecipes.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 1), 0)
        .set(integerProperty.create("type", 0, global.recyclingMachineRecipes.length), 0);
    })
    .rightClick((click) => {
      global.handleBERightClick(
        "twigs:block.basalt_bricks.fall",
        click,
        global.recyclingMachineRecipes,
        1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.recyclingMachineRecipes, 1);
      });
    })
    .blockstateJson = MultipartBuilder("society:block/recycling_machine")
      .particle()
      .doneMark()
      .complex(
        MultipartModifiers.directional(),
        MultipartModifiers.machineStateful(),
      )
      .build();
});
