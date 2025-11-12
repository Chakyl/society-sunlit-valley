// BlockEvents.rightClicked((e) => {
//   const { item, block, hand, server, player, level } = e;
//   if (player.getHeldItem("main_hand") == "whimsy_deco:paw_carpet" && hand != "OFF_HAND") {
//     let carpet = level.createEntity("whimsy_deco:paw_carpet_entity");
//     carpet.setPos(block.getX(), block.getY() + 1, block.getZ());

//     let newNbt = carpet.getNbt();
//     newNbt.Rotation = [
//       NBT.f(global.rotationFromFacing(player.getHorizontalFacing())),
//       NBT.f(0),
//     ];
//     newNbt.CanUpdate = 0;
//     newNbt.NoGravity = 0;
//     carpet.setNbt(newNbt);
//     carpet.spawn();
//     server.runCommandSilent(
//       `playsound minecraft:block.wool.place block @a ${block.x} ${block.y} ${block.z}`
//     );
//     if (!player.isCreative()) item.shrink(1);
//   }
// });
