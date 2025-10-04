console.info("[SOCIETY] cancelItemEvents.js loaded");

ItemEvents.rightClicked("brewery:dark_brew", (e) => {
  if (!e.player.isCrouching()) e.cancel();
});

ItemEvents.rightClicked("farm_and_charm:fertilizer", (e) => {
  e.cancel();
});

BlockEvents.rightClicked("create:deployer", (e) => {
  if (
    [
      "minecraft:fishing_rod",
      "netherdepthsupgrade:lava_fishing_rod",
      "aquaculture:iron_fishing_rod",
      "aquaculture:gold_fishing_rod",
      "aquaculture:diamond_fishing_rod",
      "aquaculture:neptunium_fishing_rod",
    ].includes(e.player.getHeldItem("MAIN_HAND").id)
  ) {
    e.player.tell(Text.red("This machine will break my rod... "));
    e.cancel();
  }
});

ItemEvents.rightClicked(
  ["refinedstorage:4k_storage_block", "refinedstorage:64k_storage_block"],
  (e) => {
    if (e.player.isCrouching()) e.cancel();
  }
);
