// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("witch", {
    name: "Evelyne",
    intro: [
      "...I know who YOU are!",
      "But it's not about that! It's about me! And what you've seen!",
      "Caroline told me all about your little trip to the Nether. I'll be needing to see your findings for my research!",
      "Oh I'm also supposed to sell you some magical stuff I've been working on. I don't really want to, but that Caroline seems very threatening..."
    ],
    chatter: {
      friendship0: [
        "Begone! I'm working!",
        ["I made everything more expensive, please don't buy it.", "That's a lie actually, Caroline audits my books regularly..."],
        "What do you want!?",
        ["I didn't do it I swear, I bet Leon did it!", "Oh? Caroline didn't send you? Nevermind then."],
        "Sorry, I don't do tarot readings. Not that kind of witch.",
        ["* It appears that Evelyne is sleepwalking *", "* Would be best to leave your payment somewhere nearby... *"],
        "...Hmmmmm? What do you want @i."
      ],
      friendship1: [
        "What have you found today? You aren't holding out on me right?",
        ["I don't like that Haruna...", "Why do people keep secrets from me! Of all people!"],
        ["Do you have an appointment?", "Sorry, I've been asking everyone that, I can't find my calendar..."],
        ["Maria is so annoying about getting those Miracle Potions restocked!", "Who even needs that many animals!"],
        ["Found any weird bugs lately? I know a person that really likes weird bugs.", "I really need a favor from them, but I don't want anyone asking questions."]
      ],
      friendship2: [
        "You don't know a thing @i. There are forces at work you cannot imagine.",
        "Caroline is so mean to me! Everybody dozes off during business meetings, they're boring!",
        "* You hear snoring as you approach. Evelyne is once again fast sleep while standing. *",
        ["I'm a fountain of blood. In the shape of a girl...", "I guess that makes you a bird? So they say of course."],
        ["I've been studying the magic around here for a few seasons, there's definitely more to be found...", "...Keep that between us."],
        "There is a deeper magic in this valley, I can sense it and you can too.",
      ],
      friendship3: [
        "I don't know a thing!! There are forces at work I cannot imagine!!",
        ["* You cannot tell if Evelyne is half asleep or about to yell strange things at you *", "Hmmm? Why are you staring at me like that? Buy something."],
        ["My plans are measured in centuries...", "...But I cannot for the life of me remember where I put them..."],
        "I thought I could organize my worktable.... How Scandinavian of me!",
        ["Ace has been such a treasure for finding me herbs.", "I actually realllly hate being out in nature so I can appreciate a person that does."],
        ["Just because the mind can make up whatever it wants, doesn't mean that it'll never come true...", "So sayeth the matron saint!"],
        "I've made a break through last night! Normally I would tell you because we're friends and all but I think this one is a bit above your paygrade...",
        "Please buy something, I need to bribe Aiden into giving me some expensive mining equipment!"
      ],
      friendship4: [
        ["That stupid moon lady keeps yelling at me in my sleep!", "What's so wrong with hoarding? I might need this stuff again at some point!"],
        "You haven't been shipping enough minerals lately, please don't tell me you're keeping them all for yourself...",
        "You shouldn't let poets lie to you!! And by poets I mean that Leon!!!",
        ["I've seen it in a vision!", "The crust of the Nether sinking to the bottom of the abyss, descending into the heavens!", "Purified into crystline fields of agonizing brightness!", "I'm certain it shall come to pass!"],
        ["Welcome back @i! I have your special order somewhere around here, let me fetch it...", "Oh you didn't order anything? What am I supposed to do with 48 pounds of plorts?"],
        ["Carlos keeps trying to give me these raw deals! Who has the time to make that much Truffle Tea?", "Why would anyone want that much?"]
      ],
      friendship5: [
        "Moon lady and I are on better terms these days but I still think she's way more aggressive than she should be...",
        "Now that we're such good friends... Do you mind cleaning up around here for me? We're friends right?",
        ["Did you know that in some worlds, people train bugs and dragons to fight against each other?", "They let children do this, for money even!"],
        ["Can you tell Vernoica there's another typo in the 12 edition of 'Gneiss' Dictionary of Geology & Mineralogy'?", "Honestly literature these days is in shambles, its embarrassing."],
        ["Aiden keeps bringing me coffee every morning and I haven't figured out why...", "Maybe we have another occult researcher on our hands!"],
      ],
    },
    giftResponse: {
      loved: [
        "Where did you find this @i!? I've been looking for one of these for ages!",
        ["I NEED ANOTHER.", "BRING ME ANOTHER."],
        "This will keep me going for another few days, thank you @i.",
        "Such a peculiar specimen... I think I'll keep it for my permanent collection.",
        "I knew you weren't useless! Caroline was wrong! Thank you @i!"
      ],
      liked: [
        "I've been meaning to get more of these, thank you.",
        ["Who sent you? Do they know?", "You seem confused, nevermind then.", "Oh give me that before you go, I kinda want it."],
        "Hand it over, I can use that. I think.",
        ["Sorry I don't have any money right now.", "Oh, you're just giving it to me? Just like that? Okay weirdo."],
        "I can see why you would think this would be interesting to me."
      ],
      neutral: [
        "Oh I needed more of these.",
        "Just put that in the pile over there.",
        "Uhhhh I don't really research these types of things but I'm sure I could find a use for it!",
        ["This is kinda boring, is this supposed to be for my research or a gift?", "Don't answer that, it's better that way."],
        ["Hmmmmmm......", "...", "...", "* You can't tell if Evelyne is studying the gift or has silently fallen asleep... *"]
      ],
      disliked: [
        "Woah, I didn't even know something this gross existed.",
        "Oh I don't really need more cleaning supplies.",
        ["I guess I could put this in my perpetual soup that kills people...", "...You don't seriously believe I have one of those right? Go away."],
        "Is that for me? Why?",
        "I think this is more Maria's speed if you know what I mean."
      ],
      hated: [
        "Hmmmmm...? I don't really need more garbage to burn I have plenty.",
        "I don't have space to keep this.",
        "Am I joke to you or something? Have some respect.",
        ["* You hear aggressively loud fake snoring. *", "* It appears Evelyne does not want this. *"],
        "I really don't feel like throwing your garbage away for you.",
        ["Oh, why are you giving this to me? I don't want this.", "Nobody wants this."]
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Want to make Maria mad for me? Not for me actually, WITH ME.",
          "Take this peculiar device and put it near your animals!",
          "It's imbued with the power of the sun and makes your animals feel as though they've been pet!",
          "Normally it's nearly impossible to get one of these things, but I reallly want to prove to Maria that cattle is cattle!",
          "None of that 'love and affection' stuff! She's conning everyone and you will prove it!"
        ]
      },
    ]
  });
}