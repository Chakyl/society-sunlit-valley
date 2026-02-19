console.info("[SOCIETY] qualityWasher.js loaded");

global.handleQualityWasher = (e) => {
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
            if (slotItem.nbt && slotItem.nbt.quality_food && !slotItem.hasTag('society:plushies')) {
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
      item.tooltip(Text.translatable("block.society.quality_washer.description").gray());
      item.tooltip(Text.translatable("block.society.quality_washer.description.warn").red());
      item.tooltip(Text.translatable("society.working_block_entity.can_use_hopper").green());
      item.modelJson({
        parent: "society:block/kubejs/quality_washer",
      });
    })
    .model("society:block/kubejs/quality_washer")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(20, 0, (entity) => {
        global.handleQualityWasher(entity);
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
