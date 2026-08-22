BlockEvents.rightClicked("society:charging_rod", (e) => {
  const { item, player, hand, block, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (block.properties.get("working") == "true") {
      if (item.getId() === "sunlit_cobblemon:dark_scale") {
        if (!global.hasScope(player)) {
          player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
          return;
        }
        if (!player.isCreative()) item.count--;
        player.swing();
        summonRaidLegendary(level, server, player, item, block, "Zekrom", 100);
      }
    }
  }
});

BlockEvents.rightClicked("decorative_blocks:brazier", (e) => {
  const { item, player, hand, block, level, server } = e;

  if (hand == "MAIN_HAND") {
    if (item.getId() === "sunlit_cobblemon:light_scale") {
      if (hand == "OFF_HAND") return;
      if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
      }
      summonRaidLegendary(level, server, player, item, block, "Reshiram", 100);
      if (!player.isCreative()) item.count--;
      player.swing();
    }
  }
}
);

ItemEvents.entityInteracted((e) => {
  const { item, player, hand, target, level, server } = e;
  if (target.type !== "species:mammutilation") return;
  if (hand == "OFF_HAND") return;
  if (!global.hasScope(player)) {
    player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
    return;
  }
  if (hand == "MAIN_HAND") {
    if (item.getId() === "sunlit_cobblemon:bifrost_stone") {
      summonRaidLegendary(level, server, player, item, level.getBlock(target.getOnPos()), "Kyurem", 100);
      if (!player.isCreative()) item.count--;
      player.swing();
    }
  }
}
);