console.info("[SOCIETY] skullTeleporter.js loaded");

BlockEvents.leftClicked("society:skull_cavern_teleporter", (e) => {
  if (e.level.dimension === "society:skull_cavern") e.cancel();
});
BlockEvents.rightClicked("society:skull_cavern_teleporter", (e) => {
  const { block, player, level, server } = e;
  const { x, z } = block;
  let errorText;
  if (!player.stages.has("entered_skull_cavern")) player.stages.add("entered_skull_cavern");
  if (level.dimension === "society:skull_cavern") {
    player.persistentData.skullCavernEnterDay = -1;
    global.teleportHome(player, server, level);
  } else if (level.dimension === "minecraft:overworld") {
    if (level.dayTime() % 24000 > 18000) {
      errorText = Text.translatable("society.skull_cavern.too_late").toJson();
    } else {
      if (!player.stages.has("skull_cavern_intro")) {
        player.stages.add("skull_cavern_intro");
        player.tell(Text.translatable("society.skull_cavern.intro").gold());
        player.give(Item.of("gag:escape_rope"));
        let noteTitle = global.translatableWithFallback("society.skull_cavern.intro.note.title", "A Warning").getString();
        let noteAuthor = global.translatableWithFallback("society.skull_cavern.intro.note.author", "someone...").getString();
        let noteText = Text.translatable("society.skull_cavern.intro.note").toJson();
        player.give(
          global.getNotePaperItem(noteAuthor, noteText, noteTitle)
        );
      }
      player.teleportTo("society:skull_cavern", x, 512, z, 0, 0);
      player.persistentData.skullCavernEnterDay = global.getDay(level);
      let playerLevel = player.getLevel()
      if (playerLevel.dimension === "society:skull_cavern") {
        playerLevel.getBlock(x, 511, z).set("society:skull_cavern_teleporter");
      } else {
        server.scheduleInTicks(10, () => {
          player.getLevel().getBlock(x, 511, z).set("society:skull_cavern_teleporter");
        });
      }
    }
  } else {
    errorText = Text.translatable("society.skull_cavern.invalid_dimension").toJson();
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
          text: `${errorText}`,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        skullTeleportMessageShadow: {
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
