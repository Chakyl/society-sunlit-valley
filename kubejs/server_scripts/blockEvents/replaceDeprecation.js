console.info("[SOCIETY] replaceDeprecation.js loaded");

BlockEvents.rightClicked("treetap:tap", (e) => {
  const { block } = e;
  const facing = block.properties.facing;
  block.set("society:tapper");
  const newProperties = block.properties;
  newProperties.facing = facing;
  block.set("society:tapper", newProperties);
});

BlockEvents.rightClicked(["treetap:wooden_sap_collector", "treetap:sap_collector"], (e) => {
  const { block, level } = e;
  const aboveBlock = level.getBlock(block.getPos().above());
  const facing = aboveBlock.properties.facing;
  block.set("society:tapper");
  const newProperties = block.properties;
  newProperties.facing = facing;
  block.set("society:tapper", newProperties);
  aboveBlock.set("minecraft:air");
});

BlockEvents.rightClicked("mining_dimension:teleporter", (e) => {
  const { block, player } = e;
  block.set("society:skull_cavern_teleporter");
  player.tell(
    Text.red(
      "The Skull Cavern you are about to enter is a bit different than what you may be used to..."
    )
  );
  e.cancel();
});
