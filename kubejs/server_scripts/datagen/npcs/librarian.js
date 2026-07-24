// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("librarian", {
    name: "Veronica",
    intro: [
      "Hello @i, my name is Veronica. I've been brought on here to help you get your storage in order.",
      "Caroline tells me that your homestead is a 'disgusting pile of unorganized rubbish'...",
      "I feel like that was a slight exaggeration, but hopefully some of my cataloging supplies can help you out.",
      "I have a masters in library sciences, so I'm well versed in the various storage solutions.",
      "Please stop by the next time you get the chance."
    ],
    chatter: {
      friendship0: [
        "Hello @i, what can I get for you today?",
        "Do you need some organizational supplies or books?",
        "Make sure to check in during the end of the season, I have some rare books for sale then.",
        "Welcome, what can I get you?",
        ["How about that weather?", "...Sorry I'm not good with small talk..."]
      ],
      friendship1: [
        "Back again? Have you been doing some more farm expansion?",
        "Are you going to buy something this time or just give me 'that look' when I show you the prices again?",
        "You should know what I'm here for by now, please have a look.",
        ["Evelyne was bragging to me about these magical drawers that teleport items between them...", "What a rude person. It's not like I can sell *every* type of box out there."],
        "Is your day going alright? It's been quiet out there.",
      ],
      friendship2: [
        "How has Aiden managed to break so many of my storage crates? Are ingots being placed in them hot or something?",
        ["Have you seen a copy of Vōg Italia lying around anywhere?", "I haven't had a chance to look at this season's collection yet..."],
        "What can I do for you today @i?",
        "I'm getting food with Caroline soon so make it quick, I don't have much time.",
        ["I have no idea how to talk to that Ace.", "I've never met someone that talks so fast, it's frustrating."]
      ],
      friendship3: [
        ["Some farmers prefer the more applied school of digital storage, though I find it overly complex.", "Unfortunately, I only have enough room in my shop for the refined approach."],
        "Don't forget to stop by every time I do the Book Fair! I can only stock so many books so some are seasonal!",
        "Can you check in with Leon? I need that copy of 'Notebooks from Underneath' back, it's been weeks...",
        "Ugh, this is the third nature field guide Ace has ruined this month! Annoying!",
        "How can I help you today?"
      ],
      friendship4: [
        "Evelyne has to be the most unorganized person I have ever met. It's embarrassing.",
        ["It breaks my heart that Caroline is so misunderstood...", "Supporting towns like these require so much time, energy and resources to support.", "It's very thankless work, most people flame out of it. But not my Caroline!"],
        "Caroline doesn't like when people are unprofessional, so keep our little chats when I'm on the clock between you and I.",
        "Hey @i, what can I get you? You can't possibly need more space, right?",
        ["Get some minisheep! They have the most beautifully shininig coats. Their wool makes some gorgeous sweaters... ♡","Ah! Not that I'm an expert or anything! Ask Maria!"],
      ],
      friendship5: [
        "The key to making beautiful nit fabrics to do it by hand, this is something you should understand intuitively being a farmer and all.",
        ["Did you seen Iris von Harpten's latest collection??", "I have no idea how she manages to use those strange materials to create such beautiful shapes... ♡"],
        "It's @i! I'm so happy to see you right now, Carolines been so busy this week and I need someone to talk to!",
        ["I wonder where Carlos sends all those random items you give him...", "He's always asking for more shipping materials."],
        "Oh hey @i! What can I get you today?",
        ["Fashion houses should never continue once their founding designers leave.", "Yes I get that there are exceptions, but just look at Gaultiyay! It's become so gauche!"]
      ],
    },
    giftResponse: {
      loved: [
        ["I should let you know that I'm supposed to file a report for gifts this sweet... ♡"],
        ["Why would you show me a garment this beautiful, I could never get my hands on something like this...", "...? You're giving it to me?", "Thank you @i, I'll take perfect care of it, I have a spare garment bag and everything ♡"],
        ["How did you get your hands on something like this!?", "French seams like this are difficult to pull off on a garment of this size.", "It must have been made by someone who truly loves the craft ♡"],
        "The texture of this is incredible, Maria must have taught you how to raise sheep with such kindness ♡",
        "What a wonderful gift, I can't wait to catalog this for my collection... ♡"
      ],
      liked: [
        "Thank you @i, I appreciate the kindness.",
        "Thanks for the gift, small things like this go a long way.",
        "Oh! It's not so often I receive gifts, thank you.",
        ["Do you need a special container for this? It seems nice.", "Oh this is for me? Thank you @i."],
        "Thank you for the gift, I know someone who'd love something like this."
      ],
      neutral: [
        "Hmmm? Oh you can put that over in section E6.",
        "I'll take care of this for you @i, when do you want it back?",
        "Gift? Why do I need a gift?",
        ["I don't really do deliveries, that seems like Ace's type of thing.", "Oh, it's a gift. Thanks."],
        "Put that one on the pile back there please."
      ],
      disliked: [
        "I don't really want this.",
        "I'm not a fan of things like this.",
        "Did you mean to give this to someone else? I don't understand...",
        "Can you give that to someone else? I don't really like it.",
        "I don't really have a need for this.",
      ],
      hated: [
        "Don't come to me for advice on how to store your disgusting garbage.",
        "What have I done to deserve your ire?",
        ["I should let you know that I have to file a report for things like this.", "I'll let Caroline deal with you, please leave."],
        "This is disgusting.",
        "If Aiden knew you gave people things like this, it would break his heart."
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Hey @i! I've got an idea on how to earn Caroline's respect!",
          "As you've probably figured out right now, she's insatiable when it comes to your role in this little town.",
          "It doesn't matter how much your farm makes, it will never be enough! Everyone around here relies on the economic activity of your farm after all.",
          "That said, being knowledgable about your financial history will give her at least a little more peace of mind.",
          "It would be a shame if my two best friends didn't get along, so please read it when you get the chance ♡"
        ]
      },
      {
        name: "five_gift_read",
        text: [
          "Hey @i! I've got another idea on how to earn Caroline's respect!",
          "As you've probably figured out right now, she's insatiable when it comes to your role in this little town.",
          "It doesn't matter how much your farm makes, it will never be enough! Everyone around here relies on the economic activity of your farm after all.",
          "That said, not having to worry about you passing out in the Skull Cavern should give her a little more peace of mind.",
          "It would be a shame if my two best friends didn't get along, so please make sure to wear these while you're down there ♡"
        ]
      },
      {
        name: "book_fair",
        text: [
          "I have a selection of special books available for the book fair this season, please take a look.",
        ]
      },
    ],
    choiceDialogs: [
      {
        name: "book_fair",
        text: ["I have a selection of special books available for the book fair this season, please take a look."],
        options: [
          { text: "Purchase supplies", command: "openshop @p librarian" },
          { text: "Shop at the Book Fair", command: "openshop @p book_fair" }
        ]
      }
    ]
  });
}