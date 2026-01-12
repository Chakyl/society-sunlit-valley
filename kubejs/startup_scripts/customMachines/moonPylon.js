//priority: 100
console.info("[SOCIETY] moonPylon.js loaded");

const pylonBuffs = [
  "pylon_extra_ore",
  "pylon_geode_roll",
  "pylon_rope_reveal",
  "pylon_remains",
  "pylon_damage",
];
global.handleMoonPylonClick = (click) => {
  const { player, server, hand, block, level } = click;

  if (player.stages.has("mining_mastery")) {
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      let day = global.getDay(level);
      let dayData = player.persistentData.days.manaPylonDay;
      if (dayData == undefined || dayData < day) {
        let selectedBuff =
          pylonBuffs[Math.floor(Math.random() * pylonBuffs.length)];
        player.tell(
          Text.translatable(`block.society.moon_pylon.announce`).aqua()
        );
        player.tell(
          Text.translatable(`block.society.moon_pylon.${selectedBuff}`).green()
        );
        player.persistentData.days.manaPylonDay = day;
        pylonBuffs.forEach((buff) => {
          player.stages.remove(buff);
        });
        player.stages.add(selectedBuff);
        server.runCommandSilent(
          `playsound create:peculiar_bell_use block @a ${player.x} ${player.y} ${player.z}`
        );
        level.spawnParticles(
          "species:spectre_smoke",
          true,
          block.x,
          block.y + 1.5,
          block.z,
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          0.1 * rnd(1, 2),
          1,
          0.5
        );
      } else {
        player.tell(
          Text.translatable("block.society.moon_pylon.already_taken").red()
        );
      }
    }
  } else
    player.tell(Text.translatable("block.society.moon_pylon.no_mastery").red());
};
StartupEvents.registry("block", (event) => {
  event
    .create("society:moon_pylon", "cardinal")
    .box(3, 0, 3, 13, 16, 13)
    .defaultCutout()
    .soundType("stone")
    .hardness(4.5)
    .resistance(9.0)
    .requiresTool(false)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.moon_pylon.description").gray()
      );
      item.modelJson({
        parent: "society:block/moon_pylon",
      });
    })
    .rightClick((click) => {
      global.handleMoonPylonClick(click);
    });
});
