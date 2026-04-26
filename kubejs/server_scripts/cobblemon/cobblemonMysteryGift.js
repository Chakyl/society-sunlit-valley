console.info("[SOCIETY-S-COBBLEMON] cobblemonMysteryGift.js loaded");

let randomGifts = ["genesect", "diancie", "hoopa", "meltan", "zarude", "manaphy"]
ItemEvents.rightClicked("sunlit_cobblemon:mystery_gift", (e) => {
  const { server, player, item, level } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  let randomGift = randomGifts[Math.floor(Math.random() * randomGifts.length)];
  let itemNbt = item.getNbt() || { pokemon: randomGift, ot: "Chakyl" };
  let { ot, pokemon } = itemNbt;
  let resolvedPokemon = pokemon == null || pokemon == "random" ?  randomGift : pokemon;
  let resolvedOT = ot == null  || ot === "Chakyl" ? "Chakyl" : Component.translatable(`dialog.npc.${ot}.name`).getString()
  server.runCommandSilent(
    `playsound advancementplaques:ui.toast.goal_complete block @a ${player.x} ${player.y} ${player.z}`,
  );
  if (!player.isCreative()) item.count--;
  global.addItemCooldown(player, "sunlit_cobblemon:gachamon_capsule", 2);
  level.spawnParticles(
    "supplementaries:confetti",
    true,
    player.x,
    player.y + 1.5,
    player.z,
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    25,
    0.001
  );
  player.tell(Component.translatable("sunlit_cobblemon.mystery_gift", Component.translatable(`cobblemon.species.${resolvedPokemon}.name`)).green())
  server.runCommandSilent(
    `pokegiveother ${player.username} ${resolvedPokemon} originaltrainer=${resolvedOT} ottype=Player pokeball=cherish_ball`
  );
});

