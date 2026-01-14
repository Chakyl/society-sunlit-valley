//priority: 100
console.info("[SOCIETY] espressoMachine.js loaded");

global.espressoMachineRecipes = new Map([
  ["herbalbrews:ground_coffee", { output: ["1x society:espresso"] }],
  ["society:large_milk", { output: ["4x society:steamed_milk"] }],
  ["society:large_sheep_milk", { output: ["4x society:steamed_milk"] }],
  ["society:large_goat_milk", { output: ["4x society:steamed_milk"] }],
  ["society:large_warped_milk", { output: ["4x society:steamed_milk"] }],
  ["society:large_buffalo_milk", { output: ["4x society:steamed_milk"] }],
  ["society:milk", { output: ["1x society:steamed_milk"] }],
  ["society:sheep_milk", { output: ["1x society:steamed_milk"] }],
  ["society:goat_milk", { output: ["1x society:steamed_milk"] }],
  ["society:warped_milk", { output: ["1x society:steamed_milk"] }],
  ["society:buffalo_milk", { output: ["1x society:steamed_milk"] }],
  [
    "farmersdelight:milk_bottle",
    { output: ["1x society:steamed_milk", "1x minecraft:glass_bottle"] },
  ],
  [
    "vintagedelight:nut_milk_bottle",
    { output: ["1x society:steamed_milk", "1x minecraft:glass_bottle"] },
  ],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:espresso_machine", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(4, 0, 2, 12, 14, 14)
    .defaultCutout()
    .model("society:block/kubejs/espresso_machine")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.espresso_machine.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/espresso_machine",
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
      const { item, block, hand, player, server } = click;

      if (player.isFake()) return;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        let recipe = global.espressoMachineRecipes.get(`${item.id}`);
        // Handle steamed milk
        if (recipe && recipe.output[0].includes("steamed_milk")) {
          if (!player.isCreative()) item.count--;
          server.runCommandSilent(
            `playsound minecraft:block.lava.extinguish block @a ${player.x} ${player.y} ${player.z}`
          );
          global.giveExperience(server, player, "farming", 10);
          recipe.output.forEach((e) => {
            block.popItemFromFace(e, block.properties.get("facing"));
          });
        }
      }

      global.handleBERightClick(
        "doapi:brewstation_whistle",
        click,
        new Map([["herbalbrews:ground_coffee", { output: ["1x society:espresso"] }]]),
        4,
        true
      );
    })
    .randomTick((tick) => {
      global.handleBERandomTick(tick, true, 1);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
    }).blockstateJson = {
    multipart: [
      {
        apply: { model: "society:block/kubejs/espresso_machine_particle" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/kubejs/machine_done" },
      },
      {
        when: { working: false, mature: true, facing: "north" },
        apply: {
          model: "society:block/kubejs/espresso_cup_full",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { working: false, mature: true, facing: "east" },
        apply: {
          model: "society:block/kubejs/espresso_cup_full",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { working: false, mature: true, facing: "south" },
        apply: {
          model: "society:block/kubejs/espresso_cup_full",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { working: false, mature: true, facing: "west" },
        apply: {
          model: "society:block/kubejs/espresso_cup_full",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { working: true, mature: false, facing: "north" },
        apply: {
          model: "society:block/kubejs/espresso_cup_empty",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { working: true, mature: false, facing: "east" },
        apply: {
          model: "society:block/kubejs/espresso_cup_empty",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { working: true, mature: false, facing: "south" },
        apply: {
          model: "society:block/kubejs/espresso_cup_empty",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { working: true, mature: false, facing: "west" },
        apply: {
          model: "society:block/kubejs/espresso_cup_empty",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { facing: "north" },
        apply: {
          model: "society:block/kubejs/espresso_machine",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { facing: "east" },
        apply: {
          model: "society:block/kubejs/espresso_machine",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { facing: "south" },
        apply: {
          model: "society:block/kubejs/espresso_machine",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { facing: "west" },
        apply: {
          model: "society:block/kubejs/espresso_machine",
          y: -90,
          uvlock: false,
        },
      },
    ],
  };
});
