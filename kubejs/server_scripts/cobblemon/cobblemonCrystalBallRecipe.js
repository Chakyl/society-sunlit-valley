console.info("[SOCIETY-S-COBBLEMON] cobblemonCrystalBallRecipe.js loaded");


ServerEvents.recipes((e) => {
    const createCrystalBallRecipe = (
        input,
        affectedTypes,
        consumeChance,
        bonusChance
    ) => {
        let recipe = {
            type: "cobblemon_farmers:crystal_ball",
            affected_types: affectedTypes,
            consume_chance: consumeChance,
            bonus_chance: bonusChance,
            ingredient: { item: input },
        };
        e.custom(recipe);
    };

    global.POKEMON_TYPES.forEach((type) => {
        createCrystalBallRecipe(`sunlit_cobblemon:pristine_${type.type}_gem`, [type.type], 0.25, 0.5)
    });
    [
        { item: "society:allanite", mult: 0.15, consumeChance: 0.4, types: ["dark", "ground"] },
        { item: "society:calcite_gem", mult: 0.15, consumeChance: 0.4, types: ["normal", "rock"] },
        { item: "society:celestine", mult: 0.15, consumeChance: 0.4, types: ["fairy", "ice"] },
        { item: "society:earth_crystal", mult: 0.35, consumeChance: 0.65, types: ["grass", "ground"] },
        { item: "society:granite_slate", mult: 0.15, consumeChance: 0.4, types: ["fighting", "rock"] },
        { item: "society:jagoite", mult: 0.15, consumeChance: 0.4, types: ["bug", "rock"] },
        { item: "society:jamborite", mult: 0.15, consumeChance: 0.4, types: ["grass", "rock"] },
        { item: "society:limestone_pebble", mult: 0.15, consumeChance: 0.4, types: ["normal", "rock"] },
        { item: "society:malachite", mult: 0.15, consumeChance: 0.4, types: ["grass", "rock"] },
        { item: "society:mudstone", mult: 0.30, consumeChance: 0.8, types: ["rock", "ground"] },
        { item: "society:nekoite", mult: 0.15, consumeChance: 0.4, types: ["normal", "steel"] },
        { item: "society:orpiment", mult: 0.15, consumeChance: 0.4, types: ["fire", "rock"] },
        { item: "society:petrified_slime", mult: 0.15, consumeChance: 0.4, types: ["poison", "rock"] },
        { item: "society:sandstone_slate", mult: 0.07, consumeChance: 0.2, types: ["rock", "ground"] },
        { item: "society:slate", mult: 0.15, consumeChance: 0.4, types: ["dark", "rock"] },
        { item: "society:thunder_egg", mult: 0.1, consumeChance: 0.4, types: ["electric", "flying", "rock"] },
    ].forEach((entry) => {
        createCrystalBallRecipe(entry.item, entry.types, entry.consumeChance, entry.mult)
        createCrystalBallRecipe(`society:pristine_${entry.item.path}`, entry.types, entry.consumeChance / 2, entry.mult * 2)
    });
    [
        { item: "society:aerinite", mult: 0.2, consumeChance: 0.35, types: ["flying", "ice"] },
        { item: "society:esperite", mult: 0.25, consumeChance: 0.35, types: ["psychic"] },
        { item: "society:fairy_stone", mult: 0.25, consumeChance: 0.35, types: ["fairy"] },
        { item: "society:fluorapatite", mult: 0.2, consumeChance: 0.35, types: ["poison", "ghost"] },
        { item: "society:geminite", mult: 0.2, consumeChance: 0.35, types: ["water", "ice"] },
        { item: "society:ghost_crystal", mult: 0.2, consumeChance: 0.35, types: ["ghost", "ice"] },
        { item: "society:hematite", mult: 0.2, consumeChance: 0.35, types: ["dark", "steel"] },
        { item: "society:kyanite", mult: 0.2, consumeChance: 0.35, types: ["water", "ice"] },
        { item: "society:lunarite", mult: 0.2, consumeChance: 0.35, types: ["fairy", "flying", "psychic"] },
        { item: "society:marble", mult: 0.25, consumeChance: 0.35, types: ["normal"] },
        { item: "society:ocean_stone", mult: 0.2, consumeChance: 0.35, types: ["water", "grass"] },
        { item: "society:opal", mult: 0.2, consumeChance: 0.35, types: ["psychic", "water"] },
        { item: "society:pyrite", mult: 0.2, consumeChance: 0.35, types: ["dark", "steel"] },
        { item: "society:soapstone", mult: 0.2, consumeChance: 0.35, types: ["normal", "poison"] },
        { item: "society:frozen_tear", mult: 0.35, consumeChance: 0.65, types: ["ice"] },
    ].forEach((entry) => {
        createCrystalBallRecipe(entry.item, entry.types, entry.consumeChance, entry.mult)
        createCrystalBallRecipe(`society:pristine_${entry.item.path}`, entry.types, entry.consumeChance / 2, entry.mult * 2)
    });
    [
        { item: "society:baryte", mult: 0.3, consumeChance: 0.3, types: ["fighting"] },
        { item: "society:basalt_shard", mult: 0.25, consumeChance: 0.3, types: ["fire", "rock"] },
        { item: "society:bixbyite", mult: 0.3, consumeChance: 0.3, types: ["dark"] },
        { item: "society:dolomite", mult: 0.3, consumeChance: 0.3, types: ["psychic"] },
        { item: "society:fire_opal", mult: 0.25, consumeChance: 0.3, types: ["fire", "water"] },
        { item: "society:fire_quartz", mult: 0.4, consumeChance: 0.65, types: ["fire"] },
        { item: "society:helvite", mult: 0.25, consumeChance: 0.3, types: ["fire", "steel"] },
        { item: "society:jasper", mult: 0.25, consumeChance: 0.3, types: ["fire", "ghost"] },
        { item: "society:lemon_stone", mult: 0.3, consumeChance: 0.3, types: ["electric"] },
        { item: "society:neptunite", mult: 0.3, consumeChance: 0.3, types: ["water"] },
        { item: "society:pure_obsidian", mult: 0.3, consumeChance: 0.3, types: ["dragon"] },
        { item: "society:star_shards", mult: 0.5, consumeChance: 0.6, types: ["fairy"] },
        { item: "society:tigerseye", mult: 0.25, consumeChance: 0.3, types: ["psychic", "fighting"] },
    ].forEach((entry) => {
        createCrystalBallRecipe(entry.item, entry.types, entry.consumeChance, entry.mult)
        createCrystalBallRecipe(`society:pristine_${entry.item.path}`, entry.types, entry.consumeChance / 2, entry.mult * 2)
    });

    [
        { item: "minecraft:diamond", mult: 0.2, consumeChance: 0.35, types: [], },
        { item: "minecraft:amethyst_shard", mult: 0.16, consumeChance: 0.5, types: ["fairy", "psychic", "ghost"] },
        { item: "minecraft:emerald", mult: 0.24, consumeChance: 0.5, types: ["dark", "dragon", "fighting"], },
        { item: "minecraft:prismarine_crystals", mult: 0.16, consumeChance: 0.5, types: ["water", "ice", "grass"] },
    ].forEach((entry) => {
        createCrystalBallRecipe(`society:pristine_${entry.item.path}`, entry.types, entry.consumeChance / 2, entry.mult * 2)
    });

    [
        { item: "minecraft:quartz", mult: 0.03, consumeChance: 1, types: ["flying", "ice"] },
        { item: "minecraft:lapis_lazuli", mult: 0.02, consumeChance: 1, types: ["psychic"] },
        { item: "society:aquamarine", mult: 0.6, consumeChance: 0.6, types: ["water", "ice", "poison", "bug"] },
        { item: "society:amethyst_chunk", mult: 0.6, consumeChance: 0.6, types: ["psychic", "dark", "ghost", "normal"] },
        { item: "society:ruby", mult: 0.6, consumeChance: 0.6, types: ["dragon", "ground", "flying", "ice"] },
        { item: "society:topaz", mult: 0.6, consumeChance: 0.6, types: ["fire", "electric", "rock"] },
        { item: "society:jade", mult: 1, consumeChance: 0.2, types: ["steel", "fairy", "fighting"] },
        { item: "society:spinel", mult: 0.5, consumeChance: 0.4, types: [] },
    ].forEach((entry) => {
        createCrystalBallRecipe(entry.item, entry.types, entry.consumeChance, entry.mult)
        createCrystalBallRecipe(`society:pristine_${entry.item.path}`, entry.types, entry.consumeChance / 2, entry.mult * 2)
    });

    [
        { item: "society:sparkstone", mult: 0.1, consumeChance: 1, types: ["electric"] },
        { item: "botania:mana_diamond", mult: 0.8, consumeChance: 0.35, types: [], },
        { item: "sunlit_cobblemon:resonance_gem", mult: 1, consumeChance: 0.25, types: ["psychic"], },
        { item: "society:source_gem", mult: 1, consumeChance: 0.02, types: ["poison", "fairy", "steel"], },
        { item: "botania:dragonstone", mult: 1.2, consumeChance: 1, types: ["dragon", "fairy", "grass"] },
        { item: "society:prismatic_shard", mult: 2, consumeChance: 0.5, types: [], },
    ].forEach((entry) => {
        createCrystalBallRecipe(entry.item, entry.types, entry.consumeChance, entry.mult)
    });
});