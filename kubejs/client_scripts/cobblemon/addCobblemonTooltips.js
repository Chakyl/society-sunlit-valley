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
  global.cobblemonFarmerProducts.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "crop");
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
  global.cobblemonArtisan.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "wood");
  });
  global.cobbleCrops.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "crop");
  });

  tooltip.add(
    "sunlit_cobblemon:silph_scope",
    Text.translatable(`tooltip.sunlit_cobblemon.silph_scope.description`).green()
  );
  tooltip.add(
    "sunlit_cobblemon:silph_scope",
    Text.translatable(`tooltip.sunlit_cobblemon.silph_scope.equip`).gold()
  );
  tooltip.add(
    "sunlit_cobblemon:poke_bobber",
    Text.translatable(`tooltip.sunlit_cobblemon.poke_bobber.description`).gold()
  );
  tooltip.add(
    "sunlit_cobblemon:great_poke_bobber",
    Text.translatable(`tooltip.sunlit_cobblemon.great_poke_bobber.description`).gold()
  );
  tooltip.add(
    "sunlit_cobblemon:ultra_poke_bobber",
    Text.translatable(`tooltip.sunlit_cobblemon.ultra_poke_bobber.description`).gold()
  );
  tooltip.add(
    "sunlit_cobblemon:master_poke_bobber",
    Text.translatable(`tooltip.sunlit_cobblemon.master_poke_bobber.description`).gold()
  );
  tooltip.add(
    "unimplemented_items:repel",
    Text.translatable(`tooltip.unimplemented_items.repel.description`).gray()
  );
  tooltip.add(
    "unimplemented_items:repel",
    Text.translatable("tooltip.society.area", `21x21x21`).green()
  );
  tooltip.addAdvanced("sunlit_cobblemon:sun_mirror", (item, advanced, text) => {
    if (item.nbt && item.nbt.monData && item.nbt.monData.getString("type")) {
      let data = item.nbt.monData
      if (data) {
        text.add(1, [
          Text.translatable(
            "tooltip.sunlit_cobblemon.sun_mirror.pokemon"
          ).gray(),
          Text.translate(`cobblemon.species.${data.getString("type")}.name`).gold(),
          Text.translatable(
            "tooltip.sunlit_cobblemon.sun_mirror.level", Number(data.getInt("level"))
          ).gray(),
        ]);
        if (data.getString("variant")) {
          text.add(2, [
            Text.translatable(
              "tooltip.sunlit_cobblemon.sun_mirror.variant", data.getString("variant")
            ).gray()
          ]);
          text.add(3, [
            Text.translatable("tooltip.sunlit_cobblemon.sun_mirror.insert").green()
          ]);
        } else {
          text.add(2, [
            Text.translatable("tooltip.sunlit_cobblemon.sun_mirror.insert").green()
          ]);
        }
      } else {
        text.add(1, [
          Text.translatable("tooltip.sunlit_cobblemon.sun_mirror.description").gray()
        ]);
      }
    } else {
      text.add(1, [
        Text.translatable("tooltip.sunlit_cobblemon.sun_mirror.description").gray()
      ]);
    }
  });
  tooltip.addAdvanced("sunlit_cobblemon:mystery_gift", (item, advanced, text) => {
    if (item.nbt) {

      let { ot, pokemon } = item.nbt;
      if (item.nbt.pokemon !== null) {
        text.add(1, [
          Component.translatable(`cobblemon.species.${pokemon}.name`).green(),
        ]);
        let resolvedOT = ot == null || ot === "Chakyl" ? "Chakyl" : Component.translatable(`dialog.npc.${ot}.name`).getString()
        text.add(2, [
          Component.translatable("tooltip.sunlit_cobblemon.mystery_gift.from", resolvedOT).gray(),
        ]);
      }
    }
    if (item.nbt == null || item.nbt.pokemon == null) {
      text.add(1, [
        Text.translatable("tooltip.sunlit_cobblemon.mystery_gift.random").green()
      ]);
      text.add(2, [
        Component.translatable("tooltip.sunlit_cobblemon.mystery_gift.from", "Chakyl").gray(),
      ]);
    }
  });
  // Gach
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

  const formatIVS = (ivs) => {
    let ivArray = [];
    for (let index = 0; index < 6; index++) {
      ivArray.push(ivs.get(index))

    }
    return ivArray;
  }
  tooltip.addAdvanced('cobbreeding:pokemon_egg', (item, advanced, text) => {
    if (item.nbt) {
      let data = item.nbt
      if (data) {
        let startIndex = 2;
        if (!data.getString("form").equals("normal")) {
          text.add(startIndex, [
            Text.translatable(
              "tooltip.cobbreeding.cobblemon.pokemon_egg.form"
            ).gray(),
            Text.translate(data.getString("form")).red(),
          ]);
          startIndex = 3

        }
        text.add(startIndex + 1, [
          Text.translatable(
            "tooltip.cobbreeding.cobblemon.pokemon_egg.ability"
          ).gray(),
          Text.translate(`cobblemon.ability.${data.getString("ability")}`).green(),
        ]);
        text.add(startIndex + 2, [
          Text.translatable(
            "tooltip.cobbreeding.cobblemon.pokemon_egg.nature"
          ).gray(),
          Text.translate(`cobblemon.nature.${data.getString("nature").split(":")[1]}`).gold(),
        ]);
        text.add(startIndex + 3, [
          Text.translatable(
            "tooltip.cobbreeding.cobblemon.pokemon_egg.ivs",
            formatIVS(data.get("ivs")).toString().replace(/,/g, '/')
          ).lightPurple()
        ]);
        if (data.getInt("shiny") !== 0) {
          text.add(startIndex + 4, [
            Text.translatable(
              "tooltip.cobbreeding.cobblemon.pokemon_egg.shiny"
            ).aqua()
          ]);
        } else {
          text.add(startIndex + 4, [
            Text.translatable(
              "tooltip.cobbreeding.cobblemon.pokemon_egg.not_shiny"
            ).darkGray()
          ]);
        }
      }
    }
  });
  // TM Packs
  tooltip.add("sunlit_cobblemon:tm_pack",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add("sunlit_cobblemon:tm_pack",
    Text.translatable("tooltip.sunlit_cobblemon.greater_tm_pack.description.chance").green(),
  );
  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.translatable("tooltip.sunlit_cobblemon.greater_tm_pack.description.chance").green(),
  );
  tooltip.add(
    "sunlit_cobblemon:greater_tm_pack",
    Text.translatable("tooltip.sunlit_cobblemon.greater_tm_pack.description").green(),
  );
  tooltip.add(
    "sunlit_cobblemon:prismatic_tm_pack",
    Text.translatable("tooltip.society.right_click_open").gray()
  );
  tooltip.add(
    "sunlit_cobblemon:prismatic_tm_pack",
    Text.translatable("tooltip.sunlit_cobblemon.prismatic_tm_pack.description").green(),
  );

  // Misc
  tooltip.add("sunlit_cobblemon:berry_capsule", Text.translatable(`tooltip.sunlit_cobblemon.berry_capsule.description`).gold());
  tooltip.add("sunlit_cobblemon:berry_capsule", Text.translatable("tooltip.society.right_click_open").gray());

  tooltip.add("sunlit_cobblemon:pofflet_box", Text.translatable(`tooltip.sunlit_cobblemon.pofflet_box.description`).gold());
  tooltip.add("sunlit_cobblemon:pofflet_box", Text.translatable("tooltip.society.right_click_open").gray());

  tooltip.add('sunlit_cobblemon:sun_drops', Text.translatable(`tooltip.sunlit_cobblemon.sun_drops.description`).gray());
  tooltip.add('sunlit_cobblemon:mystica_branch', Text.translatable(`tooltip.sunlit_cobblemon.mystica_branch.description`).gray());

  tooltip.add('sunlit_cobblemon:sun_essence', Text.translatable(`tooltip.sunlit_cobblemon.sun_essence.description`).gray());
  tooltip.add('sunlit_cobblemon:sun_essence', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());

  tooltip.add('sunlit_cobblemon:mystica_cookie', Text.translatable(`tooltip.sunlit_cobblemon.mystica_cookie.description`).gray());
  tooltip.add('sunlit_cobblemon:mystica_cookie', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  tooltip.add('sunlit_cobblemon:sunlit_league_medallion', Text.translatable(`tooltip.sunlit_cobblemon.sunlit_league_medallion.description`).gray());

  tooltip.add('sunlit_cobblemon:poke_radar', Text.translatable(`tooltip.sunlit_cobblemon.poke_radar.description`).gray());
  tooltip.add('sunlit_cobblemon:poke_radar', Text.translatable(`tooltip.sunlit_cobblemon.poke_radar.left_click`).gray());
  tooltip.add('sunlit_cobblemon:poke_radar', Text.translatable(`tooltip.sunlit_cobblemon.poke_radar.right_click`).gray());
  tooltip.add('sunlit_cobblemon:poke_radar', Text.translatable(`tooltip.sunlit_cobblemon.poke_radar.shift_right_click`).gray());

  tooltip.add('sunlit_cobblemon:blooming_ring', Text.translatable(`tooltip.sunlit_cobblemon.blooming_ring.description`).gray());
  tooltip.add('sunlit_cobblemon:blooming_ring', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  tooltip.add('sunlit_cobblemon:cornucopia_of_greed', Text.translatable(`tooltip.sunlit_cobblemon.cornucopia_of_greed.description`).gray());
  tooltip.add('sunlit_cobblemon:cornucopia_of_greed', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());

  tooltip.add('sunlit_cobblemon:fire_pledge', Text.translatable(`tooltip.sunlit_cobblemon.fire_pledge.description`).red());
  tooltip.add('sunlit_cobblemon:grass_pledge', Text.translatable(`tooltip.sunlit_cobblemon.grass_pledge.description`).green());
  tooltip.add('sunlit_cobblemon:water_pledge', Text.translatable(`tooltip.sunlit_cobblemon.water_pledge.description`).aqua());

  tooltip.add('sunlit_cobblemon:blazing_calamity', Text.translatable(`tooltip.sunlit_cobblemon.blazing_calamity.description`).gray());
  tooltip.add('sunlit_cobblemon:blazing_calamity', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());

  tooltip.add('sunlit_cobblemon:frozen_calamity', Text.translatable(`tooltip.sunlit_cobblemon.frozen_calamity.description`).gray());
  tooltip.add('sunlit_cobblemon:frozen_calamity', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());

  tooltip.add('sunlit_cobblemon:moongeist_crystal', Text.translatable(`tooltip.sunlit_cobblemon.moongeist_crystal.description`).gray());
  tooltip.add('sunlit_cobblemon:moongeist_crystal', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());

  tooltip.add('sunlit_cobblemon:tabula_rasa', Text.translatable(`tooltip.sunlit_cobblemon.tabula_rasa.description`).gray());
  tooltip.add('sunlit_cobblemon:tabula_rasa', Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  tooltip.add('sunlit_cobblemon:ominous_black_stake', Text.translatable(`tooltip.sunlit_cobblemon.ominous_black_stake.description`).gray());
  tooltip.add('sunlit_cobblemon:gem_box', Text.translatable(`tooltip.sunlit_cobblemon.gem_box.description`).gray());
  tooltip.add('sunlit_cobblemon:mystica_nectar', Text.translatable(`tooltip.sunlit_cobblemon.mystica_nectar.description`).gray());
  tooltip.add('sunlit_cobblemon:rainbow_steam', Text.translatable(`tooltip.sunlit_cobblemon.rainbow_steam.description`).gray());
  tooltip.add('sunlit_cobblemon:swampy_mystica_branch', Text.translatable(`tooltip.sunlit_cobblemon.swampy_mystica_branch.description`).gray());
  [
    "ability_capsule", "ability_patch",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  });


  [
    "growth_mulch", "rich_mulch", "surprise_mulch", "loamy_mulch",
    "coarse_mulch", "peat_mulch", "humid_mulch", "sandy_mulch",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mulch.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.mulch`).green());
  });

  [
    "ability_shield", "absorb_bulb", "air_balloon", "assault_vest", "binding_band",
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
    // tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.held.${item}`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.held_item`).gold());
  });
  [
    "dawn_stone", "dusk_stone", "fire_stone", "ice_stone", "leaf_stone", "moon_stone", "shiny_stone", "sun_stone", "thunder_stone", "water_stone"
  ].forEach((item) => {
    // tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item.stone`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item`).lightPurple());
  });

  ['whimsy_deco:washing_machine', 'whimsy_deco:orange_lawn_mower', 'refurbished_furniture:light_stove', 'whimsy_deco:fan', 'beachparty:mini_fridge'].forEach((item) => {
    tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item.rotom`).gray());
    tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item`).lightPurple());
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
    // tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item.${item.item}`).gray());
    if (item.crit)
      tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.crit.${item.crit}`).darkPurple());
    tooltip.add(`cobblemon:${item.item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.evo_item`).lightPurple());
  });

  [
    "lonely_mint", "adamant_mint", "naughty_mint", "brave_mint", "bold_mint", "impish_mint", "lax_mint", "relaxed_mint", "modest_mint",
    "mild_mint", "rash_mint", "quiet_mint", "calm_mint", "gentle_mint", "careful_mint", "sassy_mint", "timid_mint", "hasty_mint", "jolly_mint",
    "naive_mint", "serious_mint"
  ].forEach((item) => {
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
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  });

  ["courage", "health", "mighty", "quick", "smart", "yough", "brittle", "coward", "numb", "sickly", "slow", "weak"].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`item.cobblemon.${item}_candy.tooltip`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  });

  ["health", "muscle", "resist", "genius", "clever", "swift", "fresh_start"].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`item.cobblemon.${item}_mochi.tooltip`).gray());
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  });
  const clientPoffletMap = new Map([
    ["sunlit_cobblemon:plain_pofflet", { baseIncrease: 5, positiveTypes: ["normal", "flying"], tripleBonus: ["normal"], }],
    ["sunlit_cobblemon:mossy_pofflet", { baseIncrease: 10, positiveTypes: ["grass", "bug"] }],
    ["sunlit_cobblemon:frosty_pofflet", { baseIncrease: 10, positiveTypes: ["water", "ice", "steel"], decreaseOthers: true }],
    ["sunlit_cobblemon:deadly_pofflet", { baseIncrease: 10, positiveTypes: ["poison", "ghost", "dark"], decreaseOthers: true }],
    ["sunlit_cobblemon:spicy_pofflet", { baseIncrease: 10, positiveTypes: ["fire", "fighting", "electric"], decreaseOthers: true }],
    ["sunlit_cobblemon:captivating_pofflet", { baseIncrease: 15, positiveTypes: ["fairy", "psychic"] }],
    ["sunlit_cobblemon:crystalline_pofflet", { baseIncrease: 10, positiveTypes: ["dragon", "ground", "rock"], decreaseOthers: true }],
    ["sunlit_cobblemon:mana_pofflet", { baseIncrease: 15, positiveTypes: [] }],
  ]);
  ["plain", "frosty", "captivating", "crystalline", "deadly", "mossy", "spicy", "mana"].forEach((pofflet) => {
    let effect = clientPoffletMap.get(`sunlit_cobblemon:${pofflet}_pofflet`);
    tooltip.add(`sunlit_cobblemon:${pofflet}_pofflet`, Text.translatable(`tooltip.sunlit_cobblemon.pofflet`, String(effect.baseIncrease)).gray());
    if (effect.positiveTypes.length > 0) tooltip.add(`sunlit_cobblemon:${pofflet}_pofflet`, Text.translatable(`tooltip.sunlit_cobblemon.pofflet.loved_by_${effect.positiveTypes.length == 2 ? "two" : "three"}`, effect.positiveTypes.map((type) => Text.translatable(`cobblemon.type.${type}`))).green())
    if (effect.decreaseOthers) tooltip.add(`sunlit_cobblemon:${pofflet}_pofflet`, Text.translatable(`tooltip.sunlit_cobblemon.pofflet.hated`).red())
    if (pofflet.equals("plain")) tooltip.add(`sunlit_cobblemon:${pofflet}_pofflet`, Text.translatable(`tooltip.sunlit_cobblemon.pofflet.triple_bonus`).green())
  });

  [
    "revival_herb", "big_root", "energy_root",
    "antidote", "awakening", "burn_heal", "ice_heal", "paralyze_heal", "full_heal",
    "revive", "max_revive", "ether", "max_ether", "elixir", "max_elixir",
    "berry_juice", "remedy", "fine_remedy", "superb_remedy", "heal_powder",
    "potion", "super_potion", "hyper_potion", "max_potion", "full_restore"
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.medicine`).green());
  });

  [
    "calcium", "carbos", "hp_up", "iron", "protein", "zinc", "pp_up", "pp_max",
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item}`, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.vitamin`).aqua());
  });
  ['cobblemon:helix_fossil', 'cobblemon:dome_fossil', 'cobblemon:old_amber_fossil', 'cobblemon:root_fossil', 'cobblemon:claw_fossil', 'cobblemon:skull_fossil', 'cobblemon:armor_fossil', 'cobblemon:cover_fossil', 'cobblemon:plume_fossil', 'cobblemon:jaw_fossil', 'cobblemon:sail_fossil', 'cobblemon:fossilized_bird', 'cobblemon:fossilized_fish', 'cobblemon:fossilized_drake', 'cobblemon:fossilized_dino'].forEach((item) => {
    if (item.includes("fossilized")) {
      tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.combination_fossil_info`).gray());
      tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.combination_fossil`).gold());
    }
    else {
      tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.fossil`).gold());
    }
  });
  ['unimplemented_items:bottle_cap_gold', 'unimplemented_items:bottle_cap', 'unimplemented_items:bottle_cap_atk', 'unimplemented_items:bottle_cap_sd', 'unimplemented_items:bottle_cap_def', 'unimplemented_items:bottle_cap_sa', 'unimplemented_items:bottle_cap_spd', 'unimplemented_items:bottle_cap_hp', 'unimplemented_items:dry_root'].forEach((item) => {
    tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.unimplemented_items.${item.split(":")[1]}`).gray());
    tooltip.add(item, Text.translatable(`tooltip.sunlit_cobblemon.cobblemon.consumable`).red());
  });

  tooltip.addAdvanced("sunlit_cobblemon:wormhole_generator",
    (item, advanced, text) => {
      text.add(1, [Text.translatable("sunlit_cobblemon.society.wormhole_generator.description").gray()]);
      text.add(2, [Text.translatable("sunlit_cobblemon.society.wormhole_generator.right_click").gray()]);
      text.add(3, [Text.translatable("sunlit_cobblemon.society.wormhole_generator.shift_right_click").gray()]);
      if (item.nbt) {
        text.add(4, [
          Text.translatable(
            "sunlit_cobblemon.society.wormhole_generator.dust_count",
            item.nbt.dust
          ).darkPurple(),
        ]);
      } else {
        text.add(4, [
          Text.translatable(
            "sunlit_cobblemon.society.wormhole_generator.dust_count",
            0
          ).darkPurple(),
        ]);
      }
    }
  );

  [
    {
      item: "sunlit_cobblemon:the_art_of_battle",
      description: "The Sunlit league pays out 25% more per battle."
    },
    {
      item: "sunlit_cobblemon:berry_labor_and_capital",
      description: "+5 Pokémon worker slots.",
    },
    {
      item: "sunlit_cobblemon:bottlecaps_and_nothingness",
      description: "Small chance to find Bottlecaps in loot chests.",
    },
    {
      item: "sunlit_cobblemon:braiding_surprisegrass",
      description: "2x as likely to find Pokémon when mining ores and harvesting crops/fruit trees.",
    },
    {
      item: "sunlit_cobblemon:the_gachamonbler",
      description: "Gachamon Capsule Pokémon are 2x as likely to be shiny. Gold Quality and higher capsules will exclusively spawn from the bonus pool.",
    },
    {
      item: "sunlit_cobblemon:mukbeth",
      description: "Grimer, Trubbish, and their evolutions are no longer caught by Poké Bobbers.",
    },
    {
      item: "sunlit_cobblemon:savage_sun",
      description: "Sun Raid Statues have a 15% chance to ignore their activation cooldown when used."
    },
  ].forEach((book) => {
    tooltip.add(
      book.item,
      global.translatableWithFallback(`sunlit_cobblemon.books.${book.item.path}.description`, book.description).gray()
    );
    tooltip.add(
      book.item,
      Text.translatable("tooltip.society.skill_book.use").green()
    );
  });
});
