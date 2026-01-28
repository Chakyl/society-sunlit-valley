console.info("[SOCIETY] magicRope.js loaded");

const canTeleportDown = (level, player, blockPos) => {
  let scannedBlock;
  let airAbove = false;
  let successBlock = 0;
  for (let i = 5; i < 15; i++) {
    scannedBlock = level.getBlock(blockPos.offset(0, -i, 0));
    if (
      ["minecraft:air", "minecraft:cave_air", "minecraft:cave_vines_plant"].includes(
        scannedBlock.id
      )
    ) {
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
const canTeleportSide = (level, player, blockPos) => {
  let scannedBlock;
  let successBlock;
  let xOffset = 0;
  let zOffset = 0;
  if (player.facing == "north") zOffset = -1;
  if (player.facing == "south") zOffset = 1;
  if (player.facing == "east") xOffset = 1;
  if (player.facing == "west") xOffset = -1;
  for (let i = 5; i < 40; i++) {
    scannedBlock = level.getBlock(blockPos.offset(i * xOffset, 0, i * zOffset));
    if (scannedBlock) {
      if (
        ["minecraft:air", "minecraft:cave_air", "minecraft:cave_vines_plant"].includes(
          level.getBlock(scannedBlock.getPos().above()).id
        )
      ) {
        successBlock = scannedBlock.pos;
      }
    }
  }
  if (successBlock) {
    player.teleportTo(level, successBlock.x, successBlock.y, successBlock.z, [], 0.0, 0.0);
    return true;
  }
  return false;
};
ItemEvents.rightClicked("society:magic_rope", (e) => {
  const { level, server, item, player } = e;
  let errorText;
  if (level.dimension !== "society:skull_cavern") {
    errorText = Text.translatable("item.society.magic_rope.invalid_dimension");
  } else {
    if (canTeleportDown(level, player, player.onPos)) {
      item.count--;
      server.runCommandSilent(
        `playsound minecraft:entity.enderman.teleport block @a ${player.x} ${player.y} ${player.z}`
      );
      global.addItemCooldown(player, item, 150);
    } else errorText = Text.translatable("item.society.magic_rope.no_room_below");
  }
  if (errorText) {
    global.addItemCooldown(player, item, 2);
    global.renderUiText(
      player,
      server,
      {
        magicRopeMessage: {
          type: "text",
          x: 0,
          y: -90,
          text: `${errorText.toJson()}`,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        magicRopeMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: `${errorText.toJson()}`,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
  }
});

BlockEvents.rightClicked((e) => {
  const { level, server, item, player, block } = e;
  let errorText;
  player.facing;
  if (item.id == "society:magic_tunnel")
    if (level.dimension !== "society:skull_cavern") {
      errorText = Text.translatable("item.society.magic_rope.invalid_dimension");
    } else {
      if (canTeleportSide(level, player, block.pos)) {
        item.count--;
        server.runCommandSilent(
          `playsound minecraft:entity.enderman.teleport block @a ${player.x} ${player.y} ${player.z}`
        );
        global.addItemCooldown(player, item, 150);
      } else errorText = Text.translatable("item.society.magic_rope.no_room_side");
    }
  if (errorText) {
    global.addItemCooldown(player, item, 2);
    global.renderUiText(
      player,
      server,
      {
        magicRopeMessage: {
          type: "text",
          x: 0,
          y: -90,
          text: `${errorText.toJson()}`,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        magicRopeMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: `${errorText.toJson()}`,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
  }
});
