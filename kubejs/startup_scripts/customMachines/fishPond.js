//priority: 100
console.info("[SOCIETY] fishPond.js loaded");

const getRequestedItems = (type, population) => {
  let requestedItems = {};
  global.fishPondDefinitions.get(type).quests.forEach((quest) => {
    if (quest.population == population) {
      requestedItems = quest.requestedItems;
    }
  });
  return requestedItems;
};

global.handleFishInsertion = (clickEvent) => {
  const { item, block, player, level } = clickEvent;
  const { facing, upgraded } = global.getPondProperties(block);
  let nbt = block.getEntityData();
  if (nbt.data.type.equals("") && global.fishPondDefinitions.has(`${item.id}`)) {
    successParticles(level, block);
    block.set(block.id, {
      facing: facing,
      valid: true,
      mature: false,
      upgraded: upgraded,
      quest: false,
    });
    nbt.merge({ data: { type: item.id, quest_id: 0, population: 0, max_population: 3 } });
    block.setEntityData(nbt);
    if (!player.isCreative()) item.count--;
  }
};

global.handleQuestSubmission = (type, clickEvent) => {
  const { item, block, player, level } = clickEvent;
  const { facing, valid, mature, upgraded } = global.getPondProperties(block);
  let nbt = block.getEntityData();
  const { population, max_population, quest_id } = nbt.data;
  const questContent = getRequestedItems(type, Number(max_population))[quest_id];
  if (item && item == questContent.item) {
    if (item.count >= questContent.count) {
      successParticles(level, block);
      block.set(block.id, {
        facing: facing,
        valid: valid,
        mature: mature,
        upgraded: upgraded,
        quest: false,
      });
      nbt.merge({
        data: {
          quest_id: 0,
          max_population: increaseStage(max_population, Number(max_population) === 7 ? 3 : 2),
        },
      });

      block.setEntityData(nbt);
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

global.handleFishPondRightClick = (clickEvent) => {
  const { item, block, hand, player, server, level } = clickEvent;
  const { facing, valid, mature, upgraded, quest } = global.getPondProperties(block);
  // Prevent Deployers from using artisan machines
  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    let nbt = block.getEntityData();
    const { type, population, max_population, quest_id } = nbt.data;
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
      });
    }
    if (!player.isCrouching()) {
      if (item && quest === "true") {
        global.handleQuestSubmission(type, clickEvent);
      }
      global.handleFishInsertion(clickEvent);
      if (mature === "true") {
        global.handleFishHarvest(block, player, server);
      }
      if (!type.equals("") && population == "0") {
        if (item && item.hasTag("forge:tools/fishing_rods")) {
          block.set(block.id, {
            facing: facing,
            valid: valid,
            mature: false,
            upgraded: upgraded,
            quest: false,
          });
        } else {
          player.tell(Text.red("Right click with a fishing rod to clear fish type."));
        }
      }
    } else if (population !== "0") {
      let fishItem = global.handleFishExtraction(block, player, server);
      if (fishItem) player.give(fishItem);
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
        .set(booleanProperty.create("quest"), false);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("valid"), true)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false)
        .set(booleanProperty.create("quest"), false);
    })
    .rightClick((click) => {
      global.handleFishPondRightClick(click);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ type: "", quest_id: 0, population: 0, max_population: 3 });
      blockInfo.serverTick(fishPondTickRate, 0, (entity) => {
        global.handleFishPondTick(entity);
      });
    }).blockstateJson = {
    multipart: [
      { apply: { model: "society:block/fish_pond_particle" } },
      {
        when: { facing: "north", upgraded: false },
        apply: { model: "society:block/fish_pond", y: 0, uvlock: false },
      },
      {
        when: { facing: "east", upgraded: false },
        apply: {
          model: "society:block/fish_pond",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { facing: "south", upgraded: false },
        apply: {
          model: "society:block/fish_pond",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { facing: "west", upgraded: false },
        apply: {
          model: "society:block/fish_pond",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { facing: "north", upgraded: true },
        apply: {
          model: "society:block/fish_pond_upgraded",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { facing: "east", upgraded: true },
        apply: {
          model: "society:block/fish_pond_upgraded",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { facing: "south", upgraded: true },
        apply: {
          model: "society:block/fish_pond_upgraded",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { facing: "west", upgraded: true },
        apply: {
          model: "society:block/fish_pond_upgraded",
          y: -90,
          uvlock: false,
        },
      },
      {
        when: { mature: true },
        apply: { model: "society:block/machine_done" },
      },
      {
        when: { quest: true, mature: false },
        apply: { model: "society:block/pond_quest" },
      },

      {
        when: { valid: false },
        apply: { model: "society:block/error" },
      },
    ],
  };
});
