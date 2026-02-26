console.info("[SOCIETY] cancelItemEvents.js loaded");

ItemEvents.rightClicked("brewery:dark_brew", (e) => {
  if (!e.player.isCrouching()) e.cancel();
});

ItemEvents.rightClicked("farm_and_charm:fertilizer", (e) => {
  e.cancel();
});

ItemEvents.rightClicked("vanillabackport:pale_oak_boat", (e) => {
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
    e.player.tell(Text.translatable("society.fishing_rod.on_deployer").red());
    e.cancel();
  }
});

ItemEvents.rightClicked(
  ["refinedstorage:4k_storage_block", "refinedstorage:64k_storage_block"],
  (e) => {
    if (e.player.isCrouching()) e.cancel();
  },
);

ItemEvents.rightClicked(
  [
    "buildinggadgets2:gadget_copy_paste",
    "buildinggadgets2:gadget_exchanging",
    "buildinggadgets2:gadget_copy_paste",
    "buildinggadgets2:gadget_cut_paste",
    "buildinggadgets2:gadget_destruction",
    "botania:smelt_rod",
    "supplementaries:wrench"
  ],
  (e) => {
    if (e.player.level.dimension === "society:skull_cavern") {
      // TODO: Dialog
      e.player.tell(Text.red("Don't do that."))
      e.cancel();
    }
  },
);

BlockEvents.rightClicked((e) => {
  if (e.player.getHeldItem("MAIN_HAND").hasTag("forge:tools/fishing_rods") || e.player.getHeldItem("OFF_HAND").hasTag("forge:tools/fishing_rods")
  ) {
    e.cancel();
  }
});