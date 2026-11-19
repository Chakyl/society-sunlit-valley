
LootJS.modifiers((e) => {
    ["minecraft:short_grass", "minecraft:tall_grass", "farmersdelight:sandy_shrub"].forEach((block) => {
        e.addBlockModifier(block)
            .matchTool("#c:tools")
            .matchTool(ItemFilter.tag("c:tools/shear").negate())
            .randomChance(0.35)
            .hasAnyStage("foraging_lvl_1")
            .addLoot("farmersdelight:straw");
    })

});