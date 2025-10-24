// priority: -21
ItemEvents.tooltip((tooltip) => {
  global.cobbleAdventuring.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "meat");
  });
  global.cobbleGeology.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  global.cobblemonPreserves.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "wood");
  });
  global.cobbleCrops.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "crop");
  });

  tooltip.add("sunlit_cobblemon:poke_bobber", Text.gold("Fishes up a common Pokémon with every catch"));
  tooltip.add("sunlit_cobblemon:great_poke_bobber", Text.gold("Fishes up an uncommon Pokémon with every catch"));
  tooltip.add("sunlit_cobblemon:ultra_poke_bobber", Text.gold("Fishes up a rare Pokémon with every catch"));
  tooltip.add("sunlit_cobblemon:master_poke_bobber", Text.gold("Fishes up an epic Pokémon with every catch"));
  
  tooltip.add("sunlit_cobblemon:tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:tm_pack", Text.green("12% chance for a TM"));

  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("20% chance for a TM"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("At least one TM guaranteed!"));

  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.green("Only contains TMs"));

  tooltip.add("sunlit_cobblemon:berry_capsule", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:berry_capsule", Text.green("Contains common berries"));

  tooltip.add("cobblemon:ability_capsule", Text.gray("Changes the ability of the Pokémon it is used on to their alternative standard ability"));
  tooltip.add("cobblemon:ability_patch", Text.gray("Changes the ability of the Pokémon it is used on to their alternative hidden ability"));

  [
    {
      item: "cobblemon:growth_mulch",
      desc: "Increases the growth rate of the Berry Tree that it is used on for 3 harvests.",
    },
    {
      item: "cobblemon:rich_mulch",
      desc: "Increases the yield of the harvest of the Berry Tree that it is used on for 3 harvests.",
    },
    {
      item: "cobblemon:surprise_mulch",
      desc: "Increases the chances for a mutation of a Berry on the Berry Tree for 3 harvests. It can also mutate a fully grown Revival Herb into a Mental Herb, Power Herb, White Herb, or Mirror Herb.",
    },
    {
      item: "cobblemon:loamy_mulch",
      desc: "Makes the Berry Tree act like it's in a Plains biome for an infinite duration.",
    },
    {
      item: "cobblemon:coarse_mulch",
      desc: "Makes the Berry Tree act like it's in a Mountains or Taiga biome for an infinite duration.",
    },
    {
      item: "cobblemon:peat_mulch",
      desc: "Makes the Berry Tree act like it's in a Forest biome for an infinite duration.",
    },
    {
      item: "cobblemon:humid_mulch",
      desc: "Makes the Berry Tree act like it's in a Jungle or Swamp biome for an infinite duration.",
    },
    {
      item: "cobblemon:sandy_mulch",
      desc: "Makes the Berry Tree act like it's in an Arid biome for an infinite duration.",
    },
  ].forEach((book) => {
    tooltip.add(book.item, Text.gray(book.desc));
  });

  [
    {
      item: "ability_shield",
      desc: "Prevents the holder's ability from being changed or suppressed.",
    },
    {
      item: "absorb_bulb",
      desc: "Raises the holder's Sp. Atk by 1 stage when hit by a damaging Water-type move.",
    },
    {
      item: "air_balloon",
      desc: "Prevents the holder from being hit by Ground-type moves. Breaks if hit by another type of damaging move.",
    },
    {
      item: "assault_vest",
      desc: "Raises the holder's Sp. Def but prevents the use of status moves.",
    },
    {
      item: "big_root",
      desc: "Boosts the amount of HP the holder recovers from HP-stealing moves.",
    },
    {
      item: "binding_band",
      desc: "Increases damage inflicted by the holder's binding moves in between turns from 1/8 to 1/6 of target's HP.",
    },
    {
      item: "black_sludge",
      desc: "If the holder is a Poison type, its HP is gradually restored throughout a battle. It damages any other type.",
    },
    {
      item: "blunder_policy",
      desc: "Increases the holder's Speed by 2 stages if the holder's move misses.",
    },
    { item: "bright_powder", desc: "Reduces the accuracy of enemy pokemon's moves by 10%." },
    {
      item: "cell_battery",
      desc: "Raises the holder's Attack by one stage when hit by a damaging Electric-type move.",
    },
    {
      item: "choice_band",
      desc: "Boosts the holder's Attack but only allows the use of one move.",
    },
    {
      item: "choice_scarf",
      desc: "Boosts the holder's Speed but only allows the use of one move.",
    },
    {
      item: "choice_specs",
      desc: "Boosts the holder's Special Attack but only allows the use of one move.",
    },
    { item: "cleanse_tag", desc: "Has no effect." },
    {
      item: "covert_cloak",
      desc: "Protects the holder from additional effects from other Pokémon.",
    },
    { item: "damp_rock", desc: "Extends the duration of rain from 5 to 8 turns." },
    { item: "deep_sea_scale", desc: "Boosts Clamperl's Sp. Def stat." },
    { item: "deep_sea_tooth", desc: "Boosts Clamperl's Sp. Atk stat." },
    {
      item: "destiny_knot",
      desc: "Infatuates the opponent when the holder becomes infatuated.",
    },
    {
      item: "eject_button",
      desc: "Holder immediately switches out if struck by a damaging move.",
    },
    {
      item: "eject_pack",
      desc: "Switches out the holder if any stats are lowered. Consumed after use.",
    },
    { item: "everstone", desc: "Prevents the holder from evolving." },
    {
      item: "eviolite",
      desc: "Holder's Defense and Sp. Defense is boosted by 50% if they are still able to evolve.",
    },
    {
      item: "expert_belt",
      desc: "Boosts the damage of the holder's super effective moves by 20%.",
    },
    {
      item: "exp_share",
      desc: "Allows the holder to receive a share of experience from battles without participating.",
    },
    { item: "flame_orb", desc: "Burns the holder." },
    { item: "float_stone", desc: "Halves the holder's weight." },
    {
      item: "focus_band",
      desc: "Provides a chance for the holder to survive a potential KO attack, leaving it with 1 HP.",
    },
    {
      item: "focus_sash",
      desc: "At full HP, guarantees the holder survives a hit that would KO it, leaving it with 1 HP.",
    },
    { item: "heat_rock", desc: "Extends the duration of harsh sunlight from 5 to 8 turns." },
    {
      item: "heavy_duty_boots",
      desc: "Prevents the effects of traps set on the battlefield.",
    },
    { item: "icy_rock", desc: "Extends the duration of hail or snow from 5 to 8 turns." },
    { item: "iron_ball", desc: "Reduces the holder's Speed by 50% and grounds the holder." },
    {
      item: "kings_rock",
      desc: "When the holder successfully inflicts damage, the target may also flinch.",
    },
    { item: "leftovers", desc: "Gradually restores the holder's HP throughout a battle." },
    {
      item: "life_orb",
      desc: "Boosts the power of the holder's moves, but causes recoil damage.",
    },
    { item: "light_ball", desc: "Doubles the Attack and Sp. Atk of Pikachu when held." },
    {
      item: "light_clay",
      desc: "Protective moves like Light Screen and Reflect will be effective longer.",
    },
    {
      item: "loaded_dice",
      desc: "The holder's multi-strike moves will hit at least 4 times.",
    },
    {
      item: "lucky_egg",
      desc: "Increases the amount of experience earned by the holder in battle.",
    },
    {
      item: "medicinal_leek",
      desc: "Boosts the critical hit ratio of a Farfetch'd or Sirfetch'd that holds it by two stages.",
    },
    { item: "mental_herb", desc: "Grounds the holder, and halves their speed." },
    {
      item: "metal_powder",
      desc: "Raises and untransformed Ditto's Defense and Special Defense by 50%.",
    },
    { item: "metronome", desc: "Boosts the power of moves used consecutively." },
    {
      item: "mirror_herb",
      desc: "Allows the holder to mirror an opponent's stat increases to boost its own stats. Consumed after use.",
    },
    { item: "muscle_band", desc: "Boosts the power of the holder's physical moves." },
    {
      item: "power_herb",
      desc: "Allows the holder to immediately use a move that normally requires a change of turn to charge. Consumed after use.",
    },
    {
      item: "protective_pads",
      desc: "Protects the holder from contact effects from the target.",
    },
    {
      item: "punching_glove",
      desc: "Boosts the power of the holder's punching moves and prevents them from triggering contact with the target.",
    },
    { item: "quick_claw", desc: "Grants the holder a chance of going first." },
    { item: "quick_powder", desc: "Doubles an untransformed Ditto's speed." },
    { item: "razor_claw", desc: "Boosts the critical-hit ratio of the holder's moves." },
    {
      item: "razor_fang",
      desc: "When the holder successfully inflicts damage, the target may also flinch.",
    },
    {
      item: "red_card",
      desc: "When holder is struck by a damaging move, forces the attacker that used the move to switch out.",
    },
    { item: "ring_target", desc: "The holder's type immunities are removed." },
    {
      item: "rocky_helmet",
      desc: "Causes a Pokémon that makes direct contact with the holder to take damage.",
    },
    {
      item: "room_service",
      desc: "Lowers the holder's Speed when Trick Room is in effect. Consumed after use.",
    },
    {
      item: "safety_goggles",
      desc: "Grants the holder immunity to powder and spore moves and damage from weather.",
    },
    { item: "scope_lens", desc: "Boosts the holder's critical hit ratio." },
    { item: "shed_shell", desc: "Allows the holder to switch out in any situation." },
    {
      item: "shell_bell",
      desc: "Restores 1/8 HP to holder based on damage dealt by moves to opponents.",
    },
    { item: "smoke_ball", desc: "Has no effect." },
    { item: "smooth_rock", desc: "Extends the duration of sandstorms from 5 to 8 turns." },
    {
      item: "soothe_bell",
      desc: "No battle effect. Increases the holder's friendship earned by 50%.",
    },
    {
      item: "sticky_barb",
      desc: "The holder loses 1/8 of max HP per turn. Transfers to other Pokémon on contact.",
    },
    {
      item: "terrain_extender",
      desc: "Lengthens the duration of moves and Abilities that alter the terrain of the battlefield.",
    },
    {
      item: "throat_spray",
      desc: "Raises the holder's Sp. Atk when using a sound-based move.",
    },
    { item: "toxic_orb", desc: "Poisons the holder." },
    {
      item: "utility_umbrella",
      desc: "The holder is unaffected by Rain or Harsh Sunlight.",
    },
    {
      item: "weakness_policy",
      desc: "Raises the holder's Attack and Sp. Atk by 2 stages when holder is hit by a super effective move.",
    },
    { item: "white_herb", desc: "Restores any lower stat in battle. Consumed after use." },
    { item: "wide_lens", desc: "Boosts the holder's Accuracy." },
    { item: "wise_glasses", desc: "Boosts the power of the holder's special moves." },
    { item: "zoom_lens", desc: "Boosts the holder's Accuracy." },
    { item: "black_belt", desc: "Boosts the power of the holder's Fighting-type moves." },
    { item: "black_glasses", desc: "Boosts the power of the holder's Dark-type moves." },
    { item: "charcoal_stick", desc: "Boosts the power of the holder's Fire-type moves." },
    { item: "dragon_fang", desc: "Boosts the power of the holder's Dragon-type moves." },
    { item: "hard_stone", desc: "Boosts the power of the holder's Rock-type moves." },
    { item: "magnet", desc: "Boosts the power of the holder's Electric-type moves." },
    { item: "metal_coat", desc: "Boosts the power of the holder's Steel-type moves." },
    { item: "miracle_seed", desc: "Boosts the power of the holder's Grass-type moves." },
    { item: "mystic_water", desc: "Boosts the power of the holder's Water-type moves." },
    { item: "never_melt_ice", desc: "Boosts the power of the holder's Ice-type moves." },
    { item: "poison_barb", desc: "Boosts the power of the holder's Poison-type moves." },
    { item: "sharp_beak", desc: "Boosts the power of the holder's Flying-type moves." },
    { item: "silk_scarf", desc: "Boosts the power of the holder's Normal-type moves." },
    { item: "silver_powder", desc: "Boosts the power of the holder's Bug-type moves." },
    { item: "soft_sand", desc: "Boosts the power of the holder's Ground-type moves." },
    { item: "spell_tag", desc: "Boosts the power of the holder's Ghost-type moves." },
    { item: "twisted_spoon", desc: "Boosts the power of the holder's Psychic-type moves." },
    { item: 'power_anklet', desc: "Gives extra Speed EVs when the holder participates in battle" },
    { item: 'power_band', desc: "Gives extra Special Defence EVs when the holder participates in battle" },
    { item: 'power_belt', desc: "Gives extra Defense EVs when the holder participates in battle" },
    { item: 'power_bracer', desc: "Gives extra Attack EVs when the holder participates in battle" },
    { item: 'power_lens', desc: "Gives extra Special Attack EVs when the holder participates in battle" },
    { item: 'power_weight', desc: "Gives extra HP EVs when the holder participates in battle" },
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item.item}`, Text.gray(item.desc));
    tooltip.add(`cobblemon:${item.item}`, Text.gold("Held Item"));
  });

  [
    { item: "auspicious_armor", desc: "Evolves Charcadet into Armarouge" },
    { item: "black_augurite", desc: "Evolves Scyther into Kleavor" },
    { item: "chipped_pot", desc: "Evolves Antique Form Sinistea into Antique Form Polteageist" },
    { item: "cracked_pot", desc: "Evolves Phony Form Sinistea into Phony Form Polteageist" },
    { item: "deep_sea_scale", desc: "Evolves Clamperl into Gorebyss", crit: "Requires Trade or Link Cable" },
    { item: "deep_sea_tooth", desc: "Evolves Clamperl into Huntail", crit: "Requires Trade or Link Cable" },
    { item: "dragon_scale", desc: "Evolves Seadra into Kingdra", crit: "Requires Trade or Link Cable" },
    { item: "dubious_disc", desc: "Evolves Porygon2 into Porygon-Z", crit: "Requires Trade or Link Cable" },
    { item: "electirizer", desc: "Evolves Electabuzz into Electivire", crit: "Requires Trade or Link Cable" },
    { item: "galarica_cuff", desc: "Evolves Galarian Slowpoke into Galarian Slowbro" },
    { item: "galarica_wreath", desc: "Evolves Galarian Slowpoke into Galarian Slowking" },
    { item: "kings_rock", desc: "Evolves Poliwhirl into Politoed and Slowpoke into Slowking", crit: "Requires Trade or Link Cable" },
    { item: "link_cable", desc: "Evolves Pokémon that evolve via trading" },
    { item: "magmarizer", desc: "Evolves Magmar into Magmortar", crit: "Requires Trade or Link Cable" },
    { item: "malicious_armor", desc: "Evolves Charcadet into Ceruledge" },
    { item: "masterpiece_teacup", desc: "Evolves Artisan Form Poltchageist into Masterpiece Form Sinistcha" },
    { item: "metal_alloy", desc: "Evolves Duraludon into Archaludon" },
    { item: "metal_coat", desc: "Evolves Scyther into Scizor and Onix into Steelix", crit: "Requires Trade or Link Cable" },
    { item: "oval_stone", desc: "Evolves Happiny into Chansey" },
    { item: "peat_block", desc: "Evolves Ursaring into Ursaluna", crit: "Requires a full moon at night" },
    { item: "prism_scale", desc: "Evolves Feebas into Milotic", crit: "Requires Trade or Link Cable" },
    { item: "protector", desc: "Evolves into Rhydon into Rhyperior", crit: "Requires Trade or Link Cable" },
    { item: "razor_claw", desc: "Evolves into Sneasel into Weavile", crit: "Requires a level gained at night" },
    { item: "razor_fang", desc: "Evolves into Gligar into Gliscor", crit: "Requires a level gained at night" },
    { item: "reaper_cloth", desc: "Evolves into Dusclops into Dusknoir", crit: "Requires Trade or Link Cable" },
    { item: "sachet", desc: "Evolves into Spritzee into Aromatisse", crit: "Requires Trade or Link Cable" },
    { item: "scroll_of_darkness", desc: "Evolves Kubfu into Single Strike Style Urshifu" },
    { item: "scroll_of_waters", desc: "Evolves Kubfu into Rapid Strike Style Urshifu" },
    { item: "shell_helmet", desc: "Evolves Karrablast into Escavalier" },
    { item: "strawberry_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "love_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "berry_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "clover_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "flower_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "star_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "ribbon_sweet", desc: "Evolves Milcery into Alcremie", crit: "Time of day and affects form" },
    { item: "sweet_apple", desc: "Evolves Applin into Appletun" },
    { item: "syrupy_apple", desc: "Evolves Applin into Dipplin" },
    { item: "tart_apple", desc: "Evolves  Applin into Flapple" },
    { item: "unremarkable_teacup", desc: "Evolves Counterfeit Form Poltchageist into Unremarkable Form Sinistcha" },
    { item: "upgrade", desc: "Evolves Porygon into Porygon2", crit: "Requires Trade or Link Cable" },
    { item: "whipped_dream", desc: "Evolves Swirlix into Slurpuff", crit: "Requires Trade or Link Cable" },
 ].forEach((item) => {
    tooltip.add(`cobblemon:${item.item}`, Text.gray(item.desc));
    if (item.crit) tooltip.add(`cobblemon:${item.item}`, Text.darkPurple(item.crit));
    tooltip.add(`cobblemon:${item.item}`, Text.lightPurple("Evolution Item"));
  });
  [
    { item: "calcium", desc: "Adds 10 Special Attack EVs to the target Pokémon"},
    { item: "carbos", desc: "Adds 10 Speed EVs to the target Pokémon"},
    { item: "hp_up", desc: "Adds 10 HP EVs to the target Pokémon"},
    { item: "iron", desc: "Adds 10 Defense EVs to the target Pokémon"},
    { item: "protein", desc: "Adds 10 Attack EVs to the target Pokémon"},
    { item: "zinc", desc: "Adds 10 Special Defense EVs to the target Pokémon"},
    { item: "pp_up", desc: "Raises the PP of a selected move by 20% of the move's base PP"},
    { item: "pp_max", desc: "Raises the PP of a selected move to 160% of the move's base PP"},
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item.item}`, Text.gray(item.desc));
    tooltip.add(`cobblemon:${item.item}`, Text.aqua("Vitamin"));
  });
});
