console.info("[SOCIETY-S-COBBLEMON] registerCobblemonItems.js loaded");

StartupEvents.registry("item", (e) => {
  e.create("sunlit_cobblemon:silph_scope")
    .texture("sunlit_cobblemon:item/silph_scope")
    .maxStackSize(1);

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
  // Smoothies
  e.create("sunlit_cobblemon:berry_smoothie")
    .texture("sunlit_cobblemon:item/berry_smoothie")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.fastToEat(true);
    })
    .useAnimation("drink");
  e.create("sunlit_cobblemon:super_berry_smoothie")
    .texture("sunlit_cobblemon:item/super_berry_smoothie")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.fastToEat(true);
    })
    .useAnimation("drink");
  e.create("sunlit_cobblemon:hyper_berry_smoothie")
    .texture("sunlit_cobblemon:item/hyper_berry_smoothie")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.fastToEat(true);
    })
    .useAnimation("drink");
  e.create("sunlit_cobblemon:max_berry_smoothie")
    .texture("sunlit_cobblemon:item/max_berry_smoothie")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.fastToEat(true);
    })
    .useAnimation("drink");
  // Misc

  // e.create("sunlit_cobblemon:poke_radar")
  //   .texture("society:item/poke_radar")
  //   .displayName("Poké Radar");
  e.create("sunlit_cobblemon:berry_capsule").texture(
    "sunlit_cobblemon:item/berry_capsule",
  );
  e.create("sunlit_cobblemon:gachamon_capsule").texture(
    "sunlit_cobblemon:item/gachamon_capsule",
  );
  e.create("sunlit_cobblemon:uncharged_battery").texture(
    "sunlit_cobblemon:item/uncharged_battery",
  );
  e.create("sunlit_cobblemon:poke_genes")
    .texture("sunlit_cobblemon:item/poke_genes")
    .displayName("Poké Genes");
  e.create("sunlit_cobblemon:fairy_heart").texture(
    "sunlit_cobblemon:item/fairy_heart",
  );
  e.create("sunlit_cobblemon:star_pixie").texture(
    "sunlit_cobblemon:item/star_pixie",
  );
  e.create("sunlit_cobblemon:blazing_stone");
  e.create("sunlit_cobblemon:endless_battery");
  e.create("sunlit_cobblemon:tabula_rasa");
  e.create("sunlit_cobblemon:prismatic_ice");
  e.create("sunlit_cobblemon:atmospheric_vial");
  e.create("sunlit_cobblemon:unbreakable_cog");

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
  const cobblemonDehydratorMapping = [
    { item: "sunlit_cobblemon:dried_common_cobbleberry", hex: 0xdd5e8c },
    { item: "sunlit_cobblemon:dried_uncommon_cobbleberry", hex: 0xc20e34 },
    { item: "sunlit_cobblemon:dried_rare_cobbleberry", hex: 0x474976 },
    { item: "sunlit_cobblemon:dried_legendary_cobbleberry", hex: 0xfcc112 },
  ];
  global.cobblemonDehydrated.forEach((item) => {
    const itemHex = cobblemonDehydratorMapping.find(
      (val) => val.item === item.item,
    )?.hex;
    e.create(item.item)
      .texture(`society:item/dried_fruit`)
      .color(0, itemHex)
      .food((food) => {
        food.hunger(9);
        food.saturation(0.5);
        food.fastToEat(true);
      });
  });
  // Pristine gems
  global.cobbleTypeGems.forEach((gem) => {
    e.create(`sunlit_cobblemon:pristine_${gem.item.path}`)
      .texture(`cobblemon:item/type_gem/${gem.item.path}`)
      .glow(true)
      .tooltip(Text.gray("Created from the Crystalarium upgrade: Black Opal"));
  });
});
