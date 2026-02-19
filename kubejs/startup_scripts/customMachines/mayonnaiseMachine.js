//priority: 100
console.info("[SOCIETY] mayonnaiseMachine.js loaded");

global.mayonnaiseMachineRecipes = new Map([
  ["minecraft:egg", { output: ["1x society:mayonnaise"] }],
  ["untitledduckmod:duck_egg", { output: ["1x society:duck_mayonnaise"] }],
  ["untitledduckmod:goose_egg", { output: ["1x society:goose_mayonnaise"] }],
  ["quark:egg_parrot_red_blue", { output: ["1x society:parrot_mayonnaise"] }],
  ["quark:egg_parrot_blue", { output: ["1x society:parrot_mayonnaise"] }],
  ["quark:egg_parrot_green", { output: ["1x society:parrot_mayonnaise"] }],
  [
    "quark:egg_parrot_yellow_blue",
    { output: ["1x society:parrot_mayonnaise"] },
  ],
  ["quark:egg_parrot_gray", { output: ["1x society:parrot_mayonnaise"] }],
  ["minecraft:turtle_egg", { output: ["1x society:turtle_mayonnaise"] }],
  ["minecraft:sniffer_egg", { output: ["1x society:sniffer_mayonnaise"] }],
  ["minecraft:dragon_egg", { output: ["1x society:dragon_mayonnaise"] }],
  ["vintagedelight:golden_egg", { output: ["1x society:golden_mayonnaise"] }],
  ["autumnity:turkey_egg", { output: ["1x society:turkey_mayonnaise"] }],
  ["society:large_egg", { output: ["1x society:large_mayonnaise"] }],
  ["society:large_duck_egg", { output: ["1x society:large_duck_mayonnaise"] }],
  [
    "society:large_goose_egg",
    { output: ["1x society:large_goose_mayonnaise"] },
  ],
  [
    "society:large_turkey_egg",
    { output: ["1x society:large_turkey_mayonnaise"] },
  ],
  ["species:birt_egg", { output: ["1x society:birt_mayonnaise"] }],
  ["species:wraptor_egg", { output: ["1x society:wraptor_mayonnaise"] }],
  ["species:springling_egg", { output: ["1x society:springling_mayonnaise"] }],
  ["species:petrified_egg", { output: ["1x society:petrified_mayonnaise"] }],
  ["species:cruncher_egg", { output: ["1x society:cruncher_mayonnaise"] }],
  ["society:flamingo_egg", { output: ["1x society:flamingo_mayonnaise"] }],
  ["society:penguin_egg", { output: ["1x society:penguin_mayonnaise"] }],
  [
    "farmlife:galliraptor_egg",
    { output: ["1x society:galliraptor_mayonnaise"] },
  ],
  [
    "society:large_galliraptor_egg",
    { output: ["1x society:large_galliraptor_mayonnaise"] },
  ],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:mayonnaise_machine", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .soundType("copper")
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.mayonnaise_machine.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.preserve_quality").green());
      item.modelJson({
        parent: "society:block/kubejs/mayonnaise_machine/mayonnaise_machine_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:enkephalin") {
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
      if (upgraded && block.properties.get("mature") === "true" && rnd5()) {
        block.popItemFromFace(
          "society:supreme_mayonnaise",
          block.properties.get("facing").toLowerCase()
        );
      }
      let outputCount = 1;
      if (player.stages.has("rancher") && Math.random() <= 0.2) {
        outputCount = 2;
      }
      global.handleBERightClick(
        "minecraft:block.sniffer_egg.plop",
        click,
        global.mayonnaiseMachineRecipes,
        3,
        false,
        false,
        outputCount
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "", quality: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.mayonnaiseMachineRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("mayonnaise_machine"),
  };
});
