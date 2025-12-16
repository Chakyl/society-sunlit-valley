console.info("[SOCIETY] regretCrystals.js loaded");

const resetSkills = (tree, server, player, amount) => {
  server.runCommandSilent(
    `playsound stardew_fishing:fish_escape block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(`puffish_skills category erase ${player.username} society:${tree}`);
  server.runCommandSilent(`puffish_skills points set ${player.username} society:${tree} 0`);
  global.giveExperience(server, player, tree, amount);
  player.tell(
    Text.translatable(
      "society.crystal_of_regret.success",
      global.translatableWithFallback(`society_skills.${tree}.category.title`, `${tree}`)
    ).gray()
  );
};

ItemEvents.rightClicked("society:crystal_of_regret_farming", (e) => {
  const { player, item, server } = e;
  if (player.stages.has("soil_inspector") || player.stages.has("sticky_crops")) {
    resetSkills("farming", server, player, 15500);
    item.count--;
  } else {
    player.tell(Text.translatable("society.crystal_of_regret.fail").red());
  }
});

ItemEvents.rightClicked("society:crystal_of_regret_husbandry", (e) => {
  const { player, item, server } = e;
  if (player.stages.has("animal_whisperer") || player.stages.has("bribery")) {
    resetSkills("husbandry", server, player, 2500);
    item.count--;
  } else {
    player.tell(Text.translatable("society.crystal_of_regret.fail").red());
  }
});

ItemEvents.rightClicked("society:crystal_of_regret_mining", (e) => {
  const { player, item, server } = e;
  if (player.stages.has("furniture_archaeologist") || player.stages.has("blockchain")) {
    resetSkills("mining", server, player, 8750);
    item.count--;
  } else {
    player.tell(Text.translatable("society.crystal_of_regret.fail").red());
  }
});

ItemEvents.rightClicked("society:crystal_of_regret_fishing", (e) => {
  const { player, item, server } = e;
  if (player.stages.has("mystical_ocean")) {
    resetSkills("fishing", server, player, 14500);
    item.count--;
  } else {
    player.tell(Text.translatable("society.crystal_of_regret.fail").red());
  }
});

ItemEvents.rightClicked("society:crystal_of_regret_adventuring", (e) => {
  const { player, item, server } = e;
  if (player.stages.has("fence") || player.stages.has("dragonslayer")) {
    resetSkills("adventuring", server, player, 8750);
    item.count--;
  } else {
    player.tell(Text.translatable("society.crystal_of_regret.fail").red());
  }
});
