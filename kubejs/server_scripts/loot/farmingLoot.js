console.info("[SOCIETY] farmingLoot.js loaded");

// TODO: "vintagedelight:gearo_berry_bush"
const cropCollectorDenied = [
  "pamhc2trees:pamapple",
  "pamhc2trees:pamcherry",
  "pamhc2trees:pamorange",
  "pamhc2trees:pampeach",
  "pamhc2trees:pamplum",
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pampawpaw",
  "pamhc2trees:pambanana",
  "pamhc2trees:pamcinnamon",
  "pamhc2trees:pamdragonfruit",
  "pamhc2trees:pammango",
  "pamhc2trees:pamstarfruit",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pamlemon",
  "pamhc2trees:pampassionfruit",
];
const checkMaxGrown = (destroyedBlock) => {
  return destroyedBlock.blockState.block.isMaxAge(destroyedBlock.blockState);
};

const checkMaxGrownWithChance = (destroyedBlock, chance) => {
  return chance > Math.random() && checkMaxGrown(destroyedBlock);
};

LootJS.modifiers((e) => {
  e.addBlockLootModifier(global.cropList).apply((c) => {
    c.forEachLoot((item) => {
      const quality = global.getCropQuality(c.destroyedBlock);
      if (quality > 0)
        item.setNbt(`{quality_food:{effects:[],quality:${quality}}}`);
    });
  });
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("sticky_crops")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.02)) {
        c.addLoot("society:pine_tar");
      }
    });
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("soil_inspector")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.05)) {
        c.addLoot("farm_and_charm:fertilizer");
      }
    });
  e.addBlockLootModifier(global.cropList)
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
    
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("paradise_crop")
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!cropCollectorDenied.includes(itemStack.id))
        itemStack.setCount(itemStack.getCount() + 1);
      return itemStack;
    });
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("crop_collector")
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!cropCollectorDenied.includes(itemStack.id))
        itemStack.setCount(itemStack.getCount() * 2);
      return itemStack;
    });

  // Mastery
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("husbandry_mastery")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.005)) {
        c.addLoot("society:plushie_capsule");
      }
    });
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("husbandry_mastery")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.003)) {
        c.addLoot("society:animal_cracker");
      }
    });
  e.addBlockLootModifier(global.cropList)
    .hasAnyStage("farming_mastery")
    .apply((c) => {
      if (checkMaxGrownWithChance(c.destroyedBlock, 0.005)) {
        c.addLoot("atmospheric:grimwood_sapling");
      }
    });
});
