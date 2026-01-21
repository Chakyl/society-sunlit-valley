console.info("[SOCIETY] npcGift.js loaded");

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
        }
        npcData = player.persistentData.npcData[npcId]
        if (day > npcData.dayLastChatted) {
            server.runCommandSilent(
                `dialog ${target.getUuid()} show ${player.username} ${npcId}_chatter_friendship0_0`
            );
            npcData.dayLastChatted = day
        } else {
            server.runCommandSilent(`openshop ${player.username} ${npcId}`)
        }
        e.cancel()
    }
});
