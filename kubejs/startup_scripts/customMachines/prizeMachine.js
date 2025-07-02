console.info("[SOCIETY] preservesJar.js loaded");

global.prizeMachineRewards = [
  {
    hint: "seedy",
    possibleOutputs: [
      "8x minecraft:torchflower_seeds",
      "8x minecraft:pitcher_pod",
      "8x herbalbrews:tea_blossom",
      "8x herbalbrews:coffee_beans",
      "8x etcetera:cotton_seeds",
    ],
  },
  {
    hint: "writhing and squirming",
    possibleOutputs: ["8x aquaculture:minnow", "8x aquaculture:worm"],
  },
  {
    hint: "upgradable",
    possibleOutputs: ["sophisticatedbackpacks:upgrade_base", "sophisticatedstorage:upgrade_base"],
  },
  {
    hint: "bearing red fruits",
    possibleOutputs: ["pamhc2trees:cherry_sapling", "pamhc2trees:apple_sapling"],
  },
  {
    hint: "crabs love to chow on",
    possibleOutputs: [
      "16x crabbersdelight:crab_trap_bait",
      "16x crabbersdelight:deluxe_crab_trap_bait",
    ],
  },
  {
    hint: "for decorating",
    possibleOutputs: ["2x society:furniture_box", "simplehats:hatbag_epic"],
  },
  {
    hint: "soothing and refreshing",
    possibleOutputs: ["2x herbalbrews:oolong_tea"],
  },
  {
    hint: "fancy to rest on",
    possibleOutputs: [
      "tanukidecor:antique_bed",
      "tanukidecor:regal_bed",
      "tanukidecor:sweets_bed",
      "tanukidecor:gorgeous_bed",
      "tanukidecor:cabana_bed",
      "tanukidecor:wooden_block_bed",
      "tanukidecor:green_bed",
      "tanukidecor:minimalist_bed",
      "tanukidecor:brown_mushroom_bed",
      "tanukidecor:red_mushroom_bed",
      "tanukidecor:egyptian_bed",
      "tanukidecor:blue_bed",
    ],
  },
  {
    hint: "useful for farm animals",
    possibleOutputs: [
      "2x society:mayonnaise_machine",
      "2x society:loom",
      "128x society:animal_feed",
    ],
  },
  {
    hint: "bearing juicy round fruits",
    possibleOutputs: ["pamhc2trees:plum_sapling", "pamhc2trees:peach_sapling"],
  },
  {
    hint: "that smells like sulfur",
    possibleOutputs: [
      "16x supplementaries:bomb",
      "16x supplementaries:bomb_blue",
      "16x betterarcheology:bomb",
      "16x minecraft:tnt",
      "society:fish_smoker",
    ],
  },
  {
    hint: "weirdly resembling an egg",
    possibleOutputs: ["etcetera:eggple", "etcetera:golden_eggple"],
  },
  {
    hint: "capable of handling liquids",
    possibleOutputs: [
      "2x vintagedelight:fermenting_jar",
      "2x society:tapper",
      "2x vinery:fermentation_barrel",
    ],
  },
  {
    hint: "rare and rocky",
    possibleOutputs: ["4x society:omni_geode"],
  },
  {
    hint: "large and wooden",
    possibleOutputs: ["2x brewery:barrel_main"],
  },
  {
    hint: "useful for mechanics",
    possibleOutputs: [
      "32x create:andesite_alloy",
      "8x create:brass_ingot",
      "4x create:sturdy_sheet",
      "create:precision_mechanism",
      "create:brass_hand",
      "society:battery",
    ],
  },
  {
    hint: "decorative",
    possibleOutputs: ["minecraft:painting", "simplehats:hatbag_epic"],
  },
  {
    hint: "with jaded fruit",
    possibleOutputs: ["pamhc2trees:pawpaw_sapling"],
  },
  {
    hint: "soothing and refreshing... Again",
    possibleOutputs: ["2x herbalbrews:oolong_tea"],
  },
  {
    hint: "rare, rocky, and plentiful",
    possibleOutputs: ["8x society:omni_geode"],
  },
  {
    hint: "advanced for the farm",
    possibleOutputs: ["society:preserves_jar", "society:crystalarium"],
  },
  {
    hint: "shiny",
    possibleOutputs: ["3x quark:diamond_heart"],
  },
  {
    hint: "seasonal to wear",
    possibleOutputs: [
      "simplehats:hatbag_halloween",
      "simplehats:hatbag_easter",
      "simplehats:hatbag_summer",
      "simplehats:hatbag_festive",
    ],
  },
  {
    hint: "ancient from the soil",
    possibleOutputs: [
      "society:ancient_fruit_seed",
      "society:ancient_fruit",
      "society:ancient_fruit",
    ],
  },
  {
    hint: "extremely valuable",
    possibleOutputs: [
      "society:dragon_mayonnaise",
      "society:prismatic_shard",
      "society:golden_mayonnaise",
      "society:magic_rock_candy",
    ],
  },
  {
    hint: "only enjoyed by those of age",
    possibleOutputs: ["society:aging_cask", "tanukidecor:slot_machine"],
  },
  {
    hint: "with jaded fruit... Again",
    possibleOutputs: ["pamhc2trees:hazelnut_sapling"],
  },
  {
    hint: "some tickets?",
    possibleOutputs: ["3x splendid_slimes:slime_ticket"],
  },
  {
    hint: "spicy",
    possibleOutputs: [
      "16x vintagedelight:stuffed_burrito",
      "16x vintagedelight:ghostly_chili",
      "32x vintagedelight:ghost_pepper",
      "16x vintagedelight:pickled_pepper",
      "8x vintagedelight:pepper_jam_mason_jar",
    ],
  },
  {
    hint: "about to hatch",
    possibleOutputs: [
      "species:cruncher_egg",
      "species:petrified_egg",
      "species:springling_egg",
      "species:wraptor_egg",
      "quark:egg_parrot_red_blue",
      "quark:egg_parrot_blue",
      "quark:egg_parrot_green",
      "quark:egg_parrot_gray",
      "quark:egg_parrot_yellow_blue",
      "species:birt_egg",
      "minecraft:sniffer_egg",
    ],
  },
  {
    hint: "beachy",
    possibleOutputs: [
      "beachparty:hammock",
      "beachparty:lounge_chair",
      "beachparty:tiki_chair",
      "beachparty:chair",
      "beachparty:table",
      "beachparty:beach_chair",
      "beachparty:deck_chair",
      "beachparty:radio",
    ],
  },
  {
    hint: "passionate",
    possibleOutputs: ["pamhc2trees:passionfruit_sapling"],
  },
  {
    hint: "fish get excited for",
    possibleOutputs: [
      "society:deluxe_worm_farm",
      "society:fish_smoker",
      "society:fish_pond",
      "society:sea_biscut",
    ],
  },
  {
    hint: "sticky, from a tree",
    possibleOutputs: ["4x society:maple_syrup", "4x society:pine_tar", "4x society:oak_resin"],
  },
  {
    hint: "wintery",
    possibleOutputs: [
      "64x snowyspirit:candy_cane",
      "pamhc2trees:cinnamon_sapling",
      "8x society:frozen_geode",
      "8x society:frozen_tear",
    ],
  },
  {
    hint: "relating to relics",
    possibleOutputs: ["society:relic_trove", "64x relics:relic_experience_bottle"],
  },
  {
    hint: "fossilized",
    possibleOutputs: [
      "betterarcheology:creeper_fossil_head",
      "betterarcheology:creeper_fossil_body",
      "betterarcheology:villager_fossil_body",
      "betterarcheology:villager_fossil_head",
      "betterarcheology:chicken_fossil_body",
      "betterarcheology:chicken_fossil_head",
      "betterarcheology:ocelot_fossil_body",
      "betterarcheology:ocelot_fossil_head",
      "betterarcheology:wolf_fossil_body",
      "betterarcheology:wolf_fossil_head",
      "betterarcheology:sheep_fossil_body",
      "betterarcheology:sheep_fossil_head",
      "betterarcheology:guardian_fossil_head",
      "betterarcheology:guardian_fossil_body",
    ],
  },
  {
    hint: "soothing and refreshing... Again",
    possibleOutputs: ["2x herbalbrews:oolong_tea"],
  },
  {
    hint: "artly and factual",
    possibleOutputs: ["society:artifact_trove", "betterarcheology:unidentified_artifact"],
  },
  {
    hint: "seedy that's hard to find",
    possibleOutputs: [
      "8x herbalbrews:tea_blossom",
      "8x herbalbrews:coffee_beans",
      "8x nethervinery:crimson_grape_seeds",
      "8x vinery:jungle_grape_seeds_red",
      "8x vinery:taiga_grape_seeds_red",
      "8x vinery:savanna_grape_seeds_red",
      "8x nethervinery:warped_grape_seeds",
      "8x vinery:jungle_grape_seeds_white",
      "8x vinery:taiga_grape_seeds_white",
      "8x vinery:savanna_grape_seeds_white",
    ],
  },
  {
    hint: "that upgrades machines",
    possibleOutputs: [
      "society:stone_hand",
      "society:frosted_tip",
      "society:tiny_gnome",
      "society:broken_clock",
      "society:black_opal",
      "society:sea_biscut",
      "society:ancient_cog",
      "society:ancient_roe",
      "society:infinity_worm",
      "society:cordycep",
    ],
  },
];
StartupEvents.registry("block", (event) => {
  event
    .create("society:prize_machine", "cardinal")
    .property(integerProperty.create("prize", 0, global.prizeMachineRewards.length))
    .box(1, 0, 4, 15, 28, 12)
    .defaultCutout()
    .soundType("copper")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .item((item) => {
      item.tooltip(Text.gray("Redeem Prize Tickets for a reward!"));
      item.modelJson({
        parent: "society:block/prize_machine",
      });
    })
    .defaultState((state) => {
      state.set(integerProperty.create("prize", 0, global.prizeMachineRewards.length), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("prize", 0, global.prizeMachineRewards.length), 0);
    })
    .rightClick((click) => {
      const { item, block, hand, player, level, server } = click;
      const { x, y, z } = block;
      const prizeNumber = block.properties.get("prize").toLowerCase();
      const prizeOutput = global.prizeMachineRewards[Number(prizeNumber)].possibleOutputs;
      const prizeHint = global.prizeMachineRewards[Number(prizeNumber)].hint;
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND" && item === "society:prize_ticket") {
        if (!player.isCreative()) item.count--;
        level.spawnParticles(
          "minecraft:happy_villager",
          true,
          x + 0.5,
          y + 0.5,
          z + 0.5,
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          0.1 * rnd(1, 4),
          10,
          0.1
        );
        const prize = prizeOutput[rnd(0, prizeOutput.length - 1)];
        block.popItemFromFace(prize, block.properties.get("facing"));
        if (player.stages.has("frogs_bounty_bazaar")) {
          block.popItemFromFace(prize, block.properties.get("facing"));
        }
        block.set(block.id, {
          facing: block.properties.get("facing"),
          prize:
            Number(prizeNumber) === global.prizeMachineRewards.length - 1
              ? "8"
              : increaseStage(block.properties.get("prize").toLowerCase()),
        });
        click.server.runCommandSilent(
          `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
        );
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:farming 100`
        );
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:husbandry 400`
        );
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:fishing 100`
        );
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:mining 100`
        );
        server.runCommandSilent(
          `puffish_skills experience add ${player.username} society:adventuring 100`
        );
      } else {
        player.tell(Text.gray(`:ticket: Next prize: Something §6${prizeHint}§r...`));
      }
    })
    .blockstateJson = MultipartBuilder("society:block/prize_machine")
      .particle()
      .complex(
        MultipartModifiers.directional(),
      )
      .build();
});
