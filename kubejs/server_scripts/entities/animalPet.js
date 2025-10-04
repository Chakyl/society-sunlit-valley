console.info("[SOCIETY] animalPet.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:pet_animal")) return;
  if (hand == "MAIN_HAND") {
    let data = target.persistentData;
    let possibleGifts;
    let gift = level.createEntity("minecraft:item");

    if (!data.gifted && data.affection >= 1000) {
      let nonIdType = String(target.type.split(":")[1]).replace(/_/g, " ");
      let name = target.customName ? target.customName.getString() : undefined;
      let capitalizedType = global.formatName(nonIdType);
      server.runCommandSilent(
        `emberstextapi sendcustom ${
          player.username
        } {anchor:"BOTTOM_CENTER",background:1,align:"BOTTOM_CENTER",color:"#55FF55",y:-90} 80 ${
          name ? name : capitalizedType
        } really loves you!`
      );

      global.petGifts.forEach((gift) => {
        if (gift.animal === target.type) possibleGifts = gift.gifts;
      });
      data.gifted = true;
      gift.x = player.x;
      gift.y = player.y;
      gift.z = player.z;
      gift.item = Item.of(possibleGifts[rnd(0, possibleGifts.length - 1)]);
      gift.spawn();
      level.spawnParticles(
        "minecraft:heart",
        true,
        target.x,
        target.y + 1.5,
        target.z,
        0.2 * rnd(0, 3),
        0.2 * rnd(0, 3),
        0.2 * rnd(0, 3),
        20,
        0.01
      );
    }
  }
});
