// priority: -21
console.info("[SOCIETY] drumCornucopia.js loaded");

const drumCornucopiaProgTime = 1000;
const fruitTreeBlocks = [
  "pamhc2trees:pamorange",
  "pamhc2trees:pamdragonfruit",
  "pamhc2trees:pampeach",
  "pamhc2trees:pamplum",
  "pamhc2trees:pambanana",
  "pamhc2trees:pamapple",
  "pamhc2trees:pamcherry",
  "pamhc2trees:pamstarfruit",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pammango",
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pampawpaw",
  "pamhc2trees:pamcinnamon",
  "pamhc2trees:pampassionfruit",
  "pamhc2trees:pamlemon",
];
const dropThree = ["pamhc2trees:pamhazelnut", "pamhc2trees:pamlychee", "pamhc2trees:pambanana"];
const dropModified = ["pamhc2trees:pampassionfruit", "pamhc2trees:pamorange"];
const dropFourModified = ["pamhc2trees:pamcherry", "pamhc2trees:pamapple"];

global.handleCornucopia = (server, level, centerPos, player, returnExperience) => {
  let { x, y, z } = centerPos
  let scannedBlock;
  let fruitDrop;
  let fruitType;
  let fruitItem;
  let fruitCount;
  let success = false;
  let season;
  let modifiedProperties;
  let experienceMult = 0;
  server.runCommandSilent(
    `playsound ${player != null ? "trials:breeze_idle" : "etcetera:block.drum.djembe.low"} block @a ${x} ${y} ${z}`
  );
  if (!player) {
      level.spawnParticles(
        "species:ghoul_searching2",
        true,
        x,
        y + 0.5,
        z,
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        1,
        0.05
      );
  }
  for (let pos of BlockPos.betweenClosed(new BlockPos(x - 10, y - 2, z - 10), [
    x + 10,
    y + 10,
    z + 10,
  ])) {
    scannedBlock = level.getBlock(pos);
    if (scannedBlock.id == "minecraft:air") continue;
    success = false;
    fruitDrop = level.createEntity("minecraft:item");
    if (["vinery:dark_cherry_leaves", "vinery:apple_leaves"].includes(scannedBlock.id)) {
      season = global.getSeasonFromLevel(level);
      modifiedProperties = scannedBlock.properties;
      if (
        season === "spring" &&
        scannedBlock.properties.get("has_cherries") &&
        scannedBlock.properties.get("has_cherries").toString() === "true"
      ) {
        fruitItem = "vinery:cherry";
        fruitItem.count = rnd(0, 4);
        success = true;
        modifiedProperties.can_grow_cherries = false;
        modifiedProperties.has_cherries = false;
        scannedBlock.set(scannedBlock.id, modifiedProperties);
      } else if (
        season === "autumn" &&
        scannedBlock.properties.get("has_apples") &&
        scannedBlock.properties.get("has_apples").toString() === "true"
      ) {
        fruitItem = "minecraft:apple";
        fruitItem.count = rnd(0, 4);
        success = true;
        modifiedProperties.can_grow_apples = false;
        modifiedProperties.has_apples = false;
        scannedBlock.set(scannedBlock.id, modifiedProperties);
      }
    } else if (
      fruitTreeBlocks.includes(scannedBlock.id) &&
      scannedBlock.properties.get("age") == 7
    ) {
      fruitType = String(scannedBlock.id.split(":")[1]);
      fruitCount = 1;
      success = true;
      if (dropThree.includes(scannedBlock.id)) fruitCount = 3;
      if (scannedBlock.id === "pamhc2trees:pambanana") {
        if (player && player.stages.has("banana_karenina")) fruitCount *= 2;
        else if (Math.random() <= 0.001) scannedBlock.popItem("society:banana_karenina");
      }

      if (dropModified.includes(scannedBlock.id)) {
        fruitItem = Item.of(
          scannedBlock.id === "pamhc2trees:pampassionfruit"
            ? "atmospheric:passion_fruit"
            : "atmospheric:orange"
        );
      } else if (dropFourModified.includes(scannedBlock.id)) {
        fruitCount = 4;
        fruitItem = Item.of(
          scannedBlock.id === "pamhc2trees:pamcherry" ? "vinery:cherry" : "minecraft:apple"
        );
      } else {
        fruitItem = Item.of(`pamhc2trees:${fruitType.substring(3, fruitType.length)}item`);
      }
      fruitItem.count = player && player.stages.has("tree_whisperer") ? fruitCount + 2 : fruitCount;
      scannedBlock.set(scannedBlock.id, {
        waterlogged: scannedBlock.properties.get("waterlogged") || "false",
        age: "0",
      });
    }
    if (success) {
      fruitDrop.x = scannedBlock.x;
      fruitDrop.y = scannedBlock.y;
      fruitDrop.z = scannedBlock.z;
      fruitDrop.item = fruitItem;

      fruitDrop.spawn();
      experienceMult++;
      level.spawnParticles(
        "mysticaloaktree:wind",
        true,
        scannedBlock.x,
        scannedBlock.y + 0.5,
        scannedBlock.z,
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        7,
        0.05
      );
      server.runCommandSilent(
        `playsound minecraft:block.grass.break block @a ${scannedBlock.x} ${scannedBlock.y} ${scannedBlock.z} 0.5`
      );
    }
  }
  if (returnExperience) return experienceMult;
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:drum_cornucopia")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .soundType("wood")
    .defaultCutout()
    .model("society:block/kubejs/drum_cornucopia")
    .box(3, 0, 3, 13, 14, 13)
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.growth_obelisk.description").gray());
      item.tooltip(Text.translatable("tooltip.society.area", `7x1x7`).green());
      item.modelJson({
        parent: "society:block/kubejs/drum_cornucopia",
      });
    })
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(artMachineTickRate, 0, (e) => {
        const { level, block } = e;
        let dayTime = level.dayTime();
        let morningModulo = dayTime % 24000;
        if (
          morningModulo >= drumCornucopiaProgTime &&
          morningModulo < drumCornucopiaProgTime + artMachineTickRate
        ) {
          global.handleCornucopia(level.server, level, block.getPos())
        }
      })
    })
});
