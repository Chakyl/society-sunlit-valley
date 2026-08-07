global.runBell = (entity, legendary) => {
  const { level, block } = entity;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  if (
    morningModulo >= artMachineProgTime &&
    morningModulo < artMachineProgTime + artMachineTickRate
  ) {
    let server = level.getServer();
    let { x, y, z } = block;
    if (y >= 128 && Math.random() <= 0.025) {
      server.runCommandSilent(`playsound tanukidecor:block.clock_tower.chime block @a ${x} ${y} ${z} 3 0.4`);
      let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(block.getPos().above()), legendary, "", 95, 75, false, false, 0);
      if (spawnedAny) {
        server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
        server.runCommandSilent(`playsound wildernature:cassowary_ambient block @a ${x} ${y} ${z} 3 0.4`);
        level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
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
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => {
        global.runBell(entity, "lugia");
      });
    });
});
