// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("trader", {
    name: "Carlos",
    intro: [
      "Hey hey it's @i! The one and only!",
      "I've been searching for someone that's been down in the Skull Cavern for ages!",
      "It's a real treasure trove since so few people are willing to brave it!",
      "Oh well, I'm not one of those people! I'm very brave actually!",
      "I just am always tied up in the biz, you know how it is aha...",
      "......",
      "Right right anyways, my name's Carlos! I only barter because some things are worth more than money can buy!"
    ],
    chatter: {
      friendship0: [
        "My stuff is top notch - just take a look!",
        "Premium wares!",
        "I bet you've never seen this stuff before!",
        "@i, was it? I've got lots of stock piled up just waiting for your purchase!",
        "No money no problem! Just show me what those grubby hands have gotten ahold of!",
        "I've got stuff you won't get anywhere else!",
        "Let's make a deal!"
      ],
      friendship1: [
        "Always a pleasure doing business with you, @i.",
        ["Gotta keep something in the pack at all times!", "What's a merchant without wares?"],
        "It feels good to be in a right proper town. You can never get a good meal on the road!",
        "Hello hello @i! What can I help you with today?",
        "You got any Truffle Tea? I'd really like to get my hands on some...",
      ],
      friendship2: [
        "Have you seen Ace around? I've got plenty o' rare saplings in my private stock!",
        "Caroline was cooking up something wonderful the other day, I could smell it from a mile away...",
        "Need anything special today? Or just the usual stock?",
        "@i! What do I have the pleasure for today?",
        "Veronica is a tough one, I really struggle with talking to the quieter ones..."
      ],
      friendship3: [,
        ["I have no idea how Aiden stays in business with all these handouts.", "Keep people wanting! Or they'll never come back!"],
        "@i! Back at it again!",
        "I've heard a lot of stories, but nothing about Haruna's homeland, how strange.",
        "I always love chatting with Evelyne! When she's awake of course...",
        ["Do NOT trade with those Gnomes!!", "Do they even understand how valuable silver is? What am I supposed to do with that stupid dust??"],
        ["I was hanging out with Leon the other day, what an interesting person!", "I wasn't expecting someone familiar with culture to this extent out in a village like this!"]
      ],
      friendship4: [
        "I wonder why people find it so difficult to get along with Caroline.",
        "What do you do what do you know, it's @i!",
        "Very rarely do I get to actually explore the towns and cities I've stayed in... Usually I'm tied up in my shop!",
        ["Witches are the best, they always ask for the most random things", "And who better to aquire said things than yours truely!"],
        ["Sometimes I wake up in a cold sweat thinking about the time someone served me a plate of Hákarl.", "Wish I knew what that was before I hogged it down!"],
        ["You know I've never actually met the person who makes all your machine upgrades.", "They've gone through like 4 different brokers by the time they end up on your farm!"],
        ["I bet a person like you would love the Camuy Caves!", "You just gotta watch out for those stupid horrifying spiders around there. Really don't like those things..."]
      ],
      friendship5: [
        "Nobody around here dances which is a bit of a culture shock! I wonder if this is how Haruna constantly feels!",
        "Watcha up to today @i?",
        "@i @i @i! I've been looking forward to your next visit.",
        "Do you want a drink? Or are you still working? You always work too hard!",
        ["Y'know, this place is a lot like home.", "So much hustle and bustle... a guy could get comfortable."],
        ["Sometimes I feel like I should've collected these things myself.", "I've been around, but I've never been in any real danger, y'know?", "Oops, carried away again. Did you need anything?"]
      ]
    },
    giftResponse: {
      loved: [
        "Now this is beautiful, I can already tell you used the freshest ingredients!",
        "I love someone that can eat, but I love someone that can cook more!",
        "You're the best, @i, you know that?",
        [
          "* You notice the ravenous look on Carlos' face and hand the gift over *",
          "* There are no words, but the sheer speed of consuption says everything you need to know *"
        ],
        [
          "I'm in awe. This is like...",
          "So totally righteous."
        ]
      ],
      liked: [
        "Oh, now THIS is something!",
        "You're a sweet one, aren't you?",
        "This rocks!",
        "Thanks so much!",
        "Aww yeah! Awesome!"
      ],
      neutral: [
        "This is fresh, right?",
        "Not the worst I've gotten!",
        "I guess this isn't nothing.",
        [
          "Thanks for, uh...",
          "This."
        ],
        [
          "Does this, uh...",
          "Will this fit in my pack?"
        ]
      ],
      disliked: [
        "I mean...",
        "This kinda stinks, bud.",
        "This is pretty lame. Sorry.",
        ["Oh.", "I kinda thought you knew me a bit better."],
        "What am I supposed to do with this?",
      ],
      hated: [
        "Am I that hard to please?",
        "I mean, if you want me to go, I can go.",
        "You're joshing me, right? Yanking my chain?",
        ["This is, uh...", "Well, I really hate this, actually."],
        "... I don't have to be here. Nobody here does. Remember that."
      ]
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "@i! @i @i!",
          "I've done something amazing! Amazingly funny! Nobody's gonna believe it!",
          "I tracked down the supplier for some of the town's accessories, with my amazing talent for acquiring things of course!",
          "Of course I have to be true to my worth, even with someone I adore like you!",
          "I have these up for barter if you want to 'steal everyone's look'!"
        ]
      },
    ]
  });
}