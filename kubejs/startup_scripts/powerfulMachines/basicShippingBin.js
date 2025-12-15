// priority: 1
console.info("[SOCIETY] basicShippingBin.js loaded");

const debug = false;

const basicCoinMap = [
  { coin: "numismatics:sun", value: 4096 },
  { coin: "numismatics:crown", value: 512 },
  { coin: "numismatics:cog", value: 64 },
  { coin: "numismatics:sprocket", value: 16 },
  { coin: "numismatics:bevel", value: 8 },
  { coin: "numismatics:spur", value: 1 },
];

const calculateSlotsNeeded = (coins) => {
  let slots = 0;
  coins.forEach((coinObj) => {
    let { count } = coinObj;
    for (let index = 0; index <= count; index += 64) {
      slots++;
    }
  });
  return slots;
};

StartupEvents.registry("block", (event) => {
  event
    .create("shippingbin:basic_shipping_bin", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .item((item) => {
      item.tooltip(Text.translatable("tooltip.society.shipping_bin").gray());
      item.modelJson({
        parent: "shippingbin:block/shipping_bin",
      });
    })
    .model("shippingbin:block/shipping_bin")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 4);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(10, 0, (entity) => {
        const { inventory, level, block } = entity;
        let dayTime = level.dayTime();
        let morningModulo = dayTime % 24000;
        if (rnd5()) global.cacheShippingBin(entity);
        if (morningModulo >= 5 && morningModulo < 15) {
          let slots = inventory.getSlots();
          let value = 0;
          let binPlayer = global.cacheShippingBin(entity);
          let blockData = block.getEntityData().data;
          let playerAttributes = blockData.attributes;
          let playerStages = blockData.stages;
          let removedSlots = [];
          let calculationResults;
          if (!playerStages || !playerAttributes) return;

          calculationResults = global.processShippingBinInventory(
            inventory,
            slots,
            playerAttributes,
            playerStages,
            true
          );
          value = Math.round(calculationResults.calculatedValue);
          removedSlots = calculationResults.removedItems;
          global.processValueOutput(
            value,
            slots,
            removedSlots,
            binPlayer,
            level.getServer(),
            block,
            inventory
          );
        }
      }),
        blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
      );
    });
});
