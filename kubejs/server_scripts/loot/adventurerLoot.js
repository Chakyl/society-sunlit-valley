console.info("[SOCIETY] adventurerLoot.js loaded");

LootJS.modifiers((e) => {
  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("relic_hunter")
    .pool((p) => {
      p.randomChance(0.10).addLoot("society:relic_trove");
    });
  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("artifact_hunter")
    .pool((p) => {
      p.randomChance(0.10).addLoot("society:artifact_trove");
    });
  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("prismatic_realm")
    .pool((p) => {
      p.randomChance(0.05).addLoot("society:prismatic_shard");
    });

});
