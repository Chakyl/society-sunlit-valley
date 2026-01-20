console.info("[SOCIETY] npcGift.js loaded");

const npcIds = ["easy_npc:humanoid", "easy_npc:humanoid_slim"];
ItemEvents.entityInteracted((e) => {
    const { hand, player, item, level, target, server } = e;
    if (hand == "OFF_HAND") return;
    if (item.id == 'easy_npc_config_ui:easy_npc_wand') return;
    if (!npcIds.includes(target.type)) return;
    if (hand == "MAIN_HAND") {
        let day = global.getDay(level);
        if (!player.persistentData.npcData) player.persistentData.npcData = {}
        let npcData = player.persistentData.npcData.banker;
        // player.persistentData.npcData.banker = undefined
        if (!npcData) {
            player.persistentData.npcData.banker = {
                friendship: 0,
                dayLastChatted: -1,
                dayLastGifted: -1
            }
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} banker_intro`
            );
        }
        npcData = player.persistentData.npcData.banker
        if (day > npcData.dayLastChatted) {
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} banker_chatter_friendship4_6`
            );
            npcData.dayLastChatted = day
        } else {
            server.runCommandSilent(`openshop ${player.username} banker`)
        }
        e.cancel()
    }
});
