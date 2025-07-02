/* eslint-disable no-unused-vars */
// Priority: 1000
const calculateQualityValue = (number, quality) => {
  let value;
  if (quality) {
    if (quality == 1.0) value = Math.round(number * 1.25);
    if (quality == 2.0) value = Math.round(number * 1.5);
    if (quality == 3.0) value = Math.round(number * 2);
  } else {
    value = number;
  }
  return value;
};

global.processShippingBinInventory = (inventory, inventorySlots, attributes, returnRemoved) => {
  let calculatedValue = 0;
  let removedItems = [];
  let slotItem;
  let isSellable;
  for (let i = 0; i < inventorySlots; i++) {
    slotItem = inventory.getStackInSlot(i).item;
    isSellable =
      global.trades.has(String(slotItem.id)) ||
      ["splendid_slimes:plort", "splendid_slimes:slime_heart"].includes(slotItem.id);
    if (isSellable) {
      let trade = global.trades.get(String(slotItem.id));
      let quality;
      let slotNbt;
      if (inventory.getStackInSlot(i).hasNBT()) {
        slotNbt = inventory.getStackInSlot(i).nbt;
      }
      if (slotNbt && ((slotNbt.slime && slotNbt.slime.id) || (slotNbt.plort && slotNbt.plort.id))) {
        if (slotNbt.slime) trade = global.trades.get(`${slotItem.id}/${slotNbt.slime.id}`);
        if (slotNbt.plort) trade = global.trades.get(`${slotItem.id}/${slotNbt.plort.id}`);
      }

      if (slotNbt && slotNbt.quality_food) {
        quality = slotNbt.quality_food.quality;
      }
      calculatedValue +=
        calculateQualityValue(trade.value, quality) *
        inventory.getStackInSlot(i).count *
        (Number(
          attributes.filter((obj) => {
            return obj.Name === trade.multiplier;
          })[0]?.Base
        ) || 1);
    }
    if (isSellable) {
      if (returnRemoved) removedItems.push(i);
      else inventory.setStackInSlot(i, "minecraft:air");
    }
  }
  return { calculatedValue: calculatedValue, removedItems: removedItems };
};

const artMachineTickRate = 20;

const artMachineProgTime = 20;

const booleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
);

const integerProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.IntegerProperty"
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
let increaseStage = (input, count) => {
  let num = Number(input);
  num += count || 1;
  return num.toString();
};

let decreaseStage = (input) => {
  let num = Number(input);
  num -= 1;
  return num.toString();
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

const hasWoolTag = (tags) => {
  let found = false;
  tags.forEach((tag) => {
    if (tag.toString().includes("minecraft:wool")) {
      found = true;
    }
  });
  return found;
};

const setQuality = (newProperties, itemQuality) => {
  if (
    (Number(newProperties.quality) === 0 && Number(newProperties.stage) === 0) ||
    Number(itemQuality) < Number(newProperties.quality)
  )
    newProperties.quality = itemQuality;
};

const getCanTakeItems = (item, properties, recipe, recipeIndex, hasTag) => {
  let itemCheck = item == recipe.input;
  if (hasTag && recipe.input.includes("#")) {
    itemCheck = hasWoolTag(item.getTags().toList());
  }
  return (
    itemCheck &&
    properties.get("working").toLowerCase() === "false" &&
    properties.get("mature").toLowerCase() === "false" &&
    (properties.get("type").toLowerCase() == "" + (recipeIndex + 1) ||
      properties.get("type").toLowerCase() == "0")
  );
};

global.getArtisanRecipe = (recipes, block) =>
  recipes[Number(block.properties.get("type").toLowerCase()) - 1];

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
  const hasQuality = newProperties.quality && newProperties.quality !== "0";
  if (block.properties.get("mature").toLowerCase() === "true") {
    let harvestOutput;
    if (!artisanHopper) {
      server.runCommandSilent(
        `puffish_skills experience add ${player.username} society:farming ${stageCount * 20}`
      );
      server.runCommandSilent(
        `playsound stardew_fishing:dwop block @a ${player.x} ${player.y} ${player.z}`
      );
    }
    global.getArtisanRecipe(recipes, block).output.forEach((id) => {
      harvestOutput = Item.of(
        id,
        hasQuality ? `{quality_food:{quality:${newProperties.quality}}}` : null
      );
      // Artisan Cheese Press upgrade: auto age cheese wheels only
      if (
        isCheesePress &&
        (id.includes("wheel") || id.includes("block")) &&
        block.properties.get("upgraded").toLowerCase() === "true"
      ) {
        harvestOutput = Item.of(
          `society:aged_${id.split(":")[1]}`,
          hasQuality ? `{quality_food:{quality:${newProperties.quality}}}` : null
        );
      }
      if (outputMult > 1) harvestOutput.count = outputMult;
      if (!artisanHopper) block.popItemFromFace(harvestOutput, block.properties.get("facing"));
      newProperties.type = "0";
      newProperties.working = false;
      newProperties.mature = false;
      newProperties.stage = "0";
      if (newProperties.duration) newProperties.duration = "0";
      if (newProperties.quality) newProperties.quality = "0";
      block.set(block.id, newProperties);
    });
    if (artisanHopper) return harvestOutput;
  }
};

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
  let blockStage = block.properties.get("stage").toLowerCase();
  const itemNbt = item.nbt;
  let itemQuality;
  let useCount = 0;
  recipes.forEach((recipe, index) => {
    if (getCanTakeItems(item, block.properties, recipe, index, hasTag)) {
      newProperties = block.getProperties();
      successParticles(level, block);
      server.runCommandSilent(`playsound ${stockSound} block @a ${block.x} ${block.y} ${block.z}`);
      newProperties.type = String(index + 1);
      newProperties.working = false;
      newProperties.mature = false;
      if (newProperties.quality && itemNbt && itemNbt.quality_food) {
        itemQuality = String(itemNbt.quality_food.quality);
      } else if (newProperties.quality) {
        itemQuality = "0";
      }
      if (multipleInputs) {
        if (item.count >= stageCount - Number(blockStage)) {
          useCount = stageCount - Number(blockStage);
          if (itemQuality) setQuality(newProperties, itemQuality);
          newProperties.stage = stageCount.toString();
        } else {
          useCount = 1;
          if (itemQuality) setQuality(newProperties, itemQuality);
          newProperties.stage = increaseStage(blockStage);
        }
      } else {
        useCount = 1;
        if (itemQuality) {
          newProperties.quality = itemQuality;
        }
      }
      if (newProperties.duration) newProperties.duration = String(recipe.time);
      if (!multipleInputs || newProperties.stage === stageCount.toString()) {
        newProperties.working = true;
        newProperties.stage = "0";
      }
      block.set(block.id, newProperties);
      if (player && !player.isCreative()) item.count -= useCount;
    }
  });
  if (artisanHopper) return useCount;
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

const getOpposite = (facing, pos) => {
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

global.getTapperLog = (level, block) =>
  level.getBlock(getOpposite(block.properties.get("facing"), block.getPos()));

global.handleTapperRandomTick = (tickEvent, returnFluidData) => {
  const { block, level, server } = tickEvent;
  let newProperties = block.getProperties();
  const attachedBlock = global.getTapperLog(level, block);
  let foundFluidData = undefined;
  let hasError = false;

  if (attachedBlock.hasTag("society:tappable_blocks")) {
    if (global.hasMultipleTappers(level, block)) {
      hasError = true;
    }
    if (
      returnFluidData ||
      (block.properties.get("working").toLowerCase() === "false" &&
        block.properties.get("mature").toLowerCase() === "false")
    ) {
      global.tapperRecipes &&
        global.tapperRecipes.forEach((recipe, index) => {
          if (returnFluidData && !foundFluidData && attachedBlock.getId() === recipe.input) {
            foundFluidData = { fluid: recipe.fluidOutput, time: recipe.time };
          }
          if (
            !returnFluidData &&
            getCanTakeItems(attachedBlock.getId(), block.properties, recipe, index, false)
          ) {
            newProperties = block.getProperties();
            successParticles(level, block);
            server.runCommandSilent(
              `playsound vinery:cabinet_close block @a ${block.x} ${block.y} ${block.z}`
            );
            newProperties.type = String(index + 1);
            newProperties.working = false;
            newProperties.mature = false;
            newProperties.duration = String(recipe.time);
            newProperties.working = true;
            newProperties.stage = "0";
          }
        });
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
          new BlockPos(attachedBlock.x + offset[0], attachedBlock.y, attachedBlock.z + offset[1])
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
  const blockStage = block.properties.get("stage").toLowerCase();
  const mature = blockStage === (stageCount - 1).toString();
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
    newProperties.stage = increaseStage(blockStage);
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
    (morningModulo >= artMachineProgTime && morningModulo < artMachineProgTime + artMachineTickRate)
  ) {
    let resolvedStageCount =
      (recipes && recipes[Number(blockProperties.get("type").toLowerCase()) - 1].time) ||
      stageCount;

    const blockStage = blockProperties.get("stage").toLowerCase();
    let mature;
    if (halveTime && blockProperties.get("upgraded").toLowerCase() == "true") {
      mature = Number(blockStage) >= resolvedStageCount / 2 - 1;
    } else {
      mature = Number(blockStage) >= resolvedStageCount - 1;
    }

    let newProperties = level.getBlock(block.pos).getProperties();
    newProperties.working = !mature;
    newProperties.mature = mature;
    newProperties.stage = increaseStage(blockStage);
    block.set(block.id, newProperties);
  }
};

global.inventoryBelowHasRoom = (level, block, item) => {
  let belowItem;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (belowBlock.inventory && item && item !== Item.of("minecraft:air")) {
    for (let j = 0; j < belowBlock.inventory.slots; j++) {
      belowItem = belowBlock.inventory.getStackInSlot(j);
      if (
        belowItem.id === Item.of(item).id &&
        belowItem.count + Item.of(item).count < belowBlock.inventory.getSlotLimit(j)
      ) {
        return true;
      }
    }
    for (let j = 0; j < belowBlock.inventory.slots; j++) {
      belowItem = belowBlock.inventory.getStackInSlot(j);
      if (belowItem === Item.of("minecraft:air")) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @returns result code:
 * -1 - Failure - Operation attempted but couldn't be inserted
 * 0 - Neutral - Operation not attempted due to no below inventory or item
 * 1 - Success - Item successfully inserted
 */
global.insertBelow = (level, block, item) => {
  let belowItem;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (belowBlock.inventory && item && item !== Item.of("minecraft:air")) {
    for (let j = 0; j < belowBlock.inventory.slots; j++) {
      belowItem = belowBlock.inventory.getStackInSlot(j);
      if (
        belowItem.id === Item.of(item).id &&
        belowItem.count + Item.of(item).count < belowBlock.inventory.getSlotLimit(j)
      ) {
        belowBlock.inventory.insertItem(j, item, false);
        return 1;
      }
    }
    for (let j = 0; j < belowBlock.inventory.slots; j++) {
      belowItem = belowBlock.inventory.getStackInSlot(j);
      if (belowItem === Item.of("minecraft:air")) {
        belowBlock.inventory.insertItem(j, item, false);
        return 1;
      }
    }
    return -1;
  }
  return 0;
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