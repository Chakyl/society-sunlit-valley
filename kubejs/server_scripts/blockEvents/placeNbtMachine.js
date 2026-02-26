console.info("[SOCIETY] placeNbtMachine.js loaded");

BlockEvents.placed("society:prize_machine", (e) => {
  let item = e.player.getHeldItem("main_hand");
  let prizeNbt;
  if (item.id !== "society:prize_machine") item = e.player.getHeldItem("off_hand");
  if (item.id !== "society:prize_machine") return;
  prizeNbt = item.getNbt();
  if (!prizeNbt.isEmpty()) {
    let nbt = e.block.getEntityData();
    nbt.merge({
      data: {
        prize: Number(prizeNbt.get("prize")),
      },
    });
    e.block.setEntityData(nbt);
  }
});

BlockEvents.placed("society:fish_pond", (e) => {
  const { block, player } = e;
  let item = player.getHeldItem("main_hand");
  let pondNbt;
  if (item.id !== "society:fish_pond") item = player.getHeldItem("off_hand");
  if (item.id !== "society:fish_pond") return;
  pondNbt = item.getNbt();
  if (pondNbt && !pondNbt.isEmpty()) {
    block.set(block.id, {
      facing: block.getProperties().get("facing"),
      valid: true,
      mature: false,
      upgraded: false,
      quest: Boolean(pondNbt.getBoolean("quest")),
    });
    let nbt = block.getEntityData();
    nbt.merge({
      data: {
        type: pondNbt.get("type"),
        quest_id: Number(pondNbt.get("quest_id")),
        population: Number(pondNbt.get("population")),
        max_population: Number(pondNbt.get("max_population")),
      },
    });
    block.setEntityData(nbt);
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
