
global.handleFish = (e) => {
    const player = e.getEntity();
    let experience = 100;
    e.getDrops().forEach((drop) => {
        if (drop.has('quality_food:quality')) {
            experience += (50 * drop.get('quality_food:quality').level())
        }
    });
    global.giveExperience(player.server, player, "fishing", experience);
}
NativeEvents.onEvent(
    "net.neoforged.neoforge.event.entity.player.ItemFishedEvent",
    (e) => {
        global.handleFish(e);
    }
);