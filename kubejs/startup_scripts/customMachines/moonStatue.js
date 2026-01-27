//priority: 100
console.info("[SOCIETY] moonStatue.js loaded");

const statueBuffs = [
  "moon_extra_ore",
  "moon_geode_roll",
  "moon_rope_reveal",
  "moon_remains",
  "moon_damage",
];
global.handleMoonStatueClick = (click) => {
  const { player, server, hand, block, level } = click;

  if (!player.isFake() && player.stages.has("mining_mastery")) {
    if (hand == "OFF_HAND") return;
    if (hand == "MAIN_HAND") {
      let day = global.getDay(level);
      if (!player.persistentData.days) player.persistentData.days = {}
      let dayData = player.persistentData.days.moonStatueDay;
      if (dayData == undefined || dayData < day) {
        let selectedBuff =
          statueBuffs[Math.floor(Math.random() * statueBuffs.length)];
        player.tell(
          Text.translatable(`block.society.moon_statue.announce`).aqua()
        );
        player.tell(
          Text.translatable(`block.society.moon_statue.${selectedBuff}`).green()
        );
        player.persistentData.days.moonStatueDay = day;
        statueBuffs.forEach((buff) => {
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
          Text.translatable("block.society.moon_statue.already_taken").red()
        );
      }
    }
  } else
    player.tell(Text.translatable("block.society.moon_statue.no_mastery").red());
};
StartupEvents.registry("block", (event) => {
  event
    .create("society:moon_statue", "cardinal")
    .displayName("Statue of The Moon Gnome")
    .defaultCutout()
    .soundType("stone")
    .hardness(4.5)
    .resistance(9.0)
    .lightLevel(0.8)
    .requiresTool(false)
    .model("society:block/kubejs/moon_statue")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.moon_statue.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/moon_statue",
      });
    })
    .rightClick((click) => {
      global.handleMoonStatueClick(click);
    });
});
