console.info("[SOCIETY] deluxeWormFarm.js loaded");

global.deluxeWormFarmRecipes = [
  {
    input: "crabbersdelight:crab_trap_bait",
    output: ["4x crabbersdelight:deluxe_crab_trap_bait"],
  },
];

StartupEvents.registry("block", (event) => {
  event
    .create("society:deluxe_worm_farm", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 4))
    .property(integerProperty.create("type", 0, global.deluxeWormFarmRecipes.length))
    .soundType("copper")
    .box(2, 0, 2, 14, 15, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Upgrades 4 Crab Trap Bait at a time"));
      item.modelJson({
        parent: "society:block/deluxe_worm_farm",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 4), 0)
        .set(integerProperty.create("type", 0, global.deluxeWormFarmRecipes.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 4), 0)
        .set(integerProperty.create("type", 0, global.deluxeWormFarmRecipes.length), 0);
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
            type: block.properties.get("type"),
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
            stage: block.properties.get("stage"),
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
        block.set(block.id, {
          facing: block.properties.get("facing"),
          type: "1",
          working: true,
          mature: false,
          upgraded: upgraded,
          stage: "0",
        });
      }
    })
    .randomTick((tick) => {
      global.handleBERandomTick(tick, rnd50(), 2);
    })
    .blockstateJson = MultipartBuilder("society:block/deluxe_worm_farm")
      .particle()
      .doneMark()
      .complex("{base}_base", // Worm Bin Bucket
        MultipartModifiers.upgradable(),
      )
      .complex( // Worm Bin Lid
        MultipartModifiers.upgradable(),
        MultipartModifiers.machineStateful(null, "", ""),
      )
      .build();
});
