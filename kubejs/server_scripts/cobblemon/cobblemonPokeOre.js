console.info("[SOCIETY-S-COBBLEMON] cobblemonPokeOre.js loaded");


let genericOreSpawns = [
  { pokemon: "diglett", weight: 10, lvlRange: [2, 24] },
  { pokemon: "diglett", weight: 5, lvlRange: [2, 24], variant: ["alolan"] },
  { pokemon: "dugtrio", weight: 8, lvlRange: [2, 24] },
  { pokemon: "dugtrio", weight: 3, lvlRange: [2, 24], variant: ["alolan"] },
  { pokemon: "geodude", weight: 10, lvlRange: [2, 24] },
  { pokemon: "geodude", weight: 5, lvlRange: [2, 24], variant: ["alolan"] },
  { pokemon: "graveler", weight: 8, lvlRange: [25, 40] },
  { pokemon: "graveler", weight: 3, lvlRange: [25, 40], variant: ["alolan"] },
  { pokemon: "golem", weight: 2, lvlRange: [25, 60] },
  { pokemon: "golem", weight: 1, lvlRange: [25, 60], variant: ["alolan"] },
  { pokemon: "golem", weight: 2, lvlRange: [25, 60] },
  { pokemon: "onix", weight: 4, lvlRange: [2, 40] },
  { pokemon: "rhyhorn", weight: 4, lvlRange: [2, 40] },
  { pokemon: "shuckle", weight: 1, lvlRange: [2, 40] },
  { pokemon: "gibble", weight: 0.001, lvlRange: [2, 20] },
];
const specialOreSpawns = new Map([
  [
    "meadow:alpine_salt_ore",
    [
      { pokemon: "nacli", weight: 1, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:gold_ore",
    [
      { pokemon: "gimmighoul", weight: 1, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_gold_ore",
    [
      { pokemon: "gimmighoul", weight: 10, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:copper_ore",
    [
      { pokemon: "cufant", weight: 3, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_copper_ore",
    [
      { pokemon: "cufant", weight: 20, lvlRange: [5, 15] },
      { pokemon: "bronzor", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "minecraft:iron_ore",
    [
      { pokemon: "drilbur", weight: 5, lvlRange: [30, 50] },
      { pokemon: "ferroseed", weight: 1, lvlRange: [2, 4] },
      { pokemon: "klink", weight: 1, lvlRange: [2, 4] },
      { pokemon: "magnemite", weight: 5, lvlRange: [5, 15] },
      { pokemon: "forretress", weight: 2, lvlRange: [5, 15] }
    ],
  ],
  [
    "minecraft:deepslate_iron_ore",
    [
      { pokemon: "magneton", weight: 6, lvlRange: [30, 50] },
      { pokemon: "aron", weight: 0.1, lvlRange: [30, 50] },
      { pokemon: "drilbur", weight: 4, lvlRange: [30, 50] },
      { pokemon: "riolu", weight: 0.01, lvlRange: [30, 50] },
      { pokemon: "klink", weight: 2, lvlRange: [30, 50] },
      { pokemon: "klang", weight: 5, lvlRange: [30, 50] },
      { pokemon: "ferroseed", weight: 1, lvlRange: [30, 50] },
      { pokemon: "steelix", weight: 1, lvlRange: [30, 50] },
      { pokemon: "beldum", weight: 0.02, lvlRange: [30, 50] },
    ],
  ],
  [
    "minecraft:coal_ore",
    [
      { pokemon: "slugma", weight: 0.1, lvlRange: [5, 15] },
      { pokemon: "litwick", weight: 0.01, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_coal_ore",
    [
      { pokemon: "magcargo", weight: 1, lvlRange: [38, 55] },
    ],
  ],
  [
    "minecraft:diamond_ore",
    [
      { pokemon: "carbink", weight: 5, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_diamond_ore",
    [
      { pokemon: "carbink", weight: 10, lvlRange: [38, 55] },
      { pokemon: "sableye", weight: 1, lvlRange: [38, 55] },
    ],
  ],
  [
    "minecraft:redstone_ore",
    [
      { pokemon: "geodude", weight: 10, lvlRange: [2, 24], variant: ["alolan"] },
      { pokemon: "togedemaru", weight: 2, lvlRange: [2, 24] },
      { pokemon: "charjabug", weight: 2, lvlRange: [2, 24] },
      { pokemon: "magnemite", weight: 5, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_redstone_ore",
    [
      { pokemon: "geodude", weight: 10, lvlRange: [2, 24], variant: ["alolan"] },
      { pokemon: "magneton", weight: 6, lvlRange: [30, 50] },
      { pokemon: "rotom", weight: 0.01, lvlRange: [2, 24] },
    ],
  ],
  [
    "minecraft:emerald_ore",
    [
      { pokemon: "nosepass", weight: 5, lvlRange: [5, 15] },
    ],
  ],
  [
    "minecraft:deepslate_emerald_ore",
    [
      { pokemon: "nosepass", weight: 10, lvlRange: [38, 55] },
    ],
  ],
  [
    "minecraft:nether_gold_ore",
    [
      { pokemon: "magcargo", weight: 2, lvlRange: [38, 55] },
      { pokemon: "slugma", weight: 2, lvlRange: [5, 15] },
      { pokemon: "litwick", weight: 2, lvlRange: [5, 15] },
      { pokemon: "gimmighoul", weight: 5, lvlRange: [15, 35] },
    ],
  ],
  [
    "minecraft:nether_quartz_ore",
    [
      { pokemon: "magcargo", weight: 2, lvlRange: [38, 55] },
      { pokemon: "slugma", weight: 2, lvlRange: [5, 15] },
      { pokemon: "litwick", weight: 2, lvlRange: [5, 15] },
      { pokemon: "magby", weight: 2, lvlRange: [5, 15] },
      { pokemon: "salandit", weight: 2, lvlRange: [5, 15] },
      { pokemon: "sizzlipede", weight: 0.2, lvlRange: [5, 15] },
      { pokemon: "larvesta", weight: 0.2, lvlRange: [5, 15] },
    ],
  ],
  [
    "etcetera:nether_bismuth_ore",
    [
      { pokemon: "magcargo", weight: 2, lvlRange: [38, 55] },
      { pokemon: "slugma", weight: 2, lvlRange: [5, 15] },
      { pokemon: "litwick", weight: 2, lvlRange: [5, 15] },
      { pokemon: "nosepass", weight: 10, lvlRange: [38, 55] },
      { pokemon: "beldum", weight: 0.1, lvlRange: [30, 50] },
    ],
  ],
  [
    "oreganized:lead_ore",
    [
      { pokemon: "gastly", weight: 10, lvlRange: [38, 55] },
      { pokemon: "toxel", weight: 1, lvlRange: [38, 55] },
      { pokemon: "salandit", weight: 1, lvlRange: [38, 55] },
      { pokemon: "koffing", weight: 20, lvlRange: [20, 35] },
      { pokemon: "weezing", weight: 20, lvlRange: [45, 75] },
      { pokemon: "koffing", weight: 5, lvlRange: [20, 35], variant: ["galarian"] },
      { pokemon: "weezing", weight: 5, lvlRange: [45, 75], variant: ["galarian"] },
    ],
  ],
  [
    "oreganized:deepslate_lead_ore",
    [
      { pokemon: "gastly", weight: 10, lvlRange: [38, 55] },
      { pokemon: "toxel", weight: 5, lvlRange: [38, 55] },
      { pokemon: "salazzle", weight: 5, lvlRange: [38, 55] },
      { pokemon: "koffing", weight: 20, lvlRange: [20, 35] },
      { pokemon: "weezing", weight: 20, lvlRange: [45, 75] },
      { pokemon: "koffing", weight: 10, lvlRange: [20, 35], variant: ["galarian"] },
      { pokemon: "weezing", weight: 10, lvlRange: [45, 75], variant: ["galarian"] },
    ],
  ],
  [
    "oreganized:silver_ore",
    [
      { pokemon: "orthworm", weight: 10, lvlRange: [2, 4] },
      { pokemon: "durant", weight: 3, lvlRange: [2, 4] },
      { pokemon: "steelix", weight: 1, lvlRange: [30, 50] },
      { pokemon: "klefki", weight: 1, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 1, lvlRange: [2, 4] },
    ],
  ],
  [
    "oreganized:deepslate_silver_ore",
    [
      { pokemon: "orthworm", weight: 10, lvlRange: [2, 4] },
      { pokemon: "durant", weight: 3, lvlRange: [2, 4] },
      { pokemon: "steelix", weight: 1, lvlRange: [30, 50] },
      { pokemon: "klefki", weight: 2, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 2, lvlRange: [2, 4] },
    ],
  ],
  [
    "society:sparkstone_ore",
    [
      { pokemon: "magneton", weight: 6, lvlRange: [30, 50] },
      { pokemon: "rotom", weight: 0.1, lvlRange: [30, 55] },
      { pokemon: "golem", weight: 10, lvlRange: [45, 84], variant: ["alolan"] },
      { pokemon: "eelektross", weight: 10, lvlRange: [45, 84] },
      { pokemon: "glimmet", weight: 2, lvlRange: [25, 34] },
      { pokemon: "glimmora", weight: 1, lvlRange: [45, 84] },
    ],
  ],
  [
    "society:deepslate_sparkstone_ore",
    [
      { pokemon: "magneton", weight: 6, lvlRange: [30, 50] },
      { pokemon: "rotom", weight: 0.3, lvlRange: [30, 55] },
      { pokemon: "golem", weight: 10, lvlRange: [45, 84], variant: ["alolan"] },
      { pokemon: "eelektross", weight: 10, lvlRange: [45, 84] },
      { pokemon: "glimmet", weight: 2, lvlRange: [25, 34] },
      { pokemon: "glimmora", weight: 1, lvlRange: [45, 84] },
    ],
  ],
  [
    "society:iridium_ore",
    [
      { pokemon: "glimmet", weight: 2, lvlRange: [25, 34] },
      { pokemon: "glimmora", weight: 1, lvlRange: [45, 84] },
      { pokemon: "duraludon", weight: 0.4, lvlRange: [45, 84] },
      { pokemon: "sliggoo", weight: 1, lvlRange: [45, 84], variant: ["hisuian"] },
      { pokemon: "metang", weight: 1, lvlRange: [45, 84] },
      { pokemon: "gholdengo", weight: 0.00001, lvlRange: [45, 84] },
    ],
  ],
]);

const getOrePool = (ore) => {
  let basePool = genericOreSpawns
  let specialPool = specialOreSpawns.get(`${ore}`);
  if (specialPool && specialPool.length > 0) {
    return basePool.concat(specialPool);
  }
  return basePool;
};

const uncoverOrePokemon = (level, server, block, pos) => {
  server.scheduleInTicks(2, () => {
    let caughtMon = global.rollPokeWeightedTable(getOrePool(block.id));
    if (!caughtMon) return;
    let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
    if (pokeLevel == 1) {
      console.log(`[WARNING] pokeOre returned invalid level:`);
      console.log(caughtMon);
      console.log(pos);
    }
    server.runCommandSilent(
      `execute in ${level.dimension} run pokespawnat ${pos.x} ${pos.y} ${pos.z} ${caughtMon.pokemon
      } level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""}`
    );
    server.runCommandSilent(
      `playsound cobblemon:impact.rock block @a ${pos.x} ${pos.y} ${pos.z}`
    );
    level.spawnParticles(
      "species:poof",
      true,
      pos.x,
      pos.y - 0.4,
      pos.z,
      0.5,
      0.5,
      0.5,
      1,
      0.5
    );
  });
};

BlockEvents.broken((e) => {
  const { block, player, server, level } = e;
  let spawnChance = 1 / 80;
  // TODO: Silk Touch
  if (block.hasTag("forge:ores")) {
    if (player.stages.has("braiding_surprisegrass")) {
      spawnChance *= 1.5
    } else if (Math.random() < spawnChance) {
      block.popItemFromFace(Item.of("sunlit_cobblemon:braiding_surprisegrass"), "up");
    }
    if (Math.random() < spawnChance && global.hasScope(player)) {
      uncoverOrePokemon(
        level,
        server,
        block,
        block.getPos().immutable()
      );
    }
  }
});
