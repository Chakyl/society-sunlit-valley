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
  { pokemon: "chansey", weight: 2, lvlRange: [17, 55] },
  { pokemon: "blissey", weight: 1, lvlRange: [45, 90] },
  { pokemon: "mrmime", weight: 10, lvlRange: [26, 46] },
  { pokemon: "mimejr", weight: 10, lvlRange: [4, 20] },
  { pokemon: "jynx", weight: 1, lvlRange: [26, 46] },
  { pokemon: "eevee", weight: 1, lvlRange: [4, 30] },
  { pokemon: "snubbull", weight: 7, lvlRange: [4, 30] },
  { pokemon: "smoochum", weight: 10, lvlRange: [4, 30] },
  { pokemon: "ralts", weight: 2, lvlRange: [4, 20] },
  { pokemon: "lillipup", weight: 10, lvlRange: [4, 20] },
  { pokemon: "pawmi", weight: 10, lvlRange: [4, 20] },
  { pokemon: "trubbish", weight: 6, lvlRange: [4, 20] },
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
    "rock",
    [
      { pokemon: "onix", weight: 10, lvlRange: [2, 4] },
      { pokemon: "geodude", weight: 10, lvlRange: [2, 4] },
      { pokemon: "geodude", weight: 5, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "rhyhorn", weight: 10, lvlRange: [2, 4] },
      { pokemon: "corsola", weight: 10, lvlRange: [2, 4] },
      { pokemon: "binacle", weight: 10, lvlRange: [2, 4] },
      { pokemon: "nosepass", weight: 10, lvlRange: [2, 4] },
      { pokemon: "klawf", weight: 10, lvlRange: [2, 4] },
      { pokemon: "dwebble", weight: 10, lvlRange: [2, 4] },
      { pokemon: "growlithe", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "lunatone", weight: 5, lvlRange: [2, 4] },
      { pokemon: "bonsly", weight: 6, lvlRange: [2, 4] },
      { pokemon: "nacli", weight: 5, lvlRange: [2, 4] },
      { pokemon: "stonjourner", weight: 5, lvlRange: [2, 4] },
      { pokemon: "aron", weight: 4, lvlRange: [2, 4] },
      { pokemon: "slugma", weight: 1, lvlRange: [2, 4] },
      { pokemon: "shuckle", weight: 4, lvlRange: [2, 4] },
      { pokemon: "rockruff", weight: 3, lvlRange: [2, 4] },
      { pokemon: "larvitar", weight: 1, lvlRange: [2, 4] },
      { pokemon: "carbink", weight: 1, lvlRange: [2, 4] },
      { pokemon: "minior", weight: 1, lvlRange: [2, 4] },
      { pokemon: "glimmet", weight: 1, lvlRange: [2, 4] },
    ],
  ],
  [
    "dragon",
    [
      { pokemon: "dratini", weight: 3, lvlRange: [2, 4] },
      { pokemon: "gible", weight: 3, lvlRange: [2, 4] },
      { pokemon: "bagon", weight: 3, lvlRange: [2, 4] },
      { pokemon: "axew", weight: 3, lvlRange: [2, 4] },
      { pokemon: "deino", weight: 3, lvlRange: [2, 4] },
      { pokemon: "goomy", weight: 4, lvlRange: [2, 4] },
      { pokemon: "jangmoo", weight: 4, lvlRange: [2, 4] },
      { pokemon: "dreepy", weight: 5, lvlRange: [2, 4] },
      { pokemon: "frigibax", weight: 5, lvlRange: [2, 4] },
      { pokemon: "trapinch", weight: 10, lvlRange: [2, 4] },
      { pokemon: "swablu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "horsea", weight: 10, lvlRange: [2, 4] },
      { pokemon: "skrelp", weight: 5, lvlRange: [2, 4] },
      { pokemon: "applin", weight: 5, lvlRange: [2, 4] },
      { pokemon: "tatsugiri", weight: 10, lvlRange: [2, 4] },
      { pokemon: "turtonator", weight: 10, lvlRange: [2, 4] },
      { pokemon: "duraludon", weight: 3, lvlRange: [2, 4] },
      { pokemon: "cyclizar", weight: 10, lvlRange: [2, 4] },
      { pokemon: "druddigon", weight: 10, lvlRange: [2, 4] },
      { pokemon: "drampa", weight: 5, lvlRange: [2, 4] },
    ],
  ],
  [
    "fairy",
    [
      { pokemon: "cleffa", weight: 4, lvlRange: [2, 4] },
      { pokemon: "igglybuff", weight: 4, lvlRange: [2, 4] },
      { pokemon: "marill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "azurill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "ralts", weight: 3, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 3, lvlRange: [2, 4] },
      { pokemon: "mimejr", weight: 6, lvlRange: [2, 4] },
      { pokemon: "cottonee", weight: 7, lvlRange: [2, 4] },
      { pokemon: "flabebe", weight: 6, lvlRange: [2, 4] },
      { pokemon: "carbink", weight: 6, lvlRange: [2, 4] },
      { pokemon: "klefki", weight: 3, lvlRange: [2, 4] },
      { pokemon: "cutiefly", weight: 10, lvlRange: [2, 4] },
      { pokemon: "morelull", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bounsweet", weight: 10, lvlRange: [2, 4] },
      { pokemon: "comfey", weight: 6, lvlRange: [2, 4] },
      { pokemon: "mimikyu", weight: 3, lvlRange: [2, 4] },
      { pokemon: "swirlix", weight: 7, lvlRange: [2, 4] },
      { pokemon: "milcery", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tinkatink", weight: 8, lvlRange: [2, 4] },
      { pokemon: "impidimp", weight: 4, lvlRange: [2, 4] },
      { pokemon: "fidough", weight: 10, lvlRange: [2, 4] },
      { pokemon: "togepi", weight: 1, lvlRange: [2, 4] },
      { pokemon: "koffing", weight: 10, lvlRange: [2, 4], variant: ["region_bias=galar"] },
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
      { pokemon: "scyther", weight: 5, lvlRange: [2, 4] },
      { pokemon: "skarmory", weight: 8, lvlRange: [2, 4] },
      { pokemon: "mawile", weight: 5, lvlRange: [2, 4] },
      { pokemon: "aron", weight: 2, lvlRange: [2, 4] },
      { pokemon: "beldum", weight: 2, lvlRange: [2, 4] },
      { pokemon: "shieldon", weight: 1, lvlRange: [2, 4] },
      { pokemon: "bronzor", weight: 6, lvlRange: [2, 4] },
      { pokemon: "riolu", weight: 4, lvlRange: [2, 4] },
      { pokemon: "drilbur", weight: 10, lvlRange: [2, 4] },
      { pokemon: "ferroseed", weight: 6, lvlRange: [2, 4] },
      { pokemon: "klink", weight: 7, lvlRange: [2, 4] },
      { pokemon: "pawniard", weight: 4, lvlRange: [2, 4] },
      { pokemon: "durant", weight: 4, lvlRange: [2, 4] },
      { pokemon: "honnedge", weight: 3, lvlRange: [2, 4] },
      { pokemon: "klefki", weight: 10, lvlRange: [2, 4] },
      { pokemon: "cufant", weight: 10, lvlRange: [2, 4] },
      { pokemon: "duraludon", weight: 2, lvlRange: [2, 4] },
      {
        pokemon: "slowpoke",
        weight: 1,
        lvlRange: [2, 4],
        variant: ["galarian"],
      },
      { pokemon: "orthworm", weight: 5, lvlRange: [2, 4] },
      { pokemon: "tinkatink", weight: 6, lvlRange: [2, 4] },
      { pokemon: "varoom", weight: 10, lvlRange: [2, 4] },
    ],
  ],
  [
    "ghost",
    [
      { pokemon: "gastly", weight: 10, lvlRange: [2, 4] },
      { pokemon: "shedinja", weight: 2, lvlRange: [2, 4] },
      { pokemon: "sableye", weight: 10, lvlRange: [2, 4] },
      { pokemon: "shuppet", weight: 10, lvlRange: [2, 4] },
      { pokemon: "duskull", weight: 10, lvlRange: [2, 4] },
      { pokemon: "drifloon", weight: 4, lvlRange: [2, 4] },
      { pokemon: "spiritomb", weight: 1, lvlRange: [2, 4] },
      { pokemon: "rotom", weight: 1, lvlRange: [2, 4] },
      { pokemon: "litwik", weight: 10, lvlRange: [2, 4] },
      { pokemon: "frillish", weight: 10, lvlRange: [2, 4] },
      { pokemon: "yamask", weight: 10, lvlRange: [2, 4] },
      { pokemon: "yamask", weight: 2, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "golett", weight: 10, lvlRange: [2, 4] },
      { pokemon: "zorua", weight: 4, lvlRange: [2, 4], variant: ["hisuian"] },
      { pokemon: "honedge", weight: 10, lvlRange: [2, 4] },
      { pokemon: "phantump", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pumpkaboo", weight: 10, lvlRange: [2, 4] },
      { pokemon: "sandygast", weight: 10, lvlRange: [2, 4] },
      { pokemon: "dhelmise", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bramblin", weight: 10, lvlRange: [2, 4] },
      { pokemon: "greavard", weight: 10, lvlRange: [2, 4] },
      { pokemon: "gimmighoul", weight: 10, lvlRange: [2, 4] },
      { pokemon: "poltchageist", weight: 5, lvlRange: [2, 4] },
      { pokemon: "sinistcha", weight: 5, lvlRange: [2, 4] },
      { pokemon: "poltchageist", weight: 5, lvlRange: [2, 4]},
      { pokemon: "sinistcha", weight: 5, lvlRange: [2, 4] },
    ],
  ],
  [
    "paradox",
    [
      { pokemon: "screamtail", weight: 10, lvlRange: [50, 100] },
      { pokemon: "fluttermane", weight: 6, lvlRange: [50, 100] },
      { pokemon: "slitherwing", weight: 10, lvlRange: [50, 100] },
      { pokemon: "sandyshocks", weight: 10, lvlRange: [50, 100] },
      { pokemon: "roaringmoon", weight: 10, lvlRange: [50, 100] },
      { pokemon: "walkingwake", weight: 4, lvlRange: [50, 100] },
      { pokemon: "gougingfire", weight: 4, lvlRange: [50, 100] },
      { pokemon: "ragingbolt", weight: 4, lvlRange: [50, 100] },
      { pokemon: "ironthorns", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironmoth", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironbundle", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironvaliant", weight: 10, lvlRange: [50, 100] },
      { pokemon: "ironleaves", weight: 4, lvlRange: [50, 100] },
    ],
  ],
  [
    "baby",
    [
      { pokemon: "cleffa", weight: 10, lvlRange: [2, 4] },
      { pokemon: "igglybuff", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pichu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "azurill", weight: 10, lvlRange: [2, 4] },
      { pokemon: "tyrogue", weight: 8, lvlRange: [2, 4] },
      { pokemon: "mimejr", weight: 10, lvlRange: [2, 4] },
      { pokemon: "smoochum", weight: 10, lvlRange: [2, 4] },
      { pokemon: "elekid", weight: 6, lvlRange: [2, 4] },
      { pokemon: "magby", weight: 6, lvlRange: [2, 4] },
      { pokemon: "budew", weight: 10, lvlRange: [2, 4] },
      { pokemon: "flabebe", weight: 10, lvlRange: [2, 4] },
      { pokemon: "chingling", weight: 10, lvlRange: [2, 4] },
      { pokemon: "bonsly", weight: 10, lvlRange: [2, 4] },
      { pokemon: "happiny", weight: 4, lvlRange: [2, 4] },
      { pokemon: "munchlax", weight: 1, lvlRange: [2, 4] },
      { pokemon: "riolu", weight: 4, lvlRange: [2, 4] },
      { pokemon: "toxel", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mantyke", weight: 10, lvlRange: [2, 4] },
      { pokemon: "togepi", weight: 1, lvlRange: [2, 4] },
    ],
  ],
  [
    "pika",
    [
      { pokemon: "pichu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pichu", weight: 6, lvlRange: [2, 4], variant: ["region_bias=alola"] },
      { pokemon: "plusle", weight: 10, lvlRange: [2, 4] },
      { pokemon: "minun", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pachirisu", weight: 10, lvlRange: [2, 4] },
      { pokemon: "emolga", weight: 10, lvlRange: [2, 4] },
      { pokemon: "dedenne", weight: 10, lvlRange: [2, 4] },
      { pokemon: "togedemaru", weight: 10, lvlRange: [2, 4] },
      { pokemon: "morpeko", weight: 10, lvlRange: [2, 4] },
      { pokemon: "pawmi", weight: 10, lvlRange: [2, 4] },
      { pokemon: "mimikyu", weight: 1, lvlRange: [2, 4] },
    ],
  ],
  [
    "alolan",
    [
      { pokemon: "geodude", weight: 5, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "meowth", weight: 8, lvlRange: [4, 29], variant: ["alolan"] },
      { pokemon: "diglett", weight: 6, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "vulpix", weight: 6, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "grimer", weight: 8, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "rattata", weight: 8, lvlRange: [2, 4], variant: ["alolan"] },
      { pokemon: "pichu", weight: 6, lvlRange: [2, 4], variant: ["region_bias=alola"] },
      { pokemon: "exeggcute", weight: 6, lvlRange: [2, 4], variant: ["region_bias=alola"] },
      { pokemon: "cubone", weight: 6, lvlRange: [2, 4], variant: ["region_bias=alola"] },
    ],
  ],
  [
    "hisuian",
    [
      { pokemon: "growlithe", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "voltorb", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "qwilfish", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "sneasel", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "zorua", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "avalugg", weight: 6, lvlRange: [20, 35], variant: ["hisuian"] },
      { pokemon: "rufflet", weight: 6, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
      { pokemon: "petilil", weight: 6, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
      { pokemon: "goomy", weight: 6, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
      { pokemon: "cyndaquil", weight: 2, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
      { pokemon: "oshawott", weight: 2, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
      { pokemon: "rowlet", weight: 2, lvlRange: [2, 4], variant: ["region_bias=hisui"] },
    ],
  ],
  [
    "galarian",
    [
      { pokemon: "meowth", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "ponyta", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "slowpoke", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "farfetchd", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "stunfisk", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "yamask", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "corsola", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "darumaka", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "zigzagoon", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "ponyta", weight: 6, lvlRange: [4, 29], variant: ["galarian"] },
      { pokemon: "koffing", weight: 8, lvlRange: [2, 4], variant: ["region_bias=galar"] },
      { pokemon: "mimejr", weight: 8, lvlRange: [2, 4], variant: ["region_bias=galar"] },
    ],
  ],
  [
    "magikarp",
    [

      { pokemon: "magikarp", weight: 5, lvlRange: [3, 7] },
      // Magikarp Jump Variants
      { pokemon: "magikarp", variant: ["magikarp_jump=calico-orange-white"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=calico-white-orange"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=calico-orange-white-black"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=orange-forehead"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=orange-mask"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=orange-gold"], weight: 1, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=pink-two-tone"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=pink-orca"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=pink-dapples"], weight: 1, lvlRange: [3, 7] },

      { pokemon: "magikarp", variant: ["magikarp_jump=orange-two-tone"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=orange-orange-orca"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=orange-dapples"], weight: 1, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=blue-saucy"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=blue-raindrops"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=apricot-zebra"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=apricot-stripes"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=apricot-tiger"], weight: 1, lvlRange: [3, 7] },

      { pokemon: "magikarp", variant: ["magikarp_jump=brown-zebra"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=brown-stripes"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=brown-tiger"], weight: 1, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=purple-bubbles"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=purple-patches"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=purple-diamonds"], weight: 1, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=violet-saucy"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=violet-raindrops"], weight: 2, lvlRange: [3, 7] },

      { pokemon: "magikarp", variant: ["magikarp_jump=gray-bubbles"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=gray-patches"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=gray-diamonds"], weight: 1, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=black-forehead"], weight: 2, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=black-mask"], weight: 3, lvlRange: [3, 7] },
      { pokemon: "magikarp", variant: ["magikarp_jump=skelly"], weight: 3, lvlRange: [3, 7] },
    ]
  ]
]);

const getGachaPool = (type, qualityNbt, hasGachamonbler) => {
  let basePool = baseGachaSpawns;
  let specialPool = specialGachaSpawns.get(`${type}`);
  if (specialPool && specialPool.length > 0) {
    if (qualityNbt && qualityNbt.quality && Number(qualityNbt.quality) >= (hasGachamonbler ? 2.0 : 3.0)) {
      return specialPool;
    }
    return basePool.concat(specialPool);
  }
  return basePool;
};
const getShinyChance = (qualityNbt) => {
  let value = 0.001;
  if (qualityNbt && qualityNbt.quality) {
    if (qualityNbt.quality == 1.0) value = 0.0025;
    if (qualityNbt.quality == 2.0) value = 0.005;
    if (qualityNbt.quality == 3.0) value = 0.01;
  }
  return value;
};
const rollGacha = (level, server, itemNbt, player, pos) => {
  let hasGachamonbler = player.stages.has("the_gachamonbler");
  let caughtMon = global.rollPokeWeightedTable(getGachaPool(itemNbt.type, itemNbt.quality_food, hasGachamonbler));
  let shinyChance = getShinyChance(itemNbt.quality_food);
  if (hasGachamonbler) shinyChance *= 2;
  else if (Math.random() < 0.01) {
    player.give(Item.of("sunlit_cobblemon:the_gachamonbler"))
  }
  let isShiny = false;
  if (!caughtMon) return;
  let pokeLevel = global.getPokemonLevel(caughtMon.lvlRange);
  if (pokeLevel == 1) {
    console.log(`[WARNING] pokeGacha returned invalid pokelevel:`);
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
  server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${pos.x} ${pos.y + 2} ${pos.z} ${caughtMon.pokemon} level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""} ${isShiny ? "shiny" : ""}`);
  if (player.stages.has("the_red_and_the_black")) {
    isShiny = false;
    if (!isShiny) {
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
    }
    server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${pos.x} ${pos.y + 2} ${pos.z} ${caughtMon.pokemon} level=${pokeLevel} ${caughtMon.variant ? caughtMon.variant : ""} ${isShiny ? "shiny" : ""}`);
  }
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
      Text.translatable("sunlit_cobblemon.need_scope").red(),
    );
    return;
  }
  let nearbyMons = level
    .getEntitiesWithin(player.boundingBox.inflate(12))
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
