const registerLootCategory = (event, title) => {
  event.custom("society:loot_box", (category) => {
    const {
      jeiHelpers: { guiHelper },
    } = category;
    category
      .title(title)
      .background(guiHelper.createBlankDrawable(144, 148))
      .icon(guiHelper.createDrawableItemStack(Item.of("society:furniture_box")))
      .isRecipeHandled((recipe) => {
        return !!(recipe?.data?.input !== undefined && recipe?.data?.outputs !== undefined);
      })
      .handleLookup((builder, recipe) => {
        const { input, outputs } = recipe.data;
        const slotSize = 18;
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
  registerLootCategory(e, Text.translatable("jei.society.category.loot_box"));
});
const addLootBoxRecipes = (e, input, outptTag) => {
  let output = [];
  let fullOutputList = Ingredient.of(outptTag).itemIds;

  for (let i = 0; i < fullOutputList.length; i++) {
    if (i > 0 && i % 56 === 0) {
      e.custom("society:loot_box").add({
        input: input,
        outputs: output,
      });
      output = [];
    }
    output.push(fullOutputList[i]);
  }
  e.custom("society:loot_box").add({
    input: input,
    outputs: output,
  });
};
JEIAddedEvents.registerRecipes((e) => {
  addLootBoxRecipes(e, "society:furniture_box", "#society:loot_furniture");
  const fantasyBoxes = ["nordic", "dunmer", "venthyr", "bone", "royal", "necrolord"];
  fantasyBoxes.forEach((theme) => {
    addLootBoxRecipes(e, `society:fantasy_box_${theme}`, `#society:${theme}_fantasy_furniture`);
  });
  addLootBoxRecipes(e, "society:plushie_capsule", "#society:plushies");
  addLootBoxRecipes(e, "society:bouquet_bag", "#society:bouquet_bag_flowers");
});
