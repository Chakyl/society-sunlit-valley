console.info("[SOCIETY] addCommandAttributesOnLogin.js loaded");

PlayerEvents.loggedIn((e) => {
  const { server, player } = e;
  server.scheduleInTicks(0, () => {
    server.scheduleInTicks(80, () => {
      global.addAttributesFromStages(player, server);
    });
  });
});
