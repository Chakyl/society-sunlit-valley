//priority: 100
console.info("[SOCIETY] ancientCask.js loaded");

global.ancientCaskRecipes = new Map([]);
[
  { item: "vinery:cristel_wine", name: "Cristel Wine", time: 20 },
  {
    item: "vinery:creepers_crush",
    name: "Bottle of 'Creepers Crush'",
    time: 20,
  },
  {
    item: "vinery:villagers_fright",
    name: "Bottle of 'Villagers Fright'",
    time: 20,
  },
  { item: "vinery:glowing_wine", name: "Sun-kissed Wine", time: 20 },
  { item: "vinery:mead", name: "Mead", time: 20 },
  {
    item: "vinery:bottle_mojang_noir",
    name: "Bottle of 'Mojang Noir'",
    time: 20,
  },
  { item: "vinery:eiswein", name: "Eiswein", time: 20 },
  { item: "society:good_catawba", name: "Good Catawba", time: 20 },
  { item: "vinery:cherry_wine", name: "Cherry Wine", time: 20 },
  { item: "vinery:mellohi_wine", name: "Mellohi Wine", time: 20 },
  { item: "vinery:magnetic_wine", name: "Magnetic Wine", time: 20 },
  { item: "vinery:chorus_wine", name: "Chorus Wine", time: 20 },
  { item: "vinery:noir_wine", name: "Noir Wine", time: 20 },
  { item: "vinery:lilitu_wine", name: "Miss Lilitus Wine", time: 20 },
  { item: "vinery:stal_wine", name: "Stal Wine", time: 20 },
  { item: "vinery:strad_wine", name: "Strad Wine", time: 20 },
  { item: "vinery:solaris_wine", name: "Solaris Wine", time: 20 },
  { item: "vinery:bolvar_wine", name: "Bolvar Wine", time: 20 },
  { item: "vinery:aegis_wine", name: "Aegis Wine", time: 20 },
  { item: "vinery:clark_wine", name: "Clark Wine", time: 20 },
  { item: "vinery:chenet_wine", name: "Chenet Wine", time: 20 },
  { item: "vinery:kelp_cider", name: "Kelp Cider", time: 20 },
  { item: "vinery:apple_wine", name: "Apple Wine", time: 20 },
  { item: "vinery:apple_cider", name: "Cider", time: 20 },
  { item: "vinery:jellie_wine", name: "Jellie Wine", time: 20 },
  { item: "vinery:red_wine", name: "Red Wine", time: 20 },
  { item: "society:forks_of_blue", name: "Forks of Blue", time: 20 },
  { item: "vinery:jo_special_mixture", name: "Jo's Special Mixture", time: 20 },
  { item: "society:nutty_basil", name: "Nutty Basil", time: 20 },
  { item: "vintagedelight:century_egg", name: "Century Egg", time: 20 },
  { item: "society:energy_drink", name: "Energy Drink", time: 14 },
  { item: "society:espresso", name: "Espresso", time: 12 },
  { item: "society:starcardi", name: "Starcardi", time: 14 },
  { item: "society:star_coquito", name: "Star Coquito", time: 20 },
  { item: "nethervinery:blazewine_pinot", name: "Blazewine Pinot", time: 20 },
  { item: "nethervinery:netherite_nectar", name: "Iridium Nectar", time: 20 },
  { item: "nethervinery:ghastly_grenache", name: "Ghastly Grenache", time: 20 },
  { item: "nethervinery:lava_fizz", name: "Lava Fizz", time: 20 },
  { item: "nethervinery:nether_fizz", name: "Nether Fizz", time: 20 },
  {
    item: "nethervinery:improved_lava_fizz",
    name: "Improved Lava Fizz",
    time: 18,
  },
  {
    item: "nethervinery:improved_nether_fizz",
    name: "Improved Nether Fizz",
    time: 18,
  },
  { item: "brewery:beer_wheat", name: "Wheat Beer", time: 13 },
  { item: "brewery:beer_barley", name: "Barley Beer", time: 13 },
  { item: "brewery:beer_hops", name: "Hops Beer", time: 13 },
  { item: "brewery:beer_nettle", name: "Nettle Beer", time: 13 },
  { item: "brewery:beer_oat", name: "Oat Beer", time: 13 },
  { item: "brewery:beer_haley", name: "Haley Beer", time: 13 },
  { item: "brewery:whiskey_jojannik", name: "JoJannik Select", time: 14 },
  {
    item: "brewery:whiskey_lilitusinglemalt",
    name: "Lilitu Single Malt",
    time: 14,
  },
  {
    item: "brewery:whiskey_cristelwalker",
    name: "CristelWalker Original",
    time: 14,
  },
  { item: "brewery:whiskey_maggoallan", name: "Aged MaggoAllan", time: 14 },
  {
    item: "brewery:whiskey_carrasconlabel",
    name: "Carrasconlabel Heritage",
    time: 14,
  },
  { item: "brewery:whiskey_ak", name: "AK Reserve", time: 14 },
  {
    item: "brewery:whiskey_highland_hearth",
    name: "Highland Hearth Signature",
    time: 14,
  },
  {
    item: "brewery:whiskey_smokey_reverie",
    name: "Aged Smokey Reverie",
    time: 14,
  },
  {
    item: "brewery:whiskey_jamesons_malt",
    name: "Jameson Malt Whiskey",
    time: 16,
  },
  { item: "brewery:dark_brew", name: "Dark Brew", time: 16 },
  { item: "meadow:cheese_block", name: "Cheese Wheel", time: 13 },
  { item: "meadow:goat_cheese_block", name: "Goat Cheese Wheel", time: 13 },
  { item: "meadow:warped_cheese_block", name: "Warped Cheese Wheel", time: 13 },
  { item: "meadow:sheep_cheese_block", name: "Sheep Cheese Wheel", time: 13 },
  { item: "meadow:grain_cheese_block", name: "Grain Cheese Wheel", time: 13 },
  {
    item: "meadow:amethyst_cheese_block",
    name: "Amethyst Cheese Wheel",
    time: 13,
  },
  {
    item: "meadow:buffalo_cheese_block",
    name: "Buffalo Cheese Wheel",
    time: 13,
  },
  { item: "society:beer_london", name: "London Beer", time: 13 },
  { item: "society:ancient_vespertine", name: "Ancient Vespertine", time: 20 },
  { item: "society:dewy_star", name: "Dewy Star", time: 20 },
  { item: "society:ancient_cider", name: "Ancient Cider", time: 20 },
  { item: "society:beer_attunecore", name: "Attunecore Beer", time: 13 },
  {
    item: "farmlife:tribull_cheese_wheel",
    name: "Tri-Bull Cheese Wheel",
    time: 13,
  },
].forEach((product) => {
  const splitProduct = product.item.split(":");
  global.ancientCaskRecipes.set(`society:aged_${splitProduct[1]}`, {
    output: [`1x society:double_aged_${splitProduct[1]}`],
    time: product.time,
  });
});

StartupEvents.registry("block", (event) => {
  event
    .create("society:ancient_cask", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Ages already aged goods at an extremely slow rate"));
      item.tooltip(Text.red("Only usable if Ancient Aging skill unlocked"));
      item.modelJson({
        parent: "society:block/ancient_cask/ancient_cask",
      });
    })

    .defaultState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("working"), false)
        .set(booleanProperty.create("mature"), false)
        .set(booleanProperty.create("upgraded"), false);
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
      const facing = block.properties.get("facing").toLowerCase();

      if (player.stages.has("ancient_aging")) {
        if (hand == "OFF_HAND") return;
        if (hand == "MAIN_HAND") {
          if (
            !upgraded &&
            block.properties.get("working").toLowerCase() == "false" &&
            block.properties.get("mature").toLowerCase() == "false" &&
            item == "society:inserter"
          ) {
            if (!player.isCreative()) item.count--;
            level.spawnParticles(
              "farmersdelight:star",
              true,
              block.x,
              block.y + 1,
              block.z,
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              0.2 * rnd(1, 4),
              3,
              0.01
            );
            block.set(block.id, {
              facing: facing,
              working: block.properties.get("working"),
              mature: block.properties.get("mature"),
              upgraded: true,
            });
          } else if (!upgraded && item == "society:inserter") {
            player.tell(Text.red(`This can only be upgraded when not in use`));
          }
        }

        if (upgraded)
          global.handleBERightClick(
            "minecraft:block.wood.place",
            click,
            global.ancientCaskRecipes,
            4,
            true,
            false,
            4
          );
        else
          global.handleBERightClick(
            "minecraft:block.wood.place",
            click,
            global.ancientCaskRecipes,
            20
          );
      } else player.tell(Text.red(`You need the Farming skill "Ancient Aging" to use this...`));
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, recipe: "" });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.ancientCaskRecipes, 20);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("ancient_cask"),
  };
});
