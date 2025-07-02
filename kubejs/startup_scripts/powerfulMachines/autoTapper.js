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
      item.tooltip(Text.gray("Collects Tapper resources automatically."));
      item.tooltip(Text.gray("Tapped fluid in its tank must be pumped out."));
      item.modelJson({
        parent: "society:block/auto_tapper",
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
          .getFluid((blockInfo, fl) => {
            const foundFluid = blockInfo.persistentData.getString("FluidType");
            if (!foundFluid) return Fluid.of("minecraft:water", 0);
            return Fluid.of(
              foundFluid,
              blockInfo.persistentData.getInt("Fluid")
            );
          })
          .onFill((blockInfo, fluid, sim) => {
            const fluidData = blockInfo.persistentData.getInt("Fluid");
            const filled = Math.min(10000 - fluidData, fluid.getAmount());
            if (!sim) {
              const storedFluidId =
                blockInfo.persistentData.getString("FluidType");
              const incomingFluidId = fluid.getId();
              if (storedFluidId === "" || fluidData === 0) {
                blockInfo.persistentData.putString(
                  "FluidType",
                  incomingFluidId
                );
                blockInfo.persistentData.putInt("Fluid", fluidData + filled);
              } else if (storedFluidId === incomingFluidId) {
                blockInfo.persistentData.putInt("Fluid", fluidData + filled);
              } else {
                return (filled = 0);
              }
            }
            return filled;
          })
          .onDrain((blockInfo, fluid, sim) => {
            const fluidData = blockInfo.persistentData.getInt("Fluid");
            const drained = Math.min(fluidData, fluid.getAmount());
            if (!sim)
              blockInfo.persistentData.putInt("Fluid", fluidData - drained);
            return drained;
          })
      );
    })
    .blockstateJson = MultipartBuilder("society:block/auto_tapper")
      .particle()
      .error({ error: true })
      .complex(
        MultipartModifiers.directional(),
      )
      .build();
});
global.runAutoTapper = (blockInfo) => {
  const { block, level, server } = blockInfo;

  const fluidHandler = blockInfo
    .getCapability(ForgeCapabilities.FLUID_HANDLER)
    .orElse(null);
  const fluidData = global.handleTapperRandomTick(
    { block: block, level: level, server: server },
    true
  );
  if (fluidData && block.properties.get("error") == "false") {
    fluidHandler.fill(
      Fluid.of(fluidData.fluid, Math.round(10 / fluidData.time)),
      "execute"
    );
  }
};
