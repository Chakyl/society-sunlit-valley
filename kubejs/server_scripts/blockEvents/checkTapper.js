console.info("[SOCIETY] checkTapper.js loaded");

BlockEvents.rightClicked(["society:tapper", "society:auto_tapper"], (e) => {
  const { level, block, player, server, hand } = e;
  if (hand == "OFF_HAND") return;
  let errorText;
  const attachedBlock = global.getTapperLog(level, block);
  if (global.hasMultipleTappers(level, block)) {
    errorText = Text.translatable(
      "block.society.tapper.too_many_tapper"
    ).toJson();
  }
  if (!attachedBlock.hasTag("society:tappable_blocks")) {
    errorText = Text.translatable(
      "block.society.tapper.invalid_block"
    ).toJson();
  }
  if (errorText) {
    global.renderUiText(
      player,
      server,
      {
        tapperMessage: {
          type: "text",
          x: 0,
          y: -90,
          text: `${errorText}`,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        tapperMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: `${errorText}`,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
  }
});