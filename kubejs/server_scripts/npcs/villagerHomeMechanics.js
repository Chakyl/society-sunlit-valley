console.info("[SOCIETY] villagerMechanics.js loaded");

const npcMap = new Map([
  ["carpenter", "humanoid/carpenter"],
  ["market", "humanoid/market"],
  ["blacksmith", "humanoid/blacksmith"],
  ["shepherd", "humanoid_slim/shepherd"],
  ["fisher", "humanoid_slim/fisher"],
  ["banker", "humanoid_slim/banker"]
]);
const getBoundNpc = (level, block, boundNpc) => {
  let nearbyNPCs = level.getLevel()
    .getServer()
    .getEntities()
    .filter((entityType) => entityType.type === "easy_npc:humanoid" || entityType.type === "easy_npc:humanoid_slim");
  let foundNpc = -1;
  nearbyNPCs.forEach((e) => {
    if (e.getUuid().toString() === boundNpc) {
      foundNpc = e;
    }
  });
  return foundNpc;
};

BlockEvents.placed("society:villager_home", (e) => {
  const { player, block, level, server } = e;
  if (player.isFake()) e.cancel();
  const homeNbt = player.getHeldItem("main_hand").getNbt();
  let nbt = block.getEntityData();
  const { x, y, z } = block;
  if (homeNbt) {
    let villagerType = homeNbt.getString("type");
    let day = global.getDay(level);
    if (!player.persistentData.npcData) player.persistentData.npcData = {}
    let npcData = player.persistentData.npcData[villagerType];
    if (!npcData) {
      player.persistentData.npcData[villagerType] = {
        friendship: -1,
        dayLastChatted: -1,
        dayLastGifted: -4,
        dayLastPlaced: -10,
        maxGifted: false,
      }
      npcData = player.persistentData.npcData[villagerType];
    }
    if (!npcData.dayLastPlaced) npcData.dayLastPlaced = -10
    if (day > Number(npcData.dayLastPlaced) + 10 || Number(npcData.dayLastPlaced) - day > 1) {
      let nearbyNPCs = level
        .getEntitiesWithin(AABB.ofBlock(block).inflate(3))
        .filter((entityType) => entityType.type === "easy_npc:humanoid" || entityType.type === "easy_npc:humanoid_slim");

      if (player && nearbyNPCs.length == 0) {
        server.runCommandSilent(
          `easy_npc preset import_new custom easy_npc:preset/${npcMap.get(
            String(villagerType)
          )}.npc.nbt ${x} ${y + 0.25} ${z}`
        );
        nearbyNPCs = level
          .getEntitiesWithin(AABB.ofBlock(block).inflate(2))
          .filter((entityType) => entityType.type === "easy_npc:humanoid" || entityType.type === "easy_npc:humanoid_slim");

        level.spawnParticles(
          "ribbits:spell",
          true,
          nearbyNPCs[0].x,
          nearbyNPCs[0].y + 1.5,
          nearbyNPCs[0].z,
          0.2 * rnd(1, 2),
          0.2 * rnd(1, 2),
          0.2 * rnd(1, 2),
          20,
          0.05
        );
        server.runCommandSilent(
          `playsound botania:starcaller block @a ${player.x} ${player.y} ${player.z}`
        );
        server.runCommandSilent(`easy_npc navigation set home ${nearbyNPCs[0].getUuid()} ${x} ${y + 0.25} ${z}`)
        nbt.merge({
          data: {
            type: villagerType,
            boundNpc: nearbyNPCs[0].getUuid().toString(),
            placer: player.getUuid().toString(),
          },
        });
        block.setEntityData(nbt);
        player.tell(
          Text.translatable(
            "society.villager_home.moved_in",
            Text.translatable(`dialog.npc.${villagerType}.name`).gold()
          )
        );
        npcData.dayLastPlaced = day
      } else {
        player.tell(Text.translatable("society.villager_home.too_close").red());
        player.inventoryMenu.broadcastFullState();
        e.cancel();
      }
    } else {
      player.tell(Text.translatable("society.villager_home.recently_moved_in").red());
      player.inventoryMenu.broadcastFullState();
      e.cancel();
    }
  } else {
    player.tell(Text.translatable("society.villager_home.error").red());
    player.inventoryMenu.broadcastFullState();
    e.cancel();
  }
});
BlockEvents.broken("society:villager_home", (e) => {
  const { block, player, level, server } = e;
  let nbt = block.getEntityData();
  const { type, placer, boundNpc } = nbt.data;
  if (player.getUuid().toString() !== placer && placer != -1) {
    player.tell(
      Text.translatable(
        "society.villager_home.not_invited_by_you",
        Text.translatable(`dialog.npc.${type}.name`).gold()
      ).red()
    );
    e.cancel();
  }

  let foundNpc = getBoundNpc(level, block, boundNpc);
  if (foundNpc != -1) {
    foundNpc.setRemoved("unloaded_to_chunk");
    level.spawnParticles(
      "windswept:feather_cloak",
      true,
      foundNpc.x,
      foundNpc.y + 1.5,
      foundNpc.z,
      0.2 * rnd(1, 2),
      0.2 * rnd(1, 2),
      0.2 * rnd(1, 2),
      20,
      0.05
    );
    server.runCommandSilent(
      `playsound windswept:block.pinecone.note block @a ${player.x} ${player.y} ${player.z}`
    );
    player.tell(
      Text.translatable(
        "society.villager_home.moved_out",
        Text.translatable(`dialog.npc.${type}.name`).gold()
      )
    );
    block.popItem(Item.of(block.id, `{type:${type}}`));
    player.persistentData.npcData[type].dayLastPlaced = -10
  } else {
    if (!(type == undefined || placer == undefined || boundNpc == undefined)) {
      if (!player.isCreative()) {
        e.cancel();
      } else {
        player.tell("Unbound villager to home! If the villager still exists, run /easy_npc delete @e")
      }
    }
  }
});
