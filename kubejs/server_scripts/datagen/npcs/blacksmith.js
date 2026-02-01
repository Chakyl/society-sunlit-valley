// Priority: -100
if (global.datagenDialog) {
runNpcDatagen("blacksmith", {
  name: "Aiden",
  intro: [
    "My name is Aiden! This villager is currently being written.",
    "I couldn't get all the writing done in time for the playtest!",
    "Thank you for testing!"
  ],
  chatter: {
    friendship0: [["Hello! I can smith for you or whatever ehe"]],
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