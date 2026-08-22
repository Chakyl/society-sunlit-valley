BlockEvents.placed(["sunlit_cobblemon:clear_bell", "sunlit_cobblemon:tidal_bell"], (e) => {
  if (e.block.y < 128) {
    e.player.tell(Text.translatable("sunlit_cobblemon.legendary_bell.too_low").red())
  }
});