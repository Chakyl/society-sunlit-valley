console.info("[SOCIETY] magnifyingGlass.js loaded");

const DELAY = 10;
const REPETITIONS = 10;

const magnifyingGlassBlocks = [
  { id: "society:auto_grabber", radius: 5, includeY: true },
  { id: "society:artisan_hopper", radius: 3, includeY: true },
  { id: "society:mini_artisan_hopper", radius: 1, includeY: true },
  { id: "society:auto_petter", radius: 1, includeY: true },
  { id: "society:fish_pond_basket", radius: 1, includeY: true },
  { id: "society:feeding_trough", radius: 6, includeY: true },
  { id: "splendid_slimes:slime_feeder", radius: 6, includeY: true },
  { id: "dew_drop_farmland_growth:iron_sprinkler", radius: 1 },
  { id: "dew_drop_farmland_growth:gold_sprinkler", radius: 2 },
  { id: "society:mana_sprinkler", radius: 2 },
  { id: "dew_drop_farmland_growth:diamond_sprinkler", radius: 3 },
  { id: "dew_drop_farmland_growth:netherite_sprinkler", radius: 4 },
  { id: "society:mana_milker", radius: 10, includeY: true },
  { id: "society:golden_clock", radius: 2, includeY: true },
  { id: "society:mana_clock", radius: 1, includeY: true },
  { id: "society:snow_melter", radius: 10 },
  { id: "farmingforblockheads:chicken_nest", radius: 8, includeY: true },
  { id: "society:growth_obelisk", radius: 3, includeY: false },
  { id: "society:ribbit_hut", radius: 7, includeY: false },
  { id: "society:mushroom_log", radius: 8, includeY: true },
];
const magnifyingGlassBlockIds = magnifyingGlassBlocks.map((x) => x.id);

BlockEvents.rightClicked(magnifyingGlassBlockIds, (e) => {
  const { item, hand, player, server, level, block } = e;
  let resolvedBlock = block;
  if (hand == "MAIN_HAND" && item == "society:magnifying_glass") {
    global.addItemCooldown(player, item, (DELAY * REPETITIONS) / 2);
    player.swing();
    server.runCommandSilent(
      `playsound tanukidecor:block.lantern_clock.chime block @a ${player.x} ${player.y} ${player.z}`
    );
    magnifyingGlassBlocks.forEach((hitBlock) => {
      if (hitBlock.id == block.id) {
        if (block.id === "society:ribbit_hut") {
          resolvedBlock = global.getOpposite(block.getProperties().get("facing"), block.getPos());
        }
        for (let index = 0; index < REPETITIONS; index++) {
          server.scheduleInTicks(DELAY * index, () => {
            for (let pos of BlockPos.betweenClosed(
              new BlockPos(
                resolvedBlock.x - hitBlock.radius,
                resolvedBlock.y - hitBlock.radius,
                resolvedBlock.z - hitBlock.radius
              ),
              [
                resolvedBlock.x + hitBlock.radius,
                resolvedBlock.y + hitBlock.radius,
                resolvedBlock.z + hitBlock.radius,
              ]
            )) {
              if (pos.y === resolvedBlock.y || hitBlock.includeY) {
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
