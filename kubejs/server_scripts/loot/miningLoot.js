
const overworldOres = [
    "meadow:alpine_diamond_ore",
    "meadow:alpine_salt_ore",
    "meadow:alpine_redstone_ore",
    "meadow:alpine_coal_ore",
    "meadow:alpine_lapis_ore",
    "meadow:alpine_gold_ore",
    "meadow:alpine_iron_ore",
    "meadow:alpine_copper_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:gold_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:iron_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:coal_ore",
    "minecraft:redstone_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:diamond_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:lapis_ore",
    "create:deepslate_zinc_ore",
    "create:zinc_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:emerald_ore",
];
const bettherOres = [
    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",
    "etcetera:nether_bismuth_ore",
];
const skullCavernOres = [
    "oreganized:lead_ore",
    "oreganized:deepslate_lead_ore",
    "oreganized:silver_ore",
    "oreganized:deepslate_silver_ore",
    "society:iridium_ore",
    "society:deepslate_iridium_ore",
    "society:sparkstone_ore",
    "society:deepslate_sparkstone_ore",
];

const addMiningLootToAllOres = (e, stage, chance, item, otherPool) => {
    overworldOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of(item).randomChance(chance));
    });
    bettherOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of(item).randomChance(chance));
    });

    skullCavernOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of(item).randomChance(chance));
    });
    if (otherPool && otherPool.length > 0) {
        otherPool.forEach((ore) => {
            e.addBlockModifier(ore)
                .hasAnyStage(stage)
                .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
                .addLoot(LootEntry.of(item).randomChance(chance));
        });
    }
};
const addWeightedMiningLootToAllOres = (e, stage, chance, item, otherPool) => {
    overworldOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .randomChance(chance).addWeightedLoot(item);
    });
    bettherOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .randomChance(chance).addWeightedLoot(item);
    });

    skullCavernOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(stage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .randomChance(chance).addWeightedLoot(item);
    });
    if (otherPool && otherPool.length > 0) {
        otherPool.forEach((ore) => {
            e.addBlockModifier(ore)
                .hasAnyStage(stage)
                .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
                .randomChance(chance).addWeightedLoot(item);
        });
    }
};
const addAdditionalGeodeRoll = (e, geodeStage) => {
    overworldOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(geodeStage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#forge:is_cold")
            .hasAnyStage(geodeStage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchPlayerCustom((player) => global.getSeasonFromLevel(player.level) === "winter")
            .hasAnyStage(geodeStage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#society:is_skull_cavern")
            .hasAnyStage(geodeStage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:omni_geode").randomChance(0.04));
    });
    bettherOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage(geodeStage)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:magma_geode").randomChance(0.1));
    });
};
LootJS.modifiers((e) => {
    e.addBlockModifier('nomansland:cave_weeds')
        .matchTool(ItemFilter.tag("c:tools/shear").negate())
        .randomChance(0.25)
        .hasAnyStage("mining_lvl_2")
        .addLoot("society:cave_carrot");
    [
        "minecraft:deepslate_coal_ore",
        "meadow:alpine_coal_ore",
        "minecraft:coal_ore",
    ].forEach((ore) => {
        e.addBlockModifier(ore)
            .randomChance(0.5)
            .hasAnyStage("mining_lvl_2")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot("minecraft:gunpowder")
    });

    overworldOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:earth_crystal").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#forge:is_cold")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchPlayerCustom((player) => global.getSeasonFromLevel(player.level) === "winter")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#forge:is_cold")
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:frozen_tear").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#society:is_skull_cavern")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:omni_geode").randomChance(0.04));
        e.addBlockModifier(ore)
            .matchBiome("#society:is_skull_cavern")
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:jade").randomChance(0.02));
        e.addBlockModifier(ore)
            .hasAnyStage("blockchain")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("numismatics:crown").randomChance(0.03));
        e.addBlockModifier(ore)
            .hasAnyStage("furniture_archaeologist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:furniture_box").randomChance(0.03));
        e.addBlockModifier(ore)
            .hasAnyStage("star_blessing")
            .matchDimension("minecraft:overworld")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:pristine_star_shards").randomChance(0.02));
        e.addBlockModifier(ore)
            .hasAnyStage("star_blessing")
            .matchDimension("society:skull_cavern")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:pristine_star_shards").randomChance(0.06));
        e.addBlockModifier("society:geode_node")
            .matchBiome("#forge:is_cold")
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier("society:geode_node")
            .addLoot(LootEntry.of("society:mining_monthly").randomChance(0.05));
        e.addBlockModifier("society:geode_node")
            .matchDimension("minecraft:overworld")
            .hasAnyStage("prismatic_prospector")
            .addLoot(LootEntry.of("society:prismatic_shard").randomChance(0.05));
        e.addBlockModifier("society:magma_geode_node")
            .addLoot(LootEntry.of("society:mining_monthly").randomChance(0.1));
        e.addBlockModifier("society:magma_geode_node")
            .matchDimension("minecraft:the_nether")
            .hasAnyStage("prismatic_prospector")
            .addLoot(LootEntry.of("society:prismatic_shard").randomChance(0.2));
        e.addBlockModifier("society:omni_geode_node")
            .addLoot(LootEntry.of("society:mining_monthly").randomChance(0.1));
        e.addBlockModifier("society:omni_geode_node")
            .hasAnyStage("prismatic_prospector")
            .addLoot(LootEntry.of("society:prismatic_shard").randomChance(0.3));
        e.addBlockModifier("minecraft:deepslate")
            .hasAnyStage("filthy_excavator")
            .addLoot(LootEntry.of("society:geode").randomChance(0.02));
        e.addBlockModifier("minecraft:netherrack")
            .hasAnyStage("filthy_excavator")
            .addLoot(LootEntry.of("society:magma_geode").randomChance(0.01));

    });
    bettherOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:magma_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:fire_quartz").randomChance(0.1));
        e.addBlockModifier(ore)
            .hasAnyStage("blockchain")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("numismatics:crown").randomChance(0.06));
        e.addBlockModifier(ore)
            .hasAnyStage("furniture_archaeologist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:furniture_box").randomChance(0.01));
    });
    skullCavernOres.forEach((ore) => {
        e.addBlockModifier(ore)
            .matchBiome("#forge:is_cold")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchPlayerCustom((player) => global.getSeasonFromLevel(player.level) === "winter")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:frozen_geode").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#forge:is_cold")
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:frozen_tear").randomChance(0.1));
        e.addBlockModifier(ore)
            .matchBiome("#society:is_skull_cavern")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .matchPlayerCustom((player) => !player.isFake())
            .addLoot(LootEntry.of("society:omni_geode").randomChance(0.04));
        e.addBlockModifier(ore)
            .matchBiome("#society:is_skull_cavern")
            .hasAnyStage("mineralogist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:jade").randomChance(0.02));
        e.addBlockModifier(ore)
            .hasAnyStage("blockchain")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("numismatics:crown").randomChance(0.03));
        e.addBlockModifier(ore)
            .hasAnyStage("furniture_archaeologist")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:furniture_box").randomChance(0.03));
        e.addBlockModifier(ore)
            .hasAnyStage("star_blessing")
            .matchDimension("society:skull_cavern")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(LootEntry.of("society:pristine_star_shards").randomChance(0.06));
    });
    [
        "minecraft:deepslate_gold_ore",
        "meadow:alpine_gold_ore",
        "minecraft:gold_ore",
    ].forEach((ore) => {
        e.addBlockModifier(ore)
            .hasAnyStage("gold_rush")
            .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
            .addLoot(Item.of("4x minecraft:raw_gold_block"));
    });

    addMiningLootToAllOres(
        e,
        "the_spark_also_rises",
        1,
        Item.of("1x society:sparkstone")
    );

    addMiningLootToAllOres(
        e,
        "husbandry_mastery",
        0.01,
        Item.of("1x society:animal_cracker"),
        [
            "society:oak_supply_crate",
            "society:spruce_supply_crate",
            "society:palm_supply_crate",
            "society:grimwood_supply_crate",
        ]
    );
    ["society:sparkstone_ore", "society:deepslate_sparkstone_ore"].forEach(
        (ore) => {
            e.addBlockModifier(ore)
                .hasAnyStage("mining_mastery")
                .matchTool(ItemFilter.hasEnchantment("minecraft:silk_touch").negate())
                .addLoot(LootEntry.of("society:the_spark_also_rises").randomChance(0.001));
        });

    addAdditionalGeodeRoll(e, "excavator");

    // TODO: Mastery Moon Statue
    // const weightedRemains = [];
    // [
    //     "crittersandcompanions:clam",
    //     "society:petrified_slime",
    //     "twigs:petrified_lichen",
    //     "atmospheric:petrified_armor_trim_smithing_template",
    //     "minecraft:bone",
    //     "aquaculture:fish_bones",
    //     "society:artifact_trove"
    // ].forEach((remain) =>
    //     weightedRemains.push(Item.of(remain).withChance(1))
    // );

    // addWeightedMiningLootToAllOres(e, "moon_remains", 0.05, weightedRemains);
    // addAdditionalGeodeRoll(e, "moon_geode_roll");

    // e.addBlockModifier(overworldOres)
    //     .hasAnyStage("moon_extra_ore")
    //     .modifyLoot(Ingredient.all, (itemStack) => {
    //         if (itemStack.hasTag("forge:raw_materials"))
    //             itemStack.setCount(itemStack.getCount() + 1);
    //         return itemStack;
    //     });
});