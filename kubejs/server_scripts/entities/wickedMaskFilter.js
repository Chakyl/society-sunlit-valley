console.info("[SOCIETY] wickedMaskFilter.js loaded");

ItemEvents.entityInteracted((e) => {
  const { item, target } = e;
  if ('species:wicked_mask' == item.id && global.checkEntityTag(target, "society:cannot_wicked_mask")) {
    e.cancel()
  }
});
