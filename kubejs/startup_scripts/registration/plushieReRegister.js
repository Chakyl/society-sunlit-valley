console.info("[SOCIETY] plushieReRegister.js loaded");

global.plushieRightClick = (click) => {
  const { item, block, player, level, server, hand } = click;
  const { x, y, z } = block;
  let nbt = block.getEntityData();
  const { type, quest_id, affection, animal } = nbt.data;

  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (!Number(type)) {
      global.plushieTraits.forEach((trait, index) => {
        if (trait.trait.equals(type)) {
          nbt.merge({
            data: {
              type: index,
            },
          });
          block.setEntityData(nbt);
        }
      })
    }
    if (!animal) {
      if (
        player.stages.has("women_who_run_with_the_plushies") &&
        affection < 2
      ) {
        nbt.merge({
          data: {
            affection: 2,
          },
        });
        block.setEntityData(nbt);
        level.spawnParticles(
          "minecraft:heart",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          10,
          0.1
        );
      }
      if (quest_id > 0) {
        let questList = Ingredient.of(global.plushieTraits[type].tag).itemIds;
        let questOffset = 3;
        if (questList.length < 12) questOffset = 2;
        if (questList.length > 36) questOffset = 6;
        let questItem =
          questList[affection * questOffset + Number(quest_id) - 1];
        let questName = Item.of(questItem).displayName;
        if (item && item == questItem) {
          if (!player.isCreative()) item.count--;
          level.spawnParticles(
            "minecraft:heart",
            true,
            x + 0.5,
            y + 0.5,
            z + 0.5,
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            0.1 * rnd(1, 4),
            10,
            0.1
          );
          nbt.merge({
            data: {
              quest_id: affection == 3 ? "0" : String(rnd(1, 3)),
              affection: affection + 1,
            },
          });
          if (
            player.stages.has("husbandry_mastery") &&
            !player.stages.has("women_who_run_with_the_plushies") &&
            affection > 2 &&
            Math.random() <= 0.05
          ) {
            block.popItemFromFace(
              "society:women_who_run_with_the_plushies",
              block.properties.get("facing")
            );
          }
          block.setEntityData(nbt);
          player.tell(Text.translatable("society.plushie.thank").gray());
        } else {
          player.tell(Text.translatable("society.plushie.want_gift").gray());
          player.tell(questName);
        }
      }
      if (
        item == "minecraft:air" &&
        block.id === "whimsy_deco:adv_singing_frog_plushie"
      ) {
        server.runCommandSilent(
          `playsound species:music.disk.spawner block @a ${x} ${y} ${z}`
        );
        block.set("whimsy_deco:sunlit_singing_frog", block.properties);
        block.setEntityData(nbt);
        server.scheduleInTicks(0, () => {
          server.scheduleInTicks(2740, () => {
            if (
              level.getBlock(block.pos).id === "whimsy_deco:sunlit_singing_frog"
            ) {
              block.set(
                "whimsy_deco:adv_singing_frog_plushie",
                block.properties
              );
              block.setEntityData(nbt);
            }
          });
        });
      } else
        server.runCommandSilent(
          `playsound tanukidecor:block.mini_figure.squeak block @a ${x} ${y} ${z}`
        );
    }
  }
};

StartupEvents.registry("block", (event) => {
  global.originalPlushies.forEach((plushie) => {
    const splitStr = plushie.split(":");
    let modelPath = `${splitStr[0]}:block/${splitStr[1]}`;
    if (splitStr[0].equals("tanukidecor"))
      modelPath = `tanukidecor:block/mini_figure/${splitStr[1]}`;
    event
      .create(`${splitStr[0]}:adv_${splitStr[1]}`, "cardinal")
      .defaultCutout()
      .box(2, 0, 2, 14, 14, 14)
      .tagBlock("minecraft:mineable/axe")
      .soundType("wool")
      .hardness(1.0)
      .requiresTool(false)
      .model(modelPath)
      .item((item) => {
        item.modelJson({
          parent: modelPath,
        });
      })
      .rightClick((click) => global.plushieRightClick(click))
      .blockEntity((blockInfo) => {
        blockInfo.initialData({
          type: "",
          quest_id: 0,
          quality: 0,
          affection: 0,
        });
      });
  });
});
