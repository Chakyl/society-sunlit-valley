//priority: 100
console.info("[SOCIETY] loom.js loaded");

global.loomRecipes = new Map([
  ["#minecraft:wool", { output: ["society:canvas"] }],
  ["etcetera:cotton_flower", { output: ["society:canvas"] }],
  ["society:fine_wool", { output: ["society:merino_wool"] }],
  ["botania:mana_string", { output: ["botania:manaweave_cloth"] }],
  ["crittersandcompanions:silk", { output: ["society:merino_wool"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:loom", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(0, 0, 1, 16, 26, 16)
    .defaultCutout()
    .displayName("Canvas Loom")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.loom.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/loom/loom_off",
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
      const facing = block.properties.get("facing").toLowerCase();

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:tiny_gnome") {
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
          });
        }
      }

      if (upgraded && block.properties.get("mature") === "true" && rnd25()) {
        const furniture = Ingredient.of("#society:loot_furniture").itemIds;
        block.popItemFromFace(furniture[Math.floor(Math.random() * furniture.length)], facing);
      }
      let outputCount = 1;
      if (player.stages.has("rancher") && Math.random() <= 0.2) {
        outputCount = 2;
      }
      global.handleBERightClick(
        "minecraft:block.wool.fall",
        click,
        global.loomRecipes,
        5,
        true,
        true,
        outputCount
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.loomRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("loom"),
  };
});
