// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("fisher", {
    name: "Haruna",
    intro: [
      "Hello, my name is Haruna, I'm looking to carve out a home for myself in your town.",
      "I can get you started with learning how to fish. It's slow work that requires lots of patience.",
      "These waters aren't as fresh as the ones in my homeland, but I can make do with them for now..."
    ],
    chatter: {
      friendship0: [
        "The waters are turbulent today.",
        "It's a long way from home.",
        "There is a sadness in loneliness.",
        "It's quiet today.",
        "Mundane waves, forlorn oceans.",
        "Stars fall all the time, such as I on new ground.",
        "Hmmm? Apologies, I was lost in thought.",
        "These lands are quiet.",
        ["Ah, I was told I should sell you a fishing rod.", "I also have some bait for sale if you pick up a tackle box as well."],
        "Fishing is a serene joy that's best enjoyed on your own.",
        "I'm fishing right now, if you could excuse me."
      ],
      friendship1: [
        [
          "I wonder who is writing all these messages in bottles.",
          "I hope they don't mind my curiosity."
        ],
        "Aiden might be the largest person I've ever seen. So tall...",
        "Ace is an anomaly to me, such is a person I cannot read.",
        "Where I come from, we use a lot more Neptunium.",
        ["Fireflies by the riverside.", "A glow like the stars of home"],
        "Hello there @i.",
        "There's many unique fish in these waters. I'd like to get acquainted with them.",
        "If you're not great at fishing I recommend trying a cork bobber.",
        "How can I help you today @i?",
      ],
      friendship2: [
        ["♫ My life, my love and my lady... ♫", "\*Ahem\*...", "Yes?"],
        ["♫ Take me by the hand, lead me to the land... ♫", "Oh. Excuse me."],
        "Hello again @i.",
        "Good day @i.",
        "I see Morana on the shimmer of the still ocean.",
        "Rivers have their own beautiful bounties.",
        "Ace told me about sea pancakes! I'd like to see them...",
        "Leon is very honest, I like that in a person.",
        ["Where I come from, everyone is well versed in the ways of fish.", "I have never met someone as bad at fishing as Ace..."],
        "Want to try some different bobbers? I have a wide variety of them."
      ],
      friendship3: [
        [
          "♫ Letting the days go by, let the water hold me down... ♫",
          "Oh. Hello."
        ],
        ["There's something about the waters in these lands...", "It's as if the sun is rebelling against the magic of the waves", "Interesting."],
        [
          "The sunrise is quite beautiful.",
          "...",
          "You can't let it distract you from your catch, though."
        ],
        "Caroline respects what I do, yet doesn't come around here often...",
        [
          "It's curious. Fresh fish can come from salt water or fresh water...",
          "And to keep fish fresh, you can salt them."
        ],
        "Caught anything new lately?",
        "Have you checked your fish ponds today?",
        "Do you think Ace can do anything with all of this driftwood I've found?",
        "The fish here can be... unusual.",
        "Bait Makers are convenient, but steady hands catch the best fish.",
      ],
      friendship4: [
        [
          "I kneel with my rod",
          "The waves crash against the shore",
          "Mystical Ocean"
        ],
        "Maria is too sweet to understand the natural cycle of life and death.",
        ["The clearest of skies", "Folks work and play and harvest", "The Sunlit Valley"],
        [
          "Fishing really takes you to all sorts of places.", "Beaches, rivers, glaciers, islands... even volcanoes."
        ],
        [
          "The markets at sea are quite volatile, you know.",
          "I used to make most of my money from bounties."
        ],
        [
          "These waters vex me.",
          "Where does all this jelly come from?"
        ],
        "♫ The clatter and clank, goes from tank to tank! ♫",
        "Yes, @i?",
        "Always refreshing to hear from you.",
        "It's a lovely day for fishing.",
      ],
      friendship5: [
        ["Do you hear it? Listen!", "...", "Water makes such interesting noises."],
        ["It's been a while since I've been out at sea.", "This place is quite magnetic, I suppose."],
        ["Such a big valley, and so many fish to catch...", "Oh! Good syllables."],
        "Hello again my friend.",
        "Woe is the fisher with the empty rod...",
        "A sonet of deepfish, the organ of the cavernous waters.",
        "Sneep snorp... Sneep snorp... What a rhythm the name of a fish has.",
        "I love days like these.",
        "♫ Hmm hmm hmm... ♫",
        "I'm growing quite attached to Maria's love of animals. It's very endearing!",
        "I always enjoy sharing some wine with Leon on colder nights."
      ]
    },
    giftResponse: {
      loved: [
        "You must have put a lot of thought into this.",
        "Little joys like these give me a reason to sing, @i.",
        "You know me all too well, you're a gem of the land.",
        "Truly this is a wonderful gift. It reminds me of home.",
        "Thank you @i. I feel very welcome here.",
        "♫ Thank you my sweetest darling ♫",
        "Such kindness cannot be repaid by me, but it would be rude to not accept such a gift."
      ],
      liked: [
        "This is just like home.",
        "Thank you @i, you're too kind.",
        "Almost as sweet as the sound of evening waves.",
        "I appreciate this more than you'll know.",
        "You've got a knack for giving gifts @i.",
        "This is a brisk wind on a warm day, weclome and appreciated."
      ],
      neutral: [
        "This is appreciated.",
        "Thank you @i.",
        "Thank you for the gift @i.",
        "Hmmm do you think one of the others would like this as well?",
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