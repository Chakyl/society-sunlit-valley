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
      errorText = "It's too late at night to enter the Skull Cavern...";
    } else {
      if (!player.stages.has("skull_cavern_intro")) {
        player.stages.add("skull_cavern_intro");
        player.tell(Text.gold("A strange person hands you a note and vanishes..."));
        player.give(Item.of("gag:escape_rope"));
        player.give(
          Item.of(
            "candlelight:note_paper_written",
            `{author:"someone...",text:["The Skull Cavern is a dangerous pit you can descend by finding ropes under ores and boulders.  

It'll drain the life out of you if you stay in it too late.

Use that Escape Rope I gave you to get out before 5AM..."],title:"A Warning"}`
          )
        );
      }
      player.teleportTo("society:skull_cavern", x, 512, z, 0, 0);
      player.persistentData.skullCavernEnterDay = Number(
        (Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed()
      );
      player.getLevel().getBlock(x, 511, z).set("society:skull_cavern_teleporter");
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
