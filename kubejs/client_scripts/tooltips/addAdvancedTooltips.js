ItemEvents.tooltip((tooltip) => {
    global.plushies.forEach((plush) => {
        tooltip.addAdvanced(plush, (item, advanced, text) => {
            if (item.nbt) {
                let type = global.plushieTraits[Number(item.nbt.getInt("type"))];
                if (tooltip.shift) {
                    text.add(1, [
                        Text.translatable("tooltip.society.plushies.trait"),
                        global.getTranslatedTextWithColorCode(
                            type.color,
                            `society.item.plushie.${type.trait}`
                        ),
                    ]);
                    text.add(2, [
                        Text.translate(`society.item.plushie.trait.description`).darkGray(),
                    ]);
                    let description = Text.translate(
                        `society.item.plushie.${type.trait}.description`
                    )
                        .getString()
                        .split("\n");
                    text.add(3, [Text.gray(description[0])]);
                    text.add(4, [description[1]]);
                } else {
                    if (item.nbt.getCompound("quality_food"))
                        text.add(1, [
                            Text.translatable("tooltip.society.plushies.rarity"),
                            Text.gold(
                                "★".repeat(
                                    item.nbt.getCompound("quality_food").getInt("quality") + 1
                                )
                            ),
                            Text.gray(
                                "☆".repeat(
                                    3 - item.nbt.getCompound("quality_food").getInt("quality")
                                )
                            ),
                        ]);
                    else text.add(1, [Text.gray("☆".repeat(4))]);
                    let affection = item.nbt.getInt("affection");
                    text.add(2, [
                        Text.translatable("tooltip.society.plushies.affection"),
                        `§c${affection > 0 ? `❤`.repeat(affection) : ""}§7${affection < 4 ? `❤`.repeat(4 - affection) : ""
                        }`,
                    ]);
                    text.add(3, [
                        Text.translatable("tooltip.society.plushies.trait"),
                        global.getTranslatedTextWithColorCode(
                            type.color,
                            `society.item.plushie.${type.trait}`
                        ),
                        Text.of(" "),
                        Text.translatable(
                            "tooltip.society.hold_key",
                            global.getTranslatedTextWithColorCode(
                                type.color,
                                "key.keyboard.shift"
                            )
                        ).gray(),
                    ]);
                    if (item.nbt.animal) {
                        let animal = item.nbt.getCompound("animal");
                        text.add(4, [
                            Text.translatable("tooltip.society.plushies.animal_type"),
                            global.getTranslatedEntityName(String(animal.type)).gold(),
                        ]);
                        if (animal.name) {
                            text.add(5, [
                                Text.translatable("tooltip.society.plushies.animal_name"),
                                `§6${String(animal.name)}`,
                            ]);
                        }
                    } else {
                        text.add(4, [Text.translatable("tooltip.society.plushies")]);
                    }
                }
            } else {
                text.add(1, [Text.translatable("tooltip.society.plushies")]);
            }
        });
    });
    tooltip.addAdvanced("society:villager_invitation", (item, advanced, text) => {
        if (item.nbt) {
            text.add(
                1,
                Text.translatable(
                    "block.society.fish_pond.fish.type",
                    `${item.nbt.get("type")}`
                ).aqua()
            );
            text.add(
                2,
                Text.translatable("block.society.fish_pond.description").gray()
            );
        } else {
            text.add(
                1,
                Text.translatable("block.society.fish_pond.description").gray()
            );
        }
    });
    tooltip.addAdvanced("society:villager_home", (item, advanced, text) => {
        if (item.nbt) {
            text.add(
                1,
                Text.translatable(
                    "block.society.villager_home.type",
                    `${item.nbt.getString("type")}`
                ).green()
            );
            text.add(
                2,
                Text.translatable("block.society.villager_home.description").gray()
            );
        } else {
            text.add(
                1,
                Text.translatable("block.society.villager_home.description").gray()
            );
        }
    });
    tooltip.addAdvanced("society:fish_pond", (item, advanced, text) => {
        if (item.nbt) {
            text.add(
                1,
                Text.translatable(
                    "block.society.fish_pond.fish.type",
                    `${Item.of(item.nbt.get("type")).id}`
                ).aqua()
            );
            text.add(
                2,
                Text.translatable(
                    "block.society.fish_pond.fish.population",
                    `${item.nbt.get("population")}`,
                    `${item.nbt.get("max_population")}`
                ).aqua()
            );
        } else {
            text.add(
                1,
                Text.translatable("block.society.fish_pond.description").gray()
            );
            text.add(
                2,
                Text.translatable(
                    "block.society.fish_pond.description.place"
                ).darkAqua()
            );
        }
    });
    tooltip.addAdvanced("society:caterpillar_eggs", (item, advanced, text) => {
        if (item.nbt) {
            text.add(
                1,
                Text.translatable("item.society.caterpillar_eggs.description").darkGray()
            );
            text.add(
                2,
                Text.translatable(
                    "item.society.caterpillar_eggs.longwing.type",
                    Text.translatable(`item.longwings.${item.nbt.getString("child")}`).gray()
                ).green()
            );
            text.add(
                3,
                Text.translatable(
                    "item.society.caterpillar_eggs.longwing.parents",
                    Text.translatable(`item.longwings.${item.nbt.getString("parent")}`).gray(),
                    Text.translatable(`item.longwings.${item.nbt.getString("coparent")}`).gray()
                ).lightPurple()
            );
            text.add(
                4,
                Text.translatable(
                    "item.society.caterpillar_eggs.longwing.size",
                    `${item.nbt.getDouble("size")}`
                ).darkGray()
            );
        } else {
            text.add(
                1,
                Text.translatable("item.society.caterpillar_eggs.description").gray()
            );
        }
    });
    // Sometimes season just breaks for the tooltip and I have no idea why
    tooltip.addAdvanced("farmersdelight:tomato_seeds", (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(1, [
                Text.white("")
                    .append(Text.translatable("desc.sereneseasons.fertile_seasons"))
                    .append(":"),
                Text.of(" "),
                Text.translatable("desc.sereneseasons.spring").green().append(","),
                Text.of(" "),
                Text.translatable("desc.sereneseasons.summer").yellow().append(","),
                Text.of(" "),
                Text.translatable("desc.sereneseasons.autumn").gold(),
            ]);
        } else {
            text.add(1, [
                Text.translatable(
                    "tooltip.society.hold_key",
                    Text.translatable("key.keyboard.shift").gray()
                ).darkGray(),
            ]);
        }
    });
    tooltip.addAdvanced(
        "farm_and_charm:strawberry_seed",
        (item, advanced, text) => {
            if (tooltip.shift) {
                text.add(1, [
                    Text.white("")
                        .append(Text.translatable("desc.sereneseasons.fertile_seasons"))
                        .append(":"),
                    Text.of(" "),
                    Text.translatable("desc.sereneseasons.spring").green(),
                ]);
            } else {
                text.add(1, [
                    Text.translatable(
                        "tooltip.society.hold_key",
                        Text.translatable("key.keyboard.shift").gray()
                    ).darkGray(),
                ]);
            }
        }
    );

    const magnifyingBlocks = [
        Text.translatable("block.society.auto_grabber"),
        Text.translatable("block.society.artisan_hopper"),
        Text.translatable("block.farmingforblockheads.chicken_nest"),
        Text.translatable("block.society.feeding_trough"),
        Text.translatable("block.splendid_slimes.slime_feeder"),
        Text.translatable("block.society.snow_melter"),
        Text.translatable("block.society.fish_pond_basket"),
        Text.translatable("block.society.fish_pond_hatchery"),
        Text.translatable("block.society.golden_clock"),
        Text.translatable("block.society.mana_clock"),
        Text.translatable("block.society.mana_milker"),
        Text.translatable("item.society.magnifying_glass.description.view_block.sprinklers"),
        Text.translatable("block.society.growth_obelisk"),
        Text.translatable("block.society.ribbit_hut"),
        Text.translatable("block.society.fish_pond_manager"),
    ];
    tooltip.addAdvanced("society:magnifying_glass", (item, advanced, text) => {
        if (tooltip.shift) {
            magnifyingBlocks.forEach((block, index) => {
                text.add(index + 1, Text.gold(block));
            });
        } else {
            text.add(
                1,
                Text.translatable("item.society.magnifying_glass.description").green()
            );
            text.add(2, [
                Text.translatable(
                    "item.society.magnifying_glass.description.view_block",
                    Text.translatable("key.keyboard.shift").gray()
                ).darkGray(),
            ]);
        }
    });
    tooltip.addAdvanced("society:car_key", (item, advanced, text) => {
        text.add(1, [Text.translatable("item.society.car_key.description").gray()]);
        if (item.nbt) {
            text.add(2, [
                Text.translatable("item.society.car_key.description.parked").green(),
            ]);
        } else {
            text.add(2, [
                Text.translatable("item.society.car_key.description.empty").red(),
            ]);
        }
    });
    const getPigColoredName = (pig) => {
        switch (pig) {
            case "Red":
                return Text.translatable("society.pig_race.red_pig").red();
            case "Blue":
                return Text.translatable("society.pig_race.blue_pig").blue();
            case "Yellow":
                return Text.translatable("society.pig_race.yellow_pig").yellow();
            case "Green":
                return Text.translatable("society.pig_race.green_pig").green();
            default:
                console.log(`Invalid pig color`);
        }
        return Text.of(`${pig}`);
    };
    tooltip.addAdvanced(
        ["society:pig_race_ticket", "society:multiplayer_pig_race_ticket"],
        (item, advanced, text) => {
            text.add(1, [
                Text.translatable("item.society.pig_race_ticket.description").gray(),
            ]);
            if (item.nbt) {
                text.add(2, [
                    Text.translatable(
                        "item.society.pig_race_ticket.description.bet",
                        getPigColoredName(item.nbt.bet)
                    ).gray(),
                ]);
            } else {
                text.add(2, [
                    Text.translatable(
                        "item.society.pig_race_ticket.description.no_pig"
                    ).gray(),
                ]);
            }
        }
    );
    global.ageableProductInputs.forEach((product) => {
        const splitProduct = product.item.split(":");
        tooltip.addAdvanced(`society:aged_${splitProduct[1]}`, (item, advance, text) => {
            if (product.item === "brewery:whiskey_maggoallan" || product.item === "brewery:whiskey_smokey_reverie")
                text.set(0, text.get(0).copy().gold())
            else
                text.set(0, text.get(0).copy().aqua());
        });
        tooltip.addAdvanced(`society:double_aged_${splitProduct[1]}`, (item, advance, text) => {
            if (product.item === "brewery:whiskey_maggoallan" || product.item === "brewery:whiskey_smokey_reverie")
                text.set(0, text.get(0).copy().gold())
            else
                text.set(0, text.get(0).copy().darkAqua());
        });
    });
});
