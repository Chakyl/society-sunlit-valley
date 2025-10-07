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

  tooltip.add("sunlit_cobblemon:tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:tm_pack", Text.green("12% chance for a TM"));

  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("20% chance for a TM"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("At least one TM guaranteed!"));

  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.green("Only contains TMs"));

  [
    {
      item: "cobblemon:growth_mulch",
      description: "Increases the growth rate of the Berry Tree that it is used on for 3 harvests.",
    },
    {
      item: "cobblemon:rich_mulch",
      description:
        "Increases the yield of the harvest of the Berry Tree that it is used on for 3 harvests.",
    },
    {
      item: "cobblemon:surprise_mulch",
      description:
        "Increases the chances for a mutation of a Berry on the Berry Tree for 3 harvests. It can also mutate a fully grown Revival Herb into a Mental Herb, Power Herb, White Herb, or Mirror Herb.",
    },
    {
      item: "cobblemon:loamy_mulch",
      description: "Makes the Berry Tree act like it's in a Plains biome for an infinite duration.",
    },
    {
      item: "cobblemon:coarse_mulch",
      description:
        "Makes the Berry Tree act like it's in a Mountains or Taiga biome for an infinite duration.",
    },
    {
      item: "cobblemon:peat_mulch",
      description: "Makes the Berry Tree act like it's in a Forest biome for an infinite duration.",
    },
    {
      item: "cobblemon:humid_mulch",
      description:
        "Makes the Berry Tree act like it's in a Jungle or Swamp biome for an infinite duration.",
    },
    {
      item: "cobblemon:sandy_mulch",
      description: "Makes the Berry Tree act like it's in an Arid biome for an infinite duration.",
    },
  ].forEach((book) => {
    tooltip.add(book.item, Text.gray(book.description));
  });

  [
    {
      item: "ability_shield",
      description: "Prevents the holder's ability from being changed or suppressed.",
    },
    {
      item: "absorb_bulb",
      description: "Raises the holder's Sp. Atk by 1 stage when hit by a damaging Water-type move.",
    },
    {
      item: "air_balloon",
      description:
        "Prevents the holder from being hit by Ground-type moves. Breaks if hit by another type of damaging move.",
    },
    {
      item: "assault_vest",
      description: "Raises the holder's Sp. Def but prevents the use of status moves.",
    },
    {
      item: "big_root",
      description: "Boosts the amount of HP the holder recovers from HP-stealing moves.",
    },
    {
      item: "binding_band",
      description:
        "Increases damage inflicted by the holder's binding moves in between turns from 1/8 to 1/6 of target's HP.",
    },
    {
      item: "black_sludge",
      description:
        "If the holder is a Poison type, its HP is gradually restored throughout a battle. It damages any other type.",
    },
    {
      item: "blunder_policy",
      description: "Increases the holder's Speed by 2 stages if the holder's move misses.",
    },
    { item: "bright_powder", description: "Reduces the accuracy of enemy pokemon's moves by 10%." },
    {
      item: "cell_battery",
      description:
        "Raises the holder's Attack by one stage when hit by a damaging Electric-type move.",
    },
    {
      item: "choice_band",
      description: "Boosts the holder's Attack but only allows the use of one move.",
    },
    {
      item: "choice_scarf",
      description: "Boosts the holder's Speed but only allows the use of one move.",
    },
    {
      item: "choice_specs",
      description: "Boosts the holder's Special Attack but only allows the use of one move.",
    },
    { item: "cleanse_tag", description: "Has no effect." },
    {
      item: "covert_cloak",
      description: "Protects the holder from additional effects from other Pokémon.",
    },
    { item: "damp_rock", description: "Extends the duration of rain from 5 to 8 turns." },
    { item: "deep_sea_scale", description: "Boosts Clamperl's Sp. Def stat." },
    { item: "deep_sea_tooth", description: "Boosts Clamperl's Sp. Atk stat." },
    {
      item: "destiny_knot",
      description: "Infatuates the opponent when the holder becomes infatuated.",
    },
    {
      item: "eject_button",
      description: "Holder immediately switches out if struck by a damaging move.",
    },
    {
      item: "eject_pack",
      description: "Switches out the holder if any stats are lowered. Consumed after use.",
    },
    { item: "everstone", description: "Prevents the holder from evolving." },
    {
      item: "eviolite",
      description:
        "Holder's Defense and Sp. Defense is boosted by 50% if they are still able to evolve.",
    },
    {
      item: "expert_belt",
      description: "Boosts the damage of the holder's super effective moves by 20%.",
    },
    {
      item: "exp_share",
      description:
        "Allows the holder to receive a share of experience from battles without participating.",
    },
    { item: "flame_orb", description: "Burns the holder." },
    { item: "float_stone", description: "Halves the holder's weight." },
    {
      item: "focus_band",
      description:
        "Provides a chance for the holder to survive a potential KO attack, leaving it with 1 HP.",
    },
    {
      item: "focus_sash",
      description:
        "At full HP, guarantees the holder survives a hit that would KO it, leaving it with 1 HP.",
    },
    { item: "heat_rock", description: "Extends the duration of harsh sunlight from 5 to 8 turns." },
    {
      item: "heavy_duty_boots",
      description: "Prevents the effects of traps set on the battlefield.",
    },
    { item: "icy_rock", description: "Extends the duration of hail or snow from 5 to 8 turns." },
    { item: "iron_ball", description: "Reduces the holder's Speed by 50% and grounds the holder." },
    {
      item: "kings_rock",
      description: "When the holder successfully inflicts damage, the target may also flinch.",
    },
    { item: "leftovers", description: "Gradually restores the holder's HP throughout a battle." },
    {
      item: "life_orb",
      description: "Boosts the power of the holder's moves, but causes recoil damage.",
    },
    { item: "light_ball", description: "Doubles the Attack and Sp. Atk of Pikachu when held." },
    {
      item: "light_clay",
      description: "Protective moves like Light Screen and Reflect will be effective longer.",
    },
    {
      item: "loaded_dice",
      description: "The holder's multi-strike moves will hit at least 4 times.",
    },
    {
      item: "lucky_egg",
      description: "Increases the amount of experience earned by the holder in battle.",
    },
    {
      item: "medicinal_leek",
      description:
        "Boosts the critical hit ratio of a Farfetch'd or Sirfetch'd that holds it by two stages.",
    },
    { item: "mental_herb", description: "Grounds the holder, and halves their speed." },
    {
      item: "metal_powder",
      description: "Raises and untransformed Ditto's Defense and Special Defense by 50%.",
    },
    { item: "metronome", description: "Boosts the power of moves used consecutively." },
    {
      item: "mirror_herb",
      description:
        "Allows the holder to mirror an opponent's stat increases to boost its own stats. Consumed after use.",
    },
    { item: "muscle_band", description: "Boosts the power of the holder's physical moves." },
    {
      item: "power_herb",
      description:
        "Allows the holder to immediately use a move that normally requires a change of turn to charge. Consumed after use.",
    },
    {
      item: "protective_pads",
      description: "Protects the holder from contact effects from the target.",
    },
    {
      item: "punching_glove",
      description:
        "Boosts the power of the holder's punching moves and prevents them from triggering contact with the target.",
    },
    { item: "quick_claw", description: "Grants the holder a chance of going first." },
    { item: "quick_powder", description: "Doubles an untransformed Ditto's speed." },
    { item: "razor_claw", description: "Boosts the critical-hit ratio of the holder's moves." },
    {
      item: "razor_fang",
      description: "When the holder successfully inflicts damage, the target may also flinch.",
    },
    {
      item: "red_card",
      description:
        "When holder is struck by a damaging move, forces the attacker that used the move to switch out.",
    },
    { item: "ring_target", description: "The holder's type immunities are removed." },
    {
      item: "rocky_helmet",
      description: "Causes a Pokémon that makes direct contact with the holder to take damage.",
    },
    {
      item: "room_service",
      description: "Lowers the holder's Speed when Trick Room is in effect. Consumed after use.",
    },
    {
      item: "safety_goggles",
      description: "Grants the holder immunity to powder and spore moves and damage from weather.",
    },
    { item: "scope_lens", description: "Boosts the holder's critical hit ratio." },
    { item: "shed_shell", description: "Allows the holder to switch out in any situation." },
    {
      item: "shell_bell",
      description: "Restores 1/8 HP to holder based on damage dealt by moves to opponents.",
    },
    { item: "smoke_ball", description: "Has no effect." },
    { item: "smooth_rock", description: "Extends the duration of sandstorms from 5 to 8 turns." },
    {
      item: "soothe_bell",
      description: "No battle effect. Increases the holder's friendship earned by 50%.",
    },
    {
      item: "sticky_barb",
      description:
        "The holder loses 1/8 of max HP per turn. Transfers to other Pokémon on contact.",
    },
    {
      item: "terrain_extender",
      description:
        "Lengthens the duration of moves and Abilities that alter the terrain of the battlefield.",
    },
    {
      item: "throat_spray",
      description: "Raises the holder's Sp. Atk when using a sound-based move.",
    },
    { item: "toxic_orb", description: "Poisons the holder." },
    {
      item: "utility_umbrella",
      description: "The holder is unaffected by Rain or Harsh Sunlight.",
    },
    {
      item: "weakness_policy",
      description:
        "Raises the holder's Attack and Sp. Atk by 2 stages when holder is hit by a super effective move.",
    },
    { item: "white_herb", description: "Restores any lower stat in battle. Consumed after use." },
    { item: "wide_lens", description: "Boosts the holder's Accuracy." },
    { item: "wise_glasses", description: "Boosts the power of the holder's special moves." },
    { item: "zoom_lens", description: "Boosts the holder's Accuracy." },
    { item: "black_belt", description: "Boosts the power of the holder's Fighting-type moves." },
    { item: "black_glasses", description: "Boosts the power of the holder's Dark-type moves." },
    { item: "charcoal_stick", description: "Boosts the power of the holder's Fire-type moves." },
    { item: "dragon_fang", description: "Boosts the power of the holder's Dragon-type moves." },
    { item: "hard_stone", description: "Boosts the power of the holder's Rock-type moves." },
    { item: "magnet", description: "Boosts the power of the holder's Electric-type moves." },
    { item: "metal_coat", description: "Boosts the power of the holder's Steel-type moves." },
    { item: "miracle_seed", description: "Boosts the power of the holder's Grass-type moves." },
    { item: "mystic_water", description: "Boosts the power of the holder's Water-type moves." },
    { item: "never_melt_ice", description: "Boosts the power of the holder's Ice-type moves." },
    { item: "poison_barb", description: "Boosts the power of the holder's Poison-type moves." },
    { item: "sharp_beak", description: "Boosts the power of the holder's Flying-type moves." },
    { item: "silk_scarf", description: "Boosts the power of the holder's Normal-type moves." },
    { item: "silver_powder", description: "Boosts the power of the holder's Bug-type moves." },
    { item: "soft_sand", description: "Boosts the power of the holder's Ground-type moves." },
    { item: "spell_tag", description: "Boosts the power of the holder's Ghost-type moves." },
    { item: "twisted_spoon", description: "Boosts the power of the holder's Psychic-type moves." },
  ].forEach((item) => {
    tooltip.add(`cobblemon:${item.item}`, Text.gray(item.description));
    tooltip.add(`cobblemon:${item.item}`, Text.gold("Held Item"));
  });
});
