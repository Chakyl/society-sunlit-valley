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
  const { player } = e;
  let generatePriceWikiTable = false;
  let generatePondTable = false;
  let generatePrizeMachineTable = true;
  player.server.persistentData.pigraceInProgress = false;
  global.fishPondDefinitions.forEach((fish) => {
    fish.quests.forEach((quest) => {
      quest.requestedItems.forEach((req) => {
        if (Item.of(req.item).id === "minecraft:air") player.tell(req.item);
      });
    });
  });
  if (generatePrizeMachineTable) {
    player.tell(`{| class="wikitable sortable"`);
    player.tell("|-");
    player.tell(
      `!Prize # !! Hint !! Possible Items`
    );
    player.tell("|-");
    global.prizeMachineRewards.forEach((element, index) => {
      player.tell(`|`);
      player.tell(index);
      player.tell(" || ")
      player.tell(element.hint);
      player.tell(" || ")
      element.possibleOutputs.forEach((output) => {
        let request = Item.of(output)
        player.tell("* " + request.count);
        player.tell(request.displayName);
      });
      player.tell("|-");
    });
  }
  if (generatePriceWikiTable) {
    // player.tell("Quests validated.");
    // player.tell(`{| class="wikitable sortable"`);
    // player.tell("|-");
    // player.tell("! Name !! ID !! Price !! Type");
    // player.tell("|-");
    // Array.from(global.trades.keys()).forEach((element) => {
    //   let tradeData = global.trades.get(element);
    //   if (!element.includes("splendid_slimes"))
    //     player.tell(Item.of(element).displayName);
    //   else {
    //     let type = element.substring(element.lastIndexOf(":") + 1);
    //     if (element.includes("plort")) {
    //       player.tell(`Plort: ${type} `);
    //     } else {
    //       player.tell(`Slime Heart: ${type}`);
    //     }
    //   }
    //   player.tell(
    //     ` || ${
    //       element.includes("plort")
    //         ? "splendid_slimes:plort"
    //         : element.includes("slime_heart")
    //         ? "splendid_slimes:slime_heart"
    //         : element
    //     } || ${tradeData.value} || ${multiplierToNatural(tradeData.multiplier)}`
    //   );
    //   player.tell("|-");
    // });
  }
  if (generatePondTable) {
    // player.tell("Quests validated.");
    // player.tell(`{| class="wikitable sortable"`);
    // player.tell("|-");
    // player.tell(
    //   `!Fish !! Population 3 !! Population 5 !! Population 7`
    // );
    // player.tell("|-");
    // Array.from(global.fishPondDefinitions.keys()).forEach((element) => {
    //   let quests = global.fishPondDefinitions.get(element).quests;
    //   player.tell(`|`);
    //   player.tell(Item.of(element).displayName);
    //   player.tell(" || ")
    //   quests.forEach((quest) => {
    //     quest.requestedItems.forEach((request, index) => {
    //       player.tell("* " + request.count);
    //       player.tell(Item.of(request.item).displayName);
    //     });
    //     player.tell(" || ");
    //   });
    // player.tell("|-");
    // });
    // IDK WHY I COMMENTED THE ABOVE NOW
    // player.tell("Quests validated.");
    // player.tell(`{| class="wikitable sortable"`);
    // player.tell("|-");
    // player.tell(`!Fish !! Items !! Min Population !! % chance`);
    // player.tell("|-");
    // Array.from(global.fishPondDefinitions.keys()).forEach((element) => {
    //   let rewards = global.fishPondDefinitions.get(element).additionalRewards;
    //   player.tell(`|rowspan="${rewards ? rewards.length : 1}"|`);
    //   player.tell(Item.of(element).displayName);
    //   if (rewards) {
    //     rewards.forEach((reward, index) => {
    //       player.tell("| " + reward.count);
    //       player.tell(Item.of(reward.item).displayName);
    //       player.tell("| " + reward.minPopulation);
    //       player.tell(`| ${Math.round(reward.chance * 100)}%`);
    //       player.tell("|- ");
    //     });
    //   } else {
    //     player.tell("|")
    //     player.tell("|")
    //     player.tell("|")
    //     player.tell("|-")
    //   }
    // });
  }
});
