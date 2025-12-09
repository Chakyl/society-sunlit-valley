const runBountyDataGen = false;

const createDecree = (name, items, mult, pricyThreshold, amountFunction) => {
  let objs = { content: {} };
  let tradeEntry;
  let pricy;
  items.forEach((item) => {
    tradeEntry = global.trades.get(item);
    if (tradeEntry) {
      pricy = tradeEntry.value > pricyThreshold;
      objs.content[`${name}_${item.path}`] = {
        type: "minecraft:item",
        content: item,
        rarity: pricy ? "UNCOMMON" : "COMMON",
        weightMult: pricy ? 0.5 : 1,
        amount: (amountFunction && amountFunction(pricy)) || {
          min: pricy ? 1 : 2,
          max: pricy ? 4 : 8,
        },
        unitWorth: tradeEntry.value * mult,
      };
    } else console.log("ERROR: Couldn't generate bounty entry for " + item);
  });
  JsonIO.write(`kubejs/data/bountiful/bounty_pools/society/${name}_objs.json`, objs);
  JsonIO.write(`kubejs/data/bountiful/bounty_decrees/society/${name}.json`, {
    objectives: [`${name}_objs`],
    rewards: ["coin_rews"],
  });
};

const createSeasonalDecree = (season, items) => {
  let objs = { content: {} };
  let tradeEntry;
  let pricy;
  let crop;
  items.forEach((item) => {
    tradeEntry = global.trades.get(item);
    if (tradeEntry) {
      pricy = tradeEntry.value > 64;
      crop = Item.of(item).hasTag("forge:crops");
      objs.content[`${season}_${item.path}`] = {
        type: "minecraft:item",
        content: item,
        rarity: pricy ? "UNCOMMON" : "COMMON",
        weightMult: pricy ? 0.5 : 1,
        amount: crop
          ? {
              min: pricy ? 4 : 16,
              max: pricy ? 8 : 48,
            }
          : {
              min: pricy ? 1 : 2,
              max: pricy ? 4 : 8,
            },
        unitWorth: tradeEntry.value * 3,
      };
    } else console.log("ERROR: Couldn't generate bounty entry for " + item);
  });
  JsonIO.write(`kubejs/data/bountiful/bounty_pools/society/${season}_objs.json`, objs);
  JsonIO.write(`kubejs/data/bountiful/bounty_decrees/society/${season}.json`, {
    objectives: [`${season}_objs`],
    rewards: ["coin_rews"],
  });
};

if (runBountyDataGen) {
  createSeasonalDecree("spring", [
    "society:salmonberry",
    "farm_and_charm:onion",
    "unusualfishmod:raw_beaked_herring",
    "aquaculture:jellyfish",
    "farm_and_charm:strawberry",
    "farm_and_charm:lettuce",
    "veggiesdelight:garlic",
    "unusualfishmod:raw_drooping_gourami",
    "veggiesdelight:cauliflower",
    "farmersdelight:tomato",
    "minecraft:carrot",
    "pamhc2trees:lycheeitem",
    "vinery:cherry",
    "aquaculture:atlantic_herring",
    "aquaculture:pink_salmon",
    "unusualfishmod:raw_hatchetfish",
    "minecraft:cod",
    "minecraft:potato",
    "minecraft:tropical_fish",
    "vintagedelight:cucumber",
  ]);
  createSeasonalDecree("summer", [
    "vintagedelight:ghost_pepper",
    "farm_and_charm:corn",
    "society:blueberry",
    "minecraft:melon_slice",
    "minecraft:tropical_fish",
    "aquaculture:red_grouper",
    "aquaculture:tuna",
    "aquaculture:tambaqui",
    "society:boysenberry",
    "veggiesdelight:bellpepper",
    "pamhc2trees:bananaitem",
    "pamhc2trees:mangoitem",
    "farm_and_charm:oat",
    "minecraft:cocoa_beans",
    "farmersdelight:tomato",
    "pamhc2trees:peachitem",
    "minecraft:wheat",
    "atmospheric:orange",
    "minecraft:salmon",
    "aquaculture:synodontis",
    "aquaculture:leech",
    "unusualfishmod:raw_sneep_snorp",
    "aquaculture:jellyfish",
  ]);
  createSeasonalDecree("autumn", [
    "minecraft:carrot",
    "minecraft:wheat",
    "farm_and_charm:corn",
    "minecraft:apple",
    "veggiesdelight:sweet_potato",
    "pamhc2trees:plumitem",
    "farm_and_charm:barley",
    "society:eggplant",
    "aquaculture:blackfish",
    "minecraft:salmon",
    "aquaculture:brown_trout",
    "aquaculture:gar",
    "minecraft:beetroot",
    "farmersdelight:cabbage",
    "unusualfishmod:raw_forkfish",
    "unusualfishmod:raw_sailor_barb",
    "society:cranberry",
    "aquaculture:muskellunge",
    "vintagedelight:peanut",
  ]);
  createSeasonalDecree("winter", [
    "pamhc2trees:dragonfruititem",
    "pamhc2trees:cinnamonitem",
    "society:frozen_tear",
    "aquaculture:blackfish",
    "aquaculture:atlantic_cod",
    "society:crystalberry",
    "farmersdelight:cabbage",
    "society:tubabacco_leaf",
    "aquaculture:atlantic_herring",
    "aquaculture:pink_salmon",
    "aquaculture:brown_trout",
    "aquaculture:pollock",
    "snowyspirit:ginger",
    "unusualfishmod:raw_triple_twirl_pleco",
    "aquaculture:perch",
    "farm_and_charm:barley",
    "minecraft:cod",
    "unusualfishmod:raw_snowflake",
  ]);
  createDecree("cooking", Ingredient.of("#society:dish").itemIds, 3, 256);
  createDecree("fishing", Ingredient.of("#minecraft:fishes").itemIds, 4, 128);
  createDecree(
    "geologist",
    [
      "minecraft:raw_copper",
      "minecraft:raw_copper_block",
      "minecraft:raw_iron",
      "minecraft:raw_iron_block",
      "minecraft:raw_gold",
      "minecraft:raw_gold_block",
      "etcetera:raw_bismuth",
      "etcetera:raw_bismuth_block",
      "minecraft:redstone",
      "minecraft:redstone_block",
      "minecraft:quartz",
      "minecraft:quartz_block",
      "minecraft:lapis_lazuli",
      "minecraft:lapis_block",
      "society:geode",
      "society:frozen_geode",
      "society:magma_geode",
      "society:topaz",
      "society:ruby",
      "society:amethyst_chunk",
      "society:sparkstone",
      "society:sparkstone_block",
      "minecraft:netherite_scrap",
      "minecraft:diamond",
      "minecraft:diamond_block",
      "society:omni_geode",
      "society:earth_crystal",
      "society:fire_quartz",
      "society:aquamarine",
      "society:jade",
      "oreganized:raw_lead",
      "oreganized:raw_lead_block",
      "oreganized:raw_silver",
      "oreganized:raw_silver_block",
      "society:prismatic_shard",
    ],
    3,
    48,
    (pricy) => ({ min: pricy ? 1 : 8, max: pricy ? 4 : 32 })
  );
  createDecree(
    "artisan",
    global.artisanGoods
      .map((x) => x.item)
      .filter((item) => !item.includes("aged"))
      .concat(global.wines.map((x) => x.item).filter((item) => !item.includes("aged")))
      .concat(global.brews.map((x) => x.item).filter((item) => !item.includes("aged"))),
    3,
    2048,
    (pricy) => ({
      min: pricy ? 1 : 2,
      max: pricy ? 2 : 4,
    })
  );
}
