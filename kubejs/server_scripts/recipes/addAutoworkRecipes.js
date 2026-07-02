const crushingMap = new Map([
    ['#minecraft:logs', '2x minecraft:oak_planks'],
    ['minecraft:raw_iron_block', '9x create:crushed_raw_iron'],
    ['minecraft:raw_copper_block', '9x create:crushed_raw_copper'],
    ['minecraft:raw_gold_block', '9x create:crushed_raw_gold'],
    ['oreganized:raw_lead_block', '9x create:crushed_raw_lead'],
    ['oreganized:raw_silver_block', '9x create:crushed_raw_silver'],
    ['create:raw_zinc_block', '9x create:crushed_raw_zinc'],
    ['minecraft:obsidian', '2x create:powdered_obsidian'],
    ['minecraft:netherrack', 'create:cinder_flour'],
    ['minecraft:moss_block', '2x quark:moss_paste'],
    ['#create:stone_types/crimsite', '4x minecraft:iron_nugget'],
    ['#oreganized:stone_types/glance', '8x oreganized:lead_nugget'],
    ['#create:stone_types/ochrum', '2x minecraft:gold_nugget'],
    ['#create:stone_types/veridium', '8x create:copper_nugget'],
    ['#create:stone_types/asurine', '3x create:zinc_nugget']
])

const colorMap = new Map([
    ['society:decorated_pot', (color) => `clayworks:${color}_decorated_pot`],
    ['society:shingles', (color) => `quark:${color}_shingles`]
])

ServerEvents.recipes((event) => {
    for (const [input, output] of crushingMap) {
        autoworkCrushingHelper(event, output, input)
    }
    for (const [inputTag, outputFormatter] of colorMap) {
        autoworkPaintingHelper(event, inputTag, outputFormatter)
    }
})

ServerEvents.tags('item', event => {
    colors.forEach((color) => {
        event.add('society:decorated_pot', `clayworks:${color}_decorated_pot`)
        event.add('society:decorated_pot', `minecraft:decorated_pot`)
        event.add("society:shingles", `quark:${color}_shingles`)
        event.add("society:shingles", `quark:shingles`)
    })
})