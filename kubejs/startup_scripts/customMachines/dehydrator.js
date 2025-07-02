console.info("[SOCIETY] dehydrator.js loaded");
global.dehydratorRecipes = [
  { input: "nethervinery:crimson_grape", output: [`1x society:nether_raisins`] },
  { input: "nethervinery:warped_grape", output: [`1x society:nether_raisins`] },
];

const overworldGrapes = [
  "vinery:red_grape",
  "vinery:taiga_grapes_red",
  "vinery:savanna_grapes_red",
  "vinery:jungle_grapes_red",
  "vinery:white_grape",
  "vinery:taiga_grapes_white",
  "vinery:jungle_grapes_white",
  "vinery:savanna_grapes_red",
];
overworldGrapes.forEach((item) => {
  global.dehydratorRecipes.push({
    input: item,
    output: [`1x society:raisins`],
  });
});
global.dehydratableMushrooms = [
  "minecraft:brown_mushroom",
  "minecraft:red_mushroom",
  "minecraft:crimson_fungus",
  "minecraft:warped_fungus",
  "quark:glow_shroom",
  "ribbits:toadstool",
  "species:alphacene_mushroom",
  "verdantvibes:bracket_mushroom",
];
global.dehydratableMushroomOutputs = ["society:dried_shimmering_mushrooms"];
global.dehydratableMushrooms.forEach((item) => {
  global.dehydratableMushroomOutputs.push(`society:dried_${item.split(":")[1]}`);
  global.dehydratorRecipes.push({
    input: item,
    output: [`1x society:dried_${item.split(":")[1]}`],
  });
});
global.dehydratableFruits = [
  "minecraft:sweet_berries",
  "autumnity:foul_berries",
  "atmospheric:currant",
  "atmospheric:yucca_fruit",
  "minecraft:apple",
  "minecraft:melon_slice",
  "vintagedelight:gearo_berry",
  "minecraft:chorus_fruit",
  "pamhc2trees:lycheeitem",
  "pamhc2trees:bananaitem",
  "farm_and_charm:strawberry",
  "minecraft:glow_berries",
  "vinery:cherry",
  "society:blueberry",
  "pamhc2trees:mangoitem",
  "pamhc2trees:peachitem",
  "pamhc2trees:pawpawitem",
  "pamhc2trees:plumitem",
  "society:ancient_fruit",
  "atmospheric:orange",
  "pamhc2trees:dragonfruititem",
  "atmospheric:passion_fruit",
  "pamhc2trees:starfruititem",
  "pamhc2trees:lemonitem",
];
global.dehydratableFruits.forEach((item) => {
  let itemId = item.split(":")[1];
  if (itemId.includes("item")) itemId = itemId.substring(0, itemId.length - 4);
  global.dehydratorRecipes.push({
    input: item,
    output: [`1x society:dried_${itemId}`],
  });
});
const shimmeringMushrooms = [
  "botania:white_mushroom",
  "botania:orange_mushroom",
  "botania:magenta_mushroom",
  "botania:light_blue_mushroom",
  "botania:yellow_mushroom",
  "botania:lime_mushroom",
  "botania:pink_mushroom",
  "botania:black_mushroom",
  "botania:red_mushroom",
  "botania:green_mushroom",
  "botania:brown_mushroom",
  "botania:blue_mushroom",
  "botania:purple_mushroom",
  "botania:cyan_mushroom",
  "botania:light_gray_mushroom",
  "botania:gray_mushroom",
];
shimmeringMushrooms.forEach((item) => {
  global.dehydratorRecipes.push({
    input: item,
    output: [`1x society:dried_shimmering_mushrooms`],
  });
});

StartupEvents.registry("block", (event) => {
  event
    .create("society:dehydrator", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 8))
    .property(integerProperty.create("type", 0, global.dehydratorRecipes.length))
    .box(1, 0, 4, 15, 16, 12)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Dehydrates 8 fruit or mushrooms"));
      item.modelJson({
        parent: "society:block/dehydrator_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 8), 0)
        .set(integerProperty.create("type", 0, global.dehydratorRecipes.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 8), 0)
        .set(integerProperty.create("type", 0, global.dehydratorRecipes.length), 0);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      const facing = block.properties.get("facing");

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:cordycep") {
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
          });
        }
      }

      let outputMult = 1;
      if (upgraded && block.properties.get("mature") === "true") {
        let type = global.dehydratorRecipes[block.properties.get("type")];
        if (global.dehydratableMushrooms.includes(type.input)) {
          outputMult = 2;
        }
      }

      global.handleBERightClick(
        "species:block.alphacene_foliage.place",
        click,
        global.dehydratorRecipes,
        8,
        true,
        false,
        outputMult
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.dehydratorRecipes, 1);
      });
    }).blockstateJson = {
    multipart: [
      {
        apply: { model: "society:block/dehydrator_particle" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/machine_done" },
      },
    ].concat(getCardinalMultipartJson("dehydrator")),
  };
});
