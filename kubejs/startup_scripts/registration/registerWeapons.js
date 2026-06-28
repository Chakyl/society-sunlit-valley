console.info("[SOCIETY] registerWeapons.js loaded");

ItemEvents.toolTierRegistry((e) => {
  e.add("prismatic", (tier) => {
    tier.uses = 1000;
    tier.speed = 8;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "society:prismatic_shard";
  });
});

StartupEvents.registry("item", (e) => {
  e.create("society:galaxy_sword", "sword")
    .texture("society:item/galaxy_sword")
    .rarity("epic")
    .tier("prismatic")
    .displayName("<ltcolor>c=AA0000;c=FFAA00;c=FF55FF;c=FFFF55;c=00AA00;c=00AAAA;c=AA00AA;c=FF55FF;w=1;p=2;Galaxy Sword</ltcolor>")
    .tag("minecraft:swords")
    .attackDamageBaseline(10.0)
    .speed(3.0)
    .modifyTier((tier) => {
      tier.setRepairIngredient(
        Ingredient.custom((item) => {
          if (item.id == "society:prismatic_shard") return true;
          return false;
        })
      );
    });
  e.create("society:dragontooth_axe", "axe")
    .texture("society:item/dragontooth_axe")
    .rarity("epic")
    .tier("prismatic")
    .attackDamageBaseline(12.0)
    .speed(5.0)
    .modifyTier((tier) => {
      tier.setRepairIngredient(
        Ingredient.custom((item) => {
          if (item.id == "society:prismatic_shard") return true;
          return false;
        })
      );
    });
  e.create("society:princess_hairbrush", "sword")
    .texture("society:item/artifacts/princess_hairbrush")
    .rarity("epic")
    .tier("prismatic")
    .tag("minecraft:swords")
    .attackDamageBaseline(6.0)
    .speed(3.0)
    .modifyTier((tier) => {
      tier.setRepairIngredient(
        Ingredient.custom((item) => {
          if (item.id == "society:prismatic_shard") return true;
          return false;
        })
      );
    });
  e.create("society:meowmageddon", "sword")
    .texture("society:item/meowmageddon")
    .rarity("epic")
    .tier("prismatic")
    .displayName("<ltcolor>c=55FFFF;c=77DDCC;c=FF55FF;c=FFFFFF;Meowmageddon</ltcolor>")
    .tag("minecraft:swords")
    .attackDamageBaseline(11.0)
    .speed(4.0)
    .modifyTier((tier) => {
      tier.setRepairIngredient(
        Ingredient.custom((item) => {
          if (item.id == "society:prismatic_shard") return true;
          return false;
        })
      );
    });
});
