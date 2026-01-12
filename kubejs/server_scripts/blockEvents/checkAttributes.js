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
    level.getServer().players.forEach((p) => {
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
        player.tell(
          Text.translatable(
            "society.shipping_bin.owner", 
            Text.of(`${binPlayer.username}`).gold()
          )
        );
        player.tell(Text.translatable("society.shipping_bin.sell_multipliers").gray());
        player.tell(
          Text.translatable(
            "society.shipping_bin.multiplier", 
            Text.translatable("tooltip.society.farmer_product"), 
            Text.green(`${crop[0] ? crop[0].Base : 1}`)
          )
        );
        player.tell(
          Text.translatable(
            "society.shipping_bin.multiplier",
            Text.translatable("tooltip.society.artisan_product"),
            Text.green(`${artisan[0] ? artisan[0].Base : 1}`)
          )
        );
        player.tell(
          Text.translatable(
            "society.shipping_bin.multiplier",
            Text.translatable("tooltip.society.geologist_product"),
            Text.green(`${gem[0] ? gem[0].Base : 1}`)
          )
        );
        player.tell(
          Text.translatable(
            "society.shipping_bin.multiplier",
            Text.translatable("tooltip.society.adventurer_product"),
            Text.green(`${adventurer[0] ? adventurer[0].Base : 1}`)
          )
        );
      }
    } else {
      player.tell(
        Text.translatable("society.shipping_bin.offline").gray()
      );
    }
  }
);
