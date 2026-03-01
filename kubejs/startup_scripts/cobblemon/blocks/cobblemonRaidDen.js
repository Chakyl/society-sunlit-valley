StartupEvents.registry("block", (e) => {
    e.create("sunlit_cobblemon:raid_den")
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.initialData({ tier: "-1", type: "", variant: "", level: -1, dayLastRaided: -1 });
        })
        .texture("up", "society:block/teleporter_top")
        .texture("down", "society:block/teleporter_bottom")
        .texture("north", "society:block/teleporter_side")
        .texture("east", "society:block/teleporter_side")
        .texture("south", "society:block/teleporter_side")
        .texture("west", "society:block/teleporter_side")
        .texture("particle", "society:block/teleporter_side")
        .mapColor("stone")
        .soundType("stone")
        .hardness(1.0)
        .lightLevel(1)
});
