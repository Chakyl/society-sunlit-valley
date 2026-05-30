ServerEvents.tags('item', event => {
    event.add('society:backpack_upgrade_base', ['sophisticatedbackpacks:upgrade_base', 'sophisticatedbackpacks:pickup_upgrade', 'sophisticatedbackpacks:filter_upgrade', 'sophisticatedbackpacks:magnet_upgrade', 'sophisticatedbackpacks:feeding_upgrade', 'sophisticatedbackpacks:compacting_upgrade', 'sophisticatedbackpacks:void_upgrade', 'sophisticatedbackpacks:restock_upgrade', 'sophisticatedbackpacks:deposit_upgrade', 'sophisticatedbackpacks:refill_upgrade', 'sophisticatedbackpacks:smelting_upgrade', 'sophisticatedbackpacks:smoking_upgrade', 'sophisticatedbackpacks:blasting_upgrade', 'sophisticatedbackpacks:crafting_upgrade', 'sophisticatedbackpacks:stonecutter_upgrade', 'sophisticatedbackpacks:stack_downgrade_tier_1', 'sophisticatedbackpacks:stack_downgrade_tier_2', 'sophisticatedbackpacks:stack_downgrade_tier_3', 'sophisticatedbackpacks:jukebox_upgrade', 'sophisticatedbackpacks:tool_swapper_upgrade', 'sophisticatedbackpacks:tank_upgrade', 'sophisticatedbackpacks:pump_upgrade', 'sophisticatedbackpacks:smithing_upgrade', 'sophisticatedbackpacks:sawmill/sawmill_upgrade'])
    event.add('society:backpack_upgrade_diamond', ['sophisticatedbackpacks:advanced_deposit_upgrade', 'sophisticatedbackpacks:advanced_refill_upgrade', 'sophisticatedbackpacks:auto_smelting_upgrade', 'sophisticatedbackpacks:auto_smoking_upgrade', 'sophisticatedbackpacks:auto_blasting_upgrade', 'sophisticatedbackpacks:advanced_jukebox_upgrade', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 'sophisticatedbackpacks:xp_pump_upgrade', 'sophisticatedbackpacks:diamond_backpack_upgrade', 'sophisticatedbackpacks:advanced_pickup_upgrade', 'sophisticatedbackpacks:advanced_filter_upgrade', 'sophisticatedbackpacks:advanced_magnet_upgrade', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'sophisticatedbackpacks:advanced_compacting_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade', 'sophisticatedbackpacks:advanced_restock_upgrade', 'sophisticatedbackpacks:everlasting_upgrade'])
    event.add('society:backpack_upgrade_prismatic', ['sophisticatedbackpacks:prismatic_backpack_upgrade', 'sophisticatedbackpacks:inception_upgrade', 'sophisticatedbackpacks:stack_upgrade_omega_tier'])
})



ServerEvents.recipes((event) => {

function stonecuttingSwitching(switchingTag) {
    let output = Ingredient.of(switchingTag).itemIds
    output.forEach(output => {
        event.stonecutting(output, switchingTag)
    })
}

    stonecuttingSwitching('#society:backpack_upgrade_base')
    stonecuttingSwitching('#society:backpack_upgrade_diamond')
    stonecuttingSwitching('#society:backpack_upgrade_prismatic')

})