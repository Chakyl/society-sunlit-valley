BlockEvents.placed(global.plushies, (e) => {
  const plushieNbt = e.player.getHeldItem("main_hand").getNbt();
  if (plushieNbt) {
    let nbt = e.block.getEntityData();
    nbt.merge({
      data: {
        type: plushieNbt.get("type"),
        quest_id: plushieNbt.get("quest_id"),
        affection: plushieNbt.get("affection"),
        quality: plushieNbt.get("quality_food").get("quality"),
      },
    });
    let animal = plushieNbt.get("animal");
    if (animal) {
      nbt.merge({
        data: {
          animal: animal,
        },
      });
    }
    e.block.setEntityData(nbt);
  }
});

BlockEvents.broken(global.plushies, (e) => {
  const { block } = e;
  let nbt = block.getEntityData();
  const { type, quest_id, affection, quality, animal } = nbt.data;
  let baseItem = Item.of(
    block.id,
    `{quality_food:{quality:${quality}},type:${type},quest_id:${quest_id},affection:${affection}}`
  );
  block.popItem(
    animal
      ? Item.of(
          block.id,
          global.getPlushieItemNbt(
            baseItem.getNbt(),
            animal.type,
            animal.customName,
            animal,
            animal
          )
        )
      : baseItem
  );
});

BlockEvents.broken("whimsy_deco:sunlit_singing_frog", (e) => {
  const { block } = e;
  let nbt = e.block.getEntityData();
  const { type, quest_id, affection, quality, animal } = nbt.data;
  let baseItem = Item.of(
    block.id,
    `{quality_food:{quality:${quality}},type:${type},quest_id:${quest_id},affection:${affection}}`
  );
  block.popItem(
    animal
      ? Item.of(
          block.id,
          global.getPlushieItemNbt(
            baseItem.getNbt(),
            animal.type,
            animal.customName,
            animal,
            animal
          )
        )
      : baseItem
  );
});

BlockEvents.rightClicked("whimsy_deco:gatcha_machine", (e) => {
  const { item, player, block, hand, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.id.equals("numismatics:sun")) {
      item.count -= 1;
      block.popItemFromFace(
        "society:plushie_capsule",
        block.properties.get("facing")
      );
      server.runCommandSilent(
        `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
      );
      global.addItemCooldown(player, item.id, 1);
    } else {
      player.tell(
        Text.translatable(
          "tooltip.society.gatcha_machine",
          Text.translatable("item.numismatics.sun").gold()
        )
      );
    }
  }
});
