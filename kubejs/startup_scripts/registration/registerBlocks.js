StartupEvents.registry("block", (e) => {
  e.create("society:treated_log")
    .soundType("wood")
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/axe");

  // Ores
  e.create("society:earth_crystal")
    .box(2, 0, 2, 14, 8, 14)
    .defaultCutout()
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .model("society:block/earth_crystal")
    .lightLevel(0.5)
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/geode/earth_crystal",
        },
      });
    });

  e.create("society:fire_quartz")
    .box(2, 0, 2, 14, 8, 14)
    .defaultCutout()
    .soundType("amethyst")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .lightLevel(0.8)
    .model("society:block/fire_quartz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/magma_geode/fire_quartz",
        },
      });
    });

  e.create("society:geode_node")
    .box(4, 0, 4, 12, 9, 12)
    .defaultCutout()
    .soundType("stone")
    .hardness(4.5)
    .resistance(9.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .model("society:block/geode_node");

  e.create("society:magma_geode_node")
    .box(4, 0, 4, 12, 9, 12)
    .defaultCutout()
    .soundType("stone")
    .hardness(22.5)
    .resistance(9.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .model("society:block/magma_geode_node");

  e.create("society:omni_geode_node")
    .box(4, 0, 4, 12, 9, 12)
    .defaultCutout()
    .soundType("stone")
    .hardness(30.0)
    .resistance(9.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .model("society:block/omni_geode_node");

  const createBoulder = (type) => {
    e.create(`society:${type}`)
      .texture("up", `society:block/${type}_top`)
      .texture("down", `society:block/${type}_bottom`)
      .texture("north", `society:block/${type}_side`)
      .texture("east", `society:block/${type}_side`)
      .texture("south", `society:block/${type}_side`)
      .texture("west", `society:block/${type}_side`)
      .mapColor("stone")
      .soundType("stone")
      .hardness(4.5)
      .resistance(9.0)
      .requiresTool(true)
      .tagBlock("minecraft:mineable/pickaxe")
      .tagBlock("minecraft:needs_iron_tool")
      .texture("particle", `society:block/${type}_side`);
  };
  createBoulder("boulder")
  // Drinks
  e.create("society:espresso")
    .box(6, 0, 6, 10, 4, 10)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/espresso_cup_block")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/espresso",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("minecraft:speed", 2400, 1, 1.0);
      });
      item.useAnimation("drink");
    });

  e.create("society:steamed_milk")
    .box(5, 0, 5, 11, 7, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/steamed_milk")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/steamed_milk",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.hunger(2);
        food.saturation(4);
      });
      item.useAnimation("drink");
    });

  e.create("society:mocha")
    .box(5, 0, 5, 11, 7, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/mocha")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/mocha",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("minecraft:speed", 1200, 1, 1.0);
      });
      item.useAnimation("drink");
    });

  e.create("society:latte")
    .box(5, 0, 5, 11, 7, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/latte")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/latte",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("minecraft:speed", 1200, 1, 1.0);
      });
      item.useAnimation("drink");
    });

  e.create("society:dirty_chai")
    .box(5, 0, 5, 11, 7, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/dirty_chai")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/dirty_chai",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("minecraft:speed", 2400, 1, 1.0);
        food.effect("herbalbrews:tough", 2400, 1, 1.0);
      });
      item.useAnimation("drink");
    });

  e.create("society:bowl_of_soul")
    .box(5, 0, 5, 11, 3, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/bowl_of_soul")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/bowl_of_soul",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("herbalbrews:fortune", 3600, 1, 1.0);
      });
      item.useAnimation("drink");
    });

  e.create("society:truffle_tea")
    .box(5, 0, 5, 11, 3, 11)
    .defaultCutout()
    .soundType("glass")
    .hardness(1.0)
    .requiresTool(false)
    .model("society:block/drinks/truffle_tea")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/truffle_tea",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("legendarycreatures:convulsion", 1600, 1, 1.0);
      });
      item.tooltip(Text.darkPurple("It's said to promote relaxation."));
      item.tooltip(Text.darkPurple("What do you have to lose?"));
      item.useAnimation("drink");
    });

  e.create("society:beer_london", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .model("society:block/drinks/beer_london")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/beer_london",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.fastToEat(true);
        food.effect("vinery:jellie", 1200, 1, 1.0);
      });
      item.useAnimation("drink");
    })
    .displayName("London Beer");

  e.create("society:ancient_vespertine", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("society:block/drinks/ancient_vespertine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/ancient_vespertine",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:luck_effect", 2400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:ancient_cider", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("society:block/drinks/ancient_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/ancient_cider",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:netherite", 400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:dewy_star", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/dewy_star")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/dewy_star",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("brewery:haley", 2400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:starcardi", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/starcardi")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/starcardi",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("brewery:haley", 2400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:star_coquito", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/star_coquito")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/star_coquito",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("brewery:haley", 2400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:forks_of_blue", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/forks_of_blue")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/forks_of_blue",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("autumnity:extension", 1200, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:good_catawba", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/good_catawba")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/good_catawba",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("herbalbrews:tough", 2400, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  e.create("society:nutty_basil", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .defaultCutout()
    .soundType("glass")
    .model("society:block/drinks/nutty_basil")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/drinks/nutty_basil",
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("atmospheric:spitting", 1000, 1, 1.0);
        food.fastToEat(true);
      });
      item.useAnimation("drink");
    });

  // Compressed Crops block
  e.create("herbalbrews:coffee_beans_sack")
    .texture("up", "quark:block/cocoa_beans_sack_top")
    .texture("down", "quark:block/cocoa_beans_sack_bottom")
    .texture("north", "quark:block/cocoa_beans_sack")
    .texture("east", "quark:block/cocoa_beans_sack")
    .texture("south", "quark:block/cocoa_beans_sack")
    .texture("west", "quark:block/cocoa_beans_sack")
    .mapColor("dirt")
    .soundType("sand")
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(false)
    .texture("particle", "quark:block/cocoa_beans_sack");

  e.create("herbalbrews:yerba_mate_leaf_block")
    .textureAll("herbalbrews:block/green_tea_leaf2")
    .mapColor("grass")
    .soundType("azalea_leaves")
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(false)
    .texture("particle", "herbalbrews:block/green_tea_leaf2");

  e.create("herbalbrews:rooibos_leaf_block")
    .textureAll("herbalbrews:block/green_tea_leaf2")
    .mapColor("grass")
    .soundType("azalea_leaves")
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(false)
    .texture("particle", "herbalbrews:block/green_tea_leaf2");

  const createCrate = (type) => {
    e.create(`society:${type}_crate`)
      .texture("up", `society:block/${type}_crate_top`)
      .texture("down", "farmersdelight:block/crate_bottom")
      .texture("north", `society:block/${type}_crate_side`)
      .texture("east", `society:block/${type}_crate_side`)
      .texture("south", `society:block/${type}_crate_side`)
      .texture("west", `society:block/${type}_crate_side`)
      .mapColor("grass")
      .soundType("wood")
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .texture("particle", `society:block/${type}_crate_top`);
  };
  createCrate("blueberry");
  createCrate("eggplant");
  createCrate("ancient_fruit");

  e.create("society:tubabacco_leaf_block")
    .textureAll("herbalbrews:block/green_tea_leaf1")
    .mapColor("grass")
    .soundType("azalea_leaves")
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(false)
    .texture("particle", "herbalbrews:block/green_tea_leaf1");

  // Catalogs
  e.create("society:tanuki_catalog", "cardinal")
    .box(2, 0, 3, 14, 1.025, 13)
    .defaultCutout()
    .resistance(1.0)
    .requiresTool(false)
    .model("society:block/tanuki_catalog")
    .displayName(":leaves: §aTanuki Catalog");

  e.create("society:modern_catalog", "cardinal")
    .box(2, 0, 3, 14, 1.025, 13)
    .defaultCutout()
    .resistance(1.0)
    .requiresTool(false)
    .model("society:block/modern_catalog")
    .displayName(":house: Modern Catalog");

  e.create("society:fantasy_catalog", "cardinal")
    .box(2, 0, 3, 14, 1.025, 13)
    .defaultCutout()
    .resistance(1.0)
    .requiresTool(false)
    .model("society:block/fantasy_catalog")
    .displayName(":axe: §eFantasy Catalog");
});
