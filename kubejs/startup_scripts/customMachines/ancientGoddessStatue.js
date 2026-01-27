//priority: 100
console.info("[SOCIETY] ancientGoddessStatue.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:ancient_goddess_statue", "cardinal")
    .box(3, 0, 3, 13, 20, 13)
    .defaultCutout()
    .soundType("stone")
    .hardness(4.5)
    .resistance(9.0)
    .requiresTool(false)
    .model("society:block/kubejs/ancient_goddess_statue")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable(
          "block.society.ancient_goddess_statue.description"
        ).gray()
      );
      item.tooltip(
        Text.translatable(
          "block.society.ancient_goddess_statue.description.warn"
        ).red()
      );
      item.modelJson({
        parent: "society:block/kubejs/ancient_goddess_statue",
      });
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const facing = block.properties.get("facing");
      const season = global.getSeasonFromLevel(player.level);

      if (player.stages.has("farmers_blessing")) {
        if (hand == "OFF_HAND") return;
        if (hand == "MAIN_HAND") {
          let day = global.getDay(level);
          if (!player.persistentData.days) player.persistentData.days = {}
          let dayData = player.persistentData.days.ancientGoddessStatueDay;
          if (dayData == undefined || dayData < day) {
            switch (season) {
              case "spring":
                if (item === "society:ancient_fruit" && item.count === 64) {
                  block.popItemFromFace("society:prismatic_shard", facing);
                  if (!player.isCreative()) item.count = item.count - 64;
                  successParticles(level, block);
                  player.persistentData.days.ancientGoddessStatueDay = day;
                } else {
                  player.tell(
                    Text.translatable(
                      "block.society.ancient_goddess_statue.spring"
                    ).aqua()
                  );
                }
                break;
              case "summer":
                if (item === "vintagedelight:ghost_pepper" && item.count === 64) {
                  block.popItemFromFace("64x society:sparkstone", facing);
                  if (!player.isCreative()) item.count = item.count - 64;
                  successParticles(level, block);
                  player.persistentData.days.ancientGoddessStatueDay = day;
                } else {
                  player.tell(
                    Text.translatable(
                      "block.society.ancient_goddess_statue.summer"
                    ).aqua()
                  );
                }
                break;
              case "autumn":
                if (item === "farm_and_charm:corn" && item.count === 64) {
                  block.popItemFromFace(
                    "4x society:pristine_star_shards",
                    facing
                  );
                  if (!player.isCreative()) item.count = item.count - 64;
                  successParticles(level, block);
                  player.persistentData.days.ancientGoddessStatueDay = day;
                } else {
                  player.tell(
                    Text.translatable(
                      "block.society.ancient_goddess_statue.autumn"
                    ).aqua()
                  );
                }
                break;
              case "winter":
                if (item === "snowyspirit:ginger" && item.count === 64) {
                  block.popItemFromFace("4x minecraft:netherite_scrap", facing);
                  if (!player.isCreative()) item.count = item.count - 64;
                  successParticles(level, block);
                  player.persistentData.days.ancientGoddessStatueDay = day;
                } else {
                  player.tell(
                    Text.translatable(
                      "block.society.ancient_goddess_statue.winter"
                    ).aqua()
                  );
                }
                break;
            }
          } else {
            player.tell(
              Text.translatable("block.society.ancient_goddess_statue.already_taken").red()
            );
          }
        }
      } else
        player.tell(
          Text.translatable(
            "block.society.ancient_goddess_statue.no_skill"
          ).red()
        );
    })
});