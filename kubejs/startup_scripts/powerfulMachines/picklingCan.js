// priority: -21
console.info("[SOCIETY] picklingCan.js loaded");

global.picklingRecipes = new Map([
  ["vintagedelight:ghost_pepper", { pickle: "vintagedelight:pickled_pepper" }],
  ["vintagedelight:cucumber", { pickle: "vintagedelight:pickle" }],
  ["minecraft:pitcher_pod", { pickle: "vintagedelight:pickled_pitcher_pod" }],
  ["minecraft:beetroot", { pickle: "vintagedelight:pickled_beetroot" }],
  ["farm_and_charm:onion", { pickle: "vintagedelight:pickled_onion" }],
  ["farmersdelight:cabbage", { pickle: "vintagedelight:kimchi" }],
]);
global.picklableVegetables.forEach((pickle) => {
  global.picklingRecipes.set(pickle.item, {
    pickle: `society:pickled_${pickle.item.split(":")[1]}`,
  });
});
global.handlePicklingCan = (e) => {
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
      if (
        slotItem !== Item.of("minecraft:air") &&
        global.picklingRecipes.get(`${slotItem.id}`)
      ) {
        for (let j = 0; j < belowBlock.inventory.slots; j++) {
          belowItem = belowBlock.inventory.getStackInSlot(j);
          let pickle = global.picklingRecipes.get(`${slotItem.id}`).pickle;
          if (
            belowItem === Item.of("minecraft:air") ||
            (belowItem === pickle &&
              belowItem.count < belowBlock.inventory.getSlotLimit(j))
          ) {
            sentItem = pickle;
            if (
              slotItem.nbt &&
              slotItem.nbt.quality_food &&
              !slotItem.hasTag("society:plushies")
            ) {
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
    .create("society:pickling_can", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.gray(
          "Pickles vegetables automatically and inserts them into the block below"
        )
      );
      item.tooltip(Text.green("Preserves input quality"));
      item.modelJson({
        parent: "etcetera:block/prickly_can",
      });
    })
    .model("etcetera:block/prickly_can")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(20, 0, (entity) => {
        global.handlePicklingCan(entity);
      }),
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
