JEIAddedEvents.registerCategories((e) => {
  const guiHelper = e.data.jeiHelpers.guiHelper;
  e.custom("society:villager_purchase", (category) => {
    category
      .title("Villager Purchase")
      .background(
        guiHelper.createDrawable(
          "society:textures/gui/villager_trade.png",
          1,
          1,
          140,
          20
        )
      )
      .icon(guiHelper.createDrawableItemStack("minecraft:villager_spawn_egg"))
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe) => {
        const {
          workstation,
          priceItem,
          priceAmount,
          additionalPriceItem,
          additionalPriceAmount,
          offerItem,
          offerAmount,
        } = recipe.data;
        builder
          .addSlot("input", 0, 2)
          .addItemStack(Item.of(workstation))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("input", 33, 2)
          .addItemStack(Item.of(`${priceAmount}x ${priceItem}`))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        additionalPriceItem &&
          builder
            .addSlot("input", 57, 2)
            .addItemStack(
              Item.of(`${additionalPriceAmount}x ${additionalPriceItem}`)
            )
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
        builder
          .addSlot("output", 118, 2)
          .addItemStack(Item.of(`${offerAmount}x ${offerItem}`))
          .setBackground(guiHelper.getSlotDrawable(), -1, -1);
      });
  });
});
JEIAddedEvents.registerRecipes((e) => {
  const rawWorkstations = [
    { villager: "toolsmith", block: "minecraft:smithing_table" },
    { villager: "fisherman", block: "minecraft:barrel" },
    { villager: "shepherd", block: "minecraft:loom" },
    { villager: "leatherworker", block: "minecraft:cauldron" },
    { villager: "weaponsmith", block: "minecraft:grindstone" },
    { villager: "librarian", block: "minecraft:lectern" },
    { villager: "cleric", block: "minecraft:brewing_stand" },
    { villager: "farmer", block: "minecraft:composter" },
    { villager: "cartographer", block: "minecraft:cartography_table" },
    { villager: "cook", block: "candlelight:cooking_pot" },
    { villager: "barkeeper", block: "beachparty:tiki_bar" },
    { villager: "fletcher", block: "minecraft:fletching_table" },
    { villager: "bard", block: "minecraft:note_block" },
    { villager: "botanist", block: "beautify:botanist_workbench" },
  ];
  let tradeData;
  rawWorkstations.forEach((entry) => {
    const { villager, block } = entry;
    tradeData = JsonIO.read(`config/custom trades/${villager}.json`);
    tradeData.trades.forEach((trade) => {
      e.custom("society:villager_purchase").add({
        workstation: block,
        priceItem: trade.request.itemKey,
        priceAmount: trade.request.amount,
        additionalPriceItem: trade.additionalRequest?.itemKey,
        additionalPriceAmount: trade.additionalRequest?.amount,
        offerItem: trade.offer.itemKey,
        offerAmount: trade.offer.amount,
      });
    });
  });
});
