console.info("[SOCIETY] sunTrialPedestal.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:sun_trial_pedestal", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.sun_trial_pedestal.description").gray()
      );
      item.modelJson({
        parent: "society:block/quality_washer",
      });
    })
    .model("society:block/quality_washer")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.initialData({ dayLastTriggered: 0 });
      blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) =>
            blockEntity.inventory.getSlotLimit(slot)
          )
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) =>
            blockEntity.inventory.getStackInSlot(slot)
          )
      );
    });
});
