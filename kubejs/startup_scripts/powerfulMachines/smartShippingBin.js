// priority: 1
console.info("[SOCIETY] smartShippingBin.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("shippingbin:smart_shipping_bin", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .item((item) => {
      item.tooltip(
        Text.translatable("tooltip.society.smart_shipping_bin").gray()
      );
      item.tooltip(
        Text.translatable("tooltip.society.smart_shipping_bin.warn").red()
      );
      item.modelJson({
        parent: "society:block/kubejs/smart_shipping_bin",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 6);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(4000, 0, (entity) => {
        const { inventory, block, level } = entity;
        if (global.susFunctionLogging) console.log("[SOCIETY-SUSFN] smartShippingBin.js");
        let slots = entity.inventory.getSlots();
        let value = 0;
        let binPlayer = global.cacheShippingBin(entity);
        let blockData = block.getEntityData().data;
        let playerAttributes = blockData.attributes;
        let playerStages = blockData.stages;
        let ownerUUID = blockData.owner;
        if (!playerStages || !playerAttributes) return;
        value = global.processShippingBinInventory(
          inventory,
          slots,
          playerAttributes,
          playerStages
        ).calculatedValue;

        global.processValueOutput(
          value,
          slots,
          undefined,
          binPlayer,
          level.getServer(),
          block,
          inventory,
          true,
          ownerUUID
        );
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
    }).blockstateJson = {
    multipart: [
      {
        when: { facing: "north" },
        apply: {
          model: "society:block/kubejs/smart_shipping_bin",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { facing: "east" },
        apply: {
          model: "society:block/kubejs/smart_shipping_bin",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { facing: "south" },
        apply: {
          model: "society:block/kubejs/smart_shipping_bin",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { facing: "west" },
        apply: {
          model: "society:block/kubejs/smart_shipping_bin",
          y: -90,
          uvlock: false,
        },
      },
    ],
  };
});
