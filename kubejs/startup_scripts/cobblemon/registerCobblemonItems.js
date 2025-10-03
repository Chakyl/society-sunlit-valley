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
});
