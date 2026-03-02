BlockEvents.rightClicked("society:fish_pond_quest_manager", (e) => {
  const { item, hand, player, level, block } = e;
  if (hand !== "MAIN_HAND" || item !== "create:clipboard") return;
  global.addItemCooldown(player, item, 10);
  player.swing();
  const held = player.mainHandItem;
  if (!held || held.id !== "create:clipboard") return;
  console.info("is clipboard");
  const pages = global.getQuestItems(block, level);
  held.nbt = {
    Type: 1,
    PreviouslyOpenedPage: 0,
    Pages: pages,
  };
  e.cancel();
});