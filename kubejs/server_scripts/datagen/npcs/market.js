// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("market", {
    name: "Leon",
    intro: [
      "Hey @i, I'm Leon. I was sent here to manage the local farmer's market.",
      "I'll be making sure you have seeds and some basic farming supplies.",
      "In return some of your produce will be sent here for the other villagers.",
      "Please don't be like all the other farmers that wake up at 6am..."
    ],
    chatter: {
      friendship0: [
        "Hmmm? Need something?",
        "What can I help you with?",
        ["Welcome to the Sunlit Market! How can I help you~", "I really hope I can get away with not saying that ever again."],
        ["If you're looking for saplings, ask Ace.", "Those things leave so much dirt around and I can't be bothered to sweep it."],
        "Hey... I've got the seeds.",
        ["I hope Ace gives me back that copy of Wuthering Logs...", "I want to read it before watching the new film adaptation."],
        ["Wow you look absolutely exhausted!", "Wait I'm not supposed to say stuff like that...", "Welcome to the market, what can I do for you!"],
        ["I was told to make sure you know about fertilizers.", "I feel like someone in your position would know about them already though."],
        "Oh? You're telling me you need more seeds?",
        "I can't imagine wanting to be out in the fields all day.",
        ["I'm going to miss going to the cinema every week.", "I can't imagine Ace has the plans drawn up for one at the moment."],
        "You look exhuasted, starting a farm must be taking it out of you.",
        ["I'm not used to this much solitude.", "It'd be nice if it wasn't so boring..."],
        ["Takes me a solid month to get used to sleeping in a new bed.", "It's not going so well..."],
        "Another quiet day in the valley.",
        ["It's deathly quiet out here in the wilderness.", "Going to take me some time to get used to."],
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
        "Happy cashiers are all alike, but every unhappy cashier is unhappy in their own way...",
        "What's up @i?",
        "What would you like today?",
        "No need to look around for anything, I've learned where everything is now.",
        "Is it apple season yet?",
        ["...", "......", "........", "...I was hoping you would walk away by now..."],
        ["Remind me, where does your name come from?", "Every name has a story, even if you're not aware of it."],
        "When do you get done with working? Do you ever really finish a work day?",
        "It's so boring around here...",
        "If you need anything specific, let me know.",
        ["What's the deal with Aiden?", "He's so nice to me... I wonder what he wants from me."],
        [
          "It's so slow today...",
          "Got any stories from your adventures?",
        ],
        [
          "People don't really like to cook around here.",
          "You'd make more money selling premade meals than just selling crops."
        ],
        [
          "Why are you even doing all this farming?",
          "It's not like there's anything to buy out here"
        ]
      ],
      friendship2: [
        [
          "Can you tell Caroline I've been very professional with you?",
          "She doesn't like when I get casual and I really can't be bothered.",
        ],
        "Can you hurry up and buy something, I'm really tired right now.",
        "I'm running low on stock this week so go easy on me.",
        "I don't know why everyone around here is so suspicious of me, I just like my peace and quiet...",
        "Why does a town this small even need a market. If you ask me, everyone should just barter for food.",
        ["Caroline's weekly report is overdue, I hope she's not too mad about it.", "I don't think I'm gonna be able to convince you to do it for me... Unless?"],
        "Read any classics lately? Or are you still running around from dusk till dawn every day.",
        [
          "Ugh, Caroline's workers are late again today...",
          "She gets mad when they catch me napping"
        ],
        ["I don't really know much about farming.", "The Farmer's Almanac is such a dry read, I haven't bothered to look at it."],
      ],
      friendship3: [
        ["I don't care much for the natural beauty of the countryside.", "The growth of this town is much more inspiring to me"],
        ["Why isn't a cutting board just made with wood?", "I need to speak with Ace, that doesn't make any sense."],
        ["Caroline complained to me the other day about my markup...", "Getting books shipped out here isn't cheap, I need that money!"],
        "Hey there, what do you need",
        "How can I help you today?",
        "Ugh, Haruna's been stinking up the market lately with her fish...",
        "I could go for some caviar right now...",
        "Is it socially acceptable to eat dinner yet?",
        "Why do you like gardenining so much? Isn't it a little tedious?",
        "Have you met any Ribbits yet? They fascinate me...",
        ["Kimchi...", "Oh! What's up?"],
        "The night is so beautiful and harsh out here.",
        ["How did you meet Caroline?", "She's not an easy person to talk to, but she's very well connected."],
        "If everything is permitted, why does Caroline bother me so?",
        ["Can't wait to get my package. What's taking them so long?", "Maybe I should talk to Caroline... Just to check."],
        [
          "Have you spoke to Caroline today?",
          "Did she say anything about my behavior? I really hope not.",
        ]
      ],
      friendship4: [
        "I can keep you stocked with bottles if you ever want to get into wine making.",
        [
          "Has Caroline said anything about me to you?",
          "Just curious, I don't think it matters either way."
        ],
        "I wonder what Maria's up to today...",
        "You're back!",
        "Hey @i! What do you need?",
        "Finally, someone to talk to. It's been so quiet today.",
        [
          "Caroline hasn't been around in a while...",
          "I hope that means I'm doing alright here.",
        ],
        "Have you ever been to emporio? Or did you not get out much back then",
        "I miss all my old friends, have they moved on by now?",
        "How's the farm treating you?",
        ["When it rains I feel this sense of dread, as if it's washing away my protective coating.", "Nature can be cruel."],
        ["I've been missing the comforts of living in a big city.", "Everything is so slow around here! I don't have the patience for it."],
        ["I've been dying to talk to someone lately.", "You'd think people would be coming by here more often..."],
        [
          "Has Haruna taken a trip to the Ocean recently?",
          "I gave her some film for the beach to take photos but I'm guessing she forgot about it."
        ]
      ],
      friendship5: [
        ["Happy cashiers are all alike, but every unhappy cashier is unhappy in their own way...", "...But I'm always happy to see you @i!"],
        ["I've been reading about the arcane magic of the Skull Cavern.", "Have you had a visit yet?"],
        ["Do you think Caroline ever gets along with anyone?", "I wonder if she has a soft side..."],
        ["I'm kinda over this whole groceries thing.", "Is my only task in this short life to sort products?"],
        "I could use a cold glass of wine right about now.",
        ["Have you had the time to go out exploring yet?", "I'm sure there's some tasty things out there I haven't tried."],
        ["The best thing about living out here is the freshness of everything", "I never realized blueberries had such strong flavor!"],
        ["I wonder, are Magic Shears ethical?", "I'm sure if they weren't Maria wouldn't sell them..."],
        ["I'd much rather you exploit nature than other people.", "Nature always gets its revenge, while the weak have no advocates."],
        ["Caroline visited me the other day! She seemed happy with our sales this season.", "Please dont let me dissapoint her!"],
        "Caroline has really relaxed lately, have you been sweet talking her?",
        ["Were you ever much of a reader before moving here", "Literature can be inspiring, it's the frontier of the mind after all."],
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
        ["Small kindnesses like these really break up the drudgery of daily life.", "I'm very thankful you're part of the melange."],
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
        "If you keep giving me things you'll eventually find one I actually like!",
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
    unique: [
      {
        name: "five_gift",
        text: [
          "Ahhh just the person I wanted to see today! I have a bit of a request for you.",
          "Caroline's making me read this really dry book on farming, and I really can't be bothered...",
          "But you're a farmer! A really good one at that, and I'd know more than anyone else here.",
          "Sooooo.... Can you please read this book for me and give me a quick summary on it?",
          "In return I'll convince Caroline to let me carry seeds of every season all the time!",
          "It's a win win but I know you'd do it either way since you seem absolutely infatuated with me.",
          "...You aren't exactly subtle..."
        ]
      },
      {
        name: "five_gift_read",
        text: [
          "Hey @i, you look like the type of person who's read Universal Methods of Farming, am I right?",
          "Sorry I don't mean to call you a nerd. I mean you definitely are a farming nerd there's no doubt about that.",
          "But I digress and I'll cut to the chase. Can you give me a quick summary on it?",
          "Caroline's making me read this really dry book on farming, and I really can't be bothered...",
          "I'll give you some of these rare sparkpod seeds in advance, it really is a win win!",
          "Although... I know you'd do it either way since you seem absolutely infatuated with me.",
          "...You aren't exactly subtle..."
        ]
      },
    ]
  });
}