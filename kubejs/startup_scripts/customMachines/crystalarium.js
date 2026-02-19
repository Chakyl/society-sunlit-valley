//priority: 100
console.info("[SOCIETY] crystalarium.js loaded");

global.crystalariumCrystals = new Map([]);
const crystals = [
  { item: "society:ocean_stone", time: 3 },
  { item: "society:opal", time: 3 },
  { item: "society:pyrite", time: 3 },
  { item: "society:soapstone", time: 3 },
  { item: "society:frozen_tear", time: 1 },
  { item: "society:baryte", time: 3 },
  { item: "society:basalt_shard", time: 3 },
  { item: "society:bixbyite", time: 3 },
  { item: "society:dolomite", time: 3 },
  { item: "society:fire_quartz", time: 2 },
  { item: "society:earth_crystal", time: 1 },
  { item: "society:allanite", time: 3 },
  { item: "society:calcite_gem", time: 3 },
  { item: "society:celestine", time: 3 },
  { item: "society:granite_slate", time: 3 },
  { item: "society:jagoite", time: 3 },
  { item: "society:jamborite", time: 3 },
  { item: "society:slate", time: 3 },
  { item: "society:limestone_pebble", time: 3 },
  { item: "society:malachite", time: 3 },
  { item: "society:mudstone", time: 3 },
  { item: "society:nekoite", time: 3 },
  { item: "society:orpiment", time: 3 },
  { item: "society:petrified_slime", time: 3 },
  { item: "society:sandstone_slate", time: 3 },
  { item: "society:thunder_egg", time: 3 },
  { item: "society:aerinite", time: 3 },
  { item: "society:esperite", time: 3 },
  { item: "society:fairy_stone", time: 3 },
  { item: "society:fluorapatite", time: 3 },
  { item: "society:geminite", time: 3 },
  { item: "society:ghost_crystal", time: 3 },
  { item: "society:hematite", time: 3 },
  { item: "society:kyanite", time: 3 },
  { item: "society:lunarite", time: 3 },
  { item: "society:marble", time: 3 },
  { item: "society:fire_opal", time: 3 },
  { item: "society:helvite", time: 4 },
  { item: "society:jasper", time: 3 },
  { item: "society:lemon_stone", time: 3 },
  { item: "society:neptunite", time: 4 },
  { item: "society:pure_obsidian", time: 3 },
  { item: "society:star_shards", time: 4 },
  { item: "society:tigerseye", time: 3 },
  { item: "society:aquamarine", time: 1 },
  { item: "society:ruby", time: 2 },
  { item: "society:amethyst_chunk", time: 1 },
  { item: "society:topaz", time: 2 },
  { item: "society:jade", time: 5 },
  { item: "minecraft:emerald", time: 2 },
  { item: "minecraft:lapis_lazuli", time: 1 },
  { item: "minecraft:diamond", time: 4 },
  { item: "minecraft:amethyst_shard", time: 1 },
  { item: "minecraft:prismarine_crystals", time: 1 },
  { item: "minecraft:quartz", time: 1 },
  { item: "society:spinel", time: 6 },
];
crystals.forEach((crystal) => {
  global.crystalariumCrystals.set(crystal.item, {
    output: [`2x ${crystal.item}`],
    time: crystal.time,
  });
});

StartupEvents.registry("block", (event) => {
  event
    .create("society:crystalarium", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .box(2, 0, 2, 14, 16, 14)
    .defaultCutout()
    .soundType("stone")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.crystalarium.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/crystalarium/crystalarium",
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
        if (!upgraded && item == "society:black_opal") {
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

      if (upgraded && block.properties.get("mature") === "true" && rnd10()) {
        let nbt = block.getEntityData();
        global.crystalariumCrystals.get(nbt.data.type).output.forEach((item) => {
          block.popItemFromFace(
            `society:pristine_${String(Item.of(item).id).path}`,
            block.properties.get("facing").toLowerCase()
          );
        });
      }

      global.handleBERightClick(
        "minecraft:block.amethyst_block.step",
        click,
        global.crystalariumCrystals,
        5
      );
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.crystalariumCrystals, 5);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("crystalarium"),
  };
});
