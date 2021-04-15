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
  }
};
module.exports = commands;
