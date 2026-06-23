ServerEvents.recipes((event) => {

    event.shaped('sophisticatedstorage:diamond_storage_upgrade', ['ABA', 'BCB', 'ABA'], {
        A: '#c:ingots/copper',
        B: '#c:gems/diamond',
        C: '#society:storage_upgrade_basic'
    })

    event.shaped('sophisticatedstorage:prismatic_storage_upgrade', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_scrap',
        B: 'society:prismatic_shard',
        C: '#society:storage_upgrade_diamond'
    })

    event.shaped('sophisticatedbackpacks:diamond_backpack_upgrade', ['ABA', 'BCB', 'ABA'], {
        A: '#c:ingots/copper',
        B: '#c:gems/diamond',
        C: '#society:backpack_upgrade_basic'
    })

    event.shaped('sophisticatedbackpacks:prismatic_backpack_upgrade', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_scrap',
        B: 'society:prismatic_shard',
        C: '#society:backpack_upgrade_diamond'
    })
})
