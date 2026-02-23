console.info("[SOCIETY] npcInteraction.js loaded");
// These lengths are formed from generateNpcDialog.js
const dialogLengths = {
    banker: { chatterLengths: [15.0, 20.0, 13.0, 9.0, 11.0, 18.0], giftResponseLengths: { loved: 9.0, liked: 8.0, neutral: 8.0, disliked: 12.0, hated: 16.0 } },
    blacksmith: { chatterLengths: [16.0, 10.0, 13.0, 12.0, 11.0, 14.0], giftResponseLengths: { loved: 8.0, liked: 9.0, neutral: 8.0, disliked: 8.0, hated: 10.0 } },
    carpenter: { chatterLengths: [11.0, 10.0, 13.0, 9.0, 9.0, 15.0], giftResponseLengths: { loved: 6.0, liked: 7.0, neutral: 8.0, disliked: 10.0, hated: 10.0 } },
    fisher: { chatterLengths: [11.0, 9.0, 10.0, 10.0, 10.0, 11.0], giftResponseLengths: { loved: 7.0, liked: 6.0, neutral: 9.0, disliked: 7.0, hated: 7.0 } },
    market: { chatterLengths: [18.0, 14.0, 9.0, 16.0, 14.0, 14.0], giftResponseLengths: { loved: 10.0, liked: 8.0, neutral: 17.0, disliked: 12.0, hated: 13.0 } },
    shepherd: { chatterLengths: [15.0, 14.0, 13.0, 12.0, 14.0, 17.0], giftResponseLengths: { loved: 9.0, liked: 10.0, neutral: 8.0, disliked: 8.0, hated: 11.0 } }
}
const maxGifts = {
    banker: "society:slouching_towards_artistry",
    blacksmith: Item.of('justhammers:iron_hammer', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"§6Aiden\\'s Hammer\"}'}}").enchant('minecraft:efficiency', 5).enchant('minecraft:fortune', 3),
    carpenter: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"blockapedia",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Blockapedia"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"blockapedia",owner:"worn",owner_name:"Ace (Built by Mimsy)",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}'),
    fisher: "society:heart_of_neptunium",
    market: "society:universal_methods_of_farming",
    shepherd: Item.of('2x wildernature:penguin_spawn_egg')
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
        if (!npcData) {
            player.persistentData.npcData[npcId] = {
                friendship: -1,
                dayLastChatted: -1,
                dayLastGifted: -4,
                maxGifted: false
            }
        } else if (Number(npcData.friendship) == -1) {
            npcData.friendship = 5
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} ${npcId}_intro`
            );
        } else if (!npcData.maxGifted && Number(npcData.friendship) >= 500) {
            if (npcId.equals("banker") && player.stages.has("slouching_towards_artistry")) {
                player.give(Item.of("2x waystones:waystone"))
                server.runCommandSilent(
                    `dialog ${player.username} show ${player.username} banker_unique__gift_read`
                );
            } else if (npcId.equals("market") && player.stages.has("universal_methods_of_farming")) {
                player.give(Item.of("16x society:sparkpod_seed"))
                server.runCommandSilent(
                    `dialog ${player.username} show ${player.username} market_unique_five_gift_read`
                );
            } else {
                player.give(maxGifts[npcId])
                server.runCommandSilent(
                    `dialog ${target.getUuid()} show ${player.username} ${npcId}_unique_five_gift`
                );
            }
            npcData.maxGifted = true
        } else {
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
                    let delay = 0;
                    if (item.isEdible()) delay = 20
                    if (!player.isCreative()) item.shrink(1);
                    server.scheduleInTicks(delay, () => {
                        server.runCommandSilent(
                            `dialog ${target.getUuid()} show ${player.username} ${npcId}_gift_${giftValue}_${dialogNumber}`
                        );
                    });
                    if (Math.random() < 0.01) {
                        let newGolem = level.createEntity(Math.random() < 0.5 ? "golemoverhaul:barrel_golem" : "golemoverhaul:hay_golem");
                        newGolem.setX(target.getX() + 8);
                        newGolem.setY(target.getY() + 2);
                        newGolem.setZ(target.getZ() + -8);
                        newGolem.spawn();
                    }
                } else {
                    player.tell(Text.translatable("society.npc.gifted_too_soon").gold())
                }
            } else {
                if (day > npcData.dayLastChatted || npcData.dayLastChatted - day > 1) {
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
                    if (npcId === "carpenter") {
                        server.runCommandSilent(
                            `dialog ${target.getUuid()} show ${player.username} carpenter_unique_need_to_buy`
                        );
                    } else {
                        server.runCommandSilent(`openshop ${player.username} ${npcId}`)

                    }
                }
            }
        }
        e.cancel()
    }
});
