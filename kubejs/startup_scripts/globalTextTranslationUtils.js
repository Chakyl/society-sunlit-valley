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

global.getNotePaperItem = (author, text, title) => {
    // I want to check argument type and process it,
    // but I'm not sure how does instanceof work in runtime.
    // So, This method takes 3 strings.
    return Item.of(
            "candlelight:note_paper_written",
            `{author:"${author}",text:['${text}'],title:"${title}"}`
          )
}

global.getEmbersTextAPICommand = (target, design, duration, text) => {
    return `emberstextapi sendcustom ${target} ${design} ${duration} ${text}`
}