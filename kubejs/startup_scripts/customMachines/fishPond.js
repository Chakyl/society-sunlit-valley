console.info("[SOCIETY] fishPond.js loaded");

const getRequestedItems = (fish, population) => {
  let requestedItems = {};
  fish.quests.forEach((quest) => {
    if (quest.population == population) {
      requestedItems = quest.requestedItems;
    }
  });
  return requestedItems;
};

const handleFishInsertion = (fish, recipeIndex, clickEvent) => {
  const { item, block, player, level, server } = clickEvent;
  const { facing, valid, mature, upgraded, quest, quest_id, type, population, max_population } =
    global.getPondProperties(block);
  if (item == fish.item && (type == `${recipeIndex + 1}` || type == "0")) {
    if (type == "0") {
      successParticles(level, block);
      block.set(block.id, {
        facing: facing,
        valid: true,
        mature: false,
        upgraded: upgraded,
        quest: false,
        quest_id: "0",
        population: "1",
        max_population: "3",
        type: "" + (recipeIndex + 1),
      });
      if (!player.isCreative()) item.count--;
    } else if (population !== max_population && !player.stages.has("mitosis")) {
      server.runCommandSilent(
        `playsound minecraft:entity.player.splash block @a ${block.x} ${block.y} ${block.z}`
      );
      level.spawnParticles(
        "minecraft:splash",
        true,
        block.x + 0.5,
        block.y + 0.9,
        block.z + 0.5,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        10,
        0.1
      );
      block.set(block.id, {
        facing: facing,
        valid: valid,
        mature: mature,
        upgraded: upgraded,
        quest: quest,
        quest_id: quest_id,
        population: increaseStage(population),
        max_population: max_population,
        type: type,
      });
      if (!player.isCreative()) item.count--;
    }
  }
};

const handleQuestSubmission = (fish, clickEvent) => {
  const { item, block, player, level } = clickEvent;
  const { facing, valid, quest_id, mature, upgraded, type, population, max_population } =
    global.getPondProperties(block);
  const questContent = getRequestedItems(fish, Number(max_population))[quest_id];
  if (item && item == questContent.item) {
    if (item.count >= questContent.count) {
      successParticles(level, block);
      block.set(block.id, {
        facing: facing,
        valid: valid,
        mature: mature,
        upgraded: upgraded,
        quest: false,
        quest_id: "0",
        population: population,
        max_population: increaseStage(max_population, max_population === "7" ? 3 : 2),
        type: type,
      });
      clickEvent.server.scheduleInTicks(2, () => {
        player.tell(Text.green(`🐟: This really makes us feel at home!`));
      });
      if (!player.isCreative()) item.count = item.count - questContent.count;
    } else {
      clickEvent.server.scheduleInTicks(2, () => {
        player.tell(
          Text.red(
            `🐟: Thanks but we need §3${
              questContent.count - item.count
            }§r more of these to be happy§r...`
          )
        );
      });
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:fish_pond", "cardinal")
    .property(booleanProperty.create("valid"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .property(booleanProperty.create("quest"))
    .property(integerProperty.create("quest_id", 0, 3))
    .property(integerProperty.create("population", 0, 10))
    .property(integerProperty.create("max_population", 0, 10))
    .property(integerProperty.create("type", 0, global.fishPondDefinitions.length))
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.modelJson({
        parent: "society:block/fish_pond",
      });
      item.fireResistant(true);
    })
    .defaultState((state) => {
      state
        .set(booleanProperty.create("valid"), true)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(booleanProperty.create("quest"), false)
        .set(integerProperty.create("quest_id", 0, 3), 0)
        .set(integerProperty.create("population", 0, 10), 0)
        .set(integerProperty.create("max_population", 0, 10), 0)
        .set(integerProperty.create("type", 0, global.fishPondDefinitions.length), 0);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("valid"), true)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(booleanProperty.create("quest"), false)
        .set(integerProperty.create("quest_id", 0, 3), 0)
        .set(integerProperty.create("population", 0, 10), 0)
        .set(integerProperty.create("max_population", 0, 10), 0)
        .set(integerProperty.create("type", 0, global.fishPondDefinitions.length), 0);
    })
    .rightClick((click) => {
      const { item, block, hand, player, server, level } = click;
      const { facing, valid, mature, upgraded, quest, quest_id, type, population, max_population } =
        global.getPondProperties(block);
      // Prevent Deployers from using artisan machines
      if (player.isFake()) return;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (upgraded === false && item === "society:sea_biscut") {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "farmersdelight:star",
            true,
            block.x,
            block.y + 1,
            block.z,
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            3,
            0.01
          );
          block.set(block.id, {
            facing: facing,
            valid: valid,
            mature: false,
            upgraded: true,
            quest: quest,
            quest_id: quest_id,
            population: population,
            max_population: max_population,
            type: type,
          });
        }
        global.fishPondDefinitions.forEach((fish, index) => {
          if (!player.isCrouching()) {
            if (item && quest === "true" && type == `${index + 1}`) {
              handleQuestSubmission(fish, click);
            }
            handleFishInsertion(fish, index, click);
            if (mature === "true" && type == `${index + 1}`) {
              global.handleFishHarvest(fish, block, player, server);
            }
            if (population == "0" && type == `${index + 1}`) {
              if (item && item.hasTag("forge:tools/fishing_rods")) {
                if (!player.stages.has("mitosis")) {
                  block.set(block.id, {
                    facing: facing,
                    valid: valid,
                    mature: false,
                    upgraded: upgraded,
                    quest: false,
                    quest_id: "0",
                    population: "0",
                    max_population: "3",
                    type: "0",
                  });
                } else {
                  player.tell(Text.red("Fish Ponds can not be reset with mitosis skill."));
                }
              } else {
                player.tell(Text.red("Right click with a fishing rod to clear fish type."));
              }
            }
          } else if (population !== "0" && type == `${index + 1}`) {
            if (player.stages.has("hot_hands")) {
              server.runCommandSilent(
                `playsound minecraft:block.lava.extinguish block @a ${player.x} ${player.y} ${player.z}`
              );
              let smokedFishId = fish.item.split(":")[1];
              if (smokedFishId.includes("raw_")) {
                if (smokedFishId === "raw_snowflake") smokedFishId = "frosty_fin";
                else smokedFishId = smokedFishId.substring(4, smokedFishId.length);
              }
              player.give(
                Item.of(
                  `${player.stages.has("mitosis") ? 2 : 1}x ${
                    rnd25() ? "minecraft:coal" : `society:smoked_${smokedFishId}`
                  }`
                )
              );
            } else player.give(`${player.stages.has("mitosis") ? 2 : 1}x ${fish.item}`);
            block.set(block.id, {
              facing: facing,
              valid: valid,
              mature: false,
              upgraded: upgraded,
              quest: quest,
              quest_id: quest_id,
              population: decreaseStage(population),
              max_population: max_population,
              type: type,
            });
          }
        });
      }
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(fishPondTickRate, 0, (entity) => {
        entity;
        global.handleFishPondTick(entity);
      });
    })
    .blockstateJson = MultipartBuilder("society:block/fish_pond")
      .particle()
      .doneMark()
      .complex(
        MultipartModifiers.directional(),
        MultipartModifiers.upgradable()
      )
      .error()
      .add({
        when: { quest: true, mature: false },
        apply: { model: "society:block/pond_quest", uvlock: false },
      })
      .build();
});
