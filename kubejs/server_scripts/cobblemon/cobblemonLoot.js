console.info("[SOCIETY] cobblemonLoot.js loaded");

LootJS.modifiers((e) => {
  e.addBlockLootModifier("society:stone_boulder").pool((p) => {
    p.randomChance(0.01).addLoot("cobblemon:moon_stone");
    p.randomChance(0.005).addLoot("cobblemon:leaf_stone");
  });
  e.addBlockLootModifier("society:ice_boulder").pool((p) => {
    p.randomChance(0.01).addLoot("cobblemon:water_stone");
    p.randomChance(0.005).addLoot("cobblemon:ice_stone");
  });
  e.addBlockLootModifier("society:sandstone_boulder").pool((p) => {
    p.randomChance(0.01).addLoot("cobblemon:sun_stone");
    p.randomChance(0.005).addLoot("cobblemon:fire_stone");
  });
  e.addBlockLootModifier("society:blackstone_boulder").pool((p) => {
    p.randomChance(0.02).addLoot("cobblemon:dawn_stone");
    p.randomChance(0.01).addLoot("cobblemon:fire_stone");
  });
  e.addBlockLootModifier("society:end_stone_boulder").pool((p) => {
    p.randomChance(0.02).addLoot("cobblemon:shiny_stone");
    p.randomChance(0.01).addLoot("cobblemon:dust_stone");
  });
});
