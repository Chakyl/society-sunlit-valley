console.info("[SOCIETY] fishRadar.js loaded");

const renderItem = (id) => Item.of(id).displayName;

ItemEvents.rightClicked("society:fish_radar", (e) => {
  const { level, player, item } = e;

  function playerTell(x) {
    player.tell(x);
  }

  let fish = [];
  player.tell(Text.gray("=====[ §aFish Radar§7 ]====="));

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
  player.addItemCooldown(item, 20);
});
