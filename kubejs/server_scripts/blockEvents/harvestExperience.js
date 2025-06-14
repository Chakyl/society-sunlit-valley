console.info("[SOCIETY] harvestExperience.js loaded");

const deniedCrops = [
  "farmersdelight:tomatoes",
  "farmersdelight:budding_tomatoes",
  "minecraft:melon_stem",
  "minecraft:pumpkin_stem",
  "minecraft:cocoa",
  "supplementaries:flax",
];
const farmlands = [
  "minecraft:farmland",
  "farmingforblockheads:fertilized_farmland_rich",
  "farmingforblockheads:fertilized_farmland_rich_stable",
  "farmingforblockheads:fertilized_farmland_healthy",
  "farmingforblockheads:fertilized_farmland_healthy_stable",
  "farmingforblockheads:fertilized_farmland_stable",
];
BlockEvents.rightClicked((e) => {
  const { block, player, server, hand, item, level } = e;
  if (farmlands.includes(block.id) && player.isFake()) e.cancel();
  if (hand == "MAIN_HAND") {
    const initialBlock = level.getBlockState(block.pos);
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
        ["minecraft:netherite_hoe", "minecraft:diamond_hoe", "botania:elementium_hoe"].includes(
          item.id
        )
      )
        radius = 2;
      for (let pos of BlockPos.betweenClosed(
        new BlockPos(block.x - radius, block.y, block.z - radius),
        [block.x + radius, block.y, block.z + radius]
      )) {
        checkBlocked = level.getBlock(pos);
        blockState = level.getBlockState(pos);
        if (checkBlocked.hasTag("minecraft:crops") && !deniedCrops.includes(checkBlocked.id)) {
          if (blockState.block.isMaxAge(blockState)) {
            if (player.isFake()) {
              e.cancel();
            } else {
              xpCount += blockState.block.getMaxAge();
            }
          }
        }
      }
      if (xpCount > 0) {
        const xp = block.createEntity("experience_orb");
        xp.mergeNbt({ Value: xpCount });
        xp.spawn();
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:farming ${xpCount * 2}`
        );
      }
    }
  }
});
