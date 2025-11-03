global.renderBedAnimal = (renderer, context) => {
  var lightLevel = LevelRenderer.getLightColor(
    context.blockEntity.level,
    context.blockEntityJS.blockPos.above()
  );
  var poseStack = context.poseStack;
  poseStack.pushPose();
  poseStack.translate(0.5, 0.5, 0.5);
  poseStack.scale(5,5,5)
  if (context.blockEntity.block) {
    const nbt = context.blockEntity.block.getEntityData();
    if (nbt) {
      const { entityID, animalInside } = nbt.data;
      if (animalInside && entityID) {
        RenderJSWorldRender.renderStatic(
          Item.of("trofers:large_plate", `{BlockEntityTag:{Trophy:"trofers:blaze"}}`),
          "ground",
          lightLevel,
          context.packedOverlay,
          poseStack,
          context.bufferSource,
          context.blockEntityJS.level,
          0
        );
      }
    }
  }
  poseStack.popPose();
};
ClientEvents.init((event) => {
  event.registerBlockEntityRenderer("society:coop_bed", (c) =>
    RenderJSBlockEntityRenderer.create(c)
      .setShouldRenderOffScreen((b) => true)
      .setCustomRender((renderer, context) => {
        global.renderBedAnimal(renderer, context);
      })
  );
});
