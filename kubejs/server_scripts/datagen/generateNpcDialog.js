let translationKeys = {};
global.datagenDialog = false;

const generateDialogEntries = (npcId, dialogType, dialogIndex, dialogLines, portraitPath, isChatter, customOptions) => {
  let entries = [];
  let resolvedDialogLines = Array.isArray(dialogLines) ? dialogLines : [dialogLines];
  resolvedDialogLines.forEach((entry, index) => {
    let lineTranslationKey = `dialog.npc.${npcId}.${dialogType}${dialogIndex == -1 ? "" : `.${dialogIndex}`}.line_${index}`;
    translationKeys[lineTranslationKey] = entry;
    let queuedEntry = {
      id: index == 0 ? "start" : index == resolvedDialogLines.length - 1 ? "end" : index,
    }
    if (portraitPath) {
      queuedEntry.speaker = { translate: `dialog.npc.${npcId}.name`, color: "white" };
      queuedEntry.text = [{ translate: lineTranslationKey }];
      queuedEntry.portraits = [
        {
          path: `${portraitPath}.png`,
          position: "INLINE",
          brightness: 1.0
        },
      ];
    } else {
      queuedEntry.text = [{ translate: lineTranslationKey }];
    }
    if (customOptions && resolvedDialogLines.length - 1 == index) {
      queuedEntry.options = customOptions.map((option, optIndex) => {
        let optionKey = `dialog.npc.${npcId}.${dialogType}.option_${optIndex}`;
        translationKeys[optionKey] = option.text;
        return {
          text: {
            translate: optionKey
          },
          target: option.target || "end",
          command: Array.isArray(option.command) ? option.command : [option.command]
        };
      });
    }

    if (isChatter && resolvedDialogLines.length - 1 == index && !customOptions) {
      if (npcId == "carpenter") {
        translationKeys["dialog.npc.carpenter.purchase_supplies"] = "Purchase supplies";
        translationKeys["dialog.npc.carpenter.invite_villagers"] = "Invite Villagers";
        translationKeys["dialog.npc.carpenter.build_farm"] = "Build Farm buildings";
        translationKeys["dialog.npc.carpenter.build_village"] = "Build Village buildings";
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
        },
        {
          text: {
            translate: "dialog.npc.carpenter.build_farm"
          },
          target: "end",
          command: [
            "openselector @p building_shop"
          ]
        },
        {
          text: {
            translate: "dialog.npc.carpenter.build_village"
          },
          target: "end",
          command: [
            "openselector @p building_shop"
          ]
        }]
      } else if (npcId !== "wise_oak") {
        queuedEntry.command = [`openshop @p ${npcId}`]
      }
    }
    entries.push(queuedEntry);
  });
  if (isChatter && npcId == "carpenter" || customOptions) {
    entries.push({
      id: "end",
    })
  }
  return entries;
};

const runNpcDatagen = (npcId, npcDef) => {
  let nameTranslationKey = `dialog.npc.${npcId}.name`;
  let resolvedPortraitPath = npcDef.noPortrait ? null : (npcDef.portraitPath ? npcDef.portraitPath : npcId);
  translationKeys[nameTranslationKey] = npcDef.name || npcId;
  translationKeys[
    `dialog.npc.${npcId}.chatter.description`
  ] = `Chatting with ${npcDef.name || npcId}`;

  // Chatter
  if (npcDef.chatter) {
    for (let index = 0; index <= 5; index++) {
      let friendshipKey = `friendship${index}`;
      let chatterSet = npcDef.chatter[friendshipKey];
      if (chatterSet && chatterSet.length > 0) {
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
                resolvedPortraitPath,
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
      entries: generateDialogEntries(npcId, `intro`, 0, npcDef.intro, npcId),
    });
  }
  // Gifts
  if (npcDef.giftResponse) {
    let giftResponseKeys = ["loved", "liked", "neutral", "disliked", "hated"];
    giftResponseKeys.forEach((responseType) => {
      if (npcDef.giftResponse[responseType]) {
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
                response,
                responseType === "neutral" ? npcId : `${responseType}/${npcId}`
              ),
            }
          );
        });
      }
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
            resolvedPortraitPath,
            false
          ),
        }
      );
    });
  }
  if (npcDef.choiceDialogs) {
    npcDef.choiceDialogs.forEach((dialog) => {
      JsonIO.write(
        `kubejs/data/dialog/dialogs/${npcId}_dialog_${dialog.name}.json`,
        {
          id: `${npcId}_choice_dialog_${dialog.name}`,
          title: `${npcId} ${dialog.name}`,
          description: `dialog.npc.${npcId}.dialog.${dialog.name}`,
          entries: generateDialogEntries(
            npcId,
            `dialog.${dialog.name}`,
            -1,
            dialog.text,
            resolvedPortraitPath,
            false,
            dialog.options
          ),
        }
      );
    });
  }

  JsonIO.write(`kubejs/assets/dialog/lang/en_us.json`, translationKeys);

  if (npcDef.chatter) {
    let outputConstruct = {}
    outputConstruct[npcId] = {
      chatterLengths: [
        npcDef.chatter.friendship0 ? npcDef.chatter.friendship0.length : 0,
        npcDef.chatter.friendship1 ? npcDef.chatter.friendship1.length : 0,
        npcDef.chatter.friendship2 ? npcDef.chatter.friendship2.length : 0,
        npcDef.chatter.friendship3 ? npcDef.chatter.friendship3.length : 0,
        npcDef.chatter.friendship4 ? npcDef.chatter.friendship4.length : 0,
        npcDef.chatter.friendship5 ? npcDef.chatter.friendship5.length : 0,
      ],
      giftResponseLengths: npcDef.giftResponse ? {
        loved: npcDef.giftResponse.loved ? npcDef.giftResponse.loved.length : 0,
        liked: npcDef.giftResponse.liked ? npcDef.giftResponse.liked.length : 0,
        neutral: npcDef.giftResponse.neutral ? npcDef.giftResponse.neutral.length : 0,
        disliked: npcDef.giftResponse.disliked ? npcDef.giftResponse.disliked.length : 0,
        hated: npcDef.giftResponse.hated ? npcDef.giftResponse.hated.length : 0,
      } : {}
    }
    console.log(outputConstruct)
  }
};