ServerEvents.tags('item', event => {
    event.add('society:backpack_upgrade_basic', ['sophisticatedbackpacks:upgrade_base', 'sophisticatedbackpacks:pickup_upgrade', 'sophisticatedbackpacks:filter_upgrade', 'sophisticatedbackpacks:magnet_upgrade', 'sophisticatedbackpacks:feeding_upgrade', 'sophisticatedbackpacks:compacting_upgrade', 'sophisticatedbackpacks:void_upgrade', 'sophisticatedbackpacks:restock_upgrade', 'sophisticatedbackpacks:deposit_upgrade', 'sophisticatedbackpacks:refill_upgrade', 'sophisticatedbackpacks:smelting_upgrade', 'sophisticatedbackpacks:smoking_upgrade', 'sophisticatedbackpacks:blasting_upgrade', 'sophisticatedbackpacks:crafting_upgrade', 'sophisticatedbackpacks:stonecutter_upgrade', 'sophisticatedbackpacks:stack_downgrade_tier_1', 'sophisticatedbackpacks:stack_downgrade_tier_2', 'sophisticatedbackpacks:stack_downgrade_tier_3', 'sophisticatedbackpacks:jukebox_upgrade', 'sophisticatedbackpacks:tool_swapper_upgrade', 'sophisticatedbackpacks:tank_upgrade', 'sophisticatedbackpacks:pump_upgrade', 'sophisticatedbackpacks:smithing_upgrade', 'sophisticatedbackpacks:sawmill/sawmill_upgrade'])
    event.add('society:backpack_upgrade_diamond', ['sophisticatedbackpacks:advanced_deposit_upgrade', 'sophisticatedbackpacks:advanced_refill_upgrade', 'sophisticatedbackpacks:auto_smelting_upgrade', 'sophisticatedbackpacks:auto_smoking_upgrade', 'sophisticatedbackpacks:auto_blasting_upgrade', 'sophisticatedbackpacks:advanced_jukebox_upgrade', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 'sophisticatedbackpacks:xp_pump_upgrade', 'sophisticatedbackpacks:diamond_backpack_upgrade', 'sophisticatedbackpacks:advanced_pickup_upgrade', 'sophisticatedbackpacks:advanced_filter_upgrade', 'sophisticatedbackpacks:advanced_magnet_upgrade', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'sophisticatedbackpacks:advanced_compacting_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade', 'sophisticatedbackpacks:advanced_restock_upgrade', 'sophisticatedbackpacks:everlasting_upgrade'])
    event.add('society:backpack_upgrade_prismatic', ['sophisticatedbackpacks:prismatic_backpack_upgrade', 'sophisticatedbackpacks:inception_upgrade', 'sophisticatedbackpacks:stack_upgrade_omega_tier'])

    event.add('society:storage_upgrade_basic', ['sophisticatedstorage:smoking_upgrade', 'sophisticatedstorage:smelting_upgrade', 'sophisticatedstorage:void_upgrade', 'sophisticatedstorage:compacting_upgrade', 'sophisticatedstorage:feeding_upgrade', 'sophisticatedstorage:magnet_upgrade', 'sophisticatedstorage:filter_upgrade', 'sophisticatedstorage:pickup_upgrade', 'sophisticatedstorage:upgrade_base', 'sophisticatedstorage:hopper_upgrade', 'sophisticatedstorage:compression_upgrade', 'sophisticatedstorage:jukebox_upgrade', 'sophisticatedstorage:stack_downgrade_tier_3', 'sophisticatedstorage:stack_downgrade_tier_2', 'sophisticatedstorage:stack_downgrade_tier_1', 'sophisticatedstorage:stonecutter_upgrade', 'sophisticatedstorage:crafting_upgrade', 'sophisticatedstorage:blasting_upgrade'])
    event.add('society:storage_upgrade_diamond', ['sophisticatedstorage:diamond_storage_upgrade', 'sophisticatedstorage:advanced_pickup_upgrade', 'sophisticatedstorage:advanced_filter_upgrade', 'sophisticatedstorage:advanced_magnet_upgrade', 'sophisticatedstorage:advanced_feeding_upgrade', 'sophisticatedstorage:advanced_compacting_upgrade', 'sophisticatedstorage:advanced_void_upgrade', 'sophisticatedstorage:auto_smelting_upgrade', 'sophisticatedstorage:auto_smoking_upgrade', 'sophisticatedstorage:auto_blasting_upgrade', 'sophisticatedstorage:advanced_jukebox_upgrade', 'sophisticatedstorage:advanced_hopper_upgrade'])
    event.add('society:storage_upgrade_prismatic', ['sophisticatedstorage:prismatic_storage_upgrade', 'sophisticatedstorage:stack_upgrade_omega_tier'])

    event.add('society:redstone_component', ["society:redstone_component", 'create:powered_toggle_latch', 'create:powered_latch', 'minecraft:repeater', 'minecraft:comparator', 'quark:redstone_randomizer', 'autowork:andgate'])
    event.add('society:advanced_redstone_component', ["society:advanced_redstone_component", 'create:pulse_timer', 'create:pulse_repeater', 'create:pulse_extender'])
})

ServerEvents.recipes((event) => {

function stonecuttingSwitching(switchingTag) {
    let output = Ingredient.of(switchingTag).itemIds
    output.forEach(output => {
        event.stonecutting(output, switchingTag)
    })
}

    stonecuttingSwitching('#society:backpack_upgrade_basic')
    stonecuttingSwitching('#society:backpack_upgrade_diamond')
    stonecuttingSwitching('#society:backpack_upgrade_prismatic')

    stonecuttingSwitching('#society:storage_upgrade_basic')
    stonecuttingSwitching('#society:storage_upgrade_diamond')
    stonecuttingSwitching('#society:storage_upgrade_prismatic')

    stonecuttingSwitching('#society:redstone_component')
    stonecuttingSwitching('#society:advanced_redstone_component')
})
