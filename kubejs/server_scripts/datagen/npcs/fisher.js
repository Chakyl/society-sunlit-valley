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
        "I miss home.",
        "Can't you see I'm fishing here?",
        "The waters are turbulent today.",
        "How I wish there were a shell I could be listening to right now.",
        ["...", "Yes?"]
      ],
      friendship1: [
        [
          "I kneel with my rod",
          "The waves crash against the shore",
          "Mystical Ocean"
        ],
        [
          "♫ My life, my love and my lady... ♫",
          "Sorry, did you say something?"
        ],
        [
          "♫ Take me by the hand, lead me to the land... ♫",
          "Ah! What's up?"
        ],
        "Can you believe that there are people who don't like getting wet??",
        [
          "I wonder who is writing all these messages in bottles.",
          "I hope they don't mind my curiosity."
        ],
        "Where I come from, we use a lot more Neptunium."

      ],
      friendship2: [
        "Where I come from, we use a lot more Neptunium.",
        "There's nothing better than a freshly fried Aero Mono skewer."
      ],
      friendship3: [
        "Always refreshing to hear from you.",
        ["Always stinks when my prey get free from the hook...", "Plenty of fish in the sea though, as they say!"]
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
      loved: [
        ""
      ],
      liked: [
        ""
      ],
      neutral: [
        "This is appreciated.",
        ""
      ],
      disliked: [
        "I suppose I'd rather hold onto this than let it destroy a habitat.",
        "Some things are better kept than given.",
        "I'm not sure if I care for this...",
        ""
      ],
      hated: [
        "Did this wash ashore with the detritus I saw earlier?",
        "I wonder if it's safe to sail back home.",
        "This is... nauseating.",
        "Perhaps I should erect a \"Gone Fishing\" sign in my stead.",
        "How long did you think about this?",
        "...",
        ""
      ]
    }
  });
}