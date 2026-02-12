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
        ["Friendship level 1 chatter 2 line 1"],
        ["I'm not sure if I trust Leon...", "Some people can really take advantage of you if you're not careful."],
      ],
      friendship2: [
        ["I was taking a walk the other day and noticed a Limpet staring at me from a cave!", { text: "What a cute little snail!", portrait: "liked" }],
        ["Friendship level 2 chatter 2 line 1"],
      ],
      friendship3: [["Friendship level 3 chatter 2 line 1"]],
      friendship4: [
        ["Have you gotten to know Caroline yet?", "I know she may seem prickly like a cactus, but s "],
        ["People think that smithing is all about strength, but it's more to it than that.", "Rare metals like neptunium or electrum require more gentle presses.", "Every type of metal has its own personality!"]],
      friendship5: [
        ["Welcome welcome! Always have time for a freind."],
        ["Friendship level 5 chatter 1 line 1", "Friendship level 5 chatter 1 line 2"],
        ["Friendship level 5 chatter 2 line 1"],
        ["Friendship level 5 chatter 3 line 1", "Friendship level 5 chatter 3 line 2"],
      ],
    },
    giftResponse: {
      loved: [
        ["Wow! Are you sure about this? Are you really?", "I'll cherish this forever @p!"],
        "You're gonna make me melt with something like this!",
        ["AHH! This is far too nice, I can't accept this!", "But it would be rude not to!", "Thank you @p!"],
        "I'm going to cry, this is too sweet just to jump a person with!",
        "How did you know I've been wanting one of these! You're too kind!",
        "Woah! @p I didn't know you liked me that much... Thank you!",
        "What have I done to deserve such a sweet friend!! Thank you so much!",
        ["You can't just walk up to someone and give them a gift like this!", "Thank you friend!"]
      ],
      liked: [
        "Wow, you're such a good friend @p!",
        "This makes me feel a different kind of warmth... Thank you @p!",
        "What!! A gift like this! Thank you!",
        "That's so sweet of you... Thanks truly!",
        "Woah! Thank you so much!",
        "You're a really good friend @p, thank you!",
        "It's so nice to feel appreciated here!",
        "You make my heart sing @p~",
        "You're such a kind person... Thank you @p."
      ],
      neutral: [
        "Thanks friend",
        "Why thank you.",
        "Well thanks!",
        "Thanks!",
        "Much appreciated friend!",
        "I think I can use this for something!",
        "Oh! Thank you for the gift.",
        "It's nice to be thought about."
      ],
      disliked: [
        "I appreciate the thought but I'm not really a fan of this.",
        "I appreciate the thought but I don't really have a use for this.",
        ["I appreciate the thought but you should really know me better!", "It's an important mark of a friend."],
        "Oh...",
        "This isn't really to my taste but that's alright!",
        "Oh! A gift! This is a gift right?",
        ["I don't think I can melt this down into anything usable if that's what your asking...", "Oh it's a gift! Oh!"],
        "I can never be too mad at someone for trying to do something nice."
      ],
      hated: [
        "Sorry but I can't let you treat me like this.",
        "Why don't you take a lap and come back with a clear head.",
        "This isn't how you treat a friend.",
        "Did I upset you? What's going on here...",
        ["...", "...", "Please leave."],
        "How unkind.",
        "I wish I didn't have better expectations of you.",
        ["Talk to me again when you're in a better mood.", "If you continue to take your anger out on the people of this town I won't forgive you."],
        "Why would you give me such a thing...",
        ["I can never be too mad at someone for trying to do something nice...", "But this feels a little mean-spirited"]
      ],
    },
  });
}