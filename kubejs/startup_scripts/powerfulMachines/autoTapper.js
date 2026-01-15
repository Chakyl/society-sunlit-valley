console.info("[SOCIETY] autoTapper.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:auto_tapper", "cardinal")
    .displayName("Auto-Tapper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .property(booleanProperty.create("error"))
    .defaultState((state) => {
      state.set(booleanProperty.create("error"), false);
    })
    .placementState((state) => {
      state.set(booleanProperty.create("error"), false);
    })
    .box(0, 0, 0, 16, 18, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.auto_tapper.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/auto_tapper",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ Fluid: 0, FluidType: "" });
      blockInfo.serverTick(200, 0, (entity) => {
        global.runAutoTapper(entity);
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
        apply: { model: "society:block/kubejs/auto_tapper_particle" },
      },
      {
        when: { error: true },
        apply: { model: "society:block/kubejs/error" },
      },
    ].concat(getCardinalMultipartJsonBasic("auto_tapper")),
  };
});
global.runAutoTapper = (blockInfo) => {
  const { block, level } = blockInfo;

  const fluidHandler = blockInfo.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
  const fluidData = global.handleTapperRandomTick(
    { block: block, level: level, server: level.getServer() },
    true
  );
  if (global.susFunctionLogging) console.log("[SOCIETY-SUSFN] autoTapper.js");
  if (fluidData && block.properties.get("error") == "false") {
    fluidHandler.fill(Fluid.of(fluidData.fluid, Math.round(10 / fluidData.time)), "execute");
  }
};
