console.info("[SOCIETY] carKey.js loaded");

BlockEvents.rightClicked((e) => {
  const { item, block, player } = e;
  if (item.getId() !== "society:car_key") return;
  const playerDrunk =
    player.potionEffects.isActive("brewery:drunk") ||
    player.potionEffects.isActive("brewery:blackout");
    
  if (!playerDrunk && item.nbt && block) {
    let car = e.player.level.createEntity("automobility:automobile");
    item.nbt.Pos[0] = Number(block.getX());
    item.nbt.Pos[1] = Number(block.getY() + 2);
    item.nbt.Pos[2] = Number(block.getZ());
    car.nbt = item.nbt;
    car.spawn();
    item.nbt = null;
  } else if (playerDrunk) {
    player.tell(
      Text.translatable("item.society.car_key.use_on_drunk").gray()
    );
  }
});

ItemEvents.entityInteracted("society:car_key", (e) => {
  const { item, target } = e;
  if (target.type !== "automobility:automobile" || item.nbt) {
    return;
  }
  item.nbt = target.getNbt();
  target.setRemoved("unloaded_to_chunk");
  e.cancel();
});
