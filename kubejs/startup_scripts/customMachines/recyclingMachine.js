//priority: 100
console.info("[SOCIETY] recyclingMachine.js loaded");

global.recyclingMachineRecipes = new Map([
  ["aquaculture:tin_can", { output: ["3x numismatics:cog"] }],
  ["aquaculture:driftwood", { output: ["1x meadow:fire_log"] }],
  ["furniture:trash_bag", { output: ["4x society:bouquet_bag"] }],
  ["society:fire_quartz", { output: ["24x minecraft:quartz"] }],
  ["betterarcheology:artifact_shards", { output: ["6x society:sparkstone"] }],
  ["zetter:canvas", { output: ["4x society:canvas"] }],
  ["aquaculture:fish_bones", { output: ["dew_drop_farmland_growth:strong_fertilizer"] }],
  ["aquaculture:algae", { output: ["dew_drop_farmland_growth:high_quality_fertilizer"] }],
  ["simplehats:hatbag_common", { output: ["1x society:canvas"] }],
  ["simplehats:hatbag_uncommon", { output: ["2x society:canvas"] }],
  ["simplehats:hatbag_rare", { output: ["3x society:canvas"] }],
  ["simplehats:hatbag_epic", { output: ["4x society:canvas"] }],
  ["simplehats:hatbag_easter", { output: ["5x society:canvas"] }],
  ["simplehats:hatbag_summer", { output: ["5x society:canvas"] }],
  ["simplehats:hatbag_halloween", { output: ["5x society:canvas"] }],
  ["simplehats:hatbag_festive", { output: ["5x society:canvas"] }],
  ["atmospheric:carmine_husk", { output: ["2x ribbits:toadstool"] }],
  ["society:legendary_ink", { output: ["4x supplementaries:antique_ink"] }],
  ["rehooked:red_hook", { output: ["rehooked:diamond_hook", "society:prismatic_shard"] }],
  ["rehooked:blaze_hook", { output: ["rehooked:diamond_hook"] }],
  ["atmospheric:grimwood_leaves", { output: ["4x atmospheric:grimwood_sapling"] }],
  ["society:butterfly_amber", { output: ["4x society:sparkstone"] }],
  ["society:moth_pollen", { output: ["16x vintagedelight:organic_mash"] }],
  ["society:maple_syrup", { output: ["4x vintagedelight:organic_mash"] }],
  ["society:ruby", { output: ["4x quark:red_corundum"] }],
  ["society:topaz", { output: ["4x quark:orange_corundum"] }],
  ["society:fluorapatite", { output: ["4x quark:violet_corundum"] }],
  ["society:geminite", { output: ["4x quark:green_corundum"] }],
  ["society:kyanite", { output: ["4x quark:indigo_corundum"] }],
  ["society:opal", { output: ["4x quark:white_corundum"] }],
  ["society:lemon_stone", { output: ["4x quark:yellow_corundum"] }],
  ["society:ghost_crystal", { output: ["4x quark:blue_corundum"] }],
  ["society:bixbyite", { output: ["4x quark:black_corundum"] }],
  ["society:enriched_bone_meal", { output: ["1x vintagedelight:organic_mash"] }],
  ["minecraft:raw_iron", { output: ["2x create:crushed_raw_iron"] }],
  ["minecraft:raw_copper", { output: ["2x create:crushed_raw_copper"] }],
  ["minecraft:raw_gold", { output: ["2x create:crushed_raw_gold"] }],
  ["create:raw_zinc", { output: ["2x create:crushed_raw_zinc"] }],
  ["oreganized:raw_lead", { output: ["2x create:crushed_raw_lead"] }],
  ["oreganized:raw_silver", { output: ["2x create:crushed_raw_silver"] }],
  ["etcetera:raw_bismuth", { output: ["2x create:crushed_raw_bismuth"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:recycling_machine", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(1, 0, 3, 15, 16, 13)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Turns junk into usable resources"));
      item.modelJson({
        parent: "society:block/recycling_machine/recycling_machine_off",
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
      global.handleBERightClick(
        "twigs:block.basalt_bricks.fall",
        click,
        global.recyclingMachineRecipes,
        1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, type: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.recyclingMachineRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("recycling_machine"),
  };
});
