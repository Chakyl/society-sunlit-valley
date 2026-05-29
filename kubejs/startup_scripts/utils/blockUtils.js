const FARMLAND = Java.loadClass("net.minecraft.world.level.block.FarmBlock");
global.surviveCheck = (level, pos) => {
  let blockState = level.getBlockState(pos.below());
  let mcBlock = blockState.block;
  if (mcBlock instanceof FARMLAND) {
    return true;
  } else return false;
};