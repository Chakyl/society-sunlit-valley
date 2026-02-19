//priority: 100
console.info("[SOCIETY] fishPondDefinitions.js loaded");

const basicQuests = [
  {
    population: 3,
    requestedItems: [
      { item: "aquaculture:worm", count: 10 },
      { item: "farm_and_charm:flour", count: 16 },
      { item: "minecraft:poppy", count: 4 },
    ],
  },
  {
    population: 5,
    requestedItems: [
      { item: "minecraft:raw_gold", count: 4 },
      { item: "society:oak_resin", count: 1 },
      { item: "farmersdelight:tomato", count: 1 },
      { item: "society:sap", count: 4 },
    ],
  },
  {
    population: 7,
    requestedItems: [
      { item: "farm_and_charm:nettle_tea", count: 1 },
      { item: "minecraft:honey_bottle", count: 4 },
      { item: "farm_and_charm:ribwort_tea", count: 2 },
      { item: "meadow:alpine_poppy", count: 4 },
    ],
  },
];
const crabTrapQuests = [
  {
    population: 3,
    requestedItems: [
      { item: "crabbersdelight:crab_trap_bait", count: 16 },
      { item: "farmersdelight:safety_net", count: 4 },
      { item: "crabbersdelight:pearl", count: 1 },
    ],
  },
  {
    population: 5,
    requestedItems: [
      { item: "society:aquamarine", count: 4 },
      { item: "crabbersdelight:deluxe_crab_trap_bait", count: 16 },
      { item: "crabbersdelight:coral_crunch", count: 4 },
    ],
  },
  {
    population: 7,
    requestedItems: [
      { item: "crabbersdelight:pearl_block", count: 4 },
      { item: "minecraft:pearlescent_froglight", count: 8 },
      { item: "minecraft:heart_of_the_sea", count: 1 },
      { item: "aquaculture:neptunium_ingot", count: 1 },
    ],
  },
];
const crabTrapRewards = [
  {
    minPopulation: 2,
    item: "aquaculture:tin_can",
    count: 7,
    chance: 0.65,
  },
  {
    minPopulation: 4,
    item: "aquaculture:driftwood",
    count: 7,
    chance: 0.35,
  },
  {
    minPopulation: 5,
    item: "aquaculture:message_in_a_bottle",
    count: 1,
    chance: 0.05,
  },
  {
    minPopulation: 7,
    item: "society:canvas",
    count: 2,
    chance: 0.12,
  },
  {
    minPopulation: 7,
    item: "crabbersdelight:coral_fragments",
    count: 16,
    chance: 0.22,
  },
  {
    minPopulation: 8,
    item: "aquaculture:treasure_chest",
    count: 1,
    chance: 0.12,
  },
  {
    minPopulation: 9,
    item: "minecraft:nautilus_shell",
    count: 1,
    chance: 0.16,
  },
  {
    minPopulation: 9,
    item: "minecraft:heart_of_the_sea",
    count: 1,
    chance: 0.05,
  },
  {
    minPopulation: 10,
    item: "crabbersdelight:pearl_block",
    count: 1,
    chance: 0.06,
  },
];
global.fishPondDefinitions = new Map([
  [
    "aquaculture:atlantic_herring",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "crabbersdelight:jar_of_pickles", count: 1 },
            { item: "minecraft:sea_pickle", count: 16 },
            { item: "minecraft:seagrass", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vintagedelight:pickle", count: 4 },
            { item: "minecraft:sea_lantern", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "aquaculture:neptunium_nugget", count: 3 },
            { item: "minecraft:heart_of_the_sea", count: 4 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:prismarine_shard",
          count: 64,
          chance: 0.69,
        },
        {
          minPopulation: 6,
          item: "minecraft:prismarine_crystals",
          count: 32,
          chance: 0.41,
        },
        {
          minPopulation: 8,
          item: "society:aquamagical_dust",
          count: 1,
          chance: 0.18,
        },
      ],
    },
  ],
  [
    "minecraft:pufferfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:rotten_flesh", count: 16 },
            { item: "minecraft:poisonous_potato", count: 4 },
            { item: "farmersdelight:rotten_tomato", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vinery:rotten_cherry", count: 4 },
            { item: "herbalbrews:yerba_mate_tea", count: 1 },
            { item: "autumnity:foul_berries", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "veggiesdelight:stuffed_bellpeppers_block", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:spider_eye",
          count: 8,
          chance: 0.6,
        },
        {
          minPopulation: 6,
          item: "minecraft:slime_ball",
          count: 16,
          chance: 0.43,
        },
        {
          minPopulation: 7,
          item: "society:jamborite",
          count: 2,
          chance: 0.24,
        },
        {
          minPopulation: 8,
          item: "moreminecarts:glass_spines",
          count: 8,
          chance: 0.43,
        },
        {
          minPopulation: 9,
          item: "relics:spore_sack",
          count: 1,
          chance: 0.06,
        },
      ],
    },
  ],
  ["aquaculture:minnow", { quests: basicQuests }],
  [
    "aquaculture:bluegill",
    {
      quests: basicQuests,
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:kelp",
          count: 64,
          chance: 0.64,
        },
        {
          minPopulation: 10,
          item: "society:husbandry_hourly",
          count: 1,
          chance: 0.15,
        },
      ],
    },
  ],
  [
    "aquaculture:perch",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:diorite", count: 32 },
            { item: "minecraft:pumpkin", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:clay", count: 8 },
            { item: "supplementaries:soap_block", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "simplehats:clockface", count: 1 },
            { item: "society:broken_clock", count: 1 },
            { item: "supplementaries:hourglass", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:diorite",
          count: 64,
          chance: 0.89,
        },
        {
          minPopulation: 6,
          item: "society:marble",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "furniture:oak_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:spruce_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:birch_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:jungle_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:acacia_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:dark_oak_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:mangrove_clock",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:cherry_clock",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "minecraft:salmon",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "meadow:pine_log", count: 64 },
            { item: "society:salmonberry", count: 16 },
            { item: "meadow:alpine_poppy", count: 3 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:oak_log", count: 64 },
            { item: "society:tapper", count: 8 },
            { item: "minecraft:dark_oak_log", count: 64 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:mossberry", count: 16 },
            { item: "society:mossberry_preserves", count: 4 },
            { item: "society:dried_mossberry", count: 2 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "meadow:pine_log",
          count: 16,
          chance: 0.34,
        },
        {
          minPopulation: 6,
          item: "windswept:pinecone",
          count: 32,
          chance: 0.31,
        },
        {
          minPopulation: 8,
          item: "society:mossberry",
          count: 3,
          chance: 0.82,
        },
      ],
    },
  ],
  ["aquaculture:blackfish", { quests: basicQuests }],
  [
    "aquaculture:brown_trout",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:raw_iron", count: 16 },
            { item: "minecraft:iron_block", count: 8 },
            { item: "society:earth_crystal", count: 2 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "pamhc2trees:peachitem", count: 3 },
            { item: "bakery:linzer_tart", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "brewery:beer_barley", count: 16 },
            { item: "vintagedelight:glow_berry_mason_jar", count: 3 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:raw_iron",
          count: 32,
          chance: 0.54,
        },
        {
          minPopulation: 6,
          item: "society:earth_crystal",
          count: 4,
          chance: 0.42,
        },
        {
          minPopulation: 8,
          item: "meadow:alpine_salt",
          count: 32,
          chance: 0.32,
        },
      ],
    },
  ],
  [
    "aquaculture:carp",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:packed_mud", count: 32 },
            { item: "minecraft:mud", count: 48 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "veggiesdelight:cauliflower", count: 16 },
            { item: "society:earth_crystal", count: 2 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "vintagedelight:pad_thai", count: 16 },
            { item: "vintagedelight:nut_mash_mason_jar", count: 5 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:mudstone",
          count: 4,
          chance: 0.22,
        },
        {
          minPopulation: 6,
          item: "society:earth_crystal",
          count: 2,
          chance: 0.42,
        },
        {
          minPopulation: 8,
          item: "society:stone_hand",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "aquaculture:piranha",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:ginger_preserves", count: 2 },
            { item: "snowyspirit:gingerbread_cookie", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "pamhc2trees:peachitem", count: 3 },
            { item: "bakery:linzer_tart", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:rotten_flesh", count: 64 },
            { item: "crabbersdelight:raw_frog_leg", count: 3 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 6,
          item: "society:frozen_tear",
          count: 6,
          chance: 0.4,
        },
        {
          minPopulation: 8,
          item: "society:geminite",
          count: 1,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "aquaculture:smallmouth_bass",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "minecraft:experience_bottle", count: 16 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:zombie_head", count: 1 },
            { item: "minecraft:bone", count: 16 },
            { item: "vinery:bottle_mojang_noir", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            {
              item: "create_enchantment_industry:hyper_experience_bottle",
              count: 4,
            },
            { item: "relics:relic_experience_bottle", count: 4 },
            { item: "vinery:bottle_mojang_noir", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "create:experience_nugget",
          count: 64,
          chance: 0.64,
        },
        {
          minPopulation: 6,
          item: "create:experience_block",
          count: 8,
          chance: 0.32,
        },
        {
          minPopulation: 8,
          item: "paraglider:spirit_orb",
          count: 2,
          chance: 0.12,
        },
      ],
    },
  ],
  [
    "minecraft:cod",
    {
      quests: basicQuests,
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:seagrass",
          count: 64,
          chance: 0.64,
        },
        {
          minPopulation: 6,
          item: "minecraft:kelp",
          count: 32,
          chance: 0.32,
        },
        {
          minPopulation: 10,
          item: "wildernature:cod_catcher_banner",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
  [
    "aquaculture:pollock",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:calcite", count: 16 },
            { item: "farm_and_charm:onion", count: 16 },
            { item: "beachparty:coconut_milkshake", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:calcite_gem", count: 1 },
            { item: "farm_and_charm:onion", count: 64 },
            { item: "beachparty:coconut_milkshake", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:aged_amethyst_cheese_block", count: 1 },
            { item: "society:large_amethyst_milk", count: 4 },
            { item: "meadow:piece_of_amethyst_cheese", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:calcite",
          count: 64,
          chance: 0.59,
        },
        {
          minPopulation: 6,
          item: "society:calcite_gem",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "furniture:oak_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:spruce_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:birch_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:jungle_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:acacia_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:dark_oak_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:mangrove_mirror",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "furniture:cherry_mirror",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "aquaculture:jellyfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:slime_ball", count: 16 },
            { item: "quark:slime_in_a_bucket", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "bakery:strawberry_jam", count: 8 },
            { item: "bakery:strawberry_cake", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "betterarcheology:unidentified_artifact", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:slime_ball",
          count: 24,
          chance: 0.33,
        },
        {
          minPopulation: 6,
          item: "society:petrified_slime",
          count: 3,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:ocean_jelly",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 8,
          item: "relics:jellyfish_necklace",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "aquaculture:rainbow_trout",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "automobility:dash_panel", count: 64 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "snowyspirit:glow_lights_prismatic", count: 64 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:prismatic_shard", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 6,
          item: "automobility:dash_panel",
          count: 16,
          chance: 0.09,
        },
        {
          minPopulation: 8,
          item: "society:prismatic_shard",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
  [
    "aquaculture:pink_salmon",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "supplementaries:candle_holder_pink", count: 4 },
            { item: "minecraft:pink_dye", count: 16 },
            { item: "buzzier_bees:pink_clover", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:pink_petals", count: 4 },
            { item: "minecraft:pink_tulip", count: 1 },
            { item: "society:fluorapatite", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "refurbished_furniture:pink_grill", count: 1 },
            { item: "etcetera:pink_sweater", count: 1 },
            { item: "vintagedelight:salt_lamp_pink", count: 4 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 2,
          item: "minecraft:pink_dye",
          count: 64,
          chance: 0.64,
        },
        {
          minPopulation: 3,
          item: "minecraft:cherry_log",
          count: 64,
          chance: 0.44,
        },
        {
          minPopulation: 4,
          item: "society:fluorapatite",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 6,
          item: "atmospheric:passion_fruit",
          count: 5,
          chance: 0.32,
        },
        {
          minPopulation: 8,
          item: "society:star_shards",
          count: 1,
          chance: 0.12,
        },
      ],
    },
  ],
  [
    "minecraft:tropical_fish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:tube_coral_block", count: 16 },
            { item: "minecraft:brain_coral_block", count: 16 },
            { item: "minecraft:bubble_coral_block", count: 16 },
            { item: "minecraft:fire_coral_block", count: 16 },
            { item: "minecraft:horn_coral_block", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "beachparty:palm_log", count: 64 },
            { item: "beachparty:seashell", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "beachparty:icecream_coconut", count: 8 },
            { item: "beachparty:coconut_cocktail", count: 8 },
            { item: "beachparty:coconut_milkshake", count: 8 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "crabbersdelight:coral_fragments",
          count: 32,
          chance: 0.48,
        },
        {
          minPopulation: 6,
          item: "beachparty:palm_log",
          count: 32,
          chance: 0.42,
        },
        {
          minPopulation: 8,
          item: "beachparty:coconut",
          count: 6,
          chance: 0.82,
        },
      ],
    },
  ],
  [
    "aquaculture:red_grouper",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "supplementaries:candle_holder_red", count: 4 },
            { item: "minecraft:red_dye", count: 16 },
            { item: "minecraft:rose_bush", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "create:rose_quartz", count: 4 },
            { item: "minecraft:red_tulip", count: 1 },
            { item: "vinery:red_wine", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "refurbished_furniture:red_grill", count: 1 },
            { item: "numismatics:red_card", count: 1 },
            { item: "tanukidecor:red_rocket_lamp", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:redstone",
          count: 64,
          chance: 0.64,
        },
        {
          minPopulation: 6,
          item: "vinery:red_wine",
          count: 4,
          chance: 0.21,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_wall_tarp",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_stall_tarp",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:wide_red_streamer",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:narrow_red_streamer",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_science_pod",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_rocket_lamp",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_clock",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "aquaculture:gar",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "society:ancient_fruit", count: 3 }],
        },
        {
          population: 5,
          requestedItems: [{ item: "society:ancient_fruit", count: 6 }],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:ancient_fruit", count: 12 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 8,
          item: "society:ancient_fruit_seed",
          count: 1,
          chance: 0.3,
        },
        {
          minPopulation: 8,
          item: "furniture:cash_register",
          count: 1,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "aquaculture:muskellunge",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:chorus_flower", count: 1 },
            { item: "minecraft:chorus_fruit", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:forks_of_blue", count: 1 },
            { item: "society:oak_resin", count: 3 },
            { item: "crabbersdelight:coral_crunch", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:nutty_basil", count: 1 },
            { item: "minecraft:emerald", count: 16 },
            { item: "minecraft:carrot", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "moreminecarts:levitation_powder",
          count: 4,
          chance: 0.64,
        },
        {
          minPopulation: 6,
          item: "society:treated_log",
          count: 4,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "moreminecarts:hard_light_lens",
          count: 4,
          chance: 0.32,
        },
      ],
    },
  ],
  [
    "aquaculture:synodontis",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:gold_ingot", count: 32 },
            { item: "minecraft:raw_gold", count: 16 },
            { item: "numismatics:crown", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vinery:glowing_wine", count: 1 },
            { item: "farm_and_charm:corn", count: 64 },
            { item: "atmospheric:orange", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "create:precision_mechanism", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:raw_gold",
          count: 32,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "society:pyrite",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "create:precision_mechanism",
          count: 1,
          chance: 0.18,
        },
      ],
    },
  ],
  [
    "aquaculture:tambaqui",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:wither_skeleton_skull", count: 1 },
            { item: "minecraft:skeleton_skull", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:prismatic_shard", count: 1 },
            { item: "minecraft:netherite_scrap", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:omni_geode", count: 32 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:dripstone_block",
          count: 64,
          chance: 0.69,
        },
        {
          minPopulation: 6,
          item: "minecraft:pointed_dripstone",
          count: 16,
          chance: 0.31,
        },
        {
          minPopulation: 8,
          item: "society:omni_geode",
          count: 4,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "aquaculture:atlantic_cod",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "create:andesite_alloy", count: 16 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:paper", count: 36 },
            { item: "minecraft:ink_sac", count: 16 },
            { item: "quark:paper_lantern_sakura", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:aged_jo_special_mixture", count: 1 },
            { item: "society:aged_beer_barley", count: 1 },
            { item: "society:aged_sheep_cheese_block", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:andesite",
          count: 64,
          chance: 0.69,
        },
        {
          minPopulation: 6,
          item: "create:andesite_alloy",
          count: 16,
          chance: 0.28,
        },
        {
          minPopulation: 8,
          item: "candlelight:typewriter_iron",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "candlelight:typewriter_copper",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "aquaculture:boulti",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "create:raw_zinc", count: 16 },
            { item: "create:zinc_ingot", count: 48 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            {
              item: "create_mechanical_extruder:mechanical_extruder",
              count: 1,
            },
            { item: "create:brass_ingot", count: 16 },
            { item: "snowyspirit:ginger", count: 30 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:furniture_box", count: 1 },
            { item: "society:battery", count: 4 },
            { item: "society:canvas", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:granite",
          count: 64,
          chance: 0.69,
        },
        {
          minPopulation: 6,
          item: "create:brass_ingot",
          count: 2,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "furniture:display",
          count: 1,
          chance: 0.16,
        },
      ],
    },
  ],
  [
    "aquaculture:leech",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:beef", count: 8 },
            { item: "minecraft:porkchop", count: 8 },
            { item: "minecraft:mutton", count: 8 },
            { item: "minecraft:chicken", count: 8 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:rabbit", count: 4 },
            { item: "untitledduckmod:raw_duck", count: 4 },
            { item: "untitledduckmod:raw_goose", count: 2 },
            { item: "autumnity:turkey", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:truffle", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "farm_and_charm:minced_beef",
          count: 16,
          chance: 0.45,
        },
        {
          minPopulation: 6,
          item: "society:living_flesh",
          count: 1,
          chance: 0.16,
        },
        {
          minPopulation: 8,
          item: "society:helvite",
          count: 2,
          chance: 0.12,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:neon_diamond_sign",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:neon_heart_sign",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:neon_club_sign",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:neon_spade_sign",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "aquaculture:catfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:aquamarine", count: 1 },
            { item: "minecraft:cornflower", count: 16 },
            { item: "vintagedelight:salt_lamp_light_blue", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [{ item: "farm_and_charm:cat_food", count: 24 }],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:lapis_lazuli", count: 48 },
            { item: "minecraft:heart_of_the_sea", count: 1 },
            { item: "minecraft:enchanting_table", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:aquamarine",
          count: 4,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "society:kyanite",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "minecraft:lapis_lazuli",
          count: 32,
          chance: 0.32,
        },
      ],
    },
  ],
  [
    "aquaculture:tuna",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "create:raw_zinc", count: 48 },
            { item: "society:truffle_oil", count: 1 },
            { item: "minecraft:diamond", count: 8 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:diamond", count: 32 },
            { item: "create:zinc_block", count: 48 },
            { item: "society:truffle_tea", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "quark:diamond_heart", count: 1 },
            { item: "aquaculture:neptunium_ingot", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "create:raw_zinc",
          count: 48,
          chance: 0.44,
        },
        {
          minPopulation: 8,
          item: "minecraft:diamond",
          count: 8,
          chance: 0.23,
        },
      ],
    },
  ],
  [
    "aquaculture:bayad",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:furniture_box", count: 1 },
            { item: "society:battery", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:furniture_box", count: 4 },
            { item: "society:mocha", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:dirty_chai", count: 8 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 6,
          item: "society:furniture_box",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:relic_trove",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "society:tiny_gnome",
          count: 1,
          chance: 0.02,
        },
      ],
    },
  ],
  [
    "aquaculture:arapaima",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:emerald", count: 4 },
            { item: "brewery:hop_trellis_seed", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vintagedelight:peanut", count: 32 },
            { item: "pamhc2trees:hazelnutitem", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "bakery:hazelnut_ella", count: 1 },
            { item: "society:jade", count: 1 },
            { item: "vintagedelight:magic_peanut", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:emerald",
          count: 32,
          chance: 0.34,
        },
        {
          minPopulation: 6,
          item: "society:malachite",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:jade",
          count: 1,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "aquaculture:atlantic_halibut",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:raw_copper", count: 16 },
            { item: "minecraft:copper_block", count: 16 },
            { item: "minecraft:melon_slice", count: 32 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:earth_crystal", count: 4 },
            { item: "meadow:piece_of_grain_cheese", count: 16 },
            { item: "vinery:cherry", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:aged_cherry_wine", count: 1 },
            { item: "smallships:cherry_brigg", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:raw_copper",
          count: 64,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "society:geode",
          count: 8,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "minecraft:redstone",
          count: 32,
          chance: 0.32,
        },
      ],
    },
  ],
  [
    "aquaculture:starshell_turtle",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "pamhc2trees:starfruititem", count: 32 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:star_shards", count: 4 },
            { item: "minecraft:nether_star", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_dewy_star", count: 2 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:turtle_egg",
          count: 4,
          chance: 0.33,
        },
        {
          minPopulation: 4,
          item: "minecraft:scute",
          count: 1,
          chance: 0.14,
        },
        {
          minPopulation: 6,
          item: "society:star_shards",
          count: 2,
          chance: 0.24,
        },
        {
          minPopulation: 8,
          item: "pamhc2trees:starfruititem",
          count: 4,
          chance: 0.39,
        },
      ],
    },
  ],
  [
    "aquaculture:brown_shrooma",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:mycelium", count: 16 },
            { item: "minecraft:mushroom_stem", count: 32 },
            { item: "minecraft:brown_mushroom_block", count: 32 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:brown_mushroom", count: 32 },
            { item: "farmersdelight:rich_soil", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:cordycep", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:brown_mushroom",
          count: 16,
          chance: 0.35,
        },
        {
          minPopulation: 6,
          item: "farmersdelight:mushroom_rice",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:brown_mushroom_stool",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:brown_mushroom_lamp",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:brown_mushroom_bed",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:brown_mushroom_table",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:brown_mushroom_log_stool",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "aquaculture:red_shrooma",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:mycelium", count: 16 },
            { item: "minecraft:mushroom_stem", count: 32 },
            { item: "minecraft:red_mushroom_block", count: 32 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:red_mushroom", count: 32 },
            { item: "farmersdelight:rich_soil", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:cordycep", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:red_mushroom",
          count: 16,
          chance: 0.35,
        },
        {
          minPopulation: 6,
          item: "candlelight:mushroom_soup",
          count: 1,
          chance: 0.16,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_mushroom_stool",
          count: 1,
          chance: 0.03,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_mushroom_lamp",
          count: 1,
          chance: 0.3,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_mushroom_bed",
          count: 1,
          chance: 0.03,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_mushroom_table",
          count: 1,
          chance: 0.03,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_mushroom_log_stool",
          count: 1,
          chance: 0.03,
        },
      ],
    },
  ],
  [
    "aquaculture:arrau_turtle",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:bowl_of_soul", count: 4 },
            { item: "society:latte", count: 4 },
            { item: "autumnity:snail_shell_piece", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "autumnity:snail_shell_block", count: 4 },
            { item: "autumnity:snail_goo", count: 3 },
            { item: "society:aquamarine", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "herbalbrews:black_tea", count: 16 },
            { item: "herbalbrews:chai_tea", count: 4 },
            { item: "herbalbrews:hibiscus_tea", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:turtle_egg",
          count: 4,
          chance: 0.33,
        },
        {
          minPopulation: 4,
          item: "autumnity:snail_shell_piece",
          count: 12,
          chance: 0.43,
        },
        {
          minPopulation: 6,
          item: "society:aquamarine",
          count: 2,
          chance: 0.32,
        },
        {
          minPopulation: 8,
          item: "autumnity:snail_goo",
          count: 8,
          chance: 0.59,
        },
      ],
    },
  ],
  [
    "aquaculture:capitaine",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "crabbersdelight:crab_trap_bait", count: 16 },
            { item: "twigs:rhyolite", count: 16 },
            { item: "minecraft:torchflower", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "twigs:tangerine_seashell", count: 2 },
            { item: "minecraft:cactus", count: 16 },
            { item: "twigs:pebble", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:prize_ticket", count: 4 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:earth_crystal",
          count: 2,
          chance: 0.78,
        },
        {
          minPopulation: 6,
          item: "society:geode",
          count: 4,
          chance: 0.33,
        },
        {
          minPopulation: 8,
          item: "society:prize_ticket",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "aquaculture:box_turtle",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "candlelight:jewelry_box", count: 1 },
            { item: "bakery:chocolate_box", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [{ item: "aquaculture:tackle_box", count: 1 }],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:furniture_box", count: 4 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:turtle_egg",
          count: 4,
          chance: 0.33,
        },
        {
          minPopulation: 4,
          item: "minecraft:scute",
          count: 1,
          chance: 0.16,
        },
        {
          minPopulation: 6,
          item: "society:slate",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:furniture_box",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "aquaculture:pacific_halibut",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "supplementaries:candy", count: 4 },
            { item: "pamhc2trees:lycheeitem", count: 16 },
            { item: "vinery:bottle_mojang_noir", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:sandstone_slate", count: 1 },
            { item: "supplementaries:candy", count: 16 },
            { item: "pamhc2trees:plumitem", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:battery", count: 4 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:granite_slate",
          count: 1,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "society:sandstone_slate",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:ocean_stone",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 9,
          item: "society:battery",
          count: 1,
          chance: 0.33,
        },
      ],
    },
  ],
  [
    "aquaculture:goldfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "minecraft:gold_block", count: 32 }],
        },
        {
          population: 5,
          requestedItems: [{ item: "minecraft:gilded_blackstone", count: 16 }],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:golden_mayonnaise", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:raw_gold",
          count: 8,
          chance: 0.2,
        },
        {
          minPopulation: 6,
          item: "numismatics:crown",
          count: 1,
          chance: 0.1,
        },
        {
          minPopulation: 9,
          item: "vintagedelight:golden_egg",
          count: 1,
          chance: 0.02,
        },
      ],
    },
  ],
  [
    "crabbersdelight:shrimp",
    { quests: crabTrapQuests, additionalRewards: crabTrapRewards },
  ],
  [
    "crabbersdelight:clawster",
    { quests: crabTrapQuests, additionalRewards: crabTrapRewards },
  ],
  [
    "crabbersdelight:crab",
    { quests: crabTrapQuests, additionalRewards: crabTrapRewards },
  ],
  [
    "crabbersdelight:clam",
    { quests: crabTrapQuests, additionalRewards: crabTrapRewards },
  ],
  [
    "netherdepthsupgrade:searing_cod",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:quartz", count: 32 },
            { item: "etcetera:raw_bismuth", count: 8 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "farm_and_charm:roaster", count: 4 },
            { item: "minecraft:furnace", count: 32 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:cod", count: 32 },
            { item: "society:furniture_box", count: 4 },
            { item: "minecraft:fire_coral", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:coal",
          count: 32,
          chance: 0.34,
        },
        {
          minPopulation: 7,
          item: "society:baryte",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_wardrobe",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_table",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_bookcase",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_dresser",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_vanity",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_armchair",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_screen",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_lamp",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_bed",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:cabana_chair",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:blazefish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:torchflower", count: 4 },
            { item: "atmospheric:firethorn", count: 1 },
            { item: "meadow:fire_lily", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "supplementaries:fire_pit", count: 8 },
            { item: "minecraft:wither_skeleton_skull", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "simplehats:fakefire", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:blaze_powder",
          count: 8,
          chance: 0.42,
        },
        {
          minPopulation: 4,
          item: "minecraft:blaze_rod",
          count: 4,
          chance: 0.32,
        },
        { minPopulation: 6, item: "society:jasper", count: 1, chance: 0.12 },
        {
          minPopulation: 8,
          item: "create:blaze_cake",
          count: 4,
          chance: 0.29,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:lava_pufferfish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:quartz", count: 64 },
            { item: "create:rose_quartz", count: 16 },
            { item: "society:fire_quartz", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "nethervinery:crimson_grapejuice", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:aged_bolvar_wine", count: 3 },
            { item: "society:aged_good_catawba", count: 3 },
            { item: "society:aged_lava_fizz", count: 3 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:quartz",
          count: 64,
          chance: 0.48,
        },
        {
          minPopulation: 6,
          item: "society:fire_quartz",
          count: 4,
          chance: 0.44,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_lamp",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_seat",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_bed",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_sofa",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_stool",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_counter",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:obsidianfish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:obsidian", count: 16 },
            { item: "minecraft:crying_obsidian", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [{ item: "society:nether_raisins", count: 16 }],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_lava_fizz", count: 2 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:obsidian",
          count: 16,
          chance: 0.48,
        },
        {
          minPopulation: 6,
          item: "minecraft:crying_obsidian",
          count: 4,
          chance: 0.34,
        },
        {
          minPopulation: 8,
          item: "society:pure_obsidian",
          count: 1,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:bonefish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:large_milk", count: 4 },
            { item: "meadow:cheese_block", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:skeleton_skull", count: 1 },
            { item: "minecraft:bone_block", count: 32 },
            { item: "vintagedelight:organic_mash", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:nether_jelly", count: 4 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:bone_meal",
          count: 32,
          chance: 0.53,
        },
        {
          minPopulation: 4,
          item: "minecraft:bone",
          count: 32,
          chance: 0.34,
        },
        {
          minPopulation: 7,
          item: "society:limestone_pebble",
          count: 1,
          chance: 0.24,
        },
        {
          minPopulation: 7,
          item: "society:enriched_bone_meal",
          count: 8,
          chance: 0.32,
        },
        {
          minPopulation: 9,
          item: "dew_drop_farmland_growth:hydrating_fertilizer",
          count: 12,
          chance: 0.4,
        },
        {
          minPopulation: 9,
          item: "dew_drop_farmland_growth:bountiful_fertilizer",
          count: 8,
          chance: 0.35,
        },
        {
          minPopulation: 9,
          item: "dew_drop_farmland_growth:weak_fertilizer",
          count: 4,
          chance: 0.2,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:wither_bonefish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "species:wraptor_egg", count: 1 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "pamhc2trees:pawpawitem", count: 4 },
            { item: "society:energy_drink", count: 1 },
            { item: "nethervinery:nether_fizz", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_dark_brew", count: 8 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:wither_rose",
          count: 6,
          chance: 0.2,
        },
        {
          minPopulation: 5,
          item: "minecraft:wither_skeleton_skull",
          count: 1,
          chance: 0.36,
        },
        { minPopulation: 6, item: "society:neptunite", count: 1, chance: 0.22 },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_clock",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_chest",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_table",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_mini_drawer",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_closet",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:gorgeous_desk",
          count: 1,
          chance: 0.01,
        },
        {
          minPopulation: 9,
          item: "minecraft:nether_star",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:magmacubefish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "society:magma_geode", count: 8 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:ochre_froglight", count: 8 },
            { item: "minecraft:verdant_froglight", count: 8 },
            { item: "minecraft:pearlescent_froglight", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:nether_jelly", count: 2 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 3,
          item: "minecraft:magma_cream",
          count: 48,
          chance: 0.43,
        },
        {
          minPopulation: 5,
          item: "minecraft:magma_block",
          count: 16,
          chance: 0.23,
        },
        {
          minPopulation: 5,
          item: "society:magma_geode",
          count: 8,
          chance: 0.32,
        },
        {
          minPopulation: 7,
          item: "society:basalt_shard",
          count: 1,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:nether_jelly",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:glowdine",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "bakery:glowberry_jam", count: 7 },
            { item: "bakery:glowberry_tart", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vinery:glowing_wine", count: 1 },
            { item: "crabbersdelight:raw_glow_squid_tentacles", count: 1 },
            { item: "vintagedelight:glow_berry_mason_jar", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "farmersdelight:glow_berry_custard", count: 8 },
            { item: "society:aged_glowing_wine", count: 2 },
            { item: "atmospheric:orange", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 3,
          item: "minecraft:glowstone_dust",
          count: 32,
          chance: 0.27,
        },
        { minPopulation: 5, item: "society:topaz", count: 1, chance: 0.22 },
        {
          minPopulation: 7,
          item: "minecraft:glowstone",
          count: 16,
          chance: 0.22,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:blue_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:green_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:pink_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:purple_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:red_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:turquoise_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
        {
          minPopulation: 9,
          item: "tanukidecor:yellow_rocket_lamp",
          count: 1,
          chance: 0.02,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:soulsucker",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "autumnity:soul_jack_o_lantern", count: 8 },
            { item: "farm_and_charm:corn_grits", count: 16 },
            { item: "minecraft:wither_skeleton_skull", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "buzzier_bees:soul_candle", count: 16 },
            { item: "autumnity:soul_jack_o_lantern", count: 8 },
            { item: "society:fire_quartz", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_lava_fizz", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:soul_sand",
          count: 32,
          chance: 0.45,
        },
        {
          minPopulation: 6,
          item: "society:fire_quartz",
          count: 4,
          chance: 0.24,
        },
        {
          minPopulation: 8,
          item: "netherdepthsupgrade:soul_sucker_leather",
          count: 1,
          chance: 0.18,
        },
        {
          minPopulation: 8,
          item: "species:broken_links",
          count: 12,
          chance: 0.32,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:fortress_grouper",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:nether_bricks", count: 16 },
            { item: "minecraft:wither_skeleton_skull", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "netherdepthsupgrade:lava_sponge", count: 1 },
            { item: "society:nether_jelly", count: 4 },
            { item: "society:magma_geode", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:nether_star", count: 1 },
            { item: "minecraft:netherite_ingot", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "netherdepthsupgrade:fortress_grouper_plate",
          count: 8,
          chance: 0.32,
        },
        { minPopulation: 6, item: "society:ruby", count: 1, chance: 0.22 },
        {
          minPopulation: 8,
          item: "minecraft:netherite_scrap",
          count: 1,
          chance: 0.09,
        },
      ],
    },
  ],
  [
    "netherdepthsupgrade:eyeball_fish",
    {
      lava: true,
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:spider_eye", count: 8 },
            { item: "beachparty:sunglasses", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:ender_eye", count: 8 },
            { item: "simplehats:cyclopseye", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "botania:ender_eye_block", count: 8 },
            { item: "minecraft:eye_armor_trim_smithing_template", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "netherdepthsupgrade:eyeball",
          count: 4,
          chance: 0.27,
        },
        {
          minPopulation: 6,
          item: "etcetera:raw_bismuth",
          count: 16,
          chance: 0.27,
        },
        { minPopulation: 6, item: "society:tigerseye", count: 1, chance: 0.22 },
        {
          minPopulation: 7,
          item: "minecraft:ender_eye",
          count: 3,
          chance: 0.26,
        },
        {
          minPopulation: 8,
          item: "society:mini_oni_eye",
          count: 1,
          chance: 0.18,
        },
      ],
    },
  ],
  [
    "society:neptuna",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:aquamagical_dust", count: 1 },
            { item: "aquaculture:neptunium_ingot", count: 2 },
            { item: "aquaculture:neptunes_bounty", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "aquaculture:neptunium_sword", count: 1 },
            { item: "aquaculture:neptunium_chestplate", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:heart_of_neptunium", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "aquaculture:neptunium_nugget",
          count: 3,
          chance: 0.15,
        },
        {
          minPopulation: 6,
          item: "aquaculture:neptunium_ingot",
          count: 1,
          chance: 0.08,
        },
        {
          minPopulation: 8,
          item: "society:aquamagical_dust",
          count: 1,
          chance: 0.13,
        },
        {
          minPopulation: 10,
          item: "society:pristine_neptunite",
          count: 4,
          chance: 0.12,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_sneep_snorp",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:lapis_lazuli", count: 48 },
            { item: "herbalbrews:hibiscus_tea", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [{ item: "vinery:bottle_mojang_noir", count: 1 }],
        },
        {
          population: 7,
          requestedItems: [
            { item: "crabbersdelight:pearl", count: 16 },
            { item: "crabbersdelight:coral_fragments", count: 64 },
            { item: "aquaculture:neptunium_ingot", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:lapis_lazuli",
          count: 16,
          chance: 0.33,
        },
        {
          minPopulation: 6,
          item: "society:aerinite",
          count: 3,
          chance: 0.22,
        },
        {
          minPopulation: 10,
          item: "society:wet_weekly",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_beaked_herring",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "farmersdelight:red_mushroom_colony", count: 4 },
            { item: "meadow:alpine_salt", count: 32 },
            { item: "vintagedelight:salt_lamp_light_blue", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "brewery:beer_oat", count: 8 },
            { item: "brewery:whiskey_carrasconlabel", count: 4 },
            { item: "brewery:whiskey_ak", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:geode", count: 32 },
            { item: "society:frozen_geode", count: 16 },
            { item: "society:magma_geode", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "meadow:cobbled_limestone",
          count: 64,
          chance: 0.69,
        },
        {
          minPopulation: 6,
          item: "create:raw_zinc",
          count: 32,
          chance: 0.22,
        },
        {
          minPopulation: 10,
          item: "society:mining_monthly",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_picklefish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:sea_pickle", count: 32 },
            { item: "crabbersdelight:sea_pickle_juice", count: 8 },
            { item: "vintagedelight:pickled_egg", count: 10 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "vintagedelight:pickled_pitcher_pod", count: 4 },
            { item: "vintagedelight:pickle_soup", count: 4 },
            { item: "vintagedelight:pickled_beetroot", count: 64 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_century_egg", count: 8 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "vintagedelight:pickle",
          count: 8,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "vintagedelight:cucumber",
          count: 8,
          chance: 0.09,
        },
        {
          minPopulation: 8,
          item: "society:tanuki_leaf",
          count: 1,
          chance: 0.28,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_forkfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "farmersdelight:iron_knife", count: 1 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:raw_iron", count: 48 },
            { item: "farm_and_charm:pitchfork", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:sponge", count: 4 },
            { item: "minecraft:heart_of_the_sea", count: 1 },
            { item: "minecraft:sea_lantern", count: 32 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "quark:iron_rod",
          count: 8,
          chance: 0.23,
        },
        {
          minPopulation: 7,
          item: "minecraft:trident",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 8,
          item: "unusualfishmod:prismarine_spear",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_snowflake",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "snowpig:frozen_porkchop", count: 8 },
            { item: "society:brown_sheet", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "snuffles:snuffle_fluff", count: 4 },
            { item: "species:frozen_meat", count: 4 },
            { item: "herbalbrews:cinnamon_coffee", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:frozen_geode", count: 16 },
            { item: "extractinator:slush", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:ice",
          count: 16,
          chance: 0.64,
        },
        {
          minPopulation: 7,
          item: "society:frozen_tear",
          count: 4,
          chance: 0.29,
        },
        {
          minPopulation: 8,
          item: "society:frozen_geode",
          count: 8,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_sailor_barb",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:canvas", count: 2 },
            { item: "smallships:sail", count: 1 },
            { item: "smallships:cannon", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:canvas", count: 8 },
            { item: "smallships:jungle_cog", count: 1 },
            { item: "smallships:cannon_ball", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:oak_resin", count: 32 },
            { item: "smallships:mangrove_brigg", count: 1 },
            { item: "railways:riveted_locometal", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "smallships:sail",
          count: 1,
          chance: 0.21,
        },
        {
          minPopulation: 6,
          item: "society:canvas",
          count: 4,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "species:coil",
          count: 4,
          chance: 0.14,
        },
        {
          minPopulation: 8,
          item: "railways:riveted_locometal",
          count: 64,
          chance: 0.24,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_aero_mono",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:tuff", count: 64 },
            { item: "quark:bottled_cloud", count: 1 },
            { item: "moreminecarts:levitation_powder", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "trials:breeze_rod", count: 4 },
            { item: "create:asurine", count: 64 },
            { item: "trials:trial_key_ominous", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "trials:heavy_core", count: 1 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:tuff",
          count: 64,
          chance: 0.59,
        },
        {
          minPopulation: 6,
          item: "trials:breeze_rod",
          count: 8,
          chance: 0.22,
        },
        {
          minPopulation: 4,
          item: "create:asurine",
          count: 48,
          chance: 0.49,
        },
        {
          minPopulation: 8,
          item: "chimes:glass_bells",
          count: 1,
          chance: 0.1,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_bark_angelfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "farmersdelight:tree_bark", count: 64 },
            { item: "minecraft:stripped_oak_log", count: 32 },
            { item: "minecraft:stripped_dark_oak_log", count: 32 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:oak_log", count: 64 },
            { item: "society:tapper", count: 8 },
            { item: "minecraft:dark_oak_log", count: 64 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:oak_resin", count: 16 },
            { item: "society:pine_tar", count: 16 },
            { item: "society:sap", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "farmersdelight:tree_bark",
          count: 32,
          chance: 0.24,
        },
        {
          minPopulation: 6,
          item: "minecraft:oak_log",
          count: 48,
          chance: 0.31,
        },
        {
          minPopulation: 7,
          item: "minecraft:dark_oak_log",
          count: 48,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:oak_resin",
          count: 8,
          chance: 0.22,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_drooping_gourami",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "vinery:white_grape_bag", count: 32 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "pamhc2trees:pawpawitem", count: 32 },
            { item: "vintagedelight:gearo_berry_bag", count: 32 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "pamhc2trees:plumitem", count: 64 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:white_grape_preserves",
          count: 8,
          chance: 0.24,
        },
        {
          minPopulation: 6,
          item: "vintagedelight:gearo_berry_mason_jar",
          count: 4,
          chance: 0.18,
        },
        {
          minPopulation: 7,
          item: "society:pawpaw_preserves",
          count: 4,
          chance: 0.16,
        },
        {
          minPopulation: 8,
          item: "society:plum_preserves",
          count: 2,
          chance: 0.16,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_demon_herring",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "trials:trial_key", count: 8 },
            { item: "trials:ominous_bottle", count: 4 },
            { item: "trials:breeze_rod", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "trials:trial_key_ominous", count: 4 },
            { item: "minecraft:blaze_rod", count: 32 },
            { item: "society:holy_symbol", count: 1 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:relic_trove", count: 1 },
            { item: "society:artifact_trove", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 6,
          item: "society:magic_rope",
          count: 1,
          chance: 0.24,
        },
        {
          minPopulation: 6,
          item: "society:combat_quarterly",
          count: 1,
          chance: 0.04,
        },
        {
          minPopulation: 7,
          item: "society:fantasy_dust",
          count: 1,
          chance: 0.17,
        },
        {
          minPopulation: 8,
          item: "species:werefang",
          count: 4,
          chance: 0.17,
        },
        {
          minPopulation: 8,
          item: "minecraft:totem_of_undying",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_triple_twirl_pleco",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:ender_eye", count: 8 },
            { item: "minecraft:ender_pearl", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "netherdepthsupgrade:warped_kelp_roll", count: 4 },
            { item: "society:purple_sheet", count: 4 },
            { item: "society:eggplant", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "minecraft:netherite_ingot", count: 4 },
            { item: "society:aged_chorus_wine", count: 4 },
            { item: "minecraft:end_rod", count: 16 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:ender_pearl",
          count: 8,
          chance: 0.27,
        },
        {
          minPopulation: 6,
          item: "createutilities:void_steel_bars",
          count: 16,
          chance: 0.22,
        },
        {
          minPopulation: 6,
          item: "createutilities:void_steel_scaffolding",
          count: 8,
          chance: 0.22,
        },
        {
          minPopulation: 6,
          item: "createutilities:void_steel_ladder",
          count: 8,
          chance: 0.12,
        },
        {
          minPopulation: 8,
          item: "createutilities:void_steel_ingot",
          count: 1,
          chance: 0.04,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_blind_sailfin",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:glass", count: 64 },
            { item: "minecraft:sand", count: 64 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:rubber", count: 16 },
            { item: "beautify:crimson_blinds", count: 32 },
            { item: "society:bowl_of_soul", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [{ item: "society:aged_forks_of_blue", count: 4 }],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:sand",
          count: 64,
          chance: 0.34,
        },
        {
          minPopulation: 6,
          item: "minecraft:sandstone",
          count: 32,
          chance: 0.31,
        },
        {
          minPopulation: 8,
          item: "society:architects_digest",
          count: 1,
          chance: 0.15,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_amber_goby",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "farm_and_charm:oat_ball", count: 48 },
            { item: "beachparty:sweetberry_milkshake", count: 4 },
            { item: "society:aged_grain_cheese_block", count: 4 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "atmospheric:orange", count: 16 },
            { item: "veggiesdelight:bellpepper", count: 32 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "bakery:bundt_cake", count: 32 },
            { item: "vintagedelight:pickled_pepper", count: 32 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:lemon_stone",
          count: 3,
          chance: 0.24,
        },
        {
          minPopulation: 6,
          item: "unusualfishmod:relucent_shard",
          count: 64,
          chance: 0.42,
        },
        {
          minPopulation: 4,
          item: "create:ochrum",
          count: 32,
          chance: 0.49,
        },
        {
          minPopulation: 8,
          item: "unusualfishmod:crimson_shard",
          count: 64,
          chance: 0.32,
        },
        {
          minPopulation: 9,
          item: "create:crimsite",
          count: 32,
          chance: 0.49,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_copperflame_anthias",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:oxidized_copper", count: 8 },
            { item: "minecraft:copper_block", count: 64 },
            { item: "farm_and_charm:silo_copper", count: 8 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "minecraft:verdant_froglight", count: 8 },
            { item: "trials:copper_bulb", count: 16 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "vinery:magnetic_wine", count: 1 },
            { item: "aquaculture:neptunium_ingot", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:oxidized_copper",
          count: 16,
          chance: 0.34,
        },
        {
          minPopulation: 6,
          item: "create:veridium",
          count: 48,
          chance: 0.28,
        },
        {
          minPopulation: 8,
          item: "create:copper_casing",
          count: 4,
          chance: 0.22,
        },
        {
          minPopulation: 10,
          item: "chimes:copper_chimes",
          count: 1,
          chance: 0.1,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_circus_fish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "society:aged_whiskey_lilitusinglemalt", count: 8 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:large_goose_mayonnaise", count: 4 },
            { item: "society:large_turkey_mayonnaise", count: 4 },
            { item: "society:large_duck_mayonnaise", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:beemonican_seal", count: 1 },
            { item: "society:wheel_of_adaptation", count: 1 },
            { item: "society:artifact_trove", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "brewery:whiskey_lilitusinglemalt",
          count: 4,
          chance: 0.34,
        },
        {
          minPopulation: 7,
          item: "society:yard_work_yearly",
          count: 1,
          chance: 0.15,
        },
        {
          minPopulation: 8,
          item: "society:artifact_trove",
          count: 1,
          chance: 0.08,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_hatchetfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:diamond", count: 8 },
            { item: "quark:diamond_heart", count: 2 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "pamhc2trees:bananaitem", count: 32 },
            { item: "society:espresso", count: 4 },
            { item: "unusualfishmod:cooked_unusual_fillet", count: 32 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            {
              item: "refurbished_furniture:light_electricity_generator",
              count: 1,
            },
            { item: "society:charging_rod", count: 1 },
            { item: "society:battery", count: 8 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 6,
          item: "unusualfishmod:tendril",
          count: 16,
          chance: 0.22,
        },
        {
          minPopulation: 8,
          item: "society:battery",
          count: 4,
          chance: 0.21,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_spindlefish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [{ item: "society:sunlit_pearl", count: 1 }],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:aged_improved_nether_fizz", count: 8 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:aged_energy_drink", count: 8 },
            { item: "society:pristine_amethyst_chunk", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "quark:myalite_crystal",
          count: 32,
          chance: 0.44,
        },
        {
          minPopulation: 4,
          item: "minecraft:dragon_breath",
          count: 4,
          chance: 0.17,
        },
        {
          minPopulation: 6,
          item: "society:sparkstone",
          count: 16,
          chance: 0.25,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_duality_damselfish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "quark:lavender_blossom_sapling", count: 64 },
            { item: "pamhc2trees:peachitem", count: 16 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:merino_wool", count: 4 },
            { item: "society:truffle", count: 4 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "create:scorchia", count: 64 },
            { item: "minecraft:white_concrete", count: 64 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:cobbled_deepslate",
          count: 64,
          chance: 0.89,
        },
        {
          minPopulation: 6,
          item: "minecraft:calcite",
          count: 32,
          chance: 0.59,
        },
        {
          minPopulation: 8,
          item: "create:scorchia",
          count: 64,
          chance: 0.32,
        },
        {
          minPopulation: 9,
          item: "minecraft:white_concrete",
          count: 64,
          chance: 0.45,
        },
      ],
    },
  ],
  [
    "unusualfishmod:raw_eyelash",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "twigs:silt", count: 1 },
            { item: "netherdepthsupgrade:eyeball", count: 32 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:black_opal", count: 1 },
            { item: "society:tubasmoke_carton", count: 4 },
            { item: "society:starfruit_preserves", count: 32 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "society:pristine_star_shards", count: 32 },
            { item: "society:aged_dewy_star", count: 8 },
            { item: "society:aged_star_coquito", count: 4 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "society:opal",
          count: 1,
          chance: 0.44,
        },
        {
          minPopulation: 6,
          item: "relics:shadow_glaive",
          count: 1,
          chance: 0.03,
        },
        {
          minPopulation: 8,
          item: "society:book_of_stars",
          count: 1,
          chance: 0.06,
        },
      ],
    },
  ],
  [
    "crittersandcompanions:koi_fish",
    {
      quests: [
        {
          population: 3,
          requestedItems: [
            { item: "minecraft:amethyst_shard", count: 48 },
            { item: "minecraft:amethyst_block", count: 16 },
            { item: "meadow:amethyst_cheese_block", count: 1 },
          ],
        },
        {
          population: 5,
          requestedItems: [
            { item: "society:purple_sheet", count: 4 },
            { item: "minecraft:budding_amethyst", count: 4 },
            { item: "nightlights:octopus_purple", count: 2 },
          ],
        },
        {
          population: 7,
          requestedItems: [
            { item: "pamhc2trees:plumitem", count: 16 },
            { item: "vinery:jo_special_mixture", count: 1 },
          ],
        },
      ],
      additionalRewards: [
        {
          minPopulation: 4,
          item: "minecraft:amethyst_shard",
          count: 8,
          chance: 0.54,
        },
        {
          minPopulation: 4,
          item: "minecraft:amethyst_cluster",
          count: 4,
          chance: 0.2,
        },
        {
          minPopulation: 6,
          item: "society:amethyst_chunk",
          count: 1,
          chance: 0.28,
        },
        {
          minPopulation: 8,
          item: "society:production_science_pack",
          count: 1,
          chance: 0.1,
        },
        {
          minPopulation: 10,
          item: "chimes:amethyst_chimes",
          count: 1,
          chance: 0.01,
        },
      ],
    },
  ],
]);
