console.info("[SOCIETY] skullTeleporter.js loaded");

BlockEvents.leftClicked("society:skull_cavern_teleporter", (e) => {
  if (e.level.dimension === "society:skull_cavern") e.cancel();
});
BlockEvents.rightClicked("society:skull_cavern_teleporter", (e) => {
  const { block, player, level, server } = e;
  const { x, z } = block;
  let errorText;
  if (level.dimension === "society:skull_cavern") {
    global.teleportHome(player, server, level);
  } else if (level.dimension === "minecraft:overworld") {
    if (level.dayTime() % 24000 > 18000) {
      errorText = "It's too late at night to enter the Skull Cavern...";
    } else {
      player.teleportTo("society:skull_cavern", x, 512, z, 0, 0);
      player.level.getBlock(x, 511, z).set("society:skull_cavern_teleporter");
    }
  } else {
    errorText = "This block doesn't work in this dimension";
  }
  if (errorText) {
    global.renderUiText(
      player,
      server,
      {
        skullTeleportMessage: {
          type: "text",
          x: 0,
          y: -90,
          text: errorText,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        skullTeleportMessageShadow: {
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
