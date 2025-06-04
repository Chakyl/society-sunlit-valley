console.info("[SOCIETY] skullCavernBroken.js loaded");

BlockEvents.broken(
  [
    "minecraft:coal_ore",
    "minecraft:lapis_ore",
    "minecraft:diamond_ore",
    "create:zinc_ore",
    "oreganized:lead_ore",
    "minecraft:gold_ore",
    "oreganized:silver_ore",
    "minecraft:redstone_ore",
    "minecraft:emerald_ore",
    "minecraft:coal_ore",
    "minecraft:iron_ore",
    "minecraft:copper_ore",
  ],
  (e) => {
    const { level, block, server } = e;
    const pos = block.getPos();
    if (level.dimension === "society:skull_cavern") {
      server.scheduleInTicks(5, () => {
        if (level.getBlock(pos) == "minecraft:air") {
          block.set("society:cavern_air", {
            type: "0",
          });
        }
      });
    }
  }
);

BlockEvents.broken(
  [
    "minecraft:deepslate_lapis_ore",
    "minecraft:deepslate_diamond_ore",
    "create:deepslate_zinc_ore",
    "oreganized:deepslate_lead_ore",
    "minecraft:deepslate_gold_ore",
    "oreganized:deepslate_silver_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:deepslate_copper_ore",
  ],
  (e) => {
    const { level, block, server } = e;
    const pos = block.getPos();
    if (level.dimension === "society:skull_cavern") {
      server.scheduleInTicks(5, () => {
        if (level.getBlock(pos) == "minecraft:air") {
          block.set("society:cavern_air", {
            type: "1",
          });
        }
      });
    }
  }
);

BlockEvents.broken(
  [
    "minecraft:nether_gold_ore",
    "etcetera:nether_bismuth_ore",
    "minecraft:nether_quartz_ore",
  ],
  (e) => {
    const { level, block, server } = e;
    const pos = block.getPos();
    if (level.dimension === "society:skull_cavern") {
      server.scheduleInTicks(5, () => {
        if (level.getBlock(pos) == "minecraft:air") {
          block.set("society:cavern_air", {
            type: "2",
          });
        }
      });
    }
  }
);
