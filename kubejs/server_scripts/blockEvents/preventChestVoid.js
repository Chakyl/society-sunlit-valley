console.info("[SOCIETY] preventChestVoid.js loaded");

BlockEvents.rightClicked(
  [
    "minecraft:chest",
    "quark:ancient_chest",
    "quark:azalea_chest",
    "quark:blossom_chest",
    "quark:oak_chest",
    "quark:spruce_chest",
    "quark:birch_chest",
    "quark:jungle_chest",
    "quark:acacia_chest",
    "quark:dark_oak_chest",
    "quark:crimson_chest",
    "quark:warped_chest",
    "quark:mangrove_chest",
    "quark:bamboo_chest",
    "quark:cherry_chest",
    "quark:nether_brick_chest",
    "quark:purpur_chest",
    "quark:prismarine_chest",
    "quark:jungle_trapped_chest",
  ],
  (e) => {
    const { block, player, hand, item, server } = e;
    if (hand == "OFF_HAND") return;
    if (block.properties.get("type").toString() === "single") return;
    if (
      "sophisticatedstorage:basic_tier_upgrade" === item.id &&
      block.getEntityData().Items.length > 0
    ) {
      player.tell(Text.translatable("society.chest_upgrade.void_warn").red());
      e.cancel();
    }
  }
);
BlockEvents.rightClicked("farm_and_charm:mincer", (e) => {
  const { block, player, hand, item, server } = e;
  if (player.isCrouching()) return;
  if (block.inventory.getStackInSlot(0) == item.id) {
    player.tell(Text.translatable("society.mincer.warn").red());
    player.inventoryMenu.broadcastFullState();
    e.cancel();
  }
});
