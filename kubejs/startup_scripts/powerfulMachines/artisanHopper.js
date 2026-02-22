console.info("[SOCIETY] artisanHopper.js loaded");

const artisanMachineCanHaveAdditionalOutput = [
  "society:loom",
  "society:crystalarium",
  "society:seed_maker",
  "society:aging_cask",
  "society:mayonnaise_machine",
];

global.handleAdditionalArtisanMachineOutputs = (
  level,
  block,
  artisanMachine,
  recipes,
  type,
  upgraded,
  stages
) => {
  switch (artisanMachine.id) {
    case "society:loom": {
      if (upgraded && rnd25()) {
        global.insertBelow(
          level,
          block,
          Ingredient.of("#society:loot_furniture").itemIds[
            Math.floor(
              Math.random() *
                Ingredient.of("#society:loot_furniture").itemIds.length
            )
          ]
        );
      }
      break;
    }
    case "society:crystalarium": {
      if (upgraded && rnd10()) {
        recipes[type - 1].output.forEach((item) => {
          global.insertBelow(
            level,
            block,
            `society:pristine_${String(Item.of(item).id).path}`
          );
        });
      }
      break;
    }
    case "society:seed_maker": {
      if (upgraded && rnd5()) {
        global.insertBelow(level, block, "society:ancient_fruit_seed");
      }
      break;
    }
    case "society:aging_cask": {
      if (stages.has("aged_prize") && rnd5()) {
        global.insertBelow(level, block, "society:prize_ticket");
      }
      break;
    }
    case "society:wine_keg": {
      if (upgraded && rnd5()) {
        global.insertBelow(level, block, "society:relic_trove");
      }
      break;
    }
    case "society:mayonnaise_machine": {
      if (upgraded && rnd5()) {
        global.insertBelow(level, block, "society:supreme_mayonnaise");
      }
      break;
    }
  }
};
// TODO: make artisan hopper set tappers
global.getArtisanMachineData = (player, block, upgraded, stages) => {
  let machineData = {
    recipes: [],
    stageCount: 0,
    multipleInputs: false,
    hasTag: false,
    outputMult: 1,
    soundType: "minecraft:ui.toast.in",
  };
  let rancherOutputCount;
  if (player.stages.has("rancher") && Math.random() <= 0.2) {
    rancherOutputCount = 2;
  }
  let machineNbt = block.getEntityData();
  switch (block.id) {
    case "society:loom":
      machineData = {
        recipes: global.loomRecipes,
        stageCount: 5,
        multipleInputs: true,
        hasTag: true,
        outputMult: rancherOutputCount,
        soundType: "minecraft:block.wool.fall",
      };
      break;
    case "society:mayonnaise_machine":
      machineData = {
        recipes: global.mayonnaiseMachineRecipes,
        stageCount: 3,
        outputMult: rancherOutputCount,
        soundType: "minecraft:block.sniffer_egg.plop",
      };
      break;
    case "society:preserves_jar":
      machineData = {
        recipes: global.preservesJarRecipes,
        stageCount: upgraded ? 3 : 5,
        multipleInputs: true,
        soundType: "minecraft:block.wood.place",
      };
      break;
    case "society:crystalarium":
      machineData = {
        recipes: global.crystalariumCrystals,
        stageCount: 5,
        soundType: "minecraft:block.amethyst_block.step",
      };
      break;
    case "society:wine_keg":
      machineData = {
        recipes: global.wineKegRecipes,
        stageCount: 6,
        soundType: "minecraft:block.wood.place",
      };
      break;
    case "society:aging_cask":
      machineData = {
        recipes: global.agingCaskRecipes,
        stageCount: 10,
        soundType: "minecraft:block.wood.place",
      };
      break;
    case "society:cheese_press":
      machineData = {
        recipes: global.cheesePressRecipes,
        stageCount: 2,
        outputMult: rancherOutputCount,
        soundType: "species:block.frozen_meat.place",
      };
      break;
    case "society:ancient_cask":
      if (stages.has("ancient_aging")) {
        if (upgraded) {
          machineData = {
            recipes: global.ancientCaskRecipes,
            stageCount: 4,
            multipleInputs: true,
            hasTag: false,
            outputMult: 4,
            soundType: "",
          };
        } else
          machineData = {
            recipes: global.ancientCaskRecipes,
            stageCount: 20,
            soundType: "minecraft:block.wood.place",
          };
      } else machineData = undefined;
      break;
    case "society:dehydrator":
      machineData = {
        recipes: global.dehydratorRecipes,
        stageCount: 8,
        multipleInputs: true,
        soundType: "species:block.alphacene_foliage.place",
      };
      break;
    case "society:deluxe_worm_farm":
      machineData = {
        recipes: global.deluxeWormFarmRecipes,
        stageCount: 4,
        multipleInputs: true,
        soundType: "aquaculture:fish_flop",
      };
      break;
    case "society:seed_maker":
      machineData = {
        recipes: global.seedMakerRecipes,
        stageCount: 3,
        multipleInputs: true,
        soundType: "unusualfishmod:crab_scuttling",
      };
      break;
    case "society:fish_smoker":
      machineData = {
        recipes: global.fishSmokerRecipes,
        stageCount: 5,
        outputMult: upgraded ? 2 : 1,
        soundType: "farmersdelight:block.skillet.add_food",
      };
      break;
    case "society:espresso_machine":
      machineData = {
        recipes: global.espressoMachineRecipes,
        stageCount: 4,
        multipleInputs: true,
        soundType: "doapi:brewstation_whistle",
      };
      break;
    case "society:bait_maker":
      machineData = {
        recipes: global.baitMakerRecipes,
        stageCount: 1,
        soundType: "aquaculture:fish_death",
      };
      break;
    case "society:recycling_machine":
      machineData = {
        recipes: global.recyclingMachineRecipes,
        stageCount: 1,
        soundType: "twigs:block.basalt_bricks.fall",
        outputMult: upgraded ? 2 : 1,
      };
      break;
    case "society:oil_maker":
      machineData = {
        recipes: global.oilMakerRecipes,
        stageCount: 1,
        soundType: "supplementaries:block.jar.place",
      };
      break;
    case "society:tapper":
      machineData = {
        recipes: global.tapperRecipes,
        stageCount: 1,
        soundType: "vinery:cabinet_close",
        outputMult: stages.has("canadian_and_famous") ? 2 : 1,
      };
      break;
    case "society:mushroom_log":
      machineData = {
        recipes: global.mushroomLogRecipes,
        stageCount: 1,
        soundType: "species:block.alphacene_moss.place",
        outputMult: nbt && nbt.data && nbt.data.baseCount ? nbt.data.baseCount : 1,
      };
      break;
    case "society:charging_rod":
      machineData = { recipes: null, stageCount: 5, soundType: "" };
      break;
    default:
      machineData = undefined;
  }
  return machineData;
};

global.runArtisanHopper = (tickEvent, artisanMachinePos, player, delay) => {
  const { level, block, inventory } = tickEvent;
  const server = level.server;

  server.scheduleInTicks(delay, () => {
    const artisanMachine = level.getBlock(artisanMachinePos);
    const { x, y, z } = artisanMachine;
    const nbt = artisanMachine.getEntityData();
    if (!nbt.data) return;
    const { stage, recipe } = nbt.data;
    const currentStage = stage || 0;
    const upgraded = artisanMachine.properties.get("upgraded") == "true";
    const loadedData = global.getArtisanMachineData(
      player,
      artisanMachine,
      upgraded,
      player.stages
    );
    const season = global.getSeasonFromLevel(level);
    const chargingRodOutput = Item.of(
      `${upgraded && season === "winter" ? 3 : 1}x society:battery`
    );
    if (loadedData && artisanMachine) {
      let {
        recipes,
        stageCount,
        multipleInputs,
        hasTag,
        outputMult,
        soundType,
      } = loadedData;
      let hasInfinityWorm =
        artisanMachine.id === "society:deluxe_worm_farm" && upgraded;
      let machineOutputs = [];
      let type;
      let newProperties = artisanMachine.getProperties();
      let recycleSparkstone;

      if (
        newProperties.get("mature").toLowerCase() === "true" &&
        (artisanMachine.id === "society:charging_rod"
          ? global.inventoryBelowHasRoom(level, block, chargingRodOutput)
          : recipes.has(recipe) &&
            global.inventoryBelowHasRoomForAll(
              level,
              block,
              recipes.get(recipe).output
            )) &&
        global.hasInventoryItems(inventory, "society:sparkstone", 1)
      ) {
        server.runCommandSilent(
          `playsound stardew_fishing:dwop block @a ${x} ${y} ${z}`
        );
        if (artisanMachine.id === "society:charging_rod") {
          machineOutputs.push(chargingRodOutput);
          artisanMachine.set(artisanMachine.id, {
            working: false,
            mature: false,
            upgraded: upgraded,
            stage: "0",
          });
        } else if (hasInfinityWorm) {
          console.log(machineOutputs)
          machineOutputs.push(
            Item.of("4x crabbersdelight:deluxe_crab_trap_bait")
          );
          artisanMachine.set(artisanMachine.id, {
            facing: artisanMachine.properties.get("facing"),
            type: "1",
            working: true,
            mature: false,
            upgraded: upgraded,
            stage: "0",
          });
        } else {
          if (nbt.data.type != 0) type = Number(nbt.data.type);
          machineOutputs = global.artisanHarvest(
            artisanMachine,
            recipes,
            stageCount,
            outputMult,
            artisanMachine.id === "society:cheese_press",
            true
          );
        }

        if (machineOutputs && machineOutputs.length > 0) {
          recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
          if (
            artisanMachine.id === "society:dehydrator" &&
            upgraded &&
            global.dehydratableMushroomOutputs.includes(machineOutputs[0].id)
          ) {
            machineOutputs.forEach((output) => {
              output.count = 2;
            });
          }
          if (
            artisanMachineCanHaveAdditionalOutput.includes(artisanMachine.id)
          ) {
            global.handleAdditionalArtisanMachineOutputs(
              level,
              block,
              artisanMachine,
              recipes,
              type,
              upgraded,
              player.stages
            );
          }
          let sparkstoneSaveChance = 0;
          if (player.stages.has("slouching_towards_artistry")) {
            sparkstoneSaveChance = Number(currentStage) * 0.05;
          }
          if (!recycleSparkstone && Math.random() > sparkstoneSaveChance) {
            global.useInventoryItems(inventory, "society:sparkstone", 1);
          } else {
            level.spawnParticles(
              "species:youth_potion",
              true,
              x,
              y + 0.5,
              z,
              0.1 * rnd(1, 4),
              0.1 * rnd(1, 4),
              0.1 * rnd(1, 4),
              5,
              0.01
            );
          }
          machineOutputs.forEach((output) => {
            global.insertBelow(level, block, output);
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

      let abovePos = block.getPos().above();
      let aboveBlock = level.getBlock(abovePos.x, abovePos.y, abovePos.z);

      if (
        recipes &&
        newProperties.get("working").toLowerCase() === "false" &&
        global.hasInventoryItems(inventory, "society:sparkstone", 1) &&
        aboveBlock.inventory &&
        !aboveBlock.inventory.isEmpty()
      ) {
        let slots = aboveBlock.inventory.getSlots();
        let slotStack;
        let outputCount;
        for (let i = 0; i < slots; i++) {
          slotStack = aboveBlock.inventory.getStackInSlot(i);
          if (
            !(
              multipleInputs &&
              !slotStack.isEmpty() &&
              slotStack.count < stageCount
            )
          ) {
            outputCount = global.artisanInsert(
              artisanMachine,
              slotStack,
              level,
              recipes,
              stageCount,
              soundType,
              multipleInputs,
              hasTag,
              true,
              server
            );
            if (outputCount > 0) {
              recycleSparkstone = global.checkSparkstoneRecyclers(level, block);
              if (!recycleSparkstone)
                global.useInventoryItems(inventory, "society:sparkstone", 1);
              else {
                level.spawnParticles(
                  "species:youth_potion",
                  true,
                  x,
                  y + 0.5,
                  z,
                  0.1 * rnd(1, 4),
                  0.1 * rnd(1, 4),
                  0.1 * rnd(1, 4),
                  5,
                  0.01
                );
              }
              level.runCommandSilent(
                `playsound create:fwoomp block @a ${x} ${y} ${z} 0.8`
              );
              aboveBlock.inventory.extractItem(i, outputCount, false);
              break;
            }
          }
        }
      }
      if (
        hasInfinityWorm &&
        newProperties.get("working").toLowerCase() === "false"
      ) {
        artisanMachine.set(artisanMachine.id, {
          facing: artisanMachine.properties.get("facing"),
          type: "1",
          working: true,
          mature: false,
          upgraded: upgraded,
          stage: "0",
        });
      }
    }
  });
};

global.artisanHopperScan = (entity, radius) => {
  const { block, level } = entity;
  const { x, y, z } = block;
  let attachedPlayer;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      attachedPlayer = p;
    }
  });
  if (attachedPlayer) {
    let scanBlock;
    let scannedBlocks = 0;
    for (let pos of BlockPos.betweenClosed(
      new BlockPos(x - radius, y - radius, z - radius),
      [x + radius, y + radius, z + radius]
    )) {
      scanBlock = level.getBlock(pos);
      if (scanBlock.hasTag("society:artisan_machine")) {
        global.runArtisanHopper(
          entity,
          pos.immutable(),
          attachedPlayer,
          scannedBlocks * 5
        );
        scannedBlocks++;
      }
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:artisan_hopper", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.artisan_hopper.description").gray()
      );
      item.tooltip(
        Text.translatable(
          "society.working_block_entity.apply_player_skill"
        ).gray()
      );
      item.tooltip(Text.translatable("tooltip.society.area", `7x7x7`).green());
      item.tooltip(
        Text.translatable(
          "block.society.artisan_hopper.description.fuel"
        ).lightPurple()
      );
      item.modelJson({
        parent: "society:block/kubejs/artisan_hopper",
      });
    })
    .soundType("copper")
    .model("society:block/kubejs/artisan_hopper")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(200, 0, (entity) => {
        global.artisanHopperScan(entity, 3);
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
    });
});

StartupEvents.registry("block", (event) => {
  event
    .create("society:mini_artisan_hopper", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .defaultCutout()
    .item((item) => {
      item.tooltip(
        Text.translatable("block.society.artisan_hopper.description").gray()
      );
      item.tooltip(
        Text.translatable(
          "society.working_block_entity.apply_player_skill"
        ).gray()
      );
      item.tooltip(Text.translatable("tooltip.society.area", `3x3x3`).green());
      item.tooltip(
        Text.translatable(
          "block.society.artisan_hopper.description.fuel"
        ).lightPurple()
      );
      item.modelJson({
        parent: "society:block/kubejs/mini_artisan_hopper",
      });
    })
    .soundType("copper")
    .model("society:block/kubejs/mini_artisan_hopper")
    .blockEntity((blockInfo) => {
      blockInfo.inventory(9, 2);
      blockInfo.initialData({ owner: "-1" });
      blockInfo.serverTick(200, 0, (entity) => {
        global.artisanHopperScan(entity, 1);
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
    });
});
