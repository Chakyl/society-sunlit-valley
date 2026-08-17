console.info("[SOCIETY-S-COBBLEMON] registerCobblemonAtmosphericMagnet.js loaded");

const $BooleanProperty = Java.loadClass("net.minecraft.world.level.block.state.properties.BooleanProperty")
global.meteor_spawned_prop = $BooleanProperty.create("meteor_spawned")

function rndPerimeter(cx, cz, size) {
    const dir = Math.floor(Math.random() * 4);
    const t = Math.round((Math.random() * 2 * size) - size);
    switch (dir) {
        case 0: // north
            return { x: cx + t, z: cz - size };
        case 1: // east
            return { x: cx + size, z: cz + t };
        case 2: // south
            return { x: cx + t, z: cz + size };
        case 3: // west
            return { x: cx - size, z: cz + t };
    }
}
function rndFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 
* @param {Vec3d|Object} sourceVecObj
* @param {Vec3d|Object} targetVecObj
* @returns {Vec3d}
* Gets a motion vector from one position to another
*/
function getMotionVec(sourceVecObj, targetVecObj) {
    let startVec = sourceVecObj instanceof Vec3d ? sourceVecObj : new Vec3d(sourceVecObj.x, sourceVecObj.y, sourceVecObj.z)
    let endVec = targetVecObj instanceof Vec3d ? targetVecObj : new Vec3d(targetVecObj.x, targetVecObj.y, targetVecObj.z)
    return endVec.subtract(startVec).normalize()
}
/** @param {Internal.BlockEntity} attractor */
global.attractorTick = (attractor) => {
    try {
        if (attractor.blockState.getValue(global.meteor_spawned_prop) == true) { return }
        let heightMapPos = attractor.level.getHeightmapPos("motion_blocking", attractor.blockPos)
        if (heightMapPos.below().y != attractor.blockPos.y) { return } // check if any blocks above
        let dayTime = attractor.level.dayTime()
        if (dayTime % 24000 < 13000) { return }

        // let rnd = rndFrom(0, 1000)
        // if (rnd != 0) { return } // 1 in 1000 every second

        /** @type {Internal.Entity} */
        let meteorEntity = attractor.level
            .createEntity("sunlit_cobblemon:meteor_entity")

        let meteorSpawnPos = Object.assign(
            { y: attractor.blockPos.y + 300 },
            rndPerimeter(attractor.blockPos.x, attractor.blockPos.z, 128)
        )
        meteorEntity.setPosition(meteorSpawnPos.x, meteorSpawnPos.y, meteorSpawnPos.z)

        let attractorVec = new Vec3d(attractor.blockPos.x + 0.5, attractor.blockPos.y + 0.5, attractor.blockPos.z + 0.5)
        let delta = getMotionVec(meteorEntity.getPos(), attractorVec).scale(2)
        meteorEntity.setDeltaMovement(delta)
        meteorEntity.spawn();

        attractor.level.getBlock(attractor.blockPos).set('sunlit_cobblemon:atmospheric_magnet', { meteor_spawned: true })

        // save movement data to nbt so it can be reset constantly
        meteorEntity.mergeNbt({ BalmData: { delta: { x: delta.x(), y: delta.y(), z: delta.z() } } })
    } catch (e) { console.log(e) }
}

StartupEvents.registry("block", (e) => {
    e.create("sunlit_cobblemon:atmospheric_magnet", "cardinal")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool")
        .defaultCutout()
        .soundType("copper")
        .item(item => {
            item.tooltip(Text.translatable("block.sunlit_cobblemon.atmospheric_magnet.description").gray());
        })
        .model("sunlit_cobblemon:block/kubejs/atmospheric_magnet")
        .property(global.meteor_spawned_prop)
        .defaultState(state => { state.cycle(global.meteor_spawned_prop) })
        .blockEntity(blockInfo => {
            blockInfo.serverTick(20, 0, (entity) => {
                global.attractorTick(entity)
            })
        })
})