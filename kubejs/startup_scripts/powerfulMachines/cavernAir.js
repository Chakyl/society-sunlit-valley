// priority: 1
console.info("[SOCIETY] cavernAir.js loaded");
const stoneBlockTable = [
  { block: "minecraft:coal_ore", weight: 20 },
  { block: "minecraft:copper_ore", weight: 18 },
  { block: "minecraft:iron_ore", weight: 14 },
  { block: "create:zinc_ore", weight: 12 },
  { block: "oreganized:lead_ore", weight: 8 },
  { block: "minecraft:lapis_ore", weight: 8 },
  { block: "minecraft:redstone_ore", weight: 7 },
  { block: "minecraft:gold_ore", weight: 6 },
  { block: "minecraft:diamond_ore", weight: 2 },
  { block: "minecraft:emerald_ore", weight: 2 },
  { block: "oreganized:silver_ore", weight: 1 },
];
const deepslateBlockTable = [
  { block: "minecraft:deepslate_coal_ore", weight: 2 },
  { block: "minecraft:deepslate_copper_ore", weight: 2 },
  { block: "minecraft:deepslate_iron_ore", weight: 4 },
  { block: "create:deepslate_zinc_ore", weight: 8 },
  { block: "oreganized:deepslate_lead_ore", weight: 8 },
  { block: "minecraft:deepslate_lapis_ore", weight: 10 },
  { block: "minecraft:deepslate_redstone_ore", weight: 12 },
  { block: "minecraft:deepslate_gold_ore", weight: 14 },
  { block: "minecraft:deepslate_emerald_ore", weight: 16 },
  { block: "minecraft:deepslate_diamond_ore", weight: 18 },
  { block: "oreganized:deepslate_silver_ore", weight: 6 },
];
const netherBlockTable = [
  { block: "minecraft:nether_quartz_ore", weight: 10 },
  { block: "minecraft:nether_gold_ore", weight: 10 },
  { block: "etcetera:nether_bismuth_ore", weight: 4 },
];

const rollReplaceTable = (table) => {
  let roll = 0;
  const totalWeight = table.reduce((acc, current) => acc + current.weight, 0);
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
};

global.handleRegen = (e) => {
  const { level, block } = e;
  // console.log(level.getChunkSource().chunkMap.getChunks())
  // if (0.1 < Math.random()) {
  //   const belowPos = block.getPos().below();
  //   const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  //   const belowBelowPos = belowBlock.getPos().below();
  //   const belowBelowBlock = level.getBlock(
  //     belowBelowPos.x,
  //     belowBelowPos.y,
  //     belowBelowPos.z
  //   );
  //   const type = Number(block.properties.get("type"));
  //   let newBlock;
  //   switch (type) {
  //     case 2:
  //       newBlock = rollReplaceTable(netherBlockTable);
  //       break;
  //     case 1:
  //       newBlock = rollReplaceTable(deepslateBlockTable);
  //       break;
  //     default:
  //     case 0:
  //       newBlock = rollReplaceTable(stoneBlockTable);
  //       break;
  //   }
  //   block.set(newBlock);
  // }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:cavern_air")
    .box(0, 0, 0, 0, 0, 0)
    .property(integerProperty.create("type", 0, 2))
    .model("minecraft:block/air")
    .defaultState((state) => {
      state.set(integerProperty.create("type", 0, 2), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("type", 0, 2), 0);
    })
    .blockEntity((blockInfo) =>
      blockInfo.serverTick(100, 0, (entity) => {
        global.handleRegen(entity);
      })
    );
});
