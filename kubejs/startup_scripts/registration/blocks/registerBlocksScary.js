StartupEvents.registry("block", (e) => {
    e
        .create("society:treated_log")
        .soundType("wood")
        .property(BlockProperties.AXIS)
        .placementState((e) => e.set(BlockProperties.AXIS, e.clickedFace.axis))
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
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
        .parentModel("society:block/kubejs/earth_crystal")
        .lightLevel(0.5);

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
        .parentModel("society:block/kubejs/fire_quartz");

    e.create("society:geode_node")
        .box(4, 0, 4, 12, 9, 12)
        .defaultCutout()
        .soundType("stone")
        .hardness(4.5)
        .resistance(9.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool")
        .parentModel("society:block/kubejs/geode_node");

    e.create("society:magma_geode_node")
        .box(4, 0, 4, 12, 9, 12)
        .defaultCutout()
        .soundType("stone")
        .hardness(22.5)
        .resistance(9.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .parentModel("society:block/kubejs/magma_geode_node");

    e.create("society:omni_geode_node")
        .box(4, 0, 4, 12, 9, 12)
        .defaultCutout()
        .soundType("stone")
        .hardness(30.0)
        .resistance(9.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .parentModel("society:block/kubejs/omni_geode_node");

    // Skull Cavern
    e.create("society:skull_cavern_teleporter")
        .texture("up", "society:block/teleporter_top")
        .texture("down", "society:block/teleporter_bottom")
        .texture("north", "society:block/teleporter_side")
        .texture("east", "society:block/teleporter_side")
        .texture("south", "society:block/teleporter_side")
        .texture("west", "society:block/teleporter_side")
        .texture("particle", "society:block/teleporter_side")
        .mapColor("stone")
        .soundType("stone")
        .hardness(1.0)
        .resistance(3600000.0)
        .lightLevel(1)
        .requiresTool(false);

    const createBoulder = (type) => {
        e.create(`society:${type}_boulder`)
            .texture("up", `society:block/${type}_boulder_top`)
            .texture("down", `society:block/${type}_boulder`)
            .texture("north", `society:block/${type}_boulder`)
            .texture("east", `society:block/${type}_boulder`)
            .texture("south", `society:block/${type}_boulder`)
            .texture("west", `society:block/${type}_boulder`)
            .texture("particle", `society:block/${type}_boulder`)
            .soundType("stone")
            .hardness(2)
            .resistance(1.0)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_iron_tool");
    };
    createBoulder("stone");
    createBoulder("ice");
    createBoulder("sandstone");
    createBoulder("blackstone");
    createBoulder("end_stone");


    const createSupplyCrate = (type, path) => {
        e.create(`society:${type}_supply_crate`)
            .soundType("wood")
            .tagBlock("minecraft:mineable/axe")
            .parentModel(path)
            .tagBlock("society:supply_crate");
    };
    createSupplyCrate("oak", "refurbished_furniture:block/oak_crate_closed");
    createSupplyCrate(
        "spruce",
        "refurbished_furniture:block/spruce_crate_closed"
    );
    createSupplyCrate("palm", "everycomp:block/rfm/beachparty/palm_crate_closed");
    createSupplyCrate(
        "grimwood",
        "everycomp:block/rfm/atmospheric/grimwood_crate_closed"
    );
    e.create("society:iridium_ore")
        .soundType("stone")
        .hardness(2.5)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .parentModel("society:block/kubejs/iridium_ore");

    e.create("society:deepslate_iridium_ore")
        .soundType("stone")
        .hardness(2.5)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .parentModel("society:block/kubejs/deepslate_iridium_ore");

    e.create("society:sparkstone_ore")
        .soundType("stone")
        .hardness(2.5)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .parentModel("society:block/kubejs/sparkstone_ore");

    e.create("society:deepslate_sparkstone_ore")
        .soundType("stone")
        .hardness(2.5)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .parentModel("society:block/kubejs/deepslate_sparkstone_ore");

    e.create(`society:sparkstone_block`)
        .soundType("amethyst")
        .hardness(2)
        .resistance(1.0)
        .tagBlock("minecraft:mineable/pickaxe")
        .texture("society:block/sparkstone_block");

    e.create(`society:prismatic_shard_block`)
        .soundType("amethyst")
        .hardness(2)
        .resistance(1.0)
        .tagBlock("minecraft:mineable/pickaxe")
        .texture("society:block/prismatic_shard_block");

    // Compressed Crops block
    e.create("society:animal_feed_sack", "cardinal")
        .parentModel("society:block/kubejs/animal_feed_sack")
        .mapColor("dirt")
        .soundType("sand")
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false);

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
        .texture("herbalbrews:block/green_tea_leaf2")
        .mapColor("grass")
        .soundType("azalea_leaves")
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
        .texture("particle", "herbalbrews:block/green_tea_leaf2");

    e.create("herbalbrews:rooibos_leaf_block")
        .texture("herbalbrews:block/green_tea_leaf2")
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
            .texture("particle", `society:block/${type}_crate_top`)
            .mapColor("grass")
            .soundType("wood")
            .hardness(1.0)
            .resistance(1.0)
            .requiresTool(false);
    };

    const crates = [
        "blueberry",
        "eggplant",
        "ancient_fruit",
        "sparkpod",
        "salmonberry",
        "boysenberry",
        "cranberry",
        "crystalberry",
        "mana_fruit",
    ];
    crates.forEach((crate) => {
        createCrate(crate);
    });

    e.create("society:tubabacco_leaf_block")
        .texture("herbalbrews:block/green_tea_leaf1")
        .mapColor("grass")
        .soundType("azalea_leaves")
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
        .texture("particle", "herbalbrews:block/green_tea_leaf1");

    // Drinks
    e.create("society:espresso")
        .box(6, 0, 6, 10, 4, 10)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/espresso_cup_block")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("minecraft:speed", 2400, 1, 1.0);
            });
            item.useAnimation("drink");
        });

    e.create("society:steamed_milk")
        .box(5, 0, 5, 11, 7, 11)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/drinks/steamed_milk")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                food.nutrition(2);
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
        .parentModel("society:block/kubejs/drinks/mocha")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("minecraft:speed", 1200, 1, 1.0);
            });
            item.useAnimation("drink");
        });

    e.create("society:latte")
        .box(5, 0, 5, 11, 7, 11)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/drinks/latte")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("minecraft:speed", 1200, 1, 1.0);
            });
            item.useAnimation("drink");
        });

    e.create("society:dirty_chai")
        .box(5, 0, 5, 11, 7, 11)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/drinks/dirty_chai")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("minecraft:speed", 2400, 1, 1.0);
                // food.effect("herbalbrews:tough", 2400, 1, 1.0);
            });
            item.useAnimation("drink");
        });

    e.create("society:bowl_of_soul")
        .box(5, 0, 5, 11, 3, 11)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/drinks/bowl_of_soul")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("herbalbrews:fortune", 3600, 1, 1.0);
            });
            item.useAnimation("drink");
        });

    e.create("society:truffle_tea")
        .box(5, 0, 5, 11, 3, 11)
        .defaultCutout()
        .soundType("glass")
        .hardness(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/drinks/truffle_tea")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("legendarycreatures:convulsion", 1600, 1, 1.0);
            });
            item.tooltip(
                Text.translatable("block.society.truffle_tea.description").darkPurple()
            );
            item.useAnimation("drink");
        });

    e.create("society:beer_london", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/beer_london")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        })
        .displayName("London Beer");

    e.create("society:beer_attunecore", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/beer_attunecore")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.fastToEat(true);
                // food.effect("vinery:jellie", 200, 1, 1.0);
            });
            item.useAnimation("drink");
        })
        .displayName("Attunecore Beer");

    e.create("society:ancient_cider", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .soundType("glass")
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/ancient_cider")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("nethervinery:netherite", 400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:ancient_vespertine", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .soundType("glass")
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/ancient_vespertine")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("vinery:luck_effect", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:dewy_star", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/dewy_star")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("brewery:haley", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:starcardi", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/starcardi")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("brewery:haley", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:star_coquito", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/star_coquito")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("brewery:haley", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:violet_moon", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/dewy_star")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("brewery:lightning_strike", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:sparkling_le_roy", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .soundType("glass")
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/ancient_vespertine")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("windswept:frost_resistance", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:laputa_franc", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .soundType("glass")
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/ancient_vespertine")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("botania:soul_cross", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:mana_king", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .soundType("glass")
        .defaultCutout()
        .parentModel("society:block/kubejs/drinks/ancient_vespertine")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("botania:clear", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:forks_of_blue", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/forks_of_blue")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("autumnity:extension", 1200, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:good_catawba", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/good_catawba")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("herbalbrews:tough", 2400, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:nutty_basil", "cardinal")
        .box(2, 0, 2, 14, 14, 14)
        .defaultCutout()
        .soundType("glass")
        .parentModel("society:block/kubejs/drinks/nutty_basil")
        .item((item) => {
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("atmospheric:spitting", 1000, 1, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });

    e.create("society:supreme_mayonnaise", "cardinal")
        .parentModel("society:block/kubejs/supreme_mayonnaise")
        .soundType("stone")
        .defaultCutout()
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
        .item((item) => {
            item.tooltip(
                Text.translatable("block.society.supreme_mayonnaise.description").red()
            );
            item.tooltip(
                Text.translatable(
                    "block.society.supreme_mayonnaise.description.obtain"
                ).gray()
            );
            item.food((food) => {
                food.alwaysEdible(true);
                // food.effect("vinery:creeper_effect", 120, 4, 1.0);
                // food.fastToEat(true);
            });
            item.useAnimation("drink");
        });
    // Catalogs
    e.create("society:tanuki_catalog", "cardinal")
        .box(2, 0, 3, 14, 1.025, 13)
        .defaultCutout()
        .resistance(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/tanuki_catalog")
        .displayName("♤ §aTanuki Catalog");

    e.create("society:modern_catalog", "cardinal")
        .box(2, 0, 3, 14, 1.025, 13)
        .defaultCutout()
        .resistance(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/modern_catalog")
        .displayName("♧ Modern Catalog");

    e.create("society:fantasy_catalog", "cardinal")
        .box(2, 0, 3, 14, 1.025, 13)
        .defaultCutout()
        .resistance(1.0)
        .requiresTool(false)
        .parentModel("society:block/kubejs/fantasy_catalog")
        .displayName("♡ §eFantasy Catalog");

    e.create("moreminecarts:greenhouse_glass_stairs", "stairs")
        .soundType("glass")
        .resistance(0.8)
        .renderType("translucent")
        .texture("moreminecarts:block/chiseled_organic_glass");

    e.create("moreminecarts:greenhouse_glass_slab", "slab")
        .soundType("glass")
        .resistance(0.8)
        .renderType("translucent")
        .texture("moreminecarts:block/chiseled_organic_glass");
});
