// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("fisher", {
    name: "Haruna",
    intro: [
      "Hey stranger, my name is Haruna. I like fish! Tell Frog about it!",
      "This villager is currently being written.",
      "I couldn't get all the writing done in time for the playtest!",
      "Thank you for testing!"
    ],
    chatter: {
      friendship0: [
        ["I miss home."],
        ["The waters are turbulent today."],
        ["How I wish there were a shell I could be listening to right now."],
        ["...", "Yes?"]
      ],
      friendship1: [
        [
          "I kneel with my rod",
          "The waves crash against the shore",
          "Mystical Ocean"
        ],
        [
          "I wonder who is writing all these messages in bottles.",
          "I hope they don't mind my curiosity."
        ],
        [
          "Where I come from, we use a lot more Neptunium."
        ]
      ],
      friendship2: [
        [
          ""
        ]
      ],
      friendship3: [
        [
          "Always refreshing to hear from you."
        ]
      ],
      friendship4: [["Friendship level 4 chatter 2 line 1"]],
      friendship5: [
        [
          "Friendship level 5 chatter 1 line 1",
          "Friendship level 5 chatter 1 line 2",
        ],
        ["Friendship level 5 chatter 2 line 1"],
        [
          "Friendship level 5 chatter 3 line 1",
          "Friendship level 5 chatter 3 line 2",
        ],
      ],
    },
    giftResponse: {
      loved: ["Marry me"],
      liked: ["I love a little treat like this"],
      neutral: ["Thanks for thinking about me"],
      disliked: ["Oh...", "Why did you think I would like this?"],
      hated: ["Everyone hates you"],
    },
  });
}