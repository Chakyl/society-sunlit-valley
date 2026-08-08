console.info("[SOCIETY] magnifyingGlass.js loaded");

const DELAY = 10;
const REPETITIONS = 10;

const magnifyingGlassBlocks = [
  { id: "society:auto_grabber", radius: { x: 5, y: 5, z: 5 }},
  { id: "society:artisan_hopper", radius: { x: 3, y: 3, z: 3 }},
  { id: "society:mini_artisan_hopper", radius: { x: 1, y: 1, z: 1 }},
  { id: "society:auto_petter", radius: { x: 2, y: 2, z: 2 }},
  { id: "society:fish_pond_basket", radius: { x: 1, y: 1, z: 1 }},
  { id: "society:fish_pond_hatchery", radius: { x: 1, y: 3, z: 1 }},
  { id: "society:feeding_trough", radius: { x: 6, y: 6, z: 6 }},
  { id: "splendid_slimes:slime_feeder", radius: { x: 6, y: 6, z: 6 }},
  { id: "dew_drop_farmland_growth:iron_sprinkler", radius: { x: 1, y: 0, z: 1 }},
  { id: "dew_drop_farmland_growth:gold_sprinkler", radius: { x: 2, y: 0, z: 2 }},
  { id: "society:mana_sprinkler", radius: { x: 2, y: 0, z: 2 }},
  { id: "dew_drop_farmland_growth:diamond_sprinkler", radius: { x: 3, y: 0, z: 3 }},
  { id: "dew_drop_farmland_growth:netherite_sprinkler", radius: { x: 4, y: 0, z: 4 }},
  { id: "society:mana_milker", radius: { x: 10, y: 10, z: 10 }},
  { id: "society:golden_clock", radius: { x: 2, y: 2, z: 2 }},
  { id: "society:mana_clock", radius: { x: 1, y: 1, z: 1 }},
  { id: "society:snow_melter", radius: { x: 10, y: 0, z: 10 }},
  { id: "farmingforblockheads:chicken_nest", radius: { x: 8, y: 8, z: 8 }},
  { id: "society:growth_obelisk", radius: { x: 3, y: 0, z: 3 }},
  { id: "society:ribbit_hut", radius: { x: 7, y: 1, z: 7 } },
  { id: "society:mushroom_log", radius: { x: 8, y: 8, z: 8 }},
  { id: "society:fish_pond_manager", radius: { x: 10, y: 10, z: 10 }},
  { id: "society:drum_cornucopia", radius: { x: 10, y: 6, z: 10 },  yOffset: 4},
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
                resolvedBlock.x - hitBlock.radius.x,
                resolvedBlock.y + (hitBlock.yOffset || 0) - hitBlock.radius.y,
                resolvedBlock.z - hitBlock.radius.z
              ),
              [
                resolvedBlock.x + hitBlock.radius.x,
                resolvedBlock.y + (hitBlock.yOffset || 0) + hitBlock.radius.y,
                resolvedBlock.z + hitBlock.radius.z,
              ]
            )) {
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
          });
        }
      }
    });
    e.cancel();
  }
});