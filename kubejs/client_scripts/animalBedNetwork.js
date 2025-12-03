NetworkEvents.dataReceived("society:animal_bed_data", (e) => {
  e.level
    .getBlockEntity(new BlockPos(e.data.bed.x, e.data.bed.y, e.data.bed.z))
    .block.getEntityData()
    .merge(e.data.entityData );
});
