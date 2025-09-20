//priority: 100
console.info("[SOCIETY] seedMaker.js loaded");

global.seedMakerRecipes = [
  { input: "farm_and_charm:corn", output: ["6x farm_and_charm:kernels"] },
  { input: "minecraft:wheat", output: ["6x minecraft:wheat_seeds"] },
  {
    input: "vinery:jungle_grapes_red",
    output: ["6x vinery:jungle_grape_seeds_red"],
  },
  {
    input: "vinery:jungle_grapes_white",
    output: ["6x vinery:jungle_grape_seeds_white"],
  },
  {
    input: "herbalbrews:green_tea_leaf",
    output: ["6x herbalbrews:tea_blossom"],
  },
  { input: "snowyspirit:ginger", output: ["6x snowyspirit:ginger_flower"] },
  { input: "minecraft:pumpkin", output: ["6x minecraft:pumpkin_seeds"] },
  { input: "minecraft:melon_slice", output: ["6x minecraft:melon_seeds"] },
  { input: "minecraft:beetroot", output: ["6x minecraft:beetroot_seeds"] },
  { input: "brewery:hops", output: ["6x brewery:hop_trellis_seed"] },
  {
    input: "farm_and_charm:lettuce",
    output: ["6x farm_and_charm:lettuce_seeds"],
  },
  { input: "supplementaries:flax", output: ["6x supplementaries:flax_seeds"] },
  {
    input: "society:eggplant",
    output: ["6x society:eggplant_seed"],
  },
  {
    input: "farm_and_charm:strawberry",
    output: ["6x farm_and_charm:strawberry_seed"],
  },
  { input: "farm_and_charm:oat", output: ["6x farm_and_charm:oat_seeds"] },
  {
    input: "farm_and_charm:barley",
    output: ["6x farm_and_charm:barley_seeds"],
  },
  {
    input: "nethervinery:crimson_grape",
    output: ["6x nethervinery:crimson_grape_seeds"],
  },
  {
    input: "nethervinery:warped_grape",
    output: ["6x nethervinery:warped_grape_seeds"],
  },
  { input: "vinery:red_grape", output: ["6x vinery:red_grape_seeds"] },
  { input: "vinery:white_grape", output: ["6x vinery:white_grape_seeds"] },
  {
    input: "vinery:savanna_grapes_red",
    output: ["6x vinery:savanna_grape_seeds_red"],
  },
  {
    input: "vinery:savanna_grapes_white",
    output: ["6x vinery:savanna_grape_seeds_white"],
  },
  {
    input: "vinery:taiga_grapes_red",
    output: ["6x vinery:taiga_grape_seeds_red"],
  },
  {
    input: "vinery:taiga_grapes_white",
    output: ["6x vinery:taiga_grape_seeds_white"],
  },
  {
    input: "farmersdelight:cabbage",
    output: ["6x farmersdelight:cabbage_seeds"],
  },
  {
    input: "vintagedelight:cucumber",
    output: ["6x vintagedelight:cucumber_seeds"],
  },
  {
    input: "vintagedelight:ghost_pepper",
    output: ["6x vintagedelight:ghost_pepper_seeds"],
  },
  { input: "society:ancient_fruit", output: ["1x society:ancient_fruit_seed"] },
  {
    input: "farmersdelight:tomato",
    output: ["6x farmersdelight:tomato_seeds"],
  },
  { input: "etcetera:cotton_flower", output: ["6x etcetera:cotton_seeds"] },
  {
    input: "society:tubabacco_leaf",
    output: ["6x society:tubabacco_leaf_seed"],
  },
  {
    input: "society:blueberry",
    output: ["6x society:blueberry_seed"],
  },
  {
    input: "minecraft:pitcher_plant",
    output: ["6x minecraft:pitcher_pod"],
  },
  {
    input: "minecraft:torchflower",
    output: ["6x minecraft:torchflower_seeds"],
  },
  {
    input: "veggiesdelight:bellpepper",
    output: ["6x veggiesdelight:bellpepper_seeds"],
  },
  {
    input: "veggiesdelight:cauliflower",
    output: ["6x veggiesdelight:cauliflower_seeds"],
  },
  {
    input: "veggiesdelight:garlic",
    output: ["6x veggiesdelight:garlic_seeds"],
  },
  {
    input: "botania:green_mystical_flower",
    output: ["6x botania_seeds:green_mystical_flower_seed"],
  },
  {
    input: "botania:cyan_mystical_flower",
    output: ["6x botania_seeds:cyan_mystical_flower_seed"],
  },
  {
    input: "botania:light_blue_mystical_flower",
    output: ["6x botania_seeds:light_blue_mystical_flower_seed"],
  },
  {
    input: "botania:blue_mystical_flower",
    output: ["6x botania_seeds:blue_mystical_flower_seed"],
  },
  {
    input: "botania:purple_mystical_flower",
    output: ["6x botania_seeds:purple_mystical_flower_seed"],
  },
  {
    input: "botania:magenta_mystical_flower",
    output: ["6x botania_seeds:magenta_mystical_flower_seed"],
  },
  {
    input: "botania:pink_mystical_flower",
    output: ["6x botania_seeds:pink_mystical_flower_seed"],
  },
  {
    input: "botania:white_mystical_flower",
    output: ["6x botania_seeds:white_mystical_flower_seed"],
  },
  {
    input: "botania:light_gray_mystical_flower",
    output: ["6x botania_seeds:light_gray_mystical_flower_seed"],
  },
  {
    input: "botania:gray_mystical_flower",
    output: ["6x botania_seeds:gray_mystical_flower_seed"],
  },
  {
    input: "botania:black_mystical_flower",
    output: ["6x botania_seeds:black_mystical_flower_seed"],
  },
  {
    input: "botania:brown_mystical_flower",
    output: ["6x botania_seeds:brown_mystical_flower_seed"],
  },
  {
    input: "botania:red_mystical_flower",
    output: ["6x botania_seeds:red_mystical_flower_seed"],
  },
  {
    input: "botania:orange_mystical_flower",
    output: ["6x botania_seeds:orange_mystical_flower_seed"],
  },
  {
    input: "botania:yellow_mystical_flower",
    output: ["6x botania_seeds:yellow_mystical_flower_seed"],
  },
  {
    input: "botania:lime_mystical_flower",
    output: ["6x botania_seeds:lime_mystical_flower_seed"],
  },
  {
    input: "farmersdelight:rice_panicle",
    output: ["6x farmersdelight:rice"],
  },
  { input: "minecraft:potato", output: ["6x society:potato_seed"] },
  { input: "minecraft:carrot", output: ["6x society:carrot_seed"] },
  { input: "farm_and_charm:onion", output: ["6x society:onion_seed"] },
  { input: "vintagedelight:peanut", output: ["6x society:peanut_seed"] },
  {
    input: "veggiesdelight:sweet_potato",
    output: ["6x society:sweet_potato_seed"],
  },
  {
    input: "mysticaloaktree:wise_oak",
    output: ["1x botania:overgrowth_seed"],
  },
  {
    input: "atmospheric:currant",
    output: ["6x atmospheric:currant_seedling"],
  },
  {
    input: "atmospheric:aloe_leaves",
    output: ["6x atmospheric:aloe_kernels"],
  },
  { input: "veggiesdelight:turnip", output: ["6x veggiesdelight:turnip_seeds"] },
  { input: "veggiesdelight:broccoli", output: ["6x veggiesdelight:broccoli_seeds"] },
  { input: "veggiesdelight:zucchini", output: ["6x veggiesdelight:zucchini_seeds"] },
];

StartupEvents.registry("block", (event) => {
  event
    .create("society:seed_maker", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("type", 0, global.seedMakerRecipes.length))
    .property(integerProperty.create("quality", 0, 3))
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .soundType("copper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Turns 3 of the same crop into seeds"));
      item.tooltip(Text.green("Preserves input quality"));
      item.modelJson({
        parent: "society:block/seed_maker/seed_maker_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("type", 0, global.seedMakerRecipes.length), 0)
        .set(integerProperty.create("quality", 0, 3), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("type", 0, global.seedMakerRecipes.length), 0)
        .set(integerProperty.create("quality", 0, 3), 0);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      const facing = block.properties.get("facing").toLowerCase();

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:ancient_cog") {
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
            quality: block.properties.get("quality"),
          });
        }
      }

      if (upgraded && block.properties.get("mature") === "true" && rnd5()) {
        block.popItemFromFace("society:ancient_fruit_seed", facing);
      }

      global.handleBERightClick(
        "unusualfishmod:crab_scuttling",
        click,
        global.seedMakerRecipes,
        3,
        true
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, type: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.seedMakerRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("seed_maker"),
  };
});
