let translationKeys = {};

const generateDialogEntries = (npcId, dialogType, dialogIndex, dialogLines) => {
  let entries = [];
  let resolvedDialogLines = Array.isArray(dialogLines) ? dialogLines : [dialogLines];
  resolvedDialogLines.forEach((entry, index) => {
    let lineTranslationKey = `dialog.npc.${npcId}.${dialogType}.${dialogIndex}.line_${index}`;
    translationKeys[lineTranslationKey] = entry;
    let queuedEntry = {
      id:
        index == 0 ? "start" : index == resolvedDialogLines.length - 1 ? "end" : index,
      speaker: { translate: `dialog.npc.${npcId}.name`, color: "gold" },
      text: [{ translate: lineTranslationKey }],
      portraits: [
        {
          path: `${npcId}.png`,
          position: "INLINE",
          brightness: 1.0
        },
      ],
    }
    if (resolvedDialogLines.length - 1 == index) {
      queuedEntry.command = [`openshop @p ${npcId}`]
    }
    entries.push(queuedEntry);
  });
  return entries;
};

const runNpcDatagen = (npcId, npcDef) => {
  let nameTranslationKey = `dialog.npc.${npcId}.name`;
  translationKeys[nameTranslationKey] = npcDef.name;
  translationKeys[
    `dialog.npc.${npcId}.chatter.description`
  ] = `Chatting with ${npcDef.name}`;
  for (let index = 0; index <= 5; index++) {
    let friendshipKey = `friendship${index}`;
    let chatterSet = npcDef.chatter[friendshipKey];
    if (chatterSet.length > 0) {
      chatterSet.forEach((chatter, chatterIndex) => {
        JsonIO.write(
          `kubejs/data/dialog/dialogs/${npcId}_chatter_${friendshipKey}_${chatterIndex}.json`,
          {
            id: `${npcId}_chatter_${friendshipKey}_${chatterIndex}`,
            title: `[${chatterIndex}] ${npcId} chatter at friendship level: ${friendshipKey}`,
            description: `dialog.npc.${npcId}.chatter.description`,
            entries: generateDialogEntries(
              npcId,
              `chatter_${friendshipKey}`,
              chatterIndex,
              chatter
            ),
          }
        );
      });
    }
  }
  // Introduction
  translationKeys[
    `dialog.npc.${npcId}.intro.description`
  ] = `${npcDef.name}'s Introduction`;
  JsonIO.write(`kubejs/data/dialog/dialogs/${npcId}_intro.json`, {
    id: `${npcId}_intro`,
    title: `${npcId} introduction`,
    description: `dialog.npc.${npcId}.intro.description`,
    entries: generateDialogEntries(npcId, `intro`, 0, npcDef.intro),
  });
  // Gifts
  let giftResponseKeys = ["loved", "liked", "neutral", "disliked", "hated"];
  giftResponseKeys.forEach((responseType) => {
    npcDef.giftResponse[responseType].forEach((response, responseIndex) => {
      JsonIO.write(
        `kubejs/data/dialog/dialogs/${npcId}_gift_${responseType}_${responseIndex}.json`,
        {
          id: `${npcId}_gift_${responseType}_${responseIndex}`,
          title: `${npcId} introduction`,
          description: `dialog.npc.${npcId}.gift.${responseType}`,
          entries: generateDialogEntries(
            npcId,
            `gift_${responseType}`,
            responseIndex,
            response
          ),
        }
      );
    });
  });
  JsonIO.write(`kubejs/assets/dialog/lang/en_us.json`, translationKeys);
};
