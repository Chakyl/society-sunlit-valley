//priority: 100
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
  "crittersandcompanions:koi_fish",
];
global.baitMakerRecipes = new Map([]);
baitFish.forEach((fish) => {
  const splitFish = fish.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "roe", "meat"].some((denied) => splitFish[1].includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.baitMakerRecipes.set(fish, {
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
    .box(2, 0, 2, 14, 19, 14)
    .defaultCutout()
    .soundType("copper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.bait_maker.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/bait_maker/bait_maker_off",
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
      global.handleBERightClick("aquaculture:fish_death", click, global.baitMakerRecipes, 1);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.baitMakerRecipes, 1);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("bait_maker"),
  };
});
