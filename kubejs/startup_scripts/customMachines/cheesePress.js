//priority: 100
console.info("[SOCIETY] mayonnaiseMachine.js loaded");

global.cheesePressRecipes = new Map([
  ["society:sheep_milk", { output: ["1x meadow:piece_of_sheep_cheese"] }],
  ["society:milk", { output: ["1x meadow:piece_of_cheese"] }],
  ["society:buffalo_milk", { output: ["1x meadow:piece_of_buffalo_cheese"] }],
  ["society:goat_milk", { output: ["1x meadow:piece_of_goat_cheese"] }],
  ["society:warped_milk", { output: ["1x meadow:piece_of_warped_cheese"] }],
  ["society:tri_bull_milk", { output: ["1x farmlife:tribull_cheese_wedge"] }],
  ["society:grain_milk", { output: ["1x meadow:piece_of_grain_cheese"] }],
  ["society:amethyst_milk", { output: ["1x meadow:piece_of_amethyst_cheese"] }],
  ["society:large_sheep_milk", { output: ["1x meadow:sheep_cheese_block"] }],
  ["society:large_milk", { output: ["1x meadow:cheese_block"] }],
  [
    "society:large_buffalo_milk",
    { output: ["1x meadow:buffalo_cheese_block"] },
  ],
  ["society:large_goat_milk", { output: ["1x meadow:goat_cheese_block"] }],
  ["society:large_warped_milk", { output: ["1x meadow:warped_cheese_block"] }],
  [
    "society:large_tri_bull_milk",
    { output: ["1x farmlife:tribull_cheese_wheel"] },
  ],
  ["society:large_grain_milk", { output: ["1x meadow:grain_cheese_block"] }],
  [
    "society:large_amethyst_milk",
    { output: ["1x meadow:amethyst_cheese_block"] },
  ],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:cheese_press", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("quality", 0, 3))
    .soundType("copper")
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .displayName("Artisan Cheese Press")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.cheese_press.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.preserve_quality").green());
      item.modelJson({
        parent: "society:block/kubejs/cheese_press/cheese_press_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("quality", 0, 3), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("quality", 0, 3), 0);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      const facing = block.properties.get("facing").toLowerCase();

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:pink_matter") {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "farmersdelight:star",
            true,
            block.x,
            block.y + 1,
            block.z,
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            3,
            0.01
          );
          block.set(block.id, {
            facing: facing,
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
            quality: block.properties.get("quality"),
          });
        }
      }
      let outputCount = 1;
      if (player.stages.has("rancher") && Math.random() <= 0.2) {
        outputCount = 2;
      }
      global.handleBERightClick(
        "species:block.frozen_meat.place",
        click,
        global.cheesePressRecipes,
        3,
        false,
        false,
        outputCount,
        false,
        true
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.cheesePressRecipes, 2);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("cheese_press"),
  };
});
