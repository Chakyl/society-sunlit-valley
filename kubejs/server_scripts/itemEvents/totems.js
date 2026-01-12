console.info("[SOCIETY] totems.js loaded");

const isEdging = (pos, x, z, radius) =>
  pos.x === x + radius ||
  pos.x === x - radius ||
  pos.z === z + radius ||
  pos.z === z - radius;

const runTotem = (e, type) => {
  const { server, player, level, item } = e;

  const block = player.getOnPos();
  const { x, y, z } = level.getBlock(block);
  let radius = 2;
  let scanBlock;
  let aboveBlock;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - 1, z - radius),
    [x + radius, y + 1, z + radius]
  )) {
    if (isEdging(pos, x, z, radius)) {
      scanBlock = level.getBlock(pos);
      aboveBlock = level.getBlock(pos.above());
      if (
        aboveBlock.id == "minecraft:air" &&
        ((type.equals("digspot") &&
          scanBlock.hasTag("society:treasure_spot_spawns")) ||
          (type.equals("fishingspot") &&
            scanBlock.id.equals("minecraft:water")))
      ) {
        server.runCommandSilent(
          `execute as ${player.username} run littlejoys ${type} ${aboveBlock.x} ${aboveBlock.y} ${aboveBlock.z}`
        );
      }
    }
  }
  server.runCommandSilent(
    `playsound botania:terrasteel_craft block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  if (!player.isCreative()) item.count--;
  global.addItemCooldown(player, item.id, 20);
};

ItemEvents.rightClicked("society:treasure_totem", (e) => {
  runTotem(e, "digspot");
});

ItemEvents.rightClicked("society:bubble_totem", (e) => {
  runTotem(e, "fishingspot");
});
