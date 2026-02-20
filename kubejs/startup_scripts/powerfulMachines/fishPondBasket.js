console.info("[SOCIETY] artisanHopper.js loaded");

global.runFishPondBasket = (tickEvent, fishPondPos, player) => {
  const { level, block, inventory } = tickEvent;
  const server = level.server;
  const fishPond = level.getBlock(fishPondPos);
  const { x, y, z } = fishPond;
  let machineOutputs;
  let newProperties = fishPond.getProperties();
  let nbt = fishPond.getEntityData();
  let recycleSparkstone;
  const { type, max_population, population } = nbt.data;
  if (global.inventoryHasItems(inventory, "society:sparkstone", 1) != 1) return;
  recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
  if (
    newProperties.get("mature").toLowerCase() === "true" &&
    global.inventoryBelowHasRoom(level, block, global.getRoe(type)) &&
    (recycleSparkstone || global.useInventoryItems(inventory, "society:sparkstone", 1) == 1)
  ) {
    machineOutputs = global.handleFishHarvest(fishPond, player, server, true);

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
  if (
    newProperties.get("mature").toLowerCase() === "true" &&
    level.getBlock(block.pos).getProperties().get("upgraded") === "true" &&
    population > 0 &&  max_population === population
  ) {
    let fishie = global.handleFishExtraction(fishPond, player, server);
    recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
    if (
      global.inventoryBelowHasRoom(level, block, fishie) &&
      (recycleSparkstone || global.useInventoryItems(inventory, "society:sparkstone", 1) == 1)
    ) {
      global.insertBelow(level, block, fishie);
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
    .create("society:fish_pond_basket")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .waterlogged()
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.fish_pond_basket.description").gray()
      );
      item.tooltip(
        Text.translatable(
          "society.working_block_entity.apply_player_skill"
        ).gray()
      );
      item.tooltip(
        Text.translatable(
          "block.society.fish_pond_basket.description.upgrade"
        ).gold()
      );
      item.tooltip(Text.translatable("tooltip.society.area", `3x3x3`).green());
      item.tooltip(
        Text.translatable(
          "block.society.fish_pond_basket.description.fuel"
        ).lightPurple()
      );
      item.modelJson({
        parent: "society:block/kubejs/fish_pond_basket",
      });
    })
    .soundType("copper")
    .model("society:block/kubejs/fish_pond_basket")
    .property(booleanProperty.create("upgraded"))
    .defaultState((state) => {
      state
        .set(booleanProperty.create("upgraded"), false)
        .set(BlockProperties.WATERLOGGED, false);
    })
    .placementState((state) => {
      state
        .set(booleanProperty.create("upgraded"), false)
        .set(BlockProperties.WATERLOGGED, false);
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(200, 0, (entity) => {
        const { block, level } = entity;
        const { x, y, z } = block;
        const radius = 1;
        let attachedPlayer;
        level.getServer().players.forEach((p) => {
          if (p.getUuid().toString() === block.getEntityData().data.owner) {
            attachedPlayer = p;
          }
        });
        if (attachedPlayer) {
          let scanBlock;
          for (let pos of BlockPos.betweenClosed(
            new BlockPos(x - radius, y - radius, z - radius),
            [x + radius, y + radius, z + radius]
          )) {
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
          .insertItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.insertItem(slot, stack, simulate)
          )
          .extractItem((blockEntity, slot, stack, simulate) =>
            blockEntity.inventory.extractItem(slot, stack, simulate)
          )
          .getSlotLimit((blockEntity, slot) =>
            blockEntity.inventory.getSlotLimit(slot)
          )
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) =>
            blockEntity.inventory.getStackInSlot(slot)
          )
      );
    }).blockstateJson = {
    multipart: [
      {
        when: { upgraded: "false" },
        apply: { model: "society:block/kubejs/fish_pond_basket" },
      },
      {
        when: { upgraded: "true" },
        apply: { model: "society:block/kubejs/fish_pond_basket_upgraded" },
      },
    ],
  };
});
