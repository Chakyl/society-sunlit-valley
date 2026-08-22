console.info("[SOCIETY] pickupDrink.js loaded");

BlockEvents.rightClicked("sunlit_cobblemon:pale_chalice", (e) => {
    const { block, hand, player, level, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if (!['sunlit_cobblemon:liquid_pale', 'sunlit_cobblemon:liquid_antimatter'].includes(item.id)) return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    if (player.isFake()) return;
    if (item.id == 'sunlit_cobblemon:liquid_antimatter') {
        block.set("windswept:chiseled_cut_lunalite_bricks");
        summonRaidLegendary(level, server, player, item, block, "giratina", 100)
    } else {
        if (block.properties.get("full") == "true") return;
        block.set(block.id, {
            full: "true",
        });
    }
    item.shrink(1)
    server.runCommandSilent(`playsound minecraft:item.bottle.fill block @a ${block.x} ${block.y} ${block.z}`);
}
);
