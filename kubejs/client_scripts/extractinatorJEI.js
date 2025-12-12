const registerExtractingCategory = (event, title) => {
  event.custom("society:extracting", (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createBlankDrawable(144, 144))
      .icon(guiHelper.createDrawableItemStack(Item.of("extractinator:extractinator")))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.input !== undefined && recipe?.data?.outputs !== undefined);
      })
      .handleLookup((builder, recipe) => {
        const { input, outputs } = recipe.data;
        const slotSize = 18;
        builder
          .addSlot("CATALYST", 55, 2)
          .addItemStack(Item.of("extractinator:extractinator"))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("INPUT", 73, 2)
          .addItemStack(input)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 7; j++) {
            let index = 8 * j + i;
            if (outputs.length > index) {
              builder
                .addSlot("OUTPUT", i * slotSize + 1, j * slotSize + 21)
                .addItemStack(Item.of(`1x ${outputs[index]}`))
                .setBackground(guiHelper.getSlotDrawable(), -1, -1);
            }
          }
        }
      });
  });
};
JEIAddedEvents.registerCategories((e) => {
  registerExtractingCategory(e, Text.translatable("jei.society.category.extracting"));
});

JEIAddedEvents.registerRecipes((e) => {
  global.extractinatorRecipes.forEach((element) => {
    const outputMap = element.output.map((item) => item.drop);
    let drops = [];
    outputMap.forEach((drop) => {
      Ingredient.of(drop).itemIds.forEach((element) => {
        drops.push(element);
      });
    });
    e.custom("society:extracting").add({
      input: element.input,
      outputs: drops,
    });
  });
});
