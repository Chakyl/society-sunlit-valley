console.info("[SOCIETY] autoPetter.js loaded");

const autoPetterTickRate = 20;
const autoPetterProgTime = 20;

global.runAutoPetter = (entity) => {
  const { block, level } = entity;
  let radius = 1;

  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  if (morningModulo >= autoPetterProgTime && morningModulo < autoPetterProgTime + autoPetterTickRate) {
    let day = global.getDay(level);

    let nearbyFarmAnimals   = level
      .getEntitiesWithin(AABB.ofBlock(block).inflate(radius))
      .filter((entity) =>
        global.checkEntityTag(entity, "society:husbandry_animal")
      );
    nearbyFarmAnimals.forEach((animal) => {
      let data = animal.persistentData;
      let ageLastPet = data.getInt("ageLastPet");
      let ageLastFed = data.getInt("ageLastFed");
      if (day > ageLastPet) {
        let hungry = day - ageLastFed > 1;
        let affection = data.getInt("affection");
        let affectionIncreaseMult = data.bribed ? 2 : 1;
        let affectionIncrease = 5 * affectionIncreaseMult;

        if (animal.isBaby()) {
          affectionIncrease = affectionIncrease * 2;
        }

        let livableArea = global.getAnimalIsNotCramped(animal, 1.1);
        data.affection = affection + affectionIncrease;
        if (hungry || !livableArea) {
          data.affection = affection - (hungry ? 15 : 25);
        }
        data.ageLastPet = day;
      }
    });
  }
};

StartupEvents.registry("block", (e) => {
  e.create("society:auto_petter", "cardinal")
    .displayName("Auto-Petter")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 8, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.auto_petter.description").gray()
      );
      item.tooltip(
        Text.translatable("tooltip.society.area", `3x3x3`).green()
      );
      item.modelJson({
        parent: "society:block/kubejs/auto_petter",
      });
    })
    .model("society:block/kubejs/auto_petter")
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(autoPetterTickRate, 0, (entity) => {
        global.runAutoPetter(entity)
      })
    }).blockstateJson = {
    multipart: [
      {
        apply: { model: "society:block/kubejs/auto_petter_particle" },
      },
    ].concat(getCardinalMultipartJsonBasic("auto_petter")),
  };
});
