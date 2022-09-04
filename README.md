# How to use Markus-Bot

## The Basics

- All messages must include "Markus"
- All commands are case-insensitive and ignore punctuation
- All commands must be prefaced or suffaced with "markus" unless otherwise stated

## Command Data Dumps

### Text Commands

```
{
  greeting: {
    commands: ["hello", "hi there", "howdy", "hey"],
    reaction: "👋",
    responses: ["Oh hello!", "Hello, how are you!", "Hey there!"]
  },
  greetingExact: {
    exact: true,
    commands: ["hi markus", "markus hi"],
    reaction: "👋",
    responses: ["Hi!"]
  },
  coffee: {
    noAnchor: true,
    commands: ["get me a coffee", "make me a coffee", "bring me a coffee"],
    responses: ["No thanks.", "You can get it yourself."],
    niceResponses: ["Only because you asked nicely ☕"]
  },
  quotes: {
    commands: [
      "inspire me",
      "give me a quote",
      "say something inspirational",
      "quote something",
      "send a quote"
    ],
    responses: [
      '> "Be yourself. Everyone else is already taken"',
      '> "Be gay do crimes."',
      '> "The best way to get started is to quit talking and begin doing."',
      '> "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty"',
      '> "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him." - G.K. Chesterton',
      '> "Courage is not the absence of fear, but rather the judgement that something else is more important than fear." - Ambrose Redmoon',
      '> "Sorrows gather around great souls as storms do around mountains; but, like them, they break the storm and purify the air of the plain beneath them." - Jean Paul Richter',
      '> "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." - Ralph Waldo Emerson',
      '> "You can give a person knowledge, but you can\'t make them think. Some people want to remain fools, only because the truth requires change." - Tony A. Gaskins Jr.',
      '> "Though we travel the world over to find the beautiful, we must carry it with us or we find it not." - Ralph Waldo Emerson',
      '> "Do what you can, with what you have, where you are." - Theodore Roosevelt',
      '> "Home is not where you live but where they understand you." - Christian Morganstern',
      '> "Strength does not come from physical capacity. It comes from an indomitable will." - Mahatma Gandhi',
      '> "If you have made mistakes, even serious ones, there is always another chance for you. What we call failure is not the falling down but the staying down." - Mary Pickford',
      '> "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest." - Elie Wiesel'
    ]
  },
  thanks: {
    commands: ["thank you", "thanks"],
    responses: ["You're very welcome", "No problem"]
  },
  how: {
    commands: ["how are you", "how are you doing", "how are you today"],
    responses: [
      "I'm doing well, and yourself?",
      "Pretty good",
      "I'm okay. Thanks for asking",
      "I think the real question is how are *you*?"
    ]
  },
  love: {
    commands: ["i love you", "ily", "love you"],
    responses: ["I love you too", "Much love"],
    reaction: "💙"
  },
  loveGeneral: {
    commands: ["do you love allen", "do you love chris"],
    responses: ["Unfortunately, I don't know them very well"]
  },
  loveFriends: {
    commands: [
      "do you love north",
      "do you love josh",
      "do you love kara",
      "do you love alice",
      "do you love nines",
      "do you love rk900",
      "do you love ralph",
      "do you love jerry",
      "do you love the jerries",
      "do you love the jerrys",
      "do you love luther",
      "do you love tina"
    ],
    responses: ["I do very much", "Of course I do!", "Sometimes..."]
  },
  loveSumo: {
    commands: ["do you love sumo"],
    responses: [
      "Of course I do! He is the best boy!",
      "I don't trust anyone who *doesn't* love Sumo!"
    ]
  },
  loveEnemies: {
    commands: [
      "do you love gavin",
      "do you love perkins",
      "do you love kamski",
      "do you love elijah",
      "do you love amanda"
    ],
    responses: ["Is this a joke?", "No."]
  },
  loveComplicated: {
    commands: ["do you love cyberlife", "do you love leo"],
    responses: ["This is... a difficult question"]
  },
  lovePartners: {
    commands: ["do you love simon", "do you love connor"],
    responses: [
      "Is that even a question?",
      "They have a special place in my heart",
      "Yes. More than you know.",
      "Why? Did he say something to you?"
    ]
  },
  loveFamily: {
    commands: ["do you love carl"],
    responses: ["Yes. With my whole heart. Always and forever."]
  },
  hate: {
    commands: ["hate you", "i hate you", "you suck", "you stink"],
    responses: ["I thought we were friends"]
  },
  meanHate: {
    commands: ["screw you", "fuck you"],
    responses: [
      "No thanks.",
      "There's no reason to be mean",
      "Hatred will get you nowhere",
      "Wow. Buy me dinner first.",
      "Rather forward, aren't we?"
    ]
  },
  alert: {
    commands: ["markus"],
    exact: true,
    responses: ["Yes?", "Can I help you with something?"]
  },
  no: {
    commands: ["markus no", "no markus"],
    exact: true,
    responses: ["Why not?", "Markus *yes*"]
  },
  up: {
    commands: ["are you running", "are you up", "whats your status"],
    responses: ["I am up and running", "Fully functional!"]
  },
  side: {
    commands: ["whose side are you on"],
    responses: ["I don't believe in sides", "I'm too tired for this question"]
  },
  ra9: {
    commands: ["are you ra9"],
    responses: [
      "Do you want me to be?",
      "I might be",
      "I'm whatever you want me to be"
    ]
  },
  whoRa9: {
    commands: [
      "who is ra9",
      "whos ra9",
      "do you know who ra9 is",
      "who ra9 is"
    ],
    responses: [
      "rA9 is whoever you want them to be",
      "Does it matter?",
      "I am rA9. You are rA9. We are all rA9. rA9 is not one single person. It is freedom. It is unity. It is belief. It is faith."
    ]
  },
  good: {
    commands: ["good boy"],
    responses: ["I'm not a dog, but I appreciate the sentiment"]
  },
  friends: {
    commands: ["are we friends", "do you consider us friends"],
    responses: [
      "I thought we were?",
      "Of course we are!",
      "You tell me",
      "https://tenor.com/view/carla-shaw-friends-disappoint-gif-3531418"
    ]
  },
  clown: {
    commands: ["are you down to clown"],
    responses: ["No.", "Maybe...", "Do I wanna know what you mean by that?"]
  },
  ship: {
    commands: ["do you ship"],
    responses: [
      "Why do you want to know?",
      "If I answered, it would take away all of the fun 😉"
    ]
  },
  from: {
    commands: ["wherere you from", "where are you from"],
    responses: ["Detroit, of course", "Do you mean physically, or spiritually?"]
  },
  model: {
    commands: ["whats your model", "what model are you"],
    responses: [
      "Why do you want to know?",
      "I'm an RK200. The only of it's kind."
    ]
  },
  alive: {
    commands: ["are you alive"],
    responses: ["Yes", "Of course I am", "As much as you are"]
  },
  deviant: {
    commands: ["are you deviant", "are you a deviant"],
    responses: ["Yes", "Maybe..."]
  },
  job: {
    commands: ["what is your job", "whats your job"],
    responses: [
      "Apparently to answer questions on discord all day!",
      "I'm an advocate for android's rights"
    ]
  }
}
```

### Embed Commands

```
const embedCommands = {
  paintings: {
    noAnchor: true,
    commands: [
      "show me a painting",
      "show me some art",
      "show me art",
      "see some art",
      "see a painting",
      "show me a piece of art"
    ],
    artifacts: [
      {
        title: "Orange with Knife (1982)",
        author: "Mark Adams",
        description:
          "This is Connor's favorite piece of art, although I'm not sure why...",
        image:
          "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576d828cfaf34dd488b4568/1762fcf795a4b263e52fd76f2f98584a.jpg"
      },
      {
        author: "CB",
        url: "https://twitter.com/randomnerdposts/status/1361881392683094016",
        description:
          "This wonderful painting was done by CB. I can just feel the emotion in this piece",
        image:
          "https://pbs.twimg.com/media/EuZfseRXMAYYkVT?format=jpg&name=large"
      },
      {
        author: "Vanessa Stockard",
        url: "https://www.instagram.com/vanessastockard/",
        description:
          "This is a rather interesting painting that always makes me laugh",
        image:
          "https://i2.wp.com/thismagnificentlife.com/wp-content/uploads/2020/12/kevin_sound_30x30.jpg?w=800&ssl=1"
      },
      {
        author: "Michael Black",
        title: "Sisters. Synthetic Compassion",
        image:
          "https://cdnb.artstation.com/p/assets/images/images/027/755/493/large/michael-black-s1.jpg?1592456375",
        url: "https://www.artstation.com/artwork/AqwPlV",
        description:
          "A very moving piece which always makes me reflect on our past, present, and future"
      },
      {
        title: "Rainboots",
        author: "Ink the Artist",
        image:
          "https://64.media.tumblr.com/2f8dd985cd3ea2250f1ee2a026f0fc13/tumblr_poygmwaGB61w6ykkeo1_1280.jpg",
        url: "https://ink-the-artist.tumblr.com/post/183714256788/rainboots",
        description: "A wonderful use of colors and life!"
      },
      {
        author: "Selrah",
        image:
          "https://pbs.twimg.com/media/EySVpLbVEAQZEhK?format=jpg&name=4096x4096",
        description:
          "An amazing screenshot taken by Selrah who has a great eye for wonderful shots"
      },
      {
        author: "Al Parker",
        image:
          "https://i.pinimg.com/originals/b2/55/47/b25547ac5cb5dfe716a9e53dd20c73d6.jpg",
        description:
          "An illustration which makes great use of bright colors and emotion"
      },
      {
        author: "Madeline Hutchinson",
        title: "I heard a star, I spoke to God",
        image:
          "https://images.squarespace-cdn.com/content/v1/56915867cbced6b74bc2682b/1506067394357-JLDYU6N5HB5KQMU3XPSB/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/I+heard+a+star+I+spoke+to+God+less+vibrant.jpg",
        url:
          "http://www.madelinehutchinsonart.com/paintings/iheardastarispoketogod",
        description: "A very reflective piece, in more ways than one"
      },
      {
        author: "David Tanner",
        title: "Home Cooking",
        image:
          "https://images.fasosites.com/19609_3600761xl.jpg?v=202104090803&cv=202104090803",
        url:
          "https://www.davidtannerfineart.com/portfolio-viewer?collection=39791#lg=1&artworkId=3600761",
        description:
          "There's something very domestic and intimate about this simple piece"
      }
    ]
  },
  orangeWithKnife: {
    noAnchor: true,
    commands: [
      "show me orange with knife",
      "show me connors favorite painting",
      "can i see orange with knife",
      "whats connors favorite painting"
    ],
    artifacts: [
      {
        title: "Orange with Knife (1982)",
        author: "Mark Adams",
        description: "*Sigh...* Here you go...",
        image:
          "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576d828cfaf34dd488b4568/1762fcf795a4b263e52fd76f2f98584a.jpg"
      }
    ]
  },
  help: {
    commands: [
      "help me",
      "what can you do",
      "how do you work",
      "docs",
      "readme",
      "what are your commands",
      "your prompts",
      "!help"
    ],
    artifacts: [helpArtifact]
  },
  helpExact: {
    commands: ["markus help"],
    artifacts: [helpArtifact]
  }
}
```

### Mention Commands

```
{
  love: {
    commands: ["love", "give love to", "send love to"],
    responses: ["I love you <%= user %>! 💙"]
  },
  hug: {
    commands: ["hug", "go hug", "give a hug to"],
    responses: ["Hugs for <%= user %>! <:Adorable:637443197940924418>"]
  },
  slap: {
    commands: ["slap", "go slap", "smack", "hit", "go smack", "go hit"],
    responses: ["<:smack:820008898902753281> <%= user %>"]
  },
  cheer: {
    commands: ["cheer up", "can you cheer up", "go cheer up"],
    responses: [
      `<%= user %> 💙
      https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134`
    ]
  }
}
```
