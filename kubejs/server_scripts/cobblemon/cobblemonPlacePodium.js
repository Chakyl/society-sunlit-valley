console.info("[SOCIETY-S-COBBLEMON] cobblemonPlacePodium.js loaded");

BlockEvents.placed(["sunlit_cobblemon:trainer_podium"], (e) => {
  const playerUUID = e.player.getUuid().toString();
  let nbt = e.block.entityData;
  nbt.merge({ data: { owner: playerUUID } });
  e.block.setEntityData(nbt);
});
