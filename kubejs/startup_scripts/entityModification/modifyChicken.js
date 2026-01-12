const starvationPrevention = (entity, affectionPenaltyMult) => {
  let entityNbt = entity.getNbt();
  const day = global.getDay(entity.level);
  if (day - entity.persistentData.getInt("ageLastFed") > 1) {
    entityNbt.EggLayTime = 20400;
  } else if (Math.random() > entity.persistentData.getInt("affection") / 1000) {
    entityNbt.EggLayTime = entityNbt.EggLayTime + 1000 * affectionPenaltyMult;
  } else if (entityNbt.EggLayTime > 12000) entityNbt.EggLayTime = 10240;
  entity.setNbt(entityNbt);
};

EntityJSEvents.modifyEntity((event) => {
  event.modify("minecraft:chicken", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1000 === 0) {
        starvationPrevention(entity, 1);
      }
    });
  });
  event.modify("untitledduckmod:duck", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1000 === 0) {
        starvationPrevention(entity, 1);
      }
    });
  });
  event.modify("untitledduckmod:goose", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1000 === 0) {
        starvationPrevention(entity, 1);
      }
    });
  });
  event.modify("autumnity:turkey", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1000 === 0) {
        starvationPrevention(entity, 2);
      }
    });
  });
  event.modify("etcetera:chapple", (modifyBuilder) => {
    modifyBuilder.tick((entity) => {
      if (entity.level.time % 1000 === 0) {
        let entityNbt = entity.getNbt();
        const day = global.getDay(entity.level);
        if (day - entity.persistentData.getInt("ageLastFed") > 1) {
          entityNbt.AppleLayTime = 20400;
        } else if (entityNbt.AppleLayTime > 12000) entityNbt.AppleLayTime = 10240;
        entity.setNbt(entityNbt);
      }
    });
  });
});
