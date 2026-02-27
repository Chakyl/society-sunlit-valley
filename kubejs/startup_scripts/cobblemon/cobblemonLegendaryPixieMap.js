// priority: -21
console.info("[SOCIETY-S-COBBLEMON] cobblemonLegendaryPixieMap.js loaded");

global.cobblemonLegendaryMap = new Map([
  ["fighting", { color: "4", legendaries: [{ entity: "", pokemon: "" }] }],
  [
    "psychic",
    {
      color: "d",
      legendaries: [
        {
          entity: "minecraft:glow_squid",
          pokemonId: "uxie",
          sound: "legendarycreatures:wisp_idle",
        },
        {
          entity: "minecraft:squid",
          pokemonId: "mesprit",
          sound: "legendarycreatures:wisp_idle",
        },
        {
          entity: "minecraft:turtle",
          pokemonId: "azelf",
          sound: "legendarycreatures:wisp_idle",
        },
      ],
    },
  ],
  ["poison", { color: "5", legendaries: [{ entity: "", pokemon: "" }] }],
  ["dragon", { color: "1", legendaries: [{ entity: "", pokemon: "" }] }],
  ["ghost", { color: "5", legendaries: [{ entity: "", pokemon: "" }] }],
  ["dark", { color: "8", legendaries: [{ entity: "", pokemon: "" }] }],
  ["ground", { color: "c", legendaries: [{ entity: "", pokemon: "" }] }],
  [
    "fire",
    {
      color: "c",
      legendaries: [
        {
          entity: "wildernature:flamingo",
          pokemonId: "moltres",
          sound: "wildernature:flamingo_death",
        },
      ],
    },
  ],
  ["fairy", { color: "d", legendaries: [{ entity: "", pokemon: "" }] }],
  ["water", { color: "9", legendaries: [{ entity: "", pokemon: "" }] }],
  [
    "flying",
    {
      color: "b",
      legendaries: [
        {
          entity: "crittersandcompanions:shima_enaga",
          pokemonId: "tornadus",
          sound: "minecraft:item.trident.thunder",
        },
        {
          entity: "species:wraptor",
          pokemonId: "thundurus",
          sound: "minecraft:item.trident.thunder",
        },
        {
          entity: "autumnity:turkey",
          pokemonId: "landorus",
          sound: "minecraft:item.trident.thunder",
        },
      ],
    },
  ],
  ["normal", { color: "f", legendaries: [{ entity: "", pokemon: "" }] }],
  [
    "rock",
    {
      color: "6",
      legendaries: [
        {
          entity: "golemoverhaul:netherite_golem",
          pokemonId: "regirock",
          sound: "golemoverhaul:netherite_golem_death",
        },
      ],
    },
  ],
  [
    "electric",
    {
      color: "e",
      legendaries: [
        {
          entity: "wildernature:flamingo",
          pokemonId: "zapdos",
          sound: "wildernature:flamingo_death",
        },
      ],
    },
  ],
  ["bug", { color: "2", legendaries: [{ entity: "", pokemon: "" }] }],
  ["grass", { color: "a", legendaries: [{ entity: "", pokemon: "" }] }],
  [
    "ice",
    {
      color: "b",
      legendaries: [
        {
          entity: "wildernature:flamingo",
          pokemonId: "articuno",
          sound: "wildernature:flamingo_death",
        },
        {
          entity: "golemoverhaul:netherite_golem",
          pokemonId: "regice",
          sound: "golemoverhaul:netherite_golem_death",
        },
        {
          entity: "species:mammutilation",
          pokemonId: "chienpao",
          sound: "species:entity.mammutilation.mammutiful_howl",
        },
      ],
    },
  ],
  [
    "steel",
    {
      color: "7",
      legendaries: [
        {
          entity: "golemoverhaul:netherite_golem",
          pokemonId: "registeel",
          sound: "golemoverhaul:netherite_golem_death",
        },
      ],
    },
  ],
]);
