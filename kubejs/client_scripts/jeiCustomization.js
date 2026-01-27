JEIAddedEvents.registerCategories((e) => {
  const guiHelper = e.data.jeiHelpers.guiHelper;
  e.custom("vinery:manual_juicing", (category) => {
    category
      .title(Text.translatable("jei.society.category.manual_juicing"))
      .background(guiHelper.createBlankDrawable(177, 60))
      .icon(guiHelper.createDrawableItemStack("vinery:grapevine_pot"))
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe) => {
        const { grape, juice } = recipe.data;
        builder
          .addSlot("input", 27, 38)
          .addItemStack(Item.of(grape))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder.addSlot("input", 90, 38).addItemStack("vinery:grapevine_pot");
        builder
          .addSlot("input", 90, 24)
          .addItemStack("vinery:wine_bottle")
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("output", 132, 38)
          .addItemStack(Item.of(juice))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
      });
  });
  e.custom("society:enriched_bone_mealing", (category) => {
    category
      .title(Text.translatable("jei.society.category.enriched_bone_mealing"))
      .background(guiHelper.createBlankDrawable(177, 20))
      .icon(guiHelper.createDrawableItemStack("society:enriched_bone_meal"))
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe) => {
        const { crop, bonemealTarget } = recipe.data;
        builder
          .addSlot("input", 27, 2)
          .addItemStack(Item.of(bonemealTarget))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("input", 63, 2)
          .addItemStack(Item.of("society:enriched_bone_meal"))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("output", 132, 2)
          .addItemStack(Item.of(crop))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
      });
  });
  e.custom("society:furniture_catalog", (category) => {
    category
      .title(Text.translatable("jei.society.category.furniture_catalog"))
      .background(guiHelper.createBlankDrawable(177, 20))
      .icon(guiHelper.createDrawableItemStack("society:tanuki_catalog"))
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe) => {
        const { catalog, cost, output } = recipe.data;
        builder
          .addSlot("input", 27, 2)
          .addItemStack(Item.of(catalog))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("input", 63, 2)
          .addItemStack(Item.of(cost))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("output", 132, 2)
          .addItemStack(Item.of(output))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
      });
  });
  e.custom("herbalbrews:tea_drying", (category) => {
    category
      .title(Text.translatable("jei.society.category.tea_drying"))
      .background(guiHelper.createDrawable("society:textures/gui/drying.png", 1, 1, 122, 48))
      .icon(guiHelper.createDrawableItemStack("herbalbrews:green_tea_leaf"))
      .isRecipeHandled(() => true)
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics) => {
        guiGraphics.drawWordWrap(
          Client.font,
          Text.translatable("jei.society.tea_drying"),
          2,
          36,
          177,
          0
        );
      })
      .handleLookup((builder, recipe) => {
        const { input, output } = recipe.data;
        builder
          .addSlot("input", 20, 14)
          .addItemStack(Item.of(input))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("output", 84, 14)
          .addItemStack(Item.of(output))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
      });
  });
});

JEIAddedEvents.registerRecipes((e) => {
  const nether = ["crimson", "warped"];
  const juiceJEIRecipe = (juice, grape) => {
    e.custom("vinery:manual_juicing").add({
      grape: `6x ${nether.includes(juice) ? "nethervinery" : "vinery"}:${grape}`,
      juice: `2x ${nether.includes(juice) ? "nethervinery" : "vinery"}:${juice}_grapejuice`,
    });
  };

  const grapeJuices = [
    "red",
    "red_savanna",
    "red_jungle",
    "red_taiga",
    "white",
    "white_savanna",
    "white_jungle",
    "white_taiga",
    "crimson",
    "warped",
  ];
  const grapes = [
    "red_grape",
    "savanna_grapes_red",
    "jungle_grapes_red",
    "taiga_grapes_red",
    "white_grape",
    "savanna_grapes_white",
    "jungle_grapes_white",
    "taiga_grapes_white",
    "crimson_grape",
    "warped_grape",
  ];

  grapeJuices.forEach((juice, index) => {
    if (juice.includes("red")) {
      juiceJEIRecipe("red", grapes[index]);
    } else if (juice.includes("white")) {
      juiceJEIRecipe("white", grapes[index]);
    } else {
      juiceJEIRecipe(juice, grapes[index]);
    }
  });

  const cropDupes = [
    { crop: "minecraft:glow_berries" },
    { crop: "herbalbrews:lavender" },
    { crop: "herbalbrews:hibiscus" },
    { crop: "farm_and_charm:wild_ribwort" },
    { crop: "farm_and_charm:wild_nettle" },
    { crop: "vinery:cherry", bonemealTarget: "vinery:dark_cherry_leaves" },
    { crop: "minecraft:apple", bonemealTarget: "vinery:apple_leaves" },
  ].forEach((item) => {
    const { crop, bonemealTarget } = item;
    e.custom("society:enriched_bone_mealing").add({
      crop: crop,
      bonemealTarget: bonemealTarget || crop,
    });
  });

  [
    {
      catalog: "society:tanuki_catalog",
      cost: "2x numismatics:crown",
      output: "society:tanuki_leaf",
    },
    {
      catalog: "society:modern_catalog",
      cost: "6x numismatics:crown",
      output: "society:architects_digest",
    },
    {
      catalog: "society:fantasy_catalog",
      cost: "4x numismatics:crown",
      output: "society:fantasy_dust",
    },
    {
      catalog: "whimsy_deco:gatcha_machine",
      cost: "1x numismatics:sun",
      output: "society:plushie_capsule",
    },
  ].forEach((item) => {
    e.custom("society:furniture_catalog").add(item);
  });

  [
    {
      input: "herbalbrews:green_tea_leaf_block",
      output: "herbalbrews:dried_out_green_tea_leaf_block",
    },
    {
      input: "herbalbrews:dried_green_tea_leaf_block",
      output: "herbalbrews:black_tea_leaf_block",
    },
    {
      input: "herbalbrews:mixed_tea_leaf_block",
      output: "herbalbrews:oolong_tea_leaf_block",
    },
  ].forEach((item) => {
    e.custom("herbalbrews:tea_drying").add(item);
  });
});
// // JEI Catalysts broken on JEI version
// JEIAddedEvents.registerRecipeCatalysts((e) => {
//   let helper = e.data.getJeiHelpers();
//   let recipeType = helper.getRecipeType("vinery:manual_juicing");
//   e.data.addRecipeCatalyst(Item.of("vinery:grapevine_pot"), recipeType.get());
//   e.data.addRecipeCatalyst(
//     "nethervinery:crimson_grapevine_pot",
//     recipeType.get()
//   );
//   e.data.addRecipeCatalyst(
//     "nethervinery:warped_grapevine_pot",
//     recipeType.get()
//   );
//   e.data.addRecipeCatalyst(
//     "society:enriched_bone_meal",
//     "society:enriched_bone_mealing"
//   );
// });

JEIEvents.removeCategories((e) => {
  e.remove("waystones:warp_plate");
  e.remove("farm_and_charm:cooking_pot");
  e.remove("meadow:woodcutting");
  e.remove("trading_floor:potential_villager_trade");
});
