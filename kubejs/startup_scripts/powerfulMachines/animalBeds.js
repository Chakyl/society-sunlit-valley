console.info("[SOCIETY] animalBeds.js loaded");
const sleepParticles = (level, x, y, z) => {
  level.spawnParticles(
    "species:snoring",
    true,
    x,
    y + 1.5,
    z,
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    10,
    0.05
  );
  level.spawnParticles(
    "windswept:feather_cloak",
    true,
    x,
    y + 1.5,
    z,
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    20,
    0.05
  );
};

global.bindNearestAnimalToBed = (level, block, player, server) => {
  let nearbyFarmAnimals = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(5))
    .filter((scanEntity) => global.checkEntityTag(scanEntity, "society:husbandry_animal"));
  let nbt = block.getEntityData();
  const { boundToAnimal } = nbt.data;

  if (!boundToAnimal) {
    let foundBoundable = false;

    nearbyFarmAnimals.forEach((animal) => {
      let data = animal.persistentData;
      if (!foundBoundable && data && data.boundBed == undefined) {
        sleepParticles(level, animal.x, animal.y, animal.z);
        const { x, y, z } = block.getPos();
        data.boundBed = { x: x, y: y, z: z };
        nbt.merge({
          data: {
            entity: animal.getNbt(),
            entityID: animal.type,
            persistentData: data,
            boundToAnimal: true,
            animalInside: true,
          },
        });
        if (player && server) {
          let name = animal.customName ? animal.customName.getString() : undefined;
          if (!name) {
            name = global.formatName(String(animal.type.split(":")[1]).replace(/_/g, " "));
            if (name.equals("Domestic tribull")) name = "Domestic tri-bull";
          }
          server.runCommandSilent(
            `emberstextapi sendcustom ${player.username} {anchor:"BOTTOM_CENTER",background:1,wrap:220,align:"BOTTOM_CENTER",color:"#55FF55",offsetY:-100} 40 ${name} felt at home in the bed!`
          );
        }
        animal.setRemoved("unloaded_to_chunk");
        block.setEntityData(nbt);
        foundBoundable = true;
      }
    });
  }
};

global.runAnimalBed = (blockEntity) => {
  const { block, level } = blockEntity;
  let nbt = block.getEntityData();
  const { boundToAnimal, animalInside, entity, entityID } = nbt.data;

  if (!boundToAnimal) {
    global.bindNearestAnimalToBed(level, block);
  } else {
    let nearbyPlayers = level
      .getEntitiesWithin(AABB.ofBlock(block).inflate(10))
      .filter((scanEntity) => scanEntity.isPlayer());
    if (!level.hasNeighborSignal(block.pos)) {
      if (nearbyPlayers.length > 0 && animalInside) {
        let animal = level.createEntity(entityID.toString());
        entity.Pos[0] = Number(block.getX());
        entity.Pos[1] = Number(block.getY() + 0.2);
        entity.Pos[2] = Number(block.getZ());
        animal.nbt = entity.copy();
        animal.spawn();
        nbt.merge({
          data: {
            animalInside: false,
          },
        });
        console.log("Waking up!");
      } else if (nearbyPlayers.length == 0 && !animalInside) {
        console.log("attempting sleep");
        let nearbyFarmAnimals = level
          .getEntitiesWithin(AABB.ofBlock(block).inflate(5))
          .filter((scanEntity) => global.checkEntityTag(scanEntity, "society:husbandry_animal"));

        console.log(nearbyFarmAnimals.length);
        if (boundToAnimal) {
          let foundBoundAnimal = false;

          nearbyFarmAnimals.forEach((animal) => {
            console.log(animal.getUuid().toString());
            console.log(entity.getUUID("UUID").toString());
            console.log("Matches: " + animal.getUuid().toString().equals(entity.getUUID("UUID").toString()));
            if (!foundBoundAnimal && animal.getUuid().toString().equals(entity.getUUID("UUID").toString())) {
              sleepParticles(level, animal.x, animal.y, animal.z);
              nbt.merge({
                data: {
                  entity: animal.getNbt(),
                  animalInside: true,
                },
              });
              animal.setRemoved("unloaded_to_chunk");
              block.setEntityData(nbt);
              foundBoundAnimal = true;
              console.log("Sleeping!");
            }
          });
        }
      }

      // block.setEntityData(nbt);
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:coop_bed", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.gray("Harvests Milk and Special items from Farm Animals into inventory below.")
      );
      item.tooltip(Text.gray("Uses the skills of player that places it."));
      item.tooltip(Text.gold("Upgrade with Magic Shears to collect drops."));
      item.modelJson({
        parent: "society:block/artisan_hopper",
      });
    })
    .model("society:block/artisan_hopper")
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({
        boundToAnimal: false,
        animalInside: false,
        persistentData: undefined,
        entity: undefined,
        entityID: undefined,
      });
      blockInfo.serverTick(200, 0, (entity) => {
        global.runAnimalBed(entity);
      });
    })
    .lightLevel(15);
});
