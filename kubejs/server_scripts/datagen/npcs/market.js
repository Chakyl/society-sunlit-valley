// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("market", {
    name: "Leon",
    intro: [
      "Hey, I'm Leon. I was sent here to manage the local farmer's market.",
      "I'll be making sure you have seeds and some basic farming supplies.",
      "In return some of your produce will be sent here for the other villagers.",
      "Please don't be like all the other farmers that wake up at 6am..."
    ],
    chatter: {
      friendship0: [
        "Hmmm? Need something?",
        "What can I help you with?",
        "Hey... I've got the seeds.",
        "Oh? You're telling me you need more seeds?",
        [
          "You know, the less planting you do the less you have to come here.",
          "Just slow down a little, the money can always wait."
        ],
        [
          "Ace is starting to annoy me with all that hammering.", 
          "All this open area, the sound travels so far."
        ]
      ],
      friendship1: [
        [
          "It's so slow today...",
          "Got any stories from your adventures?",
        ],
        [
          "Why are you even doing all this farming?",
          "It's not like there's anything to buy out here"
        ]
      ],
      friendship2: [
        [
          "Can yopu tell Caroline I've been very professional with you?",
          "She doesn't like when I get casual and I really can't be bothered.",
        ],
        [
          "Ugh, Caroline's workers are late again today...",
        ],
      ],
      friendship3: [
        [
          "I once knew a person that constantly tried to defraud the Sunlit Valley Hospital...",
          "Terrible person all around, never lent them a dollar.",
        ],
      ],
      friendship4: [
        [
          "Has Caroline said anything about me to you?",
          "Just curious, I don't think it matters either way."
        ],
        "I wonder what Maria's up to today...",
        [
          "Has Haruna taken a trip to the Ocean recently?",
          "I gave her some film for the beach to take photos but I'm guessing she forgot about it."
        ]
      ],
      friendship5: [
        [
          "Caroline hasn't been around in a while...",
          "I hope that means I'm doing alright here.",
        ],
        [
          "Have you started making wine yet?",
          "I could use some of that about now...",
          "For the market of course!"
        ],
        [
          "Found any interesting wild crops lately?",
          "I could use something fun to eat.",
        ],
      ],
    },
    giftResponse: {
      loved: [
        "Beautiful, and touching.",
        "This is mesmerizing. I'll cherish it forever.",
        "What a gift. To know me like this is the mark of a true friend.",
        "Nobody around here would know I like this. Am I really that fascinating to you?",
        "To love someone means to see them as Selene intended them.",
        "This is a fine gift from a finer person!",
        "Aesthetically perfect. A work of art.",
        ["I can't stop looking at it...", "How on earth did you get your hands on this..."],
        "It is the ultimate respect to recieve a masterwork from someone at the height of their craft."
      ],
      liked: [
        "It's always pleasent to recieve a gift like this.",
        "Nothing is easier than flattery, not that I mind!",
        ["It's much better to do good in a way that...", "No that's not right. I like this way more."],
        "You're very appreciated, I hope you know.",
        "The margins on seeds aren't great, little luxuries like this go a long way!",
        "Touching, thank you.",
        "Thank you, I really needed the pick-me-up!",
        "It's been so slow today, finally something nice happened!"
      ],
      neutral: [
        "Alright then!",
        "Okay!",
        "A gift! Neat.",
        "Are you handing these out to everyone?",
        "It looks high quality but it's not really to my taste.",
        "In a way, something this ugly has a certain beauty to it! Exciting!",
        "I do love a gift! Even if its not quite one I want!",
        "I'm not really sure how to react to this but thank you for the kindness.",
        "I have plenty random objects for still life at my shop, but thank you!",
        "Eventually if you keep giving me things you'll find one I actually like!",
        ["You can do better!", "Life is lived in the details, and you need to pay more attention!"],
        "Well, it is a gift.",
        "Rough season at the farm?",
        "You could have put a little more thought into this.",
        "I don't hate this for some reasonn.",
        "Are you even listening to me when I speak to you?",
        "Someone around here will definitely like this, I'm sure."
      ],
      disliked: [
        ["Ahhh I didn't know you were actually an ascetic!", "I thought that was just your look..."],
        "I guess someone who spends so much time digging in the dirt doesn't have time to enjoy the finer things.",
        "Ahhh I really hope you tried your best.",
        ["Well isn't that nice.", "Oh, it's for me? Alright..."],
        "I don't really want that. Or need it.",
        ["You can be sincere and still be...", "Nevermind, you wouldn't get it."],
        "Let's be real I'm just gonna toss this when you walk away.",
        ["Oh! I'm actually really busy right now.", "Some seeds ran away, I really need to catch them?"],
        "Be real with me are you just pulling random stuff from your pocket to give to me?",
        "Woah! I don't really want this!",
        ["I don't like things like this.", "Please write that down."],
        "This is a gift?"
      ],
      hated: [
        "What a slob.",
        "Get out of my face.",
        "Hateful.",
        "A beast can never be as cruel as a human being, so artistically, so picturesquely cruel.",
        "I hope you aren't this inept at farming.",
        "When you look in the mirror at night, think of all that is wasted on you.",
        "You are senseless and I don't enjoy you.",
        "What kind of person do you take me for?",
        "It takes something more than intelligence to act intelligently.",
        "I deserve better than to be treated like this.",
        "This is disgusting.",
        "Absolutely tasteless.",
        "You are a child, get away from me."
      ],
    },
  });
}