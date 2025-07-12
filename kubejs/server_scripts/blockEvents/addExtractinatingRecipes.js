console.info("[SOCIETY] addExtractinatingRecipes.js loaded");

const validExtractinatorItems = [
  "society:relic_trove",
  "society:artifact_trove",
  "society:geode",
  "society:frozen_geode",
  "society:magma_geode",
  "society:omni_geode",
];
const processGeodeLootTable = (lootTable, block) => {
  let drops;
  lootTable.forEach((entry) => {
    if (Math.random() < entry.drop_chance) {
      drops = Ingredient.of(entry.drop).itemIds;
      block.popItemFromFace(drops[Math.floor(Math.random() * drops.length)], "up");
    }
  });
};

BlockEvents.rightClicked("extractinator:extractinator", (e) => {
  const { block, player, hand, item, server } = e;
  if (hand == "OFF_HAND") return;
  const heldItem = item.getId();
  if (!validExtractinatorItems.includes(heldItem)) return;
  global.extractinatorRecipes.forEach((recipe) => {
    if (heldItem == recipe.input) processGeodeLootTable(recipe.output, block);
  });
  if (!player.isCreative()) item.count--;
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  player.addItemCooldown(item.id, 4);
});
