
global.cooking.forEach((dish) => {
    let category = "main";
    ["jam", "tart", "sorbet", "muffin", "candy", "candied", "pie", "cake", "cookie", "pudding", "jam", "jelly", "sweet", "tart", "chocolate", "snow", "gateau"].forEach((keyword) => {
        if (dish.item.path.includes(keyword)) category = "dessert"
    });

    ["bottle", "drink", "eggnog", "coffee", "latte", "_tea", "juice", "cider", "hot_chocolate"].forEach((keyword) => {
        if (dish.item.path.includes(keyword)) category = "drink"
    });

    JsonIO.write(`kubejs/data/cozycafe/menu/${dish.item.replace(":", "_")}.json`,
        {
            "item": dish.item,
            "category": category,
            "price": dish.value,
            "flavors": [],
            "themes": []
        });
});

