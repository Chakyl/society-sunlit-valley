console.info("[SOCIETY-S-COBBLEMON] cobblemonOpenLootBall.js loaded");

const lootBallTypes = global.cobblemonLootBallTypes.map((tier) => `sunlit_cobblemon:${tier}_loot_ball`);

BlockEvents.rightClicked(lootBallTypes, (e) => {
    const { block, hand, player, server, level } = e;
    if (hand !== "MAIN_HAND") return;
    let nbt = block.getEntityData();
    if (!nbt) return;
    let playerTag = NBT.stringTag(player.getUuid().toString())
    if (!nbt.data || nbt.data.playersLooted) {
        // Prevent lootball nbt bombs on large servers
        if (nbt.data.playersLooted.length > 20) {
            nbt.merge({
                data: {
                    playersLooted: [],
                },
            });
            global.setBlockEntityData(block, nbt)
            level.sendBlockUpdated(block.getPos(), block.getBlockState(), block.getBlockState(), 3);
        }
        if (!nbt.data.playersLooted.contains(playerTag)) {
            let looted = nbt.data.playersLooted
            if (!looted) looted = [];
            looted.add(playerTag)
            nbt.merge({
                data: {
                    playersLooted: looted,
                },
            });
            let rolledLoot = Utils.rollChestLoot(`sunlit_cobblemon:chests/${block.id.split(":")[1]}`).toArray();
            if (player.stages.has("trainer_lvl_4") && block.id.equals("sunlit_cobblemon:poke_loot_ball")) {
                rolledLoot = Utils.rollChestLoot(`sunlit_cobblemon:chests/poke_loot_ball_gold_tier`).toArray();
            }
            rolledLoot.forEach((item) => {
                let reward = player.level.createEntity("minecraft:item");
                reward.x = block.x + 0.5;
                reward.y = block.y + 0.4;
                reward.z = block.z + 0.5;
                reward.item = item
                reward.spawn();
            });
            global.setBlockEntityData(block, nbt)
            level.sendBlockUpdated(block.getPos(), block.getBlockState(), block.getBlockState(), 3);
            server.runCommandSilent(`playsound stardew_fishing:chest_get block @a ${player.x} ${player.y} ${player.z}`);
        }
    }
}
);
