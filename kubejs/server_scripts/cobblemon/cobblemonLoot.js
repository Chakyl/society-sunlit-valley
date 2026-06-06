console.info("[SOCIETY-S-COBBLEMON] cobblemonLoot.js loaded");

LootJS.modifiers((e) => {
  e.addBlockLootModifier("society:stone_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:moon_stone");
  });
  e.addBlockLootModifier("society:ice_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:water_stone");
  });
  e.addBlockLootModifier("society:sandstone_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:sun_stone");
  });
  e.addBlockLootModifier("society:blackstone_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:dawn_stone");
  });
  e.addBlockLootModifier("society:end_stone_boulder").pool((p) => {
    p.randomChance(0.01).addLoot("cobblemon:shiny_stone");
  });
  e.addBlockLootModifier("society:stone_boulder").pool((p) => {
    p.randomChance(0.001).addLoot("cobblemon:leaf_stone");
  });
  e.addBlockLootModifier("society:ice_boulder").pool((p) => {
    p.randomChance(0.001).addLoot("cobblemon:ice_stone");
  });
  e.addBlockLootModifier("society:sandstone_boulder").pool((p) => {
    p.randomChance(0.001).addLoot("cobblemon:fire_stone");
  });
  e.addBlockLootModifier("society:blackstone_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:fire_stone");
  });
  e.addBlockLootModifier("society:end_stone_boulder").pool((p) => {
    p.randomChance(0.005).addLoot("cobblemon:dusk_stone");
  });
  ['sunlit_cobblemon:poke_loot_ball', 'sunlit_cobblemon:great_loot_ball', 'sunlit_cobblemon:ultra_loot_ball', 'sunlit_cobblemon:beast_loot_ball', 'sunlit_cobblemon:sun_raid_statue'].forEach((block) => {
    e.addBlockLootModifier(block).removeLoot(block);
  })
  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("bottlecaps_and_nothingness")
    .pool((p) => {
      p.randomChance(0.03).addLoot("unimplemented_items:bottle_cap");
    });
  // NBT removals
  e.addBlockLootModifier("sunlit_cobblemon:trainer_podium").removeLoot("sunlit_cobblemon:trainer_podium");
});
