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
    let hoe = hoeTiers.get(`${item.id}`);
    if (hoe && player.crouching) {
      const { x, y, z } = block;
      let scannedBlock;
      if (hoe < 1) {
        if (level.getBlock(block.pos).hasTag("minecraft:dirt")) {
          level.getBlock(block.pos).set("minecraft:farmland");
        }
        const nextPos = global.getFacing(player.facing, block.pos);
        if (level.getBlock(nextPos).hasTag("minecraft:dirt")) {
          level.getBlock(nextPos).set("minecraft:farmland");
        }
        if (hoe > 0.2) {
          level.getBlock(global.getFacing(player.facing, nextPos)).set("minecraft:farmland");
        }
      } else {
        for (let pos of BlockPos.betweenClosed(new BlockPos(x - hoe, y, z - hoe), [
          x + hoe,
          y,
          z + hoe,
        ])) {
          scannedBlock = level.getBlock(pos);
          if (
            scannedBlock.hasTag("minecraft:dirt") &&
            level.getBlock(pos.above()).id == "minecraft:air"
          ) {
            level
              .getBlock(pos)
              .set(
                item.id == "aquaculture:neptunium_hoe"
                  ? "dew_drop_farmland_growth:hydrating_farmland"
                  : "minecraft:farmland"
              );
          }
        }
      }
      global.addItemCooldown(player, item, 40);
    }
  }
);
