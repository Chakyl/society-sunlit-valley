console.info("[SOCIETY] checkAnimal.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (!global.checkEntityTag(target, "society:longwing")) return;
  if (hand == "MAIN_HAND") {
    let nearbyLongwings = level
      .getEntitiesWithin(target.boundingBox.inflate(8))
      .filter((e) => global.checkEntityTag(e, "society:longwing"));
    let radius = 4;
    let { x, y, z } = target;
    let scanBlock;
    let scannedBlocks = 0;
    let scannedFlowers = [];
    let stolenBlock;
    for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius), [
      x + radius,
      y + radius,
      z + radius,
    ])) {
      if (!level.isLoaded(pos)) continue;
      scanBlock = level.getBlock(pos);
      if (scanBlock.hasTag("minecraft:flowers") && !scannedFlowers.includes(scanBlock.id)) {
        scannedFlowers.push(scanBlock.id);
        scannedBlocks++;
        if (!stolenBlock) stolenBlock = scanBlock;
      }
    }
    let chance = scannedBlocks * 0.15 - nearbyLongwings.length * 0.1;
    let eggChance = chance <= 0 ? "0%" : `${Math.min(100, Math.floor((Math.min(1, chance) / 4) * 100))}%`;
    chance = chance <= 0 ? "0%" : `${Math.min(100, Math.floor(chance * 100))}%`;
    let product = target.type.toString().equals("longwings:butterfly") ? Text.translatable("item.society.butterfly_amber") : Text.translatable("item.society.moth_pollen");
    let longWingNameMessage = `${Text.translatable(`item.longwings.${target.getNbt().Variant}`).toJson()}`;
    let chanceMessage = `${Text.translatable("society.longwings.produce_chance", chance, product).toJson()}`;
    let eggChanceMessage = `${Text.translatable("society.longwings.produce_chance", eggChance, Text.translatable("item.society.caterpillar_eggs")).toJson()}`;
    let longwingCountMessage = `${Text.translatable("society.longwings.longwing_count", `${nearbyLongwings.length - 1}`).toJson()}`;
    let flowerCountMessage = `${Text.translatable("society.longwings.flower_count", `${scannedBlocks}`).toJson()}`;
    global.renderUiText(
      player,
      server,
      {
        longwingName: {
          type: "text",
          x: 0,
          y: -90,
          text: longWingNameMessage,
          color: "#FFFFFF",
          alignX: "center",
          alignY: "bottom",
        },
        longwingNameShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -89,
          text: longWingNameMessage,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
        chanceMessage: {
          type: "text",
          x: 0,
          y: -80,
          text: chanceMessage,
          color: "#FFAA00",
          alignX: "center",
          alignY: "bottom",
        },
        chanceMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -79,
          text: chanceMessage,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
        eggChanceMessage: {
          type: "text",
          x: 0,
          y: -70,
          text: eggChanceMessage,
          color: "#FF55FF",
          alignX: "center",
          alignY: "bottom",
        },
        eggChanceMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -69,
          text: eggChanceMessage,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
        longwingCountMessage: {
          type: "text",
          x: 0,
          y: -60,
          text: longwingCountMessage,
          color: "#FF5555",
          alignX: "center",
          alignY: "bottom",
        },
        longwingCountMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -59,
          text: longwingCountMessage,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
        flowerCountMessage: {
          type: "text",
          x: 0,
          y: -50,
          text: flowerCountMessage,
          color: "#55FF55",
          alignX: "center",
          alignY: "bottom",
        },
        flowerCountMessageShadow: {
          type: "text",
          x: 1,
          z: -1,
          y: -49,
          text: flowerCountMessage,
          color: "#000000",
          alignX: "center",
          alignY: "bottom",
        },
      },
      global.mainUiElementIds
    );
  }
});
