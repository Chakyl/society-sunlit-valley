console.info("[SOCIETY] addToolRecipes.js loaded");

ServerEvents.recipes((e) => {
  const toolTypes = ["pickaxe", "shovel", "hoe", "sword", "axe"];
  const armorTypes = ["helmet", "chestplate", "leggings", "boots"];

  const upgradeTool = (type, modId, armor) => {
    if (!armor) {
      if (type !== "watering_can") {
        e.smithing(
          `${modId}:stone_${type}`,
          "numismatics:cog",
          `${modId}:wooden_${type}`,
          "minecraft:cobblestone"
        );
        e.smithing(
          `${modId}:iron_${type}`,
          "society:iron_upgrade_smithing_template",
          `${modId}:stone_${type}`,
          "minecraft:iron_ingot"
        );
      }
    } else {
      e.smithing(
        `${modId}:chainmail_${type}`,
        "numismatics:cog",
        `${modId}:leather_${type}`,
        "minecraft:chain"
      );
      e.smithing(
        `${modId}:iron_${type}`,
        "society:iron_upgrade_smithing_template",
        `${modId}:chainmail_${type}`,
        "minecraft:iron_ingot"
      );
    }
    e.smithing(
      `${modId}:gold${modId === "minecraft" ? "en" : ""}_${type}`,
      `society:gold_upgrade_smithing_template`,
      `${modId}:iron_${type}`,
      "minecraft:gold_ingot"
    );
    e.smithing(
      `${modId}:diamond_${type}`,
      `society:diamond_upgrade_smithing_template`,
      `${modId}:gold${modId === "minecraft" ? "en" : ""}_${type}`,
      "minecraft:diamond"
    );
    if (modId !== "aquaculture") {
      e.smithing(
        `${modId}:netherite_${type}`,
        "minecraft:netherite_upgrade_smithing_template",
        `${modId}:diamond_${type}`,
        "minecraft:netherite_ingot"
      );
    }
  };
  e.smithing(
    "society:galaxy_sword",
    "minecraft:netherite_upgrade_smithing_template",
    "minecraft:netherite_sword",
    "society:prismatic_shard"
  );

  const manasteelUpgrades = (type) => {
    e.smithing(
      `botania:manasteel_${type === "pickaxe" ? "pick" : type}`,
      "society:botanical_tribute",
      `minecraft:golden_${type}`,
      "botania:manasteel_ingot"
    );
  };
  const elementiumUpgrades = (type) => {
    e.smithing(
      `botania:elementium_${type}`,
      "society:botanical_tribute",
      `botania:manasteel_${type === "pickaxe" ? "pick" : type}`,
      "botania:elementium_ingot"
    );
  };
  e.smithing(
    "botania:glass_pickaxe",
    "society:botanical_tribute",
    "botania:manasteel_pick",
    "botania:mana_glass"
  );
  const runes = ["spring", "summer", "autumn", "winter"];
  const terrasteelUpgrades = (type, runeIndex) => {
    e.shaped(`botania:terrasteel_${type}`, ["crc", "mTm", "cmc"], {
      T: Item.of(`botania:manasteel_${type}`),
      m: "botania:terrasteel_ingot",
      c: "society:botanical_tribute",
      r: `botania:rune_${runes[runeIndex]}`,
    }).modifyResult((grid, result) => {
      let item = grid.find(Item.of(`botania:manasteel_${type}`));
      return result.withNBT(item.nbt);
    });
  };
  const neptuniumUpgrades = (type) => {
    e.smithing(
      `aquaculture:neptunium_${type}`,
      `society:neptunium_upgrade_smithing_template`,
      `minecraft:diamond_${type}`,
      "aquaculture:neptunium_ingot"
    );
  };
  toolTypes.forEach((type) => {
    upgradeTool(type, "minecraft");
    neptuniumUpgrades(type);
    manasteelUpgrades(type);
    elementiumUpgrades(type);
  });
  armorTypes.forEach((type, index) => {
    upgradeTool(type, "minecraft", true);
    neptuniumUpgrades(type);
    manasteelUpgrades(type);
    elementiumUpgrades(type);
    terrasteelUpgrades(type, index);
  });
  e.smithing(
    `aquaculture:neptunium_bow`,
    `society:neptunium_upgrade_smithing_template`,
    `minecraft:bow`,
    "aquaculture:neptunium_ingot"
  );
  upgradeTool("fillet_knife", "aquaculture");
  e.smithing(
    `aquaculture:neptunium_fillet_knife`,
    `society:neptunium_upgrade_smithing_template`,
    `aquaculture:diamond_fillet_knife`,
    "aquaculture:neptunium_ingot"
  );

  // BA brush
  e.smithing(
    "betterarcheology:iron_brush",
    "society:iron_upgrade_smithing_template",
    "minecraft:brush",
    "minecraft:iron_ingot"
  );
  e.smithing(
    "betterarcheology:diamond_brush",
    "society:diamond_upgrade_smithing_template",
    "betterarcheology:iron_brush",
    "minecraft:diamond"
  );
  e.smithing(
    "betterarcheology:netherite_brush",
    "minecraft:netherite_upgrade_smithing_template",
    "betterarcheology:diamond_brush",
    "minecraft:netherite_ingot"
  );
  // Knives
  const knifeTiers = ["flint", "iron", "gold", "diamond", "netherite"];
  knifeTiers.forEach((tier, index) => {
    if (index > 0) {
      e.smithing(
        `farmersdelight:${tier === "gold" ? "golden" : tier}_knife`,
        tier === "netherite"
          ? "minecraft:netherite_upgrade_smithing_template"
          : `society:${tier}_upgrade_smithing_template`,
        `farmersdelight:${
          tier === "diamond" ? "golden" : knifeTiers[index - 1]
        }_knife`,
        `minecraft:${tier}${tier === "diamond" ? "" : "_ingot"}`
      );
    }
  });
  const rodTiers = ["normal", "iron", "gold", "diamond", "neptunium"];
  rodTiers.forEach((tier, index) => {
    if (index > 0) {
      e.smithing(
        `aquaculture:${tier}_fishing_rod`,
        tier === "netherite"
          ? "minecraft:netherite_upgrade_smithing_template"
          : `society:${tier}_upgrade_smithing_template`,
        tier === "iron"
          ? "minecraft:fishing_rod"
          : `aquaculture:${rodTiers[index - 1]}_fishing_rod`,
        tier === "neptunium"
          ? "aquaculture:neptunium_ingot"
          : `minecraft:${tier}${tier === "diamond" ? "" : "_ingot"}`
      );
    }
  });
  // Misc
  e.smithing(
    "create:netherite_backtank",
    "minecraft:netherite_upgrade_smithing_template",
    "create:copper_backtank",
    "minecraft:netherite_ingot"
  );
  e.smithing(
    "create:netherite_diving_helmet",
    "minecraft:netherite_upgrade_smithing_template",
    "create:copper_diving_helmet",
    "minecraft:netherite_ingot"
  );
  e.smithing(
    "create:netherite_diving_boots",
    "minecraft:netherite_upgrade_smithing_template",
    "create:copper_diving_boots",
    "minecraft:netherite_ingot"
  );
  // Wool armor
  const upgradeWool = (type, mappedType) => {
    e.smithing(
      `minecraft:chainmail_${mappedType}`,
      "society:iron_upgrade_smithing_template",
      `sewingkit:wool_${type}`,
      "minecraft:chain"
    );
  };
  [
    { wool: "hat", upgrade: "helmet" },
    { wool: "shirt", upgrade: "chestplate" },
    { wool: "pants", upgrade: "leggings" },
    { wool: "shoes", upgrade: "boots" },
  ].forEach((entry) => {
    upgradeWool(entry.wool, entry.upgrade);
  });
  e.smithing(
    "society:dragontooth_axe",
    "minecraft:netherite_upgrade_smithing_template",
    "minecraft:diamond_axe",
    "minecraft:bone_block"
  );
  // Watering Cans
  e.smithing(
    "dew_drop_watering_cans:iron_watering_can",
    "society:iron_upgrade_smithing_template",
    "dew_drop_watering_cans:copper_watering_can",
    "minecraft:iron_ingot"
  );
  upgradeTool("watering_can", "dew_drop_watering_cans");
});
