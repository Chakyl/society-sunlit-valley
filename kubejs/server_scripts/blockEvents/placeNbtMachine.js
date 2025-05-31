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
      facing: e.block.properties.get("facing"),
      valid: true,
      mature: false,
      upgraded: false,
      quest: pondNbt.get("quest"),
      quest_id: pondNbt.get("quest_id"),
      population: pondNbt.get("population"),
      max_population: pondNbt.get("max_population"),
      type: pondNbt.get("type"),
    });
  }
});

BlockEvents.placed(
  [
    "shippingbin:smart_shipping_bin",
    "shippingbin:basic_shipping_bin",
    "society:artisan_hopper",
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
