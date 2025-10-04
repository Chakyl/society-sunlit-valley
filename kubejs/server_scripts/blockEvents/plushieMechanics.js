BlockEvents.placed(global.plushies, (e) => {
  const plushieNbt = e.player.getHeldItem("main_hand").getNbt();
  if (plushieNbt) {
    e.block.set(e.block.id, {
      facing: e.block.getProperties().get("facing"),
      quest_id: plushieNbt.get("quest_id").toString(),
      affection: plushieNbt.get("affection").toString(),
      quality: plushieNbt.get("quality_food").get("quality").toString(),
      type: plushieNbt.get("type").toString(),
    });
  }
});

BlockEvents.broken(global.plushies, (e) => {
  const { block } = e;
  const type = block.properties.get("type").toLowerCase();
  block.popItem(
    Item.of(
      block.id,
      `{quality_food:{quality:${block.properties.get(
        "quality"
      )}},type:${type},quest_id:${block.properties.get(
        "quest_id"
      )},affection:${block.properties.get("affection")}}`
    )
  );
});

BlockEvents.broken("whimsy_deco:sunlit_singing_frog", (e) => {
  const { block } = e;
  const type = block.properties.get("type").toLowerCase();
  if (type !== "0") {
    block.popItem(
      Item.of(
        "whimsy_deco:adv_singing_frog_plushie",
        `{quality_food:{quality:${block.properties.get(
          "quality"
        )}},type:${type},quest_id:${block.properties.get(
          "quest_id"
        )},affection:${block.properties.get("affection")}}`
      )
    );
  }
});

BlockEvents.rightClicked("whimsy_deco:gatcha_machine", (e) => {
  const { item, player, block, hand, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (item.id.equals("numismatics:sun")) {
      item.count -= 1;
      block.popItemFromFace("society:plushie_capsule", block.properties.get("facing"));
      server.runCommandSilent(
        `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
      );
      global.addItemCooldown(player, item.id, 1);
    } else {
      player.tell(`§7Right click with an §6Iridium Coin§7 to purchase a Plushie Capsule!`);
    }
  }
});
