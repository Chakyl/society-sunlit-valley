const formatNumber = (number, quality) => {
  let value;
  if (quality) {
    if (quality == 1.0) value = Math.round(number * 1.25);
    if (quality == 2.0) value = Math.round(number * 1.5);
    if (quality == 3.0) value = Math.round(number * 2);
  } else {
    value = number;
  }
  return global.formatPrice(value);
};

const getStackBonusValueTooltips = (text, number, item, attribute, quality) => {
  let value = number;
  let clientStages = Client.player.stages;
  let bonusTooltips = [];
  let attributeMult = global.getAttributeMultiplier(
    Client.player.nbt.Attributes,
    `shippingbin:${attribute}_sell_multiplier`
  );
  let hasMultipliers = attributeMult > 1;
  if (
    clientStages.has("bluegill_meridian") &&
    item.id == "aquaculture:bluegill"
  ) {
    hasMultipliers = true;
    value = 666;
    bonusTooltips.push(Text.aqua("Bluegill Meridian sets value to 666"));
  }
  if (
    clientStages.has("phenomenology_of_treasure") &&
    (item.hasTag("society:artifacts") || item.hasTag("society:relics"))
  ) {
    hasMultipliers = true;
    value *= 3;
    bonusTooltips.push(Text.aqua("Phenomenology of Treasure +200%"));
  }
  if (
    clientStages.has("brine_and_punishment") &&
    item.hasTag("society:brine_and_punishment")
  ) {
    hasMultipliers = true;
    value *= 2;
    bonusTooltips.push(Text.aqua("Brine and Punishment +100%"));
  }

  value = Math.round(value * item.count * attributeMult);
  text.add(1, [
    Text.white(`● ${formatNumber(value, quality)}`),
    Text.gray(` Stack value ${hasMultipliers  ? "+ multipliers" : ""}`),
  ]);
  bonusTooltips.forEach((bonus, index) => {
    text.add(2 + index, [bonus]);
  });
  if (attributeMult > 1) {
    text.add(bonusTooltips.length + 2, [getAttributeStr(attribute), Text.green(` +${Math.round((attributeMult - 1) * 100)}%`)]);
  } else {
    text.add(bonusTooltips.length + 2, [getAttributeStr(attribute)]);
  }
};

const getAttributeStr = (attribute) => {
  switch (attribute) {
    case "crop":
      return "🔱 §6Farmer product";
    case "wood":
      return "✎ §6Artisan product";
    case "gem":
      return "🎣 §6Geologist product";
    case "meat":
      return "🗡 §6Adventurer product";
    default:
      console.log(`Invalid attribute`);
  }
};
global.addPriceTooltip = (tooltip, sellable, attribute) => {
  let value = sellable.value;
  tooltip.addAdvanced(sellable.item, (item, advanced, text) => {
    let quality;
    if (item.nbt && item.nbt.quality_food) {
      quality = item.nbt.quality_food.quality;
    }
    if (tooltip.shift) {
      getStackBonusValueTooltips(text, value, item, attribute, quality);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(value, quality)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });
};

ItemEvents.tooltip((tooltip) => {
  const calculateCost = (coin, count, stackSize) => {
    let value = 0;
    switch (coin) {
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
    return formatNumber(value * count * (stackSize || 1));
  };
  const coinTooltips = [
    "numismatics:spur",
    "numismatics:bevel",
    "numismatics:sprocket",
    "numismatics:cog",
    "numismatics:crown",
    "numismatics:sun",
    "numismatics:neptunium_coin",
    "numismatics:ancient_coin",
    "numismatics:prismatic_coin",
  ];
  coinTooltips.forEach((coin) => {
    tooltip.addAdvanced(coin, (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [
          Text.white(`● ${calculateCost(coin.path, 1, item.count)}`),
          Text.gray(" Stack value"),
        ]);
      } else {
        text.add(1, [
          Text.white(`● ${calculateCost(coin.path, 1, 1)}`),
          Text.darkGray(" Hold ["),
          Text.gray("Shift"),
          Text.darkGray("]"),
        ]);
      }
    });
  });

  tooltip.addAdvanced("splendid_slimes:plort", (item, advanced, text) => {
    let plortType;
    let price;
    if (item.nbt && item.nbt.plort) {
      plortType = item.nbt.plort.id;
    }
    global.plorts.forEach((plort) => {
      if (plort.type == plortType) price = plort.value;
    });
    if (tooltip.shift) {
      getStackBonusValueTooltips(text, price, item, "crop", 0);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });

  tooltip.addAdvanced("splendid_slimes:slime_heart", (item, advanced, text) => {
    let heartType;
    let price;
    if (item.nbt && item.nbt.slime) {
      heartType = item.nbt.slime.id;
    }
    global.slimeHearts.forEach((heart) => {
      if (heart.type == heartType) price = heart.value;
    });
    if (tooltip.shift) {
      getStackBonusValueTooltips(text, price, item, "crop", 0);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),
        Text.darkGray(" Hold ["),
        Text.gray("Shift"),
        Text.darkGray("]"),
      ]);
    }
  });

  // Ore
  global.ore.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  // Pristine
  global.pristine.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  // Geodes
  global.geodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:froggy_helm") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_drum") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_gadget") {
      global.addPriceTooltip(tooltip, geodeItem, "gem");
      tooltip.add(geodeItem.item, "🪓 §7Mineral");
    } else {
      global.addPriceTooltip(tooltip, geodeItem, "meat");
    }
  });
  // Gem
  global.gems.forEach((gem) => {
    global.addPriceTooltip(tooltip, gem, "gem");
    tooltip.add(gem.item, "🎣 §7Gem");
  });
  [
    "society:sparkstone",
    "minecraft:emerald",
    "minecraft:diamond",
    "minecraft:amethyst_shard",
    "minecraft:quartz",
    "society:prismatic_shard",
    "minecraft:prismarine_crystals",
  ].forEach((gem) => {
    tooltip.add(gem, "🎣 §7Gem");
  });
  global.miscGeologist.forEach((gem) => {
    global.addPriceTooltip(tooltip, gem, "gem");
  });
  // Artifact
  global.artifacts.forEach((artifact) => {
    global.addPriceTooltip(tooltip, artifact, "meat");
  });
  global.relics.forEach((artifact) => {
    global.addPriceTooltip(tooltip, artifact, "meat");
  });
  // Crops
  global.crops.forEach((crop) => {
    global.addPriceTooltip(tooltip, crop, "crop");
  });
  // Meat
  global.animalProducts.forEach((meat) => {
    global.addPriceTooltip(tooltip, meat, "crop");
  });
  // Wines
  global.wines.forEach((wine) => {
    global.addPriceTooltip(tooltip, wine, "wood");
  });
  // Brews
  global.brews.forEach((brew) => {
    global.addPriceTooltip(tooltip, brew, "wood");
  });
  // Preserves
  global.preserves.forEach((jar) => {
    global.addPriceTooltip(tooltip, jar, "wood");
  });
  // Dehydrated
  global.dehydrated.forEach((jar) => {
    global.addPriceTooltip(tooltip, jar, "wood");
  });
  // Artisan goods
  global.artisanGoods.forEach((good) => {
    global.addPriceTooltip(tooltip, good, "wood");
  });
  // Fish
  global.fish.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "crop");
  });
  global.smokedFish.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "wood");
  });
  global.agedRoe.forEach((fish) => {
    global.addPriceTooltip(tooltip, fish, "wood");
  });
  // Cocktails
  global.cocktails.forEach((cocktail) => {
    global.addPriceTooltip(tooltip, cocktail, "crop");
  });
  // herbalbrews
  global.herbalBrews.forEach((brew) => {
    global.addPriceTooltip(tooltip, brew, "crop");
  });
  // Logs
  global.logs.forEach((log) => {
    global.addPriceTooltip(tooltip, log, "crop");
  });
  // Cooking
  global.cooking.forEach((dish) => {
    global.addPriceTooltip(tooltip, dish, "crop");
  });
  // Misc
  global.miscAdventurer.forEach((miscItem) => {
    global.addPriceTooltip(tooltip, miscItem, "meat");
  });
});
