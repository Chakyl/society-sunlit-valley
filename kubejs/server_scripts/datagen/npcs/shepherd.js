// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("shepherd", {
    name: "Maria",
    intro: [
      "Hello, my name is Maria. I'll be here to get you started ranching on your farm.",
      "Raising animals take lots of time, energy and care.",
      "In the end seeing the look on a happy animal's face is well worth it.",
      "If you need any supplies just let me know."
    ],
    chatter: {
      friendship0: [
        ["Hello there, need anything?"],
        ["How's your farm going?", "Have you gotten started with some animals yet?"],
        ["I hope you're feeding your animals every day.", "You'd be grumpy to if you had to skip a meal!"]
      ],
      friendship1: [
        ["Friendship level 1 chatter 2 line 1"],
        [
          "Friendship level 1 chatter 3 line 1",
          "Friendship level 1 chatter 3 line 2",
        ],
      ],
      friendship2: [
        [
          "I've seen some nasty farmers out there that treat their animals cruelly.",
          "Giant holding penns stuffed to the brim... Makes me sick...",
          "I'm glad you're not like that!"
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
        "This makes me feel very at home.",
        "You're so sweet to me, this is one of my favorites!",
        "This is one of my favorites!",
        "What a sweet gift.",
        "This makes me feel very welcome here.",
        "How'd you know I love these?",
        "Wow! This is so luxurious.",
        "I really love this!",
        "This is an amazing gift."
      ],
      liked: [
        "Thank you, I really appreciate it.",
        "I know the perfect spot for this!",
        "I was looking for this at the market the other day! How'd you know?",
        "So thoughtful! Thank you.",
        "Is this from your farm? This is lovely.",
        "This is a very considerate gift.",
        "Very lovely, I appreciate this.",
        "You're a sweetheart!",
        "It's so nice to have people like you here.",
        "Thank you very much!"
      ],
      neutral: [
        "Thank you!",
        "That's sweet of you.",
        "I think one of my friends would like this!",
        "You're very kind.",
        "Is this from your farm? I've never seen one quite like this.",
        "Thanks!",
        "I'll take it!",
      ],
      disliked: [
        "Oh! I wasn't expecting something like this.",
        "You must know animals way better than people...",
        "Sometimes it's better to not give gifts.",
        "Oh!",
        "Oh...",
        "Ah... Okay... Cool...",
        "Did you mean to give this to someone else?",
        "We don't really have to give gifts to eachother...",
      ],
      hated: [
        "Why...",
        "Why?",
        "...",
        "You can just ask me to leave directly.",
        "No thank you.",
        "This doesn't make me feel good...",
        "I'm not sure I want this...",
        "Can you leave me alone please.",
        "I don't like these kinds of jokes.",
        "Sorry but I really don't want this...",
        "This might be the worst thing I've ever been given..."
      ],
    },
  });
}