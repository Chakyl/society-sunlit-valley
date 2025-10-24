console.info("[SOCIETY] registerCobblemonItems.js loaded");

StartupEvents.registry("item", (e) => {
  e.create("sunlit_cobblemon:tm_pack")
    .texture("sunlit_cobblemon:item/tm_pack")
    .displayName("TM Pack");
  e.create("sunlit_cobblemon:greater_tm_pack")
    .texture("sunlit_cobblemon:item/greater_tm_pack")
    .displayName("Greater TM Pack");
  e.create("sunlit_cobblemon:prismatic_tm_pack")
    .texture("sunlit_cobblemon:item/prismatic_tm_pack")
    .displayName("Prismatic TM Pack");

  e.create("sunlit_cobblemon:poke_bobber")
    .texture("sunlit_cobblemon:item/poke_bobber")
    .maxStackSize(1)
    .displayName("Poké Bobber");
  e.create("sunlit_cobblemon:great_poke_bobber")
    .texture("sunlit_cobblemon:item/great_poke_bobber")
    .maxStackSize(1)
    .displayName("Great Poké Bobber");
  e.create("sunlit_cobblemon:ultra_poke_bobber")
    .texture("sunlit_cobblemon:item/ultra_poke_bobber")
    .maxStackSize(1)
    .displayName("Ultra Poké Bobber");
  e.create("sunlit_cobblemon:master_poke_bobber")
    .texture("sunlit_cobblemon:item/master_poke_bobber")
    .maxStackSize(1)
    .displayName("Master Poké Bobber");

  e.create("sunlit_cobblemon:berry_capsule").texture("sunlit_cobblemon:item/berry_capsule");
  e.create("sunlit_cobblemon:uncharged_battery").texture("sunlit_cobblemon:item/uncharged_battery");
  e.create("sunlit_cobblemon:poke_genes").texture("sunlit_cobblemon:item/poke_genes");
  e.create("sunlit_cobblemon:fairy_heart").texture("sunlit_cobblemon:item/fairy_heart");

  global.cobblemonPreserves.forEach((jar) => {
    if (jar.item.includes("sunlit_cobblemon")) {
      e.create(`sunlit_cobblemon:${jar.item.split(":")[1]}`)
        .texture(`sunlit_cobblemon:item/preserves/${jar.item.split(":")[1]}`)
        .food((food) => {
          food.hunger(5);
          food.saturation(1);
          food.fastToEat(true);
          food.effect("farm_and_charm:grandmas_blessing", 6000, 1, 1.0);
        });
    }
  });
});
