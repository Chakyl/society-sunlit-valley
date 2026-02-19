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
        "The waters are turbulent today.",
        "It's a long way from home.",
        "I'm fishing right now, if you could excuse me."
      ],
      friendship1: [
        [
          "I wonder who is writing all these messages in bottles.",
          "I hope they don't mind my curiosity."
        ],
        "Where I come from, we use a lot more Neptunium.",
      ],
      friendship2: [
        [
          "♫ My life, my love and my lady... ♫",
          "\*Ahem\*...",
          "Yes?"
        ],
        [
          "♫ Take me by the hand, lead me to the land... ♫",
          "Oh. Excuse me."
        ],
      ],
      friendship3: [
        [
          "♫ Letting the days go by, let the water hold me down... ♫",
          "Oh. Hello."
        ],
        "Always refreshing to hear from you."
      ],
      friendship4: [
        [
          "I kneel with my rod",
          "The waves crash against the shore",
          "Mystical Ocean"
        ]
      ],
      friendship5: [
        [
          ""
        ]
      ]
    },
    giftResponse: {
      loved: [
        "You must have put a lot of thought into this.",
        ""
      ],
      liked: [
        "This is just like home.",
      ],
      neutral: [
        "This is appreciated.",
        "Thank you @i.",
        "Thank you for the gift @i.",
        "I could use this as an offerring for the stars, thank you.",
        "I was looking to experiment with new kinds of bobbers, thank you.",
        "Thank you for the gift @i.",
        "It's strange, people here give me random things like this. I'm still not used to it.",
        "I'm not sure what use I have for this but I appreciate the gesture."
      ],
      disliked: [
        "I suppose I'd rather hold onto this than let it destroy a habitat.",
        "Some things are better kept than given.",
        "I'm not sure if I care for this...",
        "In my culture, this is considered a \"faux pas\".",
        "How I wish there were a shell I could be listening to right now.",
        "I don't think I can even use this as bait...",
        "Does this pass for a joke here?"
      ],
      hated: [
        "Did this wash ashore with the detritus I saw earlier?",
        "I wonder if it's safe to sail back home.",
        "This is... nauseating.",
        "Perhaps I should erect a \"Gone Fishing\" sign in my stead.",
        "How long did you think about this?",
        "...",
        "Just because I like the sea doesn't mean I like sea garbage."
      ]
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Hello @i, I have a small token of appreciation for you.",
          "I haven't spent all that long in this land, yet you continue to treat me as if you've known me your entire life.",
          "This pendant is a mystical relic from where I come from. Ancient magi would infuse it with neptunium to summon a giant sea-serpent.",
          "Ahh, but don't worry about that! These waters are too mundane for it to have any use here.",
          "Hopefully this brings you a tiny bit closer to understanding my soul."
        ]
      },
    ]
  });
}