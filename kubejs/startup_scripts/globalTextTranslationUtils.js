global.translatableWithFallback = (key, fallback) => {
    let nbt = NBT.stringTag(`{"translate":"${key}", "fallback":"${fallback}"}`);
    return Text.of(nbt);
}