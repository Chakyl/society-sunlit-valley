// priority: 0
console.info("[SOCIETY] cobblemonTags.js loaded");

ServerEvents.tags("worldgen/biome", (e) => {
  // Skull Cavern Cobblemon biomes
  e.add("cobblemon:is_spooky", "society:cavern_top");

  e.add("cobblemon:is_dripstone", "society:skull_caves");
  e.add("cobblemon:is_lush", "society:lush_caverns");

  e.add("cobblemon:is_cold", "society:frozen_caves");
  e.add("cobblemon:is_glacial", "society:frozen_caves");
  e.add("cobblemon:is_freezing", "society:frozen_maelstrom");
  e.add("cobblemon:is_thermal", "society:frozen_maelstrom");

  e.add("cobblemon:is_thermal", "society:desert_caves");
  e.add("cobblemon:is_arid", "society:desert_caves");
  e.add("cobblemon:is_badlands", "society:desert_fault");
  e.add("cobblemon:is_arid", "society:desert_fault");

  e.add("cobblemon:is_volcanic", "society:blackstone_caves");
  e.add("cobblemon:nether/is_wasteland", "society:blackstone_caves");

  e.add("cobblemon:is_magical", "society:umbra_barrens");
});

const cobblemonAllSeasonCrops = [
  "cobblemon:red_apricorn",
  "cobblemon:yellow_apricorn",
  "cobblemon:green_apricorn",
  "cobblemon:blue_apricorn",
  "cobblemon:pink_apricorn",
  "cobblemon:black_apricorn",
  "cobblemon:white_apricorn",
  "cobblemon:energy_root",
  "cobblemon:big_root",
  "cobblemon:red_apricorn_seed",
  "cobblemon:yellow_apricorn_seed",
  "cobblemon:green_apricorn_seed",
  "cobblemon:blue_apricorn_seed",
  "cobblemon:pink_apricorn_seed",
  "cobblemon:black_apricorn_seed",
  "cobblemon:white_apricorn_seed",
  "cobblemon:oran_berry",
  "cobblemon:cheri_berry",
  "cobblemon:chesto_berry",
  "cobblemon:pecha_berry",
  "cobblemon:rawst_berry",
  "cobblemon:aspear_berry",
  "cobblemon:persim_berry",
  "cobblemon:razz_berry",
  "cobblemon:bluk_berry",
  "cobblemon:nanab_berry",
  "cobblemon:wepear_berry",
  "cobblemon:pinap_berry",
  "cobblemon:occa_berry",
  "cobblemon:passho_berry",
  "cobblemon:wacan_berry",
  "cobblemon:rindo_berry",
  "cobblemon:yache_berry",
  "cobblemon:chople_berry",
  "cobblemon:kebia_berry",
  "cobblemon:shuca_berry",
  "cobblemon:coba_berry",
  "cobblemon:payapa_berry",
  "cobblemon:tanga_berry",
  "cobblemon:charti_berry",
  "cobblemon:kasib_berry",
  "cobblemon:haban_berry",
  "cobblemon:colbur_berry",
  "cobblemon:babiri_berry",
  "cobblemon:chilan_berry",
  "cobblemon:roseli_berry",
  "cobblemon:leppa_berry",
  "cobblemon:lum_berry",
  "cobblemon:figy_berry",
  "cobblemon:wiki_berry",
  "cobblemon:mago_berry",
  "cobblemon:aguav_berry",
  "cobblemon:iapapa_berry",
  "cobblemon:sitrus_berry",
  "cobblemon:touga_berry",
  "cobblemon:cornn_berry",
  "cobblemon:magost_berry",
  "cobblemon:rabuta_berry",
  "cobblemon:nomel_berry",
  "cobblemon:enigma_berry",
  "cobblemon:pomeg_berry",
  "cobblemon:kelpsy_berry",
  "cobblemon:qualot_berry",
  "cobblemon:hondew_berry",
  "cobblemon:grepa_berry",
  "cobblemon:tamato_berry",
  "cobblemon:spelon_berry",
  "cobblemon:pamtre_berry",
  "cobblemon:watmel_berry",
  "cobblemon:durin_berry",
  "cobblemon:belue_berry",
  "cobblemon:kee_berry",
  "cobblemon:maranga_berry",
  "cobblemon:hopo_berry",
  "cobblemon:liechi_berry",
  "cobblemon:ganlon_berry",
  "cobblemon:salac_berry",
  "cobblemon:petaya_berry",
  "cobblemon:apicot_berry",
  "cobblemon:lansat_berry",
  "cobblemon:starf_berry",
  "cobblemon:micle_berry",
  "cobblemon:custap_berry",
  "cobblemon:jaboca_berry",
  "cobblemon:rowap_berry",
];
const cobblemonSpringCrops = [
  "cobblemon:mirror_herb",
  "cobblemon:white_herb",
  "cobblemon:power_herb",
  "cobblemon:mental_herb",
  "cobblemon:pep_up_flower",
  "cobblemon:revival_herb",
];
const cobblemonSummerCrops = [
  "cobblemon:red_mint_seeds",
  "cobblemon:blue_mint_seeds",
  "cobblemon:cyan_mint_seeds",
  "cobblemon:pink_mint_seeds",
  "cobblemon:green_mint_seeds",
  "cobblemon:white_mint_seeds",
  "cobblemon:red_mint_leaf",
  "cobblemon:blue_mint_leaf",
  "cobblemon:cyan_mint_leaf",
  "cobblemon:pink_mint_leaf",
  "cobblemon:green_mint_leaf",
  "cobblemon:white_mint_leaf",
  "cobblemon:red_mint",
  "cobblemon:blue_mint",
  "cobblemon:cyan_mint",
  "cobblemon:pink_mint",
  "cobblemon:green_mint",
  "cobblemon:white_mint",
];
const cobblemonAutumnCrops = ["cobblemon:vivichoke", "cobblemon:vivichoke_seeds"];
ServerEvents.tags("item", (e) => {
  cobblemonAllSeasonCrops.forEach((crop) => {
    e.add("sereneseasons:spring_crops", crop);
    e.add("sereneseasons:autumn_crops", crop);
    e.add("sereneseasons:summer_crops", crop);
    e.add("sereneseasons:winter_crops", crop);
  });
  cobblemonSpringCrops.forEach((crop) => {
    e.add("sereneseasons:spring_crops", crop);
  });
  cobblemonSummerCrops.forEach((crop) => {
    e.add("sereneseasons:summer_crops", crop);
  });
  cobblemonAutumnCrops.forEach((crop) => {
    e.add("sereneseasons:autumn_crops", crop);
  });
  e.add("society:raw_logs", "cobblemon:apricorn_log");
});

ServerEvents.tags("block", (e) => {
  cobblemonAllSeasonCrops.forEach((crop) => {
    e.add("sereneseasons:spring_crops", crop);
    e.add("sereneseasons:autumn_crops", crop);
    e.add("sereneseasons:summer_crops", crop);
    e.add("sereneseasons:winter_crops", crop);
  });
  cobblemonSpringCrops.forEach((crop) => {
    e.add("sereneseasons:spring_crops", crop);
  });
  cobblemonSummerCrops.forEach((crop) => {
    e.add("sereneseasons:summer_crops", crop);
  });
  cobblemonAutumnCrops.forEach((crop) => {
    e.add("sereneseasons:autumn_crops", crop);
  });
  e.add("society:raw_logs", "cobblemon:apricorn_log");
});
