console.info("[SOCIETY] addMillingRecipes.js loaded");

ServerEvents.recipes((e) => {
  const addKnifeRecipe = (input, output, outputCount) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [{ item: input }],
      tool: { tag: "forge:tools/knives" },
      result: [{ item: output, count: outputCount }],
    });
  };
  const addMillRecipe = (input, output, outputCount) => {
    e.custom({
      type: "create:milling",
      ingredients: [
        {
          item: input,
        },
      ],
      processingTime: 400,
      results: [
        {
          count: outputCount,
          item: output,
        },
      ],
    });
    e.custom({
      type: "farm_and_charm:mincer",
      ingredient: {
        item: input,
      },
      recipe_type: "STONE",
      result: {
        count: outputCount,
        item: output,
      },
    });
  };
  addKnifeRecipe("farm_and_charm:barley", "society:animal_feed", 3);
  addKnifeRecipe("farm_and_charm:corn", "society:animal_feed", 7);
  addKnifeRecipe("minecraft:wheat", "society:animal_feed", 12);
  addMillRecipe("farm_and_charm:barley_ball", "society:animal_feed_sack", 3);
  addMillRecipe("farm_and_charm:corn_bag", "society:animal_feed_sack", 7);
  addMillRecipe("minecraft:hay_block", "society:animal_feed_sack", 12);
});
