console.info("[SOCIETY] registerFluids.js loaded");

StartupEvents.registry("fluid", (e) => {
  e.create("society:oak_resin")
    .thickTexture(0xfffefc)
    .bucketColor(0xfffefc)
    .displayName("Oak Resin")
    .tag("society:oak_resin");

  e.create("society:pine_tar")
    .thickTexture(0x6e4117)
    .bucketColor(0x6e4117)
    .displayName("Pine Tar")
    .tag("society:pine_tar");

  e.create("society:maple_syrup")
    .thickTexture(0x8a3727)
    .bucketColor(0x8a3727)
    .displayName("Maple Syrup")
    .tag("society:maple_syrup");

  e.create("society:mystic_syrup")
    .thickTexture(0xcf8cf6)
    .bucketColor(0xcf8cf6)
    .displayName("Mystic Syrup")
    .tag("society:mystic_syrup");

  e.create("society:vinegar")
    .thickTexture(0x680000)
    .bucketColor(0x680000)
    .displayName("Vinegar")
    .tag("society:vinegar");

  e.create("society:alchemical_varnish")
    .thickTexture(0xa2b7bd)
    .bucketColor(0xa2b7bd)
    .displayName("Alchemical Varnish")
    .tag("society:alchemical_varnish");

  e.create("society:mystic_jelly")
    .thickTexture(0x9cd8e0)
    .bucketColor(0x9cd8e0)
    .displayName("Mystic Jelly")
    .tag("society:mystic_jelly");

  e.create("society:milk")
    .thinTexture(0xffffff)
    .bucketColor(0xffffff)
    .displayName("Milk")
    .tag("forge:milk");

  //Vinery
  e.create("vinery:apple_juice")
    .thinTexture(0xfff1a3)
    .bucketColor(0xfff1a3)
    .displayName("Apple Juice")
    .tag("vinery:apple_juice");

  e.create("vinery:white_grape_juice")
    .thinTexture(0xbdd9b2)
    .bucketColor(0xbdd9b2)
    .displayName("White Grape Juice")
    .tag("vinery:white_grape_juice");

  e.create("vinery:white_jungle_grape_juice")
    .thinTexture(0x1c744c)
    .bucketColor(0x1c744c)
    .displayName("White Jungle Grape Juice")
    .tag("vinery:white_jungle_grape_juice");

  e.create("vinery:white_savanna_grape_juice")
    .thinTexture(0x648454)
    .bucketColor(0x648454)
    .displayName("White Savanna Grape Juice")
    .tag("vinery:white_savanna_grape_juice");

  e.create("vinery:white_taiga_grape_juice")
    .thinTexture(0x549c6c)
    .bucketColor(0x549c6c)
    .displayName("White Taiga Grape Juice")
    .tag("vinery:white_taiga_grape_juice");

  e.create("vinery:red_grape_juice")
    .thinTexture(0x6c3c74)
    .bucketColor(0x6c3c74)
    .displayName("Red Grape Juice")
    .tag("vinery:red_grape_juice");

  e.create("vinery:red_jungle_grape_juice")
    .thinTexture(0x44144c)
    .bucketColor(0x44144c)
    .displayName("Red Jungle Grape Juice")
    .tag("vinery:red_jungle_grape_juice");

  e.create("vinery:red_savanna_grape_juice")
    .thinTexture(0x3c2474)
    .bucketColor(0x3c2474)
    .displayName("Red Savanna Grape Juice")
    .tag("vinery:red_savanna_grape_juice");

  e.create("vinery:red_taiga_grape_juice")
    .thinTexture(0x693468)
    .bucketColor(0x693468)
    .displayName("Red Taiga Grape Juice")
    .tag("vinery:red_taiga_grape_juice");

  e.create("nethervinery:crimson_grape_juice")
    .thinTexture(0xf10959)
    .bucketColor(0xf10959)
    .displayName("Crimson Grape Juice")
    .tag("nethervinery:crimson_grape_juice");

  e.create("nethervinery:warped_grape_juice")
    .thinTexture(0x2cbcba)
    .bucketColor(0x2cbcba)
    .displayName("Warped Grape Juice")
    .tag("nethervinery:warped_grape_juice");

  e.create("society:ancient_fruit_juice")
    .thinTexture(0x5be3e4)
    .bucketColor(0x5be3e4)
    .displayName("Ancient Fruit Juice")
    .tag("society:ancient_fruit_juice");

  e.create("society:starfruit_juice")
    .thinTexture(0xffa31c)
    .bucketColor(0xffa31c)
    .displayName("Starfruit Juice")
    .tag("society:starfruit_juice");

  e.create("society:sparkpod_juice")
    .thinTexture(0xdf31f2)
    .bucketColor(0xdf31f2)
    .displayName("Sparkpod Juice")
    .tag("society:sparkpod_juice");

  e.create("society:mana_fruit_juice")
    .thinTexture(0x00dedf)
    .bucketColor(0x00dedf)
    .displayName("Mana Fruit Juice")
    .tag("society:mana_fruit_juice");

  e.create("relics:relic_experience")
    .thickTexture(0xf7b23f)
    .bucketColor(0xf7b23f)
    .displayName("Relic Experience")
    .tag("relics:relic_experience");
});
