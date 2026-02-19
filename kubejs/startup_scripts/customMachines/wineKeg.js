//priority: 100
console.info("[SOCIETY] wineKeg.js loaded");

global.wineKegRecipes = new Map([
  ["minecraft:honey_block", { output: ["vinery:mead"] }],
  ["society:maple_syrup", { output: ["vinery:apple_cider"] }],
  ["minecraft:apple", { output: ["vinery:apple_wine"] }],
  ["atmospheric:orange", { output: ["vinery:glowing_wine"] }],
  ["minecraft:glow_berries", { output: ["vinery:solaris_wine"] }],
  ["pamhc2trees:plumitem", { output: ["vinery:noir_wine"] }],
  ["vinery:cherry", { output: ["vinery:cherry_wine"] }],
  ["vintagedelight:gearo_berry", { output: ["vinery:cristel_wine"] }],
  ["society:blueberry", { output: ["society:forks_of_blue"] }],
  ["farm_and_charm:strawberry", { output: ["society:good_catawba"] }],
  ["vintagedelight:peanut", { output: ["society:nutty_basil"] }],
  ["pamhc2trees:hazelnutitem", { output: ["society:nutty_basil"] }],
  ["society:ancient_fruit", { output: ["society:ancient_vespertine"] }],
  ["pamhc2trees:starfruititem", { output: ["society:dewy_star"] }],
  ["pamhc2trees:pawpawitem", { output: ["nethervinery:nether_fizz"] }],
  ["atmospheric:aloe_leaves", { output: ["nethervinery:ghastly_grenache"] }],
  ["vintagedelight:ghost_pepper", { output: ["nethervinery:lava_fizz"] }],
  ["pamhc2trees:lemonitem", { output: ["nethervinery:blazewine_pinot"] }],
  ["minecraft:sweet_berries", { output: ["vinery:red_wine"] }],
  ["vinery:red_grape", { output: ["vinery:red_wine"] }],
  ["vinery:savanna_grapes_red", { output: ["vinery:red_wine"] }],
  ["vinery:taiga_grapes_red", { output: ["vinery:red_wine"] }],
  ["vinery:jungle_grapes_red", { output: ["vinery:red_wine"] }],
  ["nethervinery:crimson_grape", { output: ["vinery:red_wine"] }],
  ["vinery:white_grape", { output: ["vinery:strad_wine"] }],
  ["vinery:savanna_grapes_white", { output: ["vinery:strad_wine"] }],
  ["vinery:jungle_grapes_white", { output: ["vinery:strad_wine"] }],
  ["vinery:taiga_grapes_white", { output: ["vinery:strad_wine"] }],
  ["nethervinery:warped_grape", { output: ["vinery:strad_wine"] }],
  ["windswept:wild_berries", { output: ["vinery:strad_wine"] }],
  ["minecraft:melon", { output: ["vinery:kelp_cider"] }],
  ["autumnity:foul_berries", { output: ["vinery:creepers_crush"] }],
  ["pamhc2trees:dragonfruititem", { output: ["vinery:eiswein"] }],
  ["pamhc2trees:mangoitem", { output: ["vinery:aegis_wine"] }],
  ["atmospheric:passion_fruit", { output: ["vinery:lilitu_wine"] }],
  ["atmospheric:blood_orange", { output: ["vinery:jo_special_mixture"] }],
  ["society:salmonberry", { output: ["vinery:bolvar_wine"] }],
  ["society:boysenberry", { output: ["vinery:bolvar_wine"] }],
  ["society:cranberry", { output: ["vinery:bolvar_wine"] }],
  ["society:crystalberry", { output: ["vinery:bolvar_wine"] }],
  ["minecraft:chorus_fruit", { output: ["vinery:chorus_wine"] }],
  ["atmospheric:currant", { output: ["vinery:villagers_fright"] }],
  ["pamhc2trees:bananaitem", { output: ["vinery:clark_wine"] }],
  ["atmospheric:yucca_fruit", { output: ["vinery:magnetic_wine"] }],
  ["farmersdelight:tomato", { output: ["vinery:stal_wine"] }],
  ["pamhc2trees:peachitem", { output: ["vinery:chenet_wine"] }],
  ["pamhc2trees:lycheeitem", { output: ["vinery:bottle_mojang_noir"] }],
  ["society:sparkpod", { output: ["society:violet_moon"] }],
  ["society:mana_fruit", { output: ["society:laputa_franc"] }],
  ["society:mossberry", { output: ["vinery:noir_wine"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:wine_keg", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(2, 0, 2, 14, 15, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.wine_keg.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/wine_keg/wine_keg",
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
      if (hand == "MAIN_HAND" && !upgraded && item == "society:gray_anatomy") {
        if (!player.isCreative()) item.count--;
        level.spawnParticles(
          "farmersdelight:star",
          true,
          block.x,
          block.y + 1,
          block.z,
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
          0.2 * rnd(1, 4),
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
      if (
        block.properties.get("upgraded") === "true" &&
        block.properties.get("mature") === "true" &&
        rnd5()
      ) {
        block.popItemFromFace("society:relic_trove", facing);
      }
      global.handleBERightClick(
        "minecraft:block.wood.place",
        click,
        global.wineKegRecipes,
        3,
        true,
        true
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.wineKegRecipes, 6);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("wine_keg"),
  };
});
