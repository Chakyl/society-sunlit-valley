Ponder.registry((e) => {
    e.create(["brewery:wooden_brewingstation", "brewery:copper_brewingstation", "brewery:netherite_brewingstation"]).scene('brewingstation_scene_one', "Starting the Brewing Process", (scene) => {

        scene.showBasePlate();
        scene.world.setBlocks([1, 1, 2], "brewery:wooden_brewingstation");
        scene.world.setBlocks([1, 1, 1], "brewery:brew_timer");
        scene.world.setBlocks([2, 1, 1], "brewery:brew_oven");
        scene.world.setBlocks([2, 1, 2], "brewery:brew_whistle");
        scene.world.setBlocks([2, 2, 2], "brewery:brew_whistle");

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south"), false);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south"), false);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south"), false);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("brewery:brew_whistle").with("facing", "south"), false);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("brewery:brew_whistle").with("half", "upper").with("facing", "south"), false);
        global.showPonderLayer(scene, 0, 1);

        scene.idle(10);

        scene.text(80, "The Brewingstation is a multiblock machine for brewing beers and spirits.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "To start, place your ingredients into the basin and fill with water.", [1, 2, 2])

        scene.idle(30);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('brewery:hops')

        scene.idle(40);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('minecraft:water_bucket')

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "filled"), false);

        scene.idle(50);

        scene.addLazyKeyframe();

        scene.text(80, "Place your fuel in the oven block to begin brewing.", [2, 2, 1])

        scene.idle(30);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('minecraft:coal')

        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("heat", "lit"), false);

        scene.idle(40);

    });

    e.create(["brewery:wooden_brewingstation", "brewery:copper_brewingstation", "brewery:netherite_brewingstation"]).scene('brewingstation_scene_two', "The Brewing Minigame", (scene, util) => {

        scene.showBasePlate();
        scene.world.setBlocks([1, 1, 2], "brewery:wooden_brewingstation");
        scene.world.setBlocks([1, 1, 1], "brewery:brew_timer");
        scene.world.setBlocks([2, 1, 1], "brewery:brew_oven");
        scene.world.setBlocks([2, 1, 2], "brewery:brew_whistle");
        scene.world.setBlocks([2, 2, 2], "brewery:brew_whistle");

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "filled"), false);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south"), false);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("heat", "lit"), false);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("brewery:brew_whistle").with("facing", "south"), false);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("brewery:brew_whistle").with("half", "upper").with("facing", "south"), false);
        global.showPonderLayer(scene, 0, 1);

        scene.idle(10);

        scene.text(80, "The brewing process is an active one, and the faster you fix issues in the brewing, the higher output you'll get.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(80, "The basin needs a constant supply of water, and sometimes drains", [1, 2, 2])

        let basin = util.select.fromTo(1, 1, 2, 1, 1, 2)
        scene.overlay.showOutline(PonderPalette.GREEN, "block", basin, 30)

        scene.idle(10);

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "drained"), false);

        scene.idle(60);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('minecraft:water_bucket')

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "filled"), false);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(80, "The basin may also overflow, requiring you to take out some water", [1, 2, 2])

        scene.idle(10);

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "overflowing"), false);

        scene.idle(60);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('minecraft:bucket')

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "filled"), false);

        scene.idle(60);

        scene.addLazyKeyframe();

        let oven = util.select.fromTo(2, 1, 1, 2, 1, 1)
        scene.overlay.showOutline(PonderPalette.GREEN, "block", oven, 30)

        scene.text(80, "Like the basin, the oven portion may run out of fuel", [2, 2, 1])

        scene.idle(10);

        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("heat", "weak"), false);

        scene.idle(60);

        scene.showControls(35, [2, 2, 1], "down").rightClick().withItem('minecraft:coal')

        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("heat", "lit"), false);

        scene.idle(60);

        scene.addLazyKeyframe();

        let timer = util.select.fromTo(1, 1, 1, 1, 1, 1)
        scene.overlay.showOutline(PonderPalette.GREEN, "block", timer, 30)

        scene.text(80, "Finally, the timer portion of the brewingstation may need to be reset with a right click", [2, 2, 2])

        scene.idle(10);

        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south").with("time", true), false);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south").with("activated", true), false);

        scene.idle(60);

        scene.showControls(35, [1, 2, 1], "down").rightClick()

        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south"), false);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.overlay.showOutline(PonderPalette.GREEN, "block", basin, 30)
        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "beer"), false);

        scene.text(80, "Once finished, you can take your beer out with a Beer Mugs!", [1, 2, 2])

        scene.idle(70);

        scene.showControls(35, [1, 2, 3], "down").rightClick().withItem('brewery:beer_mug')

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south").with("liquid", "empty"), false);

        scene.idle(60);

    });

    e.create(["brewery:wooden_brewingstation", "brewery:copper_brewingstation", "brewery:netherite_brewingstation"]).scene('brewingstation_scene_three', "Brewingstation Tiers", (scene) => {

        scene.showBasePlate();
        scene.world.setBlocks([1, 1, 2], "brewery:wooden_brewingstation");
        scene.world.setBlocks([1, 1, 1], "brewery:brew_timer");
        scene.world.setBlocks([2, 1, 1], "brewery:brew_oven");
        scene.world.setBlocks([2, 1, 2], "brewery:brew_whistle");
        scene.world.setBlocks([2, 2, 2], "brewery:brew_whistle");

        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:wooden_brewingstation").with("facing", "south"), false);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south"), false);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south"), false);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("brewery:brew_whistle").with("facing", "south"), false);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("brewery:brew_whistle").with("half", "upper").with("facing", "south"), false);
        global.showPonderLayer(scene, 0, 1);

        scene.idle(10);

        scene.text(60, "There are three tiers of Brewingstation:")

        scene.idle(70);

        scene.text(70, "Wooden is the starter tier, and can only brew beers.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.world.setBlocks([1, 1, 2], "brewery:copper_brewingstation");
        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:copper_brewingstation").with("facing", "south").with("material", "copper"), true);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south").with("material", "copper"), true);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("material", "copper"), true);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("brewery:brew_whistle").with("facing", "south").with("material", "copper"), true);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("brewery:brew_whistle").with("half", "upper").with("material", "copper").with("facing", "south"), true);

        scene.text(60, "Copper is the second tier, capable of brewing spirits and beers.")

        scene.idle(70);

        scene.text(60, "It can be purchased from the Gourmand decree.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.world.setBlocks([1, 1, 2], "brewery:netherite_brewingstation");
        scene.world.modifyBlock([1, 1, 2], () => Block.id("brewery:netherite_brewingstation").with("facing", "south").with("material", "netherite"), true);
        scene.world.modifyBlock([1, 1, 1], () => Block.id("brewery:brew_timer").with("facing", "south").with("material", "netherite"), true);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("brewery:brew_oven").with("facing", "south").with("material", "netherite"), true);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("brewery:brew_whistle").with("facing", "south").with("material", "netherite"), true);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("brewery:brew_whistle").with("half", "upper").with("material", "netherite").with("facing", "south"), true);

        scene.idle(10);

        scene.text(80, "Reinforced is the final tier. It can brew every drink, and the brewing minigame is optional.")

        scene.idle(80);

    });
});