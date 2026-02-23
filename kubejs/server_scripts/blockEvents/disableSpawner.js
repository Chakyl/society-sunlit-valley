console.info("[SOCIETY] disableSpawner.js loaded");

BlockEvents.rightClicked("minecraft:spawner", (e) => {
  if (e.player.isCreative()) return;
  if (e.item.id.includes("spawn_egg")) e.cancel();
});

BlockEvents.rightClicked((e) => {
  if (e.player.isCreative()) return;
  if (
    e.level.dimension === "society:skull_cavern" &&
    e.block.hasTag("minecraft:rails") &&
    e.item.getId() == "create:minecart_contraption"
  ) {
    e.cancel();
  }
});
