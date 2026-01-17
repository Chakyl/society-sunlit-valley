console.info("[SOCIETY] juiceInserter.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:juice_inserter", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .box(1, 0, 1, 15, 16, 15)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.juice_inserter.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/juice_inserter",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ Fluid: 0, FluidType: "" });
      blockInfo.serverTick(10, 0, (entity) => {
        global.runJuiceInserter(entity);
      });
      blockInfo.attachCapability(
        CapabilityBuilder.FLUID.customBlockEntity()
          .getCapacity(() => 10000)
          .getFluid((blockInfo, fl) => global.getFluid(blockInfo))
          .onFill((blockInfo, fluid, sim) => global.onFill(blockInfo, fluid, sim))
          .onDrain((blockInfo, fluid, sim) => global.onDrain(blockInfo, fluid, sim))
      );
    }).blockstateJson = {
    multipart: [
      {
        apply: { model: "society:block/kubejs/juice_inserter_particle" },
      },
    ].concat(getCardinalMultipartJsonBasic("juice_inserter")),
  };
});

const juiceMap = [
  { fluid: "vinery:white_grape_juice", barrelFluidId: "white_general" },
  { fluid: "vinery:white_savanna_grape_juice", barrelFluidId: "white_savanna" },
  { fluid: "vinery:white_taiga_grape_juice", barrelFluidId: "white_taiga" },
  { fluid: "vinery:white_jungle_grape_juice", barrelFluidId: "white_jungle" },
  { fluid: "nethervinery:warped_grape_juice", barrelFluidId: "white_warped" },
  { fluid: "vinery:red_grape_juice", barrelFluidId: "red_general" },
  { fluid: "vinery:red_savanna_grape_juice", barrelFluidId: "red_savanna" },
  { fluid: "vinery:red_taiga_grape_juice", barrelFluidId: "red_taiga" },
  { fluid: "vinery:red_jungle_grape_juice", barrelFluidId: "red_jungle" },
  { fluid: "nethervinery:crimson_grape_juice", barrelFluidId: "red_crimson" },
  { fluid: "vinery:apple_juice", barrelFluidId: "apple" },
];
global.runJuiceInserter = (blockInfo) => {
  const { block, level } = blockInfo;
  const fluidHandler = blockInfo.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
  const fermentationBarrel = global.getFermentingBarrel(level, level.getBlock(block.getPos()));
  if (!fermentationBarrel.id.equals("vinery:fermentation_barrel")) return;
  let barrelData = fermentationBarrel.getEntityData();
  if (!barrelData) return;
  if (!block.getEntityData()) return;
  const fluidData = block.getEntityData().ForgeData;
  if (!barrelData) return;
  if (Number(barrelData.FluidLevel) + 25 > 100) return;
  if (fluidData.Fluid < 250) return;
  juiceMap.forEach((juice) => {
    if (fluidData.FluidType && fluidData.FluidType.equals(juice.fluid)) {
      if (barrelData.FluidLevel === 0) {
        barrelData.JuiceType = juice.barrelFluidId;
        fermentationBarrel.setEntityData(barrelData);
      }
      if (barrelData.JuiceType.equals(juice.barrelFluidId)) {
        fluidHandler.drain(Fluid.of(fluidData.FluidType, 250), "execute");
        barrelData.FluidLevel = barrelData.FluidLevel + 25.0;
        fermentationBarrel.setEntityData(barrelData);
        level
          .getServer()
          .runCommandSilent(`playsound create:spout block @a ${block.x} ${block.y} ${block.z}`);
      }
    }
  });
};
