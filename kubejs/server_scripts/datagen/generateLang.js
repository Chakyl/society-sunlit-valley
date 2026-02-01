const runLangDataGen = false;

if (runLangDataGen) {
  let objs = {};
  let societyItems = Ingredient.of("@society").getStacks();
  societyItems.forEach((item) => {
    objs[`${item.getDescriptionId()}`] = "";
  });

  JsonIO.write(
    `kubejs/assets/society/lang/en_us_template.json`,
    Object.keys(objs)
      .sort()
      .reduce((acc, key) => {
        acc[key] = objs[key];
        return acc;
      }, {})
  );
}
