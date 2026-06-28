global.translatableWithFallback = (key, fallback) => {
    if(!fallback) return Text.translatable(key);
    else return Text.of(NBT.stringTag(`{"translate":"${key}", "fallback":"${fallback}"}`));
}

global.getTranslatedEntityName = (entity_id, fallback) => {
    return global.translatableWithFallback(`entity.${entity_id.namespace}.${entity_id.path}`, fallback)
}

global.getTranslatedItemName = (item_id, fallback) => {
    return global.translatableWithFallback(`item.${item_id.namespace}.${item_id.path}`, fallback)
}

global.getTranslatedTextWithColorCode = (colorCode, key) => {
    switch(colorCode) {
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
// v3 Alpha
global.getTopLeftETAQueueCommand = (target, preset, duration, text) => `eta queue ${target} top_left <dur:${duration}>[anchor value=TOP_LEFT][offset x=6 y=36][bg color=#80000000]<${preset}>${text}</${preset}>`;

global.getEmbersTextAPIQueueCommand = (target, design, duration, text) => {
    return `eta send ${target} ${design} ${duration} ${text}`
}
global.getEmbersTextAPICommand = (target, design, duration, text) => {
    return `eta send ${target} ${design} ${duration} ${text}`
}

// /eta send @p 300 <anchor value=MIDDLE><scale value=1.5><neon r=3><rainbow>LEVEL UP!</rainbow></neon></scale></anchor>
// <offset x=6 y=36> </offset>
// eta send @p 300 <anchor value=TOP_LEFT><income> </income></anchor>

// 
// `{anchor:"TOP_LEFT",background:1,color:"#FF5555",size:1,offsetY:36,offsetX:6,typewriter:1,align:"TOP_LEFT"}`,