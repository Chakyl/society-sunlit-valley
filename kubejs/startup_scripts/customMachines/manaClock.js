console.info("[SOCIETY] manaClock.js loaded");

const MANA_PER_AGE = 10000;
const CLOCK_MAX_MANA = MANA_PER_AGE * 26;

global.manaClockTick = (entity) => {
  const { block, level } = entity;
  const { x, y, z } = block;
  const radius = 1;
  let mana = entity.persistentData.getInt("mana");
  if (mana >= MANA_PER_AGE) {
    let scanBlock;
    for (let pos of BlockPos.betweenClosed(
      new BlockPos(x - radius, y - radius, z - radius),
      [x + radius, y + radius, z + radius]
    )) {
      scanBlock = level.getBlock(pos);
      if (
        scanBlock.hasTag("society:aging_cask") &&
        Number(scanBlock.getProperties().get("stage")) === 0
      ) {
        global.handleProgress(level, scanBlock);
        entity.persistentData.putInt("mana", mana - MANA_PER_AGE);
        level.server.runCommandSilent(
          `playsound botania:gaia_trap block @a ${x} ${y} ${z}`
        );
        level.spawnParticles(
          "farmlife:stinky",
          true,
          scanBlock.x,
          scanBlock.y + 1.5,
          scanBlock.z,
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          5,
          0.01
        );
        break;
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:mana_clock", "cardinal")
    .soundType("copper")
    .box(1, 0, 1, 15, 16, 15)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.mana_clock.description").gray()
      );
      item.tooltip(
        Text.translatable("society.working_block_entity.need_mana").aqua()
      );
      item.tooltip(Text.translatable("tooltip.society.area", `3x3`).green());
      item.modelJson({
        parent: "society:block/kubejs/mana_clock",
      });
    })
    .model("society:block/kubejs/mana_clock")
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(200, 0, (entity) => global.manaClockTick(entity)),
        blockInfo.attachCapability(
          BotaniaCapabilityBuilder.MANA.blockEntity()
            .canReceiveManaFromBurst((be) => {
              let mana = be.persistentData.getInt("mana");
              return mana < CLOCK_MAX_MANA;
            })
            .receiveMana((be, amount) => {
              let currentMana = be.persistentData.getInt("mana");
              let received = Math.min(CLOCK_MAX_MANA - currentMana, amount);
              be.persistentData.putInt("mana", currentMana + received);
            })
            .getCurrentMana((be) => be.persistentData.getInt("mana"))
            .isFull((be) => {
              let mana = be.persistentData.getInt("mana");
              return mana >= CLOCK_MAX_MANA;
            })
        );
    });
});
