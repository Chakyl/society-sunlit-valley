// Priority: -100
if (global.datagenDialog) {
  runNpcDatagen("carpenter", {
    name: "Ace",
    intro: [
      "Hey stranger, my name is Ace. I'm here to help you build the village you're starting in Sunlit Valley.",
      "If you're looking to invite more villagers, come talk to me and I can help you build homes for them.",
      "If you'd prefer to do the building yourself, just let me know and I can sell any building supplies you'll need.",
      "You really have your work cut out for you here, come see me if you need anything!",
    ],
    chatter: {
      friendship0: [
        "What can I help you with today @i?",
        "Need any building supplies @i?",
        ["The blueprints I've made in the building shop come with all the building blocks you'll need pre-supplied!", "No need to run around crafting everything for a building, I gotcha covered!"],
        "The wild berries scattered around are such a good field snack!",
        "Don't discount wild plants like nettle, you can use them to make some tasty tea!",
        "Nature is full of valuable and useful plants if you know what you're looking for.",
        "I'll always try to make sure I'm around when you need me!",
        "If you can't find any tree you're looking for in the wild, I have some saplings in my supply shop!",
        "Be sure to check in occasionally, I may have some more invitations for other villagers stocked.",
        "Hey @i, have you managed to find your footing yet?",
        "Have you gotten a good handle on farming yet? Inviting someone to manage the market will let you get some new seeds."
      ],
      friendship1: [
        ["If you manage to find any earth crystals in the mines, be sure to make some tappers.", "You can get some valuable liquids from tapping different logs."],
        ["I came across a rotted and overgrown farmhouse while exploring the other day...", "I wonder why the farmer abandoned it."],
        ["The building shop has plenty of blueprints for your farm to choose from.", "I just need a few basic supplies to be able to build them."],
        ["What can I help you with today @i?", "What a beautiful day it is today."],
        "Potatoes are some of the only crops that can grow in the wild! I try to dig around for them when I can.",
        ["It's worth spending some time to upgrade your farm's infrastructure.", "You can use a charting map to link together your paths to travel faster!"],
        "I never leave my cabin without a potion of recall, being lost in the wild can be dangerous.",
        "Make sure to prepare a bit before mining, I looked inside of a cave earlier and found some dangerous looking monsters.",
        "What are you up to today?",
        "Ahhh hey @i, I can't chat much right now. I'm preparing for a big hike soon!"
      ],
      friendship2: [
        "How's your farm going @i?",
        "Ahhhh I finally feel settled into this new town, I can finally relax a bit.",
        "Need anything built today?",
        "Technically you don't have to buy one of my barns, but animals really dislike being out in the rain.",
        "A good shed will keep all your artisan machines organized",
        "All this open land to survey, I really end up exhausted by the end of every day.",
        "Hey @i! What do you need today?",
        ["Have you gotten to know Leon yet? You should really try to get to know everyone!", "And I do mean everyone..."],
        ["Make sure you're talking to everyone that you've invited to this town.", "It can be a little lonely to move all the way from your home to help with a settlement like this one."],
        ["You should ask Maria about getting a pet squirrel! They can forage for nuts and wild berries.", "I suppose they're kinda like me, in a way!"],
        ["Don't get the wrong idea about me, I'm terrible at managing logistics!", "Caroline really did all the heavy lifting when getting this town started."],
        ["I love the calmness of being out in the wild and foraging for food.", "If you stop and listen you can hear the little patters of wild animals."],
        ["It's good to save at least one of every flower you find out in the wild.", "They seem to grow wildly with a little bonemeal, unlike crops and saplings.", "Plus Aiden really loves flowers, esepcially some of the rare ones I find!"]
      ],
      friendship3: [
        "What can I get you @i?",
        "Hey @i, how's it going?",
        "Grow any new crops this season @i?",
        ["Caroline is the only other person that knows where Haruna is from.", "I wonder why it's so secretive... But it's probably better to not pry about these things."],
        "Ahhhh @i, would you like to join me? I'm working on carving some wainscotting.",
        "Haruna tried teaching me to fish the other day. The only thing I managed to hook was her hairband...",
        "I always look forward to mossberry season. Nothing like chopping away at a try and seeing a juicy green fruit drop from a branch!",
        "Trees are pretty hearty and can grow in most seasons. Though spruce in particular seems to really dislike summer I've found.",
        ["You should see if you can make a catching net!", "I've found tons of butterflies and moths just exploring."],
      ],
      friendship4: [
        "Hey @i, how's your farm developing?",
        "How's it going?",
        "Sorry I can't chat, I'm a bit behind on my resource collection this week.",
        "Caroline has me working on furniture this week! It's a shame these are all designated as exports to other colonies.",
        "Haruna's smoked salmon is something else, it's perfect for long days in the wild!",
        "I still haven't figured out what's up with those birts... I should ask Maria.",
        "Dehydrated fruits make great travel food. The market has a dehydrator for sale if you're interested.",
        "Leon gave me some samples of this season's produce! You can really taste the freshness from your farm.",
        "Seems like Aiden sharpened my axe when I wasn't looking, what a kind soul."
      ],
      friendship5: [
        ["I really appreciate what Caroline's done for the town.", "Most people aren't aware of it from the outside, but she's done so much for everyone"],
        ["I wonder if there's a way we can get Haruna home...", "At least for a vist. I'd hate to see Haruna gone forever."],
        "On my last expedition I found some wild penguins! I should get some for Maria.",
        "How's your farm coming along?",
        ["Make sure you have the right equipment before diving into the Skull Cavern.", "Wouldn't want anything to happen to you."],
        "Hope your day's going smoothly @i!",
        "I'm really happy with what we've managed to build here, @i.",
        "Mushroom logs are a great way to make money from planting trees, you should have some on your farm!",
        "Mystic willows are so pretty, I wonder if Caroline knows where to find the saplings.",
        "Grow any new crops this season @i?",
        "How have you been @i?",
        ["I'm sure dealing with seasons has been a burden on your farm. I can build you a greenhouse or two if you need!", "Just need some of that greenhouse glass first."],
        "Leon is a sucker for red wine, so glad I kept some wild berries around to make some.",
        "I don't know how Aiden manages to make all this industrial iron for some of my buildings.",
        "What can I get you @i?",
      ],
    },
    giftResponse: {
      loved: [
        "Who told you I like these? What a fantastic gift @i!",
        "Thank you so much, this is an incredible gift.",
        "You're a really good friend you know that @i?",
        "Thank you, this is very special to me.",
        "This will really help me out in the field! Thank you so much @i!",
        "Wow, thank you @i! Grand gestures like these mean so much to me!",
      ],
      liked: [
        "Things like these help me out while I'm exploring the field",
        "That's so kind of you, I was thinking about picking this up soon.",
        "You read my mind @i, I was running out of these!",
        "Thank you, I can't wait to get done working today so I can use this.",
        "That's very nice of you, going out of your way to get me this with that busy schedule you have means a lot.",
        "I'm a little awkward when reciving gifts but trust me I do like this!",
        "Thank you @i, large gestures like these mean a lot.",
      ],
      neutral: [
        "Thank you @i, small gestures like these mean a lot.",
        "Why thank you.",
        "That's very nice of you.",
        "Thanks!",
        "Thank you kindly, that's very considerate.",
        "This kind of thing will help make the long days feel shorter, thank you!",
        "Thank you for the gift.",
        "You were thinking of me @i? That's very kind."
      ],
      disliked: [
        "Oh...",
        "I don't really want this...",
        "Thanks?",
        "Oh okay... Please don't give me any more of these.",
        "Gift giving isn't your strong suit I'm guessing?",
        "I wonder if I can make tree fertilizer out of this...",
        "Did Leon tell you I like this? That's not a very funny prank...",
        "I'm glad you're not littering but surely there's a better place with it!",
        "What do you mean you're giving this to me? Why?",
        "Why did you think I would like this?"
      ],
      hated: [
        "This is extremely disrespectful. Get away from me.",
        "Get out of my face with that you hateful piece of dirt.",
        "When you wake up in the morning I hope you reflect on what kind of person you're trying to be",
        "Treating people horribly won't get you anywhere around here.",
        ["All you do is take take take from everyone around you.", "This is what you give back?"],
        ["I wasn't aware you were that kind of person.", "Maybe coming here was a mistake."],
        ["...", "Get away from me with that."],
        "It's a cold world out here. Give me more garbage like this and you'll end up alone.",
        "What did I do to deserve this treatment.",
        "I don't have to be here you know."
      ],
    },
    unique: [
      {
        name: "five_gift",
        text: [
          "Hey @i, do you have time to chat? I wanted to show you what I've been working on all this time!",
          "It's the Blockapedia! A complete set of all the building blocks I could manage to get my hands on.",
          "Knowing how much you care about this town, I feel confident entrusting my little hobby project to you.",
          "I couldn't manage to find mystic willow logs though, I had to call in a favor to Caroline to get some blocks made with them...",
          "I appreciate everything you've done for this town, and I hope you'll find this useful when building it out more!"
        ]
      },
      {
        name: "need_to_buy",
        text: [
          "Need to pick up something from the shop?",
        ]
      },
    ]
  });
}