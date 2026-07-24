global.getLongwingSize = (size) => {
  let resolvedSize = Math.min(1.0, Math.max(0.5, 0.5 + (Math.random() / 2.0)));
  if (size == "normal") resolvedSize = Math.min(1.15, Math.max(0.85, 0.85 + (Math.random() / 5.0)));
  if (size == "larger") resolvedSize = Math.min(1.15, Math.max(0.85, 0.85 + (Math.random() / 3.0)));
  return resolvedSize;
}

global.getLongwingFromEgg = (parent, coparent) => {
  if (parent === coparent) return parent;

  let parent1;
  let parent2;
  global.longwings.forEach((wing, index) => {
    if (wing.variant == parent) parent1 = index;
    if (wing.variant == coparent) parent2 = index;
  });

  let child = parent1 + parent2;
  if (global.longwings.length - 1 < child) child -= global.longwings.length;

  let maxAllowedRarity = Math.min(global.longwings[parent1].rarity, global.longwings[parent2].rarity) - 1;
  let initialChild = child;

  while (global.longwings[child].rarity < maxAllowedRarity) {
    child++;
    if (child >= global.longwings.length) child = 0;
    if (child === initialChild) break;
  }

  return global.longwings[child].variant;
};

global.handleLongwings = (entity, item) => {
  const { level } = entity;
  const entities = level
    .getEntitiesWithin(entity.boundingBox.inflate(8))
    .filter((e) => e !== entity && global.checkEntityTag(e, "society:longwing"));
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
    if (!level.isLoaded(pos)) continue;
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag("minecraft:flowers") && !scannedFlowers.includes(scanBlock.id)) {
      scannedFlowers.push(scanBlock.id);
      scannedBlocks++;
      if (!stolenBlock) stolenBlock = scanBlock;
    }
  }
  const chance = Math.min(1, scannedBlocks * 0.15 - entities.length * 0.1);
  if (chance > 0 && Math.random() <= chance) {
    let drop = level.createEntity("minecraft:item");
    drop.item = item;
    drop.x = x + 0.5;
    drop.y = y;
    drop.z = z + 0.5;
    drop.spawn();
    if (Math.random <= 0.08) {
      stolenBlock.set("minecraft:air");
    }
  }
  if (entities.length > 0 && true && chance > 0 && Math.random() <= (chance / 4)) {
    entities.sort((a, b) => a.distanceToSqr(entity) - b.distanceToSqr(entity));
    let coparent = entities[0];
    let eggs = level.createEntity("minecraft:item");
    let parentVariant = entity.getNbt().Variant;
    let coparentVariant = coparent.getNbt().Variant
    eggs.item = Item.of(
      "1x society:caterpillar_eggs",
      `{parent:"${parentVariant}",coparent:"${coparentVariant}",child:"${global.getLongwingFromEgg(parentVariant, coparentVariant)}",size:${Math.max(0.25, Math.round((((entity.getNbt().size + coparent.getNbt().size) + Math.random()) / 2) * 100) / 100)}}`);
    if (Math.random() <= 0.001) {
      eggs.item = Item.of("society:the_metamorphosize")
    }
    eggs.x = x + 0.5;
    eggs.y = y;
    eggs.z = z + 0.5;
    eggs.spawn();
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
