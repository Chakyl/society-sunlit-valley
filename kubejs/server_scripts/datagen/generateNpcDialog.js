let translationKeys = {};
global.datagenDialog = false;

const generateDialogEntries = (npcId, dialogType, dialogIndex, dialogLines, isChatter) => {
  let entries = [];
  let resolvedDialogLines = Array.isArray(dialogLines) ? dialogLines : [dialogLines];
  resolvedDialogLines.forEach((entry, index) => {
    let lineTranslationKey = `dialog.npc.${npcId}.${dialogType}${dialogIndex == -1 ? "" : `.${dialogIndex}`}.line_${index}`;
    translationKeys[lineTranslationKey] = entry;
    let queuedEntry = {
      id:
        index == 0 ? "start" : index == resolvedDialogLines.length - 1 ? "end" : index,
      speaker: { translate: `dialog.npc.${npcId}.name`, color: "white" },
      text: [{ translate: lineTranslationKey }],
      portraits: [
        {
          path: `${npcId}.png`,
          position: "INLINE",
          brightness: 1.0
        },
      ],
    }
    // Always open up the shop at the end of the chatter dialog
    if (isChatter && resolvedDialogLines.length - 1 == index) {
      if (npcId == "carpenter") {
        translationKeys["dialog.npc.carpenter.purchase_supplies"] = "Purchase supplies";
        translationKeys["dialog.npc.carpenter.invite_villagers"] = "Invite Villagers";
        queuedEntry.options = [{
          text: {
            translate: "dialog.npc.carpenter.purchase_supplies"
          },
          target: "end",
          command: [
            "openshop @p carpenter"
          ]
        },
        {
          text: {
            translate: "dialog.npc.carpenter.invite_villagers"
          },
          target: "end",
          command: [
            "openshop @p invitations"
          ]
        }]
      } else {
        queuedEntry.command = [`openshop @p ${npcId}`]
      }
    }
    entries.push(queuedEntry);
  });
  if (isChatter && npcId == "carpenter") {
    entries.push({
      id: "end",
    })
  }
  return entries;
};

const runNpcDatagen = (npcId, npcDef) => {
  let nameTranslationKey = `dialog.npc.${npcId}.name`;
  translationKeys[nameTranslationKey] = npcDef.name;
  translationKeys[
    `dialog.npc.${npcId}.chatter.description`
  ] = `Chatting with ${npcDef.name}`;
  // Chatter
  if (npcDef.chatter) {
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
              allowClose: true,
              entries: generateDialogEntries(
                npcId,
                `chatter_${friendshipKey}`,
                chatterIndex,
                chatter,
                true
              ),
            }
          );
        });
      }
    }
  }
  // Introduction
  if (npcDef.intro) {
    translationKeys[
      `dialog.npc.${npcId}.intro.description`
    ] = `${npcDef.name}'s Introduction`;
    JsonIO.write(`kubejs/data/dialog/dialogs/${npcId}_intro.json`, {
      id: `${npcId}_intro`,
      title: `${npcId} introduction`,
      description: `dialog.npc.${npcId}.intro.description`,
      entries: generateDialogEntries(npcId, `intro`, 0, npcDef.intro),
    });
  }
  // Gifts
  if (npcDef.giftResponse) {
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
  }
  if (npcDef.unique) {
    npcDef.unique.forEach((dialog) => {
      JsonIO.write(
        `kubejs/data/dialog/dialogs/${npcId}_unique_${dialog.name}.json`,
        {
          id: `${npcId}_unique_${dialog.name}`,
          title: `${npcId} introduction`,
          description: `dialog.npc.${npcId}.unique.${dialog.name}`,
          entries: generateDialogEntries(
            npcId,
            `unique_${dialog.name}`,
            -1,
            dialog.text,
            true
          ),
        }
      );
    });
  }
  // One-offs
  JsonIO.write(`kubejs/assets/dialog/lang/en_us.json`, translationKeys);

  if (npcDef.chatter) {
    let outputConstruct = {}
    outputConstruct[npcId] = {
      chatterLengths: [
        npcDef.chatter.friendship0.length,
        npcDef.chatter.friendship1.length,
        npcDef.chatter.friendship2.length,
        npcDef.chatter.friendship3.length,
        npcDef.chatter.friendship4.length,
        npcDef.chatter.friendship5.length,
      ],
      giftResponseLengths: {
        loved: npcDef.giftResponse.loved.length,
        liked: npcDef.giftResponse.liked.length,
        neutral: npcDef.giftResponse.neutral.length,
        disliked: npcDef.giftResponse.disliked.length,
        hated: npcDef.giftResponse.hated.length,
      }
    }
    console.log(outputConstruct)
  }
};
