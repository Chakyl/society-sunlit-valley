console.info("[SOCIETY] cobblemonGUI.js loaded");

const xOffset = 64;

const fishRadarPadding = 2;
PlayerEvents.tick((e) => {
  const { player, level } = e;
  const curios = player.nbt.ForgeCaps["curios:inventory"];

  if (player.age % 100 == 0 && curios.toString().includes("society:fish_radar")) {
    let fish = [];

    if (level.dimension !== "minecraft:the_nether") {
      fish = global.overworldRadar(e, fish, setLocalConditions);
    } else {
      fish = global.netherRadar(e, fish, setLocalConditions);
    }
    if (player.stages.has("mystical_ocean")) fish.push("society:neptuna");
    let fishRadarStart = 2;
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
        alignX: "center",
        alignY: "top",
      },
      fishConditions: {
        type: "text",
        x: level.dimension == "minecraft:the_nether" ? -40 : 8,
        y: fishRadarStart + 8 + fishRadarPadding,
        text: `${localConditions.toJson()}`,
        color: "#FFFFFFF",
        alignX: "center",
        alignY: "top",
      },
      fishRadarBottom: {
        type: "text",
        x: fishRadarPadding,
        y: fishRadarStart + 16 + fishRadarPadding * 2,
        text: "==============",
        color: "#AAAAAA",
        alignX: "center",
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
        alignX: "center",
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
});