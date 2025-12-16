console.info("[SOCIETY] catalogPurchase.js loaded");

const catalogMap = {
  tanuki_catalog: {
    price: 2,
    outputItem: "society:tanuki_leaf",
    outputDisplayName: Text.translatable("item.society.tanuki_leaf"),
    outputCount: 1,
  },
  modern_catalog: {
    price: 6,
    outputItem: "society:architects_digest",
    outputDisplayName: Text.translatable("item.society.architects_digest"),
    outputCount: 1,
  },
  fantasy_catalog: {
    price: 4,
    outputItem: "society:fantasy_dust",
    outputDisplayName: Text.translatable("item.society.fantasy_dust"),
    outputCount: 1,
  },
};

BlockEvents.rightClicked(
  ["society:tanuki_catalog", "society:modern_catalog", "society:fantasy_catalog"],
  (e) => {
    const { item, player, hand, block, server } = e;
    const { price, outputItem, outputDisplayName, outputCount } =
      catalogMap[String(block.id).path];

    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      if (item.getId() === "numismatics:crown" && item.count >= price) {
        if (!player.isCrouching()) {
          item.count -= price;

          block.popItemFromFace(`${outputCount}x ${outputItem}`, "up");
        } else {
          block.popItemFromFace(
            `${Math.floor(item.count / price) * outputCount}x ${outputItem}`,
            "up"
          );
          item.count -= item.count - (item.count % price);
        }
        server.runCommandSilent(
          `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
        );
        global.addItemCooldown(player, item.id, 1);
      } else {
        player.tell(
          Text.translatable(
            "society.furniture_catalog.give_me_coin", 
            `${price}`, 
            Text.translatable("item.numismatics.crown").gold(),
            `${outputCount}`,
            outputDisplayName.green()
          ).gray()
        );
      }
    }
  }
);
