console.info("[SOCIETY-S-COBBLEMON] cobblemonCancelItemEvents.js loaded");

ItemEvents.entityInteracted((e) => {
  const { item, target } = e;
  if (target.type.equals("cobblemon:pokemon") && ['moblassos:diamond_lasso', 'species:wicked_mask'].includes(item.id)) {
    e.cancel()
  }
});
