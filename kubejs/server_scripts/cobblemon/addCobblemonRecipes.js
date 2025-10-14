console.info("[SOCIETY] addCobblemonRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("sunlit_cobblemon:uncharged_battery", [" zr", "zrz", "rz "], {
    z: "create:zinc_ingot",
    r: "create:rose_quartz"
  });
});
