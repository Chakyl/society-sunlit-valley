console.info("[SOCIETY] slimeContainProtect.js loaded");

BlockEvents.rightClicked("splendid_slimes:slime_incubator", (e) => {
  const { block, player, hand, item, server } = e;
  if (player.isFake() || player.isCrouching()) return;
  if (hand == "OFF_HAND") return;
  const heldItem = item.getId();
  const facing = block.getProperties().facing;
  if (block.properties.get("working") === "true") return;

  if (Math.random() < 0.15 && heldItem == "splendid_slimes:slime_heart") {
    if (!player.stages.has("slime_contain_protect")) {
      block.popItemFromFace("society:slime_contain_protect", facing);
      server.runCommandSilent(
        `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
      );
    } else {
      block.popItemFromFace("splendid_slimes:slime_ticket", facing);
      server.runCommandSilent(
        `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
      );
    }
  }
});
