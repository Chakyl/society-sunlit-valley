// global.carpetTick = (entity) => {
//   let nearbyEntities = entity.level
//     .getEntitiesWithin(entity.getBoundingBox().inflate(3))
//     .filter((entity) => entity.isPlayer());
//   if (nearbyEntities.length > 0) {
//     let player = nearbyEntities[0];
//     if (player.isCrouching()) {
//       entity.setRemoved("unloaded_to_chunk");
//       Utils.getServer().runCommandSilent(
//         `playsound minecraft:block.wool.break block @a ${player.x} ${player.y} ${player.z}`
//       );
//       player.give(Item.of("whimsy_deco:paw_carpet"));
//     }
//   }
// };

// StartupEvents.registry("entity_type", (e) => {
//   e.create("whimsy_deco:paw_carpet_entity", "entityjs:mob")
//     .isPushable(false)
//     .onHurt((context) => {
//       context.entity.setRemoved("unloaded_to_chunk");
//     })
//     .translationKey("entity.whimsy_deco.paw_carpet")
//     .sized(0.1, 0.1)
//     .isPushable(false)
//     .canBeCollidedWith((entity) => false)
//     .canCollideWith((entity) => false)
//     .setDeathSound("minecraft:block.wool.break")
//     .isImmobile((entity) => true)
//     .tick((entity) => {
//       if (entity.age % 80 != 0) return;
//       global.carpetTick(entity);
//     });
// });
