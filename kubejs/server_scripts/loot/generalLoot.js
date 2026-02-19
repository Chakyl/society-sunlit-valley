console.info("[SOCIETY] generalLoot.js loaded");

const fixedStackSize = (itemStack) => {
  if (itemStack.maxStackSize == 1) {
    itemStack.setCount(1);
    return itemStack;
  }
  return itemStack;
};
LootJS.modifiers((e) => {
  // Entities
  e.addLootTableModifier("rottencreatures:entities/zap")
    .randomChance(0.03)
    .addLoot("society:glitched_vhs");
  e.addLootTableModifier("minecraft:entities/witch")
    .randomChance(0.1)
    .addLoot("society:holy_symbol");
  e.addLootTableModifier("minecraft:entities/shulker")
    .randomChance(0.1)
    .addLoot("society:production_science_pack");
  e.addLootTableModifier("minecraft:entities/blaze")
    .randomChance(0.05)
    .addLoot("society:ember_crystal_cluster");
  e.addLootTableModifier("minecraft:entities/spider")
    .randomChance(0.05)
    .addLoot("society:spider_silk");
  e.addLootTableModifier("minecraft:entities/creeper")
    .randomChance(0.05)
    .addLoot("society:green_tea_honeycomb");
  e.addLootTableModifier("legendarycreatures:entities/corpse_eater")
    .randomChance(0.05)
    .addLoot("society:wheel_of_adaptation");
  e.addLootTableModifier("minecraft:entities/wither")
    .randomChance(0.8)
    .addLoot("society:amulet_of_light");
  e.addLootTableModifier("minecraft:entities/enderman")
    .randomChance(0.05)
    .addLoot("minecraft:eye_armor_trim_smithing_template");
  e.addLootTableModifier("minecraft:entities/pig")
    .randomChance(0.05)
    .addLoot("society:living_flesh");
  e.addLootTableModifier("minecraft:entities/hoglin").replaceLoot(
    "*",
    "minecraft:rotten_flesh",
    true
  );
  // Chest Loot tables
  e.addLootTableModifier("minecraft:chests/simple_dungeon")
    .randomChance(0.3)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/simple_dungeon")
    .randomChance(0.1)
    .addLoot("society:source_gem");
  e.addLootTableModifier("minecraft:chests/abandoned_mineshaft")
    .randomChance(0.2)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/abandoned_mineshaft")
    .randomChance(0.2)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:webby"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/simple_dungeon")
    .randomChance(0.1)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:webby"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/buried_treasure")
    .randomChance(0.9)
    .addLoot("numismatics:cog")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/buried_treasure")
    .randomChance(1)
    .addLoot("numismatics:crown")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_small")
    .randomChance(0.5)
    .addLoot("numismatics:cog")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_small")
    .randomChance(0.2)
    .addLoot("numismatics:cog")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_big")
    .randomChance(0.6)
    .addLoot("numismatics:cog")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_big")
    .randomChance(0.3)
    .addLoot("numismatics:cog")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/shipwreck_supply")
    .randomChance(0.5)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/shipwreck_supply")
    .randomChance(0.1)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/shipwreck_treasure")
    .randomChance(0.9)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/shipwreck_treasure")
    .randomChance(0.4)
    .addLoot("numismatics:cog")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/woodland_mansion")
    .randomChance(0.2)
    .addLoot("numismatics:crown")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/jungle_temple")
    .randomChance(0.3)
    .addLoot("numismatics:crown")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/jungle_temple")
    .randomChance(0.1)
    .addLoot("numismatics:crown")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/desert_pyramid")
    .randomChance(0.3)
    .addLoot("numismatics:crown")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/desert_pyramid")
    .randomChance(0.1)
    .addLoot("numismatics:crown")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/pillager_outpost")
    .randomChance(0.3)
    .addLoot("numismatics:cog")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.6)
    .addLoot("numismatics:cog")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.3)
    .addLoot("numismatics:crown")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.2)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:orby"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.2)
    .addLoot("numismatics:sun")
    .limitCount([1, 1]);
  e.addLootTableModifier("minecraft:chests/ruined_portal")
    .randomChance(0.7)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/nether_bridge")
    .randomChance(0.3)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_bridge")
    .randomChance(0.9)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_hoglin_stable")
    .randomChance(0.3)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_other")
    .randomChance(0.5)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.6)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.2)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:blazing"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.6)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:weeping"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/bastion_treasure").removeLoot(
    "minecraft:diamond_sword"
  );
  e.addLootTableModifier("minecraft:chests/bastion_treasure").removeLoot(
    "minecraft:diamond_helmet"
  );
  e.addLootTableModifier("minecraft:chests/bastion_treasure").removeLoot(
    "minecraft:diamond_chestplate"
  );
  e.addLootTableModifier("minecraft:chests/bastion_treasure").removeLoot(
    "minecraft:diamond_leggings"
  );
  e.addLootTableModifier("minecraft:chests/stronghold_corridor")
    .randomChance(0.9)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/stronghold_corridor")
    .randomChance(0.4)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/stronghold_crossing")
    .randomChance(0.9)
    .addLoot("numismatics:bevel")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/stronghold_crossing")
    .randomChance(0.4)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.7)
    .addLoot("numismatics:sprocket")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.4)
    .addLoot("numismatics:cog")
    .limitCount([1, 1]);
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.2)
    .addLoot("numismatics:cog")
    .limitCount([1, 1]);
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.2)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:shulking"}}'
      )
    );
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.2)
    .addLoot(
      Item.of(
        "splendid_slimes:slime_heart",
        '{slime:{id:"splendid_slimes:ender"}}'
      )
    );

  // Seeds
  e.addBlockLootModifier("minecraft:grass").removeLoot("#forge:seeds");
  e.addBlockLootModifier("minecraft:tall_grass").removeLoot("#forge:seeds");
  e.addBlockLootModifier("minecraft:fern").removeLoot("#forge:seeds");
  e.addBlockLootModifier("minecraft:tall_fern").removeLoot("#forge:seeds");

  // Artisan Machines that save nbt on drop
  e.addBlockLootModifier("society:prize_machine").removeLoot(
    "society:prize_machine"
  );
  e.addBlockLootModifier("society:villager_home").removeLoot(
    "society:villager_home"
  );
  e.addBlockLootModifier("whimsy_deco:sunlit_singing_frog").removeLoot(
    "whimsy_deco:sunlit_singing_frog"
  );
  e.addBlockLootModifier("society:fish_pond").removeLoot("society:fish_pond");
  e.addBlockLootModifier("society:mana_fruit_crop").removeLoot(
    "society:mana_fruit_crop"
  );

  e.addBlockLootModifier(global.plushies).removeLoot("*");

  // Replace Loot
  e.addLootTableModifier("minecraft:chests/pillager_outpost")
    .randomChance(0.65)
    .replaceLoot("etcetera:eggple", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/village/village_plains_house")
    .randomChance(0.85)
    .replaceLoot("etcetera:eggple", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.85)
    .replaceLoot("etcetera:golden_eggple", "numismatics:crown", true);
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.85)
    .replaceLoot("etcetera:golden_eggple", "numismatics:crown", true);
  e.addLootTableModifier("minecraft:chests/ruined_portal")
    .randomChance(1)
    .replaceLoot("minecraft:flint_and_steel", "numismatics:cog", true);

  // Fix unstackable item voiding bug
  e.addLootTypeModifier(LootType.CHEST).modifyLoot(
    Ingredient.all,
    (itemStack) => {
      return fixedStackSize(itemStack);
    }
  );

  e.addLootTypeModifier(LootType.CHEST).pool((p) => {
    p.randomChance(0.05).addLoot("society:recall_potion");
  });
  e.addLootTableModifier("minecraft:chests/simple_dungeon").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/spawn_bonus_chest").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/abandoned_mineshaft").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/shipwreck_supply").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/village/village_plains_house").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/village/village_taiga_house").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/village/village_desert_house").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  e.addLootTableModifier("minecraft:chests/village/village_snowy_house").replaceLoot("cluttered:willow_sapling", "numismatics:cog", true);
  // Mastery
  e.addLootTypeModifier(LootType.CHEST)
    .hasAnyStage("husbandry_mastery")
    .pool((p) => {
      p.randomChance(0.1).addLoot("society:plushie_capsule");
      p.randomChance(0.05).addLoot("society:animal_cracker");
    });
});
