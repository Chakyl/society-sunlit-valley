console.info("[SOCIETY] placeNbtMachine.js loaded");

const getSideCalc = (facing, initialPos, comparePos) => {
  switch (facing) {
    case "north":
      return initialPos.x - comparePos.x + 1;
    case "south":
      return comparePos.x - initialPos.x + 1;
    case "east":
      return initialPos.z - comparePos.z + 1;
    case "west":
      return comparePos.z - initialPos.z + 1;
  }
};
const getDepthCalc = (facing, initialPos, comparePos) => {
  switch (facing) {
    case "north":
      return comparePos.z - initialPos.z + 1;
    case "south":
      return initialPos.z - comparePos.z + 1;
    case "east":
      return initialPos.x - comparePos.x + 1;
    case "west":
      return comparePos.x - initialPos.x + 1;
  }
};
const scanArea = (level, block) => {
  let scannedBlock;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(block.x - 1, block.y, block.z - 1),
    [block.x + 1, block.y + 2, block.z + 1]
  )) {
    scannedBlock = level.getBlock(pos);
    if (
      scannedBlock.id !== "minecraft:air" &&
      scannedBlock.id !== "society:ribbit_hut"
    ) {
      return false;
    }
  }
  return true;
};
const setRibbitHutBlocks = (level, block, player, server) => {
  let facing = block.getProperties().get("facing");
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(block.x - 1, block.y, block.z - 1),
    [block.x + 1, block.y + 2, block.z + 1]
  )) {
    level.getBlock(pos).set("society:ribbit_hut_block", {
      layer: (pos.y - block.y).toString(),
      side: getSideCalc(facing, block, pos).toString(),
      depth: getDepthCalc(facing, block, pos).toString(),
      facing: facing,
    });
  }
  const hutBlock = global.getFacing(facing, block.getPos());
  level.getBlock(hutBlock).set("society:ribbit_hut", { facing: facing });
  server.scheduleInTicks(0, () => {
    server.scheduleInTicks(10, () => {
      let nbt = level.getBlock(hutBlock).getEntityData();
      nbt.merge({ data: { owner: player.getUuid().toString() } });
      level.getBlock(hutBlock).setEntityData(nbt);
    });
  });
};

BlockEvents.placed("society:ribbit_hut", (e) => {
  const { player, level, block, server } = e;
  let space = scanArea(level, block);

  if (!space) {
    player.tell(
      Text.translatable("block.society.ribbit_hut.not_enough_room").red()
    );
    player.inventoryMenu.broadcastFullState();
    e.cancel();
  } else {
    setRibbitHutBlocks(level, block, player, server);
  }
});

BlockEvents.leftClicked(["society:ribbit_hut_block"], (e) => {
  e.player.tell(Text.translatable("block.society.ribbit_hut.break").red());
});

BlockEvents.broken(["society:ribbit_hut"], (e) => {
  const { level, player, block } = e;
  let centerBlock = global.getOpposite(
    block.getProperties().get("facing"),
    block.getPos()
  );
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(centerBlock.x - 1, centerBlock.y, centerBlock.z - 1),
    [centerBlock.x + 1, centerBlock.y + 2, centerBlock.z + 1]
  )) {
    level.getBlock(pos).set("minecraft:air");
  }
  player.give("society:ribbit_hut");
});
