let translationKeys = {};

const generateDialogEntries = (npcId, dialogType, dialogLines) => {
  let entries = [];
  dialogLines.forEach((entry, index) => {
    let lineTranslationKey = `dialog.npc.${npcId}.${dialogType}.line_${index}`;
    translationKeys[lineTranslationKey] = entry;
    entries.push({
      id: index == 0 ? "start" : index == dialogLines.length - 1 ? "end" : index,
      speaker: { translate: `dialog.npc.${npcId}.name`, color: "white" },
      text: [{ translate: lineTranslationKey }],
      portraits: [
        {
          path: `${npcId}.png`,
          position: "INLINE",
          brightness: 1.0,
          animationType: "FADE_IN",
        },
      ],
    });
  });
  return entries;
};

const runNpcDatagen = (npcId, npcDef) => {
  let nameTranslationKey = `dialog.npc.${npcId}.name`;
  translationKeys[nameTranslationKey] = npcDef.name;
  translationKeys[`dialog.npc.${npcId}.chatter.description`] = `Chatting with ${npcDef.name}`;
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
            entries: generateDialogEntries(npcId, `chatter_${friendshipKey}`, chatter),
          }
        );
      });
    }
  }
  translationKeys[`dialog.npc.${npcId}.intro.description`] = `${npcDef.name}'s Introduction`;
  JsonIO.write(`kubejs/data/dialog/dialogs/${npcId}_intro.json`, {
    id: `${npcId}_intro`,
    title: `${npcId} introduction`,
    description: `dialog.npc.${npcId}.intro.description`,
    entries: generateDialogEntries(npcId, `intro`, npcDef.intro),
  });
  JsonIO.write(`kubejs/assets/dialog/lang/en_us.json`, translationKeys);
};
