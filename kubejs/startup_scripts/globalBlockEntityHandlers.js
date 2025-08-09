/* eslint-disable no-unused-vars */
// Priority: 1000

global.artisanMachineDefinitions = [
  {
    id: "society:loom",
    recipes: global.loomRecipes,
    stageCount: 1,
    maxInput: 5,
    upgrade: "society:tiny_gnome",
  },
  {
    id: "society:cheese_press",
    recipes: global.cheesePressRecipes,
    stageCount: 2,
    maxInput: 1,
    upgrade: "society:pink_matter",
  },
  {
    id: "society:aging_cask",
    recipes: global.agingCaskRecipes,
    stageCount: 10,
    maxInput: 1,
    upgrade: "society:broken_clock",
  },
  {
    id: "society:ancient_cask",
    recipes: global.ancientCaskRecipes,
    stageCount: 20,
    maxInput: 1,
    upgrade: "society:inserter",
  },
  {
    id: "society:crystalarium",
    recipes: global.crystalariumCrystals,
    stageCount: 5,
    maxInput: 1,
    upgrade: "society:black_opal",
  },
  {
    id: "society:deluxe_worm_farm",
    recipes: global.deluxeWormFarmRecipes,
    stageCount: 2,
    maxInput: 4,
    upgrade: "society:infinity_worm",
  },
  {
    id: "society:fish_smoker",
    recipes: global.fishSmokerRecipes,
    stageCount: 2,
    maxInput: 1,
    upgrade: "society:ancient_roe",
  },
  {
    id: "society:bait_maker",
    recipes: global.baitMakerRecipes,
    stageCount: 1,
    maxInput: 1,
  },
  {
    id: "society:dehydrator",
    recipes: global.dehydratorRecipes,
    stageCount: 1,
    maxInput: 8,
    upgrade: "society:cordycep",
  },
  {
    id: "society:mayonnaise_machine",
    recipes: global.mayonnaiseMachineRecipes,
    stageCount: 1,
    maxInput: 1,
  },
  {
    id: "society:preserves_jar",
    recipes: global.preservesJarRecipes,
    stageCount: 3,
    maxInput: 5,
    upgrade: "society:stone_hand",
  },
  {
    id: "society:seed_maker",
    recipes: global.seedMakerRecipes,
    stageCount: 1,
    maxInput: 3,
    upgrade: "society:ancient_cog",
  },
  {
    id: "society:charging_rod",
    recipes: "society:battery",
    stageCount: 5,
    maxInput: 1,
    upgrade: "society:frosted_tip",
  },
  {
    id: "society:espresso_machine",
    recipes: global.espressoMachineRecipes,
    stageCount: 1,
    maxInput: 4,
  },
  {
    id: "society:tapper",
    recipes: global.tapperRecipes,
    stageCount: 7,
    maxInput: 1,
  },
  {
    id: "society:recycling_machine",
    recipes: global.recyclingMachineRecipes,
    stageCount: 1,
    maxInput: 1,
  },
];

global.artisanMachineIds = global.artisanMachineDefinitions.map((x) => x.id);

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
  let hasQuality = newProperties.quality && newProperties.quality !== "0";
  if (block.properties.get("mature").toLowerCase() === "true") {
    let harvestOutput;
    if (!artisanHopper) {
      global.giveExperience(server, player, "farming", stageCount * 20);
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
        harvestOutput = Item.of(`society:aged_${id.split(":")[1]}`);
      }
      if (outputMult > 1) harvestOutput.count = harvestOutput.count * outputMult;
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

const getFacing = (facing, pos) => {
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
  level.getBlock(getOpposite(block.properties.get("facing"), block.getPos()));

global.getFermentingBarrel = (level, block) =>
  level.getBlock(getFacing(block.getProperties().get("facing"), block.getPos()));

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

/** All fluid handlers expect the following initialData with a capacity of 10000
 *
 *  blockInfo.initialData({ Fluid: 0, FluidType: "" });
 */

global.getFluid = (blockInfo) => {
  const foundFluid = blockInfo.persistentData.getString("FluidType");
  if (!foundFluid) return Fluid.of("minecraft:water", 0);
  return Fluid.of(foundFluid, blockInfo.persistentData.getInt("Fluid") || 0);
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

global.textDisplayRotationFromFacing = (facing) => {
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
  newNbt.text = `{"text":"${text}"}`;
  newNbt.background = 0;
  newNbt.Rotation = [
    NBT.f(global.textDisplayRotationFromFacing(block.properties.get("facing"))),
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
  }
};

const getCardinalMultipartJsonBasic = (name) => {
  const path = `society:block/${name}`;
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
  const path = `society:block/${name}`;
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

const getCardinalMultipartJson = (name, disableExclamation) => {
  const path = `society:block/${name}/${name}`;
  let exclamationJson = [
    {
      when: { mature: true },
      apply: { model: "society:block/machine_done" },
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
      apply: { model: `society:block/${name}/${name}_particle` },
    },
    {
      when: { mature: true },
      apply: { model: "society:block/machine_done" },
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
