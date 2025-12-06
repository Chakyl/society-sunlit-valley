console.info("[SOCIETY-S-COBBLEMON] cobblemonPokeCrop.js loaded");
/**
 * TODO: Pitcher Pod handling
 */
let genericSpawns = [
  { pokemon: "caterpie", weight: 10, lvlRange: [5, 15] },
  { pokemon: "weedle", weight: 10, lvlRange: [5, 15] },
  { pokemon: "ekans", weight: 10, lvlRange: [5, 15] },
  { pokemon: "oddish", weight: 10, lvlRange: [5, 15] },
  { pokemon: "paras", weight: 10, lvlRange: [5, 15] },
  { pokemon: "bellsprout", weight: 10, lvlRange: [5, 15] },
  { pokemon: "spinarak", weight: 10, lvlRange: [5, 15] },
  { pokemon: "seedot", weight: 10, lvlRange: [5, 15] },
  { pokemon: "surskit", weight: 10, lvlRange: [5, 15] },
  { pokemon: "shroomish", weight: 10, lvlRange: [5, 15] },
  { pokemon: "lotad", weight: 10, lvlRange: [5, 15] },
  { pokemon: "budew", weight: 10, lvlRange: [5, 15] },
  { pokemon: "petilil", weight: 10, lvlRange: [5, 15] },
  { pokemon: "scatterbug", weight: 10, lvlRange: [5, 15] },
  { pokemon: "combee", weight: 10, lvlRange: [5, 15] },
  { pokemon: "pumpkaboo", weight: 5, lvlRange: [5, 15] },
  { pokemon: "gourgeist", weight: 2, lvlRange: [16, 35] },
];
let genericTreeSpawns = [
  { pokemon: "scyther", weight: 5, lvlRange: [5, 25] },
  { pokemon: "pinsir", weight: 5, lvlRange: [5, 25] },
  { pokemon: "heracross", weight: 5, lvlRange: [5, 25] },
  { pokemon: "ariados", weight: 5, lvlRange: [5, 25] },
  { pokemon: "nuzleaf", weight: 5, lvlRange: [5, 25] },
  { pokemon: "shiftree", weight: 5, lvlRange: [5, 25] },
  { pokemon: "combee", weight: 5, lvlRange: [5, 25] },
  { pokemon: "vespiquen", weight: 1, lvlRange: [26, 50] },
  { pokemon: "phantump", weight: 5, lvlRange: [5, 25] },
  { pokemon: "trevenant", weight: 1, lvlRange: [26, 50] },
  { pokemon: "fomantis", weight: 5, lvlRange: [35, 50] },
  { pokemon: "ludicolo", weight: 5, lvlRange: [30, 50] },
  { pokemon: "carnivine", weight: 2, lvlRange: [5, 25] },
  { pokemon: "tangrowth", weight: 2, lvlRange: [25, 40] },
  { pokemon: "tangela", weight: 5, lvlRange: [5, 24] },
  { pokemon: "ariados", weight: 5, lvlRange: [5, 25] },
  { pokemon: "lurantis", weight: 2, lvlRange: [35, 50] },
];

const specialSpawns = new Map([
  [
    "herbalbrews:tea_plant",
    [
      { pokemon: "chikorita", weight: 1, lvlRange: [5, 15] },
      { pokemon: "bayleef", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "meganium", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "society:onion",
    [
      { pokemon: "bulbasaur", weight: 1, lvlRange: [5, 15] },
      { pokemon: "ivysaur", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "venusaur", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "herbalbrews:yerba_mate_plant",
    [
      { pokemon: "treecko", weight: 1, lvlRange: [5, 15] },
      { pokemon: "grovyle", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "sceptile", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "society:tubabacco_leaf",
    [
      { pokemon: "sprigatito", weight: 1, lvlRange: [5, 15] },
      { pokemon: "floragato", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "meowscarada", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "veggiesdelight:broccoli_crop",
    [
      { pokemon: "turtwig", weight: 1, lvlRange: [5, 15] },
      { pokemon: "grotle", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "torterra", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "atmospheric:tall_aloe_vera",
    [
      { pokemon: "snivy", weight: 1, lvlRange: [5, 15] },
      { pokemon: "servine", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "serperior", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "society:peanut",
    [
      { pokemon: "chespin", weight: 1, lvlRange: [5, 15] },
      { pokemon: "quilladin", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "chesnaught", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "farm_and_charm:corn_crop",
    [
      { pokemon: "rowlet", weight: 1, lvlRange: [5, 15] },
      { pokemon: "dartrix", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "decidueye", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "pamhc2trees:pambanana",
    [
      { pokemon: "grookey", weight: 1, lvlRange: [5, 15] },
      { pokemon: "thwackey", weight: 0.5, lvlRange: [16, 35] },
      { pokemon: "rillaboom", weight: 0.125, lvlRange: [36, 50] },
    ],
  ],
  [
    "minecraft:pitcher_crop",
    [
      { pokemon: "gloom", weight: 2, lvlRange: [20, 35] },
      { pokemon: "vileplume", weight: 1, lvlRange: [35, 50] },
      { pokemon: "weepinbell", weight: 2, lvlRange: [20, 35] },
      { pokemon: "victreebell", weight: 1, lvlRange: [36, 50] },
    ],
  ],
  [
    "pamhc2trees:pamstarfruit",
    [
      { pokemon: "gossifleur", weight: 2, lvlRange: [5, 20] },
      { pokemon: "eldegoss", weight: 1, lvlRange: [20, 30] },
      { pokemon: "cutiefly", weight: 2, lvlRange: [5, 20] },
      { pokemon: "ribombee", weight: 1, lvlRange: [25, 40] },
    ],
  ],
  [
    "farmersdelight:cabbages",
    [
      { pokemon: "leafeon", weight: 1, lvlRange: [25, 35] },
      { pokemon: "spewpa", weight: 5, lvlRange: [5, 20] },
    ],
  ],
  [
    "etcetera:cotton",
    [
      { pokemon: "whimsicott", weight: 3, lvlRange: [20, 30] },
      { pokemon: "cottonee", weight: 3, lvlRange: [5, 20] },
    ],
  ],
  [
    "pamhc2trees:pampawpaw",
    [{ pokemon: "exeggcute", weight: 1, lvlRange: [5, 25] }],
  ],
  [
    "minecraft:potatoes",
    [
      { pokemon: "kricketot", weight: 3, lvlRange: [5, 25] },
      { pokemon: "kricketune", weight: 1, lvlRange: [20, 30] },
    ],
  ],
]);

const getCropPool = (crop) => {
  let basePool = crop.includes("pamhc2trees")
    ? genericTreeSpawns
    : genericSpawns;
  let specialPool = specialSpawns.get(`${crop}`);
  if (specialPool && specialPool.length > 0) {
    return basePool.concat(specialPool);
  }
  return basePool;
};

const uncoverCropPokemon = (level, server, block, initialPos, pos) => {
  server.scheduleInTicks(2, () => {
    let initialBlock = level.getBlockState(initialPos);
    if (!initialBlock.block.isMaxAge(initialBlock)) {
      let caughtMon = global.rollPokeWeightedTable(getCropPool(block.id));
      if (!caughtMon) return;
      let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
      if (pokeLevel == 1) {
        console.log(`[WARNING] pokeCrop returned invalid level:`);
        console.log(caughtMon);
      }
      console.log(pos);
      server.runCommandSilent(
        `pokespawnat ${pos.x} ${pos.y} ${pos.z} ${
          caughtMon.pokemon
        } level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""}`
      );
      server.runCommandSilent(
        `playsound cobblemon:impact.grass block @a ${pos.x} ${pos.y} ${pos.z}`
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
    }
  });
};

BlockEvents.rightClicked((e) => {
  const { block, player, server, hand, item, level } = e;
  if (hand == "MAIN_HAND") {
    let initialBlock = level.getBlockState(block.pos);
    let checkBlocked;
    let blockState;
    if (
      (block.hasTag("minecraft:crops") || block.id.includes("pamhc2trees")) &&
      initialBlock.block.isMaxAge(initialBlock) &&
      global.hasScope(player)
    ) {
      let radius = 0;
      if (item.hasTag("minecraft:hoes")) radius = 1;
      if (
        [
          "minecraft:netherite_hoe",
          "minecraft:diamond_hoe",
          "botania:elementium_hoe",
        ].includes(item.id)
      )
        radius = 2;
      for (let pos of BlockPos.betweenClosed(
        new BlockPos(block.x - radius, block.y, block.z - radius),
        [block.x + radius, block.y, block.z + radius]
      )) {
        if (Math.random() < 1 / 80) {
          checkBlocked = level.getBlock(pos);
          blockState = level.getBlockState(pos);
          if (
            (checkBlocked.hasTag("minecraft:crops") ||
              checkBlocked.id.includes("pamhc2trees")) &&
            !deniedCrops.includes(checkBlocked.id)
          ) {
            if (blockState.block.isMaxAge(blockState)) {
              uncoverCropPokemon(
                level,
                server,
                checkBlocked,
                block.pos,
                pos.immutable()
              );
            }
          }
        }
      }
    }
  }
});
