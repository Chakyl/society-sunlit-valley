console.info("[SOCIETY] addAltarRecipes.js loaded");

ServerEvents.recipes((e) => {
    e.shaped("sunlit_cobblemon:red_orb", [
    "GCG", 
    "SPS",
    "GCG"
  ], {
    P: "sunlit_cobblemon:fire_pledge",
    G: "sunlit_cobblemon:pristine_ground_gem",
    S: "society:prismatic_shard",
    C: "numismatics:ancient_coin"
  })

  e.shaped("sunlit_cobblemon:blue_orb", [
    "GCG", 
    "SPS",
    "GCG"
  ], {
    P: "sunlit_cobblemon:water_pledge",
    G: "sunlit_cobblemon:pristine_water_gem",
    S: "society:prismatic_shard",
    C: "numismatics:ancient_coin"
  })

  e.shaped("sunlit_cobblemon:biodome_altar", [
    " A ", 
    "WSG",
    "LLL"
  ], {
    S: "society:prismatic_shard",
    L: "atmospheric:grimwood_log",
    W: "sunlit_cobblemon:pristine_water_gem",
    G: "sunlit_cobblemon:pristine_ground_gem",
    A: "sunlit_cobblemon:sun_raid_statue"
  })})