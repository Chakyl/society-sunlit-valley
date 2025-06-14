console.info("[SOCIETY] manaMilker.js loaded");

const MANA_PER_MILK = 400;
const MAX_MANA = MANA_PER_MILK * 10;
StartupEvents.registry("block", (event) => {
  event
    .create("society:mana_milker")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .box(0, 0, 0, 16, 16, 16)
    .defaultCutout()
    .soundType("copper")
    .item((item) => {
      item.tooltip(Text.gray("Milks farm animals up to 10 blocks away"));
      item.tooltip(Text.aqua("Requires Botania mana from spreader"));
      item.modelJson({
        parent: "society:block/mana_milker",
      });
    })
    .model("society:block/mana_milker")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 1);
      blockInfo.serverTick(1200, 0, (entity) => {
        const { inventory, block, level } = entity;
        let mana = entity.persistentData.getInt("mana");
        inventory.allItems;
        let nearbyFarmAnimals;
        nearbyFarmAnimals = level
          .getEntitiesWithin(AABB.ofBlock(block).inflate(10))
          .filter((entity) =>
            global.checkEntityTag(entity, "society:milkable_animal")
          );
        nearbyFarmAnimals.forEach((animal) => {
          let data = animal.persistentData;
          let interactionCooldown = global.animalInteractionCooldown;
          if (mana >= MANA_PER_MILK) {
            interactionCooldown *= global.getMilkingTimeMult(animal.type);

            let milkItem = global.getMilk(
              level,
              animal, 
              data,
              undefined,
              interactionCooldown
            );
            if (milkItem !== -1) {
              let success = entity.inventory.insertItem(milkItem, false);
              if (success) {
                entity.persistentData.putInt("mana", mana - MANA_PER_MILK);

                level.server.runCommandSilent(
                  `playsound minecraft:entity.cow.milk block @a ${animal.x} ${animal.y} ${animal.z}`
                );
                level.spawnParticles(
                  "atmospheric:aloe_blossom",
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
          }
        });
      }),
        blockInfo.rightClickOpensInventory();
      blockInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
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
      blockInfo.attachCapability(
        BotaniaCapabilityBuilder.MANA.blockEntity()
          .canReceiveManaFromBurst((be) => {
            let mana = be.persistentData.getInt("mana");
            return mana < MAX_MANA;
          })
          .receiveMana((be, amount) => {
            let currentMana = be.persistentData.getInt("mana");
            let received = Math.min(MAX_MANA - currentMana, amount);
            be.persistentData.putInt("mana", currentMana + received);
          })
          .getCurrentMana((be) => be.persistentData.getInt("mana"))
          .isFull((be) => {
            let mana = be.persistentData.getInt("mana");
            return mana >= MAX_MANA;
          })
      );
    });
});
