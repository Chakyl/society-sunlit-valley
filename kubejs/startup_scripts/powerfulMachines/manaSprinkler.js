console.info("[SOCIETY] manaSprinkler.js loaded");

const MANA_PER_SPRINKLE = 50;
const SPRINKLER_MAX_MANA = MANA_PER_SPRINKLE * 25 * 8;

global.manaSprinklerScan = (entity, radius) => {
  const { block, level } = entity;
  const { x, y, z } = block;
  let scanBlock;
  let sprinklerMana = entity.persistentData.getInt("mana");
  let flowerBE
  let triggeredSpread = false;

  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.id == "society:mana_fruit_crop") {
      sprinklerMana = entity.persistentData.getInt("mana");
      flowerBE = scanBlock.entity
      if (sprinklerMana > MANA_PER_SPRINKLE && flowerBE.persistentData.getInt("mana") < FRUIT_MAX_MANA) {
        flowerBE.persistentData.putInt("mana", flowerBE.persistentData.getInt("mana") + MANA_PER_SPRINKLE);
        entity.persistentData.putInt("mana", entity.persistentData.getInt("mana") - MANA_PER_SPRINKLE);
        flowerBE.setChanged()
        entity.setChanged()
        triggeredSpread = true;
        level.spawnParticles(
          "windswept:will_o_the_wisp",
          true,
          scanBlock.x + 0.5,
          scanBlock.y + 1.25,
          scanBlock.z + 0.5,
          0, 0, 0,
          1,
          0.01
        );
      }
    }
  }
  if (triggeredSpread) {
    level.server.runCommandSilent(
      `playsound doapi:water_sprinkler block @a ${x} ${y} ${z}`
    );
    level.server.runCommandSilent(
      `playsound botania:spreader_fire block @a ${x} ${y} ${z}`
    );
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:mana_sprinkler")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .tagBlock("dew_drop_farmland_growth:sprinkler_tier_2")
    .defaultCutout()
    .soundType("wood")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.mana_sprinkler.description").aqua()
      );
      item.tooltip(Text.translatable(
        "tooltip.society.area",
        `5x5`
      ).green())
      item.tooltip(
        Text.translatable("block.society.mana_sprinkler.need_mana").aqua()
      );
      item.modelJson({
        parent: "society:block/kubejs/mana_sprinkler",
      });
    })
    .model("society:block/kubejs/mana_sprinkler")
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(20, 0, (entity) => {
        global.manaSprinklerScan(entity, 3);
      }),
      blockInfo.attachCapability(
        BotaniaCapabilityBuilder.MANA.blockEntity()
          .canReceiveManaFromBurst((be) => {
            let mana = be.persistentData.getInt("mana");
            return mana < SPRINKLER_MAX_MANA;
          })
          .receiveMana((be, amount) => {
            let currentMana = be.persistentData.getInt("mana");
            let received = Math.min(SPRINKLER_MAX_MANA - currentMana, amount);
            be.persistentData.putInt("mana", currentMana + received);
          })
          .getCurrentMana((be) => be.persistentData.getInt("mana"))
          .isFull((be) => {
            let mana = be.persistentData.getInt("mana");
            return mana >= SPRINKLER_MAX_MANA;
          })
      );
    });
});
