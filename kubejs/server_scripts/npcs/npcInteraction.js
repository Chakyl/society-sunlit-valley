console.info("[SOCIETY] npcInteraction.js loaded");
// These lengths are formed from generateNpcDialog.js
const dialogLengths = {
    banker: { chatterLengths: [15.0, 20.0, 13.0, 9.0, 11.0, 18.0], giftResponseLengths: { loved: 9.0, liked: 8.0, neutral: 8.0, disliked: 12.0, hated: 16.0 } },
    blacksmith: { chatterLengths: [1.0, 3.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    carpenter: { chatterLengths: [3.0, 3.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    fisher: { chatterLengths: [4.0, 3.0, 1.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
    market: { chatterLengths: [12.0, 12.0, 7.0, 16.0, 14.0, 13.0], giftResponseLengths: { loved: 9.0, liked: 8.0, neutral: 17.0, disliked: 12.0, hated: 13.0 } },
    shepherd: { chatterLengths: [15.0, 14.0, 13.0, 13.0, 14.0, 17.0], giftResponseLengths: { loved: 9.0, liked: 10.0, neutral: 8.0, disliked: 8.0, hated: 11.0 } },
    witch: { chatterLengths: [1.0, 3.0, 2.0, 1.0, 1.0, 3.0], giftResponseLengths: { loved: 1.0, liked: 1.0, neutral: 1.0, disliked: 2.0, hated: 1.0 } },
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
        let npcId = getNpcKey(target.nbt.CustomName.toString())
        let day = global.getDay(level);
        if (!player.persistentData.npcData) player.persistentData.npcData = {}
        let npcData = player.persistentData.npcData[npcId];
        // player.persistentData.npcData.banker = undefined
        if (!npcData) {
            player.persistentData.npcData[npcId] = {
                friendship: 0,
                dayLastChatted: -1,
                dayLastGifted: -4
            }
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} ${npcId}_intro`
            );
        } else {
            // player.tell(player.persistentData.npcData[npcId])
            // Carpenter has two shops so it always needs dialog to choose between the two.
            let dialogNumber;
            if (player.isCrouching() && item.hasTag("society:villager_gift")) {
                if (day > npcData.dayLastGifted + 3 || npcData.dayLastGifted - day > 1) {
                    let giftValue = global.getVillagerGiftResult(npcId, item.id);
                    dialogNumber = Math.floor(Math.random() * dialogLengths[npcId].giftResponseLengths[giftValue]);
                    let friendshipModification = 0;
                    switch (giftValue) {
                        case "hated":
                            friendshipModification = -30;
                            break;
                        case "disliked":
                            friendshipModification = -15;
                            break;
                        case "loved":
                            friendshipModification = 40;
                            break;
                        case "liked":
                            friendshipModification = 25;
                            break;
                        case "neutral":
                        default:
                            friendshipModification = 10;
                            break;
                    }

                    npcData.friendship = npcData.friendship + friendshipModification;
                    npcData.dayLastGifted = day
                    server.runCommandSilent(
                        `playsound stardew_fishing:complete block @a ${target.x} ${target.y} ${target.z}`
                    );
                    server.runCommandSilent(
                        `playsound species:item.wicked_swapper.teleport block @a ${target.x} ${target.y} ${target.z}`
                    );
                    level.spawnParticles(
                        "supplementaries:confetti",
                        true,
                        target.x,
                        target.y + 1.5,
                        target.z,
                        0.2 * rnd(1, 2),
                        0.2 * rnd(1, 2),
                        0.2 * rnd(1, 2),
                        25,
                        0.001
                    );
                    if (!player.isCreative()) item.shrink(1);
                    server.scheduleInTicks(4, () => {
                        server.runCommandSilent(
                            `dialog ${target.getUuid()} show ${player.username} ${npcId}_gift_${giftValue}_${dialogNumber}`
                        );
                    });
                } else {
                    player.tell(Text.translatable("society.npc.gifted_too_soon").gold())
                }
            } else {
                if (npcId === "carpenter" || day > npcData.dayLastChatted || npcData.dayLastChatted - day > 1) {
                    let hearts = Math.floor(npcData.friendship / 100);
                    dialogNumber = Math.floor(Math.random() * dialogLengths[npcId].chatterLengths[hearts]);

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
        }
        e.cancel()
    }
});
