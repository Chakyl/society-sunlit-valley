
if (global.datagenDialog) {
    // Priority: -100
    if (global.datagenDialog) {
        runNpcDatagen("goddess", {
            name: "Selene",
            unique: [
                {
                    name: "skull_cavern_hammer",
                    text: [
                        "That's an interesting little tool you have there. Did Aiden help you make that?",
                        "In any case, I cannot allow you to use that here. Someone before you once wielded that curse in my caverns...",
                        "Their soul fissured from their own body after an hour, vanishing instantly...",
                        "Leave that monstrous thing at home.",
                        "(This has been disabled for performance reasons but can be changed in _config.js)"
                    ]
                },
                {
                    name: "skull_cavern_shatterer",
                    text: [
                        "Oh my, it seems my brother has gotten his hooks into you.",
                        "Only the power of the sun could make a tool so wretched and greedy.",
                        "I cannot allow you to use that here, it's so... Unsightly...",
                        "Leave that slight of the moon at home.",
                        "(This has been disabled for performance reasons but can be changed in _config.js)"
                    ]
                },
            ]
        });
    }
}