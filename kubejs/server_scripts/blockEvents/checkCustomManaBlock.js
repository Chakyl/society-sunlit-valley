console.info("[SOCIETY] checkArtisanMachines.js loaded");

const maxManaMap = new Map([
    ['society:mana_clock', 260000],
    ['society:mana_sprinkler', 10000],
    ['society:sparkstone_recycler', 250000],
    ['society:mana_fruit_crop', 10000],
    ['society:mana_milker', 4000]
]);

const sendManaMessage = (clickEvent, nbt, machineId) => {
    const { player, block, server } = clickEvent;
    
    const maxMana = maxManaMap.get(`${machineId}`);
    if (!maxMana) return;

    const currentMana = nbt?.ForgeData?.mana || 0;
    const pipCount = 10;
    const filledPips = Math.min(pipCount, Math.floor((currentMana / maxMana) * pipCount));

    let outputString = "";
    for (let index = 0; index < pipCount; index++) {
        if (index < filledPips) outputString += "⬛";
        else outputString += "⬜";
    }
    global.renderUiText(
        player,
        server,
        {
            botaniaMana: {
                type: "text",
                x: 1.5,
                y: -66,
                text: `${outputString}`,
                color: "#55FFFF",
                alignX: "center",
                alignY: "bottom",
            },
            botaniaManaShadow: {
                type: "text",
                x: 1.5,
                z: -1,
                y: -66,
                text: `${"⬛".repeat(pipCount)}`,
                color: "#000000",
                alignX: "center",
                alignY: "bottom",
            },
        },
        global.mainUiElementIds
    );
};

BlockEvents.rightClicked(
    ['society:mana_clock', 'society:mana_sprinkler', 'society:sparkstone_recycler', 'society:mana_fruit_crop', 'society:mana_milker'],
    (e) => {
        const { block, hand, item } = e;
        if (hand !== "MAIN_HAND" || item.id !== "botania:twig_wand") return;
        const nbt = block.getEntityData();
        sendManaMessage(e, nbt, block.id);
    }
);