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
    Number(newProperties.stage) === 0 ||
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

global.handleBERightClick = (
  stockSound,
  clickEvent,
  recipes,
  stageCount,
  multipleInputs,
  hasTag,
  outputMult
) => {
  const { item, block, hand, player, level, server } = clickEvent;
  let blockStage = block.properties.get("stage").toLowerCase();
  const facing = block.properties.get("facing");
  let newProperties = block.getProperties();
  const hasQuality = newProperties.quality && newProperties.quality !== "0";
  const itemNbt = item.nbt;
  let itemQuality;
  // Prevent Deployers from using artisan machines
  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND") {
    if (block.properties.get("mature").toLowerCase() === "true") {
      //reset block and drop items
      server.runCommandSilent(
        `puffish_skills experience add ${player.username} society:farming ${
          stageCount * 20
        }`
      );
      server.runCommandSilent(
        `playsound stardew_fishing:dwop block @a ${player.x} ${player.y} ${player.z}`
      );
      recipes[
        Number(block.properties.get("type").toLowerCase()) - 1
      ].output.forEach((id) => {
        if (outputMult) {
          block.popItemFromFace(
            Item.of(
              id.replace("1x ", `${outputMult} `),
              hasQuality && `{quality_food:{quality:${newProperties.quality}}}`
            ),
            facing
          );
        } else {
          block.popItemFromFace(
            Item.of(
              id,
              hasQuality
                ? `{quality_food:{quality:${newProperties.quality}}}`
                : null
            ),
            facing
          );
        }
        newProperties.type = "0";
        newProperties.working = false;
        newProperties.mature = false;
        newProperties.stage = "0";
        if (newProperties.duration) newProperties.duration = "0";
        if (newProperties.quality) newProperties.quality = "0";
        block.set(block.id, newProperties);
      });
    }
    newProperties = block.getProperties();
    blockStage = block.properties.get("stage").toLowerCase();
    recipes.forEach((recipe, index) => {
      if (getCanTakeItems(item, block.properties, recipe, index, hasTag)) {
        newProperties = block.getProperties();
        successParticles(level, block);
        server.runCommandSilent(
          `playsound ${stockSound} block @a ${player.x} ${player.y} ${player.z}`
        );
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
            if (!player.isCreative())
              item.count = item.count - (stageCount - Number(blockStage));
            if (itemQuality) setQuality(newProperties, itemQuality);
            newProperties.stage = stageCount.toString();
          } else {
            if (!player.isCreative()) item.count--;
            if (itemQuality) setQuality(newProperties, itemQuality);
            newProperties.stage = increaseStage(blockStage);
          }
        } else {
          if (!player.isCreative()) item.count--;
          if (itemQuality) {
            newProperties.quality = itemQuality;
          }
        }
        if (newProperties.duration)
          newProperties.duration = String(recipe.time);
        if (!multipleInputs || newProperties.stage === stageCount.toString()) {
          newProperties.working = true;
          newProperties.stage = "0";
        }
      }
      block.set(block.id, newProperties);
    });
  }
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
    (morningModulo >= artMachineProgTime &&
      morningModulo < artMachineProgTime + artMachineTickRate)
  ) {
    let resolvedStageCount =
      (recipes &&
        recipes[Number(blockProperties.get("type").toLowerCase()) - 1].time) ||
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

const getCardinalMultipartJson = (name, offState) => {
  const path = `society:block/${name}`;
  let offJson = offState
    ? [
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
      ]
    : [];
  return [
    {
      when: { working: true, upgraded: false, facing: "north" },
      apply: { model: `${path}`, y: 0, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "east" },
      apply: { model: `${path}`, y: 90, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "south" },
      apply: { model: `${path}`, y: 180, uvlock: false },
    },
    {
      when: { working: true, upgraded: false, facing: "west" },
      apply: { model: `${path}`, y: -90, uvlock: false },
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
  ].concat(offJson);
};
