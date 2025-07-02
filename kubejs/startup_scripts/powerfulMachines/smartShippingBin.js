// priority: 1
console.info("[SOCIETY] smartShippingBin.js loaded");

// Returns array of coins from price, prioritizing high value coins
const calculateCoinsFromValue = (price, output, coinMap) => {
  const resolvedCoinMap = coinMap || global.coinMap;

  for (let i = 0; i < resolvedCoinMap.length; i++) {
    let { coin, value } = resolvedCoinMap[i];
    if (value <= price) {
      if (price % value === 0) {
        output.push({ coin: coin, count: price / value });
        return output;
      } else {
        output.push({ coin: coin, count: Math.floor(price / value) });
        calculateCoinsFromValue(price % value, output, resolvedCoinMap);
      }
      return output;
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("shippingbin:smart_shipping_bin", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .item((item) => {
      item.tooltip(
        Text.gray(
          "Sells inventory periodically and spits it out into the world"
        )
      );
      item.tooltip(
        Text.green("Automatically converts coins into highest denominations")
      );
      item.modelJson({
        parent: "society:block/smart_shipping_bin",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 6);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(4000, 0, (entity) => {
        const { inventory, block } = entity;
        let slots = entity.inventory.getSlots();
        let value = 0;
        let playerAttributes;
        let binPlayer;
        entity.level.players.forEach((p) => {
          if (p.getUuid().toString() === block.getEntityData().data.owner) {
            playerAttributes = p.nbt.Attributes;
            binPlayer = p;
          }
        });
        if (playerAttributes) {
          value = global.processShippingBinInventory(
            inventory,
            slots,
            playerAttributes
          ).calculatedValue;
          if (value > 0) {
            value = Math.round(value);
            binPlayer.server.runCommandSilent(
              `playsound etcetera:item.handbell.ring block @a ${binPlayer.x} ${binPlayer.y} ${binPlayer.z} 0.3`
            );
            binPlayer.server.runCommandSilent(
              `immersivemessages sendcustom ${
                binPlayer.username
              } {anchor:7,background:1,color:"#FFAA00",size:1,y:30,slideleft:1,slideoutleft:1,typewriter:1} 8 ● ${global.formatPrice(value)} §7worth of goods sold `
            );
            let outputs = calculateCoinsFromValue(value, []);
            outputs.forEach((output) => {
              let { coin, count } = output;
              for (let index = 0; index <= count; index += 64) {
                let difference = count - index;
                block.popItemFromFace(
                  `${difference > 64 ? 64 : difference}x ${coin}`,
                  block.properties.get("facing")
                );
              }
            });
          }
        }
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
    })
    .blockstateJson = MultipartBuilder("society:block/smart_shipping_bin")
      .complex(
        MultipartModifiers.directional()
      )
      .build();
});
