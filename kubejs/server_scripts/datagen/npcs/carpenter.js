// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("carpenter", {
    name: "Ace",
    intro: [
      "Hey stranger, my name is Ace. I'm here to help you build the village you're starting in Sunlit Valley.",
      "If you're looking to invite more villagers, come talk to me and I can help you build homes for them.",
      "If you'd prefer to do the building yourself, just let me know and I can sell any building supplies you'll need.",
      "You really have your work cut out for you here, come see me if you need anything!",
    ],
    chatter: {
      friendship0: [
        ["My dialogs are a work in progress."],
        "I'll always try to make sure I'm around when you need me!"
      ],
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
      loved: [
        "Who told you I like these? What a fantastic gift @i!",
        "Thank you so much, this is an incredible gift.",
        "You're a really good friend you know that @i?",
        "Thank you, this is very special to me.",
        "This will really help me out in the field! Thank you so much @i!",
        "Wow, thank you @i! Grand gestures like these mean so much to me!",
      ],
      liked: [
        "Things like these help me out while I'm exploring the field",
        "That's so kind of you, I was thinking about picking this up soon.",
        "You read my mind @i, I was running out of these!",
        "Thank you, I can't wait to get done working today so I can use this.",
        "That's very nice of you, going out of your way to get me this with that busy schedule you have means a lot.",
        "I'm a little awkward when reciving gifts but trust me I do like this!",
        "Thank you @i, large gestures like these mean a lot.",
      ],
      neutral: [
        "Thank you @i, small gestures like these mean a lot.",
        "Why thank you.",
        "That's very nice of you.",
        "Thanks!",
        "Thank you kindly, that's very considerate.",
        "This kind of thing will help make the long days feel shorter, thank you!",
        "Thank you for the gift.",
        "You were thinking of me @i? That's very kind."
      ],
      disliked: [
        "Oh...",
        "I don't really want this...",
        "Thanks?",
        "Oh okay... Please don't give me any more of these.",
        "Gift giving isn't your strong suit I'm guessing?",
        "I wonder if I can make tree fertilizer out of this...",
        "Did Leon tell you I like this? That's not a very funny prank...",
        "I'm glad you're not littering but surely there's a better place with it!",
        "What do you mean you're giving this to me? Why?",
        "Why did you think I would like this?"
      ],
      hated: [
        "This is extremely disrespectful. Get away from me.",
        "Get out of my face with that you hateful piece of dirt.",
        "When you wake up in the morning I hope you reflect on what kind of person you're trying to be",
        "Treating people horribly won't get you anywhere here.",
        ["All you do is take take take from everyone around you.", "This is what you give back?"],
        ["I wasn't aware you were that kind of person.", "Maybe coming here was a mistake."],
        ["...", "Get away from me with that."],
        "It's a cold world out here. Give me more garbage like this and you'll end up alone.",
        "What did I do to deserve this treatment.",
        "I don't have to be here you know."
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Hey @i, do you have time to chat? I wanted to show you what I've been working on all this time!",
          "It's the Blockapedia! A complete set of all the building blocks I could manage to get my hands on.",
          "Knowing how much you care about this town, I feel confident entrusting my little hobby project to you.",
          "I couldn't manage to find mystic willow logs though, I had to call in a favor to Caroline to get some blocks made with them...",
          "I appreciate everything you've done for this town, and I hope you'll find this useful when building it out more!"
        ]
      },
    ]
  });
}