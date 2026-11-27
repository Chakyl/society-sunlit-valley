
ItemEvents.modifyTooltips((tooltip) => {
    global.FURNITURE.forEach((item) => {
        tooltip.add(
            item,
            Text.translatable("tooltip.society.loot_furniture").white()
        );
        if (!item.includes("tanuki") && !item.includes("whimsy_deco")) {
            tooltip.add(
                item,
                Text.translatable("tooltip.society.furnitures.modern").white()
            );
        } else {
            tooltip.add(
                item,
                Text.translatable("tooltip.society.furnitures.tanuki").white()
            );
        }
    });
});
