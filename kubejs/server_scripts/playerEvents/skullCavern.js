console.info("[SOCIETY] skullCavern.js loaded");

PlayerEvents.tick((e) => {
  const player = e.player;
  if (
    player.age % 200 == 0 &&
    player.level.dimension === "mining_dimension:mining"
  ) {
    const timeModulo = player.level.dayTime() % 24000;
    const server = player.getServer();
    // 11 PM
    if (timeModulo >= 17000) {
      if (timeModulo <= 17200) {
        server.runCommandSilent(
          `playsound minecraft:ambient.cave block @a ${e.player.x} ${e.player.y} ${e.player.z}`
        );
        server.runCommandSilent(
          `immersivemessages sendcustom ${player.username} {anchor:3,background:1,wrap:1,align:0,color:"#AAAAAA",y:-60} 10 It's getting late...`
        );
      }
      player.potionEffects.add("minecraft:slowness", 210, 0, true, false);
    }
    // 2 AM
    if (timeModulo >= 20000) {
      if (timeModulo <= 20200) {
        server.runCommandSilent(
          `immersivemessages sendcustom ${player.username} {anchor:3,shake:1,background:1,wrap:1,align:0,color:"#AAAAAA",y:-60} 10 I should really go home...`
        );
      }
      server.runCommandSilent(
        `playsound minecraft:entity.warden.heartbeat block @a ${e.player.x} ${e.player.y} ${e.player.z}`
      );
    }
  }
});
