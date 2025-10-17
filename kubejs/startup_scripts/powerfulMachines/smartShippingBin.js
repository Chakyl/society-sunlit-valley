// priority: 1
console.info("[SOCIETY] smartShippingBin.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("shippingbin:smart_shipping_bin", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .item((item) => {
      item.tooltip(
        Text.gray("Sells inventory periodically and puts the profit into your bank account.")
      );
      item.tooltip(
        Text.gray(
          "Place a Card from a shared bank account in the first slot to sell directly to it."
        )
      );
      item.tooltip(
        Text.red(
          "If you don't have an account or are at the limit it will spit out coins when sold."
        )
      );
      item.modelJson({
        parent: "society:block/smart_shipping_bin",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 6);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(4000, 0, (entity) => {
        const { inventory, block, level } = entity;
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
          model: "society:block/smart_shipping_bin",
          y: 0,
          uvlock: false,
        },
      },
      {
        when: { facing: "east" },
        apply: {
          model: "society:block/smart_shipping_bin",
          y: 90,
          uvlock: false,
        },
      },
      {
        when: { facing: "south" },
        apply: {
          model: "society:block/smart_shipping_bin",
          y: 180,
          uvlock: false,
        },
      },
      {
        when: { facing: "west" },
        apply: {
          model: "society:block/smart_shipping_bin",
          y: -90,
          uvlock: false,
        },
      },
    ],
  };
});
