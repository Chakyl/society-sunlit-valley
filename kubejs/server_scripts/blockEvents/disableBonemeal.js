console.info("[SOCIETY] disableBonemeal.js loaded");

BlockEvents.rightClicked((e) => {
  const { player, block } = e;
  if (
    player.isHoldingInAnyHand("minecraft:bone_meal") ||
    player.isHoldingInAnyHand("farm_and_charm:fertilizer") ||
    player.isHoldingInAnyHand("meadow:watering_can")
  ) {
    if (
      block.hasTag("minecraft:crops") ||
      block.hasTag("minecraft:saplings") ||
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
      ].includes(block.id)
    ) {
      e.cancel();
    }
  }
});
