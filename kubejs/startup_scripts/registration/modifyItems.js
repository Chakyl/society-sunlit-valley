ItemEvents.modification((e) => {
  e.modify("*", (item) => {
    item.maxDamage *= 3;
  });
  e.modify("gag:energized_hearthstone", (item) => {
    item.maxDamage = 2;
  });
  e.modify("gag:hearthstone", (item) => {
    item.maxDamage = 2;
  });
  e.modify("gag:escape_rope", (item) => {
    item.maxDamage = 1024;
  });
  global.geodeList.forEach((geodeItem) => {
    const { item } = geodeItem;
    e.modify(item, (item) => {
      item.rarity = "uncommon";
    });
  });
  global.frozenGeodeList.forEach((geodeItem) => {
    const { item } = geodeItem;
    e.modify(item, (item) => {
      item.rarity = "rare";
    });
  });
  global.magmaGeodeList.forEach((geodeItem) => {
    const { item } = geodeItem;
    e.modify(item, (item) => {
      item.rarity = "epic";
    });
  });
  e.modify("society:sparkstone", (item) => {
    item.rarity = "epic";
  });
  e.modify("numismatics:neptunium_coin", (item) => {
    item.rarity = "rare";
  });
  e.modify(
    [
      "numismatics:ancient_coin",
      "numismatics:prismatic_coin",
      "society:ancient_fruit_seed",
      "society:ancient_fruit",
      "society:sunlit_crystal",
      "society:plushie_wand",
      "society:treasure_totem",
      "society:recycled_core",
      "society:bubble_totem",
      "society:mystic_syrup",
      "society:net_bobber",
      "society:needle_bobber",
      "society:sparkpod",
      "society:sparkpod_seed",
      "cluttered:willow_sapling",
      "cluttered:willow_log",
      "cluttered:flowering_willow_log",
      "cluttered:flowering_willow_leaves",
      "cluttered:willow_leaves",
      "cluttered:willow_vines",
      "society:women_who_run_with_the_plushies",
      "society:the_spark_also_rises",
      "society:the_red_and_the_black",
      "society:the_quality_of_the_earth",
      "society:pond_house_five",
      "society:animal_cracker",
      "society:moon_statue",
      "society:roe_recycler",
      "minecraft:enchanting_table",
      "domesticationinnovation:collar_tag",
      "domesticationinnovation:wayward_lantern",
      "domesticationinnovation:drum",
    ],
    (item) => {
      item.rarity = "epic";
    },
  );
  e.modify(
    ["society:milk_pail", "society:magic_shears", "society:mood_scanner"],
    (item) => {
      item.maxStackSize = 1;
    },
  );
  e.modify("society:aquamarine", (item) => {
    item.rarity = "uncommon";
  });
  e.modify("society:amethyst_chunk", (item) => {
    item.rarity = "uncommon";
  });
  e.modify("society:ruby", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:topaz", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:magic_rope", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:magic_tunnel", (item) => {
    item.rarity = "rare";
  });
  e.modify("quark:diamond_heart", (item) => {
    item.rarity = "epic";
  });
  e.modify("society:jade", (item) => {
    item.rarity = "epic";
  });
  e.modify("society:prismatic_shard", (item) => {
    item.rarity = "epic";
  });
  e.modify("society:prismatic_shard_block", (item) => {
    item.rarity = "epic";
  });
  e.modify("society:golden_clock", (item) => {
    item.rarity = "epic";
  });
  const goldVanillaTools = [
    "minecraft:golden_hoe",
    "minecraft:golden_axe",
    "minecraft:golden_pickaxe",
    "minecraft:golden_shovel",
  ];
  goldVanillaTools.forEach((tool) => {
    e.modify(tool, (item) => {
      item.digSpeed = 7;
      item.tier = (tier) => {
        tier.level = 3;
      };
    });
  });
  const goldHammers = [
    "justhammers:gold_reinforced_impact_hammer",
    "justhammers:gold_hammer",
    "justhammers:gold_destructor_hammer",
    "justhammers:gold_impact_hammer",
    "justhammers:gold_reinforced_hammer",
  ];
  goldHammers.forEach((tool) => {
    e.modify(tool, (item) => {
      item.digSpeed = 7;
      item.tier = (tier) => {
        tier.level = 3;
      };
    });
  });
  e.modify("minecraft:golden_sword", (item) => {
    item.setAttackDamage(5.5);
  });
  e.modify("minecraft:golden_axe", (item) => {
    item.setAttackDamage(8);
  });
  const goldTools = [
    "farmersdelight:golden_knife",
    "aquaculture:gold_fishing_rod",
    "aquaculture:gold_fillet_knife",
    "sewingkit:gold_sewing_needle",
    "justhammers:gold_reinforced_hammer",
    "minecraft:golden_sword",
    "minecraft:golden_hoe",
    "minecraft:golden_axe",
    "minecraft:golden_pickaxe",
    "minecraft:golden_shovel",
    "justhammers:gold_reinforced_impact_hammer",
    "justhammers:gold_destructor_hammer",
    "justhammers:gold_impact_hammer",
    "justhammers:gold_hammer",
  ];
  goldTools.forEach((tool) => {
    e.modify(tool, (item) => {
      item.maxDamage *= tool.namespace === "justhammers" ? 2 : 16;
    });
  });
  e.modify("minecraft:golden_helmet", (item) => {
    item.maxDamage *= 3;
    item.setArmorProtection(2.5);
  });
  e.modify("minecraft:golden_chestplate", (item) => {
    item.maxDamage *= 3;
    item.setArmorProtection(7);
  });
  e.modify("minecraft:golden_leggings", (item) => {
    item.maxDamage *= 3;
    item.setArmorProtection(5.5);
  });
  e.modify("minecraft:golden_boots", (item) => {
    item.maxDamage *= 3;
    item.setArmorProtection(2.5);
  });
  e.modify("twigs:twig", (item) => (item.burnTime = 200));
  e.modify(
    "beachparty:cooked_mussel_meat",
    (item) =>
      (item.foodProperties = (food) => {
        food.hunger(5);
        food.saturation(0.5);
      }),
  );
  const netheriteTools = [
    "minecraft:netherite_axe",
    "minecraft:netherite_hoe",
    "minecraft:netherite_pickaxe",
    "minecraft:netherite_shovel",
  ];
  netheriteTools.forEach((armor) => {
    e.modify(armor, (item) => {
      item.setDigSpeed(item.digSpeed + 1);
      item.setAttackDamage(item.attackDamage + 2);
    });
  });
  e.modify("minecraft:netherite_sword", (item) => {
    item.setAttackDamage(10);
  });
  e.modify("minecraft:netherite_helmet", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(4);
  });
  e.modify("minecraft:netherite_chestplate", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(9);
  });
  e.modify("minecraft:netherite_leggings", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(7);
  });
  e.modify("minecraft:netherite_boots", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(3);
  });
  e.modify("botania:terrasteel_helmet", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(4);
  });
  e.modify("botania:terrasteel_chestplate", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(9);
  });
  e.modify("botania:terrasteel_leggings", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(7);
  });
  e.modify("botania:terrasteel_boots", (item) => {
    item.maxDamage *= 1.5;
    item.setArmorProtection(3);
  });

  e.modify("botania:manasteel_sword", (item) => {
    item.setAttackDamage(7);
  });
  e.modify("botania:elementium_sword", (item) => {
    item.setAttackDamage(8);
  });
  e.modify("oreganized:electrum_sword", (item) => {
    item.setAttackDamage(8);
  });
  // Netherite Tier
  e.modify("botania:terra_sword", (item) => {
    item.setAttackDamage(10);
  });
  e.modify("botania:star_sword", (item) => {
    item.setAttackDamage(10);
  });
  e.modify("botania:thunder_sword", (item) => {
    item.setAttackDamage(10);
  });
});
