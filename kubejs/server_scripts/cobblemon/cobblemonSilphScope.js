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
const PLAYER_CONDITION = $TargetingConditions.forNonCombat().selector((entity) => {
  return true;
});

const hasScope = (entity) => {
  return entity.nbt.ForgeCaps["curios:inventory"]
    .toString()
    .includes("sunlit_cobblemon:silph_scope");
};
EntityEvents.spawned((e) => {
  const { entity, level } = e;
  // Cobblemon contingent upon a nearby playing wearing a Silph Scope.
  // Second check only surpresses Wild pokemon spawns, leaving Pasture Blocks
  // trainers pokemon, and player pokemon in-tact. 
  if (
    entity.type == "cobblemon:pokemon" &&
    entity.getNbt().Pokemon.PokemonOriginalTrainerType == "NONE" &&
    !entity.getNbt().Pokemon.PokemonData.includes("uncatchable")
  ) {
    let area = entity.getBoundingBox().inflate(64);
    let spawnPokemon = false;
    let players = level.getNearbyPlayers(PLAYER_CONDITION, null, area);
    players.forEach((p) => {
      if (hasScope(p)) {
        spawnPokemon = true;
      }
    });

    if (!spawnPokemon) {
      e.cancel();
    }
  }
});
