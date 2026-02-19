global.handleLongwings = (entity, item) => {
  const { level } = entity;
  const entities = level
    .getEntitiesWithin(entity.boundingBox.inflate(8))
    .filter((e) => global.checkEntityTag(e, "society:longwing"));
  const radius = 4;
  const { x, y, z } = entity;
  let scanBlock;
  let scannedBlocks = 0;
  let scannedFlowers = [];
  let stolenBlock;
  if (global.susFunctionLogging) console.log("[SOCIETY-SUSFN] modifyLongwings.js");
  for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius), [
    x + radius,
    y + radius,
    z + radius,
  ])) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag("minecraft:flowers") && !scannedFlowers.includes(scanBlock.id)) {
      scannedFlowers.push(scanBlock.id);
      scannedBlocks++;
      if (!stolenBlock) stolenBlock = scanBlock;
    }
  }
  const chance = scannedBlocks * 0.15 - entities.length * 0.1;
  if (chance > 0 && Math.random() <= chance) {
    let drop = level.createEntity("minecraft:item");
    drop.item = item;
    drop.x = x;
    drop.y = y;
    drop.z = z;
    drop.spawn();
    if (Math.random <= 0.08) {
      stolenBlock.set("minecraft:air");
    }
  }
};

EntityJSEvents.modifyEntity((event) => {
  event.modify("longwings:moth", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 6000 === 0) {
        global.handleLongwings(entity, "society:moth_pollen");
      }
    });
  });
  event.modify("longwings:butterfly", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 6000 === 0) {
        global.handleLongwings(entity, "society:butterfly_amber");
      }
    });
  });
});
