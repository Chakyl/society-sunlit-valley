StartupEvents.registry("block", (event) => {

    const createSkullVariant = (type, path) => {
        event.create(`society:skull_${type}`)
            .soundType("stone")
            .resistance(3600000)
            .requiresTool(true)
            .texture(path)
            .unbreakable()
            .tagBlock("society:skull_block");
    };
    createSkullVariant("arid_sandstone", "atmospheric:block/arid_sandstone_top");
    createSkullVariant("blackstone", "minecraft:block/blackstone");
    createSkullVariant("crimsite", "create:block/palettes/stone_types/natural/crimsite_0")
    createSkullVariant("end_stone", "minecraft:block/end_stone");
    createSkullVariant("granite", "minecraft:block/granite")
    createSkullVariant("limestone", "create:block/block/palettes/stone_types/limestone")
    createSkullVariant("permafrost", "quark:block/permafrost");
    createSkullVariant("sandstone", "minecraft:block/sandstone_top");
    createSkullVariant("scoria", "create:block/palettes/stone_types/scoria")
    createSkullVariant("stone", "minecraft:block/stone");
    createSkullVariant("veridium", "create:block/palettes/stone_types/natural/veridium_0")

    // Placeholder stuff for SK
    event.create('extractinator:slush')
    event.create('minecraft:grass')
    event.create('moreminecarts:chiseled_organic_glass_pane')
    event.create('moreminecarts:chiseled_organic_glass')
    event.create('moreminecarts:organic_glass_pane')
    event.create('moreminecarts:organic_glass')
    event.create('society:blackstone_boulder')
    event.create('society:deepslate_iridium_ore')
    event.create('society:deepslate_sparkstone_ore')
    event.create('society:earth_crystal')
    event.create('society:end_stone_boulder')
    event.create('society:fire_quartz')
    event.create('society:geode_node')
    event.create('society:ice_boulder')
    event.create('society:iridium_ore')
    event.create('society:magma_geode_node')
    event.create('society:oak_supply_crate')
    event.create('society:omni_geode_node')
    event.create('society:palm_supply_crate')
    event.create('society:sandstone_boulder')
    event.create('society:skull_cavern_teleporter')
    event.create('society:sparkstone_ore')
    event.create('society:spruce_supply_crate')
    event.create('society:stone_boulder')
    event.create('windswept:icicles')
    event.create("society:grimwood_supply_crate")
})
