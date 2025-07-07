console.info("[SOCIETY] farmingLoot.js loaded");
const LevelData = Java.loadClass("de.cadentem.quality_food.capability.LevelData");
const qualityToInt = (quality) => {
  switch (quality) {
    case "DIAMOND":
      return 3;
    case "GOLD":
      return 2;
    case "IRON":
      return 1;
    case "NONE":
    default:
      return 0;
  }
};
const cropList = [
  "minecraft:wheat",
  "minecraft:pumpkin_stem",
  "minecraft:melon_stem",
  "minecraft:beetroots",
  "snowyspirit:ginger",
  "supplementaries:flax",
  "herbalbrews:coffee_plant",
  "herbalbrews:rooibos_plant",
  "herbalbrews:tea_plant",
  "herbalbrews:yerba_mate_plant",
  "minecraft:sweet_berry_bush",
  "farm_and_charm:tomato_crop",
  "farm_and_charm:strawberry",
  "farm_and_charm:lettuce_crop",
  "farm_and_charm:barley_crop",
  "farm_and_charm:onion_crop",
  "farm_and_charm:tomato_crop_body",
  "farm_and_charm:corn_crop",
  "farm_and_charm:oat_crop",
  "brewery:hops_crop",
  "brewery:hops_crop_body",
  "nethervinery:crimson_grape_bush",
  "nethervinery:warped_grape_bush",
  "vinery:savanna_grape_bush_white",
  "vinery:jungle_grape_bush_red",
  "vinery:savanna_grape_bush_red",
  "vinery:white_grape_bush",
  "vinery:red_grape_bush",
  "vinery:taiga_grape_bush_red",
  "vinery:taiga_grape_bush_white",
  "vinery:jungle_grape_bush_white",
  "vinery:jungle_grape_bush_red",
  "pamhc2trees:pamorange",
  "pamhc2trees:pamdragonfruit",
  "pamhc2trees:pampeach",
  "pamhc2trees:pamplum",
  "pamhc2trees:pambanana",
  "pamhc2trees:pamapple",
  "pamhc2trees:pamcherry",
  "pamhc2trees:pamstarfruit",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pammango",
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pampawpaw",
  "pamhc2trees:pamcinnamon",
  "vintagedelight:ghost_pepper_crop",
  "vintagedelight:gearo_berry_bush",
  "vintagedelight:cucumber_crop",
  "farmersdelight:cabbages",
  "farmersdelight:budding_tomatoes",
  "farmersdelight:tomatoes",
  "farmersdelight:rice",
  "farmersdelight:rice_panicles",
  "society:ancient_fruit",
  "etcetera:cotton",
  "society:tubabacco_leaf",
  "brewery:hop_trellis",
  "society:blueberry",
  "veggiesdelight:cauliflower_crop",
  "veggiesdelight:garlic_crop",
  "veggiesdelight:bellpepper_crop",
  "society:eggplant",
  "society:potato",
  "society:carrot",
  "society:peanut",
  "society:sweet_potato",
  "society:onion",
];
const reeseedableCops = [
  "herbalbrews:yerba_mate", 
  "herbalbrews:rooibos", 
  "herbalbrews:coffee",
  "pamhc2trees:pamorange",
  "pamhc2trees:pamdragonfruit",
  "pamhc2trees:pampeach",
  "pamhc2trees:pamplum",
  "pamhc2trees:pambanana",
  "pamhc2trees:pamapple",
  "pamhc2trees:pamcherry",
  "pamhc2trees:pamstarfruit",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pammango",
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pampawpaw",
  "pamhc2trees:pamcinnamon"
];
const checkMaxGrown = (destroyedBlock) => {
  return destroyedBlock.blockState.block.isMaxAge(destroyedBlock.blockState);
};

const checkMaxGrownWithChance = (destroyedBlock, chance) => {
  return chance > Math.random() && checkMaxGrown(destroyedBlock);
};
const getFertilizer = (crop) => {
  const block = crop.getLevel().getBlock(crop.getPos().below().offset(-1, 0, 0));
  if (block.hasTag("dew_drop_farmland_growth:low_quality_fertilized_farmland")) return 1;
  if (block.hasTag("dew_drop_farmland_growth:high_quality_fertilized_farmland")) return 2;
  if (block.hasTag("dew_drop_farmland_growth:pristine_quality_fertilized_farmland")) return 3;
  return 0;
};
const getCropQuality = (crop, fertilizer) => {
  const qualityName = LevelData.get(crop.getLevel(), crop.getPos().offset(-1, 0, 0), false);
  const seedQuality = qualityToInt(qualityName);
  const goldChance =
    0.2 * ((seedQuality * 4.6) / 10) + 0.2 * fertilizer * ((seedQuality * 4.6 + 2) / 12) + 0.01;

  if (fertilizer == 3 && Math.random() < goldChance / 2) return 3;
  if (Math.random() < goldChance) return 2;
  if (Math.random() < goldChance * 2) return 1;
  return 0;
};
LootJS.modifiers((e) => {
  e.addBlockLootModifier(cropList).apply((c) => {
    c.forEachLoot((item) => {
      const fertilizer = getFertilizer(c.destroyedBlock);
      const quality = getCropQuality(c.destroyedBlock, fertilizer);
      if (quality > 0) item.setNbt(`{quality_food:{effects:[],quality:${quality}}}`);
    });
  });
  e.addBlockLootModifier(cropList)
    .hasAnyStage("sticky_crops")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.02)) {
        c.addLoot("society:pine_tar");
      }
    });
  e.addBlockLootModifier(cropList)
    .hasAnyStage("soil_inspector")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.05)) {
        c.addLoot("farm_and_charm:fertilizer");
      }
    });
  e.addBlockLootModifier(cropList)
    .randomChance(0.25)
    .customCondition({
      condition: "minecraft:location_check",
      offsetY: -1,
      predicate: {
        block: {
          blocks: ["dew_drop_farmland_growth:bountiful_fertilized_farmland"],
        },
      },
    })
    .modifyLoot(Ingredient.all, (itemStack) => {
      itemStack.setCount(itemStack.getCount() + 1);
      return itemStack;
    });
  e.addBlockLootModifier(cropList)
    .hasAnyStage("crop_collector")
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!reeseedableCops.includes(itemStack.id)) itemStack.setCount(itemStack.getCount() * 2);
      return itemStack;
    });
});
