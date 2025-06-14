console.info("[SOCIETY] checkAttributes.js loaded");

const shippingBinThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

BlockEvents.leftClicked(
  ["shippingbin:shipping_bin", "shippingbin:basic_shipping_bin", "shippingbin:smart_shipping_bin"],
  (e) => {
    const { player, block, level } = e;
    let binPlayer;
    let playerAttributes;
    if (shippingBinThrottle(player, 30, "shipping-bin-throttle")) return;
    level.players.forEach((p) => {
      if (p.getUuid().toString() === block.getEntityData().data.owner) {
        playerAttributes = p.nbt.Attributes;
        binPlayer = p;
      }
    });
    if (playerAttributes) {
      let crop = playerAttributes.filter((obj) => {
        return obj.Name === "shippingbin:crop_sell_multiplier";
      });
      let gem = playerAttributes.filter((obj) => {
        return obj.Name === "shippingbin:gem_sell_multiplier";
      });
      let artisan = playerAttributes.filter((obj) => {
        return obj.Name === "shippingbin:wood_sell_multiplier";
      });
      let adventurer = playerAttributes.filter((obj) => {
        return obj.Name === "shippingbin:meat_sell_multiplier";
      });
      if (binPlayer) {
        player.tell(`§6${binPlayer.username}'s§7 Shipping Bin`);
        player.tell(":coin: §7Current sell multipliers:");
        player.tell(`:corn: Farmer products: §ax${crop[0] ? crop[0].Base : 1}`);
        player.tell(`:art: Artisan products: §ax${artisan[0] ? artisan[0].Base : 1}`);
        player.tell(`:gem: Geologist products: §ax${gem[0] ? gem[0].Base : 1}`);
        player.tell(
          `:crossed_swords: Adventurer products: §ax${adventurer[0] ? adventurer[0].Base : 1}`
        );
      }
    } else {
      player.tell(
        Text.gray("This is a stranger's Shipping Bin. They aren't online to draw stats from...")
      );
    }
  }
);
