console.info("[SOCIETY] plushieMechanics.js loaded");

BlockEvents.placed(global.plushies, (e) => {
  let item = e.player.getHeldItem("main_hand");
  let plushieNbt;
  if (item.id !== e.block.id) item = e.player.getHeldItem("off_hand");
  if (item.id !== e.block.id) return;
  plushieNbt = item.getNbt();
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
          animal.name,
          animal,
          animal
        )
      )
      : baseItem
  );
});

BlockEvents.broken("whimsy_deco:sunlit_singing_frog", (e) => {
  const { block, server } = e;
  const { x, y, z } = block;
  let nbt = block.getEntityData();
  const { type, quest_id, affection, quality, animal } = nbt.data;
  let baseItem = Item.of(
    "whimsy_deco:adv_singing_frog_plushie",
    `{quality_food:{quality:${quality}},type:${type},quest_id:${quest_id},affection:${affection}}`
  );
  server.runCommandSilent(
    `execute positioned ${x} ${y} ${z} run stopsound @e[type=player,distance=..4] block`
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

BlockEvents.rightClicked(global.plushies, (e) => {
  const { item, player, block, hand, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item.id.equals("society:plushie_wand")) {
    let nbt = block.getEntityData();
    const { animal } = nbt.data;
    if (animal && animal.type) {

      let newAnimal = player.level.createEntity(`${animal.type}`);
      newAnimal.setX(block.getX());
      newAnimal.setY(block.getY() + 1);
      newAnimal.setZ(block.getZ());
      if (animal.name) newAnimal.customName = animal.name
      if (animal.Variant) newAnimal.nbt.Variant = animal.Variant
      newAnimal.spawn();
      global.setPlushieExtractedPD(newAnimal, animal)
      nbt.data.animal = undefined;
      block.setEntityData(nbt);
      server.runCommandSilent(
        `playsound botania:babylon_spawn block @a ${player.x} ${player.y} ${player.z}`
      );
      level.spawnParticles(
        "snowyspirit:glow_light",
        true,
        block.x,
        block.y + 0.5,
        block.z,
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        0.2 * rnd(1, 4),
        20,
        2
      );
    } else {
      player.tell(
        Text.translatable("item.society.plushie_wand.no_animal").red()
      );
    }
    global.addItemCooldown(player, item.id, 1);
  }
});
