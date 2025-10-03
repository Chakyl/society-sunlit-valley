const runTmDatagen = true;

if (runTmDatagen) {
  let tmObj = { values: [] };
  let trObj = { values: [] };
  let itemId;
  Ingredient.of("@simpletms")
    .getStacks()
    .forEach((item) => {
      itemId = item.id;
      if (itemId.substring(10, 12).equals("tr")) {
        trObj.values.push(itemId);
      } else {
        tmObj.values.push(itemId);
      }
    });
  JsonIO.write(`kubejs/data/sunlit_cobblemon/tags/items/tr.json`, trObj);
  JsonIO.write(`kubejs/data/sunlit_cobblemon/tags/items/tm.json`, tmObj);
}
