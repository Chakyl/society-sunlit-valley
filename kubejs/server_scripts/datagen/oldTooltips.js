ItemEvents.tooltip((tooltip) => {


  // Furniture
  tooltip.add("tanukidecor:diy_workbench", Text.translatable("tooltip.society.diy_workbench").gray());
  tooltip.add("society:tanuki_catalog", Text.translatable("tooltip.society.tanuki_catalog").gray());
  tooltip.add("society:modern_catalog", Text.translatable("tooltip.society.modern_catalog").gray());
  tooltip.add("society:fantasy_catalog", Text.translatable("tooltip.society.fantasy_catalog").gray());
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
    /fantasyfurniture/,
    Text.translatable("tooltip.society.furnitures.fantasy").white()
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
      "society:mushroom_log",
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
    "society:magic_shears",
    Text.translatable("item.society.magic_shears.description.warn").red()
  );
  tooltip.add(
    "society:mood_scanner",
    Text.translatable("item.society.mood_scanner.description").gray()
  );
  tooltip.add(
    "society:mood_scanner",
    Text.translatable("item.society.mood_scanner.description.warn").red()
  );
  tooltip.add(
    "vintagedelight:deluxe_burger",
    Text.translatable("tooltip.society.deluxe_burger").gray()
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
  tooltip.addAdvanced("botania:apothecary_default", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(Text.translatable("tooltip.society.petal_apothecary.description").gold());
    } else {
      text.add([
        Text.translatable("tooltip.society.petal_apothecary.obtain").append(" "),
        Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
      ]);
    }
  });
  tooltip.add(
    "society:kinetic_blueprint",
    Text.translatable("item.society.kinetic_blueprint.description.tip").green()
  );
  tooltip.addAdvanced("society:kinetic_blueprint", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(Text.translatable("tooltip.society.kinetic_blueprint.description").gold());
    } else {
      text.add([
        Text.translatable("tooltip.society.kinetic_blueprint.obtain").append(" "),
        Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
      ]);
    }
  });
  tooltip.addAdvanced("society:skull_cavern_teleporter", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(Text.translatable("tooltip.society.skull_cavern_teleporter.description").gold());
    } else {
      text.add([
        Text.translatable("tooltip.society.skull_cavern_teleporter.obtain").append(" "),
        Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
      ]);
    }
  });
  tooltip.addAdvanced('aquaculture:nether_star_hook', (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(Text.translatable("tooltip.society.nether_star_hook.description").gold());
    } else {
      text.add([
        Text.translatable("tooltip.society.nether_star_hook.obtain").append(" "),
        Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
      ]);
    }
  }); 
  tooltip.addAdvanced("relics:magic_mirror", (item, advanced, text) => {
    if (tooltip.shift) {
      text.add(Text.translatable("tooltip.society.magic_mirror.description").gold());
    } else {
      text.add([
        Text.translatable("tooltip.society.magic_mirror.obtain").append(" "),
        Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
      ]);
    }
  });
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
    "furniture:blueprints",
    Text.translatable("tooltip.society.blueprints").gray()
  );
  tooltip.add(
    'via_romana:charting_map',
    Text.translatable("tooltip.society.charting_map").gray()
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
    "species:treeper_spawn_egg",
    Text.translatable("tooltip.society.treeper_spawn_egg").red()
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
    "vintagedelight:evaporator",
    Text.translatable("tooltip.society.evaporator").gray()
  );
  tooltip.add(
    "farmersdelight:rich_soil",
    Text.translatable("tooltip.society.rich_soil").gray()
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


  // Magnifying

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
  tooltip.add(
    "gag:escape_rope",
    Text.translatable("tooltip.society.escape_rope_hold").red()
  );
  tooltip.add(
    "society:face_note",
    Text.translatable("tooltip.society.face_note").green()
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
  tooltip.add(
    "society:dry_totem",
    Text.translatable("item.society.dry_totem.description").gray()
  );
  tooltip.add(
    "society:thunder_totem",
    Text.translatable("item.society.thunder_totem.description").gray()
  );
  tooltip.add(
    "society:rain_totem",
    Text.translatable("item.society.rain_totem.description").gray()
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
    "society:plushie_wand",
    Text.translatable("item.society.plushie_wand.description").gray()
  );
  const getMasteryTooltip = (id, mastery) => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      if (tooltip.shift) {
        text.add(Text.translatable("tooltip.society.general_mastery.description").aqua());
      } else {
        text.add([
          Text.translatable("tooltip.society.general_mastery.required").append(" "),
          Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
        ]);
      }
    });
  }


  [
    "society:the_quality_of_the_earth",
    "society:mystic_syrup",
    "cluttered:willow_log",
    "cluttered:willow_sapling",
    "society:bubble_totem",
    "society:treasure_totem",
    "society:sparkpod_seed",
    "society:sparkpod",
    "society:statue_of_cravings",
  ].forEach((item) => {
    getMasteryTooltip(item, "farming")
  });
  [
    "society:the_spark_also_rises",
    "society:recycled_core",
    "society:moon_statue",
  ].forEach((item) => {
    getMasteryTooltip(item, "mining")
  });
  [
    "society:the_red_and_the_black",
    "domesticationinnovation:drum",
    "domesticationinnovation:wayward_lantern",
    "domesticationinnovation:collar_tag",
    "minecraft:enchanting_table",
  ].forEach((item) => {
    getMasteryTooltip(item, "adventuring")
  });
  [
    "society:women_who_run_with_the_plushies",
    "society:animal_cracker",
    "society:sunlit_crystal",
  ].forEach((item) => {
    getMasteryTooltip(item, "husbandry")
  });
  [
    "society:pond_house_five",
    "society:roe_recycler",
    "society:net_bobber",
    "society:needle_bobber",
  ].forEach((item) => {
    getMasteryTooltip(item, "fishing")
  })
});
