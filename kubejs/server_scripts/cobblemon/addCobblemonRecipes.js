console.info("[SOCIETY-S-COBBLEMON] addCobblemonRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("sunlit_cobblemon:uncharged_battery", [" zr", "zrz", "rz "], {
    z: "create:zinc_ingot",
    r: "create:rose_quartz",
  });
  e.shaped("cobblemon:ability_capsule", ["gsf"], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "society:production_science_pack",
  });
  e.shaped("cobblemon:ability_patch", [" g ", "fsf", " g "], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "numismatics:prismatic_coin",
  });
  e.shaped("cobble_workers:gardening_station", ["fff", "fpf", "f f"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
  });
  e.shaped("cobble_workers:craft_station", ["fff", "bpb", "b b"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
    b: "minecraft:bricks",
  });
  e.shaped("cobble_workers:mystery_mine", ["efe", "fpf", "efe"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
    e: "society:earth_crystal",
  });
});
