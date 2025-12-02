const registerBECategory = (event, categoryID, block, title, inputCount, days) => {
  event.custom(`society:${categoryID}`, (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createDrawable("society:textures/gui/block_entity.png", 1, 1, 142, 42))
      .icon(guiHelper.createDrawableItemStack(Item.of(`society:${block}`)))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.input !== undefined && recipe?.data?.output !== undefined);
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics) => {
        let dayCount = recipe.getRecipeData().time || days;
        guiGraphics.drawWordWrap(
          Client.font,
          Text.of(dayCount < 1 ? "< than a day" : `${dayCount} day${dayCount > 1 ? "s" : ""}`),
          72,
          29,
          177,
          0
        );
      })
      .handleLookup((builder, recipe) => {
        const { input, output, fluidOutput } = recipe.data;
        const slotSize = 21;
        if (input.includes("#")) {
          builder
            .addSlot("INPUT", 2, 2)
            .addIngredients([Ingredient.of(input, 2)])
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        } else {
          builder
            .addSlot("INPUT", 2, 2)
            .addItemStack(`${output[0].includes("steamed_milk") ? 1 : inputCount}x ${input}`)
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        }
        builder.addSlot("CATALYST", 52, 2).addItemStack(`society:${block}`);
        if (fluidOutput && categoryID !== "tapping") {
          builder
            .addSlot("OUTPUT", 104, 2)
            .addFluidStack(`${fluidOutput}`)
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        } else {
          output.forEach((item, index) => {
            builder
              .addSlot("OUTPUT", 104 + index * slotSize, 2)
              .addItemStack(Item.of(`${item}`))
              .setBackground(guiHelper.getSlotDrawable(), -1, -1);
          });
        }
      });
  });
};

const registerFishPondCategory = (event, categoryID, block, title) => {
  event.custom(`society:${categoryID}`, (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createBlankDrawable(177, 61))
      .icon(guiHelper.createDrawableItemStack(Item.of(`society:${block}`)))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.item !== undefined);
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        global["textDrawHandler"](
          category.jeiHelpers,
          recipe,
          recipeSlotsView,
          guiGraphics,
          mouseX,
          mouseY
        );
      })
      .handleLookup((builder, recipe) => {
        const { item, additionalRewards } = recipe.data;
        let fishId = item.path;
        if (fishId.includes("raw_")) {
          if (fishId === "raw_snowflake") fishId = "frosty_fin";
          else fishId = fishId.substring(4, fishId.length);
        }
        const outputs = [
          {
            item: `society:${fishId}_roe`,
            count: 1,
          },
        ].concat(additionalRewards || []);
        const slotSize = 21;
        builder
          .addSlot("CATALYST", 2, 28)
          .addItemStack(`society:fish_pond`)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("INPUT", 2, 2)
          .addItemStack(`${item}`)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        global["textDrawHandler"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics) => {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of("Hover over items for more info."),
            2,
            49,
            177,
            0
          );
        };
        outputs.forEach((reward, index) => {
          const line = index > 6 ? 28 : 2;
          builder
            .addSlot("OUTPUT", 26 + (index > 6 ? index - 7 : index) * slotSize, line)
            .addItemStack(Item.of(`${reward.count}x ${reward.item}`))
            .addTooltipCallback((slotView, tooltip) => {
              if (reward.minPopulation) {
                tooltip.add(1, Text.aqua(`${reward.minPopulation}+ 🐟 population required`));
              }
              if (reward.chance) {
                tooltip.add(2, Text.gold(`${Math.round(reward.chance * 100)}% chance`));
              }
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        });
      });
  });
};
JEIAddedEvents.registerCategories((e) => {
  registerBECategory(e, "seed_making", "seed_maker", "Seed Making", 3, 1);
  registerBECategory(e, "preserving", "preserves_jar", "Preserving", 5, 3);
  registerBECategory(e, "wine_making", "wine_keg", "Wine Making", 3, 6);
  registerBECategory(e, "bait_upgrading", "deluxe_worm_farm", "Bait Upgrading", 4, 0.5);
  registerBECategory(e, "cask_aging", "aging_cask", "Cask Aging", 1, 10);
  registerBECategory(
    e,
    "artisanal_cheese_pressing",
    "cheese_press",
    "Artisanal Cheese Pressing",
    1,
    2
  );
  registerBECategory(e, "ancient_aging", "ancient_cask", "Ancient Aging", 1, 20);
  registerBECategory(e, "dehydrating", "dehydrator", "Dehydrating", 8, 1);
  registerBECategory(e, "fish_smoking", "fish_smoker", "Fish Smoking", 1, 2);
  registerBECategory(e, "bait_making", "bait_maker", "Bait Making", 1, 1);
  registerBECategory(e, "mayonnaise_making", "mayonnaise_machine", "Mayonnaise Making", 1, 1);
  registerBECategory(e, "loom_weaving", "loom", "Loom Weaving", 5, 1);
  registerBECategory(e, "crystal_growing", "crystalarium", "Crystal Growing", 1, 5);
  registerFishPondCategory(e, "fish_farming", "fish_pond", "Fish Farming");
  registerBECategory(e, "charging", "charging_rod", "Battery Making", 1, 5);
  registerBECategory(e, "espresso_brewing", "espresso_machine", "Espresso Brewing", 4, 0.5);
  registerBECategory(e, "goddess_offering", "ancient_goddess_statue", "Goddess Offering", 64, 0);
  registerBECategory(e, "recycling", "recycling_machine", "Recycling", 1, 1);
  registerBECategory(e, "tapping", "tapper", "Tapping", 1, 7);
  registerBECategory(e, "auto_tapping", "auto_tapper", "Auto-Tapping", 1, 0.5);
});

// JEI Catalysts broken on JEI version
// JEI Catalyst code broken on latest JEI version
// JEIAddedEvents.registerRecipeCatalysts((e) => {
//   let helper = e.data.getJeiHelpers();
//   e.data.addRecipeCatalyst(
//     Item.of("society:seed_maker"),
//     helper.getRecipeType("society:seed_making").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:preserves_jar"),
//     helper.getRecipeType("society:preserving").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:deluxe_worm_farm"),
//     helper.getRecipeType("society:bait_upgrading").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:aging_cask"),
//     helper.getRecipeType("society:cask_aging").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:fish_smoker"),
//     helper.getRecipeType("society:fish_smoking").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:mayonnaise_machine"),
//     helper.getRecipeType("society:mayonnaise_making").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:loom"),
//     helper.getRecipeType("society:loom_weaving").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:crystalarium"),
//     helper.getRecipeType("society:crystal_growing").get()
//   );
//   e.data.addRecipeCatalyst(
//     Item.of("society:fish_pond"),
//     helper.getRecipeType("society:fish_farming").get()
//   );
// });

JEIAddedEvents.registerRecipes((e) => {
  let recipe;
  Array.from(global.seedMakerRecipes.keys()).forEach((element) => {
    recipe = global.seedMakerRecipes.get(element);
    e.custom("society:seed_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.preservesJarRecipes.keys()).forEach((element) => {
    recipe = global.preservesJarRecipes.get(element);
    e.custom("society:preserving").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
    Array.from(global.wineKegRecipes.keys()).forEach((element) => {
    recipe = global.wineKegRecipes.get(element);
    e.custom("society:wine_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.deluxeWormFarmRecipes.keys()).forEach((element) => {
    recipe = global.deluxeWormFarmRecipes.get(element);
    e.custom("society:bait_upgrading").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.cheesePressRecipes.keys()).forEach((element) => {
    recipe = global.cheesePressRecipes.get(element);
    e.custom("society:artisanal_cheese_pressing").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.agingCaskRecipes.keys()).forEach((element) => {
    recipe = global.agingCaskRecipes.get(element);
    e.custom("society:cask_aging").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.ancientCaskRecipes.keys()).forEach((element) => {
    recipe = global.ancientCaskRecipes.get(element);
    e.custom("society:ancient_aging").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.dehydratorRecipes.keys()).forEach((element) => {
    recipe = global.dehydratorRecipes.get(element);
    e.custom("society:dehydrating").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.fishSmokerRecipes.keys()).forEach((element) => {
    recipe = global.fishSmokerRecipes.get(element);
    e.custom("society:fish_smoking").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.baitMakerRecipes.keys()).forEach((element) => {
    recipe = global.baitMakerRecipes.get(element);
    e.custom("society:bait_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.mayonnaiseMachineRecipes.keys()).forEach((element) => {
    recipe = global.mayonnaiseMachineRecipes.get(element);
    e.custom("society:mayonnaise_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.loomRecipes.keys()).forEach((element) => {
    recipe = global.loomRecipes.get(element);
    e.custom("society:loom_weaving").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.crystalariumCrystals.keys()).forEach((element) => {
    recipe = global.crystalariumCrystals.get(element);
    e.custom("society:crystal_growing").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.fishPondDefinitions.keys()).forEach((element) => {
    recipe = global.fishPondDefinitions.get(element);
    e.custom("society:fish_farming").add({
      item: element,
      additionalRewards: recipe.additionalRewards,
    });
  });
  e.custom("society:charging").add({ input: "", output: ["society:battery"] });
  Array.from(global.espressoMachineRecipes.keys()).forEach((element) => {
    recipe = global.espressoMachineRecipes.get(element);
    e.custom("society:espresso_brewing").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  [
    { input: "society:ancient_fruit", output: ["society:prismatic_shard"] },
    {
      input: "vintagedelight:ghost_pepper",
      output: ["16x society:sparkstone_block"],
    },
    {
      input: "farm_and_charm:corn",
      output: ["4x society:pristine_star_shards"],
    },
    { input: "snowyspirit:ginger", output: ["4x minecraft:netherite_scrap"] },
  ].forEach((element) => {
    e.custom("society:goddess_offering").add(element);
  });
  Array.from(global.recyclingMachineRecipes.keys()).forEach((element) => {
    recipe = global.recyclingMachineRecipes.get(element);
    e.custom("society:recycling").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.tapperRecipes.keys()).forEach((element) => {
    recipe = global.tapperRecipes.get(element);
    e.custom("society:tapping").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
  Array.from(global.tapperRecipes.keys()).forEach((element) => {
    recipe = global.tapperRecipes.get(element);
    e.custom("society:auto_tapping").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidData: recipe.fluidData,
    });
  });
});
