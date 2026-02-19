// priority: -21
console.info("[SOCIETY] roeRecycler.js loaded");

global.handleRoeRecycler = (e) => {
  const { inventory, level, block } = e;
  const { x, y, z } = block;
  let slots = inventory.getSlots();
  let slotItem;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (rnd10() && belowBlock.inventory && !inventory.isEmpty()) {
    for (let i = 0; i < slots; i++) {
      slotItem = inventory.getStackInSlot(i);
      if (
        slotItem !== Item.of("minecraft:air") &&
        slotItem.id.includes("_roe") &&
        !slotItem.id.includes("aged_")
      ) {
        let roeOutputs = [];
        let fish = global.fishPondDefinitions.get(
          global.getFishFromRoe(slotItem.id)
        );
        if (fish && fish.additionalRewards) {
          let fishPondRoll = 0;
          let population = rnd(1, 10);
          fish.additionalRewards.forEach((reward) => {
            fishPondRoll = Math.random();
            if (
              population >= reward.minPopulation &&
              fishPondRoll <= reward.chance / 2
            ) {
              let calculateCount = Math.floor(
                Math.max(1, reward.count / 4) *
                  ((population - reward.minPopulation) /
                    (10 - reward.minPopulation))
              );
              if (population == 10) calculateCount = reward.count;
              roeOutputs.push(
                `${calculateCount > 1 ? calculateCount : 1}x ${reward.item}`
              );
            }
          });
        }
        if (roeOutputs.length == 0 && rnd10()) {
          roeOutputs.push("1x aquaculture:algae");
        }
        let hasRoom = true;
        roeOutputs.forEach((item) => {
          if (!global.inventoryBelowHasRoom(level, block, item)) {
            hasRoom = false;
          }
        });
        if (hasRoom) {
          roeOutputs.forEach((item) => {
            global.insertBelow(level, block, item);
          });
          slotItem.count--;
          level.server.runCommandSilent(
            `playsound supplementaries:item.bubble_blower block @a ${block.x} ${block.y} ${block.z}`
          );
          level.spawnParticles(
            "supplementaries:suds",
            true,
            x + 0.5,
            y + 1,
            z + 0.5,
            0.1 * rnd(1, 2),
            0.1 * rnd(1, 2),
            0.1 * rnd(1, 2),
            rnd(2, 6),
            0.001
          );
          break;
        }
      }
    }
  }

  level.spawnParticles(
    "domesticationinnovation:simple_bubble",
    true,
    x,
    y + 1,
    z,
    0.2 * rnd(1, 1.5),
    0.2 * rnd(1, 1.5),
    0.2 * rnd(1, 1.5),
    3,
    0.01
  );
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:roe_recycler", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.roe_recycler.description").gray()
      );
      item.modelJson({
        parent: "society:block/kubejs/roe_recycler",
      });
    })
    .model("society:block/kubejs/roe_recycler")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(20, 0, (entity) => {
        global.handleRoeRecycler(entity);
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
