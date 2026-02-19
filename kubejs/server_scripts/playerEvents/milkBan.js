let bannedItems = [
  "minecraft:milk_bucket",
  "meadow:wooden_milk_bucket",
  "meadow:wooden_sheep_milk_bucket",
  "meadow:wooden_warped_milk_bucket",
  "meadow:wooden_buffalo_milk_bucket",
  "meadow:wooden_goat_milk_bucket",
  "farmlife:tribull_milk",
];

PlayerEvents.inventoryChanged((e) => {
  if (!bannedItems.includes(e.item.id)) return;
  e.player.tell(Text.translatable("society.husbandry.action.need_milk_pail").gray());
  e.player.inventory.items.forEach((item) => {
    if (item.id === e.item.id) {
      item.count = 0;
      e.player.give(
        Item.of(e.item.id.includes("wooden") ? "meadow:wooden_bucket" : "minecraft:bucket", 1)
      );
    }
  });
});
