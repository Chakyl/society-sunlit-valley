console.info("[SOCIETY] hoeAoe.js loaded");

const hoeTiers = new Map([
  ["minecraft:stone_hoe", 0.2],
  ["minecraft:iron_hoe", 0.5],
  ["minecraft:golden_hoe", 1],
  ["minecraft:diamond_hoe", 2],
  ["oreganized:electrum_hoe", 3],
  ["minecraft:netherite_hoe", 3],
  ["aquaculture:neptunium_hoe", 3],
  ["botania:elementium_hoe", 3],
  ["botania:manasteel_hoe", 2],
]);

const hoeFarmland = new Map([
  ["aquaculture:neptunium_hoe", "dew_drop_farmland_growth:hydrating_farmland"],
  ["botania:elementium_hoe", "dew_drop_farmland_growth:hydrating_farmland"],
]);

const tryTill = (level, player, pos, farmland) => {
  if (!level.getBlock(pos).hasTag("minecraft:dirt")) return false;
  const above = level.getBlock(pos.above()).id;
  if (
    above !== "minecraft:air" &&
    above !== "minecraft:water" &&
    above !== "minecraft:flowing_water"
  )
    return false;

  level.getBlock(pos).set(farmland || "minecraft:farmland");
  player.swing();
  player.server.runCommandSilent(
    `playsound minecraft:item.hoe.till block @a ${player.x} ${player.y} ${player.z}`
  );
  return true;
};

BlockEvents.rightClicked(
  [
    "minecraft:dirt",
    "minecraft:rooted_dirt",
    "minecraft:coarse_dirt",
    "minecraft:dirt_path",
    "minecraft:grass_block",
  ],
  (e) => {
    const { item, block, player, level } = e;
    const id = `${item.id}`;
    const hoe = hoeTiers.get(id);
    if (!hoe) return;

    const farmland = hoeFarmland.get(id);
    if (!player.crouching) {
      tryTill(level, player, block.pos, farmland);
      e.cancel();
      return;
    }

    if (hoe < 1) {
      const distance = hoe > 0.2 ? 3 : 2;
      let pos = block.pos;
      for (let i = 0; i < distance; i++) {
        tryTill(level, player, pos, farmland);
        pos = global.getFacing(player.facing, pos);
      }
    } else {
      const { x, y, z } = block;
      for (let pos of BlockPos.betweenClosed(
        new BlockPos(x - hoe, y, z - hoe),
        [x + hoe, y, z + hoe]
      )) {
        tryTill(level, player, pos, farmland);
      }
    }
    global.addItemCooldown(player, item, 40);
  }
);