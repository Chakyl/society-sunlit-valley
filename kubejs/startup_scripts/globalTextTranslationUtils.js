global.translatableWithFallback = (key, fallback) => {
    if (!fallback) return Text.translatable(key);
    else return Text.of(NBT.stringTag(`{"translate":"${key}", "fallback":"${fallback}"}`));
}

global.getTranslatedEntityName = (entity_id, fallback) => {
    return global.translatableWithFallback(`entity.${entity_id.namespace}.${entity_id.path}`, fallback)
}

global.getTranslatedItemName = (item_id, fallback) => {
    const prefix = Item.of(item_id).block ? "block" : "item";
    return global.translatableWithFallback(`${prefix}.${item_id.namespace}.${item_id.path}`, fallback)
}

global.getTranslatedTextWithColorCode = (colorCode, key) => {
    switch (colorCode) {
        case "0":
            return Text.translatable(key).black();
        case "1":
            return Text.translatable(key).darkBlue();
        case "2":
            return Text.translatable(key).darkGreen();
        case "3":
            return Text.translatable(key).darkAqua();
        case "4":
            return Text.translatable(key).darkRed();
        case "5":
            return Text.translatable(key).darkPurple();
        case "6":
            return Text.translatable(key).gold();
        case "7":
            return Text.translatable(key).gray();
        case "8":
            return Text.translatable(key).darkGray();
        case "9":
            return Text.translatable(key).blue();
        case "a":
            return Text.translatable(key).green();
        case "b":
            return Text.translatable(key).aqua();
        case "c":
            return Text.translatable(key).red();
        case "d":
            return Text.translatable(key).lightPurple();
        case "e":
            return Text.translatable(key).yellow();
        case "f":
            return Text.translatable(key).white();
        default:
            return Text.translatable(key);
    }
}

global.getNotePaperItem = (author, text, title) => {
    // I want to check argument type and process it,
    // but I'm not sure how does instanceof work in runtime.
    // So, This method takes 3 strings.
    return Item.of(
        "candlelight:note_paper_written",
        `{author:"${author}",text:['${text}'],title:"${title}"}`
    )
}

global.priorityElementIds = [
    "shippingBin",
    "husbandryMessage"
];
const clearUiPriorityPaint = (player, ids) => {
    let removedText = {};
    let removedShadow = {};
    // Spawn and clear instance of paint element to prevent warnings that they don't exist
    ids.forEach((id) => {
        removedText[id] = { type: "text" };
        removedShadow[`${id}Shadow`] = { type: "text" };
    });
    player.paint(removedText);
    player.paint(removedShadow);
    ids.forEach((id) => {
        removedText[id] = { remove: true };
        removedShadow[`${id}Shadow`] = { remove: true };
    });
    player.paint(removedText);
    player.paint(removedShadow);
};

global.renderUiPriorityText = (player, server, messages, clearedMessages) => {
    server.scheduleInTicks(0, () => {
        clearUiPriorityPaint(player, clearedMessages);
        player.paint(messages);
        player.persistentData.ageLastShownPriorityMessage = player.age;
        server.scheduleInTicks(120, () => {
            if (player.age - player.persistentData.get("ageLastShownPriorityMessage") >= 120) {
                clearUiPriorityPaint(player, clearedMessages);
            }
        });
    });
};
global.renderHusbandryMessage = (player, server, text, color) => {
    global.renderUiPriorityText(
        player,
        server,
        {
            husbandryMessage: {
                type: "text",
                x: 0,
                y: -100,
                text: `${text}`,
                color: color,
                alignX: "center",
                alignY: "bottom",
            },
            husbandryMessageShadow: {
                type: "text",
                x: 1,
                z: -1,
                y: -99,
                text: `${text}`,
                color: "#000000",
                alignX: "center",
                alignY: "bottom",
            }
        },
        global.priorityElementIds
    );
}