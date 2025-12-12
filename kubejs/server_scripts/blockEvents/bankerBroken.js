console.info("[SOCIETY] bankerBroken.js loaded");

BlockEvents.broken("numismatics:blaze_banker", (e) => {
  e.player.tell(Text.translatable("society.blaze_banker.break").red());
});

BlockEvents.rightClicked("numismatics:blaze_banker", (e) => {
  const { item, block, level, player } = e;

  if (item.hasTag("minecraft:pickaxes")) {
    if (
      block.getEntityData().TrustListInv 
      && block.getEntityData().TrustListInv.Items.length > 0
    ) {
      player.tell(
        Text.translatable("society.blaze_banker.break.not_empty").red()
      );
    } else level.destroyBlock(block.pos, true);
  }
});

BlockEvents.rightClicked("create_central_kitchen:blaze_stove", (e) => {
  if (e.item.id === "create_central_kitchen:cooking_guide") e.cancel();
});
