console.info("[SOCIETY-S-COBBLEMON] addCobblemonRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shapeless("sunlit_cobblemon:tm_pack", ["9x #sunlit_cobblemon:tr"]);
  e.shapeless("sunlit_cobblemon:greater_tm_pack", ["9x #sunlit_cobblemon:tm"]);
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
  e.shapeless("sunlit_cobblemon:berry_smoothie", [
    "cobblemon:oran_berry",
    "society:sap",
  ]);
  e.shapeless("sunlit_cobblemon:super_berry_smoothie", [
    "cobblemon:potion",
    "minecraft:honey_bottle",
    "cobblemon:energy_root",
  ]);
  e.shapeless("sunlit_cobblemon:hyper_berry_smoothie", [
    "cobblemon:super_potion",
    "society:maple_syrup",
    "cobblemon:sitrus_berry",
  ]);
  e.shapeless("sunlit_cobblemon:max_berry_smoothie", [
    "cobblemon:hyper_potion",
    "species:ichor_bottle",
    "cobblemon:vivichoke",
  ]);
  // Legendaries
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"fire"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:blazing_stone",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:ember_crystal_cluster",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"electric"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:endless_battery",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:amulet_of_light",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"rock"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:tabula_rasa",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:source_gem",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"ice"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:prismatic_ice",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:wheel_of_adaptation",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"steel"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:unbreakable_cog",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:steamy_gadget",
    },
  );

  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"psychic"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:poke_genes",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:production_science_pack",
    },
  );
    e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"flying"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:atmospheric_vial",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:production_science_pack",
    },
  );
});
