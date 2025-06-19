console.info("[SOCIETY] baitMaker.js loaded");

const baitFish = [
  "aquaculture:atlantic_herring",
  "minecraft:pufferfish",
  "aquaculture:minnow",
  "aquaculture:bluegill",
  "aquaculture:perch",
  "minecraft:salmon",
  "aquaculture:blackfish",
  "aquaculture:brown_trout",
  "aquaculture:carp",
  "aquaculture:piranha",
  "aquaculture:smallmouth_bass",
  "minecraft:cod",
  "aquaculture:pollock",
  "aquaculture:jellyfish",
  "aquaculture:rainbow_trout",
  "aquaculture:pink_salmon",
  "minecraft:tropical_fish",
  "aquaculture:red_grouper",
  "aquaculture:gar",
  "aquaculture:muskellunge",
  "aquaculture:synodontis",
  "aquaculture:tambaqui",
  "aquaculture:atlantic_cod",
  "aquaculture:boulti",
  "aquaculture:leech",
  "aquaculture:catfish",
  "aquaculture:tuna",
  "aquaculture:bayad",
  "aquaculture:arapaima",
  "aquaculture:atlantic_halibut",
  "aquaculture:starshell_turtle",
  "aquaculture:brown_shrooma",
  "aquaculture:red_shrooma",
  "aquaculture:arrau_turtle",
  "aquaculture:capitaine",
  "aquaculture:box_turtle",
  "aquaculture:pacific_halibut",
  "aquaculture:goldfish",
  "crabbersdelight:shrimp",
  "crabbersdelight:clawster",
  "crabbersdelight:crab",
  "crabbersdelight:clam",
  "netherdepthsupgrade:searing_cod",
  "netherdepthsupgrade:blazefish",
  "netherdepthsupgrade:lava_pufferfish",
  "netherdepthsupgrade:obsidianfish",
  "netherdepthsupgrade:bonefish",
  "netherdepthsupgrade:wither_bonefish",
  "netherdepthsupgrade:magmacubefish",
  "netherdepthsupgrade:glowdine",
  "netherdepthsupgrade:soulsucker",
  "netherdepthsupgrade:fortress_grouper",
  "netherdepthsupgrade:eyeball_fish",
  "society:neptuna",
  "unusualfishmod:raw_sneep_snorp",
  "unusualfishmod:raw_picklefish",
  "unusualfishmod:raw_forkfish",
  "unusualfishmod:raw_beaked_herring",
  "unusualfishmod:raw_sailor_barb",
  "unusualfishmod:raw_demon_herring",
  "unusualfishmod:raw_triple_twirl_pleco",
  "unusualfishmod:raw_copperflame_anthias",
  "unusualfishmod:raw_drooping_gourami",
  "unusualfishmod:raw_duality_damselfish",
  "unusualfishmod:raw_blind_sailfin",
  "unusualfishmod:raw_circus_fish",
  "unusualfishmod:raw_snowflake",
  "unusualfishmod:raw_aero_mono",
  "unusualfishmod:raw_hatchetfish",
  "unusualfishmod:raw_spindlefish",
  "unusualfishmod:raw_bark_angelfish",
  "unusualfishmod:raw_amber_goby",
  "unusualfishmod:raw_eyelash",
];
global.baitMakerRecipes = [];
baitFish.forEach((fish) => {
  const splitFish = fish.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "roe", "meat"].some((denied) => splitFish[1].includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.baitMakerRecipes.push({
      input: fish,
      output: [`3x society:${fishId}_bait`],
    });
  }
});
StartupEvents.registry("block", (event) => {
  event
    .create("society:bait_maker", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(integerProperty.create("stage", 0, 3))
    .property(integerProperty.create("type", 0, global.baitMakerRecipes.length))
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .soundType("copper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Turns a fish into 6 bait"));
      item.modelJson({
        parent: "society:block/bait_maker_off",
      });
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 3), 0)
        .set(integerProperty.create("type", 0, global.baitMakerRecipes.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(integerProperty.create("stage", 0, 3), 0)
        .set(integerProperty.create("type", 0, global.baitMakerRecipes.length), 0);
    })
    .rightClick((click) => {
      global.handleBERightClick(
        "aquaculture:fish_death",
        click,
        global.baitMakerRecipes,
        1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.baitMakerRecipes, 1);
      });
    }).blockstateJson = {
    multipart: [
      {
        apply: { model: "society:block/bait_maker_particle" },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/machine_done" },
      },
      {
        when: { working: false, facing: "north" },
        apply: {
          model: "society:block/bait_maker_off",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { working: false, facing: "east" },
        apply: {
          model: "society:block/bait_maker_off",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { working: false, facing: "south" },
        apply: {
          model: "society:block/bait_maker_off",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { working: false, facing: "west" },
        apply: {
          model: "society:block/bait_maker_off",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { working: true, facing: "north" },
        apply: {
          model: "society:block/bait_maker",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { working: true, facing: "east" },
        apply: {
          model: "society:block/bait_maker",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { working: true, facing: "south" },
        apply: {
          model: "society:block/bait_maker",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { working: true, facing: "west" },
        apply: {
          model: "society:block/bait_maker",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { mature: true, facing: "north" },
        apply: {
          model: "society:block/bait_maker_done",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { mature: true, facing: "east" },
        apply: {
          model: "society:block/bait_maker_done",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { mature: true, facing: "south" },
        apply: {
          model: "society:block/bait_maker_done",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { mature: true, facing: "west" },
        apply: {
          model: "society:block/bait_maker_done",
          y: -90,
          uvlock: false,
        },
      },
    ],
  };
});
