// priority: 0
console.info("[SOCIETY] handleWorldgenTags.js loaded");

ServerEvents.tags("worldgen/biome", (e) => {
  e.add("society:mining_biomes", "#minecraft:is_overworld");
  e.add("minecraft:without_zombie_sieges", "#minecraft:is_overworld");
  e.add("society:spawns_magma_geodes", "#minecraft:is_nether");
  e.add("forge:is_snowy", "society:frozen_caves");
  e.add("forge:is_snowy", "society:frozen_malestrom");

  const magmaGeodeBiomes = [
    "society:blackstone_caves",
    "society:desert_caves",
    "society:desert_fault",
  ];
  magmaGeodeBiomes.forEach((biome) => {
    e.add("society:spawns_magma_geodes", biome);
  });
    e.add("society:has_structure/desert", "society:desert_caves");
    e.add("society:has_structure/desert", "society:desert_fault");
  const cavernBiomes = [
    "society:skull_caves",
    "society:lush_caverns",
    "society:frozen_caves",
    "society:frozen_malestrom",
    "society:desert_caves",
    "society:desert_fault",
    "society:blackstone_caves",
    "society:umbra_barrens",
  ];
  cavernBiomes.forEach((biome) => {
    e.add("society:is_skull_cavern", biome);
    e.add("supplementaries:has_cave_urns", biome);
    e.add("society:mining_biomes", biome);
  });
});