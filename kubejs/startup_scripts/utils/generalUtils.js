
global.giveExperience = (server, player, category, xp, excludeMastery) => {
  if (!player.isFake()) {
    server.runCommandSilent(
      `puffish_skills experience add ${player.username} society:${category} ${xp}`
    );
    if (!excludeMastery && player.stages.has("mastery_unlocked")) {
      server.runCommandSilent(
        `puffish_skills experience add ${player.username} society:mastery ${xp}`
      );
    }
  }
};
