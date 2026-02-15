//priority: 100
console.info("[SOCIETY] fishSmoker.js loaded");

global.fishSmokerRecipes = new Map([]);
const smokableFish = [
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
smokableFish.forEach((fish) => {
  let fishId = fish.path;
  if (fishId.includes("raw_")) {
    if (fishId === "raw_snowflake") fishId = "frosty_fin";
    else fishId = fishId.substring(4, fishId.length);
  }
  global.fishSmokerRecipes.set(fish, {
    output: [`1x society:smoked_${fishId}`],
  });
});
StartupEvents.registry("block", (event) => {
  event
    .create("society:fish_smoker", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(1, 0, 4, 15, 28, 12)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.fish_smoker.description").gray());
      item.tooltip(Text.translatable("society.working_block_entity.preserve_quality").green());
      item.modelJson({
        parent: "society:block/kubejs/fish_smoker/fish_smoker_off",
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
      const quality = block.properties.get("quality");
      const facing = block.properties.get("facing");

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (!upgraded && item == "society:ancient_roe") {
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

      global.handleBERightClick(
        "farmersdelight:block.skillet.add_food",
        click,
        global.fishSmokerRecipes,
        5,
        false,
        false,
        upgraded ? 2 : 1
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "", quality: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.fishSmokerRecipes, 2);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("fish_smoker", true),
  };
});
