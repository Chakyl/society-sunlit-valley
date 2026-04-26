console.info("[SOCIETY-S-COBBLEMON] addCobblemonRecipes.js loaded");

ServerEvents.recipes((e) => {
  // Experience
  e.shapeless("cobblemon:exp_candy_s", ["8x cobblemon:exp_candy_xs"]);
  e.shapeless("8x cobblemon:exp_candy_xs", ["cobblemon:exp_candy_s"]);

  e.shapeless("cobblemon:exp_candy_m", ["3x cobblemon:exp_candy_s"]);
  e.shapeless("3x cobblemon:exp_candy_s", ["cobblemon:exp_candy_m"]);

  e.shapeless("cobblemon:exp_candy_l", ["3x cobblemon:exp_candy_m"]);
  e.shapeless("3x cobblemon:exp_candy_m", ["cobblemon:exp_candy_l"]);

  e.shapeless("cobblemon:exp_candy_xl", ["3x cobblemon:exp_candy_l"]);
  e.shapeless("3x cobblemon:exp_candy_l", ["cobblemon:exp_candy_xl"]);
  // TMS
  e.shapeless("sunlit_cobblemon:tm_pack", ["9x #sunlit_cobblemon:tr"]);
  e.shapeless("sunlit_cobblemon:greater_tm_pack", ["9x #sunlit_cobblemon:tm"]);
  e.shapeless("simpletms:tr_firepledge", ["sunlit_cobblemon:fire_pledge"]);
  e.shapeless("simpletms:tr_waterpledge", ["sunlit_cobblemon:water_pledge"]);
  e.shapeless("simpletms:tr_grasspledge", ["sunlit_cobblemon:grass_pledge"]);
  e.shapeless("simpletms:tm_firepledge", ["society:prismatic_shard", "sunlit_cobblemon:fire_pledge"]);
  e.shapeless("simpletms:tm_waterpledge", ["society:prismatic_shard", "sunlit_cobblemon:water_pledge"]);
  e.shapeless("simpletms:tm_grasspledge", ["society:prismatic_shard", "sunlit_cobblemon:grass_pledge"]);
  e.shapeless("simpletms:tr_dracometeor", ["society:prismatic_shard", "4x sunlit_cobblemon:draco_meteorite"]);
  e.shaped("sunlit_cobblemon:uncharged_battery", [" zr", "zrz", "rz "], {
    z: "create:zinc_ingot",
    r: "create:rose_quartz",
  });
  e.shaped("cobblemon:ability_capsule", ["gsf"], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "society:production_science_pack",
  });
  e.shaped("cobblemon:ability_patch", [" g ", "fsf", " g "], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "numismatics:prismatic_coin",
  });
  e.shaped("cobblemon_farmers:gardening_station", ["fff", "fpf", "f f"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
  });
  e.shaped("cobblemon_farmers:craft_station", ["fff", "bpb", "b b"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
    b: "minecraft:bricks",
  });
  e.shaped("cobblemon_farmers:mystery_mine", ["efe", "fpf", "efe"], {
    f: "meadow:fire_log",
    p: 'cobblemon:great_ball',
    e: "society:earth_crystal",
  });
  e.shaped("cobblemon_farmers:ranching_station", ["sps", "ese", "fff"], {
    s: "farmersdelight:straw",
    f: "meadow:fire_log",
    p: 'cobblemon:great_ball',
    e: "society:earth_crystal",
  });
  e.shapeless("sunlit_cobblemon:berry_smoothie", [
    "cobblemon:oran_berry",
    "society:sap",
  ]);
  e.shapeless("sunlit_cobblemon:super_berry_smoothie", [
    "cobblemon:potion",
    "minecraft:honey_bottle",
    "cobblemon:energy_root",
  ]);
  e.shapeless("sunlit_cobblemon:hyper_berry_smoothie", [
    "cobblemon:super_potion",
    "society:maple_syrup",
    "cobblemon:sitrus_berry",
  ]);
  e.shapeless("sunlit_cobblemon:max_berry_smoothie", [
    "cobblemon:hyper_potion",
    "species:ichor_bottle",
    "cobblemon:vivichoke",
  ]);

  e.shapeless('cobblemon:shell_helmet', ['society:froggy_helm', "crabbersdelight:nautilus_shell_block"])
  const compactCobblemon = (output, compactInput, count) => {
    e.shapeless(`${count}x ${compactInput}`, [output]);
    e.shapeless(output, [`${count}x ${compactInput}`]);
  };
  ['dawn', 'dusk', 'fire', 'ice', 'leaf', 'moon', 'shiny', 'sun', 'thunder', 'water'].forEach((stone) => {
    compactCobblemon(`cobblemon:${stone}_stone_block`, `cobblemon:${stone}_stone`, 9);
  })
  // Legendaries
  e.shapeless("sunlit_cobblemon:rainbow_steam", ["sunlit_cobblemon:fire_pledge", "sunlit_cobblemon:water_pledge", "society:violet_moon"]);
  e.shapeless("sunlit_cobblemon:blazing_calamity", ["sunlit_cobblemon:fire_pledge", "sunlit_cobblemon:grass_pledge", 'society:recycled_core']);
  e.shapeless("sunlit_cobblemon:swampy_mystica_branch", ["sunlit_cobblemon:grass_pledge", "sunlit_cobblemon:water_pledge", "sunlit_cobblemon:mystica_branch", "society:sunlit_crystal"]);
  e.shapeless("sunlit_cobblemon:mystica_nectar", ["society:mossberry_stew", "sunlit_cobblemon:mystica_branch", "sunlit_cobblemon:swampy_mystica_branch"]);
    e.shaped(
    "sunlit_cobblemon:moongeist_crystal",
    ["dmb", "mfm", "rmd"],
    {
      b: "sunlit_cobblemon:blooming_ring",
      m: "cobblemon:moon_stone",
      f: "sunlit_cobblemon:fairy_heart",
      d: "sunlit_cobblemon:moondust",
      r: "sunlit_cobblemon:resonance_gem",
    },
  );
  e.shaped(
    "sunlit_cobblemon:gem_box",
    ["sts", "tut", "sts"],
    {
      t: "sunlit_cobblemon:tabula_rasa",
      u: "society:token_of_unity",
      s: "quark:sturdy_stone",
    },
  );
  e.shaped("sunlit_cobblemon:sun_essence", ["dmd", "msm", "dmd"], {
    s: 'society:mystic_syrup',
    m: 'sunlit_cobblemon:mystica_branch',
    d: 'sunlit_cobblemon:sun_drops'
  });
  e.shaped('sunlit_cobblemon:wormhole_generator', ["ded", "sus", "dbd"], {
    s: 'minecraft:echo_shard',
    d: 'sunlit_cobblemon:cosmic_dust',
    e: 'oreganized:electrum_ingot',
    u: 'oreganized:unknown_device',
    b: 'society:battery'
  });
  e.shaped('sunlit_cobblemon:blooming_ring', ["StS", "nsc", "SrS"], {
    S: 'sunlit_cobblemon:sunlit_league_medallion',
    c: 'society:sunlit_crystal',
    s: 'sunlit_cobblemon:sun_essence',
    r: 'society:recycled_core',
    n: 'society:net_bobber',
    t: 'domesticationinnovation:collar_tag'
  });
  e.shaped('sunlit_cobblemon:cornucopia_of_greed', ["psp", "scs", "SpS"], {
    p: 'numismatics:prismatic_coin',
    c: 'society:cornucopia',
    s: 'sunlit_cobblemon:sun_essence',
    S: 'sunlit_cobblemon:sunlit_league_medallion',
  });
  e.custom({
    "type": "farm_and_charm:stove",
    "ingredients": [
      {
        "item": "bakery:sweet_dough"
      },
      {
        "item": 'sunlit_cobblemon:dried_legendary_cobbleberry'
      },
      {
        "item": 'sunlit_cobblemon:mystica_branch'
      }
    ],
    "item": 'sunlit_cobblemon:mystica_cookie',
    "count": 4,
    "experience": 0.3
  })
  // Misc

  e.shapeless("4x cobblemon:energy_root", ["sunlit_cobblemon:strange_spore", "cobblemon:big_root", "cobblemon:big_root", "cobblemon:big_root", "cobblemon:big_root"]);
  global.cobbleTypeGems.forEach((gem) => {
    e.shapeless(`3x ${gem.item}`, [`sunlit_cobblemon:pristine_${gem.item.split(":")[1]}`]);
  });


  // Botania Alts
  e.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "tag": "botania:mana_diamond_gems"
      },
      {
        "tag": "botania:mana_diamond_gems"
      },
      {
        "item": "sunlit_cobblemon:poison_drop"
      },
      {
        "item": "sunlit_cobblemon:poison_drop"
      },
      {
        "item": "sunlit_cobblemon:poison_drop"
      },
      {
        "item": "sunlit_cobblemon:poison_drop"
      },
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "botania:rune_mana"
      }
    ],
    "mana": 12000,
    "output": {
      "item": "botania:rune_wrath"
    }
  })
  e.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_water"
      },
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "sunlit_cobblemon:permafrost_drop"
      }
    ],
    "mana": 8000,
    "output": {
      "item": "botania:rune_winter"
    }
  })
  e.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": "sunlit_cobblemon:electro_wool"
    },
    "mana": 2500,
    "output": {
      "item": "botania:mana_string",
      "count": 4
    }
  })
  const compact = (output, compactInput, count) => {
    e.shapeless(`${count}x ${compactInput}`, [output]);
    e.shapeless(output, [`${count}x ${compactInput}`]);
  };
  compact(`sunlit_cobblemon:large_moomoo_milk`, `sunlit_cobblemon:moomoo_milk`, 4);
});
