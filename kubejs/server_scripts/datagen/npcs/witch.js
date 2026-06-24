// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("witch", {
    name: "Evelyne",
    intro: [
      "I KNOW WHO YOU ARE.",
      "But it's not about that! It's about me! And what you've seen!",
      "Caroline told me all about your little trip to the Nether. I'll need to see your findings for my research!",
      "Oh I'm also supposed to sell you some magical stuff I've been working on. I don't really want to, but that Caroline seems very threatening..."
    ],
    chatter: {
      friendship0: [
        "Oh I wasn't expecting a visitor, what do you want?",
      ],
      friendship1: [
        ["Upgrading your tools is important, but don't slack on the armor either!", "Cave diving can be pretty dangerous if you're not wearing any."],
      ],
      friendship2: [
        "Busy day today @i?",
      ],
      friendship3: [
        "",
      ],
      friendship4: [
        "Well well well, @i's back in my shop!",
      ],
      friendship5: [
        "Heya @i! What do you need!",
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
        "I've been meaning to get more of these, thank you."
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
        ["* You hear aggressively loud fake snoring. *", "* It appears Evelyne does not want this. *"],
        "I really don't feel like throwing your garbage away for you.",
        ["Oh, why are you giving this to me? I don't want this.", "Nobody wants this."]
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Oh hey hey hey it's my best friend @i!! I've got something that'll make your day even brighter!"
        ]
      },
    ]
  });
}