//priority: 100
console.info("[SOCIETY] deluxeWormFarm.js loaded");

global.deluxeWormFarmRecipes = new Map([
  ["crabbersdelight:crab_trap_bait", { output: ["4x crabbersdelight:deluxe_crab_trap_bait"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:deluxe_worm_farm", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .soundType("copper")
    .box(2, 0, 2, 14, 15, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .model("society:block/kubejs/deluxe_worm_farm")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.deluxe_worm_farm.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/deluxe_worm_farm",
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
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:infinity_worm") {
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
            facing: block.properties.get("facing"),
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
          });
        }
      }

      global.handleBERightClick(
        "aquaculture:fish_flop",
        click,
        global.deluxeWormFarmRecipes,
        4,
        true
      );

      if (upgraded && block.properties.get("working") === "false") {
        let nbt = block.getEntityData();
        nbt.merge({ data: { recipe: "crabbersdelight:crab_trap_bait", stage: 0 } });
        block.setEntityData(nbt);
        block.set(block.id, {
          facing: block.properties.get("facing"),
          working: true,
          mature: false,
          upgraded: upgraded,
        });
      }
    })
    .randomTick((tick) => {
      global.handleBERandomTick(tick, rnd50(), 2);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
    }).blockstateJson = {
    multipart: [
      {
        when: { upgraded: false },
        apply: { model: "society:block/kubejs/deluxe_worm_farm_base" },
      },
      {
        when: { upgraded: true },
        apply: { model: "society:block/kubejs/deluxe_worm_farm_base_upgraded" },
      },
      {
        when: { working: true, upgraded: false },
        apply: { model: "society:block/kubejs/deluxe_worm_farm" },
      },
      {
        when: { mature: true, upgraded: false },
        apply: { model: "society:block/kubejs/deluxe_worm_farm" },
      },
      {
        when: { working: true, upgraded: true },
        apply: { model: "society:block/kubejs/deluxe_worm_farm_upgraded" },
      },
      {
        when: { mature: true, upgraded: true },
        apply: { model: "society:block/kubejs/deluxe_worm_farm_upgraded" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/kubejs/machine_done" },
      },
    ],
  };
});
