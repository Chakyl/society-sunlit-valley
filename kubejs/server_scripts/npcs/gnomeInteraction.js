console.info("[SOCIETY] gnomeInteraction.js loaded");

ItemEvents.entityInteracted((e) => {
    const { hand, player, item, level, target, server } = e;
    if (player.isFake() || player.isCrouching()) return;
    if (hand == "OFF_HAND") return;
    if (target.type !== "minecraft:villager") return;
    if (hand == "MAIN_HAND") {
        if (item.id === "oreganized:silver_ingot") {
            const { x, y, z } = target;
            server.runCommandSilent(`playsound trials:breeze_idle block @a ${x} ${y} ${z} 0.2 1`);
            let reward = player.level.createEntity("minecraft:item");
            reward.x = player.x;
            reward.y = player.y;
            reward.z = player.z;
            reward.item = Item.of(`2x society:fairy_dust`);
            reward.spawn();
            if (!player.isCreative()) item.shrink(1);
        } else {
            server.runCommandSilent(`dialog ${player.getUuid()} show ${player.username} gnome_unique_chatter_${Math.floor(Math.random() * 3)}`);
        }
        e.cancel()
    }
});
