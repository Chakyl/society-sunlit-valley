


ServerEvents.tags('item', (e) => {
  global.FURNITURE.forEach((furniture) => {
    e.add("society:loot_furniture", furniture);
  });

  global.cooking.forEach((meal) => {
    e.add("society:dish", meal.item);
  });

})

