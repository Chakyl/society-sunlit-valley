console.info("[SOCIETY] addHammerRecipes.js loaded");

ServerEvents.recipes((e) => {
  const materials = ["stone", "iron", "gold", "diamond", "netherite"];
  const cores = ["", "impact"];

  materials.forEach((material, materialIndex) => {
    // Base hammer recipes
    e.shaped(`justhammers:${material}_hammer`, ["BcB", "BsB", " s "], {
      B: material == "stone" ? "minecraft:stone" : `minecraft:${material}_block`,
      s: "minecraft:stick",
      c: "justhammers:small_core",
    });
    // Base upgrade material
    if (material !== "netherite") {
      e.shaped(`justhammers:${materials[materialIndex + 1]}_hammer`, [" B ", "BhB", " B "], {
        B: `minecraft:${materials[materialIndex + 1]}_block`,
        h: `justhammers:${material}_hammer`,
      });
    }
    cores.forEach((core, coreIndex) => {
      if (coreIndex > 0 && material !== "netherite") {
        // Upgrading materials at each core
        e.shaped(
          `justhammers:${materials[materialIndex + 1]}_${core}_hammer`,
          [" B ", "BhB", " B "],
          {
            B: `minecraft:${materials[materialIndex + 1]}_block`,
            h: `justhammers:${material}_${core}_hammer`,
          }
        );
      }
      if (coreIndex > 0) {
        // Upgrading core recipes
        e.shapeless(`justhammers:${material}_${core}_hammer`, [
          `justhammers:${material}_hammer`,
          `justhammers:${core}_core`,
        ]);
      }
    });
  });
});
