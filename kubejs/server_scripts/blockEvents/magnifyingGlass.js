console.info("[SOCIETY] neptuniumHoe.js loaded");
const DELAY = 10;
const REPETITIONS = 10;

const magnifyingGlassBlocks = [
  { id: "society:auto_grabber", radius: 5, includeY: true },
  { id: "society:artisan_hopper", radius: 3, includeY: true },
  { id: "society:fish_pond_basket", radius: 1, includeY: true },
  { id: "society:feeding_trough", radius: 6, includeY: true },
  { id: "society:iron_sprinkler", radius: 1 },
  { id: "society:gold_sprinkler", radius: 2 },
  { id: "society:diamond_sprinkler", radius: 3 },
  { id: "society:netherite_sprinkler", radius: 4 },
  { id: "society:mana_milker", radius: 10, includeY: true },
  { id: "society:golden_clock", radius: 2, includeY: true },
];
const magnifyingGlassBlockIds = magnifyingGlassBlocks.map((x) => x.id);

BlockEvents.rightClicked(magnifyingGlassBlockIds, (e) => {
  const { item, hand, player, server, level, block } = e;
  if (hand == "MAIN_HAND" && item == "society:magnifying_glass") {
    player.addItemCooldown(item, (DELAY * REPETITIONS) / 2);
    player.swing();
    server.runCommandSilent(
      `playsound tanukidecor:block.lantern_clock.chime block @a ${player.x} ${player.y} ${player.z}`
    );
    magnifyingGlassBlocks.forEach((hitBlock) => {
      if (hitBlock.id == block.id) {
        for (let index = 0; index < REPETITIONS; index++) {
          server.scheduleInTicks(DELAY * index, () => {
            for (let pos of BlockPos.betweenClosed(
              new BlockPos(
                block.x - hitBlock.radius,
                block.y - hitBlock.radius,
                block.z - hitBlock.radius
              ),
              [block.x + hitBlock.radius, block.y + hitBlock.radius, block.z + hitBlock.radius]
            )) {
              if (pos.y === block.y || hitBlock.includeY) {
                level.spawnParticles(
                  "supplementaries:stasis",
                  true,
                  pos.x + 0.5,
                  pos.y + 0.5,
                  pos.z + 0.5,
                  0,
                  0,
                  0,
                  0,
                  0.0001
                );
              }
            }
          });
        }
      }
    });
  }
});
