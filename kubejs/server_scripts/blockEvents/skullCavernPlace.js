console.info("[SOCIETY] skullCavernPlace.js loaded");

BlockEvents.placed((e) => {
  const { player, block, level, server } = e;
  if (level.dimension === "society:skull_cavern") {
    if (
      block.hasTag("society:skull_cavern_unplacable") &&
      !player.isCreative()
    ) {
      global.renderUiText(
        player,
        server,
        {
          skullCavernPlaceBlockMessage: {
            type: "text",
            x: 0,
            y: -90,
            text: "A magical force prevents you from placing this...",
            color: "#FF5555",
            alignX: "center",
            alignY: "bottom",
          },
          skullCavernPlaceBlockMessageShadow: {
            type: "text",
            x: 1,
            z: -1,
            y: -89,
            text: "A magical force prevents you from placing this...",
            color: "#000000",
            alignX: "center",
            alignY: "bottom",
          },
        },
        global.mainUiElementIds
      );
      e.cancel();
    } else if (global.skullCavernHardmode) {
      server.scheduleInTicks(0, () => {
        server.scheduleInTicks(
          block.id === "minecraft:torch" ? 1200 : 200,
          () => {
            console.log("block place scheduler");
            level.destroyBlock(block.pos, true);
            level.spawnParticles(
              "snowyspirit:glow_light",
              true,
              block.x,
              block.y + 0.5,
              block.z,
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              5,
              2
            );
          }
        );
      });
    }
  }
});
