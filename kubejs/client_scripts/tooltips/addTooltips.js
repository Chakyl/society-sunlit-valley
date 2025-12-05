ItemEvents.tooltip((tooltip) => {
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
  const getAttributeStr = (attribute) => {
    switch (attribute) {
      case "crop":
        return Text.translate("society.tooltip.attribute_farmer");
      case "wood":
        return Text.translate("society.tooltip.attribute_artisan");
      case "gem":
        return Text.translate("society.tooltip.attribute_gem");
      case "meat":
        return Text.translate("society.tooltip.attribute_adventurer");
      default:
        console.log(`Invalid attribute`);
    }
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
          Text.white(`● ${calculateCost(coin.split(":")[1], 1, item.count)}`),
          Text.translate("society.tooltip.stack_value").gray(),
        ]);
      } else {
        text.add(1, [
          Text.white(`● ${calculateCost(coin.split(":")[1], 1, 1)}`),
          Text.translate("society.tooltip.shift_prefix").darkGray(),
          Text.translate("key.keyboard.shift").gray(),
          Text.translate("society.tooltip.shift_suffix").darkGray(),
        ]);
      }
    });
  });

  global.plushies.forEach((plush) => {
    tooltip.addAdvanced(plush, (item, advanced, text) => {
      if (item.nbt) {
        if (item.nbt.getCompound("quality_food"))
          text.add(1, [
            Text.translate("society.tooltip.rarity"),
            Text.gold(
              "★".repeat(
                item.nbt.getCompound("quality_food").getInt("quality") + 1
              )
            ),
            Text.gray(
              "☆".repeat(
                3 - item.nbt.getCompound("quality_food").getInt("quality")
              )
            ),
          ]);
        else text.add(1, [Text.gray("☆".repeat(4))]);
        let type = global.plushieTraits[Number(item.nbt.getInt("type"))];
        text.add(2, [
          Text.translate("society.tooltip.trait"),
          `§${type.color}${global.formatName(type.trait)}`,
        ]);
        let affection = item.nbt.getInt("affection");
        text.add(3, [
          Text.translate("society.tooltip.affection"),
          `§c${affection > 0 ? `❤`.repeat(affection) : ""}§7${affection < 4 ? `❤`.repeat(4 - affection) : ""
          }`,
        ]);
        text.add(4, [Text.translate("society.tooltip.plushie")]);
      } else {
        text.add(1, [Text.translate("society.tooltip.plushie")]);
      }
    });
  });

  const artifactTooltips = [
    {
      item: "society:froggy_helm",
      tooltip: "There's a large tongue nestled inside",
    },
    {
      item: "society:ribbit_drum",
      tooltip: "Nitwit Ribbits love to bang on this",
    },
    { item: "society:ribbit_gadget", tooltip: "society.tooltip.item.ribbit_gadget" },
    { item: "society:legendary_ink", tooltip: "society.tooltip.item.legendary_ink" },
    { item: "society:holy_symbol", tooltip: "society.tooltip.item.holy_symbol" },
    {
      item: "society:ember_crystal_cluster",
      tooltip: "society.tooltip.item.ember_crystal_cluster",
    },
    { item: "society:living_flesh", tooltip: "society.tooltip.item.living_flesh" },
    { item: "society:source_gem", tooltip: "society.tooltip.item.source_gem" },
    {
      item: "society:spider_silk",
      tooltip: "society.tooltip.item.spider_silk",
    },
    {
      item: "society:wheel_of_adaptation",
      tooltip: "society.tooltip.item.wheel_of_adaptation",
    },
    {
      item: "society:toy_train",
      tooltip: "society.tooltip.item.toy_train",
    },
    {
      item: "society:perfect_cherry",
      tooltip: "society.tooltip.item.perfect_cherry",
    },
    {
      item: "society:mini_oni_eye",
      tooltip: "society.tooltip.item.mini_oni_eye",
    },
    { item: "society:glitched_vhs", tooltip: "society.tooltip.item.glitched_vhs" },
    {
      item: "society:production_science_pack",
      tooltip: "society.tooltip.item.production_science_pack",
    },
    {
      item: "society:beemonican_seal",
      tooltip: "society.tooltip.item.beemonican_seal",
    },
    {
      item: "society:steamy_gadget",
      tooltip: "society.tooltip.item.steamy_gadget",
    },
    {
      item: "society:aquamagical_dust",
      tooltip: "society.tooltip.item.aquamagical_dust",
    },
    {
      item: "society:princess_hairbrush",
      tooltip: "society.tooltip.item.princess_hairbrush",
    },
    {
      item: "society:heart_of_neptunium",
      tooltip: "society.tooltip.item.heart_of_neptunium",
    },
  ];
  artifactTooltips.forEach((artifact) => {
    tooltip.add(artifact.item, Text.translate(artifact.tooltip).darkPurple());
    tooltip.add(artifact.item, Text.gray("🪣 Artifact"));
  });
  [
    {
      item: "society:animal_fancy",
      description: "society.tooltip.item.animal_fancy",
    },
    {
      item: "society:banana_karenina",
      description: "society.tooltip.item.banana_karenina",
    },
    {
      item: "society:brine_and_punishment",
      description: "society.tooltip.item.brine_and_punishment",
    },
    {
      item: "society:bluegill_meridian",
      description: "society.tooltip.item.bluegill_meridian",
    },
    {
      item: "society:hitting_hard_and_soft",
      description: "society.tooltip.item.hitting_hard_and_soft",
    },
    {
      item: "society:canadian_and_famous",
      description: "society.tooltip.item.canadian_and_famous",
    },
    {
      item: "society:first_aid_guide",
      description: "society.tooltip.item.first_aid_guide",
    },
    {
      item: "society:intro_to_algorithms",
      description: "society.tooltip.item.intro_to_algorithms",
    },
    {
      item: "society:no_name_for_the_sheep",
      description: "society.tooltip.item.no_name_for_the_sheep",
    },
    {
      item: "society:paradise_crop",
      description: "society.tooltip.item.paradise_crop",
    },
    {
      item: "society:slime_contain_protect",
      description:
        "society.tooltip.item.slime_contain_protect",
    },
    {
      item: "society:slouching_towards_artistry",
      description:
        "society.tooltip.item.slouching_towards_artistry",
    },
    {
      item: "society:debt_caverns",
      description:
        "society.tooltip.item.debt_caverns",
    },
    {
      item: "society:phenomenology_of_treasure",
      description: "society.tooltip.item.phenomenology_of_treasure",
    },
    {
      item: "society:frogs_bounty_bazaar",
      description: "society.tooltip.item.frogs_bounty_bazaar",
    },
    {
      item: "society:bullfish_jobs",
      description:
        "society.tooltip.item.bullfish_jobs",
    },
    {
      item: "society:wuthering_logs",
      description: "society.tooltip.item.wuthering_logs",
    },
    {
      item: "society:the_spark_also_rises",
      description: "society.tooltip.item.the_spark_also_rises",
    },
    {
      item: "society:universal_methods_of_farming",
      description: "society.tooltip.item.universal_methods_of_farming",
    },
  ].forEach((book) => {
    tooltip.add(book.item, Text.translate(book.description).gray());
    tooltip.add(book.item, Text.translate("society.tooltip.right_click_to_learn").green());
  });
  tooltip.addAdvanced("society:fish_pond", (item, advanced, text) => {
    if (item.nbt) {

      text.add(
        1,
        Text.translate("society.tooltip.fish_prefix", [global.fishPondDefinitions[item.nbt.get("type") - 1].item]).aqua()
      );
      text.add(
        2,
        Text.translate("society.tooltip.fish_population", [item.nbt.get("population"), item.nbt.get("max_population")]).aqua()
      );
    } else {
      text.add(1, Text.translate("society.tooltip.fish_pond_info_1").gray());
      text.add(2, Text.translate("society.tooltip.fish_pond_info_2").gray());
      text.add(
        3,
        Text.translate("society.tooltip.fish_pond_info_3").gray()
      );
      text.add(4, Text.translate("society.tooltip.fish_pond_info_4").darkAqua());
    }
  });
  tooltip.add(
    "simplerecall:recall_potion",
    Text.translate("society.tooltip.item.teleport_potion").gray()
  );
  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.translate("society.tooltip.item.phone_info_1").gray()
  );

  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.translate("society.tooltip.item.phone_info_2").green()
  );
  // Furniture
  tooltip.add(
    "tanukidecor:diy_workbench",
    Text.translate("society.tooltip.item.diy_workbench").gray()
  );
  tooltip.add("society:tanuki_catalog", [
    Text.gray(Text.translate("society.tooltip.catalog_info_1", [2])),
    Text.gray(Text.translate("society.tooltip.catalog_info_2", ["§aTanuki Leaf§r."])),
    Text.gray(Text.translate("society.tooltip.catalog_info_3")),
  ]);
  tooltip.add("society:modern_catalog", [
    Text.gray(Text.translate("society.tooltip.catalog_info_1", [6])),
    Text.gray(Text.translate("society.tooltip.catalog_info_2", ["§fArchitect's Digest§r."])),
    Text.gray(Text.translate("society.tooltip.catalog_info_3")),
  ]);
  tooltip.add("society:fantasy_catalog", [
    Text.gray(Text.translate("society.tooltip.catalog_info_1", [4])),
    Text.gray(Text.translate("society.tooltip.catalog_info_2", ["§eFantasy Dust§r."])),
    Text.gray(Text.translate("society.tooltip.catalog_info_3")),
  ]);

  global.lootFurniture.forEach((item) => {
    tooltip.add(item, Text.translate("society.tooltip.rare_furniture_drop").aqua());
    if (!item.includes("tanuki") && !item.includes("whimsy_deco")) {
      tooltip.add(item, Text.translate("society.tooltip.modern_collection").white());
    } else {
      tooltip.add(item, Text.translate("society.tooltip.tanuki_collection").white());
    }
  });
  tooltip.add(
    "society:architects_digest",
    Text.translate("society.tooltip.used_to_craft_modern_furniture").gray()
  );
  tooltip.add(
    "society:tanuki_leaf",
    Text.translate("society.tooltip.used_to_craft_tanuki_furniture").gray()
  );
  tooltip.add(/fantasyfurniture/, Text.translate("society.tooltip.fantasy_collection").white());
  tooltip.add(
    "society:fantasy_dust",
    Text.translate("society.tooltip.fantasy_collection_info").gray()
  );
  // Hammers
  tooltip.add(
    "justhammers:small_core",
    Text.translate("society.tooltip.item.justhammers_small_core").gray()
  );
  tooltip.add(
    "justhammers:impact_core",
    Text.translate("society.tooltip.item.justhammers_impact_core").gray()
  );
  // Upgrades:
  tooltip.add(
    "society:ancient_cog",
    Text.translate("society.tooltip.ancient_cog").green()
  );
  tooltip.add(
    "society:pink_matter",
    Text.translate("society.tooltip.pink_matter").green()
  );
  tooltip.add(
    "society:pink_matter",
    Text.translate("society.tooltip.pink_matter_info").red()
  );
  tooltip.add(
    "society:stone_hand",
    Text.translate("society.tooltip.stone_hand").green()
  );
  tooltip.add(
    "society:broken_clock",
    Text.translate("society.tooltip.broken_clock").green()
  );
  tooltip.add(
    "society:sea_biscut",
    Text.translate("society.tooltip.sea_biscut").green()
  );
  tooltip.add(
    "society:black_opal",
    Text.translate("society.tooltip.black_opal").green()
  );
  tooltip.add(
    "society:enkephalin",
    Text.translate("society.tooltip.enkephalin").green()
  );
  tooltip.add(
    "society:tiny_gnome",
    Text.translate("society.tooltip.tiny_gnome").green()
  );
  tooltip.add(
    "society:ancient_roe",
    Text.translate("society.tooltip.ancient_roe").green()
  );
  tooltip.add(
    "society:frosted_tip",
    Text.translate("society.tooltip.frosted_tip").green()
  );
  tooltip.add(
    "society:infinity_worm",
    Text.translate("society.tooltip.infinity_worm").green()
  );
  tooltip.add(
    "society:inserter",
    Text.translate("society.tooltip.inserter").green()
  );
  tooltip.add(
    "society:cordycep",
    Text.translate("society.tooltip.cordycep").green()
  );
  tooltip.add(
    [
      "vintagedelight:gearo_berry",
      "minecraft:sweet_berries",
      "windswept:wild_berries",
      "farmersdelight:rice",
    ],
    Text.translate("society.tooltip.will_only_grow_when_planted_on_farmland").gray()
  );
  // Misc
  tooltip.add(
    [
      "botania:agricarnation",
      "botania:agricarnation_chibi",
      "botania:floating_agricarnation",
      "botania:floating_agricarnation_chibi",
    ],
    Text.translate("society.tooltip.does_not_work_on_farmland_crops").darkRed()
  );
  tooltip.add(
    "numismatics_utils:bank_meter",
    Text.translate("society.tooltip.item.bank_meter").gray()
  );
  tooltip.add("society:bank_meter", Text.translate("society.tooltip.removed_craft_into_new_one").red());
  tooltip.add(
    "society:fish_radar",
    Text.translate("society.tooltip.item.fish_radar").gray()
  );
  tooltip.add(
    "tradingpost:trading_post",
    Text.translate("society.tooltip.item.trading_post").gray()
  );
  tooltip.add(
    "society:magic_rope",
    Text.translate("society.tooltip.item.magic_rope").gray()
  );
  tooltip.add(
    "society:magic_rope",
    Text.translate("society.tooltip.item.magic_rope_info").red()
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.translate("society.tooltip.item.magic_tunnel").gray()
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.translate("society.tooltip.item.magic_tunnel_info").red()
  );
  // Fertilizers
  tooltip.add(
    "dew_drop_farmland_growth:weak_fertilizer",
    Text.translate("society.tooltip.item.weak_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:strong_fertilizer",
    Text.translate("society.tooltip.item.strong_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:hyper_fertilizer",
    Text.translate("society.tooltip.item.hyper_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:hydrating_fertilizer",
    Text.translate("society.tooltip.item.hydrating_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:deluxe_hydrating_fertilizer",
    Text.translate("society.tooltip.item.deluxe_hydrating_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.translate("society.tooltip.item.bountiful_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.translate("society.tooltip.item.bountiful_fertilizer_info").red()
  );
  tooltip.add(
    "dew_drop_farmland_growth:low_quality_fertilizer",
    Text.translate("society.tooltip.item.low_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:high_quality_fertilizer",
    Text.translate("society.tooltip.item.high_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:pristine_quality_fertilizer",
    Text.translate("society.tooltip.item.pristine_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.translate("society.tooltip.item.garden_pot").gray()
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.translate("society.tooltip.item.garden_pot_info").green()
  );
  tooltip.add(
    "minecraft:fishing_rod",
    Text.translate("society.tooltip.item.fishing_rod").gray()
  );
  tooltip.add(
    "etcetera:handbell",
    Text.translate("society.tooltip.item.handbell").gray()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translate("society.tooltip.item.pitchfork").gray()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translate("society.tooltip.item.pitchfork_info").green()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translate("society.tooltip.does_not_work_on_hydrating_farmland").red()
  );
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.translate("society.tooltip.silo_info_1").gray()
  );
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.translate("society.tooltip.silo_info_2").green()
  );
  tooltip.add(
    "farmersdelight:cooking_pot",
    Text.translate("society.tooltip.item.cooking_pot").green()
  );
  tooltip.add(
    "meadow:cooking_cauldron",
    Text.translate("society.tooltip.item.cooking_cauldron").gray()
  );
  tooltip.add(
    "candlelight:cooking_pot",
    Text.translate("society.tooltip.item.cooking_pot_info").gray()
  );
  tooltip.add(
    [
      "candlelight:red_nether_bricks_stove",
      "candlelight:quartz_stove",
      "candlelight:mud_stove",
      "candlelight:cobblestone_stove",
      "farm_and_charm:stove",
      "candlelight:stone_bricks_stove",
      "candlelight:bamboo_stove",
      "candlelight:basalt_stove",
      "candlelight:end_stove",
      "candlelight:sandstone_stove",
      "candlelight:deepslate_stove",
      "candlelight:granite_stove",
    ],
    Text.translate("society.tooltip.has_built_in_oven").green()
  );

  tooltip.add(
    [
      "oreganized:silver_ore",
      "oreganized:deepslate_silver_ore",
      "oreganized:lead_ore",
      "oreganized:deepslate_lead_ore",
      "minecraft:ancient_debris",
    ],
    Text.translate("society.tooltip.spawns_exclusively_in_the_skull_cavern").gold()
  );
  tooltip.add(
    [
      "society:bait_maker",
      "society:aging_cask",
      "society:ancient_cask",
      "society:charging_rod",
      "society:crystalarium",
      "society:deluxe_worm_farm",
      "society:dehydrator",
      "society:espresso_machine",
      "society:fish_pond",
      "society:fish_smoker",
      "society:loom",
      "society:mayonnaise_machine",
      "society:preserves_jar",
      "society:seed_maker",
      "society:tapper",
      "society:recycling_machine",
      "society:cheese_press",
    ],
    Text.translate("society.tooltip.artisan_machine")
  );
  tooltip.add(
    [
      "minecraft:milk_bucket",
      "meadow:wooden_milk_bucket",
      "meadow:wooden_sheep_milk_bucket",
      "meadow:wooden_warped_milk_bucket",
      "meadow:wooden_buffalo_milk_bucket",
      "meadow:wooden_goat_milk_bucket",
    ],
    Text.translate("society.tooltip.unobtainable_use_milking_pail").red()
  );
  ["society:large_warped_milk", "society:warped_milk"].forEach((milk) => {
    tooltip.add(
      milk,
      Text.translate("society.tooltip.warped_milk_info").aqua()
    );
  });
  tooltip.add(
    "society:fine_wool",
    Text.translate("society.tooltip.item.fine_wool").gray()
  );
  tooltip.add(
    "society:truffle",
    Text.translate("society.tooltip.item.truffle").gray()
  );
  tooltip.add("society:milk_pail", Text.translate("society.tooltip.item.milk_pail").gray());
  tooltip.add("society:tubasmoke_stick", Text.translate("society.tooltip.item.tubasmoke_stick").gray());
  tooltip.add("society:tubasmoke_stick", Text.translate("society.tooltip.item.tubasmoke_stick_info").red());
  tooltip.add(
    "society:cornucopia",
    Text.translate("society.tooltip.item.cornucopia").gray()
  );
  tooltip.add(
    "society:animal_feed",
    Text.translate("society.tooltip.item.animal_feed").gray()
  );
  tooltip.add(
    "society:candied_animal_feed",
    Text.translate("society.tooltip.item.candied_animal_feed").gray()
  );
  tooltip.add(
    "society:candied_animal_feed",
    Text.translate("society.tooltip.item.candied_animal_feed_info").green()
  );
  tooltip.add(
    "society:mana_feed",
    Text.translate("society.tooltip.item.mana_feed").gray()
  );
  tooltip.add(
    "society:mana_feed",
    Text.translate("society.tooltip.item.mana_feed_info").green()
  );
  tooltip.add(
    "society:animal_feed_sack",
    Text.translate("society.tooltip.item.animal_feed_sack").red()
  );
  tooltip.add(
    "society:magic_shears",
    Text.translate("society.tooltip.item.magic_shears").gray()
  );
  tooltip.add("vintagedelight:deluxe_burger", Text.translate("society.tooltip.item.deluxe_burger").gray());
  tooltip.add(
    "society:magic_shears",
    Text.translate("society.tooltip.item.magic_shears").gray()
  );
  tooltip.add(
    "society:magic_shears",
    Text.translate("society.tooltip.item.magic_shears_info").red()
  );
  tooltip.add(
    "society:miracle_potion",
    Text.translate("society.tooltip.item.miracle_potion").gray()
  );
  tooltip.add(
    "meadow:cheese_stick",
    Text.translate("society.tooltip.item.cheese_stick").gray()
  );
  tooltip.add(
    "meadow:cheese_form",
    Text.translate("society.tooltip.item.cheese_form").gray()
  );
  tooltip.add("meadow:cheese_form", Text.translate("society.tooltip.item.cheese_form_info").green());
  tooltip.add(
    "society:friendship_necklace",
    Text.translate("society.tooltip.item.friendship_necklace").gray()
  );
  tooltip.add(
    "society:frozen_tear",
    Text.translate("society.tooltip.item.frozen_tear").gray()
  );
  tooltip.add(
    "liltractor:liltractor",
    Text.translate("society.tooltip.liltractor_info_1").gray()
  );
  tooltip.add(
    "liltractor:liltractor",
    Text.translate("society.tooltip.liltractor_info_2").gray()
  );
  tooltip.add(
    ["displaydelight:food_plate", "displaydelight:small_food_plate"],
    Text.translate("society.tooltip.displays_certain_farmers_delight_foods_as_blocks").gray()
  );
  tooltip.add("liltractor:liltractor", Text.translate("society.tooltip.dyeable").gray());
  tooltip.add(
    "society:prize_ticket",
    Text.translate("society.tooltip.item.prize_ticket_info").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_ticket",
    Text.translate("society.tooltip.slime_ticket_info").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_candy",
    Text.translate("society.tooltip.slime_candy_info").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_feeder",
    Text.translate("society.tooltip.slime_feeder_info").gray()
  );
  tooltip.add("splendid_slimes:slime_feeder", Text.translate("society.tooltip.slime_feeder_area").green());
  tooltip.add("create:creative_blaze_cake", Text.translate("society.tooltip.item.creative_blaze_cake_info").gray());
  tooltip.add(
    "tanukidecor:slot_machine",
    Text.translate("society.tooltip.right_click_with_any_legal_tender").gray()
  );
  tooltip.add(
    "whimsy_deco:statue_endless_fortune",
    Text.translate("society.tooltip.gives_a_valuable_item_once_a_day").gray()
  );
  tooltip.add(
    "whimsy_deco:statue_endless_fortune",
    Text.translate("society.tooltip.item.statue_endless_fortune_info").red()
  );
  tooltip.add(
    "whimsy_deco:gatcha_machine",
    Text.translate("society.tooltip.item.gatcha_machine").gray()
  );
  tooltip.add(
    "society:relic_trove",
    Text.translate("society.tooltip.can_be_opened_using_extractinator").gray()
  );
  tooltip.add(
    "society:artifact_trove",
    Text.translate("society.tooltip.can_be_opened_using_extractinator").gray()
  );
  tooltip.add(
    "society:geode_buster",
    Text.translate("society.tooltip.item.geode_buster").gray()
  );
  tooltip.add(
    "society:dragontooth_axe",
    Text.translate("society.tooltip.item.dragontooth_axe").red()
  );
  tooltip.add("botania:apothecary_default", Text.translate("society.tooltip.abandoned_farm_reward").gray());
  tooltip.add(
    "society:kinetic_blueprint",
    Text.translate("society.tooltip.item.kinetic_blueprint").gray()
  );
  tooltip.add(
    "society:kinetic_blueprint",
    Text.translate("society.tooltip.item.kinetic_blueprint_info").green()
  );
  tooltip.add("society:kinetic_blueprint", Text.translate("society.tooltip.boiler_room_reward").gray());
  tooltip.add("society:skull_cavern_teleporter", Text.translate("society.tooltip.vault_reward").gray());
  tooltip.add("relics:magic_mirror", Text.translate("society.tooltip.crafts_room_reward").gray());

  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.translate("society.tooltip.item.greenhouse_glass").gray()
  );
  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.translate("society.tooltip.item.greenhouse_glass_range").green()
  );

  tooltip.add("vinery:apple_tree_sapling", Text.translate("society.tooltip.fruit_season_label"));
  tooltip.add("vinery:apple_tree_sapling", Text.translate("society.tooltip.fruit_season_autumn").gold());

  tooltip.add("vinery:dark_cherry_sapling", Text.translate("society.tooltip.fruit_season_label"));
  tooltip.add("vinery:dark_cherry_sapling", Text.translate("society.tooltip.fruit_season_spring").green());
  tooltip.add("society:plushie_capsule", Text.translate("society.tooltip.right_click_to_open").gray());
  tooltip.add("society:furniture_box", Text.translate("society.tooltip.right_click_to_open").gray());
  tooltip.add("furniture:bin", Text.translate("society.tooltip.deletes_any_items_you_click_into_it").red());
  tooltip.add("furniture:bin", Text.translate("society.tooltip.creates_trash_bags").green());
  tooltip.add(
    "furniture:trash_bag",
    Text.translate("society.tooltip.created_from_trashing_items_in_a_bin").gray()
  );
  tooltip.add("society:bouquet_bag", Text.translate("society.tooltip.item.bouquet_bag").green());
  tooltip.add("society:bouquet_bag", Text.translate("society.tooltip.right_click_to_open").gray());
  tooltip.add("society:scavenged_food_bag", Text.translate("society.tooltip.right_click_to_open").gray());
  tooltip.add(
    "gag:time_sand_pouch",
    Text.translate("society.tooltip.removed_corrupts_world_when_used_on_artisan_machines").red()
  );
  tooltip.add(
    "extractinator:extractinator",
    Text.translate("society.tooltip.right_click_with_a_geode_to_process").gray()
  );
  tooltip.add(
    "extractinator:extractinator",
    Text.translate("society.tooltip.shift_right_click_to_process_stack").gray()
  );
  tooltip.add(
    "pipez:item_pipe",
    Text.translate("society.tooltip.can_be_configured_to_extract_using_the_create_mod_wrench").gray()
  );
  tooltip.add(
    "moreminecarts:chunk_loader",
    Text.translate("society.tooltip.removed_craft_into_money_for_your_refund").red()
  );
  tooltip.add(
    "vintagedelight:evaporator",
    Text.translate("society.tooltip.place_next_to_water_to_make_salt").gray()
  );
  tooltip.add(
    "farmersdelight:rich_soil",
    Text.translate("society.tooltip.grows_colonies_from_red_and_brown_mushrooms_planted_on_it").gray()
  );
  tooltip.addAdvanced("farmersdelight:tomato_seeds", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(1, [
        Text.white("Fertile Seasons:"),
        Text.green(" Spring,"),
        Text.yellow(" Summer,"),
        Text.gold(" Autumn"),
      ]);
      text.add(1, []);
    } else {
      text.add(1, [
        Text.translate("society.tooltip.shift_prefix").darkGray(),
        Text.translate("key.keyboard.shift").gray(),
        Text.translate("society.tooltip.shift_suffix").darkGray(),
      ]);
    }
  });
  tooltip.addAdvanced(
    "farm_and_charm:strawberry_seed",
    (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [Text.white("Fertile Seasons:"), Text.green(" Spring")]);
        text.add(1, []);
      } else {
        text.add(1, [
          Text.translate("society.tooltip.shift_prefix").darkGray(),
          Text.translate("key.keyboard.shift").gray(),
          Text.translate("society.tooltip.shift_suffix").darkGray(),
        ]);
      }
    }
  );
  tooltip.add(
    "relics:jellyfish_necklace",
    Text.translate("society.tooltip.item.jellyfish_necklace").red()
  );

  tooltip.add("society:river_jelly", Text.translate("society.tooltip.fished_up_in_river_biomes").blue());
  tooltip.add(
    "society:ocean_jelly",
    Text.aqua("Fished up in Ocean & Beach biomes")
  );
  tooltip.add("society:nether_jelly", Text.translate("society.tooltip.fished_up_in_nether_biomes").gold());
  const craftingMaterials = [
    "society:fire_quartz",
    "society:earth_crystal",
    "society:oak_resin",
    "society:pine_tar",
    "society:aquamarine",
    "society:jade",
    "society:river_jelly",
    "society:nether_jelly",
    "society:ocean_jelly",
  ];
  craftingMaterials.forEach((item) => {
    tooltip.add(item, Text.translate("society.tooltip.crafting_material").gray());
  });
  // Prize Machine
  tooltip.add(
    [
      "minecraft:eye_armor_trim_smithing_template",
      "pamhc2trees:hazelnut_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:pawpaw_sapling",
      "pamhc2trees:passionfruit_sapling",
      "etcetera:eggple",
      "etcetera:golden_eggple",
    ],
    Text.translate("society.tooltip.prize_machine_reward").gray()
  );
  const workstation = [
    { villager: "society.tooltip.villager.bard", block: "minecraft:note_block" },
    { villager: "society.tooltip.villager.storagesmith", block: "minecraft:grindstone" },
    { villager: "society.tooltip.villager.fisher", block: "minecraft:barrel" },
    { villager: "society.tooltip.villager.shepherd", block: "minecraft:loom" },
    { villager: "society.tooltip.villager.leatherworker", block: "minecraft:cauldron" },
    { villager: "society.tooltip.villager.blacksmith", block: "minecraft:smithing_table" },
    { villager: "society.tooltip.villager.librarian", block: "minecraft:lectern" },
    { villager: "society.tooltip.villager.cleric", block: "minecraft:brewing_stand" },
    { villager: "society.tooltip.villager.farmer", block: "minecraft:composter" },
    { villager: "society.tooltip.villager.banker", block: "minecraft:cartography_table" },
    { villager: "society.tooltip.villager.master_cultivator", block: "candlelight:cooking_pot" },
    { villager: "society.tooltip.villager.barkeeper", block: "beachparty:tiki_bar" },
    { villager: "society.tooltip.villager.exotic_trader", block: "minecraft:fletching_table" },
    { villager: "society.tooltip.villager.mystical_botanist", block: "beautify:botanist_workbench" },
  ];
  workstation.forEach((station) => {
    const { villager, block } = station;
    tooltip.add(block, Text.translate("society.tooltip.workstation", [Text.translate(villager)]).gray());
  });
  Item.of("farm_and_charm:barley", "{quality_food:{quality:3}}");
  // Prices
  const addPriceTooltip = (sellable, attribute) => {
    let value = sellable.value;
    tooltip.addAdvanced(sellable.item, (item, advanced, text) => {
      let quality;
      if (item.nbt && item.nbt.quality_food) {
        quality = item.nbt.quality_food.quality;
      }
      if (tooltip.shift) {
        text.add(1, [
          Text.white(`● ${formatNumber(value * item.count, quality)}`),
          Text.translate("society.tooltip.stack_value").gray(),
        ]);
        text.add(2, [getAttributeStr(attribute)]);
      } else {
        text.add(1, [
          Text.white(`● ${formatNumber(value, quality)}`),
          Text.translate("society.tooltip.shift_prefix").darkGray(),
          Text.translate("key.keyboard.shift").gray(),
          Text.translate("society.tooltip.shift_suffix").darkGray(),
        ]);
      }
    });
  };

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
      text.add(1, [
        Text.white(`● ${formatNumber(price * item.count, 0)}`),
        Text.translate("society.tooltip.stack_value").gray(),
      ]);
      text.add(2, [getAttributeStr("crop")]);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),

        Text.translate("society.tooltip.shift_prefix").darkGray(),
        Text.translate("key.keyboard.shift").gray(),
        Text.translate("society.tooltip.shift_suffix").darkGray(),
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
      text.add(1, [
        Text.white(`● ${formatNumber(price * item.count, 0)}`),
        Text.translate("society.tooltip.stack_value").gray(),
      ]);
      text.add(2, [getAttributeStr("crop")]);
    } else {
      text.add(1, [
        Text.white(`● ${formatNumber(price, 0)}`),

        Text.translate("society.tooltip.shift_prefix").darkGray(),
        Text.translate("key.keyboard.shift").gray(),
        Text.translate("society.tooltip.shift_suffix").darkGray(),
      ]);
    }
  });

  // Ore
  global.ore.forEach((item) => {
    addPriceTooltip(item, "gem");
  });
  // Pristine
  global.pristine.forEach((item) => {
    addPriceTooltip(item, "gem");
  });
  // Geodes
  global.geodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:froggy_helm") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.translate("society.tooltip.label_mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_drum") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.translate("society.tooltip.label_mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    if (geodeItem.item !== "society:ribbit_gadget") {
      addPriceTooltip(geodeItem, "gem");
      tooltip.add(geodeItem.item, Text.translate("society.tooltip.label_mineral"));
    } else {
      addPriceTooltip(geodeItem, "meat");
    }
  });
  // Gem
  global.gems.forEach((gem) => {
    addPriceTooltip(gem, "gem");
    tooltip.add(gem.item, Text.translate("society.tooltip.label_gem"));
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
    tooltip.add(gem, Text.translate("society.tooltip.label_gem"));
  });
  global.miscGeologist.forEach((gem) => {
    addPriceTooltip(gem, "gem");
  });
  // Artifact
  global.artifacts.forEach((artifact) => {
    addPriceTooltip(artifact, "meat");
  });
  global.relics.forEach((artifact) => {
    addPriceTooltip(artifact, "meat");
  });
  // Crops
  global.crops.forEach((crop) => {
    addPriceTooltip(crop, "crop");
  });
  // Meat
  global.animalProducts.forEach((meat) => {
    addPriceTooltip(meat, "crop");
  });
  // Wines
  global.wines.forEach((wine) => {
    addPriceTooltip(wine, "wood");
  });
  // Brews
  global.brews.forEach((brew) => {
    addPriceTooltip(brew, "wood");
  });
  // Preserves
  global.preserves.forEach((jar) => {
    addPriceTooltip(jar, "wood");
  });
  // Dehydrated
  global.dehydrated.forEach((jar) => {
    addPriceTooltip(jar, "wood");
  });
  // Artisan goods
  global.artisanGoods.forEach((good) => {
    addPriceTooltip(good, "wood");
  });
  // Fish
  global.fish.forEach((fish) => {
    addPriceTooltip(fish, "crop");
  });
  global.smokedFish.forEach((fish) => {
    addPriceTooltip(fish, "wood");
  });
  global.agedRoe.forEach((fish) => {
    addPriceTooltip(fish, "wood");
  });
  // Cocktails
  global.cocktails.forEach((cocktail) => {
    addPriceTooltip(cocktail, "crop");
  });
  // herbalbrews
  global.herbalBrews.forEach((brew) => {
    addPriceTooltip(brew, "crop");
  });
  // Logs
  global.logs.forEach((log) => {
    addPriceTooltip(log, "crop");
  });
  // Cooking
  global.cooking.forEach((dish) => {
    addPriceTooltip(dish, "crop");
  });
  // Misc
  global.miscAdventurer.forEach((miscItem) => {
    addPriceTooltip(miscItem, "meat");
  });
  const geodes = [
    "society:geode",
    "society:frozen_geode",
    "society:magma_geode",
    "society:omni_geode",
  ];
  geodes.forEach((geode) => {
    tooltip.add(
      geode,
      Text.translate("society.tooltip.geode_info").gray()
    );
  });
  tooltip.addAdvanced("society:car_key", (item, advanced, text) => {
    text.add(1, [
      Text.translate("society.tooltip.item.car_key").gray(),
    ]);
    if (item.nbt) {
      text.add(2, [Text.translate("society.tooltip.car_parked").green()]);
    } else {
      text.add(2, [Text.translate("society.tooltip.no_car_parked").red()]);
    }
  });
  const getPigColor = (pig) => {
    switch (pig) {
      case "Red":
        return "c";
      case "Blue":
        return "b";
      case "Yellow":
        return "e";
      case "Green":
        return "a";
      default:
        console.log(`Invalid pig color`);
    }
    return;
  };
  tooltip.addAdvanced(
    ["society:pig_race_ticket", "society:multiplayer_pig_race_ticket"],
    (item, advanced, text) => {
      text.add(1, [
        Text.gold(Text.translate("society.tooltip.pig_race_ticket_info")),
      ]);
      text.add(2, [
        Text.gold(Text.translate("society.tooltip.pig_race_ticket_info_2")),
      ]);
      if (item.nbt) {
        text.add(3, [
          Text.translate("society.tooltip.betting_on_pig", [`§${getPigColor(item.nbt.bet)}${item.nbt.bet}`]).gray(),
        ]);
      } else {
        text.add(3, [Text.translate("society.tooltip.no_pig_selected").gray()]);
      }
    }
  );
  // Translocators
  tooltip.addAdvanced(
    ["translocators:item_translocator", "translocators:fluid_translocator"],
    (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [
          Text.translate("item.minecraft.redstone").red(),
          Text.translate("society.tooltip.item.translocator_redstone").darkGray(),
        ]);
        text.add(2, [
          Text.translate("item.minecraft.glowstone_dust").yellow(),
          Text.translate("society.tooltip.item.translocator_glowstone_dust").darkGray(),
        ]);
        text.add(3, [
          Text.translate("item.minecraft.iron_ingot").gray(),
          Text.translate("society.tooltip.item.translocator_iron_ingot").darkGray(),
        ]);
        text.add(4, [
          Text.translate("item.create.precision_mechanism").gold(),
          Text.translate("society.tooltip.item.translocator_precision_mechanism").darkGray(),
        ]);
        text.add(5, [Text.translate("society.tooltip.rightclick_with_item_to_upgrade").green()]);
      } else {
        text.add(1, [
          Text.translate("society.tooltip.shift_prefix").darkGray(),
          Text.translate("key.keyboard.shift").gray(),
          Text.translate("society.tooltip.shift_suffix", [Text.translate("society.tooltip.to_view_upgrades")]).darkGray(),
        ]);
      }
    }
  );
  const magnifyingBlocks = [
    "Auto-Grabber",
    "Artisan Hoppers",
    "Chicken Nest",
    "Feeding Trough",
    "Slime Feeder",
    "Snow Melter",
    "Fish Pond Basket",
    "Golden Clock",
    "Mana Clock",
    "Mana Milker",
    "All Sprinklers",
    "Growth Obelisk",
    "Ribbit Hut",
  ];
  // Translocators
  tooltip.addAdvanced("society:magnifying_glass", (item, advanced, text) => {
    if (tooltip.shift) {
      magnifyingBlocks.forEach((block, index) => {
        text.add(index + 1, Text.gold(block));
      });
    } else {
      text.add(1, Text.translate("society.tooltip.displays_working_area_of_some_machines").green());
      text.add(2, [
        Text.translate("society.tooltip.shift_prefix").darkGray(),
        Text.translate("key.keyboard.shift").gray(),
        Text.translate("society.tooltip.shift_suffix", [Text.translate("society.tooltip.to_view_blocks")]).darkGray(),
      ]);
    }
  });
  tooltip.add("trials:ominous_bottle", Text.translate("society.tooltip.bad_omen").blue());
  tooltip.add(
    "society:overflow_token",
    Text.translate("society.tooltip.item.overflow_token_info_1").gray()
  );
  tooltip.add(
    "society:overflow_token",
    Text.translate("society.tooltip.item.overflow_token_info_2").gray()
  );
  tooltip.add(
    "society:overflow_token",
    Text.translate("society.tooltip.item.overflow_token_info_3").gray()
  );
  tooltip.add(
    "society:overflow_token",
    Text.translate("society.tooltip.item.overflow_token_info_4").red()
  );
  // Sprinklers
  const generateSprinklerTooltip = (tooltip, tier, radius) => {
    const tooltipRadius = 1 + radius * 2;
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.translate("society.tooltip.item.sprinkler_info_1").gray()
    );
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.translate("society.tooltip.item.sprinkler_info_2").gray()
    );
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.translate("society.tooltip.item.sprinkler_info_3", [`${tooltipRadius}x${tooltipRadius}`]).green()
    );
  };
  generateSprinklerTooltip(tooltip, "iron", 1);
  generateSprinklerTooltip(tooltip, "gold", 2);
  generateSprinklerTooltip(tooltip, "diamond", 3);
  generateSprinklerTooltip(tooltip, "netherite", 4);
  // Books
  tooltip.add(
    "society:yard_work_yearly",
    Text.translate("society.tooltip.rightclick_to_gain_experience", [Text.translate("society.tooltip.mastery_farming")]).green()
  );
  tooltip.add(
    "society:husbandry_hourly",
    Text.translate("society.tooltip.rightclick_to_gain_experience", [Text.translate("society.tooltip.mastery_husbandry")]).green()
  );
  tooltip.add(
    "society:mining_monthly",
    Text.translate("society.tooltip.rightclick_to_gain_experience", [Text.translate("society.tooltip.mastery_mining")]).green()
  );
  tooltip.add(
    "society:combat_quarterly",
    Text.translate("society.tooltip.rightclick_to_gain_experience", [Text.translate("society.tooltip.mastery_adventuring")]).green()
  );
  tooltip.add(
    "society:wet_weekly",
    Text.translate("society.tooltip.rightclick_to_gain_experience", [Text.translate("society.tooltip.mastery_fishing")]).green()
  );
  tooltip.add(
    "society:book_of_stars",
    Text.translate("society.tooltip.rightclick_to_gain_experience_all").green()
  );
  tooltip.add(
    [
      "society:starcardi",
      "society:star_coquito",
      "society:good_catawba",
      "society:nutty_basil",
      "society:forks_of_blue",
      "society:ancient_cider",
      "society:ancient_vespertine",
      "society:dewy_star",
    ],
    Text.translate("society.tooltip.not_placeable_in_wine_racks").red()
  );
  tooltip.add(
    [
      "fantasyfurniture:nordic/bed_single",
      "fantasyfurniture:nordic/bed_double",
      "fantasyfurniture:dunmer/bed_single",
      "fantasyfurniture:dunmer/bed_double",
      "fantasyfurniture:venthyr/bed_single",
      "fantasyfurniture:venthyr/bed_double",
      "fantasyfurniture:bone/skeleton/bed_single",
      "fantasyfurniture:bone/skeleton/bed_double",
      "fantasyfurniture:bone/wither/bed_single",
      "fantasyfurniture:bone/wither/bed_double",
      "fantasyfurniture:royal/bed_single",
      "fantasyfurniture:royal/bed_double",
      "fantasyfurniture:necrolord/bed_single",
      "fantasyfurniture:necrolord/bed_double",
    ],
    Text.translate("society.tooltip.does_not_work_with_magic_mirror").red()
  );
  // Refined
  tooltip.add(
    "refinedstorage:4k_storage_block",
    Text.translate("society.tooltip.item.4k_storage_block").green()
  );
  tooltip.add(
    "refinedstorage:64k_storage_block",
    Text.translate("society.tooltip.item.64k_storage_block").green()
  );
  tooltip.add(
    "toms_storage:ts.adv_wireless_terminal",
    Text.translate("society.tooltip.item.adv_wireless_terminal").red()

  );
  global.removedItems.forEach((item) => {
    tooltip.add(item, Text.translate("society.tooltip.removed_you_shouldnt_have_this").red());
  });
});
