console.info("[SOCIETY] placeNbtMachine.js loaded");

BlockEvents.rightClicked("society:coop_bed", (e) => {
  const { player, item, hand, block, level, server } = e;
  let nbt = block.getEntityData();
  const { boundToAnimal, animalInside, persistentData, entity, entityID } = nbt.data;
  if (boundToAnimal && animalInside) {
    let animal = level.createEntity(entityID.toString());
    animal.nbt = nbt.data.entity;
    global.handleHusbandryBase(hand, player, item, animal, level, server);
  }
});

BlockEvents.placed("society:coop_bed", (e) => {
  global.bindNearestAnimalToBed(e.level, e.block, e.player, e.server);
});

BlockEvents.broken("society:coop_bed", (e) => {
  const { block, level } = e;
  let nbt = block.getEntityData();
  const { boundToAnimal, animalInside, entity, entityID } = nbt.data;
  if (boundToAnimal) {
    if (animalInside) {
      let animal = level.createEntity(entityID.toString());
      entity.Pos[0] = Number(block.getX());
      entity.Pos[1] = Number(block.getY() + 0.2);
      entity.Pos[2] = Number(block.getZ());
      animal.nbt = nbt.data.entity;
      animal.spawn();
      animal.persistentData.boundBed = undefined
    }
  }
});
