console.info("[SOCIETY] addPicklingRecipes.js loaded");

ServerEvents.recipes((e) => {
  global.picklableVegetables.forEach((pickle) => {
    e.custom({
      type: "vintagedelight:fermenting",
      processingTime: 10000,
      ingredients: [
        { item: pickle.item },
        { item: pickle.item },
        { item: pickle.item },
        { item: pickle.item },
        { item: pickle.item },
        { tag: "forge:salt" },
      ],
      output: {
        count: 5,
        item: `society:pickled_${pickle.item.path}`,
      },
    });
  });
});
