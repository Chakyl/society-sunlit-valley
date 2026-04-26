console.info("[SOCIETY-S-COBBLEMON] registerCobblemonItems.js loaded");

StartupEvents.registry("item", (e) => {

  e.create("sunlit_cobblemon:mystery_gift")
  // Cobblemon
  e.create("cobblemon:metal_alloy").texture("cobblemon:item/evolution/metal_alloy");
  e.create("cobblemon:shell_helmet").texture("cobblemon:item/evolution/shell_helmet");
  e.create("cobblemon:syrupy_apple").texture("cobblemon:item/evolution/syrupy_apple");
  e.create("cobblemon:scroll_of_darkness").texture("cobblemon:item/evolution/scroll_of_darkness");
  e.create("cobblemon:scroll_of_waters").texture("cobblemon:item/evolution/scroll_of_waters");

  ["courage", "health", "mighty", "quick", "smart", "tough", "brittle", "coward", "numb", "sickly", "slow", "weak"].forEach((candyType) => {
    e.create(`cobblemon:${candyType}_candy`).texture(`cobblemon:item/iv_candy/${candyType}_candy`);
  });

  ["health", "muscle", "resist", "genius", "clever", "swift", "fresh_start"].forEach((mochi) => {
    e.create(`cobblemon:${mochi}_mochi`).texture(`cobblemon:item/mochis/${mochi}_mochi`);
  });

  e.create("cobblemon:tasty_tail").texture("cobblemon:item/food/tasty_tail")
    .food((food) => {
      food.hunger(1);
      food.saturation(3);
      food.fastToEat(true);
    })
  // Sunlit Cobblemon
  e.create("sunlit_cobblemon:unlooted_ball").modelJson({
    "parent": "society:block/kubejs/pond_quest"
  });
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

  e.create("sunlit_cobblemon:pofflet_box");
  ["plain", "frosty", "captivating", "crystalline", "deadly", "mossy", "spicy", "mana"].forEach((pofflet) => {
    e.create(`sunlit_cobblemon:${pofflet}_pofflet`).tag("sunlit_cobblemon:pofflet");
  });

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
  e.create("sunlit_cobblemon:mystica_branch");
  e.create("sunlit_cobblemon:sun_drops");
  e.create("sunlit_cobblemon:sun_essence");
  e.create("sunlit_cobblemon:mystica_cookie");
  e.create("sunlit_cobblemon:sun_mirror").maxStackSize(1);
  e.create("sunlit_cobblemon:sunlit_league_medallion");
  e.create("sunlit_cobblemon:poke_radar").maxStackSize(1).displayName("Poké Radar");
  e.create("sunlit_cobblemon:berry_capsule").texture(
    "sunlit_cobblemon:item/berry_capsule",
  );
  e.create("sunlit_cobblemon:gachamon_capsule").texture(
    "sunlit_cobblemon:item/gachamon_capsule",
  );
  e.create("sunlit_cobblemon:uncharged_battery").texture(
    "sunlit_cobblemon:item/uncharged_battery",
  );
  e.create(`sunlit_cobblemon:fire_pledge`).texture(`cobblemon:item/fire_pledge`)
  e.create(`sunlit_cobblemon:grass_pledge`).texture(`cobblemon:item/grass_pledge`)
  e.create(`sunlit_cobblemon:water_pledge`).texture(`cobblemon:item/water_pledge`)
  e.create("sunlit_cobblemon:poison_drop");
  e.create("sunlit_cobblemon:venomshine");
  e.create("sunlit_cobblemon:strange_spore");
  e.create("sunlit_cobblemon:permafrost_drop").texture(`sunlit_cobblemon:item/permafrost`);
  e.create("sunlit_cobblemon:resonance_gem");
  e.create("sunlit_cobblemon:electro_wool");
  e.create("sunlit_cobblemon:electric_canvas");
  e.create("sunlit_cobblemon:moondust");
  e.create("sunlit_cobblemon:draco_meteorite");
  e.create("sunlit_cobblemon:quicksilver");
  e.create("sunlit_cobblemon:paras_mushroom");
  e.create("sunlit_cobblemon:spider_milk")
    .food((food) => {
      food.hunger(1);
      food.saturation(1);
      food.effect("minecraft:poison", 200, 2, 1.0);
      food.alwaysEdible(true);
    })
    .useAnimation("drink");
  [
    "moomoo_milk",
    "large_moomoo_milk",
  ].forEach((item) => {
    e.create(`sunlit_cobblemon:${item}`)
      .texture(item.includes("moomoo") ? `cobblemon:item/food/${item}` : `sunlit_cobblemon:item/${item}`)
      .food((food) => {
        food.hunger(item.includes("large") ? 5 : 1);
        food.saturation(1);
        food.effect("farm_and_charm:grandmas_blessing", 200, 0, 1.0);
        food.alwaysEdible(true);
      })
      .useAnimation("drink");
  });
  e.create(`sunlit_cobblemon:moomoo_cheese`)
    .food((food) => {
      food.hunger(5);
      food.saturation(2);
      food.effect("farm_and_charm:grandmas_blessing", 1200, 0, 1.0);
    })

  e.create(`sunlit_cobblemon:aged_moomoo_cheese`)
    .texture(`sunlit_cobblemon:item/moomoo_cheese`)
    .glow(true)
    .color(0, 0xcae9f4);
  e.create(`sunlit_cobblemon:double_aged_moomoo_cheese`)
    .texture(`sunlit_cobblemon:item/moomoo_cheese`)
    .glow(true)
    .color(0, 0x28adde);

  e.create("sunlit_cobblemon:poke_genes")
    .texture("sunlit_cobblemon:item/poke_genes")
    .displayName("Poké Genes");
  e.create("sunlit_cobblemon:fairy_heart").texture(
    "sunlit_cobblemon:item/fairy_heart",
  );
  e.create("sunlit_cobblemon:star_pixie").texture(
    "sunlit_cobblemon:item/star_pixie",
  );
  e.create("sunlit_cobblemon:endless_battery");
  e.create("sunlit_cobblemon:tabula_rasa");
  e.create("sunlit_cobblemon:frozen_calamity");
  e.create("sunlit_cobblemon:blazing_calamity");
  e.create("sunlit_cobblemon:rainbow_steam");
  e.create("sunlit_cobblemon:swampy_mystica_branch");
  e.create("sunlit_cobblemon:mystica_nectar");
  e.create("sunlit_cobblemon:cosmic_dust");
  e.create("sunlit_cobblemon:wormhole_generator").maxStackSize(1)
  e.create("sunlit_cobblemon:blooming_ring");
  e.create("sunlit_cobblemon:cornucopia_of_greed");
  e.create("sunlit_cobblemon:moongeist_crystal");
  [
    "the_art_of_battle",
    "berry_labor_and_capital",
    "bottlecaps_and_nothingness",
    "braiding_surprisegrass",
    "the_gachamonbler",
    "mukbeth",
    "savage_sun",
  ].forEach((item) => {
    e.create(`sunlit_cobblemon:${item}`)
      .texture(`sunlit_cobblemon:item/books/${item}`)
      .rarity("rare");
  });
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
  global.cobblemonDehydrated.forEach((item) => {
    e.create(item.item)
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
      .tooltip(Text.translatable("society.pristine_gems.description").gray());
  });
});
