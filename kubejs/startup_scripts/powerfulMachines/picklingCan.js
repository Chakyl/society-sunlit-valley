// priority: -21
console.info("[SOCIETY] picklingCan.js loaded");

global.picklingRecipes = new Map([
  ["vintagedelight:ghost_pepper", { pickle: "vintagedelight:pickled_pepper" }],
  ["vintagedelight:cucumber", { pickle: "vintagedelight:pickle" }],
  ["minecraft:pitcher_pod", { pickle: "vintagedelight:pickled_pitcher_pod" }],
  ["minecraft:beetroot", { pickle: "vintagedelight:pickled_beetroot" }],
  ["farm_and_charm:onion", { pickle: "vintagedelight:pickled_onion" }],
  ["farmersdelight:cabbage", { pickle: "vintagedelight:kimchi" }],
  ["farmersdelight:cabbage_leaf", { pickle: "vintagedelight:kimchi" }],
  ["minecraft:egg", { pickle: "vintagedelight:pickled_egg" }],
  ["minecraft:turtle_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["untitledduckmod:duck_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["untitledduckmod:goose_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["autumnity:turkey_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["farmlife:galliraptor_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["society:penguin_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["society:flamingo_egg", { pickle: "vintagedelight:pickled_egg" }],
  ["society:cracked_egg", { pickle: "vintagedelight:pickled_egg" }],
]);
global.picklableVegetables.forEach((pickle) => {
  global.picklingRecipes.set(pickle.item, {
    pickle: `society:pickled_${pickle.item.split(":")[1]}`,
  });
});
global.handlePicklingCan = (e) => {
  const { inventory, level, block } = e;
  const { x, y, z } = block;
  let radius = 1;
  let slots = inventory.getSlots();
  let slotItem;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (belowBlock.inventory && !inventory.isEmpty()) {
    for (let i = 0; i < slots; i++) {
      slotItem = inventory.getStackInSlot(i);
      if (
        slotItem !== Item.of("minecraft:air") &&
        global.picklingRecipes.get(`${slotItem.id}`)
      ) {
        let pickle = global.picklingRecipes.get(`${slotItem.id}`).pickle;
        let pickleItem = Item.of(`1x ${pickle}`, slotItem.nbt);
        if (global.inventoryBelowHasRoom(level, block, pickleItem)) {
          let scanBlock;
          for (let pos of BlockPos.betweenClosed(
            new BlockPos(x - radius, y - radius, z - radius),
            [x + radius, y + radius, z + radius]
          )) {
            scanBlock = level.getBlock(pos);
            if (scanBlock.id === "vintagedelight:salt") {
              let saltProperties = scanBlock.getProperties();
              if (rnd50()) {
                if (Number(saltProperties.get("layers")) > 1) {
                  saltProperties.layers = `${
                    Number(saltProperties.get("layers")) - 1
                  }`;
                  scanBlock.set(scanBlock.id, saltProperties);
                } else {
                  scanBlock.set("minecraft:air");
                }
              }

              global.insertBelow(level, block, pickleItem);
              slotItem.count--;
              return;
            }
          }
        }
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:pickling_can")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .soundType("copper")
    .box(1, 0, 1, 15, 15, 15)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.prickly_can.description").gray());
      item.tooltip(Text.translatable("block.society.prickly_can.description.warn").red());
      item.tooltip(Text.translatable("society.working_block_entity.can_use_hopper").green());
      item.tooltip(Text.translatable("society.working_block_entity.preserve_quality").green());
      item.modelJson({
        parent: "etcetera:block/prickly_can",
      });
    })
    .model("etcetera:block/prickly_can")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(600, 0, (entity) => {
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
