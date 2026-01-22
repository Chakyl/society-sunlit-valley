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
  const { placer, type, spawned } = nbt.data;
  const { x, y, z } = block;
  if (homeNbt) {
    let villagerType = homeNbt.getString("type");


    let nearbyNPCs = level
      .getEntitiesWithin(AABB.ofBlock(block).inflate(4))
      .filter((entityType) => entityType.type === "easy_npc:humanoid" || entityType.type === "easy_npc:humanoid_slim");

    if (player && nearbyNPCs.length == 0) {
      server.runCommandSilent(
        `easy_npc preset import_new custom easy_npc:preset/${npcMap.get(
          String(villagerType)
        )}.npc.nbt ${x} ${y + 0.25} ${z}`
      );
      nearbyNPCs = level
        .getEntitiesWithin(AABB.ofBlock(block).inflate(4))
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
      server.runCommandSilent(`easy_npc navigation set home ${nearbyNPCs[0].getUuid()} ${x} ${y + 0.25} ${z}}`)
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
    } else {
      player.tell("This home is too close to another NPC!")
      e.player.inventoryMenu.broadcastFullState();
      e.cancel();
    }
  } else {
    player.tell("Something went wrong!")
    e.player.inventoryMenu.broadcastFullState();
    e.cancel();
  }
});
BlockEvents.broken("society:villager_home", (e) => {
  const { block, player, level, server } = e;
  let nbt = block.getEntityData();
  const { type, placer, boundNpc } = nbt.data;
  console.log(placer);
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
  console.log(foundNpc);
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
  } else {
    e.cancel();
  }
});

// BlockEvents.broken("whimsy_deco:sunlit_singing_frog", (e) => {
//   const { block } = e;
//   let nbt = e.block.getEntityData();
//   const { type, quest_id, affection, quality, animal } = nbt.data;
//   let baseItem = Item.of(
//     block.id,
//     `{quality_food:{quality:${quality}},type:${type},quest_id:${quest_id},affection:${affection}}`
//   );
//   block.popItem(
//     animal
//       ? Item.of(
//           block.id,
//           global.getPlushieItemNbt(
//             baseItem.getNbt(),
//             animal.type,
//             animal.customName,
//             animal,
//             animal
//           )
//         )
//       : baseItem
//   );
// });

// BlockEvents.rightClicked("whimsy_deco:gatcha_machine", (e) => {
//   const { item, player, block, hand, server } = e;
//   if (hand == "OFF_HAND") return;
//   if (hand == "MAIN_HAND") {
//     if (item.id.equals("numismatics:sun")) {
//       item.count -= 1;
//       block.popItemFromFace(
//         "society:plushie_capsule",
//         block.properties.get("facing")
//       );
//       server.runCommandSilent(
//         `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
//       );
//       global.addItemCooldown(player, item.id, 1);
//     } else {
//       player.tell(
//         Text.translatable(
//           "tooltip.society.gatcha_machine",
//           Text.translatable("item.numismatics.sun").gold()
//         )
//       );
//     }
//   }
// });
