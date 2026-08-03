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
  
]

ClientEvents.lang("en_us", event => {
  artifactTooltips.forEach((tooltipMap) => {
    const key = tooltipMap.item
    const lang = tooltipMap.tooltip
    event.add(`tooltip.always.${key.replace(":", ".")}.0`, `<ltcolor>c=FF33AA;${lang}</ltcolor>`)
  })
})

