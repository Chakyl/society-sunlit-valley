console.info("[SOCIETY] validateFishPondQuests.js loaded");

const multiplierToNatural = (mult) => {
  switch (mult) {
    case "shippingbin:meat_sell_multiplier":
      return "Adventurer";

    case "shippingbin:crop_sell_multiplier":
      return "Farmer";

    case "shippingbin:wood_sell_multiplier":
      return "Artisan";

    case "shippingbin:gem_sell_multiplier":
      return "Geologist";
  }
};
// Tests if quest items are valid items. Dev use only.
ItemEvents.rightClicked("functionalstorage:creative_vending_upgrade", (e) => {
  const { player } = e
  player.server.persistentData.pigraceInProgress = false;
  global.fishPondDefinitions.forEach((fish) => {
    fish.quests.forEach((quest) => {
      quest.requestedItems.forEach((req) => {
        if (Item.of(req.item).id === "minecraft:air") player.tell(req.item);
      });
    });
  });
  player.tell("Quests validated.");
  player.tell(`{| class="wikitable sortable"`);
  player.tell("|-");
  player.tell("! Name !! ID !! Price !! Type");
  player.tell("|-");
  Array.from(global.trades.keys()).forEach((element) => {
    let tradeData = global.trades.get(element);
    if (!element.includes("splendid_slimes"))
      player.tell(Item.of(element).displayName);
    else {
      let type = element.substring(element.lastIndexOf(":") + 1);
      if (element.includes("plort")) {
        player.tell(`Plort: ${type} `);
      } else {
        player.tell(`Slime Heart: ${type}`);
      }
    }
    player.tell(
      ` || ${
        element.includes("plort")
          ? "splendid_slimes:plort"
          : element.includes("slime_heart")
          ? "splendid_slimes:slime_heart"
          : element
      } || ${tradeData.value} || ${multiplierToNatural(tradeData.multiplier)}`
    );
    player.tell("|-");
  });
});
