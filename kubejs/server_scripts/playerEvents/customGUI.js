console.info("[SOCIETY] coinUi.js loaded");

const xOffset = 64;


PlayerEvents.tick((e) => {
  const player = e.player;
  const curios = player.nbt.ForgeCaps["curios:inventory"];
  if (global.clockIcon && player.age % 20 == 0) {
    if (
      ["gag:energized_hearthstone", "gag:hearthstone"].includes(player.getHeldItem("main_hand").id)
    ) {
      player.paint({
        clockIcon: { remove: true },
      });
    } else {
      player.paint({
        clockIcon: {
          type: "item",
          x: 8,
          y: 22,
          item: "minecraft:clock",
          alignX: "left",
          alignY: "top",
        },
      });
    }
  }
  fishRadarPainter(curios, e);
});

const fishRadarPadding = 2;
const fishRadarPainter = (curios, e) => {
  const { player, level } = e;
  let localConditions = Text.empty();

  function setLocalConditions(x) {
    localConditions = x;
  }
  if (player.age % 100 == 0 && curios.toString().includes("society:fish_radar")) {
    let fish = [];

    if (level.dimension !== "minecraft:the_nether") {
      fish = global.overworldRadar(e, fish, setLocalConditions);
    } else {
      fish = global.netherRadar(e, fish, setLocalConditions);
    }
    if (player.stages.has("mystical_ocean")) fish.push("society:neptuna");
    let fishRadarStart = 48;
    player.paint({
      fishRadarDisplay: {
        type: "text",
        x: fishRadarPadding,
        y: fishRadarStart,
        text: 
          `${
            Text.of("=[ ").gray()
              .append(Text.translatable("item.society.fish_radar").green())
              .append(" ]=").toJson()
          }`,
        color: "#AAAAAA",
        alignX: "left",
        alignY: "top",
      },
      fishConditions: {
        type: "text",
        x: level.dimension == "minecraft:the_nether" ? -40 : 8,
        y: fishRadarStart + 8 + fishRadarPadding,
        text: `${localConditions.toJson()}`,
        color: "#FFFFFFF",
        alignX: "left",
        alignY: "top",
      },
      fishRadarBottom: {
        type: "text",
        x: fishRadarPadding,
        y: fishRadarStart + 16 + fishRadarPadding * 2,
        text: "==============",
        color: "#AAAAAA",
        alignX: "left",
        alignY: "top",
      },
    });
    let fishUiElements = {};
    let fishUiElementIds = [];
    for (let index = 0; index < 10; index++) {
      fishUiElementIds.push(`fish_radar_${index}`);
    }
    fish.forEach((fishItem, index) => {
      fishUiElements[`fish_radar_${index}`] = {
        type: "item",
        x: 10 + (index >= 5 ? (index - 5) * 18 : index * 18),
        y: fishRadarStart + 32 + fishRadarPadding * 4 + (index >= 5 ? 18 : 0),
        item: fishItem,
        alignX: "left",
        alignY: "top",
      };
    });
    global.renderUiItemText(player, fishUiElements, fishUiElementIds);
  } else if (player.age % 100 == 0 && !curios.toString().includes("society:fish_radar")) {
    let removedFishUiIds = ["fishRadarDisplay", "fishConditions", "fishRadarBottom"];
    for (let index = 0; index < 10; index++) {
      removedFishUiIds.push(`fish_radar_${index}`);
    }
    global.clearUiItemPaint(player, removedFishUiIds);
  }
};
