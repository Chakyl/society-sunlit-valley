console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBells.js loaded");

global.runBell = (entity, legendary) => {
  const { level, block } = entity;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  let nbt = block.getEntityData();
  let { hasSpawn, alreadySpawned } = nbt.data;
  if (!hasSpawn) {
    if (
      morningModulo >= artMachineProgTime &&
      morningModulo < artMachineProgTime + artMachineTickRate
    ) {
      let { x, y, z } = block;
      let server = level.getServer();
      if (y >= 128 && Math.random() <= (alreadySpawned ? 0.05 : 0.2)) {
        server.runCommandSilent(`playsound tanukidecor:block.clock_tower.chime block @a ${x} ${y} ${z} 3 0.4`);
        nbt.merge({
          data: {
            hasSpawn: true,
            alreadySpawned: true,
          }
        });
        global.setBlockEntityData(block, nbt);
      }
    }
  } else {
    let server = level.getServer();
    let { x, y, z } = block;
    let nearbyPlayers = level.getEntitiesWithin(AABB.ofBlock(block).inflate(16)).filter((scanEntity) => scanEntity.isPlayer());
    if (nearbyPlayers.length > 0) {
      server.runCommandSilent(`playsound tanukidecor:block.clock_tower.chime block @a ${x} ${y} ${z} 3 0.4`);
      let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(block.getPos().above()), legendary, "", 95, 75, false, false, 0);
      if (spawnedAny) {
        server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound wildernature:cassowary_ambient block @a ${x} ${y} ${z} 3 0.4`);
        level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
        nbt.merge({
          data: {
            hasSpawn: false
          }
        });
        global.setBlockEntityData(block, nbt);
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("sunlit_cobblemon:clear_bell", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .soundType("copper")
    .box(3, 0, 3, 13, 15, 13)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.clear_bell.description").gray());
      item.tooltip(Text.translatable("block.sunlit_cobblemon.bell.height").aqua());
      item.modelJson({
        parent: "sunlit_cobblemon:block/kubejs/clear_bell",
      });
    })
    .model("sunlit_cobblemon:block/kubejs/clear_bell")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ alreadySpawned: false, hasSpawn: false });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runBell(entity, "hooh");
      });
    });

  event
    .create("sunlit_cobblemon:tidal_bell", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .soundType("copper")
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.tidal_bell.description").gray());
      item.tooltip(Text.translatable("block.sunlit_cobblemon.bell.height").aqua());
      item.modelJson({
        parent: "sunlit_cobblemon:block/kubejs/tidal_bell",
      });
    })
    .model("sunlit_cobblemon:block/kubejs/tidal_bell")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ alreadySpawned: false, hasSpawn: false });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runBell(entity, "lugia");
      });
    });
});
