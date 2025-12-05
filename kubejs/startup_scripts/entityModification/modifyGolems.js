global.handleHayGolem = (entity) => {
  const { level } = entity;
  const entities = level
    .getEntitiesWithin(entity.boundingBox.inflate(8))
    .filter((e) => e.type == "golemoverhaul:hay_golem");
  const radius = 4;
  const { x, y, z } = entity;
  let scanBlock;
  if (entities.length <= 1) {
    for (let pos of BlockPos.betweenClosed(
      new BlockPos(x - radius, y - radius, z - radius),
      [x + radius, y + radius, z + radius]
    )) {
      scanBlock = level.getBlock(pos);
      if (rnd10() && scanBlock.hasTag("society:hay_golem_improvable")) {
        if (scanBlock.id.equals("minecraft:farmland")) {
          scanBlock.set(
            "dew_drop_farmland_growth:low_quality_fertilized_farmland",
            scanBlock.getProperties()
          );
        } else if (
          scanBlock.id.equals(
            "dew_drop_farmland_growth:low_quality_fertilized_farmland"
          )
        ) {
          scanBlock.set(
            "dew_drop_farmland_growth:high_quality_fertilized_farmland",
            scanBlock.getProperties()
          );
        } else if (
          scanBlock.id.equals(
            "dew_drop_farmland_growth:high_quality_fertilized_farmland"
          )
        ) {
          scanBlock.set(
            "dew_drop_farmland_growth:pristine_quality_fertilized_farmland",
            scanBlock.getProperties()
          );
        }
        if (level.server) {
          level.server.runCommandSilent(
            `playsound ribbits:entity.ribbit.magic block @a ${scanBlock.x} ${scanBlock.y} ${scanBlock.z}`
          );
        }
        return;
      }
    }
  }
};
global.handleKelpGolem = (entity) => {
  const { level } = entity;
  const { x, y, z } = entity;
  const radius = 4;
  let scanBlock;
  let blockProperties;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.id === "dew_drop_farmland_growth:garden_pot") {
      blockProperties = scanBlock.getProperties();
      blockProperties.moisture = "7";
      scanBlock.set(scanBlock.id, blockProperties);
    }
  }
  if (level.server) {
    level.server.runCommandSilent(
      `playsound minecraft:block.water.ambient block @a ${x} ${y} ${z}`
    );
  }
};

global.handleTerracottaGolem = (entity) => {
  const { level } = entity;
  const { x, y, z } = entity;
  const radius = 4;
  let scanBlock;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.id.equals("minecraft:coarse_dirt")) {
      scanBlock.set("minecraft:clay");
      if (level.server) {
        level.server.runCommandSilent(
          `playsound twigs:block.silt.break block @a ${scanBlock.x} ${scanBlock.y} ${scanBlock.z}`
        );
      }
      return;
    }
  }
};

global.handleSlimeGolem = (entity) => {
  const { level } = entity;
  const entities = level
    .getEntitiesWithin(entity.boundingBox.inflate(8))
    .filter((e) => e.type == "splendid_slimes:splendid_slime");

  const golems = level
    .getEntitiesWithin(entity.boundingBox.inflate(8))
    .filter((e) => e.type == "golemoverhaul:slime_golem");
  if (golems.length <= 1) {
    entities.forEach((slime) => {
      let nbt = slime.getNbt();
      nbt.Happiness = nbt.Happiness + 5;
      slime.setNbt(nbt);
    });
  }
};

EntityJSEvents.modifyEntity((event) => {
  event.modify("golemoverhaul:hay_golem", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 3600 === 0) {
        global.handleHayGolem(entity);
      }
    });
  });
  event.modify("golemoverhaul:kelp_golem", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1200 === 0) {
        global.handleKelpGolem(entity);
      }
    });
  });
  event.modify("golemoverhaul:terracotta_golem", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 600 === 0) {
        global.handleTerracottaGolem(entity);
      }
    });
  });
  event.modify("golemoverhaul:slime_golem", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1200 === 0) {
        global.handleSlimeGolem(entity);
      }
    });
  });
});
