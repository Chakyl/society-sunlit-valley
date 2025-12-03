//priority: -1
const Axis = Java.loadClass("com.mojang.math.Axis");

global.renderBedAnimal = (renderer, context) => {
  let lightLevel = LevelRenderer.getLightColor(
    context.blockEntity.level,
    context.blockEntityJS.blockPos.above()
  );
  let poseStack = context.poseStack;
  poseStack.pushPose();
  poseStack.translate(0.5, -0.26, 0.5);
  poseStack.scale(4, 4, 4);
  if (context.blockEntity.block) {
    poseStack.mulPose(
      Axis.YP.rotationDegrees(
        global.rotationFromFacing(context.blockEntity.block.getProperties().get("facing"))
      )
    );
    const nbt = context.blockEntity.block.getEntityData();
    if (nbt) {
      const { entityID, animalInside } = nbt.data;
      if (animalInside && entityID) {
        const splitAnimal = entityID.split(":");
        RenderJSWorldRender.renderStatic(
          Item.of(
            "trofers:large_plate",
            `{BlockEntityTag:{Trophy:"trofers:bed/${splitAnimal[0]}_${splitAnimal[1]}"}}`
          ),
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
if (Platform.isClientEnvironment()) {
  global.animalBeds.forEach((bed) => {
    ClientEvents.init((event) => {
      event.registerBlockEntityRenderer(`society:${bed}_bed`, (c) =>
        RenderJSBlockEntityRenderer.create(c)
          .setShouldRenderOffScreen((b) => true)
          .setCustomRender((renderer, context) => {
            global.renderBedAnimal(renderer, context);
          })
      );
    });
  });
}
