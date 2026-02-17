console.info("[SOCIETY] checkFishPond.js loaded");

const getRequestedItems = (type, population) => {
  let requestedItems = {};
  global.fishPondDefinitions.get(type).quests.forEach((quest) => {
    if (quest.population == population) {
      requestedItems = quest.requestedItems;
    }
  });
  return requestedItems;
};

const sendFishPondMessage = (clickEvent, type, population, maxPopulation) => {
  const { player, block, server } = clickEvent;
  let fishName = type.path.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );
  if (fishName.includes("Raw ")) {
    if (fishName === "Raw Snowflake") fishName = "Frosty Fin";
    else fishName = fishName.substring(4, fishName.length);
  }
  let fishIcons = "";
  let translatedFishName = global.getTranslatedItemName(type, fishName);

  for (let index = 0; index < maxPopulation; index++) {
    if (index < population) fishIcons += "§3⏳§r";
    else fishIcons += "§7⏳§r";
  }
  const upgrade =
    block.properties.get("upgraded").toLowerCase() == "true" ? `🡅` : "";
  const pondHeaderText = Text.empty()
    .gray()
    .append(Text.of(`==[ `))
    .append(Text.green(upgrade))
    .append(" ")
    .append(Text.translatable("block.society.fish_pond").darkAqua())
    .append(" ")
    .append(Text.green(upgrade))
    .append(Text.of(` ]==`));
  const pondHeaderTextShadow = Text.empty()
    .append(Text.of(`==[ `))
    .append(Text.of(upgrade))
    .append(" ")
    .append(Text.translatable("block.society.fish_pond"))
    .append(" ")
    .append(Text.of(upgrade))
    .append(Text.of(` ]==`));
  const fishNameText = Text.of(`${population}/${maxPopulation} `).append(translatedFishName);

  global.renderUiText(
    player,
    server,
    {
      pondHeader: {
        type: "text",
        x: 0,
        y: -110,
        text: `${pondHeaderText.toJson()}`,
        color: "#AAAAAA",
        alignX: "center",
        alignY: "bottom",
      },
      pondHeaderShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -109,
        text: `${pondHeaderTextShadow.toJson()}`,
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
      fishIcon: {
        type: "item",
        x: 8,
        y: -84,
        item: type,
        alignX: "center",
        alignY: "bottom",
      },
      fishName: {
        type: "text",
        x: 0,
        y: -78,
        text: `${fishNameText.toJson()}`,
        color: "#00AAAA",
        alignX: "center",
        alignY: "bottom",
      },
      fishNameShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -77,
        text: `${fishNameText.toJson()}`,
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
        text: `⏳`.repeat(maxPopulation),
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
    },
    global.mainUiElementIds
  );
};

BlockEvents.rightClicked("society:fish_pond", (e) => {
  const { item, hand, block, server, player } = e;
  if (hand == "OFF_HAND") return;
  if (!player.isCrouching()) {
    let { type, population, max_population, quest_id } =
      block.getEntityData().data;
    e.server.scheduleInTicks(1, () => {
      const properties = block.getProperties();
      const mature = properties.get("mature").toLowerCase();
      const valid = properties.get("valid").toLowerCase();
      const quest = properties.get("quest").toLowerCase();

      if (mature == "false") {
        if (!type.equals("")) {
          sendFishPondMessage(e, type, population, max_population);
        } else if (!(item && item.hasTag("minecraft:fishes"))) {
          player.tell(
            Text.translatable("block.society.fish_pond.pond_is_empty").gray()
          );
        }
        if (!type.equals("") && item && item.hasTag("minecraft:fishes")) {
          if (type !== item.id)
            player.tell(
              Text.translatable("block.society.fish_pond.cross_type_fish").red()
            );
        }
      }
      if (mature === "false" && quest === "true") {
        let questContent = getRequestedItems(type, max_population)
        let questItem
        let checkedCount;
        if (item.id.equals('unusualfishmod:ripper_tooth')) {
          if (questContent) {
            if (questContent.length == 1) {
              player.tell(
                Text.translatable(
                  "block.society.fish_pond.no_alt",
                ).red()
              );

            } else {
              let newQuest = questContent.length - 1 === quest_id ? 0 : quest_id + 1
              questContent = questContent[newQuest];
              questItem = Item.of(questContent.item).displayName;
              checkedCount = player.stages.has("pond_house_five")
                ? Math.round(questContent.count / 2)
                : questContent.count;
              player.tell(
                Text.translatable(
                  "block.society.fish_pond.fish_quest_changed",
                  Text.darkAqua(`${checkedCount}`)
                ).green()
              );
              player.tell(questItem);
              let nbt = block.getEntityData();
              nbt.merge({
                data: {
                  quest_id: Number(newQuest),
                },
              });
              block.setEntityData(nbt);
              server.runCommandSilent(
                `playsound minecraft:entity.player.splash block @a ${block.x} ${block.y} ${block.z}`
              );
              if (!player.isCreative()) item.shrink(1);
            }
          }
        } else {
          questContent = questContent[quest_id];
          if (questContent && questContent.item !== item.id) {
            questItem = Item.of(questContent.item).displayName;
            checkedCount = player.stages.has("pond_house_five")
              ? Math.round(questContent.count / 2)
              : questContent.count;
            player.tell(
              Text.translatable(
                "block.society.fish_pond.fish_quest",
                Text.darkAqua(`${checkedCount}`)
              ).green()
            );
            player.tell(questItem);
          }
        }
      }
      if (valid === "false") {
        player.tell(
          Text.translatable("block.society.fish_pond.not_valid").red()
        );
      }
    });
  }
});
