global.handleRibbit = (entity) => {
    const nbt = entity.nbt.toString();

    if (nbt.includes("gardener")) {
        let freshVillager = entity.level.createEntity("ribbits:ribbit");
        let villagerNbt = freshVillager.getNbt();
        villagerNbt.Brain.memories = entity.nbt.Brain.memories;
        freshVillager.customName = entity.customName;
        villagerNbt.Pos = [Number(entity.x), Number(entity.y), Number(entity.z)];
        freshVillager.setNbt(villagerNbt);
        villagerNbt.RibbitData = {
            umbrella: "ribbits:umbrella_3",
            instrument: "ribbits:none",
            profession: "ribbits:fisherman",
        };
        freshVillager.setNbt(villagerNbt);
        freshVillager.spawn();
        entity.setRemoved("unloaded_to_chunk");
    }
};

EntityJSEvents.modifyEntity((event) => {
    event.modify("ribbits:ribbit", (modifyBuilder) => {
        modifyBuilder.tick((entity) => {
            if (entity.level.time % 1200 === 0) {
                global.handleRibbit(entity);
            }
        });
    });
});
