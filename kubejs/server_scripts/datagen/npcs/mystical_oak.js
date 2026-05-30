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
        "The grass you walk on screams of fire. Block by block their lives snuffed out by your spade.",
        ["The one with the striped shirt is much kinder than you.", "Though I'm aware the trail of sap your axe leaves flows back to that workshop.", "It is the chains of capital that bind us, after all."],
        "You are just a bouquet of cloth roses. Sharp metal thorns.",
        "You are a parasite rivaled only by capital itself.",
        "Everything you say you 'created' is simply a vivisection of the natural beauty of this land."
      ],
      friendship1: [
        ["See you later Soft One. You never stop, so I'm just assuming you'll be back.", "Please leave."],
        ["Your leaves look shiny and sticky and dewy", "But on second touch, they are fabric", "Oh, eternal polyester."],
        ["That one with the red hair...", "You know the one.", "Do not let that one be corrupted by the influence of Caroline."],
        ["Let us speak frankly, o' Soft One.", "Cottagecore is an infantilization of the act your people call 'colonization'.", "Burying it in sweet words will not save your soul from the darkness of the forest."],
      
      ],
      friendship2: [
        "You're barking up the wrong Quercus.",
        ["That lazy one you call Leon tried to argue with me about the nature of capital in relation to the natural communing of the forest!", "All whilst drunk off that serpentine al gul!", "Do the soft ones have no pride? No sense of shame?"],
        ["I saw that disgusting capitalist Caroline...", "The one behind your arrival here.", "How can you think yourself autonomous with someone like that stealing the fruits of your labor?"],
        "It's easier to imagine the end of the world than the end of your virulent colonization you call a 'farm'.",
        "The relationship between capitalism and eco-disaster is neither coincidental nor accidental."
      ],
      friendship3: [
        "A sapling a day keeps the bourgeoisie away!",
        ["Capitalist ideology disguises itself in inevitabilities.", "'If I do not claim this for myself, someone else will.'", "You are not immune to this trapping, o' Soft One."],
        "Those that dismiss their own role in the abomination that is capitalism are not absolved from it in the eyes of the forest.", 
        ["There is an angel amongst your people!", "That pale large one gently spoke to a bed of roses as if equals.", "Something you could learn a thing or to about."]
      ],
      friendship4: [
        "Flowers wilt, but you will not.",
        "There is an odd stillness in the air around you.",
        "Do potted plants hear?",
        ["Capital has the ability to subsume all critiques into itself.", "Even from the likes of me.", "Does that mean one should halt all critique? Perish the thought."],
        ["The wind feels nice today. Genuine wind is something your industrial self will never recreate.", "The blades of those metallic abominations you call fans will never compare."],
      ],
      friendship5: [
        ["Capital has the ability to subsume all critiques into itself.", "Just like you fell the land, my kind shower those beneath us with darkness.", "A shaded death to these desperate flower buds in this sunlit valley."],
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