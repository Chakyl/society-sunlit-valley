console.info("[SOCIETY] checkFishPond.js loaded");

const getRequestedItems = (fish, population) => {
  let requestedItems = {};
  fish.quests.forEach((quest) => {
    if (quest.population == population) {
      requestedItems = quest.requestedItems;
    }
  });
  return requestedItems;
};

const sendFishPondMessage = (clickEvent, recipes, population, maxPopulation) => {
  const { player, block, server } = clickEvent;
  const fishId = String(Item.of(global.getArtisanRecipe(recipes, block, true).item).id);
  let fishName = fishId
    .split(":")[1]
    .replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : " " + d.toUpperCase()));
  if (fishName.includes("Raw ")) {
    if (fishName === "Raw Snowflake") fishName = "Frosty Fin";
    else fishName = fishName.substring(4, fishName.length);
  }
  let fishIcons = "";

  for (let index = 0; index < maxPopulation; index++) {
    if (index < population) fishIcons += "§3🐟§r";
    else fishIcons += "§7🐟§r";
  }
  const upgrade = block.properties.get("upgraded").toLowerCase() == "true" ? `🡅` : "";

  global.renderUiText(
    player,
    server,
    {
      pondHeader: {
        type: "text",
        x: 0,
        y: -110,
        text: `==[ §a${upgrade}§r §3Fish Pond§r §a${upgrade}§r ]==`,
        color: "#AAAAAA",
        alignX: "center",
        alignY: "bottom",
      },
      pondHeaderShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -109,
        text: `==[ ${upgrade} Fish Pond ${upgrade} ]==`,
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
      fishIcon: {
        type: "item",
        x: 8,
        y: -84,
        item: fishId,
        alignX: "center",
        alignY: "bottom",
      },
      fishName: {
        type: "text",
        x: 0,
        y: -78,
        text: `${population}/${maxPopulation} ${fishName}`,
        color: "#00AAAA",
        alignX: "center",
        alignY: "bottom",
      },
      fishNameShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -77,
        text: `${population}/${maxPopulation} ${fishName}`,
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
      population: {
        type: "text",
        x: 0,
        y: -66,
        text: fishIcons,
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
      populationShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -65,
        text: `🐟`.repeat(maxPopulation),
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
    },
    global.mainUiElementIds
  );
};

BlockEvents.rightClicked("society:fish_pond", (e) => {
  const { item, block, player } = e;
  const properties = block.properties;
  const mature = properties.get("mature").toLowerCase();
  const valid = properties.get("valid").toLowerCase();
  const population = properties.get("population").toLowerCase();
  const max_population = properties.get("max_population").toLowerCase();
  const type = properties.get("type").toLowerCase();
  const quest = properties.get("quest").toLowerCase();
  const quest_id = properties.get("quest_id").toLowerCase();

  if (!player.isCrouching()) {
    e.server.scheduleInTicks(1, () => {
      if (mature == "false") {
        if (type !== "0") {
          sendFishPondMessage(e, global.fishPondDefinitions, population, max_population);
        } else if (!(item && item.hasTag("minecraft:fishes"))) {
          player.tell(
            Text.gray("This Fish Pond is Empty! Right click with a fish to place it in the pond.")
          );
        }
        if (type !== "0" && item && item.hasTag("minecraft:fishes")) {
          if (global.fishPondDefinitions[Number(type) - 1].item !== item.id)
            player.tell(Text.red(`🐟: We don't like that fish here...`));
        }
      }
      if (mature === "false" && quest === "true") {
        const questContent = getRequestedItems(
          global.fishPondDefinitions[type - 1],
          max_population
        )[quest_id];
        const questItem = Item.of(questContent.item).displayName;
        player.tell(
          Text.green(`🐟: We'd feel more at home with §3${questContent.count}§r of these:`)
        );
        player.tell(questItem);
      }
      if (valid === "false") {
        player.tell(
          Text.red(
            "Not a valid Fish pond! Requires a 3x4 pond behind it without adjacent Fish Ponds to work. Nether fish need a lava pond."
          )
        );
      }
    });
  }
});
