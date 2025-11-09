console.info("[SOCIETY] animalBedMechanics.js loaded");

global.animalBeds.forEach((bed) => {
  BlockEvents.rightClicked(`society:${bed}_bed`, (e) => {
    const { player, item, hand, block, level, server } = e;
    let nbt = block.getEntityData();
    const { boundToAnimal, animalInside, entityID } = nbt.data;
    if (boundToAnimal && animalInside) {
      let animal = level.createEntity(entityID.toString());
      animal.nbt = nbt.data.entity;
      global.handleHusbandryBase(hand, player, item, animal, level, server);
    }
  });

  BlockEvents.placed(`society:${bed}_bed`, (e) => {
    global.bindNearestAnimalToBed(e.level, e.block, e.player, e.server, bed);
  });

  BlockEvents.broken(`society:${bed}_bed`, (e) => {
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
        animal.persistentData.boundBed = undefined;
      }
    }
  });
});

ServerEvents.highPriorityData((e) => {
  global.husbandryAnimals.forEach((animal) => {
    const splitAnimal = animal.split(":");

    e.addJson(`trofers:trofers/bed/${splitAnimal[0]}_${splitAnimal[1]}.json`, {
      colors: {
        accent: "#EBC542",
        base: "#606060",
      },
      display: {
        scale: 1,
      },
      entity: {
        type: animal,
      },
      name: {
        color: "#805c49",
        text: `${splitAnimal[0]} Bed Model`,
      },
    });
  });
});
