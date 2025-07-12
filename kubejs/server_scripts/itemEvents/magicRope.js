console.info("[SOCIETY] magicRope.js loaded");
const canTeleportDown = (level, player, blockPos) => {
  let scannedBlock;
  let airAbove = false;
  let successBlock = 0;
  for (let i = 5; i < 15; i++) {
    scannedBlock = level.getBlock(blockPos.offset(0, -i, 0));
    if (["minecraft:air", "minecraft:cave_air", "minecraft:void_air"].includes(scannedBlock.id)) {
      if (airAbove) {
        successBlock = i;
      } else airAbove = true;
    } else if (airAbove) airAbove = false;
  }
  if (successBlock > 0) {
    player.teleportTo(level, blockPos.x, blockPos.y - successBlock, blockPos.z, [], 0.0, 0.0);
    return true;
  }
  return false;
};

ItemEvents.rightClicked("society:magic_rope", (e) => {
  const { level, server, item, player } = e;
  let errorText;
  if (level.dimension !== "society:skull_cavern") {
    errorText = "This can only be used in the Skull Cavern";
  } else {
    if (canTeleportDown(level, player, player.onPos)) {
      item.count--;
      server.runCommandSilent(
        `playsound minecraft:entity.enderman.teleport block @a ${player.x} ${player.y} ${player.z}`
      );
      player.addItemCooldown(item, 300);
    } else errorText = "There isn't a cave below you...";
  }
  if (errorText) {
    player.addItemCooldown(item, 2);
    global.renderUiText(
      player,
      server,
      {
        magicRopeMessage: {
          type: "text",
          x: 0,
          y: -90,
          text: errorText,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        magicRopeMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: errorText,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
  }
});
