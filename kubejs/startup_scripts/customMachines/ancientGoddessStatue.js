console.info("[SOCIETY] seedMaker.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:ancient_goddess_statue", "cardinal")
    .box(3, 0, 3, 13, 20, 13)
    .defaultCutout()
    .soundType("stone")
    .hardness(4.5)
    .resistance(9.0)
    .requiresTool(false)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Offer a stack of crops to recieve the Goddess' blessing"));
      item.tooltip(Text.gray("Crops and rewards change every season"));
      item.tooltip(Text.red("Only usable if Farmer's Blessing skill unlocked"));
      item.modelJson({
        parent: "society:block/ancient_goddess_statue",
      });
    })
    .rightClick((click) => {
      const { player, item, block, hand, level } = click;
      const facing = block.properties.get("facing");
      const season = global.getSeasonFromLevel(player.level);

      if (player.stages.has("farmers_blessing")) {
        if (hand == "OFF_HAND") return;
        if (hand == "MAIN_HAND") {
          switch (season) {
            case "spring":
              if (item === "society:ancient_fruit" && item.count === 64) {
                block.popItemFromFace("society:prismatic_shard", facing);
                if (!player.isCreative()) item.count = item.count - 64;
                successParticles(level, block);
              } else {
                player.tell(
                  Text.aqua(`Give me 64 of something ancient for something prismatic...`)
                );
              }
              break;
            case "summer":
              if (item === "vintagedelight:ghost_pepper" && item.count === 64) {
                block.popItemFromFace("32x society:sparkstone", facing);
                if (!player.isCreative()) item.count = item.count - 64;
                successParticles(level, block);
              } else {
                player.tell(Text.aqua(`Give me 64 of something spicy for something sparky..`));
              }
              break;
            case "autumn":
              if (item === "farm_and_charm:corn" && item.count === 64) {
                block.popItemFromFace("4x society:pristine_star_shards", facing);
                if (!player.isCreative()) item.count = item.count - 64;
                successParticles(level, block);
              } else {
                player.tell(
                  Text.aqua(`Give me 64 of something cobbed for a something pristine...`)
                );
              }
              break;
            case "winter":
              if (item === "snowyspirit:ginger" && item.count === 64) {
                block.popItemFromFace("4x minecraft:netherite_scrap", facing);
                if (!player.isCreative()) item.count = item.count - 64;
                successParticles(level, block);
              } else {
                player.tell(
                  Text.aqua(
                    `Give me 64 of something that only grows in the cold for something from the depths...`
                  )
                );
              }
              break;
          }
        }
      } else
        player.tell(Text.red(`You need the skill "Farmer's Blessing" to recieve my blessing...`));
    })
    .blockstateJson = MultipartBuilder("society:block/ancient_goddess_statue")
      .complex(
        MultipartModifiers.directional(),
      )
      .build();
});
