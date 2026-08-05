ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerSleepInBedEvent", (e) => {
  global.handleDarkrai(e);
});

global.handleDarkrai = (e) => {
  const { entity } = e;
  if (!entity.isPlayer()) return;
  if (entity.potionEffects.isActive("sunlit_cobblemon:nightmare")) {
    let level = entity.level
    let server = entity.level.getServer();
    let block = level.getBlock(entity.getOnPos().above());
    let { x, y, z } = block;
    entity.tell("You cannot sleep, you feel like something is watching you...")
    server.scheduleInTicks(120, () => {
      if (entity.potionEffects.isActive("sunlit_cobblemon:nightmare")) {
        server.runCommandSilent(`playsound species:entity.ghoul.angry block @a ${x} ${y} ${z} 3 0.3`);
        let spawnedAny = global.summonRaidPokemon(server, level, block, "darkrai", "", 95, 75, false, false, 0);
        if (spawnedAny) {
          server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
          server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
          server.runCommandSilent(`playsound species:entity.ghoul.infect block @a ${x} ${y} ${z} 2`);
          level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
          entity.potionEffects.remove('sunlit_cobblemon:nightmare')
          entity.persistentData.skullCavernFainted = 0;
        }
      }
    })
    e.cancel();
  }

};
