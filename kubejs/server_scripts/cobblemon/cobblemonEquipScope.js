console.info("[SOCIETY] cobblemonEquipScope.js loaded");
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
ItemEvents.rightClicked("sunlit_cobblemon:silph_scope", (e) => {
  const { server, player, item } = e;
  $CuriosApi.getCuriosInventory(player).ifPresent((curiosInventory) => {
    let slots = curiosInventory["findCurios(java.lang.String[])"]("face");
    if (slots && slots[0] == undefined) {
      server.runCommandSilent(
        `curios replace face 0 ${player.username} with sunlit_cobblemon:silph_scope`
      );
      server.runCommandSilent(
        `playsound cobblemon:pc.on block @a ${player.x} ${player.y} ${player.z}`
      );
      server.runCommandSilent(
        `playsound cobblemon:fossil_machine.retrieve_pokemon block @a ${player.x} ${player.y} ${player.z}`
      );
      item.shrink(1)
    } else player.tell(Text.red("You already have something on your face..."));
  });
});
