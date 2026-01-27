console.info("[SOCIETY] npcDialog.js loaded");
// These lengths are formed from generateNpcDialog.js
const dialogLengths = {
    banker: { chatterLengths: [15.0, 20.0, 13.0, 9.0, 11.0, 18.0], giftResponseLengths: { loved: 9.0, liked: 8.0, neutral: 8.0, disliked: 12.0, hated: 16.0 } },
    blacksmith: { chatterLengths: [1.0, 3.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    carpenter: { chatterLengths: [3.0, 3.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    fisher: { chatterLengths: [4.0, 3.0, 1.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    market: { chatterLengths: [6.0, 2.0, 2.0, 1.0, 3.0, 3.0], giftResponseLengths: { loved: 9.0, liked: 8.0, neutral: 17.0, disliked: 12.0, hated: 13.0 } },
    shepherd: { chatterLengths: [2.0, 2.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 9.0, liked: 10.0, neutral: 7.0, disliked: 8.0, hated: 11.0 } }
}


const getNpcKey = (customName) => {
    const startIndex = customName.indexOf("dialog.npc.");
    const endIndex = customName.indexOf(".name");

    if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
        console.log("[SOCIETY] WARNING: NPC has no custom name!")
        return;
    }

    return customName.substring(startIndex + "dialog.npc.".length, endIndex);
}
const npcIds = ["easy_npc:humanoid", "easy_npc:humanoid_slim"];
ItemEvents.entityInteracted((e) => {
    const { hand, player, item, level, target, server } = e;
    if (hand == "OFF_HAND") return;
    if (item.id == 'easy_npc_config_ui:easy_npc_wand') return;
    if (!npcIds.includes(target.type)) return;
    if (hand == "MAIN_HAND") {
        const npcId = getNpcKey(target.nbt.CustomName.toString())
        let day = global.getDay(level);
        if (!player.persistentData.npcData) player.persistentData.npcData = {}
        let npcData = player.persistentData.npcData[npcId];
        // player.persistentData.npcData.banker = undefined
        if (!npcData) {
            player.persistentData.npcData[npcId] = {
                friendship: 0,
                dayLastChatted: -1,
                dayLastGifted: -1
            }
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} ${npcId}_intro`
            );
        } else {
            // Carpenter has two shops so it always needs dialog to choose between the two.
            if (npcId === "carpenter" || day > npcData.dayLastChatted || npcData.dayLastChatted - day > 1) {
                let hearts = Math.floor(npcData.friendship / 100);
                let dialogNumber = Math.floor(Math.random() * dialogLengths[npcId].chatterLengths[hearts]);

                server.runCommandSilent(
                    `dialog ${target.getUuid()} show ${player.username} ${npcId}_chatter_friendship${hearts}_${dialogNumber}`
                );
                npcData.dayLastChatted = day
                if (npcData.friendship + 5 > 500) {
                    npcData.friendship = 500
                } else {
                    npcData.friendship = npcData.friendship + 5
                }
            } else {
                server.runCommandSilent(`openshop ${player.username} ${npcId}`)
            }
        }
        e.cancel()
    }
});
