console.info("[SOCIETY] harvestHandling.js loaded");
// Yeah this filename has a typo. Fixing it would be more annoying than leaving it.

const deniedCrops = [
  "farmersdelight:tomatoes",
  "farmersdelight:budding_tomatoes",
  "minecraft:melon_stem",
  "minecraft:pitcher_crop",
  "minecraft:torchflower_crop",
  "minecraft:pumpkin_stem",
  "minecraft:cocoa",
  "supplementaries:flax",
  "society:mana_fruit_crop"
];
const allowedBonemealCrops = [
  "minecraft:crimson_fungus",
  "minecraft:warped_fungus",
];
const reseedableCrops = [
  "minecraft:potato",
  "minecraft:carrot",
  "farm_and_charm:onion",
  "veggiesdelight:sweet_potato",
  "vintagedelight:peanut",
  "veggiesdelight:garlic_clove"
];
BlockEvents.rightClicked((e) => {
  const { block, player, server, hand, item, level } = e;
  if (reseedableCrops.includes(e.item.getId())) {
    if (block.hasTag("dewdrop:waterable")) {
      e.player.inventoryMenu.broadcastFullState();
      e.cancel();
    }
  }
  if (!allowedBonemealCrops.includes(block.id)) {
    if (player.isHoldingInAnyHand("farm_and_charm:fertilizer")) e.cancel();
    if (
      player.isHoldingInAnyHand("minecraft:bone_meal") ||
      player.isHoldingInAnyHand("meadow:watering_can")
    ) {
      if (
        block.hasTag("minecraft:crops") ||
        block.hasTag("minecraft:saplings") ||
        block.hasTag("vinery:lattice") ||
        block.hasTag("farmersdelight:wild_crops") ||
        block.hasTag("farm_and_charm:wild_crops") ||
        block.hasTag("sereneseasons:summer_crops") ||
        block.hasTag("sereneseasons:autumn_crops") ||
        block.hasTag("sereneseasons:spring_crops") ||
        block.hasTag("sereneseasons:winter_crops") ||
        [
          "veggiesdelight:wild_bellpeppers",
          "veggiesdelight:wild_sweet_potatoes",
          "veggiesdelight:wild_garlic",
          "veggiesdelight:wild_cauliflowers",
          "atmospheric:dragon_roots",
          "atmospheric:aloe_vera",
          "atmospheric:aloe_kernels",
          "atmospheric:yucca_branch",
          "minecraft:kelp",
          "farmersdelight:tomatoes",
          "farm_and_charm:wild_nettle",
          "farm_and_charm:wild_ribwort",
          "minecraft:cocoa",
          "minecraft:cave_vines",
          "minecraft:cave_vines_plant",
          "minecraft:bamboo",
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
          "vinery:grapevine_stem",
          "nethervinery:obsidian_stem",
          "farmersdelight:budding_tomatoes",
          "farmersdelight:rice",
          "farmersdelight:rice_panicles",
          "herbalbrews:lavender",
          "herbalbrews:hibiscus",
          "minecraft:torchflower",
          "atmospheric:passion_vine",
          "verdantvibes:bracket_mushroom",
          "vinery:apple_leaves",
          "vinery:dark_cherry_leaves",
        ].includes(block.id)
      ) {
        player.tell(Text.translatable("society.bone_meal.weak"));
        e.player.inventoryMenu.broadcastFullState();
        e.cancel();
      }
    }
  }
  if (hand == "MAIN_HAND") {
    let initialBlock = level.getBlockState(block.pos);
    let checkBlocked;
    let blockState;
    if (
      block.hasTag("minecraft:crops") &&
      !deniedCrops.includes(block.id) &&
      initialBlock.block.isMaxAge(initialBlock)
    ) {
      let xpCount = 0;
      let radius = 0;
      if (item.hasTag("minecraft:hoes")) radius = 1;
      if (
        [
          "minecraft:netherite_hoe",
          "minecraft:diamond_hoe",
          "botania:elementium_hoe",
        ].includes(item.id)
      )
        radius = 2;
      for (let pos of BlockPos.betweenClosed(
        new BlockPos(block.x - radius, block.y, block.z - radius),
        [block.x + radius, block.y, block.z + radius],
      )) {
        checkBlocked = level.getBlock(pos);
        blockState = level.getBlockState(pos);
        if (
          checkBlocked.hasTag("minecraft:crops") &&
          !deniedCrops.includes(checkBlocked.id)
        ) {
          if (blockState.block.isMaxAge(blockState)) {
            if (player.isFake()) {
              e.cancel();
            } else {
              xpCount += blockState.block.getMaxAge();
            }
          }
        }
      }
      server.scheduleInTicks(2, () => {
        initialBlock = level.getBlockState(block.pos);
        if (!initialBlock.block.isMaxAge(initialBlock) && xpCount > 0) {
          const xp = block.createEntity("experience_orb");
          xp.mergeNbt({ Value: xpCount });
          xp.spawn();
          global.giveExperience(server, player, "farming", xpCount * 2);
        }
      });
    }
  }
});
// Vinery grapevine leaf mechanic
BlockEvents.rightClicked("vinery:grapevine_stem", (e) => {
  const { block } = e;
  let properties = block.getProperties();
  properties.leaves_pending = false;
  properties.leaves_done = true;
  block.set(block.id, properties);
});

BlockEvents.rightClicked((e) => {
  if (["society:mana_fruit_crop"].includes(e.item.getId())) {
    if (!e.block.hasTag("dewdrop:waterable")) {
      e.player.inventoryMenu.broadcastFullState();
      e.cancel();
    }
  }
});

BlockEvents.rightClicked("society:mana_fruit_crop", (e) => {
  const { level, server, block, player } = e;
  let blockProperties = level.getBlock(block.pos).getProperties();
  let age = Number(blockProperties.get("age"));

  if (age == 7) {
    blockProperties.age = "0";
    block.set(block.id, blockProperties);
    let quality = global.getCropQuality(block);
    let count = 1;
    if (player.stages.has("paradise_crop")) count += 1;
    if (player.stages.has("crop_collector")) count *= 2;
    if (quality) {
      block.popItemFromFace(
        Item.of(
          `${count}x society:mana_fruit`,
          `{quality_food:{effects:[],quality:${quality}}}`,
        ),
        "up",
      );
    } else {
      block.popItemFromFace(Item.of(`${count}x society:mana_fruit`), "up");
    }
    player.swing();
    server.runCommandSilent(
      `playsound minecraft:block.grass.break block @a ${block.x} ${block.y} ${block.z} 0.5`,
    );
  }
});
