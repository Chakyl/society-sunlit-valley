// priority: -21

const getClientShinyChance = (nbt) => {
  let value = "0.1";
  if (nbt && nbt.quality_food && nbt.quality_food.quality) {
    if (nbt.quality_food.quality == 1.0) value = "0.5";
    if (nbt.quality_food.quality == 2.0) value = "1";
    if (nbt.quality_food.quality == 3.0) value = "2";
  }
  return value;
};
ItemEvents.tooltip((tooltip) => {
  global.cobbleAdventuring.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "meat");
  });
  global.cobbleGeology.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  global.cobblePristineTypeGems.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  global.cobblemonCooking.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "crop");
  });
  global.cobblemonPreserves.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "wood");
  });
  global.cobblemonDehydrated.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "wood");
  });
  global.cobbleCrops.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "crop");
  });

  tooltip.add(
    "sunlit_cobblemon:silph_scope",
    Text.green("Allows you to enter the World of Pokémon!"),
  );
  tooltip.add(
    "sunlit_cobblemon:silph_scope",
    Text.gold("Right click to equip!"),
  );
  tooltip.add(
    "sunlit_cobblemon:poke_bobber",
    Text.gold("Fishes up a common Pokémon with every catch"),
  );
  tooltip.add(
    "sunlit_cobblemon:great_poke_bobber",
    Text.gold("Fishes up an uncommon Pokémon with every catch"),
  );
  tooltip.add(
    "sunlit_cobblemon:ultra_poke_bobber",
    Text.gold("Fishes up a rare Pokémon with every catch"),
  );
  tooltip.add(
    "sunlit_cobblemon:master_poke_bobber",
    Text.gold("Fishes up an epic Pokémon with every catch"),
  );
  // Legendaries

  tooltip.addAdvanced("sunlit_cobblemon:star_pixie", (item, advanced, text) => {
    if (item.nbt && item.nbt.getString("type")) {
      let data = global.cobblemonLegendaryMap.get(
        `${item.nbt.getString("type")}`,
      );
      if (data) {
        if (tooltip.shift) {
          data.legendaries.forEach((legendary, index) => {
            text.add(index + 1, [
              Text.gray(`Summons §${data.color}`),
              Text.translate(
                `cobblemon.species.${legendary.pokemonId}.name`
              ).gold(),
              Text.gray(` §7from a §${data.color}`),
              Text.translate(
                `entity.${legendary.entity.namespace}.${legendary.entity.path}`,
              ).gold(),
            ]);
          });
        } else {
          text.add(1, [
            `§7Pixe Type: §${data.color}${global.formatName(
              `${item.nbt.getString("type")}`,
            )}`,
          ]);
          text.add(2, [
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] to view Pokémon that can be summoned"),
          ]);
        }
      }
    }
  });
  // Gachapon
  tooltip.addAdvanced(
    "sunlit_cobblemon:gachamon_capsule",
    (item, advanced, text) => {
      text.add(
        1,
        Text.translatable(
          "tooltip.sunlit_cobblemon.gachamon_capsule.description",
        ).gray(),
      );
      if (item.nbt) {
        text.add(
          2,
          Text.translatable(
            `tooltip.sunlit_cobblemon.gachamon_capsule.description.${item.nbt.getString("type")}`,
          ).aqua(),
        );
        text.add(
          3,
          Text.translatable(
            "tooltip.sunlit_cobblemon.gachamon_capsule.shiny_chance",
            `${getClientShinyChance(item.nbt)}`,
          ).green(),
        );
      } else {
        text.add(
          2,
          Text.translatable(
            `tooltip.sunlit_cobblemon.gachamon_capsule.description.common`,
          ).aqua(),
        );
      }
    },
  );
  // TM Packs
  tooltip.add("sunlit_cobblemon:tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:tm_pack", Text.green("12% chance for a TM"));

  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.gray("Right click to open"),
  );
  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.green("20% chance for a TM"),
  );
  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.green("At least one TM guaranteed!"),
  );

  tooltip.add(
    "sunlit_cobblemon:prismatic_tm_pack",
    Text.gray("Right click to open"),
  );
  tooltip.add(
    "sunlit_cobblemon:prismatic_tm_pack",
    Text.green("Only contains TMs"),
  );

  tooltip.add(
    "sunlit_cobblemon:berry_capsule",
    Text.gray("Right click to open"),
  );
  tooltip.add(
    "sunlit_cobblemon:berry_capsule",
    Text.green("Contains common berries"),
  );


  [
    "ability_capsule", "ability_patch",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.special.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).gray());
  });


  [
    "growth_mulch", "rich_mulch", "surprise_mulch", "loamy_mulch",
    "coarse_mulch", "peat_mulch", "humid_mulch", "sandy_mulch",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mulch.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mulch`).green());
  });

  [
    "ability_shield", "absorb_bulb", "air_balloon", "assault_vest", "big_root", "binding_band",
    "black_sludge", "blunder_policy", "bright_powder", "cell_battery", "choice_band", "choice_scarf",
    "choice_specs", "cleanse_tag", "covert_cloak", "damp_rock", "deep_sea_scale", "deep_sea_tooth",
    "destiny_knot", "eject_button", "eject_pack", "everstone", "eviolite", "expert_belt", "exp_share",
    "flame_orb", "float_stone", "focus_band", "focus_sash", "heat_rock", "heavy_duty_boots", "icy_rock",
    "iron_ball", "kings_rock", "leftovers", "life_orb", "light_ball", "light_clay", "loaded_dice", "lucky_egg",
    "medicinal_leek", "mental_herb", "metal_powder", "metronome", "mirror_herb", "muscle_band", "power_herb",
    "protective_pads", "punching_glove", "quick_claw", "quick_powder", "razor_claw", "razor_fang", "red_card",
    "ring_target", "rocky_helmet", "room_service", "safety_goggles", "scope_lens", "shed_shell", "shell_bell",
    "smoke_ball", "smooth_rock", "soothe_bell", "sticky_barb", "terrain_extender", "throat_spray", "toxic_orb",
    "utility_umbrella", "weakness_policy", "white_herb", "wide_lens", "wise_glasses", "zoom_lens", "black_belt",
    "black_glasses", "charcoal_stick", "dragon_fang", "hard_stone", "magnet", "metal_coat", "miracle_seed",
    "mystic_water", "never_melt_ice", "poison_barb", "sharp_beak", "silk_scarf", "silver_powder", "soft_sand",
    "spell_tag", "fairy_feather", "twisted_spoon", "power_anklet", "power_band", "power_belt", "power_bracer",
    "power_lens", "power_weight",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.held.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.held_item`).gold());
  });
  [
    "dawn_stone", "dusk_stone", "fire_stone", "ice_stone", "leaf_stone", "moon_stone", "shiny_stone", "sun_stone", "thunder_stone", "water_stone"
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item.stone`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item`).lightPurple());
  });
  [
    { item: "auspicious_armor", },
    { item: "black_augurite", },
    { item: "chipped_pot" },
    { item: "cracked_pot" },
    { item: "deep_sea_scale", crit: "trade" },
    { item: "deep_sea_tooth", crit: "trade" },
    { item: "dragon_scale", crit: "trade" },
    { item: "dubious_disc", crit: "trade" },
    { item: "electirizer", crit: "trade" },
    { item: "galarica_cuff" },
    { item: "galarica_wreath" },
    { item: "kings_rock", crit: "trade" },
    { item: "link_cable", },
    { item: "magmarizer", crit: "trade" },
    { item: "malicious_armor", },
    { item: "masterpiece_teacup" },
    { item: "metal_alloy", },
    { item: "metal_coat", crit: "trade" },
    { item: "oval_stone", },
    { item: "peat_block", crit: "moon" },
    { item: "prism_scale", crit: "trade" },
    { item: "protector", crit: "trade" },
    { item: "razor_claw", crit: "night" },
    { item: "razor_fang", crit: "night" },
    { item: "reaper_cloth", crit: "trade" },
    { item: "sachet", crit: "trade" },
    { item: "scroll_of_darkness" },
    { item: "scroll_of_waters" },
    { item: "shell_helmet", },
    { item: "strawberry_sweet", crit: "form_time" },
    { item: "love_sweet", crit: "form_time" },
    { item: "berry_sweet", crit: "form_time" },
    { item: "clover_sweet", crit: "form_time" },
    { item: "flower_sweet", crit: "form_time" },
    { item: "star_sweet", crit: "form_time" },
    { item: "ribbon_sweet", crit: "form_time" },
    { item: "sweet_apple", },
    { item: "syrupy_apple", },
    { item: "tart_apple", },
    { item: "unremarkable_teacup" },
    { item: "upgrade", crit: "trade" },
    { item: "whipped_dream", crit: "trade" },
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item.${item.item}`).gray());
    if (item.crit)
      tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.crit.${item.crit}`).darkPurple());
    tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item`).lightPurple());
  });

  [
    "lonely_mint", "adamant_mint", "naughty_mint", "brave_mint", "bold_mint", "impish_mint", "lax_mint", "relaxed_mint", "modest_mint",
    "mild_mint", "rash_mint", "quiet_mint", "calm_mint", "gentle_mint", "careful_mint", "sassy_mint", "timid_mint", "hasty_mint", "jolly_mint",
    "naive_mint", "serious_mint"
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mint.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mint`).darkGreen());
  });

  [
    "normal_gem", "water_gem", "fire_gem", "grass_gem", "dragon_gem", "ghost_gem", "ground_gem",
    "steel_gem", "fairy_gem", "rock_gem", "psychic_gem", "electric_gem", "bug_gem", "poison_gem",
    "ice_gem", "dark_gem", "fighting_gem", "flying_gem",
    "x_accuracy", "x_speed", "x_special_defence", "x_special_attack", "x_defence", "x_attack",
    "dire_hit", "guard_spec",
    "exp_candy_xs", "exp_candy_s", "exp_candy_m", "exp_candy_l", "exp_candy_xl", "rare_candy",
    "health_feather", "muscle_feather", "resist_feather", "genius_feather", "clever_feather", "swift_feather"
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumables.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).gray());
  });

  [
    "revival_herb", "big_root", "energy_root",
    "antidote", "awakening", "burn_heal", "ice_heal", "paralyze_heal", "full_heal",
    "revive", "max_revive", "ether", "max_ether", "elixir", "max_elixir",
    "berry_juice", "remedy", "fine_remedy", "superb_remedy", "heal_powder",
    "potion", "super_potion", "hyper_potion", "max_potion", "full_restore"
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.medicine.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.medicine`).red());
  });

  [
    "calcium", "carbos", "hp_up", "iron", "protein", "zinc", "pp_up", "pp_max",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.medicine.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.vitamin`).aqua());
  });
});
