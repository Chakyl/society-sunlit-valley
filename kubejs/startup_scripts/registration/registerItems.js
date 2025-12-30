console.info("[SOCIETY] registerItems.js loaded");

StartupEvents.registry("item", (e) => {
  e.create("oreganized:lead_sheet").texture("society:item/lead_sheet");
  e.create("oreganized:silver_sheet").texture("society:item/silver_sheet");
  e.create("herbalbrews:water_cup")
    .texture("society:item/water_cup")
    .maxStackSize(16);
  e.create("justhammers:small_core").texture("society:item/small_core");
  e.create("buildinggadgets2:gadget_core").texture("society:item/gadget_core");
  const tiers = [
    "Stone, Leather, Chainmail, and Cotton",
    "Iron",
    "Gold",
    "Diamond",
    "Neptunium",
  ];
  tiers.forEach((tier, index) => {
    if (index > 0) {
      let templateId = `society:${tier.toLowerCase()}_upgrade_smithing_template`;
      e.create(templateId)
        .texture(`society:item/smithing/${tier.toLowerCase()}`)
        .displayName("Smithing Template")
        .tooltip(
          Text.translatable(
            `item.society.${tier.toLowerCase()}_upgrade_smithing_template.upgrade`
          ).gray()
        )
        .tooltip(Text.of(" "))
        .tooltip(
          Text.translatable(
            "item.minecraft.smithing_template.applies_to"
          ).gray()
        )
        .tooltip(
          Text.of(" ").append(
            Text.translatable(
              `item.society.${tier.toLowerCase()}_upgrade_smithing_template.applies_to`
            ).blue()
          )
        )
        .tooltip(
          Text.translatable(
            "item.minecraft.smithing_template.ingredients"
          ).gray()
        )
        .tooltip(
          Text.of(" ").append(
            Text.translatable(
              `item.society.${tier.toLowerCase()}_upgrade_smithing_template.ingredients`
            ).blue()
          )
        );
    }
  });

  e.create("society:tanuki_leaf")
    .texture("society:item/tanuki_leaf")
    .displayName(Text.green("♤ Tanuki Leaf"));
  e.create("society:architects_digest")
    .texture("society:item/architects_digest")
    .displayName("♧ Architect's Digest");
  e.create("society:fantasy_dust")
    .texture("society:item/fantasy_dust")
    .displayName(Text.yellow("♡ Fantasy Dust"));
  e.create("society:stone_hand").texture("society:item/stone_hand");
  e.create("society:ancient_cog").texture("society:item/ancient_cog");
  e.create("society:pink_matter").texture("society:item/pink_matter");
  e.create("society:broken_clock").texture("society:item/broken_clock");
  e.create("society:sea_biscut")
    .texture("society:item/sea_biscut")
    .displayName("Sea Biscuit");
  e.create("society:black_opal").texture("society:item/black_opal");
  e.create("society:tiny_gnome").texture("society:item/tiny_gnome");
  e.create("society:ancient_roe").texture("society:item/aged_roe");
  e.create("society:infinity_worm").texture("society:item/infinity_worm");
  e.create("society:frosted_tip").texture("society:item/frosted_tip");
  e.create("society:inserter").texture("society:item/inserter");
  e.create("society:cordycep").texture("society:item/cordycep");
  e.create("society:enkephalin").texture("society:item/enkephalin");
  e.create("society:gray_anatomy").texture("society:item/gray_anatomy");
  e.create("society:recycled_core").texture("society:item/recycled_core");
  e.create("society:blueberry")
    .texture("society:item/blueberry")
    .food((food) => {
      food.hunger(1);
      food.saturation(2);
      food.fastToEat(true);
    });
  e.create("society:eggplant")
    .texture("society:item/eggplant")
    .food((food) => {
      food.hunger(2.5);
      food.saturation(1);
      food.fastToEat(true);
    });
  e.create("society:tubabacco_leaf").texture("society:item/tubabacco_leaf");
  e.create("society:dried_tubabacco_leaf")
    .texture("society:item/tubabacco_leaf")
    .color(0, 0x785246);
  e.create("society:tubasmoke_stick").texture("society:item/tubasmoke_stick");
  e.create("society:tubasmoke_carton").texture("society:item/tubasmoke_carton");
  e.create("society:ancient_fruit")
    .texture("society:item/ancient_fruit")
    .food((food) => {
      food.hunger(6);
      food.saturation(3);
      food.fastToEat(true);
    });
  e.create("society:sparkpod")
    .texture("society:item/sparkpod")
    .food((food) => {
      food.hunger(3);
      food.saturation(1);
      food.effect("minecraft:haste", 2000, 2, 1.0);
      food.fastToEat(true);
    });
  e.create("society:salmonberry")
    .texture("society:item/salmonberry")
    .food((food) => {
      food.hunger(1);
      food.saturation(2);
      food.fastToEat(true);
    });
  e.create("society:boysenberry")
    .texture("society:item/boysenberry")
    .food((food) => {
      food.hunger(1);
      food.saturation(3);
      food.fastToEat(true);
    });
  e.create("society:cranberry")
    .texture("society:item/cranberry")
    .food((food) => {
      food.hunger(1);
      food.saturation(2);
      food.fastToEat(true);
    });
  e.create("society:crystalberry")
    .texture("society:item/crystalberry")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.fastToEat(true);
    });
  e.create("society:ancient_juice")
    .texture("society:item/ancient_juice")
    .food((food) => {
      food.hunger(6);
      food.fastToEat(true);
      food.saturation(12);
    })
    .useAnimation("drink");
  e.create("society:starfruit_juice")
    .texture("society:item/starfruit_juice")
    .food((food) => {
      food.hunger(6);
      food.fastToEat(true);
      food.saturation(8);
    })
    .useAnimation("drink");
  e.create("society:prize_ticket").texture("society:item/prize_ticket");
  e.create("splendid_slimes:slime_ticket").texture(
    "splendid_slimes:item/slime_ticket"
  );
  e.create("society:furniture_box").texture("society:item/furniture_box");
  const fantasyBoxes = [
    "nordic",
    "dunmer",
    "venthyr",
    "bone",
    "royal",
    "necrolord",
  ];
  fantasyBoxes.forEach((theme) => {
    e.create(`society:fantasy_box_${theme}`)
      .texture(`society:item/fantasy_box_${theme}`)
      .tooltip(Text.translatable("tooltip.society.right_click_open").gray())
      .displayName(`Fantasy Box: ${global.formatName(theme)} Set`);
  });
  e.create("society:bouquet_bag").texture("society:item/bouquet_bag");
  e.create("society:scavenged_food_bag").texture("wildernature:item/loot_bag");
  e.create("society:plushie_capsule").modelJson({
    format_version: "1.21.6",
    credit: "Made with Blockbench",
    textures: {
      0: "whimsy_deco:item/gatcha_capsule",
      particle: "whimsy_deco:item/gatcha_capsule",
    },
    elements: [
      {
        from: [5.5, 0, 5.5],
        to: [10.5, 5, 10.5],
        rotation: { angle: 0, axis: "y", origin: [5.5, 1.5, 5.5] },
        faces: {
          north: { uv: [0, 10, 5, 15], texture: "#0" },
          east: { uv: [0, 10, 5, 15], texture: "#0" },
          south: { uv: [0, 10, 5, 15], texture: "#0" },
          west: { uv: [0, 10, 5, 15], texture: "#0" },
          up: { uv: [5, 0, 10, 5], texture: "#0" },
          down: { uv: [11, 10, 16, 15], texture: "#0" },
        },
      },
    ],
    display: {
      thirdperson_righthand: {
        translation: [0, 7.25, 0],
      },
      thirdperson_lefthand: {
        translation: [0, 7.25, 0],
      },
      firstperson_righthand: {
        translation: [0, 8, 0],
      },
      firstperson_lefthand: {
        translation: [0, 8, 0],
      },
      ground: {
        translation: [0, 2, 0],
        scale: [0.5, 0.5, 0.5],
      },
      gui: {
        rotation: [30, -135, 0],
        translation: [0, 5.75, 0],
        scale: [1.25, 1.25, 1.25],
      },
      head: {
        translation: [0, 14.25, 0],
      },
      fixed: {
        rotation: [0, -180, 0],
      },
    },
  });
  e.create("society:sap").texture("society:item/sap");
  e.create("society:rubber").texture("society:item/rubber");
  e.create("society:pine_tar").texture("society:item/pine_tar");
  e.create("society:oak_resin").texture("society:item/oak_resin");
  e.create("society:maple_syrup").texture("society:item/maple_syrup");
  e.create("society:battery").texture("society:item/battery");
  e.create("society:neptuna")
    .food((food) => {
      food.hunger(10).saturation(1).meat();
    })
    .texture("society:item/neptuna")
    .glow(true);

  e.create("numismatics:neptunium_coin")
    .texture("society:item/neptunium_coin")
    .tag("numismatics:coins");
  e.create("numismatics:ancient_coin")
    .texture("society:item/ancient_coin")
    .tag("numismatics:coins");
  e.create("numismatics:prismatic_coin")
    .texture("society:item/prismatic_coin")
    .tag("numismatics:coins");

  e.create("society:elytra_wing").texture("society:item/elytra_wing");
  e.create("society:fish_radar").texture("society:item/fish_radar");
  e.create("society:car_key")
    .texture("society:item/car_key")
    .maxStackSize(1)
    .rarity("epic");
  e.create("society:kinetic_blueprint").texture(
    "society:item/kinetic_blueprint"
  );
  e.create("society:botanical_tribute").texture(
    "society:item/botanical_tribute"
  );
  e.create("society:mana_fruit")
    .texture("society:item/mana_fruit")
    .food((food) => {
      food.hunger(3);
      food.saturation(1);
      food.effect("botania:soul_cross", 3000, 2, 1.0);
      food.fastToEat(true);
    });
  e.create("society:canvas")
    .texture("society:item/canvas")
    .displayName("Artisan Canvas");
  Color.DYE.forEach((color) => {
    e.create(`society:${color}_sheet`).texture(`society:item/sheets/${color}`);
  });
  e.create("society:merino_wool").texture("society:item/merino_wool");
  e.create("society:enriched_bone_meal").texture(
    "society:item/enriched_bonemeal"
  );
  e.create("society:river_jelly").texture("society:item/river_jelly");
  e.create("society:ocean_jelly").texture("society:item/ocean_jelly");
  e.create("society:nether_jelly")
    .texture("society:item/nether_jelly")
    .fireResistant(true);
  e.create("society:sunlit_pearl").texture("society:item/sunlit_pearl");
  e.create("crabbersdelight:crab_trap_bait").texture(
    "society:item/crab_trap_bait"
  );
  e.create("crabbersdelight:deluxe_crab_trap_bait").texture(
    "society:item/deluxe_crab_trap_bait"
  );
  e.create("crabbersdelight:mana_crab_trap_bait").texture(
    "society:item/mana_crab_trap_bait"
  );
  e.create("society:net_bobber")
    .texture("society:item/net_bobber")
    .maxStackSize(1);
  e.create("society:needle_bobber")
    .texture("sewingkit:item/netherite_sewing_needle")
    .maxStackSize(1);
  e.create("society:animal_cracker").texture("society:item/animal_cracker");
  e.create("society:sunlit_crystal").texture("society:item/sunlit_crystal");
  e.create("etcetera:bismuth_nugget").texture("society:item/bismuth_nugget");
  e.create("society:pig_race_ticket").texture("society:item/pig_race_ticket");
  e.create("society:multiplayer_pig_race_ticket").texture(
    "society:item/pig_race_ticket_multiplayer"
  );
  e.create("society:overflow_token").texture("society:item/overflow_token");
  // Regret Crystals
  e.create(`society:crystal_of_regret_farming`)
    .displayName("Crystal of Regret: Farming")
    .texture("society:item/crystal_of_regret")
    .tooltip(
      Text.translatable(
        "society.crystal_of_regret.description",
        global.translatableWithFallback(
          `society_skills.farming.category.title`,
          `Farming`
        )
      ).red()
    )
    .tooltip(
      Text.translatable("society.crystal_of_regret.description.warn").red()
    )
    .color(0, 0x087814);

  e.create(`society:crystal_of_regret_husbandry`)
    .displayName("Crystal of Regret: Husbandry")
    .texture("society:item/crystal_of_regret")
    .tooltip(
      Text.translatable(
        "society.crystal_of_regret.description",
        global.translatableWithFallback(
          `society_skills.husbandry.category.title`,
          `Husbandry`
        )
      ).red()
    )
    .tooltip(
      Text.translatable("society.crystal_of_regret.description.warn").red()
    )
    .color(0, 0x4f370d);

  e.create(`society:crystal_of_regret_mining`)
    .displayName("Crystal of Regret: Mining")
    .texture("society:item/crystal_of_regret")
    .tooltip(
      Text.translatable(
        "society.crystal_of_regret.description",
        global.translatableWithFallback(
          `society_skills.mining.category.title`,
          `Mining`
        )
      ).red()
    )
    .tooltip(
      Text.translatable("society.crystal_of_regret.description.warn").red()
    )
    .color(0, 0x383735);

  e.create(`society:crystal_of_regret_fishing`)
    .displayName("Crystal of Regret: Fishing")
    .texture("society:item/crystal_of_regret")
    .tooltip(
      Text.translatable(
        "society.crystal_of_regret.description",
        global.translatableWithFallback(
          `society_skills.fishing.category.title`,
          `Fishing`
        )
      ).red()
    )
    .tooltip(
      Text.translatable("society.crystal_of_regret.description.warn").red()
    )
    .color(0, 0x1eabd6);

  e.create(`society:crystal_of_regret_adventuring`)
    .displayName("Crystal of Regret: Adventuring")
    .texture("society:item/crystal_of_regret")
    .tooltip(
      Text.translatable(
        "society.crystal_of_regret.description",
        global.translatableWithFallback(
          `society_skills.adventuring.category.title`,
          `Adventuring`
        )
      ).red()
    )
    .tooltip(
      Text.translatable("society.crystal_of_regret.description.warn").red()
    )
    .color(0, 0x6e1313);

  // Artifacts
  global.artifacts.forEach((artifact) => {
    const { item } = artifact;
    if (
      item !== "society:princess_hairbrush" &&
      item !== "society:perfect_cherry"
    ) {
      e.create(item)
        .texture(`society:item/artifacts/${item.path}`)
        .rarity("uncommon");
    }
  });
  e.create("society:perfect_cherry")
    .texture("society:item/artifacts/perfect_cherry")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.eaten((e) => {
        const { player, server, level } = e;
        if (!level.isClientSide()) {
          if (Math.random() < 0.2) {
            server.runCommandSilent(
              `execute in ${level.dimension} run summon lightning_bolt ${player.x} ${player.y} ${player.z}`
            );
          }
          if (Math.random() < 0.2) {
            server.runCommandSilent(
              `effect give ${player.username} minecraft:poison 100 1`
            );
          }
          if (Math.random() < 0.2) {
            server.runCommandSilent(
              `effect give ${player.username} minecraft:wither 100 1`
            );
          }
          if (Math.random() < 0.2) {
            server.runCommandSilent(
              `effect give ${player.username} legendarycreatures:convulsion 100 1`
            );
          }
          if (Math.random() < 0.2) {
            server.runCommandSilent(
              `effect give ${player.username} minecraft:bad_omen 100 1`
            );
          }

          if (Math.random() < 0.4) {
            player.attack(10);
          }
          player.give("society:perfect_cherry");
        }
      });
    });

  // Food
  e.create("society:energy_drink")
    .texture("society:item/drinks/energy_drink")
    .food((food) => {
      food.fastToEat(true);
      food.effect("botania:emptiness", 4800, 0, 1.0);
      food.effect("minecraft:speed", 4800, 2, 1.0);
    })
    .useAnimation("drink");
  e.create("society:death_liquid")
    .texture("society:item/drinks/death_liquid")
    .tooltip(
      Text.translatable("item.society.death_liquid.description").darkPurple()
    )
    .food((food) => {
      food.fastToEat(true);
      food.effect("minecraft:poison", 800, 2, 1.0);
    })
    .useAnimation("drink");
  e.create("herbalbrews:ground_coffee").texture("society:item/ground_coffee");

  e.create("herbalbrews:cinnamon_coffee")
    .texture("society:item/drinks/cinnamon_coffee")
    .food((food) => {
      food.alwaysEdible(true);
      food.hunger(1);
      food.saturation(2);
      food.effect("farm_and_charm:grandmas_blessing", 2400, 0, 1.0);
    })
    .useAnimation("drink");

  e.create("herbalbrews:hazelnut_coffee")
    .texture("society:item/drinks/hazelnut_coffee")
    .food((food) => {
      food.alwaysEdible(true);
      food.hunger(1);
      food.saturation(2);
      food.effect("minecraft:resistance", 2400, 0, 1.0);
    })
    .useAnimation("drink");

  e.create("herbalbrews:chai_tea")
    .texture("society:item/drinks/chai_tea")
    .food((food) => {
      food.alwaysEdible(true);
      food.hunger(1);
      food.saturation(2);
      food.effect("herbalbrews:tough", 6000, 1, 1.0);
    })
    .useAnimation("drink");

  e.create("bakery:hazelnut_ella")
    .texture("society:item/hazelnut_ella")
    .food((food) => {
      food.hunger(5);
      food.saturation(2);
      food.effect("farm_and_charm:grandmas_blessing", 6000, 1, 1.0);
    });

  e.create("society:chicken_tortilla_soup")
    .texture("society:item/chicken_tortilla_soup")
    .food((food) => {
      food.hunger(8);
      food.saturation(1);
      food.effect("farm_and_charm:feast", 800, 0, 1.0);
    });

  e.create("society:mexican_street_corn")
    .texture("society:item/mexican_street_corn")
    .food((food) => {
      food.hunger(7);
      food.saturation(1);
      food.fastToEat(true);
      food.effect("farm_and_charm:feast", 200, 0, 1.0);
    });

  e.create("bakery:chocolate_donut")
    .texture("society:item/chocolate_donut")
    .food((food) => {
      food.hunger(5);
      food.saturation(2);
    });
  e.create("society:blueberry_icecream")
    .texture("society:item/blueberry_icecream")
    .food((food) => {
      food.hunger(2);
      food.saturation(2);
    });

  e.create("society:ancient_cookie")
    .texture("society:item/ancient_cookie")
    .food((food) => {
      food.hunger(4);
      food.saturation(4);
      food.effect("farm_and_charm:grandmas_blessing", 6000, 1, 1.0);
    });

  e.create("society:ground_cinnamon").texture("society:item/ground_cinnamon");
  e.create("society:chai_blend").texture("society:item/chai_blend");

  e.create("society:magic_rock_candy")
    .texture("society:item/magic_rock_candy")
    .rarity("epic")
    .food((food) => {
      food.hunger(20);
      food.saturation(20);
      food.effect("minecraft:haste", 6000, 2, 1.0);
      food.effect("minecraft:luck", 6000, 2, 1.0);
      food.effect("minecraft:strength", 6000, 0, 1.0);
      food.effect("minecraft:resistance", 6000, 2, 1.0);
      food.effect("farm_and_charm:sweets", 6000, 2, 1.0);
      food.effect("farm_and_charm:feast", 6000, 2, 1.0);
    });

  [
    "book_of_stars",
    "yard_work_yearly",
    "husbandry_hourly",
    "mining_monthly",
    "wet_weekly",
    "combat_quarterly",
    "animal_fancy",
    "banana_karenina",
    "brine_and_punishment",
    "bluegill_meridian",
    "bullfish_jobs",
    "canadian_and_famous",
    "first_aid_guide",
    "hitting_hard_and_soft",
    "intro_to_algorithms",
    "no_name_for_the_sheep",
    "paradise_crop",
    "pond_house_five",
    "the_red_and_the_black",
    "slime_contain_protect",
    "slouching_towards_artistry",
    "the_spark_also_rises",
    "universal_methods_of_farming",
    "wuthering_logs",
    "women_who_run_with_the_plushies",
  ].forEach((item) => {
    e.create(`society:${item}`).texture(`society:item/books/${item}`);
  });
  e.create("society:debt_caverns")
    .displayName("Debt: The First 5000 Caverns")
    .texture("society:item/books/debt_caverns");
  e.create("society:frogs_bounty_bazaar")
    .displayName("Frog's Bounty Bazaar")
    .texture("society:item/books/frogs_bounty_bazaar");
  e.create("society:phenomenology_of_treasure")
    .displayName("The Phenomenology of Treasure")
    .texture("society:item/books/phenomenology_of_treasure");
  // Husbandry
  [
    "animal_feed",
    "mana_feed",
    "candied_animal_feed",
    "milk_pail",
    "friendship_necklace",
    "fine_wool",
    "truffle",
    "truffle_oil",
    "miracle_potion",
    "magic_shears",
    "large_egg",
    "large_duck_egg",
    "large_goose_egg",
    "large_turkey_egg",
    "large_galliraptor_egg",
    "penguin_egg",
    "flamingo_egg",
  ].forEach((item) => {
    e.create(`society:${item}`).texture(`society:item/husbandry/${item}`);
  });
  e.create("society:cracked_egg").texture("society:item/cracked_egg");
  e.create("society:mayonnaise")
    .texture("society:item/mayo/mayonnaise")
    .food((food) => {
      food.hunger(4);
      food.saturation(0.5);
      food.effect("minecraft:nausea", 600, 1, 1.0);
    })
    .tag("society:small_mayonnaise")
    .useAnimation("drink");

  e.create("society:large_mayonnaise")
    .texture("society:item/mayo/large_mayonnaise")
    .tag("society:large_mayonnaise")
    .food((food) => {
      food.hunger(8);
      food.saturation(0.5);
      food.effect("minecraft:nausea", 1200, 1, 1.0);
    })
    .useAnimation("drink");

  const mayoEggs = [
    "duck",
    "goose",
    "turkey",
    "galliraptor",
    "turtle",
    "parrot",
    "birt",
    "springling",
    "penguin",
    "wraptor",
    "sniffer",
    "petrified",
    "flamingo",
    "cruncher",
    "golden",
    "dragon",
  ];

  const largeMayoEggs = ["duck", "goose", "turkey", "galliraptor"];
  mayoEggs.forEach((egg) => {
    e.create(`society:${egg}_mayonnaise`)
      .texture(`society:item/mayo/${egg}_mayonnaise`)
      .tag("society:small_mayonnaise")
      .food((food) => {
        food.hunger(4);
        food.saturation(0.5);
        food.effect("minecraft:nausea", 600, 1, 1.0);
      });
    if (largeMayoEggs.includes(egg)) {
      e.create(`society:large_${egg}_mayonnaise`)
        .texture(`society:item/mayo/large_${egg}_mayonnaise`)
        .tag("society:large_mayonnaise")
        .food((food) => {
          food.hunger(8);
          food.saturation(0.5);
          food.effect("minecraft:nausea", 1200, 1, 1.0);
        });
    }
  });
  [
    "milk",
    "large_milk",
    "sheep_milk",
    "large_sheep_milk",
    "buffalo_milk",
    "large_buffalo_milk",
    "goat_milk",
    "large_goat_milk",
    "warped_milk",
    "large_warped_milk",
    "tri_bull_milk",
    "large_tri_bull_milk",
    "amethyst_milk",
    "large_amethyst_milk",
    "grain_milk",
    "large_grain_milk",
  ].forEach((item) => {
    e.create(`society:${item}`)
      .texture(`society:item/husbandry/${item}`)
      .food((food) => {
        food.hunger(item.includes("large") ? 5 : 1);
        food.saturation(1);
        food.effect("farm_and_charm:grandmas_blessing", 200, 0, 1.0);
        food.alwaysEdible(true);
      })
      .useAnimation("drink");
  });
  e.create("society:butterfly_amber").texture("society:item/butterfly_amber");
  e.create("society:moth_pollen").texture("society:item/moth_pollen");
  e.create(`society:magic_rope`).texture(`society:item/magic_rope`);
  e.create(`society:magic_tunnel`).texture(`society:item/magic_tunnel`);
  e.create(`society:magnifying_glass`)
    .texture(`society:item/magnifying_glass`)
    .maxStackSize(1);
  e.create(`society:cornucopia`)
    .texture(`society:item/cornucopia`)
    .maxStackSize(1);
  e.create("society:relic_trove").texture("society:item/relic_trove");
  e.create("society:artifact_trove").texture("society:item/artifact_trove");
  e.create("society:omni_geode").texture("society:item/omni_geode");
  e.create("society:prismatic_shard").texture("society:item/prismatic_shard");
  e.create("society:geode_buster").texture("society:item/geode_buster");
  e.create("society:geode").texture("society:item/geode/geode");

  global.geodeList.forEach((geode) => {
    if (geode.item !== "society:earth_crystal")
      e.create(`society:${geode.item.path}`).texture(
        `society:item/geode/${geode.item.path}`
      );
  });

  e.create("society:frozen_geode").texture(
    "society:item/frozen_geode/frozen_geode"
  );

  global.frozenGeodeList.forEach((geode) => {
    e.create(`society:${geode.item.path}`).texture(
      `society:item/frozen_geode/${geode.item.path}`
    );
  });
  e.create("society:magma_geode").texture(
    "society:item/magma_geode/magma_geode"
  );

  global.magmaGeodeList.forEach((geode) => {
    if (geode.item !== "society:fire_quartz")
      e.create(`society:${geode.item.path}`).texture(
        `society:item/magma_geode/${geode.item.path}`
      );
  });

  global.gems.forEach((gem) => {
    e.create(`society:${gem.item.path}`).texture(
      `society:item/gems/${gem.item.path}`
    );
  });

  e.create("society:sparkstone").texture("society:item/sparkstone");
  e.create("society:sparkstone_dust").texture("society:item/sparkstone_dust");
  e.create("society:spark_gro")
    .texture("society:item/spark_gro")
    .displayName("Spark-Gro");

  e.create(`society:magic_bulb`).texture(`society:item/magic_bulb`);
  e.create("create:crushed_raw_bismuth").texture(
    "society:item/crushed_raw_bismuth"
  );

  global.picklableVegetables.forEach((product) => {
    const splitProduct = product.item.split(":");
    let texturePath = `${splitProduct[0]}:item/${splitProduct[1]}`;
    e.create(`society:pickled_${splitProduct[1]}`)
      .texture(texturePath)
      .color(0, 0xd8f266)
      .food((food) => {
        food.hunger(4);
        food.saturation(1);
        food.effect("farmersdelight:nourishment", 600, 1, 1.0);
      });
  });

  global.preserves.forEach((jar) => {
    if (jar.item.includes("society")) {
      e.create(`society:${jar.item.path}`)
        .texture(`society:item/preserves/${jar.item.path}`)
        .food((food) => {
          food.hunger(5);
          food.saturation(1);
          food.fastToEat(true);
          food.effect("farm_and_charm:grandmas_blessing", 6000, 1, 1.0);
        });
    }
  });
  // Dehydrator outputs
  e.create(`society:raisins`)
    .texture(`society:item/raisins`)
    .food((food) => {
      food.hunger(9);
      food.saturation(0.5);
      food.fastToEat(true);
    });
  e.create(`society:nether_raisins`)
    .texture(`society:item/nether_raisins`)
    .food((food) => {
      food.hunger(9);
      food.saturation(0.5);
      food.fastToEat(true);
    });
  e.create(`society:dried_shimmering_mushrooms`).texture(
    `society:item/dried_shimmering_mushrooms`
  );
  const dehydratorMushroomMapping = [
    { item: "minecraft:brown_mushroom", hex: 0xca9777 },
    { item: "minecraft:red_mushroom", hex: 0xfb2929 },
    { item: "minecraft:crimson_fungus", hex: 0xa82812 },
    { item: "minecraft:warped_fungus", hex: 0x14b283 },
    { item: "quark:glow_shroom", hex: 0xc1f0dc },
    { item: "ribbits:toadstool", hex: 0xab1c2c },
    { item: "species:alphacene_mushroom", hex: 0xecdb74 },
    { item: "verdantvibes:bracket_mushroom", hex: 0x7d563b },
  ];
  global.dehydratableMushrooms.forEach((item) => {
    const itemHex = dehydratorMushroomMapping.find(
      (val) => val.item === item
    )?.hex;
    e.create(`society:dried_${item.path}`)
      .texture(`society:item/dried_mushrooms`)
      .color(0, itemHex)
      .food((food) => {
        food.hunger(9);
        food.saturation(0.5);
        food.fastToEat(true);
      });
  });
  const dehydratorFruitMapping = [
    { item: "minecraft:sweet_berries", hex: 0xa30700 },
    { item: "farm_and_charm:strawberry", hex: 0xe6472d },
    { item: "autumnity:foul_berries", hex: 0xd0af33 },
    { item: "minecraft:apple", hex: 0xfc1c2a },
    { item: "minecraft:melon_slice", hex: 0xbd3023 },
    { item: "minecraft:chorus_fruit", hex: 0xa17fa0 },
    { item: "vintagedelight:gearo_berry", hex: 0xf068df },
    { item: "minecraft:glow_berries", hex: 0xee9444 },
    { item: "society:blueberry", hex: 0x4c64b2 },
    { item: "society:ancient_fruit", hex: 0x06b5c5 },
    { item: "atmospheric:currant", hex: 0x2d2e32 },
    { item: "atmospheric:yucca_fruit", hex: 0xb6fc67 },
    { item: "atmospheric:orange", hex: 0xfc9919 },
    { item: "atmospheric:passion_fruit", hex: 0xebb020 },
    { item: "pamhc2trees:starfruititem", hex: 0xf8d035 },
    { item: "pamhc2trees:mangoitem", hex: 0xf1bc2e },
    { item: "pamhc2trees:lycheeitem", hex: 0xd5dce2 },
    { item: "vinery:cherry", hex: 0xa2252e },
    { item: "pamhc2trees:peachitem", hex: 0xeb996e },
    { item: "pamhc2trees:plumitem", hex: 0xcc7dd1 },
    { item: "pamhc2trees:pawpawitem", hex: 0x96bf75 },
    { item: "pamhc2trees:bananaitem", hex: 0xe0c930 },
    { item: "pamhc2trees:dragonfruititem", hex: 0xd5dce2 },
    { item: "pamhc2trees:lemonitem", hex: 0xf8d035 },
    { item: "society:salmonberry", hex: 0xe83b3b },
    { item: "society:boysenberry", hex: 0xcf657f },
    { item: "society:cranberry", hex: 0xb33831 },
    { item: "society:crystalberry", hex: 0xb33831 },
    { item: "windswept:wild_berries", hex: 0xa53982 },
    { item: "society:mana_fruit", hex: 0x37fcf7 },
    { item: "society:sparkpod", hex: 0x9d1576 },
  ];
  global.dehydratableFruits.forEach((item) => {
    const itemHex = dehydratorFruitMapping.find(
      (val) => val.item === item
    )?.hex;
    let itemId = item.path;
    if (itemId.includes("item"))
      itemId = itemId.substring(0, itemId.length - 4);
    e.create(`society:dried_${itemId}`)
      .texture(`society:item/dried_fruit`)
      .color(0, itemHex)
      .food((food) => {
        food.hunger(9);
        food.saturation(0.5);
        food.fastToEat(true);
      });
  });
  const ageableProductsTextureMap = [
    {
      item: "vinery:creepers_crush",
      texture: "creeper_wine",
    },
    {
      item: "vinery:villagers_fright",
      texture: "bad_omen_wine",
    },
    {
      item: "meadow:goat_cheese_block",
      texture: "wheel_of_goat_cheese",
    },
    {
      item: "meadow:cheese_block",
      texture: "wheel_of_cheese",
    },
    {
      item: "meadow:amethyst_cheese_block",
      texture: "wheel_of_amethyst_cheese",
    },
    {
      item: "meadow:warped_cheese_block",
      texture: "warped_cheese",
    },
    {
      item: "meadow:sheep_cheese_block",
      texture: "wheel_of_sheep_cheese",
    },
    {
      item: "meadow:grain_cheese_block",
      texture: "wheel_of_grain_cheese",
    },
    {
      item: "meadow:buffalo_cheese_block",
      texture: "wheel_of_herb_cheese",
    },
    {
      item: "brewery:whiskey_jojannik",
      texture: "whiskey_jo_jannik",
    },
    {
      item: "brewery:whiskey_lilitusinglemalt",
      texture: "whiskey_lilitu_single_malt",
    },
    {
      item: "brewery:whiskey_cristelwalker",
      texture: "whiskey_cristel_walker",
    },
    {
      item: "brewery:whiskey_carrasconlabel",
      texture: "whiskey_carrascon_label",
    },
    {
      item: "brewery:whiskey_smokey_reverie",
      texture: "whiskey_smoky_reverie",
    },
  ];

  global.ageableProductInputs.forEach((product) => {
    const splitProduct = product.item.split(":");
    let texturePath = `${splitProduct[0]}:item/${splitProduct[1]}`;
    ageableProductsTextureMap.find((e) => {
      if (e.item === product.item) {
        texturePath = `${splitProduct[0]}:item/${e.texture}`;
      }
    });
    if (splitProduct[0] === "society")
      texturePath = `${splitProduct[0]}:item/drinks/${splitProduct[1]}`;
    e.create(`society:aged_${splitProduct[1]}`)
      .texture(texturePath)
      .displayName(
        product.item === "brewery:whiskey_maggoallan" ||
          product.item === "brewery:whiskey_smokey_reverie"
          ? `§6Double-${product.name}`
          : `§bAged ${product.name}`
      )
      .glow(true)
      .color(0, 0xcae9f4);

    e.create(`society:double_aged_${splitProduct[1]}`)
      .texture(texturePath)
      .displayName(
        product.item === "brewery:whiskey_maggoallan" ||
          product.item === "brewery:whiskey_smokey_reverie"
          ? `§6Triple-${product.name}`
          : `§3Double-Aged ${product.name}`
      )
      .glow(true)
      .color(0, 0x28adde);
  });
  const fishTexureMapping = [
    {
      item: "unusualfishmod:raw_snowflake",
      texture: "raw_snowflake_tail_fish",
      displayId: "frosty_fin",
    },
    {
      item: "unusualfishmod:raw_bark_angelfish",
      texture: "raw_bark_angel",
      displayId: "bark_angelfish",
    },
    {
      item: "unusualfishmod:raw_eyelash",
      texture: "raw_eyelash_fish",
      displayId: "eyelash",
    },
  ];

  const fishRoeMapping = [
    { item: "aquaculture:atlantic_herring", hex: 0x8a9cab },
    { item: "minecraft:pufferfish", hex: 0xf9b00a },
    { item: "aquaculture:minnow", hex: 0x40537f },
    { item: "aquaculture:bluegill", hex: 0x327355 },
    { item: "aquaculture:perch", hex: 0x829c4d },
    { item: "minecraft:salmon", hex: 0xaa3835 },
    { item: "aquaculture:blackfish", hex: 0x6c6254 },
    { item: "aquaculture:brown_trout", hex: 0xac8c5b },
    { item: "aquaculture:carp", hex: 0x9e7150 },
    { item: "aquaculture:piranha", hex: 0x8c8b9e },
    { item: "aquaculture:smallmouth_bass", hex: 0x5da759 },
    { item: "minecraft:cod", hex: 0xcdb695 },
    { item: "aquaculture:pollock", hex: 0x777d6c },
    { item: "aquaculture:jellyfish", hex: 0xe3afe2 },
    { item: "aquaculture:rainbow_trout", hex: 0x939056 },
    { item: "aquaculture:pink_salmon", hex: 0x515133 },
    { item: "minecraft:tropical_fish", hex: 0xf17226 },
    { item: "aquaculture:red_grouper", hex: 0x5e262a },
    { item: "aquaculture:gar", hex: 0x6d774b },
    { item: "aquaculture:muskellunge", hex: 0xb1a89f },
    { item: "aquaculture:synodontis", hex: 0xbc9359 },
    { item: "aquaculture:tambaqui", hex: 0xbaac8f },
    { item: "aquaculture:atlantic_cod", hex: 0x8f8777 },
    { item: "aquaculture:boulti", hex: 0x7a6e5d },
    { item: "aquaculture:leech", hex: 0x26242b },
    { item: "aquaculture:catfish", hex: 0x61667a },
    { item: "aquaculture:tuna", hex: 0x7c7784 },
    { item: "aquaculture:bayad", hex: 0xbfc2ad },
    { item: "aquaculture:arapaima", hex: 0xa6b39b },
    { item: "aquaculture:atlantic_halibut", hex: 0x504438 },
    { item: "aquaculture:starshell_turtle", hex: 0xced2d2 },
    { item: "aquaculture:brown_shrooma", hex: 0xbca18e },
    { item: "aquaculture:red_shrooma", hex: 0xce494f },
    { item: "aquaculture:arrau_turtle", hex: 0x6c7f76 },
    { item: "aquaculture:capitaine", hex: 0xb1b07c },
    { item: "aquaculture:box_turtle", hex: 0x787b33 },
    { item: "aquaculture:pacific_halibut", hex: 0xa17e5e },
    { item: "aquaculture:goldfish", hex: 0xc3a364 },
    { item: "crabbersdelight:shrimp", hex: 0xdb4f39 },
    { item: "crabbersdelight:clawster", hex: 0x343239 },
    { item: "crabbersdelight:crab", hex: 0x40537f },
    { item: "crabbersdelight:clam", hex: 0x6ba2c1 },
    { item: "netherdepthsupgrade:searing_cod", hex: 0xe05407 },
    { item: "netherdepthsupgrade:blazefish", hex: 0xfcf244 },
    { item: "netherdepthsupgrade:lava_pufferfish", hex: 0xf80c0c },
    { item: "netherdepthsupgrade:obsidianfish", hex: 0x332b45 },
    { item: "netherdepthsupgrade:bonefish", hex: 0xd0d0d0 },
    { item: "netherdepthsupgrade:wither_bonefish", hex: 0x282828 },
    { item: "netherdepthsupgrade:magmacubefish", hex: 0xb63406 },
    { item: "netherdepthsupgrade:glowdine", hex: 0xe2c267 },
    { item: "netherdepthsupgrade:soulsucker", hex: 0x01a5aa },
    { item: "netherdepthsupgrade:fortress_grouper", hex: 0xe3851d },
    { item: "netherdepthsupgrade:eyeball_fish", hex: 0x911515 },
    { item: "society:neptuna", hex: 0x3becbe },
    { item: "unusualfishmod:raw_sneep_snorp", hex: 0x19228e },
    { item: "unusualfishmod:raw_picklefish", hex: 0x6f7a41 },
    { item: "unusualfishmod:raw_forkfish", hex: 0x9f9734 },
    { item: "unusualfishmod:raw_beaked_herring", hex: 0x718c8a },
    { item: "unusualfishmod:raw_sailor_barb", hex: 0xbac990 },
    { item: "unusualfishmod:raw_demon_herring", hex: 0xec782f },
    { item: "unusualfishmod:raw_triple_twirl_pleco", hex: 0x415668 },
    { item: "unusualfishmod:raw_copperflame_anthias", hex: 0x45c380 },
    { item: "unusualfishmod:raw_drooping_gourami", hex: 0xa61377 },
    { item: "unusualfishmod:raw_duality_damselfish", hex: 0xafb3b6 },
    { item: "unusualfishmod:raw_blind_sailfin", hex: 0xbea39a },
    { item: "unusualfishmod:raw_circus_fish", hex: 0x9b3c2b },
    { item: "unusualfishmod:raw_snowflake", hex: 0x91b2c8 },
    { item: "unusualfishmod:raw_aero_mono", hex: 0x617c92 },
    { item: "unusualfishmod:raw_hatchetfish", hex: 0xb43e5a },
    { item: "unusualfishmod:raw_spindlefish", hex: 0xf575f5 },
    { item: "unusualfishmod:raw_bark_angelfish", hex: 0x755838 },
    { item: "unusualfishmod:raw_amber_goby", hex: 0xfcae2a },
    { item: "unusualfishmod:raw_eyelash", hex: 0xdc66a0 },
    { item: "crittersandcompanions:koi_fish", hex: 0xef7639 },
  ];
  // Smoked fish, roe, aged roe, and bait
  global.fish.forEach((fish) => {
    const splitFish = fish.item.split(":");
    let fishId = splitFish[1];
    if (
      ["barrel", "roe", "meat"].some((denied) => splitFish[1].includes(denied))
    )
      return;
    let baseTexturePath = `${splitFish[0]}:item/${splitFish[1]}`;
    if (fishId.includes("raw_")) {
      fishId = fishId.substring(4, fishId.length);
      fishTexureMapping.find((e) => {
        if (e.item === fish.item) {
          baseTexturePath = `${splitFish[0]}:item/${e.texture}`;
          fishId = e.displayId;
        }
      });
    }
    e.create(`society:smoked_${fishId}`)
      .texture(baseTexturePath)
      .color(0, 0x785246)
      .tag("forge:cooked_fishes")
      .tag("society:smoked_fish")
      .food((food) => {
        food.hunger(3);
        food.saturation(2);
      });
    const roeHex = fishRoeMapping.find((val) => val.item === fish.item)?.hex;
    e.create(`society:${fishId}_roe`)
      .texture("society:item/roe")
      .color(0, roeHex);
    e.create(`society:aged_${fishId}_roe`)
      .texture("society:item/aged_roe")
      .color(0, roeHex)
      .food((food) => {
        food.hunger(5);
        food.saturation(2);
      });
    e.create(`society:${fishId}_bait`)
      .texture("society:item/fish_bait")
      .color(0, roeHex)
      .tag("crabbersdelight:crab_trap_bait")
      .tooltip(Text.translatable("society.fish_bait.description").gray());
  });

  // Pristine gems
  global.geodeList.forEach((geode) => {
    if (geode.item === "society:froggy_helm") return;
    e.create(`society:pristine_${geode.item.path}`)
      .texture(`society:item/geode/${geode.item.path}`)
      .glow(true)
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });

  global.frozenGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_drum") return;
    e.create(`society:pristine_${geode.item.path}`)
      .texture(`society:item/frozen_geode/${geode.item.path}`)
      .glow(true)
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });

  global.magmaGeodeList.forEach((geode) => {
    if (geode.item === "society:ribbit_gadget") return;
    e.create(`society:pristine_${geode.item.path}`)
      .texture(`society:item/magma_geode/${geode.item.path}`)
      .glow(true)
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });

  global.gems.forEach((gem) => {
    e.create(`society:pristine_${gem.item.path}`)
      .texture(`society:item/gems/${gem.item.path}`)
      .glow(true)
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });

  const vanillaPristine = [
    "minecraft:emerald",
    "minecraft:lapis_lazuli",
    "minecraft:diamond",
    "minecraft:amethyst_shard",
    "minecraft:prismarine_crystals",
    "minecraft:quartz",
  ];
  vanillaPristine.forEach((gem) => {
    e.create(`society:pristine_${gem.path}`)
      .texture(`minecraft:item/${gem.path}`)
      .glow(true)
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });

  e.create("veggiesdelight:garlic_seed").texture(
    "veggiesdelight:item/garlic_seed"
  );
});
