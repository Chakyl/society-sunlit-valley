console.info("[SOCIETY] animalBeds.js loaded");

global.animalBeds = ["coop", "deluxe_coop", "luxury_coop", "barn", "deluxe_barn", "luxury_barn"];
global.animalHasNoBed = (data) => data.get("boundBed") == null || data.get("boundBed") == "-1";
global.bedDefinitions = new Map([
  [
    "barn",
    [
      "minecraft:cow",
      "minecraft:sheep",
      "snowpig:snow_pig",
      "meadow:wooly_sheep",
      "snuffles:snuffle",
      "wildernature:deer",
      "atmospheric:cochineal",
    ],
  ],
  [
    "deluxe_barn",
    [
      "minecraft:pig",
      "meadow:wooly_cow",
      "wildernature:bison",
      "wildernature:raccoon",
      "crittersandcompanions:red_panda",
      "wildernature:minisheep",
      "minecraft:panda",
      "minecraft:mooshroom",
      "meadow:water_buffalo",
    ],
  ],
  [
    "luxury_barn",
    [
      "minecraft:goat",
      "minecraft:sniffer",
      "buzzier_bees:moobloom",
      "species:mammutilation",
      "species:goober",
      "farmlife:domestic_tribull",
      "windswept:frostbiter",
    ],
  ],
  [
    "coop",
    [
      "minecraft:chicken",
      "untitledduckmod:duck",
      "minecraft:frog",
      "minecraft:squid",
      "minecraft:glow_squid",
      "autumnity:snail",
    ],
  ],
  [
    "deluxe_coop",
    ["untitledduckmod:goose", "minecraft:rabbit", "wildernature:squirrel", "autumnity:turkey"],
  ],
  [
    "luxury_coop",
    [
      "species:wraptor",
      "etcetera:chapple",
      "wildernature:flamingo",
      "wildernature:penguin",
      "farmlife:galliraptor",
    ],
  ],
]);

let sendCustomPayload = (level, pos, nbt) => {
  level.players
    .stream()
    .filter((player) => player.distanceToSqr(pos) <= 4096)
    .forEach((player) => {
      player.sendData("society:animal_bed_data", {
        entityData: nbt,
        bed: {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        },
      });
    });
};

global.getAnimalBedType = (animal) => {
  let foundBed;
  Array.from(global.bedDefinitions.keys()).forEach((element) => {
    global.bedDefinitions.get(element).forEach((bedAnimal) => {
      if (animal.equals(bedAnimal)) {
        foundBed = element;
      }
    });
  });
  return global.formatName(foundBed);
};

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

global.bindNearestAnimalToBed = (level, block, player, server, bedType) => {
  let nearbyFarmAnimals = level
    .getEntitiesWithin(AABB.ofBlock(block).inflate(5))
    .filter((scanEntity) => global.checkEntityTag(scanEntity, `society:${bedType}_bed`));
  let nbt = block.getEntityData();
  const { boundToAnimal } = nbt.data;

  if (!boundToAnimal) {
    let foundBoundable = false;

    nearbyFarmAnimals.forEach((animal) => {
      let data = animal.persistentData;
      if (!foundBoundable && data && global.animalHasNoBed(data)) {
        sleepParticles(level, animal.x, animal.y, animal.z);
        const { x, y, z } = block.getPos();
        data.boundBed = { x: x, y: y, z: z };
        let animalNbt = animal.getNbt();
        animalNbt.Pos[0] = Number(block.getX());
        animalNbt.Pos[1] = Number(block.getY() + 0.2);
        animalNbt.Pos[2] = Number(block.getZ());
        nbt.merge({
          data: {
            entity: animalNbt,
            entityID: animal.type,
            boundToAnimal: true,
            animalInside: true,
          },
        });
        sendCustomPayload(level, block.pos, nbt);
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
        block.setEntityData(nbt);
        foundBoundable = true;
        animal.setRemoved("unloaded_to_chunk");
      }
    });
  }
};

global.runAnimalBed = (blockEntity, bedType) => {
  const { block, level } = blockEntity;
  let nbt = block.getEntityData();
  const { boundToAnimal, animalInside, entity, entityID } = nbt.data;

  if (!boundToAnimal) {
    global.bindNearestAnimalToBed(level, block, undefined, undefined, bedType);
  } else {
    let nearbyPlayers = level
      .getEntitiesWithin(AABB.ofBlock(block).inflate(6))
      .filter((scanEntity) => scanEntity.isPlayer());
    if (!level.hasNeighborSignal(block.pos) && nearbyPlayers.length > 0 && animalInside) {
      let animal = level.createEntity(entityID.toString());
      animal.nbt = entity;
      animal.nbt.Pos[0] = Number(block.getX());
      animal.nbt.Pos[1] = Number(block.getY() + 0.2);
      animal.nbt.Pos[2] = Number(block.getZ());
      animal.spawn();
      nbt.merge({
        data: {
          animalInside: false,
        },
      });
      sendCustomPayload(level, block.pos, nbt);
      block.setEntityData(nbt);
    } else if ((level.hasNeighborSignal(block.pos) || nearbyPlayers.length == 0) && !animalInside) {
      let nearbyFarmAnimals = level
        .getEntitiesWithin(AABB.ofBlock(block).inflate(20))
        .filter((scanEntity) => global.checkEntityTag(scanEntity, `society:${bedType}_bed`));

      if (boundToAnimal) {
        let foundBoundAnimal = false;
        nearbyFarmAnimals.forEach((animal) => {
          if (
            !foundBoundAnimal &&
            animal.getUuid().toString().equals(entity.getUUID("UUID").toString())
          ) {
            if (!global.animalHasNoBed(animal.persistentData)) {
              sleepParticles(level, animal.x, animal.y, animal.z);
              let animalNbt = animal.getNbt();
              animalNbt.Pos[0] = Number(block.getX());
              animalNbt.Pos[1] = Number(block.getY() + 0.2);
              animalNbt.Pos[2] = Number(block.getZ());
              nbt.merge({
                data: {
                  entity: animal.getNbt(),
                  animalInside: true,
                },
              });
              block.setEntityData(nbt);
              foundBoundAnimal = true;
              sendCustomPayload(level, block.pos, nbt);
              animal.setRemoved("unloaded_to_chunk");
            } else {
              nbt.merge({
                data: {
                  entity: "",
                  entityID: "",
                  boundToAnimal: false,
                  animalInside: false,
                },
              });
              block.setEntityData(nbt);
            }
          }
        });
      }
    }
  }
};

global.animalBeds.forEach((bed) => {
  let bedWidth = bed.includes("barn") ? 20 : 16;
  StartupEvents.registry("block", (event) => {
    event
      .create(`society:${bed}_bed`, "cardinal")
      .tagBlock("minecraft:mineable/pickaxe")
      .tagBlock("minecraft:mineable/axe")
      .tagBlock("minecraft:needs_stone_tool")
      .box(0, 0, 0, bedWidth, 4, bedWidth)
      .defaultCutout()
      .tagBlock("society:animal_bed")
      .item((item) => {
        item.modelJson({
          parent: `society:block/animal_beds/${bed}_bed`,
        });
      })
      .model(`society:block/animal_beds/${bed}_bed`)
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
          global.runAnimalBed(entity, bed);
        });
      });
  });
});
