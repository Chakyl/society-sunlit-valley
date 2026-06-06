console.info("[SOCIETY-S-COBBLEMON] cobblemonUnbreakableBroken.js loaded");

BlockEvents.broken(['sunlit_cobblemon:poke_loot_ball', 'sunlit_cobblemon:great_loot_ball', 'sunlit_cobblemon:ultra_loot_ball', 'sunlit_cobblemon:beast_loot_ball'], (e) => {
  const { player } = e;
  if (!player.isCrouching()) {
    player.tell(Text.translatable("lootr.message.should_sneak").aqua())
    player.tell(Text.translatable("lootr.message.should_sneak2", "per-player per-ball").aqua())
    e.cancel()
  }
});

BlockEvents.broken('sunlit_cobblemon:sun_raid_statue', (e) => {
  const { player } = e;
  if (!player.isCrouching()) {
    player.tell(Text.translatable("block.sunlit_cobblemon.sun_raid_statue.breaks_forever").red())
    e.cancel()
  }
});