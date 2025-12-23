//priority: 100
console.info("[SOCIETY] preservesJar.js loaded");

const roeFish = [
  { item: "aquaculture:atlantic_herring" },
  { item: "minecraft:pufferfish" },
  { item: "aquaculture:minnow" },
  { item: "aquaculture:bluegill" },
  { item: "aquaculture:perch" },
  { item: "minecraft:salmon" },
  { item: "aquaculture:blackfish" },
  { item: "aquaculture:brown_trout" },
  { item: "aquaculture:carp" },
  { item: "aquaculture:piranha" },
  { item: "aquaculture:smallmouth_bass" },
  { item: "minecraft:cod" },
  { item: "aquaculture:pollock" },
  { item: "aquaculture:jellyfish" },
  { item: "aquaculture:rainbow_trout" },
  { item: "aquaculture:pink_salmon" },
  { item: "minecraft:tropical_fish" },
  { item: "aquaculture:red_grouper" },
  { item: "aquaculture:gar" },
  { item: "aquaculture:muskellunge" },
  { item: "aquaculture:synodontis" },
  { item: "aquaculture:tambaqui" },
  { item: "aquaculture:atlantic_cod" },
  { item: "aquaculture:boulti" },
  { item: "aquaculture:leech" },
  { item: "aquaculture:catfish" },
  { item: "aquaculture:tuna" },
  { item: "aquaculture:bayad" },
  { item: "aquaculture:arapaima" },
  { item: "aquaculture:atlantic_halibut" },
  { item: "aquaculture:starshell_turtle" },
  { item: "aquaculture:brown_shrooma" },
  { item: "aquaculture:red_shrooma" },
  { item: "aquaculture:arrau_turtle" },
  { item: "aquaculture:capitaine" },
  { item: "aquaculture:box_turtle" },
  { item: "aquaculture:pacific_halibut" },
  { item: "aquaculture:goldfish" },
  { item: "crabbersdelight:shrimp" },
  { item: "crabbersdelight:clawster" },
  { item: "crabbersdelight:crab" },
  { item: "crabbersdelight:clam" },
  { item: "netherdepthsupgrade:searing_cod" },
  { item: "netherdepthsupgrade:blazefish" },
  { item: "netherdepthsupgrade:lava_pufferfish" },
  { item: "netherdepthsupgrade:obsidianfish" },
  { item: "netherdepthsupgrade:bonefish" },
  { item: "netherdepthsupgrade:wither_bonefish" },
  { item: "netherdepthsupgrade:magmacubefish" },
  { item: "netherdepthsupgrade:glowdine" },
  { item: "netherdepthsupgrade:soulsucker" },
  { item: "netherdepthsupgrade:fortress_grouper" },
  { item: "netherdepthsupgrade:eyeball_fish" },
  { item: "society:neptuna" },
  { item: "unusualfishmod:raw_sneep_snorp" },
  { item: "unusualfishmod:raw_picklefish" },
  { item: "unusualfishmod:raw_forkfish" },
  { item: "unusualfishmod:raw_beaked_herring" },
  { item: "unusualfishmod:raw_sailor_barb" },
  { item: "unusualfishmod:raw_demon_herring" },
  { item: "unusualfishmod:raw_triple_twirl_pleco" },
  { item: "unusualfishmod:raw_copperflame_anthias" },
  { item: "unusualfishmod:raw_drooping_gourami" },
  { item: "unusualfishmod:raw_duality_damselfish" },
  { item: "unusualfishmod:raw_blind_sailfin" },
  { item: "unusualfishmod:raw_circus_fish" },
  { item: "unusualfishmod:raw_snowflake" },
  { item: "unusualfishmod:raw_aero_mono" },
  { item: "unusualfishmod:raw_hatchetfish" },
  { item: "unusualfishmod:raw_spindlefish" },
  { item: "unusualfishmod:raw_bark_angelfish" },
  { item: "unusualfishmod:raw_amber_goby" },
  { item: "unusualfishmod:raw_eyelash" },
  { item: "crittersandcompanions:koi_fish" },
];

global.preservesJarRecipes = [
  {
    input: "vintagedelight:gearo_berry",
    output: ["vintagedelight:gearo_berry_mason_jar"],
  },
  {
    input: "vintagedelight:peanut",
    output: ["vintagedelight:nut_mash_mason_jar"],
  },
  {
    input: "vintagedelight:cucumber",
    output: ["vintagedelight:relish_mason_jar"],
  },
  {
    input: "vintagedelight:ghost_pepper",
    output: ["vintagedelight:pepper_jam_mason_jar"],
  },
  {
    input: "minecraft:glow_berries",
    output: ["vintagedelight:glow_berry_mason_jar"],
  },
  {
    input: "minecraft:sweet_berries",
    output: ["vintagedelight:sweet_berry_mason_jar"],
  },
  {
    input: "minecraft:apple",
    output: ["vintagedelight:apple_sauce_mason_jar"],
  },
  {
    input: "society:ancient_fruit",
    output: ["society:ancient_fruit_preserves"],
  },
  {
    input: "pamhc2trees:dragonfruititem",
    output: ["society:dragonfruit_preserves"],
  },
  {
    input: "pamhc2trees:starfruititem",
    output: ["society:starfruit_preserves"],
  },
  { input: "atmospheric:orange", output: ["society:orange_preserves"] },
  { input: "pamhc2trees:bananaitem", output: ["society:banana_preserves"] },
  { input: "pamhc2trees:mangoitem", output: ["society:mango_preserves"] },
  { input: "pamhc2trees:lycheeitem", output: ["society:lychee_preserves"] },
  { input: "pamhc2trees:peachitem", output: ["society:peach_preserves"] },
  { input: "vinery:cherry", output: ["society:cherry_preserves"] },
  {
    input: "farm_and_charm:strawberry",
    output: ["society:strawberry_preserves"],
  },
  { input: "pamhc2trees:plumitem", output: ["society:plum_preserves"] },
  { input: "pamhc2trees:pawpawitem", output: ["society:pawpaw_preserves"] },
  { input: "minecraft:melon_slice", output: ["society:melon_preserves"] },
  {
    input: "farmersdelight:pumpkin_slice",
    output: ["society:pumpkin_preserves"],
  },
  { input: "vinery:red_grape", output: ["society:red_grape_preserves"] },
  {
    input: "vinery:jungle_grapes_red",
    output: ["society:red_grape_preserves"],
  },
  {
    input: "vinery:savanna_grapes_red",
    output: ["society:red_grape_preserves"],
  },
  { input: "vinery:taiga_grapes_red", output: ["society:red_grape_preserves"] },
  { input: "vinery:white_grape", output: ["society:white_grape_preserves"] },
  {
    input: "vinery:jungle_grapes_white",
    output: ["society:white_grape_preserves"],
  },
  {
    input: "vinery:savanna_grapes_white",
    output: ["society:white_grape_preserves"],
  },
  {
    input: "vinery:taiga_grapes_white",
    output: ["society:white_grape_preserves"],
  },
  {
    input: "society:blueberry",
    output: ["society:blueberry_preserves"],
  },
  {
    input: "atmospheric:passion_fruit",
    output: ["society:passion_fruit_preserves"],
  },
  {
    input: "atmospheric:currant",
    output: ["society:currant_preserves"],
  },
  {
    input: "atmospheric:yucca_fruit",
    output: ["society:yucca_preserves"],
  },
  {
    input: "atmospheric:aloe_leaves",
    output: ["society:aloe_preserves"],
  },
  {
    input: "minecraft:carrot",
    output: ["society:carrot_preserves"],
  },
  {
    input: "minecraft:potato",
    output: ["society:potato_preserves"],
  },
  {
    input: "minecraft:beetroot",
    output: ["society:beetroot_preserves"],
  },
  {
    input: "farm_and_charm:corn",
    output: ["society:corn_preserves"],
  },
  {
    input: "farmersdelight:tomato",
    output: ["society:tomato_preserves"],
  },
  {
    input: "pamhc2trees:hazelnutitem",
    output: ["society:hazelnut_mash"],
  },
  {
    input: "autumnity:foul_berries",
    output: ["society:foul_berries_preserves"],
  },
  {
    input: "minecraft:chorus_fruit",
    output: ["society:chorus_fruit_preserves"],
  },
  {
    input: "pamhc2trees:lemonitem",
    output: ["society:lemon_preserves"],
  },
  { input: "farm_and_charm:onion", output: ["society:onion_preserves"] },
  { input: "society:eggplant", output: ["society:eggplant_preserves"] },
  {
    input: "veggiesdelight:cauliflower",
    output: ["society:cauliflower_preserves"],
  },
  {
    input: "veggiesdelight:bellpepper",
    output: ["society:bell_pepper_preserves"],
  },
  {
    input: "veggiesdelight:sweet_potato",
    output: ["society:sweet_potato_preserves"],
  },
  { input: "veggiesdelight:garlic", output: ["society:garlic_preserves"] },
  { input: "snowyspirit:ginger", output: ["society:ginger_preserves"] },
  { input: "society:salmonberry", output: ["society:salmonberry_preserves"] },
  { input: "society:boysenberry", output: ["society:boysenberry_preserves"] },
  { input: "society:cranberry", output: ["society:cranberry_preserves"] },
  { input: "society:crystalberry", output: ["society:crystalberry_preserves"] },
  { input: "windswept:wild_berries", output: ["society:wild_berries_preserves"] },
  { input: "veggiesdelight:zucchini", output: ["society:zucchini_preserves"] },
  { input: "veggiesdelight:turnip", output: ["society:turnip_preserves"] },
  { input: "veggiesdelight:broccoli", output: ["society:broccoli_preserves"] },
];
roeFish.forEach((fish) => {
  const splitFish = fish.item.split(":");
  let fishId = splitFish[1];
  if (!fishId.includes("_barrel") && !fishId.includes("_roe")) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.preservesJarRecipes.push({
      input: `society:${fishId}_roe`,
      output: [`society:aged_${fishId}_roe`],
    });
  }
});

StartupEvents.registry("block", (event) => {
  event
    .create("society:preserves_jar", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 5))
    .property(integerProperty.create("type", 0, global.preservesJarRecipes.length))
    .box(2, 0, 2, 14, 15, 14)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Turns 5 of the same crop into a preserve"));
      item.modelJson({
        parent: "society:block/preserves_jar",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 5), 0)
        .set(integerProperty.create("type", 0, global.preservesJarRecipes.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 5), 0)
        .set(integerProperty.create("type", 0, global.preservesJarRecipes.length), 0);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND" && !upgraded && item == "society:stone_hand") {
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
          type: block.properties.get("type"),
          working: block.properties.get("working"),
          mature: block.properties.get("mature"),
          upgraded: true,
          stage: block.properties.get("stage"),
        });
      }

      global.handleBERightClick(
        "minecraft:block.wood.place",
        click,
        global.preservesJarRecipes,
        upgraded ? 3 : 5,
        true
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, type: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.preservesJarRecipes, 3);
      });
    }).blockstateJson = {
    multipart: [
      {
        when: { upgraded: false },
        apply: { model: "society:block/preserves_jar_base" },
      },
      {
        when: { working: true },
        apply: { model: "society:block/preserves_jar_lid" },
      },
      {
        when: { mature: true, working: false },
        apply: { model: "society:block/preserves_jar_lid_done" },
      },
      {
        when: { upgraded: true },
        apply: { model: "society:block/preserves_jar_base_upgraded" },
      },
      {
        when: { working: true, upgraded: false },
        apply: { model: "society:block/preserves_jar_base" },
      },
      {
        when: { mature: true, upgraded: false },
        apply: { model: "society:block/preserves_jar_base" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/machine_done" },
      },
    ],
  };
});
