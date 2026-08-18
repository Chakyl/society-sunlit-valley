
// BlockEvents.rightClicked("sunlit_cobblemon:mural_stone_5", event => {
//     let { block, player, level } = event;


//     let isValid = true;
//     let startX = block.x;
//     let startY = block.y + 4;
//     let startZ = block.z - 4;
//     let index = 1;
//     for (let dz = 0; dz < 4; dz++) {
//         for (let dx = 0; dx < 4; dx++) {
//             if (level.getBlock(startX + dx, startY, startZ + dz).id !== `sunlit_cobblemon:mural_stone_${expectedPattern[index]}`) {
//                 isValid = false;
//                 player.tell(index + " Is WRONG " + level.getBlock(startX + dx, startY, startZ + dz).id)
//                 break;
//             }
//             index++;
//         }
//     }
//     if (isValid) {
//         player.tell(Component.green('Success! The 4x4 grid pattern matches correctly.'));
//     } else {
//         player.tell(Component.red('Validation failed! The pattern does not match.'));
//     }
// });
const mewPattern = [
    5, 11, 2, 9,
    14, 7, 16, 6,
    8, 1, 10, 15,
    4, 13, 3, 12,
]
let processBlock = (index, level, originalPos, x, y, z, validate, status) => {
    let scannedBlock = level.getBlock(originalPos.x + x, originalPos.y + y, originalPos.z + z)
    if (validate) {
        if (scannedBlock.id !== `sunlit_cobblemon:mural_stone_${mewPattern[index - 1]}`) {
            status.valid = false;
        }
    } else {
        scannedBlock.set('minecraft:air');
        level.spawnParticles(
            "species:collected_soul",
            true,
            scannedBlock.x,
            scannedBlock.y + 0.5,
            scannedBlock.z,
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            0.2 * rnd(1, 2),
            5,
            0.01
        );
    }
}
let handleMewScan = (level, block, validate, status) => {
    let facing = block.getProperties().facing;
    let index = 0;
    for (let height = 0; height < 4; height++) {
        for (let width = 0; width < 4; width++) {
            index++;
            switch (facing) {
                case 'south':
                    processBlock(index, level, block.pos, width * -1, height, 0, validate, status);
                    break;
                case 'north':
                    processBlock(index, level, block.pos, width, height, 0, validate, status);
                    break;
                case 'west':
                    processBlock(index, level, block.pos, 0, height, width * -1, validate, status);
                    break;
                case 'east':
                    processBlock(index, level, block.pos, 0, height, width * 1, validate, status);
                    break;
            }
        }
    }
}
BlockEvents.rightClicked("sunlit_cobblemon:mural_stone_5", (e) => {
    let { player, level, block, hand, item, server } = e;
    if (hand !== "MAIN_HAND") return;
    if ("society:prismatic_shard" !== item.id) return;
    if (!global.hasScope(player)) {
        player.tell(Text.translatable("sunlit_cobblemon.need_scope").red());
        return;
    }
    let status = { valid: true };
    handleMewScan(level, block, true, status)
    if (status.valid) {
        let { x, y, z } = block;
        item.shrink(1)
        global.addItemCooldown(player, item, 200);
        server.runCommandSilent(`playsound trials:vault_open block @a ${block.x} ${block.y} ${block.z}`);
        server.runCommandSilent(`playsound botania:terrasteel_craft block @a ${block.x} ${block.y} ${block.z}`);
        server.scheduleInTicks(100, () => {
            handleMewScan(level, block, true, status)
            if (status.valid) {
                let spawnedAny = global.summonRaidPokemon(server, level, block, "mew", "", 100, 8, false, false, 0);
                if (spawnedAny) {
                    handleMewScan(level, block)
                    server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
                    server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
                    server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
                    level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
                } else {
                    player.give("society:prismatic_shard");
                    player.tell(Text.translatable("sunlit_cobblemon.mural_stone.not_correct").red());
                }
            } else {
                player.give("society:prismatic_shard");
                player.tell(Text.translatable("sunlit_cobblemon.mural_stone.not_correct").red());
            }
        })
    } else {

        player.tell(Text.translatable("sunlit_cobblemon.mural_stone.not_correct").red());
    }
});