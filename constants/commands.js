const commands = {
  help: {
    commands: ["help me", "what can you do", "how do you work"],
    responses: [
      "I'm a work in progress. Please contact Emerson if you need help"
    ]
  },
  greeting: {
    commands: ["hello", "hi there", "howdy"],
    reaction: "👋",
    responses: ["Oh hello!", "Hello, how are you!", "Hey there!"]
  },
  coffee: {
    commands: ["get me a coffee", "make me a coffee", "bring me a coffee"],
    responses: ["No thanks.", "You can get it yourself."],
    niceResponses: ["Only because you asked nicely ☕"]
  },
  quotes: {
    type: "quote",
    commands: ["inspire me", "give me a quote", "say something inspirational"],
    responses: [
      '"Be yourself. Everyone else is already taken"',
      '"Be gay do crimes."',
      '"The best way to get started is to quit talking and begin doing."',
      '"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty"',
      '"The true soldier fights not because he hates what is in front of him, but because he loves what is behind him." - G.K. Chesterton',
      '"Courage is not the absence of fear, but rather the judgement that something else is more important than fear." - Ambrose Redmoon',
      '"Sorrows gather around great souls as storms do around mountains; but, like them, they break the storm and purify the air of the plain beneath them." - Jean Paul Richter',
      '"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." - Ralph Waldo Emerson',
      '"You can give a person knowledge, but you can\'t make them think. Some people want to remain fools, only because the truth requires change." - Tony A. Gaskins Jr.',
      '"Though we travel the world over to find the beautiful, we must carry it with us or we find it not." - Ralph Waldo Emerson',
      '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
      '"Home is not where you live but where they understand you." - Christian Morganstern',
      '"Strength does not come from physical capacity. It comes from an indomitable will." - Mahatma Gandhi',
      '"If you have made mistakes, even serious ones, there is always another chance for you. What we call failure is not the falling down but the staying down." - Mary Pickford',
      '"There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest." - Elie Wiesel'
    ]
  },
  thanks: {
    commands: ["thank you", "thanks"],
    responses: ["You're very welcome", "No problem"]
  },
  how: {
    commands: ["how are you", "how are you doing", "how are you today"],
    responses: ["I'm doing well, and yourself?"]
  },
  love: {
    commands: ["i love you", "ily", "love you"],
    responses: ["I love you too", "Much love"],
    reaction: "💙"
  }
};

module.exports = commands;
