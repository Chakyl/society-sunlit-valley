console.info("[SOCIETY] seasonFish.js loaded");

const checkSeasonNeptuna = (p, season, needsSkil) =>
  global.getSeasonFromLevel(p.level) === season &&
  p.stages.has("mystical_ocean") === needsSkil;
const convertToLootEntry = (entries, insertNeptuna) => {
  let pool = [];
  let weights = 0;
  entries.forEach((entry) => {
    const { fish, weight } = entry;
    weights += weight;
    pool.push(LootEntry.of(fish).withWeight(weight));
  });
  if (insertNeptuna)
    pool.push(
      LootEntry.of("society:neptuna").withWeight(Math.floor(weights * 0.09))
    );
  return pool;
};

const createPool = (entries, clear, rain, night) => {
  let timeOfDayEntries;
  if (night) {
    timeOfDayEntries = entries.filter((fish) => fish.night === true);
  } else {
    timeOfDayEntries = entries.filter((fish) => fish.night === undefined);
  }
  let newPool = timeOfDayEntries.filter(
    (fish) => !fish.requiresRain && !fish.requiresClear
  );
  if (clear) {
    return newPool.concat(
      timeOfDayEntries.filter((fish) => fish.requiresClear)
    );
  }
  if (rain) {
    return newPool.concat(timeOfDayEntries.filter((fish) => fish.requiresRain));
  }
  return newPool;
};

const createWeatherLootTable = (
  e,
  season,
  weather,
  oceanFish,
  riverFish,
  freshFish,
  night,
  mysticalOcean
) => {
  if (!night) {
    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .anyBiome("#minecraft:is_ocean", "#minecraft:is_beach")
      .weatherCheck(weather)
      .timeCheck(24000, 0, 12999)
      .addWeightedLoot([1, 1], convertToLootEntry(oceanFish, mysticalOcean));

    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .anyBiome("#minecraft:is_river")
      .weatherCheck(weather)
      .timeCheck(24000, 0, 12999)
      .addWeightedLoot([1, 1], convertToLootEntry(riverFish, mysticalOcean));

    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .not((n) => {
        n.anyBiome(
          "#minecraft:is_ocean",
          "#minecraft:is_beach",
          "#minecraft:is_river"
        );
      })
      .weatherCheck(weather)
      .timeCheck(24000, 0, 12999)
      .addWeightedLoot([1, 1], convertToLootEntry(freshFish, mysticalOcean));
  } else {
    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .anyBiome("#minecraft:is_ocean", "#minecraft:is_beach")
      .weatherCheck(weather)
      .timeCheck(24000, 13000, 23999)
      .addWeightedLoot([1, 1], convertToLootEntry(oceanFish, mysticalOcean));

    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .anyBiome("#minecraft:is_river")
      .weatherCheck(weather)
      .timeCheck(24000, 13000, 23999)
      .addWeightedLoot([1, 1], convertToLootEntry(riverFish, mysticalOcean));

    e.addLootTableModifier("minecraft:gameplay/fishing")
      .playerPredicate((p) => checkSeasonNeptuna(p, season, mysticalOcean))
      .not((n) => {
        n.anyBiome(
          "#minecraft:is_ocean",
          "#minecraft:is_beach",
          "#minecraft:is_river"
        );
      })
      .weatherCheck(weather)
      .timeCheck(24000, 13000, 23999)
      .addWeightedLoot([1, 1], convertToLootEntry(freshFish, mysticalOcean));
  }
};

const createSeasonLootTable = (
  e,
  season,
  oceanFish,
  riverFish,
  freshFish,
  night,
  mysticalOcean
) => {
  if (night) {
    createWeatherLootTable(
      e,
      season,
      { raining: false, thundering: false },
      createPool(oceanFish, true, false, true),
      createPool(riverFish, true, false, true),
      createPool(freshFish, true, false, true),
      true,
      mysticalOcean
    );
    createWeatherLootTable(
      e,
      season,
      { raining: true },
      createPool(oceanFish, false, true, true),
      createPool(riverFish, false, true, true),
      createPool(freshFish, false, true, true),
      true,
      mysticalOcean
    );
  } else {
    createWeatherLootTable(
      e,
      season,
      { raining: false, thundering: false },
      createPool(oceanFish, true, false, false),
      createPool(riverFish, true, false, false),
      createPool(freshFish, true, false, false),
      false,
      mysticalOcean
    );
    createWeatherLootTable(
      e,
      season,
      { raining: true },
      createPool(oceanFish, false, true, false),
      createPool(riverFish, false, true, false),
      createPool(freshFish, false, true, false),
      false,
      mysticalOcean
    );
  }
};

LootJS.modifiers((e) => {
  [
    "minecraft:cod",
    "minecraft:salmon",
    "minecraft:tropical_fish",
    "minecraft:pufferfish",
  ].forEach((fish) => {
    e.addLootTableModifier("minecraft:gameplay/fishing").removeLoot(fish);
  });

  createSeasonLootTable(
    e,
    "spring",
    global.springOcean,
    global.springRiver,
    global.springFresh,
    false,
    false
  );

  createSeasonLootTable(
    e,
    "spring",
    global.springOcean,
    global.springRiver,
    global.springFresh
  );
  createSeasonLootTable(
    e,
    "spring",
    global.springOcean,
    global.springRiver,
    global.springFresh,
    true,
    false
  );

  createSeasonLootTable(
    e,
    "summer",
    global.summerOcean,
    global.summerRiver,
    global.summerFresh,
    false,
    false
  );
  createSeasonLootTable(
    e,
    "summer",
    global.summerOcean,
    global.summerRiver,
    global.summerFresh,
    true,
    false
  );

  createSeasonLootTable(
    e,
    "autumn",
    global.autumnOcean,
    global.autumnRiver,
    global.autumnFresh,
    false,
    false
  );
  createSeasonLootTable(
    e,
    "autumn",
    global.autumnOcean,
    global.autumnRiver,
    global.autumnFresh,
    true,
    false
  );

  createSeasonLootTable(
    e,
    "winter",
    global.winterOcean,
    global.winterRiver,
    global.winterFresh,
    false,
    false
  );
  createSeasonLootTable(
    e,
    "winter",
    global.winterOcean,
    global.winterRiver,
    global.winterFresh,
    true,
    false
  );

  // Mystical Ocean

  createSeasonLootTable(
    e,
    "spring",
    global.springOcean,
    global.springRiver,
    global.springFresh,
    false,
    true
  );
  createSeasonLootTable(
    e,
    "spring",
    global.springOcean,
    global.springRiver,
    global.springFresh,
    true,
    true
  );

  createSeasonLootTable(
    e,
    "summer",
    global.summerOcean,
    global.summerRiver,
    global.summerFresh,
    false,
    true
  );
  createSeasonLootTable(
    e,
    "summer",
    global.summerOcean,
    global.summerRiver,
    global.summerFresh,
    true,
    true
  );

  createSeasonLootTable(
    e,
    "autumn",
    global.autumnOcean,
    global.autumnRiver,
    global.autumnFresh,
    false,
    true
  );
  createSeasonLootTable(
    e,
    "autumn",
    global.autumnOcean,
    global.autumnRiver,
    global.autumnFresh,
    true,
    true
  );

  createSeasonLootTable(
    e,
    "winter",
    global.winterOcean,
    global.winterRiver,
    global.winterFresh,
    false,
    true
  );
  createSeasonLootTable(
    e,
    "winter",
    global.winterOcean,
    global.winterRiver,
    global.winterFresh,
    true,
    true
  );

  // + Fish skills
  e.addLootTableModifier("minecraft:gameplay/fishing")
    .hasAnyStage("fly_fisher")
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!itemStack.hasTag("minecraft:fishes")) return itemStack;
      if (itemStack.maxStackSize == 1) return itemStack;
      itemStack.setCount(itemStack.getCount() + 1);
      return itemStack;
    })
    .hasAnyStage("school_fisher")
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!itemStack.hasTag("minecraft:fishes")) return itemStack;
      if (itemStack.maxStackSize == 1) return itemStack;
      itemStack.setCount(itemStack.getCount() + 3);
      return itemStack;
    })

  e.addLootTableModifier("minecraft:gameplay/fishing")
    .playerPredicate((p) =>
      global.hasBobber(p.getHeldItem("main_hand"), "society:needle_bobber")
    )
    .modifyLoot(Ingredient.all, (itemStack) => {
      if (!itemStack.hasTag("minecraft:fishes")) return itemStack;
      if (itemStack.maxStackSize == 1) return itemStack;
      itemStack.setCount(itemStack.getCount() + 5);
      return itemStack;
    })
});
