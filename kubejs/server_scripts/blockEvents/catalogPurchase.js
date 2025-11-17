console.info("[SOCIETY] catalogPurchase.js loaded");

const catalogMap = {
  tanuki_catalog: {
    price: 2,
    outputItem: "society:tanuki_leaf",
    outputDisplayName: "Tanuki Leaf",
    outputCount: 1,
  },
  modern_catalog: {
    price: 6,
    outputItem: "society:architects_digest",
    outputDisplayName: "Architect's Digest",
    outputCount: 1,
  },
  fantasy_catalog: {
    price: 4,
    outputItem: "society:fantasy_dust",
    outputDisplayName: "Fantasy Dust",
    outputCount: 1,
  },
};

BlockEvents.rightClicked(
  ["society:tanuki_catalog", "society:modern_catalog", "society:fantasy_catalog"],
  (e) => {
    const { item, player, hand, block, server } = e;
    const { price, outputItem, outputDisplayName, outputCount } =
      catalogMap[block.id.toString().path];

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
          `§7Right click with ${price} §6Gold Coin${
            price > 1 ? "s" : ""
          }§7 to purchase ${outputCount} §a${outputDisplayName}`
        );
      }
    }
  }
);
