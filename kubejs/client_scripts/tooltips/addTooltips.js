// Client Scripts
// Tooltip definitions using LibTooltips https://www.curseforge.com/minecraft/mc-mods/libtooltips
// Mainly ported from 1.20.1 definitions

const artifactTooltips = [
    {
        item: "society:froggy_helm",
        tooltip: "There's a large tongue nestled inside",
    },
    {
        item: "society:ribbit_drum",
        tooltip: "Nitwit Ribbits love to bang on this",
    },
    { item: "society:ribbit_gadget", tooltip: "Some sort of wetware circuit" },
    { item: "society:legendary_ink", tooltip: "We love casting spells" },
    { item: "society:holy_symbol", tooltip: "A tribute from a higher power" },
    {
        item: "society:ember_crystal_cluster",
        tooltip: "Feels hot to the touch",
    },
    { item: "society:living_flesh", tooltip: "Writhing and unnatural" },
    { item: "society:source_gem", tooltip: "Derived from a Gold Sea Coin" },
    {
        item: "society:spider_silk",
        tooltip: "Meticulously textured by a Nerdy Spider",
    },
    {
        item: "society:wheel_of_adaptation",
        tooltip: "Was once used to summon a beast",
    },
    {
        item: "society:token_of_unity",
        tooltip: "I love making mazes! I'm going to design the biggest maze ever!",
    },
    {
        item: "society:toy_train",
        tooltip: "« Limited to 2 passengers : ants »",
    },
    {
        item: "society:perfect_cherry",
        tooltip: "It wants you to eat it",
    },
    {
        item: "society:mini_oni_eye",
        tooltip: "Fits nicely on a banana",
    },
    { item: "society:glitched_vhs", tooltip: '"Whispers: Don\'t rewind..."' },
    {
        item: "society:production_science_pack",
        tooltip: "What was it used to research?",
    },
    {
        item: "society:beemonican_seal",
        tooltip: "From the lost city of Beemonica",
    },
    {
        item: "society:steamy_gadget",
        tooltip:
            "An ancient handheld computer powered by steam. The word 'Uni' is ingraved on the back",
    },
    {
        item: "society:amulet_of_light",
        tooltip: "A very normal and holy pendant",
    },
    {
        item: "society:aquamagical_dust",
        tooltip: "Feels mystical and oceanic...",
    },
    {
        item: "society:princess_hairbrush",
        tooltip: "Scuffed from being used to hit someone",
    },
    {
        item: "society:heart_of_neptunium",
        tooltip: "It hums aquamagically",
    },
    {
        item: "society:green_tea_honeycomb",
        tooltip: "Filled with sticky bittersweet",
    },
    {
        item: "society:giant_bandolier_belt",
        tooltip: "Impossibly large, as if a giant wooly creature wore it over its shoulder",
    },
    {
        item: "society:ancient_builders_tool",
        tooltip: "Relic of the World-Shapers",
    },
    {
        item: "society:red_wrench",
        tooltip: "I swear I won't use it...",
    },
]

const bookTooltips = [
    {
        item: "society:alias_moss",
        tooltip: "Mossberries can be found in any season.",
    },
    {
        item: "society:animal_fancy",
        tooltip: "Increases affection gained from petting farm animals.",
    },
    {
        item: "society:banana_karenina",
        tooltip: "Doubles Banana Tree output.",
    },
    {
        item: "society:brine_and_punishment",
        tooltip: "Pickled items are worth 100% more.",
    },
    {
        item: "society:bluegill_meridian",
        tooltip: "Bluegill are now worth 666 §f●.",
    },
    {
        item: "society:hitting_hard_and_soft",
        tooltip: "Melee attacks do an extra 4 damage.",
    },
    {
        item: "society:canadian_and_famous",
        tooltip: "Tappers output double. Doesn't affect Auto-Tappers.",
    },
    {
        item: "society:first_aid_guide",
        tooltip: "Halves the maximum fee and debt from death.",
    },
    {
        item: "society:intro_to_algorithms",
        tooltip: "Mining Lead ore no longer causes Brain Damage clouds.",
    },
    {
        item: "society:no_name_for_the_sheep",
        tooltip: "Naming animals grants an additional heart of affection.",
    },
    {
        item: "society:paradise_crop",
        tooltip: "1 additional crop drop per harvest.",
    },
    {
        item: "society:slime_contain_protect",
        tooltip:
            "Incubating a Slime Heart has a chance to give you a Slime Ticket.",
    },
    {
        item: "society:slouching_towards_artistry",
        tooltip:
            "Artisan Hoppers have a chance to not consume Sparkstone when harvesting. The chance increases the longer the product took to make.",
    },
    {
        item: "society:debt_caverns",
        tooltip:
            "Fainting in the Skull Cavern no longer costs a fee or adds to debt.",
    },
    {
        item: "society:phenomenology_of_treasure",
        tooltip: "Artifacts and Relics are worth 200% more.",
    },
    {
        item: "society:frogs_bounty_bazaar",
        tooltip: "Prize Tickets give double the prizes.",
    },
    {
        item: "society:bullfish_jobs",
        description:
            "The quality of fish taken out of Fish Ponds scales with population.",
    },
    {
        item: "society:wuthering_logs",
        tooltip: "Trees have a 15% chance to drop Fire Logs when chopped.",
    },
    {
        item: "society:the_spark_also_rises",
        tooltip: "Mining any ore drops Sparkstone.",
    },
    {
        item: "society:universal_methods_of_farming",
        tooltip: "The Market sells all basic seeds in every season.",
    },
    {
        item: "society:the_quality_of_the_earth",
        tooltip: "Quality impacts of non-fish farmer products on prices are doubled.",
    },
    {
        item: "society:the_red_and_the_black",
        tooltip: "Geodes, loot crates, and Slot Machines drop one more item.",
    },
    {
        item: "society:pond_house_five",
        tooltip: "Fish Ponds will ask for half the items.",
    },
    {
        item: "society:women_who_run_with_the_plushies",
        tooltip:
            "Plushies will start at 2 hearts of affection. Increases rates of high quality Plushies.",
    },
    {
        item: "society:the_metamorphosize",
        tooltip:
            "Impact of size on Butterfly/Moth prices are tripled.",
    }
]

ClientEvents.lang("en_us", event => {
    artifactTooltips.forEach((tooltipMap) => {
        const key = tooltipMap.item
        const lang = tooltipMap.tooltip
        event.add(`tooltip.always.${key.replace(":", ".")}.0`, `<ltcolor>c=301934;${lang}</ltcolor>`)
    })

    bookTooltips.forEach((tooltipMap) => {
        const key = tooltipMap.item
        const lang = tooltipMap.tooltip
        event.add(`tooltip.always.${key.replace(":", ".")}.0`, `<ltcolor>c=808080;${lang}</ltcolor>`)
        event.add(`tooltip.always.${key.replace(":", ".")}.1`, "<ltcolor>c=4CFF00;Right click to learn this skill!</ltcolor>")
    })
})

