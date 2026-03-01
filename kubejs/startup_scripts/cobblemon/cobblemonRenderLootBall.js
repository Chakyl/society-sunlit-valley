//priority: -1
const $Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
const $Axis = Java.loadClass("com.mojang.math.Axis")

global.cobblemonRenderLootBall = (renderer, context) => {
    let lightLevel = LevelRenderer.getLightColor(
        context.blockEntity.level,
        context.blockEntityJS.blockPos.above()
    );
    let poseStack = context.poseStack;
    poseStack.pushPose();
    poseStack.translate(0.5, 0.0, 0.5);
    poseStack.scale(1, 1, 1);
    if (context.blockEntity.block) {
        const nbt = context.blockEntity.block.getEntityData();
        if (!nbt || nbt.data.playersLooted.length == 0 || !nbt.data.playersLooted.contains(NBT.stringTag($Minecraft.getInstance().player.getUuid().toString()))) {
            poseStack.mulPose($Axis.YP.rotationDegrees(global.rotationFromFacing(context.blockEntity.block.getProperties().get("facing"))));
            RenderJSWorldRender.renderStatic(
                "sunlit_cobblemon:unlooted_ball",
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
    poseStack.popPose();
};

global.cobblemonLootBallTypes.forEach((tier) => {
    ClientEvents.init((event) => {
        event.registerBlockEntityRenderer(`sunlit_cobblemon:${tier}_loot_ball`, (c) =>
            RenderJSBlockEntityRenderer.create(c)
                .setShouldRenderOffScreen((b) => true)
                .setCustomRender((renderer, context) => {
                    global.cobblemonRenderLootBall(renderer, context);
                })
        );
    });
});