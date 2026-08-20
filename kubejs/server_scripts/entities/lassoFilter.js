console.info("[SOCIETY] lassoFilter.js loaded");

ItemEvents.entityInteracted((e) => {
  const { item, target } = e;
  if ('moblassos:diamond_lasso' == item.id && global.checkEntityTag(target, "society:cannot_lasso")) {
    e.cancel()
  }
});
