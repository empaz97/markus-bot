const mentionCommands = {
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
      "<%= user %> 💙 https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134"
    ]
  }
};

module.exports = mentionCommands;
