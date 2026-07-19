StartupEvents.registry("block", (event) => {

    const skullCavernOreTypes = [
        "coal",
        "iron",
        "gold",
        "copper",
        "lead",
        "silver",
        "redstone",
        "bismuth",
        "quartz",
        "iridium",
        "sparkstone"
    ]

    function generateOreModel(baseName, baseTexturePath, ore) {
        let blockModelPath = `kubejs/assets/society/models/block/${baseName}_${ore}_ore.json`
        let blockModelJson = {
            parent: "society:block/ore_template",
            textures: {
                particle: `society:block/overlays/${ore}`,
                base: baseTexturePath,
                emissive: `society:block/overlays/${ore}`
            }
        }

        JsonIO.write(blockModelPath, blockModelJson)
    }

    function generateOreBlock(baseName, ore, hardness) {
        event.create(`society:${baseName}_${ore}_ore`)
            .tag(`c:ores/${ore}`)
            .tag(`society:skull_ore/${ore}`)
            .requiresTool(true)
            .soundType("stone")
            .hardness(hardness)
    }

    function createBiomeOres(baseName, baseTexturePath, hardness) {
        skullCavernOreTypes.forEach((ore) => {
            generateOreModel(baseName, baseTexturePath, ore)
            generateOreBlock(baseName, ore, hardness)
        })
    }

    createBiomeOres("granite", "minecraft:block/granite", 100)

})