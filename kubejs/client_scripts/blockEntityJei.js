const registerBECategory = (
  event,
  categoryID,
  block,
  title,
  inputCount,
  days
) => {
  event.custom(`society:${categoryID}`, (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(
        guiHelper.createDrawable(
          "society:textures/gui/block_entity.png",
          1,
          1,
          142,
          42
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of(`society:${block}`)))
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input !== undefined &&
          recipe?.data?.output !== undefined
        );
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics) => {
        let dayCount = recipe.getRecipeData().time || days;
        guiGraphics.drawWordWrap(
          Client.font,
          dayCount < 1
            ? Text.translatable("jei.society.working_block_entity.short")
            : dayCount > 1
              ? Text.translatable("jei.society.working_block_entity.days", `${dayCount}`)
              : Text.translatable("jei.society.working_block_entity.day", `${dayCount}`),
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
            .addItemStack(
              `${output[0].includes("steamed_milk") ? 1 : inputCount}x ${input}`
            )
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

const registerMushroomLogCategory = (
  event,
  categoryID,
  title
) => {
  event.custom(`society:${categoryID}`, (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(
        guiHelper.createDrawable(
          "society:textures/gui/block_entity.png",
          1,
          1,
          142,
          42
        )
      )
      .icon(guiHelper.createDrawableItemStack(Item.of(`society:mushroom_log`)))
      .isRecipeHandled((recipe) => {
        return !!(
          recipe?.data?.input !== undefined &&
          recipe?.data?.output !== undefined
        );
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics) => {
        guiGraphics.drawWordWrap(
          Client.font,
          Text.translatable("jei.society.working_block_entity.days", 4),
          72,
          29,
          177,
          0
        );
      })
      .handleLookup((builder, recipe) => {
        const { input, output } = recipe.data;
        const slotSize = 21;
        const isStrong = global.dominantMushroomLogBlocks.get(input) !== undefined
        if (isStrong) {
          builder
            .addSlot("INPUT", 2, 2)
            .addItemStack(
              `1x ${input}`
            )
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(1,
                Text.translatable(`jei.society.mushroom_growing.strong`).darkGreen()
              );
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        } else {
          builder
            .addSlot("INPUT", 2, 2)
            .addItemStack(
              `1x ${input}`
            )
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(1,
                Text.translatable(`jei.society.mushroom_growing.weak`).aqua()
              );
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        }
        builder.addSlot("CATALYST", 52, 2).addItemStack(`society:mushroom_log`);
        output.forEach((item, index) => {
          builder
            .addSlot("OUTPUT", 104 + index * slotSize, 2)
            .addItemStack(Item.of(`${item}`))
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(1,
                Text.translatable("jei.society.mushroom_growing.mult").green()
              );
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        });

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
      .setDrawHandler(
        (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
          global["textDrawHandler"](
            category.jeiHelpers,
            recipe,
            recipeSlotsView,
            guiGraphics,
            mouseX,
            mouseY
          );
        }
      )
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
        global["textDrawHandler"] = (
          jeiHelpers,
          recipe,
          recipeSlotsView,
          guiGraphics
        ) => {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.translatable("jei.society.working_block_entity.item"),
            2,
            49,
            177,
            0
          );
        };
        outputs.forEach((reward, index) => {
          const line = index > 6 ? 28 : 2;
          builder
            .addSlot(
              "OUTPUT",
              26 + (index > 6 ? index - 7 : index) * slotSize,
              line
            )
            .addItemStack(Item.of(`${reward.count}x ${reward.item}`))
            .addTooltipCallback((slotView, tooltip) => {
              if (reward.minPopulation) {
                tooltip.add(1,
                  Text.translatable("jei.society.fish_farming.population", `${reward.minPopulation}`).aqua()
                );
              }
              if (reward.chance) {
                tooltip.add(2,
                  Text.translatable("jei.society.husbandry.chance", `${Math.round(reward.chance * 100)}`).gold()
                );
              }
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        });
      });
  });
};
JEIAddedEvents.registerCategories((e) => {
  registerBECategory(e, "seed_making", "seed_maker", Text.translatable("jei.society.category.seed_making"), 3, 1);
  registerBECategory(e, "preserving", "preserves_jar", Text.translatable("jei.society.category.preserving"), 5, 3);
  registerBECategory(e, "wine_making", "wine_keg", Text.translatable("jei.society.category.wine_making"), 3, 6);
  registerBECategory(e,
    "bait_upgrading",
    "deluxe_worm_farm",
    Text.translatable("jei.society.category.bait_upgrading"),
    4,
    0.5
  );
  registerBECategory(e, "cask_aging", "aging_cask", Text.translatable("jei.society.category.cask_aging"), 1, 10);
  registerBECategory(
    e,
    "artisanal_cheese_pressing",
    "cheese_press",
    Text.translatable("jei.society.category.artisanal_cheese_pressing"),
    1,
    2
  );
  registerBECategory(e,
    "ancient_aging",
    "ancient_cask",
    Text.translatable("jei.society.category.ancient_aging"),
    1,
    20
  );
  registerMushroomLogCategory(e, "mushroom_growing", Text.translatable("jei.society.category.mushroom_growing"));
  registerBECategory(e, "dehydrating", "dehydrator", Text.translatable("jei.society.category.dehydrating"), 8, 1);
  registerBECategory(e, "fish_smoking", "fish_smoker", Text.translatable("jei.society.category.fish_smoking"), 1, 2);
  registerBECategory(e, "bait_making", "bait_maker", Text.translatable("jei.society.category.bait_making"), 1, 1);
  registerBECategory(e,
    "mayonnaise_making",
    "mayonnaise_machine",
    Text.translatable("jei.society.category.mayonnaise_making"),
    1,
    1
  );
  registerBECategory(e, "loom_weaving", "loom", Text.translatable("jei.society.category.loom_weaving"), 5, 1);
  registerBECategory(e,
    "crystal_growing",
    "crystalarium",
    Text.translatable("jei.society.category.crystal_growing"),
    1,
    5
  );
  registerFishPondCategory(e, "fish_farming", "fish_pond", Text.translatable("jei.society.category.fish_farming"));
  registerBECategory(e, "charging", "charging_rod", Text.translatable("jei.society.category.charging"), 1, 5);
  registerBECategory(e,
    "espresso_brewing",
    "espresso_machine",
    Text.translatable("jei.society.category.espresso_brewing"),
    4,
    0.5
  );
  registerBECategory(e,
    "goddess_offering",
    "ancient_goddess_statue",
    Text.translatable("jei.society.category.goddess_offering"),
    64,
    0
  );
  registerBECategory(e, "recycling", "recycling_machine", Text.translatable("jei.society.category.recycling"), 1, 1);
  registerBECategory(e, "oil_making", "oil_maker", Text.translatable("jei.society.category.oil_making"), 1, 1);
  registerBECategory(e, "tapping", "tapper", Text.translatable("jei.society.category.tapping"), 1, 7);
  registerBECategory(e, "auto_tapping", "auto_tapper", Text.translatable("jei.society.category.auto_tapping"), 1, 0.5);
  registerBECategory(e, "pickling", "pickling_can", Text.translatable("jei.society.category.pickling"), 1, 0.5);
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
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.preservesJarRecipes.keys()).forEach((element) => {
    recipe = global.preservesJarRecipes.get(element);
    e.custom("society:preserving").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.wineKegRecipes.keys()).forEach((element) => {
    recipe = global.wineKegRecipes.get(element);
    e.custom("society:wine_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.deluxeWormFarmRecipes.keys()).forEach((element) => {
    recipe = global.deluxeWormFarmRecipes.get(element);
    e.custom("society:bait_upgrading").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.cheesePressRecipes.keys()).forEach((element) => {
    recipe = global.cheesePressRecipes.get(element);
    e.custom("society:artisanal_cheese_pressing").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.agingCaskRecipes.keys()).forEach((element) => {
    recipe = global.agingCaskRecipes.get(element);
    e.custom("society:cask_aging").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.ancientCaskRecipes.keys()).forEach((element) => {
    recipe = global.ancientCaskRecipes.get(element);
    e.custom("society:ancient_aging").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.dehydratorRecipes.keys()).forEach((element) => {
    recipe = global.dehydratorRecipes.get(element);
    e.custom("society:dehydrating").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.fishSmokerRecipes.keys()).forEach((element) => {
    recipe = global.fishSmokerRecipes.get(element);
    e.custom("society:fish_smoking").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.baitMakerRecipes.keys()).forEach((element) => {
    recipe = global.baitMakerRecipes.get(element);
    e.custom("society:bait_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.mayonnaiseMachineRecipes.keys()).forEach((element) => {
    recipe = global.mayonnaiseMachineRecipes.get(element);
    e.custom("society:mayonnaise_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.loomRecipes.keys()).forEach((element) => {
    recipe = global.loomRecipes.get(element);
    e.custom("society:loom_weaving").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.crystalariumCrystals.keys()).forEach((element) => {
    recipe = global.crystalariumCrystals.get(element);
    e.custom("society:crystal_growing").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.mushroomLogRecipes.keys()).forEach((element) => {
    recipe = global.mushroomLogRecipes.get(element);
    e.custom("society:mushroom_growing").add({
      input: element,
      output: recipe.output,
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
      fluidOutput: recipe.fluidOutput,
    });
  });
  [
    { input: "society:ancient_fruit", output: ["society:prismatic_shard"] },
    {
      input: "vintagedelight:ghost_pepper",
      output: ["64x society:sparkstone"],
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
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.oilMakerRecipes.keys()).forEach((element) => {
    recipe = global.oilMakerRecipes.get(element);
    e.custom("society:oil_making").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.tapperRecipes.keys()).forEach((element) => {
    recipe = global.tapperRecipes.get(element);
    e.custom("society:tapping").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.tapperRecipes.keys()).forEach((element) => {
    recipe = global.tapperRecipes.get(element);
    e.custom("society:auto_tapping").add({
      input: element,
      output: recipe.output,
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
  Array.from(global.picklingRecipes.keys()).forEach((element) => {
    recipe = global.picklingRecipes.get(element);
    e.custom("society:pickling").add({
      input: element,
      output: [recipe.pickle],
      time: recipe.time,
      fluidOutput: recipe.fluidOutput,
    });
  });
});
