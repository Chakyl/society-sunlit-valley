//priority: 100
console.info("[SOCIETY] mushroomLog.js loaded");


global.mushroomLogRecipes = new Map([
    // Red/brown mushroom
    ["minecraft:mushroom_stem", { output: ["2x minecraft:brown_mushroom"]}],
    ["meadow:pine_log", { output: ["2x minecraft:brown_mushroom"]}],
    ["autumnity:maple_log", { output: ["2x minecraft:brown_mushroom"]}],
    ["windswept:pine_log", { output: ["2x minecraft:brown_mushroom"]}],
    ["minecraft:acacia_log", { output: ["2x minecraft:brown_mushroom"]}],
    ["minecraft:jungle_log", { output: ["2x minecraft:red_mushroom"]}],
    ["beachparty:palm_log", { output: ["2x minecraft:red_mushroom"]}],
    ["minecraft:spruce_log", { output: ["2x minecraft:red_mushroom"]}],
    ["minecraft:cherry_log", { output: ["2x minecraft:red_mushroom"]}],
    ["quark:blossom_log", { output: ["2x minecraft:red_mushroom"]}],
    ["minecraft:mangrove_log", { output: ["2x minecraft:red_mushroom" ]}],
    // Red colony
    ["windswept:weathered_pine_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["minecraft:oak_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["vinery:dark_cherry_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["cluttered:crabapple_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["atmospheric:grimwood_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    // Brown colony
    ["windswept:chestnut_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["minecraft:pale_oak_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["cluttered:poplar_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["atmospheric:aspen_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    ["minecraft:dark_oak_log", { output: ["1x farmersdelight:red_mushroom_colony"]}],
    // Toadstool
    ["atmospheric:rosewood_log", { output: ["3x ribbits:toadstool"]}],
    ["atmospheric:morado_log", { output: ["3x ribbits:toadstool"]}],
    ["atmospheric:yucca_log", { output: ["3x ribbits:toadstool"]}],
    ["atmospheric:laurel_log", { output: ["3x ribbits:toadstool"]}],
    ["vinery:apple_log", { output: ["3x ribbits:toadstool"]}],
    ["windswept:holly_log", { output: ["3x ribbits:toadstool"]}],
    // Bracket
    ["quark:ancient_log", { output: ["1x verdantvibes:bracket_mushroom"]}],
    ["atmospheric:kousa_log", { output: ["1x verdantvibes:bracket_mushroom"]}],
    ["quark:azalea_log", { output: ["1x verdantvibes:bracket_mushroom"]}],
    // Shimmering
    ["atmospheric:watchful_aspen_log", { output: ["1x botania:yellow_mushroom"]}],
    ["atmospheric:crustose_log", { output: ["1x botania:yellow_mushroom"]}],
    ["cluttered:flowering_poplar_log", { output: ["1x botania:yellow_mushroom"]}],
    ["cluttered:flowering_crabapple_log", { output: ["1x botania:pink_mushroom"]}],
    // Glow 
    ["cluttered:fluorescent_maple_log", { output: ["3x quark:glow_shroom"]}],
    ["vintagedelight:magic_vine", { output: ["4x quark:glow_shroom"]}],
    // Warped crimson
    ["minecraft:crimson_stem", { output: ["3x minecraft:crimson_fungus"]}], 
    ["minecraft:warped_stem", { output: ["3x minecraft:warped_fungus"]}], 
    // Alphacene
    ["betterarcheology:rotten_log", { output: ["2x species:alphacene_mushroom"]}], 
    // Cluttershroms
    ["cluttered:blue_mushroom_cap", { output: ["1x cluttered:blue_roundhead"]}], 
    ["cluttered:blue_mushroom_log", { output: ["1x cluttered:blue_roundhead"]}], 
    ["cluttered:red_mushroom_log", { output: ["1x cluttered:fly_agaric"]}], 
    ["cluttered:red_mushroom_cap", { output: ["1x cluttered:fly_agaric"]}], 
    ["cluttered:sycamore_log", { output: ["1x cluttered:blue_roundhead"]}],
]);
global.dominantMushroomLogBlocks = new Map([
    ["species:alphacene_mushroom_block", { output: ["2x species:alphacene_mushroom"]}], 
    ["minecraft:birch_log", { output: ["2x verdantvibes:bracket_mushroom"]}], 
    ["cluttered:willow_log", { output: ["4x botania:magenta_mushroom"]}], 
    ["cluttered:flowering_willow_log", { output: ["4x botania:purple_mushroom"],}], 
    ["quark:glow_shroom_stem", { output: ["3x quark:glow_shroom"]}], 
    ["minecraft:brown_mushroom_block", { output: ["2x farmersdelight:brown_mushroom_colony"]}], 
    ["minecraft:red_mushroom_block", { output: ["2x farmersdelight:red_mushroom_colony"]}], 
    ["ribbits:toadstool_stem", { output: ["4x ribbits:toadstool"]}], 
    ["ribbits:brown_toadstool", { output: ["4x ribbits:toadstool"]}], 
    ["ribbits:red_toadstool", { output: ["4x ribbits:toadstool"]}], 
])
Array.from(global.dominantMushroomLogBlocks.keys()).forEach((recipe) => {
  global.mushroomLogRecipes.set(recipe, global.dominantMushroomLogBlocks.get(recipe));
});
StartupEvents.registry("block", (event) => {
  event
    .create("society:mushroom_log", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(booleanProperty.create("error"))
    .soundType("wood")
    .defaultCutout()
    .box(0, 0, 0, 16, 13, 16)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.mushroom_log.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/mushroom_log/mushroom_log_off",
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
      let nbt = click.block.getEntityData();
      global.handleBERightClick(
        "species:block.alphacene_moss.place",
        click,
        global.mushroomLogRecipes,
        7,
        false,
        false,
        nbt && nbt.data && nbt.data.baseCount ? nbt.data.baseCount : 1,
        true
      );
      global.handleMushroomLogRandomTick(click);
    })
    .randomTick((tick) => {
      global.handleMushroomLogRandomTick(tick);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "", quality: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
          global.handleBETick(entity, global.mushroomLogRecipes, 4);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("mushroom_log"),
  };
});
