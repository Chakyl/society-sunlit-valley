const registerMilkingCategory = (event, equipment, title) => {
  event.custom("society:milking", (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createDrawable("society:textures/gui/milking.png", 1, 1, 148, 40))
      .icon(guiHelper.createDrawableItemStack(Item.of(equipment)))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.animal !== undefined);
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics) => {
        guiGraphics.drawWordWrap(
          Client.font,
          Text.of(
            `Milking cooldown: ${recipe.getRecipeData().cooldown} day${
              recipe.getRecipeData().cooldown > 1 ? "s" : ""
            }`
          ),
          2,
          26,
          177,
          0
        );
      })
      .handleLookup((builder, recipe) => {
        const { animal, milk } = recipe.data;
        const outputs = [
          {
            item: milk.sm,
            count: 1,
          },
          {
            item: milk.lg,
            count: 1,
          },
        ];
        const slotSize = 21;
        builder
          .addSlot("CATALYST", 48, 2)
          .addItemStack(equipment)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("INPUT", 2, 2)
          .addItemStack(`${animal}_spawn_egg`)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        outputs.forEach((reward, index) => {
          builder
            .addSlot("OUTPUT", 104 + index * slotSize, 2)
            .addItemStack(Item.of(`${reward.count}x ${reward.item}`))
            .addTooltipCallback((slotView, tooltip) => {
              if (index == 0) {
                tooltip.add(1, Text.lightPurple(`1-5 ❤ affection required`));
              } else {
                tooltip.add(1, Text.lightPurple(`6+ ❤ affection required`));
              }
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        });
      });
  });
};

const registerForagingCategory = (event, title) => {
  event.custom("society:foraging", (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createDrawable("society:textures/gui/foraging.png", 1, 1, 174, 40))
      .icon(guiHelper.createDrawableItemStack(Item.of("society:truffle")))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.animal !== undefined);
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
        const { animal, forages } = recipe.data;
        const slotSize = 21;
        builder
          .addSlot("INPUT", 2, 2)
          .addItemStack(`${animal}_spawn_egg`)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        global["textDrawHandler"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics) => {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of("Hover over items for more info."),
            2,
            28,
            177,
            0
          );
        };
        forages.forEach((forage, index) => {
          if (forage.itemPool) {
            forage.itemPool.forEach((poolItem, poolIndex) => {
              // Keep itemPool forages at end of pool to ensure calculation correct
              builder
                .addSlot("OUTPUT", 50 + (index + poolIndex) * slotSize, 2)
                .addItemStack(Item.of(`${forage.countMult}x ${poolItem}`))
                .addTooltipCallback((slotView, tooltip) => {
                  tooltip.add(1, Text.lightPurple(`${forage.minHearts}+ ❤ affection required`));
                  tooltip.add(2, Text.gold(`Part of an item pool:`));
                  tooltip.add(
                    3,
                    Text.gold(` ${Math.round(forage.chance * 100)}% chance to roll the pool`)
                  );
                  tooltip.add(
                    4,
                    Text.gold(
                      ` ${Math.round((1 / forage.itemPool.length) * 100)}% chance to be selected`
                    )
                  );
                  if (forage.hasQuality) {
                    tooltip.add(5, Text.green("Affection raises quality"));
                  }
                })
                .setBackground(guiHelper.getSlotDrawable(), -1, -1);
            });
          } else {
            builder
              .addSlot("OUTPUT", 50 + index * slotSize, 2)
              .addItemStack(Item.of(`${forage.countMult}x ${forage.item}`))
              .addTooltipCallback((slotView, tooltip) => {
                tooltip.add(1, Text.lightPurple(`${forage.minHearts}+ ❤ affection required`));
                tooltip.add(2, Text.gold(`${Math.round(forage.chance * 100)}% chance`));
                if (forage.hasQuality) {
                  tooltip.add(3, Text.green("Affection raises quality"));
                }
              })
              .setBackground(guiHelper.getSlotDrawable(), -1, -1);
          }
        });
      });
  });
};

const registerGiftCategory = (event, title) => {
  event.custom("society:pet_gifts", (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createDrawable("society:textures/gui/gifting.png", 1, 1, 174, 40))
      .icon(guiHelper.createDrawableItemStack(Item.of("supplementaries:present_magenta")))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.animal !== undefined);
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
        const { animal, gifts } = recipe.data;
        const slotSize = 21;
        builder
          .addSlot("INPUT", 2, 2)
          .addItemStack(`${animal}_spawn_egg`)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        global["textDrawHandler"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics) => {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of("Hover over items for more info."),
            2,
            28,
            177,
            0
          );
        };
        gifts.forEach((item, index) => {
          builder
            .addSlot("OUTPUT", 50 + index * slotSize, 2)
            .addItemStack(Item.of(`1x ${item}`))
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(1, Text.lightPurple(`At 10 ❤ affection`));
              tooltip.add(
                2,
                Text.gold(`${Math.round((1 / gifts.length) * 100)}% chance to be selected`)
              );
            })
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        });
      });
  });
};

JEIAddedEvents.registerCategories((e) => {
  registerMilkingCategory(e, "society:milk_pail", "Milking");
  registerForagingCategory(e, "Farm Animal Foraging");
  registerGiftCategory(e, "Pet Gifts");
});

JEIAddedEvents.registerRecipes((e) => {
  global.husbandryMilkingDefinitions.forEach((element) => {
    e.custom("society:milking").add(element);
  });
  global.husbandryForagingDefinitions.forEach((element) => {
    e.custom("society:foraging").add(element);
  });
  global.petGifts.forEach((element) => {
    e.custom("society:pet_gifts").add(element);
  });
});
