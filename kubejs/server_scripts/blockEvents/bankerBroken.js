console.info("[SOCIETY] bankerBroken.js loaded");

BlockEvents.broken("numismatics:blaze_banker", (e) => {
  e.player.tell(Text.red("If block doesn't break, right click with a pickaxe."));
});

BlockEvents.rightClicked("numismatics:blaze_banker", (e) => {
  const { item, block, level, player } = e;

  if (item.hasTag("minecraft:pickaxes")) {
    player.tell(block.getEntityData().TrustListInv.Items.length);
    if (block.getEntityData().TrustListInv.Items.length > 0) {
      player.tell(
        Text.red("Empty out ID cards and bank account money! Right click with a pickaxe.")
      );
    } else level.destroyBlock(block.pos, true);
  }
});

BlockEvents.rightClicked("create_central_kitchen:blaze_stove", (e) => {
  if (e.item.id === "create_central_kitchen:cooking_guide") e.cancel();
});
