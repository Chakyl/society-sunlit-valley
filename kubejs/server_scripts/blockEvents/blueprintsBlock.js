console.info("[SOCIETY] blueprintsBlock.js loaded");

BlockEvents.rightClicked("furniture:blueprints", (e) => {
  const { player, server, block } = e;
  server.runCommandSilent(
    `playsound minecraft:item.book.page_turn block @a ${block.x} ${block.y} ${block.z}`
  );
  server.runCommandSilent(
    `dialog ${player.username} show ${player.username} blueprints_choice_dialog_prompt`
  );
  e.cancel()
});
