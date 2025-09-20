//priority: 100
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
  { input: "atmospheric:carmine_husk", output: ["2x ribbits:toadstool"] },
  { input: "society:legendary_ink", output: ["4x supplementaries:antique_ink"] },
  { input: "rehooked:red_hook", output: ["rehooked:diamond_hook", "society:prismatic_shard"] },
  { input: "rehooked:blaze_hook", output: ["rehooked:diamond_hook"] },
  { input: "atmospheric:grimwood_leaves", output: ["4x atmospheric:grimwood_sapling"] },
  { input: "society:butterfly_amber", output: ["4x society:sparkstone"] },
  { input: "society:moth_pollen", output: ["16x vintagedelight:organic_mash"] },
  { input: "society:maple_syrup", output: ["4x vintagedelight:organic_mash"] },
  { input: "society:ruby", output: ["4x quark:red_corundum"] },
  { input: "society:topaz", output: ["4x quark:orange_corundum"] },
  { input: "society:fluorapatite", output: ["4x quark:violet_corundum"] },
  { input: "society:geminite", output: ["4x quark:green_corundum"] },
  { input: "society:kyanite", output: ["4x quark:indigo_corundum"] },
  { input: "society:opal", output: ["4x quark:white_corundum"] },
  { input: "society:lemon_stone", output: ["4x quark:yellow_corundum"] },
  { input: "society:ghost_crystal", output: ["4x quark:blue_corundum"] },
  { input: "society:bixbyite", output: ["4x quark:black_corundum"] },
  { input: "create:crushed_raw_iron", output: ["2x minecraft:raw_iron"] },
  { input: "minecraft:raw_copper", output: ["2x create:crushed_raw_copper"] },
  { input: "minecraft:raw_gold", output: ["2x create:crushed_raw_gold"] },
  { input: "create:raw_zinc", output: ["2x create:crushed_raw_zinc"] },
  { input: "oreganized:raw_lead", output: ["2x oreganized:raw_lead"] },
  { input: "oreganized:raw_silver", output: ["2x create:crushed_raw_silver"] },
  { input: "etcetera:raw_bismuth", output: ["2x create:crushed_raw_bismuth"] },
];

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
