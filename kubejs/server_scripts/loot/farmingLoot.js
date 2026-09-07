// console.info("[SOCIETY] farmingLoot.js loaded");

// // TODO: "vintagedelight:gearo_berry_bush"
// const cropCollectorDenied = [
//   "fruittreemod:pamapple",
//   "fruittreemod:pamcherry",
//   "fruittreemod:pamorange",
//   "fruittreemod:pampeach",
//   "fruittreemod:pamplum",
//   "fruittreemod:pamhazelnut",
//   "fruittreemod:pampawpaw",
//   "fruittreemod:pambanana",
//   "fruittreemod:pamcinnamon",
//   "fruittreemod:pamdragonfruit",
//   "fruittreemod:pammango",
//   "fruittreemod:pamstarfruit",
//   "fruittreemod:pamlychee",
//   "fruittreemod:pamlemon",
//   "fruittreemod:pampassionfruit",
// ];
// const checkMaxGrown = (destroyedBlock) => {
//   return destroyedBlock.blockState.block.isMaxAge(destroyedBlock.blockState);
// };

// const checkMaxGrownWithChance = (destroyedBlock, chance) => {
//   return chance > Math.random() && checkMaxGrown(destroyedBlock);
// };

// LootJS.modifiers((e) => {
//   e.addTableModifier(global.cropList).apply((c) => {
//     c.forEachLoot((item) => {
//       const quality = global.getCropQuality(c.destroyedBlock);
//       if (quality > 0)
//         item.setNbt(`{quality_food:{effects:[],quality:${quality}}}`);
//     });
//   });
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("sticky_crops")
//     .apply((c) => {
//       if (checkMaxGrownWithChance(c.destroyedBlock, 0.02)) {
//         c.addLoot("society:pine_tar");
//       }
//     });
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("soil_inspector")
//     .apply((c) => {
//       if (checkMaxGrownWithChance(c.destroyedBlock, 0.05)) {
//         c.addLoot("farm_and_charm:fertilizer");
//       }
//     });
//   e.addTableModifier(global.cropList)
//     .randomChance(0.25)
//     .customCondition({
//       condition: "minecraft:location_check",
//       offsetY: -1,
//       predicate: {
//         block: {
//           blocks: ["sunrisegardening:bountiful_fertilized_farmland"],
//         },
//       },
//     })
//     .modifyLoot(Ingredient.all, (itemStack) => {
//       itemStack.setCount(itemStack.getCount() + 1);
//       return itemStack;
//     });
    
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("paradise_crop")
//     .modifyLoot(Ingredient.all, (itemStack) => {
//       if (!cropCollectorDenied.includes(itemStack.id))
//         itemStack.setCount(itemStack.getCount() + 1);
//       return itemStack;
//     });
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("crop_collector")
//     .modifyLoot(Ingredient.all, (itemStack) => {
//       if (!cropCollectorDenied.includes(itemStack.id))
//         itemStack.setCount(itemStack.getCount() * 2);
//       return itemStack;
//     });

//   // Mastery
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("husbandry_mastery")
//     .apply((c) => {
//       if (checkMaxGrownWithChance(c.destroyedBlock, 0.005)) {
//         c.addLoot("society:plushie_capsule");
//       }
//     });
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("husbandry_mastery")
//     .apply((c) => {
//       if (checkMaxGrownWithChance(c.destroyedBlock, 0.003)) {
//         c.addLoot("society:animal_cracker");
//       }
//     });
//   e.addTableModifier(global.cropList)
//     .hasAnyStage("farming_mastery")
//     .apply((c) => {
//       if (checkMaxGrownWithChance(c.destroyedBlock, 0.005)) {
//         c.addLoot("atmospheric:grimwood_sapling");
//       }
//     });
// });
