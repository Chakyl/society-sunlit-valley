console.info("[SOCIETY] cobblemonGUI.js loaded");

const pokeRadarPadding = 2;

const $PokemonSpecies = Java.loadClass("com.cobblemon.mod.common.api.pokemon.PokemonSpecies").INSTANCE;

const formMap = new Map([
    ["deerling", "spring"],
    ["sawsbuck", "spring"],
    ["oinkologne", "female"],
    ["vileplume", "female"],
    ["florges", "red"],
    ["floette", "red"],
    ["flabebe", "red"],
    ["unown", "c"],
    ["vivillon", "archipelago"],
    ["basculin", "whitestripe"],
    ["basculegion", "female"],
    ["morpeko", "full_belly"],
    ["squawkabilly", "blue"],
    ["unfezant", "male"],
    ["pyroar", "female"],
    ["hippowdon", "male"],
    ["hippopotas", "male"],
    ["frillish", "female"],
    ["jellicent", "female"],
    ["gimmighoul", "chest"],
    ["tatsugiri", "curly"],
    ["alcremie", "berry_ruby"],
    ["shellos", "east"],
    ["gastrodon", "east"],
    ["indeedee", "female"],
    ["meowstic", "male"],
    ["meowstic", "male"],
    ["pumpkaboo", "average"],
    ["gourgeist", "average"],
    ["toxtricity", "low"],
    ["lycanroc", "dusk"]
]);

const handleVariant = (form) => form.equals("galarian") ? "galar" : form;

const handleIdentifier = (id) => {
    switch (id) {
        case "kommoo":
            return "kommo-o/kommo-o";
        case "jangmoo":
            return "jangmo-o/jangmo-o";
        case "hakamoo":
            return "hakamo-o/hakamo-o";
    }
    if (!["mrrime", "mrmime"].includes(id)) return `${id}/${id}`;
    return `mr/${id.slice(0, 2) + "_" + id.slice(2)}`;
}

PlayerEvents.tick((e) => {
    const { player, level } = e;
    const curios = player.nbt.ForgeCaps["curios:inventory"];

    if (player.age % 200 == 0 && global.getHasCurio(player, "sunlit_cobblemon:poke_radar")) {

        let rarityMatch = /{rarity:"([^"]*)"/.exec(curios.toString());
        let mons = [];
        let spawnDetails = global.getCurrentSpawnDetails(level, player, rarityMatch ? rarityMatch[1] : "common");

        spawnDetails.forEach((entry) => {
            let identifier = entry.getPokemon().species;
            let species = $PokemonSpecies.getByName(identifier);
            let aspect = global.getImportantAspect(entry.pokemon.aspects)
            let variant;
            if (aspect == null) {
                variant = formMap.get(`${identifier}`)  
            } else {
                variant = handleVariant(aspect);
            }
            // Why is Mr Rime like that
            let foundMon = `${String(species.nationalPokedexNumber).padStart(4, '0')}_${handleIdentifier(identifier)}${variant ? `_${variant}` : ""}`
            if (!mons.includes(foundMon)) mons.push(foundMon);
        })
        let pokeRadarStart = 4;
        player.paint({
            pokeRadarDisplay: {
                type: "text",
                x: pokeRadarPadding,
                y: pokeRadarStart + 8,
                text:
                    `${Text.of("=[ ").gray()
                        .append(Text.translatable("item.sunlit_cobblemon.poke_radar").red())
                        .append(" ]=").toJson()
                    }`,
                color: "#AAAAAA",
                alignX: "center",
                alignY: "top",
            },
        });
        let fishUiElements = {};
        let fishUiElementIds = [];
        for (let index = 0; index <= 72; index++) {
            fishUiElementIds.push(`poke_radar_${index}`);
        }
        mons.forEach((mon, index) => {
            if (index <= 72) {
                fishUiElements[`poke_radar_${index}`] = {
                    type: "rectangle",
                    w: 64,
                    h: 64,
                    x: (index % 12) * 18 - 96,
                    y: Math.floor(index / 12) * 18,
                    texture: "cobblemon:textures/entity_icon/" + mon + ".png",
                    alignX: "center",
                    alignY: "top",
                };
            }
        });
        global.renderUiItemText(player, fishUiElements, fishUiElementIds);
    } else if (player.age % 100 == 0 && !curios.toString().includes("sunlit_cobblemon:poke_radar")) {
        let removedPokeIds = ["pokeRadarDisplay"];
        for (let index = 0; index < 80; index++) {
            removedPokeIds.push(`poke_radar_${index}`);
        }
        global.clearUiItemPaint(player, removedPokeIds);
    }
});