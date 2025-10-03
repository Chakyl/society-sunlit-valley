// priority: 0
console.info("[SOCIETY] cobblemonTags.js loaded");

ServerEvents.tags("worldgen/biome", (e) => {
  // Skull Cavern Cobblemon biomes
  e.add("cobblemon:is_spooky", "society:cavern_top");

  e.add("cobblemon:is_dripstone", "society:skull_caves");
  e.add("cobblemon:is_lush", "society:lush_caverns");

  e.add("cobblemon:is_cold", "society:frozen_caves");
  e.add("cobblemon:is_glacial", "society:frozen_caves");
  e.add("cobblemon:is_freezing", "society:frozen_maelstrom");
  e.add("cobblemon:is_thermal", "society:frozen_maelstrom");

  e.add("cobblemon:is_thermal", "society:desert_caves");
  e.add("cobblemon:is_arid", "society:desert_caves");
  e.add("cobblemon:is_badlands", "society:desert_fault");
  e.add("cobblemon:is_arid", "society:desert_fault");

  e.add("cobblemon:is_volcanic", "society:blackstone_caves");
  e.add("cobblemon:nether/is_wasteland", "society:blackstone_caves");

  e.add("cobblemon:is_magical", "society:umbra_barrens");
});
