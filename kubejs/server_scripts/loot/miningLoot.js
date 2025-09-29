console.info("[SOCIETY] miningLoot.js loaded");

LootJS.modifiers((e) => {
  const overworldOres = [
    "meadow:alpine_diamond_ore",
    "meadow:alpine_salt_ore",
    "meadow:alpine_redstone_ore",
    "meadow:alpine_coal_ore",
    "meadow:alpine_lapis_ore",
    "meadow:alpine_gold_ore",
    "meadow:alpine_iron_ore",
    "meadow:alpine_copper_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:gold_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:iron_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:coal_ore",
    "minecraft:redstone_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:diamond_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:lapis_ore",
    "create:deepslate_zinc_ore",
    "create:zinc_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:emerald_ore",
  ];
  overworldOres.forEach((ore) => {
    e.addBlockLootModifier(ore).pool((p) => {
      p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
      p.matchEntity((entity) => {
        entity.anyType("minecraft:player");
      });
      p.randomChance(0.1).addLoot("society:geode");
    });
    e.addBlockLootModifier(ore)
      .hasAnyStage("excavator")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:geode");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("mineralogist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:earth_crystal");
      });
    e.addBlockLootModifier(ore)
      .biome("#forge:is_cold")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.matchEntity((entity) => {
          entity.anyType("minecraft:player");
        });
        p.randomChance(0.1).addLoot("society:frozen_geode");
      });
    e.addBlockLootModifier(ore)
      .biome("#forge:is_cold")
      .hasAnyStage("excavator")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:frozen_geode");
      });
    e.addBlockLootModifier(ore)
      .playerPredicate((p) => global.getSeasonFromLevel(p.level) === "winter")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.matchEntity((entity) => {
          entity.anyType("minecraft:player");
        });
        p.randomChance(0.1).addLoot("society:frozen_geode");
      });
    e.addBlockLootModifier(ore)
      .playerPredicate((p) => global.getSeasonFromLevel(p.level) === "winter")
      .hasAnyStage("excavator")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:frozen_geode");
      });
    e.addBlockLootModifier(ore)
      .biome("#forge:is_cold")
      .hasAnyStage("mineralogist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:frozen_tear");
      });
    e.addBlockLootModifier(ore)
      .biome("#society:is_skull_cavern")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.matchEntity((entity) => {
          entity.anyType("minecraft:player");
        });
        p.randomChance(0.04).addLoot("society:omni_geode");
      });
    e.addBlockLootModifier(ore)
      .biome("#society:is_skull_cavern")
      .hasAnyStage("excavator")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.04).addLoot("society:omni_geode");
      });
    e.addBlockLootModifier(ore)
      .biome("#society:is_skull_cavern")
      .hasAnyStage("mineralogist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.02).addLoot("society:jade");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("blockchain")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.03).addLoot("numismatics:crown");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("furniture_archaeologist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.03).addLoot("society:furniture_box");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("star_blessing")
      .anyDimension("minecraft:overworld")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.02).addLoot("society:pristine_star_shards");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("star_blessing")
      .anyDimension("society:skull_cavern")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.06).addLoot("society:pristine_star_shards");
      });
  });
  e.addBlockLootModifier("society:geode_node")
    .biome("#forge:is_cold")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:frozen_geode");
    });
  e.addBlockLootModifier("society:geode_node").pool((p) => {
    p.randomChance(0.05).addLoot("society:mining_monthly");
  });
  e.addBlockLootModifier("society:geode_node")
    .anyDimension("minecraft:overworld")
    .hasAnyStage("prismatic_prospector")
    .pool((p) => {
      p.randomChance(0.05).addLoot("society:prismatic_shard");
    });
  e.addBlockLootModifier("society:magma_geode_node").pool((p) => {
    p.randomChance(0.1).addLoot("society:mining_monthly");
  });
  e.addBlockLootModifier("society:magma_geode_node")
    .anyDimension("minecraft:the_nether")
    .hasAnyStage("prismatic_prospector")
    .pool((p) => {
      p.randomChance(0.2).addLoot("society:prismatic_shard");
    });
  e.addBlockLootModifier("society:omni_geode_node").pool((p) => {
    p.randomChance(0.1).addLoot("society:mining_monthly");
  });
  e.addBlockLootModifier("society:omni_geode_node")
    .hasAnyStage("prismatic_prospector")
    .pool((p) => {
      p.randomChance(0.3).addLoot("society:prismatic_shard");
    });
  e.addBlockLootModifier("minecraft:deepslate")
    .hasAnyStage("filthy_excavator")
    .pool((p) => {
      p.randomChance(0.02).addLoot("society:geode");
    });
  e.addBlockLootModifier("minecraft:netherrack")
    .hasAnyStage("filthy_excavator")
    .pool((p) => {
      p.randomChance(0.01).addLoot("society:magma_geode");
    });
  const netherOres = [
    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",
    "etcetera:nether_bismuth_ore",
  ];
  netherOres.forEach((ore) => {
    e.addBlockLootModifier(ore).pool((p) => {
      p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
      p.matchEntity((entity) => {
        entity.anyType("minecraft:player");
      });
      p.randomChance(0.1).addLoot("society:magma_geode");
    });
    e.addBlockLootModifier(ore)
      .hasAnyStage("excavator")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:magma_geode");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("mineralogist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.1).addLoot("society:fire_quartz");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("blockchain")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.06).addLoot("numismatics:crown");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("furniture_archaeologist")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.01).addLoot("society:furniture_box");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("star_blessing")
      .anyDimension("minecraft:the_nether")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.04).addLoot("society:pristine_star_shards");
      });
    e.addBlockLootModifier(ore)
      .hasAnyStage("star_blessing")
      .anyDimension("society:skull_cavern")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.randomChance(0.06).addLoot("society:pristine_star_shards");
      });
  });
  ["minecraft:deepslate_gold_ore", "meadow:alpine_gold_ore", "minecraft:gold_ore"].forEach(
    (ore) => {
      e.addBlockLootModifier(ore)
        .hasAnyStage("gold_rush")
        .pool((p) => {
          p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
          p.addLoot(Item.of("4x minecraft:raw_gold_block"));
        });
    }
  );
  overworldOres.forEach((ore) => {
    e.addBlockLootModifier(ore)
      .hasAnyStage("the_spark_also_rises")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.addLoot(Item.of("2x society:sparkstone"));
      });
  });
  netherOres.forEach((ore) => {
    e.addBlockLootModifier(ore)
      .hasAnyStage("the_spark_also_rises")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.addLoot(Item.of("2x society:sparkstone"));
      });
  });
  const skullCavernOres = [
    "oreganized:lead_ore",
    "oreganized:deepslate_lead_ore",
    "oreganized:silver_ore",
    "oreganized:deepslate_silver_ore",
    "society:iridium_ore",
    "society:deepslate_iridium_ore",
    "society:sparkstone_ore",
    "society:deepslate_sparkstone_ore",
  ];
  skullCavernOres.forEach((ore) => {
    e.addBlockLootModifier(ore)
      .hasAnyStage("the_spark_also_rises")
      .pool((p) => {
        p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
        p.addLoot(Item.of("2x society:sparkstone"));
      });
  });
  ["society:sparkstone_ore", "society:deepslate_sparkstone_ore"].forEach((ore) => {
    e.addBlockLootModifier(ore).pool((p) => {
      p.not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
      p.randomChance(0.01).addLoot("society:the_spark_also_rises");
    });
  });
});
