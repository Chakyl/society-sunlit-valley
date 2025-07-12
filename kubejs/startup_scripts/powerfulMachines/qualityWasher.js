// priority: 1
console.info("[SOCIETY] qualityWasher.js loaded");

global.handlePush = (e) => {
  const { inventory, level, block } = e;
  let slots = inventory.getSlots();
  let slotItem;
  let sentItem;
  let belowItem;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (belowBlock.inventory && !inventory.isEmpty()) {
    for (let i = 0; i < slots; i++) {
      slotItem = inventory.getStackInSlot(i);
      if (slotItem !== Item.of("minecraft:air")) {
        for (let j = 0; j < belowBlock.inventory.slots; j++) {
          belowItem = belowBlock.inventory.getStackInSlot(j);
          if (
            belowItem === Item.of("minecraft:air") ||
            (belowItem === Item.of(slotItem.id) &&
              belowItem.count < belowBlock.inventory.getSlotLimit(j))
          ) {
            sentItem = slotItem.copy();
            if (slotItem.nbt && slotItem.nbt.quality_food) {
              sentItem.nbt = null;
            }
            sentItem.count = 1;
            belowBlock.inventory.insertItem(j, sentItem, false);
            slotItem.count--;
            return;
          }
        }
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:quality_washer", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.gray("Removes Quality from items and inserts them into the block below"));
      item.tooltip(Text.red("Quality can not be restored!"));
      item.tooltip(Text.green("Automatable using hoppers"));
      item.modelJson({
        parent: "society:block/quality_washer",
      });
    })
    .model("society:block/quality_washer")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(20, 0, (entity) => {
        global.handlePush(entity);
      }),
        blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
      );
    });
});
