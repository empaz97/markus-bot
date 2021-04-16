const textCommands = {
  greeting: {
    commands: ["hello", "hi there", "howdy", "hey", "hi"],
    reaction: "👋",
    responses: ["Oh hello!", "Hello, how are you!", "Hey there!"]
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
  hate: {
    commands: ["hate you", "i hate you"],
    responses: ["I thought we were friends"]
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
  }
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
  good: {
    commands: ["good boy"],
    responses: ["I'm not a dog, but I appreciate the sentiment"]
  }
};

module.exports = textCommands;
