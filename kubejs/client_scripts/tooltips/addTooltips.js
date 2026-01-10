ItemEvents.tooltip((tooltip) => {
  global.plushies.forEach((plush) => {
    tooltip.addAdvanced(plush, (item, advanced, text) => {
      if (item.nbt) {
        let type = global.plushieTraits[Number(item.nbt.getInt("type"))];
        if (tooltip.shift) {
          text.add(1, [
            Text.translatable("tooltip.society.plushies.trait"),
            global.getTranslatedTextWithColorCode(
              type.color,
              `society.item.plushie.${type.trait}`
            ),
          ]);
          text.add(2, [
            Text.translate(`society.item.plushie.trait.description`).darkGray(),
          ]);
          let description = Text.translate(
            `society.item.plushie.${type.trait}.description`
          )
            .getString()
            .split("\n");
          text.add(3, [Text.gray(description[0])]);
          text.add(4, [description[1]]);
        } else {
          if (item.nbt.getCompound("quality_food"))
            text.add(1, [
              Text.translatable("tooltip.society.plushies.rarity"),
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
          let affection = item.nbt.getInt("affection");
          text.add(2, [
            Text.translatable("tooltip.society.plushies.affection"),
            `§c${affection > 0 ? `❤`.repeat(affection) : ""}§7${
              affection < 4 ? `❤`.repeat(4 - affection) : ""
            }`,
          ]);
          text.add(3, [
            Text.translatable("tooltip.society.plushies.trait"),
            global.getTranslatedTextWithColorCode(
              type.color,
              `society.item.plushie.${type.trait}`
            ),
            Text.of(" "),
            Text.translatable(
              "tooltip.society.hold_key",
              global.getTranslatedTextWithColorCode(
                type.color,
                "key.keyboard.shift"
              )
            ).gray(),
          ]);
          if (item.nbt.animal) {
            let animal = item.nbt.getCompound("animal");
            text.add(4, [
              Text.translatable("tooltip.society.plushies.animal_type"),
              Text.translate(
                global.getTranslatedEntityName(String(animal.type)).getString()
              ).gold(),
            ]);
            if (animal.name) {
              text.add(5, [
                Text.translatable(
                  "tooltip.society.plushies.animal_name",
                  ` ${animal.name}`
                ),
              ]);
            }
          } else {
            text.add(4, [Text.translatable("tooltip.society.plushies")]);
          }
        }
      } else {
        text.add(1, [Text.translatable("tooltip.society.plushies")]);
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
    { item: "society:ribbit_gadget", tooltip: "Some sort of wetware circuit" },
    { item: "society:legendary_ink", tooltip: "We love casting spells" },
    { item: "society:holy_symbol", tooltip: "A tribute from a higher power" },
    {
      item: "society:ember_crystal_cluster",
      tooltip: "Feels hot to the touch",
    },
    { item: "society:living_flesh", tooltip: "Writhing and unnatural" },
    { item: "society:source_gem", tooltip: "Derived from a Gold Sea Coin" },
    {
      item: "society:spider_silk",
      tooltip: "Meticulously textured by a Nerdy Spider",
    },
    {
      item: "society:wheel_of_adaptation",
      tooltip: "Was once used to summon a beast",
    },
    {
      item: "society:toy_train",
      tooltip: "« Limited to 2 passengers : ants »",
    },
    {
      item: "society:perfect_cherry",
      tooltip: "It wants you to eat it",
    },
    {
      item: "society:mini_oni_eye",
      tooltip: "Fits nicely on a banana",
    },
    { item: "society:glitched_vhs", tooltip: '"Whispers: Don\'t rewind..."' },
    {
      item: "society:production_science_pack",
      tooltip: "What was it used to research?",
    },
    {
      item: "society:beemonican_seal",
      tooltip: "From the lost city of Beemonica",
    },
    {
      item: "society:steamy_gadget",
      tooltip:
        "An ancient handheld computer powered by steam. The word 'Uni' is ingraved on the back",
    },
    {
      item: "society:amulet_of_light",
      tooltip: "A very normal and holy pendant",
    },
    {
      item: "society:aquamagical_dust",
      tooltip: "Feels mystical and oceanic...",
    },
    {
      item: "society:princess_hairbrush",
      tooltip: "Scuffed from being used to hit someone",
    },
    {
      item: "society:heart_of_neptunium",
      tooltip: "It hums aquamagically",
    },
  ];
  artifactTooltips.forEach((artifact) => {
    tooltip.add(
      artifact.item,
      global
        .translatableWithFallback(
          `item.society.${artifact.item.path}.description`,
          artifact.description
        )
        .darkPurple()
    );
    tooltip.add(
      artifact.item,
      Text.translatable("tooltip.society.item_type.artifact").gray()
    );
  });
  [
    {
      item: "society:animal_fancy",
      description: "Increases affection gained from petting farm animals.",
    },
    {
      item: "society:banana_karenina",
      description: "Doubles Banana Tree output.",
    },
    {
      item: "society:brine_and_punishment",
      description: "Pickled items are worth 100% more.",
    },
    {
      item: "society:bluegill_meridian",
      description: "Bluegill are now worth 666 §f●.",
    },
    {
      item: "society:hitting_hard_and_soft",
      description: "Melee attacks do an extra 4 damage.",
    },
    {
      item: "society:canadian_and_famous",
      description: "Tappers output double. Doesn't affect Auto-Tappers.",
    },
    {
      item: "society:first_aid_guide",
      description: "Halves the maximum fee and debt from death.",
    },
    {
      item: "society:intro_to_algorithms",
      description: "Mining Lead ore no longer causes Brain Damage clouds.",
    },
    {
      item: "society:no_name_for_the_sheep",
      description: "Naming animals grants an additional heart of affection.",
    },
    {
      item: "society:paradise_crop",
      description: "1 additional crop drop per harvest.",
    },
    {
      item: "society:slime_contain_protect",
      description:
        "Incubating a Slime Heart has a chance to give you a Slime Ticket.",
    },
    {
      item: "society:slouching_towards_artistry",
      description:
        "Artisan Hoppers have a chance to not consume Sparkstone when harvesting. The chance increases the longer the product took to make.",
    },
    {
      item: "society:debt_caverns",
      description:
        "Fainting in the Skull Cavern no longer costs a fee or adds to debt.",
    },
    {
      item: "society:phenomenology_of_treasure",
      description: "Artifacts and Relics are worth 200% more.",
    },
    {
      item: "society:frogs_bounty_bazaar",
      description: "Prize Tickets give double the prizes.",
    },
    {
      item: "society:bullfish_jobs",
      description:
        "The quality of fish taken out of Fish Ponds scales with population.",
    },
    {
      item: "society:wuthering_logs",
      description: "Trees have a 15% chance to drop Fire Logs when chopped.",
    },
    {
      item: "society:the_spark_also_rises",
      description: "Minining any ore drops Sparkstone.",
    },
    {
      item: "society:universal_methods_of_farming",
      description: "The Market sells all basic seeds in every season.",
    },
    {
      item: "society:the_red_and_the_black",
      description: "Geodes, loot items, and Slot Machines drop one more item.",
    },
    {
      item: "society:pond_house_five",
      description: "Fish Ponds will ask for half the items.",
    },
    {
      item: "society:women_who_run_with_the_plushies",
      description:
        "Plushies will start at 3 hearts of affection. Increases rates of high quality Plushies.",
    },
  ].forEach((book) => {
    tooltip.add(
      book.item,
      global
        .translatableWithFallback(
          `item.society.${book.item.path}.description`,
          book.description
        )
        .gray()
    );
    tooltip.add(
      book.item,
      Text.translatable("tooltip.society.skill_book.use").green()
    );
  });
  tooltip.addAdvanced("society:fish_pond", (item, advanced, text) => {
    if (item.nbt) {
      text.add(
        1,
        Text.translatable(
          "block.society.fish_pond.fish.type",
          `${Item.of(item.nbt.get("type")).id}`
        ).aqua()
      );
      text.add(
        2,
        Text.translatable(
          "block.society.fish_pond.fish.population",
          `${item.nbt.get("population")}`,
          `${item.nbt.get("max_population")}`
        ).aqua()
      );
    } else {
      text.add(
        1,
        Text.translatable("block.society.fish_pond.description").gray()
      );
      text.add(
        2,
        Text.translatable(
          "block.society.fish_pond.description.place"
        ).darkAqua()
      );
    }
  });
  tooltip.add(
    "simplerecall:recall_potion",
    Text.translatable("tooltip.society.recall_potion").gray()
  );
  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.translatable("tooltip.society.phone").gray()
  );

  tooltip.add(
    [
      "whimsy_deco:phone",
      "whimsy_deco:blue_phone",
      "whimsy_deco:black_phone",
      "whimsy_deco:red_phone",
    ],
    Text.translatable("tooltip.society.phone.tip").green()
  );
  // Furniture
  tooltip.add(
    "tanukidecor:diy_workbench",
    Text.translatable("tooltip.society.diy_workbench").gray()
  );
  tooltip.add("society:tanuki_catalog", [
    Text.translatable(
      "tooltip.society.furniture_catalog",
      "2",
      Text.translatable("item.numismatics.crown").gold(),
      Text.translatable("item.society.tanuki_leaf").green()
    ).gray(),
  ]);
  tooltip.add("society:modern_catalog", [
    Text.translatable(
      "tooltip.society.furniture_catalog",
      "6",
      Text.translatable("item.numismatics.crown").gold(),
      Text.translatable("item.society.architects_digest").white()
    ).gray(),
  ]);
  tooltip.add("society:fantasy_catalog", [
    Text.translatable(
      "tooltip.society.furniture_catalog",
      "4",
      Text.translatable("item.numismatics.crown").gold(),
      Text.translatable("item.society.fantasy_dust").yellow()
    ).gray(),
  ]);
  global.lootFurniture.forEach((item) => {
    tooltip.add(
      item,
      Text.translatable("tooltip.society.loot_furniture").white()
    );
    if (!item.includes("tanuki") && !item.includes("whimsy_deco")) {
      tooltip.add(
        item,
        Text.translatable("tooltip.society.furnitures.modern").white()
      );
    } else {
      tooltip.add(
        item,
        Text.translatable("tooltip.society.furnitures.tanuki").white()
      );
    }
  });
  tooltip.add(
    "society:architects_digest",
    Text.translatable("item.society.architects_digest.description").gray()
  );
  tooltip.add(
    "society:tanuki_leaf",
    Text.translatable("item.society.tanuki_leaf.description").gray()
  );
  tooltip.add(
    /fantasyfurniture/,
    Text.translatable("tooltip.society.furnitures.fantasy").white()
  );
  tooltip.add(
    "society:fantasy_dust",
    Text.translatable("item.society.fantasy_dust.description").gray()
  );
  // Hammers
  tooltip.add(
    "justhammers:small_core",
    Text.translatable("tooltip.society.hammer_core", "3x3x1").gray()
  );
  tooltip.add(
    "justhammers:impact_core",
    Text.translatable("tooltip.society.hammer_core", "3x3x3").gray()
  );
  // Upgrades:
  tooltip.add(
    "society:ancient_cog",
    Text.translatable(
      "item.society.ancient_cog.description",
      Text.translatable("block.society.seed_maker").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:pink_matter",
    Text.translatable(
      "item.society.pink_matter.description",
      Text.translatable("block.society.cheese_press").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:pink_matter",
    Text.translatable("item.society.pink_matter.description.warn").red()
  );
  tooltip.add(
    "society:stone_hand",
    Text.translatable(
      "item.society.stone_hand.description",
      Text.translatable("block.society.preserves_jar").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:broken_clock",
    Text.translatable(
      "item.society.broken_clock.description",
      Text.translatable("block.society.aging_cask").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:sea_biscut",
    Text.translatable(
      "item.society.sea_biscut.description",
      Text.translatable("block.society.fish_pond").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:black_opal",
    Text.translatable(
      "item.society.black_opal.description",
      Text.translatable("block.society.crystalarium").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:enkephalin",
    Text.translatable(
      "item.society.enkephalin.description",
      Text.translatable("block.society.mayonnaise_machine").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:tiny_gnome",
    Text.translatable(
      "item.society.tiny_gnome.description",
      Text.translatable("block.society.loom").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:ancient_roe",
    Text.translatable(
      "item.society.ancient_roe.description",
      Text.translatable("block.society.fish_smoker").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:frosted_tip",
    Text.translatable(
      "item.society.frosted_tip.description",
      Text.translatable("block.society.charging_rod").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:infinity_worm",
    Text.translatable(
      "item.society.infinity_worm.description",
      Text.translatable("block.society.deluxe_worm_farm").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:inserter",
    Text.translatable(
      "item.society.inserter.description",
      Text.translatable("block.society.ancient_cask").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:cordycep",
    Text.translatable(
      "item.society.cordycep.description",
      Text.translatable("block.society.dehydrator").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:gray_anatomy",
    Text.translatable(
      "item.society.gray_anatomy.description",
      Text.translatable("block.society.wine_keg").darkGreen()
    ).green()
  );
  tooltip.add(
    "society:recycled_core",
    Text.translatable(
      "item.society.recycled_core.description",
      Text.translatable("block.society.recycling_machine").darkGreen()
    ).green()
  );
  tooltip.add(
    [
      "vintagedelight:gearo_berry",
      "minecraft:sweet_berries",
      "windswept:wild_berries",
      "farmersdelight:rice",
    ],
    Text.translatable("tooltip.society.plant_on_farmland").gray()
  );
  // Crops with special conditions
  tooltip.add(
    [
      "vinery:red_grape_seeds",
      "vinery:white_grape_seeds",
      "vinery:savanna_grape_seeds_red",
      "vinery:savanna_grape_seeds_white",
      "vinery:taiga_grape_seeds_red",
      "vinery:taiga_grape_seeds_white",
      "nethervinery:crimson_grape_seeds",
      "nethervinery:warped_grape_seeds",
    ],
    Text.gray("Will only grow when planted on Grapevine Stem")
  );
  tooltip.add(
    ["vinery:jungle_grape_seeds_red", "vinery:jungle_grape_seeds_white"],
    Text.gray("Will only grow when planted on Grapevine Lattice")
  );
  // Misc
  tooltip.add(
    [
      "botania:agricarnation",
      "botania:agricarnation_chibi",
      "botania:floating_agricarnation",
      "botania:floating_agricarnation_chibi",
    ],
    Text.translatable("tooltip.society.not_work_on_farmland").darkRed()
  );
  tooltip.add(
    "numismatics_utils:bank_meter",
    Text.translatable("tooltip.society.bank_meter").gray()
  );
  tooltip.add(
    "society:fish_radar",
    Text.translatable("item.society.fish_rader.description").gray()
  );
  tooltip.add(
    "tradingpost:trading_post",
    Text.translatable("tooltip.society.trading_post").gray()
  );
  tooltip.add(
    "society:magic_rope",
    Text.translatable("item.society.magic_rope.description").gray()
  );
  tooltip.add(
    "society:magic_rope",
    Text.translatable("item.society.magic_rope.description.warn").red()
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.translatable("item.society.magic_tunnel.description").gray()
  );
  tooltip.add(
    "society:magic_tunnel",
    Text.translatable("item.society.magic_rope.description.warn").red()
  );
  // Fertilizers
  tooltip.add(
    "dew_drop_farmland_growth:weak_fertilizer",
    Text.translatable("tooltip.society.weak_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:strong_fertilizer",
    Text.translatable("tooltip.society.strong_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:hyper_fertilizer",
    Text.translatable("tooltip.society.hyper_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:hydrating_fertilizer",
    Text.translatable("tooltip.society.hydrating_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:deluxe_hydrating_fertilizer",
    Text.translatable("tooltip.society.deluxe_hydrating_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.translatable("tooltip.society.bountiful_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:bountiful_fertilizer",
    Text.translatable("tooltip.society.bountiful_fertilizer.warn").red()
  );
  tooltip.add(
    "dew_drop_farmland_growth:low_quality_fertilizer",
    Text.translatable("tooltip.society.low_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:high_quality_fertilizer",
    Text.translatable("tooltip.society.high_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:pristine_quality_fertilizer",
    Text.translatable("tooltip.society.pristine_quality_fertilizer").green()
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.translatable("item.society.garden_pot.description").gray()
  );
  tooltip.add(
    "dew_drop_farmland_growth:garden_pot",
    Text.translatable("item.society.garden_pot.description.tip").green()
  );
  tooltip.add(
    "minecraft:fishing_rod",
    Text.translatable("tooltip.society.fishing_rod").gray()
  );
  tooltip.add(
    "etcetera:handbell",
    Text.translatable("tooltip.society.handbell").gray()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translatable("tooltip.society.pitchfork").gray()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translatable("tooltip.society.pitchfork.tip").green()
  );
  tooltip.add(
    "farm_and_charm:pitchfork",
    Text.translatable("tooltip.society.pitchfork.warn").red()
  );
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.translatable("tooltip.society.silo").gray()
  );
  tooltip.add(
    ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
    Text.translatable("tooltip.society.silo.tip").green()
  );
  tooltip.add(
    "farmersdelight:cooking_pot",
    Text.translatable("tooltip.society.cooking_pot").green()
  );
  tooltip.add(
    "meadow:cooking_cauldron",
    Text.translatable("tooltip.society.cooking_cauldron").gray()
  );
  tooltip.add(
    "candlelight:cooking_pot",
    Text.translatable("tooltip.society.master_cooking_pot").gray()
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
    Text.translatable("tooltip.society.stove").green()
  );

  tooltip.add(
    [
      "oreganized:silver_ore",
      "oreganized:deepslate_silver_ore",
      "oreganized:lead_ore",
      "oreganized:deepslate_lead_ore",
      "minecraft:ancient_debris",
    ],
    Text.translatable("tooltip.society.skull_cavern_ore").gold()
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
      "society:wine_keg",
      "society:oil_maker",
    ],
    Text.translatable("tooltip.society.artisan_machine").white()
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
    Text.translatable("tooltip.society.banned_milk_bucket").red()
  );
  ["society:large_warped_milk", "society:warped_milk"].forEach((milk) => {
    tooltip.add(
      milk,
      Text.translatable("item.society.warped_milk.description").aqua()
    );
  });
  tooltip.add(
    "society:fine_wool",
    Text.translatable("item.society.fine_wool.description").gray()
  );
  tooltip.add(
    "society:truffle",
    Text.translatable("item.society.truffle.description").gray()
  );
  tooltip.add(
    "society:milk_pail",
    Text.translatable("item.society.milk_pail.description").gray()
  );
  tooltip.add(
    "society:tubasmoke_stick",
    Text.translatable("item.society.tubasmoke_stick.description").gray()
  );
  tooltip.add(
    "society:tubasmoke_stick",
    Text.translatable("item.society.tubasmoke_stick.description.warn").red()
  );
  tooltip.add(
    "society:cornucopia",
    Text.translatable("item.society.cornucopia.description").gray()
  );
  tooltip.add(
    "society:animal_feed",
    Text.translatable("item.society.animal_feed.description").gray()
  );
  tooltip.add(
    "society:candied_animal_feed",
    Text.translatable("item.society.animal_feed.description").gray()
  );
  tooltip.add(
    "society:candied_animal_feed",
    Text.translatable("item.society.candied_animal_feed.description").green()
  );
  tooltip.add(
    "society:mana_feed",
    Text.translatable("item.society.animal_feed.description").gray()
  );
  tooltip.add(
    "society:mana_feed",
    Text.translatable("item.society.mana_feed.description").green()
  );
  tooltip.add(
    "society:animal_feed_sack",
    Text.translatable("item.society.animal_feed_sack.description").red()
  );
  tooltip.add(
    "society:magic_shears",
    Text.translatable("item.society.magic_shears.description").gray()
  );
  tooltip.add(
    "vintagedelight:deluxe_burger",
    Text.translatable("tooltip.society.deluxe_burger").gray()
  );
  tooltip.add(
    "society:magic_shears",
    Text.translatable("item.society.magic_shears.description.warn").red()
  );
  tooltip.add(
    "society:miracle_potion",
    Text.translatable("item.society.miracle_potion.description").gray()
  );
  tooltip.add(
    "meadow:cheese_stick",
    Text.translatable("tooltip.society.cheese_stick").gray()
  );
  tooltip.add(
    "meadow:cheese_form",
    Text.translatable("tooltip.society.cheese_form").gray()
  );
  tooltip.add(
    "meadow:cheese_form",
    Text.translatable("tooltip.society.cheese_form.tip").green()
  );
  tooltip.add(
    "society:friendship_necklace",
    Text.translatable("item.society.friendship_necklace.description").gray()
  );
  tooltip.add(
    "society:frozen_tear",
    Text.translatable("item.society.frozen_tear.description").gray()
  );
  tooltip.add(
    "liltractor:liltractor",
    Text.translatable("tooltip.society.liltractor").gray()
  );
  tooltip.add(
    ["displaydelight:food_plate", "displaydelight:small_food_plate"],
    Text.translatable("tooltip.society.food_plate").gray()
  );
  tooltip.add(
    "society:prize_ticket",
    Text.translatable("item.society.prize_ticket.description").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_ticket",
    Text.translatable("tooltip.society.slime_ticket").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_candy",
    Text.translatable("tooltip.society.slime_candy").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_feeder",
    Text.translatable("tooltip.society.slime_feeder").gray()
  );
  tooltip.add(
    "splendid_slimes:slime_feeder",
    Text.translatable("tooltip.society.area", `13x13x13`).green()
  );
  tooltip.add(
    "create:creative_blaze_cake",
    Text.translatable("tooltip.society.creative_blaze_cake").gray()
  );
  tooltip.add(
    "tanukidecor:slot_machine",
    Text.translatable("tooltip.society.slot_machine").gray()
  );
  tooltip.add(
    "whimsy_deco:statue_endless_fortune",
    Text.translatable("tooltip.society.statue_endless_fortune").gray()
  );
  tooltip.add(
    "whimsy_deco:statue_endless_fortune",
    Text.translatable("tooltip.society.statue_endless_fortune.warn").red()
  );
  tooltip.add(
    "whimsy_deco:gatcha_machine",
    Text.translatable(
      "tooltip.society.gatcha_machine",
      Text.translatable("item.numismatics.sun")
    ).gray()
  );
  tooltip.add(
    "society:relic_trove",
    Text.translatable("item.society.relic_trove.description").gray()
  );
  tooltip.add(
    "society:artifact_trove",
    Text.translatable("item.society.relic_trove.description").gray()
  );
  tooltip.add(
    "society:geode_buster",
    Text.translatable("item.society.geode_buster.description").gray()
  );
  tooltip.add(
    "society:dragontooth_axe",
    Text.translatable("item.society.dragontooth_axe.description").red()
  );
  tooltip.add(
    "botania:apothecary_default",
    Text.translatable("tooltip.society.petal_apothecary.obtain")
  );
  tooltip.add(
    "society:kinetic_blueprint",
    Text.translatable("item.society.kinetic_blueprint.description.tip").green()
  );
  tooltip.add(
    "society:kinetic_blueprint",
    Text.translatable("tooltip.society.kinetic_blueprint.obtain")
  );
  tooltip.add(
    "society:skull_cavern_teleporter",
    Text.translatable("tooltip.society.skull_cavern_teleporter.obtain")
  );
  tooltip.add(
    "relics:magic_mirror",
    Text.translatable("tooltip.society.magic_mirror.obtain")
  );

  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.translatable("tooltip.society.greenhouse_glass").gray()
  );
  tooltip.add(
    [
      "moreminecarts:chiseled_organic_glass",
      "moreminecarts:chiseled_organic_glass_pane",
      "moreminecarts:greenhouse_glass_stairs",
      "moreminecarts:greenhouse_glass_slab",
    ],
    Text.translatable("tooltip.society.greenhouse_glass.range").green()
  );

  tooltip.add(
    "vinery:apple_tree_sapling",
    Text.translatable("tooltip.society.fruit_bearing_season")
  );
  tooltip.add(
    "vinery:apple_tree_sapling",
    Text.of(" ").gold().append(Text.translatable("desc.sereneseasons.autumn"))
  );

  tooltip.add(
    "vinery:dark_cherry_sapling",
    Text.translatable("tooltip.society.fruit_bearing_season")
  );
  tooltip.add(
    "vinery:dark_cherry_sapling",
    Text.of(" ").green().append(Text.translatable("desc.sereneseasons.spring"))
  );
  tooltip.add(
    "society:plushie_capsule",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "society:furniture_box",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "furniture:bin",
    Text.translatable("tooltip.society.trash_bin").red()
  );
  tooltip.add(
    "furniture:bin",
    Text.translatable("tooltip.society.trash_bin.tip").green()
  );
  tooltip.add(
    "furniture:trash_bag",
    Text.translatable("tooltip.society.trash_bag").gray()
  );
  tooltip.add(
    "society:bouquet_bag",
    Text.translatable("tooltip.society.bouquet_bag").green()
  );
  tooltip.add(
    "society:bouquet_bag",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "society:scavenged_food_bag",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "gag:time_sand_pouch",
    Text.translatable("tooltip.society.time_sand_pouch").red()
  );
  tooltip.add(
    "extractinator:extractinator",
    Text.translatable("tooltip.society.extractinator").gray()
  );
  tooltip.add(
    "pipez:item_pipe",
    Text.translatable("tooltip.society.item_pipe").gray()
  );
  tooltip.add(
    "moreminecarts:chunk_loader",
    Text.translatable("tooltip.society.chunk_loader").red()
  );
  tooltip.add(
    "vintagedelight:evaporator",
    Text.translatable("tooltip.society.evaporator").gray()
  );
  tooltip.add(
    "farmersdelight:rich_soil",
    Text.translatable("tooltip.society.rich_soil").gray()
  );
  tooltip.addAdvanced("farmersdelight:tomato_seeds", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(1, [
        Text.white("")
          .append(Text.translatable("desc.sereneseasons.fertile_seasons"))
          .append(":"),
        Text.of(" "),
        Text.translatable("desc.sereneseasons.spring").green().append(","),
        Text.of(" "),
        Text.translatable("desc.sereneseasons.summer").yellow().append(","),
        Text.of(" "),
        Text.translatable("desc.sereneseasons.autumn").gold(),
      ]);
    } else {
      text.add(1, [
        Text.translatable(
          "tooltip.society.hold_key",
          Text.translatable("key.keyboard.shift").gray()
        ).darkGray(),
      ]);
    }
  });
  tooltip.addAdvanced(
    "farm_and_charm:strawberry_seed",
    (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(1, [
          Text.white("")
            .append(Text.translatable("desc.sereneseasons.fertile_seasons"))
            .append(":"),
          Text.of(" "),
          Text.translatable("desc.sereneseasons.spring").green(),
        ]);
      } else {
        text.add(1, [
          Text.translatable(
            "tooltip.society.hold_key",
            Text.translatable("key.keyboard.shift").gray()
          ).darkGray(),
        ]);
      }
    }
  );
  tooltip.add(
    "relics:jellyfish_necklace",
    Text.translatable("tooltip.society.jellyfish_necklace").red()
  );

  tooltip.add(
    "society:river_jelly",
    Text.translatable("item.society.river_jelly.description").blue()
  );
  tooltip.add(
    "society:ocean_jelly",
    Text.translatable("item.society.ocean_jelly.description").aqua()
  );
  tooltip.add(
    "society:nether_jelly",
    Text.translatable("item.society.nether_jelly.description").gold()
  );
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
    tooltip.add(
      item,
      Text.translatable("tooltip.society.item_type.crafting_material").gray()
    );
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
    Text.translatable("tooltip.society.item_type.prize_machine_reward").gold()
  );
  const workstation = [
    {
      villager: Text.translatable("entity.minecraft.villager.etched.bard"),
      block: "minecraft:note_block",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.weaponsmith"),
      block: "minecraft:grindstone",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.fisherman"),
      block: "minecraft:barrel",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.shepherd"),
      block: "minecraft:loom",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.leatherworker"),
      block: "minecraft:cauldron",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.toolsmith"),
      block: "minecraft:smithing_table",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.librarian"),
      block: "minecraft:lectern",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.cleric"),
      block: "minecraft:brewing_stand",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.farmer"),
      block: "minecraft:composter",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.cartographer"),
      block: "minecraft:cartography_table",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.candlelight.cook"),
      block: "candlelight:cooking_pot",
    },
    {
      villager: Text.translatable(
        "entity.minecraft.villager.beachparty.barkeeper"
      ),
      block: "beachparty:tiki_bar",
    },
    {
      villager: Text.translatable("entity.minecraft.villager.fletcher"),
      block: "minecraft:fletching_table",
    },
    {
      villager: Text.translatable(
        "entity.minecraft.villager.beautify.botanist"
      ),
      block: "beautify:botanist_workbench",
    },
  ];
  workstation.forEach((station) => {
    const { villager, block } = station;
    tooltip.add(
      block,
      Text.translatable("tooltip.society.villager_workstation", villager).gold()
    );
  });
  Item.of("farm_and_charm:barley", "{quality_food:{quality:3}}");

  const geodes = [
    "society:geode",
    "society:frozen_geode",
    "society:magma_geode",
    "society:omni_geode",
  ];
  geodes.forEach((geode) => {
    tooltip.add(
      geode,
      Text.translatable("item.society.geode.description").gray()
    );
  });
  tooltip.addAdvanced("society:car_key", (item, advanced, text) => {
    text.add(1, [Text.translatable("item.society.car_key.description").gray()]);
    if (item.nbt) {
      text.add(2, [
        Text.translatable("item.society.car_key.description.parked").green(),
      ]);
    } else {
      text.add(2, [
        Text.translatable("item.society.car_key.description.empty").red(),
      ]);
    }
  });
  const getPigColoredName = (pig) => {
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
  tooltip.addAdvanced(
    ["society:pig_race_ticket", "society:multiplayer_pig_race_ticket"],
    (item, advanced, text) => {
      text.add(1, [
        Text.translatable("item.society.pig_race_ticket.description").gray(),
      ]);
      if (item.nbt) {
        text.add(2, [
          Text.translatable(
            "item.society.pig_race_ticket.description.bet",
            getPigColoredName(item.nbt.bet)
          ).gray(),
        ]);
      } else {
        text.add(2, [
          Text.translatable(
            "item.society.pig_race_ticket.description.no_pig"
          ).gray(),
        ]);
      }
    }
  );

  // Magnifying
  const magnifyingBlocks = [
    Text.translatable("block.society.auto_grabber"),
    Text.translatable("block.society.artisan_hopper"),
    Text.translatable("block.farmingforblockheads.chicken_nest"),
    Text.translatable("block.society.feeding_trough"),
    Text.translatable("block.splendid_slimes.slime_feeder"),
    Text.translatable("block.society.snow_melter"),
    Text.translatable("block.society.fish_pond_basket"),
    Text.translatable("block.society.golden_clock"),
    Text.translatable("block.society.mana_clock"),
    Text.translatable("block.society.mana_milker"),
    Text.translatable(
      "item.society.magnifying_glass.description.view_block.sprinklers"
    ),
    Text.translatable("block.society.growth_obelisk"),
    Text.translatable("block.society.ribbit_hut"),
  ];
  tooltip.addAdvanced("society:magnifying_glass", (item, advanced, text) => {
    if (tooltip.shift) {
      magnifyingBlocks.forEach((block, index) => {
        text.add(index + 1, Text.gold(block));
      });
    } else {
      text.add(
        1,
        Text.translatable("item.society.magnifying_glass.description").green()
      );
      text.add(2, [
        Text.translatable(
          "item.society.magnifying_glass.description.view_block",
          Text.translatable("key.keyboard.shift").gray()
        ).darkGray(),
      ]);
    }
  });
  tooltip.add(
    "trials:ominous_bottle",
    Text.translatable("effect.minecraft.bad_omen")
      .blue()
      .append(Text.of(" (10:00)"))
  );
  tooltip.add(
    "society:overflow_token",
    Text.translatable(
      "item.society.overflow_token.description",
      Text.translatable("tooltip.society.coins", "1,006,632,960")
    ).gray()
  );
  tooltip.add(
    "society:overflow_token",
    Text.translatable("item.society.overflow_token.description.warn").red()
  );
  // Sprinklers
  const generateSprinklerTooltip = (tooltip, tier, radius) => {
    const tooltipRadius = 1 + radius * 2;
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.translatable("tooltip.society.sprinkler").gray()
    );
    tooltip.add(
      `dew_drop_farmland_growth:${tier}_sprinkler`,
      Text.translatable(
        "tooltip.society.area",
        `${tooltipRadius}x${tooltipRadius}`
      ).green()
    );
  };
  generateSprinklerTooltip(tooltip, "iron", 1);
  generateSprinklerTooltip(tooltip, "gold", 2);
  generateSprinklerTooltip(tooltip, "diamond", 3);
  generateSprinklerTooltip(tooltip, "netherite", 4);
  // Books
  tooltip.add(
    "society:yard_work_yearly",
    Text.translatable(
      "tooltip.society.skill_book.description",
      global.translatableWithFallback(
        "society_skills.farming.category.title",
        "Farming"
      )
    ).green()
  );
  tooltip.add(
    "society:husbandry_hourly",
    Text.translatable(
      "tooltip.society.skill_book.description",
      global.translatableWithFallback(
        "society_skills.husbandry.category.title",
        "Husbandry"
      )
    ).green()
  );
  tooltip.add(
    "society:mining_monthly",
    Text.translatable(
      "tooltip.society.skill_book.description",
      global.translatableWithFallback(
        "society_skills.mining.category.title",
        "Mining"
      )
    ).green()
  );
  tooltip.add(
    "society:combat_quarterly",
    Text.translatable(
      "tooltip.society.skill_book.description",
      global.translatableWithFallback(
        "society_skills.adventuring.category.title",
        "Adventuring"
      )
    ).green()
  );
  tooltip.add(
    "society:wet_weekly",
    Text.translatable(
      "tooltip.society.skill_book.description",
      global.translatableWithFallback(
        "society_skills.fishing.category.title",
        "Fishing"
      )
    ).green()
  );
  tooltip.add(
    "society:book_of_stars",
    Text.translatable("item.society.book_of_stars.description").green()
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
    Text.translatable("tooltip.society.wine_rack_incompatible").red()
  );
  // Temp: Dramatic Doors
  tooltip.add(
    [
      "dramaticdoors:tall_create_andesite_door",
      "dramaticdoors:tall_create_brass_door",
      "dramaticdoors:tall_create_copper_door",
      "dramaticdoors:tall_create_framed_glass_door",
      "dramaticdoors:tall_create_train_door",
    ],
    Text.translatable("tooltip.society.temporarily_remove_door").darkRed()
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
    Text.translatable("tooltip.society.magic_mirror_incompatible").red()
  );
  // Refined
  tooltip.add(
    "refinedstorage:4k_storage_block",
    Text.translatable("tooltip.society.storage_block", "4,000").green()
  );
  tooltip.add(
    "refinedstorage:64k_storage_block",
    Text.translatable("tooltip.society.storage_block", "64,000").green()
  );
  tooltip.add(
    global.removedItems,
    Text.translatable("tooltip.society.removed_items").red()
  );
  // Mastery
  tooltip.add(
    "society:treasure_totem",
    Text.translatable("item.society.treasure_totem.description").gray()
  );
  tooltip.add(
    "society:bubble_totem",
    Text.translatable("item.society.bubble_totem.description").gray()
  );
  tooltip.add(
    "society:needle_bobber",
    Text.translatable("item.society.needle_bobber.description").gray()
  );
  tooltip.add(
    "society:net_bobber",
    Text.translatable("item.society.net_bobber.description").gray()
  );
  tooltip.add(
    "domesticationinnovation:collar_tag",
    Text.translatable("item.society.collar_tag.description").gray()
  );
  tooltip.add(
    "domesticationinnovation:pet_bed_white",
    Text.translatable("item.society.pet_bed_white.description").gray()
  );
  tooltip.add(
    "domesticationinnovation:drum",
    Text.translatable("item.society.drum.description").gray()
  );
  tooltip.add(
    "domesticationinnovation:wayward_lantern",
    Text.translatable("item.society.wayward_lantern.description").gray()
  );
  tooltip.add(
    "society:animal_cracker",
    Text.translatable("item.society.animal_cracker.description").gray()
  );
  tooltip.add(
    "society:sunlit_crystal",
    Text.translatable("item.society.sunlit_crystal.description").gray()
  );

  tooltip.add(
    [
      "society:mystic_syrup",
      "cluttered:willow_log",
      "cluttered:willow_sapling",
      "society:bubble_totem",
      "society:treasure_totem",
      "society:sparkpod_seed",
      "society:sparkpod",
      "society:statue_of_cravings",
    ],
    Text.translatable("tooltip.society.farming_mastery.required")
  );
  tooltip.add(
    ["society:recycled_core", "society:moon_pylon"],
    Text.translatable("tooltip.society.mining_mastery.required")
  );
  tooltip.add(
    ["society:animal_cracker", "society:sunlit_crystal"],
    Text.translatable("tooltip.society.husbandry_mastery.required")
  );
  tooltip.add(
    ["society:roe_recycler", "society:net_bobber", "society:needle_bobber"],
    Text.translatable("tooltip.society.fishing_mastery.required")
  );
  tooltip.add(
    [
      "domesticationinnovation:pet_bed_white",
      "domesticationinnovation:drum",
      "domesticationinnovation:wayward_lantern",
      "domesticationinnovation:collar_tag",
      "minecraft:enchanting_table",
    ],
    Text.translatable("tooltip.society.adventuring_mastery.required")
  );
  [];
});
