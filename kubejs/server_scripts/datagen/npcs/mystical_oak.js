// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("mystical_oak", {
    name: "Mystical Oak",
    intro: [
      "Do you like hurting other people?",
      "Taking that axe of yours and burying it deep into your so-called friends?",
      "My non-verbal brothers in bark are toppled by you every day. And for what?",
      "This never ending machine you call progress. Capital. You are not a good person.",
      "It's a 'pleasure' to make your acquaintance, o' Soft One. Now leave me be."
    ],
    chatter: {
      friendship0: [
        "Hello Soft One. What does the walking disaster plan on uprooting today?",
        "You are not worthy of the soft waves of the dicotyledon. You are not worthy of your softness.",
        ["The one with the striped shirt is much kinder than you.", "Though I'm aware the trail of sap your axe leaves flows back to that workshop.", "It is the chains of capital that bind us, after all."]
      ],
      friendship1: [
        ["See you later Soft One. You never stop, so I'm just assuming you'll be back.", "Please leave."]
      ],
      friendship2: [
        "You're barking up the wrong quercus."
      ],
      friendship3: [
        "A sapling a day keeps the bourgeoisie away!"
      ],
      friendship4: [
        ["Ah, need something?"],
      ],
      friendship5: [
        ["Capital has the ability to subsume all critiques into itself.", "Just like you fell the land, my kind shower those beneath us with darkness.", "A shaded death to these desperate flower buds in in this sun lit valley."],
      ],
    },
    giftResponse: {
      loved: [
        "I didn't know you were capable of having taste."
      ],
      liked: [
        "I already have a few of these, I suppose it saves me a trip to the store."
      ],
      neutral: [
        "Why are you giving this to me...",
      ],
      disliked: [
        "Is this a joke?",
        "Of course someone like you would get me this",
      ],
      hated: [
        "Get out of my face with that.",
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Soft one.",
        ]
      }
    ]
  });
}