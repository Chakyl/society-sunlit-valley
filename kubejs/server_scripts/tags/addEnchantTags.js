// Server Scripts

// Base gear Tiers

const ironTools = ['minecraft:iron_shovel', 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_hoe', 'minecraft:iron_sword']
const goldTools = ['minecraft:golden_shovel', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_hoe', 'minecraft:golden_sword']
const diamondTools = ['minecraft:diamond_sword', 'minecraft:diamond_shovel', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_hoe']

const ironArmor = ['minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots']
const goldArmor = ['minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots']
const diamondArmor = ['minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'nomansland:ancient_bronze_mask', 'nomansland:tortoise_shell']

// Sidegrades

const iridiumTools = ['minecraft:netherite_shovel', 'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_hoe', 'minecraft:netherite_sword']
const electrumTools = ['oreganized:electrum_shovel', 'oreganized:electrum_pickaxe', 'oreganized:electrum_axe', 'oreganized:electrum_hoe', 'oreganized:electrum_sword']

const iridiumArmor = ['minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'create:netherite_diving_boots']
const electrumArmor = ['oreganized:electrum_helmet', 'oreganized:electrum_chestplate', 'oreganized:electrum_leggings', 'oreganized:electrum_boots']

// Combine for enchanting

const ironToolEnchant = [ironTools, goldTools, diamondTools, iridiumTools, electrumTools]
const goldToolEnchant = [goldTools, diamondTools, iridiumTools, electrumTools]
const diamondToolEnchant = [diamondTools, iridiumTools, electrumTools]

const ironArmorEnchant = [ironArmor, goldArmor, diamondArmor, iridiumArmor, electrumArmor]
const goldArmorEnchant = [goldArmor, diamondArmor, iridiumArmor, electrumArmor]
const diamondArmorEnchant = [diamondArmor, iridiumArmor, electrumArmor]

const tiers = ["iron", "golden", "diamond"]
const gearPieces = ["shovel", "pickaxe", "axe", "hoe", "sword", "helmet", "chestplate", "leggings", "boots"]

ServerEvents.tags('item', event => {
    event.add('society:iron_tool_or_above', ironToolEnchant)
    event.add('society:golden_tool_or_above', goldToolEnchant)
    event.add('society:diamond_tool_or_above', diamondToolEnchant)

    event.add('society:iron_armor_or_above', ironArmorEnchant)
    event.add('society:golden_armor_or_above', goldArmorEnchant)
    event.add('society:diamond_armor_or_above', diamondArmorEnchant)

    event.add('society:iridium_tool', iridiumTools)
    event.add('society:electrum_tool', electrumTools)

    event.add('society:iridium_armor', iridiumArmor)
    event.add('society:electrum_armor', electrumArmor)

    gearPieces.forEach((type) => {
        event.add(`society:iron_${type}_or_above`, `#society:golden_${type}_or_above`)
        event.add(`society:golden_${type}_or_above`, `#society:diamond_${type}_or_above`)
        event.add(`society:diamond_${type}_or_above`, `oreganized:electrum_${type}`)
        event.add(`society:diamond_${type}_or_above`, `minecraft:netherite_${type}`)
        tiers.forEach((tier) => {
            event.add(`society:${tier}_${type}_or_above`, `minecraft:${tier}_${type}`)
        });
    });
})

const nukedEnchantments = [
    'minecraft:unbreaking'
]

ServerEvents.tags('enchantment', event => {
    event.removeAllTagsFrom(nukedEnchantments)
})

ServerEvents.generateData("last", event => {
    for (let id of nukedEnchantments) {
        event.json(`${id.namespace}:enchantment/${id.path}`, { "neoforge:conditions": [{ "type": "neoforge:false" }] })
    }
})