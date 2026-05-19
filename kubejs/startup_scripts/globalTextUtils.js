global.translatableWithFallback = (key, fallback) => {
    if (!fallback) return Text.translatable(key);
    else return Text.of(NBT.stringTag(`{"translate":"${key}", "fallback":"${fallback}"}`));
}

global.getTranslatedEntityName = (entity_id, fallback) => {
    return global.translatableWithFallback(`entity.${entity_id.namespace}.${entity_id.path}`, fallback)
}

global.getTranslatedItemName = (item_id, fallback) => {
    return global.translatableWithFallback(`item.${item_id.namespace}.${item_id.path}`, fallback)
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

/**
 * Gets the command string for a message sent in the top left of the screen (i.e, for shipping bin sells)
 * @param {*} target Player to send the command to
 * @param {*} preset Text styling preset. Presets are located in kubejs\assets\emberstextapi\presets
 * @param {*} duration How long the message stays on screen in the queue
 * @param {*} text Text to send. This should always be a lang key i.e: `<lang key='society.shipping_bin.debt_paid_all' args='arg1'>`
 * @returns String command contents
 */
global.getTopLeftETAQueueCommand = (target, preset, duration, text) => `eta queue ${target} top_left <dur:${duration}>[anchor value=TOP_LEFT][offset x=6 y=36][bg color=#80000000]<${preset}>${text}</${preset}>`;

/**
 * Gets the command string for a message sent in the center  of the screen (i.e, for )
 * @param {*} target Player to send the command to
 * @param {*} preset Text styling preset. Presets are located in kubejs\assets\emberstextapi\presets
 * @param {*} duration How long the message stays on screen in the queue
 * @param {*} text Text to send. This should always be a lang key i.e: `<lang key='society.shipping_bin.debt_paid_all' args='arg1'>`
 * @returns String command contents
 */
global.getCenterETAQueueCommand = (target, preset, duration, text) => `eta queue ${target} center <dur:${duration}>[wrap value=220][anchor value=BOTTOM_CENTER][offset y=-80][bg color=#80000000]<${preset}>${text}</${preset}>`;

/**
 * Returns formatted args with commas escaped for ETA
 * @param {*} args Array of strings for lang args in ETA
 * @returns String of words seperated by commas and escaped
 */
global.getSanitizedETALangArgs = (args) => args.map((str) => {
    return String(str).replace(/,/g, '\\,');
}).join(',');
