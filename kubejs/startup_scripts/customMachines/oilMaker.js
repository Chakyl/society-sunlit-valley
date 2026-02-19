//priority: 100
console.info("[SOCIETY] oilMaker.js loaded");

global.oilMakerRecipes = new Map([
  ["society:truffle", { output: ["1x society:truffle_oil"] }],
  ["farm_and_charm:corn", { output: ["1x society:oil"] }],
  ["atmospheric:yellow_blossoms", { output: ["1x society:oil"] }],
  ["minecraft:torchflower", { output: ["3x society:oil"] }],
  ["beachparty:coconut_open", { output: ["1x society:coconut_oil"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:oil_maker", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.oil_maker.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/oil_maker/oil_maker_off",
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
      const { block } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      global.handleBERightClick(
        "supplementaries:block.jar.place",
        click,
        global.oilMakerRecipes,
        1,
        false,
        false,
        1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.oilMakerRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("oil_maker"),
  };
});
