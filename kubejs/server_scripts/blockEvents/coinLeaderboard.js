BlockEvents.placed('society:coin_leaderboard', event => {
  const {player, server} = event;
  const lbLimitList = server.persistentData.lbLimitList ?? {};

  if (lbLimitList[player.uuid] && lbLimitList[player.uuid] >= 10 && !player.op) {
    player.tell(Text.translatable("block.society.coin_leaderboard.maxplacement").red());
    event.cancel();
  } else if (!lbLimitList[player.uuid]) {
    lbLimitList[player.uuid] = 0;
  };
  lbLimitList[player.uuid] += 1;
  server.persistentData.lbLimitList = lbLimitList;
  const be = event.level.getBlockEntity(event.block.pos);
  if (be) {
    be.persistentData.Owner = String(player.uuid);
  };
});

BlockEvents.broken('society:coin_leaderboard', event => {
    const be = event.level.getBlockEntity(event.block.pos);
    if (!be) return;
    const owner = be.persistentData.Owner;
    if (!owner) return;
    const lbLimitList = event.server.persistentData.lbLimitList ?? {};
    if (lbLimitList[owner]) {
        lbLimitList[owner]--;
        if (lbLimitList[owner] <= 0) delete lbLimitList[owner];
    };
    event.server.persistentData.lbLimitList = lbLimitList;
});