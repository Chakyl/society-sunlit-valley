// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("librarian", {
    name: "Veronica",
    intro: [
      "Heya @i! Ace told me all about your plans here in the valley."
    ],
    chatter: {
      friendship0: [
        "Heya! Need something?",
      ],
      friendship1: [
        ["Upgrading your tools is important, but don't slack on the armor either!", "Cave diving can be pretty dangerous if you're not wearing any."],
      ],
      friendship2: [
        "Busy day today @i?",
      ],
      friendship3: [
        "Hello my friend! What do you need!",
      ],
      friendship4: [
        "Well well well, @i's back in my shop!",
      ],
      friendship5: [
        "Heya @i! What do you need!",
      ],
    },
    giftResponse: {
      loved: [
        ["Wow! Are you sure about this? Are you really?", "I'll cherish this forever @i!"],
      ],
      liked: [
        "Wow, you're such a good friend @i!",
      ],
      neutral: [
        "Thanks friend",
      ],
      disliked: [
        "I appreciate the thought but I'm not really a fan of this.",
      ],
      hated: [
        "Sorry but I can't let you treat me like this.",
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Oh hey hey hey it's my best friend @i!! I've got something that'll make your day even brighter!"
        ]
      },
    ]
  });
}