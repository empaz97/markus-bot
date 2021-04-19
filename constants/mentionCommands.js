const mentionCommands = {
  love: {
    commands: ["love", "give love to", "send love to"],
    responses: ["I love you <%= user %>! 💙"]
  },
  hug: {
    commands: ["hug", "go hug", "give a hug to"],
    responses: ["Hugs for <%= user %>! <:Adorable:637443197940924418>"]
  }
};

module.exports = mentionCommands;
