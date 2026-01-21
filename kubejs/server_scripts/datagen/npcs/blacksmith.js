// Priority: -100
if (false) {
runNpcDatagen("carpenter", {
  name: "Aiden",
  intro: [
    "Hey stranger, my name is Danny. I'm here to help you build the village you're starting in Sunlit Valley.",
    "If you're looking to invite more villagers, come talk to me and I can help you build homes for them.",
    "If you'd prefer to do the building yourself, just let me know and I can give you the invitations and sell any building supplies you'll need.",
    "That's all I have for now, you really have your work cut out for you here. Come see me if you need anything!",
  ],
  chatter: {
    friendship0: [["Friendship level 0 chatter 1 line 1"]],
    friendship1: [
      ["Friendship level 1 chatter 1 line 1", "Friendship level 1 chatter 1 line 2"],
      ["Friendship level 1 chatter 2 line 1"],
      ["Friendship level 1 chatter 3 line 1", "Friendship level 1 chatter 3 line 2"],
    ],
    friendship2: [
      ["Friendship level 2 chatter 1 line 1", "Friendship level 2 chatter 1 line 2"],
      ["Friendship level 2 chatter 2 line 1"],
    ],
    friendship3: [["Friendship level 3 chatter 2 line 1"]],
    friendship4: [["Friendship level 4 chatter 2 line 1"]],
    friendship5: [
      ["Friendship level 5 chatter 1 line 1", "Friendship level 5 chatter 1 line 2"],
      ["Friendship level 5 chatter 2 line 1"],
      ["Friendship level 5 chatter 3 line 1", "Friendship level 5 chatter 3 line 2"],
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