console.info("[SOCIETY] cobblemonGUI.js loaded");

const pokeRadarPadding = 2;

PlayerEvents.tick((e) => {
    const { player, level } = e;
    const curios = player.nbt.ForgeCaps["curios:inventory"];

    if (player.age % 60 == 0 && curios.toString().includes("sunlit_cobblemon:poke_radar")) {

        let rarityMatch = /{rarity:"([^"]*)"/.exec(curios.toString());
        let mons = [];
        let spawnDetails = global.getCurrentSpawnDetails(level, player, rarityMatch ? rarityMatch[1] : "common");

        spawnDetails.forEach((entry) => {
            let foundMon = entry.getId().split("-")[0]
            if (!mons.includes(foundMon)) mons.push(foundMon);
        })
        let pokeRadarStart = 4;
        player.paint({
            pokeRadarDisplay: {
                type: "text",
                x: pokeRadarPadding,
                y: pokeRadarStart,
                text:
                    `${Text.of("=[ ").gray()
                        .append(Text.translatable("item.sunlit_cobblemon.poke_radar").red())
                        .append(" ]=").toJson()
                    }`,
                color: "#AAAAAA",
                alignX: "center",
                alignY: "top",
            },
        });
        let fishUiElements = {};
        let fishUiElementIds = [];
        for (let index = 0; index < 80; index++) {
            fishUiElementIds.push(`poke_radar_${index}`);
        }
        mons.forEach((mon, index) => {
            fishUiElements[`poke_radar_${index}`] = {
                type: "rectangle",
                w: 64,
                h: 64,
                x: (index % 12) * 18 - 96,
                y: Math.floor(index / 12) * 18,
                texture: "cobblemon:textures/gui/sprite/" + mon + ".png",
                alignX: "center",
                alignY: "top",
            };
        });
        global.renderUiItemText(player, fishUiElements, fishUiElementIds);
    } else if (player.age % 100 == 0 && !curios.toString().includes("sunlit_cobblemon:poke_radar")) {
        let removedPokeIds = ["pokeRadarDisplay"];
        for (let index = 0; index < 80; index++) {
            removedPokeIds.push(`poke_radar_${index}`);
        }
        global.clearUiItemPaint(player, removedPokeIds);
    }
});