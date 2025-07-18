console.info("[SOCIETY] placeNbtMachine.js loaded");

BlockEvents.placed("society:prize_machine", (e) => {
  const prizeNbt = e.player.getHeldItem("main_hand").getNbt();
  if (prizeNbt) {
    e.block.set(e.block.id, {
      facing: e.block.properties.get("facing"),
      prize: prizeNbt.get("prize"),
    });
  }
});

BlockEvents.placed("society:fish_pond", (e) => {
  const pondNbt = e.player.getHeldItem("main_hand").getNbt();
  if (pondNbt) {
    e.block.set(e.block.id, {
      facing: e.block.getProperties().get("facing"),
      valid: true,
      mature: false,
      upgraded: false,
      quest: pondNbt.get("quest").toString() == "1",
      quest_id: pondNbt.get("quest_id").toString(),
      population: pondNbt.get("population").toString(),
      max_population: pondNbt.get("max_population").toString(),
      type: pondNbt.get("type").toString(),
    });
  }
});

BlockEvents.placed(
  [
    "shippingbin:smart_shipping_bin",
    "shippingbin:basic_shipping_bin",
    "society:artisan_hopper",
    "society:mini_artisan_hopper",
    "society:fish_pond_basket",
    "society:auto_grabber",
  ],
  (e) => {
    const playerUUID = e.player.getUuid().toString();
    let nbt = e.block.entityData;
    nbt.merge({ data: { owner: playerUUID } });
    e.block.setEntityData(nbt);
  }
);
