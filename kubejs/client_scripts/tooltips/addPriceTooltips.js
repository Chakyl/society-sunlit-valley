const formatNumber = (number, quality, doubled) => {
  let value;
  if (quality) {
    if (quality == 1.0) value = Math.round(number * (doubled ? 1.5 : 1.25));
    if (quality == 2.0) value = Math.round(number * (doubled ? 2 : 1.5));
    if (quality == 3.0) value = Math.round(number * (doubled ? 3 : 2));
  } else {
    value = number;
  }
  return global.formatPrice(value);
};

const getStackBonusValueTooltips = (text, number, item, attribute, quality) => {
  let value = number;
  let clientStages = Client.player.stages;
  let bonusTooltips = [];
  let qualityDoubled = false;
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
    bonusTooltips.push(
      Text.translatable("item.society.bluegill_meridian.price_modifier").aqua()
    );
  }
  if (
    clientStages.has("phenomenology_of_treasure") &&
    (item.hasTag("society:artifacts") || item.hasTag("society:relics"))
  ) {
    hasMultipliers = true;
    value *= 3;
    bonusTooltips.push(
      Text.translatable(
        "item.society.phenomenology_of_treasure.price_modifier"
      ).aqua()
    );
  }
  if (
    clientStages.has("brine_and_punishment") &&
    item.hasTag("society:brine_and_punishment")
  ) {
    hasMultipliers = true;
    value *= 2;
    bonusTooltips.push(
      Text.translatable(
        "item.society.brine_and_punishment.price_modifier"
      ).aqua()
    );
  }
  if (
    quality > 0 &&
    clientStages.has("the_quality_of_the_earth") &&
    attribute.equals("crop") &&
    !item.hasTag("minecraft:fishes")
  ) {
    hasMultipliers = true;
    qualityDoubled = true
    bonusTooltips.push(
      Text.translatable(
        "item.society.the_quality_of_the_earth.price_modifier"
      ).aqua()
    );
  }
  value = Math.round(value * item.count * attributeMult);
  text.add(1, [
    Text.translatable(
      "tooltip.society.coins",
      `${formatNumber(value, quality, qualityDoubled)}`
    ).white(),
    Text.of(" "),
    Text.translatable("tooltip.society.stack_value")
      .gray()
      .append(
        hasMultipliers
          ? Text.translatable("tooltip.society.multipliers")
          : Text.empty()
      ),
  ]);
  bonusTooltips.forEach((bonus, index) => {
    text.add(2 + index, [bonus]);
  });
  if (attributeMult > 1) {
    text.add(bonusTooltips.length + 2, [
      getAttributeText(attribute),
      Text.green(` +${Math.round((attributeMult - 1) * 100)}%`),
    ]);
  } else {
    text.add(bonusTooltips.length + 2, [getAttributeText(attribute)]);
  }
};

const getAttributeText = (attribute) => {
  switch (attribute) {
    case "crop":
      return Text.translatable("tooltip.society.farmer_product").gold();
    case "wood":
      return Text.translatable("tooltip.society.artisan_product").gold();
    case "gem":
      return Text.translatable("tooltip.society.geologist_product").gold();
    case "meat":
      return Text.translatable("tooltip.society.adventurer_product").gold();
    default:
      console.log(`Invalid attribute`);
  }
};
global.addPriceTooltip = (tooltip, sellable, attribute) => {
  let value = global.getConfiguredValue(sellable.value, attribute);
  tooltip.addAdvanced(sellable.item, (item, advanced, text) => {
    let quality;
    if (item.nbt && item.nbt.quality_food) {
      quality = item.nbt.quality_food.quality;
    }
    if (tooltip.shift) {
      getStackBonusValueTooltips(text, value, item, attribute, quality);
    } else {
      text.add(1, [
        Text.translatable(
          "tooltip.society.coins",
          `${formatNumber(value, quality)}`
        ).white(),
        Text.of(" "),
        Text.translatable(
          "tooltip.society.hold_key",
          Text.translatable("key.keyboard.shift").gray()
        ).darkGray(),
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
      if (!coin.includes("_coin")) {
        text.remove(1);
      }
      if (tooltip.shift) {
        text.add(1, [
          Text.translatable(
            "tooltip.society.coins",
            `${calculateCost(coin.path, 1, item.count)}`
          ).white(),
          Text.of(" "),
          Text.translatable("tooltip.society.stack_value").gray(),
        ]);
      } else {
        text.add(1, [
          Text.translatable(
            "tooltip.society.coins",
            `${calculateCost(coin.path, 1, 1)}`
          ).white(),
          Text.of(" "),
          Text.translatable(
            "tooltip.society.hold_key",
            Text.translatable("key.keyboard.shift").gray()
          ).darkGray(),
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
        Text.translatable(
          "tooltip.society.coins",
          `${formatNumber(price, 0)}`
        ).white(),
        Text.of(" "),
        Text.translatable(
          "tooltip.society.hold_key",
          Text.translatable("key.keyboard.shift").gray()
        ).darkGray(),
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
        Text.translatable(
          "tooltip.society.coins",
          `${formatNumber(price, 0)}`
        ).white(),
        Text.of(" "),
        Text.translatable(
          "tooltip.society.hold_key",
          Text.translatable("key.keyboard.shift").gray()
        ).darkGray(),
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
    global.addPriceTooltip(tooltip, geodeItem, "gem");
    tooltip.add(
      geodeItem.item,
      Text.translatable("tooltip.society.item_type.mineral").gray()
    );
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    global.addPriceTooltip(tooltip, geodeItem, "gem");
    tooltip.add(
      geodeItem.item,
      Text.translatable("tooltip.society.item_type.mineral").gray()
    );
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    global.addPriceTooltip(tooltip, geodeItem, "gem");
    tooltip.add(
      geodeItem.item,
      Text.translatable("tooltip.society.item_type.mineral").gray()
    );
  });
  // Gem
  global.gems.forEach((gem) => {
    global.addPriceTooltip(tooltip, gem, "gem");
    tooltip.add(
      gem.item,
      Text.translatable("tooltip.society.item_type.gem").gray()
    );
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
    tooltip.add(gem, Text.translatable("tooltip.society.item_type.gem").gray());
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
