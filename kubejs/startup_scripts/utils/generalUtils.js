
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

global.getFishMappedItemName = (itemId) => {
  let fishId = itemId.split(":")[1];
  if (fishId.includes("raw_")) {
    fishId = fishId.substring(4, fishId.length);
  }
  return fishId
}