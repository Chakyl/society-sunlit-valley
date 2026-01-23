console.info("[SOCIETY-S-COBBLEMON] cobblemonGachaPools.js loaded");

let baseGachaSpawns = [
  { pokemon: "meowth", weight: 10, lvlRange: [4, 29] },
  { pokemon: "meowth", weight: 6, lvlRange: [4, 29], variant: ["alolan"] },
  { pokemon: "meowth", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
  { pokemon: "growlithe", weight: 10, lvlRange: [20, 35] },
  { pokemon: "growlithe", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
  { pokemon: "drowzee", weight: 10, lvlRange: [8, 33] },
  { pokemon: "hypno", weight: 10, lvlRange: [44, 48] },
  { pokemon: "voltorb", weight: 10, lvlRange: [20, 35] },
  { pokemon: "voltorb", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
  { pokemon: "koffing", weight: 10, lvlRange: [9, 35] },
  { pokemon: "chansey", weight: 4, lvlRange: [17, 55] },
  { pokemon: "blissey", weight: 2, lvlRange: [45, 90] },
  { pokemon: "mrmime", weight: 10, lvlRange: [26, 46] },
  { pokemon: "mimejr", weight: 10, lvlRange: [4, 20] },
  { pokemon: "jynx", weight: 1, lvlRange: [26, 46] },
  { pokemon: "eevee", weight: 7, lvlRange: [4, 30] },
  { pokemon: "snubbull", weight: 7, lvlRange: [4, 30] },
  { pokemon: "smoochum", weight: 10, lvlRange: [4, 30] },
  { pokemon: "ralts", weight: 4, lvlRange: [4, 20] },
  { pokemon: "lillipup", weight: 10, lvlRange: [4, 20] },
  { pokemon: "pawmi", weight: 10, lvlRange: [4, 20] },
  { pokemon: "pidove", weight: 10, lvlRange: [4, 20] },
  { pokemon: "timburr", weight: 10, lvlRange: [4, 20] },
  { pokemon: "pidove", weight: 10, lvlRange: [4, 20] },
  { pokemon: "vivillon", weight: 10, lvlRange: [12, 41] },
  { pokemon: "maschiff", weight: 10, lvlRange: [12, 30] },
  { pokemon: "klefki", weight: 4, lvlRange: [2, 25] },
  { pokemon: "perrserker", weight: 10, lvlRange: [28, 45] },
  { pokemon: "fidough", weight: 10, lvlRange: [2, 25] },
  { pokemon: "squawkabilly", weight: 10, lvlRange: [2, 25] },
  { pokemon: "yamper", weight: 10, lvlRange: [2, 25] },
  { pokemon: "skitty", weight: 10, lvlRange: [2, 25] },
  { pokemon: "glameow", weight: 10, lvlRange: [2, 25] },
];
let specialGachaTypes = ["starter", "baby_dragon", "baby_fairy", "baby_steel"];
const specialGachaSpawns = new Map([
  [
    "starter",
    [
      { pokemon: "bulbasaur", weight: 10, lvlRange: [2, 4] },
      { pokemon: "charmander", weight: 10, lvlRange: [2, 4] },
      { pokemon: "squirtle", weight: 10, lvlRange: [2, 4] },
      { pokemon: "chikorita", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cyndaquil", weight: 10, lvlRange: [2, 4] },
      { pokemon: "totodile", weight: 10, lvlRange: [2, 4] },
      { pokemon: "treecko", weight: 10, lvlRange: [2, 4] },
      { pokemon: "torchic", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mudkip", weight: 10, lvlRange: [2, 4] },
      { pokemon: "turtwig", weight: 10, lvlRange: [2, 4] },
      { pokemon: "chimchar", weight: 10, lvlRange: [2, 4] },
      { pokemon: "piplup", weight: 10, lvlRange: [2, 4] },
      { pokemon: "snivy", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tepig", weight: 10, lvlRange: [2, 4] },
      { pokemon: "oshawott", weight: 10, lvlRange: [2, 4] },
      { pokemon: "chespin", weight: 10, lvlRange: [2, 4] },
      { pokemon: "fennekin", weight: 10, lvlRange: [2, 4] },
      { pokemon: "froakie", weight: 10, lvlRange: [2, 4] },
      { pokemon: "rowlet", weight: 10, lvlRange: [2, 4] },
      { pokemon: "litten", weight: 10, lvlRange: [2, 4] },
      { pokemon: "popplio", weight: 10, lvlRange: [2, 4] },
      { pokemon: "grookey", weight: 10, lvlRange: [2, 4] },
      { pokemon: "scorbunny", weight: 10, lvlRange: [2, 4] },
      { pokemon: "sobble", weight: 10, lvlRange: [2, 4] },
      { pokemon: "sprigatito", weight: 10, lvlRange: [2, 4] },
      { pokemon: "fuecoco", weight: 10, lvlRange: [2, 4] },
      { pokemon: "quaxly", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "dragon",
    [
      { pokemon: "dratini", weight: 10, lvlRange: [2, 4] },
      { pokemon: "gible", weight: 10, lvlRange: [2, 4] },
      { pokemon: "axew", weight: 10, lvlRange: [2, 4] },
      { pokemon: "deino", weight: 10, lvlRange: [2, 4] },
      { pokemon: "goomy", weight: 10, lvlRange: [2, 4] },
      { pokemon: "jangmoo", weight: 10, lvlRange: [2, 4] },
      { pokemon: "dreepy", weight: 10, lvlRange: [2, 4] },
      { pokemon: "frigibax", weight: 10, lvlRange: [2, 4] },
      { pokemon: "trapinch", weight: 10, lvlRange: [2, 4] },
      { pokemon: "swablu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "horsea", weight: 10, lvlRange: [2, 4] },
      { pokemon: "skrelp", weight: 10, lvlRange: [2, 4] },
      { pokemon: "applin", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tatsugiri", weight: 10, lvlRange: [2, 4] },
      { pokemon: "turtonator", weight: 10, lvlRange: [2, 4] },
      { pokemon: "duraludon", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cyclizar", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "fairy",
    [
      { pokemon: "cleffa", weight: 10, lvlRange: [2, 4] },
      { pokemon: "igglybuff", weight: 10, lvlRange: [2, 4] },
      { pokemon: "marill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "azurill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "ralts", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mimejr", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cottonee", weight: 10, lvlRange: [2, 4] },
      { pokemon: "flabebe", weight: 10, lvlRange: [2, 4] },
      { pokemon: "carbink", weight: 10, lvlRange: [2, 4] },
      { pokemon: "klefki", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cutiefly", weight: 10, lvlRange: [2, 4] },
      { pokemon: "morelull", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bounsweet", weight: 10, lvlRange: [2, 4] },
      { pokemon: "comfey", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mimikyu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "milcery", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tinkatink", weight: 10, lvlRange: [2, 4] },
      { pokemon: "fidough", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "steel",
    [
      { pokemon: "magnemite", weight: 10, lvlRange: [2, 4] },
      { pokemon: "diglett", weight: 1, lvlRange: [2, 4], variant: ["alolan"] },
      {
        pokemon: "meowth",
        weight: 6,
        lvlRange: [4, 29],
        variant: ["galarian"],
      },
      { pokemon: "onix", weight: 10, lvlRange: [2, 4] },
      { pokemon: "scyther", weight: 10, lvlRange: [2, 4] },
      { pokemon: "skarmory", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 10, lvlRange: [2, 4] },
      { pokemon: "aron", weight: 10, lvlRange: [2, 4] },
      { pokemon: "beldum", weight: 10, lvlRange: [2, 4] },
      { pokemon: "shieldon", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bronzor", weight: 10, lvlRange: [2, 4] },
      { pokemon: "riolu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "drilbur", weight: 10, lvlRange: [2, 4] },
      { pokemon: "ferroseed", weight: 10, lvlRange: [2, 4] },
      { pokemon: "klink", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pawniard", weight: 10, lvlRange: [2, 4] },
      { pokemon: "durant", weight: 10, lvlRange: [2, 4] },
      { pokemon: "honnedge", weight: 10, lvlRange: [2, 4] },
      { pokemon: "klefki", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cufant", weight: 10, lvlRange: [2, 4] },
      { pokemon: "duraludon", weight: 10, lvlRange: [2, 4] },
      {
        pokemon: "slowpoke",
        weight: 1,
        lvlRange: [2, 4],
        variant: ["galarian"],
      },
      { pokemon: "orthworm", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tinkatink", weight: 10, lvlRange: [2, 4] },
      { pokemon: "varoom", weight: 10, lvlRange: [2, 4] },
      { pokemon: "varoom", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "paradox",
    [
      { pokemon: "screamtail", weight: 10, lvlRange: [50, 100] },
      { pokemon: "fluttermane", weight: 10, lvlRange: [50, 100] },
      { pokemon: "slitherwing", weight: 10, lvlRange: [50, 100] },
      { pokemon: "sandyshocks", weight: 10, lvlRange: [50, 100] },
      { pokemon: "roaringmoon", weight: 10, lvlRange: [50, 100] },
      { pokemon: "walkingwake", weight: 10, lvlRange: [50, 100] },
      { pokemon: "gougingfire", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ragingbolt", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironthorns", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironmoth", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironbundle", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironvaliant", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironleaves", weight: 10, lvlRange: [50, 100] },
    ],
  ],
  [
    "baby",
    [
      { pokemon: "cleffa", weight: 10, lvlRange: [2, 4] },
      { pokemon: "igglybuff", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pichu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "azurill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tyrogue", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mimejr", weight: 10, lvlRange: [2, 4] },
      { pokemon: "smoochum", weight: 10, lvlRange: [2, 4] },
      { pokemon: "elekid", weight: 10, lvlRange: [2, 4] },
      { pokemon: "magby", weight: 10, lvlRange: [2, 4] },
      { pokemon: "budew", weight: 10, lvlRange: [2, 4] },
      { pokemon: "flabebe", weight: 10, lvlRange: [2, 4] },
      { pokemon: "chingling", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bonsly", weight: 10, lvlRange: [2, 4] },
      { pokemon: "happiny", weight: 10, lvlRange: [2, 4] },
      { pokemon: "munchlax", weight: 10, lvlRange: [2, 4] },
      { pokemon: "riolu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "toxel", weight: 10, lvlRange: [2, 4] },
    ],
  ],
]);

const getGachaPool = (type, qualityNbt) => {
  let basePool = baseGachaSpawns;
  let specialPool = specialGachaSpawns.get(`${type}`);
  if (specialPool && specialPool.length > 0) {
    if (qualityNbt && qualityNbt.quality && qualityNbt.quality == 3.0) {
      return specialPool;
    }
    return basePool.concat(specialPool);
  }
  return basePool;
};
const getShinyChance = (qualityNbt) => {
  let value = 0.001;
  if (qualityNbt && qualityNbt.quality) {
    if (qualityNbt.quality == 1.0) value = 0.005;
    if (qualityNbt.quality == 2.0) value = 0.01;
    if (qualityNbt.quality == 3.0) value = 0.02;
  }
  return value;
};
const rollGacha = (level, server, itemNbt, player, pos) => {
  let caughtMon = global.rollPokeWeightedTable(
    getGachaPool(itemNbt.type, itemNbt.quality_food),
  );
  let shinyChance = getShinyChance(itemNbt.quality_food);
  let isShiny = false;
  if (!caughtMon) return;
  let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
  if (pokeLevel == 1) {
    console.log(`[WARNING] pokeGacha returned invalid level:`);
    console.log(caughtMon);
  }
  if (Math.random() < shinyChance) {
    isShiny = true;
    server.tell(
      Text.translatable(
        "sunlit_cobblemon.gachamon_capsule.shiny_announce",
        Text.red(`${player.username}`),
        Text.gold(
          Text.translatable(
            `cobblemon.species.${caughtMon.pokemon}.name`,
          ).getString(),
        ),
      ).gray(),
    );
  }
  server.runCommandSilent(
    `pokespawnat ${pos.x} ${pos.y + 2} ${pos.z} ${
      caughtMon.pokemon
    } level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""}${isShiny ? "shiny" : ""}`,
  );
  server.runCommandSilent(
    `playsound stardew_fishing:chest_get block @a ${pos.x} ${pos.y} ${pos.z}`,
  );
  level.spawnParticles(
    "species:poof",
    true,
    pos.x,
    pos.y + 0.4,
    pos.z,
    0.5,
    0.5,
    0.5,
    1,
    0.5,
  );
};

ItemEvents.rightClicked("sunlit_cobblemon:gachamon_capsule", (e) => {
  const { server, player, level, item } = e;
  if (!global.hasScope(player)) {
    player.tell(
      Text.translatable("sunlit_cobblemon.gachamon_capsule.scope").red(),
    );
    return;
  }
  let nearbyMons = level
    .getEntitiesWithin(player.boundingBox.inflate(20))
    .filter((scanEntity) => scanEntity.type === "cobblemon:pokemon");
  if (nearbyMons.length > 40) {
    player.tell(
      Text.translatable("sunlit_cobblemon.gachamon_capsule.addiction").red(),
    );
    return;
  }
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`,
  );
  let itemNbt = item.getNbt() || { type: "common" };
  rollGacha(level, server, itemNbt, player, player.getOnPos());
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`,
  );
  if (!player.isCreative()) item.count--;
  global.addItemCooldown(player, "sunlit_cobblemon:gachamon_capsule", 2);
});
