if (Platform.isClientEnvironment()) {
    global.CUTOUT_MIPPED = Java.loadClass("net.minecraftforge.client.ForgeRenderTypes").ITEM_LAYERED_CUTOUT_MIPPED.get();
    let BLOCK_ATLAS = Java.loadClass("net.minecraft.world.inventory.InventoryMenu").BLOCK_ATLAS;
    let RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");

    let RADIUS = 2.;
    let att = new Matrix3f();
    let u0 = 0., v0 = 0., u1 = 0., v1 = 0.;

    ForgeModEvents.onEvent('net.minecraftforge.client.event.TextureStitchEvent$Post', e => {
        if (e.atlas.location().equals(BLOCK_ATLAS)) {
            let gem = e.atlas.getSprite('sunlit_cobblemon:item/meteor_fragment');
            u0 = gem.getU0();
            v0 = gem.getV0();
            u1 = gem.getU1();
            v1 = gem.getV1();
        }
    });

    global.meteorRenderer = ctx => {
        // pls dont cringe 🥺 - cyb
        let pose = ctx.poseStack.last().pose();
        let normal = ctx.poseStack.last().normal();
        let proj = new Matrix4f(RenderSystem.getProjectionMatrix());
        proj.m00(proj.m11());
        let mvp = proj.mul(pose);
        let vel = ctx.entity.getDeltaMovement().toVector3f().mulProject(mvp).sub(new Vec3f().mulProject(mvp));
        let x = vel.x(), y = vel.y();
        let n = x * x + y * y;
        if (n < 1E-20) {
            x = 0.; y = -1.;
        } else {
            n = Math.sqrt(n);
            x /= n; y /= n;
        }
        pose.get3x3(att).transpose().mul(new Matrix3f(
            RADIUS * x, RADIUS * y, 0.,
            -RADIUS * y, RADIUS * x, 0.,
            0., 0., 1.
        ));
        let vb = ctx.bufferSource.getBuffer(global.CUTOUT_MIPPED);
        vb.vertex(pose, att.m00(), att.m01(), att.m02()).color(-1).uv(u0, v1)
            .overlayCoords(0xA0000).uv2(0xF0).normal(normal, att.m20(), att.m21(), att.m22()).endVertex();
        vb.vertex(pose, att.m10(), att.m11(), att.m12()).color(-1).uv(u1, v1)
            .overlayCoords(0xA0000).uv2(0xF0).normal(normal, att.m20(), att.m21(), att.m22()).endVertex();
        vb.vertex(pose, -att.m00(), -att.m01(), -att.m02()).color(-1).uv(u1, v0)
            .overlayCoords(0xA0000).uv2(0xF0).normal(normal, att.m20(), att.m21(), att.m22()).endVertex();
        vb.vertex(pose, -att.m10(), -att.m11(), -att.m12()).color(-1).uv(u0, v0)
            .overlayCoords(0xA0000).uv2(0xF0).normal(normal, att.m20(), att.m21(), att.m22()).endVertex();
    };
}