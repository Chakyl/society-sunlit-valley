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
      item.tooltip(Text.gray("Sells items every morning and leaves coins in its inventory"));
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
        if (morningModulo >= 5 && morningModulo < 15) {
          let slots = inventory.getSlots();
          let value = 0;
          let playerAttributes;
          let binPlayer;
          let binPlayerUUID;
          let binDebt = 0;
          let debtPaid;
          let totalDebt;
          let removedSlots = [];
          let calculationResults;
          level.players.forEach((p) => {
            if (p.getUuid().toString() === block.getEntityData().data.owner) {
              playerAttributes = p.nbt.Attributes;
              binPlayer = p;
              binPlayerUUID = binPlayer.getUuid().toString();
            }
          });
          if (playerAttributes) {
            calculationResults = global.processShippingBinInventory(
              inventory,
              slots,
              playerAttributes,
              true
            );
            value = Math.round(calculationResults.calculatedValue);
            removedSlots = calculationResults.removedItems;
            if (value > 0) {
              if (binPlayer.server.persistentData.debts) {
                binDebt = binPlayer.server.persistentData.debts.filter((debt) => {
                  return debt.uuid === binPlayerUUID;
                });
              }
              if (binDebt.length > 0 && binDebt[0].amount > 0) {
                totalDebt = binDebt[0].amount;
                if (value >= totalDebt) {
                  value = value - totalDebt;
                  debtPaid = totalDebt;
                  binPlayer.server.runCommandSilent(
                    `immersivemessages sendcustom ${
                      binPlayer.username
                    } {anchor:7,background:1,color:"#55FF55",size:1,y:30,slideleft:1,slideoutleft:1,typewriter:1} 8 You paid off your :coin: ${global.formatPrice(
                      debtPaid
                    )} debt!`
                  );

                  global.setDebt(binPlayer.server, binPlayerUUID, 0);
                } else {
                  debtPaid = value;
                  value = 0;
                  binPlayer.server.runCommandSilent(
                    `immersivemessages sendcustom ${
                      binPlayer.username
                    } {anchor:7,background:1,color:"#FF5555",size:1,y:30,slideleft:1,slideoutleft:1,typewriter:1} 8 :coin: ${global.formatPrice(
                      debtPaid
                    )} §7of your debt paid off...`
                  );
                  global.setDebt(binPlayer.server, binPlayerUUID, totalDebt - debtPaid);
                }
              }
              value = Math.round(value);
              let outputs = calculateCoinsFromValue(value, [], basicCoinMap);
              if (!outputs) outputs = [];

              if (debug) {
                console.log(`slots: ${slots}`);
                console.log(`countNonEmpty: ${inventory.countNonEmpty()}`);
                console.log(`RemovedSlots: ${removedSlots.length}`);
                console.log(`calculateSlotsNeeded: ${calculateSlotsNeeded(outputs)}`);
              }
              if (
                slots -
                  inventory.countNonEmpty() +
                  removedSlots.length -
                  calculateSlotsNeeded(outputs) >=
                0
              ) {
                binPlayer.server.runCommandSilent(
                  `playsound etcetera:item.handbell.ring block @a ${binPlayer.x} ${binPlayer.y} ${binPlayer.z} 0.3`
                );
                binPlayer.server.runCommandSilent(
                  `immersivemessages sendcustom ${
                    binPlayer.username
                  } {anchor:7,background:1,color:"#FFAA00",size:1,y:30,slideleft:1,slideoutleft:1,typewriter:1} 8 :coin: ${value
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} §7worth of goods sold`
                );
                for (let i = 0; i < removedSlots.length; i++) {
                  inventory.setStackInSlot(removedSlots[i], "minecraft:air");
                }
                outputs.forEach((output) => {
                  let { coin, count } = output;
                  for (let index = 0; index <= count; index += 64) {
                    let difference = count - index;
                    for (let i = 0; i < slots; i++) {
                      if (inventory.getStackInSlot(i).item.id === "minecraft:air") {
                        inventory.setStackInSlot(
                          i,
                          Item.of(`${difference > 64 ? 64 : difference}x ${coin}`)
                        );
                        break;
                      }
                    }
                  }
                });
                if (debtPaid > 0) {
                  for (let j = 0; j < inventory.slots; j++) {
                    if (inventory.getStackInSlot(j) === Item.of("minecraft:air")) {
                      inventory.insertItem(
                        j,
                        Item.of(
                          "candlelight:note_paper_written",
                          `{author:"Sunlit Valley Hospital",text:[" Sunlit Valley Hospital

${binPlayer.username}, your profits were used to pay off your debt!

:coin: ${global.formatPrice(debtPaid)} paid out of your :coin: ${global.formatPrice(
                            totalDebt
                          )} debt."],title:"Debt Payement Receipt"}`
                        ),
                        false
                      );
                      break;
                    }
                  }
                }
              } else {
                binPlayer.server.runCommandSilent(
                  `playsound stardew_fishing:fish_escape block @a ${binPlayer.x} ${binPlayer.y} ${binPlayer.z} 0.3`
                );
                binPlayer.server.runCommandSilent(
                  `immersivemessages sendcustom ${binPlayer.username} {anchor:7,background:1,color:"#FF5555",size:1,y:24,slideleft:1,slideoutleft:1,typewriter:1} 8 Your Basic Shipping Bin was too full to sell...`
                );
              }
            }
          }
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
