console.info("[SOCIETY] disableHoeRichSoil.js loaded");

BlockEvents.rightClicked(["treetap:tap"], (e) => {
  const { block } = e;
  const facing = block.properties.facing;
  block.set("society:tapper");
  const newProperties = block.properties;
  newProperties.facing = facing;
  block.set("society:tapper", newProperties);
});

BlockEvents.rightClicked(
  ["treetap:wooden_sap_collector", "treetap:sap_collector"],
  (e) => {
    const { block, level } = e;
    const aboveBlock = level.getBlock(block.getPos().above());
    const facing = aboveBlock.properties.facing;
    block.set("society:tapper");
    const newProperties = block.properties;
    newProperties.facing = facing;
    block.set("society:tapper", newProperties);
    aboveBlock.set("minecraft:air")
  }
);
