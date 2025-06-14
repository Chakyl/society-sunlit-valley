console.info("[SOCIETY] artisanHopper.js loaded");

global.runFishPondBasket = (tickEvent, fishPondPos, player) => {
  const { level, block, inventory } = tickEvent;
  const server = level.server;
  const fishPond = level.getBlock(fishPondPos);
  const { x, y, z } = fishPond;
  let machineOutputs;
  let newProperties = fishPond.getProperties();
  const fishRecipe = global.getArtisanRecipe(global.fishPondDefinitions, fishPond);
  if (
    newProperties.get("mature").toLowerCase() === "true" &&
    global.inventoryBelowHasRoom(level, block, global.getRoe(fishRecipe.item)) &&
    global.useInventoryItems(inventory, "society:sparkstone", 1) == 1
  ) {
    machineOutputs = global.handleFishHarvest(fishRecipe, fishPond, player, server, true);

    if (machineOutputs.length > 0) {
      machineOutputs.forEach((item) => {
        global.insertBelow(level, block, item);
      });
      level.spawnParticles(
        "species:ascending_dust",
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
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:fish_pond_basket", "cardinal")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .waterlogged()
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.gray("Harvests outputs of Fish Ponds into inventory below."));
      item.tooltip(Text.gray("Uses the skills of player that places it."));
      item.tooltip(Text.green(`Area: 3x3`));
      item.tooltip(Text.lightPurple("Requires Sparkstone"));
      item.modelJson({
        parent: "society:block/fish_pond_basket",
      });
    })
    .soundType("copper")
    .model("society:block/fish_pond_basket")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(200, 0, (entity) => {
        const { block, level } = entity;
        const { x, y, z } = block;
        const radius = 1;
        let attachedPlayer;
        level.players.forEach((p) => {
          if (p.getUuid().toString() === block.getEntityData().data.owner) {
            attachedPlayer = p;
          }
        });
        if (attachedPlayer) {
          let scanBlock;
          for (let pos of BlockPos.betweenClosed(new BlockPos(x - radius, y - radius, z - radius), [
            x + radius,
            y + radius,
            z + radius,
          ])) {
            scanBlock = level.getBlock(pos);
            if (scanBlock.id === "society:fish_pond") {
              global.runFishPondBasket(entity, pos.immutable(), attachedPlayer);
            }
          }
        }
      }),
        blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
      );
    });
});
