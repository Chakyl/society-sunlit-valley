console.info("[SOCIETY] addDoubleMysticalFlowerRecipes.js loaded");

// Botania's vanilla way of making tall (double) mystical flowers - planting a
// petal and bonemealing it - is disabled in the pack (see
// blockEvents/disableQuarkMysticalFlowers.js), so give players a Petal
// Apothecary recipe instead. Costs 4 petals of a color for that color's double
// flower: a double flower is worth two single flowers, so this stays balanced
// even if a flower -> petal recipe is ever added (no infinite-petal loop).
ServerEvents.recipes((e) => {
  [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ].forEach((color) => {
    e.custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: `botania:petals/${color}`,
        },
        {
          tag: `botania:petals/${color}`,
        },
        {
          tag: `botania:petals/${color}`,
        },
        {
          tag: `botania:petals/${color}`,
        },
      ],
      output: {
        item: `botania:${color}_double_flower`,
        count: 1,
      },
      reagent: {
        tag: "botania:seed_apothecary_reagent",
      },
    });
  });
});
