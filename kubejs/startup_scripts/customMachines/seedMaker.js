//priority: 100
console.info("[SOCIETY] seedMaker.js loaded");

global.seedMakerRecipes = new Map([
  ["farm_and_charm:corn", { output: ["6x farm_and_charm:kernels"] }],
  ["minecraft:wheat", { output: ["6x minecraft:wheat_seeds"] }],
  ["vinery:jungle_grapes_red", { output: ["6x vinery:jungle_grape_seeds_red"] }],
  ["vinery:jungle_grapes_white", { output: ["6x vinery:jungle_grape_seeds_white"] }],
  ["herbalbrews:green_tea_leaf", { output: ["6x herbalbrews:tea_blossom"] }],
  ["snowyspirit:ginger", { output: ["6x snowyspirit:ginger_flower"] }],
  ["minecraft:pumpkin", { output: ["6x minecraft:pumpkin_seeds"] }],
  ["minecraft:melon_slice", { output: ["6x minecraft:melon_seeds"] }],
  ["minecraft:beetroot", { output: ["6x minecraft:beetroot_seeds"] }],
  ["brewery:hops", { output: ["6x brewery:hop_trellis_seed"] }],
  ["farm_and_charm:lettuce", { output: ["6x farm_and_charm:lettuce_seeds"] }],
  ["supplementaries:flax", { output: ["6x supplementaries:flax_seeds"] }],
  ["society:eggplant", { output: ["6x society:eggplant_seed"] }],
  ["farm_and_charm:strawberry", { output: ["6x farm_and_charm:strawberry_seed"] }],
  ["farm_and_charm:oat", { output: ["6x farm_and_charm:oat_seeds"] }],
  ["farm_and_charm:barley", { output: ["6x farm_and_charm:barley_seeds"] }],
  ["nethervinery:crimson_grape", { output: ["6x nethervinery:crimson_grape_seeds"] }],
  ["nethervinery:warped_grape", { output: ["6x nethervinery:warped_grape_seeds"] }],
  ["vinery:red_grape", { output: ["6x vinery:red_grape_seeds"] }],
  ["vinery:white_grape", { output: ["6x vinery:white_grape_seeds"] }],
  ["vinery:savanna_grapes_red", { output: ["6x vinery:savanna_grape_seeds_red"] }],
  ["vinery:savanna_grapes_white", { output: ["6x vinery:savanna_grape_seeds_white"] }],
  ["vinery:taiga_grapes_red", { output: ["6x vinery:taiga_grape_seeds_red"] }],
  ["vinery:taiga_grapes_white", { output: ["6x vinery:taiga_grape_seeds_white"] }],
  ["farmersdelight:cabbage", { output: ["6x farmersdelight:cabbage_seeds"] }],
  ["vintagedelight:cucumber", { output: ["6x vintagedelight:cucumber_seeds"] }],
  ["vintagedelight:ghost_pepper", { output: ["6x vintagedelight:ghost_pepper_seeds"] }],
  ["society:ancient_fruit", { output: ["1x society:ancient_fruit_seed"] }],
  ["farmersdelight:tomato", { output: ["6x farmersdelight:tomato_seeds"] }],
  ["etcetera:cotton_flower", { output: ["6x etcetera:cotton_seeds"] }],
  ["society:tubabacco_leaf", { output: ["6x society:tubabacco_leaf_seed"] }],
  ["society:blueberry", { output: ["6x society:blueberry_seed"] }],
  ["minecraft:pitcher_plant", { output: ["6x minecraft:pitcher_pod"] }],
  ["minecraft:torchflower", { output: ["6x minecraft:torchflower_seeds"] }],
  ["veggiesdelight:bellpepper", { output: ["6x veggiesdelight:bellpepper_seeds"] }],
  ["veggiesdelight:cauliflower", { output: ["6x veggiesdelight:cauliflower_seeds"] }],
  ["veggiesdelight:garlic", { output: ["6x veggiesdelight:garlic_seed"] }],
  ["botania:green_mystical_flower", { output: ["6x botania_seeds:green_mystical_flower_seed"] }],
  ["botania:cyan_mystical_flower", { output: ["6x botania_seeds:cyan_mystical_flower_seed"] }],
  [
    "botania:light_blue_mystical_flower",
    { output: ["6x botania_seeds:light_blue_mystical_flower_seed"] },
  ],
  ["botania:blue_mystical_flower", { output: ["6x botania_seeds:blue_mystical_flower_seed"] }],
  ["botania:purple_mystical_flower", { output: ["6x botania_seeds:purple_mystical_flower_seed"] }],
  [
    "botania:magenta_mystical_flower",
    { output: ["6x botania_seeds:magenta_mystical_flower_seed"] },
  ],
  ["botania:pink_mystical_flower", { output: ["6x botania_seeds:pink_mystical_flower_seed"] }],
  ["botania:white_mystical_flower", { output: ["6x botania_seeds:white_mystical_flower_seed"] }],
  [
    "botania:light_gray_mystical_flower",
    { output: ["6x botania_seeds:light_gray_mystical_flower_seed"] },
  ],
  ["botania:gray_mystical_flower", { output: ["6x botania_seeds:gray_mystical_flower_seed"] }],
  ["botania:black_mystical_flower", { output: ["6x botania_seeds:black_mystical_flower_seed"] }],
  ["botania:brown_mystical_flower", { output: ["6x botania_seeds:brown_mystical_flower_seed"] }],
  ["botania:red_mystical_flower", { output: ["6x botania_seeds:red_mystical_flower_seed"] }],
  ["botania:orange_mystical_flower", { output: ["6x botania_seeds:orange_mystical_flower_seed"] }],
  ["botania:yellow_mystical_flower", { output: ["6x botania_seeds:yellow_mystical_flower_seed"] }],
  ["botania:lime_mystical_flower", { output: ["6x botania_seeds:lime_mystical_flower_seed"] }],
  ["farmersdelight:rice_panicle", { output: ["6x farmersdelight:rice"] }],
  ["minecraft:potato", { output: ["6x society:potato_seed"] }],
  ["minecraft:carrot", { output: ["6x society:carrot_seed"] }],
  ["farm_and_charm:onion", { output: ["6x society:onion_seed"] }],
  ["vintagedelight:peanut", { output: ["6x society:peanut_seed"] }],
  ["veggiesdelight:sweet_potato", { output: ["6x society:sweet_potato_seed"] }],
  ["mysticaloaktree:wise_oak", { output: ["1x botania:overgrowth_seed"] }],
  ["atmospheric:currant", { output: ["6x atmospheric:currant_seedling"] }],
  ["atmospheric:aloe_leaves", { output: ["6x atmospheric:aloe_kernels"] }],
  ["veggiesdelight:turnip", { output: ["6x veggiesdelight:turnip_seeds"] }],
  ["veggiesdelight:broccoli", { output: ["6x veggiesdelight:broccoli_seeds"] }],
  ["veggiesdelight:zucchini", { output: ["6x veggiesdelight:zucchini_seeds"] }],
  ["society:cranberry", { output: ["6x society:cranberry_seed"] }],
  ["society:sparkpod", { output: ["16x society:sparkstone"] }],
]);

StartupEvents.registry("block", (event) => {
  event
    .create("society:seed_maker", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .soundType("copper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.seed_maker.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.preserve_quality").green());
      item.modelJson({
        parent: "society:block/kubejs/seed_maker/seed_maker_off",
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
      blockInfo.initialData({ stage: 0, recipe: "", quality: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.seedMakerRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("seed_maker"),
  };
});
