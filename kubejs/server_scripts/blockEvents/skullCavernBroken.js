console.info("[SOCIETY] skullCavernBroken.js loaded");

const biomeAirTypeMap = new Map([
  ["society:skull_caves", 0],
  ["society:lush_caverns", 0],
  ["society:frozen_caves", 1],
  ["society:frozen_maelstrom", 1],
  ["society:desert_caves", 2],
  ["society:desert_fault", 2],
  ["society:blackstone_caves", 3],
  ["society:umbra_barrens", 4],
]);

BlockEvents.broken(
  [
    "society:stone_boulder",
    "society:ice_boulder",
    "society:sandstone_boulder",
    "society:blackstone_boulder",
    "society:end_stone_boulder",
    "minecraft:deepslate_copper_ore",
    "oreganized:lead_ore",
    "create:zinc_ore",
    "create:zinc_ore",
    "society:geode_node",
    "society:magma_geode_node",
    "society:omni_geode_node",
    "society:earth_crystal",
    "society:fire_quartz",
    "minecraft:deepslate_emerald_ore",
    "minecraft:emerald_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:lapis_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:diamond_ore",
    "society:deepslate_sparkstone_ore",
    "society:sparkstone_ore",
    "society:deepslate_iridium_ore",
    "society:iridium_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:iron_ore",
    "minecraft:coal_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:redstone_ore",
    "oreganized:deepslate_silver_ore",
    "oreganized:silver_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:gold_ore",
    "oreganized:deepslate_lead_ore",
    "minecraft:deepslate_copper_ore",
    "oreganized:lead_ore",
    "create:zinc_ore",
    "create:zinc_ore",
    "society:geode_node",
    "society:magma_geode_node",
    "society:omni_geode_node",
    "society:earth_crystal",
    "society:fire_quartz",
    "minecraft:deepslate_emerald_ore",
    "minecraft:emerald_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:lapis_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:diamond_ore",
    "society:deepslate_sparkstone_ore",
    "society:sparkstone_ore",
    "society:deepslate_iridium_ore",
    "society:iridium_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:iron_ore",
    "minecraft:coal_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:redstone_ore",
    "oreganized:deepslate_silver_ore",
    "oreganized:silver_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:gold_ore",
    "oreganized:deepslate_lead_ore",
  ],
  (e) => {
    const { level, block, player, server } = e;
    const pos = block.getPos();
    if (level.dimension === "society:skull_cavern") {
      console.log(block.biomeId)
      let rockType = biomeAirTypeMap.get(`${block.biomeId.toString()}`);
      console.log(rockType)
      server.scheduleInTicks(5, () => {
        if (level.getBlock(pos) == "minecraft:air") {
          block.set("society:cavern_air", {
            type: String(rockType),
            chunkbit: "0",
          });
        }
      });
    }
  }
);
