// Priority: -100
runNpcDatagen("market", {
  name: "Leon",
  intro: [
    "I can help you with raising your animals on your farm! If you need any supplies just let me know."
  ],
  chatter: {
    friendship0: [["Friendship level 0 chatter 1 line 1"]],
    friendship1: [
      [
        "Sorry, I don't loan money to farmers.",
        "One bad season and they come to you crying about their interest rates.",
      ],
      ["Friendship level 1 chatter 2 line 1"],
      [
        "Friendship level 1 chatter 3 line 1",
        "Friendship level 1 chatter 3 line 2",
      ],
    ],
    friendship2: [
      [
        "Friendship level 2 chatter 1 line 1",
        "Friendship level 2 chatter 1 line 2",
      ],
      [
        "I believe in talking behind peoples' backs. That way, they hear it more than once.",
      ],
    ],
    friendship3: [
      [
        "I once knew a person that constantly tried to defraud the Sunlit Valley Hospital...",
        "Terrible person all around, never lent them a dollar.",
      ],
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
      "I didn't know you were capable of having taste.",
    ],
    liked: [
      "Thank you, I really appreciate it."
    ],
    neutral: [
      "Thank you!"
    ],
    disliked: [
      "Oh! I wasn't expecting something like this.",
      "You must know animals way better than people..."
    ],
    hated: [
      "This is disgusting.",
      "I don't know why I expected better from you",
      "...",
      "You can just ask me to leave directly.",
      "Get out of my face with that",
      "Are you trying to upset me on purpose",
      "I knew you didn't have taste.",
      "Ugh I'm gonna hurl."
    ],
  },
});
