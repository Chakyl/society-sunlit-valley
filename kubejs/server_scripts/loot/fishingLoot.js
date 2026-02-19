console.info("[SOCIETY] fishingLoot.js loaded");

LootJS.modifiers((e) => {
  // Has any stage check is to prevent jellies from being fished up from Crab Traps. Yeah it's weird.
  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("starting_items_4_0")
    .anyBiome("#minecraft:is_ocean", "#minecraft:is_beach")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:ocean_jelly");
    });
  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("wooden_pollution")
    .anyBiome("#minecraft:is_ocean", "#minecraft:is_beach")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:ocean_jelly");
    });

  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("starting_items_4_0")
    .anyBiome("#minecraft:is_river")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:river_jelly");
    });

  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("wooden_pollution")
    .anyBiome("#minecraft:is_river")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:river_jelly");
    });

  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("wooden_pollution")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:furniture_box");
    });
  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("frozen_treasure")
    .playerPredicate((p) => global.getSeasonFromLevel(p.level) === "winter")
    .pool((p) => {
      p.randomChance(0.45).addLoot("aquaculture:treasure_chest");
    });

  e.addLootTypeModifier(LootType.FISHING)
    .playerPredicate((p) =>
      p.getHeldItem("main_hand").nbt.Inventory
        ? p
            .getHeldItem("main_hand")
            .nbt.Inventory.Items.toString()
            .contains("aquaculture:iron_hook")
        : false
    )
    .pool((p) => {
      p.randomChance(0.5).addLoot("crabbersdelight:crab_trap_bait");
      p.limitCount([4, 16]);
    });

  e.addLootTypeModifier(LootType.FISHING)
    .playerPredicate((p) =>
      p.getHeldItem("main_hand").nbt.Inventory
        ? p
            .getHeldItem("main_hand")
            .nbt.Inventory.Items.toString()
            .contains("aquaculture:diamond_hook")
        : false
    )
    .pool((p) => {
      p.randomChance(0.25).addLoot("crabbersdelight:deluxe_crab_trap_bait");
      p.limitCount([1, 4]);
    });

  e.addLootTypeModifier(LootType.FISHING)
    .anyBiome("#minecraft:is_ocean", "#minecraft:is_beach")
    .playerPredicate((p) =>
      p.getHeldItem("main_hand").nbt.Inventory
        ? p
            .getHeldItem("main_hand")
            .nbt.Inventory.Items.toString()
            .contains("aquaculture:redstone_hook")
        : false
    )
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:ocean_jelly");
      p.limitCount([1, 2]);
    });

  e.addLootTypeModifier(LootType.FISHING)
    .anyBiome("#minecraft:is_river")
    .playerPredicate((p) =>
      p.getHeldItem("main_hand").nbt.Inventory
        ? p
            .getHeldItem("main_hand")
            .nbt.Inventory.Items.toString()
            .contains("aquaculture:redstone_hook")
        : false
    )
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:river_jelly");
      p.limitCount([1, 2]);
    });

  e.addLootTypeModifier(LootType.FISHING)
    .playerPredicate((p) =>
      p.getHeldItem("main_hand").nbt.Inventory
        ? p
            .getHeldItem("main_hand")
            .nbt.Inventory.Items.toString()
            .contains("aquaculture:nether_star_hook")
        : false
    )
    .pool((p) => {
      p.randomChance(0.04).addLoot("society:relic_trove");
      p.limitCount([1, 1]);
    });
  e.addBlockLootModifier("aquaculture:neptunes_bounty")
    .hasAnyStage("prismatic_bounty")
    .not((n) =>
      n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    )
    .replaceLoot(
      "aquaculture:neptunes_bounty",
      "society:prismatic_shard",
      true
    );

  // Mastery
  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("husbandry_mastery")
    .pool((p) => {
      p.randomChance(0.01).addLoot("society:animal_cracker");
      p.randomChance(0.05).addLoot("society:plushie_capsule");
    });
});
