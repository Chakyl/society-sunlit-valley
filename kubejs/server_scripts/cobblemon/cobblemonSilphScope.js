console.info("[SOCIETY] cobblemonSilphScope.js loaded");

const $TargetingConditions = Java.loadClass(
  "net.minecraft.world.entity.ai.targeting.TargetingConditions"
);
/*
  Credits: Phoenix Strange Journey (used with permission and modified)
  Targeting condition that always returns true. We only care that there's a 
  player nearby, which is handled by calling getNearbyPlayers, we couldn't
  care less if they're in creative or invulnerable or the game is in peaceful,
  which most readily accessible selectors fail against.
*/
const PLAYER_CONDITION = $TargetingConditions
  .forNonCombat()
  .selector((entity) => {
    return true;
  });

EntityEvents.spawned((e) => {
  const { entity, level } = e;
  // Cobblemon contingent upon a nearby playing wearing a Silph Scope.
  // Second check only surpresses Wild pokemon spawns, leaving Pasture Blocks
  // trainers pokemon, and player pokemon in-tact.
  if (
    entity.type == "cobblemon:pokemon" &&
    entity.getNbt().Pokemon &&
    entity.getNbt().Pokemon.PokemonOriginalTrainerType == "NONE" &&
    !entity.getNbt().Pokemon.PokemonData.toString().includes("uncatchable")
  ) {
    let area = entity.getBoundingBox().inflate(64);
    let spawnPokemon = false;
    let players = level.getNearbyPlayers(PLAYER_CONDITION, null, area);
    let pokemon = entity.getPokemon();
    let shiny = pokemon.getShiny();
    players.forEach((p) => {
      if (global.hasScope(p)) {
        spawnPokemon = true;
        if (global.announceShinies && shiny) p.tell(Text.translatable("tooltip.sunlit_cobblemon.nearby_shiny", pokemon.getSpecies().getName()).green())
      }
    });

    if (!spawnPokemon) {
      e.cancel();
    }
  }
});

ItemEvents.firstLeftClicked("sunlit_cobblemon:silph_scope", (e) => {
  const { item, server, player } = e;
  server.runCommandSilent(
    `playsound refurbished_furniture:ui.paddle_ball.retro_click block @a ${player.x} ${player.y} ${player.z}`,
  );
  let newNbt = item.getNbt() || { surprise: true };
  const selectedState = !newNbt.surprise
  global.setItemNbt(item, "surprise", selectedState)
  const surpriseToggledText = Text.translatable("sunlit_cobblemon.silph_scope.surprise_toggled", selectedState);
  const surpriseToggledTextBG = Text.translatable("sunlit_cobblemon.silph_scope.surprise_toggled", selectedState).black();
  global.renderUiText(
    player,
    server,
    {
      pokeRadar: {
        type: "text",
        x: 0,
        y: -90,
        text: `${surpriseToggledText.toJson()}`,
        color: "#AAAAAA",
        alignX: "center",
        alignY: "bottom",
      },
      pokeRadarShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -89,
        text: `${surpriseToggledTextBG.toJson()}`,
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
    },
    ["silph_scope"],
  );
  global.addItemCooldown(player, item, 10);
});
