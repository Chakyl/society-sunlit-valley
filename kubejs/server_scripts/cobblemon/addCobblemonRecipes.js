console.info("[SOCIETY] addCobblemonRecipes.js loaded");

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
});
