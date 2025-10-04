console.info("[SOCIETY] disableBlockEvents.js loaded");

BlockEvents.rightClicked((e) => {
  if (
    [
      "minecraft:potato",
      "minecraft:carrot",
      "farm_and_charm:onion",
      "veggiesdelight:sweet_potato",
      "vintagedelight:peanut",
      "vintagedelight:peanut",
      "veggiesdelight:garlic_crop",
    ].includes(e.item.getId())
  ) {
    if (e.block.hasTag("dewdrop:waterable")) {
      e.cancel();
    }
  }
});
