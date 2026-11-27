// ItemEvents.tooltip((tooltip) => {
//   tooltip.add(
//     /fantasyfurniture/,
//     Text.translatable("tooltip.society.furnitures.fantasy").white()
//   );
//   tooltip.add(
//     "society:fairy_dust",
//     Text.translatable("item.society.fairy_dust.description").gray()
//   );
//   // Hammers
//   tooltip.add(
//     "justhammers:small_core",
//     Text.translatable("tooltip.society.hammer_core", "3x3x1").gray()
//   );
//   tooltip.add(
//     "justhammers:impact_core",
//     Text.translatable("tooltip.society.hammer_core", "3x3x3").gray()
//   );
//   // Misc
//   tooltip.add(
//     [
//       "botania:agricarnation",
//       "botania:agricarnation_chibi",
//       "botania:floating_agricarnation",
//       "botania:floating_agricarnation_chibi",
//     ],
//     Text.translatable("tooltip.society.not_work_on_farmland").darkRed()
//   );
//   tooltip.add(
//     "numismatics_utils:bank_meter",
//     Text.translatable("tooltip.society.bank_meter").gray()
//   );
//   tooltip.add(
//     "society:fish_radar",
//     Text.translatable("item.society.fish_rader.description").gray()
//   );
//   tooltip.add(
//     "tradingpost:trading_post",
//     Text.translatable("tooltip.society.trading_post").gray()
//   );
//   tooltip.add(
//     "society:magic_rope",
//     Text.translatable("item.society.magic_rope.description").gray()
//   );
//   tooltip.add(
//     "society:magic_rope",
//     Text.translatable("item.society.magic_rope.description.warn").red()
//   );
//   tooltip.add(
//     "society:magic_tunnel",
//     Text.translatable("item.society.magic_tunnel.description").gray()
//   );
//   tooltip.add(
//     "society:magic_tunnel",
//     Text.translatable("item.society.magic_rope.description.warn").red()
//   );
//   tooltip.add(
//     "society_trading:auto_trader",
//     Text.translatable("item.society_trading.auto_trader.description").gray()
//   );
//   // Fertilizers

//   tooltip.add(
//     "etcetera:handbell",
//     Text.translatable("tooltip.society.handbell").gray()
//   );
//   tooltip.add(
//     "farm_and_charm:pitchfork",
//     Text.translatable("tooltip.society.pitchfork").gray()
//   );
//   tooltip.add(
//     "farm_and_charm:pitchfork",
//     Text.translatable("tooltip.society.pitchfork.tip").green()
//   );
//   tooltip.add(
//     "farm_and_charm:pitchfork",
//     Text.translatable("tooltip.society.pitchfork.warn").red()
//   );
//   tooltip.add(
//     ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
//     Text.translatable("tooltip.society.silo").gray()
//   );
//   tooltip.add(
//     ["farm_and_charm:silo_wood", "farm_and_charm:silo_copper"],
//     Text.translatable("tooltip.society.silo.tip").green()
//   );
//   tooltip.add(
//     "farmersdelight:cooking_pot",
//     Text.translatable("tooltip.society.cooking_pot").green()
//   );
//   tooltip.add(
//     "meadow:cooking_cauldron",
//     Text.translatable("tooltip.society.cooking_cauldron").gray()
//   );
//   tooltip.add(
//     "candlelight:cooking_pot",
//     Text.translatable("tooltip.society.master_cooking_pot").gray()
//   );
//   tooltip.add(
//     [
//       "candlelight:red_nether_bricks_stove",
//       "candlelight:quartz_stove",
//       "candlelight:mud_stove",
//       "candlelight:cobblestone_stove",
//       "farm_and_charm:stove",
//       "candlelight:stone_bricks_stove",
//       "candlelight:bamboo_stove",
//       "candlelight:basalt_stove",
//       "candlelight:end_stove",
//       "candlelight:sandstone_stove",
//       "candlelight:deepslate_stove",
//       "candlelight:granite_stove",
//     ],
//     Text.translatable("tooltip.society.stove").green()
//   );

//   tooltip.add(
//     [
//       "oreganized:silver_ore",
//       "oreganized:deepslate_silver_ore",
//       "oreganized:lead_ore",
//       "oreganized:deepslate_lead_ore",
//       "minecraft:ancient_debris",
//     ],
//     Text.translatable("tooltip.society.skull_cavern_ore").gold()
//   );
  
//   tooltip.add(
//     [
//       "minecraft:milk_bucket",
//       "meadow:wooden_milk_bucket",
//       "meadow:wooden_sheep_milk_bucket",
//       "meadow:wooden_warped_milk_bucket",
//       "meadow:wooden_buffalo_milk_bucket",
//       "meadow:wooden_goat_milk_bucket",
//     ],
//     Text.translatable("tooltip.society.banned_milk_bucket").red()
//   );
//   ["society:large_warped_milk", "society:warped_milk"].forEach((milk) => {
//     tooltip.add(
//       milk,
//       Text.translatable("item.society.warped_milk.description").aqua()
//     );
//   });
//   tooltip.add(
//     "society:fine_wool",
//     Text.translatable("item.society.fine_wool.description").gray()
//   );
//   tooltip.add(
//     "society:truffle",
//     Text.translatable("item.society.truffle.description").gray()
//   );
//   tooltip.add(
//     "society:milk_pail",
//     Text.translatable("item.society.milk_pail.description").gray()
//   );
//   tooltip.add(
//     "society:tubasmoke_stick",
//     Text.translatable("item.society.tubasmoke_stick.description").gray()
//   );
//   tooltip.add(
//     "society:tubasmoke_stick",
//     Text.translatable("item.society.tubasmoke_stick.description.warn").red()
//   );
//   tooltip.add(
//     "society:cornucopia",
//     Text.translatable("item.society.cornucopia.description").gray()
//   );
//   tooltip.add(
//     "society:animal_feed",
//     Text.translatable("item.society.animal_feed.description").gray()
//   );
//   tooltip.add(
//     "society:candied_animal_feed",
//     Text.translatable("item.society.animal_feed.description").gray()
//   );
//   tooltip.add(
//     "society:candied_animal_feed",
//     Text.translatable("item.society.candied_animal_feed.description").green()
//   );
//   tooltip.add(
//     "society:mana_feed",
//     Text.translatable("item.society.animal_feed.description").gray()
//   );
//   tooltip.add(
//     "society:mana_feed",
//     Text.translatable("item.society.mana_feed.description").green()
//   );
//   tooltip.add(
//     "society:animal_feed_sack",
//     Text.translatable("item.society.animal_feed_sack.description").red()
//   );
//   tooltip.add(
//     "society:magic_shears",
//     Text.translatable("item.society.magic_shears.description").gray()
//   );
//   tooltip.add(
//     "society:magic_shears",
//     Text.translatable("item.society.magic_shears.description.warn").red()
//   );
//   tooltip.add(
//     "society:mood_scanner",
//     Text.translatable("item.society.mood_scanner.description").gray()
//   );
//   tooltip.add(
//     "society:mood_scanner",
//     Text.translatable("item.society.mood_scanner.description.warn").red()
//   );
//   tooltip.add(
//     "vintagedelight:deluxe_burger",
//     Text.translatable("tooltip.society.deluxe_burger").gray()
//   );
//   tooltip.add(
//     "society:miracle_potion",
//     Text.translatable("item.society.miracle_potion.description").gray()
//   );
//   tooltip.add(
//     "meadow:cheese_stick",
//     Text.translatable("tooltip.society.cheese_stick").gray()
//   );
//   tooltip.add(
//     "meadow:cheese_form",
//     Text.translatable("tooltip.society.cheese_form").gray()
//   );
//   tooltip.add(
//     "meadow:cheese_form",
//     Text.translatable("tooltip.society.cheese_form.tip").green()
//   );
//   tooltip.add(
//     "society:friendship_necklace",
//     Text.translatable("item.society.friendship_necklace.description").gray()
//   );
//   tooltip.add(
//     "society:frozen_tear",
//     Text.translatable("item.society.frozen_tear.description").gray()
//   );
//   tooltip.add(
//     ["displaydelight:food_plate", "displaydelight:small_food_plate"],
//     Text.translatable("tooltip.society.food_plate").gray()
//   );
//   tooltip.add(
//     "society:prize_ticket",
//     Text.translatable("item.society.prize_ticket.description").gray()
//   );
//   tooltip.add(
//     "splendid_slimes:slime_ticket",
//     Text.translatable("tooltip.society.slime_ticket").gray()
//   );
//   tooltip.add(
//     "splendid_slimes:slime_candy",
//     Text.translatable("tooltip.society.slime_candy").gray()
//   );
//   tooltip.add(
//     "splendid_slimes:slime_feeder",
//     Text.translatable("tooltip.society.slime_feeder").gray()
//   );
//   tooltip.add(
//     "splendid_slimes:slime_feeder",
//     Text.translatable("tooltip.society.area", `13x13x13`).green()
//   );
//   tooltip.add(
//     "create:creative_blaze_cake",
//     Text.translatable("tooltip.society.creative_blaze_cake").gray()
//   );
//   tooltip.add(
//     "tanukidecor:slot_machine",
//     Text.translatable("tooltip.society.slot_machine").gray()
//   );
//   tooltip.add(
//     "whimsy_deco:statue_endless_fortune",
//     Text.translatable("tooltip.society.statue_endless_fortune").gray()
//   );
//   tooltip.add(
//     "whimsy_deco:statue_endless_fortune",
//     Text.translatable("tooltip.society.statue_endless_fortune.warn").red()
//   );
//   tooltip.add(
//     "whimsy_deco:gatcha_machine",
//     Text.translatable(
//       "tooltip.society.gatcha_machine",
//       Text.translatable("item.numismatics.sun")
//     ).gray()
//   );
//   tooltip.add(
//     "society:relic_trove",
//     Text.translatable("item.society.relic_trove.description").gray()
//   );
//   tooltip.add(
//     "society:artifact_trove",
//     Text.translatable("item.society.relic_trove.description").gray()
//   );
//   tooltip.add(
//     "society:geode_buster",
//     Text.translatable("item.society.geode_buster.description").gray()
//   );
//   tooltip.add(
//     "society:dragontooth_axe",
//     Text.translatable("item.society.dragontooth_axe.description").red()
//   );
//   tooltip.addAdvanced("botania:apothecary_default", (item, advanced, text) => {
//     if (tooltip.shift) {
//       text.add(Text.translatable("tooltip.society.petal_apothecary.description").gold());
//     } else {
//       text.add([
//         Text.translatable("tooltip.society.petal_apothecary.obtain").append(" "),
//         Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
//       ]);
//     }
//   });
//   tooltip.add(
//     "society:kinetic_blueprint",
//     Text.translatable("item.society.kinetic_blueprint.description.tip").green()
//   );
//   tooltip.addAdvanced("society:kinetic_blueprint", (item, advanced, text) => {
//     if (tooltip.shift) {
//       text.add(Text.translatable("tooltip.society.kinetic_blueprint.description").gold());
//     } else {
//       text.add([
//         Text.translatable("tooltip.society.kinetic_blueprint.obtain").append(" "),
//         Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
//       ]);
//     }
//   });
//   tooltip.addAdvanced("society:skull_cavern_teleporter", (item, advanced, text) => {
//     if (tooltip.shift) {
//       text.add(Text.translatable("tooltip.society.skull_cavern_teleporter.description").gold());
//     } else {
//       text.add([
//         Text.translatable("tooltip.society.skull_cavern_teleporter.obtain").append(" "),
//         Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
//       ]);
//     }
//   });
//   tooltip.addAdvanced('aquaculture:nether_star_hook', (item, advanced, text) => {
//     if (tooltip.shift) {
//       text.add(Text.translatable("tooltip.society.nether_star_hook.description").gold());
//     } else {
//       text.add([
//         Text.translatable("tooltip.society.nether_star_hook.obtain").append(" "),
//         Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
//       ]);
//     }
//   }); 
//   tooltip.addAdvanced("relics:magic_mirror", (item, advanced, text) => {
//     if (tooltip.shift) {
//       text.add(Text.translatable("tooltip.society.magic_mirror.description").gold());
//     } else {
//       text.add([
//         Text.translatable("tooltip.society.magic_mirror.obtain").append(" "),
//         Text.translatable("tooltip.society.hold_key", Text.translatable("key.keyboard.shift").gray()).darkGray(),
//       ]);
//     }
//   });
//   tooltip.add(
//     [
//       "moreminecarts:chiseled_organic_glass",
//       "moreminecarts:chiseled_organic_glass_pane",
//       "moreminecarts:greenhouse_glass_stairs",
//       "moreminecarts:greenhouse_glass_slab",
//     ],
//     Text.translatable("tooltip.society.greenhouse_glass").gray()
//   );
//   tooltip.add(
//     [
//       "moreminecarts:chiseled_organic_glass",
//       "moreminecarts:chiseled_organic_glass_pane",
//       "moreminecarts:greenhouse_glass_stairs",
//       "moreminecarts:greenhouse_glass_slab",
//     ],
//     Text.translatable("tooltip.society.greenhouse_glass.range").green()
//   );

//   tooltip.add(
//     "vinery:apple_tree_sapling",
//     Text.translatable("tooltip.society.fruit_bearing_season")
//   );
//   tooltip.add(
//     "vinery:apple_tree_sapling",
//     Text.of(" ").gold().append(Text.translatable("desc.sereneseasons.autumn"))
//   );

//   tooltip.add(
//     "vinery:dark_cherry_sapling",
//     Text.translatable("tooltip.society.fruit_bearing_season")
//   );
//   tooltip.add(
//     "vinery:dark_cherry_sapling",
//     Text.of(" ").green().append(Text.translatable("desc.sereneseasons.spring"))
//   );
//   tooltip.add(
//     "society:plushie_capsule",
//     Text.translatable("tooltip.society.right_click_open").gray()
//   );

//   tooltip.add(
//     "furniture:bin",
//     Text.translatable("tooltip.society.trash_bin").red()
//   );
//   tooltip.add(
//     "furniture:bin",
//     Text.translatable("tooltip.society.trash_bin.tip").green()
//   );
//   tooltip.add(
//     "furniture:trash_bag",
//     Text.translatable("tooltip.society.trash_bag").gray()
//   );
//     tooltip.add(
//     "society:bouquet_bag",
//     Text.translatable("tooltip.society.bouquet_bag").green()
//   );

//   tooltip.add(
//     "society:bouquet_bag",
//     Text.translatable("tooltip.society.right_click_open").gray()
//   );
//   tooltip.add(
//     "society:scavenged_food_bag",
//     Text.translatable("tooltip.society.right_click_open").gray()
//   );
//   tooltip.add(
//     "species:treeper_spawn_egg",
//     Text.translatable("tooltip.society.treeper_spawn_egg").red()
//   );
//   tooltip.add(
//     "gag:time_sand_pouch",
//     Text.translatable("tooltip.society.time_sand_pouch").red()
//   );
//   tooltip.add(
//     "extractinator:extractinator",
//     Text.translatable("tooltip.society.extractinator").gray()
//   );
//   tooltip.add(
//     "pipez:item_pipe",
//     Text.translatable("tooltip.society.item_pipe").gray()
//   );
//   tooltip.add(
//     "moreminecarts:chunk_loader",
//     Text.translatable("tooltip.society.chunk_loader").red()
//   );
//   tooltip.add(
//     "vintagedelight:evaporator",
//     Text.translatable("tooltip.society.evaporator").gray()
//   );
//   tooltip.add(
//     "farmersdelight:rich_soil",
//     Text.translatable("tooltip.society.rich_soil").gray()
//   );


//   tooltip.add(
//     "unusualfishmod:ripper_tooth",
//     Text.translatable("tooltip.society.ripper_tooth").green()
//   );
//   // Prize Machine
//   tooltip.add(
//     [
//       "minecraft:eye_armor_trim_smithing_template",
//       "pamhc2trees:hazelnut_sapling",
//       "pamhc2trees:pawpaw_sapling",
//       "pamhc2trees:pawpaw_sapling",
//       "pamhc2trees:passionfruit_sapling",
//       "etcetera:eggple",
//       "etcetera:golden_eggple",
//     ],
//     Text.translatable("tooltip.society.item_type.prize_machine_reward").gold()
//   );
//   Item.of("farm_and_charm:barley", "{quality_food:{quality:3}}");


//   // Refined
//   tooltip.add(
//     "refinedstorage:4k_storage_block",
//     Text.translatable("tooltip.society.storage_block", "4,000").green()
//   );
//   tooltip.add(
//     "refinedstorage:64k_storage_block",
//     Text.translatable("tooltip.society.storage_block", "64,000").green()
//   );

