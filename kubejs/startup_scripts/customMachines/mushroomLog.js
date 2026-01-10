//priority: 100
console.info("[SOCIETY] mushroomLog.js loaded");

const shimmeringOutputs = [
  "botania:white_mushroom",
  "botania:light_gray_mushroom",
  "botania:gray_mushroom",
  "botania:black_mushroom",
  "botania:brown_mushroom",
  "botania:red_mushroom",
  "botania:orange_mushroom",
  "botania:yellow_mushroom",
  "botania:lime_mushroom",
  "botania:green_mushroom",
  "botania:cyan_mushroom",
  "botania:light_blue_mushroom",
  "botania:blue_mushroom",
  "botania:purple_mushroom",
  "botania:magenta_mushroom",
  "botania:pink_mushroom",
];

global.mushroomLogRecipes = new Map([
    // Red/brown mushroom
    ["meadow:pine_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["autumnity:maple_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["windswept:pine_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["minecraft:acacia_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["minecraft:jungle_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["beachparty:palm_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["minecraft:spruce_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["minecraft:cherry_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["quark:blossom_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    ["minecraft:mangrove_log", { outputs: ["minecraft:red_mushroom", "minecraft:brown_mushroom"], mult: 2 }]
    // Red colony
    ["windswept:weathered_pine_log", { outputs: ["farmersdelight:red_mushroom_colony"], mult: 1 }]
    ["minecraft:oak_log", { outputs: ["farmersdelight:red_mushroom_colony"], mult: 1 }]
    ["vinery:dark_cherry_log", { outputs: ["farmersdelight:red_mushroom_colony"], mult: 1 }],
    ["cluttered:crabapple_log", { outputs: ["farmersdelight:red_mushroom_colony"], mult: 1 }],
    ["atmospheric:grimwood_log", { outputs: ["farmersdelight:red_mushroom_colony"], mult: 1 }],
    // Brown colony
    ["windswept:chestnut_log", { outputs: ["farmersdelight:brown_mushroom_colony"], mult: 1 }],
    ["minecraft:pale_oak_log", { outputs: ["farmersdelight:brown_mushroom_colony"], mult: 1 }],
    ["cluttered:poplar_log", { outputs: ["farmersdelight:brown_mushroom_colony"], mult: 1 }],
    ["atmospheric:aspen_log", { outputs: ["farmersdelight:brown_mushroom_colony"], mult: 1 }],
    ["minecraft:dark_oak_log", { outputs: ["farmersdelight:brown_mushroom_colony"], mult: 1 }],
    // Toadstool
    ["atmospheric:rosewood_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    ["atmospheric:morado_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    ["atmospheric:yucca_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    ["atmospheric:laurel_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    ["vinery:apple_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    ["windswept:holly_log", { outputs: ['ribbits:toadstool'], mult: 3 }],
    // Bracket
    ["quark:ancient_log", { outputs: ["verdantvibes:bracket_mushroom"], mult: 1 }],
    ["atmospheric:kousa_log", { outputs: ["verdantvibes:bracket_mushroom"], mult: 1 }],
    ["quark:azalea_log", { outputs: ["verdantvibes:bracket_mushroom"], mult: 1 }],
    // Shimmering
    ["atmospheric:watchful_aspen_log", { outputs: shimmeringOutputs, mult: 3 }],
    ["atmospheric:crustose_log", { outputs: shimmeringOutputs, mult: 3 }],
    ["cluttered:flowering_poplar_log", { outputs: shimmeringOutputs, mult: 3 }],
    ["cluttered:flowering_crabapple_log", { outputs: shimmeringOutputs, mult: 3 }],
    // Glow 
    ["cluttered:fluorescent_maple_log", { outputs: ['quark:glow_shroom'], mult: 3 }],
    ["vintagedelight:magic_vine", { outputs: ['quark:glow_shroom'], mult: 4 }],
    // Warped crimson
    ['minecraft:crimson_stem', { outputs: ['minecraft:crimson_fungus'], mult: 3 }], 
    ['minecraft:warped_stem', { outputs: ['minecraft:warped_fungus'], mult: 3 }], 
    // Alphacene
    ['betterarcheology:rotten_log', { outputs: ['species:alphacene_mushroom'], mult: 2 }], 
    // Cluttershroms
    ['cluttered:blue_mushroom_cap', { outputs: ['cluttered:blue_roundhead'], mult: 2 }], 
    ['cluttered:blue_mushroom_log', { outputs: ['cluttered:blue_roundhead'], mult: 2 }], 
    ['cluttered:red_mushroom_log', { outputs: ['cluttered:fly_agaric'], mult: 2 }], 
    ['cluttered:red_mushroom_cap', { outputs: ['cluttered:fly_agaric'], mult: 2 }], 
]);
global.dominantMushroomLogBlocks = new Map([
    ['species:alphacene_mushroom_block', { outputs: ['species:alphacene_mushroom'], mult: 2 }], 
    ['minecraft:birch_log', { outputs: ['verdantvibes:bracket_mushroom'], mult: 2 }], 
    ['cluttered:willow_log', { outputs: shimmeringOutputs, mult: 6 }], 
    ['cluttered:flowering_willow_log', { outputs: shimmeringOutputs, mult: 6 }], 
    ['quark:glow_shroom_stem', { outputs: ['quark:glow_shroom'], mult: 4 }], 
    ['minecraft:brown_mushroom_block', { outputs: ['farmersdelight:brown_mushroom_colony'], mult: 2 }], 
    ['minecraft:red_mushroom_block', { outputs: ['farmersdelight:red_mushroom_colony'], mult: 2 }], 
    ['ribbits:toadstool_stem', { outputs: ['ribbits:toadstool'], mult: 4 }], 
    ['ribbits:brown_toadstool', { outputs: ['ribbits:toadstool'], mult: 4 }], 
    ['ribbits:red_toadstool', { outputs: ['ribbits:toadstool'],  mult: 4 }], 
])
StartupEvents.registry("block", (event) => {
  event
    .create("society:mushroom_log", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(booleanProperty.create("error"))
    .soundType("wood")
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.mushroom_log.description").gray()
      );
      item.modelJson({
        parent: "society:block/mushroom_log/mushroom_log_off",
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
      const { player, item, block, hand, level } = click;
      global.handleBERightClick(
        "vinery:cabinet_close",
        click,
        global.mushroomLogRecipes,
        7,
        false,
        false,
        1,
        true
      );
      global.handleMushroomLogRandomTick(click);
    })
    .randomTick((tick) => {
      global.handleMushroomLogRandomTick(tick);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        if (entity.block.properties.get("error") !== "true")
          global.handleBETick(entity, global.mushroomLogRecipes, 7);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("mushroom_log"),
  };
});
