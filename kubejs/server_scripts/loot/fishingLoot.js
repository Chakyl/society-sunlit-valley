console.info("[SOCIETY] fishingLoot.js loaded");

LootJS.modifiers((e) => {
  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("wooden_pollution")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:furniture_box");
    });

  e.addLootTypeModifier(LootType.FISHING)
    .hasAnyStage("frozen_treasure")
    .playerPredicate((p) => global.getSeasonFromLevel(p.level) === "winter")
    .pool((p) => {
      p.randomChance(0.2).addLoot("aquaculture:treasure_chest");
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

  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("prismatic_bounty")
    .replaceLoot("aquaculture:message_in_a_bottle", "society:prismatic_shard", true);
});
