console.info("[SOCIETY] plushieReRegister.js loaded");

global.plushieRightClick = (click) => {
  const { item, block, player, level, server, hand } = click;
  const { x, y, z } = block;
  const properties = block.properties;
  const affection = Number(properties.get("affection").toLowerCase());
  const type = Number(properties.get("type").toLowerCase());
  const quest_id = Number(properties.get("quest_id").toLowerCase());

  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (quest_id > 0) {
      let questList = Ingredient.of(global.plushieTraits[type].tag).itemIds;
      let questOffset = 3;
      if (questList.length < 12) questOffset = 2;
      if (questList.length > 36) questOffset = 6;
      let questItem = questList[affection * questOffset + quest_id - 1];
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
        block.set(block.id, {
          facing: properties.get("facing").toLowerCase(),
          quest_id: affection == 3 ? "0" : String(rnd(1, 3)),
          affection: String(affection + 1),
          quality: properties.get("quality").toLowerCase(),
          type: String(type),
        });
        player.tell("§c❤ §7Thank you for the wonderful gift!");
      } else {
        player.tell("§c❤ §7I would be much happier if I had this...");
        player.tell(questName);
      }
    }
    if (item == "minecraft:air" && block.id === "whimsy_deco:adv_singing_frog_plushie") {
      server.runCommandSilent(`playsound species:music.disk.spawner block @a ${x} ${y} ${z}`);
      block.set("whimsy_deco:sunlit_singing_frog", block.properties);
      server.scheduleInTicks(0, () => {
        server.scheduleInTicks(2740, () => {
          if (level.getBlock(block.pos).id === "whimsy_deco:sunlit_singing_frog") {
            block.set("whimsy_deco:adv_singing_frog_plushie", block.properties);
          }
        });
      });
    } else
      server.runCommandSilent(
        `playsound tanukidecor:block.mini_figure.squeak block @a ${x} ${y} ${z}`
      );
  }
};

StartupEvents.registry("block", (event) => {
  global.originalPlushies.forEach((plushie) => {
    const splitStr = plushie.split(":");
    let modelPath = `${splitStr[0]}:block/${splitStr[1]}`;
    if (splitStr[0].equals("tanukidecor"))
      modelPath = `tanukidecor:/block/mini_figure/${splitStr[1]}`;
    event
      .create(`${splitStr[0]}:adv_${splitStr[1]}`, "cardinal")
      .property(integerProperty.create("type", 0, global.plushieTraits.length))
      .property(integerProperty.create("quest_id", 0, 3))
      .property(integerProperty.create("quality", 0, 4))
      .property(integerProperty.create("affection", 0, 4))
      .defaultCutout()
      .box(2, 0, 2, 14, 14, 14)
      .soundType("wool")
      .hardness(1.0)
      .requiresTool(false)
      .model(modelPath)
      .item((item) => {
        item.modelJson({
          parent: modelPath,
        });
      })
      .defaultState((state) => {
        state
          .set(integerProperty.create("type", 0, global.plushieTraits.length), 0)
          .set(integerProperty.create("quest_id", 0, 3), 0)
          .set(integerProperty.create("quality", 0, 4), 0)
          .set(integerProperty.create("affection", 0, 4), 0);
      })
      .placementState((state) => {
        state
          .set(integerProperty.create("type", 0, global.plushieTraits.length), 0)
          .set(integerProperty.create("quest_id", 0, 3), 0)
          .set(integerProperty.create("quality", 0, 4), 0)
          .set(integerProperty.create("affection", 0, 4), 0);
      })
      .rightClick((click) => global.plushieRightClick(click));
  });
});
