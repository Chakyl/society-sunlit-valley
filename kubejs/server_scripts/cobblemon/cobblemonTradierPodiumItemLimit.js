console.info("[SOCIETY-S-COBBLEMON] cobblemonTradierPodiumItemLimit.js loaded");

// This can be configured in _sunCobConfig.js
ItemEvents.entityInteracted((e) => {
    const { item, player } = e;
    if (item.hasTag("sunlit_cobblemon:bag_item") && player.persistentData.bagItemsUsed >= global.trainerPodiumBagLimit) {
        player.tell(Text.translatable("tooltip.sunlit_cobblemon.bag_item_limit").red())
        e.cancel();
    }
});


ItemEvents.rightClicked((e) => {
    const { item, player } = e;
    if (item.hasTag("sunlit_cobblemon:bag_item") && player.persistentData.bagItemsUsed >= global.trainerPodiumBagLimit) {
        player.tell(Text.translatable("tooltip.sunlit_cobblemon.bag_item_limit").red(), global.trainerPodiumBagLimit)
        e.cancel();
    }
});
