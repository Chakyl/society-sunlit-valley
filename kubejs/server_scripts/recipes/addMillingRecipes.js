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
  addKnifeRecipe("farm_and_charm:barley", "society:animal_feed", 2);
  addKnifeRecipe("farm_and_charm:corn", "society:animal_feed", 4);
  addKnifeRecipe("farm_and_charm:oat", "society:animal_feed", 6);
  addKnifeRecipe("minecraft:wheat", "society:animal_feed", 8);
  addMillRecipe("farm_and_charm:barley_ball", "society:animal_feed_sack", 2);
  addMillRecipe("farm_and_charm:corn_bag", "society:animal_feed_sack", 4);
  addMillRecipe("farm_and_charm:oat_ball", "society:animal_feed_sack", 6);
  addMillRecipe("minecraft:hay_block", "society:animal_feed_sack", 8);
  addMillRecipe("society:animal_feed_sack", "society:animal_feed", 9);

  addMillRecipe('farm_and_charm:barley', 'farm_and_charm:flour', 1);
  addMillRecipe('farm_and_charm:corn', 'farm_and_charm:flour', 3);
  addMillRecipe('farm_and_charm:oat','farm_and_charm:flour', 6);
  addMillRecipe('minecraft:wheat', 'farm_and_charm:flour', 9);
  addMillRecipe('society:sparkstone', 'society:sparkstone_dust', 1);
});
