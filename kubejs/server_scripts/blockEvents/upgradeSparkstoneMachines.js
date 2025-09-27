console.info("[SOCIETY] upgradeSparkstoneMachines.js loaded");

BlockEvents.rightClicked("society:fish_pond_basket", (e) => {
  const { player, item, block, hand, level } = e;
  const upgraded = block.properties.get("upgraded").toLowerCase() == "true";

  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && !upgraded && item == "minecraft:bucket") {
    if (!player.isCreative()) item.count--;
    level.spawnParticles(
      "farmersdelight:star",
      true,
      block.x,
      block.y + 1,
      block.z,
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      3,
      0.01
    );
    block.set(block.id, {
      upgraded: true,
      waterlogged: block.properties.get("waterlogged"),
    });
    e.cancel();
  }
});

BlockEvents.rightClicked("society:auto_grabber", (e) => {
  const { player, item, block, hand, level } = e;
  const upgraded = block.properties.get("upgraded").toLowerCase() == "true";
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && !upgraded && item == "society:magic_shears") {
    if (!player.isCreative()) item.count--;
    level.spawnParticles(
      "farmersdelight:star",
      true,
      block.x,
      block.y + 1,
      block.z,
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      0.2 * rnd(1, 4),
      3,
      0.01
    );
    block.set(block.id, {
      upgraded: true,
      facing: block.properties.get("facing"),
    });
    e.cancel();
  }
});
