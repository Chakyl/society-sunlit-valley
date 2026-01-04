console.info("[SOCIETY] totems.js loaded");

ItemEvents.rightClicked("society:treasure_totem", (e) => {
  const { server, player, level } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );
  const block = player.getOnPos();
  const { x, y, z } = level.getBlock(block);
  let radius = 4;
  let scanBlock;
  let aboveBlock;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    aboveBlock = level.getBlock(pos.above());
    if (
      aboveBlock.id == "minecraft:air" &&
      scanBlock.hasTag("society:treasure_spot_spawns")
    ) {
      server.runCommandSilent(
        `littlejoys digspot ${aboveBlock.x} ${aboveBlock.y} ${aboveBlock.z}`
      );
    }
  }
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  global.addItemCooldown(player, "society:treasure_totem", 20);
});
