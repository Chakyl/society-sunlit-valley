console.info("[SOCIETY] iridiumClock.js loaded");

global.runIridiumClock = (entity) => {
  const { level, block } = entity;
  const { x, y, z } = block;
  const radius = 2;
  let scanBlock;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  const iridiumClockProgTime = 20;
  if (
    morningModulo >= iridiumClockProgTime &&
    morningModulo < iridiumClockProgTime + artMachineTickRate
  ) {
    let surroundingClocks = 0;
    for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius), [
      x + radius,
      y + radius,
      z + radius,
    ])) {
      scanBlock = level.getBlock(pos);
      if (scanBlock.id.equals("society:golden_clock")) {
        surroundingClocks++;
      }
    }

    let blockNbt = block.getEntityData();
    if (Number(blockNbt.data.triggerTimes) < 1728) {
      blockNbt.merge({
        data: {
          triggerTimes: Number(blockNbt.data.triggerTimes) + 1,
        },
      });
    }
    block.setEntityData(blockNbt);
    let spinelType = Math.random() < 0.01 * surroundingClocks ? "society:pristine_spinel" : "society:spinel"
    let spinelToInsert = blockNbt.data.triggerTimes;
    let roundedStacks = Math.floor(spinelToInsert / 64);
    if (spinelToInsert < 64) {
      global.insertInto(block, Item.of(`${spinelToInsert}x ${spinelType}`));
    } else {
      for (let i = 0; i <= roundedStacks; i++) {
        if (roundedStacks - 1 == i && spinelToInsert % 64 !== 0) {
          global.insertInto(block, Item.of(`${spinelToInsert - (roundedStacks * 64)}x ${spinelType}`));
        } else {
          global.insertInto(block, Item.of(`64x ${spinelType}`));
        }
      }
    }

    level.server.runCommandSilent(
      `playsound tanukidecor:block.clock_tower.chime block @a ${x} ${y} ${z}`
    );
  }
}
StartupEvents.registry("block", (event) => {
  event
    .create("society:iridium_clock", "cardinal")
    .soundType("copper")
    .box(1, 0, 1, 15, 16, 15)
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.translatable("block.society.iridium_clock.description").gray());
      item.tooltip(Text.translatable("block.society.iridium_clock.area").green());
      item.modelJson({
        parent: "society:block/kubejs/iridium_clock",
      });
    })
    .model("society:block/kubejs/iridium_clock")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 3);
      blockInfo.initialData({ triggerTimes: 0 });
      blockInfo.serverTick(artMachineTickRate, 0, (entity) => global.runIridiumClock(entity))
      blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) =>
            blockEntity.inventory.getSlotLimit(slot)
          )
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) =>
            blockEntity.inventory.getStackInSlot(slot)
          )
      );
    })
});
