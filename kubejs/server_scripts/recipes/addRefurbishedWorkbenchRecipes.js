console.info("[SOCIETY] addRefurbishedWorkbenchRecipes.js loaded");

ServerEvents.recipes((e) => {
  Ingredient.of("@fantasyfurniture").stacks.forEach((item) => {
    if (item.toString().includes("furniture_station")) return;
    e.custom({
      type: "tanukidecor:diy",
      result: {
        item: item.id,
      },
    });
  });

  global.lootFurniture.forEach((item) => {
    e.custom({
      type: "tanukidecor:diy",
      result: {
        item: item,
      },
    });
  });
});
