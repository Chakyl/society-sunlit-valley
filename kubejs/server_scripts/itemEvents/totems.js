console.info("[SOCIETY] totems.js loaded");

const isEdging = (pos, x, z, radius) =>
  pos.x === x + radius ||
  pos.x === x - radius ||
  pos.z === z + radius ||
  pos.z === z - radius;

const runSpotTotem = (e, type) => {
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
      if (!level.isLoaded(pos)) continue;
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
  runSpotTotem(e, "digspot");
});

ItemEvents.rightClicked("society:bubble_totem", (e) => {
  runSpotTotem(e, "fishingspot");
});


const runWeatherTotem = (e, weather) => {
  const { server, player, item } = e;

  server.runCommandSilent(
    `weather ${weather}`
  );
  server.runCommandSilent(
    `playsound botania:terrasteel_craft block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  if (!player.isCreative()) item.count--;
  global.addItemCooldown(player, item.id, 2000);
};

ItemEvents.rightClicked("society:dry_totem", (e) => {
  runWeatherTotem(e, "clear");
});

ItemEvents.rightClicked("society:rain_totem", (e) => {
  runWeatherTotem(e, "rain");
});

ItemEvents.rightClicked("society:thunder_totem", (e) => {
  runWeatherTotem(e, "thunder");
});
