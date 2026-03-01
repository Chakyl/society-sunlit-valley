const runLootTableDataGen = false;

const createLootTable = (name, items) => {
  let objs = { pools: [{ rolls: 1, entries: [] }] };
  let poolItem;
  let poolObj;
  items.forEach((item) => {
    poolItem = Item.of(item)
    poolObj = {
      type: "item",
      name: poolItem.id,
      weight: 4,
    }
    if (poolItem.count > 1) {
      poolObj.functions = [
        {
          function: "set_count",
          count: {
            min: 1,
            max: poolItem.count
          }
        }
      ]
    }
    objs.pools[0].entries.push(poolObj)
  });
  JsonIO.write(`kubejs/server_scripts/datagen/loot_tables/${name}.json`, objs);
};

if (runLootTableDataGen) {
  createLootTable("poke_loot_ball", ['cobblemon:poke_ball', 'cobblemon:sport_ball', 'cobblemon:luxury_ball', 'cobblemon:remedy', 'cobblemon:superb_remedy', 'cobblemon:silver_powder', '4x cobblemon:exp_candy_s', 'cobblemon:lure_ball', 'sunlit_cobblemon:berry_capsule', 'cobblemon:sharp_beak', '4x cobblemon:exp_candy_xs', 'cobblemon:energy_root', 'cobblemon:potion', 'society:plushie_capsule', 'cobblemon:friend_ball', 'cobblemon:heal_powder', 'society:iron_upgrade_smithing_template', 'cobblemon:fine_remedy', 'cobblemon:silk_scarf', 'cobblemon:hard_stone', 'cobblemon:big_root']);
  createLootTable("great_loot_ball", ['cobblemon:blue_mint_seeds', 'cobblemon:red_mint_seeds', 'cobblemon:heavy_ball', 'cobblemon:love_ball', 'cobblemon:moon_ball', 'cobblemon:park_ball', 'cobblemon:net_ball', 'cobblemon:nest_ball', 'cobblemon:great_ball', 'cobblemon:hp_up', 'cobblemon:calcium', 'cobblemon:carbos', 'cobblemon:pp_up', 'cobblemon:zinc', 'cobblemon:iron', 'cobblemon:protein', 'sunlit_cobblemon:tm_pack', 'cobblemon:normal_gem', '4x cobblemon:exp_candy_l', '4x cobblemon:exp_candy_m', 'cobblemon:max_ether', '4x cobblemon:genius_feather', '4x cobblemon:swift_feather', '4x cobblemon:clever_feather', '4x cobblemon:resist_feather', '4x cobblemon:muscle_feather', '4x cobblemon:health_feather', 'cobblemon:ether', 'cobblemon:full_heal', 'cobblemon:revive', 'cobblemon:hyper_potion', 'cobblemon:super_potion', 'cobblemon:white_mint_seeds', 'cobblemon:green_mint_seeds', 'cobblemon:pink_mint_seeds', 'cobblemon:cyan_mint_seeds', 'cobblemon:life_orb', 'cobblemon:charcoal_stick', 'cobblemon:black_glasses', 'cobblemon:black_belt', 'cobblemon:power_belt', 'cobblemon:power_bracer', 'cobblemon:power_lens', 'cobblemon:power_weight', 'cobblemon:soft_sand', 'cobblemon:power_band', 'cobblemon:power_anklet', 'cobblemon:poison_barb', 'cobblemon:never_melt_ice', 'cobblemon:mystic_water', 'cobblemon:muscle_band', 'cobblemon:miracle_seed', 'cobblemon:metal_coat'])
  createLootTable("ultra_loot_ball", ['cobblemon:mental_herb', 'cobblemon:vivichoke_seeds', 'cobblemon:revival_herb', 'cobblemon:timer_ball', 'cobblemon:level_ball', 'cobblemon:quick_ball', 'cobblemon:dive_ball', 'cobblemon:dusk_ball', 'cobblemon:ultra_ball', 'cobblemon:choice_specs', 'cobblemon:focus_sash', 'cobblemon:focus_band', 'cobblemon:twisted_spoon', 'cobblemon:wise_glasses', 'cobblemon:dragon_fang', 'cobblemon:eviolite', 'cobblemon:magnet', 'cobblemon:fairy_feather', 'cobblemon:spell_tag', 'cobblemon:link_cable', 'cobblemon:relic_coin_pouch', 'sunlit_cobblemon:greater_tm_pack', '4x cobblemon:medicinal_brew', 'cobblemon:pp_max', 'cobblemon:max_elixir', 'cobblemon:elixir', 'cobblemon:rare_candy', 'cobblemon:max_revive', 'cobblemon:full_restore', 'cobblemon:max_potion', 'cobblemon:sky_tumblestone', 'cobblemon:black_tumblestone', 'cobblemon:tumblestone', 'cobblemon:mirror_herb', 'cobblemon:white_herb', 'cobblemon:power_herb', '4x cobblemon:exp_candy_xl', 'cobblemon:leftovers', 'cobblemon:choice_scarf', 'cobblemon:choice_band'])
  createLootTable("beast_loot_ball", ['cobblemon:beast_ball', 'sunlit_cobblemon:prismatic_tm_pack'])
}
