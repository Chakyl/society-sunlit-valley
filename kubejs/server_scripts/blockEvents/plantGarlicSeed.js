console.info("[SOCIETY] neptuniumHoe.js loaded");

BlockEvents.rightClicked(
  [
    "minecraft:farmland",
    "dew_drop_farmland_growth:weak_fertilized_farmland",
    "dew_drop_farmland_growth:strong_fertilized_farmland",
    "dew_drop_farmland_growth:hyper_fertilized_farmland",
    "dew_drop_farmland_growth:bountiful_fertilized_farmland",
    "dew_drop_farmland_growth:low_quality_fertilized_farmland",
    "dew_drop_farmland_growth:high_quality_fertilized_farmland",
    "dew_drop_farmland_growth:pristine_quality_fertilized_farmland",
  ],
  (e) => {
    const { item, player, level, server, block } = e;
    const aboveBlock = level.getBlock(block.getPos().above());
    if (aboveBlock.id === "minecraft:air") {
      if (item.id === "veggiesdelight:garlic_seed") {
        aboveBlock.set("veggiesdelight:garlic_crop");
        if (!player.isCreative()) item.shrink(1);
        player.swing();
        server.runCommandSilent(
          `playsound minecraft:block.crop.break block @a ${player.x} ${player.y} ${player.z}`
        );
      }
    }
  }
);
