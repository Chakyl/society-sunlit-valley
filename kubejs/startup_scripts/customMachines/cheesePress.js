console.info("[SOCIETY] mayonnaiseMachine.js loaded");

global.cheesePressRecipes = [
  { time: 1, input: "society:sheep_milk", output: ["1x meadow:piece_of_sheep_cheese"] },
  { time: 1, input: "society:milk", output: ["1x meadow:piece_of_cheese"] },
  { time: 1, input: "society:buffalo_milk", output: ["1x meadow:piece_of_buffalo_cheese"] },
  { time: 1, input: "society:goat_milk", output: ["1x meadow:piece_of_goat_cheese"] },
  { time: 1, input: "society:warped_milk", output: ["1x meadow:piece_of_warped_cheese"] },
  { time: 1, input: "society:tri_bull_milk", output: ["1x farmlife:tribull_cheese_wedge"] },
  { time: 1, input: "society:grain_milk", output: ["1x meadow:piece_of_grain_cheese"] },
  { time: 1, input: "society:amethyst_milk", output: ["1x meadow:piece_of_amethyst_cheese"] },
  { time: 2, input: "society:large_sheep_milk", output: ["1x meadow:sheep_cheese_block"] },
  { time: 2, input: "society:large_milk", output: ["1x meadow:cheese_block"] },
  { time: 2, input: "society:large_buffalo_milk", output: ["1x meadow:buffalo_cheese_block"] },
  { time: 2, input: "society:large_goat_milk", output: ["1x meadow:goat_cheese_block"] },
  { time: 2, input: "society:large_warped_milk", output: ["1x meadow:warped_cheese_block"] },
  { time: 2, input: "society:large_tri_bull_milk", output: ["1x farmlife:tribull_cheese_wheel"] },
  { time: 2, input: "society:large_grain_milk", output: ["1x meadow:grain_cheese_block"] },
  { time: 2, input: "society:large_amethyst_milk", output: ["1x meadow:amethyst_cheese_block"] },
];

StartupEvents.registry("block", (event) => {
  event
    .create("society:cheese_press", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 2))
    .property(integerProperty.create("quality", 0, 3))
    .soundType("copper")
    .property(integerProperty.create("type", 0, global.cheesePressRecipes.length))
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .displayName("Artisan Cheese Press")
    .item((item) => {
      item.tooltip(Text.gray("Turns any milk into cheese"));
      item.tooltip(Text.green("Preserves input quality"));
      item.modelJson({
        parent: "society:block/cheese_press_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 2), 0)
        .set(integerProperty.create("type", 0, global.cheesePressRecipes.length), 0)
        .set(integerProperty.create("quality", 0, 3), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 2), 0)
        .set(integerProperty.create("type", 0, global.cheesePressRecipes.length), 0)
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
            type: block.properties.get("type"),
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
            stage: block.properties.get("stage"),
            quality: block.properties.get("quality"),
          });
        } 
      }

      global.handleBERightClick(
        "species:block.frozen_meat.place",
        click,
        global.cheesePressRecipes,
        3,
        false,
        false,
        player.stages.has("rancher") ? 2 : 1,
        false,
        true
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.cheesePressRecipes, 2);
      });
    })
    .blockstateJson = MultipartBuilder("society:block/cheese_press")
      .particle()
      .doneMark()
      .complex(
        MultipartModifiers.directional(),
        MultipartModifiers.upgradable(),
        MultipartModifiers.machineStateful(),
      )
      .build();
});
