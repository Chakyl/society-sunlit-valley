// Priority: -100
if (global.datagenDialog) {
    runNpcDatagen("gnome", {
        noPortrait: true,
        name: "Gnome",
        unique: [
            {
                name: "chatter_0",
                text: ["⊣リ𝙹ᒲᒷ'↸ ℸ𝙹 ᒲᒷᒷℸ ǁ𝙹⚍."]
            },
            {
                name: "chatter_1",
                text: ["⍑ᒷꖎꖎ𝙹 ℸ⍑ᒷ∷ᒷ 𝙹ꖎ↸ ᓵ⍑⚍ᒲ, ╎'ᒲ ⊣'リ𝙹ℸ ᔑ ⊣'リᒷꖎ⎓, ╎'ᒲ ⊣'リ𝙹ℸ ᔑ ⊣'リ𝙹ʖꖎ╎リ, ╎'ᒲ ᔑ ⊣’リ𝙹ᒲᒷ! ᔑリ↸ ǁ𝙹⚍'⍊ᒷ ʖᒷᒷリ ⊣リ𝙹ᒲᒷ↸!"]
            },
            {
                name: "chatter_2",
                text: ["⊣╎⍊ᒷ ᒲᒷ ℸ⍑ᒷ ̇  Silver. ⊣リ𝙹ᒲᒷ ᒲᒷ ̇  Silver ᔑリ↸ ╎ ⊣リ𝙹ᒲᒷ ǁ𝙹⚍ ᔑ ꖌリ╎⊣⍑ℸ'  𝙹' ↸ᔑ ⊣リ𝙹ᒲᒷ!"]
            },
        ]
    });
    runNpcDatagen("blueprints", {
        noPortrait: true,
        name: "Blueprints",
        choiceDialogs: [
            {
                name: "prompt",
                text: ["What buildings would you like to browse?"],
                options: [
                    { text: "Farm buildings", command: "openselector @p building_shop" },
                    { text: "Village buildings", command: "openselector @p town_building_shop" }
                ]
            }
        ]
    });
}