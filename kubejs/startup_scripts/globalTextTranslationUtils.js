global.translatableWithFallback = (key, fallback) => {
    let nbt = NBT.stringTag(`{"translate":"${key}", "fallback":"${fallback}"}`);
    return Text.of(nbt);
}

global.getTranslatedEntityName = (entity_id) => {
    return Text.translatable(`entity.${entity_id.namespace}.${entity_id.path}`)
}