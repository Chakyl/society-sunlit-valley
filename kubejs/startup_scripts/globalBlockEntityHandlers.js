/* eslint-disable no-unused-vars */
// Priority: 1000
global.getDay = (level) =>
  Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());
const artMachineTickRate = 20;

const artMachineProgTime = 20;

const booleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
);

const integerProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.IntegerProperty"
);

const directionProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.DirectionProperty"
);

const CropGrowthUtils = Java.loadClass(
  "cool.bot.dewdropfarmland.utils.CropHandlerUtils"
);

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rnd50() {
  return Math.random() < 0.5;
}

function rnd75() {
  return Math.random() < 0.75;
}

function rnd25() {
  return Math.random() < 0.25;
}

function rnd10() {
  return Math.random() < 0.1;
}

function rnd5() {
  return Math.random() < 0.05;
}

global.surviveCheck = (level, pos) => {
  const FARMLAND = Java.loadClass("net.minecraft.world.level.block.FarmBlock");
  let blockState = level.getBlockState(pos.below());
  let mcBlock = blockState.block;
  if (mcBlock instanceof FARMLAND) {
    return true;
  } else return false;
};

let increaseDataStage = (block, count) => {
  let nbt = block.getEntityData();
  let currentStage = nbt.data.stage;
  currentStage += count || 1;
  nbt.merge({ data: { stage: currentStage } });
  block.setEntityData(nbt);
  block.getEntity().setChanged();
};

let increaseStage = (input, count) => {
  let num = Number(input);
  num += count || 1;
  return num;
};

let decreaseStage = (input) => {
  let num = Number(input);
  num -= 1;
  return num;
};

const successParticles = (level, block) => {
  const { x, y, z } = block;
  level.spawnParticles(
    "minecraft:happy_villager",
    true,
    x + 0.5,
    y + 0.5,
    z + 0.5,
    0.1 * rnd(1, 4),
    0.1 * rnd(1, 4),
    0.1 * rnd(1, 4),
    10,
    0.1
  );
};

const itemHasTag = (item, tag) => {
  let tags = item.getTags().toList();
  let found = false;
  tags.forEach((itemTag) => {
    if (itemTag.toString().includes(tag.slice(1))) {
      found = true;
    }
  });
  return found;
};

const setQuality = (nbt, stage, itemQuality) => {
  if (
    (Number(nbt.data.quality) === 0 && Number(stage) === 0) ||
    Number(itemQuality) < Number(nbt.data.quality)
  )
    nbt.merge({ data: { quality: Number(itemQuality) } });
};

const getCanTakeItems = (
  item,
  recipe,
  properties,
  hasTag,
  inputCount,
  recipes,
  nbt
) => {
  let itemCheck = recipe !== undefined;
  if (hasTag) {
    Array.from(recipes.keys()).forEach((key) => {
      if (key.includes("#")) {
        if (itemHasTag(item, key)) {
          itemCheck = true;
          if (nbt.data.recipe.equals("") || nbt.data.recipe == undefined) {
            nbt.merge({ data: { recipe: key, originalInputs: [] } });
          }
          if (inputCount != -1) {
            let inputArray = nbt.data.originalInputs.copy();
            let usedItem = item.copy();
            usedItem.count = inputCount;
            inputArray.push(usedItem);
            nbt.merge({ data: { originalInputs: inputArray } });
          }
        }
      }
    });
  }
  return (
    itemCheck &&
    properties.get("working").toLowerCase() === "false" &&
    properties.get("mature").toLowerCase() === "false"
  );
};

global.convertFromLegacy = (recipes, level, block) => {
  let nbt = block.getEntityData();
  let newRecipe;
  if (block.id.equals("society:tapper") && !nbt.data.contains("recipe")) {
    let newProperties = level.getBlock(block.pos).getProperties();
    newProperties.working = false;
    newProperties.mature = false;
    nbt.merge({ data: { stage: 0, recipe: "" } });
    block.setEntityData(nbt);
    block.set(block.id, newProperties);
    return;
  }
  if (nbt.data.contains("recipe") || !nbt.data.contains("type")) return;
  if (nbt.data.type > 0) {
    newRecipe = Array.from(recipes.keys())[Number(nbt.data.type) - 1];
  }
  if (['society:cheese_press', 'society:mayonnaise_machine', 'society:fish_smoker', 'society:seed_maker'].includes(block.id)) {
    nbt.merge({ data: { quality: 0 } });
    block.setEntityData(nbt);
  }
  if (newRecipe) {
    let newProperties = level.getBlock(block.pos).getProperties();
    newProperties.working = false;
    newProperties.mature = true;
    nbt.merge({ data: { recipe: newRecipe } });
    block.setEntityData(nbt);
    block.set(block.id, newProperties);
  }
};

global.artisanHarvest = (
  block,
  recipes,
  stageCount,
  outputMult,
  isCheesePress,
  artisanHopper,
  server,
  player
) => {
  let newProperties = block.getProperties();
  if (block.properties.get("mature").toLowerCase() === "true") {
    let harvestOutput;
    let hopperOutputs = [];
    if (!artisanHopper) {
      global.giveExperience(server, player, "farming", stageCount * 20);
      server.runCommandSilent(
        `playsound stardew_fishing:dwop block @a ${player.x} ${player.y} ${player.z}`
      );
    }
    let nbt = block.getEntityData();
    let hasQuality = nbt.data.quality !== undefined;
    recipes.get(nbt.data.recipe).output.forEach((id) => {
      harvestOutput = Item.of(
        id,
        hasQuality ? `{quality_food:{quality:${Number(nbt.data.quality)}}}` : null
      );
      // Artisan Cheese Press upgrade: auto age cheese wheels only
      if (
        isCheesePress &&
        (id.includes("wheel") || id.includes("block")) &&
        block.properties.get("upgraded").toLowerCase() === "true"
      ) {
        harvestOutput = Item.of(`society:aged_${id.path}`);
      }
      if (outputMult > 1 && !recipes.get(nbt.data.recipe).multExempt) {
        harvestOutput.count = harvestOutput.count * outputMult;
      }
      if (!artisanHopper) {
        block.popItemFromFace(harvestOutput, block.properties.get("facing"));
      } else {
        hopperOutputs.push(harvestOutput);
      }
      nbt.merge({ data: { stage: 0, recipe: "", originalInputs: [] } });
      if (nbt.data.quality) {
        nbt.merge({ data: { stage: 0, recipe: "", quality: 0 } });
      }
      block.setEntityData(nbt);
      newProperties.working = false;
      newProperties.mature = false;
      if (newProperties.duration) newProperties.duration = "0";
      block.set(block.id, newProperties);
    });
    if (artisanHopper) return hopperOutputs;
  }
};
// Converted
global.artisanInsert = (
  block,
  item,
  level,
  recipes,
  stageCount,
  stockSound,
  multipleInputs,
  hasTag,
  artisanHopper,
  server,
  player
) => {
  let newProperties = block.getProperties();
  let nbt = block.getEntityData();
  let stage = nbt.data.stage;
  const itemNbt = item.nbt;
  let itemQuality;
  let hasQuality = nbt.data.quality !== undefined || ['society:cheese_press', 'society:mayonnaise_machine', 'society:fish_smoker', 'society:seed_maker'].includes(block.id);
  let useCount =
    multipleInputs && item.count >= stageCount - Number(stage)
      ? stageCount - Number(stage)
      : 1;
  const recipe = recipes.get(`${item.id}`);
  if (
    multipleInputs &&
    recipe &&
    nbt.data.recipe !== "" &&
    nbt.data.recipe !== item.id
  )
    return;
  if (
    getCanTakeItems(
      item,
      recipe,
      block.properties,
      hasTag,
      multipleInputs ? useCount : -1,
      recipes,
      nbt
    )
  ) {
    newProperties = block.getProperties();
    successParticles(level, block);
    server.runCommandSilent(
      `playsound ${stockSound} block @a ${block.x} ${block.y} ${block.z}`
    );
    if (!(hasTag && recipe === undefined))
      nbt.merge({ data: { recipe: item.id } });
    newProperties.working = false;
    newProperties.mature = false;
    if (hasQuality && itemNbt && itemNbt.quality_food) {
      itemQuality = String(itemNbt.quality_food.quality);
    } else if (hasQuality) {
      itemQuality = "0";
    }
    if (multipleInputs) {
      if (item.count >= stageCount - Number(stage)) {
        nbt.merge({ data: { stage: stageCount } });
      } else {
        increaseDataStage(block);
      }
      if (itemQuality) setQuality(nbt, stage, itemQuality);
    } else if (itemQuality) {
      nbt.merge({ data: { quality: Number(itemQuality) } });
    }
    if (!multipleInputs || nbt.data.stage === stageCount) {
      newProperties.working = true;
      nbt.merge({ data: { stage: 0 } });
    }
    block.setEntityData(nbt);
    block.set(block.id, newProperties);
    if (player && !player.isCreative()) item.count -= useCount;
    if (artisanHopper) return useCount;
  }
};

global.handleBERightClick = (
  stockSound,
  clickEvent,
  recipes,
  stageCount,
  multipleInputs,
  hasTag,
  outputMult,
  disableInput,
  isCheesePress
) => {
  const { item, block, hand, player, level, server } = clickEvent;
  // Prevent Deployers from using artisan machines
  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    global.convertFromLegacy(recipes, level, block);
    global.artisanHarvest(
      block,
      recipes,
      stageCount,
      outputMult,
      isCheesePress,
      false,
      server,
      player
    );

    if (!disableInput) {
      global.artisanInsert(
        block,
        item,
        level,
        recipes,
        stageCount,
        stockSound,
        multipleInputs,
        hasTag,
        false,
        server,
        player
      );
    }
  }
};

global.setDebt = (server, UUID, amount) => {
  for (let index = 0; index < server.persistentData.debts.length; index++) {
    if (String(UUID) === String(server.persistentData.debts[index].uuid)) {
      server.persistentData.debts[index].amount = amount;
      break;
    }
  }
};

global.getOpposite = (facing, pos) => {
  switch (facing) {
    case "north":
      return pos.offset(0, 0, 1);
    case "south":
      return pos.offset(0, 0, -1);
    case "west":
      return pos.offset(1, 0, 0);
    case "east":
      return pos.offset(-1, 0, 0);
  }
};

global.getFacing = (facing, pos) => {
  switch (facing) {
    case "north":
      return pos.offset(0, 0, -1);
    case "south":
      return pos.offset(0, 0, 1);
    case "west":
      return pos.offset(-1, 0, 0);
    case "east":
      return pos.offset(1, 0, 0);
  }
};

global.getTapperLog = (level, block) =>
  level.getBlock(
    global.getOpposite(block.properties.get("facing"), block.getPos())
  );

global.getFermentingBarrel = (level, block) =>
  level.getBlock(
    global.getFacing(block.getProperties().get("facing"), block.getPos())
  );

global.handleTapperRandomTick = (tickEvent, returnFluidData) => {
  const { block, level, server } = tickEvent;
  let newProperties = block.getProperties();
  let nbt = block.getEntityData();
  const attachedBlock = global.getTapperLog(level, block);
  let foundFluidData = undefined;
  let hasError = false;
  if (attachedBlock.hasTag("society:tappable_blocks")) {
    if (
      !nbt.data.recipe ||
      !nbt.data.recipe.equals(attachedBlock.id) ||
      global.hasMultipleTappers(level, block)
    ) {
      hasError = true;
    }
    if (
      returnFluidData ||
      (block.properties.get("working").toLowerCase() === "false" &&
        block.properties.get("mature").toLowerCase() === "false")
    ) {
      if (global.tapperRecipes) {
        const recipe = global.tapperRecipes.get(`${attachedBlock.getId()}`);
        let nbt = block.getEntityData();
        if (returnFluidData && !foundFluidData && recipe) {
          foundFluidData = { fluid: recipe.fluidOutput, time: recipe.time };
          nbt.merge({ data: { recipe: `${attachedBlock.getId()}` } });
          hasError = false;
        }
        if (
          !returnFluidData &&
          getCanTakeItems(
            attachedBlock.getId(),
            recipe,
            block.properties,
            false
          )
        ) {
          newProperties = block.getProperties();
          successParticles(level, block);
          server.runCommandSilent(
            `playsound vinery:cabinet_close block @a ${block.x} ${block.y} ${block.z}`
          );
          newProperties.mature = false;
          newProperties.working = true;
          nbt.merge({ data: { recipe: `${attachedBlock.getId()}`, stage: 0 } });
          hasError = false;
        }
        block.setEntityData(nbt);
      }
    }
    if (returnFluidData) {
      if (hasError) newProperties.error = true;
      else newProperties.error = false;
      block.set(block.id, newProperties);
      return foundFluidData;
    }
    if (hasError) newProperties.error = true;
    else newProperties.error = false;
    block.set(block.id, newProperties);
  } else {
    newProperties.error = true;
    block.set(block.id, newProperties);
    if (returnFluidData) return undefined;
  }
};

const getMushroomLogData = (level, centerPos, radius) => {
  const { x, y, z } = centerPos;
  let scanBlock;
  let scannedBlocks = 0;
  let regularOutputs = [];
  let dominantOutputs = [];
  let airBlocks = 0;
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag("society:mushroom_log_detects")) {
      scannedBlocks++;
      if (scanBlock.hasTag("society:mushroom_log_dominant")) {
        if (!dominantOutputs.includes(scanBlock.id))
          dominantOutputs.push(scanBlock.id);
      } else {
        if (!regularOutputs.includes(scanBlock.id))
          regularOutputs.push(scanBlock.id);
      }
    } else if (scanBlock.id === "minecraft:air") airBlocks++;
  }
  return {
    count: airBlocks < 100 ? 4 : scannedBlocks,
    possibleOutputs:
      dominantOutputs.length > 0 ? dominantOutputs : regularOutputs,
  };
};

global.handleMushroomLogRandomTick = (tickEvent) => {
  const { block, level, server } = tickEvent;
  let newProperties = block.getProperties();
  if (
    block.properties.get("working").toLowerCase() === "false" &&
    block.properties.get("mature").toLowerCase() === "false"
  ) {
    const leafCount = global.getTaggedBlocksInRadius(
      level,
      "society:mushroom_log_leaves",
      new BlockPos(block.x, block.y + 4, block.z),
      8
    );
    const logData = getMushroomLogData(level, block.pos, 8);
    if (!logData || logData.count == 0 || logData.possibleOutputs.length == 0)
      return;
    let baseCount = Math.max(
      1,
      Math.floor(Math.min(8, logData.count / 4) + Math.min(8, leafCount / 4))
    );
    if (global.mushroomLogRecipes) {
      let rolledRecipe =
        logData.possibleOutputs[
        Math.floor(Math.random() * logData.possibleOutputs.length)
        ];

      const recipe = global.mushroomLogRecipes.get(`${rolledRecipe}`);
      let nbt = block.getEntityData();
      if (getCanTakeItems(rolledRecipe, recipe, block.properties, false)) {
        newProperties = block.getProperties();
        successParticles(level, block);
        server.runCommandSilent(
          `playsound species:block.alphacene_foliage.place block @a ${block.x} ${block.y} ${block.z}`
        );
        newProperties.mature = false;
        newProperties.working = true;
        let quality = 0;
        if (logData.count > 20 && logData.count / 40 > Math.random()) quality = 1;
        if (logData.count > 40 && logData.count / 60 > Math.random()) quality = 2;
        if (logData.count > 60 && logData.count / 80 > Math.random()) quality = 3;
        nbt.merge({
          data: { recipe: `${rolledRecipe}`, stage: 0, baseCount: baseCount, quality: quality },
        });
      }
      block.setEntityData(nbt);
      block.set(block.id, newProperties);
    }
  }
};

global.hasMultipleTappers = (level, block) => {
  const attachedBlock = global.getTapperLog(level, block);
  const offsetsToCheck = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let tapperCount = 0;
  offsetsToCheck.forEach((offset) => {
    if (
      ["society:tapper", "society:auto_tapper"].includes(
        level.getBlock(
          new BlockPos(
            attachedBlock.x + offset[0],
            attachedBlock.y,
            attachedBlock.z + offset[1]
          )
        ).id
      )
    )
      tapperCount++;
  });
  return tapperCount > 1;
};

global.handleBERandomTick = (tickEvent, rndFunction, stageCount) => {
  const { block } = tickEvent;
  const { x, y, z } = block;
  const stage = block.getEntityData().data.stage;
  const mature = stage >= stageCount - 1;
  let newProperties = block.getProperties();
  if (block.properties.get("working").toLowerCase() === "true" && rndFunction) {
    tickEvent.level.spawnParticles(
      "minecraft:campfire_cosy_smoke",
      true,
      x + 0.5,
      y + 1,
      z + 0.5,
      0.1 * rnd(1, 2),
      0.1 * rnd(1, 2),
      0.1 * rnd(1, 2),
      rnd(1, 4),
      0.1
    );
    newProperties.working = !mature;
    newProperties.mature = mature;
    increaseDataStage(block);
    block.set(block.id, newProperties);
  }
};

global.handleBETick = (entity, recipes, stageCount, halveTime, forced) => {
  const { level, block } = entity;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  let blockProperties = level.getBlock(block.pos).getProperties();

  if (blockProperties.get("working").toLowerCase() === "false") return;

  if (
    forced ||
    (morningModulo >= artMachineProgTime &&
      morningModulo < artMachineProgTime + artMachineTickRate)
  ) {
    global.convertFromLegacy(recipes, level, block);
    let nbt = block.getEntityData();
    let mature;
    let recipe = recipes && recipes.get(nbt.data.recipe);
    let resolvedStage = (recipes && recipe.time) || stageCount;

    const nbtStage = nbt.data.stage;
    if (halveTime && blockProperties.get("upgraded").toLowerCase() == "true") {
      mature = Number(nbtStage) >= resolvedStage / 2 - 1;
    } else {
      mature = Number(nbtStage) >= resolvedStage - 1;
    }

    let newProperties = level.getBlock(block.pos).getProperties();
    newProperties.mature = mature;
    if (mature) newProperties.working = false;
    increaseDataStage(block);
    block.set(block.id, newProperties);
  }
};

global.isSameQuality = (itemA, itemB) => {
  if (!itemA.nbt && !itemB.nbt) return true;
  if ((itemA.nbt && !itemB.nbt) || (!itemA.nbt && itemB.nbt)) return false;
  if (!itemA.nbt.quality_food && !itemB.nbt.quality_food) return false;
  return itemA.nbt.quality_food.quality === itemB.nbt.quality_food.quality;
};

global.inventoryHasRoom = (block, item) => {
  let belowItem;
  if (block.inventory && item && item !== Item.of("minecraft:air")) {
    for (let j = 0; j < block.inventory.slots; j++) {
      belowItem = block.inventory.getStackInSlot(j);
      if (
        belowItem.id === Item.of(item).id &&
        global.isSameQuality(belowItem, Item.of(item)) &&
        belowItem.count + Item.of(item).count <
        block.inventory.getSlotLimit(j) /
        (64 / block.inventory.getStackInSlot(j).maxStackSize)
      ) {
        return true;
      }
    }
    for (let j = 0; j < block.inventory.slots; j++) {
      belowItem = block.inventory.getStackInSlot(j);
      if (belowItem === Item.of("minecraft:air")) {
        return true;
      }
    }
  }
  return false;
};

global.inventoryBelowHasRoom = (level, block, item) => {
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  return global.inventoryHasRoom(belowBlock, item);
};

global.inventoryBelowHasRoomForAll = (level, block, items) => {
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  let hasRoom = true;
  items.forEach((item) => {
    if (!global.inventoryHasRoom(belowBlock, item)) hasRoom = false;
  });
  return hasRoom;
};
/**
 * @returns result code:
 * -1 - Failure - Operation attempted but couldn't be inserted
 * 0 - Neutral - Operation not attempted due to no below inventory or item
 * 1 - Success - Item successfully inserted
 */
global.insertInto = (block, item) => {
  let belowItem;
  if (block.inventory && item && item !== Item.of("minecraft:air")) {
    for (let j = 0; j < block.inventory.slots; j++) {
      belowItem = block.inventory.getStackInSlot(j);
      if (
        belowItem.id === Item.of(item).id &&
        global.isSameQuality(belowItem, Item.of(item)) &&
        belowItem.count + Item.of(item).count <
        block.inventory.getSlotLimit(j) /
        (64 / block.inventory.getStackInSlot(j).maxStackSize)
      ) {
        block.inventory.insertItem(j, item, false);
        return 1;
      }
    }
    for (let j = 0; j < block.inventory.slots; j++) {
      belowItem = block.inventory.getStackInSlot(j);
      if (belowItem === Item.of("minecraft:air")) {
        block.inventory.insertItem(j, item, false);
        return 1;
      }
    }
    return -1;
  }
  return 0;
};

global.insertBelow = (level, block, item) => {
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  return global.insertInto(belowBlock, item);
};

/**
 * @returns result code:
 * -1 - Failure - Operation attempted but not enough items
 * 0 - Neutral - Operation not attempted due to no inventory
 * 1 - Success - inventory has items of id, and of at least count
 */
global.inventoryHasItems = (inventory, id, count) => {
  if (inventory) {
    const slots = inventory.getSlots();
    let slotStack;
    for (let i = 0; i < slots; i++) {
      slotStack = inventory.getStackInSlot(i);
      if (slotStack.item.id === id && slotStack.count >= count) {
        return 1;
      }
    }
    return -1;
  }
  return 0;
};

global.hasInventoryItems = (inventory, id, count) => {
  if (inventory) {
    const slots = inventory.getSlots();
    let slotStack;
    let foundCount = 0;
    for (let i = 0; i < slots; i++) {
      slotStack = inventory.getStackInSlot(i);
      if (slotStack.item.id === id) {
        foundCount += slotStack.count;
      }
      if (foundCount >= count) return true;
    }
  }
  return false;
};

/**
 * @returns result code:
 * -1 - Failure - Operation attempted but nothing to use
 * 0 - Neutral - Operation not attempted due to no inventory
 * 1 - Success - Item successfully consumed
 */
global.useInventoryItems = (inventory, id, count) => {
  if (inventory) {
    const slots = inventory.getSlots();
    let slotStack;
    for (let i = 0; i < slots; i++) {
      slotStack = inventory.getStackInSlot(i);
      if (slotStack.item.id === id && slotStack.count >= count) {
        inventory.extractItem(i, count, false);
        return 1;
      }
    }
    return -1;
  }
  return 0;
};

/** All fluid handlers expect the following initialData with a capacity of 10000
 *
 *  blockInfo.initialData({ Fluid: 0, FluidType: "" });
 */

global.getFluid = (blockInfo) => {
  if (!blockInfo || !blockInfo.persistentData) {
    return Fluid.of("minecraft:water", 0);
  }
  const foundFluid = blockInfo.persistentData.getString("FluidType");
  if (!foundFluid) return Fluid.of("minecraft:water", 0);
  if (foundFluid === "minecraft:empty") {
    return Fluid.of("minecraft:water", 0);
  }
  let foundFluidLevel = blockInfo.persistentData.getInt("Fluid");
  if (!foundFluidLevel) foundFluidLevel = 0;
  return Fluid.of(foundFluid, foundFluidLevel);
};

global.onFill = (blockInfo, fluid, sim) => {
  const fluidData = blockInfo.persistentData.getInt("Fluid");
  const filled = Math.min(10000 - fluidData, fluid.getAmount());
  if (!sim) {
    const storedFluidId = blockInfo.persistentData.getString("FluidType");
    const incomingFluidId = fluid.getId();
    if (storedFluidId === "" || fluidData === 0) {
      blockInfo.persistentData.putString("FluidType", incomingFluidId);
      blockInfo.persistentData.putInt("Fluid", fluidData + filled);
    } else if (storedFluidId === incomingFluidId) {
      blockInfo.persistentData.putInt("Fluid", fluidData + filled);
    } else {
      return (filled = 0);
    }
  }
  return filled;
};

global.onDrain = (blockInfo, fluid, sim) => {
  const fluidData = blockInfo.persistentData.getInt("Fluid");
  const drained = Math.min(fluidData, fluid.getAmount());
  if (!sim) blockInfo.persistentData.putInt("Fluid", fluidData - drained);
  return drained;
};

// Text display utils
global.clearOldTextDisplay = (block, id) => {
  const { x, y, z } = block;
  block
    .getLevel()
    .getServer()
    .getEntities()
    .forEach((entity) => {
      entity.getTags().forEach((tag) => {
        if (tag === `${id}-${x}-${y}-${z}`) {
          entity.kill();
        }
      });
    });
};

global.rotationFromFacing = (facing) => {
  switch (facing) {
    case "north":
      return 180;
    case "east":
      return 270;
    case "south":
      return 360;
    default:
    case "west":
      return 90;
  }
};

global.spawnTextDisplay = (block, y, id, text) => {
  let entity;
  const { x, z } = block;
  entity = block.createEntity("minecraft:text_display");
  let newNbt = entity.getNbt();
  newNbt.text = `${text.toJson()}`;
  newNbt.background = 0;
  newNbt.Rotation = [
    NBT.f(global.rotationFromFacing(block.properties.get("facing"))),
    NBT.f(0),
  ];
  entity.setNbt(newNbt);
  entity.setX(x + 0.5);
  entity.setY(y);
  entity.setZ(z + 0.5);
  entity.addTag(`${id}-${x}-${block.y}-${z}`);
  entity.spawn();
};

global.giveExperience = (server, player, category, xp) => {
  if (!player.isFake()) {
    server.runCommandSilent(
      `puffish_skills experience add ${player.username} society:${category} ${xp}`
    );
    if (player.stages.has("mastery_unlocked")) {
      server.runCommandSilent(
        `puffish_skills experience add ${player.username} society:mastery ${xp}`
      );
    }
  }
};

/**
 * If you can figure out a way to simplify this in a way that doesn't make it
 * More difficult to read you get an artifact in-game.
 */
global.getProcessedItem = (item, dropAmount) => {
  let processOutput = global.mayonnaiseMachineRecipes.get(item);
  if (processOutput)
    return { divisor: 1, item: Item.of(processOutput.output[0]).id, preserveQuality: true };
  processOutput = global.wineKegRecipes.get(item);
  if (processOutput)
    return { divisor: 3, item: Item.of(processOutput.output[0]).id, preserveQuality: false };
  processOutput = global.oilMakerRecipes.get(item);
  if (processOutput && dropAmount >= 5)
    return { divisor: 5, item: Item.of(processOutput.output[0]).id, preserveQuality: false };
  processOutput = global.loomRecipes.get(item);
  if (processOutput)
    return { divisor: 1, item: Item.of(processOutput.output[0]).id, preserveQuality: false };
  processOutput = global.recyclingMachineRecipes.get(item);
  if (processOutput)
    return { divisor: 1, item: Item.of(processOutput.output[0]).id, preserveQuality: false };
  return { divisor: 1, item: item, preserveQuality: true };
};

const stoneRockTable = [
  { block: "society:stone_boulder", weight: 163 },
  { block: "minecraft:coal_ore", weight: 25 },
  { block: "minecraft:copper_ore", weight: 20 },
  { block: "minecraft:iron_ore", weight: 15 },
  { block: "create:zinc_ore", weight: 13 },
  { block: "minecraft:lapis_ore", weight: 2 },
  { block: "society:geode_node", weight: 2, sturdy: true },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
  { block: "society:oak_supply_crate", weight: 2 },
];

const iceRockTable = [
  { block: "society:ice_boulder", weight: 164 },
  { block: "minecraft:iron_ore", weight: 25 },
  { block: "create:zinc_ore", weight: 15 },
  { block: "oreganized:lead_ore", weight: 10 },
  { block: "minecraft:diamond_ore", weight: 4 },
  { block: "society:earth_crystal", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 1, sturdy: true },
  { block: "society:sparkstone_ore", weight: 2 },
  { block: "society:spruce_supply_crate", weight: 2 },
];

const sandstoneRockTable = [
  { block: "society:sandstone_boulder", weight: 163 },
  { block: "minecraft:gold_ore", weight: 20 },
  { block: "oreganized:lead_ore", weight: 10 },
  { block: "minecraft:redstone_ore", weight: 6 },
  { block: "minecraft:diamond_ore", weight: 4 },
  { block: "society:sparkstone_ore", weight: 4 },
  { block: "society:fire_quartz", weight: 2, sturdy: true },
  { block: "society:magma_geode_node", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 2, sturdy: true },
  { block: "society:palm_supply_crate", weight: 2 },
  { block: "oreganized:silver_ore", weight: 2 },
  { block: "society:iridium_ore", weight: 1 },
];

const blackstoneRockTable = [
  { block: "society:blackstone_boulder", weight: 148 },
  { block: "minecraft:deepslate_gold_ore", weight: 20 },
  { block: "oreganized:deepslate_lead_ore", weight: 10 },
  { block: "minecraft:deepslate_redstone_ore", weight: 15 },
  { block: "minecraft:deepslate_diamond_ore", weight: 4 },
  { block: "society:deepslate_sparkstone_ore", weight: 10 },
  { block: "society:fire_quartz", weight: 2, sturdy: true },
  { block: "society:magma_geode_node", weight: 2, sturdy: true },
  { block: "society:omni_geode_node", weight: 4, sturdy: true },
  { block: "oreganized:deepslate_silver_ore", weight: 4 },
  { block: "society:grimwood_supply_crate", weight: 2 },
  { block: "society:deepslate_iridium_ore", weight: 2 },
];

const endstoneRockTable = [
  { block: "society:end_stone_boulder", weight: 194 },
  { block: "society:deepslate_sparkstone_ore", weight: 14 },
  { block: "society:omni_geode_node", weight: 4, sturdy: true },
  { block: "society:deepslate_iridium_ore", weight: 3 },
];

const rollReplaceTable = (table, hasRope) => {
  let roll = 0;
  const totalWeight = table.reduce(
    (acc, current) => (hasRope && current.sturdy ? acc : acc + current.weight),
    0
  );
  let currentWeight = 0;
  if (totalWeight > 1) {
    roll = rnd(0, totalWeight);
    for (let index = 0; index < table.length; index++) {
      currentWeight += table[index].weight;
      if (currentWeight >= roll) {
        return table[index].block;
      }
    }
  }
  return "minecraft:obsidian";
};

global.handleSkullCavernRegen = (level, block) => {
  if (
    !level.persistentData ||
    !level.persistentData.chunkParityMap ||
    !block.id.equals("society:cavern_air")
  )
    return;
  let belowPos;
  let belowBlock;
  let belowBelowPos;
  let hasRope;

  let toggleBit =
    level.persistentData.chunkParityMap[
      level.getChunkAt(block.getPos()).pos.toString()
    ].toggleBit;
  if (block && block.getProperties() && block.getProperties().get("chunkbit")) {
    if (String(toggleBit) != block.getProperties().get("chunkbit")) {
      belowPos = block.getPos().below();
      belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
      belowBelowPos = belowBlock.getPos().below();
      hasRope =
        level.getBlock(belowBelowPos.x, belowBelowPos.y, belowBelowPos.z).id ===
        "farmersdelight:rope";
      let newBlock;
      switch (Number(block.properties.get("type"))) {
        case 4:
          newBlock = rollReplaceTable(endstoneRockTable, hasRope);
          break;
        case 3:
          newBlock = rollReplaceTable(blackstoneRockTable, hasRope);
          break;
        case 2:
          newBlock = rollReplaceTable(sandstoneRockTable, hasRope);
          break;
        case 1:
          newBlock = rollReplaceTable(iceRockTable, hasRope);
          break;
        default:
        case 0:
          newBlock = rollReplaceTable(stoneRockTable, hasRope);
          break;
      }
      block.set(newBlock);
    }
  }
};

const getCardinalMultipartJsonBasic = (name) => {
  const path = `society:block/kubejs/${name}`;
  return [
    {
      when: { facing: "north" },
      apply: { model: path, y: 0, uvlock: false },
    },
    {
      when: { facing: "east" },
      apply: { model: path, y: 90, uvlock: false },
    },
    {
      when: { facing: "south" },
      apply: { model: path, y: 180, uvlock: false },
    },
    {
      when: { facing: "west" },
      apply: { model: path, y: -90, uvlock: false },
    },
  ];
};

const getCardinalMultipartJsonBasicUpgradable = (name, upgraded) => {
  const path = `society:block/kubejs/${name}`;
  return [
    {
      when: { facing: "north", upgraded: upgraded },
      apply: { model: path, y: 0, uvlock: false },
    },
    {
      when: { facing: "east", upgraded: upgraded },
      apply: { model: path, y: 90, uvlock: false },
    },
    {
      when: { facing: "south", upgraded: upgraded },
      apply: { model: path, y: 180, uvlock: false },
    },
    {
      when: { facing: "west", upgraded: upgraded },
      apply: { model: path, y: -90, uvlock: false },
    },
  ];
};
global.cropList = [
  "minecraft:wheat",
  "minecraft:pumpkin_stem",
  "minecraft:melon_stem",
  "minecraft:beetroots",
  "snowyspirit:ginger",
  "supplementaries:flax",
  "herbalbrews:coffee_plant",
  "herbalbrews:rooibos_plant",
  "herbalbrews:tea_plant",
  "herbalbrews:yerba_mate_plant",
  "minecraft:sweet_berry_bush",
  "farm_and_charm:tomato_crop",
  "farm_and_charm:strawberry",
  "farm_and_charm:lettuce_crop",
  "farm_and_charm:barley_crop",
  "farm_and_charm:onion_crop",
  "farm_and_charm:tomato_crop_body",
  "farm_and_charm:corn_crop",
  "farm_and_charm:oat_crop",
  "brewery:hops_crop",
  "brewery:hops_crop_body",
  "nethervinery:crimson_grape_bush",
  "nethervinery:warped_grape_bush",
  "vinery:savanna_grape_bush_white",
  "vinery:jungle_grape_bush_red",
  "vinery:savanna_grape_bush_red",
  "vinery:white_grape_bush",
  "vinery:red_grape_bush",
  "vinery:taiga_grape_bush_red",
  "vinery:taiga_grape_bush_white",
  "vinery:jungle_grape_bush_white",
  "vinery:jungle_grape_bush_red",
  "vintagedelight:ghost_pepper_crop",
  "vintagedelight:cucumber_crop",
  "farmersdelight:cabbages",
  "farmersdelight:budding_tomatoes",
  "farmersdelight:tomatoes",
  "farmersdelight:rice",
  "farmersdelight:rice_panicles",
  "society:ancient_fruit",
  "society:cranberry",
  "windswept:wild_berry_bush",
  "society:mana_fruit",
  "etcetera:cotton",
  "society:tubabacco_leaf",
  "brewery:hop_trellis",
  "society:blueberry",
  "veggiesdelight:cauliflower_crop",
  "veggiesdelight:garlic_crop",
  "veggiesdelight:bellpepper_crop",
  "society:eggplant",
  "society:potato",
  "society:carrot",
  "society:peanut",
  "society:sweet_potato",
  "society:onion",
  "veggiesdelight:turnip_crop",
  "veggiesdelight:zucchini_crop",
  "veggiesdelight:broccoli_crop",
];

const qualityToInt = (quality) => {
  switch (quality) {
    case "DIAMOND":
      return 3;
    case "GOLD":
      return 2;
    case "IRON":
      return 1;
    case "NONE":
    default:
      return 0;
  }
};
const getFertilizer = (crop) => {
  let block = crop
    .getLevel()
    .getBlock(crop.getPos().below());
  if (block.hasTag("dew_drop_farmland_growth:bountiful_fertilized_farmland"))
    return -1;
  if (block.hasTag("dew_drop_farmland_growth:low_quality_fertilized_farmland"))
    return 1;
  if (block.hasTag("dew_drop_farmland_growth:high_quality_fertilized_farmland"))
    return 2;
  if (
    block.hasTag(
      "dew_drop_farmland_growth:pristine_quality_fertilized_farmland"
    )
  )
    return 3;
  return 0;
};

const LevelData = Java.loadClass(
  "de.cadentem.quality_food.capability.LevelData"
);

global.getCropQuality = (crop) => {
  let resolvedCrop = crop
  if (crop.id === "farmersdelight:rice_panicles") resolvedCrop = crop.getLevel().getBlock(crop.getPos().below());
  const fertilizer = getFertilizer(resolvedCrop);
  if (fertilizer == -1) return 0;
  const qualityName = LevelData.get(
    resolvedCrop.getLevel(),
    resolvedCrop.getPos(),
    false
  );
  let seedQuality = qualityToInt(qualityName);
  if (fertilizer > 1 && seedQuality < 1) seedQuality = 1;
  const goldChance =
    0.2 * ((seedQuality * 4.6) / 10) +
    0.2 * fertilizer * ((seedQuality * 4.6 + 2) / 12) +
    0.01;
  // // Debug Quality
  // console.log(crop)
  // console.log("Seed quality " + seedQuality);
  // console.log("Fertilizer quality " + fertilizer);
  // console.log("Chance for gold: " + goldChance);
  if (fertilizer >= 2 && Math.random() < goldChance / 2) return 3;
  if (Math.random() < goldChance) return 2;
  if (Math.random() < goldChance * 2) return 1;
  return 0;
};

const getCardinalMultipartJson = (name, disableExclamation) => {
  const path = `society:block/kubejs/${name}/${name}`;
  let exclamationJson = [
    {
      when: { mature: true },
      apply: { model: "society:block/kubejs/machine_done" },
    },
  ];
  if (disableExclamation) {
    exclamationJson = [];
  }
  let offJson = [
    {
      when: { working: false, upgraded: false, facing: "north" },
      apply: { model: `${path}_off`, y: 0, uvlock: false },
    },
    {
      when: { working: false, upgraded: false, facing: "east" },
      apply: { model: `${path}_off`, y: 90, uvlock: false },
    },
    {
      when: { working: false, upgraded: false, facing: "south" },
      apply: { model: `${path}_off`, y: 180, uvlock: false },
    },
    {
      when: { working: false, upgraded: false, facing: "west" },
      apply: { model: `${path}_off`, y: -90, uvlock: false },
    },
    {
      when: { working: false, upgraded: true, facing: "north" },
      apply: { model: `${path}_off_upgraded`, y: 0, uvlock: false },
    },
    {
      when: { working: false, upgraded: true, facing: "east" },
      apply: { model: `${path}_off_upgraded`, y: 90, uvlock: false },
    },
    {
      when: { working: false, upgraded: true, facing: "south" },
      apply: { model: `${path}_off_upgraded`, y: 180, uvlock: false },
    },
    {
      when: { working: false, upgraded: true, facing: "west" },
      apply: { model: `${path}_off_upgraded`, y: -90, uvlock: false },
    },
  ];
  let doneJson = [
    {
      when: { mature: true, upgraded: false, facing: "north" },
      apply: { model: `${path}_done`, y: 0, uvlock: false },
    },
    {
      when: { mature: true, upgraded: false, facing: "east" },
      apply: { model: `${path}_done`, y: 90, uvlock: false },
    },
    {
      when: { mature: true, upgraded: false, facing: "south" },
      apply: { model: `${path}_done`, y: 180, uvlock: false },
    },
    {
      when: { mature: true, upgraded: false, facing: "west" },
      apply: { model: `${path}_done`, y: -90, uvlock: false },
    },
    {
      when: { mature: true, upgraded: true, facing: "north" },
      apply: { model: `${path}_done_upgraded`, y: 0, uvlock: false },
    },
    {
      when: { mature: true, upgraded: true, facing: "east" },
      apply: { model: `${path}_done_upgraded`, y: 90, uvlock: false },
    },
    {
      when: { mature: true, upgraded: true, facing: "south" },
      apply: { model: `${path}_done_upgraded`, y: 180, uvlock: false },
    },
    {
      when: { mature: true, upgraded: true, facing: "west" },
      apply: { model: `${path}_done_upgraded`, y: -90, uvlock: false },
    },
  ];
  return [
    {
      apply: { model: `society:block/kubejs/${name}/${name}_particle` },
    },
    {
      when: { mature: true },
      apply: { model: "society:block/kubejs/machine_done" },
    },
    {
      when: { working: true, upgraded: false, facing: "north" },
      apply: { model: path, y: 0, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "east" },
      apply: { model: path, y: 90, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "south" },
      apply: { model: path, y: 180, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "west" },
      apply: { model: path, y: -90, uvlock: false },
    },
    {
      when: { working: true, upgraded: true, facing: "north" },
      apply: { model: `${path}_upgraded`, y: 0, uvlock: false },
    },
    {
      when: { working: true, upgraded: true, facing: "east" },
      apply: { model: `${path}_upgraded`, y: 90, uvlock: false },
    },
    {
      when: { working: true, upgraded: true, facing: "south" },
      apply: { model: `${path}_upgraded`, y: 180, uvlock: false },
    },
    {
      when: { working: true, upgraded: true, facing: "west" },
      apply: { model: `${path}_upgraded`, y: -90, uvlock: false },
    },
  ]
    .concat(exclamationJson)
    .concat(offJson)
    .concat(doneJson);
};

global.getTaggedBlocksInRadius = (
  level,
  scanTag,
  centerPos,
  radius,
  returnTagged
) => {
  const { x, y, z } = centerPos;
  let scanBlock;
  let scannedBlocks = 0;
  let taggedBlocks = [];
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(x - radius, y - radius, z - radius),
    [x + radius, y + radius, z + radius]
  )) {
    scanBlock = level.getBlock(pos);
    if (scanBlock.hasTag(scanTag)) {
      scannedBlocks++;
      if (returnTagged) taggedBlocks.push(scanBlock.id);
    }
  }
  if (returnTagged) return taggedBlocks;
  return scannedBlocks;
};
