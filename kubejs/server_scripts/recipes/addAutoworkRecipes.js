const crushingMap = new Map ([
    ['#minecraft:logs', '2x minecraft:oak_planks'],
    ['minecraft:raw_iron_block', '9x create:crushed_raw_iron'],
    ['minecraft:raw_copper_block', '9x create:crushed_raw_copper'],
    ['minecraft:raw_gold_block', '9x create:crushed_raw_gold'],
    ['oreganized:raw_lead_block', '9x create:crushed_raw_lead'],
    ['oreganized:raw_silver_block', '9x create:crushed_raw_silver'],
    ['create:raw_zinc_block', '9x create:crushed_raw_zinc']
])

ServerEvents.recipes((event) => {
    for (const [input, output] of crushingMap) {
        autoworkCrushingHelper(event, output, input)
    }
})
