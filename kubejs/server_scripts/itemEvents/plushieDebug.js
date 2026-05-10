console.info("[SOCIETY] plushieDebug.js loaded");

ItemEvents.entityInteracted('etcetera:wrench', (e) => {
    global.plushieTraits.forEach((trait, index) => {
        e.player.give(Item.of('perfectplushies:adv_duck_plushie', `{affection:4,animal:{type:"${e.target.type}"},quality_food:{quality:3},quest_id:1,type:${index}}`))
    })
});
