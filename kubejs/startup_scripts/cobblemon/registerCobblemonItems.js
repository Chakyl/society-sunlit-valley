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
