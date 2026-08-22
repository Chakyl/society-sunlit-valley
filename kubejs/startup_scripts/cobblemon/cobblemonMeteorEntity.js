const $ClipContext = Java.loadClass("net.minecraft.world.level.ClipContext")

/** @param {Internal.Entity} entity */
function onMeteorHit(entity) {
    entity.level.spawnParticles('minecraft:explosion', false, entity.x, entity.y, entity.z, 1, 1, 1, 10, 0)
    entity.level.spawnParticles('minecraft:campfire_cosy_smoke', false, entity.x, entity.y, entity.z, 2, 2, 2, 30, 0)
    entity.level.spawnParticles('snowyspirit:glow_light', false, entity.x, entity.y, entity.z, 3, 3, 3, 50, 0)
    entity.level.spawnParticles('species:wicked_ember', false, entity.x, entity.y, entity.z, 4, 4, 4, 500, 0)
    entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:entity.generic.explode', 'blocks', 6, 1)
    entity.level.playSound(null, entity.x, entity.y, entity.z, 'botania:starcaller', 'blocks', 6, 1)

    let radius = 1.8
    let seed = Math.random() * 10000
    let noise = (x, y, z) => Math.sin((x + seed) * 0.5) * Math.cos((y + seed) * 0.5) * Math.sin((z + seed) * 0.5) * 0.5 + 0.5
    let finalPosBlock;
    for (let offX = -radius; offX <= radius; offX++) {
        for (let offY = -radius; offY <= radius; offY++) {
            for (let offZ = -radius; offZ <= radius; offZ++) {
                let distance = Math.sqrt(offX * offX + offY * offY + offZ * offZ);
                let jitter = (noise(offX, offY, offZ) - 0.5) * 1.5 + (Math.random() - 0.5) * 0.5;
                if (distance >= radius + jitter) { continue }
                let { finalX, finalY, finalZ } = {
                    finalX: entity.x + offX + 0.5,
                    finalY: entity.y + offY - 1,
                    finalZ: entity.z + offZ + 0.5
                }
                let finalVec = Vec3d(finalX, finalY, finalZ)
                finalPosBlock = entity.level.getBlock(finalVec)
                let destroySpeed = finalPosBlock.blockState.getDestroySpeed(entity.level, finalVec)
                if (destroySpeed > 2.5 || destroySpeed == -1) { continue }
                if (entity.server == null) { continue }
                entity.server.runCommandSilent(
                    `execute in ${entity.level.dimension.toString()} positioned ${finalX} ${finalY} ${finalZ} run setblock ~ ~ ~ sunlit_cobblemon:meteor_chunk`
                )
            }
        }
    }
    global.summonRaidPokemon(entity.server, entity.level, entity.level.getBlock(finalPosBlock.getPos().above()), "deoxys", "", 95, 75, false, false, 0);
    entity.remove('discarded') // delete entity
}

global.meteorOnHitBlock = (/** @type {Internal.ContextUtils$ProjectileBlockHitContext} */ ctx) => {
    const { entity, result } = ctx;
    onMeteorHit(entity)
}
global.meteorOnHitEntity = (/** @type {Internal.ContextUtils$ProjectileEntityHitContext} */ ctx) => {
    const { entity, result } = ctx;
    onMeteorHit(entity)
}
global.meteorOnAddedToWorld = (/** @type {Internal.Entity} */ entity) => {
    entity.setNoGravity(true)
}
global.meteorTick = (/** @type {Internal.Entity} */ entity) => {
    entity.level.spawnParticles('minecraft:campfire_cosy_smoke', false, entity.x, entity.y, entity.z, 0.5, 0.5, 0.5, 3, 0)
    entity.level.spawnParticles('snowyspirit:glow_light', false, entity.x, entity.y, entity.z, 1, 1, 1, 25, 0)
    let moveDelta = entity.nbt["BalmData"].delta
    if (moveDelta == null || moveDelta.x == null) return
    entity.setDeltaMovement(Vec3d(moveDelta.x, moveDelta.y, moveDelta.z))
}

StartupEvents.registry('entity_type', event => {
    /** @type {Internal.ProjectileEntityJSBuilder} */
    let meteor = event.create('sunlit_cobblemon:meteor_entity', 'entityjs:projectile')
        .isAttackable(false)
        .mobCategory('misc')
        .sized(2, 2)
        .noItem()

    if (global.meteorRenderer) {
        meteor.render(global.meteorRenderer)
            .renderType(_ => global.CUTOUT_MIPPED)
            .renderScale(0, 0, 0);
    }
    meteor.tick(entity => { global.meteorTick(entity) })
    meteor.onHitEntity(ctx => { global.meteorOnHitEntity(ctx) })
    meteor.onAddedToWorld(entity => { global.meteorOnAddedToWorld(entity) })
    meteor.onHitBlock(ctx => { global.meteorOnHitBlock(ctx) })
})