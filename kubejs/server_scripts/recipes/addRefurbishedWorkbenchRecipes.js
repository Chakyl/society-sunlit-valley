console.info("[SOCIETY] addRefurbishedWorkbenchRecipes.js loaded");

const getCraftingItems = (name, wordMap, defaultItem) => {
  let craftItem = defaultItem;
  wordMap.forEach((entry) => {
    if (name.includes(entry.word)) craftItem = entry.craftItem;
  });
  return craftItem;
};
const fantasyWordMap = [
  { word: "nordic", craftItem: "trials:breeze_rod" },
  { word: "bone", craftItem: "minecraft:bone" },
  { word: "wither", craftItem: "minecraft:wither_rose" },
  { word: "venthyr", craftItem: "quark:soul_bead" },
  { word: "royal", craftItem: "minecraft:gold_block" },
  { word: "necrolord", craftItem: "minecraft:fermented_spider_eye" },
  { word: "dunmer", craftItem: "minecraft:spectral_arrow" },
];

const tanukiWordMap = [
  { word: "brown_mushroom", craftItem: "society:mudstone" },
  { word: "red_mushroom", craftItem: "society:lunarite" },
  { word: "regal", craftItem: "society:granite_slate" },
  { word: "cabana", craftItem: "society:baryte" },
  { word: "minimalist", craftItem: "society:limestone_pebble" },
  { word: "sweets", craftItem: "society:nekoite" },
  { word: "neon", craftItem: "society:helvite" },
  { word: "wooden_block", craftItem: "society:esperite" },
  { word: "antique", craftItem: "society:bixbyite" },
  { word: "egyptian", craftItem: "society:sandstone_slate" },
  { word: "blue", craftItem: "society:kyanite" },
  { word: "green", craftItem: "society:petrified_slime" },
  { word: "gorgeous", craftItem: "society:pyrite" },
  { word: "rocket_lamp", craftItem: "society:hematite" },
  { word: "streamer", craftItem: "society:slate" },
  { word: "fireplace", craftItem: "society:jasper" },
  { word: "vase", craftItem: "society:fluorapatite" },
  { word: "tarp", craftItem: "society:geminite" },
  { word: "clock", craftItem: "society:jade" },
  { word: "log", craftItem: "society:soapstone" },
  { word: "string", craftItem: "society:calcite_gem" },
  { word: "firewood", craftItem: "society:calcite_gem" },
  { word: "handcart", craftItem: "society:calcite_gem" },
  { word: "science", craftItem: "society:prismatic_shard" },
  { word: "froggy", craftItem: "society:froggy_helm" },
  { word: "toy_plane", craftItem: "society:ribbit_gadget" },
  { word: "atm", craftItem: "numismatics:neptunium_coin" },
  { word: "phone", craftItem: 'society:steamy_gadget' },
  { word: "paper_lantern", craftItem: 'society:canvas' },
  { word: "cash_register", craftItem: 'numismatics:sun' },
  { word: "mirror", craftItem: 'society:glitched_vhs' },
  { word: "stocking", craftItem: 'windswept:ginger_tea' },
  { word: "mower", craftItem: 'species:alphacene_grass' },
  { word: "swimming", craftItem: 'society:flamingo_egg' },
  { word: "washing", craftItem: 'supplementaries:soap_block' },
  { word: "horseshoe", craftItem: 'minecraft:golden_horse_armor' },
  { word: "bamboo", craftItem: 'twigs:bamboo_thatch' },
  { word: "stocking", craftItem: 'windswept:holly_wreath' },
  { word: "broom", craftItem: 'windswept:elder_feather' },
  { word: "rack", craftItem: 'meadow:fire_log' },
  { word: "rattan", craftItem: 'society:perfect_cherry' },
];
const modernWordMap = [
  { word: "tv", craftItem: "society:battery" },
  { word: "projector", craftItem: "society:battery" },
  { word: "beach", craftItem: "beachparty:coconut" },
  { word: "painting", craftItem: "society:canvas" },
  { word: "canvas", craftItem: "society:canvas" },
  { word: "picture", craftItem: "society:canvas" },
  { word: "trophy", craftItem: "minecraft:gold_block" },
  { word: "chimes", craftItem: "moreminecarts:hard_light_lens" },
];
ServerEvents.recipes((e) => {
  Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
    if (item.toString().includes("furniture_station")) return;
    const craftItem = getCraftingItems(item.toString(), fantasyWordMap, "minecraft:ender_eye");
    e.custom({
      type: "refurbished_furniture:workbench_constructing",
      materials: [
        {
          count: 1,
          item: "society:fantasy_dust",
        },
        {
          count: craftItem === "minecraft:ender_eye" ? 1 : 4,
          item: craftItem,
        },
      ],
      result: item,
      show_notification: false,
    });
    e.custom({
      type: "tanukidecor:diy",
      result: {
        item: item.id,
      },
    });
  });

  global.lootFurniture.forEach((item) => {
    if (item.includes("tanukidecor") || item.includes("whimsy_deco")) {
      if (item.includes("whimsy_deco")) {
        e.custom({
          type: "tanukidecor:diy",
          result: {
            item: item,
          },
        });
      }
      e.custom({
        type: "refurbished_furniture:workbench_constructing",
        materials: [
          {
            count: 1,
            item: "society:tanuki_leaf",
          },
          {
            count: 1,
            item: getCraftingItems(
              item,
              tanukiWordMap,
              "society:prismatic_shard"
            ),
          },
        ],
        result: item,
        show_notification: false,
      });
    } else {
      const craftItem = getCraftingItems(item.toString(), modernWordMap, "minecraft:quartz_block");
      e.custom({
        type: "refurbished_furniture:workbench_constructing",
        materials: [
          {
            count: 1,
            item: "society:architects_digest",
          },
          {
            count: craftItem === "minecraft:quartz_block" ? 16 : 4,
            item: craftItem,
          },
        ],
        result: item,
        show_notification: false,
      });
      e.custom({
        type: "tanukidecor:diy",
        result: {
          item: item,
        },
      });
    }
  });
});
