console.info("[SOCIETY] husbandryDefinitions.js loaded");

const truffleForage = [
  {
    item: "society:truffle",
    countMult: 1,
    chance: 0.3,
    minHearts: 4,
    hasQuality: true,
    stage: { name: "triple_truffle", locale: "Triple Truffle", newCountMult: 3 },
  },
];

const fineWoolForage = [
  {
    item: "society:fine_wool",
    countMult: 1,
    chance: 0.5,
    minHearts: 4,
    hasQuality: true,
  },
];

global.husbandryForagingDefinitions = [
  { animal: "minecraft:pig", forages: truffleForage },
  { animal: "snowpig:snow_pig", forages: truffleForage },
  {
    animal: "minecraft:mooshroom",
    forages: [
      {
        item: "society:truffle",
        countMult: 1,
        chance: 0.3,
        minHearts: 4,
        hasQuality: true,
        stage: { name: "triple_truffle", locale: "Triple Truffle", newCountMult: 3 },
      },
      {
        itemPool: [
          "tanukidecor:brown_mushroom_log_stool",
          "tanukidecor:red_mushroom_log_stool",
          "tanukidecor:brown_mushroom_stool",
          "tanukidecor:red_mushroom_stool",
        ],
        countMult: 1,
        chance: 0.04,
        minHearts: 8,
      },
    ],
  },

  { animal: "minecraft:sheep", forages: fineWoolForage },
  { animal: "meadow:wooly_sheep", forages: fineWoolForage },
  {
    animal: "snuffles:snuffle",
    forages: [
      {
        item: "society:fine_wool",
        countMult: 1,
        chance: 0.5,
        minHearts: 4,
        hasQuality: true,
      },
      {
        item: "species:frozen_hair",
        countMult: 4,
        chance: 0.2,
        minHearts: 7,
      },
    ],
  },
  {
    animal: "wildernature:minisheep",
    forages: [
      {
        item: "society:fine_wool",
        countMult: 1,
        chance: 1,
        minHearts: 6,
        hasQuality: true,
      },
      {
        item: "society:no_name_for_the_sheep",
        countMult: 1,
        chance: 0.01,
        minHearts: 1,
      },
    ],
  },
  {
    animal: "minecraft:rabbit",
    forages: [
      {
        item: "society:fine_wool",
        countMult: 1,
        chance: 0.33,
        minHearts: 3,
        hasQuality: true,
        stage: { name: "coopmaster", locale: "Coopmaster", newCountMult: 2 },
      },
      {
        item: "minecraft:rabbit_foot",
        countMult: 1,
        chance: 0.16,
        minHearts: 5,
        hasQuality: true,
        stage: { name: "coopmaster", locale: "Coopmaster", newCountMult: 2 },
      },
      {
        item: "wildernature:bunny_stalker_banner",
        countMult: 1,
        chance: 0.01,
        minHearts: 10,
      },
    ],
  },
  {
    animal: "buzzier_bees:moobloom",
    forages: [
      {
        item: "betterarcheology:growth_totem",
        countMult: 1,
        chance: 0.05,
        minHearts: 10,
      },
    ],
  },
  {
    animal: "autumnity:snail",
    forages: [
      {
        item: "autumnity:snail_shell_piece",
        countMult: 2,
        chance: 1,
        minHearts: 5,
      },
    ],
  },
  {
    animal: "minecraft:sniffer",
    forages: [
      {
        item: "betterarcheology:artifact_shards",
        countMult: 4,
        chance: 1,
        minHearts: 5,
      },
      {
        item: "minecraft:sniffer_egg",
        countMult: 1,
        chance: 0.25,
        minHearts: 5,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "species:goober",
    forages: [
      {
        item: "species:petrified_egg",
        countMult: 1,
        chance: 0.25,
        minHearts: 5,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "minecraft:panda",
    forages: [
      {
        itemPool: [
          "pamhc2trees:mangoitem",
          "atmospheric:orange",
          "pamhc2trees:peachitem",
          "pamhc2trees:pawpawitem",
          "pamhc2trees:bananaitem",
        ],
        countMult: 2,
        chance: 0.75,
        minHearts: 2,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "crittersandcompanions:red_panda",
    forages: [
      {
        item: "society:ruby",
        countMult: 2,
        chance: 0.3,
        minHearts: 3,
      },
      {
        item: "society:pristine_ruby",
        countMult: 1,
        chance: 0.1,
        minHearts: 10,
      },
    ],
  },
  {
    animal: "wildernature:squirrel",
    forages: [
      {
        item: "pamhc2trees:hazelnutitem",
        countMult: 4,
        chance: 0.25,
        minHearts: 6,
        hasQuality: true,
      },
      {
        itemPool: [
          "society:salmonberry",
          "society:boysenberry",
          "society:cranberry",
          "society:crystalberry",
        ],
        countMult: 8,
        chance: 1,
        minHearts: 2,
      },
    ],
  },
  {
    animal: "wildernature:deer",
    forages: [
      {
        itemPool: [
          "society:dried_sweet_berries",
          "society:dried_foul_berries",
          "society:dried_blueberry",
          "society:dried_strawberry",
          "society:dried_gearo_berry",
          "society:dried_glow_berries",
        ],
        countMult: 3,
        chance: 0.25,
        minHearts: 3,
      },
    ],
  },
  {
    animal: "wildernature:raccoon",
    forages: [
      {
        itemPool: [
          "furniture:trash_bag",
          "society:scavenged_food_bag",
          "vinery:rotten_cherry",
          "farmersdelight:rotten_tomato",
          "aquaculture:tin_can",
          "society:artifact_trove",
        ],
        countMult: 1,
        chance: 0.5,
        minHearts: 3,
      },
    ],
  },
  {
    animal: "minecraft:frog",
    forages: [
      {
        item: "society:sap",
        countMult: 4,
        chance: 0.3,
        minHearts: 1,
      },
      {
        item: "crabbersdelight:raw_frog_leg",
        countMult: 4,
        chance: 0.1,
        minHearts: 5,
      },
      {
        item: "society:ribbit_gadget",
        countMult: 1,
        chance: 0.05,
        minHearts: 7,
      },
      {
        itemPool: [
          "minecraft:ochre_froglight",
          "minecraft:verdant_froglight",
          "minecraft:pearlescent_froglight",
        ],
        countMult: 8,
        chance: 0.25,
        minHearts: 5,
      },
    ],
  },
  {
    animal: "atmospheric:cochineal",
    forages: [
      {
        item: "atmospheric:carmine_husk",
        countMult: 4,
        chance: 1,
        minHearts: 1,
      },
      {
        item: "pamhc2trees:dragonfruititem",
        countMult: 2,
        chance: 0.5,
        minHearts: 6,
      },
    ],
  },
  {
    animal: "minecraft:squid",
    forages: [
      {
        item: "crabbersdelight:raw_squid_tentacles",
        countMult: 1,
        chance: 0.2,
        minHearts: 5,
        hasQuality: true,
      },
      {
        item: "supplementaries:antique_ink",
        countMult: 1,
        chance: 0.1,
        minHearts: 8,
      },
    ],
  },
  {
    animal: "minecraft:glow_squid",
    forages: [
      {
        item: "crabbersdelight:raw_glow_squid_tentacles",
        countMult: 1,
        chance: 0.1,
        minHearts: 5,
        hasQuality: true,
      },
      {
        item: "society:legendary_ink",
        countMult: 1,
        chance: 0.1,
        minHearts: 8,
      },
    ],
  },
  {
    animal: "minecraft:chicken",
    forages: [
      {
        item: "society:large_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "untitledduckmod:duck",
    forages: [
      {
        item: "society:large_duck_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "untitledduckmod:goose",
    forages: [
      {
        item: "society:large_goose_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "autumnity:turkey",
    forages: [
      {
        item: "society:large_turkey_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
      {
        item: "windswept:elder_feather",
        countMult: 1,
        chance: 0.2,
        minHearts: 8,
        hasQuality: true,
      }
    ],
  },
  {
    animal: "species:wraptor",
    forages: [
      {
        item: "species:wraptor_egg",
        countMult: 2,
        chance: 1,
        minHearts: 2,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "wildernature:flamingo",
    forages: [
      {
        item: "society:flamingo_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "wildernature:penguin",
    forages: [
      {
        item: "society:penguin_egg",
        countMult: 1,
        chance: 1,
        minHearts: 2,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "farmlife:galliraptor",
    forages: [
      {
        item: "society:large_galliraptor_egg",
        countMult: 1,
        chance: 1,
        minHearts: 4,
        hasQuality: true,
      },
    ],
  },
  {
    animal: "windswept:frostbiter",
    forages: [
      {
        item: "windswept:frozen_branch",
        countMult: 1,
        chance: 0.15,
        minHearts: 5,
        hasQuality: true,
      },
      {
        item: "betterarcheology:artifact_shards",
        countMult: 8,
        chance: 1,
        minHearts: 10,
      },
    ],
  },
];

const cowMilk = { sm: "society:milk", lg: "society:large_milk" };

const sheepMilk = { sm: "society:sheep_milk", lg: "society:large_sheep_milk" };

global.husbandryMilkingDefinitions = [
  { animal: "minecraft:cow", cooldown: 1, milk: cowMilk },
  { animal: "minecraft:mooshroom", cooldown: 1, milk: cowMilk },
  {
    animal: "buzzier_bees:moobloom",
    cooldown: 1,
    milk: { sm: "society:amethyst_milk", lg: "society:large_amethyst_milk" },
  },
  { animal: "meadow:wooly_cow", warped: false, cooldown: 1, milk: cowMilk },
  {
    animal: "meadow:wooly_cow",
    warped: true,
    cooldown: 2,
    milk: { sm: "society:warped_milk", lg: "society:large_warped_milk" },
  },
  { animal: "minecraft:sheep", cooldown: 2, milk: sheepMilk },
  { animal: "meadow:wooly_sheep", cooldown: 2, milk: sheepMilk },
  { animal: "wildernature:minisheep", cooldown: 2, milk: sheepMilk },
  {
    animal: "minecraft:goat",
    cooldown: 1,
    milk: { sm: "society:goat_milk", lg: "society:large_goat_milk" },
  },
  {
    animal: "meadow:water_buffalo",
    cooldown: 1,
    milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
  },
  {
    animal: "wildernature:bison",
    cooldown: 1,
    milk: { sm: "society:buffalo_milk", lg: "society:large_buffalo_milk" },
  },
  {
    animal: "farmlife:domestic_tribull",
    cooldown: 1,
    milk: { sm: "society:tri_bull_milk", lg: "society:large_tri_bull_milk" },
  },
  {
    animal: "minecraft:squid",
    cooldown: 1,
    milk: { sm: "minecraft:ink_sac", lg: "minecraft:ink_sac" },
  },
  {
    animal: "minecraft:glow_squid",
    cooldown: 1,
    milk: { sm: "minecraft:glow_ink_sac", lg: "minecraft:glow_ink_sac" },
  },
  {
    animal: "species:mammutilation",
    cooldown: 2,
    milk: { sm: "species:ichor_bottle", lg: "species:ichor_bottle" },
  },
  {
    animal: "windswept:frostbiter",
    cooldown: 1,
    milk: cowMilk,
  },
];

global.petGifts = [
  { animal: "buzzier_bees:grizzly_bear", gifts: ["society:beemonican_seal"] },
  { animal: "legendarycreatures:nether_wisp", gifts: ["legendarycreatures:nether_wisp_spawn_egg"] },
  { animal: "legendarycreatures:ender_wisp", gifts: ["simplehats:pika_ears"] },
  { animal: "minecraft:wolf", gifts: ["simplehats:longfoxears", "betterarcheology:wolf_fossil"] },
  { animal: "minecraft:cat", gifts: ["simplehats:nekoears", "betterarcheology:ocelot_fossil"] },
  { animal: "quark:foxhound", gifts: ["simplehats:fireworks"] },
  { animal: "quark:shiba", gifts: ["simplehats:eevee_ears"] },
  { animal: "minecraft:allay", gifts: ["simplehats:chi_ears"] },
  { animal: "minecraft:horse", gifts: ["relics:horse_flute"] },
  { animal: "minecraft:polar_bear", gifts: ["simplehats:teddy_bear"] },
  { animal: "hamsters:hamster", gifts: ["society:tiny_gnome"] },
  { animal: "wildernature:hedgehog", gifts: ["simplehats:sonichood"] },
  {
    animal: "wildernature:red_wolf",
    gifts: ["betterarcheology:wolf_fossil", "wildernature:wolf_trapper_banner"],
  },
  { animal: "wildernature:owl", gifts: ["tanukidecor:owl_clock"] },
  { animal: "wildernature:dog", gifts: ["betterarcheology:sheep_fossil"] },
  {
    animal: "minecraft:axolotl",
    gifts: ["simplehats:axolotl_on_head", "beachparty:rubber_ring_axolotl"],
  },
  {
    animal: "crittersandcompanions:ferret",
    gifts: ["crittersandcompanions:jumping_spider_spawn_egg"],
  },
  { animal: "crittersandcompanions:shima_enaga", gifts: ["relics:elytra_booster"] },
];
