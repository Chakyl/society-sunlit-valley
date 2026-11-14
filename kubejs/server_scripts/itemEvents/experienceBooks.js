const addExperience = (player, server, item, type) => {
    global.giveExperience(server, player, type, 1000);
    server.runCommandSilent(
        `playsound minecraft:block.enchantment_table.use block @a ${player.x} ${player.y} ${player.z}`
    );
    item.count--;
    global.addItemCooldown(player, item, 2);
};

ItemEvents.rightClicked("society:yard_work_yearly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "farming");
});
ItemEvents.rightClicked("society:husbandry_hourly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "husbandry");
});
ItemEvents.rightClicked("society:mining_monthly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "mining");
});
ItemEvents.rightClicked("society:combat_quarterly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "adventuring");
});
ItemEvents.rightClicked("society:wet_weekly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "fishing");
});
ItemEvents.rightClicked("society:foraging_fortnightly", (e) => {
    const { server, player, item } = e;
    addExperience(player, server, item, "foraging");
});

ItemEvents.rightClicked("society:book_of_stars", (e) => {
    const { server, player, item } = e;
    global.giveExperience(server, player, "farming", 750);
    global.giveExperience(server, player, "husbandry", 750);
    global.giveExperience(server, player, "mining", 750);
    global.giveExperience(server, player, "adventuring", 750);
    global.giveExperience(server, player, "fishing", 750);
    global.giveExperience(server, player, "foraging", 750);
    server.runCommandSilent(
        `playsound minecraft:block.enchantment_table.use block @a ${player.x} ${player.y} ${player.z}`
    );
    item.count--;
    global.addItemCooldown(player, item, 2);
});
