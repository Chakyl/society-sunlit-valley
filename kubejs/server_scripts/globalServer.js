console.info("[SOCIETY] globalServer.js loaded");

global.mainUiElementIds = [
  "animalName",
  "animalNameIcons",
  "affection",
  "artisanMessage",
  "artisanItemMessage",
  "artisanProgress",
  "pondHeader",
  "fishIcon",
  "fishName",
  "population",
  "tapperMessage",
  "seedBiomeMessage",
  "skullTeleportMessage",
  "skullCavernPlaceBlockMessage",
  "magicRopeMessage",
  "chanceMessage",
  "longwingCountMessage",
  "flowerCountMessage"
];
const clearUiPaint = (player, ids) => {
  let removedText = {};
  let removedShadow = {};
  // Spawn and clear instance of paint element to prevent warnings that they don't exist
  ids.forEach((id) => {
    removedText[id] = { type: "text" };
    removedShadow[`${id}Shadow`] = { type: "text" };
  });
  player.paint(removedText);
  player.paint(removedShadow);
  ids.forEach((id) => {
    removedText[id] = { remove: true };
    removedShadow[`${id}Shadow`] = { remove: true };
  });
  player.paint(removedText);
  player.paint(removedShadow);
};

global.renderUiText = (player, server, messages, clearedMessages) => {
  server.scheduleInTicks(0, () => {
    clearUiPaint(player, clearedMessages);
    player.paint(messages);
    player.persistentData.ageLastShownMessage = player.age;
    server.scheduleInTicks(100, () => {
      if (player.age - player.persistentData.get("ageLastShownMessage") >= 100)
        clearUiPaint(player, clearedMessages);
    });
  });
};

global.clearUiItemPaint = (player, ids) => {
  let removedItem = {};
  // Spawn and clear instance of paint element to prevent warnings that they don't exist
  ids.forEach((id) => {
    removedItem[id] = { type: "item" };
  });
  player.paint(removedItem);
  ids.forEach((id) => {
    removedItem[id] = { remove: true };
  });
  player.paint(removedItem);
};

global.renderUiItemText = (player, items, ids) => {
  global.clearUiItemPaint(player, ids);
  player.paint(items);
};
global.calculateCoinValue = (coin) => {
  let value = 0;
  switch (String(coin.id).path) {
    case "spur":
      value = 1;
      break;
    case "bevel":
      value = 8;
      break;
    case "sprocket":
      value = 16;
      break;
    case "cog":
      value = 64;
      break;
    case "crown":
      value = 512;
      break;
    case "sun":
      value = 4096;
      break;
    case "neptunium_coin":
      value = 32768;
      break;
    case "ancient_coin":
      value = 262144;
      break;
    case "prismatic_coin":
      value = 16777216;
      break;
    default:
      console.log(`Invalid coin`);
  }
  return value * coin.count;
};

global.getPigColoredName = (pig) => {
  switch (pig) {
    case "Red":
      return Text.translatable("society.pig_race.red_pig").red();
    case "Blue":
      return Text.translatable("society.pig_race.blue_pig").blue();
    case "Yellow":
      return Text.translatable("society.pig_race.yellow_pig").yellow();
    case "Green":
      return Text.translatable("society.pig_race.green_pig").green();
    default:
      console.log(`Invalid pig color`);
  }
  return Text.of(`${pig}`);
};

global.calculateCoinsFromValue = (price, output) => {
  for (let i = 0; i < global.coinMap.length; i++) {
    let { coin, value } = global.coinMap[i];
    if (value <= price) {
      if (price % value === 0) {
        output.push({ id: coin, count: price / value });
        return output;
      } else {
        output.push({ id: coin, count: Math.floor(price / value) });
        global.calculateCoinsFromValue(price % value, output);
      }
      return output;
    }
  }
};

const validateEntry = (entry, isDay, level, fishArray) => {
  if (entry.requiresRain && !level.raining) return;
  if (entry.requiresClear && (level.raining || level.thundering)) return;
  if (isDay && entry.night) return;
  if (!isDay && entry.night == undefined) return;
  fishArray.push(entry.fish);
};

global.overworldRadar = (e, fish, printFunction, extraOutput) => {
  let local = fish;
  const { level, player } = e;
  const season = global.getSeasonFromLevel(level);
  const biomeTags = level.getBiome(player.pos).tags().toList().toString();
  const isDay = level.getDayTime() % 24000 < 12999;
  let weather = level.raining
    ? Text.of("🌧 ").append(extraOutput ? Text.translatable("society.fish_radar.rain").blue() : Text.empty())
    : Text.of("☂ ").append(extraOutput ? Text.translatable("society.fish_radar.clear").yellow() : Text.empty());
  let time = isDay
    ? Text.of("☀ ").append(extraOutput ? Text.translatable("society.fish_radar.day").gold() : Text.empty())
    : Text.of("⛈ ").append(extraOutput ? Text.translatable("society.fish_radar.night").darkGray() : Text.empty());
  if (biomeTags.includes("minecraft:is_ocean") || biomeTags.includes("minecraft:is_beach")) {
    let biome =
      Text.of("   🌊 ").append(extraOutput ? Text.translatable("society.fish_radar.ocean").darkAqua() : Text.empty());
    printFunction(biome.append(" ").append(weather).append(" ").append(time));
    switch (season) {
      case "spring":
        global.springOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterOcean.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  } else if (biomeTags.includes("minecraft:is_river")) {
    let biome =
      Text.of("   ☔ ").append(extraOutput ? Text.translatable("society.fish_radar.river").blue() : Text.empty());
    printFunction(biome.append(" ").append(weather).append(" ").append(time));
    switch (season) {
      case "spring":
        global.springRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterRiver.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  } else {
    let biome =
      Text.of("   ☄ ").append(extraOutput ? Text.translatable("society.fish_radar.fresh").aqua() : Text.empty());
    printFunction(biome.append(" ").append(weather).append(" ").append(time));
    switch (season) {
      case "spring":
        global.springFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "summer":
        global.summerFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "autumn":
        global.autumnFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
      case "winter":
        global.winterFresh.forEach((fish) => validateEntry(fish, isDay, level, local));
        break;
    }
  }
  return local;
};

global.netherRadar = (e, local, printFunction) => {
  let defaultFish = [
    "netherdepthsupgrade:searing_cod",
    "netherdepthsupgrade:lava_pufferfish",
    "netherdepthsupgrade:blazefish",
    "netherdepthsupgrade:fortress_grouper",
  ];
  let netherFish = local.concat(defaultFish);
  const { level, player } = e;
  let biome = level.getBiome(player.pos).toString();
  let space = Text.of("            ").darkRed();

  if (biome.includes("minecraft:nether_wastes")) {
    printFunction(space.append(Text.translatable("biome.minecraft.nether_wastes")));
    netherFish.push("netherdepthsupgrade:bonefish");
  } else if (biome.includes("minecraft:soul_sand_valley")) {
    printFunction(space.append(Text.translatable("biome.minecraft.soul_sand_valley")));
    netherFish.push("netherdepthsupgrade:wither_bonefish");
    netherFish.push("netherdepthsupgrade:soulsucker");
  } else if (biome.includes("minecraft:basalt_deltas")) {
    printFunction(space.append(Text.translatable("biome.minecraft.basalt_deltas")));
    netherFish.push("netherdepthsupgrade:magmacubefish");
    netherFish.push("netherdepthsupgrade:obsidianfish");
  } else if (biome.includes("minecraft:crimson_forest")) {
    printFunction(space.append(Text.translatable("biome.minecraft.crimson_forest")));
    netherFish.push("netherdepthsupgrade:eyeball_fish");
  } else if (biome.includes("minecraft:warped_forest")) {
    printFunction(space.append(Text.translatable("biome.minecraft.warped_forest")));
    netherFish.push("netherdepthsupgrade:glowdine");
  } else {
    printFunction(space.append(Text.translatable("society.fish_radar.nether")));
  }
  return netherFish;
};

global.handleFee = (server, player, reason) => {
  const UUID = player.getUuid();
  let amountToDeduct = 0;
  let balance = 0;
  let account = null;
  let maxFee = 0;
  let minimumFee = 512;

  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    if (UUID.toString() == playerUUID.toString()) {
      balance = bankAccount.getBalance();
      account = bankAccount;
    }
  });
  if (reason === "death") {
    maxFee = 4096;
    if (player.stages.has("first_aid_guide")) maxFee = 2048;
    amountToDeduct = Math.min(Math.round(balance * 0.1), maxFee);
  }
  if (reason === "skull_cavern") {
    minimumFee = 1024;
    maxFee = 8192;

    amountToDeduct = Math.min(Math.round(balance * 0.15), maxFee);
  }
  if (amountToDeduct < minimumFee) amountToDeduct = minimumFee;
  if (balance < maxFee && player.stages.has("entered_skull_cavern")) amountToDeduct = maxFee;
  if (balance < amountToDeduct) {
    let currentDebt = null;
    let foundIndex = -1;
    if (!server.persistentData.debts) server.persistentData.debts = [];
    for (let index = 0; index < server.persistentData.debts.length; index++) {
      if (String(UUID) === String(server.persistentData.debts[index].uuid)) {
        currentDebt = Number(server.persistentData.debts[index].amount);
        server.persistentData.debts[index].amount = currentDebt + amountToDeduct;
        foundIndex = index;
        break;
      }
    }
    if (!currentDebt) {
      server.persistentData.debts.push({ uuid: UUID.toString(), amount: amountToDeduct });
    }
    let formattedAmountToDeduct = global.formatPrice(amountToDeduct);
    let formattedCurrentDebt = global.formatPrice(!currentDebt ? amountToDeduct : server.persistentData.debts[foundIndex].amount);
    let noteTitle = global.translatableWithFallback("society.hospital_receipt.title", "Hospital Receipt").getString();
    let noteAuthor = global.translatableWithFallback("society.hospital_receipt.author", "Sunlit Valley Hospital").getString();
    let noteText = Text.translatable("society.hospital_receipt.debt", `${formattedAmountToDeduct}`, `${formattedCurrentDebt}`).toJson();
    player.give(
      global.getNotePaperItem(noteAuthor, noteText, noteTitle)
    );
  } else {
    account.setBalance(balance - amountToDeduct);
    let formattedAmountToDeduct = global.formatPrice(amountToDeduct);
    let noteTitle = global.translatableWithFallback("society.hospital_receipt.title", "Hospital Receipt").getString();
    let noteAuthor = global.translatableWithFallback("society.hospital_receipt.author", "Sunlit Valley Hospital").getString();
    let noteText = Text.translatable("society.hospital_receipt.fee_taked", `${formattedAmountToDeduct}`).toJson();
    player.give(
      global.getNotePaperItem(noteAuthor, noteText, noteTitle)
    );
  }
};

global.teleportHome = (player, server, level) => {
  let respawnPosition = player.getRespawnPosition();
  if (respawnPosition == null) {
    respawnPosition = level.getSharedSpawnPos();
  }
  player.teleportTo(
    server.getLevel(player.getRespawnDimension().location()),
    respawnPosition.x,
    respawnPosition.y,
    respawnPosition.z,
    [],
    0.0,
    0.0
  );
  server.runCommandSilent(`experience add ${player.username} 1`);
};

/**
 * Normally this behaivor would be handled buy Pufferfish Skills, but it's broken with shippingbin attributes
 **/
global.addAttributesFromStages = (player, server) => {
  const stages = player.stages;
  const attributeCommand = (type, mult) =>
    `attribute ${player.username} shippingbin:${type}_sell_multiplier base set ${mult}`;
  if (stages.has("tiller")) server.runCommandSilent(attributeCommand("crop", 1.15));
  if (stages.has("artisan")) server.runCommandSilent(attributeCommand("wood", 1.2));
  if (stages.has("artful_tycoon")) server.runCommandSilent(attributeCommand("wood", 1.8));
  if (stages.has("gem_seller")) server.runCommandSilent(attributeCommand("gem", 1.25));
  if (stages.has("gem_tycoon")) server.runCommandSilent(attributeCommand("gem", 1.5));
  if (stages.has("fence")) server.runCommandSilent(attributeCommand("meat", 1.5));
  if (stages.has("looting_tycoon")) server.runCommandSilent(attributeCommand("meat", 2));
};

global.addItemCooldown = (player, item, time) => {
  if (!player.isFake()) player.addItemCooldown(item, time);
};

global.getPlushieItemNbt = (currentNbt, type, customName, animalData, animalNbt) => {
  let newNbt = currentNbt.copy();
  newNbt.animal = {};
  newNbt.animal.type = type;
  // Aggressive with the conditionals here since invalid nbt will definitely crash the game
  if (customName) {
    newNbt.animal.name = String(Component.of(customName).getString());
  }
  if (animalData.ageLastDroppedSpecial) {
    newNbt.animal.ageLastDroppedSpecial = animalData.ageLastDroppedSpecial;
  }
  if (animalData.ageLastMilked) {
    newNbt.animal.ageLastMilked = animalData.ageLastMilked;
  }
  if (animalData.ageLastMagicHarvested) {
    newNbt.animal.ageLastMagicHarvested = animalData.ageLastMagicHarvested;
  }
  if (animalData.clockwork) {
    newNbt.animal.clockwork = true;
  }
  if (animalData.bribed) {
    newNbt.animal.bribed = true;
  }
  if (animalData.bff) {
    newNbt.animal.bff = true;
  }
  if (animalData.animalCracker) {
    newNbt.animal.animalCracker = true;
  }
  if (animalNbt.Variant) {
    newNbt.animal.Variant = animalNbt.Variant;
  }
  return newNbt;
};
global.setPlushieExtractedPD = (animal, data) => {
  const { ageLastDroppedSpecial, ageLastMilked, ageLastMagicHarvested, clockwork, bribed, bff, animalCracker, } = data;
  animal.persistentData.affection = 1000;
  if (ageLastDroppedSpecial) {
    animal.persistentData.ageLastDroppedSpecial = ageLastDroppedSpecial;
  }
  if (ageLastMilked) {
    animal.persistentData.ageLastMilked = ageLastMilked;
  }
  if (ageLastMagicHarvested) {
    animal.persistentData.ageLastMagicHarvested = ageLastMagicHarvested;
  }
  if (clockwork) {
    animal.persistentData.clockwork = true;
  }
  if (bribed) {
    animal.persistentData.bribed = true;
  }
  if (bff) {
    animal.persistentData.bff = true;
  }
  if (animalCracker) {
    animal.persistentData.animalCracker = true;
  }
};