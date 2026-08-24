console.info("[SOCIETY-S-COBBLEMON] cobblemonDuoChallengePodium.js loaded");

const $BattleRegistry = Java.loadClass("com.cobblemon.mod.common.battles.BattleRegistry");

let challenges = [
    "bear",
    "boom",
    "dust",
    "hospitality",
    "rain",
    "sing",
    "soar",
    "spook",
    "surge",
    "water"
]
BlockEvents.rightClicked("sunlit_cobblemon:duo_challenge_podium", (e) => {
    const { hand, player, block, level } = e;
    if (hand == "OFF_HAND") return;
    if (player.isFake()) return;
    let nbt = block.getEntityData();
    let { dayLastTriggered, triggerCount, randomMode } = nbt.data;
    let day = global.getDay(level);
    if (dayLastTriggered == -1 || global.compareDay(day, dayLastTriggered, 1)) {
        if (player) {
            if ($BattleRegistry.INSTANCE.getBattleByParticipatingPlayer(player) != null) {
                player.tell(Text.translatable("sunlit_cobblemon.duo_challenge_podium.already_battling").red());
                return;
            }
            if (global.getPartyCount(player) !== 4) {
                player.tell(Text.translatable("sunlit_cobblemon.duo_challenge_podium.four").red());
                return;
            }
            let trainer;
            if (triggerCount < 11) {
                trainer = `team_eon_${challenges[triggerCount]}`
            } else if (triggerCount == 11) {
                trainer = randomMode ? "eon_soul_challengers" : "team_eon_challengers"
                player.tell(Text.translatable("sunlit_cobblemon.duo_challenge_podium.eon_challenger").gold());
            } else {
                trainer = `eon_soul_${challenges[rnd(0, challenges.length - 1)]}`
            }
            level.getServer().runCommandSilent(`trainers makebattle ${player.username} ${trainer} ${player.username}`)
            nbt.merge({
                data: {
                    dayLastTriggered: day
                }
            });
            if (triggerCount >= 11) {
                nbt.merge({
                    data: {
                        triggerCount: 0
                    }
                });
                if (!randomMode) {
                    nbt.merge({
                        data: {
                            randomMode: true
                        }
                    });
                }
            } else {
                nbt.merge({
                    data: {
                        triggerCount: triggerCount + 1
                    }
                });
            }
            global.setBlockEntityData(block, nbt);
        }
    } else {
        player.tell(Text.translatable("sunlit_cobblemon.duo_challenge_podium.resting").red());
    }
});