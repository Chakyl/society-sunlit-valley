// priority: 1
console.info("[SOCIETY] cavernAir.js loaded");
const stoneRockTable = [
  { block: "society:stone_boulder", weight: 90 },
  { block: "minecraft:coal_ore", weight: 25 },
  { block: "minecraft:copper_ore", weight: 20 },
  { block: "minecraft:iron_ore", weight: 15 },
  { block: "create:zinc_ore", weight: 13 },
  { block: "minecraft:lapis_ore", weight: 2 },
  { block: "society:geode_node", weight: 2, sturdy: true },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
];

const iceRockTable = [
  { block: "society:ice_boulder", weight: 91 },
  { block: "minecraft:iron_ore", weight: 25 },
  { block: "create:zinc_ore", weight: 15 },
  { block: "oreganized:lead_ore", weight: 10 },
  { block: "minecraft:diamond_ore", weight: 4 },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 1, sturdy: true },
  { block: "society:sparkstone_ore", weight: 2 },
];

const sandstoneRockTable = [
  { block: "society:sandstone_boulder", weight: 90 },
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
  { block: "society:blackstone_boulder", weight: 94 },
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
  { block: "society:end_stone_boulder", weight: 139 },
  { block: "society:deepslate_sparkstone_ore", weight: 14 },
  { block: "society:omni_geode_node", weight: 4, sturdy: true },
  { block: "society:deepslate_iridium_ore", weight: 3 },
  { block: "minecraft:chorus_flower", weight: 1 },
];

const rollReplaceTable = (table, hasRope) => {
  let roll = 0;
  const totalWeight = table.reduce(
    (acc, current) => (hasRope && current.sturdy ? acc : acc + current.weight),
    0
  );
  console.log(totalWeight);
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

global.handleRegen = (e) => {
  const { level, block } = e;
  console.log("running");
  // console.log(level.getChunkSource().chunkMap.getChunks());
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  const belowBelowPos = belowBlock.getPos().below();
  const hasRope =
    level.getBlock(belowBelowPos.x, belowBelowPos.y, belowBelowPos.z).id === "farmersdelight:rope";
  const type = Number(block.properties.get("type"));
  let newBlock;
  switch (type) {
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
  console.log(newBlock);
  block.set(newBlock);
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:cavern_air")
    .box(0, 0, 0, 0, 0, 0)
    .property(integerProperty.create("type", 0, 4))
    .property(integerProperty.create("chunkbit", 0, 1))
    .model("minecraft:block/air")
    .defaultState((state) => {
      state.set(integerProperty.create("type", 0, 4), 0);
      state.set(integerProperty.create("chunkbit", 0, 1), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("type", 0, 4), 0);
      state.set(integerProperty.create("chunkbit", 0, 1), 0);
    })
    .blockEntity((blockInfo) =>
      blockInfo.serverTick(100, 0, (entity) => {
        global.handleRegen(entity);
      })
    );
});
