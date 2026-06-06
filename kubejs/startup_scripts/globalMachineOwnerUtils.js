/**
 * wrapper so that arbitrary stage data can be read using the has() method same as player.stages
 * @param {string[]} stages
 * @return {object}
 */
function SocietyStages(stages) {
  return {
    value: stages,
    has: function (x) {
      return this.value.includes(x);
    },
  };
}

global.NO_STAGES = SocietyStages([]);

const TAG_STRING = Java.loadClass("net.minecraft.nbt.Tag").TAG_STRING;

/**
 * reads stages set in block entity NBT data by global.cacheOwner()
 * @param {Internal.BlockEntityJS} blockEntity
 * @return {SocietyStages}
 */
global.getBlockEntityStages = (blockEntity) => {
  return SocietyStages(
    blockEntity.data.getList("stages", TAG_STRING).toArray().map((x) => x.toString())
  );
}

/**
 * cache the stages of a block entity's owner in the block entity's NBT data
 * cache the existence of the block entity's owner's attributes, regardless of attribute value
 * if the owner is online, that player is returned, else null is returned
 * if nothing has ever been cached before, and the owner is not online, stages=[] attributes=[]
 * @param {Internal.BlockEntityJS} entity
 * @param {string[]|null|undefined} stagesToFind
 * @param {string[]|null|undefined} attributesToFind
 * @return {Internal.Player|null} owner
 */
global.cacheOwner = (entity, stagesToFind, attributesToFind) => {
  const { level, block } = entity;
  let binPlayer = null;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      binPlayer = p; 
    }
  });
  let nbt = block.getEntityData();
  if (binPlayer) {
    if (attributesToFind) {
      let newAttributes = [];
      attributesToFind.forEach((attr) => {
        newAttributes.push({
          Base: Number(
            binPlayer.nbt.Attributes.filter((obj) => {
              return obj.Name === attr;
            })[0]?.Base
          ),
          Name: attr,
        });
      });
      nbt.data.attributes = newAttributes;
    }
    if (stagesToFind) {
      let stages = [];
      stagesToFind.forEach((stage) => {
        if (binPlayer.stages.has(stage)) stages.push(stage);
      });
      nbt.data.stages = stages;
    }
  } else {
    if ((attributesToFind !== null) && !nbt.data.contains("attributes")) {
      nbt.data.attributes = [];
    }
    if ((stagesToFind !== null) && !nbt.data.contains("stages")) {
      nbt.data.stages = [];
    }
  }
  global.setBlockEntityData(block, nbt);
  return binPlayer;
};
