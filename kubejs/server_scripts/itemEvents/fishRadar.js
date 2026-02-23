console.info("[SOCIETY] fishRadar.js loaded");

const renderItem = (id) => Item.of(id).displayName;

ItemEvents.rightClicked("society:fish_radar", (e) => {
  const { level, player, item } = e;

  function playerTell(x) {
    player.tell(x);
  }
  player.tell(global.getSeasonFromBiome(level, player.pos))
  let fish = [];
  player.tell(
    Text.of("=====[ ").gray()
      .append(Text.translatable("item.society.fish_radar").green())
      .append(" ]=====")
  );

  if (level.dimension !== "minecraft:the_nether") {
    fish = global.overworldRadar(e, fish, playerTell, true);
  } else {
    fish = global.netherRadar(e, fish, playerTell);
  }
  if (player.stages.has("mystical_ocean")) fish.push("society:neptuna");
  player.tell(Text.gray("======================"));
  fish.forEach((fish) => {
    player.tell(renderItem(fish));
  });
  global.addItemCooldown(player, item, 20);
});
