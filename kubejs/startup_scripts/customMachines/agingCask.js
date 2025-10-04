//priority: 100
console.info("[SOCIETY] agingCask.js loaded");

global.agingCaskRecipes = new Map([]);
// Both global variables as items are registered based on these
global.ageableProductInputs = [
  { item: "vinery:cristel_wine", name: "Cristel Wine", time: 10 },
  {
    item: "vinery:creepers_crush",
    name: "Bottle of 'Creepers Crush'",
    time: 10,
  },
  {
    item: "vinery:villagers_fright",
    name: "Bottle of 'Villagers Fright'",
    time: 10,
  },
  { item: "vinery:glowing_wine", name: "Sun-kissed Wine", time: 10 },
  { item: "vinery:mead", name: "Mead", time: 10 },
  {
    item: "vinery:bottle_mojang_noir",
    name: "Bottle of 'Mojang Noir'",
    time: 10,
  },
  { item: "vinery:eiswein", name: "Eiswein", time: 10 },
  { item: "society:good_catawba", name: "Good Catawba", time: 10 },
  { item: "vinery:cherry_wine", name: "Cherry Wine", time: 10 },
  { item: "vinery:mellohi_wine", name: "Mellohi Wine", time: 10 },
  { item: "vinery:magnetic_wine", name: "Magnetic Wine", time: 10 },
  { item: "vinery:chorus_wine", name: "Chorus Wine", time: 10 },
  { item: "vinery:noir_wine", name: "Noir Wine", time: 10 },
  { item: "vinery:lilitu_wine", name: "Miss Lilitus Wine", time: 10 },
  { item: "vinery:stal_wine", name: "Stal Wine", time: 10 },
  { item: "vinery:strad_wine", name: "Strad Wine", time: 10 },
  { item: "vinery:solaris_wine", name: "Solaris Wine", time: 10 },
  { item: "vinery:bolvar_wine", name: "Bolvar Wine", time: 10 },
  { item: "vinery:aegis_wine", name: "Aegis Wine", time: 10 },
  { item: "vinery:clark_wine", name: "Clark Wine", time: 10 },
  { item: "vinery:chenet_wine", name: "Chenet Wine", time: 10 },
  { item: "vinery:kelp_cider", name: "Kelp Cider", time: 10 },
  { item: "vinery:apple_wine", name: "Apple Wine", time: 10 },
  { item: "vinery:apple_cider", name: "Cider", time: 10 },
  { item: "vinery:jellie_wine", name: "Jellie Wine", time: 10 },
  { item: "vinery:red_wine", name: "Red Wine", time: 10 },
  { item: "society:forks_of_blue", name: "Forks of Blue", time: 10 },
  { item: "vinery:jo_special_mixture", name: "Jo's Special Mixture", time: 10 },
  { item: "society:nutty_basil", name: "Nutty Basil", time: 10 },
  { item: "vintagedelight:century_egg", name: "Century Egg", time: 10 },
  { item: "society:energy_drink", name: "Energy Drink", time: 4 },
  { item: "society:espresso", name: "Espresso", time: 2 },
  { item: "society:starcardi", name: "Starcardi", time: 4 },
  { item: "society:star_coquito", name: "Star Coquito", time: 10 },
  { item: "nethervinery:blazewine_pinot", name: "Blazewine Pinot", time: 10 },
  { item: "nethervinery:netherite_nectar", name: "Iridium Nectar", time: 10 },
  { item: "nethervinery:ghastly_grenache", name: "Ghastly Grenache", time: 10 },
  { item: "nethervinery:lava_fizz", name: "Lava Fizz", time: 10 },
  { item: "nethervinery:nether_fizz", name: "Nether Fizz", time: 10 },
  {
    item: "nethervinery:improved_lava_fizz",
    name: "Improved Lava Fizz",
    time: 8,
  },
  {
    item: "nethervinery:improved_nether_fizz",
    name: "Improved Nether Fizz",
    time: 8,
  },
  { item: "brewery:beer_wheat", name: "Wheat Beer", time: 3 },
  { item: "brewery:beer_barley", name: "Barley Beer", time: 3 },
  { item: "brewery:beer_hops", name: "Hops Beer", time: 3 },
  { item: "brewery:beer_nettle", name: "Nettle Beer", time: 3 },
  { item: "brewery:beer_oat", name: "Oat Beer", time: 3 },
  { item: "brewery:beer_haley", name: "Haley Beer", time: 3 },
  { item: "brewery:whiskey_jojannik", name: "JoJannik Select", time: 4 },
  {
    item: "brewery:whiskey_lilitusinglemalt",
    name: "Lilitu Single Malt",
    time: 4,
  },
  {
    item: "brewery:whiskey_cristelwalker",
    name: "CristelWalker Original",
    time: 4,
  },
  { item: "brewery:whiskey_maggoallan", name: "Aged MaggoAllan", time: 4 },
  {
    item: "brewery:whiskey_carrasconlabel",
    name: "Carrasconlabel Heritage",
    time: 4,
  },
  { item: "brewery:whiskey_ak", name: "AK Reserve", time: 6 },
  {
    item: "brewery:whiskey_highland_hearth",
    name: "Highland Hearth Signature",
    time: 4,
  },
  {
    item: "brewery:whiskey_smokey_reverie",
    name: "Aged Smokey Reverie",
    time: 4,
  },
  {
    item: "brewery:whiskey_jamesons_malt",
    name: "Jameson Malt Whiskey",
    time: 4,
  },
  { item: "brewery:dark_brew", name: "Dark Brew", time: 6 },
  { item: "meadow:cheese_block", name: "Cheese Wheel", time: 3 },
  { item: "meadow:goat_cheese_block", name: "Goat Cheese Wheel", time: 3 },
  { item: "meadow:warped_cheese_block", name: "Warped Cheese Wheel", time: 3 },
  { item: "meadow:sheep_cheese_block", name: "Sheep Cheese Wheel", time: 3 },
  { item: "meadow:grain_cheese_block", name: "Grain Cheese Wheel", time: 3 },
  {
    item: "meadow:amethyst_cheese_block",
    name: "Amethyst Cheese Wheel",
    time: 3,
  },
  {
    item: "meadow:buffalo_cheese_block",
    name: "Buffalo Cheese Wheel",
    time: 3,
  },
  { item: "society:beer_london", name: "London Beer", time: 3 },
  { item: "society:ancient_vespertine", name: "Ancient Vespertine", time: 10 },
  { item: "society:dewy_star", name: "Dewy Star", time: 10 },
  { item: "society:ancient_cider", name: "Ancient Cider", time: 10 },
  { item: "society:beer_attunecore", name: "Attunecore Beer", time: 3 },
  {
    item: "farmlife:tribull_cheese_wheel",
    name: "Tri-Bull Cheese Wheel",
    time: 3,
  },
];
global.ageableProductInputs.forEach((product) => {
  const splitProduct = product.item.split(":");
  global.agingCaskRecipes.set(product.item, {
    output: [`1x society:aged_${splitProduct[1]}`],
    time: product.time,
  });
});
StartupEvents.registry("block", (event) => {
  event
    .create("society:aging_cask", "cardinal")
    .property(booleanProperty.create("working"))
    .property(booleanProperty.create("mature"))
    .property(booleanProperty.create("upgraded"))
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Ages a product over a long period of time"));
      item.modelJson({
        parent: "society:block/aging_cask/aging_cask",
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
      const nbt = block.getEntityData();

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (
          !upgraded &&
          block.properties.get("working").toLowerCase() == "false" &&
          item == "society:broken_clock"
        ) {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "farmersdelight:star",
            true,
            block.x,
            block.y + 1,
            block.z,
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            3,
            0.01
          );
          block.set(block.id, {
            facing: facing,
            working: block.properties.get("working"),
            mature: block.properties.get("mature"),
            upgraded: true,
          });
        } else if (!upgraded && item == "society:broken_clock") {
          player.tell(Text.red(`This can only be upgraded when not in use`));
        }
      }

      if (player.stages.has("aged_prize") && block.properties.get("mature") === "true" && rnd5()) {
        block.popItemFromFace("society:prize_ticket", facing);
      }
      if (
        !player.stages.has("slouching_towards_artistry") &&
        block.properties.get("mature") === "true" &&
        Number(nbt.data.stage) > 5 &&
        Math.random() <= 0.01
      ) {
        block.popItemFromFace("society:slouching_towards_artistry", block.properties.get("facing"));
      }
      global.handleBERightClick("minecraft:block.wood.place", click, global.agingCaskRecipes, 10);
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ stage: 0, type: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.handleBETick(entity, global.agingCaskRecipes, 10, true);
      });
    }).blockstateJson = {
    multipart: getCardinalMultipartJson("aging_cask"),
  };
});
