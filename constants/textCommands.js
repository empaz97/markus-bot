const textCommands = {
  greeting: {
    commands: ["hello", "hi there", "howdy", "hey"],
    reaction: "👋",
    responses: ["Oh hello!", "Hello, how are you!", "Hey there!"]
  },
  greetingExact: {
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
  loveFriends: {
    commands: ["do you love north", "do you love josh", "do you love kara"],
    responses: ["Of course I do!", "Sometimes..."]
  },
  lovePartners: {
    commands: ["do you love simon", "do you love connor"],
    responses: [
      "Is that even a question?",
      "They have a special place in my heart",
      "Yes. More than you know."
    ]
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
  job: {
    commands: ["what is your job", "whats your job"],
    responses: [
      "Apparently to answer questions on discord all day!",
      "I'm an advocate for android's rights"
    ]
  }
};

module.exports = textCommands;
