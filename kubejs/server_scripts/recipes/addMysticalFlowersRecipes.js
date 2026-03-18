console.info("[SOCIETY] addMysticalFlowerRecipes.js loaded");

ServerEvents.recipes((e) => {
    global.COLORS.forEach((color) => {
        const ingredientItemString = `botania:${color}_petal`;
        const outputItemString = `botania:${color}_double_flower`;
        const reagentItemString = "minecraft:wheat_seeds";
        e.custom({
            type: "botania:petal_apothecary",
            ingredients: [
                { item: ingredientItemString },
                { item: ingredientItemString },
                { item: ingredientItemString },
                { item: ingredientItemString },
            ],
            output: {
                item: outputItemString,
                count: 1,
            },
            reagent: {
                item: reagentItemString,
            }
        });
    });
});
