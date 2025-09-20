//priority: 100
console.info("[SOCIETY] mayonnaiseMachine.js loaded");

global.mayonnaiseMachineRecipes = [
  { input: "minecraft:egg", output: ["1x society:mayonnaise"] },
  { input: "untitledduckmod:duck_egg", output: ["1x society:duck_mayonnaise"] },
  {
    input: "untitledduckmod:goose_egg",
    output: ["1x society:goose_mayonnaise"],
  },
  {
    input: "quark:egg_parrot_red_blue",
    output: ["1x society:parrot_mayonnaise"],
  },
  { input: "quark:egg_parrot_blue", output: ["1x society:parrot_mayonnaise"] },
  { input: "quark:egg_parrot_green", output: ["1x society:parrot_mayonnaise"] },
  {
    input: "quark:egg_parrot_yellow_blue",
    output: ["1x society:parrot_mayonnaise"],
  },
  { input: "quark:egg_parrot_gray", output: ["1x society:parrot_mayonnaise"] },
  { input: "minecraft:turtle_egg", output: ["1x society:turtle_mayonnaise"] },
  { input: "minecraft:sniffer_egg", output: ["1x society:sniffer_mayonnaise"] },
  { input: "minecraft:dragon_egg", output: ["1x society:dragon_mayonnaise"] },
  {
    input: "vintagedelight:golden_egg",
    output: ["1x society:golden_mayonnaise"],
  },
  { input: "autumnity:turkey_egg", output: ["1x society:turkey_mayonnaise"] },
  { input: "society:large_egg", output: ["1x society:large_mayonnaise"] },
  {
    input: "society:large_duck_egg",
    output: ["1x society:large_duck_mayonnaise"],
  },
  {
    input: "society:large_goose_egg",
    output: ["1x society:large_goose_mayonnaise"],
  },
  {
    input: "society:large_turkey_egg",
    output: ["1x society:large_turkey_mayonnaise"],
  },
  {
    input: "species:birt_egg",
    output: ["1x society:birt_mayonnaise"],
  },
  {
    input: "species:wraptor_egg",
    output: ["1x society:wraptor_mayonnaise"],
  },
  {
    input: "species:springling_egg",
    output: ["1x society:springling_mayonnaise"],
  },
  {
    input: "species:petrified_egg",
    output: ["1x society:petrified_mayonnaise"],
  },
  {
    input: "species:cruncher_egg",
    output: ["1x society:cruncher_mayonnaise"],
  },
  {
    input: "society:flamingo_egg",
    output: ["1x society:flamingo_mayonnaise"],
  },
  {
    input: "society:penguin_egg",
    output: ["1x society:penguin_mayonnaise"],
  },
  {
    input: "farmlife:galliraptor_egg",
    output: ["1x society:galliraptor_mayonnaise"],
  },
  {
    input: "society:large_galliraptor_egg",
    output: ["1x society:large_galliraptor_mayonnaise"],
  },
];

StartupEvents.registry("block", (event) => {
  event
    .create("society:mayonnaise_machine", "cardinal")
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
    .item((item) => {
      item.tooltip(Text.gray("Turns an egg into mayonnaise"));
      item.tooltip(Text.green("Preserves input quality"));
      item.modelJson({
        parent: "society:block/mayonnaise_machine/mayonnaise_machine_off",
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
            quality: block.properties.get("quality"),
          });
        }
      }
      if (upgraded && block.properties.get("mature") === "true" && rnd5()) {
        block.popItemFromFace(
          "society:supreme_mayonnaise",
          block.properties.get("facing").toLowerCase()
        );
      }
      global.handleBERightClick(
        "minecraft:block.sniffer_egg.plop",
        click,
        global.mayonnaiseMachineRecipes,
        3,
        false,
        false,
        player.stages.has("rancher") ? 2 : 1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, type: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.mayonnaiseMachineRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("mayonnaise_machine"),
  };
});
