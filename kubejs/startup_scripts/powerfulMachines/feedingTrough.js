console.info("[SOCIETY] feedingTrough.js loaded");

StartupEvents.registry("block", (event) => {
  event
    .create("society:feeding_trough", "cardinal")
    .property(integerProperty.create("fill", 0, 4))
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 2, 16, 12, 14)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.gray("Feeds nearby farm animals using Animal Feed"));
      item.tooltip(Text.green(`Area: 13x13x13`));
      item.modelJson({
        parent: "farm_and_charm:block/feeding_trough_size_0",
      });
    })
    .defaultState((state) => {
      state.set(integerProperty.create("fill", 0, 4), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("fill", 0, 4), 0);
    })
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.initialData({ fill: "0" });
      blockInfo.serverTick(300, 0, (entity) => {
        const { inventory, block, level } = entity;
        if (global.inventoryHasItems(inventory, "society:animal_feed", 1) != 1) return;
        let slots = inventory.getSlots();
        let feedCount = 0;

        inventory.allItems;
        let nearbyFarmAnimals;
        if (inventory.toString().includes("animal_feed")) {
          let day = Number((level.dayTime() / 24000).toFixed(0));
          nearbyFarmAnimals = level
            .getEntitiesWithin(AABB.ofBlock(block).inflate(6))
            .filter((entity) => global.checkEntityTag(entity, "society:husbandry_animal"));
          nearbyFarmAnimals.forEach((animal) => {
            let data = animal.persistentData;
            if (!data.getInt("ageLastFed") || day < data.getInt("ageLastFed")) {
              data.ageLastFed = day;
            }
            if (day > data.ageLastFed) {
              let feedingResultCode = global.useInventoryItems(inventory, "society:animal_feed", 1);
              if (feedingResultCode == 1) {
                data.ageLastFed = day;
                level.spawnParticles(
                  "legendarycreatures:wisp_particle",
                  true,
                  animal.x,
                  animal.y + 1.5,
                  animal.z,
                  0.1 * rnd(1, 4),
                  0.1 * rnd(1, 4),
                  0.1 * rnd(1, 4),
                  5,
                  0.01
                );
              }
            }
          });
          for (let i = 0; i < slots; i++) {
            if (inventory.getStackInSlot(i).item.id === "society:animal_feed")
              feedCount += inventory.getStackInSlot(i).count;
          }
          let fill = 0;
          if (feedCount >= 512) fill = 4;
          else if (feedCount >= 256) fill = 3;
          else if (feedCount >= 128) fill = 2;
          else if (feedCount >= 8) fill = 1;
          entity.block.set(entity.block.id, {
            facing: entity.block.properties.facing,
            fill: String(fill),
          });
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
    })
    .blockstateJson = MultipartBuilder("farm_and_charm:block/feeding_trough")
      .add(
        [0, 1, 2, 3, 4].map(fill => ({
          when: { fill: fill },
          apply: { model: "{base}_size_" + fill, uvlock: false },
          modifiers: [
            MultipartModifiers.directional()
          ]
        }))
      )
      .build();

});
