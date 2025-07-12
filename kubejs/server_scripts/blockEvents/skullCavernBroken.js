console.info("[SOCIETY] skullCavernBroken.js loaded");

const stoneRockTable = [
  { block: "society:stone_boulder", weight: 163 },
  { block: "minecraft:coal_ore", weight: 25 },
  { block: "minecraft:copper_ore", weight: 20 },
  { block: "minecraft:iron_ore", weight: 15 },
  { block: "create:zinc_ore", weight: 13 },
  { block: "minecraft:lapis_ore", weight: 2 },
  { block: "society:geode_node", weight: 2, sturdy: true },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
];

const iceRockTable = [
  { block: "society:ice_boulder", weight: 164 },
  { block: "minecraft:iron_ore", weight: 25 },
  { block: "create:zinc_ore", weight: 15 },
  { block: "oreganized:lead_ore", weight: 10 },
  { block: "minecraft:diamond_ore", weight: 4 },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 1, sturdy: true },
  { block: "society:sparkstone_ore", weight: 2 },
];

const sandstoneRockTable = [
  { block: "society:sandstone_boulder", weight: 163 },
  { block: "minecraft:gold_ore", weight: 20 },
  { block: "oreganized:lead_ore", weight: 10 },
  { block: "minecraft:redstone_ore", weight: 6 },
  { block: "minecraft:diamond_ore", weight: 4 },
  { block: "society:sparkstone_ore", weight: 4 },
  { block: "society:fire_quartz", weight: 2, sturdy: true },
  { block: "society:magma_geode_node", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 2, sturdy: true },
  { block: "oreganized:silver_ore", weight: 1 },
  { block: "society:iridium_ore", weight: 1 },
];

const blackstoneRockTable = [
  { block: "society:blackstone_boulder", weight: 148 },
  { block: "minecraft:deepslate_gold_ore", weight: 20 },
  { block: "oreganized:deepslate_lead_ore", weight: 10 },
  { block: "minecraft:deepslate_redstone_ore", weight: 15 },
  { block: "minecraft:deepslate_diamond_ore", weight: 4 },
  { block: "society:deepslate_sparkstone_ore", weight: 10 },
  { block: "society:fire_quartz", weight: 2, sturdy: true },
  { block: "society:magma_geode_node", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 4, sturdy: true },
  { block: "oreganized:deepslate_silver_ore", weight: 3 },
  { block: "society:deepslate_iridium_ore", weight: 2 },
];

const endstoneRockTable = [
  { block: "society:end_stone_boulder", weight: 194 },
  { block: "society:deepslate_sparkstone_ore", weight: 14 },
  { block: "society:omni_geode_node", weight: 4, sturdy: true },
  { block: "society:deepslate_iridium_ore", weight: 3 },
];

const biomeAirTypeMap = new Map([
  ["society:cavern_top", 0],
  ["society:skull_caves", 0],
  ["society:lush_caverns", 0],
  ["society:frozen_caves", 1],
  ["society:frozen_maelstrom", 1],
  ["society:desert_caves", 2],
  ["society:desert_fault", 2],
  ["society:blackstone_caves", 3],
  ["society:umbra_barrens", 4],
]);

const rollReplaceTable = (table, hasRope) => {
  let roll = 0;
  const totalWeight = table.reduce(
    (acc, current) => (hasRope && current.sturdy ? acc : acc + current.weight),
    0
  );
  let currentWeight = 0;
  if (totalWeight > 1) {
    roll = rnd(0, totalWeight);
    for (let index = 0; index < table.length; index++) {
      currentWeight += table[index].weight;
      if (currentWeight >= roll) {
        return table[index].block;
      }
    }
  }
  return "minecraft:obsidian";
};

const handleRegen = (server, level, block) => {
  if (!level.persistentData || !level.persistentData.chunkParityMap) return;
  let belowPos;
  let belowBlock;
  let belowBelowPos;
  let hasRope;

  let toggleBit =
    level.persistentData.chunkParityMap[level.getChunkAt(block.getPos()).pos.toString()].toggleBit;
  if (String(toggleBit) == block.getProperties().get("chunkbit")) {
    server.scheduleInTicks(4800, () => {
      handleRegen(server, level, block);
    });
  } else {
    belowPos = block.getPos().below();
    belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
    belowBelowPos = belowBlock.getPos().below();
    hasRope =
      level.getBlock(belowBelowPos.x, belowBelowPos.y, belowBelowPos.z).id ===
      "farmersdelight:rope";
    let newBlock;
    switch (Number(block.properties.get("type"))) {
      case 4:
        newBlock = rollReplaceTable(endstoneRockTable, hasRope);
        break;
      case 3:
        newBlock = rollReplaceTable(blackstoneRockTable, hasRope);
        break;
      case 2:
        newBlock = rollReplaceTable(sandstoneRockTable, hasRope);
        break;
      case 1:
        newBlock = rollReplaceTable(iceRockTable, hasRope);
        break;
      default:
      case 0:
        newBlock = rollReplaceTable(stoneRockTable, hasRope);
        break;
    }
    block.set(newBlock);
  }
};
const scheduleFunction = (level, pos, server, rockType) => {
  server.scheduleInTicks(5, () => {
    if (level.getBlock(pos) == "minecraft:air") {
      let toggleBit =
        level.persistentData.chunkParityMap[level.getChunkAt(pos).pos.toString()].toggleBit;
      level.getBlock(pos).set("society:cavern_air", {
        type: String(rockType),
        chunkbit: toggleBit.toString(),
      });
      server.scheduleInTicks(4800, () => {
        handleRegen(server, level, level.getBlock(pos));
      });
    }
  });
};
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
    "create:deepslate_zinc_ore",
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
    const { level, block, server } = e;
    const pos = block.getPos();
    console.log("broken block at: " + pos);
    if (level.dimension === "society:skull_cavern") {
      let rockType = biomeAirTypeMap.get(`${block.biomeId.toString()}`);
      scheduleFunction(level, pos.immutable(), server, rockType);
    }
  }
);

LevelEvents.beforeExplosion((e) => {
  const { x, y, z, level, server, exploder } = e;
  if (
    level.dimension !== "society:skull_cavern" ||
    exploder.type == "splendid_slimes:splendid_slime"
  )
    return;
  const radius = 2;
  let scanBlock;
  let rockType;
  for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius), [
    x + radius,
    y + radius,
    z + radius,
  ])) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag("society:skull_cavern_regens")) {
      level.destroyBlock(pos, true);
      rockType = biomeAirTypeMap.get(`${scanBlock.biomeId.toString()}`);
      scheduleFunction(level, pos.immutable(), server, rockType);
    }
  }
  e.cancel();
});
BlockEvents.broken(
  "society:skull_cavern_teleporter",
  (e) => {
    const { level } = e;
    if (level.dimension === "society:skull_cavern") e.cancel();
  }
);
